---
title: 'Wildcard Pages'
description: 'Using wildcard pages for dynamic urls in XM Cloud'
area: ['accelerate']
---

## Problem

You need to resolve dynamic Next.js routes to specific items in the content tree so that you do not need to create multiple static pages. This will allow dynamic urls to be created/used for content pulled from external systems, e.g. PIM, Headless Commerce etc…

## Solution

The solution is to use a Wildcard item in the content tree and then consume that in the Next.js application. The following steps will enable a route in the head application to use the wildcard item to provide the layout data for the page. Then the components or the page can handle getting the content to display on the page/components.

> For the purposes of this recipe, we will be giving the example of getting blogs stored in an external datasource. The principles used here can be transferred to getting other content types, for example: Products from Order Cloud etc…
>
> In our example, the blog content will be stored in Content Hub and accessed via a GraphQL call to Experience Edge for Content Hub.

### Create the Wildcard Item

First, decide what the route for the wildcard path will be and create a wildcard item at that location. For example, if you wanted the route `https://myxmcloudsite.com/blogs/<blog-url-slug>`, you would create the wildcard item under a blogs page item in your site (e.g. `/sitecore/content/Accelerate Sites/Accelerate Recipes/Home/Blogs`):

<img src="/images/learn/accelerate/xm-cloud/wildcard-pages1.png" alt="Screenshot showing how to add a new wildcard item"/>
<br/>

To create a wildcard item, add a page item and name it `* (/sitecore/content/Accelerate Sites/Accelerate Recipes/Home/Blogs/*)` this tells the CM that this page can map to any route at that path.

It is best practice to give the item a display name that helps the content authors know what that wildcard page is used for. We will call ours `Blog Wildcard Page (*)`.

<img src="/images/learn/accelerate/xm-cloud/wildcard-pages2.png" alt="Screenshot showing the naming of the item"/>
<br/>

The content tree should now look like this:

<img src="/images/learn/accelerate/xm-cloud/wildcard-pages3.png" alt="Screenshot showing the state of the content tree"/>
<br/>

### Setting up the presentation

Now we have a page, we can add presentation to that page and configure all the components that are used. In the next steps, we will create a custom Next.js route that will use the layout data from this wildcard item to compose and render the page. The components/route will then get the blog data based on the url and render that.

### Create the Next.js Route - custom `[[...path]].tsx`

In the starter kit solution, you are supplied with a `[[...path]].tsx` under the `./src/pages` folder. This is the main entry point for the application and serves as a dynamic route for the Next.js application with an optional catch-all segment at the root.

In that page file, `getStaticPaths` is used to get all the routes from the `sitemapFetcher` and generate all the pages for the site.

For our example, we want to create a custom route in Next.js, we can do this by adding a `blogs` under the `pages` folder. Then duplicate the original `[[...path]].tsx` and paste it in that folder. Rename the file to `[...path].tsx`.

> Dynamic Routes in Next.js
>
> The new file that we have created is another catch-all segment dynamic route, note that we have change the double square brackets to single, this is so the parent page gets picked up by the default route.
>
> For example, `https://myxmcloudsite.com/blogs` will be handled by the catch-all `./src/[[...path]].tsx`, `https://myxmcloudsite.com/blogs/my-blog-page` would be handled by `./src/blogs/[...path].tsx`.
>
> Note that this catch-all route will match any page that is a child of `/blogs`. If you want to limit to direct children only, rename `[...path].tsx` to `[path].tsx` - removing the ellipsis.
>
> ref: [Routing: Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)

#### GetStaticPaths

`getStaticPaths` is responsible for getting a list of all paths that the application is able to generate on build. The default uses the `sitemapFetcher` to get all the known routes from the content tree. For our new route there are 2 options.

1. If the list of routes that can be mapped to our wildcard is known, e.g. a set of news articles or blog pages that are stored in the CM, we can use a modified `sitemapFetcher` to get those pages and return them.
2. If the list of routes is external to the CM or it contains a large number of paths, this function can be set to return an empty array. This will mean that all the routes are generated on the first request and then cached. This also has the benefit of speeding up the build time.

**getStaticPaths Example**

```typescript
export const getStaticPaths: GetStaticPaths = async () => {
  let paths: StaticPath[] = [];
  let fallback: boolean | 'blocking' = 'blocking';
  paths = [];
  fallback = 'blocking';
  return {
    paths,
    fallback,
  };
};
```

<br/><br/>

#### GetStaticProps

`getStaticProps` takes the route passed in from the request or the results of `getStaticPaths` and gets the matching content and layout for the page, or returns a 404 if the content is not found for the route.

In the out of the box implementation, the route is passed to the `sitecorePagePropsFactory` where a query is sent to experience edge to get the layout response for the route. For a wildcard page, this will not work. We need to change the context to get the known wildcard route path and then get the dynamic content based on the route path.

Here is an example of how do do this:

**getStaticProps**

```typescript
export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    context.params.requestPath = context.params.path;
    context.params.path = [`blogs/,-w-,`];
  }
  const props = await sitecorePagePropsFactory.create(context);

  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
    notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};
```

<br/><br/>
Things to note:

1. We are storing the original request path in a new property on the `context.params` object so that we can use that path later to get any dynamic data.

2. When a wildcard item is published, it is given the name `,-w-,` as the path url.

There are a couple of things that work to our advantage here:
-Every request to this route will get the same page item from XM Cloud, this means that we can cache the response of the sitecorePagePropsFactory.create call if we want to.
-Because each call is to the same page item, Experience Edge will cache the first request and then serve every other request from the cache until a publish happens. This will help prevent exceeding the 80 req/s rate limit.

#### Multisite Middleware

> This section only applies if you have the `nextjs-multisite` module installed to your application.

When using the multisite application, we need to make sure that the middleware does not override the route, so the root path needs to be added to the `matcher` for the middleware config found in the root of the application. It is important to note, this will prevent _all_ middleware running on these paths, so if you need to add dynamic redirects later, a different solution will need to be found.

**middleware.ts**

```typescript
export const config = {
  /*
   * Match all paths except for:
   * 1. /api routes
   * 2. /_next (Next.js internals)
   * 3. /sitecore/api (Sitecore API routes)
   * 4. /- (Sitecore media)
   * 5. all root files inside /public (e.g. /favicon.ico)
   */
  matcher: ['/', '/((?!api/|_next/|blogs/|sitecore/api/|-/|[\\w-]+\\.\\w+).*)'],
};
```

<br/><br/>

#### Getting the Content

There are 2 main options to get the content for the wildcard page:

#### Page Level Data Fetching

If multiple components on the page need to use the dynamic data, then it is best to get the data at the page level in the new `[...path].tsx` file we have created. We can simply do this in the `getStaticProps` method of the page file and add the results to the props.

The example below assumes a service to get the blog data from Content Hub based on the name of the blog. Now your components can use that data on the main props object.

**Page Level Data Fetching**

```typescript
export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    context.params.requestPath = context.params.path;
    context.params.path = [`blogs/,-w-,`];
  }
  const props = await sitecorePagePropsFactory.create(context);

  let blogPath = '';
  const path = context?.params?.requestPath;
  if (path !== undefined) {
    if (typeof path !== 'string') {
      blogPath = path.pop() ?? '';
    } else {
      blogPath = path;
    }
  }

  // Assumes we have a service that calls CH GraphQL to get the data
  // based on the blog name
  const blogData = await externalDataFactory.get(blogPath);
  props.blogData = blogData;

  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
    notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};
```

<br/><br/>

#### Component Level Data Fetching

As component level data fetching has its own recipe [Getting Component Specifc Data](https://sitecore.atlassian.net/wiki/spaces/FM1/pages/4459168071), we will just focus on how to get the path segment that we earlier stored in `context.params.requestPath`.

It is important to note that when you are fetching the data in the component, only that component gets the content, so if you need to use this in multiple components, you may want to use page level data fetching or a react context.

Here is an example:

**Component Level Data Fetching**

```typescript
let blogPath = '';
const path = context?.params?.requestPath;
if (path !== undefined) {
  if (typeof path !== 'string') {
    blogPath = path.pop() ?? '';
  } else {
    blogPath = path;
  }
}
```

## Related Recipes

<Row columns={2}>
  <Link title="Getting Component Specifc Data" link="/learn/accelerate/xm-cloud/implementation/external-data-integration/getting-component-specific-data" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Using WildCard Items in Sitecore XM Cloud" link="https://www.paulbonilladev.com/blog/using_wildcard_items" />
  <Link title="Using Wildcard Items In Sitecore XM Cloud With A Headless NextJs Front-end" link="https://www.getfishtank.com/blog/using-wildcard-items-in-sitecore-xm-cloud" />
  <Link title="Create a dynamic URL with a wildcard item - Sitecore Documentation" link="https://doc.sitecore.com/xp/en/users/103/sitecore-experience-platform/create-a-dynamic-url-with-a-wildcard-item.html" />
  <Link title="Routing: Dynamic Routes" link="https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes" />
</Row>

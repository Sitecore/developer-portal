---
title: 'Working with Experience Edge Rate Limits and Caching'
description: 'Configuration of limits and caching to improve performance'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2024-04-23'
audience: ['Architect','Product Owner', 'Technical Implementer']
---

## Context

The content delivery API on Experience Edge has a fair use rate limit of 80 uncached requests per second. If every user request hits the content delivery API for content, this limit will be very easily reached.

- How can we build our application to mitigate this rate limit, but still ensure that our users get up-to-date content when it is changed.
- How can we have sections of our site where content is updated regularly?
- How do we cope with a very large site and cache clears, for example, if after a deployment my site has 10,000 pages and high traffic, so there will likely be a high volume of traffic hitting the content delivery API.

Keep in mind that any functionality that depends on incremental updates, must have [Snapshot Publishing](https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html) configured in XM Cloud.



## Execution

### SSG vs SSR

The first step to mitigate this rate limit is to make sure that your web application is configured to use Static Site Generation (SSG) and not Server Side Rendering (SSR). When SSG is enabled, the page content is generated on build and stored in the host cache. When a request is made to that page, the host serves the cached version and no request is made to the content delivery API directly.

By default, the XMC Foundation Head starter kit is configured to use SSG. To make sure you are using SSG, check your `[[...path]].tsx` file. In there you should have 2 functions:

- `getStaticPaths`
- `getStaticProps`

These 2 functions handle getting all the routes to be generated on build (`getStaticPaths`) and then actually generating the page (`getStaticProps).

### Incremental Static Regeneration

Once the site is configured to use SSG, we can use Incremental Static Regeneration (ISR) to dynamically update content as it is published without requiring a new build and deployment,

To configure ISR for a route (and in this case, all routes in the web application), return a revalidate property in `getStaticProps`.

```
 return {
    props: {
      // ...
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }

```

<br /><br />

The revalidate property should be set to the longest acceptable or most comfortable time period for content updates to show up for end users on the site; another way of looking at this value is “how long should stale content show up for end users of the site.” There may be multiple considerations about the “lifetime” of content that impact other parts of the organization outside of content authors, such as legal requirements and statements.


### Streamline Your Builds

One side effect of Static Site Generation is that the time to generate all the pages on your site will increase the time it takes to build the Next.js application. By default, the `GraphqlSitemapServicePlugin` fetches all pages in your site. If you use the multisite plugin, this will fetch all pages in all sites in your instance.

To improve your build performance, you can [customize the build time static paths](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/customize-build-time-static-paths-in-jss-next-js-apps.html). The linked documentation will take you through the required steps to achieve this.

Through a combination of `includedPaths` and `excludedPaths` you can make sure that only the required pages are generated on build.

These can include, but are not limited to:

- Home Page
- First-level navigation pages (optional)
- Top 10 pages with the highest traffic on the site that is not covered already

There is no set rule, the existing site analytics should be used to determine which pages would have the most impact by being statically generated on build. You can completely disable the SSG fetch for the fastest build times.

Any page that is not generated at build time will be generated on the first request to that page.

### Limiting Multi-Threaded Builds

If there are still a lot of pages to generate during your build process and the rate limit is being hit, it is possible to throttle the build process by using the experimental workerThreads and CPU config in your next.config.js like this:

```
const nextConfig = {
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 1
  },
};
```

<br /><br />

This will increase overall build time but can reduce the amount of concurrent requests being made to Experience Edge.

### Web Application Cache Tuning

To reduce the number of requests to Experience Edge, you can tune the web application cache in the following areas:

- [Dictionary service](https://github.com/sitecorelabs/xmcloud-foundation-head/blob/main/headapps/nextjs-starter/src/lib/dictionary-service-factory.ts#L20)
  - The default `cacheTimeout` is 60 seconds, you can increase this to reduce the number of requests to Experience Edge.
  - Increase `pageSize` (10 default) - this value can go up to 1000 depending on how many dictionary items you have
- [Personalize middleware](https://github.com/sitecorelabs/xmcloud-foundation-head/blob/main/headapps/nextjs-starter/src/lib/middleware/plugins/personalize.ts#L24)
  - Increase the default `cacheTimeout` (10s default)
  - If your client is not using Embedded Personalization, disable or remove the middleware
- [Redirects middleware](https://github.com/sitecorelabs/xmcloud-foundation-head/blob/main/headapps/nextjs-starter/src/lib/middleware/plugins/redirects.ts#L12)
  - Increase the default `cacheTimeout` (10s default)
  - If you are not using (SXA) redirects, you can disable or remove the middleware

### Enabling LayoutService/Dictionary Retries

The JSS SDK and StarterKit for XM Cloud come with a retry mechanism by default to handle Experience Edge rate limit issues that are encountered after all the prior steps have been taken. This can happen when a lot of pages are published or the site is under a heavy load when pages are revalidated and generated.

To enable the retry strategy, follow the instructions here: [Enable Retries for Requests to the XM Cloud Experience Edge GraphQL Endpoint](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/enable-retries-for-requests-to-the-xm-cloud-experience-edge-graphql-endpoint.html).

When using the default strategy, set the environment variable `GRAPH_QL_SERVICE_RETRIES` to the number of times you want the strategy to retry before an error is returned. This strategy has a default back-off factor of 2. This means that every retry increases the delay before retrying by 2 seconds.

### Retries on Component Level Data Fetching

When using [Component Level Data Fetching](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/component-level-data-fetching-in-jss-next-js-apps.html), it is possible to use the JSS `GraphQLRequestClient` to fetch the data, this client can implement the same retry strategy as the Layout and Dictionary Services. Here is a code sample of how to use the client:

```
export const getStaticProps: GetStaticComponentProps = async () => {
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint);
  const result = await graphQLClient.request(`query {
item(path:"/sitecore/content/<SiteCollection>/<Site>/Home", language: "en") {
    name
    displayName
    fields {
      name
      jsonValue
    }
  }
}
  `);
  return result;
};
```

## Insights

### Wildcards

When there is a lot of external content that will generate many pages in the web application, good use of wildcard pages can help to reduce the load on Experience Edge. When a single wildcard page item is used to control the presentation for all external content pages, for example, a Product Detail page, this means that requests to any product detail page will use the cached layout response for the wildcard page and this does not count against the rate limit.

## Related Recipes

<Row colums={2}>
    <Link title="Getting Component Specific Data" link="/learn/accelerate/xm-cloud/implementation/external-data-integration/getting-component-specific-data" />
    <Link title="Using Wildcard Pages" link="/learn/accelerate/xm-cloud/implementation/information-architecture/wildcard-pages" />
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Customize build-time static paths in Next.js apps" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/customize-build-time-static-paths-in-jss-next-js-apps.html" />
<Link title="Enable retries for requests to the XM Cloud Experience Edge GraphQL endpoint" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/enable-retries-for-requests-to-the-xm-cloud-experience-edge-graphql-endpoint.html" />
<Link title="Component-level data fetching in JSS Next.js apps" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/component-level-data-fetching-in-jss-next-js-apps.html" />
</Row>

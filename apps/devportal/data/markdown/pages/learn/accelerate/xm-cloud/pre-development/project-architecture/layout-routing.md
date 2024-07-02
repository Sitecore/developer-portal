---
title: 'Layout Routing | Sitecore Accelerate for Partners'
description: 'How to setup layout routing in XM CLoud to reduce Information Architecture complexity and improve performance'
area: ['accelerate']
hasSubPageNav: false
hasInPageNav: true
---

## Problem

The way a page in XP or XM is componsed has changed over time. Historically, all components on a page were stored in the presentation details for that page, This meant that common components, like headers, navigation, footers, etc... had to be added to each page. To make this easier, presentation was often applied to the Standard Values of the template. This reduced the amount of components on a page and allowed a single place to change common components, mostly.

This solution had a few drawbacks, the most obvious being that presentation inheritance did not always work as expected.

When Sitecore Experience Accelerator was released, this problem was solved by introducing Page and Partial Desig:w
ns. This removed the problem of presentation inheritance, and allowed users to create complex page sections (partial designs) that could be reused accross multiple page templates. At run time, the render pipeline merges the presentation of the partial designs. This works well when the composition of the page happens at runtime.

In XM Cloud, a new problem exists. The time a page is rendered doesn't not happen at runtime, it happens when the page is published. Because of this, the publish pipelines need to run the layout service to generate the response to be published to Experience Edge. The response is cached at the edge. This means that Experience Edge can return the layout response very quickly to the web application.

But this also means that any time we make a change to a datasource item that is used on a page, we need to publish the page to Experience Edge. If the datasource item is included in the header or footer partial design, XM Cloud needs to publish _all_ pages that the partial design is used on. This can have a negative impact on publish times if you need to update content stored on the header or footer.

## Solution

We can solve this problem by changing how the layout for common page sections is composed. Instead of having a single layout for the page that includes the header and footer, we can create special routes for each common section and then use the web application to compose the page layout.

### Setting up the layouts

First, we need to create routes for each of the common page sections. We can do this by creating new items in the content tree. We will need to easily identify this routes so they can be excluded from the JSS sitemap fetcher, so we will create a folder under the home page and call it `_layout`

![Layout folder](/images/learn/accelerate/xm-cloud/layout-folder.png)

Next, we create a page item for the header, and anotehr for the footer. We will call these `header` and `footer` respectively.

These 2 page items will effectively replace the need for the `header` and `footer` partial designs. You can add the header and footer partial designs to specific page designs and set those designs for the created pages, or simply add the components for the header or footer directly to the page.

![Add components to the header](/images/learn/accelerate/xm-cloud/add-components-to-header.png)

### Consuming the Routes

Now that we have the layouts for the header and footer routers, we need to update the web application to consume these layouts and add the components to the page.

To do this, we need to update the `getStaticProps` method in the `pages/[[...path]].tsx` file. First, let's update the `SitecorePageProps` type to include the new layouts. You can find this in `src/lib/page-props.ts`. We will add properties for `headerLayoutData` and `footerLayoutData`:

```typescript
export type SitecorePageProps = {
    site: SiteInfo;
    locale: string;
    dictionary: DictionaryPhrases;
    notFound: boolean;
    layoutData: LayoutData;
    headerLayoutData: LayoutData;
    footerLayoutData: LayoutData;
};
```
<br />
Now, let's update `getStaticProps` to get the layouts for the header and footer. We can use the existing `context` object and hard code the path to the header and footer layouts:

```typescript
    const header = await sitecorePagePropsFactory.create({
        ...context,
        params: {
            ...context.params,
            path: '/_layout/header',
        },
    });

    props.headerLayoutData = header.layoutData;
```
<br />
We can do the same for the footer:

```typescript
    const footer = await sitecorePagePropsFactory.create({
        ...context,
        params: {
            ...context.params,
            path: '/_layout/footer',
        },
    });
    props.footerLayoutData = footer.layoutData;
```
<br />

Here is the full `getStaticProps` method:

```typescript
export const getStaticProps: GetStaticProps = async (context) => {
    const props = await sitecorePagePropsFactory.create(context);

    // Call the header
    const header = await sitecorePagePropsFactory.create({
        ...context,
        params: {
            ...context.params,
            path: '/_layout/header',
        },
    });

    props.headerLayoutData = header.layoutData;

    // Call the footer
    const footer = await sitecorePagePropsFactory.create({
        ...context,
        params: {
            ...context.params,
            path: '/_layout/footer',
        },
    });
    props.footerLayoutData = footer.layoutData;

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
<br />
Now we have the layouts for the header and footer, we need to update the `Layout.tsx` to add in the layouts in the right places:

First, lets add the `headerLayoutData` and `footerLayoutData` into the props:
```typescript
interface LayoutProps {
    layoutData: LayoutServiceData;
    headerLayoutData: LayoutServiceData;
    footerLayoutData: LayoutServiceData;
    headLinks: HTMLLink[];
}
```
<br />
Next, we need to update the `Layout.tsx` to add in the header and footer layouts.

```typescript
const Layout = ({
    layoutData,
    headerLayoutData,
    footerLayoutData,
    headLinks
}: LayoutProps): JSX.Element => {
    const { route } = layoutData.sitecore;
    const { route: headerRoute } = headerLayoutData.sitecore;
    const { route: footerRoute } = footerLayoutData.sitecore;
    const fields = route?.fields as RouteFields;

    return (
        <>
            <Scripts />
            <Head>
                <title>{fields?.Title?.value?.toString() || 'Page'}</title>
                <link rel="icon" href={`${publicUrl}/favicon.ico`} />
                {headLinks.map((headLink) => (
                    <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
                ))}
            </Head>

            {/* root placeholder for the app, which we add components to using route data */}
            <header>
                <div id="header"> 
                    {headerRoute && <Placeholder name="headless-header" rendering={headerRoute} />}
                    {route && <Placeholder name="headless-header" rendering={route} />}
                </div>
            </header>
            <main>
                <div id="content">
                    {route && <Placeholder name="headless-main" rendering={route} />}
                </div>
            </main>
            <footer>
                <div id="footer">
                    {footerRoute && <Placeholder name="headless-footer" rendering={footerRoute} />}
                    {route && <Placeholder name="headless-footer" rendering={route} />}
                </div>
            </footer>
        </>
    );
};
```
<br />
You can see that in the `<header>` and `<footer>` elemebts, we are adding an extra placeholder and pasing in the `headerRoute` and `footerRoute` from the layout data. This will make sure that the components added on that route are on the page. Also, we re-use the same placeholder and still pass in the main pages layout route data, this means that the `header` and `footer` placeholders can still have components added at the page level too.

## Discussion

### Rate limits

With this change, we are not hitting the Experience Edge API 3 times for each page. This will make it slower to generate the page, but should not affect rate limits negatively. The header and footer layout responses will be the same call for every page, this means that the call will be cached after the first request and then when each page is generated it would be returning the cached data for that route. Cached queries don't count toward the rate limit on Experience Edge, so this shouldn't have an impact.

### Performance

Now that we are hitting the Experience Edge API 3 times per page, there is a potential performance impact. But because the header and footer layouts are the same per page, we can cache the responses in the web application for a short time, this would improve build and generation performance when a lot of pages are generated at the same time.

### Multiple Headers and Footers for a Site

The approach above works well when every page has the same header and footer acrodd the entire site, but what if you have a site with multiple headers and footers? 

In those cases, you will need to way to identify which header and/or footer is used on a specific page. This could be done by page template type, or by adding a field to the page item that identifies the header and footer layout routes. There may also be a way to use page designs and partial designs to identify which layout route to use for headers and footers.

## Next Steps

This recipe highlights a new approach to page composition in XM Cloud. It should be considered a starting point for your project, you should validate the approach and adjust it to fit the needs of your project.

---
title: 'Optimizing Data Fetching for Next.js Applications'
description: 'Optimizing data fetching in Next.js applications within XM Cloud. '
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect','Technical Implementers','Solution Architects']
---

## Context
In XM Cloud applications built with Next.js, performance can be impacted by the data fetching strategy utilized. Inappropriate data fetching methods can lead to slow page loads, excessive server load, and poor user experience. Many developers default to client-side fetching without considering the performance implications, or use server-side rendering when static generation would be more efficient.

## Execution
Next.js offers multiple data fetching methods, each with distinct performance characteristics. Selecting the right method for your XM Cloud content is critical.

### Static Site Generation (SSG) with Incremental Static Regeneration (ISR)
SSG with Incremental Static Regeneration (ISR) is ideal for scenarios where content changes infrequently and can be pre-rendered at build time. It works well for marketing pages, product listings, and general content pages where the information remains largely static. Since these pages do not require real-time personalization and present the same content to all users, SSG ensures optimal performance and scalability. Additionally, for websites where SEO is a priority, pre-rendering pages ahead of time improves search engine indexing and ranking, making it a powerful approach for delivering fast, highly optimized experiences.

Setting this up has 2 clear impacts - 
| Performance | SEO |
| - | - |
| <ul><li>Pages load instantly from CDN after initial generation</li><li>Better Core Web Vitals scores compared to SSR</li><li>Reduced server load through caching</li><li>Automatic background regeneration ensures content freshness</li></ul> | <ul><li>Delivers complete HTML to search engine crawlers</li><li>Provides fast Time to First Byte (TTFB), a positive SEO signal</li><li>Ensures consistent content for indexing</li><li>Maintains optimal Core Web Vitals scores, which directly affect search rankings</li></ul> |

Default `/pages/[[...path]].tsx` in our foundation kit:

```typescript
import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import NotFound from 'src/NotFound';
import Layout from 'src/Layout';
import {
  SitecoreContext,
  ComponentPropsContext,
  StaticPath,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { componentBuilder } from 'temp/componentBuilder';
import { sitemapFetcher } from 'lib/sitemap-fetcher';
const SitecorePage = ({
  notFound,
  componentProps,
  layoutData,
  headLinks,
}: SitecorePageProps): JSX.Element => {
  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);
  if (notFound || !layoutData.sitecore.route) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <NotFound />;
  }
  const isEditing = layoutData.sitecore.context.pageEditing;
  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext
        componentFactory={componentBuilder.getComponentFactory({ isEditing })}
        layoutData={layoutData}
      >
        <Layout layoutData={layoutData} headLinks={headLinks} />
      </SitecoreContext>
    </ComponentPropsContext>
  );
};
// This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).
export const getStaticPaths: GetStaticPaths = async (context) => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request (development mode in this example).
  // Alternatively, the entire sitemap could be pre-rendered
  // ahead of time (non-development mode in this example).
  // See https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
  let paths: StaticPath[] = [];
  let fallback: boolean | 'blocking' = 'blocking';
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.DISABLE_SSG_FETCH?.toLowerCase() !== 'true'
  ) {
    try {
      // Note: Next.js runs export in production mode
      paths = await sitemapFetcher.fetch(context);
    } catch (error) {
      console.log('Error occurred while fetching static paths');
      console.log(error);
    }
    fallback = process.env.EXPORT_MODE ? false : fallback;
  }
  return {
    paths,
    fallback,
  };
};
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps: GetStaticProps = async (context) => {
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
export default SitecorePage;
```
Key Performance Optimizations
-  The `revalidate: 5` setting enables Incremental Static Regeneration (ISR), which serves cached pages while regenerating them in the background. This provides the page performance of static generation with the content freshness of server-side rendering. Teams will need to appropriate set this revalidate value.
-  Using `fallback: 'blocking'` means that when a page is requested that hasn't been generated yet, the user waits for the page to be rendered on the server once before being served. This is preferred for content where SEO is important.
- Conditional Path Generation allows for parts of site to be pre-generated, while other parts will be server-side rendered. Note: this is only for production, not in development.
- Using `ComponentPropsContext` to efficiently pass props to deeply nested components without prop drilling.

### Server-Side Rendering (SSR) When Needed

Server-Side Rendering (SSR) in XM Cloud is best suited for scenarios that require user-specific content. It is essential for pages that rely on real-time data updates, ensuring users always see the latest information. SSR is also necessary when request-time details, such as cookies or headers, influence the page's content. Additionally, it provides access to the Sitecore Context, enabling session tracking and user-specific personalization capabilities. For protected content, authentication checks can be performed on each request, ensuring only authorized users can access sensitive information. This makes SSR a powerful approach for delivering dynamic, personalized, and secure experiences.

Setting this up has 2 clear impacts - 
| Performance | SEO |
| - | - |
| <ul><li>SSR adds server processing time to each request</li><li>Consider adding caching headers for browsers and CDNs</li><li>For pages with high traffic but infrequent content changes, consider ISR instead</li></ul> | <ul><li>Provides complete server-rendered HTML to search engines</li><li>Works well for personalized content while maintaining SEO benefits</li><li>May have slightly higher TTFB compared to SSG</li><li>Requires careful performance optimization to maintain good Core Web Vitals</li><li>For optimal SEO while using SSR, consider setting appropriate caching headers and optimise server response times. See [On-page SEO Optimization](/learn/accelerate/xm-cloud/optimization/seo-web-optimization) recipe for further information.</li></ul> |


Image 1 Here a `[slug].tsx` file will ensure any pages added under `livedata/` are served through this page.
Image 2 The above configuration would ensure “livedata” will be ignored in the middleware and would instead be served by the `[[..path]].tsx` file.

```typescript
// pages/live-data/[[...path]].tsx
// Any page you can create under “home -> livedata -> ” would be served through SSR.
// Implement the SSR
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import NotFound from 'src/NotFound';
import Layout from 'src/Layout';
import {
  SitecoreContext,
  ComponentPropsContext,
  EditingComponentPlaceholder,
  RenderingType
} from '@sitecore-jss/sitecore-jss-nextjs';
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { componentBuilder } from 'temp/componentBuilder';

const SitecorePage = ({ notFound, componentProps, layoutData, headLinks }: SitecorePageProps) => {
    console.log("Inside LiveData => SitecorePage", layoutData);
    useEffect(() => {
        handleEditorFastRefresh();
    }, [])

    if(notFound || !layoutData?.sitecore?.route){
        return <NotFound></NotFound>
    }

    const isEditing = layoutData.sitecore.context.pageEditing;
    const isComponentRendering = layoutData.sitecore.context.renderingType === RenderingType.Component;

    return (
        <ComponentPropsContext value={componentProps}>
            <SitecoreContext 
            componentFactory={componentBuilder.getComponentFactory({ isEditing })}
            layoutData={layoutData}>
                {isComponentRendering ? (
                    <EditingComponentPlaceholder rendering={layoutData?.sitecore?.route} />
                    ) : (
                    <Layout layoutData={layoutData} headLinks={headLinks} />
                    )}
            </SitecoreContext>
        </ComponentPropsContext>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log("Inside server side props: LiveData");
    if (context.params) context.params.path = context.resolvedUrl;
    const props = await sitecorePagePropsFactory.create(context);
    return {
        props,
        notFound: props.notFound
    }
}

export default SitecorePage;
```

## Insights
In XM Cloud applications, you can optimize performance by fetching data at the component level rather than only at the page level. This approach provides several advantages:
- More granular data loading
- Improved code organization
- Better component reusability
- Potential performance improvements through targeted data fetching


## Related Recipes

<Row columns={2}>
  <Link title="On-page SEO Optimization" link="/learn/accelerate/xm-cloud/optimization/seo-web-optimization" />
 
</Row>

## Related Documentation

<Row columns={2}>

</Row>






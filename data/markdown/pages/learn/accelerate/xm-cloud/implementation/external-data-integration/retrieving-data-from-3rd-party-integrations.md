---
title: 'Retrieving Data from 3rd Party Integrations'
description: 'Approaching integrations of data from other applications'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-01-31'
---

## Context
When planning a strategy for integration in XM Cloud, it's crucial to categorize each integration based on its fit within the new platform. Most of the time, data from other applications is required to be integrated in the website without actually pushing this data in XM Cloud. Instead this moves to the head-application .

We might have a requirement where data is dynamically loaded from Salesforce - example a “members” listing page with details about their membership. This is reasonably frequently changing data but to call this from Salesforce in real-time would be expensive in terms of latency and not judicious with API limits.  So how should we approach this?

Outlined with these approaches detailed below, there are numerous tools outside of the XM Cloud toolset, that can optimize your implementation when it comes to integration, with newer features being release. Updates such as Vercel's Data Caching can be explored to get the response from one of the endpoints and edge caching.

## Execution
Overall, we would look at the approach in the same way as we described in [Custom Editing UX for 3rd Party Integrations](/learn/accelerate/xm-cloud/implementation/external-data-integration/custom-editing-ux-3rd-party-integrations) recipe. But, different use cases might have different solutions, that require considerations before committing to your path. 

### <strong>Decouple Frontend and Backend Data Fetching</strong>

With Sitecore XM Cloud and modern frameworks like Next.js, you can use [server-side rendering (SSR) or static site generation (SSG)](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/prerendering-methods-and-data-fetching-strategies-in-jss-next-js-apps.html) to control how data is fetched and cached effectively. SSG also allows for [Incremental Static Regeneration (ISR)](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/prerendering-methods-and-data-fetching-strategies-in-jss-next-js-apps.html#incremental-static-regeneration-isr) that allows us to fetch data at build time or periodically regenerate static pages for frequently changing data.

This would be an approach to discuss for the Member list - where this content could regenerate every 24 hours (or whatever time period we want to setup). This would reduce API calls and improves performance as pages are served statically.

If we want near real-time updates, we can go down the SSR to fetch data from Salesforce during page requests but use caching layers to minimize latency. 

Publishing and cache invalidation needs to be considered in both; more detail can be found in the [Publishing to Experience Edge](/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge) recipe. Further information on Experience Edge rates can be found in the [Rate Limits and Caching](https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching) recipe.

### <strong>Component level data</strong>

From a front-end point of view, there is also the possibility of component level data fetching for the integration. This does need to consider the use case required; more detail can be found [Component Level Data Fetching](/learn/accelerate/xm-cloud/implementation/external-data-integration/getting-component-specific-data) recipe.

### <strong>Leverage Edge Middleware with Caching</strong>

Rendering Hosts such as Vercel and Netlify implement edge caching strategies through the middleware – we would look at the possibility of:

<ul>
  <li>Cache Salesforce API responses at the edge to serve users faster without hitting Salesforce for every request.</li>
  <li>Use headers like [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) and [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) to manage freshness efficiently.</li>
</ul>

[On-demand ISR](https://vercel.com/docs/incremental-static-regeneration) allows you to revalidate specific pages only when data changes. Webhooks from Salesforce can be integrated to trigger ISR revalidations, and only update this when it’s updated in Salesforce.

### <strong>Implement Progressive Loading on Frontend</strong>

Outside of the Sitecore Search considerations, if some parts of the page (e.g., filters or long lists) need real-time updates, we can look at making sure that only parts of the page retrieve real-time updated using GraphQL, combined with a local caching mechanism. Not all content requires to be loaded at the same time as the rest of the layout.

### <strong>Monitor API Usage</strong>

Irrespective of the integration approach, we would still want to make sure that rate-limiting and error handling for any API requests are in place so that they can be optimized.
<br/>

## Insights
There are other things that need to considered as part of the process here, especially if searching is a key requirements. A use case such as events listing, where [Sitecore Search](/learn/accelerate/xm-cloud/implementation/sitecore-search) would be listing the events, we would be looking at crawling data into Search to surface on the site, on a schedule or via an incremental push APIs, to update the data.

If we want near real-time updates, we can go down the SSR to fetch data from Salesforce during page requests but use caching layers to minimize latency. For example, the event agenda could use SSR with a short cache TTL (e.g., 5 minutes).

The typical requests involves:
<ol>
  <li>A user requests a page from the server.</li>
  <li>The server fetches data from Salesforce.</li>
  <li>The server renders the HTML with the fetched data.</li>
  <li>The server returns the fully rendered HTML to the browser.</li>
</ol>

There’s always challenges on Latency, API limits and increased traffic can result t in performance bottlenecks due to frequent API calls.

Caching layers store frequently accessed or precomputed data to reduce reliance on Salesforce’s real-time API calls. Here are two primary caching strategies:

| Application Cache | Edge Cache |
| ----------- | ----------- |
| Storing frequently requested data that doesn’t change often. When a page is requested, check if the required data exists in the cache. If found, use the cached data, if not, fetch data from Salesforce, store it in the cache, and then use it. <br/><br/> Make sure to define a Time-to-Live (TTL) for cached data to ensure periodic refresh. | Cache entire SSR-rendered pages at the Content Delivery Network (CDN) level for fast delivery. Cache the fully rendered HTML page at the edge, Serve the cached page for subsequent requests within the TTL and invalidate the cache when underlying data changes. |

You can then choose the appropriate data-fetching approach based on your caching strategy. By combining these caching strategies with data-fetching methods, you can reduce latency and improve scalability.

Outlined with these approaches, there are numerous tools outside of the XM Cloud toolset, that can optimize your implementation when it comes to integration, with newer features being release. Updates such as [Vercel's Data Caching](https://vercel.com/docs/infrastructure/data-cache) can be explored to get the response from one of the endpoints and edge caching.

## Related Recipes

<Row columns={2}>
  <Link title="Publishing to Experience Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
  <Link title="Custom Editing UX for 3rd Party Integrations" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/external-data-integration/custom-editing-ux-3rd-party-integrations" />
  <Link title="Getting Component Specific Data" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/external-data-integration/getting-component-specific-data" />
  <Link title="Rate Limits and Caching" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Prerendering methods and data fetching strategies" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/prerendering-methods-and-data-fetching-strategies-in-jss-next-js-apps.html" />
    <Link title="Integrated GraphQL in JSS apps" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/integrated-graphql-in-jss-apps.html" />
</Row>


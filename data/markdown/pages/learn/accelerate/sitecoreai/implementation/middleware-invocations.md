---
title: 'Middleware Invocations'
description: 'What Middleware do we have running and how can we optimize usage on XM Cloud.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect','Technical Implementer']
---

## Context
In XM Cloud and Next.js, middleware is used to handle various tasks before a request is completed, similar to how pipelines work in traditional Sitecore XP/XM. When using Next.js as the frontend framework for XM Cloud middleware can be particularly powerful for pre-processing incoming client requests and modifying them according to specific rules. 

However, if not used carefully this can lead to an increased number of middleware invocations and consumption of monthly entitlements. Middleware can also introduce additional processing time for each request. If not optimized, this can lead to slower response times and affect the overall performance of your application.

## Execution
In this recipe we consider the importance of disabling unused Middleware features and reducing the impact of link prefetching on middleware invocations. Any custom middleware should be developed with caution with asynchronous code being avoided if possible to reduce latency. 


The [XM Cloud Foundation Head Starter Kit](https://github.com/sitecorelabs/xmcloud-foundation-head-dev) for Next.js applications has the following middleware plugins:

- Redirects - Headless SXA (Sitecore Experience Accelerator) provides functionality for [content managed redirects](https://doc.sitecore.com/xmc/en/users/xm-cloud/redirect-search-traffic.html#redirect-a-url), which uses the Redirect Middleware to check if there is a redirect defined for the requested URL.
- Multisite - The [Next.js Multisite](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/the-next-js-multisite-add-on.html) add-on uses the Multisite Middleware to serve the correct site based on the hostname.
- Personalize - The Personalize Middleware enables [Page personalization and component A/B/n testing](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/page-personalization-and-component-a-b-n-testing.html).

The following optimizations can help reduce invocations and avoid customer overages.

### Middleware matcher

Consider if Middleware needs to be run every request or if there is potential for to change the negative Middleware matcher in `headapps/nextjs-starter/src/middleware.ts` to run only on more specific routes.

``` typescript
  matcher: [
    '/',
    '/((?!api/|_next/|feaas-render|healthz|sitecore/api/|-/|favicon.ico|sc_logo.svg).*)',
  ],
```

### Middleware matcher
If content managed redirects can be avoided then the redirect Middleware plugin can be removed. See the [Redirect](/learn/accelerate/xm-cloud/implementation/information-architecture/redirect) recipe for an in-depth explanation and the [Vercel optimization guide](https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss#redirect-middleware-plugin) for additional recommendations.

### Multisite Middleware
Multisite Plugin can cause a significant number of middleware invocations. This can be particularly problematic for customers with multiple sites, leading to increased costs.

In the future the multisite plugin may become optional and not setup by default. Customers can disable the plugin if they do not need it, reducing the number of middleware invocations and associated costs. A good approach here would be to create separate projects for each site instead of using the multisite plugin. This approach would provide more control over each site and reduce costs, as the costs would be shared among projects rather than being concentrated in a single multisite project.

### Personalize Middleware

XM Cloud comes with inbuilt page personalization and component A/B/n testing. These features are very powerful but if you are not planning on using them then there is potential to remove the plugin or to restrict the paths in use. We would recommend investigating other optimizations first as disabling this plugin will remove a significant amount of features and functionality. 

### Link prefetching options

Prefetching links can cause multiple Middleware invocations, leading to increased costs. From JSS 22.5.1 we have provided more prefetching options, review the [XM Cloud Changelog](https://developers.sitecore.com/changelog/xm-cloud/28022025/more-prefetching-options-and-better-middleware-extensibility-with-jss-22.5.1) entry.

The prefetching options can be set on JSS Next.js RichText component by setting the prefetchLinks links property or on the Link component by setting the prefetch property. Note that for the RichText component you have three options true, false and hover.

```typescript
<JssRichText field={props.fields.Text} prefetchLinks={false} />
<JssRichText field={props.fields.Text} prefetchLinks={true} />
<JssRichText field={props.fields.Text} prefetchLinks="hover" />
```

For the link component you only have true and false. True will prefetch when entering the viewport and false will prefetch on hover.

```typescript
<JssLink field={props.fields.PromoLink} prefetch={false} />
<JssLink field={props.fields.PromoLink} prefetch={true} />
```

You could also create a wrapper around each of these JSS components to help centrally manage prefetching options. For example, wrapping the link component could look like:-

```typescript
import { Link as JssLink, LinkProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { FC, ReactNode } from 'react';

interface WrappedLinkProps extends LinkProps {
  children?: ReactNode; // Make children optional
}

const WrappedLink: FC<WrappedLinkProps> = ({ children, ...props }) => {
  return (
    <JssLink prefetch={false} {...props}>
      {children}
    </JssLink>
  );
};

export default WrappedLink;
```
Example of how to implement in your component, with your relevant field name.
```typescript
<WrappedLink field={props.fields.Link} />
};
```


## Insights
The code that defines the middleware function for the XM Cloud Next.js application is available at `/headapps/nextjs-starter/src/middleware.ts`. This is where the Middleware matcher is configured to determine which paths the Middleware should apply to. 

<figure><img src="/images/learn/accelerate/xm-cloud/middleware-plugins.png" alt="Middleware Plugins"/><figcaption></figcaption></figure>


If all middleware plugins are to be removed then remove entire middleware folder within the lib folder this includes the index.ts file. The `/headapps/nextjs-starter/src/middleware.ts` file should also be removed to keep the solution tidy. If keeping at least one plugin file then there these changes are not required just remove the unused plugins.

## Related Recipes
<Row columns={2}>
  <Link title="Redirect" link="/learn/accelerate/xm-cloud/implementation/information-architecture/redirect" />
</Row>

## Related Documentation
<Row columns={2}>
   <Link title="The Next.js Multisite add-on" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/the-next-js-multisite-add-on.html" />
   <Link title="Page personalization and component A/B/n testing" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/page-personalization-and-component-a-b-n-testing.html" />
   <Link title="Redirect search traffic" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/redirect-search-traffic.html" />   

</Row>

## Related Links
<Row columns={2}>
    <Link title="Vercel - How to Optimize Next.js + Sitecore JSS" link="https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss" />
    <Link title="Vercel - Manage and optimize usage" link="https://vercel.com/docs/pricing/manage-and-optimize-usage" />
    <Link title="Next.js Middleware on Netlify" link="https://docs.netlify.com/frameworks/next-js/runtime-v4/middleware/" />    
  </Row>
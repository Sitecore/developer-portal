---
product: ['xm', 'personalize']
title: 'Scaling and Availability'
hasInPageNav: true
hasSubPageNav: true
cdpTags: ['xm', 'personalize']
---

**I need my data to be onshore to match local data sovereignty laws. What regions are available where all products included are hosted locally?**

The XP2XMP product bundle allows customers to deploy Sitecore Experience Manager in their own Cloud or in Sitecore Managed Cloud. When using Experience Manager with Sitecore Managed Cloud and Sitecore Personalize, customers may choose to store data in these regions:

| Country        | Sitecore Managed Cloud | Sitecore Personalize |
| -------------- | ---------------------- | -------------------- |
| United States  | X                      | X                    |
| Canada         | X                      |                      |
| Netherlands    | X                      |                      |
| Ireland        | X                      | X                    |
| United Kingdom | X                      |                      |
| Australia      | X                      | X                    |
| Japan          | X                      |                      |
| Singapore      | X                      |                      |

**Will customers need to implement XP2XMP as a headless CMS using JSS? Do you have performance metrics for those sites?**

The XP2XMP product bundle does not require a headless implementation of Experience Manager with the Sitecore JavaScript Rendering SDK (JSS). Customers may choose to implement a MVC solution if they wish to do so with the XP2XMP bundle. Sitecore recommends customers beginning new projects evaluate the use of Experience Manager as a headless CMS, using JSS, publishing to Experience Edge, and building a Jamstack or .NET Core application to be future-ready.

We believe Jamstack implementations are the future of digital experiences and we anticipate enterprises will transition to these implementations as part of their site refresh cadence. One of the benefits of Jamstack client applications is the ability to render large portions of the sites as static pages which can be hosted on CDNs or dedicated application edge providers such as Vercel, Netlify, and Cloudflare. These edge solutions make Time-to-First-Byte (TTFB), First Contentful Paint (FCP), and Time to Interactive (TTI) for static pages as short as less than 1 second, making a huge difference for the visitor experience and significantly increasing the likelihood of achieving conversion goals.

**What is testing and personalization &#39;across the funnel&#39;?**

This refers to Personalization &amp;Testing experiences that can run across multiple pages and on experiences that are not being powered by Sitecore today. This is a powerful feature not available in XP that provides more extensibility of the Sitecore Personalize solution and can help organizations demonstrate ROI quicker.

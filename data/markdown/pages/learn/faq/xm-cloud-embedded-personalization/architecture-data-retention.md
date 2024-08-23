---
product: ['xm-cloud']
title: 'Architecture and Data Retention'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

### How does Embedded Personalization work on Jamstack-ready architecture?

XM Cloud is a Jamstack ready application. It offers a decoupled architecture with a clear split between the server side and the client side.

Personalization inside pages works directly on the Edge where it serves the relevant content for the visitor based on the defined personalization rules.

Note: Jamstack is a different architecture for building apps and websites. It enabled modern web development architecture based on JavaScript, APIs, and Markup – JAM. Instead of using a traditional CMS or site builder, a Jamstack site splits up the code (JavaScript), the site infrastructure (APIs), and the content - Markup.

### XM Cloud Embedded Personalization relies on Next.js middleware. Is Vercel prerequired for embedded personalization to support Next.js?

Embedded Personalization can be implemented using any web hosting platform that supports Next.js Middleware. These hosting platforms include Vercel, Netlify, AWS Amplify, and others. This FAQ entry can also help address questions on whether we support Embedded Personalization with .NET implementations.

### What is the data retention differences between XM Cloud Personalization and Sitecore Personalize Instance?

**XM Cloud Pages analysis** gives insights on your website traffic by displaying the following data (absolute values and trends) . It covers **30 Days for trending analytics (61 days for totals)**. For more information on XM Cloud Analytics Data Retention, please check: https://doc.sitecore.com/xmc/en/users/xm-cloud/view-the-analytics-data.html.

**Sitecore Personalize** provides your organization with data that you can use in decisioning and real-time audiences. It generally keeps data for **Last 40 sessions within the last 90 days**. For details on Personalize data retention policy, please visit: https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-sitecore-personalize-data-retention-policy.html.

**Sitecore CDP** imposes no data limit or time duration for guests with customer as the guest type including Last 1000 sessions per guest. For details on CDP data retention policy, please visit: https://doc.sitecore.com/cdp/en/users/sitecore-cdp/data-limits-in-sitecore-cdp.html.

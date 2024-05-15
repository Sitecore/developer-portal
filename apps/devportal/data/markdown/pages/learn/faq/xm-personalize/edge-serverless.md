---
product: ['xm', 'personalize']
title: 'Experience Edge & Serverless hosting'
hasInPageNav: true
hasSubPageNav: true
cdpTags: ['xm', 'personalize']
---

### Will changing my infrastructure to use serverless hosting (Sitecore Experience Edge + Vercel/Netlify, etc.) instead of CDs, secure that my application won&#39;t require further changes when moving into XM Cloud?

This will not necessarily secure the application by default. When moving to SaaS there are some components of the Sitecore XM solution that the customer will have to give up control over to move to SaaS. Some examples of XM capabilities that will not be available in XM Cloud are custom Solr indexes and use of Sitecore Forms.

### I already pay for Vercel/Netlify for other applications we have, can I use my current hosting with XP2XMP?

You can use your own Vercel/Netlify subscription with XP2XMP if you are implementing a headless CMS. If you are using another serverless host for Next.js applications you should investigate whether they support all of the functionality you require for your implementation.

**NOTE:** Sitecore is partnered with Vercel and Netlify and have validated they support our product capabilities. Sitecore has not done full evaluation of all hosting providers.

### Why do I need to change to Sitecore Experience Edge and serverless hosting (Vercel/Netlify, etc.), when I only need a presence in my local region? And what would the benefits be?

Enterprise-grade serverless hosting options like Vercel and Netlify combine the best developer experience with an obsessive focus on end-user performance. These platforms enable frontend teams to do their best work. They also meet the full security, privacy, and other compliance needs of enterprise customers.

#### Why choose serverless hosts like Vercel/Netlify for Sitecore XM implementations?

- Strong support for Next.js – a JavaScript development framework introduced in Sitecore XP 10.1
- Provide complete Next.js hosting and deployment support, including Incremental Static Regeneration
- Infrastructure management convenience layers to support enterprise management, development, and automation needs
- &quot;Zero config&quot; deployments
- Global edge network / integrated CDN for superior page performance and scaling
- Enables front-end developer/marketer collaboration workflows via preview deployments
- Webhooks / CLI for deployment automation and full Continuous Integration and Continuous Delivery (CI/CD) features

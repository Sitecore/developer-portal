---
product: ['xm-cloud']
title: 'Rendering'
hasInPageNav: true
cdpTags: ['xm-cloud']
---
<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## What rendering technology is supported using XM Cloud?

The focus for the initial release of XM Cloud will be on Next.js. Support for ASP.NET Core and additional JavaScript frameworks, like Nuxt, are under consideration for future XM Cloud releases.

# Which of Sitecore's Rendering SDKs are supported by XM Cloud?

All the JSS rendering SDKs along with the ASP.NET Core Rendering SDK are supported for use with XM Cloud. However, NextJS is currently the preferred rendering SDK as it implements the full XM Cloud feature set out of the box. When working with the other SDKs you may not get the complete XM Cloud feature set and may have to implement some features yourselves.

## What about Google Lighthouse Scores?

As for Lighthouse Scores, because Sitecore XM Cloud publishes to Experience Edge and then most implementations will typically deploy to Vercel, Netlify, or a similar service, customers will get extremely good Lighthouse Scores using static site generation (SSG).

In fact, performance is one of the key benefits of going headless with XM Cloud. If a team implements their frontend using a modern frontend framework, JavaScript frameworks being some of the more popular technologies, then this opens up the possibility to dramatically improve Lighthouse Scores. Now, the team will be able to pre-compile/ pre-generate their web experience so that static experiences become static HTML and that static HTML can be hosted at Vercel, or a CDN vendor’s system, or any number of ways in which the static HTML can be deployed at the edge for the fastest possible speeds.

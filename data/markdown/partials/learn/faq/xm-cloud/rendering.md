---
title: 'Rendering'
hasInPageNav: true
---

## What rendering technology is supported using XM Cloud?
The focus for the initial release of XM Cloud will be on Next.js. Support for ASP.NET Core and additional JavaScript frameworks, like Nuxt, are under consideration for future XM Cloud releases.

## Can customers use the .NET Core rendering SDK as an alternative to Next.js for XM Cloud solutions?
The initial launch of XM Cloud will support Next.js only. Support for .NET Core is under consideration for a future XM Cloud release. XM Cloud is based on Experience Edge though so when it comes to content rendering, it is just a matter of using Experience Edge as your endpoint for the Layout Service.

## What about Google Lighthouse Scores?
As for Lighthouse Scores, because Sitecore XM Cloud publishes to Experience Edge and then most implementations will typically deploy to Vercel, Netlify, or a similar service, customers will get extremely good Lighthouse Scores using static site generation (SSG).

In fact, performance is one of the key benefits of going headless with XM Cloud. If a team implements their frontend using a modern frontend framework, JavaScript frameworks being some of the more popular technologies, then this opens up the possibility to dramatically improve Lighthouse Scores. Now, the team will be able to pre-compile/ pre-generate their web experience so that static experiences become static HTML and that static HTML can be hosted at Vercel, or a CDN vendor’s system, or any number of ways in which the static HTML can be deployed at the edge for the fastest possible speeds.
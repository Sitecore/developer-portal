---
title: 'Running Next.js on Azure App Services'
description: 'Sitecore is not recommending customers host their XM Cloud head application on Azure App Services unless in a highly regulated industry.'
area: ['accelerate']
hasSubPageNav: false
hasInPageNav: true
---

## Problem

While Sitecore strongly recommends serverless hosting for XM Cloud, like Vercel or Netlify, our client has a strict requirement that is forcing the use of Azure to host the Next.js application. What are some of the problems we might face?

## Solution

Sitecore does not recommend hosting your XM Cloud head application on Azure App Services. This applies to both Node and Docker web apps in Azure App Services. For those that need to use Azure as their hosting environment due to being in a highly regulated industry, this article covers problems you may encounter. 

The main reason for not recommending Azure App Services is that it takes a server infrastructure approach to hosting, leading to lower performance, difficulty scaling, and higher management complexity.

Currently, we are working on a Hosting your Web Application article. This article will cover serverless vs server-based hosting, detailing our recommendation for serverless.

### Performance Limitations
One of Azure App Services' biggest limitations is performance. Since Next.js is a JavaScript application and JavaScript is a single-threaded language, the Node.js runtime for JavaScript is also single-threaded. This means that the single-threaded Node server has to handle all requests to your websites, Experience Edge, image optimization, incremental static regeneration, and more, leading to performance issues.

[PM2](https://pm2.keymetrics.io/) is often suggested as a solution to Node.js performance issues. However, using this tool adds more complexity, and it has not been established whether it improves performance in an XM Cloud front-end hosting solution.

### Scalability Limitations
Efficient scaling requires a content delivery network (CDN). However, Azure App Services does not come with a CDN by default.

Azure does offer the Azure Content Delivery Network service, but you must manage the endpoint and caching. This leads to further increased complexity. 

### Azure App Services Specific Limitations
Network Connection Limits

A specific limitation of Azure App Services that XM Cloud customers have experienced is the limited network port capacity for outbound network calls. Customers have hit the network connection limits' upper bounds, leading to severe performance degradation. 

Review the [Inside the Azure App Service Architecture](https://learn.microsoft.com/en-us/archive/msdn-magazine/2017/february/azure-inside-the-azure-app-service-architecture#network-port-capacity-for-outbound-network-calls) article for additional information on Azure App Services network limitations. 

## Related Documentation

<Row columns={2}>
<Link title="Inside the Azure App Service Architecture" link="https://learn.microsoft.com/en-us/archive/msdn-magazine/2017/february/azure-inside-the-azure-app-service-architecture#network-port-capacity-for-outbound-network-calls" />
</Row>
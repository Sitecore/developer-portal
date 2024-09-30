---
title: 'Running Next.js on Azure App Services'
description: 'Sitecore is not recommending customers host their XM Cloud head application on Azure App Services unless in a highly regulated industry.'
area: ['accelerate']
hasSubPageNav: false
hasInPageNav: true
lastUpdated: '2024-04-23'
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

#### Network Connection Limits

A specific limitation of Azure App Services that XM Cloud customers have experienced is the limited network port capacity for outbound network calls. Customers have hit the network connection limits' upper bounds, leading to severe performance degradation.

App Services in an out-of-the-box configuration have a soft limit of 128 ports for outbound connections via SNAT. Exceeding 128 ports can cause SNAT Port Exhaustion, leading to connection failures to Edge or any other public endpoint. Please review [Troubleshooting intermittent outbound connection errors in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/troubleshoot-intermittent-outbound-connection-errors), specifically the section "Avoiding the problem" which recommends the use of the vNET Integration feature and NAT Gateway, this greatly alleviates SNAT issues, Please also review [Azure subscription and service limits, quotas, and constraints](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits#app-service-limits) for other limits that you may encounter.

#### App Service Sizing

For production workloads, consider Premium v3 Plans, which have superior single-threaded performance over Basic and Standard Plans. Premium v3 App Service plans with Availability Zones enabled have been observed to be more reliable during Azure App Service Platform Updates.

#### Geography

An App Service Plan is tied to a specific Azure Region, which means increased network latency for end users the further they are located from that Azure Region. Consider this network latency and plan additional App Service Plans in Azure Regions closer to your end users, especially for websites with a global user base

## Related Documentation

<Row columns={2}>
<Link title="Troubleshooting intermittent outbound connection errors in Azure App Service" link="https://learn.microsoft.com/en-us/azure/app-service/troubleshoot-intermittent-outbound-connection-errors" />
<Link title="Azure subscription and service limits, quotas, and constraints" link="https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits#app-service-limits" />
</Row>

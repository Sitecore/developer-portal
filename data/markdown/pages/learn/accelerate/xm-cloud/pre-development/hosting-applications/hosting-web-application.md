---
title: 'Hosting the Web Application'
description: 'Every implementation needs to decide where and how to host their XM Cloud front-end head application'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-23'
---

## Problem

Clients must choose where and how to host their XM Cloud front-end head application. The two underlying infrastructure choices are serverless and server-based hosting solutions - the selection depends on the customer’s needs for scalability, control, and cost management.

## Solution

Sitecore recommends a serverless hosting infrastructure. Compared to server-based hosting, a serverless hosting solution is more performant, scales better, and introduces less complexity.

Sitecore recommends two main Hosting Providers - [Vercel](https://vercel.com/partners/sitecore) or [Netlify](https://www.netlify.com/with/sitecore/).

Both Vercel and Netlify are Sitecore's technology partners and offer developers a comprehensive hosting solution. In addition to hosting, they provide various features that enhance the developer workflow and experience. These features include a global CDN, DevOps pipelines, preview environments, advanced caching, On-demand Incremental Static Regeneration, instant deployment rollback, and more.

## Discussion

### What is Serverless?

Serverless computing is a modern approach in cloud computing. It allows developers to deploy code without the need to manage the underlying infrastructure. The hosting provider handles server provisioning, scaling, security, and maintenance.

The term 'serverless' is often misunderstood. It doesn't mean the absence of servers, but rather the abstraction of server management. This abstraction allows developers to focus on code development and value delivery, without the burden of infrastructure management. This approach promotes agility, accelerates development cycles, and lowers total cost of ownership, making serverless the recommended choice for Sitecore XM Cloud front-end applications.

### Why Serverless?

#### Management Complexity?

One of the most significant benefits of serverless computing is the time it saves for developers. By eliminating the need for manual server management, it streamlines the development process and leads to less complex applications.

#### Scalability

Scalability is another major advantage of serverless computing. Your front-end infrastructure can grow and shrink on demand. Your hosting provider handles this so that new resources can be allocated anytime. Your application will maintain responsiveness during a sudden increase in traffic.

#### Performance

Performance is an important factor in serverless. Unlike traditional single-threaded JavaScript, serverless functions can run simultaneously to perform tasks such as fetching page data, optimizing images, and revalidating and rebuilding a page, among other things. There is less of a bottleneck in a serverless environment.

### Serverless Only Features

#### Edge Network Scalability and Performance

Both Vercel and Netlify provide an Edge Network. Both edge networks act both as a Content Delivery Network (CDN) as well as a globally distributed compute network. Your compute, the serverless functions, execute close to your data, reducing latency, and improving end-user performance.

In a server-based environment your content can be distributed via a CDN, but compute must live in the single region where your server is deployed.

#### Preview Deployments

[Preview deployments](https://vercel.com/docs/deployments/preview-deployments) are a useful feature that enables you and your team to review code changes in a live environment without publishing to production. Thanks to the flexible infrastructure of serverless, these deployments are created automatically for each of your code branches.

It’s imporant to understand that these preview environments are for code changes only not content. We recommend using a non-production instance of XM Cloud to host the preview content for your preview code deployments. But there is still only that single non-production XM Cloud instance providing the content for each preview deployment.

### Vercel and Netlify Convenience Layer

As mentioned above Vercel and Netlify go beyond simple Next.js hosting. They offer an all-in-one hosting solution that simplifies and streamlines management, reducing complexity.

- Development Features
  - Command Line Interfaces
  - Starter Templates
- Review Features
  - Staging Servers
  - Preview Depoloyments
- Deployment Features
  - DevOps Pipelines
  - Instant Deployment Rollback
  - Hosting DNS Configuration
- Production Features
  - Secure Environment Variables
  - On-Demand Incremental Static Regeneration
  - DDoS Protection
- Scaling Features
  - Advanced Caching
  - Global Content Delivery Network for content and compute
  - Image Optimization & Caching
  - Localization
- Enterprise Features
  - Compliance: SOC 2 Type II, ISO 27001, PCI, GDPR, CCPA/CPRA
  - Service Level Agreements (SLA) 99.99%
  - Single Sign On (SSO)

If hosting in a server-based environment many of these features above would need to be configured and managed by your team.

### Server-based Hosting

According to the [Next.js documentation](https://nextjs.org/docs/pages/building-your-application/deploying#self-hosting), you can deploy your application to a Node.js server directly or via containers. While this type of hosting solution is possible, it can lead to degraded performance, difficulty scaling, and high management complexity.

#### Azure Container Apps

Technicaly feasibility with a number of reservations to be carefully considered:
- Works for hosting but raises concerns under enterprise production loads.
- Scaling behavior can lead to high costs and degraded performance.
- Lacks granular control over AKS configuration, vNet integration, and HADR options.
- Geo-deployment requires multiple region deployments.

Challenges with Next.js
- Cache invalidation and scaling for serverless functions/image optimization are complex.
- Container-based Next.js hosting has been know to cause continuous caching problems, **caution** should be applied if proceeding! Consideration should be to use Linux based App Services
- Next.js architecture conflicts with container-based scaling, which is not natural for this framework.
- Suggested workaround: Use Azure Functions as the function layer alongside Container Apps.

Sitecore does not recommend hosting your XM Cloud head application on Azure App Services. This applies to both Node and Docker web apps in Azure App Services.

For more information on server-based hosting and specifics to why we do not recommend Azure App Services review: [Running Next.js on Azure App Services](https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/developer-experience/nextjs-azure-app-services).

#### Common Server-Based Hosting Options

The providers listed and other server-based hosting options are not recommended.

- Azure App Services
  - Consider managed services like Dataweavers if hosting on Azure is mandatory
- Alternative frameworks
  - Use [ASP.NET Core](https://doc.sitecore.com/xmc/en/developers/asp-net/0/asp-net-core-sdk/sitecore-asp-net-core-sdk.html) instead of Next.js for better compatibility with Azure runtimes
- AWS Elastic Beanstalk
  - Explore OpenNext/SST (currently AWS-focused) for containerized hosting of Next.js
- Google Cloud Run
- Any container-based service

## Related Documentation

<Row columns={2}>
<Link title="Deploy your front-end application to Vercel" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-your-front-end-application-to-vercel.html" />
<Link title="Deploy your front-end application to Netlify" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-your-front-end-application-to-netlify.html" />
<Link title="Serverless Environment Preview Deployments" link="https://vercel.com/docs/deployments/preview-deployments" />
<Link title="Vercel and Sitecore XM Cloud Integration" link="https://vercel.com/docs/integrations/cms/sitecore" />
<Link title="Sitecore ASP.NET Core SDK" link="https://doc.sitecore.com/xmc/en/developers/asp-net/0/asp-net-core-sdk/sitecore-asp-net-core-sdk.html" />
</Row>

## Related Learning Materials

<Row columns={2}>
<Link title="Vercel + Sitecore: Partnering on a composable future" link="https://vercel.com/blog/vercel-sitecore-partnership" />
<Link title="Hosting your XM Cloud App on Netlify" link="https://www.youtube.com/watch?v=bLdPqZ3xcB8" />
<Link title="XM Cloud - Deploy your first Headless SXA site to Vercel" link="https://www.youtube.com/watch?v=0UpihW2QxaQ" />
</Row>

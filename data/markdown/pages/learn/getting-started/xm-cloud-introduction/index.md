---
title: 'XM Cloud Introduction'
description: 'XM Cloud is around the corner. But what is XM Cloud? What does it include? And how can you prepare for it?'
promoAfter: ['learning-essentials']
---

## What is XM Cloud?

Sitecore Experience Manager Cloud (XM Cloud) is a fully managed self-service deployment platform for developers and marketers to efficiently launch engaging omnichannel experiences in the Cloud using Sitecore’s headless CMS. Experience Manager Cloud bundles the latest versions of [Experience Manager](https://doc.sitecore.com/xp/en/users/102/sitecore-experience-platform/experience-manager.html), the Pages editor, Sitecore Headless Experience Accelerator ([SXA](https://doc.sitecore.com/xp/en/developers/sxa/102/sitecore-experience-accelerator/index-en.html)), [Headless Services](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-headless-services.html), the [Sitecore Next.js SDK](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss--for-next-js.html) (and other Heads), and [Experience Edge](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-experience-edge-for-xm.html). 

With an optimized cloud-based strategy, you can rapidly and cost-effectively scale to meet your customers’ needs, shorten your time-to-market, and be more adaptive as new capabilities and functionality are added to your Martech stack. Explore how the right cloud approach will help you thrive now and into the future.

Sitecore Experience Manager Cloud re-imagines Content Management and introduces a no-compromise Content Management System (CMS) that delivers developer agility through the best attributes of the headless CMS while empowering marketers through a visually rich, WYSIWYG page composition experience. With XM Cloud, our customers can deliver **relevant** experiences at high **speed**.

* **Speed:** Visitors are greeted with an experience that loads lightning-fast and engages instantly
* **Relevance:** Customers are recognized and welcomed back to an experience that understands their needs

The importance of your company's growth comes with the:
* **Agility:** Marketers can easily orchestrate the overall experience across digital campaigns
* **Flexibility:** Developers can rapidly develop and launch new experience types with modern front-end frameworks



## Why use XM Cloud?
![Benefits of XM Cloud](https://mss-p-006-delivery.stylelabs.cloud/api/public/content/1915549492604a64864578fe51d2a597?v=244f9e64)

Experience Manager Cloud addresses the challenges faced by **marketers and developers** when using traditional monolithic CMS and modern headless CMS. 

The monolithic CMS provides convenience through tightly coupled content management and frontend presentation and delivery capabilities in a single application. However, this convenience comes at the cost of decreased developer agility.  

With the modern headless CMS, the content management backend is decoupled from the frontend presentation and delivery capabilities. The decoupling enables developers to take advantage of popular frontend frameworks to rapidly build new digital experiences. While developers gain agility with this approach, it introduces friction for marketers who now need to rely upon developers for even the smallest of changes to the frontend experience. 

XM Cloud combines the advantages of both worlds. Building new web experiences based on headless architecture using modern frontend frameworks for a faster time to market. But still giving Marketers the freedom to design the frontend experience utilizing the page layouting functionalities. 

## XM Cloud provides 
* Sitecore Unified Identity (SSO across all applications of Composable DXP) 
* [Headless SXA](https://doc.sitecore.com/xp/en/developers/sxa/102/sitecore-experience-accelerator/headless.html) (Accelerator Features to speed up time to market) 
* [JSS](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-javascript-rendering-sdks--jss-.html) 
* [Headless Services](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-headless-services.html)
* [Management Services](https://doc.sitecore.com/xp/en/developers/102/developer-tools/sitecore-management-services.html) 
* [Layout Service](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/layout-service.html) 
* [GraphQL](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/graphql.html) 
* [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview) for Media 
* Content Delivery via [Edge](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-experience-edge-for-xm.html) with [Connector](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/the-experience-edge-connector.html) 
* Sitecore Embedded Personalization (Tenant of [CDP](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/introduction-to-sitecore-cdp.html)) for optional usage 
* XM Cloud Deploy (deploy your web experience to XM) 
* Supports [GitOps](https://www.weave.works/technologies/gitops/) 
* Local Development using containers (same containers used in cloud) 
* Automatic updates to get latest features immediately 

## XM Cloud Architecture
![XM Cloud Architecture](https://mss-p-006-delivery.stylelabs.cloud/api/public/content/542ccf865a8344daaa92e1c364ee8dd1?v=522329fa)

XM Cloud comes with a Content Management application based on [Sitecore XM](https://doc.sitecore.com/xp/en/users/102/sitecore-experience-platform/experience-manager.html) including known but also new editing Tools. So, you will be able to use [Content Editor](https://doc.sitecore.com/xp/en/users/102/sitecore-experience-platform/the-content-editor.html) as well as [Experience Editor](https://doc.sitecore.com/xp/en/users/102/sitecore-experience-platform/the-experience-editor.html). In addition to these powerful tools XM Cloud includes Sitecore Pages to manage your content and Design Pages and many other tools. 

The content delivery is provided by publishing to [Edge](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-experience-edge-for-xm.html). That can be [Sitecore Edge](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-experience-edge-for-xm.html) (configured as default) but also other edge vendors. 

[Edge](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-experience-edge-for-xm.html) delivers content and design information headlessly through the GraphQL endpoint and can be consumed by any head technology such as Next.js, ASP.NET core, Angular, Vue or React. 

Developers and System Administrators can manage the XM Cloud instances and deploy the custom CM (Content Management) customizations using the “build and deployment services” as well as the Deploy App that provides the functionalities via UI. 

## Setting up an XM Cloud environment

![XM Cloud Structure of Organization, Projects and Environments](https://mss-p-006-delivery.stylelabs.cloud/api/public/content/542586d7b8e145838fc7dfe0afd19bfa?v=7e6faa5e)

To interact with XM Cloud, no matter if you go local or in cloud, you require an “Organization”. The Organization is your account at Sitecore. From here you can go on, manage your users, provision Projects and Environments.

**Organization** 

* Account of a Sitecore Client 
* Level of User Management 

**Project** 

* Divider for logical or legal entities.  
* Whenever you consider a separate Software Solution that would go towards separate Projects 

**Environment** 

* The actual environment of XM Cloud that hold the CM instance 
* Allows Multisite. 

## Deployment
XM Cloud Deploy is bundled with XM Cloud and offers REST API first deployment tooling for your website. A Sitecore CLI Plugin as well as the Deployment Portal web UI helps managing your deployments. 

## Getting preapred for XM Cloud 
You might have recognized that a lot of technologies that we have come across are involved in XM Cloud development. [Edge](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-experience-edge-for-xm.html), [serialization](https://doc.sitecore.com/xp/en/developers/102/sitecore-experience-manager/serialization-in-sitecore.html), [headless](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/overview-of-headless-development-with-sitecore.html), [containers](https://doc.sitecore.com/xp/en/developers/102/developer-tools/containers-in-sitecore-development.html), [JSS](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/sitecore-javascript-rendering-sdks--jss-.html), [SXA](https://doc.sitecore.com/xp/en/developers/sxa/102/sitecore-experience-accelerator/index-en.html). So, it definitely makes sense to close some of the knowledge gaps in these areas to get prepared for XM Cloud. 

![Getting prepared for XM Cloud learning SXA, JSS, Containers, Headless, Edge, Sitecore Serialize](https://mss-p-006-delivery.stylelabs.cloud/api/public/content/d2ba91e41cd846f19bc6ba8b8f6d29fe?v=0a1eb452)

Here’s a list of great resources that I found helpful. 

### XM Cloud
- [[Video] **XM Cloud Deploy Demo** - 
by Andy Cohen](https://www.youtube.com/watch?v=a23g2TRUvOI) 
- [[Video] **SaaS Migration** - Migration from Sitecore XP and XM to XM Cloud by Pieter Brinkman and Jason St-Cyr](https://www.youtube.com/watch?v=ZTjk5t9dfRQ)
- [[Example] **XM Cloud Introduction Repository** - Covering a multisite and multihead solution. MVP site using ASP.NET core SugconANZ and SugconEU site using Next.js along with JSS and SXA.](https://github.com/Sitecore/XM-Cloud-Introduction) 

### Tooling
- [[Video] **Improving Windows Terminal** - 
by Sebastian Winter](https://www.youtube.com/watch?v=pO7k3_p1Uq4) 
- [[Example] **Windows Terminal DevEx improvements** -](https://github.com/Sitecore/Windows-Terminal-DevEx-improvements)

### Containers
- [[Article] **Docker: A Quick overview** - by Rob Earlam](https://www.sitecore.com/knowledge-center/getting-started/docker-a-quick-overview)
- [[Video] **Docker for beginners** - by Travis Media](https://www.youtube.com/watch?v=3c-iBn73dDE)  
- [[Documentation] **Containers in Sitecore development** - 
documentation](https://doc.sitecore.com/xp/en/developers/100/developer-tools/containers-in-sitecore-development.html) 

### Headless
- [[Video] **Sitecore Headless Development with Next.js** - by Nick Wesselman - Create a headless App, create components using JSS and deployment to Vercel.](https://www.youtube.com/watch?v=ugPy7BjH0H0)  
- [[Documentation] **Walkthrough: Deploying JSS Next.js apps to Vercel** - Documentation and video by Nick Wesselman.](https://doc.sitecore.com/xp/en/developers/hd/190/sitecore-headless-development/walkthrough--deploying-jss-next-js-apps-to-vercel.html)  
- [[Video] **The ASP.NET Core Rendering SDK** - by Nick Wesselman and Oleg Jytnik](https://www.youtube.com/watch?v=FYyYpmODiBY)  
- [[Video] **Render here, render there, render everywhere** - by Thomas Desmond](https://www.youtube.com/watch?v=zu8qpbtNasg) 
- [[Documentation] **Converting existing Sitecore MVC applications to the Jamstack architecture with Headless Rendering** - 
Documentation, walkthroughs and a video by nastasiya Flynn](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/converting-existing-sitecore-mvc-applications-to-the-jamstack-architecture-with-headless-rendering.html)

### Serialization
- [[Video] **Sitecore 10 – Introducing Sitecore Serialization** by Rob Earlam](https://www.youtube.com/watch?v=CzQbwvKX1Cc)
- [[Documentation] **Create a content serialization Module** - ](https://doc.sitecore.com/xp/en/developers/100/developer-tools/create-a-sitecore-content-serialization-module.html/)

### Edge
- [[Documentation] **Architecture for Experience Edge for XM**](https://doc.sitecore.com/xp/en/developers/101/developer-tools/the-architecture-of-sitecore-experience-edge-for-xm.html)
- [[Video] **Sitecore Experience Edge** - by Pieter Brinkman](https://www.youtube.com/watch?v=_xw-02PZQTE) 
- [[Video] **Getting started with Vercel Edge Functions in Next.js** by Thomas Desmond](https://www.youtube.com/watch?v=nt4FYgJRbTc) 
- [[Video] **Making GraphQL requests on your frontend with Next.js** by Thomas Desmond](https://www.youtube.com/watch?v=F3BWdFXEJPk) 

### SXA
- [[Documentation] **Rendering Variants** - official documentation](https://doc.sitecore.com/xp/en/developers/sxa/102/sitecore-experience-accelerator/create-a-rendering-variant.html)
- [[Video] **Page and Partial Designs** - Demo of using Page and Partial Designs](https://www.youtube.com/watch?v=0LqngaF5i1U)  
- [[Video] **Tenant and Site Creation** - by Sebastian Winter and Mark van Aalst](https://www.youtube.com/watch?v=Od8B1tG1ivs)  
- [[Video] **SXA Modules** - by Sebastian Winter and Mark van Aalst - Introduction](https://www.youtube.com/watch?v=usLWZHiWGZI) - 
  - [Demo video](https://www.youtube.com/watch?v=A4NiQzZ-yJo) 

---
title: 'Introduction to Composable DXP'
description: 'What is a Composable DXP and why does it matter for developers? Get started learning about what this term means and how it applies in the world of Sitecore products.'
promoAfter: ['learning-essentials']
---

## What is a DXP?

Whenever you see "DXP" being used, this stands for Digital Experience Platform. This has been a natural evolution from a content management system (CMS) to include more than what a content system can handle, usually addressing things like marketing automation, personalization, analytics, customer data management, and other business and marketing needs.

## What is a Composable DXP?

A Composable DXP is a "pick-and-choose” or "go-at-your-own-pace" digital experience solution. This means the platform is broken up into smaller, interchangeable products known as individual packaged-business-capabilities (PBCs), which could include email marketing, customer data platform (CDP), e-commerce, hosting, search, or a combination of many other products.

The Composable model allows you to choose which products you want to implement, and then only implement that capability when you are ready for it. These are usually from different vendors, though you might have multiple from a single vendor. From a developer perspective, you are looking to build your overall business solution from a variety of systems, and mesh them together using APIs. This also allows you to integrate to existing systems that may be offering part of your overall business solution.

_In summary:_

- a build-your-own solution with best-of-breed applications
- comprised of standalone products
- fully SaaS-based and hosted in strategic cloud locations
- integrates easily with an existing tech stack

## Why choose a Composable DXP?

In some scenarios, a traditional fully-integrated DXP might be the better option, but there are benefits to a more composable approach. In general, this is about giving teams choices.

1. **Solution freedom:** A composable DXP allows you to assemble your solution from best-of-breed technology options, choosing what you need when you need it. This also means being more open to integration to existing tech stacks that might already be implemented.
2. **Lower total cost of ownership:** By only implementing what you need when you need it, you can continually optimize and evolve your solution with the pieces you need, replacing pieces as your team outgrows them or no longer needs that capability.
3. **Higher return on investment (ROI):** With an incremental approach and an API-based development model, it is easier for technology teams to build smaller and get something out that can start getting an ROI sooner, allowing for a more continuous model in implementing their DXP.
4. **Flexible development:** By using an API-first approach, development teams can build with the tools and languages they want, allowing them to use headless/Jamstack/MACH approaches to their solution.
5. **Faster delivery cycles:** By sliding more easily into a team's existing CI/CD flow, teams have less time invested in ramping up on vendor-specific deployment requirements and can leverage more of their existing processes.

## What does a developer need to know?

There are three important topics that come up for developers with composable solutions:

1. **Choices:** The composable world is full of choices. Now, you need to choose from a lot of best-of-breed solutions to find what works best. Developers need to find something that is stable, extensible, and works with the tech you want to use. Look at community, documentation, skills required, to choose what works best for your team.
2. **Integrations:** API-driven solutions mean that developers need to do a lot of integration work to bring together all the pieces of the stack. You might need to implement caching, streaming, and other solutions to make these integrations work for your specific scenario.
3. **Deployment orchestration:** Working with different solutions by different vendors means you'll want to plan out a CI/CD solution that reduces dependencies.

You might also be interested in this video where [Thomas Desmond](https://twitter.com/ThomasJDesmond) explains 3 things developers should care about in the composable DXP space. Moving to the composable DXP world can mean significant work for developers.

<YouTube youTubeId="q_sf7eX0vr8" />

## How are Sitecore products involved in this?

Sitecore's Experience Manager, Experience Platform, and Experience Commerce form a traditional DXP solution that addresses Content, Experience, and Commerce needs. Sitecore has multiple products to address this in a composable architecture (CDP, Content Hub, Discover, OrderCloud, Personalize, Send). If you have existing applications serving part of your DXP architecture already, you can choose to integrate only the components you need.

This table shows the portion of the composable DXP that each product serves and links to where you can learn more about implementing those products or solutions.

| Solution                                                         | Product                                                         |
| :--------------------------------------------------------------- | :-------------------------------------------------------------- |
| [Commerce Merchandizing and Storefronts](/commerce)              | [Sitecore OrderCloud](/commerce/ordercloud)                     |
| [Commerce Product Discovery](/commerce)                          | [Sitecore Discover](/commerce/discover)                         |
| [Content Management and Operations](/dam-and-content-operations) | [Sitecore Content Hub](/dam-and-content-operations/content-hub) |
| [Customer Data Management](/customer-data-management)            | [Sitecore CDP](/customer-data-management/cdp)                   |
| [Digital Asset Management (DAM)](/dam-and-content-operations)    | [Sitecore Content Hub](/dam-and-content-operations/dam)         |
| [Marketing Automation](/marketing-automation)                    | [Sitecore Send](/marketing-automation/send)                     |
| [Personalization](/personalization-testing)                      | [Sitecore Personalize](/personalization-testing/personalize)    |

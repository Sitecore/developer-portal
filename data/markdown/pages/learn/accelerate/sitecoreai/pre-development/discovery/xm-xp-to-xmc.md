---
title: 'Transition from XM/XP to XM Cloud'
description: 'Learn more about how to transition to XM Cloud'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2024-10-09'
created: '2024-10-09'
audience: ['All']
---

## Context

We have a client, currently on XM or XP, they have already selected XM Cloud as the new platform, what is the best migration path to XM Cloud from their current MVC implementation?

## Execution

The best path for migration to XM Cloud will depend on the client's requirements. This recipe will propose a high-level migration path that can be tailored to your specific client.

Keep in mind that migrating to XM Cloud will require a clear understanding of the [Concepts of moving to SaaS](/learn/accelerate/xm-cloud/pre-development/discovery/moving-to-saas).

There are two approaches for Migration -

### 1. Big Bang move to XM Cloud

XM Cloud requires the use of Headless SXA, and therefore a direct migration is the shortest, most cost-effective migration path for the majority of existing Sitecore implementations.

CSS Styles and HTML can be reused from the existing MVC site and ported over to Next.js. The content will need to be re-shaped to match the Headless SXA architecture.

**Considerations**

- This might slow down or block changes on the existing platform as focus in on XM Cloud.

- Content and Information Architecture audit might slow down process if changes expected are drastic from current state. The process of the audit itself might delay the start.

### 2. Hybrid Migration

A hybrid migration can be an effective solution for a large client that has multiple websites and/or very large websites with a log of pages/sections to migrate.

In a hybrid migration, the main scaffolding of the site is created in XM Cloud, e.g. header, footer, and navigation. Then sections of the website are migrated as smaller self-contained projects. For Example, a news or blog section may be the first section of the main site that is migrated.

For this to go live, a resource that controls the request routing is used to route traffic between the existing site and the new XM Cloud pages. There are many tools available for this, some popular options are Azure Front Door and Azure Application Gateway.

Next.js has been designed for gradual adoption following this pattern. For more details see this blog post: [Incrementally Adopting Next.js](https://nextjs.org/blog/incremental-adoption)

It is common in a hybrid migration to focus on content search first so that when content is stored on 2 systems, the content search will be able to access all content available.

**Considerations**

- Content will be on 2 separate systems, so any content search will need to be able to index both systems.

- If there is content behind a login, any security tokens will need to be persisted between each delivery system.

## Insights

As you are looking through the different approaches, there’s a number of topics you will need to consider.

### Key Feature Comparisons

Switching to composable means that not all requirements will be fulfilled by just XM Cloud - most customers have been historically on a monolithic DXP. About 2/3 of them were using XP as an example, but the mindset shift is similar regardless of which DXP you are starting from.

If you want to move your existing XP into the cloud, the right move is managed cloud, not XM Cloud. XM Cloud is for when you want a future ready, composable, true SaaS CMS. Or, if your priority is to be able to take advantage of the latest and greatest Sitecore platform features as early as possible.​

With Personalization discussed later on, there’s a set of features you should consider -

<img src="/images/learn/accelerate/xm-cloud/xm-xp-to-xmc1.png" alt="Screenshot showing XP XM Cloud features"/>

<br/>

Review the full list of [Limitations and restrictions documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions.html).

### Tight Timelines with Complex Integrations

If the customer has a very tight timeline to move to headless, this may be a barrier to a direct migration to XM Cloud. For example, the existing website has a complex content search scenario using the Sitecore Solr indexes. There may not be time to migrate the website and rebuild the content search in the same project.

In this type of scenario, an initial project to move to Headless SXA while still using the existing Solr would enable the project to go live early on headless and then use a 2nd phase of the project to move the search over to a composable search solution, and finally phase to XM Cloud.

### Headless setup on XM/XP pre transition

This option can be useful, but it is only a viable option for a very specific set of scenarios. These scenarios are not common; if you feel that your client has a scenario where this is truly the best fit, then please reach out to your Sitecore contact to discuss the approach.

One reason why some want to move to headless first is to make the final move to XM Cloud easier.  

While it is true that once the  customer is on XM with Headless SXA, migrating from that implementation to XM Cloud will be easier than a full migration from XM or XP MVC to XM Cloud, that doesn’t take into account the work that needs to be done for the migration to Headless.

In most cases, this amount of work would be the same as if the project directly migrated XM or XP MVC to XM Cloud Headless. The effort it just moved and then further effort is added when the project finally migrates to XM Cloud.

There are more things to consider:

- The latest version of Headless Services will always be behind the XM Cloud version.  Bugs that are fixed in XM Cloud may not be patched in XM Headless and new features are being rolled out continually on XM Cloud.

- There will still be work (time and money) to migrate to XM Cloud as per [Project Estimation](/learn/accelerate/xm-cloud/pre-development/project-planning/project-estimation) recipe.

### Deprecated Architectural Patterns

While your platform remains on XM or XP Headless, you will continue to rely on Content Editor or Experience Editor instead of newer authoring tools. It is also likely that the project will continue to use deprecated architectural patterns such as custom content resolvers, custom event handlers, and customizations to the editing UI. These may be utilized but will hamper future migration efforts - it is time to start moving away from these old practices.

### Upgrade to the latest version of XM/XP

While upgrading to the latest version of Sitecore XP before migrating to XM Cloud might seem logical, it’s not always required. Evaluate whether an upgrade will simplify your migration or if you can move directly to XM Cloud.

Due to the fundamental differences between XM Cloud and traditional XM or XP MVC architectures, there is no benefit (efficiency, cost, or stability) to upgrading your XM or XP platform before migration. An upgrade to the existing solution is likely to have a high cost and add many weeks to a migration project, especially if the implementation relies on 3rd party or open-source dependencies.

There were some rare scenarios where a migration to headless first is XP right - generally this is for implementation that have heavily customized editing experiences that won't be supported by Pages or heavily customized CMS that will be migrated in phases.


## Related Recipes

<Row columns={2}>
<Link title="Project Estimation " link="/learn/accelerate/xm-cloud/pre-development/project-planning/project-estimation" />
<Link title="Moving to SaaS - Concepts You Need to Know " link="/learn/accelerate/xm-cloud/pre-development/discovery/moving-to-saas" />
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Incrementally Adopting Next.js " link="https://nextjs.org/blog/incremental-adoption" />
<Link title="Limitations and restrictions " link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions.html" />
</Row>

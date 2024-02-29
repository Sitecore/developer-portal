---
title: 'Creating a Site | Sitecore Accelerate for partners'
description: 'How to create your Site and Site Collection in XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
---

## Problem

I need to create a new Site, what is the best way to do it? Should it be in a Site Collection? Should I create a new site collection or put it in an existing one?

## Solution

When creating a Site in XM Cloud, a site collection is always required. The Sites live in a site collection. You can have as many site collections as needed, and a site collection can have many Sites.

### Creating a site collection

Before we create a site collection, we need to create an SXA Module for our templates and rendering items to live in. It is important to create the Headless Module before you create the site collection, once the site collection is created, it is not possible to create a headless module.

In your XM Cloud instance, load up Content Editor and navigate to `/sitecore/system/Settings/Project`. Right-click and insert a new `Headless Module`. Make sure to name the module with the same name that you will use for your site collection.

<img src="/images/learn/accelerate/xm-cloud/create-a-site-1.png" alt="Create a new headless module"/>

Make sure all the System areas and the scaffolding actions are selected. Click Proceed.

Once the creation wizard has completed, navigate to `/sitecore/Content`. Right-click and insert a new `Headless Site Collection`. Make sure that you give the site collection the same name as the module we just created:

<img src="/images/learn/accelerate/xm-cloud/create-a-site-2.png" alt="Create a new headless site collection"/>

Make sure to tick all the required modules and include the SXA Module created in the previous step.

Click OK and wait for the site collection creation wizard to complete.

You now have a site collection linked to an SXA module in preparation for component cloning.

### Creating a new Site

Right-click the site collection and insert a new `Site`. Make sure that in the `Modules` tab, the `Project` layer module created earlier is selected:

<img src="/images/learn/accelerate/xm-cloud/create-a-site-3.png" alt="Create a new headless site"/>

Click OK and wait for the site creation wizard to complete.

## Discussion

### Do I need a new site collection?

All sites must be placed within a site collection. Site collections are a way to group multiple sites that either need to share resources or are authored by a single group. With XM Cloud’s multiple site collections architecture, you can provide each site collection a dedicated share of the XM Cloud instance, including data templates, configuration, user management, and non-functional properties.

Each site collection can include multiple related sites, for example, to support multiple brands that need to share resources or are authored by a common team, or multiple locations for a single brand.

### Related Recipes

<Row columns={2}>
  <Link title="Branching Strategy | Sitecore Accelerate" link="/learn/accelerate/xm-cloud/pre-development/developer-experience/branching-strategy" />
  <Link title="DevOps| Sitecore Accelerate" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/devops" />
  <Link title="Setting Up Serialization" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/setup-content-serialization" />
</Row>

### Related Documentation

<Row columns={2}>
  <Link title="Getting started with XM Cloud | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
  <Link title="XM Cloud Foundation Head Repository | Github" link="https://github.com/sitecorelabs/xmcloud-foundation-head" />
  <Link title="XM Cloud Tutorials - Rename app #4" link="https://www.youtube.com/watch?v=uNkQQSC6n8o" />
</Row>

---
title: 'Creating a Site'
description: 'How to create your Site and Site Collection in XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2024-02-24'
audience: ['Architect','Product Owner','Project Owner', 'User']
---

## Context

I need to create a new site, what is the best way to do it? Should it be in a site collection? Should I create a new site collection or put it in an existing one?

## Execution

When creating a site in XM Cloud, a site collection is always required and all sites must be assigned to a site collection. You can have as many site collections as needed and a site collection can have many sites.

### Creating a site collection

When creating sites or site collections this should be done via [Sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html) in XM Cloud.

You can [create a site collection](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-site-collection.html) using the site collection process described at the documentation link or this can be done at the time of [creating a new site](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-site.html).

Note that when you create a site collection, a new headless module with the same name is now created automatically. You can find it in /sitecore/system/Settings/Project/[COLLECTION_NAME]. This enables you to clone components directly into the site collection project layer without having to manually create the module. This change only applies to newly created site collections.  

### Do I need a new site collection?

All sites must be placed within a site collection. Site collections are a way to group multiple sites either need to share resources or are authored by a single group. With XM Cloud’s multiple site collections architecture, you can provide each site collection a dedicated share of the sitecore instance, including data templates, configuration, user management, and non-functional properties.

Each site collection can include multiple related sites, for example, to support multiple brands that need to share resources or are authored by a common team, or multiple locations for a single brand.

### What about if I need to roll out multiple sites?

If you have a requirement to roll out multiple sites you can start with a pre-configured site and XM Cloud can support you in two ways either by taking advantage of site templates or by duplicating an existing site.

#### Site templates

Site templates can be used to build a template for your site which is an installation description of the site using modules.

New sites can be created directly from the XM Cloud dashboard using site templates reusing previously created modules along with your features and components. An overview of the steps can be see below:

- Build a site template
- Build or reuse modules for the site setup
- Build installation descriptions of common content architecture
- Create a new site from site template in XM Cloud Sites
- Select language you want to apply as default

Detailed [documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-a-site-template-for-the-xm-cloud-dashboard.html) is available on how to configure site templates. This documentation walks you through how to copy and customize some of the existing items already available for the basic site setup. Providing you with a good foundation for further customization and more efficient roll out multiple sites.

<img src="/images/learn/accelerate/xm-cloud/site-templates-1.png" alt="XM Cloud site template" />

#### Duplicate a site

To use this approach first you will need to build your template site which can be used as the common starting point for your implementations. Once setup the clone script can be run to create a copy of the site. An overview of the steps can be see below:

- Build a template site
- Build a common content architecture
- Use Pages to design each page
- Pre-configure features
- Use Duplicate site from the Sites interface or the Clone Site script in content editor to create a copy
- Use Add Site Language Script to add the required languages
<br/>

<img src="/images/learn/accelerate/xm-cloud/create-a-site-1.png" alt="XM Cloud duplicate a site"/>

<br/>

If you are rolling out regional websites, you probably also need to support **different languages**. You can run the Add Site Language Script additionally to add Language Versions.

## Related Recipes

<Row columns={2}>
  <Link title="Branching Strategy" link="/learn/accelerate/xm-cloud/pre-development/developer-experience/branching-strategy" />
  <Link title="DevOps| Sitecore Accelerate" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/devops" />
  <Link title="Setting Up Serialization" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/setup-content-serialization" />
  <Link title="Site management" link="/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Getting started with XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
  <Link title="XM Cloud Foundation Head Repository | Github" link="https://github.com/sitecorelabs/xmcloud-foundation-head" />
  <Link title="XM Cloud Tutorials - Rename app #4" link="https://www.youtube.com/watch?v=uNkQQSC6n8o" />
  <Link title="Sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html" />
  <Link title="Create a site collection" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-site-collection.html " />
  <Link title="Create a site" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-site.html" />
</Row>

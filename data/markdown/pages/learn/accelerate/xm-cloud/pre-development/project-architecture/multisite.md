---
title: 'Multisite Architecture/Add-On'
description: 'Setting up a multisite architecture in XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-04-15'
---

## Problem

My client needs to host multiple website properties using a single source for content. How should the content tree be organized? How should the Next.js application(s) be architected? Can I have a single application, or do I need to have a Next.js application per site? How does this relate to localization?

## Solution

There are two parts to this recipe, information architecture and application architecture. They are linked so this recipe will cover both parts. First we will deal with content:

### Multisite Content Tree

Sitecore XM Cloud supports multisite content solutions out of the box (OOTB). Within XM Cloud there is the concept of [Site Collections](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-terminology.html#UUID-3ceb7d45-3caf-3196-3a9a-f59a9474182a_xmc_sitecollection) and [Sites](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-terminology.html#UUID-3ceb7d45-3caf-3196-3a9a-f59a9474182a_xmc_site).

- A Site is a collection of content specific to a single website. This can include Pages, Datasources, and Configuration Items.
- A Site Collection is a grouping for one or more related sites to help organize the sites according to business requirements.
- A Site Collection is always required, even for a single site implementation. The Site Collection is where all data templates & components are stored for use within the Site’s inside that collection.

When deciding how many Site Collections to create and then which collections to add the sites to, these choices will be driven by business requirements.

For example, if a client is a multi-brand client with separate content teams for each brand, each brand should have its own Site Collection. If the client has a single content team and needs to be able to share content between branded sites, then a single Site Collection could be used.

<Alert status="info">
    <AlertIcon />
    When creating Site Collections, it is important to note that data templates, rendering items and content can only be shared by sites within the same Site Collection.
</Alert>
<br/><br/>

Example multisite content tree:

<img src="/images/learn/accelerate/xm-cloud/multisite-1.png" alt="Example multisite content tree"/>
<br/><br/>

To share content between sites within a Site Collection please see the XM Cloud documentation article: https://doc.sitecore.com/xmc/en/developers/xm-cloud/sharing-content.html

### Web Application

When we are planning the architecture for multiple sites for the web application, there are 2 main paths:

- Deploy a separate Next.js web application for each website
  - This can be the same Next.js application code, or completely different applications, or a combination.
- Deploy a single Next.js web application and use the JSS multisite add-on

There are pros and cons for each consideration, it is up to the architect to weigh the pros/cons and select the best option for the project that meets the business and technical requirements.

| Consideration                                                                                              | Separate Applications                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Single Applications                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Build Time                                                                                                 | **PRO**<p>With separate applications, you can make use of parallel builds on your host to deploy multiple sites at the same time. This comes with a caveat: You may hit the Edge rate limit if you have too many parallel builds.</p><p>The Experience Edge rate limit will govern how fast your sites will generate. In practice, [all implementations will need to limit how many pages are generated on build](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/customize-build-time-static-paths-in-jss-next-js-apps.html). Separate applications will have a slight edge if parallel builds do not hit the rate limit.</p><p>See the recipe on [Rate Limits and Caching Your Web Application for more details](/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching).</p> | **CON**<p>With the multisite add-on, all pages in all your sites will be generated on build. If you have a lot of sites/pages, this can extend the build time to many minutes.</p><p>To mitigate this, you can manually configure which sites are included in the application and also limit the pages that are generated on build:</p><ul><li>[Manually configure the sites in a multisite applicationSitecore Documentation](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/manually-configure-the-sites-in-a-multisite-application.html)</li><li>[Customize Build Time Static Paths](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/customize-build-time-static-paths-in-jss-next-js-apps.html)</li></ul> |
| Each site requires unique CSS and HTML for components                                                      | **PRO**<p>Create separate Next.js applications for each site. Each application is an isolated application and changes can easily be made without effecting the other sites. This will make site maintenance and future work easier as the team will only need to test the site being worked on.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **CON**<p>Keeping all the site code in a single Next.js application will make maintenance and future work more complex.</p><p>There is no OOTB theme support in XM Cloud yet, so for sites with different styles, a method for selecting and rendering the required theme will need to be implemented.</p><p>Regression testing will be required across all sites as any code change has the ability to affect every site that is hosted within the single application.</p>                                                                                                                                                                                                                                                                |
| Each site uses the same styling and markup, it is only the content that changes                            | **PRO**<p>The same Next.js application can be easily deployed multiple times. Once per site.</p><p>**CON**</p><p>Having many Next.js applications on your host to deploy to and maintain the hosting for can increase the cost/complexity of any host updates.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **PRO**<p>Having a single web application for all sites makes deployments and hosting updates easier and faster.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Performance                                                                                                | **PRO**<p>This is the standard method for Next.js applications to be deployed, making use of all performance aspects of Next.js and your host.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **CON**<p>The multisite add-on may have a _small_ performance impact, as every request must go through the middleware to resolve the site based on the request url and then rewrite the content from the desired `_site_<sitename>` folder.</p><p>How much this impacts performance can be very dependent on how many sites there are. Any project should test the impact before making a decision.</p>                                                                                                                                                                                                                                                                                                                                    |
| 404 and 500 Error Pages                                                                                    | **PRO**<p>With separate applications, your client can create custom 404 and 500 error pages using the presentation & components within XM Cloud. This is the only way to accomplish this requirement.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | **CON**<p>Custom 404 and 500 error pages are _not_ supported, this is a limitation of how Next.js generates these error pages. All sites would use the same `404.tsx` and `500.tsx`. A generic version of the pages would have to be used that is the same for all sites.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Isolation of Web Application deployments<p>I want to be able to deploy Site A without affecting Site B</p> | **PRO**<p>This is the only option that will allow independent deployments. When deploying a new version, care will need to be taken so that any CMS updates (data templates, rendering items etc….) do not affect other sites. This can be mitigated by using separate Site Collections.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **CON**<p>It is not possible to deploy a single site’s code when using the multisite add-on. Every deployment to the web application will affect all sites hosted within the multisite instance.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Design Systems/Component Libraries                                                                         | **PRO** and **CON**<p>With multiple applications a single design system/component library is more complex. Workspaces can be employed to share the component code between applications.</p><p>There are other tools, like [Turborepo](https://turbo.build/repo), that can help with sharing dependencies in a monorepo.</p><p>While these solutions work well when building the web application, there are issues when using Docker for the local development environment.</p><p>We have added this as a pro and a con because while tooling like Turborepo adds complexity, there are also many benefits to this tooling, such as build speed.</p>                                                                                                                                                                            | **PRO**<p>With a single application, creating a design system/component library is simple as it can just be part of the application code. There is no need for any extra tooling.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Discussion

### Does each deployed web application need to be a separate Next.js application?

The short answer is no. If you decide that a separate deployed Next.js application is the best option for your project, you can still keep a single Next.js application in your codebase. This is useful if all your sites share markup/styles, but you want the flexibility and benefits of deploying the applications separately. In this case, you would simply deploy the same code to multiple Next.js projects and use environment variables to set the `SITECORE_SITE_NAME` for each deployment.

### Custom 404 and Error Pages with the Pages Router

As mentioned in the Pros/Cons list, the multisite plugin does not support custom 404 or 500 error pages. This is because Next.js uses special routes (`404.tsx` and `500.tsx`) that are compiled and generated during build time. If you have i18n configured for localization, the configured locales will be taken into account and each locale will have a static version generated.

The multisite plugin relies on dynamic site resolution and a custom rewrite middleware to display the generated content for each site.

If you have multiple sites that require custom 404/500 pages that will be unique per site, you will need to deploy each site as a separate application.

See the github discussion: [In multisite setup, the error pages in XMC are not rendered for each site. · Sitecore jss · Discussion #1622](https://github.com/Sitecore/jss/discussions/1622#discussioncomment-8807888)

### Deploying Multiple Editing Hosts

When creating separate applications for sites, you will need to configure the `xmcloud.build.json` to deploy each site to its own editing host for inline editing using Pages. [XM Cloud Build Configuration for editing hosts](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-xm-cloud-build-configuration.html#UUID-62230c7d-0e8e-6a81-3434-3b12f25a5808_section-idm4568099360318433299161991908).

The `renderingHosts` property is an array of hosts. Out of the box this will be configured to deploy the code to the `xmcloudpreview` editing host. At the start of the project, this will be re-configured to deploy your own code to the editing host. For a project with multiple applications, you can add extra editing hosts here:

```json
  "renderingHosts": {
    "siteA": {
      "path": "./src/siteA",
      "nodeVersion": "16.3.19",
      "jssDeploymentSecret": "super-secret-value",
      "enabled": true,
      "type": "sxa",
      "buildCommand": "build",
      "runCommand": "next:start"
    },
    "siteB": {
      "path": "./src/siteB",
      "nodeVersion": "16.3.19",
      "jssDeploymentSecret": "super-secret-value",
      "enabled": true,
      "type": "sxa",
      "buildCommand": "build",
      "runCommand": "next:start"
    }
  }
```

This will provision an editing host for each entry. When this is deployed to XM Cloud, it will create a predefined rendering host item for each host in the config. Make sure that you set the correct predefined host in your site’s definition item.

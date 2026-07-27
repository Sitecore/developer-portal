---
title: 'Multisite Architecture'
description: 'Setting up a multisite architecture in XM Cloud for a single source of content'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-04-31'
created: '2024-04-15'
audience: ['Architect', 'Product Owner', 'Technical Implementer']
---

## Context

Implementations often require efficiently hosting multiple website properties using a single source for content. To achieve this, it’s important to design a well-structured content tree that ensures scalability and usability.

The Next.js or ASP.NET Core application(s) should be architected to align with this approach, determining whether a single application can handle all sites or if multiple applications are needed. This structure should also seamlessly integrate localization to support diverse audiences.

> The following details out the architecture in the case of Next.JS & .NET Core - other frameworks are available, but consider any differences between frameworks and SDKs.

## Execution

Approaching this requirement requires decisions on Information Architecture and Application Architecture Hosting.

### Multisite Content Tree

Sitecore XM Cloud supports multisite content solutions out of the box (OOTB) through the concept of [Site Collections](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-terminology.html#UUID-3ceb7d45-3caf-3196-3a9a-f59a9474182a_xmc_sitecollection) and [Sites](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-terminology.html#UUID-3ceb7d45-3caf-3196-3a9a-f59a9474182a_xmc_site).

- A Site is a collection of content specific to a single website. This can include Pages, Datasources, and Configuration Items.
- A Site Collection is a grouping for one or more related sites to help organize the sites according to business requirements.

A Site Collection is _always_ required, even for a single site implementation; this is where all data templates & components are stored for use within the Site’s inside that collection.

When deciding how many Site Collections to create and then which collections to add the sites to, these choices will be driven by business requirements.

For example, if a client is a multi-brand client with separate content teams for each brand, each brand should have its own Site Collection. If the client has a single content team or has multiple regional sites within a brand and needs to be able to share content between regional sites, then a single Site Collection can be used taking advantage of [XM Cloud Site Management](/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management) features.

> When creating Site Collections, it is important to note that data templates, rendering items and content can only be shared by sites within the _same_ Site Collection.

<figure><img src="/images/learn/accelerate/xm-cloud/example-multisite-content-tree.png" alt="Example multisite content tree"/><figcaption>Example multisite content tree</figcaption></figure>

To share content between sites within a Site Collection, review the [Sharing content](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sharing-content.html) documentation.

### Hosting the Web Application

The XM Cloud implementation architecture consists of:

- XM Cloud, SaaS hosted.
- Rendering Hosts - [front-end hosting](https://doc.sitecore.com/xmc/en/developers/xm-cloud/front-end-hosting-applications.html) and [editing host](https://doc.sitecore.com/xmc/en/developers/xm-cloud/editing-hosts-and-rendering-hosts.html).
- Code base/solution.

<figure><img src="/images/learn/accelerate/xm-cloud/implementation-architecture.png" alt="Implementation Architecture"/><figcaption></figcaption></figure>

When we are planning the architecture for multiple sites for the web application, there are 2 main paths:

- <strong>One app per website</strong> - deploy a separate Next.js or ASP.NET Core web application for each website - this can be the same Next.js or ASP.NET Core application code, or completely different applications, or a combination.
- <strong>One app for multiple websites</strong> - deploy a single Next.js or ASP.NET Core web application. .

<figure><img src="/images/learn/accelerate/xm-cloud/one-app-vs-multi.png" alt="One app per website vs one app for multiple websites"/><figcaption></figcaption></figure>

There are some differences in how **One app for multiple websites** should be achieved in Next.JS vs ASP.NET Core web applications.

<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>ASP.NET Core</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
        Deploy a single Next.JS application using the [multisite add-on](https://doc.sitecore.com/xmc/en/developers/jss/22/jss-xmc/the-next-js-multisite-add-on.html).

      </TabPanel>
      <TabPanel>
        ASP.NET Core application should use multisite middleware component feature of [Sitecore ASP.NET Core SDK](https://github.com/Sitecore/ASP.NET-Core-SDK).
        
        <img src="/images/learn/accelerate/xm-cloud/image-20250321-091939.png" alt="Multisite middleware"/>
        <br/><br/>

        Note, that GraphQL Client configuration should have Multisite support configured.

        <img src="/images/learn/accelerate/xm-cloud/image-20250321-092144.png" alt="GraphQL Client configuration"/>
        <br/><br/>

        Multisite middleware is enabled in the [Sitecore ASP.NET Core SDK starter app](https://github.com/Sitecore/xmcloud-starter-dotnet).
      </TabPanel>
  </TabPanels>
</Tabs>

<hr/>

There are pros and cons for considering one app per website vs multiple website, it is up to the architect to weigh the pros/cons and select the best option for the project that meets the business and technical requirements.

| <strong>Consideration</strong>                                                                                           | Separate Applications                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Single Application                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <strong>Build time</strong>                                                                                              | **PRO**<br/> With separate applications, you can make use of parallel builds on your host to deploy multiple sites at the same time. This comes with a caveat: You may hit the Edge rate limit if you have too many parallel builds.<br/><br/> The Experience Edge rate limit will govern how fast your sites will generate. In practice, [all implementations will need to limit how many pages are generated on build](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/customize-build-time-static-paths-in-jss-next-js-apps.html). Separate applications will have a slight edge if parallel builds do not hit the rate limit. <br/><br/> Review [Rate Limits and Caching](/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching) for more details. | **CON**<br/>With the multisite add-on, all pages in all your sites will be generated on build. If you have a lot of sites/pages, this can extend the build time to many minutes.<br/><br/>To mitigate this, you can manually configure which sites are included in the application and also limit the pages that are generated on build:<br/><br/>- [Manually configure the sites in a multisite application](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/manually-configure-the-sites-in-a-multisite-application.html)<br/>- [Customize build-time static paths in JSS Next.js apps](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/customize-build-time-static-paths-in-jss-next-js-apps.html).              |
| <strong>Each site requires unique CSS and HTML for components</strong>                                                   | **PRO**<br/> Create separate Next.js or ASP.NET Core applications for each site. Each application is an isolated application and changes can easily be made without effecting the other sites. This will make site maintenance and future work easier as the team will only need to test the site being worked on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **CON**<br/>Keeping all the site code in a single Next.js or ASP.NET Core application will make maintenance and future work more complex.<br/><br/>There is no OOTB theme support in XM Cloud yet, so for sites with different styles, a method for selecting and rendering the required theme will need to be implemented.<br/><br/>Regression testing will be required across all sites as any code change has the ability to affect every site that is hosted within the single application. |
| <strong>Each site uses the same styling and markup, it is only the content that changes</strong>                         | **PRO**<br/>The same Next.js or ASP.NET Core application can be easily deployed multiple times. Once per site.<br/><br/>**CON**<br/>Having many applications on your host to deploy to and maintain the hosting for can increase the cost/complexity of any host updates.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | **PRO**<br/>Having a single web application for all sites makes deployments and hosting updates easier and faster.                                                                                                                                                                                                                                                                                                                                                              |
| <strong>Performance of Next.JS application</strong>                                                                                             | **PRO**<br/>This is the standard method for Next.js applications to be deployed, making use of all performance aspects of Next.js and your host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **CON**<br/>The multisite add-on in Next.JS may have a _small_ performance impact, as every request must go through the middleware to resolve the site based on the request url and then rewrite the content from the desired <code>\_site_sitename</code> folder.<br/><br/>How much this impacts performance can be very dependent on how many sites there are. Any project should test the impact before making a decision.                                                                   |
| <strong>Isolation of Web Application deployments - I want to be able to deploy Site A without affecting Site B.</strong> | **PRO**<br/>This is the only option that will allow independent deployments. When deploying a new version, care will need to be taken so that any CMS updates (data templates, rendering items etc….) do not affect other sites. This can be mitigated by using separate Site Collections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **CON**<br/>It is not possible to deploy a single site’s code without affecting                                                                                                    all websites served by this application.                                                                                                                                                                                                                                                                 |
| <strong>Design Systems/Component Libraries for Next.JS</strong>                                                                      | **PRO and CON**<br/>With multiple applications a single design system/component library is more complex. Workspaces can be employed to share the component code between applications. <br/><br/>There are other tools, like [Turborepo](https://turbo.build/repo), that can help with sharing dependencies in a monorepo.<br/><br/>While these solutions work well when building the web application, there are issues when using Docker for the local development environment.<br/><br/>We have added this as a pro and a con because while tooling like Turborepo adds complexity, there are also many benefits to this tooling, such as build speed.                                                                                                                                                | **PRO**<br/>With a single application, creating a design system/component library is simple as it can just be part of the application code. There is no need for any extra tooling                                                                                                                                                                                                                                                                                              |
| <strong>404 and 500 Error Pages</strong>                                                                                 | **PRO**<p>With separate applications, your client can create custom 404 and 500 error pages using the presentation & components within XM Cloud. This is the only way to accomplish this requirement.<br/><br/> ASP.NET Core SDK currently does not support custom site-specific error pages.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | **CON**<p>Custom 404 and 500 error pages are _not_ supported, this is a limitation of how Next.js generates these error pages. All sites would use the same `404.tsx` and `500.tsx`. A generic version of the pages would have to be used that is the same for all sites. <br/><br/>ASP.NET Core SDK does not support custom site-specific error pages.</p>                                                                                                                                                                                               |

## Insights

### Does each deployed web application need to be a separate application?

The short answer is no. If you decide that a separately deployed web application is the best option for your project, you can still keep a single Next.js or ASP.NET Core application in your codebase. This is useful if all your sites share markup/styles, but you want the flexibility and benefits of deploying the applications separately. In this case, you would simply deploy the same code to multiple Next.js projects and use environment variables to set the <code>SITECORE_SITE_NAME</code> for Next.JS and <code>Sitecore:DefaultSiteName</code> for ASP.NET Core application, for each deployment.

### Custom 404 and Error Pages with the Pages Router
Custom 404 and 500 Error pages can be configured for each site in Sites settings.

<img src="/images/learn/accelerate/xm-cloud/image-20250131-122723.png" alt="Error pages on Sites"/>
<br/><br/>

<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>ASP.NET Core</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
        As mentioned in the Pros/Cons list, the multisite plugin does not support custom 404 or 500 error pages. This is because Next.js uses special routes (`404.tsx` and `500.tsx`) that are compiled and generated during build time. If you have i18n configured for localization, the configured locales will be taken into account and each locale will have a static version generated.

        The multisite plugin relies on dynamic site resolution and a custom rewrite middleware to display the generated content for each site.

        If you have multiple sites that require custom 404/500 pages that will be unique per site, you will need to deploy each site as a separate application.

        See the github discussion: [In multisite setup, the error pages in XMC are not rendered for each site. · Sitecore jss · Discussion #1622](https://github.com/Sitecore/jss/discussions/1622#discussioncomment-8807888).
      </TabPanel>
      <TabPanel>
          Currently, the ASP.NET Core SDK does not support custom site-specific error pages. This functionality should be implemented in the Sitecore ASP.NET Core SDK repository and integrated into the starter template.
      </TabPanel>
  </TabPanels>
</Tabs>


### Deploying Multiple Editing Hosts

<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>ASP.NET Core</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
          When creating separate applications for sites, you will need to configure the <code>xmcloud.build.json</code> to deploy each site to its own editing host for inline editing using Pages. The XM Cloud build configuration. There is a [configuration for the rendering host](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-xm-cloud-build-configuration.html#configuration-options-for-rendering-hosts).

          The <code>renderingHosts</code> property is an array of hosts. Out of the box this will be configured to deploy the code to the <code>xmcloudpreview</code> editing host. At the start of the project, this will be re-configured to deploy your own code to the editing host. For a project with multiple applications, you can add extra editing hosts here:

          ```typescript
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

          <br/><br/>

          This will provision an editing host for each entry. When this is deployed to XM Cloud, it will create a predefined rendering host item for each host in the config. Make sure that you set the correct predefined host in your site’s definition item.
      </TabPanel>
      <TabPanel>
        Currently, XM Cloud does not support deployment of editing hosts for ASP.NET Core applications. This functionality may be implemented in future. As of now, an [external editing host](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-an-external-editing-host.html) should be configured for ASP.NET Core applications.
      </TabPanel>
  </TabPanels>
</Tabs>



## Related Recipes

<Row columns={2}>
  <Link title="Rate Limits and Caching" link="/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching" />
  <Link title="Multi-site management" link="/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management" />
  <Link title="Localization" link="/learn/accelerate/xm-cloud/implementation/information-architecture/localization" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Manage multiple sites with Site Manager" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-multiple-sites-with-the-sxa-site-manager.html" />
  <Link title="Next.js Multisite add-on" link="https://doc.sitecore.com/xmc/en/developers/jss/216/jss-xmc/the-next-js-multisite-add-on.html" />
  <Link title="Sharing content" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sharing-content.html" />
  <Link title="XM Cloud build configuration" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-xm-cloud-build-configuration.html" />
</Row>

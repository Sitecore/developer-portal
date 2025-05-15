---
title: 'XM Cloud Quick Reference'
description: 'A guide to enable you to rapidly discover key resources, best practices, and key tools to plan, build, and scale on Sitecore XM Cloud.'
area: ['accelerate']
product: ['xm-cloud']
productLogo: 'XMCloud'
hasSubPageNav: false
hasInPageNav: false
---

## Getting Started

Even before you get to platform options or tech design, you need to have alignment on what success even looks like. It's easy for teams to agree to do all kinds of things and miss the bigger picture — especially with a cross-functional project like an XM Cloud migration.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Moving to SaaS](/learn/accelerate/xm-cloud/pre-development/discovery/moving-to-saas)
    - [Transition from XM/XP to XM Cloud](/learn/accelerate/xm-cloud/pre-development/discovery/xm-xp-to-xmc)
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Sitecore Cloud Portal](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html)
    - [Sitecore XM Cloud](https://doc.sitecore.com/xmc/en/users/xm-cloud/sitecore-xm-cloud.html)
    - [Getting started with XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html)
    - [Content authoring concepts](https://doc.sitecore.com/xmc/en/developers/xm-cloud/content-authoring-concepts-for-developers-new-to-sitecore.html)    
  </GroupItem>  
</Group>


## Project Planning
An XM Cloud project is an opportunity to implement with intention and purpose from the start. Unencumbered by legacy, you are able to model your content, integrations, and workflows according to what your audiences and teams actually need—both today and in the future. 

Yet such freedom requires decisions. Success rides on advance planning in architecture, ownership, governance, and delivery processes if subsequent drift is to be avoided. The objective: a lean, composable platform that scales with with business needs and strategy..

Effective project planning is the key to any successful implementation - ensuring that this is done across a thorough understanding of business needs to create a plan that aligns with your goals.


<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Scope and Governance Framework](/learn/accelerate/xm-cloud/pre-development/discovery/scope-governance-framework)
    - [Preparing for an XM Cloud Project](/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project)
    - [Project Estimation](/learn/accelerate/xm-cloud/pre-development/project-planning/project-estimation)
  </GroupItem>
  <GroupItem>
    #### Documentation
      - [XM Cloud Changelog](/changelog/xm-cloud)
      - [XM Cloud Sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html)
      - [XM Cloud Deploy](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html)
  </GroupItem>  
</Group>

## Discovery
Discovery is the foundation of every successful XM Cloud implementation. It's where we define the "why," uncover the "what," and plan the "how." In this crucial phase, it's imperative the business needs align on goals, and chart a path to deliver an exceptional user experiences. From identifying user personas to mapping content strategies, discovery ensures your XM Cloud solution is tailored to drive impact and scalability.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Transition from XM/XP to XM Cloud](/learn/accelerate/xm-cloud/pre-development/discovery/xm-xp-to-xmc)
    - [Requirements Gathering](/learn/accelerate/xm-cloud/pre-development/discovery/requirements-gathering)
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Getting started with XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html)
    - [Sitecore authentication](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/sitecore-authentication.html)
    - [Personalize in XM Cloud](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html)
  </GroupItem>  
</Group>

Information Architecture (IA) is the backbone of any site implementation - ensuring your content is structured, scalable, and optimized for delivery. From understanding your content audit to the process of publishing to Edge, these essential steps prepare your digital experiences for success.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Content Audit](/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit)
    - [Publishing to Edge](/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge)
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/pages.html)
    - [Components](https://doc.sitecore.com/xmc/en/users/xm-cloud/components.html)
    - [Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html)
    - [Content modeling and presentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/content-modeling-and-presentation.html)
  </GroupItem>  
</Group>

When building scalable and performant digital experiences with XM Cloud, hosting the head application is a critical step in your architecture. Based on the host type, different decisions and requirements will be taken for the project setup.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Hosting the Web Application](/learn/accelerate/xm-cloud/pre-development/hosting-applications/hosting-web-application)
    - [Next.js on Azure App Services](/learn/accelerate/xm-cloud/pre-development/hosting-applications/nextjs-azure-app-services)
    - [Hosting the Web Applications for ASP.NET Core](/learn/accelerate/xm-cloud/pre-development/hosting-applications/hosting-aspnet-core)        
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Front-end hosting applications](https://doc.sitecore.com/xmc/en/developers/xm-cloud/front-end-hosting-applications.html)
    - [Editing hosts and rendering hosts](https://doc.sitecore.com/xmc/en/developers/xm-cloud/editing-hosts-and-rendering-hosts.html)
    - [Source control and hosting providers](https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-connections-for-source-control-and-hosting-providers.html)
  </GroupItem>  
</Group>

With these requirements starting to come together, details of the implementation approach needs to be put together including:

- [Developer Considerations](/learn/accelerate/xm-cloud/pre-development/developer-considerations) on the web developer experience, component best practices and development workflows including branching strategies.
- Tackling specific implementation requirements such as [user login](/learn/accelerate/xm-cloud/pre-development/security/head-application-security) and [site management](/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management).
- These would all direct the [Project Architecture](/learn/accelerate/xm-cloud/pre-development/project-architecture) including the [multisite architecture](/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite) if required.

**Sprint Zero** is a foundational phase in any XM Cloud project that should be running in parallel to the discovery. This sprint focuses on establishing the project, ensuring your team has the tools, processes, and baseline structure needed to deliver quality outcomes with minimal friction. Investing time in this allows for the groundwork of the implementation setup to be done, ready for the project specific requirements.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Project Solution Setup](/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup)
    - [Setup Sitecore Content Serialization](/learn/accelerate/xm-cloud/pre-development/sprint-zero/setup-content-serialization)
    - [DevOps](/learn/accelerate/xm-cloud/pre-development/sprint-zero/devops)
    - [Creating a Site](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site)
     
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Set up your local development environment](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-local-development-environment.html)
    - [Using Docker for full-stack development](https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-docker-for-full-stack-development.html)
    - [Content modeling and presentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/content-modeling-and-presentation.html)
    - [XM Cloud development](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-development.html)
  </GroupItem>  
</Group>

## Implementation
Implementation is where the strategy turns into execution. Environments to component construction, this is where teams work together, code, test, and iterate to make your XM Cloud vision a reality. With the correct technical underpinnings and project rhythm, implementation doesn't just make your solution work—but makes it poised to deliver value from day one.

In parallel to this work, don’t forget to make sure your [Enablement & Training](/learn/accelerate/xm-cloud/pre-development/discovery/moving-to-saas#enablement--training) is running in parallel, allowing for all stakeholders to be familiar with XM Cloud as early as possible. This is also a good time to go back to the [governance framework](/learn/accelerate/xm-cloud/pre-development/discovery/scope-governance-framework) setup and make sure it’s aligned with what is being implemented - and close off any gaps!

### Developer Experience
While the basics should have been setup during Sprint Zero, there are other considerations that should be tackled to support a long-term maintainability and scalability of your XM Cloud project.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [CMS Error Monitoring](/learn/accelerate/xm-cloud/implementation/developer-experience/cms-error-monitoring)
    - [Web Application Error Monitoring](/learn/accelerate/xm-cloud/implementation/developer-experience/web-application-error-handling)
    - [Troubleshooting Local Dev Container Environment](/learn/accelerate/xm-cloud/implementation/developer-experience/troubleshooting-docker)
     
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Manage an environemnt](https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-an-environment.html)
    - [Setup full-stack local development](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-full-stack-xm-cloud-local-development-environment.html)
  </GroupItem>  
</Group>



### Information Architecture
A well-structured information architecture is essential for delivering intuitive and scalable digital experiences. Configuring features such as workflows for efficient content management, configuring redirects and other concepts that will allow you to support both editorial efficiency and user-centric design.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Localization](/learn/accelerate/xm-cloud/implementation/information-architecture/localization)
    - [Redirects](/learn/accelerate/xm-cloud/implementation/information-architecture/redirect)
    - [Sitemap](/learn/accelerate/xm-cloud/implementation/information-architecture/sitemap)
    - [Wildcard Pages](/learn/accelerate/xm-cloud/implementation/information-architecture/wildcard-pages)
    - [Workflows](/learn/accelerate/xm-cloud/implementation/information-architecture/workflow)
     
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Manage language and locales](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-languages-and-locales.html)
    - [Work with language versions](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-language-versions.html)
    - [Configure a sitemap in Sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/configure-a-sitemap-in-sites.html)
    - [Move an item through the workflow](https://doc.sitecore.com/xmc/en/users/xm-cloud/move-an-item-through-the-workflow.html)
  </GroupItem>  
</Group>

With customization needed on web requests, the [Middleware](/learn/accelerate/xm-cloud/implementation/middleware-invocations) provided can also be configured to process user requests and modifying them according to specific rules such as managing URL structures.

At this stage, your content requirements should start coming to life by the implementation of pages and components templates that will shape how content is created, managed and experiences. Each template should be build to be adaptable without compromising consistency, equipping content authors with the right tools.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Creating a Component Gallery](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-a-component-gallery)
    - [Creating New Components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components)
    - [Creating Branch Templates](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-branch-templates)
    - [Using Placeholders](/learn/accelerate/xm-cloud/implementation/developer-experience/using-placeholders)
     
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Adding content to a page](https://doc.sitecore.com/xmc/en/users/xm-cloud/adding-content-to-a-page.html)
    - [Adding components to a page](https://doc.sitecore.com/xmc/en/users/xm-cloud/adding-components-to-a-page.html)
    - [Selecting a component or placeholder](https://doc.sitecore.com/xmc/en/users/xm-cloud/selecting-a-component-or-placeholder.html)
    - [Build page templates](https://doc.sitecore.com/xmc/en/users/xm-cloud/building-page-templates.html)
  </GroupItem>  
</Group>


### Integrations
Integrating data into your site is a cornerstone of building dynamic digital experiences. Based on the requirements identified, the setup should allow for a seamless interactions between your web application and data.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Retrieving Data from 3rd Party](/learn/accelerate/xm-cloud/implementation/external-data-integration/retrieving-data-from-3rd-party-integrations)
    - [Custom Editing UX for 3rd Party](/learn/accelerate/xm-cloud/implementation/external-data-integration/custom-editing-ux-3rd-party-integrations)
    - [Getting Component Specific Data](/learn/accelerate/xm-cloud/implementation/external-data-integration/getting-component-specific-data)
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Component-level data fetching in JSS Next.js apps](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/component-level-data-fetching-in-jss-next-js-apps.html)
    - [Assign a data item from an external data source](https://doc.sitecore.com/xmc/en/users/xm-cloud/assign-a-data-item-from-an-external-data-source.html)
  </GroupItem>  
</Group>


### Configuration of other products
Switching to composable means that not all requirements will be fulfilled by just XM Cloud and based on your requirements, other tools or products might require configuration to align with your requirements.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Sitecore Search](/learn/accelerate/xm-cloud/implementation/sitecore-search)
    - [XM Cloud Embedded Personalization]()
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Sitecore Connect for Content Hub](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-connect-for-content-hub.html)
    - [Sitecore Personalize](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html)
  </GroupItem>  
</Group>


## Go-Live
You've implemented it — now it's time to launch it. Go-live becomes a coordinated transition that needs planning and disciplined execution. Having a cutover plan will act as guide, outlining what needs to happen, when, and by whom, to ensure a controlled and successful launch.

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Content Migration](/learn/accelerate/xm-cloud/final-steps/content-migration)
    - [Go-Live Checklist](/learn/accelerate/xm-cloud/final-steps/go-live-checklist)
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Data privacy](https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-privacy.html)
    - [Search engine optimization](https://doc.sitecore.com/xmc/en/developers/xm-cloud/search-engine-optimization--seo-.html)
    - [Manage personalization and analytics for sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html)
  </GroupItem>  
</Group>

## Optimization
Launch is just the beginning. Real value is in the way you watch, learn, and hone after your site goes live. XM Cloud gives you the means to go fast, but to make improved what matters, you need to see what matters. 

<Group title="" description="">
  <GroupItem>
    #### Recipies
    - [Data Fetching Optimization](/learn/accelerate/xm-cloud/optimization/data-fetching-optimization)
    - [On-page SEO Optimization](/learn/accelerate/xm-cloud/optimization/seo-web-optimization)
    - [Performance Optimization](/learn/accelerate/xm-cloud/optimization/performance-optimization)
    - [Publishing Optimization](/learn/accelerate/xm-cloud/optimization/publishing-optimization)
  </GroupItem>
  <GroupItem>
    #### Documentation
    - [Insights](https://doc.sitecore.com/xmc/en/users/xm-cloud/insights.html)
    - [Personalize](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html)
    - [A/B/n testing](https://doc.sitecore.com/xmc/en/users/xm-cloud/a-b-n-testing.html)
    - [Analyze](https://doc.sitecore.com/xmc/en/users/xm-cloud/analyze.html)
  </GroupItem>  
</Group>




---
title: 'Moving to SaaS - Concepts You Need to Know'
description: 'Switching to XM Cloud means moving to a SaaS model which is different from PaaS or IaaS.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-04-30'
created: '2024-10-09'
audience: ['All']
---

## Context

As your team transitions to XM Cloud, it's essential to understand that implementing Software as a Service (SaaS) is fundamentally different from Platform as a Service (PaaS) or Infrastructure as a service (IaaS). 

While content management systems like Sitecore XP offered the capabilities for extensive customization and control, Sitecore XM Cloud operates on a SaaS model that prioritizes agility, scalability, and reduced operational overhead. The following outlines the key considerations, challenges, and opportunities in making this transition.

## Execution

Implementing XM Cloud represents a significant shift in how you approach web development, content management, and customer experience. Understanding the differences between SaaS and PaaS, identifying the right use cases, and planning for compliance, customization, and integration challenges will be critical to a successful transition.

One of the most significant adjustments when moving to XM Cloud is recognizing that it's not simply a cloud version of Sitecore XP.  Instead, it’s a new product designed to meet different needs and identifying the correct use cases is critical.

For example, XM Cloud is ideal for companies looking for faster time-to-market, simplified content management, no more upgrades, and the ability to scale without worrying about infrastructure. However, it may not suit all scenarios, particularly those requiring on-premises hosting for compliance reasons or not ready to move to Headless.

Before diving into the implementation, it should be the top priority to clarify the value you're seeking from the move to XM Cloud. Often,  projects that begin without a well-defined target are likely to lead to misalignment between stakeholders.

### Scope Definition
Defining scope is not merely deciding what is to be moved from one CMS to another. It is to make wise, thoughtful decisions—what to move soon, what to move eventually, and what not to move at all. Legacy systems are not code. They are people, processes, integrations, and undocumented dependencies. It will require more than a technical strategy to move off them — it will require a transition strategy that considers the seen and the unseen.

XM Cloud offers the agility to develop faster, iterate faster, and scale with no constraints of legacy platforms. However with no clear scope, that agility is at risk: features are committed to that cannot be delivered, timelines slip, and teams are pulled a million different ways.

Use this phase to find your Time to Impact: most minimal, most valuable version of experience you can ship to make impact. Prioritize content, features, and integrations by business value, readiness, and complexity—not necessarily what's currently included in legacy platform.

Next, build a plan for what’s coming later. Subsequent phases can include features like personalization, integration with CRM, multilingualism, or regional websites—those don't necessarily have to be slowing down your build if not day one critical.

This is where you can set expectations, avert surprises, and generate momentum

### Map Existing Functionality
One of the fastest ways to ruin the value of a SaaS migration is trying to recreate your legacy system feature-for-feature. SaaS platforms are designed for standardization, scale, and speed — not hand-crafted copies of legacy stacks. Focus on business outcomes, not a laundry list of yesterday's features.

Take account of where the business is now and what the high priority needs are, and only then decide what to build. Isolate what's essential, what's obsolete, and what's not there. If not, teams will be rebuilding unnecessary overhead that's no longer beneficial to the business or, worse, excluding functionality to which end users have grown used to.

A map of your current functionality provides the baseline of your future-state architecture. Create a strategic audit of what templates, components, workflows, integrations, and personalization rules exist today. Look beyond what was built to what’s in use—and what’s driving value.

Prioritize what needs to be migrated, refactored, replace, or retired. Treat it as a strategic audit, not as an inventory. Get both technical and user-side functionality involved in this process and interview authors, marketers, business users and ask them what they rely on. Don’t be defensive or shocked with you come across surprises. That is the point of the full process.

### Enablement & Training
Training of the team working on this implementation will require to cover specific areas based on their role, but there are a set of themes and concepts everyone should be aware of -

| Role    | Area |
| -------- | ------- |
| **Everyone**  | <ul><li>We are moving to a “Head” first approach – we are no longer building a single app but a decoupled front-end application and configuring a SaaS application, looking at API first.</li><li>Look at the processes you have in place, do these still work in a SaaS world?</li></ul>​ |
| **Business, Marketing, Authors** | <ul><li>Understand basics of Content Authoring in the new platform  and  build and test out an end-to-end authoring workflow.​​</li><li>Question if your Marketing, Content and SEO Strategy still align to this new implementation? Redefine business, content, marketing workflows if required.​​</li><li>Does the content you have for the existing site fit into your new solution, or is there an Information Architecture refresh required?</li><li>Are the tools that you are using, for the implementation and day-to-day, still viable?​ For example:<ul><li>Many traditional, on-premise desktop-based tools are not designed for cloud environments and may lack the integration capabilities needed for SaaS platforms.</li><li>Some proprietary software tools are highly specialized and not built to operate in a SaaS environment due to licensing models, cloud incompatibility, or lack of collaborative features.</li><li>Tools with Limited API Support</li></ul></li></ul>    |
| **Technical Teams**   | <ul><li>Your regular Sitecore Developer training is not enough, and we also need to focus also the API development and consumption.​ Looking ahead, we should be looking at a CMS Developer vs Web Application Developer roles.</li><li>Front-end focus including Next.JS, Angular or ASP.NET Core focus on how to handle the Layout Services responses.​</li><li>Experience Edge and GraphQL including updates such as publishing.​</li><li>DevOps processes, managing cloud platforms such as Vercel/Netlify, Azure App Services, Docker etc.​</li></ul>Review the [Preparing for an XM Cloud Project](/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project) recipe for additional details on the implementation team setup. |

### Data Driven Implementation
One of the most significant considerations for an implementation is that data-driven deployment isn't optional — it's a requirement. If you're launching a new platform, optimizing a current stack, or rolling out a significant upgrade, you must measure the impact not only at launch, but plan for this to be maintained reviewed in an ongoing basis.

Questions must be considered and documented such as how much time does it take to create a page now compared to your previous setup? What is the real effect on developer velocity? Can you baseline authoring experience and measure tangible improvements over time? These are the types of questions that require hard, quantifiable answers — not assumptions.

To consider the long term effect of this project it is important to plan and document the return on investment it is generating, any significant investment must have some strategy for showing it's value return to the business. That begins with clear baselines and KPIs at the outset, and the discipline to quantify actual outcomes further down the line. It is a matter of learning quicker, adapting more rationally, and making future decisions founded on results in the world, not theory.

## Insights

The following topics are all considerations when moving to XM Cloud -  when planning, it's crucial to review each topic based on the implementation in front of you.

### Transition from Sitecore XM/XP to XM Cloud
If you are moving from Sitecore XM/XP, this requires careful planning because they are fundamentally different products. For example, search functionality in XP relies heavily on Solr, whereas XM Cloud lacks a web database, necessitating alternative approaches. Consider using composable solutions or custom implementations to address feature approach.

Read more on the [Transition from XM/XP to XM Cloud recipe](/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc).

### Content Strategy: Do you need to migrate everything?
When migrating content to XM Cloud, evaluate whether all your existing content is necessary. This is a good time to revisit your SEO, marketing, and content strategies to ensure they align with the new platform's capabilities.

Migrating everything might seem like the easiest option, but it’s rarely the most effective. Instead, selective content migration is often more efficient and aligned with long-term goals.

Read more on the [Content Audit](/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit) recipe.

### Single Site vs. Multisite
Choosing between a single site and multisite is not just a technical — it's strategic. It starts with your strategy and your audience: if you need discrete experiences for different markets or products, multisite is often the way to go. If you're hosting a single brand with shared messaging, a single site can be more efficient.

When choosing to implement a multisite, consider that this will create a different operational process— additional teams, approvals, governance — and different technical strategies from a hosting, routing, and integration standpoint. You can over-engineer if you're not careful. A single site can sometimes fulfil all your requirements based on your end user journeys.

If you begin with one site but anticipate needing to scale, design for it from the beginning. This can be done by creating reusable components, extensible page models, content architecture, and solid governance will make or break your ability to scale in the future. Retrofitting a single site to a multisite framework is painful and expensive.

Lastly, business goals, not technical inclinations, should inform the decision. Future scalability, content reuse, team ownership, and operational simplicity all need to be considered from the beginning — otherwise, you'll be building something that will not flex when you need it most.

Review the [Site Management](/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management) and [Multisite Architecture](/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite) recipes for more information.

### Personalization: xDB vs. Embedded vs. CDP/Personalize
XM Cloud does not offer a direct replacement for xDB, but it offers a set of rules targeting audiences and segments where you can define variations of a page based on those audiences

Review the rules available, and how these can be extended by Personalize.

If your current implementation heavily relies on Sitecore XP's xDB or has requirements for Customer Data management, you’ll need to assess whether these new tools meet your needs or if additional solutions are required - more complex scenarios may require CDP or other integrations. Similarly, email marketing, historically handled by EXM, may need to shift to Sitecore Send or other solutions, depending on your needs.

Review the [Feature Matrix and Product Parities](https://developers.sitecore.com/learn/faq/xm-cloud-embedded-personalization/feature-matrix) for more detailed information.

### CMS Customizations: Rethink Your Approach
Historically, PaaS CMS allowed for extensive CMS customizations, but XM Cloud may require a different approach. Evaluate whether your current customizations are still necessary or if they can be simplified or eliminated in the new environment. Keep in mind XM Cloud is constantly evolving, with new features and customization options being added in an ongoing basis.

Read more on the [External Data Integrations](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/external-data-integration) recipes.

### Features implemented
When planning a strategy for implementation in XM Cloud, it's crucial to categorize each customization based on its fit within the new platform. First, assess whether the features can and should be maintained directly in XM Cloud, leveraging its built-in capabilities and minimizing the need for external tools. If a customization requires significant changes, move it outside of XM Cloud, in your head application. 

For more complex scenarios, where this extends beyond the scope of XM Cloud’s native features, it may be necessary to handle it through other composable product, ensuring a seamless integration with the broader digital experience platform. In cases where a customization no longer aligns with the architecture or goals of XM Cloud, it might be best to drop the old approach and devise a new solution that better fits the platform's capabilities, ensuring a more efficient and maintainable implementation. A clear example of this is the use of products such as [Sitecore Search](https://www.sitecore.com/products/search) to deliver end-user search capabilities.

Realistically, for each feature there is 1 solution out of 4 paths:

| Solution Route | Implications | Examples |
| - | - | - |
| **Possible to maintain directly in XM Cloud (now or future roadmap)** | Direct use of components in component library or custom CI/CD pipeline | Forms: dedicate CMS forms functionality in case marketing automation or CRM forms not an option. |
| **Customization moves to the front-end**  | Direct invocation of custom JavaScript (Next.JS, Angular) or C# Razor (ASP.NET Core) code of a component that has been isolated from the CMS and can be called as a discretionary service. | Measurement of web vitals such as First Contentful Paint and client side analytics |
| **Need to be handled by another product** | Specific modules handle specific responsibilities. | Sitecore Search should be utilized for search features, Sitecore Send for marketing automation and email. |
| **New approach need to be devised** | Consider removing the workaround from the setup, or a new custom approach. | Specific extension in Sitecore XM/XP that cannot be refactored need to be re-thought. Website logs now live in the Rendering Host. |

### Integrations
If your current implementation includes various integrations, you’ll need to assess how these will translate to XM Cloud. Integrations with third-party tools may need to be reconfigured to work with webhooks and headless architecture. Those involving data imports, may require significant reconfiguration - do you really need to push the data into the XM Cloud, or a request from the front-end app can manage the request?

- **Front-end based Integrations** - If you need any kind of real time data to just be displayed in the Frontend without Sitecore XM Cloud even knowing that they are existing, you are good to go with a Frontend based Integration.​
- **Back-end based Integrations** - XM Cloud is heavily involved in comparison to frontend based integrations​. Webhooks or the GraphQL Management API will be key for your back-end integrations based on requirements.​

Read more on the [External Data Integrations](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/external-data-integration) recipes.


### Content Delivery to Rendering Host: Middleware Features
Hosting in XM Cloud involves platforms to contain decoupled Rendering Host such as Vercel and Netlify for Next.js, or Azure App Service containers, or other .NET Core-compatible environments for ASP.NET Core rendering hosts. These platforms differ significantly from traditional integrated Sitecore XM/XP environments. Features like redirects, custom resolvers, and secure publishing will require new approaches, especially if your current implementation is heavily customized.

Unnecessary presentation details in MVC-based implementations may need to be rethought in the new headless environment.

Read more on the [Web Application Hosting ](/learn/accelerate/xm-cloud/pre-development/developer-experience/hosting-web-application) recipe.  

### Publishing
In SaaS, publishing looks very different. Publishing to Content Delivery (CD) and Sitecore Edge differ significantly in architecture and purpose. CD follows a traditional model where content is published from the Content Management environment to CD servers that host the live site and render pages directly to users. In contrast, publishing to Sitecore Edge involves pushing content to a globally distributed Content Delivery Network (CDN) optimized for speed and scalability. 

Sitecore Edge supports a headless architecture, delivering content via APIs to front-end applications, which then render the content. ​When you publish a page from Pages, related items included in that page are also automatically published. 

​Consider the content architecture that is required to make publishing easier for the end user - for customization on actions following Publishing, consider that these need to be moved to the ‘head-app'. As an example, timed publishing, when you need precise to the second publishing of your content, can be either setup using Personalization rules or leveraging the middleware from Next.JS or ASP.NET Core.

Review th [Publishing to Edge](/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge) recipe for more information on Publishing. 


### Performance Considerations

A key move of Paas to SaaS means a move to Headless, that can bring further performance improvements overall that should be considered while reviewing your project -

<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>ASP.NET Core</Tab>
    <Tab>Angular</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
        - JSS applications created based on the JSS Next.js sample application support all the prerendering forms supported by Next.js applications and, like regular Next.js apps, use different data fetching strategies for each prerendering form.​

        - Media handling including the use of Next.JS Image can improve the performance of images.​

        - Avoid using JavaScript Renderings. This type of rendering initializes a new Node instance for each rendering and can noticeably influence load times.​

        - Regular front end issues such as Unused third-party dependencies​.

        - Query only the necessary data from GraphQL – retrieve only the fields necessary. Make sure they are separated into .graphql files.​

        - Review the Vercel and Netlify Insights that can provide a lot of information​.

        - Review the Site building strategies that have been setup, use Next.js’s Bundle Analyzer for items such as Code splitting.​

        - Review Core Web Vitals regularly and make sure to optimize Largest Contentful Paint , First Input Delays etc​.

        - Regularly review your SEO as you will find also performance blockers that might be effecting your score.​ Review the [On-page SEO Optimization](/learn/accelerate/xm-cloud/optimization/seo-web-optimization) recipe for further information.

      </TabPanel>
      <TabPanel>

          - ASP.NET Core apps support Server-side rendering (SSR) pre-rendering form only.
          - There are no specific media handling features implemented in Image tag helper comparable to ones existing in Image component of Next.js SDK. Those should be implemented additionally.
          - There are no OOTB bundle analyzing tools or features (such as Webpack Bundle Analyzer or similar) included in the XM Cloud ASP.NET Core Starter Kit project. Such tools should be added to the project additionally.
          - Depending on hosting solutions, different tools can be used for collecting and reporting on metrics and insights information, e.g. Azure Application Insights, if an app is hosted on Azure, Prometheus & Grafana - in case the app is deployed to containers etc.
          - Avoid using JavaScript Renderings. This type of rendering initializes a new Node instance for each rendering and can noticeably influence load times.​
          - Regular front end issues such as Unused third-party dependencies​
          - Query only the necessary data from GraphQL – retrieve only the fields necessary. Make sure they are separated into .graphql files.​
          - Review Core Web Vitals regularly and make sure to optimize Largest Contentful Paint, First Input Delays etc​.
          - Regularly review your SEO as you will also find performance blockers that might be affecting your score.​ Review the [On-page SEO Optimization](/learn/accelerate/xm-cloud/optimization/seo-web-optimization) recipe for further information.

      </TabPanel>
      <TabPanel>
        Coming soon
      </TabPanel>            
    </TabPanels>
  </Tabs>



## Related Recipes

<Row columns={2}>
<Link title="Content Audit" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit" />
<Link title="Preparing for an XM Cloud Project" link="/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project" />
<Link title="Project Estimation" link="/learn/accelerate/xm-cloud/pre-development/project-planning/project-estimation" />
<Link title="Transition from XM/XP to XM Cloud" link="/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc" />
<Link title="Web Application Hosting" link="/learn/accelerate/xm-cloud/pre-development/developer-experience/hosting-web-application" />
<Link title="External Data Integration" link="/learn/accelerate/xm-cloud/implementation/external-data-integration" />
<Link title="Publishing to Experience Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
<Link title="On-page SEO Optimization" link="/learn/accelerate/xm-cloud/optimization/seo-web-optimization" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="XM Cloud Documentation" link="https://doc.sitecore.com/xmc"/>
  <Link title="Feature Matrix and Product Parities" link="/learn/faq/xm-cloud-embedded-personalization/feature-matrix" />
</Row>

---
title: 'Moving to SaaS - Concepts You Need to Know'
description: 'Switching to XM Cloud means moving to a SaaS model which is different from PaaS or IaaS.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-10-09'
---

## Context

As your team transitions from Sitecore XP to XM Cloud, it's essential to understand that implementing Software as a Service (SaaS) is fundamentally different from Platform as a Service (PaaS) or Infrastructure as a service (IaaS). While Sitecore XP offered the capabilities for extensive customization and control, Sitecore XM Cloud operates on a SaaS model that prioritizes agility, scalability, and reduced operational overhead. The following outlines the key considerations, challenges, and opportunities in making this transition, specifically for those familiar with Sitecore XP.

## Execution

Migrating from Sitecore XP to XM Cloud represents a significant shift in how you approach web development, content management, and customer experience. Understanding the differences between SaaS and PaaS, identifying the right use cases, and planning for compliance, customization, and integration challenges will be critical to a successful transition.

One of the most significant adjustments when moving to XM Cloud is recognizing that it's not simply a cloud version of Sitecore XP. Instead, it’s a new product designed to meet different needs. Identifying the correct use cases is critical.

For example, XM Cloud is ideal for companies looking for faster time-to-market, simplified content management, no more upgrades, and the ability to scale without worrying about infrastructure. However, it may not suit all scenarios, particularly those requiring on-premises hosting for compliance reasons or not ready to move to Headless.

By keeping these considerations in mind, your team can maximize the value of XM Cloud and deliver a modern, scalable digital experience.

## Insights

The following topics are all considerations when migrating from Sitecore XP to XM Cloud -  when planning, it's crucial to review each topic based on the implementation in front of you.

### Where Are You Starting From: Assessing Your Current State

Understanding where your organization is starting from is crucial for a successful migration. A thorough review of your current Sitecore XP implementation will help identify what can be carried over to XM Cloud and what needs to be re imagined. This assessment will inform your migration strategy and ensure a smoother transition.

### Enablement & Training

Training of the team working on this implementation will require to cover specific areas based on their role, but there are a set of themes and concepts everyone should be aware of -

| Role    | Area |
| -------- | ------- |
| Everyone  | <ul><li>We are moving to a “Head” first approach – we are no longer building a single app but a decoupled front-end application and configuring a SaaS application, looking at API first.</li><li>Look at the processes you have in place, do these still work in a SaaS world?</li></ul>​ |
| Business, Marketing, Authors | <ul><li>Understand basics of Content Authoring in the new platform and try out an end-to-end authoring workflow.​</li><li>Does your Marketing, Content and SEO Strategy still align to this new implementation? Redefine business, content, marketing workflows if required.​</li><li>Does the content you have for the existing site fit into your new solution, or is there an Information Architecture refresh required?</li><li>Do the tools that you are using, for the implementation and day-to-day, still viable?​ For example:<ul><li>Many traditional, on-premise desktop-based tools are not designed for cloud environments and may lack the integration capabilities needed for SaaS platforms.</li><li>Some proprietary software tools are highly specialized and not built to operate in a SaaS environment due to licensing models, cloud incompatibility, or lack of collaborative features.</li><li>Tools with Limited API Support</li></ul></li></ul>    |
| Technical Teams    | <ul><li>Your basic Sitecore Developer training is not enough, and we also need to focus also the API development and consumption.​</li><li>React/Next.JS focus on how to handle the Layout Services responses.​</li><li>Experience Edge and GraphQL including updates such as publishing.​</li><li>DevOps processes, managing cloud platforms such as Vercel/Netlify, Docker etc.​</li></ul>    |

### Transition from XM/XP to XM Cloud: Not the Same Product

Migrating from Sitecore XP to XM Cloud requires careful planning because they are fundamentally different products. For example, search functionality in XP relies heavily on Solr, whereas XM Cloud lacks a web database, necessitating alternative approaches. Consider using composable solutions or custom implementations to address this gap.

Read more on the [Transition from XM/XP to XM Cloud recipe](/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc).

### Content Delivery to Rendering Host: Middleware Features

Hosting in XM Cloud involves platforms a Rendering Host like Vercel and Netlify, which differ from traditional Sitecore environments. Features like redirects, custom resolvers, and secure publishing will require new approaches, especially if your current implementation is heavily customized.

Unnecessary presentation details in MVC-based implementations may need to be rethought in the new headless environment.

Read more on the [Web Application Hosting recipe](/learn/accelerate/xm-cloud/pre-development/developer-experience/hosting-web-application).  

### Customizations and Integrations

When planning a strategy for customizations in XM Cloud, it's crucial to categorize each customization based on its fit within the new platform. First, assess whether the customization can be maintained directly in XM Cloud, leveraging its built-in capabilities and minimizing the need for external tools. If a customization requires significant changes, move it outside of XM Cloud, in your head application.

For more complex scenarios, where the customization extends beyond the scope of XM Cloud’s native features, it may be necessary to handle it through other Composable DXP product, ensuring a seamless integration with the broader digital experience platform. In cases where a customization no longer aligns with the architecture or goals of XM Cloud, it might be best to drop the old approach and devise a new solution that better fits the platform's capabilities, ensuring a more efficient and maintainable implementation.

<img src="/images/learn/accelerate/xm-cloud/moving-to-saas1.png" alt="Screenshot showing how to deal with customizations"/>

Before diving into the implementation, it’s critical to clarify the value you're seeking from the move to XM Cloud. Often, projects begin without a well-defined target, leading to misalignment between stakeholders. Clearly defined objectives, such as reducing time-to-market, improving content management efficiency, or enhancing scalability, will guide your implementation and ensure all parties are on the same page.

### Personalization: xDB vs. Embedded vs. CDP/Personalize

XM Cloud does not offer a direct replacement for xDB, but it offers a set of rules targeting audiences and segments where you can define variations of a page based on those audiences

A number of rules are available already out of the box that should cover most use cases including: 

- Time-based Conditions: Deliver content at specific times or on certain days, perfect for timed promotions. 
- Device-based Conditions: Show different content depending on the visitor’s device, such as mobile-specific offers. 
- Geolocation-based Conditions: Tailor offers or messages based on a visitor’s country or region. 
- Page View-based Conditions: Deliver content based on the number of times a visitor has viewed a specific page. 
- User Interaction-based Conditions: Customize content based on the referrer or UTM parameters from external campaigns. 

If your current implementation heavily relies on xDB or has requirements for Customer Data management, you’ll need to assess whether these new tools meet your needs or if additional solutions are required - more complex scenarios may require CDP or other integrations. Personalize can be used to create custom rules in XM Cloud.

Similarly, email marketing, historically handled by EXM, may need to shift to Sitecore Send or other solutions, depending on your needs.

Documentation is further provided for more detailed breakdown regarding this in [Feature Matrix and Product Parities](/learn/faq/xm-cloud-embedded-personalization/feature-matrix).

### Content Strategy: Do You Need to Migrate Everything?

When migrating content to XM Cloud, evaluate whether all your existing content is necessary. This is a good time to revisit your SEO, marketing, and content strategies to ensure they align with the new platform's capabilities.

Migrating everything might seem like the easiest option, but it’s rarely the most effective. Instead, selective content migration is often more efficient and aligned with long-term goals.

### Publishing: Content Delivery vs Edge

Publishing to Content Delivery (CD) and Sitecore Edge in Sitecore differ significantly in architecture and purpose. CD follows a traditional model where content is published from the Content Management environment to CD servers that host the live site and render pages directly to users. In contrast, publishing to Sitecore Edge involves pushing content to a globally distributed Content Delivery Network (CDN) optimized for speed and scalability.

Sitecore Edge supports a headless architecture, delivering content via APIs to front-end applications, which then render the content. ​When you publish a page from Pages, related items included in that page are also automatically published.

​Consider the content architecture that is required to make publishing easier for the end user - for customization on actions following Publishing, consider that these need to be moved to the ‘head-app' As an example, timed publishing, when you need precise to the second publishing of your content, can be either setup using Personalization rules or leveraging the middleware from Next.JS.

Read more on the [Publishing to Edge](/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge) recipe.  

### CMS Customizations: Rethink Your Approach

Historically, PaaS CMS extensive CMS customizations, but XM Cloud may require a different approach. Evaluate whether your current customizations are still necessary or if they can be simplified or eliminated in the new environment. Keep in mind XM Cloud is constantly evolving, with new features and customization options being added.

Example of this is documented in [Custom Editing UX for 3rd Party Integrations](/learn/accelerate/xm-cloud/implementation/external-data-integration/custom-editing-ux-3rd-party-integrations)

### Integrations

If your current Sitecore XP implementation includes various integrations, you’ll need to assess how these will translate to XM Cloud. Integrations with third-party tools may need to be reconfigured to work with webhooks and headless architecture. Those involving data imports, may require significant reconfiguration -do you really need to push the data into the XM Cloud, or a request from the front-end app can manage the request?

#### Frontend based Integrations​

- If you need any kind of real time data to just be displayed in the Frontend without Sitecore XM Cloud even knowing that they are existing, you are good to go with a Frontend based Integration.​

#### Backend based Integrations​

- XM Cloud is heavily involved in comparison to frontend based integrations​. Webhooks or the GraphQL Management API will be key for your back-end integrations based on requirements.​

Review the [External Data Integration](/learn/accelerate/xm-cloud/implementation/external-data-integration) recipes for further information.

### PaaS to SaaS: Gradual vs. Big-Bang

Consider whether to align your current implementation closely with XM Cloud for a smoother transition or to take a "big-bang" approach and start fresh. Your decision will depend on factors like project timelines, available resources, and the complexity of your existing setup.

Review the [Transition from XM/XP to XM Cloud recipe](/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc) for more detail.

### Performance Considerations

A key move of Paas to SaaS means a move to Headless, that can bring further performance improvements overall that should be considered while reviewing your project -

- JSS applications created based on the JSS Next.js sample application support all the prerendering forms supported by Next.js applications and, like regular Next.js apps, use different data fetching strategies for each prerendering form.​

- Media handling including the use of Next.JS Image can improve the performance of images.​

- Avoid using JavaScript Renderings. This type of rendering initializes a new Node instance for each rendering and can noticeably influence load times.​

- Regular front end issues such as Unused third-party dependencies​

- Query only the necessary data from GraphQL – retrieve only the fields necessary. Make sure they are separated into .graphql files.​

- Review the Vercel and Netlify Insights that can provide a lot of information​

- Review the Site building strategies that have been setup, use Next.js’s Bundle Analyzer for items such as Code splitting.​

- Review Core Web Vitals regularly and make sure to optimize Largest Contentful Paint , First Input Delays etc​

- Regularly review your SEO as you will find also performance blockers that might be effecting your score.​

## Related Recipes

<Row columns={2}>
<Link title="Content Audit" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit" />
<Link title="Preparing for an XM Cloud Project" link="/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project" />
<Link title="Project Estimation" link="/learn/accelerate/xm-cloud/pre-development/project-planning/project-estimation" />
<Link title="Transition from XM/XP to XM Cloud" link="/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc" />
<Link title="Web Application Hosting" link="/learn/accelerate/xm-cloud/pre-development/developer-experience/hosting-web-application" />
<Link title="External Data Integration" link="/learn/accelerate/xm-cloud/implementation/external-data-integration" />
<Link title="Publishing to Experience Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="XM Cloud Documentation" link="https://doc.sitecore.com/xmc"/>
  <Link title="Feature Matrix and Product Parities" link="/learn/faq/xm-cloud-embedded-personalization/feature-matrix" />
</Row>

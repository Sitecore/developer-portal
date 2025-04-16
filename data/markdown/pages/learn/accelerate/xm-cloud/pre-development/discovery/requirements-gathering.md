---
title: 'Requirements Gathering'
description: 'Requirements gathering is key for the success of any project and will help to shape a comprehensive project plan'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2024-10-09'
audience: ['All']
---

## Context

We’re starting on a new XM Cloud instance and we will need to determine the acceptance criteria for the solution to be built. There are a number of key questions that need to be answered to make sure we have a proper project plan that can be planned and estimated properly.

## Execution

Getting requirements gathering together is key for the success of any project - whatever tool you are using, you need to document in a way that can be agreed to by customer and partner what the goal is.

Start by decompiling any of the customer’s information into manageable requirements that can be documented at the task / story level so that designers and developers can plan their work and know that it matches the customer expectation. Don’t forget that this is not just technical requirements - keep in mind what the business strategy might be, what the ends goals are

Answering these questions should help shape a comprehensive project plan for your XM Cloud implementation. It’s recommended that out of this a detailed requirements backlog is build to allow the creation of a timelines and estimation.

## Insights

The following topics are the key considerations that need to be captured and answered during your requirements gathering. This is not an exhaustive list, and there will be considerations that will be required based on the implementation needs.

### Overarching Business Strategy

This section helps ensure that the technical solution aligns with broader business goals. It focuses on understanding what the business is trying to achieve and how success will be measured.

- What are the primary business goals driving this implementation?
- What key performance indicators (KPIs) will define success for the XM Cloud project?
- Who are the primary stakeholders and decision-makers for this project?
- What are the non-functional requirements (NFRs) like performance, security, and compliance?
- How does the XM Cloud implementation fit into the long-term digital strategy of the business?
- What are the technological limitations of their current site and how is that impacting their business?
- What features of XM Cloud will help their team in overcoming these challenges that their current site fails to do?
- What is the timeline we are looking to implement XM Cloud? If there are other products purchased with XM Cloud, what are the timelines for those products as well?
- What are the future scalability needs of the solution?
- What is the expected content lifecycle management plan?
- What is the current state of your existing content management systems?
- How many concurrent content authors will you have? Each production environment currently supports fifty (50) concurrent users.

### Content Management

Since content management and personalization are core features of XM Cloud, this section focuses on understanding how content will be created, managed, and personalized to meet business needs.

- What are the requirements for content types and templates?
- Who will be responsible for content management, and how often will updates occur?
- How much content are we looking to bring into their instance initially? Will it be migrated or created from scratch? What are the different page and content types?
- Is the content going to be migrated from another Sitecore XM/XP instance? What does their schema structure look like (how many fields, field types, etc.)?
- Are we already using the SXA information architecture or do we need to migrate to it?
- If the content will be created during implementation how much content needs to be created initially for Go-Live?
- Who is responsible for creating the content (internal team, partner, third-party agency)?
- Will there be third-party content that will be coming from other sites that will need to be integrated?
- Will there be any content that needs to be archived/expired?
- What are the different user groups and content permissions that the content editors will have? Check out Item Security for more information.
- What are the current content lifecycle workflows, and will these workflows be changed or will be modified from their current state?
- Will there be any content personalization?
- How will content personalization be handled?

### Overarching Website/s Requirements

- A strong user experience is essential for ensuring customer satisfaction. These questions explore what user interface and design frameworks need to be considered, as well as any special requirements for front-end development.
- What are the user experience (UX) expectations for the solution?
- Are there any accessibility requirements?
- What is the level of front-end complexity (e.g., JavaScript frameworks, third-party tools)?
- What are the search experienced required for the website, both for global search and for context based searches (such as a listing page for articles)?  The XM Cloud embedded Solr service is only for internal use of XM Cloud's UI. This cannot be customized or modified and search tools such as [Sitecore Search](https://doc.sitecore.com/search) should be used.

### Technical Requirements

Defining the technical requirements early ensures the implementation can be designed and built with the right architecture in mind. These questions address how XM Cloud will integrate into your current systems, and what technical standards and requirements must be met.

#### Integrations

- Which third-party systems need to integrate with XM Cloud?
- Are the integrations required on the head application or part of XM Cloud?
- What APIs or connectors will be required for these integrations?
- Are there any licensing or data sharing agreements to be considered?

Further information can be found on our [Retrieving Data from 3rd Party Integrations]//learn/accelerate/xm-cloud/implementation/external-data-integration/retrieving-data-from-3rd-party-integrations) recipe.

#### Customizations

- Are you moving from XM/XP? What are the customizations that have been put on the setup - from Content Resolvers to Event Handlers - these should be documented and an approach provided. Further information can be found on our [Transition from XM/XP to XM Cloud recipe](/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc).

#### Headless Site Design

- What are their layout design and theming requirements? Do the different sites have different layouts?
- Do we have specific mobile styling rules for these layouts or are the OOTB mobile styling rules from the SXA starter kit enough?
- Are we able to split their pages with proper page and partial designs?  If we are doing multiple site, what is shared across websites?
- What are the different components for both site specific and global?
- If you are coming from XP/XM, what are your Rendering and data source templates? Will they need to be refactored for the new site structure? Take into consideration that there is a streamlined process [we recommend in creating components](/learn/accelerate/xm-cloud/pre-development/developer-experience/component-design-best-practices).
- Does their site have redirects and how many? Will these be editable by the content team, or can we be moved to the head application? Will there be an effort to purge current redirects before bringing them into XM Cloud?

#### Multi-Site

- How are all the websites categorized (brand, region, language, etc.)?
- Will these sites be on a sub-domain, or will that have their own unique domain?
- If we are coming from XM/XP was SXA being used or was a custom setup for multi-site instead?
- Will there be changes to the new sitemap?

#### Localization

- Will their site(s) have multiple languages? If there are multiple sites, will all sites inherit all languages in their setup, or will we be language specific?
- Will there be a Fallback language for items that are not in that specific language version?
- Are we using translation services, or will translation be produced by content editors?

### Security & Compliance

Security is critical for any cloud-based solution, especially in industries with strict regulatory requirements. These questions explore the necessary security measures and compliance standards that must be met to protect user data and ensure legal compliance.

- What are the specific security requirements for the solution?
- Are there compliance and regulatory requirements that need to be met?
- What is the plan for data handling and analytics integration?
- Are using SSO and will you need to integrate into your head application? Please check out our guidance on [Authentication](/learn/accelerate/xm-cloud/pre-development/security/head-application-security).
- Will SSO be required for the Sitecore Cloud Portal. Please check out our guidance on [documentation](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/sitecore-authentication.html).

### Project Setup

- Will there be multiple projects for multiple sites or will it be a single project?

### Training and Documentation

To ensure long-term success, teams need the right skills and knowledge to manage and maintain the system. This section addresses the training needs for both technical staff and content editors.

- What is the level of technical expertise within the team for XM Cloud?
- Does the customer’s team need to be technically trained on XM Cloud, or any tools in it’s eco system?
- What are the content editor training needs, between OOTB usage vs implementation needs?
- What technology stack are your developers trained for? XP/XM is predominantly a .NET solution, those developers may require training on front-end technologies such as React, Next.js and Angular.

### UAT & Go-live

A smooth go-live requires thorough testing and stakeholder sign-off. This section focuses on the final validation stages of the project, ensuring that the solution is ready for production and that the business is prepared for launch.

- What are the criteria for successful User Acceptance Testing (UAT)?
- Who will participate in UAT, and how will feedback be gathered?
- What is the plan for handling UAT feedback and making necessary changes?
- What is the final Go-live checklist and approval process?
- What is the contingency plan for issues encountered during or after Go-live?
- What is the communication plan for Go-live?
- What is the hand-off following Go-Live for maintenance and support expectations?

### Timeline & Budget

Defining realistic timelines and budgets early helps ensure that project scope, features, and deadlines are properly balanced. This section focuses on setting expectations for delivery and any budget constraints.

- What are the target deadlines and key milestones for the project?
- What is the budget for the project, and how does that impact feature prioritization?

### Risks & Dependencies

Identifying risks and dependencies at the outset allows the team to plan for contingencies and prevent delays. This section focuses on uncovering any potential blockers or external factors that could impact the project.

- What are the potential risks that could impact the project?
- Are there any external dependencies?

<br/>

These questions should have allowed you to build a wealth of information about the implementation and the requirements this project has; review the rest of the cookbook to flesh out the best approaches for these requirements.

## Related Recipes

<Row columns={2}>
<Link title="Preparing for an XM Cloud Project" link="/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project" />
<Link title="Project Solution Setup" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup" />
<Link title="Preparing For A Project" link="/learn/faq/xm-cloud-recommended-practices/preparing-for-project" />
<Link title="Transition from XM/XP to XM Cloud" link="/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc" />
<Link title="Redirect" link="/learn/accelerate/xm-cloud/implementation/redirect" />
<Link title="Content Audit" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit" />

</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Getting started with XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
</Row>

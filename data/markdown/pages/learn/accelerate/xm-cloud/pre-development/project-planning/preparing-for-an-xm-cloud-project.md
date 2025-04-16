---
title: 'Preparing for an XM Cloud Project'
description: 'Overall strategies when planning to kick off an XM Cloud project'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2024-03-06'
audience: ['Architect','Product Owner','Project Manager', 'User']
---

## Context

Now that your [Discovery](/learn/accelerate/xm-cloud/pre-development/discovery) is complete, we’re ready to embark on the next step of any XM Cloud project. A successful project doesn’t just happen—it requires intentional planning to set the stage for smooth execution. 

Before diving into the main phases of the project, it’s crucial to dedicate time to general planning including alignment across stakeholders, clarity in objectives, and a strong foundation to tackle any challenges that may arise along the way. With a solid plan in place, your team will be better equipped to deliver results efficiently and effectively while staying true to the project’s goals.

Let’s take a closer look at the key elements of this planning phase and how it sets the tone for success
## Execution

### Project Roles

In the world of SaaS and Headless websites , the project roles change slightly from more traditional CMS or MVC-led development. We no longer break up the development into back-end and front-end development. For XM Cloud development, your project roles should follow this pattern:

|Role|Description|
|--|--|
|Product Owner|Owner of the overall project that represents the voice of the customer by defining  the backlog, set priorities, and sign-offs based on acceptance criteria. The Product Owner should be available to unblock any issues and adjust requirements as needed.|
|Project Manager |The Project Manager plays a pivotal role in ensuring the project’s success by orchestrating the many moving parts of the implementation process, from ensuring clear planning and definition to coordinating stakeholders, resource management and timeline/budget management. <br/><br/> Role might take different shape including a Scrum Master to facilitates ceremonies and removes blockers.|
|Business Analyst| Based on the level of transformation and size of requirements, a Business Analyst might be attached to the project, bridging the gap between business needs and technical implementation. Their primary focus is to ensure that the solution being built aligns with the organization’s strategic goals, meets user requirements, and delivers tangible value.  <br/><br/> They should also be involved in the testing phases by supporting the creation of test plan and providing feedback on testing.|
|Technical Lead|Potentially a role covered by one of the other technical roles, the Technical Lead is overseeing the technical implementation, guiding the development team, and ensuring that the solution aligns with best practices, project requirements, and the overall architectural vision.|
|Architect|Senior Architect who is ideally experienced with Sitecore XM understands the realm of headless websites solutions. Responsible for the overall architecture of the solution, including single site vs multisite setup, any integrations required etc|
|CMS Developer|A CMS Developer should be an experienced CMS developer and have a good foundational knowledge of creating data templates, rendering items, and how the information architecture should be structured.  <br/><br/>They will be responsible for the data modelling, registering renderings/components, configuring placeholder settings, configuring the site settings, etc. <br/><br/>The CMS developer would also assist the architect in the creation of the Site Collection and setup any multi-site configuration. <br/><br/>Experience in front-end technologies can help allowing this Developer to take the lead of the project easily. <br/><br/>The CMS Developer may also assist in backend integrations that are created outside the web application, for example, if the client requires a .NET Core API that will be hosted on Azure to integrate the web application with an internal system.|
|Web Application Developer - Integration| Responsible for creating the web application with a focus on back-end integrations in the application. This might include things like Authentication, External data integration and Personalization. |
|Web Application Developer - UI|Responsible for the web application with a focus on the creation and styling of components, front-end functionality etc|
|QA/Tester|Responsible for testing and quality assurance - ideally understands the architecture that comes with headless including how the front-end interacts with APIs to fetch content and data, the role of APIs and integrations in delivering the user experience. <br/><br/> This means that testing is not just focused on the end-user experience, but also in the end-to-end test across different application especially if this implementation is front-end heavy. <br/><br/> Differences in testing dynamic front-end frameworks, compared to traditional server-rendered solutions, is also helpful.|

### Implementation Team Structure

The above is a general guide to team structure for an XM Cloud project. This can be used as a base model for the team, but the implementation team should be tailored based on scope and scale of the implementation. Depending on the size of the team and the project, some roles may be played by a single person who has the right experience. 

As an overarching approach, the development team should be made up of more front-end developers as more of the development tasks will lay here - keep in mind that a single CMS Developer will be fine to cover the requirements of multiple Web Application Developers. A team makeup would be:

|Role|Count| Responsibilities |
|--|--|--|
| Architect | 1 | Solution design, integrations, scalability. |
| CMS Developer | 1 | Sitecore XM Cloud setup, backend logic, content modelling. |
| Web Application Developers | 2 | Next.js or ASP.NET Core development, API integration, front-end UI. |
| QA Tester | 1 | Automated & manual testing, performance validation. |

Whatever the shape of your team, keep in mind that each team member have clearly defined roles, even when combined. The working model should consider changes such as using onshore vs offshore teams, temporary contractors etc that might also defer based on project budget and resource availability. Make sure that your plan include budgeting, PTO management, and contingency planning, for your implementation to remains on track, within budget, and adaptable to changes.

Review the [Team Setup](#team-setup) section in Insights for further considerations.

### Project Plan

Each project should be at a minimum be structured using the following project phases:

1. Discovery
2. Design (Optional)
3. Implementation

These “phases” are not linear, they will overlap as change management happens over the course of a project. We recommend a more agile approach to project management within the reality that clients will require timelines and estimates for the project as a whole, so true agile is not always possible.

#### Discovery & Design

The [Discovery](/learn/accelerate/xm-cloud/pre-development/discovery) phase is usually done as a precursor to the main implementation project and can often be a separate Statement of Work (SoW) with the client. If the client is willing to work in a more agile approach with a budget and timeline and a set of minimum viable requirements plus nice to have requirements, this phase can work in parallel to design and build phases.

As with any good project delivery, determining the goals and KPIs of this implementation will be key, this means answering the question of why this project was initiated and how to measure the success of the project. More detail can be found in the [Requirements Gathering](/learn/accelerate/xm-cloud/pre-development/discovery/requirements-gathering) and [Project Estimation](/learn/accelerate/xm-cloud/pre-development/project-planning/project-estimation) recipes.

While discovery often starts and ends as a separate project before the main implementation phase, some level of discovery will happen for the lifetime of the project as change management occurs.

Sometimes separated to it’s own phase, during the *Design* phase, UX/UI designers create wireframes and layouts to create the overall design. This should be supported by running quantitative and/or qualitative surveys and user tests to validate if the designs match the customer and clients' requirements. If the project is a migration from an existing site to XM Cloud without a rebrand/redesign, this phase might not be required.

From the discovery & design phases, a set of user stories can be created to help estimate the project and build out the project's backlog.

#### Implementation

During the implementation, we take the user stories created from discovery & design, break those down into sprints & tasks. These are handed to the development team to estimate and implement based on priority. Part of this should have also provided design on integrations.

The business stakeholders should be part of regular sprint, demos to review and provide feedback to the development team.

The implementation phase can start earlier with Sprint Zero, which is used to set up the common ground for developers, meaning the XM Cloud Project and Environment(s) as well as the Software Solution for the head application and middleware. This also allow time for the implementation team to familiarize themselves with the technology stack. Sprint Zero is covered by a set of recipes that can be found [here](/learn/accelerate/xm-cloud/pre-development/sprint-zero) .

After Sprint Zero, priority should be given to the more simple components that can be used to generate content, followed by more complex components that might require functionality, interactions, or external data integrations. Based on this common ground, developers can create layouts and components that reflect the initial business goals - as much as it might be tempting to create all the components of the Home page first, this might not be the most productive approach.

Once the MVP is delivered to the client, the authors, editors or marketers can already start creating content and feedback on processes, including editing workflow.


## Insights

### Defining the MVP
Bringing a site from concept to MVP quickly requires an agile approach with the right tools. Although it might look that this implementation is large, we should always look at how we can optimize it - 

<ul>
  <li>Prioritize only the essential features that deliver immediate value, deferring nice-to-have elements for later. Make sure you are building components and templates that you absolutely need; try and re-use components to cut development time.</li>
  <li>Conduct regular demos and stakeholder reviews to align expectations and prevent late-stage rework. Do you require a full-feature launch or can you break your timeline down to small, iterative releases?</li>
  <li>Make sure you are aware of OOTB features that can facilitate the implementation - for example - what’s the quickest answer to deployment: do we need to have a custom pipeline or can we rely on [XM Cloud Deploy](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html)? </li>
  <li>Content delays often stall projects. Start content modelling, migration, and creation in parallel with focus on essential pages and metadata, bringing in additional content after MVP. Make sure it’s clear what the path for content migration including automation is, from the start.</li>
  <li>MVP is just the beginning. Use feature flags (example setting up [Modules](https://doc.sitecore.com/xmc/en/developers/xm-cloud/modules.html)) to roll out additional functionality over time. Leverage features such as [Personalize](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html) to refine and optimize based on user behaviour. Although you might be tempted to leave personalization features for later phases, these might be reduce implementation effort - example using Geography based conditions instead of building custom logic to provide content based on location.</li>
  <li>Consider Content Migration from the very beginning - does it make sense to move the existing content? Do you need to automate this process or will it be handled manually? What is the amount of content in place, considering multiple sites and languages. Additional information can be found on the [Content Audit](/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit) recipe.</li>
</ul>

### Design and UX/UI Handover

Getting the team ready for the implementation, it’s crucial to ensure that all elements are clearly defined and documented in the design being prepared. This helps the whole team be aligned and minimizes misunderstandings and rework. Below are guidelines to enhance clarity and collaboration when working with designs - 

<ul>
  <li>It helps to draw boxes around components and label them directly in the designs. This provides a visual breakdown of the page structure, making it easier for all stakeholders to understand how the site will be built.</li>
  <li>Include notes about any content that needs to be accounted for that is not included in the designs, for example, seasonal promos or extra fields for optional content.</li>
  <li>Include notes about webpage behaviour that may not be obvious in the designs, for example, do some components look or function differently on mobile? What happens when users browses over elements - are there any animations or interactive features? Are there different experiences between logged-in versus guests users?</li>
  <li>Check if the site needs to support several languages or multiple regions and if this has an effect on layout changes per language.</li>
  <li>Components should have “identifiers”, what that identifier is will be up to the implementation team, but it will help make it clear how many components there are in total and encourages teams to look for patterns and opportunities to reuse components across different pages. More components means more work for developers to build them, and more work for content authors to learn them - more components doesn’t mean more flexibility. Identifier should be referenced and used when labeling components in the designs.</li>
</ul>

Review the [Component Design Best Practices](/learn/accelerate/xm-cloud/pre-development/developer-considerations/component-design-best-practices) recipe to find the optimal way for implementing Components.

### Team setup
Determining the right ratio for your team will make a difference for on timelines and success of any implementation. In Sitecore XM Cloud projects, balancing the number of CMS Developers and Web Application Developers is essential for efficiency, scalability, and maintainability.

Keep in mind that that different implementations might have different approaches but overall:

<ul>
  <li>A 1:2 ratio of CMS Developers to Web Application Developers might work for one project, while 1:6 in another. With a front-end heavy implementation, the CMS Developer might be quickly bored if not enough Web Application Developers are available.</li> 
  <li>A front-end-heavy ratio aligns well with projects where a dedicated design system is in use, such as Figma, Storybook, and Chromatic.</li> 
  <li>The Web Application Developers are responsible for component development while the CMS Developers handles content modelling in XM Cloud and integration. This might not be always the case when Web Application Developers can configure their own data structures, which will make implementations faster. Developing ASP.NET Core application means having more extended and strongly typed model structure that should be created compared to Next.js/TypeScript.</li>
  <li>Web Application Developers can work independently of XM Cloud, assuming they could treat components like standard Next.js elements or ASP.NET Core components. However, they will run into challenges when ignoring things such as Placeholders and XM Cloud specific modules -  not following XM Cloud best practices will require CMS Developer intervention late in the cycle.</li>
</ul>

### Collaboration Teams
Regardless of the ratio, clear collaboration processes must be in place: 

<ul>
<li>When components or layouts change, teams need a defined process on updates to prevent issues. This includes version-controlled repositories for front-end components and regular sync meetings across team, including documentation to ensure the different understand dependencies.</li>
<li>Documenting and refining best practices, even outside of Sitecore Accelerate, to prevent chaotic implementation patterns. Without clear guidance, developers may rely on inconsistent approaches, leading to technical debt and integration challenges.</li>
</ul>

One of the key goals moving forward is to make Web Application Developers self-sufficient, reducing major dependencies on XM Cloud-specific items. This shift allows front-end teams to work more autonomously, improving efficiency while ensuring seamless integration with XM Cloud.

Success  relies on clarity, automation, and documentation to maintain efficiency and prevent roadblocks. Clearly defined responsibilities ensure that each team member understands their role, eliminating confusion and streamlining collaboration. Implementing automated quality gates helps catch issues early in the development cycle, reducing rework and improving overall reliability. Additionally, maintaining regular documentation updates keeps teams aligned, ensuring that processes, dependencies, and best practices remain up to date. Together, these elements create a structured and scalable development workflow, enhancing both team productivity and project success.



## Related Recipes
<Row columns={2}>
    <Link title="Discovery" link="/learn/accelerate/xm-cloud/pre-development/discovery" />
  <Link title="Sprint Zero" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero" />
  <Link title="Preparing For A Project" link="/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project" />
  <Link title="Component Design Best Practices" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/component-design-best-practices" />
</Row>


## Related Documentation
<Row columns={2}>
  <Link title="XM Cloud Deploy app" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html" />
  <Link title="Modules" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/modules.html" />
</Row>

## Related Links
<Row columns={2}>
  <Link title="XM Cloud Tutorial - Introduction #1" link="https://www.youtube.com/watch?v=D7UPYP7AQQ4" />
  <Link title="XM Cloud Tutorials - Analyze Phase #2" link="https://www.youtube.com/watch?v=6WMzaK-3swI" />
</Row>

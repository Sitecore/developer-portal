---
title: 'Preparing for an XM Cloud Project'
description: 'This recipe recommends overall strategies when planning to kick off an XM Cloud project'
area: ['accelerate']
---

## Problem

The customer is about to embark on a Sitecore XM Cloud project. To have a successful project, there should be some general planning at the outset.

## Solution

### Project Roles

In the world of SaaS and Headless CMS solutions, the project roles change slightly from more traditional MVC Sitecore development. We no longer break up the development into back-end and front-end development. For XM Cloud development, your project roles should follow this pattern:

| Role                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Architect                               | Senior architect who is very experienced with Sitecore XM and deep understanding of Headless CMS solutions. Responsible for the overall architecture of the solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| CMS Developer                           | A CMS Developer should be an experienced XM/XP developer and should have a good foundational knowledge of creating data templates, rendering items, and how XM information architecture should be structured. The CMS developer will be responsible for the data modeling, registering renderings/components, configuring placeholder settings, and configuring the site settings. The CMS developer would also assist the architect in the creation of the Site Collection/Tree and any patch configuration that needs to be created. A CMS developer with good experience in JavaScript/TypeScript/Next.js can also serve as the Tech Lead for the project. The CMS developer may also assist in backend integrations that are created outside the Next.js web application. For example, the client requires a dotnet core API that will be hosted on Azure to integrate the web application with an internal system. |
| Web Application Developer - Integration | Responsible for creating the Next.js web application with a focus on back-end integrations in the application. This might include things like authentication, external data integration, and personalization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Web Application Developer - UI          | Responsible for the Next.js web application with a focus on the creation and styling of components, and front-end functionality.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| QA/Tester                               | Responsible for testing and quality                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Team Structure

This is a general guide to team structure for an XM Cloud project. It can be used as a base model for the team. The final structure should closely match:

- Architect
- Technical Lead
- CMS Developer(s)
- Web Application Developer(s) - Integration
- Web Application Developer(s) - UI
- QA Tester

Depending on the size of the team, these roles can be played by a single person who has the right experience.

Generally, the team should be made up of more front-end developers. A suggested team makeup would be:

- Architect: 1
- Technical Lead/CMS Developer: 1
- Web Application Developers (Integration/UI/Fullstack): 2
- QA Tester: 1

### Project Workflow/Plan

Each project should be structured using the following Phases:

1. Discovery
2. Design (Optional)
3. Implementation

<br/>
<Alert status="info">
<AlertIcon />
These “phases” are not linear. They will overlap as change management happens over the course of a project. We recommend a more agile approach to project management within the reality that clients will require timelines and estimates for the project as a whole, so true agile is not always possible.
</Alert>
<br/>

#### Discovery

In the very beginning, the client needs to determine their Goals and the corresponding KPIs. This means answering the question of why this project was initiated and how to measure the success of the project.

During discovery, a high level overview of the client requirements will be gathered. This is discussed in more detail in the [Project Estimation recipe](project-estimation).

The discovery phase is usually done as a precursor to the main implementation project and can often be a separate SoW with the client. If the client is willing to work in a more agile approach with a budget and timeline and a set of minimum viable requirements plus nice to have requirements, this phase can work in parallel to design and build phases.

While discovery often starts and ends as a separate project before the main implementation phase, some level of discovery will happen for the lifetime of the project as change management occurs.

From the discovery & design phases, a set of user stories can be created to help estimate the project and build out the project's backlog.

#### Design

In the design phase, UX/UI designers create wireframes and layouts to create the overall design. This should be supported by running quantitative and/or qualitative surveys and user tests to validate if the designs match the customer and clients' requirements.

If the project is a migration from an existing site to XM Cloud without a rebrand/redesign, this phase is not always required.

#### Implementation

The Analyze Phase targets the requirements documents that developers can use to start implementing. These requirements can be the basis for user stories to define the tasks for each feature.

During the implementation, we take the user stories created from discovery & design and break those down into sprints & tasks. These are handed to the development team and the team starts estimating and implementing based on priority.

The business stakeholders should be a part of regular sprint demos to review and provide feedback to the development team.

The implementation phase starts with Sprint Zero, which is used to set up the common ground for developers, meaning the XM Cloud Project and Environment(s) as well as the Software Solution for the head application and middleware. Also, some developers need to familiarize themselves with the technology stack. Sprint Zero is covered by a set of recipes that can be found [here](/learn/accelerate/xm-cloud/pre-development/sprint-zero).

After Sprint Zero, priority should be given to the more simple components that can be used to generate content, followed by more complex components that might require functionality, interactions, or external data integrations.

Based on this common ground, developers can create layouts and components that reflect the initial business goals.

Once an MVP is delivered to the client, the authors or marketers can start creating content.

## Discussion

**Tips & Tricks**

- It helps to draw boxes around components and label them directly in the designs.
- Include notes about any content that needs to be accounted for that is not included in the designs (for example, seasonal promos or extra fields for optional content).
- Include notes about webpage behavior that may not be obvious in the designs (for example, do some components look or function differently on mobile? Or if the user is logged in?)
- Components should all have “identifiers." What that identifier is will be up to the implementation team.
  - This makes it clear how many components there are in total and encourages teams to look for patterns and opportunities to reuse components across different pages. More components = more work for developers to build them, and more work for content authors to learn them.
  - The identifier should be referenced and used in the first bullet point when labelling and identifying components in the designs.
- Check if the site needs to support several languages and if this has an effect on layout changes per language.

## Related Recipes

<Row columns={2}>
<Link title="Sprint Zero" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero" />
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Preparing For A Project" link="/learn/faq/xm-cloud-recommended-practices/preparing-for-project" />
<Link title="XM Cloud Tutorial Series - Introduction #1" link="https://www.youtube.com/watch?v=D7UPYP7AQQ4" />
<Link title="XM Cloud Tutorials - Analyze Phase #2" link="https://www.youtube.com/watch?v=6WMzaK-3swI" />
</Row>

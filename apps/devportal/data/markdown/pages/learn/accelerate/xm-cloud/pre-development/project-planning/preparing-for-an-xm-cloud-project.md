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

| Role                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Architect                             | Senior architect who is very experienced with Sitecore XM and deep understanding of Headless CMS solutions. Responsible for the overall architecture of the solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| CMS Developer                         | A CMS Developer should be an experienced XM/XP developer and should have a good foundational knowledge of creating data templates, rendering items, and how XM information architecture should be structured. The CMS developer will be responsible for the data modeling, registering renderings/components, configuring placeholder settings, and configuring the site settings. The CMS developer would also assist the architect in the creation of the Site Collection/Tree and any patch configuration that needs to be created. A CMS developer with good experience in JavaScript/TypeScript/Next.js can also serve as the Tech Lead for the project. The CMS developer may also assist in backend integrations that are created outside the Next.js web application. For example, the client requires a dotnet core API that will be hosted on Azure to integrate the web application with an internal system. |
| Web Application Developer - Back End  | Responsible for creating the Next.js web application with a focus on back-end integrations in the application. This might include things like authentication, external data integration, and personalization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Web Application Developer - Front End | Responsible for the Next.js web application with a focus on the creation and styling of components, and front-end functionality.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| QA/Tester                             | Responsible for testing and quality                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Team Structure

This is a general guide to team structure for an XM Cloud project. It can be used as a base model for the team. The final structure should closely match:

- Architect
- Technical Lead
- CMS Developer(s)
- Web Application Developer(s) - Back End
- Web Application Developer(s) - Front End
- QA Tester

Depending on the size of the team, these roles can be played by a single person who has the right experience.

Generally, the team should be made up of more front-end developers. A suggested team makeup would be:

- Architect: 1
- Technical Lead/CMS Developer: 1
- Web Application Developers (BED/FED/Fullstack): 2
- QA Tester: 1

### Project Workflow/Plan

Each project should be structured using the following Phases:

1. Define Phase
2. Design Phase
3. Analyze Phase
4. Implementation Phase

#### Define Phase

In the very beginning, the client needs to determine their Goals and the corresponding KPIs. This means answering the question of why this project was initiated and how to measure if it is successful. This is always helpful for the design, analyze, and implementation phase. It also helps to define the business requirements and analyze the target groups to create Personas.

The define phase is conducted on the client side and can be supported by the partner or Sitecore.

#### Design Phase

In the design phase, UX/UI designers create wireframes and layouts to create the overall design. This should be supported by running quantitative and/or qualitative surveys and user tests to validate if the designs match the clients' requirements.

#### Analyze Phase

The Analyze Phase targets the requirements documents that developers can use to start implementing. These requirements can be the basis for user stories to define the tasks for each feature.

It is key to know XM Cloud and its features as well as the best practices to design the application and content architecture accordingly.

It is also important to define the scope to be achieved towards a go-live and other milestones or work packages.

Agile methodologies and existing XM Cloud features support the parallelization of work streams. Based on feedback from teams in the field, here is their preferred approach:

<img src="/images/learn/project-workflow.jpeg" alt="Screenshot showing an example parallelization of work streams"/>

1. Analyze designs and gather authoring requirements

Before any development begins, the Business Analyst or Product Owner needs to analyze the website designs/wireframes and discuss authoring requirements with the people who are going to use the system to populate and maintain the website. Knowing **how often website content or assets need to be updated** and knowing **how much flexibility the authors need** over page layout and component structure is important information that needs to be communicated to the technical lead or architect.

2. Identify page types and components

The Business Analyst or Product Owner needs to work together with the technical lead or architect to identify the list of page types needed for the website and the list of components needed on each page type.

Some tips that teams find helpful:

- It helps to draw boxes around components and label them directly in the designs.
- Include notes about any content that needs to be accounted for that is not included in the designs (for example, seasonal promos or extra fields for optional content).
- Include notes about webpage behavior that may not be obvious in the designs (for example, do some components look or function differently on mobile? Or if the user is logged in?)
- At this stage, components should all have “identifiers." What that identifier is will be up to the implementation team.
  - This makes it clear how many components there are in total and encourages teams to look for patterns and opportunities to reuse components across different pages. More components = more work for devs to build them, and more work for Content Authors to learn them.
  - The identifier should be referenced and used in the first bullet point when labelling and identifying components in the designs.
- Check if the site needs to support several languages and if this has an effect on layout changes per language.

This step gets the business side and the technical side of the project into alignment. Content Authors get to see the types of pages they will be able to create, the components they will be able to add to pages, and the fields that will be editable in those components.

In the end, all requirements should be created and prioritized, so developers can start estimating and implementing them.

#### Implementation Phase

After the requirements are handed off to the dev team, the team starts estimating and implementing based on priority. The business stakeholders should jump in at regular intervals to review demos and provide feedback to the dev team.

The implementation phase starts with Sprint 0, which is used to set up the common ground for developers, meaning the XM Cloud Project and Environment(s) as well as the Software Solution for the head application and middleware. Also, some developers need to familiarize themselves with the technology stack.

Based on this common ground, developers can create layouts and components that reflect the initial business goals.

Once an MVP is delivered to the client, the authors or marketers can already start creating content.

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

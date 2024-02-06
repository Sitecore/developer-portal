---
product: ['xm-cloud']
title: 'Preparing For A Project'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this article can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

> ## For Business Stakeholders
>
> Recommended practices for business stakeholders who are ramping up dev teams for Sitecore XM Cloud work.

### Team Structure

> ✅ DO staff your dev teams with more front-end devs than back-end/Sitecore devs

You’re probably unlikely to customize the CM much. Projects are seeing much less .NET code than past XM projects. This means that teams can consist mostly of front-end developers.

### Project Workflow

Conducting a planning phase where requirements are flushed out and documented is the best way to set up the dev team for success.

Based on feedback from teams in the field, here is the approach that teams like:

![Development Modes with XM Cloud](/images/learn/project-workflow.jpeg)

1. Analyze designs and gather authoring requirements

Before any development begins, the Business Analyst or Product Owner needs to analyze the website designs/wireframes and discuss authoring requirements with the people who are going to use the system to populate and maintain the website. Knowing **how often website content/assets need to be updated** and knowing **how much flexibility the authors need** over page layout and component structure is important information that needs to be communicated to the dev lead.

2. Identify page types and components

The Business Analyst or Product Owner needs to work together with the dev lead to identify the list of page types needed for the website and the list of components needed on each page type.

Some tips that teams find helpful:

- It helps to draw boxes around components and label them directly in the designs.

- Include notes about any content that needs to be accounted for that is not included in the designs (for example, seasonal promos or extra fields for optional content).

- Include notes about webpage behavior that may not be obvious in the designs (for example, do some components look or function differently on mobile? or if the user is logged in?)

- It helps to come up with titles for all components at this stage. This makes it clear how many components there are total, and encourages teams to look for patterns and opportunities to reuse components across different pages. More components = more work for devs to build them and more work for Content Authors to learn them.

This step gets the business side and the technical side of the project into alignment. Content Authors get to see the types of pages they will be able to create, the components they will be able to add to pages, and the fields that will be editable in those components.

3. Implementation phase

After the requirements are handed off to the dev team, the business stakeholder should jump in at regular intervals to review demos and provide feedback to the dev team.

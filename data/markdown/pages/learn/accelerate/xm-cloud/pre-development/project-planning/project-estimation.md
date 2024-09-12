---
title: 'Project Estimation'
description: 'Learn how to forecast the cost and timeline of your project'
area: ['accelerate']
---

## Problem

I need to be able to provide estimates that allow me to make an initial forecast of project cost and timeline. This leads the expectations on when the project can be delivered.

## Solution

Creating an estimate for a Sitecore XM Cloud implementation is a large but important task. At its core, an estimate is a best guess based on experience.

This recipe assumes a level of experience with creating estimates. Rather than detail every aspect of the process, we will focus on how to make sure that the estimates are realistic, achievable, and informed by the right considerations.

This recipe works very closely with the [XM Cloud Sample Project Plan](xm-cloud-sample-project-plan), [Requirements Gathering](../discovery/requirements-gathering), and [Preparing for an XM Cloud Project](preparing-for-an-xm-cloud-project) recipes.

### Preparing for an Estimate

From the discovery process, a list of features, components and functionality will be created. Using this list, the User Stories for the project can be created.

The user stories should be broken down into tasks for estimation, either by sizing or by time. Tasks should be broken down to the point where they fit inside of a sprint or short-term development cycle.

### Empirical Evidence/Error Margins

Estimates produced by this process should not have generic padding for “unknowns”, rather each estimate should account for statistically known error margins that inform the final estimate.

How do we know what our error margins are? This should be based on empirical data from previous projects for both the partner and the client.

- Use historical data on how the development team performed against the estimates for similar projects.
- Look at previous projects that had similar components/features and compare how long those took to implement.
- How many similar projects has the client been involved in, and what was the success rate?
- How much confidence does the team have in the clarity of the user requirements provided by the client?

All these data points and more can be used to measure the estimates for this project and include a margin for error.

<Alert status="info">
  <AlertIcon />
    If this data is not yet available for any reason, such as this being your company’s first Sitecore project, then make sure projects are tracked and recorded to better influence future project estimates and planning.
</Alert>

### Task Breakdowns/Lists

It is important to create this task breakdown/list:

- This will help support and justify estimates
- It helps with sequencing and finessing dependencies
- It can help the team to work through assumptions and formalize/document them
- This keeps track of unknowns
- It can help flag other estimations that have similar models and methodologies
- This provides data points for project management and post-project analysis

### What to list?

In the task breakdown/list, the team should note down all the major tasks that _every_ team on the project must take to complete the feature. These teams include, but are not limited to:

- CMS Development
- Web Application Development
  - Back End/Front End/Full Stack depending on your team structure
- QA
- UAT

Each team will have distinct tasks that are logically grouped for that team.

### Example Task Breakdown

The following is partial, non-exhaustive example task breakdown. The task breakdown is logically grouped by team for a user story or feature. The types of tasks and associated estimations will vary by factors such as team composition, team experience, project requirements, client asks, and company processes.

This is an example of a task breakdown on a component. The team consists of 2 CMS Developers who can also handle the Web Application back end development, 2 front end only developers and 1 QA person.

**My Feature**: Detail out the feature requirements here.

**CMS Development**

- Sitecore IA - templates: 2 hours
- Sitecore IA - SCS module: 1 hour

**Web Application Development - Back End**

- Implement React library/context: 5 hours
- API endpoint: 12 hours
- API hardening: 2 hours

**Web Application Development - Front End**

- React component development: 5 hours
- Styling: 6 hours
- Browser compatibility: 3 hours
- Performance/Lighthouse work: 2 hours

**QA**

- Test Sitecore editing UI: 2 hours
- Test API calls: 2 hours
- Test FED component: 2 hours
- Validate Lighthouse scores: 1 hour

### Compiling the Estimate

Once the user stories and task breakdowns have been done, this can then be used to generate the final cost estimate for the development work, factoring in any overheads for project management.

At the end of the estimation phase, the team should have a final justifiable figure for your client.

## Discussion

### Coping with Unknowns/Vague Requirements

If client requirements are too vague to estimate without a large number of unknowns being listed, the estimate cannot be completed. Requirements need to be re-validated with the client and clarified so that the project does not start with requirements that could be misinterpreted by both the team or the client.

If there is persistent difficulty in achieving clarity around requirements, consider recommending a dedicated, contractual discovery phase.

## Related Recipes

<Row columns={2}>
<Link title="XM Cloud Sample Project Plan" link="/learn/accelerate/xm-cloud/pre-development/project-planning/xm-cloud-sample-project-plan" />
<Link title="Requirements Gathering" link="/learn/accelerate/xm-cloud/pre-development/discovery/requirements-gathering" />
</Row>

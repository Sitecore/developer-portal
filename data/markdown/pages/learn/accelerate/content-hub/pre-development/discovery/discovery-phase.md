---
title: 'Discovery Phase'
description: 'Building alignment and setting the foundation for Sitecore Content Hub'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
created: '2024-12-13'
lastUpdated: '2024-12-13'
audience: ['All']
---
## Context
The Discovery phase is the cornerstone of a successful Sitecore Content Hub implementation. This stage involves defining requirements through the domain model, which outlines the major data elements and UI components. It ensures a clear understanding of the organization's needs, current systems, and goals, aligning stakeholders and laying the groundwork for effective planning and execution. 

## Execution
Discovery is more than just information gathering; it sets the tone and direction for the entire project. The primary objectives include understanding the current state by evaluating existing systems, workflows, and pain points, ensuring a clear picture of the organization’s starting point. This phase also involves creating and approving the domain model, performing initial configuration in a non-production environment, and conducting a requirements workshop.

As we embark on a new Content Hub instance, it’s essential to thoroughly understand the organization’s objectives and challenges in order to create a comprehensive project plan that is both actionable and accurately estimated. This foundation ensures clarity, alignment, and provides a roadmap for achieving the desired outcomes. The final output of the Discovery phase is a formalized requirements document and project plan, reviewed and signed off by the team.

### Key areas of focus during the Discovery phase

#### <strong>1. Domain Model</strong>

For Content Hub, requirements are first defined through the domain model, which outlines the major data elements we are building or enhancing. The domain model also specifies user interface (UI) elements, such as whether a field is included in search, available for mass editing, or needs to be secured or protected.

The draft domain model is the initial requirement that should be signed off by the client. Once signed off, the draft domain model is used to perform an initial configuration of Content Hub, which will be utilized in the requirements workshop.

#### <strong>2. Initial Configuration</strong>

Once the domain model is created and approved, the next step is to perform the initial configuration of the implementation in the non-production environment (or the lowest available environment).

During this time, the client should provide branding guidelines that will be used to apply a custom theme to Content Hub. At a minimum, the following assets should be provided: color scheme, logo, icon, and background image, to allow for a custom theme to be created. Additionally, to ensure a good first impression, it is helpful for the client to provide a small sample of test data, such as assets, projects (if applicable), and content items (if applicable).

Once the domain model is configured within Content Hub, and the theme and sample data are loaded, the team can schedule the requirements workshop.

#### <strong>3. Requirements Workshop</strong>

The purpose of the workshop is to present the key stakeholders with the output of the domain model within Content Hub and walk through the basic workflows, helping stakeholders get a more focused sense of what is available within the implementation. In addition to this review, the workshop aims to discuss additional requirements to ensure that all the client's main elements and needs are addressed, prioritized, and planned.

When implementing Content Hub, the primary set of requirements used to create the draft domain model outlines the main structure and fields that the client will use within Content Hub. The client stakeholders, the partner, and Sitecore will work together to gather these requirements. This is typically done using a domain model template—a workbook that lists all the data elements, their types, relationships, and any required conditions.

The requirements workshop provides stakeholders with an early preview of the Content Hub implementation, including their metadata fields. This preview enables them to have a clearer vision of the end result and helps identify further custom requirements that need to be gathered during this phase.

Topics covered in the requirements workshop include:
<ul>
  <li>Style and theme</li>
  <li>Functional security</li>
  <li>Use cases</li>
  <li>Integration points</li>
  <li>Data migration</li>
  <li>Governance and policies</li>
</ul>

After the workshop concludes, a listing of the requirements discussed should be compiled and reviewed by the team. This requirements document will drive project planning for the remainder of the project.

For each requirement, a task or set of tasks can be created, estimated, and the necessary resources can be determined. Each task can then be entered into a project management tool like JIRA for team assignment and execution.

Once all requirements are gathered and agreed upon, a project plan can be developed, breaking requirements into tasks and planning with estimates and durations.

The final output of the Discovery phase is a formalized requirements document and project plan, both reviewed and signed off by the team.

## Related Recipes

<Row columns={2}>
  <Link title="Project Planning" link="/learn/accelerate/content-hub/pre-development/discovery/project-planning" />
  <Link title="Migration Guide" link="/learn/accelerate/content-hub/final-steps/migration-guide" />
  <Link title="Testing and Quality Assurance" link="/learn/accelerate/content-hub/final-steps/testing-and-qa" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Sitecore Content Hub Documentation" link="https://doc.sitecore.com/ch" />
  <Link title="General Best Practices" link="https://doc.sitecore.com/ch/en/users/content-hub/general-best-practices.html" />
</Row>

## Related Learning

<Row columns={2}>
  <Link title="Content Hub Administrator" link="https://learning.sitecore.com/pages/81/content-hub-administrator" />
  <Link title="Content Hub Developer" link="https://learning.sitecore.com/pages/82/content-hub-developer" />
</Row>

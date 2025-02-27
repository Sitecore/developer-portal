---
title: 'Requirements Gathering'
description: 'Successful Project Plans start with strong requirements gathering'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2024-12-13'
audience: "All"
---

## Context
Requirements gathering is an integral part of any [Discovery](/learn/accelerate/content-hub/pre-development/discovery/discovery-phase); it serves as the first step in understanding the project's strategic objectives and aligning them with technical capabilities. By doing so, teams can set a strong foundation for [Project Planning](/learn/accelerate/content-hub/pre-development/discovery/project-planning), where these insights are translated into actionable tasks, timelines, and deliverables.

Starting this phase early helps identify risks and create a clear roadmap for all involved. Engaging stakeholders at this stage ensures alignment on goals, scope, and priorities, establishing a strong framework for the efficient implementation of Sitecore Content Hub, while also a level of familiarity of the features available.

Sitecore Content Hub will be a central tool for a number of users and processes, so it’s key that these facilitate the end user’s day-to-day job while also streamlining the process. The process of managing assets that are going to be reused in marketing campaigns might differ from the needs of video assets – and this needs to be captured now.

## Execution

Successful requirement gathering focuses on delivering three key outcomes - a formalized <strong>Requirements Document</strong>, a signed-off <strong>Domain Model</strong> and a detailed <strong>Project Plan</strong>.

Deliverables should be reviewed and signed off by the project team, forming the basis for the subsequent phases of the Content Hub implementation.

### <strong>Requirements Document</strong>

Requirements are not just about documenting needs; it’s about collaboration, understanding nuances, and planning for effective execution. Identifying key workflows, addressing governance and security, and mapping integrations are key areas that require engaging with stakeholders, to ensure every aspect of their day-to-day is accounted for and adequately planned.

These key topics are suggested for discussion and inclusion within a formalized requirements document.

#### <strong>Business Process</strong>
Workflows in Sitecore Content Hub define structured processes for managing assets, projects, and jobs - ultimately any organization business process. These workflows range from simple Digital Asset Management (DAM) processes to advanced Content Operations workflows. The flexibility of Content Hub enables organizations to customize workflows to fit their specific needs, ensuring streamlined operations and enhanced collaboration.

The standard DAM workflow includes these steps:

<ol>
  <li>Upload: Add assets, such as photographs or videos, to Content Hub.</li>
  <li>Edit Metadata: Enhance the asset by adding metadata (e.g., tags, descriptions) for improved searchability and categorization.</li>
  <li>Review: Leverage annotation tools to provide feedback and ensure asset quality.</li>
  <li>Share: Make approved assets available for download, editing, or distribution in campaigns.</li>
  <li>Archive: Move unused assets to the archive for future reference or historical purposes.</li>
</ol>

Content Hub also supports creating collections—groups of related assets that can be shared and collaborated on by multiple users. Collections streamline teamwork by enabling efficient asset sharing and feedback.

<strong>Requirements Gathering Checklist</strong>
- What is the existing process for asset creation? 
- What is the overall asset lifecycle?
- How are assets categorized and grouped?
- How do users find assets in the existing system?
- What are the key elements used for searching?
- What are the main pain points when finding assets?
- How are assets shared and collaborated on?
- How are assets used outside of the system?


<strong>Design Considerations</strong><br/>
While in this phase, consider also any design decisions that need to be taken through the process, mainly:
- *Templates*: Use project templates to streamline the creation of similar projects.
- *Flexibility*: Basic and multi-stage projects allow ad-hoc task additions; jobs do not.
- *Resource Management*: Both basic and multi-stage projects support resource and budget management, whereas jobs focus solely on workflow execution.
- *Scalability*: Multi-stage projects are ideal for long-running campaigns that span multiple phases.


#### <strong>Governance and Functional Security</strong>
Governance and functional security in Sitecore Content Hub work together to establish a secure, structured, and compliant environment for managing content and data. Governance ensures the platform operates in alignment with organizational and regulatory standards by defining clear rules, roles, and responsibilities. These policies provide consistency, accountability, and adherence to standards for content approval, publication, archival, and versioning processes. Functional security complements this by managing access to content and features, ensuring users have appropriate permissions based on their roles. Field-level security, language considerations, and accessibility further enhance usability while protecting sensitive data such as financial or personal information. Together, governance and functional security maintain data integrity, improve user experience, and uphold regulatory compliance.

<strong>Requirements Gathering Checklist</strong>
- What governance framework or policies currently exist for managing content and data?
- Are there documented rules or procedures for content approval, publication, and archival?
- What processes are in place to handle content versioning and change management?
- How will governance policies be communicated and enforced among users?
- Which fields or properties require restricted access, and which roles should have permissions to view or edit them?
- Are there fields that should be visible but non-editable for certain users?
- Are there sensitive fields that require additional security measures, such as financial or personal data?
- What user roles need to be established for effective content and data management?
- Which teams or individuals will oversee content creation, review, and publication?
- What permissions and access levels should be assigned to each role?
- Are there external collaborators or contractors who require specific access or restrictions?
- What actions should occur when users attempt to access fields they do not have permission for?


#### <strong>Search Capabilities</strong>
Search is a cornerstone of Sitecore Content Hub, enabling users to locate assets quickly and efficiently. Capturing search requirements during the requirements gathering phase ensures the solution meets user needs and aligns with organizational workflows.

Key aspects of search include:

<ol>
  <li><strong>Full-Text Search</strong> - Enables users to search across all available asset metadata included in the index, while supporting the use of logical operators such as AND and OR to refine search results. Allows for the inclusion of wildcards for flexible and partial-term searches.</li>
  <li><strong>Faceted Search</strong> - Provides a hierarchical approach to narrowing search results through facets. Users can drill down by selecting single or multiple values, filtering results dynamically. Supports both vertical (nested filters) and horizontal (parallel filters) facets for an intuitive search experience.</li>
  <li><strong>Advanced Search</strong> - Includes a dedicated section for defining additional filters based on specific metadata fields. Supports custom and dynamic values, allowing search options to adapt to organizational needs. Facilitates a tailored search experience by offering configurable parameters aligned with business processes.</li>    
</ol>

By defining search capabilities early in the project, teams can ensure the implementation supports key workflows. A robust search feature empowers users to efficiently manage and locate assets, reducing time spent searching and increasing productivity.

<strong>Requirements Gathering Checklist</strong>
- Are there existing workflows that rely heavily on search?
- What is the expected performance for search queries (e.g., result display time)?
- Should search results be exportable or shareable?
- How should search results be displayed (e.g., list view, grid view)? 
- Which metadata fields should be included in the search index?
- Are there specific operators (e.g., AND, OR) or wildcards required for search queries?
- Should search results prioritize certain metadata fields (e.g., titles over descriptions)?
- Which metadata fields should be available as facets (e.g., categories, tags, asset types)?
- Should facets support hierarchical values (e.g., region > country > city)?
- Will users need the ability to select multiple facet values simultaneously?
- How should facets be displayed—vertically, horizontally, or both?
- Which specific fields should be included in the advanced search filters?
- Are there any custom or dynamic values required for advanced search filters?
- Should advanced search filters differ by user role or team?
- Is there a need for preconfigured advanced search templates for specific use cases?


#### <strong>Branding and Theming</strong>
Branding and theme integration in Sitecore Content Hub ensures that the platform's visual design aligns with an organization's brand guidelines. This includes defining color schemes, fonts, logos, and other graphic elements that create a cohesive and visually appealing user experience. The customization of themes within Content Hub ensures the platform matches the organization's brand identity while providing a user-friendly, accessible interface.

More detail on creating a Theme can be found on our [documentation](https://doc.sitecore.com/ch/en/users/content-hub/themes.html).

<strong>Requirements Gathering Checklist</strong>
- What are the official brand colors (primary and secondary)?
- What font types and font sizes should be used across the platform?
- Are there any specific visual elements (e.g., logos, icons, or patterns) that must be incorporated into the design?
- Should the theme customization be limited to only the user interface (UI), or should it also apply to other aspects like email templates?
- Can you provide the official logo and any specific variations (e.g., horizontal, stacked, monochrome)?
- Can you provide a brand guideline?


#### <strong>Integrations</strong>
Sitecore Content Hub integrates seamlessly with various systems and tools to enable efficient workflows, streamlined content delivery, and data sharing. It provides flexible ways to integrate and interact with Content Hub programmatically. 

Full detail can be found in the [Scripting Guidance](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios) and [External Integrations](/learn/accelerate/content-hub/implementation/custom-logic/external-integrations) recipes, but as an overview:

| Integration Type | Purpose | 
| ----------- | ----------- | 
|Public Links|Creation of Links to share assets with users who do not have direct access to the system. These unsigned public links enable external stakeholders to access pre-generated file renditions of assets without requiring login credentials. Advanced options include creating layered images and applying transformations to existing renditions before sharing them.|
|API|Programmatic interaction with Content Hub resource as resources accessible via unique URLs including throttling mechanisms to ensure consistent performance. Developers can implement custom integrations with other applications. Detailed examples can be found in the [Scripting Guidance](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios) and [External Integrations](/learn/accelerate/content-hub/implementation/custom-logic/external-integrations). |
|Experience Edge|Headless content delivery to multiple channels, this platform supports omnichannel publishing through GraphQL APIs and a CDN for media delivery.Routes and caches queries via a CDN, minimizing response times. Automatically publishes changes when content is updated in Content Hub. Read more on Experience Edge on our [documentation](https://doc.sitecore.com/ch/en/users/content-hub/experience-edge-for-content-hub.html).|
|Sitecore Connect for Content Hub|Acting as a middleware to integrate Sitecore Content Hub with XM/XP and XM Cloud, this connector allows you to link assets directly from Content Hub and synchronizes marketing content for omnichannel campaigns. More documentation can be found on for [XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-connect-for-content-hub.html) or [XM/XP](https://doc.sitecore.com/xp/en/developers/connect-for-ch/40/connect-for-content-hub/sitecore-connect-for-content-hub.html)|

<strong>Requirements Gathering Checklist</strong>
- What systems need to integrate with Content Hub (e.g., other Sitecore products, CRM, analytics, ERP)?
- Are there existing APIs, connectors, or middleware solutions available for these integrations?
- What specific data or assets need to flow between Content Hub and these systems?
- Are there any custom development requirements for non-standard integrations?
-What type of data (e.g., metadata, assets, content, analytics) will be exchanged between systems?
- What is the direction of the data flow (e.g., one-way push, pull, bi-directional)?
- How frequently should the data synchronization occur (real-time, scheduled, on-demand)?
- Are there any specific data formats or standards that need to be adhered to (e.g., JSON, XML)?
- What authentication methods will be used for integration (e.g., OAuth, API key)?
- Are there any limitations or constraints on the existing systems that might impact the integration?
- What is the expected load or volume of data being exchanged?

#### <strong>Data Migration</strong>
Data migration involves the process of transferring data from one system to another, ensuring consistency, accuracy, and completeness across platforms. In the context of Sitecore Content Hub, data migration typically involves transferring data from existing systems to Content Hub, ensuring that all relevant data is properly mapped, validated, and integrated into the new environment.

Review our [Migration Guide](/learn/accelerate/content-hub/final-steps/migration-guide) recipe for more detail.

#### <strong>Reporting</strong>
Reporting is essential for monitoring and evaluating the performance, progress, and outcomes of asset management within Sitecore Content Hub. By identifying key metrics and establishing clear reporting requirements, stakeholders can gain valuable insights into system usage, content effectiveness, asset performance, and overall project success.

The reporting system should cater to both high-level strategic needs and detailed, granular insights for operational teams. Additional information on [Reporting Dashboard](https://doc.sitecore.com/ch/en/users/content-hub/reporting-dashboard.html) and [Reporting Pages](https://doc.sitecore.com/ch/en/users/content-hub/reporting-page.html ) can be found on our documentation.

<strong>Requirements Gathering Checklist</strong>
- What are the main objectives for reporting in Content Hub (e.g., tracking project progress, content performance, asset usage)?
- How often will reports need to be generated (e.g., real-time, daily, weekly, monthly)?
- Are there any predefined reporting tools or templates in place (e.g., Google Data Studio, Power BI, Sitecore Analytics)?
- What are the key areas of performance that stakeholders want to track (e.g., asset performance, content consumption, project milestones)?
- Are there any custom metrics that need to tracked?
- What metrics will help measure the success of content or asset usage in Content Hub (e.g., number of assets published, user engagement levels, asset lifecycle status)?
- What metrics are necessary for tracking project progress (e.g., number of tasks completed, percentage of tasks on schedule, overall project timeline)?

### <strong>Domain Model</strong>
The Domain Model is the cornerstone of requirements gathering for Sitecore Content Hub. It provides a comprehensive blueprint that defines how assets, content, and metadata are structured, secured, and enhanced within the platform. The domain model is essential to ensure that Content Hub aligns with business requirements and operational workflows, serving as the foundation for a scalable and efficient content management system.

A <strong>Domain Model</strong> defines the structure and relationships of assets, content, and metadata within a system. At its core, an <strong>Entity</strong> represents real-world items such as images, products, or campaigns. Each entity is characterized by <strong>Properties</strong>, which serve as metadata displayed on detail pages, providing essential information about the entity. These properties can take various forms, including strings, numbers, option lists, taxonomies, and relationships, ensuring comprehensive data organization and accessibility.

When creating a Domain Model, this should include:
<ol>
  <li><strong>Entity</strong> - Represents a real-world item or concept (e.g., images, products, campaigns, or videos). Entities are the core building blocks of the domain model and must be carefully designed to reflect the data they represent.</li>
  <li><strong>Properties</strong> - Metadata about entities that describe their characteristics. These are displayed on detail pages and are essential for search, categorization, and management. Examples include:</li>
  <ul><li>*Strings*: Descriptive fields like "Title" or "Description."</li><li>*Numbers*: Numerical values like "Price" or "Quantity."</li><li>*Option Lists*: Drop-down lists with predefined values (e.g., "Status" with options like "Approved," "Pending").</li><li>*Taxonomies*: Hierarchical classification systems for structured categorization (e.g., "Brand" or "Region").</li><li>*Relations*: Connections between entities (e.g., associating an image with a campaign).</li></ul>
  <li><strong>Panel Groups</strong> - UI elements that organize metadata into visually distinct sections on entity detail pages. They improve usability by grouping related fields and can have security settings applied to control access.</li>
  <li><strong>Facets</strong> - Taxonomy-driven filters that allow users to refine search results dynamically. Facets improve the search experience by enabling users to drill down into specific metadata categories.</li>
</ol>
Below is a sample taxonomy definition for the "Brand" property:

| Attribute | Details | 
| ----------- | ----------- | 
|Label|Brand|
|Value Type|Taxonomy|
|Required|No
|Multiselect|Yes|
|Editable|Yes|
|Mass Edit|Available in both bulk edit page and table views|
|Facets|Yes|
|Searchable|Yes|
|Security|Visible to Marketing and Content Admins|
|Multilanguage|No|
|Help Text|Select the brand associated with the asset|

<strong>Requirements Gathering Checklist</strong>
- What types of assets and entities need to be represented in the domain model?
- What metadata should be captured for each entity type?
- Which fields are required, optional, or conditional?
- What taxonomies or classifications are necessary for categorizing entities?
- Are there any hierarchical relationships between entities (e.g., parent-child)?
- Which metadata fields should support multilingual values?
- What roles or user groups need access to specific entities or metadata fields?
- How will the metadata properties be used in search and filtering?
- Are there any external systems or workflows that require integration with metadata?
- Should any metadata fields support dynamic or custom values?


### <strong>Project Plan</strong>
Once the requirements are gathered and documented in a formal Requirements Document and the Domain Model is reviewed with the client and sign-off, a [Project Plan](/learn/accelerate/content-hub/pre-development/discovery/project-planning) can then be created.

## Insights

### <strong>Requirements Workshop</strong>
There are different approaches on how to gather requirements, but we have found running a Requirements Workshop the most efficient way. This is a collaborative session designed to validate the domain model, explore workflows, and gather additional requirements.

It offers stakeholders an early preview of the Content Hub implementation, ensuring alignment and clarity on the project’s direction.

Following the workshop completion:
- Compile and review all discussed requirements.
- Create tasks for each requirement, estimate effort, and assign resources.
- Document requirements in tools like JIRA for project execution.
- Develop a project plan with tasks, estimates, and timelines.


### <strong>Advanced Workflows</strong>
For organizations requiring more sophisticated processes, Sitecore Content Hub offers advanced workflows through Content Operations. These workflows address complex project management needs, such as multi-stage campaigns and cyclical job processes.

There are several workflow options, based on the scale of the project.

#### <strong>Basic Project Workflow</strong>
Ideal for small, linear projects like creating promotional material for a product launch, example:
<ol>
  <li>Create: Initiate a straightforward project.</li>
  <li>Assign Tasks: Define and delegate tasks to team members.</li>
  <li>Complete Tasks: Mark tasks as completed to progress the project.</li>
</ol>


#### <strong>Multi-Stage Project Workflow</strong>
Designed for complex campaigns with phases such as planning, execution, and analysis – example:
<ol>
  <li>Create: Launch a multi-phase project with defined stages.</li>
  <li>Add Stages and Milestones: Organize projects into distinct stages with milestones marking critical points.</li>
  <li>Assign and Complete Tasks: Manage tasks within each stage to advance through the project phases.</li>
</ol>

#### <strong>Job Workflow</strong>
Suitable for workflows like creative reviews or asset lifecycle management, example:
<ol>
  <li>Create: Initiate a job with a predefined state flow.</li>
  <li>Assign Quick Actions: Configure actions tied to specific workflow steps.</li>
  <li>Complete Actions: Execute predefined steps to move the job forward.</li>
</ol>

Introducing the DAM workflow before delving into [Content Operations](https://doc.sitecore.com/ch/en/users/content-hub/get-started-with-content.html) workflows provides a logical progression from simple to complex, catering to users with varying needs. It ensures that users understand the foundational capabilities of Content Hub before exploring its advanced functionalities.

## Related Recipes

<Row columns={2}>
  <Link title="Migration Guide" link="/learn/accelerate/content-hub/final-steps/migration-guide" />
  <Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
  <Link title="External Integrations" link="/learn/accelerate/content-hub/implementation/custom-logic/external-integrations" />
  <Link title="Distribution of Assets" link="/learn/accelerate/content-hub/implementation/configuration/distribution-of-assets" />

</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Get started with assets" link="https://doc.sitecore.com/ch/en/users/content-hub/get-started-with-assets.html" />
  <Link title="Get started with content" link="https://doc.sitecore.com/ch/en/users/content-hub/get-started-with-content.html" />
  <Link title="Get started with projects and jobs" link="https://doc.sitecore.com/ch/en/users/content-hub/get-started-with-projects-and-jobs.html" />
  <Link title="User access and permissions" link="https://doc.sitecore.com/ch/en/users/content-hub/user-access-and-permissions.html" />
  
</Row>
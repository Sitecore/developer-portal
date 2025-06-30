---
title: 'Optimizing Performance on Domain Model'
description: 'Customizing the home page in Sitecore Content Hub for branding, personalization, and usability.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-06-08'
created: '2025-06-08'
audience: ['Solution Architects','Technical Implementers','System Administrators']
---

## Context
Sitecore Content Hub provides a highly flexible environment for building and managing digital content. However, this flexibility can sometimes lead to inefficient configurations that negatively impact performance. Various factors, from schema design choices to the number of components on a page, can unintentionally slow down your environment.

> In this recipe, we’ll explore the most common performance issues in Sitecore Content Hub and how to identify and resolve them. If you're setting up a new environment or are new to Content Hub implementation, we recommend reviewing the [Domain Modelling](/learn/accelerate/content-hub/pre-development/data-model/domain-modelling) recipe for best practices.

## Execution
The first step into optimizing the performance is into identify what type of performance issue you are facing. Ask yourself the following questions:
- Is the issue affecting a limited number of users or is it widespread?
- Is it isolated to specific pages, workflows, or components?
- Could it be related to external factors such as internet speed, VPN, or internal infrastructure?
- Are there specific types of requests that are consistently slow?
- Is is related to certain processes?

Use the available tools to investigate and better understand the nature of the performance issues. Some of the most helpful tools include:
| Tool                      | Description                                                                                                     |
|---------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Browser Developer Tools**   | Use your browser’s developer tools (e.g., [Chrome DevTools](https://developer.chrome.com/docs/devtools/performance/reference )) to analyze slow-loading resources, long-running queries, or large payloads. |
| **Content Hub Speed Test Tool** | Use the [speed test tool](https://doc.sitecore.com/ch/en/users/content-hub/perform-a-speed-test.html) to assess the performance of your Content Hub environment.                             |
| **Content Hub Stats Page**    | Check the [stats page](https://doc.sitecore.com/ch/en/users/content-hub/current-activity.html) for signs of performance bottlenecks, such as growing queues or a large number of pending jobs. |


There are many factors that can contribute to performance issues. Below are some of the most frequent problems caused by implementation choices. While the following list highlights some of the most frequent issues caused by implementation choices, keep in mind that your specific configuration may introduce unique challenges that require deeper investigation and troubleshooting.

### Domain Model-related issues
Whenever possible, we recommend proactively reviewing your domain model to identify and resolve potential performance bottlenecks before they impact users.

#### Navigation related flags
Many performance issues originate from how the domain model is configured. A common example is enabling the "Allow navigation" or "Path relation" flag on a relation that includes a large number of child entities. This can significantly degrade performance, particularly when the number of linked children reaches into the hundreds or thousands.

These issues can often be identified by analyzing the returned results. For example, if a specific entity loads noticeably slower than others, you may observe long-running queries, aggregate calls, or unusually large response payloads.

With this in mind, monitor any requests that take a long time to complete and examine their returned data. You’ll often be able to spot relations that return a large number of children or involve many related paths. Based on your findings, you should be able to refactor and optimize your domain model accordingly.

#### Inheritance
Another, less obvious, performance consideration within the domain model involves processing updates to definitions or ancestor entities. Certain changes can trigger updates across all related entities, which may place a significant load on the system. In environments with a large number of entities, this can result in noticeable delays in processing graph messages. To minimise disruption, we recommend making definition changes outside of working hours where possible, and applying all required changes in a single update.

 Similarly, due to the way inheritance functions in Content Hub, certain changes can trigger updates across all descendant entities. Depending on the number of related items, this can slow down background graph processing. As a result, updates may take time to appear in full-text search and facets. We recommend enabling inheritance flags cautiously and only when necessary.

 For more information on schema changes and inheritance, review the [Schema changes, inheritance, and the graph server](https://doc.sitecore.com/ch/en/users/content-hub/schema-changes,-inheritance,-and-the-graph-server.html) documentation  and [Domain modelling](/learn/accelerate/content-hub/pre-development/data-model/domain-modelling) recipe.

### Page and Component-related Issues
Page configuration can also be a major source of performance degradation. 

| Issue                           | Description                                                                                                                                                                                                 |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Lack of pagination**              | Displaying too many items in search results without pagination can slow down page load times. Use pagination or infinite scroll and limit the number of items per page.                                   |
| **Large preview/thumbnail images  **| Using high-resolution renditions for thumbnails or previews increases load times. Use out-of-the-box renditions or optimize custom renditions for performance without compromising quality.               |
| **Too many linked components**      | Excessive components on a single page can lead to longer rendering times. Review and reduce the number of components where possible.                                                                       |
| **Complex Component Conditions**    | Pages with many components containing multiple conditions can impact performance. Simplify or consolidate conditions where feasible.                                                                       |
| **External page components**        | Ensure your external page components code is optimized to avoid adding to load times. Review the [Developing External Components](/learn/accelerate/content-hub/implementation/custom-logic/developing-external-components) recipe for further detail.                                              |



## Insights
### Integrations
Running integrations during business hours can affect the performance experienced by end users, especially when the operations are large in scale. Whenever possible, schedule intensive tasks such as large external integrations or heavy operations like data migrations outside of business hours to help maintain a smooth user experience.

Also, be mindful of how internal scripts are designed and executed. Inefficient scripts can contribute to performance issues. For more information on optimizing script performance, review the [Scripts Guidance and Scenarios](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios) recipe.

### Slow excel exports
Another common performance issue involves  [Excel exports](https://doc.sitecore.com/ch/en/users/content-hub/export-excel-data.html) taking a long time when the "Export related entities" option is enabled. Even when exporting only a few entities, the process can be significantly delayed if those entities are linked to a large number of related items that are also included in the export

### Slow excel imports
Alternatively, if excel imports are taking a long time, this could be due to the post-processing that is occurring. When entities are imported via excel, the relevant triggers are executed which can slow down the import. If the data being imported is already processed and should not execute the configured triggers, this behaviour can be disabled by enabling rawImport within Settings > ExcelImportExport > ExcelImport.

## Related Recipies

<Row columns={2}>
  <Link title="Domain Modelling" link="/learn/accelerate/content-hub/pre-development/data-model/domain-modelling" />
  <Link title="Content Structuring" link="/learn/accelerate/content-hub/pre-development/data-model/content-structuring" />  
  <Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />  
  <Link title="Developing External Components" link="/learn/accelerate/content-hub/implementation/custom-logic/developing-external-components" />    
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Performance" link="https://doc.sitecore.com/ch/en/users/content-hub/performance.html" />  
  <Link title="Perform a speed test" link="https://doc.sitecore.com/ch/en/users/content-hub/perform-a-speed-test.html" />
  <Link title="Current activity" link="https://doc.sitecore.com/ch/en/users/content-hub/current-activity.html" />
<Link title="Schema changes, inheritance, and the graph server" link="https://doc.sitecore.com/ch/en/users/content-hub/schema-changes,-inheritance,-and-the-graph-server.html" />  
<Link title="Export Excel data" link="https://doc.sitecore.com/ch/en/users/content-hub/export-excel-data.html"/>
</Row>

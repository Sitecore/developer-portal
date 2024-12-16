---
title: 'Taxonomy vs Option List'
description: 'Guidelines for deciding between a taxonomy and an option list when designing the domain model for a Content Hub implementation.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-12-13'
audience: "Solution Architects"
---


## Context
During implementation, defining the metadata structure for a field like <em>Region</em> (populated with a list of all countries) presents a critical decision in Content Hub. Content Hub offers two options for such drop-downs: <strong>Taxonomy</strong> and <strong>Option List</strong>. Selecting the right format for <em>Region</em> is essential, as it directly impacts the application’s performance and the overall domain model. However, the dilemma persists: should <em>Region</em> be modeled as a taxonomy or an option list?

> Before deep diving in the use case, make sure to get familiar with the key differences between [Taxonomies and Option Lists](https://doc.sitecore.com/ch/en/users/content-hub/taxonomies-and-option-lists.html).

## Execution
One of the main solutions is to effectively structure the <em>Region</em> in the domain model by analyzing it as follows:

<ol>
  <li><strong>Hierarchical Structure for Regions</strong> - Organize <em>Region</em> as a hierarchical taxonomy to represent global business areas:<ul><li>Level 1: Global</li><li>Level 2: Super-Regions (e.g., EMEA, APAC, NA, LATAM)</li><li>Level 3: Regions within Super-Regions (e.g., Europe, Middle East)</li><li>Level 4: Sub-Regions or Country Groups (e.g., Western Europe, GCC)</li><li>Level 5: Countries (e.g., France, Germany, UAE)</li><li>Level 6 (optional): States/Provinces or Cities</li></ul></li>
  <li><strong>Handling Large Value Lists</strong> - With a vast number of countries, a taxonomy efficiently organizes data compared to a flat option list, improving scalability and maintainability.</li>
  <li><strong>Security Policies and User Group Management</strong> - A taxonomy allows granular control over assets by defining access policies and user groups tied to specific regions. Thus, <em>Region</em> basically defines the type of users in the system</li>
  <li><strong>Enhancing Search Filters</strong> - A taxonomy enables the <em>Region</em> field to serve as a facet in search, enhancing asset discovery and user experience.</li>
  <li><strong>Metadata of Metadata</strong> - If additional attributes like Region Code, Currency, or Time Zones are associated with <em>Region</em>, a taxonomy supports these relationships better than an option list.</li>
  <li><strong>Support for Business Needs</strong> - The hierarchical structure accommodates varying levels of granularity, enabling flexibility for organizational or geographical reporting.</li>
</ol>

By defining <em>Region</em> as a taxonomy, you ensure scalability, clarity, and optimal functionality in your domain model while meeting business requirements effectively.

## Insights
There’s no one-size-fits-all answer—it varies based on the requirements and the field's role within the domain model. When choosing between taxonomies and option lists in Sitecore's Content Hub, the decision depends on factors like the number of values, need for hierarchy, security settings, and display requirements. For managing large sets, intricate structures, and scenarios needing protection or inheritance, taxonomies are the best choice. Conversely, option lists are effective for straightforward lists with fewer than fifty entries and no extra attributes.

When deciding on the appropriate data type for your metadata, consider the following -

<ul>
<li><strong>Number of data items possible for metadata</strong>: For lists with fewer than 50 items, an option list is suitable. For larger lists, a taxonomy is recommended.</li>

<li><strong>User Group Definition</strong>: If you need to define user groups based on the metadata field, configure it as a taxonomy.</li>

<li><strong>Search Facets</strong>: To use the field as a search facet in various search pages, it is advisable to set it up as a taxonomy.</li>

<li><strong>Metadata Storage</strong>: To store additional details about the metadata field, such as type, name, and origin, configure it as a taxonomy. Option lists are limited to serving as data sources and do not support extended metadata.</li>

<li><strong>Hierarchy Levels</strong>: An option list can support up to five hierarchical levels, whereas a taxonomy has no restriction on the number of hierarchical levels it can contain.</li>
</ul>

## Related Documentation

<Row columns={2}>
  <Link title="Create a taxonomy" link="https://doc.sitecore.com/ch/en/users/content-hub/create-a-taxonomy.html" />
  <Link title="Create an option list" link="https://doc.sitecore.com/ch/en/users/content-hub/create-an-option-list.html" />
  <Link title="Taxonomies and option lists" link="https://doc.sitecore.com/ch/en/users/content-hub/taxonomies-and-option-lists.html" />
</Row>





---
title: 'Domain modelling'
description: 'Effectively model the Content Hub domain.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
created: '2025-06-08'
lastUpdated: '2025-06-08'
audience: ['Product Owner','System Administrator','Architect','User ']
---
## Context
The domain model is the foundation of any Content Hub environment. It defines the structure that governs how the product is configured, presented, and utilized. A well-designed domain model ensures a secure, efficient, and maintainable environment.

Content Hub offers a wide range of features that enable the creation of powerful and user-friendly solutions. This flexibility can lead to overly complex models if not carefully planned - effective domain modelling is essential for a successful implementation. 

## Execution
To implement a robust domain model, a solid understanding of Content Hub’s features and functionalities is crucial. While the model can be modified at any time, making significant changes after data has been populated is often time-consuming and complex.

The following key principles and recommendations to guide your domain modelling process. For detail on collecting requirements, review the [Requirements Gathering](/learn/accelerate/content-hub/pre-development/discovery/requirements-gathering) recipe.

### Schema Structuring
The structure of the schema significantly influences the overall look, feel, and usability of a Content Hub environment. It’s essential to design your schema with simplicity, usability, and efficiency in mind. Investing time upfront to thoroughly understand, plan, and design how your schema is setup and how its components interrelate will pay off in the long run. 

For example, in the diagram below, we see two possible domain models in Content Hub. The second model, however, is more effectively structured, making it easier to maintain and understand. It also enhances usability for end users by providing more meaningful facets for filtering assets. Moreover, it integrates more seamlessly with other Content Hub features: for instance, the use of relations allows them to be utilized in user group conditions and other entity workflows.

<img src="/images/learn/accelerate/content-hub/domain-model/schema-structuring.png" alt="Schema Structuring"/>
<br/><br/>

Equally important is having a solid understanding of the schema features and functionalities offered by Content Hub. This knowledge empowers you to choose the most suitable structure for each concept or item. For example, knowing when to use taxonomies versus option lists contributes to building a performant and well-structured model. Review the [Taxonomy vs Option List](/learn/accelerate/content-hub/implementation/schema-management/taxonomy-vs-option-list) recipe for further detail.

Recommendations include:

- **Use standardized fields** - Don’t create properties or relations for every possible scenario. Focus on common, standardized metadata. For example, in the definition below, the Rejection and Approval comment fields could be combined into a single field. 

<img src="/images/learn/accelerate/content-hub/domain-model/use-standardized-fields.png" alt="use-standardized-fields"/><br/><br/>

- **Create focused definitions** - Avoid definitions with excessive properties or relations. Use aggregates to combine related definitions when needed. For example, in the definitions below, the highlighted fields could have their own dedicated taxonomy definitions.

<img src="/images/learn/accelerate/content-hub/domain-model/create-focused-definitions.png" alt="create-focused-definitions"/><br/><br/>

- **Group metadata logically** - Organize related metadata into separate member groups instead of placing everything into a single group. For example, in the definition below, the main member group could be split into at least two separate groups: “Main/Overview” and “Relations.” Additionally, product and brand related fields could be moved into their own dedicated member groups.

<img src="/images/learn/accelerate/content-hub/domain-model/metadata-logically.png" alt="cmetadata-logically"/><br/><br/>

- **Enable only necessary flags** - Activating all available flags on properties or relations can lead to user confusion and unnecessary load on the environment. For example, only enable the “Include in Content” flag for properties that should be taken into account in full-text search. Enabling this flag on too many properties can result in irrelevant search results and impact performance. For more details on flag usage and their performance implications, refer to the next performance section.

### Performance Considerations
Performance is a critical factor when designing your domain model, as it directly impacts the user experience. Poorly optimized models can lead to slow load times, irrelevant search results, and overall inefficiency.

A major contributor to these performance issues is schema complexity, particularly the number of properties, relations, and member groups within a definition. The more elements you include, the heavier the load on the system. To maintain optimal performance, it's best to keep the definitions as minimal and focused as possible. Review the [Performance](https://doc.sitecore.com/ch/en/users/content-hub/performance.html) documentation for recommended field limits.

Additionally, the number of conditions applied to properties or relations can impact performance. Where possible, use page conditions to display different pages to different user groups, rather than adding numerous conditions directly to definitions.

Several schema features and flags can also impact performance if used incorrectly:

| Schema features/flags | Detail |
| -- | -- |
| **Allow Navigation**| Avoid enabling this flag on relations with more than 20 linked child items. Doing so can significantly slow down the UI, as all related children will be loaded. Instead, use search components or queries to retrieve and display child items dynamically based on the parent.| 
| **Include in Content**| Content Hub has a limit on how much content can be indexed. However, enabling this flag on too many properties can result in large entity sizes, which negatively affects indexing and search performance. <br/><br/>Review the [Full-text search behavior](https://doc.sitecore.com/ch/en/users/content-hub/full-text-search-behavior.html) documentation for more detail on indexation restrictions.| 
| **Content Copied**| Similar to “Include in Content” flag enabling this flag on multiple relations can lead to unnecessary data duplication and increased system load. <br/><br/>Use this flag when the content of the parent and child items is mutually exclusive, the parent does not contain a large volume of indexed content, and it makes sense to search for the child item based on the parent’s content. For example, when users might search for child items using the parent’s description.| 
| **Inheritance**| Inheritance is a powerful feature in Content Hub that allows entities to inherit data and security from parents or ancestors. While this can greatly enhance reusability and consistency, excessive use of inheritance can lead to large and complex entity documents, which may negatively impact overall system performance. <br/><br/>To avoid unnecessary performance degradation, be cautious when enabling inheritance-related flags such as “Path Relation”, “Inherit Security”, and “Taxonomy Relation”. Only use these features when they provide clear value to your model. For example, you can enable “Taxonomy Relation“ flag on taxonomy relations that will be used as facets. <br/><br/>For more information on inheritance and its impact, review the [Schema changes, inheritance, and the graph server](https://doc.sitecore.com/ch/en/users/content-hub/schema-changes,-inheritance,-and-the-graph-server.html) documentation. |  

## Insights
Although it’s possible to build a maintainable model, it’s best to define it as comprehensively as possible early in the process. Schema changes after data migration can be resource-intensive and may result in the re-design of the pages, workflows, and permissions.

| Recommendation | Detail |
| -- | -- |
| **Use standard naming conventions** | Adopt clear and descriptive names for definitions, properties, and relations. For example, a relation between Brand and Asset could be named BrandToAsset. Refer to the [Taxonomies and option lists](https://doc.sitecore.com/ch/en/users/content-hub/taxonomies-and-option-lists.html#naming-conventions) documentation for naming conventions guidance.  |
| **Leverage controlled values** | Use taxonomies or option lists for fields with a limited set of possible values. This approach ensures consistency, simplifies data entry, and minimizes user errors. <br/><br/>Additionally, it allows for centralized updates, making it easier to modify values across all associated entities in the future. |
| **Document everything** | Maintain thorough documentation of the domain model, including its structure, usage, and integrations. This helps future administrators understand the impact of their changes. |

## Related Recipes

<Row columns={2}>
  <Link title="Requirements Gathering" link="/learn/accelerate/content-hub/pre-development/discovery/requirements-gathering" />
  <Link title="Content Structuring" link="/learn/accelerate/content-hub/pre-development/data-model/content-structuring" />
  <Link title="Taxonomy vs Option List" link="/learn/accelerate/content-hub/implementation/schema-management/taxonomy-vs-option-list" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Performance" link="https://doc.sitecore.com/ch/en/users/content-hub/performance.html" />
  <Link title="Data model" link="https://doc.sitecore.com/ch/en/users/content-hub/data-model.html" />
  <Link title="Taxonomies and option lists" link="https://doc.sitecore.com/ch/en/users/content-hub/taxonomies-and-option-lists.html" />
  <Link title="Schema changes, inheritance, and the graph server" link="https://doc.sitecore.com/ch/en/users/content-hub/schema-changes,-inheritance,-and-the-graph-server.html" />
  <Link title="Create a member" link="https://doc.sitecore.com/ch/en/users/content-hub/create-a-member.html" />
</Row>

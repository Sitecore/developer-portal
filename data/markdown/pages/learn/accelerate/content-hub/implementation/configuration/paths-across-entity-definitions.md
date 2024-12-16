---
title: 'Paths across entity definitions'
description: 'Setting up a path across entity definitions to show hierarchy'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-12-13'
audience: "Technical Implementers, Solution Architects"
---


## Context
Path between entities is an important concept in Content Hub who allow to get additional information between entities in the same path. It is commonly misunderstood and demands a thorough and deliberate approach.

> When an entity has many related paths, it requires loading a lot of entities, which might impact performance. Only configure Path Enabled Definition and Related Path when you have a real use case.

## Execution
A path is a trail showing a hierarchical structure between entities. The path contains the name and the ID of the different entities linked together.  Paths are used to visualise the hierarchy of entities linked and to show on entity details page information from parent entities included in the path.  

Examples of paths include - 
<ol>
<li><strong>Asset Type</strong>: Taxonomies with different levels are shown on Asset details page.<img src="/images/learn/accelerate/content-hub/asset-type.png" alt="Taxonomies with different levels on Asset Details page"/></li>
<li><strong>Product path on Asset</strong>: The path includes Brand, Product Family and Product and is shown Assets Search page.<img src="/images/learn/accelerate/content-hub/product-path-on-asset.png" alt="Product path on Asset"/></li>
</ol>

Path configuration in Content Hub can be configured by using the following options:

### <strong>1. On the Entity definition</strong>

<strong>Path enable definition</strong> toggled on Indicates that entities of this definition can be part of entity paths. This option can be activate when you edit a definition.
<img src="/images/learn/accelerate/content-hub/Path-enable-definition.png" alt="Path enable definition"/>


### <strong>2. On the Relation</strong>
<ul>
<li><strong>Path relation</strong>: Creates a related path on the child side of the relation. This allows for path expansion of hierarchical entities on a related entity.</li>
<li><strong>Is path hierarchy relation</strong>:  Connects path-enabled definitions and hierarchical definitions, creating a path hierarchy. This is usually set on self-relations.</li>
<li><strong>Path hierarchy score</strong>: If an entity has multiple parent relations, the paths of that entity are sorted in ascending order according to this score. Unless marked otherwise, the first path is used as a sole entity path when only one is required. </li>
</ul>

<img src="/images/learn/accelerate/content-hub/path-relation.png" alt="path-relation"/>

## Insights
hen an entity has many related paths, it requires loading a lot of entities, which might slightly impact performance. Related paths are computed on the fly, thus their impact on the storage is minimal. Paths however, are computed and stored in the main meta–data storage for all the path–enabled entities. The computation of the paths happens during the search indexing process of the entities.

Paths themselves have a non trivial, though small, memory footprint. This does not normally cause issues. However, paths (not related paths) should not be enabled and are not intended for entity definitions with significant amounts of entities (for example, <code>M.Asset</code> or <code>M.File</code>). You can consider the paths as a form of data classification which sorts large groups of data rather than classifying every single piece of data.

Computation of the paths for large pools of entities has an [impact on system performance](https://doc.sitecore.com/ch/en/developers/cloud-dev/related-paths-properties.html#performance-and-storage-impact) and uses a large portion of the main metadata storage.

Only configure <code>Path Enabled Definition</code> and <code>Related Path</code> when you have a real use case need. For example, by default when a taxonomy relation is created, Path relation is set to True and it is not always needed, in particular for taxonomy with only one level of data (non hierarchical taxonomy).

### The Use Case Perspective
Let’s take this approach and apply it to real-life use cases to see it in action.

#### Multi-level taxonomy example Geography
This use case shows how to build a Path between the Geography hierarchy and assets. In our example, Geography hierarchy is a taxonomy with a self relation to link Geography to Geography.

The configuration on the schema should include - 
<ul>
<li>Geography has <code>Path Enabled Definition</code> equal to True to be part of the entity path. </li>
<li>Relation Geography - Asset has <code>Path relation</code> equal to True as we want to create a related path on the child side of the relation and <code>Is Path Hierarchy</code> relation equal to False as there is no need to have Asset entities in the path.</li>
</ul>

By default, 
<ul>
<li>When a taxonomy is created Path enabled definition is set to True</li>
<li>When a taxonomy relation is created Path relation is set to True and Path hierarchy is set to False</li>
</ul>

Show Path information in search component, entity details component. 
<img src="/images/learn/accelerate/content-hub/Path-information-in-search-component.png" alt="Show Path information in search component"/>

#### Path Across multiple entity definition example Product Hierarchy
This use case shows how to build a Path between the product hierarchy and assets. In our example, product hierarchy is composed of Brand, Product Family and Product. 

As shown in the following diagram, Brand is parent of Product Family, Product Family is parent of Product and Product is parent of Asset. 
<img src="/images/learn/accelerate/content-hub/Product-Hierarchy.png" alt="Path Across multiple entity definition example Product Hierarchy"/>

This objective is to be able to show this path on the asset level and to show information from Brand, Product Family and Product on the Asset Details page. 

The configuration on the schema should include - 
<ol>
<li>Brand, Product Family and Product have <code>Path Enabled Definition</code> equal to True to be part of the entity path. </li>
<li>Relations Brand - Product Family and Product Family - Product have <code>Path relation</code> equal to False as there is no need to create a related path on the child side of the relation and <code>Is Path Hierarchy</code> relation equal to True to connect Path enabled entity definition. </li>
<li>Relation Product - Asset has <code>Path relation</code> equal to True as we want to create a related path on the child side of the relation and <code>Is Path Hierarchy</code> relation equal to False as there is no need to have Asset entities in the path.</li>
</ol>

The following diagram shows the schema configuration required to have a Product Hierarchy path on the assets. 
<img src="/images/learn/accelerate/content-hub/schema-configuration-product-hierarchy.png" alt="Schema configuration required to have a Product Hierarchy path"/>


In the examples below, the Brand is <em>“Fruitful”</em>, Product Family is <em>“Fruitful Lemonade”</em> and Product is <em>“Fruitful Lemonade - Lime”</em>.

Path can be used for: 
<ol>
  <li>Show Path information in search component, entity details component. <figure><img src="/images/learn/accelerate/content-hub/Product-Hierarchy-on-the-assets.png" alt="Search component showing all the Product Hierarchy on the assets. "/><figcaption>Search component showing all the Product Hierarchy on the assets.</figcaption></figure></li>

  <li>Show detailed information from Parent entities (Brand, Product Family and Product) on Asset details page by using an entity details component. Images below show the result and the configuration to have Product Family information available on Asset Details page. <figure><img src="/images/learn/accelerate/content-hub/Product-Family-on-Asset-Details-page.png" alt="Product Family information shown on Asset Details Page "/><figcaption>Product Family information shown on Asset Details Page.</figcaption></figure><figure><img src="/images/learn/accelerate/content-hub/Entity-Details-page-components.png" alt="Configuration of the settings of Entity Details page components"/><figcaption>Configuration of the settings of Entity Details page components to be able to show Product Family information on Asset Details page.</figcaption></figure></li>

   <li>Use the Path in integration to retrieve in one call parents entities included in the path. Image below shows an example of API call on an Asset entity showing the path from Brand to Product linked to the Asset. <img src="/images/learn/accelerate/content-hub/API-call-on-Asset-entity.png" alt="API call on an Asset entity"/></li>
</ol>


## Related Documentation

<Row columns={2}>
  <Link title="Edit an entity definition" link="https://doc.sitecore.com/ch/en/users/content-hub/edit-an-entity-definition.html" />
  <Link title="Create a member" link="https://doc.sitecore.com/ch/en/users/content-hub/create-a-member.html" />
  <Link title="Related paths properties" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/related-paths-properties.html#performance-and-storage-impact" />
  <Link title="Entity detail settings" link="https://doc.sitecore.com/ch/en/users/content-hub/entity-detail-settings.html" />
</Row>


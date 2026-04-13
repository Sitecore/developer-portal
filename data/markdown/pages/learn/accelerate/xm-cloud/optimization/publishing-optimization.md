---
title: 'Publishing optimization'
description: 'What does content dependency has to do with content Publishing to Edge?'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-04-30'
created: '2025-04-30'
audience: ['Architect','Technical Implementers','Solution Architects']
---

## Context
When items are published to Edge, they are stored in a different data structure called an entity. Each entity in Edge maintains its dependencies with other entities. Those dependencies are being calculated during the publishing time and stored in edge. With dependencies growing, the publishing process can be impacted. 

Before progressing with the below, make sure you are familiar with Publishing to Experience Edge [recipe](/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge) and [documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html).

## Execution
When a publish is trigged in XM Cloud, to move the items ready for publishing to Experience Edge, a dependency calculation is kicked off 

After the initial publishing, where all dependencies of the published items are identified and stored in Edge, the system optimizes subsequent publishing by leveraging this stored data. When an item is published, the system queries Edge to determine all other items that depend on it and automatically includes them in the publishing pipeline. As these dependent items are published, their own dependencies are also republished. This recursive process continues until no additional dependent items are found.

Notably, any item identified as a dependency is included in the publication, even if it has not been modified. This ensures consistency across published content and maintains the integrity of relationships between items.

For more information on how publishing works in more detail, review the Insights sections below.

Dependency resolution can fall under one of those categories

### Template and item dependency
Each item published to Edge will get the IDs of its template and inherited templates and store it in Edge. This is necessary because when a template is published, all items previously published to Edge based on this template will be republished.

### Item with layout and its datasources and partial designs dependency
Each item with a layout published to Edge will store the IDs of all datasources within its layout and any datasources in partial designs used in that layout. This ensures that any change to a datasource necessitates the regeneration and republishing of the layout utilizing that datasource. Consequently, when a modified datasource is published, the associated page item will also be republished.

### Item and its clone item dependency
When a cloned item is published, it stores the ID of its original item. In Sitecore, any changes made to the original item's content will also be reflected in the clone item. Therefore, when the original item is modified and published, the clone item must also be republished.

### Item and its link fields’ selected items dependency
When item with specific line type and list type fields is published, the IDs of items referenced by those fields will be stored as dependencies in Edge. This is important because referenced items may be displayed in the main item layout. Any changes to these referenced items necessitate republishing the main item.

By default, this dependency is not active but can be controlled the following configuration. Set the value of `ExperienceEdge.ComputeContentDependencies` to true to activate it.

```xml
<?xml version="1.0" encoding="utf-8"?>

<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/" xmlns:role="http://www.sitecore.net/xmlconfig/role/">
  <sitecore>
    <settings>
      <setting name="ExperienceEdge.ComputeContentDependencies" value=""/>
      <setting name="ExperienceEdge.LinkDependentTypes" value="droplink|droptree|grouped droplink|checklist|multilist|multilist with search|treelist|treelist with search|treelistex"/>
    </settings>
   </sitecore>
</configuration>
```
<br/><br/>
<Alert status="info" mb={4}><AlertIcon />
Every time this dependency is activated or deactivated by configuration change, site republish is required to ensure this dependency is updated in edge for all items. Changes to configuration on XM Cloud are not recommended unless absolutely required - even then, make sure that these are kept track of, in case of any future changes.
</Alert>


### Item language version and its fallback language version dependency
For an item version in a specific language that supports language fallback, the [language fallback](https://doc.sitecore.com/xmc/en/developers/xm-cloud/language-fallback.html) hierarchy will be stored in Edge during publishing. This is important If the fallback version item is changed and published, all language versions of that item that rely on the modified version must be republished.

By default, this dependency is not active. Language fallback process can be a complex calculation and have a performance impact. Only enable this is you really require language fallback - make sure its disabled if not required.

Set the value of setting `ExperienceEdge.EnableItemLanguageFallback` to true if Item Language Fallback is used in Sitecore and wants to active this dependency during publishing.

Set the value of setting `ExperienceEdge.EnableFieldLanguageFallback` to true if Item field Language Fallback is used in Sitecore and wants to active this dependency during publishing.

<Alert status="info" mb={4}><AlertIcon />
Every time this dependency is activated or deactivated by configuration change, site republish is required to ensure this dependency is updated in edge for all items.
</Alert>

### Item layout’s dependencies and their ancestors dependency
The IDs of ancestors of item's layout dependencies collected in *Item with layout and its datasources and partial designs dependency* will be stored to Edge during publishing.

This dependency can be deactivated using the following config -

``` xml
<?xml version="1.0" encoding="utf-8"?>

<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/" xmlns:role="http://www.sitecore.net/xmlconfig/role/">
  <sitecore>
    <settings>
      <setting name="ExperienceEdge.IncludeDependencyAncestors" value="false"/>
    </settings>
   </sitecore>
</configuration>
```
<br/><br/>
<Alert status="info" mb={4}><AlertIcon />
Every time this dependency is activated or deactivated by configuration change, site republish is required to ensure this dependency is updated in edge for all items. Changes to configuration on XM Cloud are not recommended unless absolutely required - even then, make sure that these are kept track of, in case of any future changes.
</Alert>

## Insights
Publishing in headless SaaS setups will require the content to be moved between XM Cloud (as the content management system) and Experience Edge. Experience Edge, also keeps track of page dependencies to ensure pages reflect up-to-date content. However, dependencies are only established when a page is published.

The publishing process will be illustrated in diagram to show how content is published to Edge and how dependencies are calculated and resolved. This applies specifically for [Snapshot Publishing](https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html).

### Step 1 - Create Page and Publish
Author will create a page with a component retrieving it’s data from a datasource within XM Cloud and publish everything to Experience Edge. After publishing to Edge, Page 1 entity will store its dependency to datasource 1. This will help if datasource 1 is updated and published, Page 1 will be republished as well to refresh its layout stored in Edge.

<img src="/images/learn/accelerate/xm-cloud/publishing/step1-publishing.jpg" alt="Publishing - Step 1"/>

### Step 2 - Add new component
 Author will add a new component that its rendering data from new datasource to Page 1. So far, this relationship is only stored in XM Cloud.

<img src="/images/learn/accelerate/xm-cloud/publishing/step2-publishing.jpg" alt="Publishing - Step 2"/>

### Step 3 - Publishing component only
 Author publishes datasource item 2. This will result in publishing datasource item 2 only without updating the rendered layout of Page 1. That happens because Edge has not stored the dependency between Page 1 and datasource 2 yet and during the publishing of datasource 2, it won’t republish Page 1 to update its rendered layout in Edge.

<img src="/images/learn/accelerate/xm-cloud/publishing/step3-publishing.jpg" alt="Publishing - Step 3"/>

### Step 4 - Publishing Page
 To update dependencies of Page 1 in Edge, Page 1 must be published to Edge.  During the publishing, Page 1 will recalculate its dependencies and its rendered layout and store them to Edge.

<img src="/images/learn/accelerate/xm-cloud/publishing/step4-publishing.jpg" alt="Publishing - Step 4"/>

### Step 5 - Update component and publish
When Sitecore author changes the content of datasource 2 and publish it, Page 1 is going to be republished as well.

<img src="/images/learn/accelerate/xm-cloud/publishing/step5-publishing.jpg" alt="Publishing - Step 5"/>
<img src="/images/learn/accelerate/xm-cloud/publishing/step6-publishing.jpg" alt="Publishing - Step 6"/>

Once the update-to-date dependencies are recorded in Edge, anytime the dependency datasource  is published, the dependent page is going to be republished.


## Related Recipes

<Row columns={2}>
  <Link title="Publishing to Experience Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
  <Link title="Content Audit" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Publishing in XM Cloud" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/publishing-in-xm-cloud.html" /> 
  <Link title="Publishing to Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html" /> 
    <Link title="Language Fallback" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/language-fallback.html" /> 
</Row>






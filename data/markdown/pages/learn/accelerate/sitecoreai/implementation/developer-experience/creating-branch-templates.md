---
title: 'Creating Branch Templates'
description: 'The developer workflow to create a new branch template'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2024-10-01'
created: '2024-08-23'
audience: ['Architect','Technical Implementer']
---

## Context

Within XM Cloud sometimes your content authors will have a requirement to create multiple items which have a predefined consistent structure. Authors need to be able to create these items quickly and efficiently while maintaining this structure. As a developer how can you support this requirement.

## Execution

This is where branch templates in XM Cloud come in to address these common challenges in content management and site development:

1. Consistency: When creating similar items (e.g., product pages, news articles, landing pages), branch templates ensure a consistent structure. Content authors can follow predefined guidelines, resulting in a cohesive user experience.
2. Efficiency: Branch templates allow authors to start with a pre-configured structure, saving time and effort. Instead of manually setting up each item, they duplicate the template and customize specific details.
3. Initial Field Values: Unlike standard values (which apply to all items based on a data template), branch templates copy initial field values into each created item. This is useful for setting default values or customizing specific fields.
4. Access Rights: Branch templates can include predefined access rights. When creating items, authors inherit these permissions, ensuring proper security settings.
5. Multiple Item Creation: Authors can insert multiple items at once using branch templates. For instance, creating a set of related pages (e.g., FAQs, team bios) becomes more efficient.

### Modules

When setting up a new branch template we need to make sure a headless module has been created to hold our new template. This module should have been created during the creation of your site collection and site items. See the [Creating a Site recipe](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site) for more details.

### How to create a branch template

1. In the Template Manager or the Content Editor, go to /Sitecore/Templates/Branches/Project/**Your module name**, right-click this folder and then click Insert, Branch Folder to create the required project-specific folders.
2. In the content tree, click the relevant project-specific folder and insert a new branch template definition item using the /System/Branches/Branch data template.
3. With the newly created branch template definition item selected, right-click and insert one or more items or hierarchies of items.

### Cloning the SXA Link List

1. Navigate to the SXA Link List component /sitecore/layout/Renderings/Feature/JSS Experience Accelerator/Navigation/LinkList
2. Right click the item navigate to Scripts and click Clone Rendering.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates1.png" alt="Screenshot showing cloning of link list"/>

<br/>
3. Provide a rendering name and select the location of our module.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates2.png" alt="Screenshot showing clone dialog general tab"/>

<br/>
4. Select Make a copy for both Parameter and Datasource dropdowns.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates3.png" alt="Screenshot showing clone dialog parameters tab"/>

<br/>
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates4.png" alt="Screenshot showing clone dialog datasource tab"/>
<br/>

5. Click proceed and when complete click close.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates5.png" alt="Screenshot showing clone dialog done message"/>

### Organize Link List Items

Now in the in our project templates folder we have a number of items for the cloned Link List including branch templates. We need to add some structure here and move items around to help keep things organized.

<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates6.png" alt="Screenshot showing project templates"/>
<br/>

1. Create some template folders to help keep our items organized. Right click the site collection name click  Insert then select Template Folder.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates7.png" alt="Screenshot showing template folder dialog"/>

<br/>

2. Name this folder Components.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates8.png" alt="Screenshot showing template folder name dialog"/>

<br/>

3. Right click components click Insert and add another template folder named Navigation.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates9.png" alt="Screenshot showing created navigation template folder"/>

<br/>

4. Move the following items within the Navigation template folder.
    * /sitecore/templates/Project/Sites For Accelerate/Accelerate Link List Folder
    * /sitecore/templates/Project/Sites For Accelerate/Link List
    * /sitecore/templates/Project/Sites For Accelerate/Link
    * /sitecore/templates/Project/Sites For Accelerate/Rendering Parameters
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates10.png" alt="Screenshot showing created navigation template folder items"/>

<br/>

5. Move the Link List_2 branch template into the branch templates folder. I have already created a Navigation branch folder to organize our items.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates11.png" alt="Screenshot showing created branch template folder items"/>

<br/>

6. Finally rename the Link List_2 item.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates12.png" alt="Screenshot showing renamed link list item"/>

<br/>

### How the Link List returns child items

If you navigate to the rendering created for the link list you will notice that it has an integrated GraphQL query to return the child items.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates13.png" alt="Screenshot showing integrated graphql query"/>

<br/>

Within the existing LinkList.tsx component notice that fields have been created that match the shape of the integrated GraphQL query being returned from the layout service.

```typescript
interface Fields {
  data: {
    datasource: {
      children: {
        results: ResultsFieldLink[];
      };
      field: {
        title: TextField;
      };
    };
  };
}
```

<br/>
<br/>

Please note there are OOTB Rendering Content Resolvers that can also be used to return child items to reshape the layout service.
<img src="/images/learn/accelerate/xm-cloud/creating-branch-templates14.png" alt="Screenshot showing context item children resolver"/>

<br/>

## Related Recipes

<Row columns={2}>
  <Link title="Creating new components" link="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Branch templates" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/branch-templates.html" />
  <Link title="Work with a branch template" link="https://doc.sitecore.com/xp/en/xmc/en/developers/xm-cloud/work-with-a-branch-template.html" />
</Row>

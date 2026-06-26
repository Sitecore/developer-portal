---
title: 'Custom Editing UX for 3rd Party Integrations'
description: 'How do you integrate 3rd Party applications into XM Cloud''s Head Application?'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-11-10'
created: '2024-10-09'
audience: ['Architect','Technical Implementer']
---

## Context

My client has content or data in a 3rd Party system like products in a PIM or Commerce System, assets in a DAM, or anything else from any system. I need to give the editors a way to choose and use such data visually via Pages Editor with WYSIWYG and inline editing capabilities.

## Execution

Within this chapter we will not only cover how to properly offer 3rd Party integrations, but also explicitly highlight ways, how we should not do it anymore in a modern composable XM Cloud architecture.

**DON’T**  
We will start with the way to deal with such kind of data, which was heavily used in the past. It was quite usual to build a backend integration between that 3rd Party system and the Sitecore Platform to first import or sync those data as Items into Sitecore. That way the data could be used the same way as any other Item in Sitecore, which fully supports inline editing via WYSIWYG.

Do not import or sync those data as Items into XM Cloud as it would cause massive unwanted and unneeded maintenance overhead afterwards.

**DO**  
Instead of importing or syncing all the data to the Sitecore backend we will just store the external entity Id (or public link in case of an asset) within Sitecore and load all the necessary data directly in the head application. That way we only store the absolutely necessary data within Sitecore and keep the system clean and performant. To do so, it is enough to extend your Datasource with a new Single(Multi)-Line Text field to store that external entity Id (or public link). The head application will use that Id or link to load additional data on the fly, if needed. This can be done via SSG or SSR depending on the type of data or the use case.

One simple way to fill such Id or link is to let the editor copy & paste it from the 3rd Party system. But in case you would like to give the editors a more intuitive and visual way of choosing the data, you can easily build that piece of logic in the head application directly.

Pages editor is a SaaS application, which is extensible through [Marketplace custom fields](https://doc.sitecore.com/mp/en/developers/marketplace/page-builder-custom-fields.html). Developers can now create tailored UI components and rendering parameters using Marketplace apps, enabling flexible, business-specific editing experiences.

### Create an editing component

The table below shows a step by step guide on how to create a custom react editing component, which allows the editors to visually see the 3rd Party data and choose 1 or more of them. The result will be automatically saved back to XM Cloud Datasource item.

1. **Preparation**: Extend the component with a new Single (or Multi) Line Text field to store the external ID or public link. Example data model of a card module.
<Image src="/images/learn/accelerate/xm-cloud/3rdParty1.png" title="New Field on Template"/> _Note_: You can also use a multi-line field to store a list of external IDs or public links. You just need to adjust the code later on a bit to have this available in editing as well.
2. **Create a new (editing) react component**: <Image src="/images/learn/accelerate/xm-cloud/3rdParty2_updated.png" title="New Data handler"/> You can organize the editing (data handler) components for better maintainability.
3. **Implement the 3rd Party search / interaction**: You can use a native rehydration mechanism to load/reload 3rd Party data via API. Example Implementation of Frontify Asset retrieval: <Image src="/images/learn/accelerate/xm-cloud/3rdParty3.png" title="External Data Model"/> Data Model definition <Image src="/images/learn/accelerate/xm-cloud/3rdParty4.png" title="GraphQL Query construction (simplified)"/> GraphQL Query construction (simplified): <Image src="/images/learn/accelerate/xm-cloud/3rdParty5.png" title="Actual API Call including data mapping"/>Once implemented, you can easily use the function `SearchForAssets` within your editing component to retrieve the data to be displayed.
4. **Provide a visual representation of the external data**: Use the UI framework of your choice to provide a visual representation of the data and/or search capabilities. This could be a grid or list view displaying the basic data. Depending on the external service, you could provide full-text search, faceting/filtering, pagination, or more to ease the management process of such external data.
5. **Implement the GraphQL mutation back to XM Cloud to store the Id or link of the chosen external entity**: Once an editor has chosen the right external entity, extract the needed piece of information (ID or public link) and save this back to XM Cloud via GraphQL Management API. Example implementation to update an item field with the new information: <Image src="/images/learn/accelerate/xm-cloud/3rdParty6.png" title="Update Item GraphQL Management API function"/> Update Item GraphQL Management API function: <Image src="/images/learn/accelerate/xm-cloud/3rdParty7.png" title="update item usage"/> Store the chosen entity in a dedicated state for access on save, and grab additional information from Sitecore context or props from the parent component: <Image src="/images/learn/accelerate/xm-cloud/3rdParty8.png" title="Props to grab datasource id"/> Use the name of the field created in step 1 as the field name in the GraphQL call.
6. **Optionally**: Extend the component to immediately render the new data, once chosen. Normally, your rendering will not update automatically if you update the Datasource via API behind the scenes.

To see changes immediately while editing in real-time use either one of these options:

- 1. Use the new reload button in Pages, which reloads the canvas without reloading the entire Pages application.  <Image src="/images/learn/accelerate/xm-cloud/3rdParty9.png" title="Code Splitting Import"/>
- 2. Or Save the ID or public link of the entity in a special state variable and pass it to the child component to immediately react to changes. New state variable on the parent to store the ID or public link:  <Image src="/images/learn/accelerate/xm-cloud/3rdParty10.png" title="Code Splitting Import"/> Pass through the set functionality to the child component:  <Image src="/images/learn/accelerate/xm-cloud/3rdParty11.png" title="Code Splitting Import"/> The child updates that state on save, leading to a partial reload of the component to reflect the latest changes:  <Image src="/images/learn/accelerate/xm-cloud/3rdParty12.png" title="Code Splitting Import"/>

## Additional Information

In case you want to keep the head application free of editing code, you can extend the webpack build to only include the new editing code for your editing. That way, your website code stays clean, secrets stay hidden, and the webpack bundles remain as small as possible.

#### Code Splitting  

The approach here is called code splitting. With code splitting, you can tell the application to defer loading additional sources until needed. For example, in the editing host, we want to load the editing resources, but on the live site, we want to restrict that.

1. **Remove the actual import** of the component:  
   <Image src="/images/learn/accelerate/xm-cloud/3rdParty13.png" title="Code Splitting Import"/>
2. **Create a new function** to load the component dynamically via the `dynamic` keyword:  
   <Image src="/images/learn/accelerate/xm-cloud/3rdParty14.png" title="Dynamic Load code"/>
3. **Add a condition** in the code to load the component under specific circumstances (e.g., specific environment variable or edit mode):  
   <Image src="/images/learn/accelerate/xm-cloud/3rdParty15.png" title="Special Load condition"/>
4. **Replace the actual import** with the conditional dynamic import function:  
   <Image src="/images/learn/accelerate/xm-cloud/3rdParty16.png" title="Load of dynamic component"/>

## Related Documentation

<Row columns={2}>
  <Link title="Component Level Data Fetching" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/component-level-data-fetching-in-jss-next-js-apps.html" />
  <Link title="Code Splitting" link="https://legacy.reactjs.org/docs/code-splitting.html" />
</Row>

## Related Learning Materials

<Row columns={2}>
  <Link title="DAM Integration Example" link="https://hachweb.wordpress.com/2024/04/30/sitecore-xm-cloud-you-need-a-3rd-party-dam-integration-no-problem/" />
  <Link title="Commerce Integration Example" link="https://hachweb.wordpress.com/2024/05/05/sitecore-xm-cloud-now-you-also-need-a-3rd-party-product-data-integration-sure-why-not/" />
</Row>

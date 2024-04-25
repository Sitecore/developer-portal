---
title: "Release Notes"
description: ""
origin: 
---

**April 2024 – released Sitecore Headless Rendering 22.0.0**

-   [Highlights](#Highlights)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Headless Rendering 22.0.0 includes:

-   Headless Services update.

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Headless Services | Improved performance for GraphQl requests. | 558835 |
 | Headless Services | Dictionary Service does not respect the database set for the app's dictionary domain. | 559671 |
 | Headless Services | Publish with Test workflow command has been removed. | 561444 |
 | Headless Services | CreateItem/UpdateItem mutations does not work when query contains Droplink/Multilist field types. | 568896 |
 | Headless Services | GraphQL complexity calculation ignores chained fragments. | 568960 |
 | Headless Services | CreateItem mutation requires ID to be passed. | 569496 |
 | Headless Services | The "Interface field Item.children expects type..." error appears after using the "jss bootstrap" command. | 572005 |
 | Headless Services | The "StartIndex cannot be less than zero" error occurs after querying the jss field of the JssExtender if the grouped droplink field is empty. | 577524 |
 | Headless Services | Behavior change of GeneralLinkFieldSerializer. | 580748 |
 | Headless Services | The JSS Layout Service incorrectly resolves an item with a display name if a wildcard item (*) is present at the same level. | 582167 |
 | Headless Services | Cross site linking behavior change for GeneralLinkFieldSerializer. | 583674 |
 | Headless Services | System.NullReferenceException is thrown for media request if it contains empty parameter in the query string. | 584813 |
 | Headless Services | GraphQL Edge Preview endpoint of the CD server is broken if set database of one site to Master. | 592575 |
 | Headless Services | Different media link generation behavior between Image field and General Link field. | 593021 |
 | Headless Services | VirtualFolder not included at generated URL. | 593197 |
 | Headless Services | Layout query using Edge Preview schema unexpectedly resolve only one site. | 594608 |
 | Headless Services | GraphQL Site Error Pages query does not return the item correctly if the item name contains space. | 594686 |
 | Headless Services | LayoutQuery doesn't take into consideration the website database and returns item from web db. | 595538 |
 | Headless Services | Serialization depth is reset to 1 after reaching serializationMaxDepth. | 595676 |
 | Headless Services | Item.Languages returning non-existent item versions. | 595679 |
 | Headless Services | ImageFieldGraphType.src does not include Media Request Protection hash even if a custom max width/height is set. | 595895 |
 | Headless Services | Branch template cannot be opened in the Experience Editor. | 600967 |
 | Headless Services | Edge preview endpoint doesn't work with language fallback if there is referenced item. | 603730 |
 | Headless Services | The GetJsonRenderer processor does not perform well under load. | 603938 |
 | Headless Services | Incorrect JSON renderings size calculation logic causes HTML cache memory leak | 605525 |
 | Headless Services | The AlwaysIncludeEmptyFields configuration value is not set for the JssItemSerializer class. | 607251 |
 | Headless Services | Suboptimal HTML cache size calculation. | 607493 |
 | Headless Services | Case sensitivite language filter in graphql search behaves differently between delivery edge and preview edge. | 610566 |
 | Headless Services | The "A Sitecore.JavaScriptServices application was not found for the path" error appears after previewing an item. | 610625 |


 
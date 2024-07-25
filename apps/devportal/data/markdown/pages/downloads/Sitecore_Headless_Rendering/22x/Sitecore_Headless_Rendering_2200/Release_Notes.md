---
title: 'Release Notes'
description: ''
origin:
---

**April 2024 – released Sitecore Headless Rendering 22.0.0**

- [Highlights](#highlights)
- [New features/improvements](#new-featuresimprovements)
- [Resolved issues](#resolved-issues)

## Highlights

Sitecore Headless Rendering 22.0.0 includes:

- Headless Services update.
- Sitecore Experience Edge Connector update.

## New features/improvements

| Context        | Description                                                     | ADO no. |
| -------------- | --------------------------------------------------------------- | ------- |
| Edge Connector | Added the `EntityBatch` setting to specify the batch size.      | 582256  |
| Edge Connector | Added `IItemSiteResolver.ResolveSite(Item)` to create SiteInfo. | 585528  |
| Edge Connector | Improved handling of 520 and 524 errors.                        | 589629  |

## Resolved issues

The following issues have been fixed:

| Context           | Description                                                                                                                                    | ADO no.                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Edge Connector    | `JsonValue` cannot be retrieved when an item is not found within the site.                                                                     | 523981,527666                          |
| Edge Connector    | Partial design items cannot be published.                                                                                                      | 534060                                 |
| Edge Connector    | A language parsing exception occurs during `CheckDeltaPublishBlock`.                                                                           | 540599                                 |
| Edge Connector    | A subitem is published to the Experience Edge endpoint if the root item has a non-final workflow state.                                        | 554147                                 |
| Edge Connector    | The get item layout query returns items that are not in final workflow state.                                                                  | 557334                                 |
| Edge Connector    | The data-source item version returns items that are not in the final workflow.                                                                 | 562069                                 |
| Edge Connector    | Fixed a service registration issue.                                                                                                            | 567645                                 |
| Edge Connector    | Stabilized the connection of Edge Connector and Edge.                                                                                          | 572939                                 |
| Edge Connector    | Language is mapped incorrectly in the item URL for item publish.                                                                               | 574731                                 |
| Edge Connector    | An error occurs if an item exceeds the cache limit when publishing.                                                                            | 575223                                 |
| Edge Connector    | Fixed the initialization of the publishing job.                                                                                                | 576718                                 |
| Edge Connector    | Publishing may freeze if errors occur while acknowleding signals.                                                                              | 576754                                 |
| Edge Connector    | Publishing many items and deleting them after causes republishing to fail.                                                                     | 577105                                 |
| Edge Connector    | Item version is not registered under languages.                                                                                                | 577271                                 |
| Edge Connector    | Fixed an issue when deleting media items.                                                                                                      | 577397                                 |
| Edge Connector    | Layout data is not deleted when an item is renamed.                                                                                            | 578563                                 |
| Edge Connector    | Getting `attributes:value` for site info returns an error.                                                                                     | 583561                                 |
| Edge Connector    | Publishing a version in a selected language via smart publish or republish updates the versions for other languages.                           | 583968                                 |
| Edge Connector    | Token expiration causes a GRPC connection error.                                                                                               | 587004                                 |
| Edge Connector    | Smart publishing with sub-item does not publish all related datasource items under the same page.                                              | 588451                                 |
| Edge Connector    | Optimized the logic for calculating dependencies for the same item.                                                                            | 589873                                 |
| Edge Connector    | Duplicate items are created during publishing to Edge.                                                                                         | 591829                                 |
| Edge Connector    | Publishing crashes when `media.alwaysincludeserverurl` is set to _true_.                                                                       | 593238                                 |
| Edge Connector    | Publishing big media files causes an error.                                                                                                    | 596819                                 |
| Edge Connector    | Publishing in preview target forces the layout service to use the final workflow version of a datasource item.                                 | 605712                                 |
| Edge Connector    | Optimized the publishing performance.                                                                                                          | 585524, 580776, 588640, 589447, 589555 |
| Headless Services | Support Exp Edge GraphQL query for Form items from custom locations.                                                                           | 544116                                 |
| Headless Services | Improved performance for GraphQl requests.                                                                                                     | 558835                                 |
| Headless Services | Dictionary Service does not respect the database set for the app's dictionary domain.                                                          | 559671                                 |
| Headless Services | Publish with Test workflow command has been removed.                                                                                           | 561444                                 |
| Headless Services | CreateItem/UpdateItem mutations does not work when query contains Droplink/Multilist field types.                                              | 568896                                 |
| Headless Services | GraphQL complexity calculation ignores chained fragments.                                                                                      | 568960                                 |
| Headless Services | CreateItem mutation requires ID to be passed.                                                                                                  | 569496                                 |
| Headless Services | The "Interface field Item.children expects type..." error appears after using the "jss bootstrap" command.                                     | 572005                                 |
| Headless Services | The "StartIndex cannot be less than zero" error occurs after querying the jss field of the JssExtender if the grouped droplink field is empty. | 577524                                 |
| Headless Services | Layout service creates a new SiteInfo() for every request.                                                                                     | 584753                                 |
| Headless Services | Behavior change of GeneralLinkFieldSerializer.                                                                                                 | 580748                                 |
| Headless Services | The JSS Layout Service incorrectly resolves an item with a display name if a wildcard item (\*) is present at the same level.                  | 582167                                 |
| Headless Services | Cross site linking behavior change for GeneralLinkFieldSerializer.                                                                             | 583674                                 |
| Headless Services | System.NullReferenceException is thrown for media request if it contains empty parameter in the query string.                                  | 584813                                 |
| Headless Services | GraphQL Edge Preview endpoint of the CD server is broken if set database of one site to Master.                                                | 592575                                 |
| Headless Services | Different media link generation behavior between Image field and General Link field.                                                           | 593021                                 |
| Headless Services | VirtualFolder not included at generated URL.                                                                                                   | 593197                                 |
| Headless Services | Layout query using Edge Preview schema unexpectedly resolve only one site.                                                                     | 594608                                 |
| Headless Services | GraphQL Site Error Pages query does not return the item correctly if the item name contains space.                                             | 594686                                 |
| Headless Services | LayoutQuery doesn't take into consideration the website database and returns item from web db.                                                 | 595538                                 |
| Headless Services | Serialization depth is reset to 1 after reaching serializationMaxDepth.                                                                        | 595676                                 |
| Headless Services | Item.Languages returning non-existent item versions.                                                                                           | 595679                                 |
| Headless Services | ImageFieldGraphType.src does not include Media Request Protection hash even if a custom max width/height is set.                               | 595895                                 |
| Headless Services | Branch template cannot be opened in the Experience Editor.                                                                                     | 600967                                 |
| Headless Services | Edge preview endpoint doesn't work with language fallback if there is referenced item.                                                         | 603730                                 |
| Headless Services | The GetJsonRenderer processor does not perform well under load.                                                                                | 603938                                 |
| Headless Services | Incorrect JSON renderings size calculation logic causes HTML cache memory leak                                                                 | 605525                                 |
| Headless Services | The AlwaysIncludeEmptyFields configuration value is not set for the JssItemSerializer class.                                                   | 607251                                 |
| Headless Services | Suboptimal HTML cache size calculation.                                                                                                        | 607493                                 |
| Headless Services | Case sensitivite language filter in graphql search behaves differently between delivery edge and preview edge.                                 | 610566                                 |
| Headless Services | The "A Sitecore.JavaScriptServices application was not found for the path" error appears after previewing an item.                             | 610625                                 |

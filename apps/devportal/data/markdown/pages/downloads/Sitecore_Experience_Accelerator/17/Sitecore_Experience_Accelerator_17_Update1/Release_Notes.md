---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/17/Sitecore_Experience_Accelerator_17_Update1/Release_Notes
---

**June 2018 – released Sitecore Experience Accelerator 1.7 Update 1 (rev. 180604)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​We have provided a set of sample scripts that allow you to integrate Creative Exchange with your Continuous Integration environments.​ |  | 12404 |
 | Components that experience an exception in their code are now wrapped with standard markup. This hides them and makes it easier to investigate the problem. ​​ |  | 12405 |
 | SXA now uses its own optimized custom search indexes.​ |  | 12519 |
 | ​​You can now override the default indexes that SXA uses per language and per site to enable provider-specific features that can be language specific, such as, stop words. |  | 12595 |
 | SXA now supports working with Solr in Azure.​ |  | 12626 |
 | ​​The Rendering variant placeholder renderer now supports an explicitly provided placeholder key and allows you to assign placeholder restrictions. |  | 12663 |
 | The `Layout Service` has been updated to the latest version. ​ |  | 12822 |
 | The introduction of an additional placeholder cache layer has improved the performance of the Experience Editor. ​ |  | 12303 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​When a user interacts with the Slider Filter, no results are displayed in SXA search results. |  | 10210 |
 | ​​Overlay height is not properly applied on a page. |  | 11076 |
 | ​Creative Exchange does not distribute an imported layout correctly between the `Shared` and `Final` fields based on where the renderings are stored, but always imports them to the final layouts. |  | 11122 |
 | ​​In SXA Data Modelling, JSON is not properly rendered for the `Link List` component​. |  | 11422 |
 | ​The C​ontainer background image is removed when you add a component to its placeholder. | 502135, 502326, 505087 | 11680 |
 | ​The SXA Search service throws an error when you click a POI marker on a map.​​ | 502352, 504345 | 11695 |
 | Creative Exchange terminates with an error when a user tries to import from an empty folder.​​ |  | 11975 |
 | ​The `Checklist` filter does not work correctly when you try to select multiple values. | 503843 | 12082 |
 | ​​Newly created SXA modules are not displayed in the scaffolding dialogs if the UI language is not set to English when they are created.​ | 504431 | 12131 |
 | A newly added carousel includes content from another carousel that exists on the same page if the user doesn't save the page between deleting the old carousel and adding the new one.​ |  | 12191 |
 | Pages that are exported with Creative Exchange do not function correctly in offline browsing if the site is configured to include language prefixes.​​ | 503637 | 12203 |
 | The `Radius` filter does not render its title.​ | 504348 | 12255 |
 | ​​The `Range slider` filter doesn't output the initial selection range text until after the first user interaction. |  | 12279 |
 | An invalid lookup Source error appears for the Page Content element for the `Page __Standard values`.​ | 504890 | 12345 |
 | ​​The `Document Manager` dialog is not populated when you install SXA. | 505690 | 12398 |
 | C​reative Exchange stops the entire import process when it encounters a page it can't parse. An appropriate error is now logged and the process continues.​ |  | 12402 |
 | ​​Over 550 default SXA fields are now excluded to provide more room for custom fields before reaching the A​zure index limit of 1000 fields. | 506114 | 122416 |
 | ​SXA processors are executed unnecessarily for non-SXA sites. |  | 12491 |
 | Creative Exchange does not export empty files.​ | 505183 | 12576 |
 | ​​The dictionary in the `GridDefinition` class is not thread-safe​ and this adds an error to the log files when an application restarts.​ | 504133 | 12543 |
 | ​When you are editing, an empty `N​avigation` component does not appear when there are no items to display in the current language. | 504592 | 12561 |
 | Publishing a large instance with SXA takes longer than expected.​​ | 505857 | 12563 |
 | ​H​TML is not purged correctly for SXA sites during the publishing process. | 508046 | 12567 |
 | ​​The `Is Link` field works incorrectly in combination with the `Field used as link target` field on nested rendering field variants.​ | 506468 | 12592 |
 | ​You cannot use rendering variants from shared sites as reusable components in other sites in the same tenant.​ | 505611 | 12756 |
 | The `Page data` folder for a rendering that is added to a composite site is created under the page rather than under the composite item.​​​ |  | 12759 |
 | When you drag and drop a component, the placeholders slide on the page if a rendering variant with the placeholder exists on the page. |  | 12775 |
 | Nested composite components ignore the datasource of the nested component.​​ | 506671 | 12776 |
 | A Content Editor upgrade warning incorrectly says that an update is required.​ |  | 12787 |
 | A regular expression is unnecessarily executed when you publish a page and this results in higher CPU usage.​ | 507484 | 12789 |
 | ​​An unnecessary invisible character - `&#65279;` - is included in the language selector component. | 507424 | 12792 |
 | In the Experience Editor, in a rendering variant field, the `Render if empty` option hides the empty field if it is not checked making it impossible to edit that field.​ | 507956 | 12820 |
 | The Azure search provider is configured incorrectly and causes errors during indexing.​​ | 508349 | 12859 |
 | When you use the Azure Search provider, fields with the same name and different types cannot be stored next to each other in the index.​​ | 501774 | 207510 |
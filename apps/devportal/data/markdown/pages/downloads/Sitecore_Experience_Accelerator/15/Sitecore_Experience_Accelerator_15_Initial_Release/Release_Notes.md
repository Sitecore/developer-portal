---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/15/Sitecore_Experience_Accelerator_15_Initial_Release/Release_Notes
---

**October 2017 – released Sitecore Experience Accelerator 1.5 (rev. 171010)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | You can apply the presentation, styles, data sources, and rendering variants from a chosen site to the other sites within a tenant. |  | 6154 |
 | The UX of the `Component styling` field has been improved to facilitate easier selection of CSS classes.​ |  | 6923 |
 | The `Delegated areas` feature lets you share pages between multiple content trees through automatic content change and publishing operations​ pushing. |  | 8565 |
 | The `Wireframe` theme has been updated to take advantage of the functionality and maintainability of the `Basic 2` theme.​ |  |  |
 | The scope of the `Layout` and `Style Experience` buttons' has been extended to include component behavior fields​. |  | 8355 |
 | You can now use environment-dependent site definitions to display sites differently on different servers.​ |  | 8910 |
 | The Creative Exchange has been extended for easier management of a large number of styles. A cleanup script has also been added to the Content Editor context menu to automatically organize imported classes into folders. |  | 7948 |
 | Support has been added for Sitecore 9.0​​. |  | 7958 |
 | You can refine your Page List queries by using Rules Engine rules to filter the results​.​ |  | 7961 |
 | The new multi-root tree list field type supports multi-site content. |  | 8263 |
 | The `Delete Tenant` and `Delete Site` scripts in the Content Editor context menu allow you to easily remove those SXA entities, and their associated assets and templates.​ |  | 8492 |
 | This release adds support for the Sitecore Forms 9.0 module. |  | 8621 |
 | The Content Editor contains a new theme with a context menu script. This has been automatically added to the site's available compatible themes.​ |  | 8657 |
 | SXA can now utilize the `SwitchOnRebuild` indexing providers by default. |  | 8671, 8831 |
 | The `Pagination` functionality now works with the `Event List` and `File List` components​​. |  | 8923 |
 | The `$name` value in a field is now treated as an empty value by the rendering variant that renders the field. This improves field handling after you have created the content. |  | 9264 |
 | There is a new custom search index for the SXA Search functionality​. |  | 9265 |
 | You can configure the Creative Exchange to ignore defined custom CSS classes within a configuration file.​ |  | 9368 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Support for Sitecore 8.1 has been removed​. |  | 7960 |
 | Version 8.1 is no longer supported and SXA now uses the 8.2 dependency injector functionality. The old pipeline has been deprecated and will be removed in a future version. |  | 7990 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The Layout Service JSON output contains all the available fields. |  | 8059 |
 | The Sitemap generates with the incorrect priorities​.​ | 487190 | 7929 |
 | Creative Exchange should not import the maintenance sxa-ce-exported class back​. |  | 7968 |
 | SXA stopped referencing the `Microsoft.CodeDom.Providers.DotNetCompilerPlatform.dll` file, so projects now utilize the latest version without further conflicts.​ |  | 8063 |

 | The Browser title is HTML-encoded | 487867 | 8246 |
 | The `Language Selector` does not respect the `languageLocation` attribute of the `LinkProvider`​. | 487996 | 8306 |
 | Toolbox is empty if there were no available placeholders on the page. | 488569 | 8349 |
 | The `Cannot modify cookies` error is shown when an MVC Form component is added to a page​. | 488557 | 8350 |
 | Using the word "form" in a Partial Design name results in an inability to add components to it​. | 488558 | 8378 |
 | A problem with the `IFrame` component​​​ has been fixed. |  | 8489 |
 | Every theme is exported if the `Basic2` theme is selected as the site theme | 491970 | 8502 |
 | SVG images are broken when the `Wireframe` theme is selected​​. | 489233 | 8533 |
 | Enabling the grid lines preview prevents field editing on components from `Partial Design` if they are embedded in a `Row Splitter`. |  | 8624 |
 | Search does not show any results if a site is viewed from a domain that doesn't match the site definition.​ |  | 8638 |
 | The `Description` field is absent from the `Video` rendering​. |  | 8766 |
 | SXA Controller renderings are now identified by their full Type name. This prevents name collisions with 3rd party components and solutions. |  | 8827 |
 | Creative Exchange may experience problems importing rendering data into languages other than the default​ language. |  | 8848 |
 | Creative Exchange can display an error when it reads links with non-web protocols, for example from an email or a mobile device. | 490592 | 8855 |
 | Placeholder settings can not be applied to dynamic placeholders inside components, for example in Splitter components. |  | 8864 |
 | SXA's compatibility with EXM 3.5+​ has been restored. |  | 8889 |
 | SXA sites may cause exceptions in Sitecore and client applications​​. | 489215 | 8925 |
 | The incorrect language could be displayed for an item when exporting and importing from Creative Exchange.​ | 491220 | 9142 |
 | The `Media Library` folder of a website is copied twice when cloning the site within an Azure hosted environment​. |  | 9238 |
 | The Creative Exchange site import may sometimes result in a `Value cannot be null` error​. | 491253, 492294 | 9318 |
 | Creative Exchange would not import the ID attribute of the `body` tag.​ |  | 9404 |
 | An error may appear when rendering the Twitter component​. |  | 9419 |
 | The Content crawler can go into an infinite loop when indexing pages with circular references within page renderings​. |  | 9457 |
 | The `Layout Service` has been updated to version 2.0​. |  | 8414 |
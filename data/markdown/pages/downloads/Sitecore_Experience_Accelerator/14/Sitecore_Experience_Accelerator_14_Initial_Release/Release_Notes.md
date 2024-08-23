---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/14/Sitecore_Experience_Accelerator_14_Initial_Release/Release_Notes
---

**June 2017 – released Sitecore Experience Accelerator 1.4 (rev. 170623)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | SXA Data Modelling automatic page feeds - this feature supports the automatic generation of JSON feeds based on the current page layout. |  | 7399 |
 | ​SXA now contains site management tools. |  | 6145 |
 | Creative Exchange Live Mode instantly updates SXA themes as they are edited. |  |  |
 | Rendering Variants are now available for Image, Image (Reusable), Link, Links List, Rich Text, Rich Text (Reusable), and Event List. |  | 6147 |
 | Site Manager for managing hostname mappings. |  | 6859 |
 | Tenant Exporter that you use to download a complete serialized tenant. |  | 6915 |
 | ​Language Manager that you use to add languages to a site. |  | 6914 |
 | Clone Site tool that you use to make independent copies of an SXA site. |  | 6837 |
 | The Basic theme has a new clean architecture. |  | 6796 |
 | ​SASS source files for base themes. |  | 6570 |
 | ​Restrictions about the available renderings can now be defined per placeholder.​ |  | 4374 |
 | The new SXA Designer role that ​​​can add renderings and create local datasources.​​ |  | 6895 |
 | The ability to choose themes for specific Page Designs​. |  | 4373 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​A number of components such as Composites, Events, Media, Navigation, Rendering Variants, Variants.Abstractions have been changed as a result of rendering variant improvements.​ |  |  |
 | ​The search feature has been refactored to support Layout Services integration.​ |  |  |
 | ​The unused `VisibilityClasses​` field has been removed from Grid feature. |  |  |
 | ​​​A couple of abstract methods have been added to the SitecoreExtensions and Upgrade components.​ |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | You can create sites with the same name inside a single tenant​​.​ |  | 7090 |
 | When uploading images​, the user ​cannot change the destination. | 484663 | 7297 |
 | Front-end sites​ are not presented correctly on mobile devices. | 484000 | 7288 |
 | An aborted SXA version upgrade procedure keeps showing the user a "Done!" message​. |  | 5823 |
 | ​The Presentation/Page Designs folder template contains fields​.​ |  | 6897 |
 | ​The Map component ignores grids settings​. |  | 5391 |
 | ​If `languageEmbedding="always"`, the export package has the wrong structure​​​. | 481755 | 7089 |
 | Redirect mapping under a map group does not work​. | 484818 | 7432 |
 | ​After upgrading from SXA 1.2 to 1.3, the search query for Partial Designs is incorrect.​​ | 484929 | 7406 |
 | Social features can cause a mixed mode error when https is enabled. | 484932 | 7388 |
 | ​The Search Scope dropdown shows the scopes folders​. | 485233, 486962 | 7473 |
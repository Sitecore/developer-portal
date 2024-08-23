---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/13/Sitecore_Experience_Accelerator_13_Initial_Release/Release_Notes
---

**April 2017 – released Sitecore Experience Accelerator 1.3 (rev. 170412)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components, while fully integrating into the Sitecore editing experience.

## Highlights

-   SXA now supports Bootstrap, Foundation, and 960GS CSS frameworks.
-   The new SXA Data Modelling allows editors to compose and deliver JSON for Single-Page Applications (SPAs) or mobile applications.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | SXA now supports Bootstrap, Foundation, and 960GS CSS frameworks. |  | 3312 |
 | The new SXA Data Modelling allows editors to compose and deliver JSON for Single-Page Applications (SPAs) or mobile applications. |  | 5608 |
 | There is an Upgrade tool to help you upgrade from SXA 1.2 to SXA 1.3. |  | 5148 |
 | The Experience Editor now lets you manage component sizing and other responsive properties. | 4690 |  |
 | The Drag and Drop functionality has been improved and gives you a better indication of the drop location for nested placeholders. |  | 4691 |
 | SXA now lets you select a Grid System (Bootstrap, Foundation, or 960GS) per device, per site. |  | 4746 |
 | The `Base` and `Wireframe` themes are now grid agnostic and can be used with either Bootstrap, Foundation, or 960GS. |  | 4751 |
 | In the Experience Editor, the SXA Toolbar is now docked on the right rather than floating to better accommodate responsive layouts. |  | 5452 |
 | We have added JSON layouts and components for the new SXA Data Modelling. |  | 5465 |
 | SXA now supports Extensible Rendering Variants that allow you to create custom implementations of HTML/JSON renderings. |  |  |
 | SXA now supports semantic HTML tags within a layout and supports semantic HTML tags in rendering variants. |  |  |
 | You can now specify personalization rules on rendering variants. |  |  |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | A number of components, such as, `Page Structure`, `Search`, `Editing and Theming`, have been refactored to support the new grid paradigm. |  |  |
 | The `Navigation` and `Taxonomy` features have been refactored to support the new Rendering Variants abstractions layer. |  |  |
 | Rendering Variants has been refactored. An abstraction layer has been implemented to support various variants implementations. A JSON variants implementation has been introduced. |  |  |
 | `Author Mode` has been removed from Creative Exchange. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | SXA does not notify the user that Metadata Partial Design is required to insert a new Sticky Note. |  | 4722 |
 | SXA skips the flash data source when exporting with Creative Exchange. |  | 4554 |
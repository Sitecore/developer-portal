---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/12/Sitecore_Experience_Accelerator_12_Initial_Release/Release_Notes
---

**December 2016 – released Sitecore Experience Accelerator 1.2 (rev. 161216)**

The Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components, while fully integrating into the Sitecore editing experience.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​SXA now includes with Azure Webapps compatibility. |  |  |
 | SXA now includes Azure Search compatibility. |  |  |
 | Creative Exchange has been refactored to:  |  |  |
 | Use pipelines for customization |  |  |
 | Use the provider model for storage  |  |  |
 | Improve performance |  |  |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Creative Exchange has been completely ​reimplemented. Component design has been changed in order to make it more transparent and friendly for the extension.​ |  |  |
 | The taxonomy feature has been updated to support the configuratio of implicit tags.​ |  |  |
 | The Rendering variants component has been updated in order to support multilist fields.​ |  |  |
 | The set of components has been refactored due to updates in the MarkupDecorator component​. |  |  |
 | The Event calendar component has been updated to the latest version of the FullCalendar plugin.  |  |  |

## Deprecated/removed

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Livefyre has been removed from available components (the Livefyre Community Comments service is shutting down in February 2017). |  |  |

## Resolved issues

The following issues have been resolved:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​The Flip component is not visible ​inside the Tab component in the Experience Editor and ​​normal mode.​​ |  | 4543 |
 | ​Creative Exchange does not work properly under the HTTPS​​​​​ protocol. |  | 4486 |
 | Export to a folder does not work​​​ in Creative Exchange. |  | 4484 |
 | ​​Users cannot​​ access ​media items directly​.​​ |  | 4320 |

 | ​SXA is not compatible with .NET Framework 4.5.x​. |  | 4269 |
 | ​The Site Selector component does not work​ in the Experience Editor. |  | 3851 |
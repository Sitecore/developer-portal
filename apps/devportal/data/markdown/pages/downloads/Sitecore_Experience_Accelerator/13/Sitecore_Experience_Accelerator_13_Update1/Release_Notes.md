---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/13/Sitecore_Experience_Accelerator_13_Update1/Release_Notes
---

**May 2017 – released Sitecore Experience Accelerator 1.3 Update-1 (rev. 170519)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​New site themes are now stored in the Themes branch in the Media Library. |  | 4850 |
 | Site and tenant security scaffolding provides an easy way to apply security roles to a SXA site. |  | 5053 |
 | The Column Splitter can now contain only one column​. |  | 5199 |
 | The Robots.txt cache in now flushed as part of publish​ing. |  | 6575 |
 | Error Handling has been added to scaffolding as a feature. |  | 6673 |
 | Grids now have their own editing themes so grid-specific editing functionality can be added​. |  | 6774 |
 | The performance of SXA page rendering has been greatly improved​​​ - in some cases by as much as 50%. |  | 6825 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The `RenderContentToken` and `AssetInclude` types have been changed as a result of performance improvements.​ |  |  |
 | The `StringExtenstions` type has been renamed as `SitecoreExtensions`. |  |  |
 | The `GetVisibility` class has been removed as a result of usability improvements to the grid. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The Toolbox scroll bar UI is easily confused with the Page scroll bar. |  | 3325 |
 | ​The `DisableEditingOnInjectedRendering` processor breaks FXM functionality​. |  | 6899 |
 | ​The robots.txt cache is not cleared after a site publish.​ | 480809 | 6575 |
 | ​SXA reverses the logic for appending sitemap URLs to robots.txt. | 480809 | 6484 |
 | Pages exported by Creative Exchange have an additional `sxa-ce-exported` CSS class​. |  | 6727 |
 | ​JSON device is offered as a valid device for Creative Exchange.​ | 483306 | 6852 |
 | ​The Styling button throws an error if a rendering is added in the Content Editor.​ |  | 6866 |
 | ​The Custom Variants for levels field cannot be saved for the Navigation component - Sitecore Experience Platform 8.1 only​.​​​ |  | 6735 |
 | The Facet Slider component does not show a value indicator after the first page loads.​ |  | 5908 |
 | The Checklist Filter component is case sensitive when filtering by query parameters​. |  | 6872 |
 | ​You cannot add an external link to an Image component.​ | 483062, 483491 | 6845 |
 | ​The cyclic redundancy check fails if a page or a partial design has a container inside a container.​ | 484328 | 6707 |
 | The Date filter component causes a JavaScript errors when used.​ |  | 6900 |
 | ​The show and hide toolbox buttons are scrolled with the page content.​ |  | 7016 |
 | ​The drop indicators are shown when the mouse pointer is near the component rather than near the drop point.​ |  | 6722 |
 | ​Sticky notes can behave unexpectedly.​ |  | 5774, 6520, 6455, 5746 |
 | SXA and WFFM both contain a core item with the same name and a different ID. | 478585 | 5713 |
 | ​If a theme name contains dashes, it breaks the theme selection dialog​. | 482234 | 6675 |
 | ​The Toolbox scroll bar can be confused with the page scroll bar.​​​​ |  | 3325 |
 | Search Box and Search Results do not work properly when alwaysIncludeServerUrl="true"​. |  | 6446 |
 | ​The Tag Cloud component generates incorrect links​​.​​ |  | 6712 |
 | The `Lookup Name Lookup Value` field works incorrectly in the Content Editor and in the Experience Editor. ​​​​ | 483409, 484211 | 7094 |
 | ​Partial Design folders are not shown in the Partial Designs list​​​.​​ | 483925 | 7041 |
 | The start search location for a Gallery component is incorrect in the `GalleriaTheme` field.​​​ | 481271 | 6470 |
 | The ​Azure search provider sends latitude and longitude to the index in the wrong order.​​ | 484887 | 7170 |
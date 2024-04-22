---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Horizon/100/Sitecore_Horizon_1000/Release_Notes
---

**August 2020 – released Sitecore Horizon 10.0.0**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Horizon 10.0.0 includes:

-   ​​​​You can now use Sitecore DAM for managing and inserting images on pages and content items. You can use DAM images in `Image` and in `Rich Text` fields.
    
    To activate the Horizon DAM integration you must first install the [Sitecore Connect for Sitecore DAM module](/downloads/Sitecore_Plugin_for_Stylelabs_DAM).
    
-   You can now edit content that is not a page in Horizon.  
    In the Horizon editor:  
    -   The Content editor tree lists all the content items in the current site.
    -   The field editor supports Rich text, Single Line text , Multi line, Image, File, General link, ​Checkbox, Date, Date time fields.  
        ​​The other field types are currently presented as raw values.
-   Page field editor​  
    You can now edit the fields from a page item in a dedicated field editor in Horizon. The functionality is also designed to help you manage the metadata of the page.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Pages, Content  
 | ​​​​​You can now use Sitecore DAM for managing and inserting images on pages and content items. You can use DAM images in `Image` and in `Rich Text` fields. |   
 |   
 |
 | Content  
 | You can now edit content that is not a page in Horizon. |   
 |   
 |
 | Pages | ​​​You can now edit the fields from a page item in a dedicated field editor in Horizon. The functionality is also designed to help you manage the metadata of the page. |   
 |   
 |
 | Pages, Content  
 | ​​​You can now select different sites and edit them. The sites must be defined in the configuration or as SXA sites. |   
 |   
 |
 | Pages, Content  
 | You can now select the content la​nguage of pages and content items.​​ |   
 |   
 |
 | Pages  
 | ​​​You can drag and drop pages in the content tree​ to move and reorder them. |   
 |   
 |
 | Pages, Content  
 | ​You can add images to a rich text field. |   
 |   
 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Pages  
 | ​​​​The `Image` dialog box doesn't work with SXA​ sites. | CS0182042, CS0186399 | 366714 |
 | Pages | ​​Horizon doesn't support the Apple Safari browser. |   
 | 404542, 404540, 404534, 404530 |
 | Pages  
 | ​​​​The `Data source picker` dialog doesn't support SXA site specific queries. |   
 | 404393 |
 | Pages  
 | Layout Not Found page is shown in Canvas after page deletion with folder parent | CS0186400 | 413276,413596 |
 | Pages | Horizon canvas integration script is embedded in normal mode | CS0178052, CS0187329, CS0190025 | 378442, 419677 |
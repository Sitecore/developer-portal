---
title: "Release notes - Sitecore Experience Accelerator 1.1"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/11/Sitecore_Experience_Accelerator_11_Initial_Release/Release_Notes
---

**October 2016 – released Sitecore Experience Accelerator 1.1 (rev. 161004)**

The Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components, while fully integrating into the Sitecore editing experience.

-   Users can create pages and enter content while running the creative design process in parallel.
Site architects can create a wireframe version of the website within Sitecore.-   Content authors and UI designers can work simultaneously on the wireframe site.
-   Content authors can enter real content into the wireframe environment.
-   UI designers can work on an exported version of the wireframe site using their favorite tools and the Experience Accelerator Creative Exchange synchronizes the UI design back into Sitecore.

SXA enables back-end developers to work on integration with external systems and custom components while content authors and creative designers are working in their areas at the same time.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Creative Exchange now supports virtual folders.​ |   
 |   
 |
 | ​Thumbnails for video and media links parameters are now supported.​ |   
 |   
 |
 | ​Tag facet configuration is now supported.​ |   
 |   
 |
 | ​Sorting for non-integer facets is now supported.​ |   
 |   
 |
 | ​Rendering variants have been updated and now support target attributes.​ |   
 |   
 |
 | ​Multisite linking has been improved.​ |   
 |   
 |
 | ​Sitemap behavior has been improved.​ |   
 |   
 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Annotations have been renamed to Sticky Notes.​ |   
 |   
 |
 | ​The compliancy repository has been refactored for better consistency.​ |   
 |   
 |
 | ​The tabs component has been refactored to support a flexible styling layout.​ |   
 |   
 |
 | ​Editing projects have been refactored to resolve issue with the splitter (columns).​ |   
 |   
 |
 | ​Search has been refactored for consistency with search filter renderings.​ |   
 |   
 |
 | ​Redundant members have been removed from Multisite projects.​ |   
 |   
 |

## Resolved issues

The following issues have been resolved:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​SXA 1.0 does not include translations for the English text in the user interface. SXA 1.1 will include translations for German, Japanese, and Danish. ​​​ |   
 | 2388 |
 | SXA does not refresh the content tree in the Content Editor after creating a new site/tenant.​​​​​​ |   
 | 2779 |
 | ​Creative Exchange creates duplicated media assets when you import an exported theme. ​ |   
 | 2505 |
 | ​The Experience Editor only displays the Toolbox for non-admin users after the page is reloaded. ​ |   
 | 2736 |
 | ​The Authentication rendering does not reflect the login state. ​ |   
 | 2208 |
 | ​When you add a Rich Text rendering on a page and then open the Rich Text Editor and insert a Sitecore media item, the Insert Media Item window does not respect the configured media root. ​ |   
 | 2489 |
 | ​The Experience Editor raises a “URI malformed” error when you save a page that contains a Rich Text rendering that includes a percent character (%) in the content. ​ |   
 | 1190 |
 | ​The Current language filter in Search Result properties does not restrict the search results to the current language when it is enabled. ​ |   
 | 2773 |
 | ​When you choose a long name for a page design, the Page Design menu in the Experience Editor introduces line breaks, which makes it difficult for you to choose the page design. ​ |   
 | 2756 |
 | ​The Search results properties form in the Experience Editor does not provide ascending and descending options in the Default sort order field. ​ |   
 | 2768 |
 | ​The Experience Editor sometimes presents the edit frame for a rendering in an inappropriate location relative to the rendering. ​ |   
 | 2758 |
 | ​In some situations, after adding a rendering to a page and saving, then choosing the ‘Open an item for editing’ option in the inline toolbar, the browser asks whether you want to reload the site. ​ |   
 | 2793 |
 | ​When you add a Map component to a page and then associate a data source in the Experience Editor, in the Select associated content dialog, the dialog displays the error and does not accept the selection. ​ |   
 | 2788 |
 | ​SXA reports an error when you clone content in the Select associated content dialog in the Experience Editor. |   
 | 2764 |
 | ​SXA does not provide appropriate configuration items to allow you to select configuration for composite components using the Select the Associated Content dialog in the Experience Editor. ​ |   
 | 2795 |
 | ​SXA reports an error when you add a Results Variant Selector component to a page. ​ |   
 | 3020 |
 | ​The SXA installation package does not include an example Solr config file.​ |   
 | 3265 |
 | SXA Controllers retain memory causing performance of the published website to decline with time. |   
 | 3255 |
 | ​User Interface text translations from English to other languages are missing. |   
 | 2798 |
 | ​The ​​Sticky Note component is incorrectly named Annotation. |   
 | 2800 |
 | ​The Social Media Share toolbar displays a JavaScript error and fails to work when added to a page. |   
 |   
 |
 | ​The map component ignores the zoom settings in the correspondng configuration item. |   
 | 3043 |
 | The Select associated content dialog shown for a Flash component ​does not allow the user to select a content item. |   
 | 2792 |
 | ​​A variant rendering based on the Map component ignores POIs when created by the user. |   
 | 2941 |
 | ​The Creative Exchange does not export index.html with the website pages. |   
 | 3601 |
 | ​The Tag Cloud component does not return any results. |   
 | 3310 |
 | ​The Facebook Comments component does not display a Facebook comments input pox. |   
 | 3283 |
 | ​​​​The Event Calendar component raises an error when you refresh any page. |   
 | 3299 |
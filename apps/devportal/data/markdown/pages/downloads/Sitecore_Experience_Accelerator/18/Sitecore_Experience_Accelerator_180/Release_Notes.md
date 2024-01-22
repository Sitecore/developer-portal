---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/18/Sitecore_Experience_Accelerator_180/Release_Notes
---

**November 2018 – released Sitecore Experience Accelerator 1.8**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## Highlights

Sitecore Experience accelerator 1.8 includes:

-   Rendering variants can now include and render components in their structure.
-   When you edit a link, you can now define cross-site linking rules for your site which can expose the content of other sites.
-   A n​ew Wireframe theme has been added.
-   W​e have added support for Bootstrap 4.
-   In the Experience Editor, there is a new view mode button that allows users to see the site in Wireframe and Grayscale modes.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​Site administrators can now organize the toolbox components and groups on a per site basis. |  | 242220 |
 | ​​Content Editor context scripts have been added to convert page-related data sources from relative paths to Guids and the other way around. | 505079, 512042 | 242129 |
 | ​Accessibility has been improved by adding a `Skip link` meta component that allows you to configure pages that can be navigated by people with disabilities.​​ |  | 242188 |
 | ​​Accessibility - In complex components like composites, links in non-visible content does not get the focus when you tab through content. |  | 242182 |
 | Accessibility - ​When you tab through, overlays trap the focus to ensure that the focus does not return to the page underneath. ​​ |  | 242142 |
 | ​Accessibility - Site visitors can navigate complex components with the tab and arrow keys.​ |  | 242025 |
 | Rendering variants can now include and render components in their structure.​ |  | 250727 |
 | We have added Pre-delete integration points that you can extend with your own scripts when you delete a site or a tenant. |  | 247317 |
 | When you edit a link, you can now define cross-site linking rules for your site which can expose the content of other sites.​ |  | 247206 |
 | A n​ew `Wireframe` theme has been added. |  | 247201 |
 | ​The `Search Box` now has it's own language settings that allow you to be configure it without having to put the `Search Results` component on the page. |  | 242418 |
 | You can now disable the DictionaryCacheValue cache in the cache settings. | 505974 | 242392 |
 | ​An invalid query that is defined within a rendering variant query element no longer cause sthe component to throw an exception.​ |  | 242388 |
 | When your license does not entitle you to use SXA, a proper warning is shown in the Content Editor​. |  | 242385 |
 | ​When you change a tag in your site, the items that are tagged with it are automatically re-indexed. |  | 242381 |
 | W​e have introduced a template analysis report that allows you to asses that multisite best practices are being followed in your tenant. |  | 242381 |
 | Cortex Content Tagging support has been added that allows you to store the discovered tags in a site's taxonomy.​ |  | 242378 |
 | W​e have added support for Bootstrap 4. |  | 242374 |
 | ​`LocalizableLinkBuilder` helper methods have been added to support multisite domain handling​. | 501772 | 242364 |
 | The editing UI is now displayed in the user's interface language, rather than content language. |  | 242363 |
 | The Content Editor context menu now contains a `Module Scaffolding` item that allows you to install that module in sites where it is not yet installed.​ |  | 242353 |
 | SXA now supports Solr 7.2.1. |  | 242350 |
 | ​Developers can define folders with custom views on a per-site basis to replace the out-of-the-box views. |  | 242310 |
 | You can now define image substitution in a theme and this allows you to replace all images from that theme with a single mock image. |  | 242308 |
 | In the Experience Editor, there is a new view mode button that allows users to see the edited site in Wireframe and Grayscale modes. |  | 242304 |
 | ​The administrator can now control whether the `Asset Optimizer` can be disabled with a URL parameter. |  | 242286 |
 | ​When you create a new tenant, a progress bar is displayed. |  | 242284 |
 | ​The Creative Exchange restricted themes are now defined the theme itself rather than in a config file. |  | 242278 |
 |  |  |  |

## Breaking Changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Sitecore Experience Accelerator no longer supports Sitecore 8.2.​​ |  | 242356 |
 | ​The `Page Design` field on a page is now a `Shared` field - not versioned. |  | 242318 |

## Deprecated/Removed

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Support for the Social Login wrapper has been removed because none of the supported Sitecore versions include it any longer.​ |  | 242220 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​The `Slider` and `Range` facet filters do not support float facets. |  | 242281 |
 | ​The `New Tenant` status dialog does not contain a progress bar.​​ |  | 242284 |
 | After you install SXA, the Upload File window is sized incorrectly and it contains the global header​.​ | 515077, 514094 | 253522 |
 | ​​The signature of the Dropdown filter must be in lowercase. | 513853 | 253512 |
 | ​​The browser title prefix and suffix are enclosed in HTML tags​. | 509293 | 242294 |
 | ​The `No components in header` message is shown for composite renderings on non-English pages. | 509373, 509855, 509931 | 242295 |
 | If the `Location Finder` component is empty, the `Map` controller is not centered on the central point of the map .​​ | 509173 | 242298 |
 | In the Experience Editor, when you create a `Partial Design`, an unnecessary `sc_version` parameter is added to the query string.​​ | 509262 | 242300 |
 | ​During the publication process, the `Virtual Media protection` processor is too aggressive and causes errors. | 512346, 509926, 510329, 510718 | 242301 |
 | The `SXA Browser Title` meta component renders HTML encoded text​.​​ | 509293 | 242313 |
 | The `Item Queries` functionality doesn't work due to a null reference exception in `FieldTypesEx.BucketInternalLink`.​​ | 508859, 510273 | 242314 |
 | When a non-existant site is provided in a URL parameter, the Error Pages show an unhandled exception.​ |  | 242320 |
 | ​​When you drag a component to a placeholder, the placeholder shows the key instead of the display name. |  | 242289 |
 | ​​The `Cleanup Data Folder` script removes nested folders. |  | 242292 |
 | After you upgrade from SXA 1.3 to SXA 1.7, the content of your site is different from that of a fresh site.​ | 509379 | 242327 |
 | The `component-search-other.scss` file contains some incorrect import dependencies.​​ | 509075 | 242328 |
 | Sites are resolved incorrectly when one of the sites is removed from the `Management/Sites` setting.​​ | 508148 | 242330 |
 | ​SXA breaks HTML cache clearing for non-sxa sites. | 508381 | 242332 |
 | ​​If you add the `Column Splitter` component​, you can no longer select the `Image` component. | 508721, 510656 | 242336 |
 | In the Experience Editor, if you click the `Home` button in the ribbon, you are sent to an incorrect version of the `Home` page. | 508857 | 242341 |
 | ​​You cannot set the `Header` variant for Page Content inside a composite component. |  | 242360 |
 | ​​The Sitemap generator ignores the `LanguageEmbedding` setting in the link provider​. | 504498, 505903, 509162, 509879, 511525, 516748, 517252 | 242369 |
 | If the link provider has `alwaysIncludeServerUrl="true"`, the `AssetLinksGenerator` can return links with the wrong host​ name.​ | 507444 | 242373 |
 | ​​The `Search Slider` component doesn't work and shows console errors. |  | 242376 |
 | ​​If there are `Site Setup` items that do not include a `SiteAction` and only include a `Post Step`, scaffolding can fail. |  | 242389 |
 | The `GetAttributeTokenValue` method does not work with a `DropList` field.​ | 511730 | 242396 |
 | `Anchor` does not work in a `Link` field.​​ | 503121 | 242398 |
 | ​In the Experience Editor, you cannot switch personalization for the `Tabs` rendering. | 501074 | 242406 |
 | The `ListFacets` that work with the `Number/Integer` data type, do not display their values correctly in the Experience Editor​.​​ | 499073 | 243860 |
 | ​​If you create a new feature, it is not listed in the `Add site feature` popup when the UI is in Japanese. | 504431 | 243893 |
 | ​If you have registered attribute routes and then create a new site, the site can be created with the wrong template and some items can be missing. | 513176, 517386, 517577 | 247071 |
 | The Filter dropdown does not support accents in facet name.​​ | 513493, 513743, 511126 | 247113 |
 | ​​The `Links Shown in Overlay` setting does not working in the `SearchResults` rendering​. | 513205 | 247119 |
 | ​The SXA `SiteResolver UpdatePath()` method causes web services with a long URL to throw an exception​. | 511980 | 247136 |
 | When the `Host Name` contains several values, links cannot be resolved.​​ | 511872 | 247138 |
 | The SXA `CloudIndexFieldStorageValueFormatter`​ class breaks the `List Manager` report.​​ | 512206, 514385, 516013 | 247139 |
 | Cloned items from a delegated area are only published in English.​​ | 509480, 510785 | 242235 |
 | After you restore or deserialize site items, the `Creative Exchange` buttons are not visible in the Content Editor.​​ | 504246 | 242240 |
 | ​The workflow state of a datasource does not change when a page is moved through the workflow. | 500922, 511081 | 247286 |
 | Autocomplete does not work with the location finder​.​​ | 508029, 509617 | 247292 |
 | ​​In the Experience Editor, when you edit Partial Designs, assets are always optimized. |  | 247976 |
 | The facets of Shared Sites are not applied to search results.​ | 514516 | 251186 |
 | ​​The `Enable Preview` site setting prevents SXA from displaying custom error pages. | 513927, 515961 | 251582 |
 | If you create an item with spaces in its name, you cannot add renderings because of an error in the `item:added` event.​​ | 512395 | 251817 |
 | ​The `ResolveSiteFromRequestImpl()` method contains an incorrect parameter that prevents multi-site solutions from resolving virtual folders correctly. | 514856 | 252270 |
 | In SXA cache setting items, the `Rendering` field is not shared. | 514853 | 252799 |
 | ​In some cases a bootstrap column is not added when you decorate a rendering. | 515209 | 253359 |
 | In Internet Explorer, the `Select Associated Content` dialog does not have `Create` and `Copy To` functionality. | 514553, 518565 | 253366 |
 | The SXA Redirect Map does not match a valid `Regex` with a `URL​`.​ | 514442 | 253372 |
 | The Event Calendar behaves inconsistently. | 510556 | 242232 |
 | ​In SXA 1.7.1​, `​View` renderings do not work. | 510567, 514387 | 242222 |
 | In Internet Explorer 11, SXA does not load video files if you have defined a Poster Image field. | 511365 | 242181 |
 | Users who do not have publishing rights can see the `Publish Item` button in the context menu. | 510794 | 242180 |
 | Personalization does not work in embedded composites.​​ |  | 242175 |
 | In delegated areas, you cannot make a new version of an item if a clone already exists. | 512284 | 242159 |
 | ​When you create a local datasource, the security check throws an error. | 510033, 511556, 516412 | 242114 |
 | In the Experience Editor, when you open `__Standard Values` of a template, an error is thrown. | 512330 | 242066 |
 | ​The `Checklist Filter` component does not work if the casing of the facet does not match the casing of the indexed value​. | 509403, 511681, 513853, 518574 | 242045 |
 | In the Experience Editor​, saving a carousel with more that 9 slides causes an exception. | 508734, 509230, 509522, 510861, 516914 | 242022 |
 | In a `Responsive Image` template, the `Field Name` field is not shared. | 512092 | 241955 |
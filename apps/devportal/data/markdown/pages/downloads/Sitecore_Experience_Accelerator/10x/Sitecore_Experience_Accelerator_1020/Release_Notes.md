---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1020/Release_Notes
---

**November 2021 – released Sitecore Experience Accelerator 10.2.0**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## Highlights

-   Multisite sharing has been greatly extended to support Redirect maps, data source configurations, available renderings, and more.
-   In Horizon, you can now add, remove, and reorder items for components that store a data source under a grouping root item, like `Carousel`, `Tabs`, or `Link List`.
-   SXA is now distributed with `Items as resources`.

## New features/improvements

 | Description | ADO no. |
 | --- | --- |
 | The toolbox now triggers search after you enter one character. | 329847 |
 | Scriban now supports `Responsive Image`. | 335207 |
 | The `Gallery Video` rendering now supports additional URL formats for `Vimeo video URL`. | 437899 |
 | A secure flag has been added to the XA.cookies API. | 430837 |
 | You can now edit the `Rendering Parameter` fields of a component in Horizon. | 413809 |
 | The SXA Video component now supports YouTube closed captions. | 441656 |
 | Multisite sharing has been greatly extended to support Redirect maps, data source configurations, available renderings, and more. | 449319 |
 | Renderings now have a minimum height of 30px during editing and this makes empty renderings selectable. | 439982 |
 | It's now possible to create a local data source for a component that is already present on the page in the same way as when the component is dropped on the page. | 455949 |
 | The `Clone Site` functionality now lets you select the target location, for example, the `Site` folder. | 442301 |
 | The SXA integration with JSS now supports the `serverSideRenderingEngineApplicationUrl` setting. | 457778 |
 | You can now add, remove, and reorder items in Horizon for components that store a data source under a grouping root item, like `Carousel`, `Tabs`, or `Link List`. | 410965 |
 | SXA is now distributed with `Items as resources`. | 454958 |
 | You can now access metadata for `Link` and `Image` fields in the Scriban templates. | 350226 |
 | You can now use Scriban to wrap an HTML area with a link. | 442331 |
 | The `Tag Cloud` component now lets you display the titles of tags based on the language setting. | 462072 |
 | JSS tenants and sites have been renamed Headless tenants and sites. | 416295 |
 | A new `url` parameter has been added to the SXA CLI and you can now switch all commands​ to a different environment from the command line. | 463754 |
 | Whitespace characters are now automatically trimmed in the `SXA Site Host Name` field and this avoids some hard to diagnose configuration problems. | 465402 |
 | The new `sc_responsive` Scriban function can render images sourced from Content Hub. | 453414 |
 | The SXA CLI now supports uploading of fonts. | 465929 |
 | The `FillGridDefaultValues.GetTargetParameters()` method has been improved to better handle GridParameters null string. | 470566 |
 | The `Page` canvas is now automatically refreshed after rendering parameters are changed in Horizon. | 473825 |
 | The `Create a new SXA component` wizard has been extended with the newly added data source behaviors. | 472075 |
 | You can now remove the `robots.txt` file for an SXA site with a virtual folder specified. | 477207 |
 | WebApi calls like `Search Results` can now use Scriban variants without the need for a PageContext. | 477741 |
 | You can now configure the `Browser Cache-control` settings for SXA `sitemap.xml` files with a configuration file patch. | 478843 |
 | SXA now supports the new Bootstrap 5 grid. | 462645 |
 | The `Lodash` library has been updated to the latest version. | 465726 |
 | The Scriban library has been upgraded to version 3.6. | 466923 |
 | You can now use Scriban templates in JSON variants. | 483214 |
 | The JSS tenants and sites are now called Headless tenants and sites. | 473833 |
 | In Rich Text fields, site-internal links are now updated during cloning to point to the cloned site. | 482662 |

## Resolved issues

The following issues have been fixed:

 | Description | ADO no. |
 | --- | --- |
 | An `ArgumentNullException` occurs when an item defined in the `Pass Through Field` does not contain any value. | 334632 |
 | If a partial design contains a container rendering, you cannot save any changes that you make to the rendering. | 316029 |
 | ​If you search using a date filter, the search results do not include the day specified in the `To date` value. | 242338 |
 | If you use the `Load More` component, all the search results are not shown. | 334643 |
 | The `Pagination` component does not work when it is embedded within a rendering variant. | 345803 |
 | ​If you use the component wizard to create a new rendering, it creates a data source item but does not link it to the new rendering. | 326489 |
 | The `Dropdown` filter component for SXA search ignores the scope defined in the URL when providing the search results. | 337994 |
 | The `Rich Text Editor` profile is different in the Content Editor and in the Experience Editor. | 358258 |
 | If the current user has no access to the Home item, the `sitemap.xml` is inaccessible. | 354111 |
 | In the `Splitter` component, if you remove and re-add a snippet, it causes unintended layout output. | 338253 |
 | In components that were created with the Component Wizard, the rendering view tries to render variant fields even when the component variants are disabled. | 338269 |
 | The same site is resolved differently when you open it in Experience Editor before and after you install SXA. | 380953 |
 | In the Experience Editor, the `Select Media` dialog does not show the language version's display name of media items in the content tree. | 397386 |
 | Global item bucket settings do not work in SXA headless sites. | 421007 |
 | If you remove and re-add a snippet in the Splitter component, it results in an unintended layout output. | 338253 |
 | If a data template is missing for any item under `/sitecore/layout`, the SXA Toolbox is not displayed. | 411659 |
 | In the Experience Editor, if you collapse the ribbon during a drag & drop operation, the drop target (blue triangle) is hidden. | 427672 |
 | Links from the wrong SXA sites are generated in EXM emails. | 430959 |
 | The draggable area in SXA is always limited by the initial window size. | 433768 |
 | Personalization doesn't work for composite components that use local data sources. | 450108 |
 | The `Data source` workflow action only works with the English language version of items. | 446345 |
 | In the `Multi-Root Tree View` field, when a query is used as the source, every site is displayed as the `Current Site`. | 449900 |
 | In the Experience Editor, if you open the `Select the Placeholder Settings` window, the `Server Error in '/' Application.` error is displayed. | 449816 |
 | In the Experience Editor, the `Convert data sources to GUID/Local` command does not respect the language of the item. | 412559 |
 | The `Cleanup Data Folder` script removes the data sources related to partial design renderings. | 450784 |
 | If one form is in the page body and another is in the Overlay, the `NavigationData` of the `FormDataModel` in the `FormBuilderContoller` is NULL. | 395458 |
 | In the standard values of the SXA templates, the translation is wrong for some fields. | 418505 |
 | The `Cleanup Data Folder` script removes page datasources in the Japanese language. | 451984 |
 | The `Add Site Language` script adds a language to delegated items. | 384988 |
 | The `LayoutModel` object is created multiple times per request. | 450878 |
 | The `DateVariant in Fallback` scenario does not acquire the expected date format from the primary variant. | 362491 |
 | In the Content Editor, if you try to assign a data source to a component, an error message is shown. | 444859 |
 | If you clone multi-language pages with subitems, the `args.SourceItem` error occurs. | 452497 |
 | The `LayoutModel` constructor is inefficient. | 450879 |
 | In the Content Editor, in the `SXA datasource selection` dialog, the `Create` link is greyed out. | 452779 |
 | If you add a non-English version of an item, the `DuplicateItemNameException` occurs. | 452840 |
 | The `Caching.CacheKeyIndexingEnabled.PathCache` setting can affect the ability to resolve optimized assets. | 454138 |
 | If the current site is linkable and linking to other sites is enabled, the `Insert link` functionality does not show the selected item. | 458190 |
 | Dynamic placeholders are not excluded from the placeholder wrapper. | 454375 |
 | If the data sources for rules are snippets within a snippet, the `Snippet` component does not work correctly with personalization. | 454464 |
 | If you change the data source of a snippet that contains a nested snippet, it can clear the nested snippet. | 456401 |
 | If the site at the root of the Sitecore instance requires a login, it will affect the operation of `/layouts/system/VisitorIdentification.aspx`. | 454338 |
 | In Experience Editor, if you open an item, it is not always possible to resolve the site. | 458313 |
 | If you run the `Cleanup Data Folder` script and a partial design item contains a `Data` folder without any child items, an error occurs. | 458937 |
 | The `OpenGraph` component renders an incorrect Image media URL if `Target Hostname` is set. | 453945 |
 | The `Video` component does not work on a page in the Turkish language. | 456995 |
 | The `ListRepository.GetContentSearchQueryItems` method retrieves too many fields from a search index. | 454453 |
 | ​In the Experience Editor, if you save a page that contains the same components for different devices, it drops renderings from the `Final Layout, Presentation details` and throws the `Exception has been thrown by the target of an invocation` error. | 459597 |
 | If a variant data attribute contains more than one token, an error is thrown. | 460090 |
 | You cannot use the `HTML Tag` variant for Images that are loaded from Content Hub. | 460711 |
 | In Experience Editor, if you use the `Insert` button on a rendering, the `Do you want to save` popup does not save your changes. | 459392 |
 | If a Scriban template includes a `Language Selector` component, the component does not show any languages in the Experience Editor. | 460101 |
 | Link attributes are not rendered in variants. | 463178 |
 | If a query contains a large number of characters, there is a long response time. | 460395 |
 | If a page has been unpublished, `PublishReferencedItems` fails with `NullReferenceException`. | 461327 |
 | The `SharedItemsPublicationHandler` method queues too many publishing jobs. | 462572 |
 | The `Search Result` component renders all links with the hostname of the current site even if they originate from a site in another domain. | 456595 |
 | The `Sitecore.XA.Feature.SiteMetadata.Templates.ITitle` method does not work. | 466766 |
 | ​If you install SXA, in the Campaign Creator, the `Going to Experience Analytics` button does not work. | 470565 |
 | If you use SXA with Sitecore Publishing Service, local data source items are not always published. | 466844 |
 | If Creative Exchange IS triggered from a CI server, Scriban files are not imported. | 472114 |
 | The rules in the `Datasource Validation` field are not applied. | 472579 |
 | A snippet that has A/B testing applied is not displayed after publishing. | 472147 |
 | The `Sitecore.XA.Foundation.Multisite.EventHandlers.HttpRoutesRefresher.RouteExist` method, can throw a `System.InvalidCastException` error. | 473253 |
 | If you remove an item and then publish its parent item with Sitecore Publishing Service, the item is not removed from the Web database cache. | 470449 |
 | If you edit a login component and save your changes it does not take into account the value in the `Login Button caption` field. | 471559 |
 | If you use a composite rendering, the data source workflow actions do not work. | 475427 |
 | The `Carousel` component causes the page to scroll back to top automatically. | 473871 |
 | The `JSON Template Variant` field is not implemented in SXA 10.0. | 464881 |
 | The `Sitecore.XA.Foundation.SitecoreExtensions.Extensions.SiteinfoExtensions.ResolveTargetHostName` method can throw a `System.NullReferenceException` error. | 473864 |
 | If you publish SXA rendering items, the `SXA CustomRenderingViewPath` cache is not cleared. | 476138 |
 | If the websites are in different languages, the cross-site links are created incorrectly. | 476608 |
 | The implementation of the `IsMatchingPath` method is not thread safe. | 476107 |
 | If you use a `Link` component without a data source, an error is shown on the page. | 471754 |
 | The SXA 1.7.0 to 9.3.0 upgrade scripts dry run fails and throws the `Get-AllSxaSite : The term 'Get-UniqueItem' is not recognized as the name of a cmdlet, function, script file, or operable program.` error. | 469150 |
 | The `DateVariant` renderer does not use the primary renderer format when it is used in a fallback scenario. | 464250 |
 | The sitemap generator unnecessarily analyzes the page `Data` folders. | 470658 |
 | If you use the `Aggregated Facet Filter` component and have multiple filter renderings that use the same computed field one of them is not displayed. | 475536 |
 | The `Wrapped If Not Empty` variant field link option does not function with the out of the box `Image` rendering. | 464002 |
 | If the custom session state is saved in `Custom` mode, a serialization exception occurs. | 421394 |
 | The `LocalizableLinkProvider` method performs redundant `GetSiteInfo` calls. | 462235 |
 | If a rendering variant definition is used outside the context of a site, an error occurs in the `Allowed in templates` field. | 463959 |
 | If you install the DAM Connector, the Rich Text Editor profile is hardcoded. | 463997 |
 | In an SXA page item, the `Twitter Text` field contains a an inaccurate description. | 465965 |
 | The performance of `SiteInfoResolver GetSiteInfo` calls is poor. | 467931 |
 | In the Experience Editor, if you add a snippet to a composite component and the snippet is copied from a global data source to local one, an error occurs. | 480390 |
 | If you remove a `Page Branch` item, a `System.NullReferenceException` error occurs. | 468612 |
 | Sitecore Forms do not work correctly if they are embedded in an overlay. | 475554 |
 | In a `Multiroot Treelist` field, if the `Source` contains `/` at the end of a value, the `Index was outside the bounds of the array` error occurs. | 479136 |
 | If an image in Content Hub is missing the src attribute, a `NullReferenceException` occurs. | 498844 |
 | If SXA is installed, changing the upload destination in `Upload media` dialog does not work correctly. | 487044 |
 | If you use Creative Exchange to export or import of a page with a `Scriban` item, a metadata item appears. | 486135 |
 | If you add when two or more placeholders to a template, `Scriban` dynamic placeholders are generated with incorrect IDs. | 484936 |
 | On a Content Delivery server, the `OnPublishEnd` handler calls `` Sitecore.XA.Foundation.Multisite.EventHandlers.SiteCacheClearer` too often.` `` | 484843 |
 | In the `Redirect Map`, the `$vf` token ca not be used for the redirect target URL without a language or a language token. | 484830 |
 | Renaming or moving a page item creates inconsistencies in the site cache. | 484542 |
 | The `Ignore other caching settings override with defined below` setting does not work with some nested components. | 483750 |
 | Support for map files in SXA CLI is broken. | 483046 |
 | If the same field on different items in the same language refers to the same item, the site clone script fails to update the link references. | 482572 |
 | ​In a `Redirect map`, if a target URL contains contains a language and `Language Embedding` is set to `true`, the redirect URL contains two languages. | 481452 |
 | ​If SXA is installed, in the Experience Editor, you can not delete a page that has links pointing to it. | 480530 |
 | It is impossible to export pages with a non-English version through Creative Exchange. | 477303 |
 | If you install a package, `FlagPublishingGroupingItems` creates an invariant language item version. | 477263 |
 | `PublishReferencedItems` does not publish newly created composites for languages other than `en`. | 476634 |
 | If the `alwaysIncludeServerUrl` setting is set to `true`, the rendering background image media url is is not built correctly. | 473305 |
 | The `switchableLinkProvider` setting does not resolve cross-site links to non-SXA sites correctly. | 469199 |
 | An interaction with the `Site Selector` component submits all forms on a page. | 454315 |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1000/Release_Notes
---

**August 2020 – released Sitecore Experience Accelerator 10.0.0**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## Highlights

-   SXA now supports running on an instance hosted in a Docker container​.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​The introduction of HTTP header configuration now allows search service requests to be cached. | 540504, CS0167583 | 361084 |
 | The SXA CLI now allows you to upload theme assets from the command line without having to run the watching task​.​​ |  | 403655 |
 | jQuery has been updated to version 3.4.1.​​ | 533216, 536044] | 334362 |
 | Language fallback has been enabled by default on all the out of the box data sources.​​​ |  | 345838 |
 | ​​Users can now de-select the selected facet values individually in the `Facets Summary` component. |  | 359629 |
 | ​​The performance of the rendering placeholder wrappers​ has been improved. |  | 365404 |
 | ​​A new custom workflow action has been added to improve the inclusion of data source related items in the `Page` workflow. |  | 369126 |
 | We have introduced a cache for tenant related tokens and this has improved system perfromance.​​ | 541416, CS0181339 | 370127 |
 | ​​It is now possible to define an A/B test on a component in a partial design and for the test to be executed on every page that uses the partial design. |  | 374515 |
 | ​​SXA components that accept content search queries now support SXA query tokens​. |  | 380800 |
 | It is now possible to add boosting rules to queries that are defined in rendering variants.​​ |  | 381970 |
 | ​​It is now possible to execute content search queries in Scriban using the new `sc_search` extension method.​ |  | 383504 |
 | The Experience Editor now shows the `Semantics` field as well as the `SXA Tags` field when you click the `Tags` button.​​ | CS0180481 | 388272 |
 | You can now use the new `sc_inheritsfrom` embedded function to test whether an item inherits a template within a Scriban template. ​​ |  | 391261 |
 | ​​You can use the new `sc_getitem` embedded function to retrieve a single item by specifying an ID or a path within a Scriban template. |  | 393752 |
 | The `maxTermsCountInFacet` setting is now set at 50 for backward compatibility and provides faster search in Azure search indexes.​​​​ |  | 407140 |
 | Creative Exchange Live has been upgraded to leverage Gulp version 4.​​ |  | 401392 |
 | Creative Exchange Live has been updated to run on NodeJS 12. ​​ |  | 403648 |
 | The SXA CLI now allows you to build optimized theme assets from the command line without running the watching task.​​ |  | 403651 |
 | ​​You can now build, optimize, and upload CSS/JS/Sprite assets within the SXA CLI. |  | 406147 |
 | ​​SXA now supports running on an instance hosted in a Docker container​. |  | 415946 |
 | ​​If the CLI fails because of the required node packages were not not installed​, it provides a description of the problem. |  | 412131 |
 | ​​A new `--help` parameter has been added to the SXA CLI to help developers discover which parameters are used. |  | 410847 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The SXA Azure extensions for GeoSpatial queries have been ported back to the platform so the every Sitecore customer can benefit from them.​​ | 325329 | 390744 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The `Restrictive` cookie warning setting does not restrict access to the page content​.​​ |  | 327035 |
 | ​​​When you move the slider in a Slider or Range Slider, it issues search requests and creates unwanted server traffic. |  | 247977 |
 | If a visitor tries to scroll on a carousel component on a mobile device, the page cannot scroll vertically.​​ | 526020 | 312889 |
 | If `Expand On Hover` is enabled, you cannot click to collapse an Accordion section.​​ | 526194 | 313533 |
 | ​​In the Basic theme​, the `TagList` does not scale the tag elements correctly. |  | 318747 |
 | ​​The thumbnail image for the SXA Gallery Video component does not contain the `alt` attribute. | 528069 | 319611 |
 | ​​​Only the default POI variant can be used on a map. | 528149 | 320751 |
 | When you unlock a content page, the composite datasource subitems remain locked.​​ | 529122, 531509, 537040 | 324927 |
 | ​​If the `Media.AlwaysAppendRevision `setting is set to `true`, theme asset URLs are generated without a hash and this causes `MediaRequestProtection `errors.`````` | 530905, CS0180370 | 328685 |
 | ​​If the name of a facet contains a space, it does not receive the active-facet class when you use a Filter (Checklist) with multiple selections. | 532747, 533232, 537276, 542335, CS0170369, CS0173958, CS0179707, CS0182401 | 334311 |
 | ​​A multi-language sitemap contains redundant language entries. | 533334, 534193, 537473, 538300, 539766 | 335397 |
 | ​​If you use the default link provider, the sitemap lists URL that contain a double hostname. | 532088, 536328 | 337372 |
 | ​​Publishing only clears the HTML cache for the first site definition if multiple site definitions exist in a site. | 536094, 543415, CS0177798 | 346899 |
 | ​​If you add the POI details from the `Geospatial` tab, unsaved data is lost. | 537926, 539448 | 351468 |
 | If you remove a column splitter from a placeholder and then add and configure a new column splitter, you receive an error message.​​ | 537150 | 352447 |
 | The `ResolveRenderingDatasourceCache` processor does not take the request language into consideration when retrieving a data source.​​ | 538461 | 353548 |
 | ​​The `Language Selector` dropdown list does not appear in themes that are based on the `Basic 2` theme​. |  | 354286 |
 | ​​Responsive images are not shown in the `Search Result` rendering. | 538670, 541429, 541530 | 354543 |
 | If you use the Solr search provider, the suggestions that appear in the Search Box may not be clickable if the indexed text contains special characters.​​ | 538663 | 354683 |
 | ​​Generating the `Optimized-min` item can cause SQL Server errors in scaled environments with a high load. | 537204 | 355141 |
 | ​​In the `Presentation Details` dialog box, ​if you add a component, the list of available renderings that you can select from is not filtered accordingly.​ |  | 355825 |
 | ​​If you use `Page Layout as JSON` component, the `Could not find method: Process` error appears for a page with the JSON layout. | 539143 | 355892 |
 | ​​An SXA datasource selection dialog overrides the default dialog for non-SXA sites without exposing the full functionality required to complete the task. | 539268, 540792 | 355958 |
 | A facet filter will not display the `Show more` link when the configured threshold is higher than or equal to the number of available options.​​​ |  | 359693 |
 | ​​If the database is not specified in the site definition item​​​, pages will not load. |  | 359755 |
 | Depending on the page structure, the `Search Results` overlay can cover the content of the entire page rather than being limited to the `Search Results` component.​​​ |  | 359763 |
 | ​​If a checklist filter is added to a page, Creative Exchange creates facet classes. |  | 360198 |
 | Performance is degraded due to unnecessary per-request regular expression instantiation.​​ |  | 360478 |
 | ​​The `SXA Json Result` component does not respect configured SXA Indexes. | 540785 | 360691 |
 | The `Content Token` feature relies on fast queries that place a high load on SQL Server.​​ | 540893, CS0183392 | 360996 |
 | ​​The logging mechanism exposes credentials in the Creative Exchange Live CLI​. |  | 361067 |
 | ​​The `Snippet` component does not work correctly with personalization. | 541281 | 362002 |
 | If you add a composite component in Horizon, an error is thrown. ​​ |  | 362517 |
 | If you use the Solr search provider, facet filtering does not work if the facet value contains a space character.​​ | CS0170369, CS0173958, CS0182401 | 362577 |
 | ​​The `Select the Placeholder Settings` dialog​ box does not contain any caching options. |  | 363467 |
 | ​​If you save item that references itself as a data source, a StackOverflow exception is thrown. | 541543 | 363683 |
 | An accordion item cannot be expanded in `Edit` mode in Firefox.​​ |  | 363698 |
 | ​​The rendering parameters are empty in components in non-SXA sites when SXA is installed. | 540151 | 363994 |
 | ​​In the Experience Editor, you cannot switch between `Shared` and `Final` layouts on non-SXA pages when the `Caching.DisableCacheSizeLimits` setting is set to `true`. | 540863 | 366025 |
 | ​​The `General Link with Search` field produces an error if its source contains an SXA token. | 542597 | 366905 |
 | In the Experience Editor, if you click `Publish`, `Site Themes`, the `Publish Item `wizard does not open.​​`````` | 542289, CS0169161 | 367283 |
 | In SXA Storefront, you cannot remove facet filter values after a search operation has been performed.​​ |  | 368445 |
 | If a regular Sitecore `query:` is used on a data source for an SXA component, content search should not be triggered.​​ | 542030 | 368851 |
 | On SXA sites, the rendering parameters in custom components are empty.​​ | 540151 | 368987 |
 | ​​A responsive image that is nested in multiple sections does not render the `src` attribute. | 543089, 543152, CS0169946, CS0176478, CS0178218, CS0180226 | 369204 |
 | When you update the rendering variants on a shared site in a non-English version, the content on the page on the non-shared site that uses the same variant does not change.​​ | 543270, CS0170055 | 369628 |
 | If the default personalization rule is set to `Hide`, you cannot select a rendering on a page.​​ | 542831, CS0169662 | 370056 |
 | ​​If you duplicate a multilingual item that has clones or add another language version, multiple items are created. | 543265 | 370654 |
 | An accordion section cannot be collapsed in Edit mode after you click the `Open the item for editing` button.​​ |  | 370765 |
 | Buckets created within SXA sites do not adhere to the global bucket rules.​​ | CS0169464 | 371091 |
 | Composite datasource subitems in different language remain locked when the content page is unlocked.​​ | CS0168926 | 371166 |
 | If you clone a site, the item references in versioned fields are not updated for languages other than `en`.​​ | CS0170375 | 371168 |
 | The Experience Editor does not show the variant preview for SXA renderings if you enable the `SelectVariation` processor in the `Sitecore.ContentTesting.Mvc.config` file on a CM server.​​ | CS0169216 | 371515 |
 | ​​If you add an HTML snippet to a page and do not publish its data source, the page page throws an error when you try to view it. | CS0170298 | 373034 |
 | ​​Unexpected ANSI characters appear in a rendered on a page when you use `Add This component`. | CS0174850 | 373588 |
 | SXA `query:` data sources are not fully handled by SXA in the `parseDataSource` pipeline and this causes the platform to misinterpreting them as content search queries.​​ | CS0168943 | 373937 |
 | ​The `Target Hostname` is used to request the static error page. It should be used only to generate links on the page. ​​ | CS0170303 | 374131 |
 | If you use SXA redirects, the language is stripped from the URL.​​ | CS0175013 | 374202 |
 | ​​Creative Exchange throws an exception during Export/Import if the exported page contains a `Splitter` rendering​. |  | 374429 |
 | A race condition in the `SxaSiteProvider` can throw an error.​​ |  | 374769 |
 | If you duplicate a multilingual item without an English version, the item is not created in the delegated area.​​ | CS0169861 | 375519 |
 | ​​If you clone an item, the clone is not created with all the same language versions as the original item​. |  | 375964 |
 | If you use a snippet data source as a template that should be copied when used, the grid settings for embedded components are not correctly applied.​​ | CS0175096 | 376681 |
 | ​​An `AmbiguousMatchException` can be thrown when searching SXA on indexes. | CS0168956 | 377565 |
 | ​​If the `HTML Cache` content is cleared for a site for the `master` database before the `web` database, the visitor's cache is not purged. | CS0174442, CS0177798 | 378032 |
 | ​​The `Html tags` of a rendering variant are not rendered as self-closing tags. | CS0176121 | 378983 |
 | If a URL contains double quotes, an `Illegal characters in path` exception is thrown.​​ | CS0175687, CS0175687 | 379395 |
 | ​​If you use a component rendering variant with snippets, the presentation details are cleared. | CS0176055 | 380154 |
 | ​​A form created with Sitecore Forms cannot be submitted from an SXA overlay. | CS0175936 | 380732 |
 | ​​If the snippet grid control properties are empty, they are not copied. | CS0175096 | 381181 |
 | `DateTime field` are rendered incorrectly in components that are embedded in composite components.​​ | CS0177735 | 384879 |
 | ​​A Scriban rendering variant field does not wrap the template content in a tag field if it is defined. | CS0178207 | 385842 |
 | If an item contains a component with a data source that is defined as a query, publishing the item with its related items will fail.​​ | CS0178105 | 387129 |
 | The Creative Exchange Scriban watcher freezes if you try to upload an empty `.scriban` file.​​ |  | 387695 |
 | A JSS app hosted within an SXA tenant shows the `Wireframe` theme mock image instead of the original image.​​ | CS0177912 | 387966 |
 | If the `Show the Personalization Section` application option is enabled, If you click the `Edit style and behavior of the component` button, it produces a `NullReferenceException`.​​ | CS0178361 | 388700 |
 | When a `Flip` control without any `Flipside` subitems is rendered, an exception occurs.​​ | CS0178997 | 390024 |
 | ​​​The SXA Media component is hard-coded to use the http protocol and this prevents images from loading over https from YouTube. | CS0179302 | 390163 |
 | ​​An `Accordion` component does not expand correctly if it is embedded within another accordion. | CS0178126 | 390812 |
 | ​​The size calculation logic of JSON renderings is not correct and this causes a memory leak when they are stored in the HTML cache. | CS0179059 | 390898 |
 | Applying translations or importing content for a JSS item can fail for languages other than `en`.​​ | CS0179257 | 391288 |
 | ​​The Scriban template sc_placeholder function does not render the placeholder as an SXA dynamic placeholder. | CS0179521 | 391747 |
 | ​​A request to the `Sitemap.xml` page sometimes results in a 404 HTTP error after application restart. | CS0174956 | 393910 |
 | ​​If you personalize a composite component, the original data source is always shown. | CS0180170 | 393992 |
 | Autocomplete does not work for the `Location Finder` component in an overlay. ​​ | CS0179584 | 394303 |
 | ​​An incorrect URL is rendered in the `OpenGraph og:url` meta tag when the `TargetHostName` is set. | CS0181130 | 395328 |
 | ​​The SearchService switches context to the `shell` site and this can result in incorrect search operations in a scaled environment. |  | 395907 |
 | A tag search returns no results if there is more than one space in the tag name.​​ | CS0180747 | 397090 |
 | Unversionable media items are uploaded in the current site language and not in the current item language.​​ | CS0181207 | 397673 |
 | ​​If a query contains a large number of characters there is a long response time. | CS0181367 | 397871 |
 | In the Experience Editor when you use Internet Explorer 11, you cannot change personalization conditions before saving the item.​​ | CS0181713 | 398923 |
 | The patch for the event handler for the `publish:end` and `publish:end:remote` event refers to an old platform handler and this can cause the processors to execute in the wrong order.​​ | CS0182090 | 399584 |
 | ​​Search rule boosting does not work for certain condition parameters. | CS0181247 | 400929 |
 | Rendering Variant tokens are not resolved properly in the variant field's data attributes.​​ | CS0181851 | 401296 |
 | If a page contains multiple `Search Results` components and one of these components exhausts the available results, the `Load More `button disappears.​​`` | CS0184033 | 405817 |
 | Model iterator notation does not work in the data attributes of a variant field. ​​ | CS0182218 | 401400 |
 | If a facet value contains ampersands or commas, it breaks the filtering in `Filter (Checklist)` and `Aggregated Facet Filter`.​​ | CS0181191 | 401465 |
 | ​​A carousel can render an empty `field-slidetext` tag​. | CS0182116 | 401795 |
 | ​​​The `getRootSourceItems` pipeline processor returns the site's virtual folder and not the Media Library hosted folders. |  | 402015 |
 | If the root of the Media Library has been added to a virtual media folder of the site that is being edited, the `Open Media` dialog causes an error.​​ |  | 402343 |
 | If personalization is applied with a mix of local and site/global data sources, SXA personalization is not applied and a Solr error is logged.​​ | CS0182062 | 402415 |
 | If you duplicate an item with a child that is a master for a Delegated Area, multiple child items are created in the Delegated Area.​​ | CS0182611 | 403775 |
 | ​​If `Read` access to the Home item is denied to anonymous users, the `Page not found` error page may not be available to them. | CS0182364 | 404072 |
 | If you enter a white-space in an accordion headline, it causes the focus to escape from the field.​​ | CS0183302 | 404970 |
 | ​​Cached content tokens do not take the language version into account.​ | CS0183392 | 406854 |
 | ​​The media folder validator interferes with the installation of SPE packages when SXA sites are already created on a Sitecore instance. |  | 407143 |
 | ​​The predicted text in a search box changes to the typed text if you move the focus from the search box to any part of the page. | CS0183884 | 405500 |
 | Content Tagging requires the new `OpenCalais` provider URL​​. |  | 420924 |
 | A new init command has been added to the CLI that creates the files required by Creative Exchange Live in a theme that didn't have them already.​​​ |  | 403658 |
 | ​​In the Search box, the predictive text changes to the typed text when you move the focus from the Search box to any other part of the page. | CS0183884 | 405500 |
 | ​​The `getAttributeTokenValue` pipeline does not support `Number` fields​. | CS0183306 | 405564 |
 | A `Move item` operation that is performed in a `Delegated Area` is not reflected in its target.​​ |  | 407101 |
 | ​​If a page contains multiple `File List` components, the pagination for the `File List` components is empty. | CS0181350 | 407445 |
 | ​​If you duplicate a page that contains a component, it creates versions in every available languages. | CS0184356 | 407685 |
 | ​​The `Edit the placeholder settings `dialog does not show the renderings that are assigned to the placeholder.`` |  | 408518 |
 | If you add a Test variation to a composite component​, a `NullReferenceException` occurs.​​ |  | 408717 |
 | ​​If a custom processor modifies a newly created item in the `item:created` event, an exception occurs in an SXA processor. | CS0184998 | 409554 |
 | ​​In a JSS SXA site, the `JSS Dictionary` is not based on the `Dictionary Domain` template. | CS0184250 | 409778 |
 | The `JSS Dictionary Domain` is referenced by name rather than by its GUID​.​​ | CS0184250 | 409779 |
 | ​​JSS Dictionary translation does not work. | CS0184250 | 409780 |
 | A link that is wrapped around a Rendering Variant​ Image has an incorrect URL if the Image is under a section.​​ | CS0185108 | 410171 |
 | ​​If you use personalization rules on partial designs, a `NullReferenceException` occurs. | CS0183779 | 410869 |
 | ​In the Content Editor, ​if you preview a page, it redirects you to the desktop. | CS0183856, CS0191868, CS0197029, CS0200232, CS0215861, CS0183447, CS0180395 | 355817 |
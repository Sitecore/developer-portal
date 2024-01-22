---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1010/Release_Notes
---

**February 2021 – released Sitecore Experience Accelerator 10.1.0**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## Highlights

-   You can now edit the component size and grid parameters in the Horizon RHS panel.
-   You can now edit the component size and breakpoint properties in the Horizon RHS panel when you select a component.
-   You can now edit the relevant component parameters in the Horizon RHS panel.
-   You can now use a range of controls to edit component styles in the Horizon RHS panel.
-   You can now edit the `Dropdown/Selector` rendering parameter fields in the Horizon RHS panel.
-   You can now edit the `Checkbox` rendering parameter fields in the Horizon RHS panel.
-   You can now leverage the automated selection and creation of data sources for SXA components in Horizon.
-   The icons for OOTB components have been refreshed.
-   You can now configure a component so that it's placement on a page will also result in the inclusion of an additional theme.
-   You can now add page branches to sites and create pre-assembled pages that can be modified by an editor.
-   HTML includes allow you to add HTML snippets into the page code when the theme that contains the HTML include is used on a page.
-   The `SXA Placeholder Settings` system folders are now based on the `Placeholder Settings Folder` data template.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | You can edit the component size and grid parameters in the Horizon RHS panel. |  | 410984 |
 | You can edit the component size and breakpoint properties in the Horizon RHS panel when you select a component. |  | 410990 |
 | You can edit the component parameters in the Horizon RHS panel. |  | 411005 |
 | You can use a range of controls to edit component styles in the Horizon RHS panel. |  | 411009 |
 | You can edit the `Dropdown/Selector` rendering parameter fields in the Horizon RHS panel. |  | 413799 |
 | You can edit the `Checkbox` rendering parameter fields in the Horizon RHS panel. |  | 413803 |
 | You can now leverage the automated selection and creation of data sources for SXA components in Horizon. |  | 413822 |
 | The Icons for OOTB components have been refreshed. |  | 421518 |
 | ​​​You can now configure a component so that it's placement on a page will also result in the inclusion of an additional theme. |  | 428381 |
 | You can now add page branches to sites and create pre-assembled pages that can be modified by an editor. |  | 431855 |
 | ​​​HTML includes allow you to add HTML snippets into the page code when the theme that contains the HTML include is used on a page. |  | 435091 |
 | The `SXA Placeholder Settings` system folders are now based on the `Placeholder Settings Folder` data template. | CS0183879 | 405106 |
 | The `XA.cookies` API has been extended with the ability to control the `SameSite` cookie attribute. | CS0183766 | 405339 |
 | ​​​`Port`, `scheme`, and a number of other site properties have been added to the site definition item. |  | 410937 |
 | ES6+ support has been added for Creative Exchange Live tasks. |  | 415667 |
 | The `jQuery` and some other JS libraries have been updated. | CS0187305 | 416115 |
 | ​​​Search service parameters are now passed to the `processSearchItems` pipeline as an additional QueryModel property. |  | 416536 |
 | The `Galleria` library has been updated. |  | 422396 |
 | ​​​Creative Exchange now informs the user when a page fails to render during the export process. |  | 423698 |
 | The redirect item now supports anchors. |  | 428326 |
 | The `GenerateAssetLinks` hash key now contains different values for different languages. |  | 428706 |
 | ​​​​The ​​​`media_url` Scriban extension can now retrieve a public link for a file that is stored in Content Hub. |  | 430429 |
 | The `LINQ to Twitter` library now supports long tweets. | CS0197445 | 443990 |
 | Only rendering parameters with the editor implementation are shown in the RHS panel in Horizon. |  | 447823 |

## Deprecated

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​The `Livefyre` component that was previously marked as obsolete has now been completely removed from SXA. |  | 438216 |
 | The `Field Editor` component has been deprecated and is no longer added to newly created sites. The component will be completely removed in a future release. |  | 441676 |
 | The `Flash` component has been deprecated and is no longer added to newly created sites. The component will be completely removed in a future release.​​​ |  | 444954 |
 | SXA no longer uses fast query as is has been deprecated. |  | 446125 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The `Create a tenant` and `Create a site` dialogs do not indicate that the process has completed. |  | 247276 |
 | ​​​The sitemap does not work when the `enforceVersionPresence` attribute is set to `true` in the configuration files. | CS0156151, CS0195318 | 321854 |
 | You cannot perform on page editing for nested composites. |  | 323386 |
 | ​​​Redirect maps do not work correctly when `languageEmbedding` is enabled. | CS0156473, CS0188345 | 328488 |
 | The `Gallery` component does not work with Content Hub. |  | 349290 |
 | ​​​A race condition can occur during server startup that causes SXA sites to not be loaded to the SiteCollection. |  | 363427 |
 | ​​​When you use the Workbox, a `Method WorkflowCompleteStateItemCount not found` error cn occur. | CS0180277, CS0182605, CS0184180 | 399036 |
 | A carousel without any slides displays errors in the browser console. |  | 407650 |
 | ​​​If you are redirected to a page without a layout and if `RequestErrors.UseServerSideRedirect` is enabled, an `InvalidOperationException` can occur. | CS0185551, CS0189650 | 410213 |
 | If a partial design is included multiple times through inheritance, renderings are also included multiple times. |  | 413773 |
 | In Google Maps, if you only specify a single POI, the initial zoom level is not applied.​​​ | CS0185324, CS0192055 | 414166 |
 | ​​​In the Experience Editor, non-SXA sites can be resolved incorrectly​. | CS0186908 | 415282 |
 | A `Tabs` rendering can "steal" the focus from the other renderings on the page. | CS0186645, CS0193703 | 415007 |
 | ​​​In the Experience Editor, if you try to select an image, it does not respect its component-configured source. | CS0186267 | 416154 |
 | Spaces in links are replaced with `plus` characters. | CS0187279 | 416301 |
 | ​​​The `Image` component is rendered as empty if you remove a data source. |  | 416453 |
 | ​​​If there is no `Forms` folder, the `Setup Security` script fails​. | CS0186513 | 416609 |
 | If there are notifications in the Experience Editor, the expander on the SXA toolbox disappears. | CS0187396 | 417318 |
 | ​​​In the Experience Editor, if the user does not have access to the English language, the `Select media` dialog displays no results. ​ | CS0186321 | 417364 |
 | If you publish a partial design that contains an `Accordion` component, it does not clear the cache on the CD server. | CS0184303 | 417520 |
 | ​​​If you install a Sitecore package that triggers the `item:moving` event, the `Virtual Media Folder Validator` can throw a `NullReferenceException`. | CS0187981, CS0196761 | 418783 |
 | ​​​If you make a clone of a cloned item, for which the original item has been deleted, an error occurs. |  | 419613 |
 | ​​​If you unlock a page, it does not unlock the datasource item that belongs to the page partial design. | CS0186126 | 420715 |
 | If you use Creative Exchange Live, the timestamp for a `pre-optimized-min` file is not changed if you change the content of the file. | CS0194532 | 420759 |
 | ​​​Scriban variants that are nested under a section in a variant definition cannot use the `o_geospatial` object. | CS0189047 | 421111 |
 | ​​​In the Japanese translation, in the `Sort Order` field, the default value is incorrect. | CS0187853 | 421424 |
 | ​​​If you preview an item that is not in the root path, it throws a null reference exception. | CS0189401 | 421843 |
 | You cannot install a module by selecting the `Site Setup` item for that module and then in the context menu, clicking `Scripts`, `Install Site Module`. | CS0190056 | 422157 |
 | ​​​If the `Associated Content` for a site is set to another site and you choose a page from this site in the Search results, you are redirected to the `not found` page. |  | 422470 |
 | ​​​If the Sitecore instance is behind an Azure CDN, the URL of Gallery images is not properly constructed​. | CS0189882 | 422509 |
 | ​​​If a custom page template is under the SXA `Page` template, some modules do not contain the list of available modules​. | CS0188912 | 423470 |
 | If there is a heavy load, a race condition occurs for Scriban based rendering variants. |  | 423630 |
 | ​​​If you deselect some areas in the `Create module` dialog, it can cause the script to stop running. |  | 423979 |
 | ​​​Redirect maps do not work correctly when `languageEmbedding` is enabled. | CS0188345 | 424148 |
 | If you use Azure search and no results are returned, the `Checklist Filter` is not cleared.​​​ | CS0190205 | 424203 |
 | If a shared Page Design is used on another site, some additional wrappers are rendered​. | CS0190081, CS0193291 | 424314 |
 | ​​​Linkable sites can appear twice in the `Select link` dialog. | CS0190185 | 424442 |
 | ​​​The signature of a partial design from shared sites is included in the `Bootstrap 4` placeholder wrapper. | CS0190363 | 425148 |
 | ​​​A user can edit the content of a `Page Size` component on the page when it is added to a partial design. |  | 425511 |
 | In the Experience toolbar, you cannot change the rendering variant of a page until the page is saved. | CS0191080 | 425741 |
 | ​​​The `Create JSS tenant` dialog does not indicate that the process has ended. |  | 426677 |
 | ​​​If you preview an item from the Content Editor, SXA only resolves the sites by their hostname​. | CS0189321 | 430538 |
 | ​​​If the `Sitecore.Publishing.Service.ContentAvailability.config` file is enabled, SXA interferes with the list import process in List Manager​. | CS0191833 | 431178 |
 | If you edit a composite component on a website and the `Enable Web Edit` setting is set to `false`, the `Failed to load resource: the server responded with a status of 401` error is displayed.​ | CS0190314 | 428783 |
 | ​​​If you remove a slide from a carousel and republish it, the cache is not cleared correctly​. | CS0186197, CS0193283 | 431853 |
 | ​​​If you add a custom module to a site, the `The item name "" is already defined on this level` exception occurs​. | CS0193154, CS0193940 | 432170 |
 | ​​​If a scriban template is changed, the cache is not cleared for all languages. | CS0193070 | 432279 |
 | A page does not inherit placeholder settings defined in a Snippet. | CS0193557 | 432703 |
 | The SXA `Search Box` component suggestions pull excessive data from the Azure Index.​​​ | CS0189465 | 431295 |
 | Parallel publishing of a site can throw an exception. | CS0193714 | 435136 |
 | The `Navigatio` component retrieves more items than necessary while rendering and this degrades performance.​​​ |  | 432329 |
 | Parallel publishing of a site can throw an exception. | CS0193714 | 435136 |
 | ​​​When retrieving optimized links in the Asset optimizer, performance is not optimal. |  | 436712 |
 | On a JSS site, the standard values of rendering parameters are not returned by the Layout Service. | CS0194308 | 436915 |
 | When you open the Experience Profile in a Sitecore instance with SXA installed, it causes a server error.​​​ |  | 436943 |
 | The `Carousel` component causes a console error in the browser when a carousel is not present on the page. | CS0195048 | 437580 |
 | If you remove a shared site from a tenant, broken links are left on the tenant item.​​​ |  | 439839 |
 | The `GetPageStructurePlaceholderChromeData` and `GetSplittersPlaceholderButtons` processors make excessive calls to `Sitecore.Data.Items.ItemVisualization.GetRenderings(...)`. | CS0193146 | 437336 |
 | ​​​The SXA search box and filter does no​t work with the Japanese & Chinese languages. | CS0194647 | 438827 |
 | If you use a keyboard, you can only ​focus only on the first tab of the accordion. |  | 440144 |
 | ​​​If you edit an RTE field that contains a link to an overlay pop-up, the overlay pop-up does not work. ​ |  | 440310 |
 | When you start a Sitecore instance a race condition can occur in the code that handles dynamic placeholders. | CS0189511 | 439063 |
 | ​​​An XSS vulnerability in the Range Slider component has been fixed. | CS0196472 | 440327 |
 | If you use the `Edit style and behavior of the component` button to edit the parameters of a rendering, the value in the `Image` field of the rendering disappears. | CS0193488 | 441864 |
 | ​​​The `Select the Associated Content` dialog can be inactive because of the specified datasource template. | CS0197166 | 443043 |
 | The `General Link` dialog displays the content tree in English when you view the Japanese version of the item. | CS0193969 | 441675 |
 | ​​​In the `Gallery` component​, the `Vimeo` preview thumbnail is rendered as an HTTP link instead of an HTTPS link. |  | 444554 |
 | If you create an item in a delegated area under an item that has versions in multiple languages, a `DuplicateItemNameException` is thrown​. | CS0197538 | 443800 |
 | If you click the `Personalization` button on a rendering that is a part of a partial design, a `Post condition failed` error occurs.​​​ | CS0194676 | 436611 |
 | Favicon links include the server URL. | CS0198317 | 444561 |
 | In the `sitemap.xml` file, SXA does not respect the default language of the site​. | CS0195816 | 445369 |
 | An additional invisible Unicode character ​is present in the `Site selector` component. | CS0198978 | 445584 |
 | The SXA `query:` data sources are not properly handled by the `parseDataSource` pipeline​. | CS0197184 | 445626 |
 | The same cached nested composite rendering appears on every page. | CS0197593 | 446792 |
 | If you use `SXA Login` and `MVC Form` renderings on the same page, a `System.Web.Mvc.HttpAntiForgeryException` can occur. ​ | CS0199193​​​ | 447436 |
 | The `sitecore\admin` user is used for JSS Import instead of the expected `sitecore\JssImport`. |  | 435266 |
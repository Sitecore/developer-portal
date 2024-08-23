---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/19/Sitecore_Experience_Accelerator_190/Release_Notes
---

**July 2019 – released Sitecore Experience Accelerator 1.9.0**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) that not only reduce the time required to produce a website, but also improve quality by allowing contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## Highlights

Sitecore Experience accelerator 1.9 includes:

-   You can now add background images to any component.
-   You can now define a rule in the `Sitecore Rules Engine` that assigns a page design to a page when it is rendered.
-   ​​StyleLabs is now integrated with SXA Responsive images and allows you to use StyleLabs transformations to render the most appropriate images for different screen sizes.
-   SXA is now integrated with JSS.
-   ​A Component Wizard has been added to facilitate the creation of custom components assembled from SXA features.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​A new pipeline have been introduced to extend the rendering of search results with injected models.​​ |  | 312358 |
 | When you create a `Tenant` and a `Site`, a matching folder structure is created under the `Forms` root item. | 512325 | 242100 |
 | ​​​The `SXA Razor Views` are now precompiled to improve server warm-up time​. | 521442 | 247369 |
 | SXA check boxes are no longer shown in the Experience Editor if you are editíng a non-SXA site page.​​ |  | 247710 |
 | You can now add background images to any component by adding the `Background Image` data template to your datasource template inheritance list. |  | 247727 |
 | You can now configure `Rendering` variants so that they are available in `Partial Designs` and `Composites`.​​​​ |  | 247754 |
 | The `SXA Site Manager` now contains a button for refreshing the site list.​ |  | 247785 |
 | ​​​​You can now define a rule in the `Sitecore Rules Engine` that assigns a page design to a page when it is rendered. |  | 311081 |
 | ​​StyleLabs is now integrated with SXA Responsive images and allows you to use StyleLabs transformations to render the most appropriate images for different screen sizes. |  | 300489 |
 | In Experience Editor, the SXA component toolbox now allows you to filter the component list by some text​. |  | 289028 |
 | If a media item is not found or if an item layout is not defined​, you can now show a custom error page.​​​ |  | 286695 |
 | The `Pagination` component now uses 1 based indexing rather than 0 based indexing and this gives more user-friendly URLs.​​ | 517256, 518345, 524256, 530520 | 257567 |
 | You can now use the `Sitemap Index` and the `Structure Sitemap` simultaneously on a single site​. | 516115 | 257372 |
 | The `Image` component no longer renders a link around an image if the link was not specified in the data source.​​​ | 516127 | 255497 |
 | SXA is now integrated with JSS and you can create tenants and sites that can be consumed by JSS​. |  | 252753 |
 | ​​​ECMAScript 6 support has been introduced by adding a `Sources` folder to a theme. It can be down-compiled to ECMAScript 5 with the tools that are provided. |  | 250859 |
 | ​​Canonical URL meta rendering has been added that allows you to add canonical URLs for pages that can appear on multiple sites. |  | 250729 |
 | ​A `Component Wizard` has been added to facilitate the creation of custom components assembled from SXA features. |  | 247849 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | In the `robots.txt` file, `Allow` and `Disallow` entries are not updated correctly based on user input. ​​ | 517065, 517907 | 257288 |
 | The `Link List` renders an empty tag when the `Title` field is empty​. | CS0158095, CS0168099, CS0164922 | 328501, 349511 |
 | The `Illegal recursion detected: GetModel` message may appear after a server is restart​​ed. | 519978, 512321, 521645, 523168, 526210, 526213, 529755 | 247244 |
 | If the `Enable Preview` setting disabled on a website, the website does not appear on a content delivery server.​​​ | 518435 | 287750 |
 | In the `Wireframe` theme​ on `Bootstrap 4`, if you place rich text in a nested placeholder, it is aligned incorrectly. |  | 290172 |
 | ​​​If the `Asset Optimizer` is disabled and the current theme contains over 100 CSS files, only some of the theme CSS file links are rendered on a page. |  | 291496 |
 | SXA does not respect the `RequestErrors.UseServerSideRedirect` setting in the `Sitecore.config` file.​​ | 518917 | 292799 |
 | In a paused YouTube video, if you click the `Share` icon, the video resumes playback. | 520375 | 296541 |
 | The `Publishing Service` does not publish in SXA. | ​​517665, 519554, 524074, 524313 | 286762 |
 | Data sources that are set in the `Final Renderings` field of composite sections are rendered incorrectly.​​​ | 515779 | 296704 |
 | ​​An invalid email address causes content ​to be displayed rather than the validation message. | 520025, 527928 | 296726 |
 | Sitecore forms cannot be embedded in SXA overlays. | 520188, 525335 | 296772 |
 | If the `Maps` theme is not added to the inheritance structure of the site theme, a JavaScript error is displayed for the SXA search components.​​​ | 520151 | 297240 |
 | If you add `local promo` renderings to the `main` placeholder, the `Field control has failed to render: Guid should contain 32 digits...` exception is displayed. | 520474, 521822 | 297944 |
 | If the search phrase contains an ampersand character, the search box does not work.​​​ | 521209 | 299324 |
 | ​​`Creative Exchange` exports HTML with optimized rather than expanded CSS and JS. | 522375, 522410, 522511, 523269, 528468 | 301730 |
 | SXA data source tokens don't work with the `Component` variant renderer. | 522622 | 302117 |
 | ​​​The SXA taxonomy `TagTokenBase.BuildModel()` method uses the tag name instead of the configured field value. | 522846 | 303709 |
 | ​​SXA search results use the default link provider rather than the SXA link provider. | 522596 | 304251 |
 | `SxaItemCrawler` does not remove deleted documents from the `sitecore_sxa_web_index` during publishing operations. | 521125, 522988, 523114, 527263, 528197, 529819 | 304700 |
 | ​​​If `Show predictions` is selected in the `Search Box` properties, a `NullReferenceException` is thrown. | 525769 | 305143 |
 | When you use `Azure Search`, the `Facet` service fails if there are more than 50 items in the result. | 522975, 528274 | 305246 |
 | ​​​The name of the `XA.Foundation.Search.SolrCloud.SwitchOnRebuild` configuration file does not match the content of the file. | 523360 | 305546 |
 | ​​The `SXA Creative Exchange Protected Theme` checkbox may not work if folder names at the same level are substrings of each other. | 522923 | 305902 |
 | The `Responsive image` variant component creates invalid HTML markup that contains an additional `</img>` tag. | 523342 | 306103 |
 | Users are unable to edit multiple snippets on a page.​​​ | 523372 | 306223 |
 | ​​The Carousel shows an error if you change the rendering variant of the embedded Page Content rendering. | 532519 | 306382 |
 | The `$sharedSites` token does not show the correct root location for the `DropTree` field. | 523445 | 306406 |
 | If two composites of the same type are placed on a page, changing the data source in the composite rendering causes the embedded renderings to disappear.​​​ | 524802 | 309589 |
 | If an `SXAContent` computed index field contains aggregated page content, it creates an unnecessary performance overhead. |  | 309722 |
 | ​​​Bing map does not work on a website that is configured to use the HTTPS protocol because of a Mixed Content error. | 525268 | 309922 |
 | ​​Creative Exchange export operations are interrupted if links contain invalid `Href` attributes. | 524464 | 309955 |
 | The performance of the `Page rendering` process is poor due to excessive calls to the `Template Engine`. | 521442 | 310071 |
 | ​​​The performance of the `Page rendering` process is poor because the `Asset Links Generator` makes excessive use of the `assetService` pipeline. | 521442 | 310089 |
 | ​​If you enter a question mark in the value of the `Data attributes` for a rendering variant, it breaks the HTML markup. | 825403 | 311853 |
 | If the name of a site contains a dash, rendering variants with query elements that are used in a `Partial Design` fail to render data. |  | 312574 |
 | ​​​Trying to add composite data source sub-items produces a dialog with the incorrect tree item selected. | 525618 | 313329 |
 | The data source of a snippet disappears when you add the snippet to the 10th dynamic placeholder. | 525812 | 315409 |
 | The enumeration of the `Link Wrapper Options` field is empty.​​​ | 529336, 530386 | 326111 |
 | ​​If a page has an empty `__Renderings` field, the upgrade script fails. | 528248 | 324153 |
 | When you export a site through Creative Exchange, language names are incorrectly cut from the URLs. | 528470 | 323170 |
 | ​​​Nested snippets do not have the correct data source value when the parent snippet is automatically copied using the `data source behaviour` functionality. | 526502 | 318089 |
 | If you install SXA, the `Content Testing` functionality cannot be disabled.​​ | 524776, 526398 | 316998 |
 | If you define a rendering variant field and use it on a mobile device, an infinite recursion can occur when the page is loaded. | 526602, 537373, 536173, 534593, 532436, 530186, 527534 | 315324 |
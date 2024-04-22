---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/17/Sitecore_Experience_Accelerator_17_Initial_Release/Release_Notes
---

**April 2018 – released Sitecore Experience Accelerator 1.7 (rev. 180410)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​The new `Generic HTML` meta component allows you to add arbitrary HTML to a page. |  | 11140 |
 | ​Dynamic Placeholder enabled components now have a default placeholder settings item to fall back on if a specific item was not created. |  | 11800 |
 | Generic links to media items can now be used to render images on the page using the new `Responsive Image` rendering variant field renderer. |  | 11137 |
 | ​The component editing logic has been removed from the JavaScript for the site theme and introduced as a separate Base editing theme. |  | 11684 |
 | You can now use model properties to render HTML as the content of rendering variant tags.​ |  | 11138 |
 | Verbose logging has been added for path replacements in the `Set-NewLinkReference` PowerShell command. | 502191 | 11612 |
 | You can now dynamically boost search results per page based on the rules in the Sitecore rules engine.​ |  | 11134 |
 | ​You can now show previews of rendering variants in the Experience Editor experience toolbar drop-down. |  | 11135 |
 | A container with a specified data source renders the components in its placeholder as if they were placed on the data source item. ​ |  | 10025 |
 | JavaScript is no longer included in the themes created by SXA. A basic theme that contains the scripts is included instead. ​ |  | 11678 |
 | ​A new `Responsive Image` rendering variant field renderer has been added to enable all the components that support rendering variants to serve images of different dimensions based on the device size. |  | 8328 |
 | You can now use out-of-the-box functionality to create a site that is hidden behind a custom login page.​ | 500687 | 11351, 11325 |
 | You can now search for media in the search box component based on the media name and content. | 501020 | 11414 |
 | ​The user experience of the dialog for creating and selecting data sources has been improved.​​ |  | 10451, 11384 |
 | ​A calculated field processor that stores a value in the index depending on whether an item field is empty has been added. |  | 11131 |
 | ​A cloned site will now appear in the content tree automatically without having to refresh the view. |  | 8625 |
 | Pages that contain search components will no longer add any hash parameters until a user interacts with the search component. | 491621 | 9093 |
 | The `Composite` theme now inherits from the `Basic` theme.​ |  | 9337 |
 | You can now define multiple link providers and switch to a custom provider on a site by site basis.​ | 492500 | 9391 |
 | ​The Creative Exchange Gulp watcher now recognizes changes in variant styles and compiles the CSS accordingly. ​ |  | 9423 |
 | The open source JavaScript libraries have been updated to the latest versions. |  | 10177, 11406 |
 | We have changed the nomenclature from `Feature` to `Module` for SXA functionalities enabled in sites and tenants to align with Helix.​ |  | 10498 |
 | ​We have added the `Randomize` sorting option to enable search results to return a set number of randomized results.​ | 498466 | 10778 |
 | Filters now display values based on the language settings of the associated search results component. | 498255 | 10966 |
 | Content is now tagged with the language specific tag name rather than the generic item name.​ | 498255 | 10966 |
 | ​The default rendering variants are now cloned along with the cloned component.​ |  | 10747 |
 | Search query tokens functionality has been introduced together with tokens to allow authors to define context-related searches.​ |  | 11128 |
 | ​You can now defer the first search operation until the page visitor interacts with a search component. |  | 11132 |
 | The `Variant Query` rendering is now able to use content search queries on top of previous Sitecore queries.​ |  | 11136 |
 | The `Placeholder Renderer `rendering variant now has a checkbox that allows the designer to change the context so that the components in the placeholder are rendered as if they were part of the item that contains the rendering variant.`` |  | 10012 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Deleting an original item from the delegated area source does not delete the delegated area clone. |  | 9362 |
 | An SXA item that uses a data source query displays an error in the Content Editor when it is moved outside of the designated context.​ | 500631, 503479, 504259 | 9582 |
 | The `Metadata `renderings do not appear after being dropped on a filled placeholder.`` | 501684 | 9752 |
 | ​The `Overlay size `setting does not affect the overlay page display.`` | 498122 | 9752 |
 | ​SXA can break the `robots.txt` functionality for non-SXA sites on the same Sitecore instance. | 497222 | 10455 |
 | Resolving tokens in `Standard Values` can cause SXA scoped fields to show errors in the Content Editor. | 497454 | 10531 |
 | Redirect item does not work on Sitecore 9.0​.​ | 498540 | 10591 |
 | SXA interferes with the deployment of marketing definitions.​ | 498122 | 10645 |
 | When importing the Creative Exchange package, any existing SXA style that contains a space is regarded as a new style.​ | 497489 | 10660 |
 | `Sitecore.XA.Foundation.Search.Azure.config` breaks the Content Editor and front-end search. | 497525 | 10690 |
 | There are possible conflicts between the type of an incoming field and the EDM type in the Azure search index.​​ | 498122 | 10707 |
 | Some text is incorrectly translated in the Japanese UI. | 497548 | 10721 |
 | ​The `Load More` button can sometimes be displayed, even when the search results do not have any more content to show.​ | 497420 | 10845 |
 | The JSON placeholder name is not unique and this causes the JSON component to disappear.​ | 498660 | 10960 |
 | ​The `Experience Toolbar` gets stuck on the first selected field when you apply a page design to the page but do not select a rendering on the page itself. | 498460 | 10950 |
 | The `active-facet` style is removed from the `Filter(Checklist)` SXA Facet when an additional SXA facet is added on the page. | 498548 | 10878 |
 | ​Creative Exchange export to folder does not work in Sitecore XP 9.0 if it is defined as a relative path. |  | 10946 |
 | Control characters are not escaped correctly in the JSON output.​ | 499050 | 10973 |
 | A `Check List Filter` working with the `Number/Integer` field type, does not display values correctly. | 499073 | 10974 |
 | ​You cannot personalize the `Carousel` component. |  | 11064 |
 | ​The `AssetLinksGenerator` can leak database connections. | 499451 | 11112 |
 | The `Query String` parameter is not rendered in the `Link` field. | 499612, 503121 | 11146 |
 | Content search throws an exception when there is an item that has no version in the default language.​ |  | 11149 |
 | ​A global snippet is used instead of a local copy if the snippet is configured to prompt the user to make a choice. | 499904 | 11152 |
 | The Page and Partial Designs from a shared site might not show up if the shared site and the local sites are in different languages. | 499679 | 11159 |
 | ​Components that contain dynamic placeholders may not work if the display language of the client is Japanese. | 499869, 500779, 501710 | 11239 |
 | ​A snippet in a component that contains a dynamic placeholder from a partial design renders incorrectly. | 501205, 502332 | 11360 |
 | The workflow state of a datasource item is not updated when a page is moved through the workflow.​ | 500922 | 11413 |
 | Navigation renders items that have no versions in the current language even if it is configured to skip empty values.​​ | 501194 | 11445 |
 | Creative Exchange can fail to export and import the SXA Storefront theme. | 503642, 502258 | 11448 |
 | ​The SXA components require additional configuration to function correctly when you use the `Presentation Details` dialog to add them. | 500914 | 11568 |
 | ​Search Filters (Facets) do not take the search scope into consideration when displaying the content count. | 503028 | 11611 |
 | Specifying sorting in the search scope causes an error to occur. | 503634 | 11656 |
 | Date filters should use the UTC date format.​ | 501332 | 11661 |
 | ​The placeholder in some rendering variants is not rendered. |  | 11692 |
 | The `Unterminated identifier` error occurs when you use the `Link` component in a shared site.​ | 502234 | 11756 |
 | In the Experience Editor, the `Associated Content` button does not open the expected dialog.​ | 502990 | 11802 |
 | The NVelocity templates are not releasing memory. | 504706, 521749 | 245881, 243951 |
 | To prevent Sitecore from exceeding the maximum number of fields allowed in the Azure search indexes, unnecessary SXA fields should be excluded. | 498162 | 10506 |
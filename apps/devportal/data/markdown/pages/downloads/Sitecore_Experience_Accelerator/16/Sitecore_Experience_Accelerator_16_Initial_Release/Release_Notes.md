---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/16/Sitecore_Experience_Accelerator_16_Initial_Release/Release_Notes
---

**December 2017 – released Sitecore Experience Accelerator 1.6 (rev. 180103)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | You can now use a wizard from the context menu to add a feature to a site after it is created.​ |  | 10022 |
 | You can now use a wizard from the context menu to add a feature to a tenant after it is created. |  | 10023 |
 | You can now use image, link, and text fields for tag attributes in rendering variants. |  | 10029, 10589 |
 | Rendering variants now support self-closing tags. |  | 10176 |
 | The `C​ookie warning` meta rendering is now called a `Privacy warning`. |  | 10230 |
 | The `Feature` and `Foundation` nodes now have module scaffolding to facilitate the creation of new SXA modules. |  | 10329 |
 | Tenant and site scaffolding input validation script support has been added to allow features to validate selected configurations in the dialog before scaffolding the site or tenant. |  | 10400 |
 | Tenant and site scaffolding post-setup script support has been added to allow features to perform additional actions after you create the site or tenant.​​ |  | 10408 |
 | The `SXA Rendering Copy` wizard lets you create customized versions of existing SXA components​. |  | 8916, 8060 |
 | You can now edit composite renderings directly on the page​. |  | 8060 |
 | The `G​allery` component supports rendering variants. |  | 6916 |
 | Feature authors can now provide theme extensions that extend the themes that are created by scaffolding scripts​. |  | 7080 |
 | Feature authors can provide theme extensions that will be included when you edit a site in `Wireframe` mode​. |  | 7945 |
 | You can extend rendering variant tags with custom data attributes. ​​ | 483832 | 7096 |
 | Rendering variants let you add an editing frame as part of the variant definition. |  | 7674 |
 | Row and column splitters allow you to add and remove placeholders out of order. | 486925 | 7862 |
 | R​ow and column splitters let you change the order of their placeholders​. | 486925 | 7862 |
 | SXA now has a Google Analytics integration meta-rendering. | 488570 | 8332 |
 | You can configure the search box to show Solr predictions rather than a list of results in its drop-down​. | 488567 | 8403 |
 | Rendering variants use a markup that complies with the variant definition to render a field, even when the field is not present. |  | 8409 |
 | The `Row Splitter` markup allows for better adherence to the `Bootstrap` and `Foundation` grid guidelines by adding the appropriate row class. |  | 8856 |
 | The new ​`Splitter` components allow you to define pre-fabricated component groups to a page​. |  | 8905 |
 | You can now open the specific sections for `T​abs`, `Carousel`, and `Accordion` renderings when a page loads. | 491622 | 9008 |
 | You can configure the range slider to show minimum and maximum value​​s. | 491624 | 9106 |
 | The `Page Size` drop-down search rendering can show custom texts as values.​ | 491625 | 9107 |
 | The `Page Selector` component renders an additional class that allows you to hide the component if page selection is not possible. | 491629 | 9108 |
 | Additional styling facilitates the easier selection of multiple elements in the checklist filter.​ | 491632 | 9113 |
 | The Checklist filter component now allows you to search by results count. | 491842 | 9129 |
 | A page can be used as a data source for components inside composites to allow for ​rendering page fields in them​. |  | 9534 |
 | You can define URL language embedding on a per-site basis. |  | 9619 |
 | The `SEO Sitemaps` aggregate all the available sites under a single hostname, and support multiple languages | 494598 | 9788 |
 | Page layout information is cached after merging with partial and composite rendering information.​ | 495528 | 9930 |
 | Data source items can inherit from an additional template. This allows you to copy data source items from the `Global` folder to page data sources when the data source is used. |  | 9984 |
 | Site and placeholders now have component caching, configuration triggering, and support donut caching. |  | 10009 |
 |  |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | There is a duplicated JSON tab in the `Select a Rendering` dialog for JSON device​s. |  | 9557 |
 | ​In the Experience Editor, SXA renders URLs for multisite instances with in​correct host names. | 493282 | 9564 |
 | ​SXA shows ​JSON markup​ instead of HTML markup in the POI details. | 4933514 | 9600 |
 | Composites do not work on mobile devices. | 497874 | 10372 |
 | A user cannot add a new SXA site to a tenant that has an existing SXA site. | 493634 | 9573 |
 | The `AssetBundler​` transforms CSS files incorrectly. This causes an error in the IE 9 browser. | 493971 | 9709 |
 | The `Select Rendering` dialog has duplicate tabs when a user creates a folder that has the same name as a rendering. | 493911 | 9727 |
 | ​You cannot change the file destination that you upload images​ to in the standard Sitecore `Select Media` dialog​. | 490622, 493310, 497544 | 8534 |
 | Personalization does not work for composite rendering​s. | 488514 | 8647, 8459 |
 | Two `Location Finder` components do not work​ on the same page. | 489467 | 8685 |
 | Rendering variants do not work for renderings that are placed inside a composite​. | 495496, 492641 | 9501 |
 | Search filters do not respect the `current language`​ setting of the `Search Results` component. | 494519 | 9532 |
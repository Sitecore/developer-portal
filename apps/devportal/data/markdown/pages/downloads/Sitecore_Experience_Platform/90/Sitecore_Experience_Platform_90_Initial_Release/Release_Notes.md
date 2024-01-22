---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/90/Sitecore_Experience_Platform_90_Initial_Release/Release_Notes
---

**October 2017 – released Sitecore Experience Platform 9.0 Initial Release (rev.171002)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

Sitecore Experience Platform 9.0 includes:

-   Sitecore xConnectTM – the ability to collect and act on any customer behavior from any channel at any time.
-   New Sitecore Forms – completely redesigned UX that strongly focuses on the business user.
-   Marketing Automation – Omni-channel automation with updated engagement plans in a modern UI that is designed to work at scale with specific support for Personalization, Email, and Commerce scenarios.
-   SSC Headless capabilities – Sitecore Services client for full headless scenarios - websites designed using JavaScript and API calls.
-   Federated Authentication – support for external authentication providers.
-   Dynamic Placeholders – the ability to add the same placeholder name several times across multiple renderings or use the same placeholder multiple times in a single rendering.
-   Platform improvements – including upgrade and performance improvements, and a new installer framework.
-   Improved Experience Editor performance.
-   xDB Data Conversion – a tool that supports xDB data conversion.
-   Sitecore Install Framework – a new developer friendly tool for installing Sitecore.

## Documentation

To see all the Sitecore Experience Platform 9.0 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/).

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Configuration | A new configuration approach has been introduced which dramatically improves the configuration of Sitecore server roles and the configuration file structure. |   
 | 96572, 447737 |
 | Device Detection | ​The startup performance of Sitecore has been improved by loading the device database in a background process. |   
 | 147258 |
 | Experience Analytics | ​Experience Analytics has been updated to work with xConnect, increasing Sitecore's reporting options. |   
 |   
 |
 | Experience Analytics | ​Flexible dimensions give Sitecore the ability to record domain specific metrics. The previous approach to dimensions is still available, but will be deprecated in a future version of Sitecore.​ |   
 |   
 |
 | Experience Analytics | ​Experience Analytics now uses the new configuration management system.​ |   
 |   
 |
 | Experience Analytics | ​In a scaled environment, the reducer agent has been moved from the reporting server to the processing server due to dependencies on sub-systems that are no longer available on the reporting server. |   
 |   
 |
 | Experience Analytics | A new drop-down has been introduced that allows you to choose the currently displayed metric. ​ |   
 |   
 |
 | Experience Analytics | The reorganized reports provide a better and more consistent user experience.​ |   
 |   
 |
 | Experience Analytics | ​The updated list control supports the new structure for dimensions. |   
 |   
 |
 | Experience Editor | ​The performance of the Experience Editor has been improved​​ - the number of POST requests has be reduced by using bundling technologies and by using sprites for​​ icons. | 437395, 450445, 456229, 464495, 471251, 472285, 473578, 480570 | 75437, 143009 |
 | Experience Editor | ​The performance of the Experience Editor has been improved​​ - the `My Items` counter now uses indexes and runs faster. | 474848 | 81747 |
 | Experience Editor | When the ribbon is collapsed and a user clicks on a tab, the buttons in the ribbon are shown dynamically. | 476625, 476359 | 80320 |
 | Experience Editor | Now you can insert and edit external hyperlinks in the inline rich text field. | 368902, 383498, 377636, 319254, 309711, 336680, 408623, 339347, 455873 | 49479 |
 | Experience Editor | When you edit a field in the field editor, the content updates and saves automatically. You can configure this feature. | 364695, 391117, 347007, 388738, 350264, 371657, 349468, 366531, 336888, 398505, 439059, 463477, 471879, 483910 | 51523, 59543 |
 | Experience Editor | The placeholder name now appears in the tooltip when you hover over an `Add Here` button. | 452720, 454377, 455496, 489153 | 63900 |
 | Experience Editor | In the `Insert Page` dialog, you can select any folder to create a page. |   
 | 50009 |
 | Experience Editor | ​The usability and performance of the content tree navigation control has been improved. |   
 | 134911 |
 | Experience Editor | ​<br /><br />The Explore mode now works with the new marketing operations and tracking API. The Performance and stability of the Explore mode has been improved.<br /><br />The 'sitecore\Experience Explorer' role​ was removed. Explore mode is now available for users with sitecore\Author and sitecore\Designer ​roles.<br /><br /> |   
 |   
 |
 | Experience Editor | When you click the `Unlock` button, all associated content items and datasources are unlocked with the page item.​​ |   
 | 105847 |
 | Experience Optimization | Experience Optimization has been updated to work with xConnect.​ |   
 |   
 |
 | Experience Profile | ​The Experience Profile has been updated to work with xConnect. |   
 |   
 |
 | Experience Profile | ​A new set of search facets have been introduced. They allow you to filter contacts based on a subset of behavioural data.​ |   
 |   
 |
 | Experience Profile | ​Now displays information about the marketing automation campaigns that a contact is enrolled in. |   
 |   
 |
 | Federated Experience Manager | Federated Experience Manager has been updated to work with xConnect. |   
 |   
 |
 | Federated Experience Manager | ​The performance of FXM has been improved by removing unnecessary requests. |   
 | 151535 |
 | Federated Experience Manager | Now supports multilingual external sites and different content languages. | 447884, 455171, 475056, 481678, 480412 | 73033, 146744, 146737 |
 | Item Buckets Content Search | IDisposable has been implemented in `IndexSearch/Update/DeleteContext/LockScope`.​ |   
 | 91498, 337467 |
 | Item Buckets Content Search | ​The Optimize agent can be run asynchronously. |   
 | 96445, 442799 |
 | Item Buckets Content Search | ​The `Sitecore.ContentSearch.SolrProvider.SolrSearchIndex`​ class is now more customizable.​ |   
 | 95486, 423757 |
 | Item Buckets Content Search | If there is no appropriate IFilter for an extension, a warning is written to the log file. |   
 | 94703, 402930 |
 | IP Geolocation | The IP Geolocation client no longer sends lookup requests for local network IP addresses. | 472136 | 131486 |
 | List Manager | ​List Manager has been updated to work with xConnect. |   
 |   
 |
 | List Manager | ​List Manager has been updated with new segmentation rules, providing a wide variety of combinable audience segmentation capabilities based on demographics and time-specific online behaviors. |   
 | 138863 |
 | List Manager | ​​To accommodate new multiple identifiers and sources on contacts, the import functionality has been extended to allow both identifiers and sources to be mapped when creating or updating contacts. |   
 | 149658 |
 | List Manager | ​To accommodate new multiple identifiers and sources on contacts, the export functionality has been extended to allow both identifiers and sources to be exported from List Manager. |   
 | 149659 |
 | Marketing Automation | The application has an easy-to-use interface, a versatile menu system, and an intuitive canvas that guides the user through the process of building automated campaigns.​ |   
 |   
 |
 | Marketing Automation | The new automation engine is fully integrated into the new xConnect architecture. |   
 |   
 |
 | Marketing Automation | Set simple plan entry conditions based on goal triggers, and configure advanced entry conditions in the Rule Set Editor.​ |   
 |   
 |
 | Marketing Automation | Listener activities evaluate customizable conditions for specified time periods, and decision points give you flexiblity for additional rule-based filtering.​ |   
 |   
 |
 | Marketing Automation | There are an extensive number of conditions available in the Rule Set Editor that you can use to evaluate contacts. You can manage the conditions centrally and they are consistent across Marketing Automation, Experience Analytics and Segmentation.​ |   
 |   
 |
 | Marketing Automation | ​Delay functionality gives you control over the precise timing of marketing actions and lets you schedule actions based on a specified marketing deadlines.​ |   
 |   
 |
 | Marketing Automation | Dynamic Activity Loading enables developers to extend the application and create new actions, listeners and decision points, allowing you to deliver new email activities with the next EXM release.​ |   
 |   
 |
 | Marketing Automation | You can move contacts back to the start of a campaign or into other campaigns to accommodate complex marketing scenarios.​ |   
 |   
 |
 | Marketing Automation | The reporting overlay and fly-outs display where contacts are located in automation campaigns and provide you with historical enrollment counts |   
 |   
 |
 | Marketing Automation | New rules enable personalization based on the contact's enrollment or their specific position within an automation campaign. |   
 |   
 |
 | Marketing Foundation | The new Marketing Automation Engine is a Windows service and Azure WebJob that processes automation plans. |   
 |   
 |
 | Marketing Foundation | ​A new reference data API has been introduced to enable you to collect key/value pair data that you can use to refer to contact experience data and reduce data duplication.​ |   
 |   
 |
 | Marketing Foundation | ​The Marketing Operations API updates include the new Page Event Definition Manager that lets you use the API to manage page events instead of having to create content items. |   
 |   
 |
 | Marketing Foundation | ​The Marketing Operations API updates include the new Profile Definition Manager that lets you use the API to manage behavioral profiles instead of having to create content items. |   
 |   
 |
 | Marketing Foundation | ​The Marketing Operations API updates include the new Contact List Definition Manager that lets you use a centralized API to create contact lists. You can use this in List Manager and other products that use the new API. |   
 |   
 |
 | Marketing Foundation | ​The Marketing Operations API updates include the `IsLiveEvent` property has been added to page events, outcomes, and goal definitions. When enabled, this triggers an automation plan before the end of a web session rather than waiting until the session expires. |   
 |   
 |
 | Marketing Foundation | ​The Marketing Operations API updates include the new Segment Definition Manager lets you use the API to create centralized contact segments. You can use this in List Manager and other products as they consume the new services. |   
 |   
 |
 | Marketing Foundation | ​The Marketing Operations API updates include the `Alias` property that has been added to all definitions. This lets you create a text-based unique identifier. |   
 |   
 |
 | Marketing Foundation | ​The Marketing Operations API updates include the new Automation Plan Definition Manager that lets you create automation plans programatically instead of having to create content items. |   
 |   
 |
 | Marketing Foundation | Rebuilding the reporting data will no longer also rebuild the contact search index.​ |   
 |   
 |
 | Marketing Foundation | The `Interaction aggregation` pipeline and processors now use xConnect. |   
 |   
 |
 | Marketing Foundation | Processing now uses SQL tables for processing pools. |   
 |   
 |
 | Marketing Foundation | The Analytics Web Tracker has been updated to use a contact identifier instead of a contact ID. |   
 |   
 |
 | Marketing Foundation | The Analytics Web Tracker no longer saves contact data at the end of a web session. You must now use the xConnect client API to do this. |   
 |   
 |
 | Marketing Foundation | The Analytics Web Tracker now uses the Marketing Operations API instead of accessing definition items directly in the content tree. |   
 |   
 |
 | Marketing Foundation | The Analytics Web Tracker now supports specifying the facets that are loaded on session start to reduce the amount of data sent across the network. |   
 |   
 |
 | Marketing Foundation | The Analytics Web Tracker no longer adds contact changes or interactions directly to the processing pool. These are now done on the xConnect Collection server. |   
 |   
 |
 | Marketing Foundation | The Analytics Web Tracker no longer updates the Key Behavior Cache. This is now done as an xConnect calculated facet. |   
 |   
 |
 | Marketing Foundation | The Analytics Web Tracker no longer updates the Contact Behavior Profile. This is now done as an xConnect calculated facet. |   
 |   
 |
 | Miscellaneous | Sitecore now supports .Net Framework 4.6.2. |   
 |   
 |
 | Miscellaneous | Archive performance has been improved by adding indexes to the `ArchivedVersions` and `ArchivedFields` tables. |   
 | 141187 |
 | Miscellaneous | System performance has been improved by prefetching _StandardValues. |   
 | 117122 |
 | MVC | Sitecore MVC now supports Dynamic Placeholders that allow you to use the same placeholder key multiple times in the same rendering and across multiple renderings in the same placeholder.​ |   
 | 130999 |
 | Path Analyzer | Path Analyzer has been updated to work with xConnect​. |   
 |   
 |
 | Path Analyzer | You can use the new segmentation definitions in xConnect. Users who have created custom filters will need to update and redeploy them based on the new rules.​ |   
 |   
 |
 | Performance | The performance of `PrefetchCache` has been improved. |   
 |   
 |
 | Platform | ​There is a new API that supports SOLR Spatial Search and Result Grouping. |   
 | 94472, 399029, 94505, 399507 |
 | Platform | There is now support for content database SQL replication. This enables you to move the `EventQueue` and `Properties` tables to individual databases. |   
 | 97831 |
 | Platform | DynamicFields pipeline was removed along with Quick actions feature. |   
 |   
 |
 | Publishing | Referenced media items are not published in the datasource items. |   
 | 95121, 412710 |
 | Security API | Support for OWIN authentication middleware has been added enabling users to log in to Sitecore via standard Microsoft OWIN authentication providers.​ |   
 | 151195 |
 | Sitecore Services Client | A​PI key management that allows developers to have multiple configurations for individual Web APIs. |   
 | 150759 |
 | Sitecore Services Client | Read only OData Content REST service. |   
 | 150740 |
 | Sitecore Services Client | Improved CORS handling for the Sitecore Service Client API controllers. |   
 | 150471 |
 | Solr | This release introduces support for the Solr Managed Schema API. |   
 | 95941 |
 | Solr | An API has been introduced to support Solr Spellcheck, Suggester, Highlight, and MoreLikeThis. |   
 | 94474, 399058 |
 | SPEAK | ​The `DialogWindow` component now has a subtitle. |   
 | 155658 |
 | SPEAK | ​The `DraggableElementList` component has been added, which provides a mechanism that is used by applications with a toolbar and a canvas. |   
 | 129327 |
 | SPEAK | ​A Drag and Drop module that works with the `DraggableElementList` component has been added. |  | 129466 |
 | SPEAK | ​Some predefined pages for Dashboard, List, and Task pages have been added. |  | 129981 |
 | Update Installation Wizard | ​The Update Installation Wizard can now analyze breaking changes. This feature detects code in the customer's solution that is affected by breaking changes in the Sitecore platform. |  |  |

## Breaking changes

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Experience Analytics | ​Experience Analytics now uses the new segmentation definitions provided by xConnect. Users who have created custom filters must update and redeploy them based on the new rules |  |  |
 | Experience Editor | ​The sheerUI ribbon has been removed from the Experience Editor. |  | 155282 |
 | List Manager | List Manager has been updated to use the new segmentation definitions provided by xConnect. Users who have created segmented lists will need to recreate them based on the new rules. |  |  |
 | Miscellaneous | The `httpRequestBegin` pipeline is now triggered during the `OnPostAuthentication` HTTP Module event (was OnBegin). This may impact custom code that is sensitive to HTTP module event timing. |  | 145522 |
 | Experience Editor  | The Explore mode has been refactored. Sitecore.ExperienceExplorer.Business.dll was removed. |  495905 |   |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Configuration | ​Setting up in the `web.config` file causes error in the Content and Experience Editor.​ |  | 175184 |
 | Content Editor | General link with Search doesn't support source-based filtering.​ |  | 94601, 401475 |
 | Content Editor | Items that have publishing restrictions can not be displayed in Preview mode. |  | 92774, 369648 |
 | DataProvider MSSQL | ​You cannot insert a duplicate key in the `dbo.SessionState` object. |  | 96296, 439438 |
 | DataProvider MSSQL | ​The `Sitecore.Data.DataProviders.Retryer` class doesn't support transient errors. |  | 108743 |
 | Experience Analytics | ​Experience Analytics adds data to the segment cache even when the value was retrieved from cache.​ | 522705, 523846 | 306434 |
 | Experience Editor | The Rendering parameters template cannot be edited in the Experience Editor if its fields contain values with double quotes. | 456543, 456974, 457892, 463984, 464965, 467385, 471902, 473714, 473168, 474127, 475550, 475606, 475690, 476130, 476967, 480213, 480209, 483788 | 88222 |
 | Experience Editor | When you open the Experience Editor from the Launchpad, it sometimes fails to resolve sites correctly. | 456630, 457285, 457519, 458198, 458907, 458920, 461205, 464845, 465180, 466035, 466285, 466455, 470093, 470210, 475094, 476814 | 88883 |
 | Experience Editor | ​An invalid value is saved for a rich text field that contains a resized image or a link​. | 459435, 461257, 462268, 464085, 471489, 471488, 478358 | 102239 |
 | Experience Editor | ​An image gets removed from an RTE field when the field loses focus.​ | 463875, 464320, 467811, 468679, 471488, 479091, 484329 | 111572 |
 | Experience Editor | You cannot add a rendering to an MVC placeholder unless you have write permission to the placeholder item. | 447451, 442897, 432267, 429834, 438811, 420138 | 95411 |
 | Experience Editor | If you delete a page that contains a reference to another item, a `Handle not found` error appears. | 471460, 472559, 472644, 473920 | 103751 |
 | Experience Editor | ​​The Experience Editor attempts to validate fields from renderings that have been removed.​ | 436474, 488449, 496507, 498565 | 54721, 437459 |
 | Experience Editor | ​​Item name validation is not performed correctly when the `ItemNameValidation` setting is configured to allow scandinavian characters​​. | 452801, 460237, 465152, 475665 | 79537 |
 | Experience Editor | When a user with the Sitecore Client Users and Sitecore Client Designing​ roles tries to switch tabs in the Experience Editor ribbon​, ​a JS exception appears in the browser console. | 475557, 475730, 470037, 477981 | 139115 |
 | Experience Editor | ​In Internet Explorer, the  <br />tag is saved in a Single-line Text field instead of an empty string. | 455525, 458048, 458290, 459809, 464210, 466680, 475799, 483757 | 84184 |
 | Experience Editor | ​An `HttpRequestValidationException` error occurs in Content Editor and in the Experience Editor when . | 473355, 422718, 450364 | 136227 |
 | Experience Editor | ​The page is not refreshed after you change the workflow state. | 463056 | 127327 |
 | Experience Editor | ​The `MyItems.Count` pipeline doesn't take into account the value of the `WebEdit.ShowNumberOfLockedItemsOnButton` setting. | 447917 | 72917 |
 | Experience Editor | ​The translation of the `Add associated content` text is not shown in the Experience Editor​. | 474223 | 123129 |
 | Experience Editor | In `Shared Layout` mode , Field Validation of versioned fields does not work. | 478183 | 149177 |
 | Experience Editor | ​In the `Control edit` toolbar, the name of the `Usage` button is not translated into different languages.​ | 480828 | 153490 |
 | Experience Editor | ​Security improvements | 474388 | 137878 |
 | Experience Editor | You cannot save an item that has validation rules set on the Renderings field in the Experience Editor​. | 454094, 455993, 471913, 478101, 478279, 478541, 478751, 483313, 483508 | 82226 |
 | Experience Editor | ​The `Edit Final layout` button is disabled on a multisite instance. | 452401, 453021, 454030, 452611, 453370, 462008, 463451, 467979, 467905, 471503, 473523, 477722, 478742, 483354 | 78974 |
 | Experience Editor | ​In a multiline text field, when you press Enter, two lines are added instead of one. | 460336, 466832, 473776, 477259, 484196, 485160 | 103584 |
 | Experience Editor | ​An error occurs when you save an ​​item with a rendering that has an image field as a parameter field​​. | 471913, 478522, 479173, 479349, 480029, 479273, 480942, 480982, 482154, 482412, 482536 | 131168 |
 | Experience Editor | ​​In some multisite configurations, when you click the `Experience Editor` button on the Launchpad, a `Page​ Not Found` error occurs. | 453929, 461019, 461352, 462892, 463332 | 80705 |
 | Experience Editor | ​The Experience Editor hangs when a validation message is too long.​ | 479836 | 150258 |
 | Experience Editor | ​The `Personalization Bar` overlaps related fields. | 457038 | 89035 |
 | Experience Editor | ​The `Date` control does not work correctly in the Experience Editor in a multi-site configuration. | 454251, 461442, 464164, 466825, 468826, 470021, 470580, 472680, 473294, 475687, 480818, 479311, 481086, 485001 | 82260 |
 | Experience Editor | ​Double quotes (") in a link description prevent the page from being saved​. | 456252, 468495, 474811, 482914, 480779, 484829 | 103363 |
 | ​Experience Editor | When template inheritance is used​, the ​Experience Editor breaks the Layout delta. | 477366, 478788 | 144214 |
 | Experience Editor | Searching in the Experience Editor ignores the context language. | 423128, 462962, 478333, 481482 | 95479, 423566 |
 | Experience Editor | ​If you open a page with `SCBeacon.trackEvent` in it, two interactions are created​. | 479212 | 147778 |
 | Experience Editor | ​Pasting texts that contain double quotes into an inline RTE field prevents the page from being saved. | 484292 | 160870 |
 | Experience Editor | ​The value in a Multi-Line Text field gets trimmed when you save it. | 458592, 471695, 470390, 473604, 473776, 479225, 480117, 479672, 482355 | 101295 |
 | Experience Editor | Validates a field in the wrong language version.​ | 468649, 479508, 480424, 481487, 481665, 490098, 491202 | 121983 |
 | Experience Editor | ​Too many redirects occur when you open an item with an MVC layout​. | 469911, 477325, 484275, 483819, 485273, 486260, 488005, 489745 | 126992 |
 | Experience Editor | Does not strip HTML tags for the Single-line text field.​​ | 451162, 455843, 468905, 478812, 484103, 484196, 485131 | 77381 |
 | Experience Editor | ​The media item is not selected in the tree in the Media Link tab of the ​​Insert link​​ dialog​. | 452112, 455351, 463411, 472449, 478460, 487578, 489354 | 78495 |
 | Experience Editor | ​User-related personalization rules are not triggered when a user is simulated via presets in the Explore mode​​. | 462635, 470983, 481509 | 55269 |
 | Experience Editor | The language switcher generates an incorrect URL on multisite configurations. | 441748, 456787, 473387 | 77213 |
 | Experience Editor | Explore mode throws a null reference exception when a page has a personalization rule that contains a contact. | 463598, 470256 | 70639 |
 | Experience Editor | ​The rendering order ​is changed on the non-default device after saving changes in the Page and Experience Editor​s. | 476930, 478111, 489406 | 144386 |
 | Experience Editor | Full presentation details are stored instead of a delta for the Shared Layout​ after you edit. | 452151, 486656 | 78237 |
 | Experience Editor | ​Saving text that contains special characters may lead to text corruption​ in some situations. | 461963 | 107584 |
 | Experience Editor | In some cases, Explore mode causes an exception​ in the Content Editor. | 474576, 486190 | 140351 |
 | Experience Editor | ​When trying to render an item under a custom routed MVC controller using `SitecoreHelper.RenderRendering`, an expection occurs | 482255 | 154844 |
 | Experience Editor | Under certain conditions, the ​Experience Explorer substitutes the real user with the eevirtualuser.​ | 482583 | 160513 |
 | Experience Editor | Inappropriate use of `Context.Database​` can cause NullReference exceptions can occur in Explore mode. | 479180 | 154836 |
 | Experience Editor | Uses the wrong name for the edit registry setting. | 480337, 480375 | 151800 |
 | Experience Editor | The language selector button now shows the full language name. | 458960 | 101494 |
 | Experience Editor | ​Unlocking a page locks previously unlocked datasource items. | 489262 | 166899 |
 | Experience Editor | You cannot insert a page in the Experience Editor if the `Enforce Version Presence` feature is enabled on the page template.​ | 470167, 461060, 487441 | 183776, 105682 |
 | Experience Optimization | ​Personalization Reach is not aggregated across all dates when there is no test in place​. | 482828 | 157497, 159444 |
 | Experience Optimization | If you create a test in a non-English language, users cannot change the test variants​. | 470510, 461994, 482003 | 140227,110468 |
 | Experience Optimization | ​When you create a page test, the `String was not recognized as a valid DateTime` error appears in the log files. | 478416 | 152181, 154439 |
 | Experience Profile | ​If all the profile card values were set to "0", the "NaN" values appear in the Profiling group. | 465520 | 117074 |
 | Experience Profile | Records of every contact are written to the `Top contacts by value per visit` report. |  | 163659 |
 | Experience Profile | All contacts load when you open the ​`Top Value Per Visits` report​. This slows down the application. |  | 163659 |
 | Federated Experience Manager | ​There are several occurrences of the SCbeacon initialization in the `beacon.js` file​. | 475190, 476672, 463054, 477624, 475056, 481179 | 147868 |
 | Federated Experience Manager | ​If the TempFolder setting is set to the absolute path,​ FXM does not bundle the beacon. | 479502 | 130319 |
 | Federated Experience Manager | ​The `FxmSiteProvider` increases the use of `AccessResultCache` and `ItemPathCache`. | 479355 | 156442 |
 | Federated Experience Manager | ​`Contact.System.Value` is not aggregated for page events that are triggered by the `Click Action` feature​. | 478464 | 151460 |
 | Federated Experience Manager | ​Goals triggered in FXM don't have `Contact.System.Value` and this causes inconsistencies in the reports.​ | 481137 | 153995 |
 | Federated Experience Manager | ​The FXM beacon script does not update results obtained from `TrackEvent​`. | 485573, 486237 | 166693 |
 | Federated Experience Manager | ​The `Control Properties` dialog does not open after inserting an MVC rendering into a placeholder on an external site via FXM. | 485582 | 170806 |
 | Item Buckets | ​Access to the `ExtraParams` property ​has been simplified. |  | 158132 |
 | Item Buckets Content Search | In the Content Editor, Item Buckets Content Search does not take the item language into account. |  | 95017, 409955 |
 | Item Buckets Content Search | ​Applying configuration settings to fields with an underscore or a space in the name ​​causes unwanted behaviour. |  | 94334, 396117 |
 | Item Buckets Content Search | ​The `SwitchOnRebuild` method for Lucene and Solr indexes switched indexes when you stopped rebuilding the indexes. |  | 96016, 433895 |
 | Item Buckets Content Search | ​The Solr `SwitchOnRebuild` mechanism does not use the swapped index it only rebuilds it​. |  | 96429, 442441 |
 | Item Buckets Content Search | The `ThenBy()` and `ThenByDescending()` sort results do not work as expected . |  | 110825 |
 | Item Buckets Content Search | Multilist with Search fails if the `master` index location does not point to the `/sitecore` item. |  | 95301, 417893 |
 | Item Buckets Content Search | ​The result of the index update operation still depends on item security restrictions​. |  | 135755 |
 | Layouts & renderings | ​Incorrect `placeholder was not found` warnings are added to the log file for cached renderings​. |  | 100334 |
 | List Manager | ​Security improvements. |  | 146963 |
 | Marketing Foundation | A thread sychronization error occurs when multiple threads are trying to create a contact and the sessions are ending at the same time. | 428381 | 95735 |
 | Miscellaneous | There was an incorrect caption for languages with a neutral culture in the Languages group in the ribbon. |  | 162413 |
 | Miscellaneous | ​Insert page does not successfully create an item when the `Enforce Version Presence` feature is enabled on its template​. |  | 105682 |
 | Miscellaneous | ​When you change background color of a table cell that is already colored, the browser freezes or becomes unstable. |  | 160066 |
 | Miscellaneous | The `onPublishEndAsyncSingleInstance` update strategy is defined twice​. |  | 109819 |
 | Miscellaneous | The `Sitecore.Tasks.CounterDumpAgent` agent creates txt files in the `$(dataFolder)/diagnostics/` folder that never get cleaned up. |  | 141145 |
 | Miscellaneous | ​The `FieldTypeManager` method returns null for the `Integer` field type​. |  | 109443 |
 | Miscellaneous | ​Breaking links drop the values from some rendering parameter fields​. |  | 109456 |
 | Miscellaneous | Device data is not updated in the analytics database immediately after a contact is identified.​​ | 492895, 478502 | 146899 |
 | Multibrowser fixes | The `Select Media `message overlays the Media Library display in the Edge browser​​.`` |  | 136146 |
 | Multibrowser fixes | ​The first character in Japanese text is not shown in Chrome. ​ |  | 139216 |
 | MVC | The `RequireLogin` property of the site definition is not taken into account for items with an MVC layout​. | 387386, 385489, 425617, 41573, 461310, 465466, 473859 | 93728 |
 | MVC | MVC stops working when `Sitecore.Speak.MVC.config` is disabled​. | 474037, 474344 | 124761 |
 | MVC | StackOverflow is caused by recursive view rendering. | 408760, 470047 | 94991 |
 | MVC | Sitecore MVC does not honor the `DisableBrowserCaching` setting.​ | 405087, 465974, 456330, 431589, 473413 | 116813 |
 | MVC | Giving duplicate names to MVC Controllers when you use Sitecore MVC Areas causes an `AmbiguesController` exception. | 478853 | 117725 |
 | MVC | Wildcard items take precedence over named items when routing URLs with encode name replacement. | 442703, 438041, 451259, 427233, 451720, 464712, 466421, 469940, 473341, 473428 | 96265 |
 | MVC | Security issue relating to preview. | 481585 | 153472 |
 | MVC | Rendering HtmlHelper does not respect the cacheability settings from the rendering item | 458788, 458879, 460270, 462787, 474424, 474940, 482311, 387596, 387950, 393583, 410778, 418064, 433178, 450433 | 93868 |
 | Publishing | ​The `PublishNow` command ignores the security permissions for languages. |  | 110894 |
 | Rich Text Editor | ​Firefox 5.2 or later does not let users copy and paste into the Rich Text Editor . |  | 153992 |
 | Rich Text Editor | ​The `background-image` style parameter can be stripped out in the RTE​. |  | 145733 |
 | Rich Text Editor | Changing the text color in the RTE can cause the browser to hang. |  | 100553 |
 | Rich Text Editor | ​Using the table properties popup in the RTE may mess up the table layout​. |  | 101901 |
 | Rich Text Editor | The `OptimizeSpans` filter is enabled by default and removes some tags. ​​ |  | 120786 |
 | Sitecore Services Client | A cross-host OPTIONS request throws an error​. | 468702 | 122649 |
 | Solr | ​`SolrIndexSummary` initializes incorrectly for collections. |  | 117163 |
 | SPEAK | ​If the server and the client timezones are different in certain ways, the DatePicker repeatedly changes its value when a user specifies an initial value that is close to the end of a day. |  | 131368 |
 | SPEAK | When a user opens one component that shows a dropdown and then selects another component that also shows a dropdown, Sitecore does not always close the first dropdown. |  | 140943, 141123, 141122, 154161 |
 | SPEAK | ​In some cases, the `UploaderInfo` component failed to show a preview of the image to be uploaded. |  | 143643 |
 | SPEAK | ​The `QueryDataSource` component does not respect the PageSize property. |  | 153821, 155557 |
 | SPEAK | ​The `ActionControl` does not wrap long action names. |  | 152650 |
 | SPEAK | ​The `DatePicker` component does not support null/empty values. |  | 130021 |
 | Update Installation wizard | The versioned fields in Standard Values cannot be emptied by an update package​. |  | 165244 |
 | Update Installation wizard | ​The shared fields in Standard Values cannot be emptied by the update package​. |  | 151720 |
 | Update Installation wizard | Analytics data indexing stops during package installation​. |  | 179032 |
 | Update Installation wizard | ​Installing an update package that contains a large number of items can take more than 230sec on Azure and this can cause a timeout and then the installation fails. |  | 142101 |

## Deprecated/removed

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Campaign Creator | The enrollment link for Engagement Automation has been removed from Campaign Creator because Engagement Automation has been replaced by Marketing Automation. |  |  |
 | Experience Analytics | Many search engines no longer provide keywords when referring users to a site. As a result, the `Keywords` report no longer shows any data and has been removed.​ |  |  |
 | List Manager | The new Marketing Operations API does not support folders and this feature has therefore been removed. |  | 137297 |
 | Marketing Foundation | The contact processing pipeline is now obsolete and being removed from the codebase. |  |  |
 | Miscellaneous | There has been a major code cleanup and lots of obsolete code has been removed. Legacy indexes in `Sitecore.Search` namespace have been removed. |  |  |
 | Social Connected | ​The Social Connected application is not included in Sitecore 9.0. Information about future availability will be confirmed at a later date. |  |  |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/92/Sitecore_Experience_Platform_92_Initial_Release/Release_Notes
---

**July 2019 – released Sitecore Experience Platform 9.2.0**

This is a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

Sitecore Experience Platform 9.2.0 includes:

-   Consumption tracking - ​Sitecore may collect telemetry metrics to help us understand how our customers use the product and develop web sites using the features in the product.
-   The Redis Sessions state provider now uses StackExchange.Redis 2.0​​.
-   On Sitecore Azure, all the `Appenders` are configured the same. There is no distinction between log statements that are written using the `Sitecore.Diagnostics.Publishing` logger, the `Sitecore.Diagnostics.Search` logger, or any other logger.
-   In Sitecore Forms, the following required parameters have been added to the ​`Send Email Campaign Message` submit action:
    
    -   Select email field
    -   Specify the identification source
    -   Select the consent field
    
    Forms that use the `Send Email Campaign Message` submit action will no longer work. These forms must be updated and the required parameters must be configured.
-   Sitecore Forms has added ​support for Sitecore JavaScript Services​ (JSS​)​.
-   ​A new abstraction for the `Job` and `Schedule` classes has been introduced to support extra integration scenarios.
-   ​The `Rebuild Link database` functionality has been improved with the addition of a new provider. It is not enabled by default. For more information, see the [Sitecore XP 9.2.0 documentation](https://doc.sitecore.com/) .
-   Overview of all the pages that contain active personalization.  
    The Experience Optimization application now has a single place where you can find all the personalized pages across each Sitecore instance.  
    The information displayed includes:
    -   The name of the page that contains personalized components.
    -   The website that the page belongs to.
    -   The number of personalized experiences this page contains.
    -   The number of combinations of personalized components on the page.
    -   The number of components involved.
    -   Effect in Test – the highest effect if there is a personalization test running.To see detailed information about each personalized experience, select a page in the list.
-   ​Tracker performance has been improved by reducing the number of calls from the tracker to xConnect.
-   MongoDB 4.x is the required version for xConnect and the Session State Provider.​​
-   You can now delete a contact and all the information related to it.
-   A new `Indexing` sub-role has been added to the Sitecore server roles to simplify the configuration of content indexing.  
    When you assign the `Indexing` sub-role to a server role, that role manages content indexing automatically and the other server roles that have not been assigned this sub-role do not index content.  
    You configure the `Indexing` sub-role in the `web.config` file and can combine it with the CM and CD roles, for example, `ContentManagement, Indexing`.
-   Sitecore XP now supports YAML serialization.  
    The `Serialization` API has been refactored and improved to also support serialization in YAML format. Tree serialization is now available and is similar to what Unicorn does.  
    **Important**  
    The old serialization format will be deprecated and removed in one of the next major releases.
-   Sitecore now supports SSL offloading. A new configuration file has been introduced to enable SSL offloading. The `\App_Config\Include\Examples\Sitecore.LoadBalancing.config.example` file is disabled by default.
-   Whitelisting is enabled by default for Azure Search.  
    Sitecore now indexes a predefined set of fields. This gives full control over the size of the index and overcomes the 1k field limitation in Azure Search.
-   ​The stability of session end event handling has been improved in the `Tracker`.
-   The performance of processing/aggregation and especially the performance of history rebuild has been improved.
-   Improved integration between EXM and Sitecore Forms  
    If you use both EXM and Sitecore Forms, the 9.2 release provides some enhanced functionality that empowers marketers.  
    The default send action for Sitecore Forms now allows marketers to send personalized messages to both known and new contacts. The send action is triggered when a form is submitted and can use data from within the form itself as a result of enhanced support for custom tokens.
-   The zip archive of the Sitecore Experience Platform root folder is no longer shipped with the product.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Experience Editor | When you open the Experience Editor from the Launchpad or from the Content Editor it now behaves consistently. This behavior is set in the `Sitecore.config` files in the `Preview.DefaultSite` setting.​​​ | 452611, 455068, 459045 | 81313 |
 | API | ​​​​A new abstraction for the `Job` and `Schedule` classes has been introduced to support extra integration scenarios. |  | 290073 |
 | Configuration | ​​A new `Indexing` sub-role has been added to the Sitecore server roles to simplify the configuration of content indexing. |  |  |
 | Email Experience Manager | The integration between EXM and Sitecore Forms has been improved. |  |  |
 | Experience Analytics | ​​​​We have removed a number of items that pointed to deprecated code​. |  | 206204 |
 | Experience Editor | ​​​An empty image field placeholder now scales to the available layout size. |  |  |
 | Experience Editor | ​​The `P​review`, `Explore`, and `Debug` buttons are now located on the Experience Editor ribbon. |  | 295488 |
 | Experience Optimization | The Experience Optimization application now has a single place where you can find all the personalized pages across each Sitecore instance. ​​​ |  |  |
 | Links | The `Rebuild Link database` functionality has been improved with the addition of a new provider. It is not enabled by default.​​ |  |  |
 | Marketing Foundation | ​Tracker performance has been improved by reducing the number of calls from the tracker to xConnect.​​​ |  |  |
 | Marketing Foundation | ​In Sitecore 9.2.0, MongoDB 4.x is the required version for xConnect and the Session State Provider.​​ |  | 253259, 307152, 253260 |
 | Marketing Foundation | ​​You can now delete a contact and all the information related to it. |  | 252714, 289962, 289966, 292179, 292183, 289965, 292392, 292155, 292136, 289964, 289960, 289961, 289963, 289967, 292189, 292190, 292195, 292114, 292169, 149323, 301655 |
 | Marketing Foundation | ​​​It is now possible to specify the concurrent threads that are used to handle session expiration. This solves the thread starvation problem that occurred in high load scenarios.  <br />It is now possible to configure dedicated servers to process session expiration, which can lower the load on content delivery servers and improve their performance and stability. |  |  |
 | Marketing Foundation | ​​Session expiration handling has been improved:<br /><br />-   Long-running operations no longer use the default .NET thread pool.<br />-   The custom expiration queue and a custom thread pool are utilized for session expiration.<br />-   You can now control the degree of parallelism that occurs by specifying the number of threads that should run simultaneously to process the work items in the queue when a session expires.<br />-   A new concurrency executor mechanism has been introduced to control size of the queue by limiting the number of session end events that are handled simultaneously.<br /><br /> |  | 298931 |
 | Marketing Foundation | ​The number of requests sent from `Tracker` to `xConnect` has been reduced by ​saving `Contact`, `Interaction`, and `Device` in a single batch​​​ |  | 257658, 290876 |
 | Marketing Foundation | The Web tracker now handles the `ContactNotFound` exception on session expiration by ensure that when a contact was removed from xDB during an active web session, a new contact with the same identifier is created.​​ |  | 289882 |
 | Marketing Foundation | ​​`SessionEnd` processing can now be disabled per-instance for any supported out-of-proc session state provider. |  | 220932 |
 | Marketing Foundation | ​​​The stability of session end event handling has been improved in the `Tracker`. |  |  |
 | Marketing Foundation | `​Sitecore.Analytics.dacpac` has been renamed as `Sitecore.Reporting.dacpac​`.​​​ |  | 313887 |
 | Marketing Foundation | ​​The Cortex Reporting Foundation​ now supports `SQL Always On`. |  | 230129 |
 | Miscellaneous | ​Sitecore may collect telemetry metrics to help us understand how our customers use the product and develop web sites using the features in the product. ​​ |  |  |
 | Miscellaneous | ​​​​New default polling intervals have been a assigned to the `Sitecore.Framework.Messaging` library to reduce the pressure on SQL Server. |  | 315543 |
 | Pipelines | ​​​`Sitecore.Pipelines.HttpRequest.BeginDiagnostics` and `EndDiagnostics` are not enabled on CD servers. |  | 318134 |
 | Platform | The `Rules Engine` has been updated to check if conditions can be evaluated before executing a rule​. `Condition.CanEvaluate` can be overridden to specify that a condition cannot be evaluated.​​ |  | 301303 |
 | Search | The Redis Session state provider now uses `StackExchange.Redis 2.0​​`. |  | 227831 |
 | Search | ​​Whitelisting is enabled by default for Azure Search. |  |  |
 | Serialization | ​​Sitecore XP now supports YAML serialization. |  |  |
 | Sitecore Azure | All the `Appenders` are configured the same. There is no distinction between log statements that are written using the `Sitecore.Diagnostics.Publishing` logger, the `Sitecore.Diagnostics.Search` logger, or any other logger. |  |  |
 | Sitecore Forms | ​​​Support for Sitecore JavaScript Services​ (JSS​)​ has been added. |  |  |
 | Sitecore Forms | ​​​The name of the selected goal/campaign/outcome/page is now shown in the list of selected save actions in the property editor. |  |  |
 | Sitecore security | ​​Sitecore Identity now has Chinese, Danish, German, and Japanese translations. |  | 217389 |
 | Sitecore security | Sitecore Identity now supports `AppInsights` logging. ​​​ |  | 305570 |
 | Sitecore security | Sitecore Identity now supports `Single Signout`. ​​ |  | 305571 |
 | Sitecore Security | Sitecore now supports SSL offloading. A new configuration file has been introduced to enable SSL offloading. This file is disabled by default.​​ |  |  |

## Deprecated/Removed

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | API | ​​The code annotation attributes such as `CanBeNull`, `NotNull`, and so on have been deprecated.  <br />If you wish to use these attributes in your own code, you should use the `ReSharper Annotations` package from NuGet. For more information about annotations, see https://blog.jetbrains.com/dotnet/2015/08/12/how-to-use-jetbrains-annotations-to-improve-resharper-inspections/ |  |  |
 | Installation | The zip archive of the Sitecore Experience Platform root folder is no longer shipped with the product.​​ |  |  |
 | Experience Optimization | The obsolete `Sitecore.Analytics.Rules.Conditions.ContactPatternMatchCondition` class has been removed.  <br />The obsolete `\master\sitecore\system\Settings\Rules\Definitions\Elements\Visitor\Matches Pattern` item has been removed. |  | 213824 |
 | Experience Optimization | The obsolete `Sitecore.Analytics.Rules.Conditions.HasCampaignCondition` class has been removed.  <br />The obsolete `\master\sitecore\system\Settings\Rules\Definitions\Elements\Visit\Campaign was Triggered` item has been removed. |  | 213820 |
 | Experience Optimization | The obsolete `Sitecore.Analytics.Rules.Conditions.CountryCondition` class has been removed.  <br />The obsolete `\master\sitecore\system\Settings\Rules\Definitions\Elements\GeoIP\Country` item has been removed. |  | 213822 |
 | Marketing Automation | `Sitecore.Xdb.MarketingAutomation.Loading.ContactLoader` has deprecated. You can use `Sitecore.Xdb.MarketingAutomation.Loading.AsyncXdbLoader`.`Sitecore.Xdb.MarketingAutomation.Core.Loading.IContactLoader` in `Sitecore.Xdb.MarketingAutomation.Core.dll` has been deprecated. You can use `Sitecore.Xdb.MarketingAutomation.Loading.IAsyncXdbLoader` in `Sitecore.Xdb.MarketingAutomation.dll`. |  | 295626 |

## Breaking changes

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Content Editor | ​WebDav has been completely removed from the system.​​ |  | 255697 |
 | Content Editor | ​​​The `File Drop Area` field type has been deprecated as part of the removal of WebDav. The field type has been moved to the corresponding section and should not be used. |  |  |
 | Email Experience Manager | The new submit action that sends an email after a form is submitted is not compatible with previous versions​ of EXM. ​​​ |  |  |
 | Marketing Foundation | -   The `Sitecore.Processing.Tasks.Abstractions.ITaskDependencyProvider` interface has been merged into the `Sitecore.Processing.Tasks.Abstractions.ITaskDataProvider` interface.<br />-   The `Sitecore.Processing.Tasks.Abstractions.ITaskDependencyProvider` interface ​has been removed.<br />-   The `TaskDataProviderCountersDecorator(ITaskDataProvider inner, IPerformanceCounters performanceCounters, ILogger logger)` constructor has been removed from the `Sitecore.Processing.Engine.Diagnostics.TaskDataProviderCountersDecorator​​` class. |  | 300026 |
 | Marketing Foundation | ​​​In the `Sitecore.Analytics.ExcludeRobots.config` file, the `excludedUserAgents​` node is now empty​. The list of user agents is not required because the Device Detection component is used to filter robots. You can still extend the node with a custom user agent string. |  | 288952 |
 | Miscellaneous | The `Sitecore.Framework.Messaging` library that uses SQL Server now requires queues to be split into individual tables.​​​ |  | 314726 |
 | MVC | ​​`ILogger` has been replaced with `BaseLog`. |  | 194498 |
 | Sitecore.ContentSearch.Azure | The `Lucene.Net.Search.Searcher get_Searcher()` method has been removed from `Sitecore.ContentSearch.Azure.CloudSearchSearchContext, Sitecore.ContentSearch.Azure.dll​`.​​​ |  | 145418, 150403, 206188, 214813 |
 | Sitecore.ContentSearch.Azure | ​The following new abstract methods have been introduced in Sitecore.ContentSearch.Azure:<br /><br />-   `Sitecore.Caching.ICache get_TokenCache()` in type `Sitecore.ContentSearch.Azure.ICloudSearchIndexConfiguration, `<br />-   `System.Void set_TokenCache(Sitecore.Caching.ICache value)` in type `Sitecore.ContentSearch.Azure.ICloudSearchIndexConfiguration, `<br />-   `System.String AnalyzeTokens(System.String text, System.String analyzer)` in type `Sitecore.ContentSearch.Azure.Http.ISearchService, `<br />-   `System.String GetTokens(System.String text, System.String analyzer)` in type `Sitecore.ContentSearch.Azure.Http.ISearchServiceDocumentOperationsProvider​. ​`<br /><br />​​ |  |  |
 | Sitecore.ContentSearch.Azure | ​​​The `IsDisplayedinSearchResults` field with the `\{DCA13350-3EC5-408A-A190-D8FC9F63DCD1\}` ID has been removed from the exclude list and is now included in indexing. |  | 207492 |
 | Sitecore.ContentSearch.Azure | ​​​​The `zh-Hant.lucene` analyzer has been removed from the analyzers list. |  | 250815 |
 | Sitecore.ContentSearch.Azure | ​​The `lowercase_keyword` analyzer is set for fields of the `Link` type​ and fields named `urllink`. |  | 164995 |
 | Sitecore.ContentSearch.Azure | ​​The configuration of the `Content` field has been changed, it is not facetable, filterable, or sortable. ​ |  | 218625 |
 | Sitecore.ContentSearch.Azure | The `i​ndex all fields` functionality has been turned off by default. In the `Sitecore.ContentSearch.Azure.DefaultIndexConfiguration.config` file, the value of the `indexAllFields` property has been changed from `true` to `false`. ​ ​​ |  | 220940 |
 | Sitecore Forms | ​​The following required parameters have been added to the ​`Send Email Campaign Message` submit action:<br /><br />-   Select email field<br />-   Specify the identification source<br />-   Select the consent field<br /><br />Forms that use the `Send Email Campaign Message` submit action will no longer work. These forms must be updated and the required parameters must be configured. |  | 291665 |
 | Sitecore Forms | ​​​​The `Checkbox list` custom CSS class is ignored​. | 501053 | 205864 |
 | Sitecore Services Client | ​​The `Content` facet in no longer available in item search​. |  | 306417 |
 | Sitecore Services Client | ​​The `Sitecore.Services.Infrastructure.Sitecore` assembly has been merged into the `Sitecore.Services.Infrastructure` assembly. |  | 207369 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Caching | ​​​The performance of the `ItemPublishing` APIs ​needs to be improved. |  | 216266 |
 | Configuration | You cannot configure `WebUtil.QueryStringCache`. ​​ |  | 220607 |
 | Configuration | ​​​The `config` provider of the domain manager uses the `sitecore` domain as the default instead of the `default` domain. |  | 141171 |
 | Configuration | ​​​The `web.config` file does not contain the `​Rules.MaxCachedRules` setting. |  | 92804, 370442 |
 | Content Editor | ​​The `Validation` dialog runs slower than the actual validation result. |  | 318106 |
 | Email Experience Manager | ​​An automated message is sent multiple times​​​. | 524616 | 309570 |
 | Email Experience Manager | ​​The `The dispatch process is completed` message is shown when a dispatch is aborted​​​. | 509557, 523130 | 225604 |
 | Experience Analytics | ​​Some mappings for Experience Analytics stored procedures are missing in the `Sitecore.ExperienceAnalytics.Aggregation.config` file and this degrades performance. |  | 313757 |
 | Experience Analytics | In the `Line` chart for specific time zones, the `Date` labels are not displayed correctly.​​ | 502232, 505609, 507834, 508943, 510189, 520410 | 215465 |
 | Experience Editor | ​​​FXM does not work with the `MVC Form` rendering. |  | 202377 |
 | Experience Editor | ​​​Suppressing validation rules does not work in Experience Editor​. | 434666, 475442, 447050, 480232, 488837, 495600, 504509, 505442, 509350, 513043, 518515,529886 | 139071 |
 | Experience Editor | ​​​The screenshot functionality does not work in the Experience Editor or in the Content Editor. This functionality is obsolete and the buttons were removed. | 521662, 527212, 527681, 527818, 529863 | 299764 |
 | Experience Editor | In the `My Items` dialog, the performance of the `Unlock all` functionality​ is not good.​​​ | 516153, 509909, 503739 | 213578 |
 | Experience Editor | ​​An error occurs when a user tries to edit an image in the Experience Editor. | 498433, 522282 | 196761 |
 | Experience Editor | ​​​If the `Short description` field of an item contains double quotes, it causes errors in Experience Editor. |  | 157334 |
 | Experience Editor | The `Date and Time` dialog ignores the user's preference for the date/time format.​​ | ​435035, 435055, 456688, 461850, 486681, 495484, 498424, 498586, 507240, 516641, 519499, 519568 | 51661 |
 | Experience Editor | If the raw value in the `Datasource` field of the rendering items is the item path​, workflow bundling does not work.​​ | 504458 | 213412 |
 | Experience Editor | ​​In Google Chrome, if the `HtmlEditor.LineBreak` configuration is set to the `<br>` tag, the `[No text in field]` watermark does not appear in multi-line fields. | 520977 | 297635 |
 | Experience Editor | A datasource item is created under a wrong path if there are multiple items with the same name and the relative data source location is used in the rendering.​​​ | 499366 | 202329 |
 | Experience Optimization | ​​If you use the control bar in the Experience Editor to select a personalization condition, an exception is written to the log file. | 474167, 479758 | 137311 |
 | Experience Optimization | ​​​When a page test is started, but not fully published from the CM server, an error occurs on the CD server. | 510779, 488615, 503898, 513065, 514686, 517849, 522837, 530359 | 173501 |
 | Experience Optimization | ​​​The `__Is Running` field is indexed as `String`​ on the Azure Search provider. | 508546, 516557, 521880, 527071, 528361 | 222569 |
 | Experience Optimization | ​​If you use Azure Search, content tests are removed unexpectedly. | 524070 | 312428 |
 | Experience Optimization | ​​The `Test the component` dialog does not save your changes if an empty variation was created first​. | 479568 | 152448 |
 | Experience Optimization | Cancelling a test generates an exception in the log file.​​ | 5223727 | 307746 |
 | Experience Optimization | ​​​​The test summary shows an incorrect `Test objective` when the goal was selected from the second page​. | 486413, 502953, 514487 | 166710 |
 | Experience Optimization | ​​The `Do you want to create a test?` message is still displayed when the page contains an active test.​ | 507615 | 230213 |
 | Experience Optimization | ​​​Content tests do not work on a fallback device. | 524126, 524136 | 314641 |
 | Experience Optimization | ​​If xConnect is down​, pages that contain active tests cause Sitecore to stop functioning. | 516179, 522677 | 286052 |
 | Experience Profile | ​​​Some search filters are translated incorrectly. |  | 300243 |
 | Item Buckets | ​​​Items made from branches that have inherited the ability to be saved inside the bucket are not organized inside the bucket after synchronization. |  | 93207, 376447 |
 | Item Buckets Content Search | ​​The `ContentSearch.DefaultIndexConfigurationPath` setting is duplicated in 2 configuration files. |  | 96787, 452103 |
 | Item Buckets Content Search | ​​​​If you delete the last version of an item in any language, the language version of the item is not deleted from the index. |  | 141095 |
 | Item Buckets Content Search | ​​​In the `Sitecore.ContentSearch.config` file, the description of the `indexing.filterIndex.inbound` pipeline is incorrect. |  | 95074, 410950 |
 | Item Buckets Content Search | ​​Using the `syncMaster` index update strategy degrades performance. |  | 96659, 449339 |
 | Federated Experience Manager | ​​​The `Sitecore.FXM.config` file​ contains ​an incorrect processor reference. | 470319, 506968 | 125710 |
 | Layouts & renderings | ​​​The `Date` field does not respect neutral culture settings. |  | 92512, 363903 |
 | Links | ​​The `Broken Links` report ​does not contain a ​`Show only latest version` checkbox. |  | 92614, 366185 |
 | Links | ​​​​Port 443 is added to the URL of an item. |  | 93141, 375448 |
 | List Manager | ​​Several security issues have been resolved​. | 527670, 522331 | 307638, 300583 |
 | Marketing Automation | ​​It takes a long time to build the Marketing Automation campaign tree when there are more than 35 activities​​​​. | 520909 | 302132 |
 | Marketing Automation | ​​The `List of contacts that are currently in the selected element` dialog lists all the contacts​​​. | 528780 | 322236 |
 | Marketing Foundation | ​​If the DI service assembly is missing, xConnect only logs the configuration errors. |  | 231590 |
 | Marketing Foundation | ​​​The `ClearFacetOperation` method can be executed from the `RightToBeForgottenOperation` method. |  | 163878 |
 | Marketing Foundation | ​​​The `Rules engine` crashes when visitors are identified as bots on the website. |  | 95531 |
 | Marketing Foundation | ​​​The `Processing Engine` now supports the ​`AzureServiceBus`. |  | 287121 |
 | Marketing Foundation | Interactions that are added to a non-existing contact are not marked as failed.​​ |  | 314506 |
 | Marketing Foundation | ​​​Empty batches can be returned during data extraction. |  | 309006 |
 | Marketing Foundation | ​It is impossible to remove an identifier that contains a space. ​​ |  | 200174 |
 | Marketing Foundation | ​​In the `Content Editor`, on the `Analyze` tab, the `Attributes` dialog displays campaign names without escaping special characters. |  | 316994 |
 | Marketing Foundation | ​​​`UpdateSearchIndexObserver` can fail during construction if the search index is unavailable when recycling a CD instance. |  | 255663 |
 | Marketing Foundation | In the `Profile Card options` window, you cannot scroll through the list of profile cards.​​​ |  | 139171 |
 | Marketing Foundation | ​​The `XdbContext Batch Execution` exception appears in the xConnect logs when the `Tracker` tries to save a contact from the submit queue that has already been partially saved to xDB​. |  | 251787 |
 | Marketing Foundation | ​​​The `Sitecore.Marketing.Solr.IndexConfiguration.config` file contains incorrect declarations for the `classifications`, `profiletype `and `automationstateenrollmentlist `fields​​.`````` |  | 234761 |
 | Marketing Foundation | ​​​The `Sitecore.Marketing.Solr.IndexConfiguration.config` adds a `Culture` field of the `text` type instead of the `string` type. |  | 234444 |
 | Marketing Foundation | ​​The `MediaRequestTrackingInformation.​IsTrackedRequest()` method creates two instances of `TrackingField` and this degrades performance. |  | 215604 |
 | Marketing Foundation | ​​​Tracking field initialization slows down the processing of non-tracked media.​ |  | 215599 |
 | Marketing Foundation | ​​​A classification conflict exception occurs when two simultaneous web sessions end for the same contact. |  | 203218 |
 | Marketing Foundation | ​The `Sitecore.Web.IPAdresses.IPRange.Contains(IPAddress address)` method detects whether the range contains an IP address incorrectly.​​ |  | 150102 |
 | Marketing Foundation | ​​In the `Sitecore.Analytics.ExcludeRobots.config` file, the ​IP ranges do not support `IPv6​`.`` |  | 149113 |
 | Miscellaneous | In the `HttpClientFactory`, the `CreateClient` method is not thread safe​​. | 500655, 502706, 509112, 516977, 521654, 521755 | 210950 |
 | Miscellaneous | Application Insights does not contain the `System.Diagnostics.DiagnosticSource.dll` and therefore adds a message within Application Insights​​​. | 523336 | 302665 |
 | Miscellaneous | ​​Requests are not displayed in the Application Insights dashboard. | 525705 | 291373 |
 | Miscellaneous | In the Azure environment, custom font files cannot be found. | 504837 | 214941 |
 | Miscellaneous | ​The `SelectMedia` dialog returns no results if the media item does not have a version in the current client language​.​​ |  | 96838, 453109 |
 | Miscellaneous | ​​​Invalid HTML markup causes a page to load infinitely. |  | 297463 |
 | Miscellaneous | The `AddItemLinkReferences` processor contains a deepScan setting that is not shown in the the `Sitecore.config` file and it is set to `true` by default.​​ |  | 219170 |
 | Miscellaneous | ​​​In the `Select Media` dialog, when you search for an item, the exact word order is taken into account by default. |  | 221414 |
 | Miscellaneous | ​​​Indexing does not use a white list of the fields to include. |  | 220940 |
 | Miscellaneous | ​​​In the `File` field, the `Open file` link uploads the file in the wrong language. |  | 218634 |
 | Miscellaneous | ​​​A deadlock can occur during application startup. |  | 319791 |
 | Miscellaneous | ​If `IndexCustodian.RefreshTree` causes an exception, the `RefreshTree` handler is not unsubscribed from the `indexing:updateditem` event. ​​ |  | 302248 |
 | Miscellaneous | ​​In some situations a field value that does not have a culture code is not indexed. |  | 308977 |
 | Miscellaneous | `​EventHub` triggers events twice.​​​ |  | 288084 |
 | Miscellaneous | ​​​`ulrlink` always produces links for the default (English) language version. |  | 290977 |
 | Miscellaneous | ​​​The Sync strategy does not index every item if the context user does not have access to the index root item. |  | 234357 |
 | Miscellaneous | ​Image links contain a double hash.​​ |  | 97023, 456206 |
 | Miscellaneous | ​When you use `Advanced upload` and select the `Overwrite existing media items` option, Sitecore clears the workflow state and resets the fields of the original item. ​​ |  |  |
 | Miscellaneous | ​​The `MailServerUseSsl` setting is not shown in `Sitecore.config` file. |  | 204188 |
 | Miscellaneous | `UpdateIndexTimestampTimerTick` is executed after the search indexes have been disposed and this causes an `IndexNotFoundException`.​​​ |  | 181435 |
 | Miscellaneous | ​​​`DatabaseSwitcher` changes the context database incorrectly. |  | 177113 |
 | Miscellaneous | ​​​If `IndexAllFields=false`, the fields in the `IncludedFields` list are indexed as string values. |  | 252532 |
 | Miscellaneous | ​​The JSON configuration file for the `Processing Role` contains Solr parameters.​ |  | 251533 |
 | Miscellaneous | ​The `DateTime equality` clause does not work in the Solr Managed Schema.​​​ |  | 233873 |
 | Miscellaneous | ​​​The `Sitecore.Text.ListString` class is ineffective. |  | 231799 |
 | Miscellaneous | ​​​When `IndexAllFields=false`, AbstractDocumentBuilder tries to index all the included fields even if an item does not contain any fields. |  | 230603 |
 | Miscellaneous | ​​​Solr auto-suggest adds the `q=` parameter to the query string. |  | 229911 |
 | Miscellaneous | ​​Multi-valued fields can be indexed as a single line instead of being split into multiple values. |  | 228832 |
 | Miscellaneous | ​Users that have been assigned the `sitecore\Sitecore Client Publishing` role cannot select any publish targets. ​​​​ |  | 295982 |
 | Miscellaneous | ​​​`ulrlink` generates media links for the `shell` site rather than for the actual website. |  | 291228 |
 | Miscellaneous | ​​​​The `Internal link` dialog does not take the current language into account. |  | 288817 |
 | Miscellaneous | ​​​`StoreVersionTermVector` causes conflicts with custom item fields and should be removed for all search providers. |  | 287726 |
 | Miscellaneous | When `IndexAllFields=false`, ​cloned items do not inherit field values.​​ |  | 257284 |
 | Miscellaneous | `DatabaseAgent` is included in the `Sitecore.Processing.config` file but is not required for the `Processing` role.​​​ |  | 256452 |
 | Miscellaneous | The `Required field` validator saves fields that should generate a fatal error.​​ |  | 316530 |
 | Miscellaneous | ​When you change the user for a job, there is a memory leak in the `<job>` pipeline.​​ |  | 318517 |
 | Miscellaneous | ​​​​A string that contains a hyphen is treated as a valid language​. |  | 318925 |
 | Miscellaneous | On the `Sitecore Desktop`, the `All Applications`, `Sitecore on the Net`, `Sitecore Homepage` page does not display any content.​​ |  | 319402 |
 | Miscellaneous | ​The `Result=FatalError` parameter does not prevent an item from being saved.​​ |  | 305324 |
 | Miscellaneous | ​In the `Layout Details` dialog, removing a `sublayout` also removes additional parameters.​​ |  | 159068 |
 | Miscellaneous | ​​​Unversionable media items are uploaded in the current site language and not in the current item language. |  | 189805 |
 | Miscellaneous | ​​​The `RestoreColorProfileProcessor` processor sets the wrong extention for thumbnails. |  | 209652 |
 | Miscellaneous | ​​​When you try to view a media item that is locked by another user, an exception can occur. |  | 212651 |
 | Miscellaneous | ​​Items created from a branch are not deserialized correctly. |  | 215244 |
 | Miscellaneous | ​​​Sitecore does not support SSL offloading on a load balancer. |  | 115252 |
 | Miscellaneous | ​​The scheduling engine ​does not support any advanced scheduling functionality. |  | 95620, 426578 |
 | Miscellaneous | You cannot control the size of the `[isLanguageFallbackValid]` cache independently.​​ |  | 221831 |
 | Miscellaneous | ​​​​`RefreshTree.ShowProgress` uses a method that is not thread-safe to add messages. |  | 302249 |
 | Miscellaneous | ​If you install ​`Hotfix #257120-2`, validation fails if it is run in a job. ​​ |  | 305539 |
 | Miscellaneous | `​​​Hotfix #257120` causes problems when returning and validating field values. |  | 306221 |
 | Miscellaneous | ​Installing `Hotfix #257120` causes problems with field validation.​​ |  | 289605 |
 | Miscellaneous | ​​When you rebuild the `master` database, it can hang indefinitely. |  | 308411 |
 | Miscellaneous | ​​​The CM and CD roles use different databases as transport for events and as a result messaging does not work. |  | 310341 |
 | Miscellaneous | ​​​​The UI notifications about datasource items are broken. | 520840, 522971 | 301564 |
 | Miscellaneous | ​​​Links that contain the `?` and `=` symbols in the query string parameter value, are not rendered correctly. |  | 310374 |
 | Miscellaneous | ​​​​`SolrFieldMap.availableTypes` can cause performance issues when a large number of LINQ search queries are executed. |  | 312897 |
 | MVC | ​​MVC cannot resolve an item when the name contains a dash or when the context item is switched. | 513831, 522220 | 252805 |
 | MVC | ​​When a URL references an item name that contains a dash, the wildcard item is used as the context item. | 519609 | 294344 |
 | Path Analyzer | ​​​There are some items that point to deprecated code. |  | 206204 |
 | Path Analyzer | ​​No contacts are displayed in the Path Analyzer. |  | 257140 |
 | Performance | The performance of processing/aggregation and especially the performance of history rebuild has been improved.​​​ |  |  |
 | Performance | ​The `Links` table​ has performance overheads.​​ |  | 143842 |
 | Performance | ​Cleanup of blob files takes a long time and causes timeouts on large databases.​​ |  | 255301 |
 | Platform | Optimization now allows Sitecore MVC to efficiently manage the execution of the `<mvc.getrenderer>` pipeline for the same renderings on repeated page requests. This addresses previous performance issues from redundant pipeline runs. However, with this change, configuring personalized content while setting the caching option for rendering is no longer possible. |  | 310097 |
 | Publishing | ​​​​`Incremental` and `Smart Publish` will not publish a renamed item if the item does not have a language version in the language being published. |  | 103944 |
 | Publishing | ​​​Incremental parallel publishing does not unpublish every item. |  | 126440 |
 | Publishing | ​​​The content of ​shared blobs is not published when you publish a media item if the media item does not have a language version in the language being published. |  | 298205 |
 | Rich Text Editor | ​The width and height of images is not consistent.​ ​​ |  | 93837, 387262 |
 | Search | ​​​In the `Sitecore.ContentSearch.Lucene.DefaultIndexConfiguration.config` file, the `indexallfields` setting is set to `false`, and this breaks the Azure Search indexes. |  | 226988 |
 | Search | ​​When Azure Search queries the `Item Search API`, an exception is thrown. | 521436 | 214219 |
 | Search | When the Azure Search index is updated in parallel, some documents may be missed. | 522938 | 303519 |
 | Search | ​​The `_content` field is used to build facets, sort, and filter data. It should only be used for search. | 506114, 509381, 509904 | 218625 |
 | Search | ​​​Azure search does not return the thumbnail of an item from the media library. | 501838, 510746, 518648 | 207492 |
 | Search | ​​The `Contains`, `StartsWith`, `EndsWith` search methods do not work if the terms used in the search are not separated by a space. | 501629, 502305, 514493, 519598, 521350, 522779 | 207513 |
 | Search | In Azure Search, the `​​Count`, `Any`, `First`, `Single`, `ElementAt` commands retrieve too many documents​. | 479281 | 147549 |
 | Search | ​​Azure Search contains references to Lucene. | 478501, 504837 | 145418, 150403, 214805, 206188, 214813 |
 | Search | When language fallback is enabled, some item gets deleted from the index.​​​ | 520831, 520948 | 299679 |
 | Search | ​​In Azure Search, the linq equal operator `== ` does not working correctly for the `URL` field. | 482755 | 164995 |
 | Search | ​​In Azure Search, the `CloudFieldNameTranslator` method does not resolve item names correctly. | 522538 | 301873 |
 | Search | When Azure Search returns an `HTTP 207` response code, there is no meaningful message. | 488998 | 178851 |
 | Search | ​​The `GetResults` method does not work if the search results contain a large number of documents. |  | 306365, 308782 |
 | Search | ​​In Azure Search, the `SwitchOnRebuildEventRemote` event is shared through the `EventQueue` of the `Web` database instead of the system `EventQueue`. | 519226 | 290638 |
 | Search | In Azure Search, if the Azure Search indexes are not created, you cannot use the Content Editor​​. |  | 178565 |
 | Search | ​​When the schema sync is slow, the search service schema synchronizer clogs the thread pool. | 511167, 511713, 513733, 520674, 5206 | 229598 |
 | Search | Searches that use `Contains`, `StartsWith`, and `EndsWith` do not work if the search terms are not separated by a white space​. | 501629, 502305, 514493, 519598, 521350, 522779, 530949 | 207513 |
 | Search | ​​​Azure Search doesn't work for the Item Service. | 521436, 528376 | 214219 |
 | Search | The Azure Search provider does not support the `Select LINQ` method​. | 522723, 526466 | 302171 |
 | Search | ​​​If you use Azure Search, Sitecore cannot rebuild the indexes because it hits the 1000 fields limit. | 478680, 478723, 482933,482951, 485437, 487550, 488198, 499888, 500830, 500936, 505020, 505747, 506114, 506339, 506724, 507287, 507302, 507561, 508196, 509381, 509729, 510677, 510678, 511191, 513223, 513335, 513507, 513516, 514361, 515892, 517664, 518169, 518739, 519419, 520348, 520675, 520691, 520959, 522124, 522205, 522391, 522772, 523646, 525845, 526442, 526726, 526909, 527025, 529154, 527292, 527772, 528151, 528225, 528425, 528559, 529059, 529167, 529237, 529541, 530084, 530772, 531060, 531873, 531873, 531946, 532445, 534152 | 207507 |
 | Search | ​​​The Azure Search provider does not return any results when you use the `*` value for fields of the `System.String []` collection type. | 526184 | 314856 |
 | Search | ​The Azure Search provider does not respect the `EnableSecurityCheck` option.​​ | 526075 | 314858 |
 | Search | When Azure Search goes offline, the application does not re-initialize the `CloudSearchProviderIndex` for Azure. | 526765 | 318104 |
 | Search | ​​​The sorting parameters are in reverse order. |  | 317080 |
 | Search | ​The `whitelist` of searchable fields is not aligned with the field map. |  | 316025 |
 | Search | The Azure Search configuration is not applied by default when a field is in the `whitelist` but not in the field map​. |  | 315836 |
 | Search | When retrieving search results​, boosting values are sometimes ignored. |  | 304104 |
 | Search | With Azure Search, if you perform a content search from the Marketing Control Panel, you can receive the following error: `System.ArgumentException: Can not convert Array to String.` | 522975, 529538, 531127, 532954, 533114, 533753, 534940 | 299893, 255403 |
 | Search | Bad request exceptions appear in the log files on the `Processing` server, related to different indexing properties, for example, `alt`, `sidebar`, `footer`, `campaign_facet_1`.​ |  | 176589 |
 | Security API | ​Some security vulnerabilities have been fixed in the Content Editor.​​​ |  | 316995, 317000, 317017, 317072, 317073 |
 | Sitecore Azure | ​​In xConnect, when you use Azure Search, the `IsRetrievable` setting is not set to `false` for string collection fields​​. |  | 231042 |
 | Sitecore Azure | ​​Content Delivery timeouts when all the threads are used up. | 501841, 502444, 504077, 505107, 505434, 505481, 505937, 506952, 507484, 507564, 508663, 510057, 510518, 510958, 511330, 515524, 522053, 501690, 500630, 500318, 499263, 497637, 497347, 495297, 489097, 486796, 485967, 478301 | 301549 |
 | Sitecore Azure | Information about requests is not displayed in the Application Insights dashboard​​. | 533055, 525705, 528449, 529693, 531710, 532152, 532190, 532902, 533917, 534251, 535027, 535297, 535526, 535905 | 291373 |
 | Sitecore Azure | The `AI: Fix missed .dll` e​xception causes application insight errors not to be added to the log files. | 523326 | 302665 |
 | Sitecore Azure | When Application Insights logging is set to `filesystem`, it does not work​. |  | 315471 |
 | Sitecore Azure | ​When you use Application Insights, Sitecore does not specify which logger the log statements come from. |  | 302169 |
 | Sitecore.ContentSearch.Azure | There are ​​​bad request exceptions in the log files on the `Processing` server role. |  | 176589 |
 | Sitecore security | ​​In Sitecore Identity Server, there is no controller for the `Consent` page. | 522901 | 303532 |
 | Sitecore security | ​​​Index names are hardcoded in the `GetSearchIndexNameForDatabase` method of the `Sitecore.Services.Infrastructure.Sitecore.Data.ItemSearch` class. |  | 234726 |
 | Sitecore security | The `Kick User` functionality (DomainAccessGuard) does not work with Sitecore Identity​ Server.​​ |  | 308748 |
 | Sitecore security | Sitecore intersects with routed POST requests.​​ | 523648 | 305761 |
 | Sitecore security | ​​​Data Protection key management - the keys in the registry are not created after deployment. |  | 306623 |
 | Sitecore security | ​​​The user must login, when they move from the Admin pages to the shell pages. |  | 232484 |
 | Sitecore security | ​​In `local.ps1`, the `Clean` command does not delete the SI Server certificate​. |  | 314017 |
 | Sitecore security | ​​An infinite login loop occurs when the maximum number of authors is reached. | 522818, 523654, 525313, 528145, 528794 | 308082 |
 | Sitecore security | Sitecore Identity authentication fails when you change the `hashAlgorithmType` setting in the `web.config` file.​​​ | 522630, 523687, 527084, 527271 | 302092 |
 | Sitecore security | ​​`LoginVirtualUser​` causes excessive client data rewrites. | 526622 | 316302, 312902 |
 | Sitecore Services Client | The database name is hardcoded.​​ | 487997 | 110474 |
 | Sitecore Services Client | ​​A `Delete` request must delete the item in a specific language version and not the whole item. | 502833 | 127265 |
 | Solr | ​​​In a `MultiValued` field, a `Null` value not formatted correctly. |  | 110796 |
 | SPEAK applications | ​Searching in the `Select media` dialog generates an incorrect query.​​​ |  | 5580, 425826 |
 | Workbox | ​​​In the `Workbox`, a user can change the workflow state of a locked item. |  | 131108 |
 | Workbox | In the `Workbox`, ​the `Mixed Content` error can occur.​​ |  | 212515 |
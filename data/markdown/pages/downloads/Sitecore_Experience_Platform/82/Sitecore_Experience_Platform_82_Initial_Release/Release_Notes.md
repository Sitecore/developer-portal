---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Initial_Release/Release_Notes
---

**August 2016 – released Sitecore Experience Platform 8.2 (rev. 160729)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

The Sitecore Experience Platform 8.2 includes:

-   Content Foundation improvements (Dependency Injection, Caching and Performance)
    
-   Support for the Publishing Service (installed separately)
    
-   Support for Express Migration (installed separately)
    
-   Enhanced Experience Editor features
    
-   Marketing Funnels
    
-   New Experience Analytics reports and charting
    
-   Improved Content Testing UI
    
-   Enhanced Path Analyzer component
    
-   Sitecore Experience Accelerator (installed separately)
    
-   Includes all the fixes from 8.1 Update-3
    

**Please Note:** In 8.2, we have aligned the version policy across all Sitecore assemblies. This effectively means that assemblies are individually versioned in accordance with changes in the code. As a result, you cannot obtain the Sitecore Experience Platform version by browsing the assembly versions.

### Documentation

For all Sitecore Experience Platform 8.2 documentation, please visit the new [Sitecore Documentation Site](http://doc.sitecore.net/).

## New feature/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | SPEAK | SPEAK 2.1 adds support for composite components, which are SPEAK components that are created using other SPEAK components. |   
 |   
 |
 | SPEAK | The SPEAK component guidance pages include improved demos and provide information about more components. Authenticated users can access the pages using the alias: http://`<host>`/sitecore/shell/speakguidance |   
 |   
 |
 | SPEAK | The SPEAK 2.1 business component library now includes ported versions of the 16 version 1.1 components missing in 8.1 , as well as 9 new components. |   
 |   
 |
 | Experience Editor | A number of enhancements to the Experience Editor have been implemented for the associated content on a page:<br /><br />-   All page components that have data sources are highlighted with the green frame if the "associated content" checkbox is selected.<br />-   The toolbar of the component shows the datasource item's workflow and the number of pages that use the same datasource item.<br />-   For each piece of content used on the page, you can see the content item's details and the other pages that use this content.<br />-   For each page, you can see all the content items that are used on the page and their workflow states.<br />-   New notifications have been implemented to prevent authors from publishing broken pages.Data sources move through their workflows together with the context page.<br /><br /> |   
 | FeatureID 80759. PBIs: 80765, 84955, 88676, 80762, 72842, 80761, 97187, 80763, 103887 |
 | Experience Editor | The ribbon performance has been optimized for loading in the collapsed state. Now it loads only the required controls when it is collapsed. |   
 | 80318 |
 | Experience Editor | To improve performance, the Experience Editor ribbon now loads only the controls required for the activated tab (lazy loading). |   
 | 83068 |
 | Experience Optimization | The possibility to start a test without using workflows has been enabled by default. |   
 | 109699 |
 | Experience Analytics | Experience Analytics now supports historical re-aggregation. This feature enables any historical data that is added to the xDB after its initial deployment to be viewed in Experience Analytics. |   
 |   
 |
 | Experience Analytics | Dynamic titles are now displayed on charts. On all reports that you can drill down to, a KPI chart with a dynamic title has been added to make it easy to navigate through the reports. |   
 |   
 |
 | Experience Analytics | A simple KPI (Key Performance Indicator) chart has been introduced to provide a simple overview of data.  <br />The chart:<br /><br />-   Shows the average or sum for the Visits, Value, and Value per Visit metric(s) for the selected period.<br />-   Enables you to select all the available metrics that you need to personalize the chart.<br />-   Is available from the Experience Analytics dashboard and all drill-down reports.<br /><br /> |   
 |   
 |
 | Experience Analytics | You can now visualize data using a combination chart when you select two metrics in Experience Analytics. This improvement has been implemented based on UX feedback. |   
 |   
 |
 | Experience Analytics | The FusionCharts charting library has been replaced with the D3 charting library, which is used in other areas of the platform. This change ensures consistency and improves performance. |   
 |   
 |
 | Experience Profile | The extended view in the timeline has been redesigned to include color coding that corresponds to the users' activity bars. The data has also been reorganized and aligned to provide a better overview. |   
 |   
 |
 | Experience Profile | As a result of UX feedback, the scale in the timeline has been changed to a minimum of 1 year and a maximum of 50 years to make it easier to navigate. |   
 |   
 |
 | Experience Profile | When no data is present, the Experience Profile now shows a hyphen “-“. Previously, the Experience Profile showed an empty field when there was no data, which was confusing to users . The hyphen ensures that there is now a clear distinction. |   
 |   
 |
 | Experience Profile | The date format in the Experience Profile has been improved to make it easier to understand. It now uses the same format as Experience Analytics. |   
 |   
 |
 | Experience Profile | The Experience Profile icon on the Launchpad has been replaced with a new design. |   
 |   
 |
 | Platform | S​​​​​itecore 8.2 now supports .NET Framework 4.5.2 and .NET 4.6. Microsoft no longer supports .NET 4.5. For further information, go tohttps://blogs.msdn.microsoft.com/dotnet/2015/12/09/support-ending-for-the-net-framework-4-4-5-and-4-5-1/. |   
 |   
 |
 | Platform | Solr 5.1 is now shipped and supported by default​. |   
 |   
 |
 | Platform | General performance improvements:<br /><br />-   The Cache API has been updated<br />-   Cold start-up times have been improved<br /><br /> |   
 |   
 |
 | Platform | Support for Oracle 11g has been added, but only when Sitecore is deployed in Experience Management mode – there is no support for Oracle in the xDB. |   
 |   
 |
 | Platform | Support for SQL Always On has been added.  <br />This add support for a SQL Server 2012 feature that enables high availability and a disaster recovery. SQL Always On availability groups allows a group to have a set of failover databases so that if a database is unavailable, this fails over to a secondary database.  <br />We will support the following scenarios:<br /><br />-   In Datacenter 1 – Primary DB + Sync Secondary DB<br /><br />-   Commit mode: Synchronous - Fail-over: Automatic - Read-only secondary: Off<br />-   Availability Group Listener: Configured<br /><br />-   In Datacenter 2 – Async commit with manual failover<br /><br />-   Commit mode: Asynchronous - Fail-over: Manual - Read-only secondary: Off<br />-   Availability Group Listener: Configured<br /><br /><br /><br /> |   
 |   
 |
 | Platform | Support for Dependency Injection (DI) has been added, including the following features:  <br /><br />-   The Configuration factory which can resolve types from the DI container<br />-   A container that can be configured with configuration files and using code<br />-   A ServiceLocator for wiring up legacy code<br />-   Abstractions for most static managers<br /><br /> |   
 |   
 |
 | Platform | Search and indexing no longer requires a third-party DI container to enable Solr and there is no need for a Solr support package.​ |   
 |   
 |
 | Content Editor | In the Content Editor, the UI in the Personalization dialogs has been improved:  <br /><br />-   The Rule set editor dialog has been redesigned to include collapsible sections for easier navigation and improved rule editing functions.<br />-   The Rule set editor dialog has been improved to allow easire data input.<br />-   The predefined rules have been given increased prominence to allow for easier reuse.<br />-   Engagement automation and the Segment builder dialogs have been redesigned.<br />-   The Marketing Control Panel now has a new tab for Rules and Predefined Rules to enable users to see which pages have personalization rules applied.<br /><br />​ |   
 |   
 |
 | Marketing Foundation | Marketing Funnels have been added to the Sitecore platform.  <br />A Marketer can define and track specific steps that a visitor makes on their website within a funnel, with the end result being a desired outcome, such as a financial outcome in a purchase.  <br />Integrated with the Path Analyzer:  <br /><br />-   Funnel steps are shown in a dedicated report<br />-   Each funnel step displays the visitor traffic drop between fulfilling each step.<br />-   Individual steps can be analyzed, and the path that the visitor takes to reach each step is displayed.<br /><br /> |   
 |   
 |
 | Marketing Foundation | Sitecore now supports the following MongoDB versions:  <br /><br />-   Mongo 2.6<br />-   Mongo 3.0 with the MMAPV1 and WiredTiger drivers<br />-   Mongo 3.2 with the MMAPV1 and WiredTiger drivers<br />-   Mongo 3.2 Enterprise with data-at-rest encryption, WiredTiger driver only<br /><br /> |   
 |   
 |
 | List Manager | First name, Last name, and Preferred Email conditions have been added to the segment builder. |   
 |   
 |
 | Social Connected | Search indexes have been updated to include the Facebook ID field. |   
 | 77763 |
 | Marketing Foundation | The navigation of the Rule Set Editor dialogs has been made easier with collapsible sections, and the rule editing functions have been improved. |   
 |   
 |
 | Marketing Foundation | The Segment builder dialogs have been redesigned to give predefined rules increased prominence to enable easier reuse of rules. |   
 |   
 |
 | Marketing Foundation | Marketing Control Panel UX improvements, including a new tab on Rules and Predefined Rules items that allow the user to see on which pages the rules have been applied for personalization. |   
 |   
 |
 | MVC | EditFrame support is now availalble in Razor views | 402755, 422360, 444391 | 58151 |
 | MVC | Improved support for statically bound controller renderings via SitecoreHelper.ControllerRendering |   
 | 55924 |
 | MVC | Sitecore now supports precompiled views with the Razor Generator view engine. |   
 | 88817 |
 | MVC | The performance of assembly scanning has been improved on startup. |   
 | 55919 |
 | MVC | MVC ​integration with Sitecore's built-in Dependency Injection |   
 | 108312 |
 | Path Analyzer | Horizonal, Vertical and Table views have been added to make it easier to read the maps. |   
 | 98118, 103329 |
 | Sitecore Services Client | Sitecore Services Client supports token authorization |   
 | 65655 |
 | Path Analyzer | The path filter has been added, which provides advanced sequential filtering. |   
 | 102599 |
 | Path Analyzer | You can now apply a Metrics filter with data visualization to easily find outliers or interesting correlations between key node metrics. |   
 | 108501 |
 | Sitecore Services Client | Assembly scanning performacnce at startup has been improved. |   
 | 76239 |
 | Path Analyzer | You can now create and explore funnels in the Path Analyzer. |   
 | 98166 |
 | Path Analyzer | The Dashboard is the new default view for marketers that showcases the KPIs from a selected map, top landing pages, featured paths, and favorite funnels.​ | 106644 |   
 |
 | Path Analyzer | A context-sensitive help window has been implemented in the Path Analyzer. |   
 | 98124 |
 | Path Analyzer | The map selector has been improved to enable favorites, show status, and display metadata. |   
 | 102597 |
 | Path Analyzer | The Date range selector has been redesigned to display date intervals for the the available map data. |   
 | 102598 |
 | Path Analyzer | The Reports feature has been redesigned and now includes more categories. |   
 | 98119 |
 | Path Analyzer | You can now see a list of contacts who visited a particular path. |   
 | 103318 |
 | Path Analyzer | You can now export map data into a CSV file using download or copy commands. |   
 | 98156 |
 | Sitecore Services Client | ​Sitecore Services Client and Web API is now integrated with Sitecore's Dependency Injection. |   
 | 108278 |
 | Path Analyzer | All nodes now have labels which you can switch on and off. |   
 |   
 |
 | Path Analyzer | Item info for nodes now provides greater detail and includes the display name, template, content tree path, and URL. |   
 | 98122 |
 | Path Analyzer | The Notification bar has been extended to display all key app messages. |   
 | 98120 |
 | Path Analyzer | The ​Page Analyzer app has been rebuilt on the new technology stack and aligned with the main application. |   
 | 98378 |
 | Path Analyzer | API level data compression has been introduced, which reduces payload and improves application responsiveness. |   
 | 101074 |
 | Path Analyzer | Map retrieval performance has been improved, reducing the load on the master database and improving API performance. |   
 | 101900 |
 | Path Analyzer | The Silverlight dependency has been replaced with a standard HTML technology with great cross-browser compatibility. |   
 |   
 |
 | Path Analyzer | The application has been redesigned for improved usability.​​​ |   
 |   
 |
 | Path Analyzer | Duplicate nodes are now removed by default. This behavior is controlled by the PathAnalyzer.Aggregation.CollapseDuplicateRecords' setting. |   
 | 110185 |
 | Platform | In 8.2, we have aligned the version policy across all Sitecore assemblies. This effectively means that assemblies are individually versioned in accordance with changes in the code. As a result, you cannot obtain the Sitecore Experience Platform version by browsing the assembly versions. |   
 |   
 |
 | Platform | The Sitecore Support Package Generator was added to the list of available administration tools - this allows the creation of a ZIP package containing important information about the Sitecore installation and how it is configured. The package can further be provided to Sitecore Support to help with investigation of product issues. |   
 |   
 |

## Breaking changes

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Platform | Projects built on Sitecore must be updated to use the .NET 4.5.2 target framework​. |   
 |   
 |
 | Platform | ​More than 45 abstractions (namespace: Sitecore.Abstractions) introduced to replace static APIs. The static APIs are still available but will be phased out over the next releases. |   
 |   
 |
 | Platform | ​The Cache API has changed:  <br /><br />-   Cache.GetNamedInstance has been moved to CacheManager.GetNamedInstance. There are two overloaded versions generic and common (supporting string keys only).<br />-   FindCacheByName changed signature, now it has two overloaded versions returning ICache and ICache`<TKey>` respectively<br />-   Cache.Add: overloaded methods accepting size of cached object have been removed. Now the cache is able to calculate size using CacheSizeCalculationStrategy.<br /><br /> |   
 |   
 |
 | Platform | ​​ASP.NET MVC and WebAPI now use the Sitecore Dependency Injection container by default.​ |   
 |   
 |
 | Platform | ​The Solr support package is no longer required and configuring the SOLR.NET DI container is no longer done by changing the application type in global.asax​.​ |   
 |   
 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | AntiCSRF | ​Media request protection is not applied to media in a hyperlink within the RTE.​ | 438674 | 96268 |
 | Caching | ​AccessResultCache indexes are not being entirely cleaned. | 452794 | 96818 |
 | Caching | ​Imprecise AccessResultCache MaxSize​ | 365173 | 92570 |
 | Caching | ​Excessive data in AccessResultCache​ | 365175 | 92571 |
 | Caching | ​[Performance] Sharing 'AccessResultCache' between worker threads leads to significant performance regression in "extranet" scenarios​. | 391713 | 94062 |
 | Configuration | ​Preview.ResolveSite should be true by default​. | 452689 | 96808 |
 | Configuration | ​[Security] Change default SQL Membership Provider maxInvalidPasswordAttempts​ | 450390 | 96702 |
 | Experience Analytics | In a scaled architecture the `AnalyticsDataController` fails to instantiate. | 463752, 469448 | 110707 |
 | Experience Editor | ​The_Final Renderings field is not handled correctly in some cases. | 461701, 462385, 461790, 461447, 463021, 462366, 463149, 463592, 464153, 464383, 463742, 464469, 463105, 464093, 465757 | 108023 |
 | Experience Editor | ​Datasource location is incorrect for component items with the same name in the Experience Editor. | 423504, 432919, 443036, 407795, | 94856 |
 | Experience Editor | ​The WebAppCache.cache file in the Experience Editor contains a reference to a nonexistent file. | 455598, 465837 | 84371 |
 | Experience Editor | ​A page loads with "The layout not found" error after removing a component from the page in the Experience Editor. |   
 | 102917 |
 | Experience Editor | ​A validation error can appear after adding a link in the Experience Editor to a rich text field. |   
 | 112036 |
 | Experience Editor | ​Personalization variants are overridden by the default datasource item on MVC pages in the Experience Editor. | 457914, 459551, 466426, 100803 | 100803, 116637 |
 | Experience Editor | ​The content of the Rich Text field is transformed into HTML when added and saved using an inline editor. | 462618, 463839, 461844 | 111388 |
 | Experience Optimization | ​Screenshot generation can fail in the Create Test dialog when using the scaled setup. |   
 | 102730 |
 | Experience Optimization | ​Multiple language- and localization-related issues happen beacause of inconsistent language attributes used in the Content Testing. | 456392, 456640, 458774, 458772, 460479, 462058 | 88040, 88039 |
 | Experience Optimization | Multivariate testing does not work in the Japanese version of Sitecore. ​ | 453814 | 454423, 83387 |
 | Experience Optimization | ​A wrong thumbnail is generated for pages to test against in the Page Test dialog. | 456392, 456640, 458774, 458772, 460479, 462058 | 88038 |
 | Experience Profile | The timeline in the Experience Profile does not show the most recent activity data. | 452780 | 81835 |
 | Experience Profile | The error: "There is no row at position 0" appears in the Experience Profile for contacts with personal info and when there are no pattern cards. | 439278, 437499, 439484, 464381, 465323 | 60022 |
 | Experience Profile | ​The engagement values for the latest visit and the total engagement value are incorrect in the Experience Profile. | 438890, 452904, 454961 | 60887 |
 | Experience Profile | ​Search in the Experience Profile returnes rows with an incorrect value per visit. | 452904, 454961 | 79419 |
 | Experience Profile | ​The error: "An error has occured" appears when the Experience Profile is invoked. |   
 | 102884 |
 | Experience Profile | ​The Experience Profile cannot open the details of the latest contact when the device attribute is explicitly specified for the website in the web.config/sitecore.config file. | 433621 | 60017, 434216 |
 | Experience Profile | ​The latest visit data in the Experience Profile is not the latest for a contact that has several visits in a day. |   
 | 15054 |
 | Experience Profile | ​Users with designer and author roles are denied access to the Experience Profile. | 443754, 441625, 443908, 448525, 462338, 465712, 467641 | 96620, 76284, 448614 |
 | Federated Experience Manager (FXM) | ​Span tags are visible as raw markup in the Federated Experience manager application menu. | 460972, 460966, 461484, 464313, 465605 | 102071, 105351 |
 | Federated Experience Manager (FXM) | Rendering cache is not working in FXM. | 461681 | 108135 |
 | Federated Experience Manager (FXM) | ​Dependency on Prototype.js prevents from using jQuery in FXM: a javascript error "Uncaught TypeError: $(...).ready is not a function" appears. | 462368 | 109589 |
 | Federated Experience Manager (FXM) | ​The Edge browser stops responding after you click the Add here button in the Experience Editor in FXM. |   
 | 112290 |
 | Item buckets | ​The Sync operation relocates every item in a bucket​. | 412058 | 95094 |
 | Item buckets | Hide second content tree |   
 | 111647 |
 | Item Buckets API | ​Content tree search fails with an error if a context item is not included in an index. | 425362 | 95555 |
 | Item Buckets API | ​SearchStringModel.ParseDatasourceString does not respect the sort order​. | 414968 | 95182 |
 | Item Buckets API | ​Incorrect values of the boost attributes​ | 395754 | 94306 |
 | Item Buckets API | ​Startbar search and Search application are broken if no index includes the root item of the master database.​ | 417437 | 95284 |
 | Item Buckets API | ​Application pool culture affects the sitecore_analytics_index​. | 434889 | 96064 |
 | Item Buckets Content Search | ​Advanced search in the content tree does not work​. |   
 | 108397 |
 | Item Buckets Content Search | ​The Equals method of the DataUri class has faulty logic​. | 449997 | 96688 |
 | Item Buckets Content Search | Selecting the Associated Content dialog doesn't respect the Datasource Template field. | 428783 | 95758 |
 | Item Buckets Content Search | ​Search for rendering datasource doesn't search in all Datasource Locations​. | 429935 | 95824 |
 | Item Buckets Content Search | ​Wrong description of the GetDatasourceDependencies processor​. |   
 | 103662 |
 | Item Buckets Content Search | ​The usage of the Lucene.Net.Analysis.AR.ArabicAnalyzer class leads to incorrect indexing of the ar-AE language​. | 402185 | 94653 |
 | Item Buckets Content Search | ​Items excluded by the inbound filter are not deleted from the index. | 415338 | 95205 |
 | Item Buckets Content Search | ​TheWeb edit ribbon is broken if no index includes the root item of the master database​. | 417434 | 95283 |
 | Item Buckets Content Search | ​The location search type prevents the running of the getGlobalSearchFilters pipeline.​ | 405528 | 94831 |
 | Item Buckets Content Search | ​The incorrect language version is displayed when the search result is opened in a new Content Editor window​. | 422018 | 95425 |
 | Item Buckets Content Search | Items are not indexed if index has two crawlers |   
 | 104142 |
 | Launchpad | ​The login page ignores the RedirectUrl parameter after authenticating the user and redirects all users to the ​Launchpad. | 432834, 425607, 432834, 433848 | 53027 |
 | List Manager | ​The default index configuration is incorrect. |   
 | 112004 |
 | List Manager | ​There is an exception in log file when you add a list from a file with Solr. |   
 | 108653 |
 | List Manager | ​List Manager doesn't respect access rights on list items. |   
 | 81008 |
 | List Manager | ​JavaScript code can be submitted and executed in the List Manager application. |   
 | 80139 |
 | List Manager | ​Count is not shown for segmented lists on the Dashboard page. |   
 | 102830 |
 | List Manager | Cannot create list from file if Media.CachingEnabled = false. |   
 | 103637 |
 | List Manager | ​Lists with quotes in the name cannot be opened. |   
 | 98464 |
 | Miscellaneous | ​EventQueue AddCriteria and GetEventTypeConditions methods build an incorrect sql query clause​. | 112951 |   
 |
 | MVC | ​System.Web.WebPages.Html.HtmlHelper errors appear during Sitecore compilation by Aspnet_compiler.exe.​ |   
 | 65207 |
 | MVC | ​Sitecore CMS exposes information that can lead to server fingerprinting​. |   
 | 106300 |
 | MVC | Support for async controllers (does not apply to Controller Renderings) | 463539, 437904 | 55908 |
 | Path Analyzer | Fatal messages related to ApplicationContainer may appear in the log during startup due to an expected initialization order. | 458250 | 99665 |
 | Pipelines | ​Find Best Match logic of Item Resolver may return incorrect items​. |   
 | 110672 |
 | Platform | ​​When responding to a search request, the Item Web API ignores field values stored in base templates.​​​​ | 441481 | 64610 |
 | Platform | ​The General Link dialog inappropiately encodes​ the contents of the Query String property. | 439119 | 82835 |
 | Platform | ​[Debug mode] Some assemblies are built in debug mode​. |   
 | 108138 |
 | Platform | ​Item resolver works incorrectly if url/path contains an underscore.​ |   
 | 103063 |
 | Platform | The Select Item dialog is unusable. | 417731 | 95297 |
 | Rich Text Editor | ​Text fields become unresponsive after RTE closing​. | 405330 | 94824 |
 | Sitecore Services Client | ​Sitecore.Services.Client prevents using Attribute Routing with ASP.NET WebAPI​. | 431698 | 59317 |
 | Sitecore.ContentSearch | ​Lucene: Obsolete 'Sitecore.Search' API must be disabled in version 7.2, 8.0 and 8.1.​ |   
 | 97745 |
 | Social Connected | The Twitter Share button goal is not triggered by an event. |   
 | 72582 |
 | Social Connected | ​Facebook Social connector doesn't work with Facebook API v2.5 (last version) for newly registered applications. |   
 | 78926 |
 | Social Connected | ​Unable to post to Facebook pages. |   
 | 87047 |
 | Social Connected | ​Social jobs are not started due to library absence. |   
 | 82884 |
 | Social Connected | ​Second "Login" into the system via social networks produce the "NullReference" exeption. |   
 | 103883 |
 | Social Connected | ​Not possible to add a Facebook account when using Facebook API 2.4; "Invalid Scopes: read_stream" error message is shown. |   
 | 67975 |
 | Social Connected | Facebook ​Like and Share buttons are not triggered by an event. |   
 | 103791 |
 | Social Connected | ​The LinkedIn Share button is not triggered by an event. |   
 | 103326 |
 | Social Connected | ​The Google +1 button is not triggered by an event. |   
 | 106418 |
 | Social Connected | ​Possible NullReferenceException in ConnectorClientManage. |   
 | 68917 |
 | Solr | ​Automatic type conversion for IEnumerable`<T>`​ | 401515 | 94608 |
 | Solr | ​Two or more negative clauses in a query cause an empty result​. | 398622 | 94448 |
 | Solr | ​Optimize command timeout prevents swapping cores of SwitchOnRebuild index​. | 405677 | 94842 |
 | Solr | ​Search limits results by _language filter query when the client language differs from the default language​. | 426036 | 95597 |
 | Solr | ​TheSolr SwitchOnRebuild mechanism does not use a swapped index but rather only rebuilds it​. | 442441 | 96429 |
 | SPEAK | ​The title bar in some dialogs are not correctly positioned in the Edge browser. |   
 | 112150, 112634, 112645, 112877, 112894, 74331, 83177 |
 | SPEAK | ​After authenticating users, ​the login page ignores the RedirectUrl parameter and instead redirects all users to the ​Launchpad. | 53027 |   
 |
 | SPEAK | ​When responding to a search request, the Item Web API ignores field values stored in base templates.​​​​ | 64610 |   
 |
 | SPEAK | When a user clicks Browse on an Image field that already contains a selected image, Sitecore opens the Media Browser dialog with only the selected image displayed in the list and the dialog does not allow the user to locate other images, which makes it impossible for the user to change the image once selected. | 82830 |   
 |
 | SPEAK | ​The General Link dialog inappropiately encodes the contents of the Query String property. ​ | 82835 |   
 |
 | Update Installation wizard | ​A number of items have been removed from the PathAnalyzerDictionary​. | 456432 | 97037 |
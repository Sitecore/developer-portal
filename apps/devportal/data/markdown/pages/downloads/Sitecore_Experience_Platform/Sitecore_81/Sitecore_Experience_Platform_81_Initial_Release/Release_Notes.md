---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Initial_Release/Release_Notes
---

**October 20, 2015 – released Sitecore Experience Platform 8.1 (rev. 151003)**

This is a feature release. Sitecore recommends that you upgrade to this release if the included features meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

The Sitecore Experience Platform 8.1 includes:

-   Fully integrated Device Detection features
    
-   Fully integrated IP Geolocation features
    
-   Enhanced Experience Editor features
    
-   New Experience Analytics reports and dimensions
    
-   New SPEAK components and improved SPEAK component framework
    
-   New Language Fallback features
    
-   Marketing Foundation improvements
    
-   Improved Content Testing UI
    
-   Integrated Campaign Creator
    
-   Improved Path Analyzer components
    

### Documentation

For all Sitecore Experience Platform 8.1 documentation, please visit the new [Sitecore Documentation Site](http://doc.sitecore.net/).

## New features & improvements

### Platform

-   Classic mode for IIS has been deprecated, and the httpModules and httpHandlers elements have been removed from the Web.config file.
    
-   Configuration options for the custom Item Bucket indexes have been improved.
    
-   The Media request prefix has been changed to a hyphen by default in order to boost performance.
    
-   A set of improvements have been implemented for the Preview functionality.
    
-   A number of fixes in item URL generating and opening item preview logic have been implemented.
    
-   A number of fixes have been implemented to Content Search in order to prevent index inconsistency in scaled environments.
    
-   Sitecore cold start-up time has been improved.
    
-   JavaScript error logging has been implemented
    
    -   This enables client-side messages to be logged in Sitecore server logs (for example, all unhandled JavaScript exceptions are logged).
        
-   Telerik control has been updated to the latest version.
    
-   The SwitchMasterToWeb.config file has been moved to a specific folder under the App Config/Include folder.
    
-   `<log4net>` section has been moved under `<sitecore>` node and now supports new support patching.
    
-   Sitecore MVC has been updated to use ASP.NET MVC 5.2.3.
    
-   Support for SOLR 4.10 has been added.
    

### Device Detection

Sitecore Device Detection is a subscription-based service that customers can sign up to through the Sitecore App Center. The service enables device identification through the device user agent string and mobile web browser properties (such as device model, OS and screen size). Information from identified devices can be used to customize the device layout for specific mobile devices, and to personalize content for mobile-oriented marketing activities.

-   Subscription through the Sitecore App Center
    
-   Device Detection features are fully integrated into the platform. Detected devices can be used with device layouts, and custom device layouts created based on specific device properties
    
-   Device properties can be used as rules in the Rule Set Engine to personalize layouts and content.
    
    -   The most commonly used device properties are available as predefined conditions for device-based rules
        
-   Device rules can be used in engagement automation and for triggering goals and events
    
-   Access to over 500 different device properties per device using the API or custom rules in the Rule Set Engine
    
-   Device information is integrated with the contact’s interaction history in the xDB
    
-   Experience Analytics integration
    
    -   Reports and dimensions designed for reporting on visitors devices
        

### IP Geolocation Detection

The Sitecore IP Geolocation service uses website visitors’ unique IP addresses to automatically populate the Sitecore xDB with location details, for example, country, region, and city, when they visit a Sitecore-powered website. This information helps you personalize customers’ experiences and optimize your campaigns through segmentation, personalization, and content profiling.

#### New features

-   Service subscription through the Sitecore App Center
    
-   IP Geolocation service features are fully integrated into the platform
    
-   Integration of geolocation data into the xDB
    
-   Personalization based on location can be applied to goals, events, and engagement automation states
    
-   Visitors’ IP geolocation information can be viewed in both the Experience Profile and through location-based reports in Experience Analytics
    
-   The List Manager application supports segmenting lists using IP geolocation parameters
    
-   Improved IP resolution. The service performs additional IP lookup requests in case of unsuccessful requests.
    
-   Dedicated IP geolocation cache that uses already known locations for performance
    

### Experience Editor

#### Version management improvements

-   The Versions tab has been added to the Experience Editor ribbon:
    
    -   The tab has Add, Remove, Compare, and Versions buttons.
        
    -   The Language selector has been moved from the Home tab to the Versions tab to align with the Content Editor user interface.
        
    -   The current version of the item is displayed in on the Versions gallery button.
        
-   Reset functionality has been implemented in the Experience Editor.
    

#### Shared layout editing improvements

-   A shared layouts view has been implemented in the Experience Editor (Edit all versions).
    
-   The ability to edit the shared layout’s presentation (Add, Remove, or Move components) in Edit mode has been implemented.
    
-   The ability to edit shared and unversioned fields in a shared layout has been implemented.
    
-   Versioned fields have been replaced with a placeholder in the Edit all versions view.
    
-   The ability to configure personalization and testing on shared layouts has been implemented.
    

#### Validation improvements

-   Validation has been implemented in Edit mode, and occurs when the page is saved
    
-   Fields Validation checkbox has been added to the View ribbon tab
    
-   Proofing chunk with markup and validation buttons has been added to Home ribbon tab
    
-   Validation notification frames have been highlighted. The highlight coloring aligns with the CMS notification errors (for example, yellow for warning messages and red for error messages).
    

#### Experience Editor loading time

-   Button loading time has been optimized.
    
-   Breadcrumb loading time has been improved.
    
-   Locked items counting function has been optimized.
    
-   Improved datasource request performance
    

#### Other improvements

-   The Advanced ribbon tab has been renamed to Presentation to align the ribbon with the Content Editor.
    
-   The visual design of the Hide ribbon button has been fixed to comply with the visual guidelines.
    
-   Explore mode is now supported when the XdbSettings.Tracking.Enabled setting is set to false.
    
-   The Ribbon code used for Sheer UI has been marked as obsolete, with the Obsolete attribute. The obsolete code will be removed in Sitecore XP version 8.2.
    
-   The Experience Editor now maintains the page version when opening the item from the Content Editor.
    
-   Support for CMS-only mode has been added.
    
-   Support for Language Fallback has been added.
    

### SPEAK

-   The SPEAK 1.1 framework has been deprecated, but it has still been included in 8.1 for backwards compatibility.
    
-   SPEAK 2.0 includes a new framework and BCL (Business Component Library).
    
-   SPEAK 2.0 now contains a new core for improved usability, flexibility and performance.
    
-   The majority of the SPEAK 1.1 components have been ported to the SPEAK 2.0 component library.
    
-   Components have been improved for developer ease-of-use.
    
-   The ListControl and TabControl have been redeveloped for SPEAK 2.0 to provide an improved experience for page developers and end users.
    
-   New SPEAK 2.0 components include:
    
    -   Form
        
    -   Grid
        
    -   Confirmation dialog
        
    -   Scrollable panel
        
-   Responsive design has been improved for many components.
    
-   A component guidance site with properties reference and component demos is included in 8.1.
    
-   Sitecore will use SPEAK 2.0 for future application development.
    
-   Sitecore will encourage partners to use a derivative of SPEAK 2.0 in a later release.
    

### Marketing Foundation

-   CMS-only mode is a new feature that is part of of the Experience Management product package. This enables you to run Sitecore without xDB.
    
-   In CMS-only mode, the following functionality can be disabled on a per-server basis:
    
    -   Collection of data into a centralized store (MongoDB)
        
    -   Processing and aggregation
        
    -   Reporting
        
-   The new Contact Behavior Profile feature enables personalizing content for a contact based on their interaction history.
    
    -   Personalization profile scores are stored against individual contacts in the xDB.
        
    -   Aggregated scores by contact enables you to personalize content based on the historical activities a visitor has performed on the website.
        
-   The new Key Behavior Cache feature offers the ability to use historical behavior, such as triggered marketing activities (for example, goals, or events) and other key data during an interaction.
    
    -   The Key Behavior Cache is designed to improve performance, as it is fast-loading and customizable.
        
-   Venues have been added to the interaction data model for use in subsequent releases.
    
    -   A venue is the physical location where an interaction occurs, such as a POS (Point of Sale) system.
        
-   The interaction registry API has been updated to accept additional fields.
    
    -   The interaction registry enables you to create interactions without creating a full web session.
        
-   The Outcome Manager includes the following updates:
    
    -   All outcomes for an interaction can now be queried.
        
    -   Indexing of the interaction ID field to ensure higher performance
        
    -   The ordering of the storage of outcomes at the end of web sessions has been changed. This increases data consistency by ensuring that linked interactions are stored before the outcome is stored.
        
-   Marketing Foundation now supports MongoDB v3.0
    
    -   Sitecore supports the Mongo 1.10 drivers only. The Mongo 2.0 driver is not supported.
        
    -   Sitecore supports the following MongoDB Database versions:
        
        -   MongoDB 2.6 mmapv1
            
        -   MongoDB 3.0.4 mmapv1
            
        -   MongoDB 3.0.4 WiredTiger
            

### Web Forms for Marketers (WFFM)

-   Updated to include the latest WFFM 2.4 release with specific improvements to MVC.
    
-   Support has been added for WFFM so that it can work in CMS-only mode.
    
-   Support has been added for SQL form data storage. This can be used as alternative data storage when xDB has been disabled.
    
-   WFFM (MVC) has been updated to support the Federated Experience Manager.
    

### Federated Experience Manager (FXM)

#### New features

-   Marketing outcomes can now be captured on an external site through FXM. 
    
-   FXM has extended the Click Actions and Page Filters functionality to support outcomes.
    
-   The FXM API has been extended to support outcome triggering.
    
-   Custom monetary values can now be assigned to outcomes through the API.
    
-   The FXM API now supports custom data being sent to Sitecore from goals, page events, and outcomes.
    

#### Other improvements

-   FXM now supports deploying its tag through Google Tag Manager. However, the FXM Dashboard can still show the following warning when creating a new external site: “Unable to locate JavaScript beacon on external website”. You can ignore the warning, as it doesn’t affect any functionality.
    
-   FXM now functions through HTTP POST requests.
    
-   FXM instances are no longer required to enable the ItemService for non-localhost requests.
    
-   A loading indicator has been added to the FXM SPEAK application.
    
-   The set of available FXM rules on the domain matcher template has been extended.
    
    -   You can now specify domain matchers using referral URL, request path and request query string.
        

### List Manager

-   Performance improvements have been implemented across the application.
    
    -   Improvements allow for faster list creation and indexing.
        
    -   Modifications to the List Unlock agent have improved the SOLR query efficiency.
        
-   New segmentation rules have been added to Segmented Lists.
    
-   CSV imports with semicolon delimiters are now supported.
    

### Experience Analytics

-   New reports reflecting the full taxonomy provided in the Marketing Control Panel have been added.
    
-   The following new dimensions and reports have been added:
    
    -   Outcomes
        
    -   Assets
        
    -   Asset facets
        
    -   Goals facets
        
    -   Campaign facets
        
-   Device detection dimensions and reports have been added.
    
-   Experience Analytics has added pie charts to support data analysis.
    
-   The pie chart type supports all existing metrics and dimensions, and it can work with multiple segments.
    
-   Drill-down functionality has been implemented to allow a user to open a new report based on a specific segment of a chart.
    
    -   This functionality is supported on bar and pie-charts.
        
    -   The header title can now be added to ListControls. It is hidden by default if no title has been added.
        
-   Several small bug fixes and corrections on reports have been implemented.
    

#### Other improvements

-   When CMS-only mode is enabled, Experience Analytics is not accessible. All requests are denied and an appropriate status page is displayed showing that CMS-only mode is enabled.
    
-   Bulk aggregation functionality has been enabled to improve aggregation performance.
    

### Experience Optimization

-   Enhancements to the Personalize the Component dialog have been implemented.
    
-   Two KPIs have been added to each rule in the dialog:
    
    -   Effect measures how the rule improves Engagement Value based on the original test results.
        
    -   Reach measures the percentage of site visitors that have seen the rule in the past 30 days.
        
-   The data visualization in the Personalization dialog has been improved to better communicate which rules are the best performers.
    
    -   Improvements to the index bars have been made to make the effect of each rule easier to understand.
        
    -   Several improvements to calculations and data storage have been implemented.
        
-   Improved test logic across languages and devices has been implemented.
    
    -   Enhancements have been added to facilitate setting up tests in specific languages.
        
    -   The ability to run individual tests on the same page in different languages has been implemented.
        
    -   Content tests now run across devices, whereas other tests are device-specific.
        
-   The Cancel test feature has been implemented.
    
    -   Test creators can now cancel tests without selecting a winner or consulting an administrator.
        
    -   Tests can be cancelled from both the Experience Editor and Experience Optimization applications.
        
-   List improvements:
    
    -   Improved UX consistency when selecting a test within a list.
        
    -   Device and language information has been added to the lists.
        
-   Starting tests on variables and personalization rules without using workflows has been implemented
    

### Campaign Creator

#### New features

-   Provides a unified, user-friendly interface to create, classify and manage campaigns.
    
-   Provides easy access to campaign codes to facilitate and enable the tracking of online marketing activities such as email campaigns or traffic from external websites.
    
-   Contains links directly to Experience Analytics for quick access to campaign performance reports.
    
-   Uses the marketing taxonomies to organize and filter campaign activities.
    
    -   Utilizes new Marketing Foundation APIs to facilitate quick taxonomy facet searching.
        
-   Enables creation and management of campaign activities without using the Marketing Control Panel or the Content Editor.
    
-   Allows the organization and filtering of campaign activities by date and time, as well as provisioning for open-ended campaign activities.
    
-   Automatically publishes campaign activities upon creation and unpublishes upon deletion.
    

### Path Analyzer

-   New map types covering outcomes, channels, goals and assets from the Marketing Taxonomy facets have been added.
    
-   The Outcome map type shows the paths that generate the most revenue, outcomes, and revenue per outcome.
    
-   The Channel map type shows the paths that contacts take through a website coming from different channels. Eight maps including the most common channels are included by default.
    
-   The Reverse goal and asset map types show the paths that lead to a specific goal or asset.
    
-   The Experience map type allows for custom maps to be created across sequences of pages, progressions across channels, campaigns, events and outcomes.
    
    -   Three experience maps are included by default. One provides an overview of the channels that drive visitors to a particular goal or landing page.Three experience maps are included by default. One provide an overview of the channels that drive visitors to a particular goal or landing page.
        
-   If CMS-only mode is enabled then Path Analyzer will not be accessible. All requests will be denied and an appropriate status page showing that CMS-only mode is enabled is displayed.
    

#### Other improvements

-   Enhanced support for multisite maps has been implemented.
    
    -   Global and individual site maps have been split.
        
    -   Ability to create multiple maps for a specific site has been implemented
        
-   The ability to rebuild historic data for new maps has been implemented.
    
-   The ability to redeploy previously deleted and restored maps has been implemented.
    
-   Direct dependency on the xDB has been removed.
    
-   Data compression support has been added to greatly reduce the size of Path Analyzer data in the reporting database.
    
-   UI fixes for Page Analyzer have been implemented.
    
-   Path Analyzer now supports MVC version 5.2.3.
    

#### Deprecated features

-   The start and end dates on map definitions have been removed.
    

### Language Fallback

This release focuses on the addition of Language Fallback as a core feature of the Sitecore Experience Platform. Language Fallback enables you to specify a default language when a visitor visits a page that does not have a relevant language version.

New features

-   A default fallback language can be specified under /system/languages.
    
    -   Item- and field-level language fallback modes have been implemented.
        
    -   Languages can fall back multiple times based on the associated languages versions.
        
-   Item-level language fallback mode:
    
    -   Enables fallback for empty item version in a given language to completely fall back to another language.
        
    -   Configuration options are set by site, template or item.
        
    -   Only dictionary entry items have language fallback enabled by default. Templates and items do not have language fallback enabled by default.
        
-   Field-level language fallback mode:
    
    -   Enables granular control of the fields that have fallback enabled, allowing you to translate or localize individual fields without having fallback enabled for all fields.
        
    -   Configuration options can be set per site and by the template field.
        
    -   Language fallback is not enabled by default for sites and fields.
        
-   Language fallback for dictionary items:
    
    -   Enables item-level fallback on a dictionary entry template’s standard values. When this feature is enabled, all dictionary items for a given site can use language fallback..
        
-   The Content Editor and Experience Editor support both item- and field-level language fallback modes.
    
    -   Item level fallback is respected and a read-only view is shown for fallback items with appropriate notifications.
        
    -   The Language selector shows the languages that have fallback versions enabled.
        
    -   Items that have fallback enabled will display a message indicating fallback has been enabled on the Versions selector.
        
-   A new Enforce Version Presence feature has been added as a part of the Language Fallback features.
    
    -   Item translation controlling has been enabled. A version must be created in the context language for the item to be returned from API.
        
    -   If this feature is enabled and the item has no versions in the context language, then the request will redirect to standard item not found (404).
        
    -   When API requests are made for items with no versions in the context languages, the requests are returned as NULL.
        
        Enforce version presence can be configured per site and per template or item. This functionality is not enabled by default for websites, templates or items.
        

### Social Connected

-   When CMS-only mode is enabled, all Social Connected functionality will continue to work. When CMS-only mode is enabled, Social Connected functionality will continue to work.
    
-   The Social Connected module is now compatible with Azure in Sitecore 8.1.
    

## Breaking changes

### Platform

### Sitecore.Abstractions

-   A number of new methods have been added to the Sitecore.Abstractions.IEventManager interface from Sitecore.Abstractions assembly. The signature of the Subscribe method has been changed.
    
-   The ICustomCache interface has been extended with the methods Clear, Remove and the property Enabled.
    
-   The IObjectLocator and the appropriate wrapper have been removed from Sitecore.Abstractions assembly.
    
-   A number of methods and properties have been removed from the ISettings interface and the appropriate wrapper class have been defined in Sitecore.Abstractions namespace.
    

### Sitecore.Kernel

-   The value of the MediaRequestPrefix constant that is defined in Sitecore.Constants class has been changed from ~/media/ to -/media/
    
-   The obsoleted Sitecore Todo has been completely removed.
    
-   The Sitecore.Analytics.Testing.Workflows WorkflowActionHelper class has been completely removed.
    
-   The Sitecore.Workflows.IAsyncWorkflow interface has been completely removed. The method StartExecute has been renamed to Execute and moved to Sitecore.Workflows.IWorkflow interface.
    

### Sitecore.Client

-   The property type ReportingManager in Sitecore.sitecore.admin.Aggregation has been changed from ReportingStorageManager to IReportingStorageManager
    
-   The Sitecore.sitecore.login.LoginPage has been removed as it is a legacy login page that has been deprecated.
    
-   A number of post-step classes defined in the Sitecore.sitecore.Upgrades namespace that had been used for upgrading purposes have been removed from Sitecore.Client assembly.
    

### Sitecore.ContentSearch

-   The properties EnableFieldLanguageFallback and EnableItemLanguageFallback have been added to the ISearchIndex interface that is defined in Sitecore.ContentSearch namespace.
-   A number of Add* methods have been added to the IDocumentBuilderOptions interface from the Sitecore.ContentSearch namespace.
    
-   The Sitecore.ContentSearch.ISearchIndexSummaryEx interface has been removed from the assembly. The method from this interface has been moved to ISearchIndexSummary interface.
    
-   The Sitecore.ContentSearch.Abstractions.EventManagerWrapper has been updated according to the changes in IEventManager interface from Sitecore.Abstractions assembly.
    
-   All interfaces from Sitecore.ContentSearch.Abstractions namespace now inherit from similar interfaces defined in Sitecore.Abstractions assembly.
    

### Experience Editor

-   The following deprecated code has been deleted, along with all the connected configuration, items, and JavaScript files:
    
    -   WebEdit commands – webedit:beginedit, webedit:editplaceholderproperties, webedit:saved, webedit:toggleselect
        
    -   Classes – Sitecore.Shell.Applications.WebEdit.Commands. ToggleDots, Sitecore.Web.UI.WebControls.WebEditButton
        
-   The Sitecore.ExperienceEditor.Speak.Constants.RequestParamters struct has been removed
    
-   The Logout requests Sitecore.ExperienceEditor.Speak.Ribbon.Requests.Logout and logout pipeline JS files -Website\sitecore\shell\client\Sitecore\ExperienceEditor\Pipelines\PerformLogout, items - core/sitecore/client/Applications/ExperienceEditor/Pipelines/PerformLogout have been removed
    
-   Access to the Experience Editor client API (Sitecore.ExperienceEditor.js, PageEditorProxy.js, Sitecore.ExperienceEditor.TranslationsUtils.js) has been changed. To access the Experience Editor API, you should now refer to it by RequireJS.
    

## Deprecated and removed functionality

### Platform

-   The SessionStateStoreProvider class from the Sitecore.SessionProvider namespace has been deprecated. Its responsibilities have been moved to the Sitecore.SessionProvider.SitecoreSessionStateStoreProvider abstract class. SitecoreSessionStateStoreProvider has been implemented to avoid breaking changes. (428869)
    
-   The Sitecore legacy search indexes from the Sitecore.Search namespace have been deprecated and will be removed in the next major version. (438644)
    
-   The misspelled setting Media.RequestProtection.HashParamaterName has been removed from the Sitecore configuration. A new setting with corrected name has been added. (438779)
    
-   The old Login page and the related deprecated settings Login.DisableChangePassword and Login.SitecoreUrl have been removed. (439337)
    
-   The WebEdit command from the Sitecore.Shell.Framework.Commands.System namespace has been made obsolete and is no longer used. (440728)
    
-   The obsoleted interface ISearchIndexSummaryEx has been removed from the ContentSearch API. The methods defined in this interface have been moved to ISearchIndexSummary. (437852)
    
-   The SitecoreItemLanguageCrawler crawler has been deprecated in favor of SitecoreItemCrawler.
    

## Resolved issues

## Platform

### Configuration

-   `<sitecore>` section has been moved from the Web.config file to a separate configuration file Sitecore.config under /App_Config directory. (426641, 434089)
    
-   To improve the media request performance default media prefix has been changed from ~/media to -/media. (428013)
    
-   encodeNameReplacements section in Sitecore configuration file has been updated to replace “ ” (space) characters in item path with - (hyphen) by default when generating and parsing item URLs. (417279)
    
-   The `<log4net>` section has been moved under `<sitecore>` node and supports patching from include files. (433502)
    
-   The SwitchMasterToWeb.config.example file located in /App_Config/Include directory has been moved to the subdirectory called Z.SwitchMasterToWeb. The change is based on a customer feedback and ensures that SwitchMasterToWeb patch is applied the last. (435010)
    
-   The outdated sections `<httpModules>` and `<httpHandlers>` have been removed from the Web.config file. (437095)
    
-   The content search logging configuration has been moved from Web.config to the /App_Config/Include/Sitecore.ContentSearch.config configuration file. (437747)
    

### Extensibility

-   The ConditionalSessionIdManager has been implemented and used as a default Session ID Manager. The new manager is pipeline-based, and allows for registering and using custom ID managers depending on specific conditions. (422137)
    
-   The InitializeManagers processor from the pipeline `<initialize>` has been split into several processors and has been moved to a new pipeline named `<initializeManagers>`. The InitializeManagers processor is designed to only execute the new pipeline. (430944)
    
-   The new pipeline getLayoutSourceFields has been introduced. This pipeline is responsible for defining fields and field order when used as the source for composing layout field value. (432093)
    

### Item buckets

-   The cache did not update correctly on remote servers when bucketing an item in a scaled environment. As a result, duplicate bucket structures could be created. This has been fixed. (406507, 447640)
    
-   The Bucket folder structure would be published without any versions when publishing was initiated right after the structure had been added to the bucket. This has been fixed. (423104)
    
-   Items in the bucket were not published if the items from the bucket structure did not have a version in publishing language. This has been fixed. (423267, 423944)
    

### Multibrowser fixes

-   [IE]The Recycle Bin application had a broken layout when it was opened in Compatibility mode. This has been fixed so that the application is always opened in Edge mode. (437468)
    
-   [Chrome] The Select Profile Card dialog did not show the list of available profile cards in Chrome. This has been fixed. (438038, 438058)
    
-   [Chrome, Edge] A notification that informs about Silverlight support being deprecated has been added to the Silverlight applications and shown for Chrome and Microsoft Edge browsers. (448530)
    

### Preview

-   The Default site item was not opened when clicking Preview on an item without a layout specified and clicking Ok on confirmation dialog. This has been fixed. (440418)
    
-   The logic for selecting the context site when opening item in Preview and WebEdit mode or generating item URLs has been improved. (321270, 389687, 321271, 321274, 385516, 391701, 417474, 436099)
    

### Publishing

-   Some items were published several times when publishing with the Publish Related Items option enabled. This has been fixed. (417352)
    

**Renderings and layouts**

-   The Layout Details dialog allowed the showing of a very limited number of characters in device name which made it almost impossible to differentiate devices that had similar name. This has been fixed. (440739)
    
-   The raw values for Shared and Final layout fields were not rendered correctly. This has been fixed. (441933, 447244)
    

**Rich Text Editor**

-   A number of issues in the Rich Text Editor control have been closed by updating the Telerik component to the latest version. (382821, 326460, 334584, 357268, 357401, 384462, 430165, 434222, 435386, 435789, 436778, 437491, 437749)
    
-   The SpellCheck Telerik dialog did not support localization. This has been fixed so that the dialog loads localization files from the specific location /sitecore/shell/Applications/Content Manager/Localization. (427664)
    
-   The double ampersand (&amp;) characters would sometimes be added to an image URL after changing image properties in the Rich Text Editor field. This has been fixed. (438956)
    
-   An additional `<br/>` tag was added to the end of a text when saving a Rich Text Editor field value. This has been fixed. (439137, 439395)
    
-   The message ‘The operation could not be completed. Your session may have been lost due to a timeout or a server failure. Please try again.’ would sometimes appear when working in the Rich Text Editor even when the session was not expired. This has been fixed. (414299)
    

### Serialization

-   The value of some item fields may have been missing when a content item was processed before the template, during serialization. This has been fixed. (442115)
    
-   Items with $ sign in their name were not deserialized correctly. This has been fixed. (443112)
    
-   The ParentForMovedItemNotFoundException exception sometimes appeared when updating database from serialization even when serialization was correct. This has been fixed. (443689)
    
-   The value for the fields that were shared in serialization but changed to versioned in current database was not updated correctly when updating the item tree from serialization. This has been fixed so that the data is restored correctly. (447261)
    

### Sitecore.ContentSearch

-   A number of requests to analytics data were performed when indexing Sitec0re items even when TrackingSiteContext.EnableTracking was set to false. This has been fixed. (436120)
    
-   The setting ContentSearch.SearchMaxResults was defined and has a different value in the two configuration files: Sitecore.ContentSearch.config and Sitecore.ContentSearch.Solr.Indexes.config. This has been fixed so that setting has been removed from Sitecore.ContentSearch.Solr.Indexes.config configuration file. (437841)
    
-   Content Search indexes configured to use the Lucene provider had been inconsistent on Content Delivery servers after publishing, especially when content had been heavily updated on Content Management servers. This has been fixed. (429114, 438061)
    
-   It had not been possible to override some sections from the default index configuration for a custom index. This has been fixed so that sections that define field map, custom fields, exclude\include field, etc. can be overridden or extended by custom changes for a custom index .(406165)
    
-   The Optimize task that is defined in the Sitecore.ContentSearch.config configuration file was executed every hour. This was too frequent. The configuration has been changed to run the optimize index operation every 12 hours. (441145)
    
-   The Language Template facet was not localized correctly in Japanese. This has been fixed. The new index field ‘culture’ that contains invariant culture information has been added to the index. The Language template faced has been changed to use new index field. (441763)
    
-   Search by the alias Updatedby did not work in the UI when using SOLR provider. This has been fixed. (444635)
    
-   There were too many fatal errors in the Crawling log file when using the remote rebuild strategy. The error stated that the index rebuild operation should not be performed. This has been fixed so that current information is written with the Debug level instead of the Fatal level. (427361)
    
-   Indexing was stopped and not resumed if the CD server was restarted during the indexing process triggered by onPublishEndAsync strategy. This has been fixed. (435903)
    
-   The PublishEndAsync strategy had updated the same item language versions multiple times. This has been fixed. (411726, 442321)
    
-   Changes in the shared field were indexed in a single version of the item. This has been fixed so that all versions of the item are now indexed when the shared field is changed. (435697)
    
-   Data to be indexed was not selected correctly after a full index rebuild. As a result, the same data was indexed several times. This has been fixed so that last indexed information is saved after the index rebuild is finished. (439944, 442487)
    
-   The Update index operations in the SitecoreItemLanguageCrawler class were performed with the database caches disabled option. This has been fixed so that the setting ContentSearch.Indexing.DisableDatabaseCaches is referenced. (440269)
    
-   The onPublishEndAsync and intervalAsyncMaster strategies did not correctly index changes such as Item Copy and Item Move. This has been fixed. (435808, 440402)
    
-   Every item change operation had been passed to the index for processing even if the item should not be handled by the index. This has been fixed to optimize the filtering logic. (440374, 441688)
    
-   Obsolete item versions had sometimes been present in search indexes after publishing. This has been fixed. (440383)
    
-   Asynchronous strategies have been optimized to minimize the number of requests to EventQueue. (441715)
    
-   IntervalAsynchronousStrategy was using the History table to retrieve data to be indexed. This part of the API is going to be obsoleted in a future release. The strategy has been updated to use the EventQueue instead. (378584)
    

### Update Installation Wizard

-   It was not possible to customize the update package installation process because a number of methods in Sitecore.Update.InstallUpdatePackage were not virtual. This has been fixed so that methods Install, FinalizeInstallation and ExecutePostStep are virtual now. (437847)
    

### Miscellaneous

-   The log message had not contained information about the item to be updated when deleting an item that has links from other items. This has been fixed so that the log message contains full information about the items to be updated. (435289)
    
-   A useless pipe (“|”) separator was rendered on a Login page when value of the setting Login.DisableRememberMe has been changed to true. This has been fixed. (435929)
    
-   A wrong item was resolved when processing specific URLs, and the Layout Not Found page was shown even when the item did not exist. This has been fixed. (436260)
    
-   The title of the Upload File dialog did not support localization and could not be translated. This has been fixed. (436691)
    
-   It was not possible to create an alias for the items under /sitecore/content node. You could only select items under /sitecore/content/home. This has been fixed. (436867)
    
-   A NullReference exception would sometimes appear when comparing instances of Sitecore.Data.ID and Sitecore.Data.ShortID. This has been fixed. (437146)
    
-   The description of the Reset Field dialog was not clear enough. This has been fixed. (438952, 439979)
    
-   The Reset Field dialog did not show values from the default value defined on field item of the template when resetting fields on Standard Values items. This has been fixed. (439977)
    
-   The processing of queued events was done synchronously during an instance restart and delayed startup time. This has been fixed so that queued events are processed asynchronously during startup. (442162)
    
-   To prevent occasional removal, all language items available in the default Sitecore installation are now marked as protected. (390541)
    
-   A Rule field has been added to the Device item definition template. The device detection logic has been extended to support custom rules. (384696, 435614)
    
-   The Sitecore installer has been extended to enable the compilation of MVC views after Sitecore has been installed. (407628, 440635, 430484)
    
-   The performance of the get item operation for both regular and cloned items has been increased by introducing a separate shared field ‘__Source Item’ for keeping reference to original item. (436659) 
    

### Additional Platform fixes

-   This section provides reference numbers for scenarios reported by Sitecore customers that have been addressed as part of other fixes or are no longer reproducible. (315942, 336104, 336647, 339462, 347732, 364308, 373615, 386388, 408109, 429471, 438329, 440779)
    

### Experience Editor

-   A NullReferenceException exception would appear when clicking the Delete Page command in the Experience Editor and then selecting Cancel in the confirmation dialog. When the OK button was clicked, the page was removed but not refreshed. This has been fixed. (49533, 404366, 404999, 417167, 404342, 410476, 414367, 417202, 422355, 407084, 410402, 407318, 435263, 431517, 417872, 418114, 426537, 421480, 431399, 423733, 419541, 434189)
    
-   The $ variable was initialized by the Experience Editor - jQuery compatibility issue. This has been fixed. (49947, 429254, 431194, 428797, 429555, 429535, 429805, 433740, 428944, 433038, 436830, 441250, 444273).
    
-   The Insert component command resulted in an uncaught exception for empty components. This has been fixed. (49459, 359113, 403301, 379203, 406160, 398904, 398650, 384779, 360660, 358652, 393894, 388945, 425828, 401009, 376820, 434328, 381961, 403214)
    
-   The Experience Editor did not perform a redirection after moving a page in Firefox. This has been fixed. (49534, 404378, 419414, 414347, 414492, 404343, 410519, 426606, 426476, 419883, 423460, 414459, 423736)
    
-   A Javascript error occurred when inserting a sublayout into an item, when placeholders were not set in the presentation. This has been fixed. (51557, 380995, 428871, 407011, 416794, 388881, 379711, 398809, 388536, 432464, 418126)
    
-   Renaming the website site in the `<sites>` section of the web.config had disabled buttons in the Experience Editor. This has been fixed. (49981, 429855, 430314, 429335, 433988, 433998)
    
-   The WebEditRibbon url didn't contain the necessary 'la' and 'vs' query string parameters. This has been fixed. (50027, 431232, 431842, 434209, 430735, 434149, 447841)
    
-   The injection of `<script >` into a page's `<head>` had broken Device Simulation functionality. This has been fixed. (49527, 402719, 428842, 399049, 426233)
    
-   The Select Media dialog had displayed incorrectly on pages with a lot content on them. This has been fixed. (49528, 403109, 428874, 414295, 402835)
    
-   The Edit the text button on a sublayout did not work without saving. This has been fixed. (51655, 434543, 435044, 434373, 435676)
    
-   The Other menu in the Experience Editor was not set to a fixed location on the screen. This has been fixed. (51672, 435532, 435320, 438573, 438564)
    
-   Displayed languages in the Experience Editor dropdown had not been synchronized with the Content Editor. This has been fixed. (51530, 367416, 367138, 355558, 367072, 424490)
    
-   In some cases, a rendering would be lost after moving a presentation component. This has been fixed. (49728, 422629, 421181, 430286)
    
-   An item had been inserted in an incorrect language when inserting it from the edit frame. This has been fixed. (49942, 429112, 428881, 433828)
    
-   Javascript errors had occurred when deleting an item in the Experience Editor. This has been fixed. (51618, 407731, 407513, 417930)
    
-   Experience Editor did not remember which device layout had been selected after navigating to another page. This has been fixed. (51494, 340034, 394600, 340019)
    
-   Preview had ignored publishing restrictions for media items. This has been fixed. (49519, 398694, 398587)
    
-   The Experience Explorer showed an error when displaying non-English UIs. This has been fixed. (49906, 428167, 427996)
    
-   Workflow notifications in the Experience Editor did not respect security. This has been fixed. (50063, 432295, 432186)
    
-   The Template cannot be deleted error had appeared while analyzing the upgrade package. This has been fixed. (49954, 429404, 435054)
    
-   The language flag icon did not change when switching languages in the Experience Editor. This has been fixed. (50093, 433324, 433007)
    
-   Links that had been set in the Experience Editor using inline editing were not saved. This has been fixed. (51673, 435533, 434623)
    
-   The Experience Editor did not open the latest item's version with active publishing restrictions. This is not relevant since the version selector has been added  to the Experience Editor. (49570, 417533)
    

-   Clicking the Content Editor or Media Library links in the Workbox popup had reloaded the page. This has been fixed. (59449, 439785).
    

### Marketing Foundation

-   The undisposed IDbCommand in the definitions/taxonomy API is now disposed. (69620)
    
-   An issue where RebuildReportingDB.aspx had not worked in scaled environment has been fixed. (68026)
    
-   You can now fully configure the X-Forwarded-For processor for IP addresses in the header. (68213)
    
-   ItemOutcomeDefinitionRepository class used cache during deployment of outcome definitions. Usage of cache could cause old values to get published to the reporting database. This problem is solved now. (96477)

### SPEAK

-   Link would not save correctly when using the Insert Link dialog and filling a value in Target field. This has been fixed. (427159, 427161)
    
-   The Media Details panel was not shown when selecting an image in Select Media dialog. This has been fixed. (434301, 437380)
    
-   The ProgressIndicator could raise an error and fail to disappear when the related process completed. This has been fixed. (38653, 38567)
    
-   The ListControl could raise a change event for each row when the user selected the SelectAll toggle. The ListControl now only raises a single change event. (38663)
    
-   The ListControl's change:checkedItemIds event did not provide a context argument to more information, such as which item(s) were impacted and how they changed. This has been fixed. (38664)
    
-   SPEAK added the deprecated httpModules and httpHandlers elements in the Web.config file. These have been removed. (437095, 58175)
    
-   The speak-default-theme.css file contained broken links. This has been fixed. (45467)
    
-   The SubAppRenderer component did not execute the associated SubPageCode. This has been fixed. (50627, 50567)
    
-   Following a session timeout, SPEAK pages could act inconsistently. SPEAK pages now consistently redirect the end-user to the Login page after session timeout. (53672)
    

-   The .Sitecore.Speak.Important.config file became hidden when installed via the Sitecore zip installation file. The file has been renamed to 001.Sitecore.Speak.Important.config. (57942)
    

### Federated Experience Manager

-   The item name was shown instead of the display name for the placeholder in the FXM Experience Editor. This has been fixed. (55290, 436992)
    
-   The CurrentPageMustBeTracked exception was thrown after 1 minute of inactivity when pressing a button with assigned with Capture Click Action. This has been fixed. (41444, 431035)
    
-   The FXM did not render a placeholder to an element on the external site if the page contained the same elements without the ID attribute. The issue is typical for ASP.NET web forms sites. This has been fixed. (50383, 433793)
    
-   Traffic type was not correctly resolved for external sites in some cases. This has been fixed. (66585, 443242)
    

### Content Testing

-   PhantomJS.exe could not found when dataFolder was not set to default. This has been fixed. (436382)
    
-   When an invalid datasource was set, it gave an exception in the GetOptimizationRenderingChromeData class. This has been fixed. (449052, 448868, 448644, 444101, 443825, 441869, 440753, 437197, 436002, 62437, 441064)
    
-   When selecting a page to test against, it would use the default language of the page instead of the specific language. This has been fixed. (439722)
    
-   The rebuild task for the sitecore_suggested_test_index did not create an index update job. This has been fixed. (440971)
    
-   When an item contained a hardcoded dash in the name, it could not be saved. This has been fixed. (442369)
    
-   Conditions were rendered incorrectly in the Personalized experience dialog. This has been fixed. (447778)
    

### List Manager

-   The UnlockContactListsAgent depends on the culture of a contact. Issue has been fixed where some lists were not unlocked due to differences in language setting between the list and the contact. (53305, 431777)
    
-   Lists became locked when importing an empty csv file. This has been fixed. (65432)
    
-   Performance improvements to the List Manager API have been made to improve the speed of obtaining contacts from a list. (59593, 437718)
    
-   Performance improvements to the UnlockContactList Agent have been made in order to reduce the resources used by the agent. (59596, 437726)
    
-   Querying a contact’s list membership resulting in the reading of the entire list, causing performance issues. This has been fixed. (54347, 437719)
    
-   Commas within CSV import column headers resulted in incorrect mappings. This has been fixed. (59590, 435872)
    
-   A previous bug prevented CSV file imports when using IE9. This has been fixed. (59601, 439738)
    
-   The issue where a Progress Indicator appears unexpectedly several times on some pages has now been resolved. (65706)
    

### Social Connected

-   Campaign Statistics tracking when operating in a distributed Sitecore environment have now been fixed. (31568)
    
-   Previous changes to the LinkedIn API created a 403 error that appeared during login to site with LinkedIn connector. This has been fixed. (56081)
    
-   Previous changes to the Facebook API resulted in errors when attempting to add Facebook accounts or login with Facebook connector. This has been fixed. (56082, 438065)
    
-   An issue where the Messages button didn't work in Experience Editor (Sitecore 8.1 rev.150409) has now been fixed. (52882)
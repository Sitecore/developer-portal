---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update4/Release_notes
---

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](http://dev.sitecore.net/).

## Highlights

-   Numerous fixes applied to the visual design across the platform
    
-   Numerous fixes to the Insert Link dialog in SPEAK
    
-   Improvements in the Boost and Kick off user functionality
    
-   Performance improvements in indexing and database operations
    

## Documentation

For all Sitecore Experience Platform 8 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/).

## Important changes

### Sitecore.ContentSearch API

-   The ISearchIndexSummaryEx interface has been marked as obsolete and will be removed in future Sitecore versions. (437849)
-   The default value of the ThrottlingEnabled property for all crawlers in the analytics index has been changed to false. (439003)

## New features & improvements

### Marketing Foundation

Batch aggregation support has been added.

-   Batch calls have been added to the reporting database to store aggregated data. This includes the following new performance counters:
    
-   Aggregation | Average Batch Size - Live
    
-   Aggregation | Average Batch Size - History
    
-   Aggregation | Number of Batches Containing Failing Items - Live
    
-   Aggregation | Number of Batches Containing Failing Items – History
    

-   A new hashing algorithm has been introduced.
    
-   Reversed order has been enabled for historical processing
    
-   The automated clean-up of RDB Trail data has been introduced.
    
-   The ThrottlingEnabled feature is now disabled by default for the Contact Segmentation index (sitecore_analytics_index)
    

## Resolved issues

### Engagement Analytics 

-   InvalidOperationException would sometime appear on the Content Delivery server when processing contacts in the commitSession pipeline. This has been fixed. (438054)
    

### Experience Editor

-   In the MVC view, it was not possible to add controls to the placeholders that had a name containing capital letters. This has been fixed. (348337, 426211)
    

### Multibrowser fixes

-   The Rendering of pages control has been fixed in User, Role and Domain Manager Applications. (429936)
-   [IE]The RequestValidationException was thrown if you clicked any item in the Content Editor after your session had expired. This has been fixed. (437015)

### Renderings and layouts

-   The final layout value was copied and saved into the field directly from the shared layout when the Shared layout field was edited for the first time. This has been fixed so that now the Final layout value inherits data from the Shared layout field. (435374, 432949, 435423)
-   The InvalidOperationException exception would sometime appear if you edited the shared layout value in the item that already contained data in the Versioned layout field. This have been fixed so that conflicts between shared and version layout values are resolved correctly. (440529)

### Rich Text Editor

-   The cursor disappeared in the Rich Text Editor field if you cleared its value. This has been fixed. (429600)
    

### Security applications

-   The number of boosted users was not updated after using the Boost users feature. The number was only updated after you restarted the Sitecore instance. This has been fixed. (434314)
    
-   The Kick off users page did not allow you to kick off previous current user sessions. This has been fixed. (434369)
    
-   The old name of the Experience Editor application was rendered on the Profile tab in the User Manager application. This has been fixed. (435031)
    

### Serialization

-   The Update Database operation from the Developer toolbar in the Content Editor would sometime stop responding and never finish. This has been fixed. (432169, 432554)
    

### Sitecore.ContentSearch API

-   The ContactIndexable.LatestVisitDate property was not working correctly, and as a result, some the contact data could be lost. This has been fixed. (434620)
    
-   The ISearchIndexSummaryEx interface has been marked as obsolete and will be removed in future Sitecore versions. (437849)
    
-   The Trigger method in the Sitecore.ContentSearch.Maintenance.OperationMonitor class allowed the simultaneous execution of several actions that caused various indexing and performance problems. This has been fixed. (439620)
    

### Update Installation wizard

-   The wrong wizard buttons were shown in the Update Installation wizard after executing Retry the installation action. This has been fixed. (429368)
    
-   The Update Installation wizard did not support the installing of files into the data folder if it was located outside the Sitecore instance. This has been fixed. (429063, 434126)
    
-   The NullReferenceException exception would sometime appear during the update package installation in the Update Installation wizard. A number of files were not updated even when installation completed successfully. This has been fixed. (437791, 438125, 437386, 438332)
    

### Marketing Foundation

-   There was an issue with cluster redirection which incorrectly formed the redirection url. This has been fixed (437879, 96053, 434674)

### SPEAK

-   The Campaign Creator application could throw a JS error on a slow PC: "Cannot read property 'bridge' of undefined". This has been fixed. (45527)

### List Manager

-   Overall performance has been improved resulting in speedier list creation and indexing, including the modification of the List Unlock Agent to increase the efficiency of SOLR queries. (435743, 435389)
    
-   Some lists were not unlocked when there were differences in the language settings between the list and the contact. This has been fixed. (431777)
    

### Social Connected

-   Changes to the LinkedIn API created exceptions if a user tried log in using LinkedIn credentials. In the LinkedIn connector, API changes meant that some permissions required explicit approval from LinkedIn. This has been fixed. (55471)
-   Login and account creation caused issues due to recent changes to the Facebook API. This has been fixed. (438065)

### Content testing

-   The query to update sitecore_suggested_test_index was executed very slowly. This has been fixed. (439641)
-   The request time for the list of active tests and the personalization report was slow with a high number of experiences. This has been fixed. (438504)
-   In some cases, test definition items were overwritten when a page test was started. This has been fixed. (60178)
-   When several personalization rules have been added to a page, a System.Io.IoException exception could appear. This has been fixed. (54486, 432256)

### Path Analyzer

-   The property store was not defined on the remote reporting server. This has been fixed by moving the pathAnalyzer/propertyStore to the "core" Sitecore.PathAnalyzer.config file. (1143).
-   The HMAC authentication failed if the remote reporting server's system clock was not in sync with the CM server. This has been fixed. (1110)
-   In certain cases, the date resolution logic failed to return the start date of the first interaction from the xDB. This has been fixed. (1371).
-   In certain cases, the date resolution logic returned wrong dates and failed silently when the xDB contained data for a single day. This has been fixed. (1307).
-   The dictionary entry items were missing from the distributive property and needed a workaround. This has been fixed. (430241, 855). 
-   Occasionally the Path Explorer application went blank when working with funnels. This has been fixed. (744).

### Experience Analytics

-   Segments failed to deploy in scaled and cloud environment. This has been fixed (440090)
-   Incorrect DateTime formatting caused an error in the initialization of segment definitions. This has been fixed. (435233)

### Miscellaneous

-   The logic for determining the server IP address on the Login page was not working properly. The page has been optimized so that now the code that resolves the IP is not executed. (348337)
-   The name of the HashParameterName setting contained a typo. This has been fixed so that the correctly named setting has been added to the configuration file and refers to the old one as a fallback. The wrong setting has been obsoleted and will be removed in the next major version. (427635)
-   The rule commands overlapped part of the rule text on hover in the Rule Editor dialog and this prevented specifying rule conditions. This has been fixed. (432734)
-   The Sitecore.Web.UI.Sheer.Message.Parse method did not correctly parse messages that contained a question mark (‘?’). This has been fixed. (433093)
-   The __OnSave workflow command was visible on the Review tab in the Content Editor or Workbox when it was added to a custom workflow. This has been fixed by returning the logic from previous Sitecore versions. (433827)
-   The value of the Suppress Comment checkbox specified on the workflow state was not taken into consideration. This meant that users were always asked to enter a comment when they executed a workflow action that changed the workflow state of an item. This has been fixed. (434914)
-   If you tried to change the field sharing for a template field in the Template manager application and standard values was enabled, the changes were not saved. This has been fixed. (434917)
-   It was not possible to use the Content Editor on CD servers. This has been fixed so that the SwitchMasterToWeb configuration file no longer removes the Master dataview. (435452)
-   The Japanese translation text for the Is in Specific State rule item was incorrect. This has been fixed. (436767)
-   The IOException exception would sometimes appear when requesting Sitecore icons on a heavy Sitecore load. This has been fixed so that the code responsible for requesting and caching icons has been reworked to be thread safe. (438009)
-   The NullReferenceException exception would sometime appear when you opened the Insert Link dialog if the Sitecore Link Manager was configured not to add aspx extension to the links. This has been fixed. (416281)

### Additional fixes

-   This section provides reference numbers for scenarios reported by Sitecore customers that have been addressed as part of the other fixes or are no longer reproducible. (398733, 413208, 429405, 434690, 436478, 437879)

## Breaking changes

### Sitecore Experience Analytics

-   The SwitchingReportingStorageProvider has been removed and replaced by SqlReportingStorageProvider.   
    If you have patched in your own custom providers, you do not need to make any changes.
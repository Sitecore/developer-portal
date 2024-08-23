---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_8_update1/Release_Notes
---

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](http://dev.sitecore.net/)

## Highlights

The main highlights of this update:

-   Several minor fixes in all areas of the Sitecore Experience Platform
    
-   Numerous fixes in the visual design, across the platform
    
-   Several potential security vulnerability fixes have been applied to improve overall security
    
-   Resolution of several known issues from the initial Sitecore Experience Platform 8 release
    

## Documentation

For all Sitecore Experience Platform 8 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/)

## Resolved issues

### Content Editor

-   The XHTML validator would sometimes not allow you to approve an item for publishing and showed the error: "The item must render as a valid XHTML document." This was related to a problem in the Media Protection feature that would sometimes update image URLs with invalid HTML. In addition, the rich text field contained some Unicode codes that were not converted by some browsers to named characters. This has been fixed. (423150, 427522, 356982)
    

### Experience Editor

-   The Add Component button was not disabled when Designing mode was off. This has been fixed. (411859)
    
-   In Explore mode, the value was not reset when you switched between pages. This has been fixed. (425785)
    
-   In Explore mode, the value was not reset when you clicked Apply or Reset in journey mode. This has been fixed. (425483, 425142)
    
-   In Explore mode, the profile keys were not reset if the user didn't open the Settings panel. This has been fixed. (423014)
    
-   In Explore mode, the value in the viewer was counted twice if the Page Event tab was opened. This has been fixed. (424357)
    
-   In Explore mode, both Bing and Google map controls took resources regardless of the map control being used This has been fixed. (424163)
    

### Potential security vulnerabilities

-   A number of controls have been reworked to render correctly if the item icon path contains malicious code. (420751, 428042, 428045, 428047, 428048, 426108)
    
-   A potential cross-site scripting vulnerability has been fixed in the Device Editor dialog. (420752)
    
-   A potential cross-site scripting vulnerability has been fixed in the Desktop shortcuts. (421201)
    

### Scaling and multi-instance setups

-   The scaling documentation said that task agents should be enabled on all Sitecore instances except content delivery servers. This was not correct – tasks should also be disabled on Reporting instances. This has been fixed in the xDB Configuration Guide document. (424778)
    

### Security API

-   If a user was logged into a shell site using custom code based on Sitecore.Security.Authentication.AuthenticationManager API, further redirects to any shell page would either be redirected to a standard Login or a Not Found page. This has been fixed. (404969, 414191)
    

### Sitecore.ContentSearch API

-   When two indexes were configured to use the same SOLR core, it was impossible to differentiate the index data between the indexes. As a result, index data related in one index would override the index data in the other index. This has been fixed so that the _uniqueid index field value has been extended with information about the index name. (426743)
    
-   When the Solr indexing engine was configured and a search expression was started from slash (‘/’), the query parser interpreted the specified search string as a regular expression. As a result, search based on item paths did not work correctly. This has been fixed. (424071)
    
-   The implementation of the GetTypeFieldNames method in the SolrFieldNameTranslator class was not thread safe. During searching, an infinite loop could occur, which decreased the performance of the system until the ASP.NET worker process was restarted. This would only happen in very rare cases. This has been fixed. (426716)
    

### SPEAK

-   Applications written in SPEAK would sometimes track server requests in the Analytics engine inappropriately. This has been fixed. (22133)
    
-   Sitecore's client applications raised an exception if IIS was configured to run in Classic AppPool mode. This has been fixed. (21924)
    

### Email Experience Manager (EXM) – formerly Email Campaign Manager (ECM)

-   Variants were not sent in equal numbers for A/B testing dispatch on certain dedicated servers setups. This has been fixed. (25686)
    
-   If a list was locked, A/B testing on messages using that list did not start. This has been fixed. (25717)
    
-   The send email campaign and edit email audience actions were not triggered from the state. This has been fixed. (23737)
    
-   Creating a schedule or a recurring schedule with Moscow time did not schedule the message. This has been fixed. (25653)
    
-   Canceling a recurring schedule of a message after it had been sent was not possible. Instead, the user had to delete the scheduled item in the Content Editor. This has been fixed.(25652)
    
-   Two Alternative Text fields were displayed when the user inserted a token in a hidden Alt text field. This has been fixed. (25645)
    
-   The message body was not refreshed after editing if changes in the Subject field were not saved. This has been fixed. (25268)
    
-   Scheduled triggered messages for activation didn't show the message in the Scheduled messages list. This has been fixed. (25202)
    
-   New presentation components could not be added to the message in the Experience Editor. This has been fixed. (23497)
    
-   The Export message recipient’s action did not work correct. This has been fixed. (25697)
    
-   Sender details were not disabled for messages created based on the Subscription message template. This has been fixed. (15401)
    

### Federated Experience Manager

-   An error in the Solr version of the FXM search index configuration caused as exception when Solr was enabled. This has been fixed. (12745)
    
-   Clicking a proxied link containing a query string did not URL encode the parameter correctly. This has been fixed.(2977)
    
-   The dialog style was not consistent in the warning message: “domain item already exists.” Dialogue. This has been fixed. (12440) 
    
-   Users could not save or publish the domain directly after editing on the Manage FXM functions tab (users could still save or publish the domain after saving the edit). This has been fixed. (12346) 
    
-   In preview mode, the user could select, add, or remove any event – these actions should have been inactive. This has been fixed. (12571)
    
-   A sublayout could not be added to the FXM Placeholder. This has been fixed.
    

### List Manager

-   In the List Manager, limited entries were returned from large lists. This was because Solr was not fully supported in a distributed environment. This has been fixed.
    
-   Contact lists did not unlock automatically particularly when an individual contact was locked. This has been fixed by adding additional list unlocking functionality.Lists did not unlock automatically if the folder containing the lists were moved. This has been fixed.On Segmented lists, there was a session timeout issue on the Rules Editor. This has been fixed.
    
-   A security risk posed by inadvertent uploading of HTML or JavaScript has now been resolved, so that you can only upload text using a csv import.
    

### Experience optimization

-   Some dialogs in the Experience Editor were not working in IE10 and small screen resolutions. This has been fixed. (25387, 23533, 24402)
    
-   When generating screenshots on multi-language sites, the screenshots would show the default language, rather than the specific language that the test was created in. This has been fixed (25498)
    
-   When you performed personalization tests, the system returned “0 experiences” in the list of active tests. This has been fixed. (26780)
    
-   Out-of-process, session-state server configuration created issues for WorkflowArgs. This has been fixed (26166)
    

### Path Analyzer

-   A special admin page for basic map management has been created (/Sitecore/admin/PathAnalyzer.aspx).
    
-   Web API can now be secured in configurations with remote reporting server
    

### Social Connected

-   An error occurred when an author published an approved message. This has been fixed. (25570)
    
-   Your Google social profile wasn’t updated when you upgraded from Sitecore 7.5 to Sitecore 8.0. This has been fixed. (26701)
    
-   There was an Incorrect Twitter “created date” field in the social profile. This has been fixed. (24748)
    
-   There was an exception occurring on login when the contact contained the visitor’s name as the identifier. This has been fixed. (16612)
    

## Breaking changes

-   The obsolete namespace Sitecore.Analytics.Conversion has been removed from the platform. All functionality related to the conversion of users to contacts is defined in a separate tool – User to Contact Conversion Tool.
    
-   The IConfiguration and IMapRepository interfaces from the Sitecore.PathAnalyzer.Contracts namespace have been extended.
    
-   The Sitecore.PathAnalyzer.Data MapRepository class has been renamed to Sitecore.PathAnalyzer.Data MapItemRepository.
    
-   Some obsolete methods from the Sitecore.PathAnalyzer.Data.Remote.RemoteTreeDefinitionService and Sitecore.PathAnalyzer.Data.Remote.RemoteTreeProvider classes have been deleted.
    
-   The Sitecore.Social.Client.Commands RunDashboard class has been removed because it is no longer in use.
    
-   New properties have been added to the Sitecore.Data.DataSources.IDataSourceItem interface.
    
-   The Sitecore.Web.Pipelines.InitializeSpeakLayout SetIframePolicy class has been removed.
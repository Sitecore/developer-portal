---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_8_update2/Release_Notes
---

This is a product update (February 2015 – released Sitecore 8.0 rev. 150223 (update-2)). Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](http://dev.sitecore.net/).

## Highlights

The main highlights of this update:

-   Several minor fixes in all areas of the Sitecore Experience Platform
    
-   Numerous fixes in the visual design across the platform
    
-   Several potential security vulnerability fixes to improve overall security
    
-   Numerous optimizations in the Sitecore Rendering engine
    
-   Includes all the fixes from Sitecore 7.5 Update-1 and Sitecore 7.5 Update-2
    

## Documentation

For all Sitecore Experience Platform 8 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/)

## Important Changes

### Sitecore.ContentSearch API

-   The AnalyticsIndexName public property has been added to the Sitecore.ContentSearch.ContentSearchConfiguration class. The property returns the name of the analytics index and can be used in custom API to refer to the correct analytics index. (426814)
    
-   The GetAnalyticsIndex public method has been added to the Sitecore.ContentSearch.ContentSearchManager class. The method is used to get the analytics index object. You should rework the custom API that contains the hardcoded analytics index name to use new method from the Siteocre.ContentSearch namespace. (426814)
    

## New features & Improvements

### Performance improvements related to the Sitecore Rendering engine

-   The RenderingParameters cache has been introduced. The cache is used to keep the value of the Parameters property of the RenderingItem object instead of recalculating it on every request. To improve the performance of page rendering on content delivery servers, you should enable caching of the Parameters value. We recommend that you disable RenderingItem parameters caching on content management servers. (427707)
    
-   The XmlBasedRenderingParser from the Sitecore.Mvc.Presentation assembly has been optimized to improve rendering performance. (427708)
    
-   The rendering of the Sitecore MVC layouts has been improved by optimizing the Sitecore.Mvc.Helpers.TypeHelper class so that it uses the cache for resolving type by type name. (428682)
    

## Resolved issues

-   The Toggle Ribbon arrow disappeared after an item was selected in the Content Editor. This has been fixed. (427757)
    
-   Unsaved changes to a content item in the Content Editor was sometimes lost without notification if you switched to the Launchpad interface. This has been fixed. (428823)
    
-   In the Content Editor, the 'Cancel method not found' exception appeared when you clicked the Cancel button in the unsaved item changes dialog. This has been fixed. (430387, 429157)
    
-   When you selected media library items in the Content Editor you would sometimes see the NullReferenceException in the Sitecore log file. The issue was related to the fact that some media item templates stored a wrong reference to the Standard Values items. This has been fixed. (431551)
    

### Engagement Analytics

-   After processing the session:end event, the shared session state of the contact would sometimes remain locked. This could lead to a performance decrease in processing other requests that refered to the same contact. This has been fixed. (429227)
    
-   The 'Failed to load viewstate' exception occurred when you clicked the Close button in the View Contacts dialog opened from the Supervisor application in the Marketing Center. This has been fixed. (429115)
    

### Potential security vulnerabilities

-   In the Document Manager dialog (opened from the Rich Text Editor) authenticated users could upload or download files, even if they did not have the appropriate permissions. This has been fixed. (430202)
    
-   A number of potential cross-site scripting vulnerabilities have been fixed in the Rich Text Editor control. (426123)
    

### Scaling and multi-instance setups

-   The SwitchMasterToWeb.config.example did not correspond to the latest configuration changes in the platform. This has been fixed so that the configuration nodes that belong to the Content Editing servers are removed. (429078)
    

### Security API

-   The GetCustomProperty and SetCustomProperty methods did not work correctly for virtual users. An empty string was always be returned. This has been fixed. (427968, 431556)
    
-   Changes in the user profile properties were lost for virtual users if they were made after the user has been logged into Sitecore. This has been fixed. (381352)
    
-   If a virtual user was logged in to a shell site, the InvalidOperationException error occurred when they tried to access to the http://`<hostname>`/sitecore URL. This has been fixed. (408264)
    

### Security applications

-   The cursor was incorrect when it hovered over the read-only textboxes on the Change Password page. This has been fixed. (427926)
    

### Sitecore.ContentSearch API

-   When the Publish items command from the search operations on the Search tab was used, sometimes not all the items that matched the search expression would be published. The problem was related to the item order in the search results. This has been fixed. (424473)
    
-   The ArgumentException was thrown on processing "indexing:end:remote" and "indexing:committed:remote" remote events if the index did not registered on the current instance. This has been fixed so that now events for nonexistent indexes are ignored. (424174)
    

### Serialization

-   When you serialized content items, some items with long paths could be missed in the serialization folder. The problem was reproducible only for items with long paths which had "$" character in name of the one of their ancestors. This has been fixed. (426046)
    

### SPEAK applications

-   When you opened the Insert Email dialog for a General Link field that contained a link, the Insert Email button was disabled. To enable the button, you had to update the Displayed Text value. This has been fixed. (428446)
    
-   The size of the Smart Panel in a number of dialogs was too big and overlaid the OK and Cancel buttons. This has been fixed. (428353)
    
-   The Smart Panel has been removed from the Select Media and Insert Item dialogs. (428848)
    
-   The LaunchPad button was not switching to the Launch Pad interface from a number of applications: the Recycle Bin, User Manager, Domain Manager and Role Manager. This has been fixed. (431736)
    

### Experience Editor

-   Explore mode displayed the last version of an item regardless of the publishing settings. This has been fixed. (404167)
    
-   ASPX pages were not loaded after using the explore mode. This has been fixed. (407516)
    
-   The Save button was not enabled when content was changed for non-English languages. This has been fixed. (427846)
    
-   Ctrl+S did not save content. This has been fixed. (428752)
    
-   The Explorer mode header and tabs were not rendered on MVC sites. This has been fixed. (428810, 430214)
    

### SPEAK

-   General bug fixes and enhancements
    

### Email Experience Manager (EXM) — formerly Email Campaign Manager (ECM)

-   The A/B recurring tests started regardless of the interval that was selected. This has been fixed (38439)
    
-   The message performance report did not have data even though the analytics data and Funnel homepage showed data. This has been fixed. (38431)
    
-   Changes in the message subject were not being saved automatically when the dispatch process was started. This has been fixed. (37873)
    
-   The external links from test messages did not open in a distributed environment. This has been fixed. (38394)
    
-   The online version of messages was not shown. This has been fixed. (38779)
    
-   The import of contacts did not work as expected in a scaling environment. This has been fixed. (37297)
    
-   The Engagement Plan Supervisor trigger action failed. This has been fixed. (37098)
    
-   Unsubscribed user visits were counted as visits in message performance. This has been fixed. (37713)
    
-   The emulation of send messages did not work for triggered messages. This has been fixed. (35150)
    
-   A/B test messages could not be scheduled for specified activation start date and activation end dates. This has been fixed. (37726)
    

### Web forms for Marketers (WFFM)

-   There was a problem with the "Enroll in Engagement Plan" save action. This has been fixed. (25139)
    
-   The UI in form wizards has been improved.(24968)
    
-   There was a problem with the "Add field" button in the "Create user" save action wizard. This has been fixed. (25279)
    
-   The WFFM security for multiserver configuration has been improved. Sitecore EventQueue is now used and the "remoteWfmService" web-service has been removed.(24829)
    

### Federated Experience Manager

-   Incorrect behavior for the Save button has been fixed. (12800, 12801)
    
-   There was an error in the log.txt file when an FXM Page Filter function was used with custom filtering parameters. This has been fixed. (12973)
    
-   The Manage FXM functions in the Experience Explorer caused an error in the log.txt file. This has been fixed. (13078)
    
-   It was not possible to see a preview for MVC renderings (before saving). This has been fixed. (24284)
    
-   Controls were not visible on nested sublayouts when they were added to a new Element Replacer. This has been fixed. (25253)
    
-   An error message was shown when the Datasource was selected for a sublayout. This has been fixed. (25412)
    
-   The non-global FXM placeholder lost content if you added a global placeholder. This has been fixed. (30569)
    
-   Various localization issues have been fixed. (22595, 7917, 7918, 7919)
    

### List Manager

-   Adding a locked list to an existing list resulted in the list being added, but not the contacts. This has been fixed so that the list will not be added and users will be notified. (18130)
    

### Experience optimization

-   When testing Personalization rules, the wrong time estimation was displayed. This has been fixed. (25578)
    
-   The Top Goals Converted report failed to show data if the trailing value for the original experience was zero. This has been fixed. (28949)
    
-   The buttons in the Experience Editor for Active and Suggested tests returned the wrong number of tests. This has been fixed. (29352, 29365)
    
-   Some component tests would show the wrong data or not return any data in the test summary. This has been fixed. (29453, 29073, 28889)
    
-   If the session timeout expired while the test dialog was open, it would create a broken test. This has been fixed. (29518)
    
-   The Conversion rate tab did not contain a "pick as winner" button. This has been fixed. (29155)
    

### Experience Analytics

-   During the rebuild of the reporting database, the DeployDate was not carried over. This has been fixed. (22015)
    
-   When the reporting database did not contain any data, analytics would report a FATAL error message. This has been changed to a notification instead. (21228)
    

### Path Analyzer

-   You were not able to rebuild maps from an admin page. This has been fixed.
    
-   Definitions did not deploy after the rebuildReportingDB process. This has been fixed. (431504)
    
-   [Security Vulnerability] Any user could open the Path Analyzer using the URL. This has been fixed. (823)
    
-   Various localization issues have been fixed.
    

### Social Connected

-   The Social Connected did not support Facebook API 2.0. This has been fixed. Older versions of Facebook's API will expire April 30, 2015. (31283)
    

-   Goals were not triggered for Share buttons. This has been fixed. (38575)
    
-   There were no field values on the Contact card in the Experience Profile. This has been fixed. (31643)
    
-   You couldn't create a new Facebook user when the Email permission was declined and the requiresUniqueEmail attribute was set to true in the SQL Membership provider. This has been fixed. (31593)
    
-   When a site visitors clicked a social share buttons, triggering the appropriate DMS goals, a request was sent passing a goal name without encryption. This has been fixed so that now the goal name is encrypted. (31541)
    
-   Goal triggering did not work properly for multiple share buttons. This has been fixed. (31540)
    
-   When you added the social connector layout, the validation checks failed. This has been fixed. (31497)
    

## Breaking changes

### Path Analyzer

-   ITreeDefinitionService has been extended with two new methods: GetAllDefinitions() and GetAllDefinitionIds()
    
-   The Sitecore.SequenceAnalyzer.ITree interface has been extended with a new MatchingNodes() method. If you have extended the default Path Analyzer´s functionality with custom trees, you must make sure that this method is implemented in your custom tree class.
    

### Experience Editor

-   To ensure that global headers in Explorer are displayed correctly in MVC pages, the globalHeaderUserName, globalHeaderUserPortrait, logoutHeader, logoutHeader controls and the Page_Load method implementation were removed from Sitecore.ExperienceExplorer.Web.Web.ExperienceExplorer.Controls.GlobalHeader control.
    

### Experience analytics

-   The Sitecore.ExperienceAnalytics.Api.Http.Filters.CacheHeaderFilter class was removed because it was not relevant for general users.
    
-   The Sitecore.ExperienceAnalytics.Api.Http.Filters.NotFoundExceptionFilterAttribute class was removed because it was not relevant for general users.
    
-   The capitalization of DTO classes in the Sitecore.ExperienceAnalytics.Api.Response namespace has been changed from camel case to Pascal case. Capitalization was previously used to control the format of json messages, the formatting is now delegated to a serialization formatter. The capitalization of messages from restful API remains unchanged.
    

### Cloud

-   The Cloud xDB Search support has been expanded to include all core Sitecore modules.
    
-   The Execute method defined in the Sitecore.Cloud.RestClient.IRestClient interface was replaced with the async version.
    
-   The Exception property was moved from the Sitecore.Cloud.RestClient.IRestResponse interface into the Sitecore.Cloud.RestClient.RestResponse class.
    

### sitecore.analytics.outcome

-   The method signature on the TrackerExtensions.HasOutcome has been changed so that now it binds to the ITracker interface instead of the Contact class. Implementation now checks against outcomes in the current session instead of against those stored in xDB.
    

### xOptimization

-   The Guess property in the Sitecore.ContentTesting.Analytics.Reporting.Model.TestOutcomeProjection class has been changed from an Int to a Double property type.
    
-   The Sitecore.ContentTesting.Events.GenerateScreenshot class has been changed from Public to Protected.
    
-   The Sitecore.ContentTesting.ViewModel.RulePerformaceModel class has been changed from Double to Nulllable.
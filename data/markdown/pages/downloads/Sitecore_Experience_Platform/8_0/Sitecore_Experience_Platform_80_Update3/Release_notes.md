---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update3/Release_notes
---

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](http://dev.sitecore.net/).

## Highlights

-   Includes all the fixes from Sitecore 7.2 Update-4.
    
-   Improves overall security — several potential security vulnerability fixes applied.
    
-   Implements backup for Sitecore configuration on every restart.
    

## Documentation

For all Sitecore Experience Platform 8 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/).

## Important changes

### Sitecore logging

The time for keeping Sitecore log files has been increased to 30 days. (426814)

## New features & improvements

### Marketing Foundation

-   Memory usage has been optimized in the ContactBulkUpdateManager.
    
-   The Tracker extension for registering outcomes now sets the date and time for the outcome.
    

### Sitecore supportability improvements

-   A Sitecore dumping configuration feature on every Sitecore restart has been implemented. The DumpConfigurationFiles processor has been added to the Sitecore `<initialize>` pipeline. The processor is defined in the `Sitecore.Diagnostics.config` configuration include file and supports various configuration settings, such as the location for storing configuration files, support for compressing, and files to be tracked. By default, dump files are stored in /diagnostics/configuration_history in the Data folder. (373420)
    
-   Periodic dumping data from /sitecore/admin/stats.aspx and /sitecore/admin/cache.aspx pages to the file system has been implemented. New processors have been added to the `<healthMonitor>` pipeline. The location and format of the log file can be configured as part of the processor configuration. By default, dump files are stored in /diagnostics/health_monitor in the Data folder. (415409, 415411)
    

## Resolved issues

-   An empty alert dialog appeared in the Content Editor when creating an item with a name that contained characters specified in the InvalidItemNameChars setting. This has been fixed. (431321)
    

### Control Panel

-   The display language was not changed after refreshing the browser when a user changed the language in the Regional and Language Options dialog of the Control Panel. This has been fixed. (428168)
    
-   An exception occurred when you opened any application in the Control Panel after a user session had expired. This has been fixed so that the user is redirected to the Sitecore Login page. (429931, 435805)
    

### Engagement Analytics

-   Importing users to an engagement automation plan was slow. This has been fixed. (431530)
    
-   Viewing automation states that contained a large number of contacts was slow. This has been fixed. (431493)
    
-   The WriteConcernException exception sometimes appeared in the Sitecore log file when users were enrolled to a state of the engagement plan. This has been fixed. (430655)
    
-   Analytics Exceptions were not handled properly and appeared in the UI causing the site to be broken. This has been fixed. (428886, 432992)
    

### Multibrowser fixes

-   [IE11] The Select Media Item dialog header was rendered in the wrong place. This has been fixed. (430149)
    

### Package Designer

-   An empty dialog appeared when trying to generate the Sitecore package if the /data/packages folder was missing. This has been fixed so that a missing /packages folder is automatically created and a warning message about this action is added to the Sitecore log file. The same problem was fixed in the Installation Wizard when you click the Upload package button. (428852, 430197)
    
-   The DirectoryNotFoundException exception appeared when you tried to create a new package from an existing one. The problem occurred only if the /Data/package folder was missing. This has been fixed so that a packages folder is created automatically. A warning message is added to the Sitecore log file. (435796)
    

### Potential security vulnerabilities

-   The password recovery page showed different validation messages when a user with a specified name already existed in the Sitecore database. This has been fixed so that a generic validation message is shown. (363086)
    
-   A potential cross-site scripting vulnerability has been fixed in the media upload control. (415861)
    
-   Potential cross-site scripting vulnerabilities have been fixed in the logic responsible for processing query parameters in the SiteContext class. (416948)
    
-   Potential cross-site scripting vulnerabilities have been fixed in the Content Editor application, Edit User dialog, and Sitecore Desktop. (428980, 428986, 429290, 432461)
    
-   The Search tab in the Content Editor returned the search result event after a user session had expired. This has been fixed so that a user is redirected to the Login page. (429472)
    

### Publishing

-   The ArgumentOutOfRangeException exception appeared during publishing if the site defined in the sites section in the Sitecore configuration did not have the renderingParametersCache attribute. This has been fixed. (432979, 433131)
    

### Sitecore.ContentSearch API

-   An error with the message "undefined field" sometimes appeared in the search log file when using the Solr search provider, despite the fact that the field existed and had the appropriate type. This has been fixed. (429492, 429702)
    

### Update Installation Wizard

-   The Update Installation Wizard did not support installing files into the Data folder located outside the Sitecore instance. This support has been implemented. The new version of the wizard is compatible with previous Sitecore versions. (429063, 434126)
    
-   The installation of the update package sometimes stopped responding and never finished. This has been fixed. (434755, 432536)
    
-   A warning message with the text "The standard values field of template `<template path>` does not contain an ID that points to a child" appeared in the Sitecore log file after installing an update package. This has been fixed. (428666, 432309)
    

### Miscellaneous

-   A virtual user remained logged in to Sitecore but lost all assigned roles after the user session expired. This has been fixed so that the virtual user does not lose their roles while they are logged in. (365855)
    
-   Sitecore did not track the situation when a Sitecore setting with the same name was defined in the Sitecore configuration more than once. This has been fixed so that Sitecore outputs a warning to the log file if a setting with a duplicated name is defined. (380315)
    
-   Roles added to a virtual user after they were logged in were not preserved between requests. This has been fixed. (381352)
    
-   If a virtual user was logged in to a shell site, the InvalidOperationException error occurred when they tried to access http://`<hostname>`/sitecore URL. This has been fixed. (408264)
    
-   The requested item was not resolved correctly if the item content path contained a combination of characters specified in the replace node of the encodeNameReplacements section. This has been fixed. (408384, 416567, 416797, 431208, 434065 )
    
-   The ObjectDisposedException exception sometimes appeared in the Sitecore log files right before or after a Sitecore restart. The problem was in the Sitecore scheduled tasks that continued running and trying to access already disposed objects. This has been fixed so that scheduled tasks are stopped during the shutdown. (431037, 433802)
    
-   Experience Analytics reports were empty after migration from Sitecore 7.5 to Sitecore 8.0. The reporting database was missing some data. This has been fixed so that a special page has been added to the /sitecore/admin folder that can deploy missing information. The page can be used for any Sitecore 8.0 and higher release. (431335).
    
-   The Sitecore.Kernel assembly did not have the correct assembly version information. This has been fixed so that the assembly version for some Sitecore assemblies has been corrected. (433193)
    
-   Partial clearing of the ItemPathsCache performed badly on a heavy Sitecore load. This has been fixed. (434425)
    

### Additional fixes

-   This section provides reference numbers for scenarios reported by Sitecore customers that have been addressed as part of the other fixes or are no longer reproducible. (411992, 428639, 428805, 429328, 429920, 431296, 428666, 434755, 431335 )
    

### Experience Editor

-   An error appeared when you clicked the Launchpad icon in Explore mode. This has been fixed. (430401, 432923)
-   Renderings were inserted in the wrong places if the placeholder was not explicitly defined. This has been fixed. (365572, 397271, 365571, 396946)
-   It was not possible to assign a link to an image using the inline editing. This has been fixed. (421926, 421908)
-   The URL in the address bar was incorrect when navigating through the navigation bar. This has been fixed. (428645, 428339)
-   It was impossible to edit the RTE field after inserting View Rendering in the Experience Editor. This has been fixed. (429968, 429764, 429766, 431244, 43369, 434173, 434302, 434373)
-   Changes could not be saved if the page was not saved after adding a rendering in the MVC Experience Editor. This has been fixed. (429973, 429761, 434299, 434950)
-   It was impossible to change the language in the Experience Editor when the languageLocation attribute was set to "queryString". This has been fixed. (424740, 424491)
-   The MVC Experience Editor failed when a test was present on the page. This has been fixed. (432686; 432325)
-   Non default values of personalized fields could not be modified using Reach Text Editor. This has been fixed. (430646, 50092, 429825, 429827, 432371, 435687, 448100) 

### SPEAK

-   The DialogWindow positioned its header inappropriately in IE11. This has been fixed with IE 11 specific CSS code. (44803)
-   The Uploader let users upload assets to a folder when they did not have appropriate security permissions. This has been fixed. (425128)
-   The Uploader became unresponsive when the server raised an exception while uploading an asset. This has been fixed. (431788)

### Email Experience Manager (EXM) — formerly Email Campaign Manager (ECM)

-   When customers dispatched email messages synchronously on several threads, performance was severely degraded. This has been improved with several performance fixes. (431762)
    
-   The dispatch pipeline was often aborted if there was an error, even if the error was non-critical. This has been changed so the dispatch pipeline is now paused instead, allowing customers to fix the problem and resume the dispatch. (434929)
    
-   There was an error when viewstate failed to load in the Select Role dialog. This has been fixed. (430969)
    
-   There have been numerous UI, UX, and stability fixes to the EXM module.
    

### Web Forms for Marketers (WFFM)

-   MSCaptcha.dll has been updated to version 4.0.4250.31585
-   An issue with the “Add Contact to Contact list” save action has been fixed. (434693)
-   Problems with the Drop List field in the Form Designer have been fixed. (429637, 429639, 430549)
-   An issue with the “Create User” save action has been fixed. (428739)

### Federated Experience Manager

-   The Capture Client Action was saved as a child to the wrong domain matcher if two domains had the same name. This has been fixed. (39028)
-   The Beacon API was not loaded when a placeholder with a sublayout was positioned as 'after/before'. This has been fixed. (31712)
-   The parent item was not shown in the Click Action/Add Placeholder dialog if FXM items were not published. This has been fixed. (12972)
-   FXM items could not be created in the Experience Editor if the Experience Editor was opened from the Content Editor. This has been fixed. (12972)
-   The Beacon API was not loaded if the domain item had the rule "starts with path". This has been fixed. (39056)

### List Manager

-   Exceptions caused by the UnlockContactLists agent (due to the disposed Lucene Index) have now been fixed. (42722)
-   Previous versions of the List Manager sometimes encountered memory issues and slower performance during bulk upload operations. This has now been resolved. (42723)
    

### Content testing

-   Generating a screenshot failed in vertical scaled environments and MVC caused the wrong screenshot to be generated. This has been fixed. (431419, 433516)
-   In some cases, incorrect language was detected when starting and ending a test. This has been fixed. (433027, 433434)
-   Various translation issues have been fixed. (430883, 430651, 433656, 433782)
-   The Previous and Next buttons on the leaderboard in Experience Optimization were disabled, even when there was data to show. This has been fixed. (41458).
-   The page test against previous versions always took the first version. This has been fixed. (434206)
-   Setting up a component test on MVC caused an error. This has been fixed. (433516)
-   A Request.Path error created a potential security issue, when reopening the Page Test dialog. This has been fixed. (433809)
-   The Experience Editor slowed down when there was a large number of Suggested Tests. This has been fixed. (434105)

### Path Analyzer

-   Dates were not parsed properly on locales that were not en-US. This has been fixed. (432329)
-   A number of visualization (UI) problems related to the Page Analyzer have been fixed. (#866, #1020, #1023, #811, #804, #992, #954, #943).
-   The [Performance] MaxContact property was not cached on the PageNode. This has been fixed. (#1009).
-   The Launchpad button had an invalid link. This has been fixed. (#941).
-   The Username and Logout links were absent in the application. This has been fixed. (431684).
-   The Path Analyzer admin page has been enhanced:
-   The incorrect date of the Daily Map Agent was displayed on the PathAnalyzer.apsx page. This has been fixed. (#939)
-   The overall descriptions and messaging of the pathanalyzer.aspx page have been reviewed and fixed. (#952).

## Breaking changes

### Sitecore.Analytics

-   The IWorkItemSet Interface has been extended with two new methods: Remove(item) and Clear().
-   The WorkItemSet class has been extended with two new abstract methods: OnRemove(item) and OnClear().
-   The IWorkItemSetManager Interface is now IDisposable and has been extended with a new method: Open(name, listCapacity, create).
-   The WorkItemSetManager class has been extended with a new abstract method: Create(name, listCapacity).
    

### xOptimization

-   The public class Sitecore.ContentTesting.Pipelines.GetCurrentTestCombination.GetQueryStringCombination has been removed because it was redundant.
-   The protected GetDateRange method has been removed.
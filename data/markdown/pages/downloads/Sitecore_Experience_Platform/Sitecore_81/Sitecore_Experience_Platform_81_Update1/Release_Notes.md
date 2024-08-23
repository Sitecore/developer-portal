---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Update1/Release_Notes
---

**December 08, 2015 – released Sitecore 8.1 Update-1 (rev. 151207)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](/downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Update1).

## Highlights

The main highlights of this update:

-   Includes all the fixes from [Sitecore 8.0 Update-6](/downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update6/Release_Notes)
-   Various fixes to the Experience Editor
-   **Note:** xDB Cloud support will follow approximately 6 weeks after the release of this update

## Documentation

For all Sitecore Experience Platform 8.1 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/)

## New features & Improvements

### SPEAK Applications

-   The Product definition node, defined in the appDependencies configuration node, now supports the dependencyEvaluator attribute. This enables you to specify the code that is responsible for deciding if a specific product is enabled on the current Sitecore instance. If the evaluator is not specified, the product is enabled by default except xDB, which is disabled by default. (447638)

### Experience Editor

-   A versioned field’s values are now shown on the shared layout.
-   The layout presets button was moved to the Presentation tab to maintain a consistent user interface with the Content Editor.

## Resolved issues

### Marketing Foundation

-   The Shell.Applications.Analytics.Reporting.Taxonomies.Deploy class had contained hardcoded text. This has been fixed. (76274)
-   The LocalizationTexts attribute of the Sitecore.Marketing.Taxonomy.Resources.Texts class did not have a module value. This has been fixed. (76227)
-   The LocalizationTexts attribute of the Sitecore.Marketing.Resources.Texts class did not have a module value. This has been fixed. (76226)
-   The LocalizationTexts attribute of the Sitecore Marketing Client component did not have a module value. This has been fixed. (76216)
-   Enabling CMS-only mode in Sitecore Azurecaused numerous exceptions to be logged due to the code working incorrectly with session storage. This has been fixed. (74139, 77405, 451663)
-   Sitecore did not log an exception message and create a stack trace if an engagement plan action failed during timeout processing. Full error details are now (451609)

### Experience Editor

-   In Explorer mode, texts on MVC pages did not take into account the default client language. This has been fixed. (77383)
-   The message Cannot read property 'Name' of undefined appeared in Explorer mode for non-English languages. This has been fixed. (77379)
-   An error would occur when adding a sublayout to a placeholder after another sublayout had been added previously. This has been fixed. (53991)
-   The Replace rendering button did not work correctly when a placeholder key was not specified in the layout details. This has been fixed. (74464)
-   The markup validator was not working. This has been fixed. (66325)
-   It was not possible to open an item if the fallback device had been set to presentation only. This has been fixed. (50030, 431436)
-   The editing and designing functionalities were not enabled by default. This has been fixed. (50035, 431629)
-   After clicking OK in the details dialog, the EXM Experience Editor would close unexpectedly. This has been fixed. (50732)
-   The navigation bar would disappear after navigating to an item that had a notification shown. This has been fixed. (53669)
-   An error would occur while adding a rendering after another rendering if allowed controls were not specified for the placeholder. This has been fixed. (54855)
-   A page would not refresh after clicking the Add version button. This has been fixed. (71772)
-   A page would not refresh after removing the current version. This has been fixed. (71803)
-   The link in the field validation notification did not work for images. This has been fixed. (72218)
-   A NullReferenceException appeared when the website site was not defined. This has been fixed. (78165)

### Federated Experience Manager (FXM)

-   Renderings could not be removed from a placeholder in the FXM Experience Editor. This has been fixed. (72796)
-   In some cases, the save button was disabled after editing the FXM functions in the FXM application. This has been fixed. (72030, 72577, 68866)
-   The Sitecore.FXM.Tracking.TrackingManager class was sealed. This has been fixed, the class is now inheritable. (64514)
-   The page filter mode did not change from Custom to Match this page only, or to Match this page and all children when selected. This has been fixed. (71853).
-   The component management buttons’ design was broken in the FXM Experience Editor. This has been fixed. (67922)

### Media

-   The Insert Media dialog did not preselect the last opened folder in media library. This has been fixed. (320180)

**Rich Text Editor**

-   An image’s URL became broken after changing its size in Rich Text Editor field. This has been fixed. (451366)

### Sitecore.ContentSearch

-   Autocomplete for known fields such as language did not work in the Content Editor Search tab using the SOLR provider. The problem was related to the SOLR server configuration. This has been fixed so that Sitecore no longer depends on this configuration. (444661)
-   It was not possible to configure the SOLR provider with Ninject without adding special bindings in the Web.config file. This has been fixed. (444725)
-   The SOLR document mapper did not respect UTC dates and returned the DateTime.Kind Unspecified instead of UTC. This has been fixed. (450182)
-   The InvalidOperationException exception appeared if search was configured to use the SOLR provider and filesystemPropertyStore. This has been fixed. (450511)

### List Manager

-   An issue was resolved where segmented list counts were not updated when the list sources were changed.

### Social Connected

-   An issue was resolved where the Social Profile data may not be have been displayed on the Social tab in the Experience Profile when working in a scaled environment.
-   There was an internal server error when viewing campaign reports on content messages. This has been fixed.

### Experience optimization (Content testing)

-   When a rendering that had a test assigned to it was removed, the Experience Editor ribbon would not load. This has been fixed. (72207)
-   The content test can be unexpectedly stopped if it is not in the default language of your installation. This has been fixed. (74766; 476209)

### Experience analytics

-   When the default time resolution was applied to a chart, it was not selected in the time resolution drop down. This has been fixed. (38977)

### Miscellaneous

-   Information about the Web Forms for Marketers and Email Experience Manager versions has been added to the License Details application. (451036)
-   The Newtonsoft.Json third party assembly has been updated to version 6.0.8. (451634)
-   The first item version was opened instead of the latest one when 'Navigate to the original item' link was clicked in Content Editor to navigate from fallback item version to the original one. This has been fixed. (452609)

### Additional fixes

-   A number of scenarios reported by Sitecore customers have been addressed as part of other fixes or are no longer reproducible. (392759, 410232, 412857, 416257, 420951, 448218, 449773)
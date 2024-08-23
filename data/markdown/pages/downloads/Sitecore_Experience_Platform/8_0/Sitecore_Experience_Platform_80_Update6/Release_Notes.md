---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update6/Release_Notes.aspx
---

**November 27, 2015 – released Sitecore Experience Platform 8.0 (rev. 151127)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases a Service Pack for this series. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](/downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update6).

## Highlights

The main highlights of this update are:

-   Includes all relevant fixes from Sitecore 7.2 update-5
    
-   Improved overall security – several potential security vulnerability fixes applied
    
-   Numerous Experience Editor fixes and improvements
    
-   List Manager performance enhancements
    

**Note:** xDB Cloud support will follow approximately 6 weeks after the release of this update

## New features & Improvements

### Installation

-   The Sitecore installer has been extended to enable MVC views compilation after Sitecore has been installed. (444476)
    

### Experience Editor

-   It is now possible to enforce item locking before editing in the Experience Editor through setting RequireLockBeforeEditing = true. (51499, 345029).
    
-   Nested sublayouts and renderings are now moved with the ancestor controls. (58051, 373125)
    
-   The Experience Editor now uses the HtmlEditor.LineBreak value when inserting line breaks in inline editor (69998).
    
-   Explorer Mode now supports the new Sitecore IP Geolocation Service. The service still has to be activated. (53126).
    
-   It is possible to apply IP address in the Explore mode when IP Geolocation service is not accessible. (76115).
    

### FXM

-   FXM now supports deploying its tag through Google Tag Manager.
    
-   The set of available FXM rules on the domain matcher template has been extended. You can now specify domain matchers using the referral URL, request path and request query string.
    

### List Manager

-   Performance improvements have been made to the List Manager API to improve the speed of obtaining contacts from a list.(59593, 437718)
    
-   Performance improvements have been made to the UnlockContactList Agent in order to reduce the resources used by the agent. (59596, 437726)       
    

## Resolved issues

### Marketing Foundation

-   The XForwardedFor processor incorrectly parsed value of X-Forwarded-For HTTP header when requests were made by clients behind proxy server. This prevented the IP Geolocation from detecting the correct location. This has been fixed. (443865, 68213)
    

-   In the Marketing Control Panel, under Taxonomy, some channels appeared in the wrong language versions. This has been fixed. (430652, 74625)
    
-   An attempt to save long URL to FailureDetails table could cause an exception during the aggregation. This has been fixed. (443509, 448780, 448010, 71302)
    
-   Sitecore.Analytics.Aggregation.Data.KeyRegistry`<TKey>` and Sitecore.Analytics.Data.Dictionaries.TrackingDictionary`<TKey, TValue>` classes created caches without explicitly specifying cache names. This has been fixed. (443740, 443193, 68371, 75606)
    
-   In EXM, adding a new variant to a message and initiating an A/B test had resulted in the ”An item with the same key has already been added” exception from xDB. This has been fixed. (441007, 67679)
    
-   xDB did not always direct aMongoDB query to the correct index when merging contacts. This has been fixed. (449874, 448656)
    
-   The Silverlight deprecation warning message is now included when opening Engagement Automation in Chrome. (66744)
    
-   Attempts to create SQL injections through the sc_trk and sc_camp query string parameters had caused Sitecore to log an exception. This has been fixed. (448983, 73484)
    
-   The Media item event handler has been updated to avoid duplicating page events. (76637)
    
-   The AutomationWorker depended on Tracker, and did not work on Processing servers. This has been fixed. (436603, 74613)
    
-   All content added to the Send E-Mail Message action in an engagement plan would not save. This has been fixed. (447189, 447685, 447429, 77109)
    

### SPEAK

-   The LoadOnDemandPanel component attempted to load shell items using the website context, leading to console errors. This has been fixed. (73704)
    
-   The ButtonTextBox component would interpret an Enter character inappropriately when the end user typed Chinese or Japanese characters. This caused the corresponding form to provide an empty string rather than the provided text. This has been fixed. (66459)
    
-   The NavigationPanel component generated HTML with an inappropriate z-index. This has been fixed. (56517)
    

### Experience Editor

-   The Experience Editor does now not fail on pages with unclosed `<div>` tags. It is still considered an invalid markup and is not recommended. (49463, 360905)
    
-   The Experience Editor now shows an error message when the page has `<p>` tags. It is still considered an invalid markup and is not recommended. (49463, 360905)
    
-   The drop down lists on the ribbon could move when a page was scrolled. This has been fixed. (50029, 431307, 49938, 428971)
    
-   The Other menu in the Experience Editor was not set to a fixed location on the screen. This has been fixed. (51672, 435532)
    
-   The Edit related item command opened the wrong language version. This has been fixed. (50086, 432902)
    
-   Items did not save correctly if the layout value contained special characters. This has been fixed. (55394)
    
-   The Experience Editor stopped working after clicking on an MVC control that contained a script tag. This has been fixed. (49845, 426272)
    
-   The watermark text "No text in field" disappeared in some cases in Internet Explorer. This has been fixed. (62249)
    
-   The Change Language button on the ribbon did not switch languages when languageEmbedding="never". This has been fixed. (67259)
    
-   The Date-time value disappeared when the time was equal to 12 AM. This has been fixed. (60345)
    
-   A Multi-Line field ignored the ‘enter’ command in the Experience Editor in IE. This has been fixed. (49540, 407079)
    
-   The Toggle the ribbon button did not work after closing Experience Editor notifications. This has been fixed. (49897, 428111)
    
-   The Delete button in the Experience Editor caused a NullReference exception. This has been fixed. (49939, 428993)
    
-   A predefined content language for a user was not applied in the Experience Editor. This has been fixed. (60289, 434746)
    
-   An image was not removed from a field immediately after pressing the Remove the image button. This has been fixed. (60301)
    
-   "SpeakRequests" did not log exceptions. This has been fixed. (50107, 434527)
    
-   Changes made to items were not saved if personalization was enabled on them. This has been fixed. (51658, 434989)
    
-   A link could not be added to an EXM message in the Experience Editor. This has been fixed. (56174)
    
-   Changes made in the Experience Editor were not saved when publish replacers were enabled. This has been fixed. (59691)
    
-   The incorrect message was shown when changing the display name. This has been fixed. (60727)
    
-   3 linebreaks (`<br/>`) were inserted when pressing Enter in the multi-line field when editing this field in the Experience Editor. This has been fixed. (62680)
    
-   Changes made to rendering data source items were not saved when write permission was denied for the context item only. This has been fixed. (67959)
    
-   Pasting from Word to a RTE field was not working correctly when using inline editing in the Experience Editor. This has been fixed. (71318)
    
-   Pages with the "When user in role" personalization rule could not be saved. This has been fixed. (72210)
    
-   Placeholder keys were case sensitive for the MVC presentation. This has been fixed. (50102, 434309)
    
-   The language flag icon did not change. This has been fixed. (51651, 433324)
    
-   A component was inserted/moved to an incorrect position if placeholder contained rendering with an empty markup. This has been fixed. (51667, 435395)
    
-   Final renderings of Standard Values were not saved as delta in the Experience Editor. This has been fixed. (51668, 435426)
    
-   Thumbnails were not displayed in the Insert page dialog. This has been fixed. (51669, 435479)
    
-   The Add here button was not displayed for the MVC placeholder in Experience Editor for a non-admin user. This has been fixed. (51676, 435944)
    
-   The webedit:fieldeditor command did not respect the context item language version. This has been fixed. (51677, 436139)
    
-   The date field with the 12:00 AM local time value could not be changed via the Experience Editor. This has been fixed. (54708, 436443)
    
-   A layout with an associated datasource was not saved on a correct language version. This has been fixed. (54715, 436864)
    
-   The Experience Editor did not keep the selected condition after save, but instead saved the default personalization condition of a component. This has been fixed. (54716, 436901)
    
-   An incorrect time separator was used in the Experience Editor. This has been fixed. (49990, 430025)
    
-   A custom wrapper could crash page markup in the edit mode. This has been fixed. (57635)
    
-   The WebEditRibbon URL did not contain necessary 'la' and 'vs' query string parameters. This has been fixed. (50027, 95887, 431232)
    
-   The navigation bar was not working in IE9. This has been fixed. (59655, 439855)
    
-   The Experience Editor ignored the user’s default content languages. This has been fixed. (60063)
    
-   The Edit the text button did not work on a sublayout without saving. This has been fixed. (51655, 434543)
    
-   The Personalization dialog did not work when using the Experience Editor in EXM. This has been fixed. (62272)
    
-   Date fields reset to minimal or invalid value when time was set to 12 00 AM. This has been fixed. (73305)
    
-   The Content Editor could not be opened if the "Edit the related item" button was clicked. This has been fixed. (73376)
    
-   Switching between languages did not work in Chrome and Internet Explorer. This has been fixed. (73769)
    
-   The floating toolbar did not disappear from a page. This has been fixed. (72941)
    

### List Manager

-   The UnlockContactListsAgent agent depends on the culture of a contact. Issue fixed where some lists were not unlocked due to differences in language setting between the list and the contact (53305, 431777)
    
-   Lists became locked when importing an empty CSV file. This has been fixed. (65342)
    
-   Querying a contact’s list membership resulted in the reading the entire list, causing performance issues. This has been fixed. (54347, 437719)
    
-   A memory leak and performance issue had occurred when setting the SearchMaxResults number in a SOLR environment. This has been fixed. (62835, 440737)
    
-   A previous bug prevented CSV file imports when using IE9. This has been fixed. (59601, 439738)
    
-   A progress indicator would sometimes appear unexpectedly on some pages. This has been fixed. (65706)
    
-   The Contact Identifier was incorrectly case sensitive, creating issues when importing and creating new contacts. This has been fixed. (73588)
    
-   The number of log entries created by the execution of the UnlockContactListsAgent agent has now been reduced. (59585, 433183)
    
-   The configuration has been updated to ensure that the sitecore_list_index was added to the experience group. (70748, 447908)
    

### Experience Optimization (Content Testing)

-   When an item name contained a hardcoded dash, the page could not be saved in the page test flow. This has been fixed. (65899)
    
-   Bots exposed to tests would in certain scenarios get a status code 500. This has been fixed. (70320, 73377)
    
-   In a scaled environment, statistical and personalization data would not display correctly. This has been fixed. (71178, 70932, 70935)
    
-   The Page test dialog in the Experience Editor would not load. This has been fixed. (75957, 450655)
    
-   Running the scheduled task ‘Rebuild suggested tests index’ on a multi-language set up could cause exception. This has been fixed. (75953)
    
-   The suggested test metric computed fields have been optimized to reduce the load on SQL server, especially when rebuilding the sitecore_suggested_test_index index (443403, 66650)
    

### Experience Profile

-   Latest visitors were not sorted by the LatestVisitDate property. This has been fixed. (60018)
    

### Content Editor

-   The Unsaved changes confirmation dialog was shown in Content Editor when a user navigated away from an item. This occurred after editing the Tracking field when using one of the field menu commands. This dialog was redundant, because all changes made to the tracking field are automatically saved when the editing dialog has been closed. This has been fixed so that the confirmation dialog is now shown only when the item has unsaved changes. (444431)
    
-   It was not possible to save tokens like $date or $now in the DateTime field. You could only set tokens by switching to the Raw Values mode. This has been fixed so that date and time tokens can now be saved in DateTime fields. (447326)
    

### Item buckets

-   The Search functionality on the Search tab in Content Editor did not work correctly for the custom search date type. This has been fixed. (395488, 443194, 443197)
    

### Launchpad

-   The "Uncaught TypeError: Cannot read property 'TopFiveCampaignsByVisitsLineChartProgressIndicator' of undefined" JavaScript exception would sometime appear in the browser console when working with Lanchpad application. This has been fixed. (434663)
    

**Login page**

-   Users were redirected to a Login page if they tried to use an application from a Launchpad without having the appropriate permissions. After logging in, the user would be redirected to the application and then to the Login page. This has been fixed so the Launchpad does not open an application if the user does not have access to it. An additional check has been added to the Login page so user will not be redirected to an application if they do not have the appropriate permissions. (439037)
    

### Media

-   A media item could be opened for editing in the Image Editor even when the item was locked by other user. This has been fixed. (377520)
    
-   Upload options selected on the Advanced Upload dialog were not used when uploading media. This has been fixed. (439231)
    
-   The alternative text defined for the media item on the Advanced Upload Dialog was not set to the uploaded media. This has been fixed. (441749)
    

### Multibrowser fixes

-   [IE9] The Keyboard Map application did not show key codes in Internet Explorer 9. This has been fixed. (353144)
    
-   [Safari] Flash upload did not work in the Rich Text Editor field when the Safari browser was used. This has been fixed. (363365)
    
-   [Chrome, Firefox,IE] The Language and Version list dialogs were not resized correctly. This has been fixed. (403445, 435624)
    
-   [IE] The content tree would sometime render incorrectly and overlap the footer in the Access Viewer dialog. This has been fixed. (436585)
    
-   [IE] The toolbar legend in the Access Viewer application was partially hidden when the Japanese client language was chosen. This has been fixed. (437572)
    
-   [IE] The layout of the Advanced Upload dialog was broken and did not show scrollbars when uploading a large number of files. This has been fixed. (438774, 441231)
    
-   [IE] The Edit Image dialog was incorrectly sized when it was opened after an image was uploaded. This has been fixed. (439135)
    
-   Alert messages shown in the Sitecore backend were not properly formatted and did not render line breaks correctly. This has been fixed. (439021)
    
-   The markup of the Browse Icon dialog when it was opened in the Japanese client language was broken. This has been fixed. (442174)
    

### Performance

-   Item information was requested from the master database multiple times when using the GetItem API. This has been fixed so that the item information is now reused during a single request. (440067)
    

### Potential security vulnerabilities

-   Under specific circumstances, there was a critical vulnerability in the Experience Editor whereby privilege could be elevated through unauthenticated calls made to Sitecore APIs and could permit unauthorized content or file modifications on the website. This has been fixed.
    
-   The value of the AllowScriptAccess property for Flash controls used in Sitecore has been changed from ”always” to ” sameDomain”. The AllowScriptAccess parameter is used when a parent SWF loads a child SWF and determines if the loaded SWF will have the same script access to the web page as the loading SWF. When the parameter is set to always, any SWF loaded by the parent from any domain could inject a script into the hosting web page. (449931)
    
-   User with permission to use the Export Language dialog were allowed to execute download.aspx page. This has been fixed. (451144)
    
-   Some potential cross-site scripting vulnerabilities in the Content Editor, Archive, Control Panel, Launch Pad and User Manager applications have been fixed. (449356, 450624, 451246, 450625, 436393)
    

### Publishing

-   The Auto Publish workflow action did not enable you to configure publishing mode and used republish mode by default. This has been fixed so that the mode can now be changed by using the “smart=1” parameter in the Parameters field. (377674)
    
-   Ancestors of related items might be unpublished when publishing an item with the Related items and children option enabled. This has been fixed. (439555)
    

### Renderings and layouts

-   The Presentation details defined on the Standard Values item on the base template were sometimes lost after modifying the presentation in the Standard Values item of an inherited template. This has been fixed. (442036, 450656)
    
-   Cloned item did not correctly inherit presentation from original item. This has been fixed. (448670, 433286)
    
-   Changes that had been applied to the Final Layout field were sometime saved into the Shared layout. This has been fixed. (451159)
    

### Rich Text Editor

-   No data was rendered in the Document Manager Dialog when it was opened from Rich Text Editor control. This has been fixed. (437826)
    
-   The content inside the Rich Text Editor might sometime disappear or blink when resizing of the control. This has been fixed. (441317)
    

### Security applications

-   The Confirmation dialog appeared when the Cancel button was clicked in the Create New User wizard. This was inconsistent with the behavior of other Sitecore wizards. This has been fixed so that the confirmation dialog does not appear. (437817)
    
-   The Unsaved changes confirmation dialog would sometime appear when leaving a security application (User Manager, Role Manager, Domain Manager) after using search field. This has been fixed. (438389)
    

### Serialization

-   Children of an item with the dollar sign ($) in the name might not be deserialized correctly. This has been fixed. (442318)
    

### Sitecore.ContentSearch API

-   The contact.latsetvisitdate field in the sitecore_analytics_index index would sometime be filled with empty values. This has been fixed. (443161)
    
-   A key property of the IndexedAddress was not initialized properly when searching for a contact in the analytics index. This has been fixed. (450668)
    
-   Analytics data was indexed using the culture context taken from the application pool identity. This has been fixed so that the default culture specified in the ContentSearch.Analytics.DefaultLanguage setting is used. (444084)
    
-   Changes made to contact address were not indexed correctly if the contact was already present in the index. This has been fixed. (444630)
    

### Miscellaneous

-   The value of the health counter ’ .net CLR Memory\% Time in GC’ was not logged correctly in Sitecore logs. This has been fixed. (322798)
    
-   The implementation of the EventSubscribers.RaiseEvent method was not thread safe and would sometimes cause an exception on solutions with a high load. This has been fixed. (404193)
    
-   The LinkBuilder generated an incorrect URL for the root site item. This has been fixed so that the .aspx extension is not added when the item URL only contains the host name. (417527)
    
-   An exception in one of the event subscribers had prevented the execution of other event handlers. This has been fixed so that an exception in one of the handlers will now allow others to process. (426356)
    
-   SQL Server transaction deadlocks had occurred when multiple threads were using the Notifications table to get notifications for clone items. This has been fixed by changing the SELECT statements in the SqlServerNotificationProvider so that it uses WITH NOLOCK when reading from the Notifications table. (426763)
    
-   The icons for preinstalled language items were incorrect. This has been fixed so that the icons used for preinstalled and newly created languages are the same. (434483, 428012)
    
-   The ShowVersion processor in the initialize pipeline logged an exception when trying to determine the version of the assembly with unmanaged code. This has been fixed so that a user-friendly message now prints to the log file. (430848)
    
-   The HealthMonitor initialization code was not thread safe and might sometime log the “WARN Could not register counter in HealthMonitor…” warning to Sitecore log file. This has been fixed. (431305)
    
-   The sitecore_list_index index was removed bythe SwitchMasterToWeb.config configuration file. This caused the ArgumentException exception on content delivery servers when List Manager application was used. This has been fixed so that the SwitchMasterToWeb.config does not remove the index. (435916)
    
-   The Marketing Center, the old name of the Marketing Control Panel, was still present in the content of some items. This has been fixed. (436768)
    
-   Audit information that was added to log files on a number of item operations in the user interface contained some incorrect item language information. This has been fixed. (440760, 387534)
    
-   The translation text for some content items in German has been improved. (443407)
    
-   A stack overflow exception might sometime occur during an update package or usual Sitecore package installation if Sitecore configuration contained definition of the same setting several times. This has been fixed. (440534, 448151)
    
-   Sections of the Template item might not be installed by the Sitecore package installer if a template item without sections exists on the target Sitecore solution. This has been fixed. (450041)
    

### Additional fixes

-   This entry provides reference numbers for scenarios reported by Sitecore customers that have been addressed as part of the other fixes or are no longer reproducible. (366694, 370188, 386471, 389590, 390858, 398079, 402702, 402936, 404186, 405656, 405780, 423061, 428947, 430652, 436489, 440427, 441235, 447683)
    

## Deprecated and removed functionality

-   The properties IsPageEditor, IsPageEditorDesigning and IsPageEditorEditing in the class Context.PageMode from Sitecore namespace have been deprecated in favor of the new introduced properties IsExperienceEditor and IsExperienceEditorEditing. Old properties will be removed in one of the future major versions. (438475)
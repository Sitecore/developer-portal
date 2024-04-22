---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Update4/Release_Notes
---

**June 2017 – released Sitecore Experience Platform 8.2 Update 4 (rev. 170614)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | API | The scope of the `Caching.DebugEnabled` setting on the `Remove(object key)` and `Remove(Predicate predicate)` methods has been extended. |   
 | 156443 |
 | Configuration | In DEBUG mode, all the boosting logs are set to `Verbose`. |   
 | 96907, 453974 |
 | Item Buckets API | The facet-related code was optimized for better performance. |   
 | 145292, 146428, 145306, 96751, 451348 |
 | Miscellaneous | The `CdnPath` and `CdnDebugPath` URLs now use HTTPS. |   
 | 147276 |
 | Web Forms for Marketers | When you create a form, the default engagement value is 100. |   
 | 162879 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | API | `DeviceItem.FindBestMatch` does not fallback to the default device when an exception is raised in `MatchesRules`. |   
 | 150302 |
 | API | An incorrect value in the `SourceItem` field causes `GetItemUriFromSourceItem` to fail. |   
 | 143799 |
 | API | An incorrect value in the `__Source Item` field breaks all the API calls to the item.  |   
 | 153466 |
 | Caching | The ItemCache is not updated after the `RestoreItemCompletedEvent`.   |   
 | 131115 |
 | Content Editor | The Content Editor behaves unreliably when an item contains more than 255 fields. |   
 | 145054 |
 | Content Editor | When you rename an item, its new name is not published. |   
 | 160787,161148,160040 |
 | Content Editor | The field description is shown in the content language. |   
 | 109793 |
 | Content Editor | Searching in the content tree opens an item in the default language. |   
 | 94798, 404768 |
 | Content Editor | In the Media Library, the `Upload Files` dialog fails to handle errors correctly and hangs when using Flash. |   
 | 125233 |
 | Content Editor | The `Rebuild All`, `Rebuild Index`, and `Refresh Tree` commands cause a serialization exception. |   
 | 141098 |
 | Content Editor | If you insert a long text (more than 2000 characters) into any field, an exception occurs. |   
 | 156878 |
 | Content Editor | Time is not shown in a `DateTime` field. |   
 | 90361 |
 | Content Editor | Breaking changes in the behavior of `UserOptions.View.UseDisplayName` cause names in the content tree to be displayed incorrectly. |   
 | 154346 |
 | ContentSearch.Azure | The ​Azure Search provider does not support full-text search.​ | 482343, 483099, 481732 | 157546 |
 | ContentSearch.Azure | The `Take, Skip,` and `Page` methods do not work.​ | 479281 | 150080 |
 | ContentSearch.Azure | Search queries may use the wrong syntax,​ ​​​ignoring​​​​​ Azure Search schema settings​.​ | 485228 | 162451 |
 | ContentSearch.Azure | Exceptions occur when deleting non-existent documents​​​.​​ | 485681, 486771, 487667, 490105, 492778, 495086 | 162750, 164633 |
 | ContentSearch.Azure | ​The _content field must not be marked as retrievable​. |   
 | 161450 |
 | ContentSearch.Azure | ​The `NotSupportedException` exception is thrown when indexing the __semantics fields.​​​ | 478680, 481403 | 146415 |
 | ContentSearch.Azure | Collection fields contain old value in the index when emptied. | 482169 | 155653 |
 | ContentSearch.Azure | ​​`CloudSearchDocumentBuilder` is not taken from the documentBuilderType node of the index configuration.​​​ | 478680, 486819 | 146322 |
 | ContentSearch.Azure | Linq provider parses a service response multiple times. | 479281 | 150103 |
 | ContentSearch.Azure | CloudSearchProviderIndex queries are logged incorrectly​​ as DEBUG​ level.​ | 479281, 483094 | 147541 |
 | Item Buckets | The Item Bucket sync job does not display a count of the processed units. |   
 | 96608, 448409 |
 | Item Buckets Content Search | Content search tries to access the master DB from a CD server. |   
 | 141738 |
 | Item Buckets Content Search | A `Multilist` field that contains IDs without brackets is not indexed.  |   
 | 96010, 433710 |
 | Language fallback | During buckets operations, an English version of an item is created when language fallback is enabled. |   
 | 149157 |
 | Layouts and renderings | The layout delta is generated incorrectly for the `_standard values` and the additional attributes of the rendering of the context item. |   
 | 157536, 159275, 159276 |
 | Layouts and renderings | Incorrect `Placeholder was not found` warnings are added to the log file for cached renderings. |   
 | 100334 |
 | Layouts and renderings | An exception occurs when you open the presentation details of a SPEAK item. |   
 | 96422, 442312 |
 | List Manager | Importing csv files in the List Manager on xDB Cloud was slow and has now been improved. |   
 | 149805 |
 | Media | In some scenarios, media items with the same name are not overwritten when `Upload.SimpleUploadOverwriting=true`. |   
 | 145832 |
 | Miscellaneous | On slow environments, AlarmClock breaks processing. |   
 | 161393 |
 | Miscellaneous | On the Sitecore Desktop, the `Control Panel` shortcut opens the `Log Viewer` application. |   
 | 145105 |
 | Miscellaneous | The `AddToPublishQueue` method does not work with the Oracle data provider. |   
 | 154851, 158554 |
 | Miscellaneous | The `XFrameOptionsHeaderModule` module picks up front-end requests. |   
 | 122317 |
 | Miscellaneous | When `SitecoreADMembershipProvider` is configured, the application crashes when you attempt to log in. |   
 | 139945 |
 | Miscellaneous | During password recovery, sending an email can fail silently without entering an exception in the log file. |   
 | 103775 |
 | Miscellaneous | In the Export language wizard, the `Download` button doesn't work if the path to the language file doesn't contain the '/' symbol. |   
 | 116714 |
 | Miscellaneous | A direct link to a folder can cause a `NullReferenceException`. |   
 | 149586 |
 | Miscellaneous | An authenticated user is redirected to the login page when they access an item that they don't have read permission for. |   
 | 127175 |
 | Miscellaneous | When you click the `Forgot your Password` link, an exception occurs when you reset the password in the German and Danish languages. |   
 | 124719 |
 | Miscellaneous | An incorrect client IP is displayed when the Sitecore servers are behind a proxy load balancer.  |   
 | 136023 |
 | MVC | Anonymous users can preview an unpublished version of an item that has an MVC layout​​. |   
 | 153472 |
 | Performance | There is a memory leak when `Caching.CacheKeyIndexingEnabled.AccessResultCache=true`. |   
 | 153306 |
 | Performance | The number of records in the log file that are created by the `IndexDependentHtmlCacheManager` class has been minimized. |   
 | 95130, 412932 |
 | Publishing | Old blobs are not deleted from the web database when it is published. | 93755 | 93755, 385967 |
 | Publishing | If the shared field of an item is changed, too many entries appear in the `PublishQueue`. |   
 | 146630 |
 | Publishing | The `Object reference not set to an instance of an object` exception sometimes occurs when publishing items. |   
 | 94993, 409190 |
 | Publishing | Tracing failed requests break publishing. |   
 | 95730, 428310 |
 | Rich Text Editor | The `Format HTML` command doesn't work. |   
 | 91462, 336490 |
 | Security API | When a user tries to upload a file to the Media Library, an unhandled exception occurs. |   
 | 148993 |
 | Security API | Enabling `Failed Request Tracing` can cause the `RemoveFromActiveList` in MediaCache to fail. |   
 | 96555, 447399 |
 | Security API | Enabling `Failed Request Tracing` can cause RuleCache clearing to fail. |   
 | 96556, 447400 |
 | Security API | Enabling `Failed Request Tracing` can cause a rule which operates with items to fail to execute. |   
 | 96557, 447401 |
 | Solr | Escape characters generate an incorrect query. |   
 | 131992 |
 | Solr | Search terms that contain dashes "-" give incorrect search results. |   
 | 147167 |
 | Solr | A language specific field is not created in the default language for items. |   
 | 148802 |
 | Web Forms for Marketers | Creating a new field in a blank form throws a `[NotSupportedException: Collection is read-only.]` error. |   
 | 139810 |
 | Workbox | When you move an item from one workflow state to another, the Workbox lists the old workflow state as "?". |   
 | 91681 |
 | Workbox | In the Workbox, the Content Editor does not open correctly when `addAspxExtensionis=false`. |   
 | 93149, 375687 |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Update6/Release_Notes
---

**November 2017 – released Sitecore Experience Platform 8.2 Update 6 (rev. 171121)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Marketing Foundation | ​The new `indexInteractions` pipeline contains all of the indexing processors that were in the old interactions pipeline. ​​​ |  | 186682 |
 | Marketing Foundation | The stored procedures for the `Fact_PageViews`, `Contacts`, and `Accounts` tables in the `Reporting Database` now have now have table valued parameters​.​​ ​​​ |  | 189182 |
 | Marketing Foundation | ​​​​​The `RebuildReportingDB.aspx` page now contains more detailed status information about the historical aggregation process.​ |  | 184348 |
 | Marketing Foundation | ​​​The rebuilding processes for the Index and `Reporting DB` have been split. You can now rebuild the `Reporting DB`, and the `Contact Segmentation Index` separately or together. |  | 186682 |
 | Marketing Foundation | ​​​​​Historical aggregation now supports time slices. This allows you to rebuild a specific portion of the `Collection` database, for example, from the last three months. |  | 186349 |
 | Marketing Foundation | You can now use profile definitions that are structured by folders in conditions. |  | 184837 |
 | ​​​​​​​Marketing Foundation | The stored procedures for the `Fact_PageViews`, `Contacts`, and `Accounts` tables in the `Reporting Database` now have table valued parameters​.​​ |  | 189182 |
 | Miscellaneous | When a user selects an item with a detached file-based media item, the logging message is now a warning instead of an error.​​​ |  | 173436 |
 | Sitecore.ContentSearch.Azure | ​​​​There is now additional support that enables you to mark fields as non-searchable, non-filterable or non-retrievable​.​ |  | 165977, 158044 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | API | Sitecore resolves a part of the URL as a language.​​​​ |  | 135247 |
 | API | ​​​​The `SavedItemRemoteEvent.FieldChanges` property only includes changed fields​. |  | 153554 |
 | API | Placing the ​NOT_A_VALID_FILESYSTEM_PATH file in website folder breaks the media resolution. ​​​​​ |  | 95341, 419708 |
 | API | Incorrect redirects occur when an anonymous user does not have read access permission.​​​ |  | 183497 |
 | Caching | ​​​​Enabling the `CacheKeyIndexing` setting causes non-indexed cache keys to remain in the cache until it has been completely cleared. |  | 171290 |
 | Configuration | The SwitchMasterToWeb.config file leaves out the reference to the Master database.​​​​ |  | 98770 |
 | Configuration | Sitecore 8.2.2 does not patch correctly.​​​ |  | 170250 |
 | Content Editor | ​​​When you add custom text to an item in the Rich Text Editor, clicking `Suggest fix` corrupts the field's values |  | 118610 |
 | Content Editor | There is a broken XML value in the `File` field.​​​​ |  | 92461 |
 | Experience Analytics | ​​The​ `SyncSegmentsProcessor`​ processor runs​ with an anonymous user. |  | 187853 |
 | Experience Profile | ​Experience Profile displays the content management server hostname in links in a scaled environment.​​​​ |  | 60019 |
 | Item Buckets Content Search | ​The web index does not remove the old version of an updated item that has been moved, then published.​​​ |  | 162291 |
 | Item Buckets Content Search | ​​​​Items that have several language versions may disappear from the web index when you run incremental publishing on them. |  | 166467 |
 | Item Buckets Content Search | When you use the `Multilist with Search` field on a bucketed item, the wrong index resolves.​​​​ |  | 150120 |
 | Layouts and renderings | ​​​In the Experience Editor, if you add a personalization rule to a rendering and then remove the shared layout from the item, the item no longer renders. |  | 96725, 450825 |
 | Links | The `sc:link` control renders links that contain a hash tag in the QueryString incorrectly.​​​​ |  | 157139 |
 | Marketing Foundation | ​​​​During the historical aggregation process, interactions are retrieved in batches instead of one at a time. |  | 189175 |
 | Marketing Foundation | ​​​The FIPS-compliant algorithm breaks GeoIP GUID calculation. |  | 164557, 175516 |
 | Marketing Foundation | The `Cannot start analytics tracker` exception appears if two `sc_camp` query strings are present in the URL. ​​​​ |  | 179895, 187776 |
 | Marketing Foundation | ​​​You cannot select a custom profile for a conditional rendering rule. |  | 94227, 188637 |
 | Marketing Foundation | The `Sitecore.Analytics.Data.Items.ItemRecords` class caches items by name with no respect to the root item. Items with the same name but with the different root items are therefore cached incorrectly.​​​ |  | 194513 |
 | Marketing Foundation | The `TrackingField.InitializeProfiles` method slows down performance and request time when you create an instance of TrackingField . ​​​ |  | 120791 |
 | Media | When you create a Media folder, the `En` language is always selected.​​​​ |  | 171079 |
 | Miscellaneous | ​​​​A custom handler with a dash in its name does not resolve properly. |  | 180240 |
 | Miscellaneous​​​​ | ​The `Role Manager` dialogs should be wider.​​​​​ |  | 151325 |
 | Miscellaneous | ​​​Recently selected icons do not appear in the proper template. |  | 136362 |
 | Miscellaneous | ​​​Sitecore does not correctly process routed POST requests. |  | 171457 |
 | Miscellaneous | A large number of profile keys can slow down media requests.​​​ |  | 120793 |
 | Miscellaneous | ​​​​The `_latestversion` property updates incorrectly when you set the strategy property of the `sitecore_master_index` to `intervalAsynchronousStrategy`. |  | 139944 |
 | Miscellaneous | The `Insert link` dialog does not save the target value if the client language is not English​​​​ |  | 185678 |
 | Miscellaneous​​​​ | In the Content Editor, the `Take Screenshot` feature does not work. |  | 146497 |
 | Miscellaneous | When you install the Sitecore Media Framework 2.2, an error occurs and you cannot modify the `Controls` collection.​​​ |  | 186127 |
 | Miscellaneous | ​​​Template inheritance does not work for security profile definition items​. |  | 91988, 350672 |
 | Miscellaneous | In the Experience Editor and in Preview mode, images should not generate hashes.​​​ |  | 94465, 398993 |
 | Miscellaneous | ​​​When branches have similar names, the database browser ​page goes into an infinite loop. |  | 95718, 428025 |
 | Performance | ​​​​​The `Sitecore.Analytics.Data.Items.ItemRecords.FindByName(string name)` method causes performance issues.​ |  | 173876 |
 | Performance | ​​​The `Sitecore.Analytics.Data.TrackingField.NormalizeProfiles` method is very slow and is called too often. |  | 180686, 187774 |
 | Rich Text Editor | When you maximize the Rich Text Editor dialog, the UI does not display correctly.​​​​ |  | 173273 |
 | Rich Text Editor | The Rich Text Editor adds extra text when you put multiple external links in the text.​​​​ |  | 175841 |
 | Rich Text Editor | Some attributes in Rich Text Editor links cause a rendering error. ​​​ |  | 184889 |
 | Security API | You cannot use the `&` character in a role name in the User Manager.​​​ |  | 96550, 447260 |
 | Security API | Users who do not have access to the security item can still change item security. ​​​​ |  | 182616 |
 | Sitecore.ContentSearch.Azure | ​​​You cannot override Azure Search classes​.​ |  | 170252, 166319, 170503, 169125, 136614 |
 | Sitecore.ContentSearch.Azure | The `CloudSearchUpdateContext.Delete(IIndexableId)` method deletes only the first matching document instead of all the matching documents.​​​​​ |  | 165937 |
 | Solr | ​​​Solr returns a URI string that is too long error for large queries​. |  | 166359 |
 | Solr | ​​​Solr Basic Authentication does not work. |  | 141324 |
 | Templates | ​​​In the `Template Builder`, you cannot use the Tab key to move to the next row. |  | 94854, 405985 |
 | Workbox | When you collapse a Workflow panel and then click the `Refresh` button, the Workflow panel disappears.​​​ |  | 157166 |
 | Workbox | When you resize the Workbox window, the groups in the Workbox ribbon do not render correctly. |  | 155649 |
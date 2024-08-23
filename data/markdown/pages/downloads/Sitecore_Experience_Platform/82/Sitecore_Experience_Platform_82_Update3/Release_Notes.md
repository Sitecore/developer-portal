---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Update3/Release_Notes
---

**April 2017 – released Sitecore Experience Platform 8.2 Update-3 (rev. 170407)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Miscellaneous | In the User Manager, you can now search for a user by their email address. |  | 90419, 314410 |
 | Miscellaneous | The __forceSessionPersist session variable is now optional when Analytics is not being used. |  | 95707, 427933 |
 | Miscellaneous | The ManagedThreadPool only creates one worker object per request. |  | 123013 |
 | Miscellaneous | The list of domains is sorted. |  | 137300 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | API | Analytics is not tracked when Global.asax does not inherit the Sitecore.Web.Application class. |  | 112555 |
 | API | The UserOptions.View.UseDisplayName property is applied on low level API. |  | 114313 |
 | Caching | The FilteredItemsCache is not cleared if CacheKeyIndexing is enabled. |  | 138916 |
 | Caching | Unnecessary subscription of event handlers to disabled caches. |  | 133340 |
 | Configuration | Disabling AllowDuplicateItemNamesOnSameLevel causes warnings when you drag & drop an item. |  | 104141 |
 | Content Editor | Custom folders that inherit the default Media Folder template are not regarded as folders in the Document Manager. |  | 95853, 430557 |
 | Content Editor | The scrollbar and resizing handle disappear when you minimize the Favorites popup window. |  | 127945 |
 | Content Editor | A specific language version is shown to users who do not have read access to that language. |  | 131445 |
 | Content Editor | Sitecore uses deprecated fields in some initial items. |  | 90585, 317799 |
 | Content Editor | Cloned items that don't have a presentation are published incorrectly. |  | 137565 |
 | Content Editor | Inefficient retrieval of clones causes poor performance. |  | 138038 |
 | Content Editor | Using the Insert Options to create an item doesn't add the approrpiate entry to the log file. |  | 137983 |
 | Content Editor | Exception is thrown while adding the item to Favorites. |  | 145214 |
 | DataProvider MSSQL | The Sitecore.Data.Sql.SqlUtil.MapType has been updated to use nvarchar(max) instead of ntext. |  | 122319 |
 | Indexing | To improve performance and optimize indexing, in the Sitecore.ContentSearch.Analytics.config file, we changed the default value of ContentSearch.Analytics.IndexAnonymousContacts setting from `true` to `false`. We also updated the description of this setting to explicitly state that `false` is the new default value. |  | 154817 |
 | Item buckets | The GetParentBucketItemOrParent method can cause high CPU usage. |  | 117834 |
 | Item Buckets Content Search | Raising the indexing:propertyset and indexing:propertyget events when the SwitchOnRebuildLuceneIndex index is initialized causes a stack overflow exception. |  | 137437 |
 | Item Buckets Content Search | Index-updating could be locked when using the onPublishEndAsyncSingleInstance in ParallelIndexing mode. |  | 97007, 455965 |
 | Item Buckets Content Search | The index update operation depends on item security restrictions and ignores the ContentSearch.Indexing.DisableDatabaseCaches setting. |  | 108482 |
 | Item Buckets Content Search | The onPublishEndAsyncSingleInstance update strategy should deserialize queued events once instead of N-times for each index. |  | 97024, 456220 |
 | Item Buckets Content Search | Some item updates might get lost when updating or rebuilding an index because a race condition can occur when updating the LastUpdatedTimestamp. |  | 96902, 453882, 96903, 453887 |
 | Item Buckets Content Search | Some item updates might be lost during indexing because the caches are outdated. |  | 96905, 453890 |
 | Item Buckets Content Search | An index is not protected from concurrent updates. |  | 97051, 456837 |
 | Item Buckets Content Search | The contentSearch.getContextIndex pipeline doesn't resolve the index properly. |  | 96771, 451784 |
 | Launchpad | In the Recycle Bin, the Launchpad icon is misaligned and the Logout button does not work. |  | 116707 |
 | Links | Items outside of site root folder are accessible. |  | 117109 |
 | Login | The Admin login page does not log unsuccessful attempts to log in. |  | 139757 |
 | Login | A redirection loop occurs between the Login and the Start page if a new user logs in to the Sitecore shell when the maximum allowed user limit has been reached. |  | 130279 |
 | Login | There is a broken jQuery link on Sitecore login page. |  | 139757 |
 | Login | The Remember me function on the Sitecore login page doesn't resolve the client language correctly when you reopen the browser. |  | 141041 |
 | Media | The Media.AutoSetAlt setting overrides the real Alt property. |  | 90782, 321435 |
 | Media | The "Server cannot append header..." exception occurs when downloading media. |  | 95901, 431566 |
 | Media | Media files cannot be downloaded when the file name contains spaces and dashes. |  | 136841 |
 | Media | In the Upload File (Advanced) window, selecting the Overwrite existing media items option breaks the existing media item when the AllowDuplicateItemNamesOnSameLevel setting is disabled. |  | 126226 |
 | Media | The language parameter (la) is not rendered in a media link that is specified in the General Link field. |  | 138035 |
 | Miscellaneous | Opening an ActionControl on a page, and then opening another ActionControl on the same page, does not close the first ActionControl, which allows the page to inappropriately have multiple open ActionControls. |  | 135240 |
 | Miscellaneous | An HTTP protocol violation occurs when downloading files (packages, from File Explorer, etc.). |  | 90534, 316777 |
 | Miscellaneous | User is redirected to the Sitecore login screen after they log out. |  | 94256, 394926 |
 | Miscellaneous | Sitecore should only check the size of a media item in the ResizeProcessor if it is an image. |  | 93300, 377992 |
 | Miscellaneous | When non-admin users search in the content tree, a null reference exception could occur. |  | 96901, 453881 |
 | Miscellaneous | Rules and script caches are cleared on each item:saved. |  | 96007, 433653 |
 | Miscellaneous | The `<sc:image>` XSLT control doesn't render the `title` attribute in the output `<img>` tag. |  | 90802, 321921 |
 | Miscellaneous | The RolesInRolesProvider is inefficient and in some scenarios causes performance issues. |  | 96955, 455141 |
 | Miscellaneous | Sitecore.MailUtil.SendMail doesn't support SSL. |  | 92211, 356359 |
 | Miscellaneous | The AllowDuplicateItemNamesOnSameLevel setting does not allow you to save template fields. |  | 126862 |
 | Miscellaneous | Paging in the Recycle Bin does not work for non-administrator users. |  | 127149 |
 | Miscellaneous | IncludeTemplatesForDisplay doesn’t work with template IDs. |  | 90652, 318887 |
 | Miscellaneous | The MediaCreator creates versions in every language of unversioned media items. |  | 94414, 398089 |
 | Miscellaneous | It is possible to make an item a clone of itself. |  | 93492, 382253 |
 | Miscellaneous | Non-Admin users can't use the SetDisplayName command when RequireLockBeforeEditing is disabled. |  | 116979 |
 | Miscellaneous | The disabled attribute for field controls is not needed. |  | 134856 |
 | Miscellaneous | Using the ref and factory attributes in a pipeline causes an exception. |  | 142817 |
 | Miscellaneous | A number of methods have inaccurate descriptions. |  | 90864, 323303 |
 | Miscellaneous | The AllowDuplicateItemNamesOnSameLevel setting prevents you from uploading media items when the OverwriteExisting option is selected. |  | 126863 |
 | Miscellaneous | The InitializeCounter method creates unecessary objects. |  | 136022 |
 | Miscellaneous | The Recycle Bin calculates the page count incorrectly for non-admin users. |  | 137515 |
 | Miscellaneous | The Media custom template folder should display a count of all the items in the folder. |  | 139268 |
 | Miscellaneous | The IsAdministrator property contains an incorrect casting operation. |  | 142416 |
 | Miscellaneous | When creating a virtual user, a KeyNotFoundException occurs if the object for the initialized property is not returned. |  | 143782 |
 | Miscellaneous | The FirstVersionAddedNotification has incorrect action options. |  | 137322 |
 | Miscellaneous | You can change the workflow state of an item from the ribbon without locking the item. |  | 127207 |
 | Miscellaneous | If your code uses a 3d party dependencyInjection tool, Sitecore doesn't register it appropriately and this throws an exception. |  | 128785 |
 | Miscellaneous | The database engine cannot always get an exclusive table lock on tables that are being written to and waits until all the write operations are finished. This can cause a timeout. |  | 129456 |
 | Miscellaneous | The HealthMonitor overwrites existing log files instead of creating new log files. |  | 125593 |
 | Miscellaneous | An error in the FileWatcher, causes the Internal buffer to overflow. |  | 106211 |
 | Miscellaneous | The Global.asax architecture is not optimal. |  | 126372 |
 | Miscellaneous | An OutOfMemoryException exception can occur when the Sitecore.DependencyInjection.ServiceLocator.ServiceProvider property is called too many times. |  | 137518 |
 | Miscellaneous | Sitecore can enter a deadlock state if Sitecore.DependencyInjection.ServiceLocator.ServiceProvider property is called too often. |  | 151484 |
 | Miscellaneous | The Mongo session provider can consume all the connections. |  | 143203 |
 | Miscellaneous | A NullReferenceException occurs in the Experience Editor. |  | 110924 |
 | Miscellaneous | CompactClientDataAgent throws an exception in certain situations. |  | 137593 |
 | Miscellaneous | Lock.Obtain waits forever and doesn't throw an error. |  | 92994, 373488 |
 | Miscellaneous | The CompactClientDataAgent method can throw a null exception. |  | 138194 |
 | Miscellaneous | Some hotfixes have been merged into this update. |  | 137572, 135364 |
 | Performance | The OnItemSaved and OnItemSavedRemote handlers make a call to the [dbo.aspnet_Users] table in the Core database which adds an unnecessary overhead on SQL Server and the Sitecore API. |  | 110324 |
 | Performance | The Sitecore.Pipelines.HttpRequest.BeginDiagnostics processor makes a call to the [dbo.aspnet_Users] table in the Core database which adds an unnecessary overhead on SQL Server and the Sitecore API execution pipeline. |  | 110322 |
 | Pipelines | It is not possible to use the uiUpload pipeline from different UI frameworks. |  | 96694, 450156 |
 | Publishing | A reminder is sent every time an item is published. |  | 92656, 367174 |
 | Publishing | Excessive data is published when an item has no versions in some languages. |  | 95988, 433132 |
 | Publishing | The ItemPathsCache is cleared unnecessarily. |  | 132955 |
 | Publishing | The Incremental publishing mode publishes unmodified versions of cloned items. |  | 135362 |
 | Sitecore.ContentSearch.Azure | Fields with DateTime, Date, Boolean, ID data are indexed incorrectly. | 478680, 481732, 481403, 483540, 490003, 489740, 502971 | 145992 |
 | Sitecore.ContentSearch.Azure | User cannot rebuild indexes due to more than 1K fields within sitecore items. | 482951, 485437, 500936 | 152119 |
 | Sitecore.ContentSearch.Azure | The `SearchResultItem.GetDescendants()` method throws 'NotSupportedException' exception. | 478680 | 146054 |
 | Sitecore.ContentSearch.Azure | Negative clauses and clause grouping do not work. | 478680 | 145570, 145716 |
 | Sitecore.ContentSearch.Azure | The `Match()` method does not work when regex contains square brackets. |  | 138537 |
 | Sitecore.ContentSearch.Azure | Search by "Site:*" throws an exception. |  | 130619 |
 | Solr | When the ContentSearch.Solr.EnforceAliasCreation setting is enabled, it breaks index initialization. |  | 124981 |
 | SPEAK | The DatePicker component repeatedly and automatically changes its value going back in time when the value set is in a specific interval near the end of the day and the server is in a different time zone than the client. | 130520 | 98800 |
 | SPEAK | The Sitecore logo shown in the application header extends beyond the edge of the application header when the global header is hidden. |  | 128606 |
 | SPEAK | The SPEAK version 1 Legacy chart components are missing the appropriate base templates. |  | 131784 |
 | SPEAK | In some cases, the ScaleUnit field in LegacyChart templates is shared but should be versioned (to allow translation), while in other cases, the field should be shared (where translation is not appropriate). |  | 140866 |
 | SPEAK | In some cases, SPEAK does not pass some facet text to the Translate method, leading to some untranslated text appearing in the user interface. |  | 134593, 119669, 140813 |
 | SPEAK | When using Solr, the date related filters did not work when, for example, attempting to locate images in the select media dialog. |  | 126828, 144267 |
 | SPEAK | The SPEAK based Uploader component did not use the standard uploader pipelines and therefore ignored the configuration settings restricting specific file extensions from being uploaded. |  | 112543, 96694, 110260, 114071, 147398 |
 | SPEAK | The SPEAK Uploader does not support changing the destination for uploaded files after the user selected the files, but before clicking Upload. |  | 145849, 95551, 145628, 145850 |
 | SPEAK applications | After you have selected the files that you want to upload, you cannot change the destination folder. |  | 95551, 425244 |
 | SPEAK applications | In the Select Media dialog, the All image files filter overrides the Root parameter of the SearchPanel Config filters. |  | 94870, 406359 |
 | SPEAK applications | The Rule editor doesn't show conditions and actions for SPEAK items. |  | 112045 |
 | Web Forms for Marketers | If you rename an item, it reverts back to the field title when you save it. |  | 112928 |
 | Web Forms for Marketers | In an MVC layout, a droplist cannot display an empty choice correctly. |  | 109938 |
 | Web Forms for Marketers | In an MVC form, the Success message is not encoded correctly. |  | 67854 |
 | Web Forms for Marketers | In single-instance setups, the Date and Date picker fields use the user language instead of the Sitecore.Context.Language. |  | 121210 |
 | Web Forms for Marketers | The length of an E-mail field cannot be changed in the Form Designer. |  | 99623 |
 | Workbox | The Workbox throws an exception while paging. |  | 96929, 454335 |
 | Workbox | The Workbox cannot execute commands for non-English items. |  | 141780 |
 | Workbox | The long workflow comment displays incorrectly in the workflow history dialog. |  | 139673 |
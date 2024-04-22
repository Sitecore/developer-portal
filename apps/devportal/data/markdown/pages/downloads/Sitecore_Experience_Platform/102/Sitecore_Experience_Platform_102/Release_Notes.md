---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/102/Sitecore_Experience_Platform_102/Release_Notes
---

**November 2021 – released Sitecore Experience Platform 10.2.0**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Deprecated/Removed](#Deprecated)
-   [Breaking changes](#Breaking)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Experience Platform 10.2.0 includes:

-   ​​The Update Center has been deprecated.
-   ​​​​​​Sitecore Identity Server 6.0.0 is based on .NET Core 3.1 and the updated base libraries. This ensures that our customers receive security updates promptly.
-   The Content Explorer now supports a table view of all the content items.  
    You can use search, queries, and filters to find content items in this table view.
-   ​You can now use the xConnect CLI tools to purge interactions, based on various criteria and reduce the hosting cost associated with collection database shards even further.

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Containers | ​​Two-digit tags are now used in Docker-compose and Kubernetes​. This allows you to use up-to-date images without changing their tags​. | 451858 |
 | Containers | ​The `mssql-init` container has been added to docker-compose​. | 451701 |
 | Containers | ​​​​​Environment variable support for the XP tracker client IP proxy setting has been added. The `X-Forwarded-For` header is enabled in `.yaml files for both Docker-Compose and AKS deployments​.` | 427144, 480007 |
 | Containers | ​​The `ID` role is now based on the .NET Core runtime image​​​. | 427145 |
 | Containers | ​The `compose-init` script has been added to the docker-compose tool to initialize the `.env` file​​. | 444394 |
 | Containers | ​The `mssql-init`​ container uses the `ShardDeploymentTool` to deploy shards to `ElasticPool`​. | 459110 |
 | Containers | ​​​​The Solr container has been updated to version 8.8.2. | 478680 |
 | Containers | ​The `mssql-update image has been updated and you can now upgrade from Sitecore XP 9.3.0 or later to Sitecore XP 10.2.0.​​​` | 467396 |
 | Email Experience Manager | The EXM campaigns table now contains ​an infinite scroll. | 446541 |
 | Email Experience Manager | ​The EXM DDS role now supports containers.​ |  |
 | Experience Analytics | ​You can now sort report tables by the column headings. |  |
 | Experience Analytics | ​​​​​Reports can now be exported as CSV files. |  |
 | Horizon | ​You can now create a data source for a component. ​ | 456066 |
 | Horizon | ​Shared Routing extensions have been added that allow you to switch between Content, Pages, and the Content Explorer.​​​​ | 461606 |
 | Horizon | ​A SAC image has been created for Horizon. | 456322 |
 | Horizon | The Authoring Host has been upgraded to .Net Core 3.1​. | 456335 |
 | Horizon | ​​​​The `Publish/Workflow` group has been redesign​ed. | 416680 |
 | Horizon | ​You can now select links types from a drop-down list. | 421639 |
 | Horizon | ​​​​​Renderings are now grouped thematically. | 402040 |
 | Horizon | ​The Content Explorer now supports a table view of all the content items. You can use search, queries, and filters to find content items in this table view. | 420932 |
 | Horizon | ​​​​​A content author can now select a placeholder that already contains a component and the component containing it. If a user selects a component on top of or within close proximity to another component, they can now use the arrow within the selected field to move within the hierarchy of components. | 456064 |
 | Installation | ​​Sitecore Installation Assistant 1.4.0 supports Sitecore XP 10.2​.0​​​. | 494769 |
 | Marketing Foundation | ​You can now use the xConnect CLI tools to purge interactions, based on various criteria and reduce the hosting cost associated with collection database shards even further. |  |
 | Marketing Foundation | ​​​​​If you use the CLI to purge records from xDB an estimate of how many records are going to be purged is now displayed. | 412543 |
 | Marketing Foundation | ​​xConnect logging has been improved to help diagnose issues as they arise. | 406982 |
 | Marketing Foundation | ​Communication between tracking and xConnect has been improved. |  |
 | Marketing Foundation | ​​​​You can now disable bot auto detection on a site by site basis. |  |
 | Sitecore Forms | ​You can now add an asterisk to a required​ field. | 219239 |
 | Sitecore Forms | We have optimized the way we store `Date` field values. | 451131 |
 | Sitecore Forms | ​We have implemented a `DistinctBy` extension method​. | 479735 |
 | Sitecore Forms | ​We have optimized the data export functionality.​​​​ | 343331 |
 | Sitecore Forms | When you submit a form, the fields are now exported in order even when some fields are empty.​ | 448512 |
 | Sitecore Forms | ​We have optimized data export to support exporting large data-sets. | 385283 |
 | Sitecore Forms | ​​​​​You can now export form entries using local time​. | 339612 |
 | List Manager | ​​​​​It is now easier to add custom facets in the `Contacts` table. | 234293, 450753 |
 | List Manager | ​​​​​You can now add custom columns to the `Contacts` table to show contact facet data. | 234293 |
 | Platform | ​​Sitecore Identity Server 6.0.0 is based on .NET Core 3.1 and the updated base libraries. This ensures that our customers receive security updates promptly. | 442201 |
 | Platform | ​Initial Prefetch​​​ has been improved. | 119321, 476687 |
 | Platform | ​The performance of the `Sitecore.Security.Accounts.UserDelegation.CanManage(User)` method​ has been improved. | 401990 |
 | Platform | ​​​​​The `MaxNodeCount` setting has been added to the `Sitecore.Services.Client.config` ​file. | 441621 |
 | Platform | ​​The logging level in the `OverridePublishContext` processor has been changed from WARN to INFO​. | 470561 |
 | Platform | ​The performance of the `Sitecore.Data.Items.Item.GetUniqueId` method​ has been improved. | 470886 |
 | Platform | ​​​​​The performance of the `Sitecore.Caching.ItemCache.GetKey`​ method​ has been improved. | 470890 |
 | Platform | ​The performance of the `Sitecore.Caching.AccessResultCacheKey.Equals`​ method​ has been improved. | 470891 |

## Deprecated/Removed

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Experience Analytics | ​​The Reducer and Reagrgragation functionality has been marked as obsolete and will be removed in a future version. | 469124 |
 | Email Experience Manager | ​A tooltip that was displayed when you hovered over an item in reports for automated campaigns has been removed.​​​ | 491060 |
 | Miscellaneous | ​​Support for Azure Search has been removed. | 430861 |
 | Platform | ​​​​​The `Update Center` has been deprecated. | 440330 |
 | Platform | ​​​​​​Unused jQuery and Bootstrap libraries have been removed from Identity Server​​​. | 478276 |
 | Platform | The Upload Filter tool has been obsoleted. |  |

## Breaking changes

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Marketing Foundation | -   ​The following classes have been removed:<br />    -   `Sitecore.Processing.Engine.Abstractions.ITaskStatusNotifier​`​<br />    -   `Sitecore.Processing.Engine.Abstractions.Buses.TaskStatusBus`​<br />    -   `Sitecore.Processing.Engine.Abstractions.Messages.*`​<br />    -   `Sitecore.Processing.Engine.Buses.*`​<br />    -   `Sitecore.Processing.Engine.Messaging.*`​<br />-   The following classes have been moved:<br />    -   `​Sitecore.Processing.Engine.Storage.WebApi.XConnectHttpConfiguration, Sitecore.Processing.Engine.Storage.WebApi` moved to `Sitecore.Processing.Engine.WebApi.XConnectHttpConfiguration, Sitecore.Processing.Engine.WebAp`​<br />    -   `Sitecore.Processing.Engine.Storage.WebApi.CultureCodeAttribute, Sitecore.Processing.Engine.Storage.WebApi` moved to `Sitecore.Processing.Engine.WebApi.CultureCodeAttribute, Sitecore.Processing.Engine.WebApi`​<br />    -   `​Sitecore.Processing.Engine.Storage.WebApi.DataRowFormatAttribute, Sitecore.Processing.Engine.Storage.WebApi` moved to `Sitecore.Processing.Engine.WebApi.DataRowFormatAttribute, Sitecore.Processing.Engine.WebApi`​<br />    -   `Sitecore.Processing.Engine.Storage.WebApi.Extensions.ETagExtensions, Sitecore.Processing.Engine.Storage.WebApi` moved to `Sitecore.Processing.Engine.WebApi.Extensions.ETagExtensions, Sitecore.Processing.Engine.WebApi`​<br />    -   `Sitecore.Processing.Engine.Storage.WebApi.HttpResponseUtil, Sitecore.Processing.Engine.Storage.WebApi` moved to `Sitecore.Processing.Engine.WebApi.HttpResponseUtil, Sitecore.Processing.Engine.WebApi`​<br />    -   `Sitecore.Processing.Engine.Storage.WebApi.Models.GetTableDataModel, Sitecore.Processing.Engine.Storage.WebApi` moved to `Sitecore.Processing.Engine.WebApi.Models.GetTableDataModel, Sitecore.Processing.Engine.WebApi`​<br />-   ​The following assemblies have been removed:<br />    -   `Sitecore.Processing.Tasks.Messaging.Xmgmt`​<br />    -   `Sitecore.Processing.Tasks.Messaging`​<br />    -   `Sitecore.Processing.Engine.Storage.WebApi`​ replaced by the new `Sitecore.Processing.Engine.WebApi` assembly<br />-   ​The following members signature has been changed:<br />    -   `​​Sitecore.Processing.Engine.TaskManager​:`  <br />        `.ctor(ILogger<ITaskManager>, ITaskDataProvider, ICursorDataProviderFactory, ITaskServicesFactory)`​  <br />        has been replaced with  <br />        `​​​.ctor(ILogger<TaskManager>, ITaskDataProvider, ICursorDataProviderFactory, ITaskServicesFactory,   IEnumerable<ITaskOptionsValidator>)`<br />    -   `​​Sitecore.Pr​ocessing.Engine.Agents.TaskAgent:`  <br />        `.ctor(ITaskExecutorResolver, ILogger<IAgent>, ITaskDataProvider, IServiceProvider, IConfiguration, ITaskStatusNotifier)`​  <br />        has been replaced with  <br />        `.ctor(ITaskExecutorResolver, ILogger<IAgent>, ITaskDataProvider, IServiceProvider, IConfiguration)`<br />    -   `​​​Sitecore.Processing.Engine.Agents.TaskExecutor:​`  <br />        `ITaskExecutor ResolveTaskExecutor(IServiceProvider, IProcessingTaskData, IAgentId)`​  <br />        has been replaced with  <br />        `ITaskExecutor ResolveTaskExecutor(IServiceProvider, ProcessingTaskData, IAgentId)` ​<br />    -   `​​​​​Sitecore.Processing.Engine.Abstractions.ITaskExecutorResolver​:`  <br />        `ITaskExecutor ResolveTaskExecutor(IServiceProvider, IProcessingTaskData, IAgentId)`​  <br />        has been replaced with  <br />        `ITaskExecutor ResolveTaskExecutor(IServiceProvider, Sitecore.Processing.Engine.Model.ProcessingTaskData, IAgentId)`<br />-   ​​`Sitecore.Processing.Tasks.Sql.SqlTaskDataProvider` now implements ` Sitecore.Processing.Engine.ITaskDataProvider` instead of `Sitecore.Processing.Tasks.Abstractions.ITaskDataProvider` and all the methods have been changed accordingly.​<br />-   The following configuration files have been removed:  <br />    ​ On the cortex processing engine worker instance:  <br />    <br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskCancelation.Messaging.SqlServer.xml `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskCancelation.Messaging.xml `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskCancellation.Messaging.Azure.xml.disabled `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskProgress.Messaging.Azure.xml.disabled `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskProgress.Messaging.SqlServer.xml `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskProgress.Messaging.xml `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskRegistration.Messaging.Azure.xml.disabled `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskRegistration.Messaging.SqlServer.xml `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskRegistration.Messaging.xml `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskStatusBus.Messaging.Azure.xml.disabled `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskStatusBus.Messaging.SqlServer.xml `​<br />    -   `App_Data/Config/Sitecore/Processing/sc.Processing.Engine.TaskStatusBus.Messaging.xml `​<br />    <br />      <br />    On the CM instance:<br />    -   `​App_Config/Sitecore/Processing.Tasks.Messaging.Xmgmt/Sitecore.Processing.Tasks.Messaging.Azure.config `​<br />    -   `​App_Config/Sitecore/Processing.Tasks.Messaging.Xmgmt/Sitecore.Processing.Tasks.Messaging.SqlServer.config `​<br />    -   `App_Config/Sitecore/Processing.Tasks.Messaging.Xmgmt/Sitecore.Processing.Tasks.Messaging.config `​<br />-   ​​The following configuration file has been renamed:  <br />    -   `App_Config/Sitecore/Processing/sc.Processing.Engine.Storage.WebApi.Initialize.xml`​ has been renamed `App_Config/Sitecore/Processing​/sc.Processing.Engine.WebApi.Initialize.xml`​ |  |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Campaign Creator | If the `Publishing Service Module` is installed, you cannot ​create a campaign in the `Campaign Creator`. | 455656 |
 | Containers | ​​You cannot use special characters in the Solr username and password. | 463911 |
 | Email Experience Manager | ​​​​The `WaitForDispatchToFinish.WaitForDedicatedServers(DispatchNewsletterArgs)` method generates an endless loop. | 313873 |
 | Email Experience Manager | The `The message delivery has completed in emulation mode` message is displayed unnecessarily.​ | 440671 |
 | Email Experience Manager | ​The default sorting does not work in the EXM dashboards. | 448246 |
 | Email Experience Manager | ​​​​In the `Preference Center​`, the `​Preference` settings​ are not updated. | 459455 |
 | Email Experience Manager | The `Sent Email Campaigns` dashboard does not display​​ the values for `Sent to`, `Unique opens`, `Open rate`, `Unique clicks`, `Click rate`, and `Unsubscribes`.​​​​ | 460891 |
 | Email Experience Manager | If xConnect is unavailable​​, ​the same contact data is used for different recipients.​ | 461807 |
 | Email Experience Manager | If a user unsubscribes, the confirmation page​ is is not displayed in the target language​ and defaults back to EN. | 466670 |
 | Email Experience Manager | ​​​​The `Drafts` page displays ​duplicate email campaigns. | 485900 |
 | Email Experience Manager | ​​​​​If a user is present in multiple lists, unsubscribing does not always remove the user from all the lists​. | 487992 |
 | Email Experience Manager | In a Marketing Automation campaign, activity descriptions and tool tips that are set to a local language revert to EN after an email has been sent​​.​​​​ | 490012 |
 | Email Experience Manager | ​​​​The description of importing recipients lists from a file mentions that TXT and Excel files are accepted, but the upload function only allows to create a recipients list from a CSV file. | 491062 |
 | Email Experience Manager | ​​​​The notification confirming that a new language version in an email campaign has been created is shown twice in two different colours. | 491668 |
 | Experience Analytics | ​In Experience Analytics, `[unkown region] dat` is displayed for certain regions. | 482887 |
 | Experience Analytics | ​The `ExperienceAnalytics.DimensionKeys` and `ExperienceAnalytics.DimensionItems` caches are recreated multiple times. | 469124 |
 | Experience Analytics | ​​​​​The `ExperienceAnalytics.Sites` cache is created multiple times. | 235083 |
 | Experience Editor | ​In a multi-site setup, if you select an item in the content tree, the ​`Context.Site` is not resolved correctly. | 465667 |
 | Experience Editor | ​In a `List` view, if you select ​a `Search` field with a general Link, i​t throws an error. | 481916 |
 | Experience Editor | ​​​​In the Rich Text Editor, if you change the text formatting of a link, the ​`Remove Link` button is disabled. | 484375 |
 | Experience Editor | ​​​​​If you add an alt text to an image, it disappears in the Experience Editor.​ | 464217 |
 | Experience Editor | ​​​​The `CheckRevision` processor does not ​compare versions correctly. | 76398 |
 | Experience Editor | `​MyItemsCountRequest` performs RefreshIndex synchronously​.​​​​ | 208634 |
 | Experience Optimization | When you retrieve suggested tests, performance is degraded. | 449450 |
 | Experience Optimization | ​If you create goals in any language except English, they are not displayed correctly in test objective drop-down list.​​​​ | 446356 |
 | Experience Optimization | The default variant does not respect the context language.​​​​​​ | 448952 |
 | Experience Optimization | ​​​​If you add a rendering to a placeholder that is part of a rendering under personalization, the ​`Could not find the rendering in the HTML loaded from server` error occurs. | 449029 |
 | Experience Optimization | ​​If you merge contacts, the `MergeInfo` facet is not populated correctly. | 451830 |
 | Experience Optimization | If you ​remove every personalization rule, the `Default` rule is not removed. | 449644 |
 | Experience Optimization | ​​​​​You cannot remove the `Default` rule. | 464530 |
 | Experience Optimization | ​​​​​A rebuild of the `sitecore_suggested_test_index` is triggered more frequently than required and this places an necessarily high load on the search infrastructure. | 336911 |
 | Experience Optimization | ​If device detection is not initialized and live events are used, the​ `ConvertMVTestEvent` causes page load delays. | 467020 |
 | Experience Profile | If a profile item does not have an English version, an error is thrown | 357427 |
 | Experience Profile | ​​​​If multiple profile keys share the first 9 characters in their name, the ​Radar chart is empty. | 316258 |
 | Experience Profile | ​​​​​​​Incorrect URLS in the Experience Profile UI cause the `ModelState is not valid` error to occur. | 215069 |
 | Experience Profile | ​An incorrect icon is displayed for certain events. | 223455 |
 | Experience Profile | ​Long URLs are not displayed correctly. | 221868 |
 | Experience Profile | In the Experience Profile, the ​timeline uses UTC time instead of the current time zone. | 126998 |
 | Horizon | In the `Data Source` dialog, the ​template list​ is not scrollable.​​​​ | 456792 |
 | Horizon | ​​​​If you scroll a large content tree​ in the `Rendering` dialog, the ​`Create new` button is not sticky. | 452408 |
 | Horizon | ​​​​A Horizon search result does not open the correct website. | 454360 |
 | Horizon | ​​​​If you run​ a platform session and a Horizon session in the same browser and then log out from the platform, you are not logged out of Horizon. | 451499 |
 | Horizon | ​​​​​The `Gallery` component does not display a loading spinner​ when it is fetching renderings. | 365296 |
 | Horizon | ​​​​In Firefox, if you create or rename an item, the cusror behaves inconsistently. | 370300 |
 | Horizon | ​​​​​In the item tree, the undo drag-and-drop functionality does not work. | 415857 |
 | Horizon | ​​​​In a `Rich Text` field, ​a numbered list with line breaks​ is rendered incorrectly. | 431684 |
 | Horizon | ​​​​​If you modify a field, three unnecessary requests are sent with each save request. | 451402 |
 | Horizon | ​​​​​In the `Assign Content Item` dialog, the item tree is not loaded if the datasource item is outside of the datasource location. | 451477 |
 | Horizon | ​​​​The current item in the content tree does not remain highlighted when you invoke the context menu.​ | 472533 |
 | Horizon | ​​​​​The `Data Source` dialog is not scrollable on small screens. | 456794 |
 | Horizon | ​​​​In a `Rich Text` field when you switch between `Edit Page` and `Metadata` modes​, unintended changes occur. | 415702 |
 | Horizon | ​​​​​If you try to select a language version that has not yet been created, the right hand side panel shows incorrect `Created` and `Created by` information. | 418078 |
 | Horizon | ​​​​On the `Insights` page, ​ if you collapse or expand the left hand side panesomel, some charts do not automatically resize. | 422445 |
 | Horizon | ​​​​​The message that is shown shown when you move an item in the content tree is worded incorrectly. | 423937 |
 | Horizon | The selected item in the content tree is not displayed in semi-bold.​​​​ | 442058 |
 | Horizon | ​​​​​The text in a `General Link field does not fall back to the item name after it is cleared in the right hand side panel.` | 450393 |
 | Horizon | ​​​​​In the `Content Item` dialog, you cannot select a folder as a datasource for a rendering. | 451479 |
 | Horizon | ​​​​On the `Canvas`, if the text for an internal or external link contains a space, it ​breaks the link. | 452412, 452415 |
 | Horizon | ​​.NET Core Remote Code Execution Vulnerability CVE-2021-24112 has been addressed. | 483467 |
 | Horizon | If an image field contains a value, you cannot upload a media item to the root folder. | 166662 |
 | Horizon | ​​​​​If you delete an item from the content tree, an error occurs.​ | 489894 |
 | Horizon | In the RTE, if you discard your changes, they are still saved.​​​​ | 488859 |
 | Horizon | ​If you use an invalid Item Id query string parameter to open an item, the content tree does not work correctly. | 483027 |
 | Horizon | If an item has a long name, the content tree does not hide the text when it displays an ellipsis. | 481354 |
 | Horizon | ​​​​​​​​In the `Date/Datetime` picker​, the calendar does not display the last day of each month. | 469143 |
 | Horizon | ​In a `Drop Link`​ field, you can select the `None` item. | 450868 |
 | Horizon | ​In a `Drop Link` field, a scroll bar is displayed when it is not needed. | 450870 |
 | Horizon | ​​​​​If an image has parentheses in its name, it is not uploaded. | 444007 |
 | Horizon | ​In the `Date Picker` popup, if a user clicks on an arrow​, the `Date Picker`​ moves. | 355662 |
 | Horizon | ​The `Expansion` panel and accordion header arrow is not aligned correctly. | 368432 |
 | Horizon | ​​​​The `Expansion` panel does not have a separator line​. | 368577 |
 | Horizon | ​In the RTE field​, the tabs do not have the hover/active state.​ | 374226 |
 | Horizon | ​​​​​Creating an item in the Content tree causes errors. | 450710 |
 | Horizon | ​​If you remove an item from a `Droptree` field, the tree does not load correctly. | 452837 |
 | Horizon | The `QueryController` causes an API endpoint conflict.​​ | 467666 |
 | Horizon | ​​​​In a `Rich Text` field, ​numbered lists that contain line breaks​ are rendered incorrectly​. | 431684 |
 | Horizon | ​If you use the `@Html.Sitecore().BeginField` helper, it breaks the Page editor. | 468371 |
 | Horizon | If you close the `Global` search panel, the search field is not cleared. | 448158 |
 | Horizon | ​​​​​If you use the `Undo` or `Redo` buttons, the data in a droptree is not handled smoothly. | 463314 |
 | List Manager | ​​​​`Convert to Contact List` process for a segmented list can be started multiple times​, and this generates corrupt lists.​ | 453180 |
 | List Manager | ​​​​You can start the conversion of a segmented list twice. | 453180 |
 | Marketing Automation | The Dashboard runs in the context of the website instead of in the context of the shell site and this causes errors.​ | 468077 |
 | Marketing Foundation | ​​​​​If a URL ends with a slash, it breaks the `VisitorIdentificationCSS.aspx` and `VIChecker.aspx` analytics requests. | 485791 |
 | Marketing Foundation | ​​​​​The `CursorScheduler.TryGetNextAsync` cursor is completed before the job is finished. | 461061 |
 | Marketing Foundation | ​In certain scenarios, a ​memory leak occurs in the xConnect client. | 476077 |
 | Marketing Foundation | When the submit queue is processed, `​AlreadyExist` and `ReferenceNotFound` exceptions are thrown. | 421148 |
 | Miscellaneous | ​​​​​A field that is added to the `AddIncludedField` setting is not added to the index​​. | 404384 |
 | Path Analyzer | ​Durining processing the historical interactions of a contact are loaded unnecessarily thereby decreasing throughput.​​​​ | 460948 |
 | Path Analyzer | In Path Analyzer maps, impressions relating to wildcard URLs are displayed as "*".​ | 107691 |
 | Path Analyzer | ​The `English Visits` branch template contains a link to a missing condition. | 447660 |
 | Platform | ​​​​​The `User Manager` resolves every user every time the `User Editor` is opened and this degrades performance on Azure databases​​. | 490850 |
 | Platform | ​The `Sitecore.Data.ID.IsID` method returns incorrect values​. | 93188 |
 | Platform | If you delete a version of a media item from the `Recycle Bin`, Blobs are not removed. | 93303 |
 | Platform | ​​​​In the `Media Browser` dialog box​, on the `Search` tab, you cannot select a media item. | 95929 |
 | Platform | ​​​​In the `BreakingLinks` dialog, if you enter a link to another item, it​ changes the rendering parameters. | 205771 |
 | Platform | ​​Broken links are not removed from fields based on the `Sitecore.Data.Fields.ReferenceField` type. | 257195 |
 | Platform | ​The `FieldCollection.GetField(ID fieldID)` method can return null during concurrent access. | 297829 |
 | Platform | ​The partial retrieval of a media file fails when the range value is larger than the file size.​​​​ | 344806 |
 | Platform | ​​​​​If the `Item name` and `Display name` contain special characters, they are double-encoded. | 393368 |
 | Platform | ​When publishing restrictions are set​, the `MaxAge` ​media cache header causes an error. | 426977 |
 | Platform | ​In a rule condition, s​pecial characters, for example, \, # or ;< are encoded. | 432988 |
 | Platform | ​​​​If you create an item from a branch, ​excessive web requests degrade performance. | 443203 |
 | Platform | ​​​​If the value of the language cookie is set to an incorrect value, a​ `Could not parse the language` error occurs. | 444486 |
 | Platform | ​If the httpcookies `domain` attribute contains a value, an iInfinite loop occurs when you log out. | 445560 |
 | Platform | ​If you remove all the personalization rules the `Default` rule is not removed. | 449644 |
 | Platform | ​​​​​Language Fallback changes the `Standard Values`​. | 449857 |
 | Platform | ​​​​If the `AllowDuplicateItemNamesOnSameLevel` setting is set to false, `​PublishAgent` can fail. | 452733 |
 | Platform | ​Some security vulnerabilities have been fixed. | 452739, 475944, 486210, 472976, 478174 |
 | Platform | If a rendering is cacheable and the `vary by data` setting set to true, ​multi-variant tests do not work correctly. ​ | 452994 |
 | Platform | ​​​​​In the Experience Editor, if you change the sort order, ​the `Revision` field is not updated. | 462936 |
 | Platform | ​​​​​If you clone a large number of items, performance is poor. | 470250 |
 | Platform | ​If you try to view media item that is locked by another user​, ​an exception occurs. | 476178 |
 | Platform | ​The LinkBuilder uses the `hostName` setting instead of the `site name` setting. | 477034 |
 | Platform | ​​​​​If the "hide rendering" personalization rule has the "Ignore other caching settings override with defined below" caching option cleared, it causes an exception​. | 482547 |
 | Platform | ​If a Rich Text field contains a ​`Text Fragment link `with a single left parenthesis, it causes a regex exception.​​​​`` | 489112 |
 | Platform | ​​If the `Display name` of an item contains special characters, it breaks the `Link Manager` and the `Item Resolver` processor​. | 491722 |
 | Platform | ​​Telemetry tracking can affect application performance because of compatibility issues related to the `System.Security.Cryptography.Algorithms` library. | 485287 |
 | Platform | If you configure a private session state to use Redis or SQL Server, the Content Editor no longer works. | 468220 |
 | Sitecore.ContentSearch | ​If you use multiple `OR` operators in a search queary, it does not work correctly. | 452871 |
 | Sitecore.ContentSearch | ​Sitecore tries to index the `Final Renderings` field​. | 466628 |
 | Sitecore.ContentSearch | If you search with the `sort by field` setting and the field is not specified in the `fieldMap` setting for the index, performance is very poor. | 127551 |
 | Sitecore Forms | If consent is revoked, no data is saved. | 413788 |
 | Sitecore Forms | ​If you create a form that contains a section, it throws an error. | 481105 |
 | Sitecore Forms | The `FormFieldController::ReloadField​` class generates ​insecure deserialization. | 453804 |
 | Sitecore Forms | ​​​​In the `text/label` of a form field, if you ​use the closing `br` tag, it​ adds an additional div tag when you click `Apply`. | 443768 |
 | Sitecore Forms | ​​​​​If you add multiple forms to a page, visitors cannot submit a form. | 464202 |
 | Sitecore Forms | ​In the `redirect to url` action, ​prameters are not encoded correctly. | 478130 |
 | Sitecore Forms | ​​​​​ In an exported CSV file that contain form data, the order of the columns can change. | 435640 |
 | Sitecore Forms | ​​​​A multi-page form does not work correctly if the session expires before you submit the form. | 480373 |
 | Sitecore Forms | ​​If you multiple forms to a page, the forms are not saved when you try to save them. | 463172, 460912 |
 | Sitecore Forms | ​If you put a second form on a page, it does not work. | 470882 |
 | Sitecore Forms | ​The navigation path does not align with the selected navigation item.​​​​ | 471457 |
 | Sitecore Forms | A `Dropdown List` field that has ​a condition with a hide action ​does not always work.​​​​ | 289772 |
 | Sitecore Forms | ​In the Experience Editor​, in preview mode, ​conditions do not work. | 424629 |
 | Sitecore Forms | ​If tracking is disabled, the Save Data submit action does not save any data.​ | 464192 |
 | Sitecore Forms | If you submit a form that contains an empty non-required `File Upload` field​, an exception occurs. | 389332 |
 | Sitecore Forms | ​​​​​If you submit a form​, a session expire message​ is displayed. | 479471 |
 | Sitecore Forms | ​​​​If you submit a form with the `Redirect to Page` or `Redirect to Url` submit action​, ​an alert about session expiration is displayed. | 483698 |
 | Sitecore Forms | ​​The `Form List` is sorted incorrectly by name​. | 409298 |
 | Sitecore Forms | ​You cannot add two actions of the same type to a form​. | 398965 |
 | Sitecore Forms | ​​Newlines (\n) in `Multiple-line Text` form fields are stored as blank spaces​. | 451133 |
 | Sitecore Forms | ​Exported csv files contain an incorrect delimiter​. | 357495 |
 | Sitecore Forms | ​If the formatting of a `Date` field contains several spaces, the field works incorrectly. | 423023 |
 | Sitecore Forms | ​​​​The `Sitecore.ExperienceForms.Mvc.Controllers.BaseFormBuilderController.ProcessFormData` method can throw a `System.NullReferenceException` error. | 447188 |
 | Sitecore Forms | ​If you use the `FormItemTreeView Parameters` template, ​checkboxes remain unchecked on the form. | 476128 |
 | Sitecore Forms | ​If you create a form with the `trigger goal` action and the `enableTracking` setting set to `false`, it cannot be submitted. | 449691 |
 | Sitecore Forms | ​​​​​Sitecore Forms uses the `en` language when you select the `Redirect to Page` action. | 228498 |
 | SPEAK | ​Stylesheets are not build correctly. | 470157 |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/101/Sitecore_Experience_Platform_101_Update1/Release_Notes
---

**June 2021 – released Sitecore Experience Platform 10.1.1**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## New features/improvements

 | Context | Description | Ref. ID |
 | --- | --- | --- |
 | Containers | Sitecore Identity Server supports ASP.NET Core Runtime 2.1.28. | 479052 |
 | Installation | Sitecore Install Assistant 1.2.3 supports Sitecore XP 10.1.1, | 475141 |
 | Platform | In the `prerequisites.json` file, the dotnet core runtime version has been u​pdated to 2.1.28​. | 479185 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Ref. ID |
 | --- | --- | --- |
 | Containers | ​The 7-zip installer prevents the Solr-init image from being built. | 463219 |

 | Email Experience Manager | The `Preference Center` does not update a user's subscription preferences. | 459455 |
 | Experience Optimization | ​The datasource of the original variant is overridden by the context item if you add a new variation during component testing. | 393648 |
 | Experience Optimization | ​The active page test is overwritten when you create and save a new page test​. | 474259 |
 | Experience Optimization | ​The `Default` personalization rule cannot be removed.​ | 477131 |
 | Horizon | ​.NET Core Remote Code Execution Vulnerability CVE-2021-26701 has been fixed. | 487513 |
 | Marketing Foundation | ​If xConnect experiences any issues, `Task Manager` tasks are interrupted. | 461138 |
 | Marketing Foundation | ​The Collection Search SOLR WDP is configured incorrectly. | 473204 |
 | Marketing Foundation | ​The `CursorScheduler.TryGetNextAsync` cursor gets completed before the work is finished​. | 476817 |
 | Marketing Foundation | ​If you stop the `Collection ​Search Indexworker` service, the `Sitecore.XConnectSearchIndexer.exe` process stays alive for a long time. | 478798 |
 | Platform | If the end date for a publishing restriction is set​ to yesterday, the `MaxAge` media cache header causes an error. | 473233 |
 | Platform | If the HTTP cookies domain attribute is set to `.930.cm`, an infinite loop occurs on logout. | 473231 |
 | Platform | If the value of the language cookie (`website#lang`) is set to an incorrect value, the `Could not parse the language` message is shown. | 473235 |
 | Platform | If you delete a version of a media item from the `Recycle Bin​`, ​Blobs are not removed​. | 473237 |
 | Platform | ​Broken links are not deleted from fields that are based on the `Sitecore.Data.Fields.ReferenceField` type​. | 473239 |
 | Platform | ​If the `Item name` and `Display name` contain special characters, they are double-encoded. | 473238 |
 | Platform | ​If the `Range` value is larger than the size of the file, the partial retrieval of media files fails. | 473236 |
 | Platform | If the `AllowDuplicateItemNamesOnSameLevel` setting is set to `false​`, the ​`PublishAgent` can fail under some conditions. | 473241 |
 | Platform | ​Sitecore queries that contain the pipe '|' symbol return incorrect results when searching an item and its children. | 473243 |
 | Platform | ​The `Language Fallback` functionality can change the `Standard Values` of an item. | 473242 |
 | Platform | ​The `User Role` condition does not work for virtual users​. | 473230 |
 | Platform | ​The `Default` personalization rule cannot be removed in some circumstances​. | 473227 |
 | Platform | ​The `BreakingLinks` dialog is not shown when you delete an item. | 473228 |
 | Platform | If you change the sort order in the Experience Editor, ​the `revision` field is not updated​. | 473244 |
 | Platform | ​If you enter special characters in a rule condition, they are encoded.​ | 473226 |
 | Platform | Some security vulnerabilities have been fixed. | 473246, 477634 |
 | Platform | ​The link for the `Web Platform Installer` is out of date.​ | 479292 |
 | Sitecore Forms | ​If you resubmit a form, robot detection becomes disabled. | 452462 |
 | Sitecore Forms | If tracking is disabled, the `Save Data` submit action does not save any data. | 468105 |
 | Solr | Items that are created and updated by an Admin​ uswer are listed as having been created and updated by `Anonymous`.​​​​ | 470931, 470558, 455017, 454481 |
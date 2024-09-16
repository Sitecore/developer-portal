---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/31/Sitecore_Publishing_Service_31_Update3/Release_Notes
---

**April 2019, released Sitecore Publishing Service 3.1 Update 3**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​The height of the `ScrollablePanelLanguages` and `ScrollablePanelTargets` panels in the `Publish item` and `Publish all items` dialog boxes is now adaptive. | 500352 | 276576, 35763 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Publishing Service can block `Event Queue` processing​. | 516319, 524299 | 276743, 41639 |
 | When you modify and publish a shared field, ​not all language versions are reindexed​. | 501463, 502044, 503662 | 276355, 36156 |
 | ​ The `PublishOperationCleanUp` task​ does not clear all the `Consider Item` records from the `Publishing_PublisherOperation` table.​ | 513062, 515531, 516097, 528900, 523333, 516390 | 278662, 40959 |
 | ​The `Publishing_Data_Initialise_Params` SQL query is called multiple times during a single publishing job​. | 494156, 515203, 516390, 516996, 517530, 523496, 524845, 526603, 526993 | 268863, 32051 |
 | ​Publishing fails when a clone and its copy are published together​. | 513686, 514561, 515160, 516359, 516390, 522574, 527581, 527895 | 276754, 40913 |
 | ​​You cannot publish the descendants of related items if the related item is not already published​. | 318203 | 321925 |
 | If publish restrictions are applied to the parent item​, ​child items are not unpublished. | 528860 | 322514 |
 | ​​The `TargetDataCacheClearHandler` logs the same message twice​. |  | 324142 |
 | `​​PublishOperationCleanupTask.OnExecute()` logs incorrect messages. |  | 282152, 39983 |
 | ​If you click `Publish` multiple times, this adds multiple versions of the same job to the publishing queue. |  | 324690 |
 | ​​​Logging only records the message and not the actual exception. |  | 325284 |
 | ​If the database schema is upgraded in any timezone other than GMT 0, unwanted `Consider item` records appear in the database. |  | 278675, 41278 |
 | ​The `BasePublishingController` does not log an `AggregateException` correctly. ​​ | 502523 | 276913, 36683 |
 | ​An error occurs in the `DeferredItemsTargetProducer` file when you publish an item that doesn't have a parent item.​​​ | 522713, 528105 | 303477 |
 | When you publish Sitecore templates that have sub-items and related items, a `System.ArgumentException` error occurs in the `VariantsValidationTargetProducer`​ file. | 514087, 514669, 514972, 516390, 516899, 518837, 521005, 522544, 524671, 525926, 527429, 527725, 528200, 528586 | 278655, 40925 |
 | ​​Changes to `Versioned` fields are only reported in one language when the field is registered with the `ReportPublishFieldsResolver`. |  | 318767 |
 | If an item has no version in the current content language, it is not published after it is moved​.​​ | 515850 | 278071, 41723 |
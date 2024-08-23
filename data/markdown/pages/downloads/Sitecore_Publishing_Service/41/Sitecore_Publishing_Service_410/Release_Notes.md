---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/41/Sitecore_Publishing_Service_410/Release_Notes
---

**July 2019 – released Sitecore Publishing Service 4.1.0**

## Highlights

-   ​Beginning with Sitecore XP 9.2.0, the Sitecore Publishing Service Module is released independently of the Sitecore Publishing Service. Future versions of the Sitecore Publishing Service will be compatible with any version of the Sitecore Publishing Service Module unless otherwise specified.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​​​​The `Publishing` dashboard now displays ​more information about the publishing job that is currently running. |  | 329235 |
 | ​The Sitecore Publishing Service Module is now released independently of the Sitecore Publishing Service. Future versions of the Sitecore Publishing Service will be compatible with any version of the Sitecore Publishing Service Module unless otherwise specified. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​​​​​The `Publishing Service` does not publish the value a field if only the casing of the value has been modified. | 519513, 522140, 524599 | 290996 |
 | ​​​​​​​​When you publish Sitecore templates that have sub-items and related items, a `System.ArgumentException` error occurs in the `VariantsValidationTargetProducer​` file.​ | 514087, 514669, 514972, 516390, 516899, 518837, 521005, 522544, 524671, 525926, 527429, 527725, 528200, 528586 | 327115 |
 | ​​​​​​​​​​Logging only records the error message and not the actual exception. |  | 327119 |
 | ​The `Publishing Service` can block `Event Queue` processing​.​​​​​​​ | 516319, 524299 | 327097 |
 | ​The `PublishOperationCleanupTask.OnExecute()` method logs incorrect messages.​​​​​​​​​ |  | 327121 |
 | ​​​​​​​The `PublishOperationCleanUp` task​ does not clear all the `Consider Item` records from the `Publishing_PublisherOperationtable`.​ | 513062, 515531, 516097, 528900, 523333, 516390 | 327093 |
 | ​If publishing restrictions are applied to a parent item​, ​the child items are not unpublished.​​​​​​​ | 528860 | 327107 |
 | You cannot publish the descendants of a related item if the related item is not already published​.​​​​​​​ | 318203 | 327577 |
 | When you publish an item that does not have a parent item, ​​an error occurs in the `DeferredItemsTargetProducer` file.​​​​​​​ | 522713, 528105 | 327087 |
 | ​​​​​​​​The `Publishing_Data_Initialise_Params` SQL query is called multiple times during a single publishing operation.​ | 494156, 515203, 516390, 516996, 517530, 523496, 524845, 526603, 526993 | 327113 |
 | ​An empty value of the `lang` and `targets` list fields can be stored in the `publishingpreferences` cookie​.​​​​​​​ | 521657 | 311209 |
 | ​An item is not published after it has been moved if it has no language version in the current content language​.​​​​​​​ | 515850 | 327111 |
 | ​​​​​​​​ An item is not unpublished when all its versions became unpublishable​. |  | 327644 |
 | ​​If you click `Publish` multiple times, it adds multiple versions of the same job to the publishing queue.​​​​​​​​​ |  | 327105 |
 | ​​​​​​​In the `Publishing` dashboard, the list of `Queued jobs` does not display more than 10 queued jobs. | 513598 | 320235, 282148 |
 | ​​​​​​​​​​In the `Publish item` and `Publish all items` dialog boxes, the height of the `ScrollablePanelLanguages` and `ScrollablePanelTargets` panels is now adaptive. | 500352 | 327089 |
 | ​​​​​​​​You cannot publish the descendants of a related item if the related item is not already published.​ | 318203 | 327091 |
 | ​​​​​​​In the `Publishing` dashboard, if you start a publishing operation without selecting any languages or publishing targets, the operation is added to the publishing queue. |  | 326681 |
 | ​​​​​​​​The `TargetDataCacheClearHandler` logs the same message twice​.​ |  | 327101 |
 | ​​​​​​​​An unauthorized user can use a web request​ to publish an item. |  | 280331 |
 | ​​​​​​​​Serialization is incorrect in `Japanese` and `Chinese`. |  | 300010 |
 | In the `Active jobs` section, ​languages are scattered around.​​​​​​​ |  | 260101 |
 | ​​​​​​​Any changes made to a `Versioned` field are only reported in one language when the field is registered with the `ReportPublishFieldsResolver`. |  | 327117 |
 | ​​​​​​​In the in the `Sitecore.Publishing.Service.config` file, the `PublishingServicePublishManagerJobStatusRequestDelay` setting does not work. |  | 320201 |
 | ​Publishing jobs that are scheduled through the `PublishManager` can be delayed in the publishing queue.​​​​​​​ | 508534, 524409, 527850 | 277670 |
 | In the `sc.publishing.contentavailability.xml` file, the default configuration is incorrect.​​​​​​​ | 531412 | 329624, 297155 |
 | ​In the first publishing dialog, the `Publish` button is active when no publishing target has been selected.​​​​​​​ |  | 306142 |
 | ​​​​​​​If language fallback is enabled, the Publishing Service adds too many `SavedItemRemoteEvent` events to the event queue. | 524299, 526616, 527415 | 314713 |
 | ​​​​​​​If the latest version of a published item has a restriction set in the `Valid To` field, the item is removed from the `Web` database. | 525151, 526654 | 310786 |
 | When the publishing service is not running, ​the `Publish` button is enabled.​​​​​​​ |  | 326613 |
 | ​​​​​​​​An `Item:save` event error occurs when you try to create profile cards, profile patterns, or deploy campaigns and goals. |  | 288976 |
 | ​​​​​​​If the latest version of an item has a restriction set in the `ValidTo` (Publishable to) field, ​the index contains an incorrect `versionsunsetdate` value. | 525151, 526654 | 310787 |
 | ​`TestingVariantsValidationTargetProducer` prevents `bucket structure` folders from being published.​​​​​​​ | 531793 | 334116, 331065 |
 | If an item contains shared fields, they are not updated if you publish the item in a language that is not the context language. |  | 331671 |
 | ​If language fallback is enabled, the Sitecore Publishing Service adds too many `SavedItemRemoteEvent`s to the `web` database. ​​​​​​​ |  | 311084 |
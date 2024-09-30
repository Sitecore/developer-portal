---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/30/Sitecore_Publishing_Service_30_Initial_Release/Release_Notes
---

**October 2017 – released Sitecore Publishing Service 3.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Publishing Service is now compatible with Sitecore 9.0. |  |  |
 | Support for third party DLLs has been added at runtime​​. |  | 28931 |
 | The configuration file locations have been updated to match Sitecore 9.0. |  | 150815 |
 | ​​A new diagnostics command has been added to fix revision ID GUID case senstivity problems in Sitecore databases.​ |  | 30847 |
 | ​​The `PublishBatchResultProcessor` processor cannot retrieve information about custom fields​​. |  | 26934 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Publishing Service does not remove orphaned items as expected. | 492759, 492966, 493133, 490914, 490854 | 30344, 30681, 29771, 28932 |
 | An inconsistent value in the _Source field prevents publishing​​​. | 489050, 486188, 489269 | 29619 |
 | Publishing fails when the Index was outside the bounds of the array error.​ | 488223 | 29482 |
 | The `Publish Item` command does not handle the `PublisherOperation` table events properly​​. | 486845 | 29058 |
 | When publishing clones, an exception is thrown if an original item doesn't have a publishable language.​​ | 483965 | 27684 |
 | Remote events may not be added to a target EventQueue due to the concurrency issue. ​ | 489712 | 30833 |
 | The `Globalization.Translate` dictionary cache is not cleared or reset on the `publishingservice:cache:clear` event​. | 487454 | 29150 |
 | There is no information about item publishing in the dialog on Azure. |  | 28809 |
 | ​​​​​​​​​A new diagnostics command has been created to fix revision ID GUID case sensitivity problems in Sitecore databases.​ |  | 30847 |
 | ​​The `PublishBatchResultProcessor` processor cannot retrieve information about custom fields​​.​​​​​​​ |  | 26934 |
 | ​The target indexes algorithm has been improved to support faster single item publishing in large databases.​ | 491424 | 30916 |
 | ​Bucket subitems do not publish after you perform a bucketing and reverting operation.​ |  | 28773 |
 | ​Content availability - A version of the item is considered unpublishable if the next version has a "Publishable From" restriction. | 491606 | 31027 |
 | ​​The Publishing Service unexpectedly deletes items during single item publish. | 491265 | 31865, 31185 |
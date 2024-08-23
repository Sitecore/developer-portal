---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/21/Sitecore_Publishing_Service_21_Initial_Release/Release_Notes
---

**October 2017 – released Sitecore Publishing Service 2.1 (rev. 171009)**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Support for 3rd party DLLs has been added at runtime​. |  | 28931 |
 | Publishing Service is compatible with 8.2 update-5. |  |  |
 | ​​A new diagnostics command has been issued to fix revision ID GUID case senstivity problems in Sitecore databases.​​ |  | 30847 |
 | `​PublishBatchResultProcessor` cannot get information about custom fields.​ |  | 26934 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The Publishing Service does not remove orphaned items as expected. | 492759, 492966, 493133, 490914, 490854 | 30344, 30681, 29771, 28932 |
 | An inconsistent value in the `_Source` field prevents publishing​​. | 489050, 486188, 489269 | 29619 |
 | Publish fails when the Index is outside the bounds of the array error. | 488223 | 29482 |
 | The Publish Item command does not handle the `PublisherOperation` table events properly​​. | 486845 | 29058 |
 | When publishing clones, an exception is thrown if an original item doesn't have a publishable language.​​ | 483965 | 27684 |
 | Remote events may not be added to a target EventQueue due to the concurrency issue. ​ | 489712 | 30833 |
 | The `Globalization.Translate` dictionary cache is not cleared or reset on the `publishingservice:cache:clear` event​. | 487454 | 29150 |
 | There is no information about item publishing in the dialog on Azure. |  | 28809 |
 | The target indexes algorithm has been improved to support faster single item publishing in large databases. | 491424 | 30916 |
 | ​Content availability - A version of the item is considered unpublishable if the next version has a "Publishable From" restriction. | 491606 | 31027 |
 | ​​The Publishing Service unexpectedly deletes items during single item publish. | 491265 | 31865, 31185 |
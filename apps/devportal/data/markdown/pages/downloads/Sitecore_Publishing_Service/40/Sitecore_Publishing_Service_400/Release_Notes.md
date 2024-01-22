---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/40/Sitecore_Publishing_Service_400/Release_Notes
---

**November 2018, released Sitecore Publishing Service 4.0.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | New logic has been implemented for Incremental Publishing. |  | 41401 |
 | ​Sitecore Publishing Service now supports SQL Server transient error handling.​ |  | 39833 |
 | ​Data is missing from a clone of a cloned item. ​​​ |  | 271169 |
 | ​​​If the original item is changed, the clone item is not indexed properly in web index​​​​​. |  | 277253 |
 | ​​​Related items are not re-published when the source item is published​. |  | 269281 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Sitecore Publishing Service returns HTTP 503 when the `_status` of the `PublisherOperationService` is set to `error`​. | 510825, 514848 | 39855 |
 | ​Data is missing from a clone of a cloned item. ​​​ |  | 271169 |
 | ​​​If the original item is changed, the clone item is not indexed properly in web index​​​​​. |  | 277253 |
 | ​​​Related items are not re-published when the source item is published​. |  | 269281 |
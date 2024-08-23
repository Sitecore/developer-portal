---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service_Module/10x/Sitecore_Publishing_Service_Module_1000/Release_Notes
---

**August 2020 – released Sitecore Publishing Module 10.0.0**

## Highlights

Beginning with Sitecore XP 9.2.0, the Sitecore Publishing Module is released independently of the Sitecore Publishing Service. Future versions of the Sitecore Publishing Service will be compatible with any version of the Sitecore Publishing Module unless otherwise specified.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The default value of the `remoteEventCacheClearingThreshold` setting has been increased.​​​​​​​ |  | 269136 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​​​​The HTML cache is not cleared when a new version of an item becomes available​. |  | 271744 |
 | ​​The `OperationCompleteTimestamp` is set to null during a publishing job and this causes a nullable exception on the Sitecore side and empty data in the dashboard​. |  | 381220 |
 | ​Languages are not listed in alphabetical order in the publishing dialogs.​​​​​​​ |  | 407677 |
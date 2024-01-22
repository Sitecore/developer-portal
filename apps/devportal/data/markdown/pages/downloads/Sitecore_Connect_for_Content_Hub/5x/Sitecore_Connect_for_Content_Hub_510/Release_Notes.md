---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Connect_for_Content_Hub/5x/Sitecore_Connect_for_Content_Hub_510/Release_Notes
---

**January 2023, released Sitecore Connect for Content Hub 5.1.0**

## Highlights

-   With Sitecore Connect for Content Hub 5.1.0, users are able to enable and disable DAM/CMP individually by using the `cmpEnabled:define` or `damEnabled:define` keys in `web.config`.

## New features/improvements

 | Description | Customer ticket ID (or other) | ADO no. |
 | --- | --- | --- |
 | ​​Support for Sitecore XP 10.3, 10.2, 10.1 and 10.0. |   
 |   
 |
 | Support for Content Hub 4.2.x, 4.1.x, 4.0.x and 3.4.x. |   
 |   
 |
 | The Enable and Disable DAM/CMP feature is migrated to XP. |   
 | 552867 |
 | You can now insert a DAM link to the [general link field](https://doc.sitecore.com/xp/en/developers/connect-for-ch/51/connect-for-content-hub/manage-public-links-to-a-dam-asset.html). |   
 | 466000 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | ADO no. |
 | --- | --- | --- |
 | An `Empty Sitecore Attribute Mapping Field on Item ...` error occurs when retrieving an image from Content Hub while the context language is Japanese. | CS0290011 | 526057 |
 | The Master database is hard coded in the `GetLabels` method. | CS0292470,CS0294593,CS0320887 | 527248 |
 | If a specified property is not a string, the `Item Name Property` field throws an `InvalidCastException` error. | CS0326734 | 553963 |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/101/Sitecore_Experience_Platform_101_Update2/Release_Notes
---

**October 2021 – released Sitecore Experience Platform 10.1.2**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## Highlights

Sitecore Experience Platform 10.1.2 includes:

-   ​​​​Sitecore Identity Server 6.0.0 is based on .NET Core 3.1 and the updated base libraries. This ensures that our customers receive security updates promptly.

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Platform | ​​Sitecore Identity Server 6.0.0 is based on .NET Core 3.1 and the updated base libraries. This ensures that our customers receive security updates promptly. | 442201 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Experience Editor | ​​​​If you select an item in the content tree in Experience Editor in a multi-site setup, `​Context.Site` is not resolved correctly. | 465667 |
 | Experience Editor | In the Experience Editor, ​Context.Site is not resolved correctly.​ | 458586 |
 | Experience Editor | The `CheckRevision` processor does not comapre versions correctly.​ | 76398 |
 | IP Geolocation | ​​The GeoIP personalization rules do not working correctly with a load balancer/proxy. | 479352 |
 | Platform | If you try to view a media item that is locked by another user, ​​an exception occurs. | 476178 |
 | Platform | ​In a `Rich Text` field, if you enter a text fragment that contains a link with single left parentheses,a regex exception is thrown. | 489112 |
 | Platform | ​In the Content Editor, you can insert JavaScript into a `Rich Text` field when the `HtmlEditor.RemoveScripts` setting is set to `true`. | 492315 |
 | Platform | ​​Telemetry tracking can affect application performance because of compatibility issues related to the `System.Security.Cryptography.Algorithms` library. | 485287 |
 | Sitecore Forms | ​​​​​The `Session is expired` message is shown when you submit a form. | 479471 |
 | Sitecore Forms | ​​​​If you use the `FormItemTreeView Parameters` template, a selected​ checkbox is incorrectly cleared when you design a form. | 476128 |
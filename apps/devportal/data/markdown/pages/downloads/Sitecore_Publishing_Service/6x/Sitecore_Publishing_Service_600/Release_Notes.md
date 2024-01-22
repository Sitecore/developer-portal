---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/6x/Sitecore_Publishing_Service_600/Release_Notes
---

**October 2021 – released Sitecore Publishing Service 6.0.0**

-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## New features/improvements

 | Description | ADO no. |
 | --- | --- |
 | ​​Sitecore Publishing Service now support different resource files per target database. | 487939 |
 | Diverse performance improvements. | 459529 |
 | ​We have implemented an API to synchronize item resources files​. | 454740 |
 | We have added a cleanup agent that removes data from the `PublisherOperation` table according to the age of the entries​. | ​316517 |
 | Sitecore Publishng Service has been upgraded to .NET Core 3.1​. | 456251 |

## Resolved issues

The following issues have been fixed:

 | Description | ADO no. |
 | --- | --- |
 | `Sitecore.Framework.Publishing.Host.exe` ignores the connection name ​if the node's name starts with certain letters. | 493865 |
 | If English is not selected in the `Publish Item` dialog​, ​bucket folders are not published. | 491520 |
 | If a media item is updated during the manifest calculation​, ​a `blob` is not published to the `web` database​. | 482250 |
 | ​A bug in `System.Text.Encodings.Web.dll` ​has been fixed. | 480614 |
 | If SPS opens shared connections in parallel​, ​a race condition occurs and publishing fails. | 480605 |
 | If you try to publish a `/sitecore` item in non-existing language version, ​SPS deletes all the items in the `web` database. | 479723 |
 | If you use `AllItems` publishing mode and do not select a language, SPS deletes all the items from the `web` database. | 460104 |
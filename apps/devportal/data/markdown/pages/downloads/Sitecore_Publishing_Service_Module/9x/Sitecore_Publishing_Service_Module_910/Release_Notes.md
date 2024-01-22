---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service_Module/9x/Sitecore_Publishing_Service_Module_910/Release_Notes
---

**Sept 2019 – released Sitecore Publishing Service Module 9.1.0**

## Highlights

Beginning with Sitecore XP 9.2.0, the Sitecore Publishing Service Module is released independently of the Sitecore Publishing Service. Future versions of the Sitecore Publishing Service will be compatible with any version of the Sitecore Publishing Service Module unless otherwise specified.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​​​​The `Publishing Dashboard` now displays ​more information about the publishing job that is currently running. |  | 329235, 340981 |
 | ​The Sitecore Publishing Service Module is now released independently of the Sitecore Publishing Service. Future versions of the Sitecore Publishing Service will be compatible with any version of the Sitecore Publishing Service Module unless otherwise specified. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​The `Publishing Service Module` can block `Event Queue` processing​.​​​​​​​ | 516319, 524299 | 327097, 276743, 41639, 340941 |
 | ​An empty value of the `lang` and `targets` list fields can be stored in the `publishingpreferences` cookie​.​​​​​​​ | 521657 | 311209, 340957 |
 | ​​If you click `Publish` multiple times, it adds multiple versions of the same job to the publishing queue.​​​​​​​​​ |  | 327105, 324690, 340969 |
 | ​​​​​​​In the `Publishing Dashboard`, the list of `Queued jobs` does not display more than 10 queued jobs. | 513598 | 320235, 282148, 40613, 340963 |
 | ​​​​​​​In the `Publishing Dashboard`, if you start a publishing operation without selecting any languages or publishing targets, the operation is added to the publishing queue. |  | 326681, 340977 |
 | ​​​​​​​​The `TargetDataCacheClearHandler` logs the same message twice​.​ |  | 327101, 324142, 340967 |
 | ​​​​​​​​An unauthorized user can use a web request​ to publish an item. |  | 280331, 340945 |
 | ​​​​​​​​Serialization is incorrect in `Japanese` and `Chinese`. |  | 300010, 340951 |
 | In the `Active jobs` section, ​languages are scattered around.​​​​​​​ |  | 260101, 19915, 340937 |
 | ​​​​​​​Any changes made to a `Versioned` field are only reported in one language when the field is registered with the `ReportPublishFieldsResolver`. |  | 327117, 318767, 340959 |
 | ​​​​​​​In the in the `Sitecore.Publishing.Service.config` file, the `PublishingServicePublishManagerJobStatusRequestDelay` setting does not work. |  | 320201, 340961 |
 | ​​If you schedule publishing jobs through the `PublishManager` can be delayed in the publishing queue.​​​​​​​ | 508534, 524409, 527850 | 277670, 38792, 340943 |
 | When the publishing service is not running, ​the `Publish` button is enabled.​​​​​​​ |  | 326613, 340973 |
 | ​​​​​​​​An `Item:save` event error occurs when you try to create profile cards, profile patterns, or deploy campaigns and goals. |  | 288976, 340949 |
 | ​​​​​​​If the latest version of an item has a restriction set in the `ValidTo` (Publishable to) field, ​the index contains an incorrect `versionsunsetdate` value. | 525151, 526654 | 310787, 340955 |
 | If an item contains shared fields, they are not updated if you publish the item in a language that is not the context language. |  | 331671, 340988 |
 | The `Publish Dashboard` job details dialog does not contain any information about repair mode and the clear cache options. |  |  | 351027 |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Data_Exchange_Framework/2x/Data_Exchange_Framework_210/Release_Notes
---

**November 2018 – released xDB Data Exchange framework 2.1.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​Support for Sitecore XP 9.1. |  |  |
 | External systems can now send push notifications to the Data Exchange Framework to trigger a pipeline batch​. |  |  |
 | ​​​​You can now segment users in list manager based on membership of a marketing list in Microsoft Dynamics. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​The ID table is used inefficiently in the XConnect data provider​. | 512727 | 234453 |
 | The `ResolveMultilanguageSitecoreItemDictionaryPipelineStep` processor ignores the value in the `Parent For Item Location` field​.​​​ | 510391, 510813 | 227828 |
 | ​The Web Forms For Marketers `Submit Success Event` event isn't migrated correctly by thhe xDB Data Migration Tool.​​​ | 499352 | 201454 |
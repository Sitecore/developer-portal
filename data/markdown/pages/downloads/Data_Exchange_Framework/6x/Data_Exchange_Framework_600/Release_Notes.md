---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Data_Exchange_Framework/6x/Data_Exchange_Framework_600/Release_Notes
---

**April 2021, released Data Exchange Framework 6.0.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | AD no. |
 | --- | --- | --- |
 | ​​Support for Sitecore XP 10.1.0. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | AD no. |
 | --- | --- | --- |
 | If a multilanguage item does not contain any data about any of its languages, DEF cannot return the item. | CS0192360 | 433688 |
 | The DEF messages use UTC time instead of server time. | CS0149765, CS0153043 | 296410 |
 | The `ShowPipelineStatus` message is unable to show times that are greater than 24 hours. | CS0148490 | 293147 |
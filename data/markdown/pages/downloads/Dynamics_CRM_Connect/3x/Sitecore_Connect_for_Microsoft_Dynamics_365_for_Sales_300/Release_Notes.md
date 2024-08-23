---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Dynamics_CRM_Connect/3x/Sitecore_Connect_for_Microsoft_Dynamics_365_for_Sales_300/Release_Notes
---

**September 2019, released Sitecore Connect for Microsoft Dynamics 365 for Sales 3.0.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Support for Sitecore XP 9.2.0. |  |  |
 | The installation and upgrade process has been simplified by combining 2 packages into 1. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | A contact synchronization batch job between xConnect and DynamicsCRM stops immediately if a contact is deleted while the job is running. |  | 289982 |
 | The staging database is never cleared and this causes performance problems and timeouts during large synchronization jobs. | 526782 | 317364 |
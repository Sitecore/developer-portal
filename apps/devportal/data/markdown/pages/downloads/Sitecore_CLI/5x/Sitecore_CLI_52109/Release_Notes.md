---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_CLI/5x/Sitecore_CLI_52109/Release_Notes
---

**May 2023 – released Sitecore CLI 5.2.109**

## Highlights

Sitecore CLI 5.2.109 includes:

-   Sitecore CLI now supports user serialization.
-   Context switching command.
-   Functional parity for database cleanup plugin.
-   Items as Resources plugin improvements.
-   Sitecore environment information command.

## New features/improvements

 | Description |  |
 | --- | --- |
 | Serialization plugin allows to serialize users. |  |
 | Improved plugin installation experience. |  |
 | Improved CLI compatibility. |  |

## Resolved issues

The following issues have been fixed:

 | Description | ADO no. |
 | --- | --- |
 | Diff command fails with "You are not authorized to perform the task you are attempting" error. | 556905 |
 | GraphQL.ExecutionError appears on push operation if there are more versions with no fields (due to exclusion configuration) in YML files than in the DB. | 521783 |
 | The version of controller rendering item is not created when the item is retrieved from .dat file. | 523249 |
 | Diff command fails with "You are not authorized to perform the task you are attempting" error. | 556905 |
 | CLI package sitecore.json does not include excludedFields properly. | 566614 |
 | The fields of items created by JSS deploy item process cannot be modified after syncing them with different Sitecore instance using CLI and changing template and they are cleared after reverting changes. | 583113,583253 |
 | Sitecore roles that are not included in Sitecore Content Serialization package are removed from Sitecore after installing the package even if the removeOrphansForRoles setting is disabled in CLI project. | 583505,583506 |
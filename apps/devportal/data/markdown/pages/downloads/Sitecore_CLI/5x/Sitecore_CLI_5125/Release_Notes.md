---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_CLI/5x/Sitecore_CLI_5125/Release_Notes
---

**October 2022 – released Sitecore CLI 5.1.25**

## Highlights

Sitecore CLI 5.1.25 includes:

-   Sitecore CLI now supports Linux based environments.
-   Integrated telemetry will help us improve Cli user experience.
-   Integrated version compatibility check will help to prevent issues with unsupported versions of Sitecore Management Services.
-   Sitecore Cli is ready for the Sitecore XMCloud.

## New features/improvements

 | Description |  |
 | --- | --- |
 | ​Added audience suport to OAuth authorization flow.​ |  |
 | Default publishing target resolving. |  |
 | Added support for references environments. |  |
 | Sitecore ExperienceEdge publishing support. |  |

## Resolved issues

The following issues have been fixed:

 | Description | ADO no. |
 | --- | --- |
 | The push command of the CLI serialization is not case-sensitive. | 549948 |
 | ​Could not locate plugin [[email protected]](/cdn-cgi/l/email-protection). | 540750 |
 | The "dotnet sitecore ser validate --fix" fails to rename a *.yml file.​ | 528918 |
 | Serialization push does not work if there is no 'en' version.​ | 526511 |
 | GraphQL.ExecutionError while executing push command after deleting the modified default item.​ | 522845 |
 | Serialized YML files are not removed from the file system after deleting them from database if they fall under the "DescendantsOnly" scope.​ | 522659 |
 | NonUniquePathException in CLI when multiple items with the same name are present under different folders.​ | 522517 |
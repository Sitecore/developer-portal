---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/20/Sitecore_Publishing_Service_20_Initial_Release/Release_Notes
---

**January 2017 - released Sitecore Publishing Service 2.0 (rev. 170130)**

Publishing Service 2.0 provides high availability (HA), custom datasources, and improved support for deployment on Microsoft Azure. This version is compatible with Sitecore 8.2 Update-2.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Support for Azure WebApps deployment. |  | 20941 |
 | The Publishing Service now handles transient faults on the Azure SQL Database.​ |  | 20768 |
 | Support for custom data sources, for example data from an external database or web API. |  | 19470 |
 | You can configure high-availability for the Publishing Service. |  | 22073 |
 | There is experimental support for content availability - publishing future versions of content. |  | 21595 |
 | The logging configuration​ options have been improved. |  | 22118 |
 | ​​​The schema tools are now part of the Publishing Service. |  | 21240 |
 | Installation of IIS instances is now managed by the Publishing Service and no longer requires a separate powershell.​ |  | 21241 |
 | The functionality for modifying the configuration, for example the connection strings, has been moved to the Publishing Service program. |  | 21241 |
 | You can run the Publishing Service as an Azure WebApp. |  | 20941 |

## Resolved issues

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | If there are multiple DBs with the same name​, the schema tool only shows one. |  | 21689 |
 | Package installation fails when a user installs the same package more than once. |  | 21959 |
 | An item version that was removed cannot be unpublished​. |  | 21981 |
 | ​​​During publishing the service adds brackets to the value in the Revision field​. |  | 22053 |
 | Only the English language version is published when a user publishes an item for the first time​. |  | 22058 |
 | The schema command throws the 'System.ArgumentNullException' exception when the 'sc.publishing.services.xml' file is missing​. |  | 22110 |
 | The values in the Queued jobs dialog box are misaligned. |  | 22180 |
 | The Job status is incorrect when publishing fails for one of the targets​. |  | 23087 |
 | Some fields in the Publishing dialog are not translated​. |  | 23316 |
 | The job status in the Active Jobs panel is incorrect. |  | 23388 |
 | Publishing related items does not work in some setups. |  | 23781 |
 | In the Launchpad, the DA and DE translation of the Publishing button is missing. |  | 23791 |
 | "The publishing service is not running....." message is only displayed in English.​ |  | 23792 |
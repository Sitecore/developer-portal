---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Azure/Sitecore_Azure_81/Sitecore_Azure_81/Release_Notes
---

**December 4, 2015 - released Sitecore Azure 8.1 (rev.151119)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Documentation

For all Sitecore Azure 8.1 documentation, please visit the new [Sitecore Documentation Site](https://doc.sitecore.net/cloud/azure).

## System requirements

-   Sitecore Azure 8.1 requires Azure SDK 2.7.1 and Sitecore® Experience Platform™ 8.1.
    -   Sitecore Azure 8.1 was tested with Sitecore 8.1 Initial Release and Sitecore 8.1 Update-1.

## New features & improvements

-   Supports deployment for Sitecore 8.1.
-   Support for Azure 2.7.1 SDK.
-   Support for Windows Azure Storage 5.0.2.
-   Support for the Windows Azure Cache 2.7.0.
-   With Sitecore Azure 8.1, Sitecore SQL databases are now deployed to Azure SQL Database V12.

## Resolved Issues

-   The Heartbeat page failed when using a legacy version of the page. This has been fixed to use the standard Sitecore Heartbeat page. (58867)
-   An XML deserialization error occurred when uploading an environment file for the second time. This has been fixed. (58884)
-   The custom errors setting was turned off due to deployment preparations. This caused the setting it to be purged in the resulting web.config file. This has been fixed. (58889)
-   The Web.config file size may become larger than allowed limit (250KB) during deployment preparations. This has been fixed. (66435)
-   When deploying both an editing farm and a delivery farm to the same slot, the editing farm did not find the necessary connection string, database definition and publish target. This has been fixed. (68283)
-   When deploying a delivery farm, Sitecore client-related files were unnecessarily included. This has been fixed. (70106)
-   Logging in a multithread environment might cause a deadlock on a Sitecore farm. This has been fixed. (70502)
-   The Azure in-role cache removed all session data before Sitecore tried to fire the Session_End event. This has been fixed. (72123)
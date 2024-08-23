---
title: "Release notes - Sitecore Azure 8.0"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Azure/80/Sitecore_Azure_80_Update2/Release_notes_test
---

**November 2016 – released Sitecore Azure 8.0 (rev. 161110)**

This product update includes a Redis Session State Provider, and is required for any future Sitecore Azure deployments on Sitecore Experience Platform 8.0.​

Previous versions of Sitecore Azure 8.0 configure Sitecore to use a custom Session State Provider based on the Azure In-Role Cache. Microsoft will retire its Azure In-Role Cache Service on Nov 30, 2016.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Sitecore Azure now supports the Sitecore ASP.NET session state provider for Redis, which enables you to use Azure Redis Cache as your session state store.​​ |   
 |   
 |
 | ​​Sitecore Azure now supports using the Azure 2.9.1 SDK.​ ​ |   
 |   
 |
 | ​Support has been added for Azure SQL Database V12 and support for SQL Database V2.0 has been removed - existing deployments will continue to work correctly with Azure SQL V2.0, whereas new deployments will use Azure SQL V12.​ |   
 |   
 |
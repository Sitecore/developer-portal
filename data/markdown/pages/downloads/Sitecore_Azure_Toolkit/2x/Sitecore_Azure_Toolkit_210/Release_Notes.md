---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Azure_Toolkit/2x/Sitecore_Azure_Toolkit_210/Release_Notes
---

**November 2018 – released Sitecore Azure Toolkit 2.1.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​When you prepare WDP packages from on-prem Sitecore instances, you can use the credentials of the current Windows account to package the Sitecore databases instead of the accounts specified in the connection strings​. |  | 224601 |
 | You can now package and deploy WDPs created on your local Sitecore solution that was installed with SIF. ​​On-prem service accounts can be overwritten with accounts defined in the ARM templates. ​​ |  | 224492 |
 | You can use the `ConvertTo-SCModuleWebDeployPackage` and `Update-SCWebDeployPackage` PowerShell commands to disable the `SqlDatabaseOptions` setting and deploy the same module WDP package to an on-prem and to a cloud instance of Sitecore. |  | 255994 |
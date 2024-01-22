---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Installation_Framework/2x/Sitecore_Installation_Framework_210/Release_Notes
---

**April 2019 - released Sitecore Install Framework 2.1.0**

# New Features/improvements

## New Tasks

-   `Invoke-ManageKeyStorageTask` - This new task manages user key storage in the HKLM registry.​ Supports [​​Microsoft Data Protection key management](https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/configuration/default-settings?view=aspnetcore-2.1) in the registry. (293841)

## Resolved Issues

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​The `Install-SitecoreConfiguration` cmdlet reports an incorrect progress percentage ​​for the root and child progress bars.​​ |  | 302858 |
 | The `Install-SitecoreConfiguration` cmdlet ​​parameter fails to merge multiple nested object types​​. |  | 288839 |
 | The `Invoke-RemoveSqlDatabaseTask` task reloads the SQL Server module and causes conflicts.​​​​ ​​ |  | 294281 |
 | The `Invoke-HostHeaderTask` task can fail to gain access to the hosts file during the uninstallation process.​ |  | 257822 |
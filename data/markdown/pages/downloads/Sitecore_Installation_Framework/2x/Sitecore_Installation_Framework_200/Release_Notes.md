---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Installation_Framework/2x/Sitecore_Installation_Framework_200/Release_Notes
---

**November 2018 - released Sitecore Install Framework 2.0.0**

## New Task

`Invoke-RemoveXmlTask​` - deletes XML elements in XML files.

## New Features/improvements

| Description | ADO no. |
 | --- | --- |
 | ​​​​​You can now insert XML elements into XML files​. ​​​​​| 222099 |
 | ​​​​​We have removed the dependency on the Sitecore Fundamentals PowerShell module. This required migrating the following functions to the main SIF module: `Invoke-NewRootCertificateTask`, `Invoke-NewSignedCertificateTask`, `Invoke-AddWebFeatureSSLTask​` ​​​​​| 215452 |
 | SIF now supports Include/Partial of SIF templates in any other template​. | 168494 |
 | SIF now supports parameter validation. | 159042 |
 | Uninstallation support has been added for each topology. Uninstallation removes all the assets that are created during a standard installation including IIS sites, app pools, Windows Services, files, and databases. Uninstallation does ​​not remove client authentication certificates and SSL certificates. New PowerShell Cmdlet: `Uninstall-SitecoreConfiguration`. New Tasks: `Invoke-RemoveAppPoolTask`, `Invoke-RemoveSqlDatabaseTask`, `​Invoke-RemoveWebsiteTask` | 230626 |
 | New Sitecore Install Framework templates and PowerShell tasks support the remote installation of Sitecore in a distributed environment. Remote deployment installs SIF remotely, copies the required assets; including the packages and license files to the target server, and installs Sitecore.​​​​ New Tasks: `Invoke-InstallPSModuleTask`, `Invoke-InstallSitecoreConfigurationTask​` | 230625 |
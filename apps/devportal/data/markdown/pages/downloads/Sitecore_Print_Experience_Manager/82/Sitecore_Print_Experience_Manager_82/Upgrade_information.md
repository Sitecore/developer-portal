---
title: "Upgrade Information"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Print_Experience_Manager/82/Sitecore_Print_Experience_Manager_82/Upgrade_information
---

Upgrade information PXM 8.0 to PXM 8.2

All items in core database and the templates in the master database will be merged (installation options merge/merge). This means that the versions of existing PXM items will be overwritten. (If custom access rights/ template field values have been changed, they will be overwritten).

When you upgrade the services, the configuration files are overwritten. Therefore it is recommended to backup or rename the InDesignProcessingService.exe.config and DashBoardServer.exe.config file from the previous version in order to keep your settings values and paths.

**Note**  
If you are upgrading from an APS 1.4 version, follow the instructions described on [dev.sitecore.net](/downloads/Sitecore_Print_Experience_Manager/8_0/Sitecore_Print_Experience_Manager_for_8_0/Upgrade_Information_IW).
---
title: "Upgrade Information"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Print_Experience_Manager/8_0/Sitecore_Print_Experience_Manager_for_8_0/Upgrade_Information_IW.aspx
---

# Upgrade information APS 1.4 to PXM 8.0 for Sitecore XP 8.0

 | **Note:**<br /><br />All items in core database and the templates in the master database will be merged (installation options merge/merge). This means that the versions of existing APS items will be overwritten. (If custom access rights/ template field values have been changed, they will be overwritten).<br /><br /> |

**PXM package**

In PXM 8.0 the name of the PrintStudio.config is changed to Sitecore.PrintStudio.config. The path of the file is changed to ..\Website\App_Config\Include\PXM\Sitecore.PrintStudio.config. It is recommended to use the new Sitecore.PrintStudio.config file updated with your settings values.

Installation of the new PXM version will rename the PrintStudio.config to PrintStudio.config.old.

**PXM configuration in XP 8.0 Web.config**

You need to change the logger name to Sitecore.PXM.Diagnostics:

[![PXM logger](/~/media/4E0FDC4323C74966AEDD009F1A020B2D.ashx?la=en)](/~/media/4E0FDC4323C74966AEDD009F1A020B2D.ashx?la=en)

**PXM Windows Services configurations**

 | **Note:**<br /><br />When you upgrade the services, the configuration files are overwritten. Therefore it is recommended to backup or rename the InDesignProcessingService.exe.config and DashBoardServer.exe.config file from the previous version in order to keep your settings values and paths.<br /><br /> |
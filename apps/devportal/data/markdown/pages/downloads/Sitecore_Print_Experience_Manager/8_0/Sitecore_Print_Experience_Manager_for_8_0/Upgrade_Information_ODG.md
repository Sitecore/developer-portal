---
title: "Upgrade Information"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Print_Experience_Manager/8_0/Sitecore_Print_Experience_Manager_for_8_0/Upgrade_Information_ODG
---

# Upgrade information ODG 1.0 to ODG 8.0 for Sitecore XP

 | **Note:**<br /><br />All items in core database and the templates in the master database will be merged (installation options merge/merge). This means that the versions of existing ODG items will be overwritten. (If custom access rights/ template field values have been changed, they will be overwritten).<br /><br /> |

The following assemblies have been changed:

-   Sitecore.Odg.Application.dll is replaced with Sitecore.Odg.dll.
-   Sitecore.Odg.Presentation.dll is replaced with Sitecore.Odg.Client.dll.

Configuration changes:

-   All configuration files have been moved to …\Website\App_Config\Include\PXM.
-   The old configuration files have been merged to a single Sitecore.Odg.config file.
-   In order not to lose the configuration changes of old configuration files, they are kept in PXM folder with extension .old.
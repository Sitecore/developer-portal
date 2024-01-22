---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/7x/Sitecore_Publishing_Service_7020/Release_Notes
---

**December 2022 – released Sitecore Publishing Service 7.0**

-   [New features/improvements](#New)
-   [Breaking changes](#Breaking)
-   [Resolved issues](#Resolved)

## New features/improvements

 | Description | ADO no. |
 | --- | --- |
 | ​​We have added a task scheduling example file for configuring tasks. | 526409 |
 | ​​You can now use Sitecore.Nexus.Consumption 1.5.0. | 554809 |

## Breaking changes

 | Description | ADO no. |
 | --- | --- |
 | Support for multiple link databases has been implemented.​​ | 475693 |
 | Sitecore Publishing Service has been upgraded to .NET 6.​​ | 525886 |

## Resolved issues

The following issues have been fixed:

 | Description | ADO no. |
 | --- | --- |
 | ​​`PublishManager.PublishIncremental()` does not publish an item whose workflow has changed while the site is getting published. | 405398 |
 | ​​`RulesCache` is not cleared when using Publishing Service. | 431260 |
 | If the SQL connection becomes unavailable during publish, all publish jobs are not processed.​​ | 502763 |
 | The Serilog `ApplicationInsights` assemblies have not been included in the OOB installation package of SPS 6.0.0.​​ | 517546 |
 | ​Publishing Service does not publish an empty text field that contains a space.​​ | 545168 |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103_Update1/Release_Notes
---

**August 2023 – released Sitecore Experience Platform 10.3.1**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Containers | The Traefik container image has been updated from version 2.5.3 to 2.9.8. | 575660 |
 | Installation | Sitecore Installation Assistant 1.5.1 supports Sitecore XP 10.3.1. | 583106 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Content Editor | An intermittent error causes the ribbon in the Content Editor to collapse for a virtual user, for example, after several publishing operations. | 554564 |
 | Content Testing | In Mozilla Firefox, the test item does not move to the next workflow state when using the `Approve with test` option. | 575842 |
 | Email Experience Manager | The status of an email campaign job from a first CM instance is not correctly synchronized with EXM in a second CM instance. | 575839 |
 | Email Experience Manager | When selecting the `Edit the related item` context menu button, the embedded Content Editor does not appear as expected. | 587814 |
 | Forms | Unexpected behavior with multi-page forms on submit when the session is expired. | 513277 |
 | Installation | The installation of Sitecore XP using SIF fails due to the retired WebPI 5.1 installer. See [KB1003017](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003017). | 575565 |
 | Installation | The installation of Sitecore XP fails on a machine with SQL Server PowerShell Module version 22.0.xx or later. See [KB1003015](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003015). | 580538 |
 | Platform | Cross-site links are incorrect when sites have the same `rootPath`. | 565698 |
 | Platform | When publishing site definitions for multiple managed websites, the `StartItem` setting is ignored when resolving the sites, causing a site to have an incorrect URL. | 569444 |
 | Platform | A `TreeList` field unexpectedly translates the selected item name when the item's `DisplayName` exists in the Core DB dictionary. | 579558 |
 | Publishing | Inefficient ID parsing can cause slow publising performance. | 585529 |
 | Security | Potential security vulnerabilities have been resolved. See [KB1002925](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002925), [KB1003018](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003018). | 563856, 568150, 576660, 582720, 584731, 586117 |
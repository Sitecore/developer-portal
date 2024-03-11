---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Express_Migration_Tool/20/Express_Migration_Tool_20_Initial_Release/Release_Notes
---

**December 2016 – released Express Migration Tool 2.0 (rev. 161208)**

​The Sitecore Express Migration Tool enables you to migrate content from one version of Sitecore to another. It is designed to help customers move to the latest version of Sitecore, without having to upgrade versions individually. The tool is a separate application for the Windows operating system that is not bundled in the Platform, but supported and updated separately.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​The express migration tool now supports migration from Sitecore CMS 6.6. The following revisions are supported:<br /><br />-   Sitecore 6.6.0 rev.140410 (Service Pack-2)<br />-   Sitecore 6.6.0 rev.131211 (Update-7)<br />-   Sitecore 6.6.0 rev.130529 (Service Pack-1)<br />-   Sitecore 6.6.0 rev.130404 (Update-5)<br />-   Sitecore 6.6.0 rev.130214 (Update-4)<br />-   Sitecore 6.6.0 rev.130111 (Update-3)<br />-   Sitecore 6.6.0 rev.121203 (Update-2)<br />-   Sitecore 6.6.0 rev.121015 (Update-1)<br />-   Sitecore 6.6.0 rev.120918 (Initial Release)<br /><br /> |  |  |
 | The Express Migration Tool can now migrate Web Forms For Marketers 2.4 to Web Forms For Marketers 8.2 Update-1. The following revisions are supported:<br /><br />-   Web Forms for Marketers 2.4 rev. 140117 on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 140923 on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 141008 on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 150619 on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 151103 on Sitecore 7.2<br /><br />This version only supports migration of web forms data to SQL-server based WFFM setups. |  |  |
 | The Comparison Instance can now be enabled directly from the user interface. |  | 121907 |
 | The logic, which handles migration of items with different IDs on the comparison, source, and target instances has been improved. |  | 124729 |
 | The Express Migration Tool provides an API for third-party developers to extend the tool with custom plugins. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Configuration with broken xml results in a failed migration of all configuration files - not just the broken files. |  | 123090 |
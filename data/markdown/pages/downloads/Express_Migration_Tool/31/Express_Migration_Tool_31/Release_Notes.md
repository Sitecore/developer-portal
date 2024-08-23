---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Express_Migration_Tool/31/Express_Migration_Tool_31/Release_Notes
---

**December 2017 – released Express Migration Tool 3.1 (rev. 171208)**

​The Sitecore Express Migration Tool enables you to migrate content from one version of Sitecore to another. It is designed to help customers move to the latest version of Sitecore, without having to upgrade versions individually. The tool is a separate application for the Windows operating system that is not bundled in the Platform, but supported and updated separately.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The Express Migration Tool now supports migrating the Web Forms For Marketers revisions 2.3, 2.4, 2.5, and 8.0 to the Web Forms For Marketers 9.0​ Initial release.  <br />The supported versions are:<br /><br />-   Web Forms for Marketers 2.3.0 rev. 110530 running on Sitecore 6.6.0<br />-   Web Forms for Marketers 2.3.0 rev. 111209 running on Sitecore 6.6.0<br />-   Web Forms for Marketers 2.3.0 rev. 120216 running on Sitecore 6.6.0<br />-   Web Forms for Marketers 2.3.0 rev. 130118 running on Sitecore 6.6.0<br />-   Web Forms for Marketers 2.3.0 rev. 131126 running on Sitecore 6.6.0<br />-   Web Forms for Marketers 2.3 rev. 140617 running on Sitecore 6.6.0<br />-   Web Forms for Marketers 2.4 rev. 140117 running on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 140813 running on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 140923 running on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 141008 running on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 150619 running on Sitecore 7.2<br />-   Web Forms for Marketers 2.4 rev. 151103 running on Sitecore 7.2<br />-   Web Forms for Marketers 2.5 rev. 141014 running on Sitecore 7.5 Initial Release<br />-   Web Forms for Marketers 2.5 rev. 150209 running on Sitecore 7.5 Update 1 or Sitecore 7.5 Update 2<br />-   Web Forms for Marketers 8.0 rev. 141217 running on Sitecore 8.0 Initial Release or Sitecore 8.0 Update 1<br />-   Web Forms for Marketers 8.0 rev. 150224 running on Sitecore 8.0 Update 2<br />-   Web Forms for Marketers 8.0 rev. 150429 running on Sitecore 8.0 Update 3<br />-   Web Forms for Marketers 8.0 rev. 150625 running on Sitecore 8.0 Update 4 or Sitecore 8.0 Update 5<br />-   Web Forms for Marketers 8.0 rev. 151127 running on Sitecore 8.0 Update 6 or Sitecore 8.0 Update 7<br /><br /> |   
 | 186911, 163652 |
 | ​The Express Migration tool now re​​-​​attempts to migrate files that failed to migrate.​ |   
 | 116374 |
 | The Express Migration Tool now detects configuration nodes that have had server-role configuration rules applied to them in SXP 9.0 and marks them with comments. |   
 | 178988 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The Express Migration tool does not migrate workflow comments and history from the WorkflowHistory table. | 481856  
 | 156875 |
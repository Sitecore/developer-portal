---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Express_Migration_Tool/30/Express_Migration_Tool_30_Initial_Release/Release_Notes
---

**October 2017 – released Express Migration Tool 3.0 (rev. 171011)**

​The Sitecore Express Migration Tool enables you to migrate content from one version of Sitecore to another. It is designed to help customers move to the latest version of Sitecore, without having to upgrade versions individually. The tool is a separate application for the Windows operating system that is not bundled in the Platform, but supported and updated separately.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​The Express Migration Tool now supports migrating to Sitecore 9.0 Initial Release. |  | 156172 |
 | The Express Migration Tool now supports migrating from every version of Sitecore 6.6, 7.2, 7.5, and 8.0 to Sitecore 9.0.  <br />The supported versions are:<br /><br />-   Sitecore 8.0 rev. 160115 (8.0 Update-7)<br />-   Sitecore 8.0 rev. 151127 (8.0 Update-6)<br />-   Sitecore 8.0 rev. 150812 (8.0 Update-5)<br />-   Sitecore 8.0 rev. 150621 (8.0 Update-4)<br />-   Sitecore 8.0 rev. 150427 (8.0 Update-3)<br />-   Sitecore 8.0 rev. 150223 (8.0 Update-2)<br />-   Sitecore 8.0 rev. 150121 (8.0 Update-1)<br />-   Sitecore 8.0 rev. 141212 (8.0 Initial Release)<br />-   Sitecore 7.5 rev.150212 (Update-2)<br />-   Sitecore 7.5 rev.150130 (Update-1)<br />-   Sitecore 7.5 rev.141003 (Initial Release)<br />-   Sitecore 7.2 rev. 160123 (7.2 Update-6)<br />-   Sitecore 7.2 rev. 151021 (7.2 Service Pack-2, originally 7.2 Update-5)<br />-   Sitecore 7.2 rev. 150408 (7.2 Update-4)<br />-   Sitecore 7.2 rev. 141226 (7.2 Service Pack-1, originally 7.2 Update-3)<br />-   Sitecore 7.2 rev. 140526 (7.2 Update-2)<br />-   Sitecore 7.2 rev. 140314 (7.2 Update-1)<br />-   Sitecore 7.2 rev. 140228 (7.2 Initial Release)<br />-   Sitecore 6.6.0 rev. 140410 (6.6.0 Service Pack-2, originally released as 6.6 Update-8<br />-   Sitecore 6.6.0 rev. 131211 (6.6.0 Update-7)<br />-   Sitecore 6.6.0 rev. 130529 (6.6.0 Service Pack-1 Update-6)<br />-   Sitecore 6.6.0 rev. 130404 (6.6.0 Update-5)<br />-   Sitecore 6.6.0 rev. 130214 (6.6.0 Update-4)<br />-   Sitecore 6.6.0 rev. 130111 (6.6.0 Update-3)<br />-   Sitecore 6.6.0 rev. 121203 (6.6.0 Update-2)<br />-   Sitecore 6.6.0 rev. 121015 (6.6.0 Update-1)<br />-   Sitecore 6.6.0 rev. 120918 (6.6.0 Initial Release)<br /><br /> |  | 1561179,163673 |
 | The Express Migration Tool now supports migrating every revision of Web Forms For Marketers 2.4 that runs on Sitecore 7.1 and 7.2 to Web Forms For Marketers 9.0​. |  | 163684 |
 | The performance of the Express Migration Tool has been improved so that data blob migration takes less time. |  | 178986 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Renderings are missing additional parameters after upgrading an instance using the Express Migration Tool​. |  | 181532 |
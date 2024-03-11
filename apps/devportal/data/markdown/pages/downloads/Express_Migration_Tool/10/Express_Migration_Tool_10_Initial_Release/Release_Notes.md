---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Express_Migration_Tool/10/Express_Migration_Tool_10_Initial_Release/Release_Notes
---

**August 2016 – released Express Migration Tool 1.0 (rev. 160811)**

​The Sitecore Express Migration Tool allows a developer to migrate content from one version of Sitecore to another. It is designed to help customers move to the latest version of Sitecore, without having to upgrade versions individually. The tool is a separate application for the Windows operating system that is not bundled in the Platform, but supported and updated separately.

Wizard-style Windows application that allows you to:

-   Migrate solution specific items from core and master databases on the source deployment
-   Migrate solution specific media (database or file backed)
-   Assist with migrating configuration options:

-   Generate configuration patch file(s) that can be applied for target instance
-   Generate configuration diff files in cases when patching is not possible
-   Mark the configuration options that have been changed between versions

-   Migrate security settings, custom user roles and users
-   Support both remote and local migration

## New feature/improvements

 | Description |
 | --- |
 | ​You can migrate from the following Sitecore versions:<br /><br />-   Sitecore CMS and DMS 7.2 rev.1601231 (7.2 Update-6)<br />-   Sitecore CMS and DMS 7.2 rev.151021 (7.2 Update-5)<br />-   Sitecore CMS and DMS 7.2 rev.150408 (7.2 Update-4)<br />-   Sitecore CMS and DMS 7.2 rev.141226 (7.2 Service Pack-1)<br />-   Sitecore CMS and DMS 7.2 rev.140526 (7.2 Update-2)<br />-   Sitecore CMS and DMS 7.2 rev.140314 (7.2 Update-1)<br />-   Sitecore CMS and DMS 7.2 rev.140228 (7.2 Initial Release)​<br /><br /> |
 | ​You can migrate your Sitecore instance to<br /><br />-   Sitecore Experience Platform 8.2 Initial release<br /><br /> |
 | The Express Migration tool migrates solution-specific items from core and master databases on the source deployment. |
 | The Express Migration tool migrates solution-specific media (both database and files). |
 | The Express Migration Tool automatically generates configuration patch file(s) that can be applied on a target instance. If patching is not possible or does not make sense, the tool generates configuration difference files. |
 | The tool highlights the configuration options that have been altered or the default values that have been changed between the source and target versions. |
 | The tool copies security settings, custom user roles, and user accounts from source to target instances​. |
 | The Express Migration Tool enables you to upgrade from Sitecore 7.2 to Sitecore 8.2 without having to upgrade to all the interim versions individually.​ |
---
title: "Sitecore Email Experience Manager 3.1 rev.151213  – Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_31/Email_Experience_Manager_31_Update_2/Release_Notes
---

**December 2015 – released Sitecore Email Experience Manager 3.1 rev. 151213 (3.1 Update-2).  
**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](/downloads/Email_Experience_Manager/Email_Experience_Manager_31/Email_Experience_Manager_31_Update_2).

## Documentation

For all Sitecore Experience Platform 8.0 documentation, please visit the new [Sitecore Documentation Site](http://doc.sitecore.net).

## Compatibility

Email Experience Manager 3.1 rev. 151213 (3.1 Update-2) is compatible with Sitecore Experience Platform rev. 151127 (8.0 Update-6)

## Resolved issues

The error Data at the root level is invalid appeared in the log after installation. This has been fixed. (77097)

Unauthenticated HTTP requests were being served by Sitecore. This occurred because the application did not always check authentication data when executing requests, causing a security vulnerability. This has been fixed. (79495)

Messages triggered by engagement plans were unable to be sent and would return an error. This has been fixed. (80567)

After EXM was installed, an unhandled exception was generated when starting the application in a scaled environment. This has been fixed. (77494)
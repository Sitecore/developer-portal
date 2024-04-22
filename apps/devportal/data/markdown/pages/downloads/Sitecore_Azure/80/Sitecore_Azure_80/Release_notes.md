---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Azure/80/Sitecore_Azure_80/Release_notes
---

# Release notes

Some of the issues described contain internal reference numbers. You can use these reference numbers when communicating with Sitecore about a particular issue or feature.

## May 25, 2015

Released Sitecore Azure 8.0 rev. 150522.

Tested with Sitecore 8.0 rev. 150427.

## Compatibility

Sitecore Azure 8.0 requires Azure SDK 2.5.1 and Sitecore® Experience Platform™ 8.0. 

## Change log:

### New features:

-   Additional support for deploying Sitecore 8.0
-   Additional support for using the Azure 2.5.1 SDK
-   Additional support for the new publishing settings schema

### Improvements:

-   There is now a drop-down menu so you can select the SQL Server Tier in the Content Editor
-   You can now select VM size from the drop-down menu in New Deployment dialog in the Azure module UI
-   The UI has been changed to make it better match the style of Sitecore Experience Platform 8.0

### Resolved issues:

-   AzureInRoleCacheSessionStateProvider now supports both Private and Shared session states. (435578)
-   An error occurred when attempting to request the Environment File. This has been fixed. (434974)
-   Deploying to Local Emulator failed to initiate in Sitecore Azure 7.5. This has been fixed in Sitecore Azure 8.0. (426308)

## Known issues

-   Upgrade issue with Sitecore 8.0 Update-3

Sitecore Azure 8.0 upgrade installation fails with Sitecore 8.0 Update 3, below is the workaround for upgrading

-   In Web.config file, configuration/configSections node, add following line:
    
    `<section name="sitecorediff" type="Sitecore.Update.Configuration.ConfigReader, Sitecore.Update"/>`
    
-   After configuration/configSections node, add following line:
    
    `<sitecorediff>``<sitecorediff/>`
    

-   Storage limitations

Windows Azure Cloud Services has some limitations on the app drive. For a Sitecore deployment, this means the App drive free space is limited to static files of no more than:

-   360MB on Content Delivery deployments
-   150MB on Content Editing deployments

This is more than enough in most single sites if larger media files are not deployed as physical files.
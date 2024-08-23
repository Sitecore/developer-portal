---
title: "Sitecore Experience Platform 8 – Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update7/Release_Notes
---

**January 2016 – released Sitecore 8.0 Service Pack-1 (rev. 160115)**

This is a product Service Pack, originally released as 8.0 Update-7. Sitecore recommends customers to install service packs for any feature release that the customer has installed. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](/downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update7).

## Documentation

For all Sitecore Experience Platform 8 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/)

## New features & Improvements

### Experience Database Cloud edition

-   You can now enable region selection for xDB Cloud during installation by specifying which datacentre region the xDB Set will be provisioned in.

## Resolved issues

### Federated Experience Manager

-   The Federated Experience Manager ribbon did not load. This has been fixed (80823)

### Experience Optimization

-   When using Experience Editor in IE10, the Unable to get property 'hasActiveTest' of undefined or null reference JavaScript error appeared. As a result, some of the Experience Optimization ribbon’s functionality did not work. This has been fixed. (443305, 79499)

### List Manager

-   Active locked contacts were not associated with a list when importing from a CSV file. This has been fixed. (439566)

### SPEAK

-   Some SPEAK 1.1 components output unencoded text from properties directly into HTML. SPEAK 1.1 components now encode text from properties to resolve this issue.

### Potential security vulnerabilities

-   A potential URL redirection vulnerability on the login page has been fixed. (453661)

### Renderings and layouts

-   On the Final layout tab in the Presentation details dialog, changing the control order had caused the presentation to display incorrectly. This has been fixed by fixing problems with delta generation and patching logic. (451349)

### Additional fixes

-   This entry provides reference numbers for scenarios reported by Sitecore customers that have been addressed as part of the other fixes or are no longer reproducible. (452569)

## Deprecated and removed functionality

-   The Sitecore Tag Management Client Library has been deprecated and removed from the Sitecore installation. (455549)

## Breaking changes

### Cloud

-   The new DeploymentRegion setting was introduced.
-   The Enum DeploymentType was replaced with a string for ease of extensibility.
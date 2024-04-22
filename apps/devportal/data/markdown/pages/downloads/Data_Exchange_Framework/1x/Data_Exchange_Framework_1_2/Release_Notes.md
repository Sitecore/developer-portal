---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_2/Release_Notes
---

**December 2016 – released Data Exchange Framework 1.2.0 (rev. 161212)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

Details on these changes are included in the product documentation, available on the [Downloads](/downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_2) page.

## Highlights

-   Improved logging and troubleshooting features
-   Improved performance and and control over synchronization processes
-   Bug fixes
-   Support for Sitecore on Azure

## Documentation

-   Documentation links are available on the [Downloads](/downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_2) page

## System requirements

-   Sitecore Experience Platform 8.1 rev. 151207 (8.1 update-1) or later

## New features & improvements

-   Ability to specify actions when mappings are applied (127883)
-   Apply mapping rule to ensure the source and target objects are different
-   Stop a pipeline batch that is running (126536)
-   Prevent a pipeline batch from running multiple times concurrently (108200)
-   Ability to specify destination for iterated data
-   Context awareness to apply mapping rule
-   Collection for ignored mappings on mapping context
-   Tenant repository
-   Extended Data Exchange Framework context
-   Ability to specify repository object status
-   Ability to associate metadata with work queue entries
-   Async support in a variety of APIs
-   Support for bulk Sitecore campaign updates
-   Ability to read multiple items from a Sitecore database
-   Support for bulk CRM entity updates

## Breaking changes

-   The Scheduled message type has been removed (80584)

## Deprecated and removed functionality

-   IPipelineBatchRepository has been replaced with ITenantRepository
-   SitecorePipelineBatchRepository has been replaced with SitecoreTenantRepository

## Resolved issues

The following issues have been resolved:

-   Pipeline batch summary values are not set when using the remote API to run the pipeline batch (122300)
-   Marketing list conditions break the Sitecore Rules Editor when the tenant name includes a dash (122555)
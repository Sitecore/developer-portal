---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Dynamics_CRM_Connect/Dynamics_CRM_Connect_1/Dynamics_CRM_Connect_1_3/Release_Notes
---

**February 2017 – released Dynamics CRM Connect 1.3.0 (rev. 170206)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

Details on these changes are included in the product documentation, available on the [Downloads](/downloads/Dynamics_CRM_Connect/Dynamics_CRM_Connect_1/Dynamics_CRM_Connect_1_3) page.

## Highlights

-   Support for Data Exchange Framework 1.3
-   Bug fixes

## Documentation

-   Documentation links are available on the [Downloads](/downloads/Dynamics_CRM_Connect/Dynamics_CRM_Connect_1/Dynamics_CRM_Connect_1_3) page

## System requirements

-   Sitecore Experience Platform 8.1 rev. 151207 (8.1 update-1) or later

## Deprecated and removed functionality

-   Renamed namespace Sitecore.DataExchange.Providers.DynamicsCrm.ApplyMappingStatusActions to Sitecore.DataExchange.Providers.DynamicsCrm.MappingsAppliedActions
-   Renamed namespace Sitecore.DataExchange.Providers.DynamicsCrm.Converters.ApplyMappingStatusActions to Sitecore.DataExchange.Providers.DynamicsCrm.Converters.MappingsAppliedActions

## Resolved issues

The following issues have been resolved:

-   Filter expression with operator “On or before selected” date does not work (131540)
-   Default entity name is set on template used to update any entity (137924)
-   Certain pipeline steps are not included in the insert options for the pipeline template (137924)
-   Pipeline step template has incorrect name (138275)
-   Unable to write option set values to Dynamics entities (139650)
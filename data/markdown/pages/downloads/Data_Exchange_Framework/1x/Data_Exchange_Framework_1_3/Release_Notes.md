---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_3/Release_Notes
---

**February 2017 – released Data Exchange Framework 1.3.0 (rev. 170206)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

Details on these changes are included in the product documentation, available on the [Downloads](/downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_3) page.

## Highlights

-   Improved control over work queue processing
-   Improved feedback when stopping pipeline batch that is running
-   Added support for multiple languages when working with Sitecore items
-   Bug fixes

## Documentation

-   Documentation links are available on the [Downloads](/downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_3) page

## System requirements

-   Sitecore Experience Platform 8.1 rev. 151207 (8.1 update-1) or later

## New features & improvements

-   Improved Item Model Repository functionality
-   Action for insert option rules that adds children as insert options

## Breaking changes

-   Added support for language and versions on IItemModelRepository
-   Overloaded method for creating new items on IItemModelRepository
-   Added virtual method on InProcItemModelRepository that determines whether or not Sitecore is running in the cloud
-   Added async support on ITenantRepository
-   Renamed namespace from Sitecore.DataExchange.Providers.Sc.Local.ApplyMappingActions to Sitecore.DataExchange.Providers.Sc.Local.MappingsAppliedActions

## Deprecated and removed functionality

-   Marked interface IDataChanged obsolete
-   Renamed namespace Sitecore.DataExchange.ApplyMappingActions to Sitecore.DataExchange.MappingsAppliedActions
-   Renamed namespace Sitecore.DataExchange.DataAccess.ApplyMappingActions to Sitecore.DataExchange.DataAccess.MappingsAppliedActions

## Resolved issues

The following issues have been resolved:

-   Incorrect encoding used in WebApiItemModelRepository (142680)
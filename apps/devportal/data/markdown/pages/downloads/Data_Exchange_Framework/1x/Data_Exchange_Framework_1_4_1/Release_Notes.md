---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_4_1/Release_Notes
---

**August 2017 – released Data Exchange Framework 1.4.1 (rev. 170818)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

Details on these changes are included in the product documentation, available on the [Downloads](/downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_4_1) page.

## Highlights

-   Usability enhancements
-   Work queue enhancements
-   Value mapping enhancements
-   SDK for provider developers
-   Bug fixes

## Documentation

-   Documentation links are available on the [Downloads](/downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_1_4_1) page

## System requirements

-   Sitecore Experience Platform 8.1 rev. 151207 (8.1 update-1) or later

## New features & improvements

-   Rules can be configured that determine whether or not a "mappings applied action" is run
-   Ability to view and clear work queue entries to improve the ability for administrators to troubleshoot problems
-   SDK for developers who want to build providers

## Breaking changes

-   Simplified work queue APIs
-   "Delta settings" feature moved from Dynamics CRM Provider to framework
-   Simplified interface for BaseItemModelConverter

## Deprecated and removed functionality

-   Removed interface IDataChanged

## Resolved issues

The following issues have been resolved:

-   InProcItemModelRepository does not convert ItemModel fields to string before writing to Sitecore. (153559)
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Dynamics_CRM_Connect/Dynamics_CRM_Connect_1/Dynamics_CRM_Connect_11/Release_Notes
---

**August 2016 – released Dynamics CRM Connect 1.1.0 (rev. 160817)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

-   Only read contacts from CRM that have changed since the last time the synchronization process ran
-   Improved logging and troubleshooting features
-   Improved performance and reliability for synchronization processes
-   Bug fixes

## Documentation

-   Documentation links are available on the [Downloads](/Downloads/Dynamics_CRM_Connect/Dynamics_CRM_Connect_1/Dynamics_CRM_Connect_11) page

## Upgrading from 1.0

-   The installation guide available on the [Downloads](/Downloads/Dynamics_CRM_Connect/Dynamics_CRM_Connect_1/Dynamics_CRM_Connect_11) page includes instructions on how to upgrade from Dynamics CRM Connect version 1.0 to version 1.1.

## System requirements

-   Sitecore Experience Platform 8.1 rev. 151207 (8.1 update-1)

## New features & improvements

-   Added ability to read only CRM entities that have changed since the last time the synchronization process ran (120495)
-   Added logging for read entities pipeline step processor (120877)
-   Added identifier as fallback email address for updating CRM contact (121039)
-   ​A template for the ArrayValueReader type has been added. This makes it possible to use this value reader in pipeline configurations. (117445)

## Breaking changes

-   Moved ContactFacetIndexerPropertyReader into the correct namespace (117973)
-   Refactor RelativeDateConditionExpression for consistency (120901)

## Resolved issues

The following issues have been resolved:

-   Incorrect value accessor specified for identifier on the pipeline step Resolve Entity (117618)
-   Required pipeline context plugins not specified on the pipeline step processor Upsert Entity (117849)
-   Contacts in xDB are not pushed to CRM in certain cases (117974)
-   Non-contact marketing lists are synchronized using the logic for contact marketing lists (118725)
-   Setting that excludes the active filter does not work (120021)
-   Inactive contacts in CRM are not resolved when synching xDB contact to CRM (121044)
-   When reading members for a marketing list, inactive contacts are read (121046)
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_11/Release_Notes
---

**August 2016 – released Data Exchange Framework 1.1.0 (rev. 160817)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

-   Improved logging and troubleshooting features
-   Improved performance and reliability for synchronization processes
-   Bug fixes

## Documentation

-   Documentation links are available on the [Downloads](/downloads/Data_Exchange_Framework/1x/Data_Exchange_Framework_11) page

## System requirements

-   Sitecore Experience Platform 8.1 rev. 151207 (8.1 update-1)

## New features & improvements

-   Added template for value reader that can read a value from an array based on the value's position in the array (117445)
-   Added ability to limit the number of messages written to a pipeline batch (117447)
-   Set the pipeline batch command to abort if the pipeline batch is already running to be the default value (117448)
-   Added base template for value writers (117450)
-   Refactored templates for pipeline steps that involve queues (117844)
-   Added logging to the pipeline step Save Campaign (117846)
-   Added templates for value writers (118718)
-   Added support for non-string values in value reader for constant values (118719)
-   Improved logging when value mappings fail (118899)
-   Added ability to disable logging for telemetry in API (120032)
-   Added event for activity start in base telemetry class (120033)
-   Prevent multiple start and stop on telemetry (120034)

## Breaking changes

-   The Scheduled message type has been removed (80584)

## Deprecated and removed functionality

-   Removed Settings section from the Marketing Campaign Repository Endpoint template (117449)

## Resolved issues

The following issues have been resolved:

-   Value accessor for tenant name belongs in framework folder (118335)
-   Inconsistent use of insert options across the framework and providers (120496)
-   Inconsistent icons (120994)
-   IterateAndRunPipelinesStepProcessor does not have IterableDataSettings as a require context pipeline plugin (121045)
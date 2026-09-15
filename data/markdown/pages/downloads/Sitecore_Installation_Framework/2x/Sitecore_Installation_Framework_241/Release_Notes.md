---
title: 'Release Notes'
description: ''
---

**July 2026 - released Sitecore Install Framework 2.4.1**

## New Features/improvements

| Description | Ref. |
| ----------- | ---- |
| Custom HTTP headers are now supported in deployment tasks. A new Headers parameter has been added to the Invoke-ManageSolrSchemaTask, Invoke-ManageSolrConfigTask, Invoke-ManageSolrCoreTask, Invoke-HttpRequestTask, and Invoke-WebRequestTask tasks, allowing custom HTTP headers to be included in requests. | PDXP-26644 |
| Binding redirect updates for configuration files have been improved. The Invoke-UpdateBindingRedirectsTask has been updated to provide more reliable binding redirect handling when updating .config files. | PDXP-27870 |
| Named Solr permissions can now be removed. A new Invoke-DeleteSolrPermissionTask task has been added to support deletion of named Solr permissions. | PDXP-26644 |
| JsonConfiguration now supports Config Function evaluation in JSON object keys. Previously, Config Function evaluation was limited to JSON values. JSON object keys are now also evaluated as Config Functions. | PDXP-26644 |

## Resolved Issues

| Description | Ref. |
| ----------- | ---- |
| HTTP request errors are no longer masked by exception handling logic. Previously, the Invoke-HttpRequestTask referenced an unassigned $response.StatusCode value in its exception handling logic, which could mask the original HTTP error. The task now correctly reports underlying HTTP failures. | PDXP-26644 |

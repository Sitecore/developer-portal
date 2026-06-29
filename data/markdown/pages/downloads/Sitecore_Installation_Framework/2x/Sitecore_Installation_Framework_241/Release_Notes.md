---
title: 'Release Notes'
description: ''
---

**July 2026 - released Sitecore Install Framework 2.4.1**

## New Features/improvements

| Description | Ref. |
| ----------- | ---- |
| Supporting passing custom HTTP headers via a `Headers` parameter has been added for tasks: Invoke-ManageSolrSchemaTask, Invoke-ManageSolrConfigTask, Invoke-ManageSolrCoreTask, Invoke-HttpRequestTask, Invoke-WebRequestTask. | PDXP-26644 |
| The Invoke-UpdateBindingRedirectsTask has been updated to improve binding redirect update behavior for `.config` files. | PDXP-27870 |
| A new task Invoke-DeleteSolrPermissionTask has been added. It is now possible to remove a named permission from a Solr instance. | PDXP-26644 |
| JsonConfiguration function has been improved to evaluate JSON object **keys** as Config Functions in addition to values. | PDXP-26644 |

## Resolved Issues

| Description | Ref. |
| ----------- | ---- |
| The Invoke-HttpRequestTask task masked real HTTP errors by referencing an unassigned $response.StatusCode in its catch block. | PDXP-26644 |


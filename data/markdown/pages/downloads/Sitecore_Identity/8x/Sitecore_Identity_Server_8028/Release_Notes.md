---
title: 'Release Notes'
---

Return to the [Sitecore Identity Server 8.0.28](/downloads/Sitecore_Identity/8x/Sitecore_Identity_Server_8028) release page.

## Improvements

| Description | Ref. |
| --- | --- |
| 500 server error returns when wrong provider is used in Identity Server | 627507, 627509 |
| OpenID - Open URL Redirection via Redirect_Uri | PDXP-11692 |
| Fix the create log file failure in Sitecore Identity Server 8. | PDXP-6561, PDXP-13019 |


## Breaking Changes

| Description | Ref. |
| --- | --- |
| For Identity Server on-premises and containerized deployments, Microsoft .NET 8 enforces higher security in the `Microsoft.Data.SqlClient`, enabling encryption by default for network traffic with SQL Server. For more information see the applicable install or uprade guide. For Azure App Service deployments, encryption was already enabled previous Identity Server versions. | 613902 |
| Identity Server 8.0 must run in x64 mode. The previous Identity Server 7 version targeted x86, but x86 caused errors in certain Identity Server 8.0 scenarios, so x64 mode only is supported. | 626755 |

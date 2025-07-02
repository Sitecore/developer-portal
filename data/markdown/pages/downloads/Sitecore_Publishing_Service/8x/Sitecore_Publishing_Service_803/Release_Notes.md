---
title: 'Release Notes'
description: ''
---
**2025-06-25:** Released Sitecore Publishing Service 8.0.3

Return to the [Sitecore Publishing Service 8.0.3](/downloads/Sitecore_Publishing_Service/8x/Sitecore_Publishing_Service_803) release page.

## New features/improvements
| Description | Ref. |
| --- | --- |
| Updated .NET 6 to .NET 8. | PDXP-5534 |
| Added support for Azure Application Insights - Connection Strings. Ref: [KB1003554: Application Insights – end of support for Instrumentation Key Ingestion](<https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003554>). | 621268 |

## Breaking changes
| Description | Ref. |
| --- | --- |
| The Sitecore Publishing Service now requires encrypted communication with SQL Server by default. This change is due to the adoption of a newer version of Microsoft.Data.SqlClient that enforces stricter security measures. Ref: *Encrypted Communication with SQL Server* section in the [Sitecore_Publishing_Service_Installation_and_Configuration_Guide_8.0](<https://scdp.blob.core.windows.net/downloads/Sitecore%20Publishing%20Service/8x/Sitecore_Publishing_Service_803/Sitecore_Publishing_Service_Installation_and_Configuration_Guide_8.0.pdf>). | 613902 |
| .NET 8 introduces a behavioral change as part of a bug fix to make `ActivatorUtilities.CreateInstance` behave more consistently. Ref: [ActivatorUtilities.CreateInstance behaves consistently](<https://learn.microsoft.com/en-us/dotnet/core/compatibility/extensions/8.0/activatorutilities-createinstance-behavior#new-behavior>). | N/A |


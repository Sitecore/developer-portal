---
title: 'Release Notes'
---
Publication history:
- **2025-04-15:** completed compatibility testing of Sitecore Identity Server 8.0 with Sitecore XP 9.1 through 10.4.
- **2025-04-03:** patched the on-premises *Deployment Configuration Files* package. Please see new Known Issue below.
- **2025-03-24:** released Sitecore Identity Server 8.0.16, certified compatible with Sitecore XP and Sitecore XC 10.2, 10.3, and 10.4.

Return to the [Sitecore Identity Server 8.0.16](/downloads/Sitecore_Identity/8x/Sitecore_Identity_Server_8016) release page.

## Improvements

| Description | Ref. |
| --- | --- |
| Updated the Microsoft .NET Core dependency, from .NET 6 to .NET 8. | 613902 |
| The .NET 8 compatibility also required updating the Duende IdentityServer dependency, from Duende IdentityServer 6.0.4 to 7.0.8. | 624508 |
| For Azure App Service deployments, starting with Identity Server 8.0 a new ARM Template dedicated to the Identity Server module is provided. | 624942 |
| For containerized deployments, starting with Identity Server 8.0 the name of container image has been changed from, for example *sitecore-id7* to *sitecore-identity*. Its tag is now aligned with the version of the Sitecore Identity Server itself, for example *sxp/sitecore-identity:8.0-ltsc2022*. |
| Replaced Azure Application Insights - Instrumentation Key Ingestion with Connection Strings, in response to Microsoft declaring end of support for Instrumentation Key Ingestion as of March 31, 2025. For more information see [KB1003554: Application Insights – end of support for Instrumentation Key Ingestion](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003554)| 621268 |
| Added a new license key for the dependent Duende software. This new new license key is valid until November 18, 2027. An expired license key will not impact Sitecore Identity Server functionality, but will display a warning message. For more information see [KB1003162: Sitecore Identity Server license key expiration](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003162). | 624800 |

## Breaking Changes

| Description | Ref. |
| --- | --- |
| For Identity Server on-premises and containerized deployments, Microsoft .NET 8 enforces higher security in the `Microsoft.Data.SqlClient`, enabling encryption by default for network traffic with SQL Server. For more information see the applicable install or uprade guide. For Azure App Service deployments, encryption was already enabled previous Identity Server versions. | 613902 |
| Identity Server 8.0 must run in x64 mode. The previous Identity Server 7 version targeted x86, but x86 caused errors in certain Identity Server 8.0 scenarios, so x64 mode only is supported. | 626755 |

## Known Issues

| Description | Ref. |
| --- | --- |
| When you install or upgrade to Identity Server 8.0 in a on-premises deployment (only), if you do not implement the instructions in the [Installation and Upgrade Guide - On-premises](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore_Identity_Server_Installation_&_Upgrade-OnPremises-8.0.pdf), section *Encrypted Communication with SQL Server*, then the default security settings will not be as recommended. The TrustServerCertificate parameter will be set to `true` and will skip certificate validation when connecting to SQL, which is not recommended. There will be no warning message that the certificate is not set up as recommended.<br/><br/>**Solution:** Set the parameters per the instructions in the *Encrypted Communication with SQL Server* section. Or, install the updated *Deployment Configuration Files* package published on 2025-04-03, which will by default correctly require you to set up a certificate for your production environment.<br/><br/>**Note:** The *Deployment Configuration Files* package is not versioned. The new package published on 2025-04-03 introduced a change to the IdentityServer.json file in lines 115 though 119 to modify how these parameters get processed if empty. For example old line 115 says, "Sql.Encrypt.Condition": ..."; updated line 115 says, "Sql.Encrypt.Empty.Condition": ...". | 629703 |
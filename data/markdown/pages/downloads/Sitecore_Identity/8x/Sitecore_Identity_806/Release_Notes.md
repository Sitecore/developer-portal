---
title: 'Release Notes'
---

**DRAFT WORK-IN-PROGRESS.**

**February 2025 – released Sitecore Identity Server 8.0.6**

## Improvements

| Description | ADO no. |
| --- | --- |
| Updated the Microsoft .NET Core dependency, from .NET 6 to .NET 8. | 613902 |
| The .NET 8 compatibility also required updating the Duende IdentityServer dependency, from Duende IdentityServer 6.0.4 to 7.0.8. | 624508 |
| For deployments to the Microsoft Azure App Service, this release decouples the tight dependency between deploying the Sitecore Identity Server module and deploying its corresponding Sitecore Experience Platform (SXP). Previously the Identity Server module was deployed by the SXP ARM Templates. As of version 8, the Sitecore Identity Server module is deployed by its own new ARM template, with its own instructions. Note: the default SXP ARM Template will be updated at a future time to remove the Identity Server module, for example before releasing a future SXP minor or update release. | 624942 |
| For deployments via Containers, this release decouples the tight dependency between deploying the Sitecore Identity Server module and deploying its corresponding SXP. Previously the Identity Server module was deployed as part of the SXP container images. As of version 8, the Sitecore Identity Server module is deployed using its own new container image. Note: the default SXP container images will be updated at a future time to remove the Identity Server module, for example before releasing a future SXP minor or update release. | 624964 |
| Replaced Azure Application Insights - Instrumentation Key Ingestion with Connection Strings, in response to Microsoft declaring end of support for Instrumentation Key Ingestion as of March 31, 2025. For more information see [KB1003554: Application Insights – end of support for Instrumentation Key Ingestion](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003554)| 621268 |
| Added a new license key for the dependent Duende software. This new new license key is valid until November 18, 2027. An expired license key will not impact Sitecore Identity Server functionality, but will display a warning message. For more information see [KB1003162: Sitecore Identity Server license key expiration](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003162). | 624800 |

## Resolved issues

| Description | ADO no. |
| --- | --- |
|     |     |

## Breaking Changes

| Description | ADO no. |
| --- | --- |
| Microsoft .NET 8 increased the default security configuration in the encryption settings for the security connection string. Microsoft.Data.SqlClient has been updated enabling encryption of all network traffic with SQL Server. For Sitecore Identity Server On=premises and Container deployments this introduces a breaking change. The previous default 'Encrypt Client' setting was *False*, but as of Identity Server version 8 this setting is now *True*. For Sitecore Identity Server deployments to the Microsoft Azure App Service no breaking change is introduced; the 'Encrypt Client' setting was already set to *True* (due to the potentially more exposed nature of the Azure App Service). The default ARM Template configuration in the Application.json file was previously and continues to be: `Encrypt=True;TrustServerCertificate=False`. For more information see the **DRAFT** [Sitecore Identity Server Installation and Upgrade Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore%20Identity%20Server%20Installation%20and%20Upgrade%20Guide-8.0.X%20DRAFT.pdf) and Microsoft's [Encryption and certificate validation in Microsoft.Data.SqlClient](https://learn.microsoft.com/en-us/sql/connect/ado-net/encryption-and-certificate-validation?view=sql-server-ver15#version-40) article pertaining to Version 4.0. | 613902 |
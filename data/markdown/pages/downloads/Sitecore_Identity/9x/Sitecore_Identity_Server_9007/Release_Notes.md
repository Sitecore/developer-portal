---
title: 'Release Notes'
---
Publication history:\
**2026-07-29:** Released Sitecore Identity Server 9.0.7, compatible with Sitecore XP and Sitecore XC 10.3 through 10.5.

Return to the [Sitecore Identity Server 9.0.7](/downloads/Sitecore_Identity/9x/Sitecore_Identity_Server_9007) release page.

## Improvements

| Description | Ref. |
| --- | --- |
| Azure Active Directory (Azure Entra ID) for SQL Authentication is supported | PDXP-14449 |
| Updated the Microsoft .NET runtime dependency from .NET 8 to .NET 10. Servers running only .NET 8 will fail to start. No action is required for deployments using the official Sitecore-provided container images. | PDXP-22070 |
| The container base image has been updated from `aspnet:8.0-nanoserver-1809` to `aspnet:10.0-nanoserver-1809`. Deployments that customise or extend the Sitecore Identity Server Docker image must update their base image references accordingly. | PDXP-22070 |
| Remove Identity Server module from SXP platform ARM templates. For more information, please refer to https://github.com/Sitecore/Sitecore-Azure-Quickstart-Templates/blob/master/MODULES.md | PDXP-6039 |

## Breaking Changes

| Description | Ref. |
| --- | --- |
| All `Microsoft.AspNetCore.*`, `Microsoft.Extensions.*`, and `Microsoft.EntityFrameworkCore.SqlServer` packages have been upgraded from 8.x to 10.x to align with .NET 10 GA. Custom plugins or extensions that reference these packages must update their dependencies to target the 10.x versions. | PDXP-22070 |
| `Microsoft.IdentityModel.Protocols` (and related `Microsoft.IdentityModel.*` packages) has been upgraded from 7.x to 8.x. Custom plugins that use `Microsoft.IdentityModel.*` APIs must update their dependencies to 8.x. | PDXP-22070 |
| The `IdentityModel` NuGet package has been replaced by `Duende.IdentityModel`. Custom plugins that reference `IdentityModel` types directly must update their project references to `Duende.IdentityModel`. | PDXP-22070 |
| The `System.Data.SqlClient` package has been removed. `Microsoft.Data.SqlClient` is the recommended replacement. Custom plugins that relied on `System.Data.SqlClient` as a transitive dependency must add an explicit reference and update namespace imports. | PDXP-22070 |
| The `Sitecore.Framework.Runtime`, `Sitecore.Framework.Plugin.Administration`, and `Sitecore.Framework.Logging.Serilog` packages have been upgraded to new major versions. Custom plugins referencing these packages must be recompiled against the new versions. | PDXP-22070 |
| The `ConfigureSitecore(ISitecoreConfiguration)` constructor in `Sitecore.Plugin.IdentityServer` has been deprecated. A new preferred constructor `ConfigureSitecore(ISitecoreConfiguration, IWebHostEnvironment)` has been introduced. Solutions with `<TreatWarningsAsErrors>true</TreatWarningsAsErrors>` will encounter a compilation error and must update the constructor call. | PDXP-26919 |
| The constructor of `Sitecore.IdentityServer.Host.Startup` has a new required `ILogger<Startup>` parameter. Solutions that subclass `Startup` and call `base(...)` explicitly must update the base constructor call to include an `ILogger<Startup>` instance. | PDXP-26919 |
| Razor runtime compilation has been removed. Plugin views that were previously served as loose `.cshtml` files on disk will no longer be discovered. Plugin projects must switch to build-time Razor compilation using the `Microsoft.NET.Sdk.Razor` SDK. | PDXP-26919 |
| The signing certificate configuration options `CertificateRawData` and `CertificateFilePath` now exclusively accept PKCS#12 (PFX) format, in response to the .NET 9 deprecation of general-purpose `X509Certificate2` constructors. Deployments that supply a certificate in a format other than PKCS#12 must convert to PFX before upgrading. | PDXP-26919 |
| The Pushed Authorization Request (PAR) endpoint is now explicitly disabled. ASP.NET Core 9+ OIDC clients automatically use PAR when it is advertised, which caused authentication failures under the Duende Starter license. Deployments that explicitly require PAR are affected. | PDXP-22070 |
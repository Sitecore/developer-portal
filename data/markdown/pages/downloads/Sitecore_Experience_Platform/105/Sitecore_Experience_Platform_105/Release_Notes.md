---
title: 'Release Notes'
---
Publication history:<br/>
**2026-07-29:** Released Sitecore Experience Platform 10.5.0.

Return to the [Sitecore Experience Platform 10.5](/downloads/Sitecore_Experience_Platform/105/Sitecore_Experience_Platform_105) release page.

This release includes new features and improvements made in Sitecore Experience Platform (SXP) 10.5. Sitecore recommends that you upgrade to this release if it aligns with the specific needs of your organization. This release contains significant improvements in functionality worth evaluating.

- [Highlights](#highlights)
- [New features/improvements](#new-featuresimprovements)
- [Deprecated](#deprecated)
- [Removed](#removed)
- [Resolved issues](#resolved-issues)

## Highlights

Sitecore Experience Platform (SXP) 10.5 includes updates for improved security, supportability, performance, compatibility, and user experience. Highlights include:

- Improved security hardening throughout SXP, including the replacement of BinaryFormatter serialization, removal of known default credentials, enhanced package installation controls, and patches for multiple security vulnerabilities.

- Updated third-party compatibility:
  - Windows Server 2025 support across on-premises, containerized, and orchestrated deployments.
  - SQL Server 2025 support.
  - Apache Solr 10 support, including Basic Authentication.
  - Updated Telerik UI for ASP.NET AJAX to version 2025.2.528.

- Refreshed the visual design of Content Editor, Experience Editor, and administrative interfaces to align with Sitecore's Cloud Portal design system, including updated typography, colors, icons, buttons, ribbons, and navigation elements.

- Improved publishing reliability and scalability by:
  - Preventing content from being skipped during incremental publishing.
  - Resolving issues that could cause published pages to disappear in multilingual workflow scenarios.
  - Significantly improving Experience Edge publishing performance for large content buckets.

- Improved search capabilities and platform compatibility by:
  - Adding support for Solr 10.
  - Improving SolrCloud collection management through alias-based resolution.
  - Adding SXA query token support to Multilist with Search fields.
  - Improving full-text indexing reliability and search-result accuracy.

- Improved platform performance through optimizations that reduce cache contention, improve MVC rendering efficiency, optimize path resolution, improve archive cleanup operations, and eliminate unnecessary Solr optimization operations.

- Improved operational stability by enhancing error logging, improving startup diagnostics, preventing application crashes caused by certificate initialization failures and device detection issues, and improving upgrade tooling for xConnect deployments.

- Modernized platform dependencies by updating JavaScript libraries across SPEAK-based applications, including jQuery, Backbone.js, Underscore.js, jQuery UI, Knockout, and related components.

SXP 10.5 also includes these important changes:

- Windows Server 2019 container images are no longer supported. Container deployments must use Windows Server 2022 or Windows Server 2025 images.

- Identity Server is no longer included in the SXP platform ARM templates and must be deployed as a separate module when using Azure PaaS deployments.

- Application Insights now requires Connection Strings. Instrumentation Key-based configuration is no longer supported.

- Customers upgrading from SXP 10.4 should review upgrade guidance for the BinaryFormatter removal and UserProfile serialization migration changes.

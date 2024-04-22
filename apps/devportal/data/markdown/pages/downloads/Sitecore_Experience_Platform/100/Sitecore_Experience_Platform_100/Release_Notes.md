---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100/Release_Notes
---

**August 2020 – released Sitecore Experience Platform 10.0.0**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Deprecated/Removed](#Deprecated)
-   [Breaking changes](#Breaking)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Experience Platform 10.0.0 includes:

-   ​The Sitecore XM topology now completely supports in-session personalization.
-   In Azure Application Insights, the `Application Map` has been added to the xConnect application services and web jobs.
-   XConnect - The `sitecore.version.xml` file has been added to the XConnect roles and services to determine the current version of the Sitecore.
-   XConnect - The `SQL Sharding Deployment` tool has been updated and the order of the parameters is no longer strict and proper exception logging has been added.
-   ​XConnect - The XConnect Client API has been extended with `ExecutionOptions` for every get operation. All the overloads with `ExpandOptions` have been deprecated and will be removed in the next release.
-   XConnect - We have introduced a Circuit Breaker Pattern for XConnect. In a distributed environment, calls to the XConnect server can fail because of transient faults or when resources are responding slowly. Using HTTP retries carelessly can create a DoS attack and slow down the response time of the server. This can exponentially increase the traffic to the failing service. The Circuit Breaker defense prevents applications from performing operations that are likely to fail within a configurable time frame.
-   The `Shared Session State` database is now disabled by default, and can be enabled if required.​
-   You can now specify which paths should not be tracked by RegEx. The tracking exclusion feature supports both web forms and MVC paths.​
-   Audience Filtering in Experience Analytics - You can now filter all the Experience Analytics reports on marketing segments created in list manager.  
    You can:  
    -   Target segments of contacts through pre-defined rules and then see report based on these marketing segments.
    -   Push emails to a segmented list and then see the impact across your websites.
    -   See reports on the performance of your key target groups.
-   Developer Experience - As part of the new Sitecore CLI, Sitecore Content Serialization provides automation-friendly tools for serializing, deserializing, packaging, and deploying items with a remote Sitecore instance.
-   Containers - You can quickly get started doing container-based Sitecore development with the Sitecore Docker Tools and our comprehensive documentation on development practices for Sitecore Containers.
-   To support containers, readiness health checks have been added for XConnect web-roles and XConnect Client (non-web roles).
-   In the `Reporting` database, the `Visitors` column has been removed.
-   Marketing Foundation - ​​The Sharding Deployment Tool now supports SQL Azure Elastic Pool.
-   Marketing Automation - ​Performance improvements in XConnect for customers who do not use Marketing Automation.  
    Marketing Automation does not load contacts and interactions unless there is an inactive or active plan.
-   Marketing Automation - A new birthday rule has been implemented.  
    A milestone that is often used to target customers is their birthday. By creating a scheduled marketing automation campaign that runs based on a birthday rule, you can send a birthday message to customers before, during or after that date.
-   Marketing Automation - ​We now send telemetry about when a campaign is activated and deactivated to the consumption tracking client.
-   A [new page](https://kb.sitecore.net/articles/053708) has been added that automatically collects basic information about your Identity Server instance.
-   Headless Services - The ASP.NET Core Rendering SDK allows you to use .NET Core to construct headless rendering applications that run independently.
-   Sitecore.ContentSearch.Azure - In Sitecore XP 10.0.0, Azure Search is deprecated and will be completely removed in the Sitecore XP 10.2.0. While you can still use Azure Search in XP 10.0.0 today and it will be supported according to our product support timelines, future changes will be required when you upgrade to a later version where Azure Search has been completely removed.  
    If you are starting a new Sitecore project, we recommend that you use Solr as your search engine to prevent any future upgrade obstacles from occurring.
-   The `Visitors` column has been removed from the `reporting` database.

**Important**  
The Sitecore Identity Server 10.0.0 container image ships with ASP.NET Core Runtime 2.1.18. Microsoft has released a security patch, version 2.1.20 (release notes), for the 2.1 long term support channel (download info). Customers are strongly encouraged to upgrade to the latest 2.1 version of ASP.NET Core Runtime before deploying to production.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Containers | You can quickly get started doing container-based Sitecore development with the Sitecore Docker Tools and our comprehensive documentation on development practices for Sitecore Containers.​ |   
 |   
 |
 | Developer Experience | ​​​The `Getting Started dotnet new"`template creates a basic starter Visual Studio solution that uses Sitecore Containers, the ASP.NET Core Rendering SDK, and Sitecore Content Serialization. |   
 |   
 |
 | Developer Experience | ​As part of the new Sitecore CLI, Sitecore Content Serialization provides automation-friendly tools for serializing, deserializing, packaging, and deploying items with a remote Sitecore instance. |   
 |   
 |
 | Device Detection | ​​​​The `DeviceDetection.DatabasePath` setting now uses `$(dataFolder)/DeviceDetection` instead of `/App_Data/DeviceDetection`. |   
 | 292361 |
 | Device Detection | ​​The `DeviceDetection.CheckInitializationTimeout` interval is now lower. |   
 | 310775 |
 | Email Experience Manager | In Sitecore Experience Platform 10.0.0, you require a separate EXM license to activate the EXM module on the Sitecore launchpad and to dispatch emails. Sitecore offers two licenses - EXM Delivery Cloud license and EXM Custom SMTP license. In In Sitecore XP 9.3 or earlier, EXM is available on the launchpad but you still require a license to activate the module and dispatch emails.​​​ |   
 |   
 |
 | Email Experience Manager | ​​​ The following new email templates have been added:<br /><br />-   Left Image Block<br />-   Right Image Block<br />-   Image Focus<br /><br />The following templates have been converted from WebForms to MVC:<br /><br />-   Announcement<br />-   Alternating Columns<br />-   Call To Action Focus<br /><br /> |   
 | 359069 |
 | Email Experience Manager | The `Right to object` functionality has been improved.​ |   
 | 385944 |
 | Experience Analytics | ​Audience Filtering in Experience Analytics - You can now filter all the Experience Analytics reports on marketing segments created in list manager. |   
 | 189732 |
 | Experience Analytics | ​The Content Management and Reporting app services now use the same app service plan and this reduces the hosting cost.​ |   
 | 401157 |
 | Experience Analytics | ​​You can now:<br /><br />-   Delete the fact_Data of a Segment that has been deleted.<br />-   Perform historical aggregation also known as re-aggregation any number of times.<br /><br /> |   
 | 406923 |
 | Experience Editor | ​​​When you paste content from Microsoft Word into the Rich Text Editor, it now cleans up the markup. |   
 | 347661 |
 | Experience Optimization | ​The Sitecore XM topology now completely supports in-session personalization.​​​ |   
 | 333426 |
 | Experience Optimization | ​​In Content Testing, the performance of loading the active personalization list has been improved. |   
 | 378475 |
 | Experience Optimization | ​​​​In Content Testing, diagnostics logging has been implemented for the `Suspend Corrupted Tests` command.​ |   
 | 357373 |
 | Headless Services | ​The ASP.NET Core Rendering SDK allows you to use .NET Core to construct headless rendering applications that run independently. |   
 |   
 |
 | Headless Services | JSS can now successfully handle forwarded deployment requests when it is installed behind a reverse proxy as it is in Docker. |   
 | 418118 |
 | Installation | SIA now validates SQL Server connectivity. |   
 | 374501 |
 | Installation | ​SIA now supports the installation of Sitecore Experience Commerce. |   
 | 334588 |
 | Installation | SIA now validates Solr connectivity. |   
 | 374505 |
 | Installation | SIA now displays a progress spinner during the installation process. |   
 | 383118 |
 | Installation | SIA now validates the Sitecore license file. |   
 | 374500 |
 | Language Fallback | ​​The performance of the link database rebuild process when Language Fallback is enabled has been optimized. |   
 | 135004 |
 | Marketing Automation | ​A new birthday rule has been implemented. |   
 | 387947 |
 | Marketing Automation | ​​​​We now send telemetry about when a campaign is activated and deactivated to the consumption tracking client. |   
 | 386104 |
 | Marketing Foundation | ​xConnect by now supports partial text search. You can search for contacts by part of their first/ middle/ last names, email, or email domain by default. You can also extend the Solr schema and add more fields that can be searched in the same way. ​ |   
 | 362032 |
 | Marketing Foundation | ​​​The Sharding Deployment Tool now supports SQL Azure Elastic Pool. |   
 | 412135 |
 | Marketing Foundation | ​​​The `sitecore.version.xml` file has been added to the XConnect roles and services to determine the current version of the Sitecore. |   
 | 199647 |
 | Marketing Foundation | ​​The performance of rebuilding the xConnect indexes has been optimized. The speed of rebuilding indexes on solutions with a large amount of returning active users has been improved. |   
 | 367431 |
 | Marketing Foundation | ​The Application Insights logging itemType in xConnect roles has been changed from `CustomEvent` to `Trace` to align with the logging itemType used on the experience management roles.​​​ |   
 | 299012 |
 | Marketing Foundation | ​​xConnect now supports count queries in SOLR.<br /><br />In xConnect queries, you can use count on facet properties and on non-facet enumertions, such as, interactions,events, and identifiers.<br /><br />Count queries are not supported on Azure Search.​<br /><br /> |   
 | 354558 |
 | Marketing Foundation | ​​​​In Azure Application Insights, the `Application Map` has been added to the xConnect application services and web jobs. |   
 | 301321 |
 | Marketing Foundation | ​To support containers, readiness health checks have been added for XConnect web-roles and XConnect Client (non-web roles). |   
 | 84652, 360507 |
 | Marketing Foundation | ​​​The `SQL Sharding Deployment` tool has been updated and the order of the parameters is no longer strict and proper exception logging has been added. |   
 | 324382, 219526 |
 | Marketing Foundation | ​​The performance of Change Tracking has been optimized for the `collection` database. Change Tracking has been disabled for the `[xdb_collection].[ContactFacets]` table. The `[xdb_collection].[Contacts]` table is updated every time the contact facets are updated. |   
 | 375953 |
 | Marketing Foundation | We have introduced a Circuit Breaker Pattern for XConnect. In a distributed environment, calls to the XConnect server can fail because of transient faults or when resources are responding slowly. Using HTTP retries carelessly can create a DoS attack and slow down the response time of the server. This can exponentially increase the traffic to the failing service. The Circuit Breaker defense prevents applications from performing operations that are likely to fail within a configurable time frame. |   
 | 391670 |
 | Marketing Foundation | ​​​You can now configure service pages (Error, Not Found, and so on) for each website. |   
 | 388566 |
 | Marketing Foundation | ​​Session State Data serialization has been optimized to reduce the amount of data stored in session state storage and improve request response time for content delivery.​​ |   
 | 384856 |
 | Marketing Foundation | ​The `Shared Session State` database is now disabled by default, and can be enabled if required.​ |   
 |   
 |
 | Marketing Foundation | ​​​You can now specify which paths should not be tracked by RegEx. The tracking exclusion feature supports both web forms and MVC paths.​ |   
 | 399578 |
 | Marketing Foundation | ​​You can now define multiple names for search parameters under `Sitecore.Analytics.Pipelines.ParseReferrer.ParseGenericSearchEngine`. |   
 | 360013 |
 | Miscellaneous | ​​Visitor tracking now requires that they give explicit consent. |   
 | 309763 |
 | Miscellaneous | ​​The `Sitecore.Pipelines.GetFieldValue.GetInheritedValue` processor is now disabled for every server role except `Content Management` and `Standalone`. |   
 | 356108 |
 | Miscellaneous | ​​​A new page has been added that automatically collects basic information about your Identity Server instance. |   
 |   
 |
 | Platform | ​​You can now abort jobs that are currently running. |   
 | 91026 |
 | Platform | ​The Cortex ​Content Tagging external call has been adjusted to accommodate the OpenCalais API changes. |   
 | 400948 |
 | Platform | ​​​​Fields that contain hexadecimal characters present are now handled correctly. |   
 | 402105 |
 | Platform | ​​The `Sitecore.Data.Managers.ItemProvider.GetItem()` method has been optimized.​ |   
 | 357549 |
 | Sitecore Azure | Application Insights - the connection string and the env variables are now available for logging.​​​​​ |   
 | 375486 |
 | Sitecore Azure | ​You can now change logging level on fly. |   
 | 374224 |
 | Sitecore.ContentSearch | Sitecore XP no longer from passes malformed content to Solr​.​​​ |   
 | 361915 |
 | Sitecore.ContentSearch | Text extraction for indexing is now based on Solr Cell/Apache Tika​.​ |   
 | 342158 |
 | Sitecore.ContentSearch | ​​​The `Content` field is now controlled by a dedicated configured list​. |   
 | 303485 |
 | Sitecore.ContentSearch | ​We now use the POCO model to determine the list of fields that should be retrieved during a search​. |   
 | 324448 |
 | Sitecore.ContentSearch | ​​​Sitecore XP now filters and validates content before sending it to Solr​. |   
 | 361915 |
 | Sitecore.ContentSearch.Azure | ​​​CloudSearchResults​ now ​return the total count. |   
 | 401319 |
 | Sitecore Forms | ​Form structure is now validated at form level - that all the required fields are present.​​​​ |   
 |   
 |
 | Sitecore Forms | To facilitate Sitecore and their partners in complying with data privacy obligations, Sitecore Forms now contains the Redact Contact Submissions API that you can use to anonymize the database records of a contact.​ |   
 |   
 |
 | Templates | ​The performance of the `TemplateEngine.GetTemplate` API has been improved.​ |   
 | 257467 |

## Deprecated/Removed

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Content Editor | ​​The Image Editor has been completely removed from the product​. |  | 354730 |
 | Email Experience Manager | ​​​ The following have been removed (obsoleted in 9.3):<br /><br />-   `Sitecore.EmailCampaign.Cm.Dispatch.IMessageTask` does not inherit from IDisposable anymore.<br />-   `Sitecore.EmailCampaign.Cm.Dispatch.MessageTask` does not have Dispatch anymore.<br />-   `Sitecore.EmailCampaign.Cm.Pipelines.UpdateUndeliveredCount.FacetName` as been removed.<br />-   `Sitecore.EmailCampaign.Cd.Pipelines.RedirectUrl.ResetContactEmailBounceCount.EmailAddressesFacetName` has been removed (deprecated in 9.3).<br /><br /> |   
 | 377243 |
 | Email Experience Manager | The `Sitecore.Modules.EmailCampaign.Core.Gateways.DefaultAnalyticsGateway()` parameterless constructor has been made obsolete in favour of `Sitecore.Modules.EmailCampaign.Core.Gateways.DefaultAnalyticsGateway(IDefinitionManager<ICampaignActivityDefinition> campaignActivityDefinition)`.  <br />`Sitecore.EmailCampaign.Cd.sitecore_modules.Web.EXM.RegisterEmailOpened`  <br />`Sitecore.EmailCampaign.SampleNewsletter.Extensions.FieldExtensions` - all the methods habe been obsoleted. The Sample Newsletter will be removed in the next release.  <br />Items related to the old email templates are obsoleted and will be removed in the next release (if not referenced):  <br /><br />-   `                 /sitecore/layout/Layouts/System/Email/Sample Newsletter	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Single Column Layout	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Templates/Alternating Columns	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Templates/Basic Layout	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Templates/Call To Action Focus	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Templates/Image Focus	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Templates/Three Column Long	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Templates/Two Column	`<br />-   `                 /sitecore/layout/Layouts/System/Email/Two Column Layout	`<br />-   `                 /sitecore/layout/Placeholder Settings/Email/SampleNewsletter/newsletter	`<br />-   `                 /sitecore/layout/Placeholder Settings/Email/SampleNewsletter/newsletter_head	`<br />-   `                 /sitecore/layout/Renderings/System/Email/Display Body	`<br />-   `                 /sitecore/layout/Renderings/System/Email/Display Footer	`<br />-   `                 /sitecore/layout/Renderings/System/Email/Display Sidebar	`<br />-   `                 /sitecore/layout/Renderings/System/Email/Image	`<br />-   `                 /sitecore/layout/Renderings/System/Email/Sample Newsletter	`<br />-   `                 /sitecore/layout/Sublayouts/Email	`<br />-   `                 /sitecore/media library/System/Email/SampleNewsletter	`<br />-   `                 /sitecore/media library/System/Email/Thumbnails/existing	`<br />-   `                 /sitecore/media library/System/Email/Thumbnails/one-column-template	`<br />-   `                 /sitecore/media library/System/Email/Thumbnails/target	`<br />-   `                 /sitecore/media library/System/Email/Thumbnails/two_column	`<br />-   `                 /sitecore/media library/System/Email/Thumbnails/two-column-template	`<br />-   `                 /sitecore/templates/Branches/System/Email/Messages/One-Column Message	`<br />-   `                 /sitecore/templates/Branches/System/Email/Messages/Right Image Block	`<br />-   `                 /sitecore/templates/Branches/System/Email/Messages/Thee Column Long	`<br />-   `                 /sitecore/templates/Branches/System/Email/Messages/Thee Column Short	`<br />-   `                 /sitecore/templates/Branches/System/Email/Messages/Two Column One CTA	`<br />-   `                 /sitecore/templates/Branches/System/Email/Messages/Two Column	`<br />-   `                 /sitecore/templates/Branches/System/Email/Messages/Two-Column Message	`<br />-   `                 /sitecore/templates/Branches/System/Email/Sample Newsletter	`<br />-   `                 /sitecore/templates/System/Email/Messages/Shared	`<br />-   `                 /sitecore/templates/System/Email/Sample Newsletter 			`<br />​<br /><br /> |   
 | 377243 |
 | Experience Optimization | In the `Reporting` database, the `Visitors` column has been removed from the following tables (obsoleted in Sitecore XP 9.3):<br /><br />-   dbo.Fact_RulesExposure<br />-   dbo.Fact_MvTesting<br />-   dbo.Fact_Personalization<br /><br />In `master/sitecore/system/Settings/Content Testing/Report Queries/Deprecated/`, the following report query items have been removed (deprecated in Sitecore XP 9.3):<br /><br />-   Personalization Visits By Range.item<br />-   Reach By Test Id.item<br />-   Reach For Item.item<br />-   Reach For Rule.item<br />-   Ruleset Exposure.item<br /><br />In `master/sitecore/system/Settings/Content Testing/Report Queries/`, the following report query item has been updated to remove references to the `Visitors` column:<br /><br />-   Personalization Performance By Test Id.item<br /><br /> |  | 350912 |
 | Experience Optimization | ​​​​The `Visitors` column has been removed from the `reporting` database. |  | 350912 |
 | Marketing Foundation | ​`Sitecore.Xdb.MarketingAutomation.Loading.ContactLoader` has been removed (deprecated in 9.2). You can use `Sitecore.Xdb.MarketingAutomation.Loading.AsyncXdbLoader`.`Sitecore.Xdb.MarketingAutomation.Core.Loading.IContactLoader` has been removed (deprecated in 9.2). You can use `Sitecore.Xdb.MarketingAutomation.Loading.IAsyncXdbLoader` in `Sitecore.Xdb.MarketingAutomation.dll`. |  | 295626 |
 | Marketing Foundation | ​​​The ability to configure the ReferenceData provider with a connection string has been deprecated and will be completely removed in a later release. Only the connection string name is supported.<br /><br />Deprecated API:<br /><br />`Class Sitecore.Xdb.ReferenceData.SqlServer.SqlServerReferenceDataProvider`<br /><br />Constructors:<br /><br />`                  [Obsolete("Deprecated in 10.0.0. Use .ctor(IConfiguration, ILogger<SqlServerReferenceDataProvider>, IRetryerRegistry) instead.")]                 public SqlServerReferenceDataProvider(string, ILogger<SqlServerReferenceDataProvider>, IRetryerRegistry, string)                  `<br /><br />`                  [Obsolete("Deprecated in 10.0.0. Use .ctor(IConfiguration, ILogger<SqlServerReferenceDataProvider>, ITvpConverter, IRetryerRegistry) instead.")]                 public SqlServerReferenceDataProvider(string, ILogger<SqlServerReferenceDataProvider>, ITvpConverter, IRetryerRegistry, string)                  `<br /><br />Constants:<br /><br />`                  [Obsolete("Deprecated in 10.0.0. Use ConnectionStringNameConfigurationSectionName instead.")]                 public const string ConnectionStringOrNameConfigurationSectionName = "ConnectionStringOrName";                  `<br /><br />Methods:<br /><br />`                  [Obsolete("Deprecated in 10.0.0. Use ExtractConnectionStringName(IConfiguration) instead.")]                 protected static string ExtractConnectionStringOrName(IConfiguration)                  `<br /><br />`                  [Obsolete("Deprecated in 10.0.0. Use GetConnectionStringByName(string) instead.")]                 protected static string ResolveConnectionString(string)                  `<br /><br />Configuration file changes:<br /><br />File:<br /><br />`App_Data/Config/sitecore/ReferenceData/sc.XConnect.ReferenceData.SqlServer.xml`<br /><br />XPath:<br /><br />`/Settings/Sitecore/XConnect/ReferenceData/SqlServer/Services/ReferenceData.SqlServer.SqlServerReferenceDataProvider/Options`<br /><br />Node:<br /><br />`<!-- The connection string or a name of the connection string used to connect to the SQL server.  -->                 <ConnectionStringOrName>xdb.referencedata</ConnectionStringOrName>                 `<br /><br />Replaced with:<br /><br />`                  <!-- The connection string name used to connect to the SQL server.  -->                 <ConnectionStringName>xdb.referencedata</ConnectionStringName>                  `<br /><br />File:<br /><br />`App_Config/Sitecore/Marketing.Xdb.ReferenceData.SqlServer/Sitecore.Xdb.ReferenceData.SqlServer.config `<br /><br />XPath:<br /><br />`configuration/sitecore/xdb.referenceData.sql/sqlDataProvider `<br /><br />Node:<br /><br />`                  <!-- connectionStringOrName: The connection string or a name of the connection string used to connect to the SQL server. (default: xdb.referencedata) -->                 <param name="connectionStringOrName">xdb.referencedata</param>                  `<br /><br />Replaced with:<br /><br />`                  <!-- connectionStringName: The connection string name used to connect to the SQL server. (default: xdb.referencedata) -->                 <param name="connectionStringName">xdb.referencedata</param>​>                  `<br /><br /> |   
 | 369754 |
 | Marketing Foundation | ​`Sitecore.Xdb.Collection.Database.Sql.Azure.dacpac` has been deprecated and removed.<br /><br />You can use `Sitecore.Xdb.Collection.Database.Sql.dacpac` for both on-prem and Cloud deployments.<br /><br /> |   
 | 362586 |
 | Publishing | ​​​​Obsolete functionality and settings related to `auto smart publish` have been removed. |   
 | 92561 |
 | Sitecore.ContentSearch.Azure | ​In Sitecore XP 10.0.0, Azure Search is deprecated and will be completely removed ​in a future release​. If you are starting a new Sitecore project, we recommend that you use Solr as your search engine. |  |  |

## Breaking changes

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Marketing Foundation | The following segmentation rule condition has been removed:<br /><br />-   `Where Contact profile is marked consent revoked.`<br /><br />You should use this condition instead:<br /><br />-   `Where Contact profile for website is marked consent revoked.`<br /><br />​These changes were implemented because now it is possible to set contact consent for each individual website.<br /><br />​ |   
 | 386194 |
 | Marketing Foundation | ​The XConnect Client API has been extended with `ExecutionOptions` for every get operation. All the overloads with `ExpandOptions` have been deprecated and will be removed in the next release. |   
 | 403456 |
 | Marketing Foundation | ​​​In the the `sc.Xdb.Processing.Queue.SqlServer.xml` file, the `Xdb.Processing.Queue.IProcessingPool.Contact` and `Xdb.Processing.Queue.IProcessingPool.Interaction` service nodes have been removed.​ Registration of the services has been moved to the configuration classes and is now stored in separate files:<br /><br />-   `sc.Xdb.Processing.Queue.SqlServer.ProcessingPoolServices.Contact.xml`<br />-   `sc.Xdb.Processing.Queue.SqlServer.ProcessingPoolServices​.Interaction.xml`<br /><br /> |   
 |   
 |
 | Marketing Foundation | We have made the following changes to the `Sitecore.Xdb.Collection.Indexing.Rebuild.IRebuildStatusStorage` interface methods: ​<br /><br />-   `Task ​ReadStatus(CancellationToken ​cancellationToken)`​​ ​​​now requires ​a cancellation token as a parameter.​​<br />-   `Task WriteStatus(RebuildStatus rebuildStatus, CancellationToken cancellationToken)` returns `Task` instead of `Task` and also requires a cancellation token as a parameter.​​​​​<br /><br /> |   
 | 164399 |
 | Marketing Foundation | ​​​You can now stop, resume, and restart the xDB Search Index rebuild operation. Just run `Sitecore.XConnectSearchIndexer.exe` with one of the following parameters<br /><br />-   `PauseRebuild` - to pause the current rebuild operation.<br />-   `ContinueRebuild` - to resume the paused rebuild operation.<br />-   `RequestRebuild` - to cancel the current rebuild operation, if there is one, and start the rebuild process from the beginning.<br /><br /> |   
 | 164399 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Device Detection | ​​​​No service is registered for the `IRuleDeviceInformationManager` type.​ |   
 | 371074 |
 | Email Experience Manager | ​​​You cannot limit the number of sent messages per connection​​. |   
 | 371959 |
 | Email Experience Manager | ​Email campaign data is returned in UTC time​​. |   
 | 404085 |
 | Email Experience Manager | ​​​In the report view, the total number of contacts enrolled in a campaign only counts the contacts that were enrolled at the start of the campaign. |   
 | 405202 |
 | Email Experience Manager | You cannot use security restrictions on items in the core database​​ to hide dashboard buttons. ​​​ | 334062 |   
 |
 | Email Experience Manager | ​ |   
 |   
 |
 | Experience Analytics | ​​​The `Page` report breaks if the report contains a very large number of pages. | CS0179237, CS0182785, CS0183398 | 286978 |
 | Experience Editor | ​​​Parsing `ProfileCardsPanel.css` as a script​ causes a console error in the Experience Editor. | CS0180116, CS0180615, CS0182293, CS0184166, CS0186053 | 383089 |
 | Experience Editor | ​​​On Microsoft Azure, the Experience Editor does not load pages correctly when it tries to parse the `ProfileCardsPanel.css` file. | CS0181466 | 399793 |
 | Experience Editor | ​​A desktop link to the Experience Editor always switches site to `Preview.DefaultSite​`. | CS0099900, CS0103795, CS0104844, CS0106572, CS0109737, CS0113837, CS0116640, CS0145517, CS0151555 | 119280 |
 | Experience Editor | ​​​​If you click on the border of a rich text field​, the `[No text in field] `placeholder is not removed.`` | CS0141115 | 229712 |
 | Experience Editor | In some situations, the Experience Editor does not warn about unsaved content and throws a console error.​ | CS0148183, CS0150669, CS0164441 | 292970 |
 | Experience Editor | If you use custom Experience Editor buttons, ​a `Null document` error occurs. ​​​ | CS0163951, CS0166745, CS0175971 | 348723 |
 | Experience Editor | If you navigate to a page from the Content Editor, ​`Explorer` mode doesn't work.​​​ | CS0178205 | 353631 |
 | Experience Editor | ​​​In the Experience Editor, when you add some renderings, the `Select the Associated Content` dialog box does not display the correct data source location. | CS0167162, CS0169026, CS0170167, CS0170416, CS0174254, CS0174447, CS0175804, CS0176425, CS0176935, CS0177105, CS0177240, CS0178422, CS0181108, CS0182753, CS0182754, CS0184006, CS0185947 | 359479 |
 | Experience Editor | ​​In the Experience Editor, the `CTRL+S (save)` shortcut does not work. | CS0179187 | 359703 |
 | Experience Editor | ​You cannot add a component to a placeholder inside a personalized component. ​​​ | CS0167208, CS0169648 | 369989 |
 | Experience Editor | ​In Internet Explorer, when you edit an email, the save functionality does not work correctly. ​​​ | CS0169620 | 371120 |
 | Experience Editor | ​In some situations, the Experience Editor redirects you to the wrong page.​ | CS0170043 | 372324 |
 | Experience Editor | ​​​​If you Lock and Edit a content item in the Experience Editor, it locks the wrong version of the datasource items on the page. | CS0178677 | 388305 |
 | Experience Editor | ​​​​The Field Editor may save changes in to the wrong field​. | CS0182295, CS0184070, CS0185668 | 399830 |
 | Experience Editor | ​When you save an item in the Experience Editor​, the `Item contains broken links `message is displayed.`` |  | 364390 |
 | Experience Optimization | ​​The `GetOptimizationRenderingChromeData` processor slows down the Experience Editor​. | CS0153285, CS0153950, CS0154799, CS0155113, CS0156868, CS0157759, CS0164441 | 316473 |
 | Experience Optimization | ​​​If Content Testing fails to read data from a search index​, ​the Content Editor is not rendered correctly. | CS0145488 | 255567 |
 | Experience Optimization | ​​​​The `Active personalized experiences` tab does not specify the language in Experience Editor links​. | CS0166330 | 357419 |
 | Experience Optimization | ​On MVC pages, in the `Test the Component` dialog, ​the Data source item is not shown in original combination​ of the test. | CS0168730 | 367295 |
 | Experience Optimization | ​​​​In an AB test, MVC data sources do not take languages into account​. | CS0167542 | 368931 |
 | Experience Optimization | ​In the `Active personalized experiences` list, p​ersonalized experiences are shown for fallback devices.​ | CS0176128 | 380440 |
 | Experience Optimization | ​​​​If `Read` access is denied to an item with personalized content, the `System.InvalidOperationException` appears on the `Active personalized experiences` page. | CS0176442 | 380922 |
 | Experience Optimization | ​In the `Preview` and `Start Test` dialog boxes, the `Experience Created` section shows blank text in every language UI except English​.​​​ | CS0144509 | 253334 |
 | Experience Optimization | ​The `Sitecore.ContentTesting.Model.xConnect` assembly references the `Sitecore.XConnect.Service` assembly, which is missing from the `bin` folder.​ | CS0144378, CS0185905 | 253648 |
 | Experience Optimization | ​The `Workflow, Remove Test Action fails if the test is not started​.​​​` | CS0148287 | 294335 |
 | Experience Optimization | ​A personalization test is not automatically applied to a website, ​when a test starts. | CS0158194 | 332151 |
 | Experience Optimization | ​​​The performance of the Experience Editor is degraded when there are a large number of Suggested Tests​. | CS0161826, CS0166385, CS0174047 | 343343 |
 | Experience Optimization | ​In the Experience Editor, personalization condition switching does not works correctly if the default condition is to hide the rendering.​​​ | CS0165712, CS0169662, CS0176030, CS0182170 | 356647 |
 | Experience Optimization | ​In the Experience Editor​, personalization condition switching does not work correctly if you edit one of the variations.​​​ | CS0170189, CS0176030, CS0177322, CS0179452 | 370620 |
 | Experience Optimization | ​​In a test, if a rendering does not use the current page item as its data source, an incorrect data source is set for the original test variant. | CS0177627 | 385897 |
 | Experience Optimization | ​Page Level tests do not display historical data when the test is cancelled.​​​​ | CS0176809 | 388557 |
 | Experience Profile | ​The `Birthdate` value is converted to the local timezone.​​​ | CS0107007 | 137803 |
 | Experience Profile | ​​​​The Experience Profile displays phone numbers incorrectly. | CS0133235 | 211911 |
 | Experience Profile | ​The Experience Profile does not display customized icons for page events.​​​ | CS0138375, CS0153515, CS0168306 | 222180 |
 | Experience Profile | ​The Experience Profile cannot perform a search if the search criteria contains the full name of a contact. | CS0137736, CS0138251, CS0159616, CS0175790, CS0180100, CS0181589 | 222698 |
 | Experience Profile | If a goal does not exist in the current language, the `Goals` report does not contain any data about the goal.​​​ | CS0160579 | 334063 |
 | Experience Profile | If a marketing automation plan does not have an English version​, the Marketing Automation campaign reports do not work correctly. ​​​ | CS0168727 | 370275 |
 | Experience Profile | ​ |   
 |   
 |
 | Headless Services | The GraphQL schema cache is not cleared on `publish:end` and `publish:end:remote` and this creates an erroneous GraphQL Schema on the CD instance after publishing. |   
 |   
 |
 | Headless Services | Non-thread-safe `Sitecore.LayoutService.Configuration.Configuration._serializableRenderingTypes` throw an Index was outside the bounds of the array error. | CS0183346, CS0177005 | 381462 |
 | Headless Services | User input is not properly sanitized in the `` LayoutServiceController`.` `` | CS0176854 | 381484 |
 | Headless Services | Improper use of the Dictionary Domain Translation API results in sub-optimal rendering performance. | CS0177686 | 383974 |
 | Headless Services | JSS apps that are hosted within SXA Tenants do not fully support Integrated GraphQL. |   
 | 382214 |
 | Headless Services | The Field Editor for JSS renderings ignores the field order. | CS0183073 | 405129 |
 | Headless Services | Generated links refer to the target item in the context language and not in the language specified in the body of GraphQL query. | CS0185250 | 410308 |
 | Headless Services | A high load may cause an `Index was outside the bounds of the array` error because the code is not thread-safe. | CS0165938, CS0166101, CS0166625, CS0175059, CS0176968, CS0180298 | 411030 |
 | Headless Services | The Layout Service does not properly serialize fields of the same item if the item is encountered more than once. |   
 | 420496 |
 | Item Buckets | ​The `Insert Media` dialog box's recently created/modified item selection list is empty. |   
 | 96241 |
 | Item Buckets Content Search | ​The `RunSyncProcess` processor uses the date when the latest version of the item was created.​​​ |   
 | 255058 |
 | Item Buckets Content Search | ​The `uiLaunchResult` pipeline is not used.​​ |   
 | 374433 |
 | Language fallback | ​​​​DefaultLanguageFallbackStrategy multi-thread processing causes locks​. |   
 | 185029 |
 | Language fallback | ​​​​If there is a lock on the `LanguageFallback` item, you cannot create a new language version​. |   
 | 156205 |
 | Layouts and renderings | ​​​The `Broken Links` dialog box throws an error when you try to delete an item that has been added as the data source of a rendering. |   
 | 257538 |
 | Layouts and renderings | ​​In the `Select the Associated Content` dialog box, if you click `Browse​`, the content tree is not expanded to the current item. |   
 | 360037 |
 | Links | ​​The `Remove links` functionality creates a language version of the target item in the context language. |   
 | 221558 |
 | Links | ​​​​The `useDisplayName` parameter in Link Manager is ignored when generating and resolving URLs for media items. |   
 | 96207 |
 | Links | ​In an MVC view, ​if the `Description` field for a `General Link"`field is empty, the external link is not shown. |   
 | 95828 |
 | Links | ​​​​The `General Link` field ignores the value of the `Content tree - Item names` setting. |   
 | 211477 |
 | Links | ​​​​In the Rich Text Editor, the `Insert Sitecore Link` dialog box ignores `Content tree - Item names` setting. |   
 | 290268 |
 | Links | ​The Link Manager generates links with an incorrect hostname or item path if the `AlwaysIncludeServerUrl` and `SiteResolving` settings are set to `true`. ​ |   
 | 393126 |
 | Links | ​​In a multi-site environment, if the `AlwaysIncludeServerUrl` setting is set to `true`, Link Manger generates links that contain a port number. |   
 | 385757 |
 | Links | ​​​​Cross-site links contain the `sitecore/content/` item path if the `TargetHostName` setting is empty and the `hostName` setting contains a wildcard. |   
 | 400699 |
 | Login | ​​​A logged-in user is identified as `sitecore\Anonymous` on the `KickUser.aspx` page. | ​ | 364166 |
 | Login | ​The `CORE_SC_TICKET` value is not cleared from the `Properties` table when the session expires. ​ |   
 | 320452 |
 | Login | ​​​​The `String or binary data would be truncated. The statement has been terminated.` exception occurs when logging in to Sitecore. |   
 | 227832 |
 | Login | ​​​If you boost the number of users, Sitecore does not refresh the number of users. |   
 | 365898 |
 | Login | ​​​​The current user is shown as `extranet\anonymous` when `Preview.AsAnonymous=false`. |   
 | 340140 |
 | Login | ​​​If you use Federated Authentication, ​the `extranet\Anonymous` user is treated as Sitecore client user. |   
 | 366550 |
 | Marketing Automation | ​Marketing Automation load contacts and interactions when there is not an inactive or active plan. |   
 | 411923 |
 | Marketing Automation | The `Timeout` worker retrieves all the data in one go.​ |   
 | 353642 |
 | Marketing Automation | ​​​The `EnableWebHost` setting is not optional and is only used for containers - this is problematic when upgrading to Sitecore 10.0. |   
 | 412454 |
 | Marketing Automation | ​​​The `Select a list` drop-down list does not contain the contact count as a second column. |   
 | 147622 |
 | Marketing Automation | ​​​​Campaign start and end dates are not validated in terms of each other. |   
 | 353793, 200819 |
 | Marketing Automation | ​There is insufficient validation of input in marketing automation campaigns. |   
 | 253012, 253013, 253014 |
 | Marketing Automation | ​There are no health checks for the Marketing Automation Engine service, the Operation services, and for the Reporting services. |   
 | 79006, 377974, 385655. |
 | Marketing Automation | ​​​If an marketing automation plan is copied, its `ActivityID` is no longer unique. |   
 | 407939 |
 | Marketing Automation | ​If contacts are enrolled in a marketing automation plan using `EnrollInPlanDirect with activity`, they are not included in the enrolled contacts count. ​ |   
 | 405202 |
 | Marketing Automation | ​​​A SQL server communication error is thrown on xdbautomationworker_1 after engine start​ |   
 | 410683 |
 | Marketing Automation | ​Profile values that are set by a Marketing Automation campaign are excluded from pattern matching​​. |   
 | 353567 |
 | Marketing Automation | ​​​If the number of Marketing Automation plans is too big​​, a 404.15 response is returned from xConnect. |   
 | 387156 |
 | Marketing Automation | ​​​Marketing Automation campaigns are not shown in the `Campaign activity triggered` listener if the user's "Default Content Language" differs from the default one​​​. |   
 | 390648 |
 | Marketing Automation | ​​​If several plans were created from one template​​, the list of contacts which are currently in a state is incorrect. | 368758 |   
 |
 | Marketing Foundation | In an extra small environment on Azure, when there is more than a million contacts in the collection database, rebuilding the xConnect search index overloads the overall platform.​ |   
 | 369962 |
 | Marketing Foundation | ​If there is a large amount of data coming in background, the index rebuild process cannot be completed. |   
 | 351442 |
 | Marketing Foundation | When the indexer shuts down during a rebuild, a `System.OperationCanceledException` occurs.​​​ |   
 | 349866 |
 | Marketing Foundation | ​In Sitecore XP 9.3 Azure deployments with the default settings, rebuilding the xConnect search index can overload the platform.​ ​​​ |   
 | 369962 |
 | Marketing Foundation | On Azure, the ​indexer throws exceptions if the xConnect model has a custom collection whose type is defined with the [DoNotIndex] attribute.​ |   
 | 377726 |
 | Marketing Foundation | ​​​On SolrCloud, if Zookeeper is down, xConnect search queries can return incomplete search results. |   
 | 220903 |
 | Marketing Foundation | ​The default connection strings for the on-premise CM role do not contain two separate connection strings to the `xconnect.collection` and `xconnect.search` instances. |   
 | 182962 |
 | Marketing Foundation | ​​​The default connection strings for the Marketing Automation role do not contain two separate connection strings to the `xconnect.collection` and `xconnect.search` instances. |   
 | 394716 |
 | Marketing Foundation | ​​You cannot configure the `Max Pool Size` parameter for connection strings to database shards. |   
 | 367702 |
 | Marketing Foundation | ​The length of the `User Agent` is reduced if it exceeds the max length size.​​​ |   
 | 334928 |
 | Marketing Foundation | ​​When you delete a segment in List Manager, it is not deactivated in the reference data. |   
 | 367140 |
 | Marketing Foundation | ​​​​The `Sitecore.Analytics.XConnect.DataAccess.Pipelines.ConvertToXConnectInteractionPipeline.ConvertToXConnectInteractionProcessor.                 ProcessGetUserAgentInfo(...)` method throws ​an exception when `DeviceDetection.Enabled` is set to `false`. |   
 | 324442 |
 | Marketing Foundation | ​The `Longitude/Latitude` personalization conditions are string-based and do not support numeric operators. |   
 | 94731 |
 | Marketing Foundation | The default value of `Analytics.LogLevel` setting may result in a very large interaction record being added to the log file and can degrade performance.​​​ |   
 | 356547 |
 | Marketing Foundation | ​The `Sitecore.Analytics.RobotDetection.layouts.system.VisitorIdentificationCss.OnInit()` method throws a `NullReferenceException` if tracking is disabled for a website​.​ |   
 | 210355 |
 | Marketing Foundation | When out-of-proc session state provider is configured, assigning multiple profile cards and percentages throws a serialization exception. ​​​ |   
 | 187252 |
 | Marketing Foundation | ​​​The `ExcludeRobots` functionality is case-sensitive​​. |   
 | 368828 |
 | Marketing Foundation | The exclude robot functionality does not take the `Analytics.ForwardedRequestHttpHeader` setting into account​.​ |   
 | 149102 |
 | Marketing Foundation | ​​​An empty campaign query string causes tracking to fail and throws an exception. |   
 | 374886 |
 | Marketing Foundation | ​A race condition causes the SQL session state provider GetApplicationId stored procedure to fail​. |   
 | 307714 |
 | Marketing Foundation | The page event rule is processed twice when the event is triggered on media requests​.​​​ |   
 | 158800 |
 | Marketing Foundation | ​The `Sitecore.Analytics.Pipelines.InitializeTracker.Robots.SetRobotSessionTimeout` method throws a `NullReferenceException` when it is called on a Content Management server.​ |   
 | 302163 |
 | Marketing Foundation | ​​​Rebuilding the `MarketingAssets` index causes errors related to the `boost` attribute​. |   
 | 108145 |
 | Marketing Foundation | The batch size changes dynamically during Search cursor iteration and overloads the `IEntityBatchEnumerator<TEntity>.MoveNext(batchasize)` method.​​​ |   
 | 152435 |
 | Media | ​When you upload a media item, the file extension of the media item can be truncated.​ |   
 | 385618 |
 | Media | ​​​​In a new language, the first uploaded image and folders are always in EN language. |   
 | 96576 |
 | Media | ​​If you insert a media path based URL as the source of an image, the URL is treated as a broken link​. |   
 | 152589 |
 | Media | ​In the Image Editor, the `Crop/Vertical/Horizontal/Rotate Right/Rotate Left/Resize` functionality throws exceptions. ​​​ |   
 | 134934 |
 | Media | ​​​​If you use the `General Link` field to upload an image, it can create an incorrect language version of the media item. |   
 | 380101 |
 | Miscellaneous | ​​​In the `OData Item Service`, `@odata.count` does not return the correct number of records. |   
 | 368887 |
 | Miscellaneous | ​​The `LayoutDeltaCache` can cause a memory leak. |   
 | 382489 |
 | Miscellaneous | ​​The serialization log files contain incorrect error messages. |   
 | 374785 |
 | Miscellaneous | ​​​If an item contains two fields with an identical name, ​the `Export / Import Languages` feature does not work correctly. |   
 | 195481 |
 | Miscellaneous | ​​If the `Item name / Display name` of an item contains special characters, it is double-encoded. |   
 | 393368 |
 | Miscellaneous | ​In the Experience Editor, when you ​open the rich text editor, it deletes the first ``<p>`` tag in the field. | CS0180966, CS0182294, CS0182909, CS0185564 | 395536 |
 | Miscellaneous | ​​​​The `LinkManager.GetItemUrl` method returns the wrong site if the hostname strings are included in each other​. |   
 | 177155 |
 | Miscellaneous | ​​In Sitecore XP 9.1 and 9.2​, the CD instance refers to the `core` database. |   
 | 374407 |
 | Miscellaneous | ​​​​Reports use the item name instead of the display name for goals. | CS0176007 | 386074 |
 | Miscellaneous | ​​​​The `#` symbol is duplicated when it is entered it as a fragment identifier. |   
 | 405403, 406741 |
 | Miscellaneous | ​​The colon `(:)` character that is used in the Sitecore XP 9.x appSettings configuration is not supported in helm/yaml. |   
 | 408273 |
 | Miscellaneous | ​​​​`IsNewUserAllowed` causes a conflict for non-shell site users. |   
 | 391850 |
 | Path Analyzer | ​Somerecords are stuck in the generic pool and do not get processed. | CS0157171 | 336049 |
 | Path Analyzer | ​​​Some services cannot be retrieved from the default conditions and this results in inaccurate reports. | CS0161807 | 340113 |
 | Path Analyzer | ​If the `Webvisit` facet does not have a `SiteName` defined, some errors are written to the log file. | CS0175006, CS0179995 | 377560 |
 | Platform | The `BytesToFree` size is not correctly adjusted for entries that are larger than the average cache entry size.​ |  | 395538 |
 | Platform | ​Duplicate tags are created for consecutive executions of the automated Cortex Content Tagging process.​ |   
 | 401635 |
 | Platform | ​​​​The `User Role` condition does not check if the user has indirect membership of any other roles​. |   
 | 98791 |
 | Platform | ​​​​When you restore a recyclyed item, the `Link` database is not updated. |   
 | 96392 |
 | Platform | ​The `ClientDataStore.CompactData` method is not optimized to clean up records in batches.​ |   
 | 176278 |
 | Platform | ​​​The CD instance makes requests to the `core` database which has been removed. |   
 | 286464 |
 | Platform | ​​Links are built with `//` between the server and language: `https://sc930.sc//en/`. |   
 | 381029 |
 | Platform | ​​​​The performance of the `My Items` dialog is very poor.​ |   
 | 332061 |
 | Platform | ​XHTML validation can fail. |   
 | 95064 |
 | Platform | ​​​​The performance of the item cloning functionality is poor. |   
 | 364962 |
 | Platform | ​​The performance of the `Sitecore.Shell.Applications.ContentEditor.RecentDocuments` class is poor. |   
 | 231800 |
 | Potential security vulnerabilities | ​The component art grid​ control does not work in IE. |   
 | 393178 |
 | Preview | ​​​​If you preview of an item on a date that is outside the publishing restrictions after restarting IIS, the default site is shown. |   
 | 355599 |
 | Publishing | ​​A cloned item that is not in the `Final` workflow state can be automatically published if the `InheritWorkflowData` setting is set to `true`. |   
 | 116954 |
 | Publishing | ​​The publishable time is updated automatically when the time zone in the `ServerTimeZone` setting differs from the OS time zone.​ |   
 | 397390 |
 | Publishing | ​The `Publishing Settings` dialog box changes the timing of publishing restrictions. |   
 | 319710 |
 | Publishing | ​​​If you install the Sitecore Publishing Service and you enable the `Sitecore.Owin.Authentication.Enabler.config` file, the `Publishing` window does not display `Languages` and `Targets`. |   
 | 347553 |
 | Serialization | In the `JobStatus.LogInfo` method, ​the `Translate.TextByLanguage` call slows down deserialization. |   
 | 96704 |
 | Sitecore Azure | ​​​​Invalid properties are configured for `Sitecore.Cloud.ApplicationInsights.Logging.Log4NetAppender`.​​ | CS0175865 | 380775 |
 | Sitecore Azure | ​​​​​​Stacktrace is not registered in the trace messages for errors​​. | CS0166838, CS0170305, CS0176323 | 356750 |
 | Sitecore.ContentSearch | ​​If SolrCloud uses a private network​, an exception is thrown. |   
 | 355209 |
 | Sitecore.ContentSearch | ​​If `DisableDatabaseCaches` is set to `true`, incorrect item data is sometimes indexed. |   
 | 155383 |
 | Sitecore.ContentSearch | ​Search requests fail when they request the maximum number of search results from SolrCloud​. ​​​ |   
 | 169804 |
 | Sitecore.ContentSearch | ​In Sitecore XP 8.2 and 9.0, the `*_t_pl` dynamic field is not added to the Solr schema file​. ​ |   
 | 195407 |
 | Sitecore.ContentSearch | ​​​​Language fallback items are not deleted from the `Web` index​. |   
 | 220361 |
 | Sitecore.ContentSearch | ​The search index is always optimized after a rebuild and ignores the `ContentSearch.Solr.OptimizeOnRebuild.Enabled` setting​. ​ |   
 | 235313 |
 | Sitecore.ContentSearch | ​Solr does not work when the `SendPostRequests` setting is set to `true`.​​​ |   
 | 288837 |
 | Sitecore.ContentSearch | ​​Item-level boosting does not work with Solr​. |   
 | 332968 |
 | Sitecore.ContentSearch | ​Indexing media items with the `.doc<7code> extension can causes indexing issues​.​` |   
 | 334381 |
 | Sitecore.ContentSearch | ​Personalization is disabled in the Sitecore 9.1.1 XM1 topology​. ​​​ |   
 | 334513 |
 | Sitecore.ContentSearch | ​​In some scenarios, the ​`ContentSearch.Indexing.DisableDatabaseCaches` setting disables the caches for read operations​. |   
 | 361332 |
 | Sitecore.ContentSearch | ​Sitecore XP does not always clean up the `\App_Data\mediaIndexing` folder​.​​​ |   
 | 364907 |
 | Sitecore.ContentSearch | ​Fields cannot be added to the index because here is no method filter on the `Sitecore.ContentSearch.Linq.QueryableExtensions` type.​​​ |   
 | 375204 |
 | Sitecore.ContentSearch | When you rebuild an index, if a media item throws an exception, the whole batch gets discarded​.​ |   
 | 380816 |
 | Sitecore.ContentSearch | ​If least one Sitecore index is non-initialized, the​ `IndexingStateSwitcher` does not resume indexing.​ |   
 | 385114 |
 | Sitecore.ContentSearch | ​If you use solr cloud with basic authentication, the index summary does not appear in the `Index Manager`.​​​ |   
 | 386057 |
 | Sitecore.ContentSearch | Spatial search is implemented incorrectly​.​ |   
 | 388367 |
 | Sitecore.ContentSearch | ​If you use Solr Cloud, the `Index Manager` hangs and throws exception and Sitecore cannot access the single nodes​.​​​ |   
 | 389225 |
 | Sitecore.ContentSearch.Azure | ​​​​The `GetFacets` request retrieves search results. | CS0177956 | 388290 |
 | Sitecore.ContentSearch.Azure | ​​​Search using multiple words return results that do not match the whole search term. ​ | CS0161906, CS0158129 | 326530 |
 | Sitecore.ContentSearch.Azure | ​​​When you add fields to `CloudSearchIndexSchemaBuilder`​, it places an unwanted lock. |   
 | 356554 |
 | Sitecore.ContentSearch.Azure | ​An `AzureSearchServiceRESTCallException` is throw when you exclude an item and the index does not exist​.​​​ | CS0174770 | 360061 |
 | Sitecore.ContentSearch.Azure | ​​The `CloudSearchIndexSchemaBuilder` is not marked as public​. | CS0140537 | 231068 |
 | Sitecore.ContentSearch.Azure | ​If you filter with a facet that contains double quotes an error occurs. ​ |   
 | 373926 |
 | Sitecore.ContentSearch.Azure | ​​​​The Sitecore Azure Search provider ​​ allows you to add the Georgian language but it is not supported by the Azure Search Service. | CS0167771, CS0167865 | 360530 |
 | Sitecore.ContentSearch.Azure | ​When you join queryable expressions with `Union`, they are grouped incorrectly.​​​ |   
 | 196855 |
 | Sitecore.ContentSearch.Azure | ​​The single quote character is not escaped in Azure Search​ queries. | CS0179077, CS0183775 | 391335 |
 | Sitecore.ContentSearch.Azure | ​The `CloudFieldNameTranslator.StripKnownExtensions` method is slow and allocates too many objects​​.​ | CS0169165 | 366922 |
 | Sitecore.ContentSearch.Azure | The `index-catalog` index name is not customizable​.​​​ | CS0148742,CS0159671,CS0160467,CS0168262,CS0168270,CS0179918 | 293493 |
 | Sitecore.ContentSearch.Azure | The `SearchCloudIndexName` property is private and prevents you from resolving the actual Azure search index name​.​ | CS0151385,CS0156561 | 324094 |
 | Sitecore Forms | ​​​​If you submit a form when the IsAjax checkbox has not been selected, a ​`NullReferenceException` occurs. | CS0181393 | 397040 |
 | Sitecore Forms | ​​Sitecore Forms fields are deleted when you save a form​. | CS0177986, CS0179380 | 389671 |
 | Sitecore Forms | Field validation can be bypassed by removing related input values​.​ | CS0179002 | 391875 |
 | Sitecore Forms | ​​​​File upload validations don't work when you navigate back and forth between form pages​. |   
 | 369420 |
 | Sitecore Forms | ​​​Unexpected behavior occurs in multi-page forms​. | CS0149887 | 303423 |
 | Sitecore Forms | ​​​​Validation of a hidden from section causes inconsistent behavior.​ | CS0159830, CS0169312, CS0170054, CS0175340, CS0179412, CS0181109 | 341616 |
 | Sitecore Forms | ​The documentation about adding a form to web page is incorrect​.​ | CS0165190 | 350745 |
 | Sitecore Forms | ​If you add a field after you add the `Redirect to Url` submit action, ​the URL parameter is not saved. |   
 | 363414 |
 | Sitecore security | ​​SQL errors occur when you move security data to a different database​.​​ |   
 | 371171 |
 | Solr | ​​​The `indexing:start:remote` and `indexing:end:remote` events are not raised. |  | 411772 |
 | Solr | ​Subscribing to index events through the configuration file does not work.​​ |  | 411914 |
 | SPEAK | ​​If you use the SPEAK 2.0 `Grid` control, an exception is thrown. |   
 | 214239 |
 | SPEAK | ​​​​If the default `Home` item is deleted​, the `Select media` dialog box does not show any images. |   
 | 359966 |
 | Templates | ​​​The `Standard Values` cache stores outdated data if template inheritance is used. |   
 | 119290 |
 | Universal Tracker | ​​​Even though CORS is enabled out of the box, you cannot configure origins in the `Universal Tracker`. |   
 | 333574 |
 | Workflows | ​​​​The `ShowConfigLayers.aspx` page ignores the search parameter​. |   
 | 250256 |
 | Workflows | ​When you copy an item in the content tree, the workflow state of the item's children is not reset. |   
 | 104112 |
 | Workflows | ​​The `Heartbeat.aspx` file logs the connection string password​. |   
 | 118985 |
 | Workflows | ​​​`SC_TICKET` entries are never cleared from the `Properties` table​. |   
 | 223702 |
 | Workflows | ​​​​The width of the `Validation Results` dialog box is inconsistent. |   
 | 257381 |
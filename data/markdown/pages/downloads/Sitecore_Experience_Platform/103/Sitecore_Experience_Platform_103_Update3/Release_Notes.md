---
title: 'Release notes'
description: ''
---
**2025-08-01:** Released Sitecore Experience Platform 10.3.3 rev. 012336

Return to the [Sitecore Experience Platform 10.3.3](/downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103_Update3) release page.

This update release contains important updates to 3rd party dependencies, and a roll-up of functional and security vulnerability fixes.
 
## Improvements
| Context | Description | Ref. |
| --- | --- | --- |
| Solr | The Sitecore XP 10.3.3 installation now supports and requires Solr 9.8.1, which replaces former version 8.11.2 that has reached end of life. | PDXP-5536 |
| Solr | Improved the wait functionality associated with Solr service availability when installing via the Sitecore Installation Framework (SIF). Previously, the process waited a fixed period of time. Now, it waits until the Solr server is fully available before proceeding. This change is implemented in the Solr-SingleDeveloper.json file. | 625635 |
| Identity Server | The Sitecore XP 10.3.3 installation now installs Sitecore Identity Server 8.0.16 by default, instead of former version 7.1.11. Identity Server 8.0.16 includes the update of .NET 6 to 8. Ref: [KB1003513 - Microsoft .NET 6 end of support](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003513). | PDXP-6035 |
| Application Insights | The Sitecore XP 10.3.3 installation now requires configuring Connection Strings in Microsoft's Azure Monitor - Application Insights feature, which replaces the former Instrumentation Keys that are no longer supported. To assist in implementing this change, a new set of ARM Templates are provided. See ARM Templates [Sitecore 10.3.3](https://github.com/Sitecore/Sitecore-Azure-Quickstart-Templates/releases/tag/2.15). | 621268 |
| Deployment | Added optional automation to simplify installing Sitecore XP cumulative hotfixes, for example Sitecore XP 10.3.4 pre-releases. Added automated application of binding redirects and patching of config files where applicable. Ref: Documentation/Optional deploy automation/readme.md available with each [KB1002844 - Cumulative hotfix for Sitecore XP 10.3](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002844) package. | 598738 | 
| Containers | As part of the separate but related release of mssql-developer images, added ability to configure a TLS certificate for MSSQL. | 625457 |
| Application Tracking | Introduced a lightweight, secure tracking script to help us better understand how Sitecore’s management UIs are used. This will help us ensure future enhancements are guided by real-world usage patterns. No content, website data, or website visitor information is tracked. Tracking respects privacy settings and licensing controls. | PDXP-5587 |
| Security | Security enhancements | 619349, 628372, 624115/PDXP-1052/PDXP-7591, 629358/PDXP-5517, PDXP-7180, PDXP-7886, PDXP-11391 |

## Breaking changes
| Context | Description | Ref. |
| --- | --- | --- |
| Deployment | Dependent Sitecore Identity Server module version 8.0 now requires encrypted communication with SQL Server. Ref: see the *Encrypted communication with SQL Server* section in the Sitecore XP 10.3.3 installation guide applicable for your deployment topology. | PDXP-1657 |
| Deployment | The installation of Sitecore Identity Server 8.0 introduces a database schema change , which requires running an Identity Server database upgrade script. Ref: [Sitecore XP 10.3.3 Update Release Installation Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore_Experience_Platform_10.3.3/SitecoreXP_10.3.3_Update_Release_Installation_Guide.pdf). | PDXP-1657 |
| Application Insights | Application Insights now expects a Connection String, instead of an instrumentation key. | 621268 |
| Solr | Solr container images (e.g. solr-init) released with Sitecore XP 10.3.3 require Solr 9.8.1, instead of the former Solr 8.11.2. To continue consuming the latest Sitecore XP 10.3 container image that supports Solr 8.11.2, you must update the environment variable with a longer version-specific tag so your build fetches the desired container image version. Caution: SXP monthly OS patches are no longer delivered for older container images, which means Solr 8.11.2 is no longer supported in SXP 10.3 container images. | PDXP-2413 | 
| Solr | Deploying with a new Solr container image released with Sitecore XP 10.3.3 also requires using the corresponding new [Sitecore 10.3 Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.3.3.0xxxxx.xxxx). Both the new image and container deployment package are required to align your deployment with the required Solr version 9.8.1. | PDXP-9865 |
| Solr | With the improved Solr wait functionality (stated above), the `SolrServiceStartTimeout` parameter has been removed from the `Solr-SingleDeveloper.json` file that is used installing Solr via SIF. | 625635 |
| Solr | The `maxShardsPerNode` parameter, applicable to SolrCloud mode, has been removed as of Solr 9. Ref: [Major Changes in Solr 9](https://solr.apache.org/guide/solr/latest/upgrade-notes/major-changes-in-solr-9.html#:~:text=maxShardsPerNode%20parameter%20has%20been%20removed%20because%20it%20was%20broken%20and%20inconsistent%20with%20other%20replica%20placement%20strategies.%20Other%20relevant%20placement%20strategies%20should%20be%20used%20instead%2C%20such%20as%20autoscaling%20policy%20or%20rules-based%20placement). | PDXP-8330 |

## Resolved issues
| Context | Description | Ref. |
| --- | --- | --- |
| Content Editor | When the `RequireLockBeforeEditing` setting is set to false, non-admin users with appropriate permissions still see the "Details" and "Reset" buttons in the Presentation ribbon disabled. This prevents them from editing presentation details, despite the configuration explicitly allowing edits without locking the item. | 438400 | 
| Content Editor | When a Droplist field uses a query-based source (e.g., with query axes or @@ syntax), selecting and saving a value results in a false broken link warning in the Content Editor. | 612595 |
| Content Editor | Checkbox and checklist fields unintentionally unchecked or marked as modified due to race condition in Content Editor Search navigation. | 620009 |
| Content Editor | In Live Mode, Sitecore fails to resolve item paths correctly, leading to incorrect or broken URLs when rendering content. | 624166 |
| Content Editor | An new log folder gets created when a new language is added in the Content Editor, instead of using the existing log folder. This issue occurs in Azure Web App deloyments of Sitecore XP. | 624954 |
| Experience Editor | When a rendering that has been personalized is deleted without removing its references, attempting to open the associated page in Experience Editor results in a yellow error screen. This occurs because the editor fails to handle the broken link gracefully, throwing an exception due to a null ContentDatabase. | 384689 | 
| Rich Text Editor | Internal link to a versioned media item added in RTE contains the wrong language using Sitecore Link via Search when `languageEmbedding` setting to "always". | 592301, 592307 |
| Rich Text Editor | The ``<br>`` tag causes validation errors in the Rich Text Editor field. | 626064 |
| Media Library | The `MediaRequestHandler` ignores the value of `MediaResponse.Cacheability` setting. | 618639 |
| Media Library | Incorrect Content-Type header returned by Media Library search request. | 626450 |
| Search | `SwitchOnRebuildSolrCloudSearchIndex` should use Solr aliases to determine active and rebuild collections instead of local properties. | 484103/PDXP-697 |
| Search | Due to a race condition in the Solr indexing process, the _content field may inconsistently omit text field values when indexing items in parallel. This leads to incomplete or inconsistent full-text search results, especially in large-scale content structures with many fields and high concurrency settings. | 620439 |
| Search | Search Operations ignore the quotation marks. | 626523/PDXP-6246 |
| Sitecore Kernel | Requests with illegal characters in the URL cause the `XFrameOptionsHeaderModule` to throw an unhandled exception, resulting in a 500 error instead of a proper 404 response. | 290139 |
| Sitecore Kernel | Adding HTML cache records is not thread safe. | 536792 |
| Sitecore Kernel | Deleting a large number of archived items via the Recycle Bin UI or Archive API is slow and prone to SQL timeouts because it's done in a single large transaction, which rolls back entirely if interrupted. | 559176 |
| Sitecore Kernel | Media URLs containing encoded characters (e.g. hyphens for spaces) are not properly decoded during resolution. This causes Sitecore to fall back on a slow traversal of the Media Library using `MixedItemNameResolver`, which significantly degrades performance in large, deeply nested media structures. | 580597 |
| Sitecore Kernel | When using the `RemovePrefix(string)` method on a ``Sitecore.Caching.Generics.Cache<TKey>`` instance under high concurrency, significant lock contention can occur due to the use of `GetCacheKeys()`, which locks the cache. | 619146 |
| Sitecore Kernel | When retrieving an item in Edit mode, Sitecore incorrectly stores the resolved version (typically the latest publishable version) in the main item cache instead of the `FilteredItemsCache`. This causes subsequent requests in Normal mode to return the wrong version (e.g., version 1 instead of version 2). | 622654 | 
| Sitecore Services Client | The Sitecore OData API (`/sitecore/api/ssc/aggregate/content`) returns child items even when those items do not have a version in the requested language (`sc_lang`), resulting in inaccurate API responses. | 623948 |
| Publishing | Pages may disappear after publishing. | 624167 |
| List Manager | When a user edits an existing segment in a segmented list and modifies its rules, the "Save" button becomes inactive, preventing the user from saving the changes. | 628079 |
| Analytics | The `/fieldtracking/register` endpoint is incorrectly logged as a page view event in Experience Analytics when users interact with form fields. This inflates analytics data with non-navigational events, leading to inaccurate reporting and cluttered page view metrics. | 601123, PDXP-6822 |
| Optimization | The `ModularTrafficAllocation` processor can cause a lock convoy under heavy load due to inefficient concurrency handling in its visit count storage mechanism. | 576714 | 
| Optimization | `ExperienceOptimization.ContentTesting` throws a `NullReferenceException` when reference.RenderingItem is null. | 625158 | 
| Translation | Under high load, frequent use of `Sitecore.Globalization.Translate.TextByDomain(...)` to retrieve dictionary values can cause a lock convoy, due to synchronized access to a shared Hashtable in DefaultTranslate.Domains. | 370121 |
| Email Experience Manager | Anchor fragments (#) in links are stripped during email dispatch, causing links to ignore in-page anchors. This is due to the `MapHostname` processor not preserving the fragment when rewriting URLs. | 458558 | 
| Email Experience Manager | If the CM instance is restarted during email dispatch, the campaign remains stuck in the "Sending" state. Attempts to pause it show a confirmation, but the status doesn't update to "Paused", and the "Resume" button is missing, preventing recovery. | 617089 |
| Device Detection | Under high load, Sitecore's device detection engine can exhaust available threads due to low concurrency settings and disk-based lookups. This leads to unhandled exceptions and crashes the instance. | 618843 |
| Remove Broken Links | English version is created after Remove Broken Links admin tool is used. Running the tool causes a new English version to be created unintentionally. | 605862 | 
| Performance | `Sitecore.XConnect.Segmentation.SegmentationEngine.PerformSearch` lock statement blocks threads if the xConnect search response time is high. | 356688 |

## Known issues
| Context | Description | Ref. |
| --- | --- | --- |
| Solr | As part of deploying Solr 9.8 in cloud mode in an on-premises or Azure App Service deployment, when installing `SolrCloud-SitecoreConfigSets.json` a warning message may be logged during ConfigSets creation, for example: *Using default ZkACLProvider. DefaultZkACLProvider is not secure, it creates 'OPEN_ACL_UNSAFE' ACLs to Zookeeper nodes.* Previously when Solr 8.11 was deployed these messages were logged as debug messages. Now with Solr 9.8 they are instead logged as warnings. No action is required. No security vulnerability is exposed in your Sitecore XP deployment because the default the connection between Solr and embedded Zookeeper is internal. To prevent this warning message you could optionally configure more restrictive Access Control Lists (ACLs) for the Zookeeper communication. Ref: [ZooKeeper Access Control](https://solr.apache.org/guide/solr/latest/deployment-guide/zookeeper-access-control.html) reference guide. | 629266 |
| Solr | After updating Solr to 9.8.1, pivot faceting on fields using the `solr.SortableTextField field` type may return incorrect, partial, or missing facet results. This issue is specific to pivot faceting and does not affect flat (single-level) facets. Ref: [SOLR-16139](https://issues.apache.org/jira/browse/SOLR-16139). | PDXP-6446 |
| Solr | The discontinued `maxShardsPerNode` SolrCloud parameter, described above in the *Breaking changes* section, continues to be available in on-premises files `SolrCloud-Sitecore-Collections.json` and `SolrCloud-XConnect-Collections.json`, and as an environmental variable for the `solr-init` container. This parameter will be removed in an upcoming Sitecore XP 10.4.x Update release and in an upcoming container image monthly OS patch. | PDXP-8330 |
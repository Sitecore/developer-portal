---
title: 'Release Notes'
---
**2024-06-24:** Released Sitecore Experience Platform 10.4.1 rev. 012149

Return to the [Sitecore Experience Platform 10.4 Update-1](/downloads/Sitecore_Experience_Platform/104/Sitecore_Experience_Platform_104_Update1) release page.

This release is the first update to Sitecore XP 10.4. It contains important updates to 3rd party dependencies, and a roll-up of functional and security vulnerability fixes.
- [Improvements](#improvements)
- [Breaking changes](#breaking-changes)
- [Resolved issues](#resolved-issues)
- [Release dependencies](#release-dependencies)
- [Known issues](#known-issues)
 
## Improvements
| Context | Description | Ref. |
| --- | --- | --- |
| Solr | The Sitecore XP 10.4.1 installation now supports and requires Solr 9.8.1, which replaces former version 8.11.2 that has reached end of life. | PDXP-5536 |
| Solr | Improved the wait functionality associated with Solr service availability when installing via the Sitecore Installation Framework (SIF). Previously, the process waited a fixed period of time. Now, it waits until the Solr server is fully available before proceeding. This change is implemented in the Solr-SingleDeveloper.json file. | 625636 |
| Identity Server | The Sitecore XP 10.4.1 installation now installs Sitecore Identity Server 8.0.16 by default, instead of former version 7.1.11. Identity Server 8.0.16 includes the update of .NET 6 to 8. Ref: [KB1003513](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003513). | PDXP-1710 |
| Application Insights | The Sitecore XP 10.4.1 installation now requires configuring Connection Strings in Microsoft's Azure Monitor - Application Insights feature, which replaces the former Instrumentation Keys that are no longer supported. Ref: [KB1003554](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003554). | 621268 |
| EXM | Updated `ChilkatDotNet48` to the latest version.  | 613745 |
| Deployment | For cumulative hotfixes, added optional automation to simplify installing SXP 10.4.x PRE builds. Added automated application of binding redirects and patching of config files where applicable; ref: Documentation/Optional deploy automation/readme.md available in each SXP 10.4.x cumulative hotfix package. | 598738 | 
| Containers | As part of the separate but related release of mssql-developer images, added ability to configure a TLS certificate for MSSQL. | 625457 |
| Security | Security enhancements | 619349, 624693, 628372, 624115/PDXP-1052/PDXP-7590, 629358/PDXP-5517, PDXP-7180 |

## Breaking changes
| Context | Description | Ref. |
| --- | --- | --- |
| Deployment | Dependent Sitecore Identity Server module version 8.0 now requires encrypted communication with SQL Server. Ref: see the *Encrypted communication with SQL Server* section in the Sitecore XP 10.4.1 installation guide applicable for your deployment topology. | PDXP-1657 |
| Deployment | The installation of Sitecore Identity Server 8.0 introduces a database schema change , which requires running an Identity Server database upgrade script. Ref: [Sitecore XP 10.4.1 Update Release Installation Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/104/Sitecore_Experience_Platform_10.4.1/SitecoreXP_10.4.1_Update_Release_Installation_Guide.pdf). | PDXP-1657 |
| Application Insights | Application Insights now expects a Connection String, instead of an instrumentation key. Ref: **ADD LINK** | 621268 |
| Solr | Solr container images (e.g. solr-init) released with Sitecore XP 10.4.1 require Solr 9.8.1, instead of the former Solr 8.11.2. To continue consuming the latest Sitecore XP 10.4 container image that supports Solr 8.11.2, you must update the environment variable with a longer version-specific tag so your build fetches the desired container image version. Caution: SXP monthly OS patches are no longer delivered for older container images, which means Solr 8.11.2 is no longer supported in SXP 10.4 container images. | PDXP-7765 | 
| Solr | Deploying with a new Solr container image released with Sitecore XP 10.4.1 also requires using the corresponding new [Sitecore Container Deployment Package](https://github.com/Sitecore/container-deployment/releases) **UPDATE LINK TO NEW CSP**. Both the new image and container deployment package are required to align your deployment with the required Solr version 9.8.1. | PDXP-9865 |
| Solr | With the improved Solr wait functionality (stated above), the `SolrServiceStartTimeout` parameter has been removed from the `Solr-SingleDeveloper.json` file that is used installing Solr via SIF. | 625636 |
| Solr | The `maxShardsPerNode` parameter, applicable to SolrCloud mode, has been removed as of Solr 9. Ref: [Major Changes in Solr 9](https://solr.apache.org/guide/solr/latest/upgrade-notes/major-changes-in-solr-9.html#:~:text=maxShardsPerNode%20parameter%20has%20been%20removed%20because%20it%20was%20broken%20and%20inconsistent%20with%20other%20replica%20placement%20strategies.%20Other%20relevant%20placement%20strategies%20should%20be%20used%20instead%2C%20such%20as%20autoscaling%20policy%20or%20rules-based%20placement). | PDXP-8330 |

## Resolved issues
| Context | Description | Ref. |
| --- | --- | --- |
| Content Editor | Collapsing sections in the Reset Field Values dialog throws an exception. | 95996 |
| Content Editor | The item path is not resolved correctly in live mode. | 624166 |
| Content Editor | Inserting an internal link for an image allows selecting media items only for non-admin users. | 624315 |
| Content Editor | An new log folder gets created when a new language is added in the Content Editor, instead of using the existing log folder. This issue occurs in Azure Web App deloyments of Sitecore XP. | 624954 |
| Media Library | The MediaRequestHandler ignores value of `MediaResponse.Cacheability` setting. | 618639 |
| Experience Editor | Content in the Device Simulator continues to flash and eventually the page displays error code: `STATUS_STACK_OVERFLOW`. | 619328, 624749 |
| Experience Editor | Accented characters are encoded when edited using the *'Field Editor Button'* in Experience Editor.  | 622482 |
| Experience Editor | HTML tags become html encoded in Experience Editor after a text change in single-line and multi-line text. | 623096 |
| Publishing | A publishing inconsistency occurs, caused by its processing order. | 96426 |
| Publishing | Pages may disappear after publishing. | 624167 |
| Publishing | Publishing an item may cause exceptions on remote instances: "Could not find configuration node: `databases/database[@id='master']`"  | 625976 |
| Language | The item fallback version provided in processor argument is not respected. | 609020 |
| Language | Changing the template of a media item with a single language and version from *unversioned* to *versioned* does not get implemented in the item's versions and language. | 621666 |
| Language | The StripLanguage processor creates languages as case-sensitive. | 624767 |
| Headless rendering | `Database.GetItem` returns null in `Sitecore.Links.UrlBuilders.Helpers.ItemPathBuilder.GetRelativePath` when `enforceVersionPresence` is true | 606303 |
| Headless rendering | The `MediaUrlBuilder` does not include a leading slash in the URL when `AlwaysExcludeVirtualFolder` is set to true. | 613683/PDXP-4621 |
| Performance | `Sitecore.XConnect.Segmentation.SegmentationEngine.PerformSearch` lock statement blocks threads if the xConnect search response time is high. | 356688 |
| Performance | A performance degradation is observed when resolving Standard Values token value for a fallback version of a cloned item. | 614821 |
| Platform | Sitecore XP 10.4.0 NuGet packages are missing third party dependencies. Ref: [KB1003598](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003598). | 627465 |

## Known issues
| Context | Description | Ref. |
| --- | --- | --- |
| Solr | After updating Solr to 9.8.1, pivot faceting on fields using the `solr.SortableTextField field` type may return incorrect, partial, or missing facet results. This issue is specific to pivot faceting and does not affect flat (single-level) facets. Ref: [SOLR-16139](https://issues.apache.org/jira/browse/SOLR-16139). | PDXP-6446 |
| Solr | As part of deploying Solr 9.8 in cloud mode in an on-premises or Azure App Service deployment, when installing `SolrCloud-SitecoreConfigSets.json` a warning message may be logged during ConfigSets creation, for example: *Using default ZkACLProvider. DefaultZkACLProvider is not secure, it creates 'OPEN_ACL_UNSAFE' ACLs to Zookeeper nodes.* Previously when Solr 8.11 was deployed these messages were logged as debug messages. Now with Solr 9.8 they are instead logged as warnings. No action is required. No security vulnerability is exposed in your Sitecore XP deployment because the default the connection between Solr and embedded Zookeeper is internal. To prevent this warning message you could optionally configure more restrictive Access Control Lists (ACLs) for the Zookeeper communication. Ref: [ZooKeeper Access Control](https://solr.apache.org/guide/solr/latest/deployment-guide/zookeeper-access-control.html) reference guide. | 629266 |
| Solr | The discontinued `maxShardsPerNode` SolrCloud parameter, described above in the *Breaking changes* section, continues to be available in on-premises files `SolrCloud-Sitecore-Collections.json` and `SolrCloud-XConnect-Collections.json`, and as an environmental variable for the `solr-init` container. This parameter will be removed in an upcoming Sitecore XP 10.4.x Update release and in an upcoming container image monthly OS patch. | PDXP-8330 |
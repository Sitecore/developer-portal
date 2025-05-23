---
title: 'Release Notes'
---
**2024-06-xx:** Released Sitecore Experience Platform 10.4.1 rev. 01xxxx

Return to the [Sitecore Experience Platform 10.4](/downloads/Sitecore_Experience_Platform/104/Sitecore_Experience_Platform_104) release page.

This release is the first update to Sitecore XP 10.4. It contains important updates to 3rd party dependencies, and a roll-up of functional and security vulnerability fixes.
- [Improvements](#improvements)
- [Resolved issues](#resolved-issues)
- [Release dependencies](#release-dependencies)
- [Known issues](#known-issues)
 
## Improvements
| Context | Description | Ref. |
| --- | --- | --- |
| Solr | The Sitecore XP 10.4.1 installation now requires Solr 9.8.1, instead of former version 8.11.2. | PDXP-5536 |
| Identity Server | The Sitecore XP 10.4.1 installation now installs Sitecore Identity Server 8.0.16 by default, instead of former version 7.1.11. Identity Server 8.0.16 includes the update of .NET 6 to 8. Ref: [KB1003513](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003513). | PDXP-1710 |
| Application Insights | The Sitecore XP 10.4.1 installation now requires configuring Connection Strings in Microsoft's Azure Monitor - Application Insights feature, instead of the former Instrumentation Keys. Ref: [KB1003554](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003554). | 621268 |
| EXM | Updated `ChilkatDotNet48` to the latest version.  | 613745 |
| Deployment | **DECIDE whether to include this - reword to clarify this is for cumulative hotfixes - find another doc source?** Added optional automation to simplify installing SXP 10.4.1 PRE builds; includes automated application of binding redirects and patching of config files where applicable; ref: Documentation/Optional deploy automation/readme.md available in each SXP 10.4.x cumulative hotfix package. | 598738 | 
| Security | **DECIDE whether to include this here - new SQL encryption requirement for IS8, for onprem, containers** | |
| Security | Security enhancements | 619349, 624693, 628372, 624115/PDXP-1052/PDXP-7590, 629358/PDXP-5517, PDXP-7180 |


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
| Headless rendering | **CONFIRM if applies to SXP, or only XMC** `Database.GetItem` returns null in `Sitecore.Links.UrlBuilders.Helpers.ItemPathBuilder.GetRelativePath` when `enforceVersionPresence` is true |606303 |
| Headless rendering | The `MediaUrlBuilder` does not include a leading slash in the URL when `AlwaysExcludeVirtualFolder` is set to true. | 613683/PDXP-4621 |
| Performance | `Sitecore.XConnect.Segmentation.SegmentationEngine.PerformSearch` lock statement blocks threads if the xConnect search response time is high. | 356688 |
| Performance | A performance degradation is observed when resolving Standard Values token value for a fallback version of a cloned item. | 614821 |
| Platform | Sitecore XP 10.4.0 NuGet packages are missing third party dependencies. Ref: [KB1003598](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003598). | 627465 |

## Release dependencies
| Dependency | Description |
| --- | --- |
| [Sitecore Identity Server 8.0.16](/downloads/Sitecore_Identity/8x/Sitecore_Identity_Server_8016) | The Sitecore XP 10.4.1 installation installs Sitecore Identity Server 8.0.16 by default. Ref: [SitecoreXP_10.4.1_Update_Release_Installation_Guide](**LINK**). | PDXP-1710 |
| [Sitecore Experience Accelerator 10.4](/downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1040) | **ASK DEPLOYMENT TEAM - explain SIA updates so existing SXA 10.4 works with Solr 9.8.1 - only when installed with SXP 10.4.1?? Include any actions or cautions to share. | PDXP-7775 |

## Known issues
| Context | Description | Ref. |
| --- | --- | --- |
| Solr | After updating Solr to 9.8.1, pivot faceting on fields using the `solr.SortableTextField field` type may return incorrect, partial, or missing facet results. This issue is specific to pivot faceting and does not affect flat (single-level) facets. Ref: [SOLR-16139](https://issues.apache.org/jira/browse/SOLR-16139). | PDXP-6446 |


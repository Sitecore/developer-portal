---
title: 'Release notes'
description: ''
---

**August 2024 – released Sitecore Experience Platform 10.3.2 rev. 010837**

This is a product update. Sitecore recommends that you upgrade to this release to apply the fixes and improvements implemented since the initial release of this product version.

- [New features/improvements](#new-featuresimprovements)
- [Resolved issues](#resolved-issues)
- [Dependency](#dependency)

## New features/improvements
 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Deployment | Set SQL 2019 as the default SQL Server version for SXP 10.3 Container deployments. | 616859 |
 | Deployment | Updated the Sitecore Installation Assistant to version 1.5.2, as part of supporting the SXP 10.3.2 Update release. This tool is available on the SXP 10.3.2 Downloads page; see *Installation Assistant for XM Scaled* and *Installation Assistant for XP Single*. | N/A |
 | Security | Enhanced security in product and 3rd party libraries to reduce potential vulnerabilities. | 483800, 588637, 590395, 606641, 609758, 617299 |

## Resolved issues
 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Experience Editor | After adding text in a multi-line text field, paragraph *p* tags display in a single line instead of displaying text in multiple lines. | 398289 |
 | Experience Editor | Simultaneous launch of Experience Editor in two browsers after restarting Sitecore instance can cause a crash in one of them. | 412499 |
 | Experience Editor | Duplicate renderings occur in the Experience Editor, add rendering dialog. | 573497 |
 | Experience Editor | The Experience Editor *Go* button incorrectly resolves the site. | 596216 |
 | Experience Editor | Publishing a new form, where the variable *Is Ajax* is unselected, results in the language being removed from the URL of the published form. | 600934 |
 | Experience Editor | No audit log is recorded when and item is locked/unlocked in the Experience Editor. | 601330 |
 | Experience Editor | No audit logs are added after creating a new item from the Experience Editor. | 601870 |
 | Media | Media uploaded with *Overwrite existing media items* and *Make uploaded media items versionable* does not correctly clear Shared fields. | 558081 |
 | Media | A copied or duplicated media blob gets deleted from the database if one of the copied/duplicated item is deleted. | 563054 |
 | Media | After replacing an image source in the Media Library, the former image is still displayed in the Rich Text Editor field. | 607329 |
 | Publishing | When publishing to Edge, multiple *Cache created* messages are displayed, one for each item rendered on the site. | 598796 |
 | Forms | *Your Changes have not been applied* dialog appears in a Form's *Email* field, even when no change has been entered in the field, when applying non-English languages. | 585622 |
 | Forms | The Forms database experiences a communication error with a *Timeout expired* error message. | 592211 |
 | Forms | Upon saving a form with files from filestorage results in a *Unable to access a closed stream" error. | 603638 |
 | Search | Unable to use Solr soft commits. | 97020 |
 | Search | Value of the `Search.ContentTreeSearch.MaxResults` setting is ignored. | 515248 |
 | Search | The original Solr approach for deleting documents from a Solr core, delete by Id, was incorrectly removed and replaced with delete by query. | 561884 |
 | Search | Upon cloning an item, its standard value tokens do not present the actual field value in the fallback language version. | 573972 |
 | Search | Unable to re-use `IQueryable<T>` for concurrent search query executions. | 576428 |
 | Search | The Search API may return incorrect results when executed under heavy system loads. | 578068 |
 | Search | The date range virtual field is not resolved to the Solr field during search. | 596145 |
 | Search | Increased CPU consumption when mapping Solr document fields to POCO class properties. | 603381 |
 | Experience Database | `SC_ANALYTICS_GLOBAL_COOKIE` continues to remain active even after the site visitor has revoked permission for the site to collect cookies. | 589304 |
 | Experience Apps - Content Testing | The LeaderBoard is empty when choosing it from the *Reports* | 597461 |
 | Email Experience Manager | The link from EXM to the intended item in the Content Editor gets corrupted if the item display name contains Danish characters, for example: å æ ø. | 366194 |
 | Email Experience Manager | Email campaign description does not support special characters. | 604409 |
 | Email Experience Manager | Changing ChilkatDotNet48 to v9.5.0.93 or later blocks sending emails from EXM. | 613745 |
 | Logging | No audit log record is added when user logs in to Sitecore. | 602417 |
 | Logging | No detailed audit logs are added when item is unlocked via *My Items > Unlock* and *My Items > Unlock All*. | 603209 |
 | Logging | Sitecore log messages are not generated upon making configuration changes, with the file appender type set to `RollingFileAppender`. | 609660 |
 | Logging | For Containers deployments, health checks can incorrectly report status as healthy; in `healthcheck.ps1` *ServiceMonitor* was previously replaced by *LogMonitor*, but some *ServiceMonitor* code remains that can cause the issue. | 616751 |
 | Deployment | When using a container the user gets redirected to an instance, because a port number gets included in the URL. | 602502 |
 | Deployment | Device Detection fails in Containers deployments because C++ runtime is not installed in the XM1 topology. | 613337 |
 | Deployment | The input is not a valid base-64 string because it contains a non-base 64 character error during package installation. | 614709 |
 | Performance | Increased resource consumption for indexed caches with millions of entries. | 589212 |
 | Performance | A .pdf file is opened for modification when its content is being read for indexing, which causes degraded performance; it should be opened in read-only mode for indexing. | 591674 |
 | Performance | Slower MVC rendering can occur in environments with many sites, because `disableBrowserCaching` is ignored. | 610854 |
 | Performance | A degradation in performance may occur when resolving *Standard Values* token value for a fallback version of a cloned item. | 614821 |
 | Performance | `Sitecore.Caching.RenderingParametersCache` subscribes to some events without checking if it was already subscribed at creation time, which causes an incorrect behavior in LinkManager and performance degradation.. | 615496 |
 | Performance | Increased lock contention when writing log messages during web requests. | 615909 |
 | Platform | Content item link generation using display names containing special characters does not work correctly. | 577905 |
 | Platform | Heavy usage of the `LinkDatabase` may lead to a *System.OutOfMemoryException* error. | 590416 |
 | Platform | DateTime fields are rendered in UTC time instead of server time. | 591676 |
 | Platform | A *System.AccessViolationException* error related to the DeviceDetection database can cause the website to crash. | 593927 |
 | Platform | Validation on a multilist field does not get reflected immediately when the condition is met | 600651 |
 | Platform | After adding a version to an item, the audit log captures the wrong version number. | 601454 |
 | Platform | The item fallback version provided in the processor argument is not respected. | 609020 |
 | Platform | If the URL contains spaces added before the item name, items are resolved without a space. | 610980 |
 | Platform | When a multi-list field with a custom validation displays a pop-up dialog containing a fatal error, upon closing this dialog the field in error does not display a red validation bar as it should. | 616548 |
 | Platform | After selecting *select all* on a multi-list field in a situation causing a dialog to pop up containing a fatal error, upon closing this dialog the field in error does not display a red validation bar as it should. | 617539 |
 | Platform | Unable to remove items from Recycle Bin after applying pre-release 10.3.2 rev. 010586 PRE. | 616843 |
 | Platform | The *Links* table does not include droplist links. | 618724 |
 
 ## Dependency
  | Context | Description | ADO no. |
  | --- | --- | --- |
  | SXA | SXP 10.3.2 requires SXA bug fix *578189 - The content tree appears instead of available renderings in the Select a Rendering dialog*. This SXA fix was hotfixed to SXA 10.3.0 in summer 2023 and is included in the latest [Cumulative Hotfix for SXA 10.3.0 and Sitecore XP 10.3](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002845). | 578189 |

---
title: 'Release notes'
description: ''
---

**June 2024 – released Sitecore Experience Platform 10.2.2 rev. 00xxxx**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

- [New features/improvements](#new-featuresimprovements)
- [Resolved issues](#resolved-issues)

## New features/improvements
 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Platform | Updated the `ChilkatDotNet47.dll` library version to 9.5.0.77. See [KB100####](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB100####) for guidance on upgrading your Chilkat version. | 615207 |
 | Platform | Added the ability to enable LiveMode in SiteContext in runtime. | 585571 |
 | Security | Enhanced security in product and 3rd party libraries to reduce potential vulnerabilities, and to reduce the likelihood of requiring security updates in the future. | 594651, 606641, 609758, 615391 |

## Resolved issues
 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Content Editor | Opening an item from the Content Editor _Navigate_ tab results in an _Object reference not set to an instance of an object_ error. | 491656 |
 | Experience Editor | Simultaneous launch of Experience Editor in two browsers after restarting the Sitecore instance causes one of them to crash. | 412499 |
 | Experience Editor | Breadcrumbs do not resolve the correct site when clicking the _Go_ button without selecting any item. | 597335 |
 | Experience Editor | A Mutex corruption blocks all requests to open Experience Editor. | 603194 |
 | Experience Editor | A Speak request is using wrong site context in preview mode. | 	607142 |
 | Rich Text Editor | The internal link to a versioned media item added in the Rich Text Editor contains the wrong language. | 592307 |
 | Rich Text Editor | The internal link to a versioned media item added in the Rich Text Editor contains the wrong language using a Sitecore link via Search when `languageEmbedding` is set to _always_. | 592301 |
 | Publishing | Previewing unpublishable items is not possible even when setting `previewUnpublishableItems` to _true_. | 498395 |
 | Forms | A multipage form validates fields even though the page has been skipped. | 592310 |
 | Forms | _Unable to access a closed stream_ error occurs while saving files from filestorage table to disk. | 603638 |
 | Processing | A cumulative hotfix applied on Sitecore XP 10.2 creates deadlocks in an XP1 topology. | 591897 |
 | Experience Apps | The LeaderBoard is empty when selecting it from the _Reports_. | 597461 |
 | Personalization | No rule fact resolver can be found for `ISegmentationServiceContext` when using a filter with _goal taxonomy facet_ rule. | 516003 |
 | Personalization | Long personalization rules in the segmented list leads to a serialization exception. | 589574 |
 | Marketing Automation | Scheduled enrollment adds contacts to Marketing Automation plans even if a plan is inactive. | 605291 |
 | Marketing Automation | Workitem processing does not check the plan state, e.g. _Active_ or _Inactive_. | 613815 |
 | Marketing Automation | Scheduled enrollment does not respect the maximum enrollment setting. | 614401 |
 | Email Experience Manager | The email campaign description does not support special characters. | 604409 |
 | Email Experience Manager | The `EmailOpenedEvent` is saved against source contact after merging a known contact (source contact) into a known contact (target contact). | 608291 |
 | Universal Tracker | A _System.ArgumentException_ error may occur after retrieving a contact by multiple identifiers in a single batch. | 606531 |
 | Platform | Extraction of shared media content is performed for each language during indexing. | 324449 |
 | Platform | `GetDataSourceItemByQuery` aborts the pipeline even if it could not process the data source. | 486907 |
 | Platform | A _BlobProviderException_ occurs when publishing a site item if the media was detached from the item. | 490149 |
 | Platform | The `GetRenderingContentDependenciesPipeline` crashes when there are broken links. | 593160 |
 | Platform | Recursive related items in a content dependency is not working as expected. | 593054 |
 | Platform | Recursive related items and related items in a content dependency returns all items in all languages. | 593323 |
 | Platform | Unable to login virtual user in the `httpRequestBegin` pipeline after installing previous SXP 10.2 hotfix #554564. | 594111 |
 | Platform | LiveModeEnabler does not support publishing in preview mode. | 605729 |
 | Platform | Wrong method name _OnDoubleClick_ in `Sitecore.Reflection.Filtering.config`. | 589519 |
 | Platform | The .pdf file should be opened in _ReadOnly_ mode when its content is read for indexing. | 591674 |
 | Platform | the `ResizeProcessor` may be inefficient when invoked for non-image media. | 595667 |
 | Platform | Media files are stored on the file system during indexing. | 595670 |
 | Platform | Creating a validation rule with parameter _Result=FatalError_ does not allow standard values to be saved. | 598149 |
 | Platform | A DataEngine deadlock can occur between two threads that are making changes to unrelated items. | 599633 |
 | Platform | Content extraction of many .pdf files using PdfSharp may consume excessive CPU resources. | 604026 |
 | Platform | Accessing a Sitecore URL such as _https://(CD domain)/(item ID format)_ results in an _Object reference not set to an instance of an object_ error. | 609009 |
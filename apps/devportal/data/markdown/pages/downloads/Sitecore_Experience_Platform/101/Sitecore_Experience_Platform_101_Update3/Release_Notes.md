---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/101/Sitecore_Experience_Platform_101_Update3/Release_Notes
---

**September 2023 – released Sitecore Experience Platform 10.1.3**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Experience Platform 10.1.3 includes:

-   The media item duplication logic has been updated to resolve issues when deleting duplicates of a media item that shared the same blob. Now, duplicating a media item creates a duplicate of a blob. After upgrading to this version, you must run the `/sitecore/admin/duplicates.aspx` admin page to ensure all duplicate media items in your solution refer to a blob copy, not a shared one.

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Containers | The Sitecore XP 10.1.3 container image has been updated to use Sitecore Identity 7 based on .NET 6.0. | 572914 |
 | Containers | The Traefik container image has been updated to version 2.9.8. | 575657 |
 | Containers | The Kubernetes specifications now include the Container Storage Interface (CSI) driver for Persistent Volumes, replacing the `in-tree` plugin. | 563767 |
 | Installation | In the prerequisites for SIF installation, the .NET hosting bundle has been upgraded to version 6.0.x. | 573418 |
 | Compatibility | Sitecore Installation Assistant 1.3.3 supports Sitecore XP 10.1.3. | 575493 |
 | Compatibility | The patch level version of Identity Server to 7.0.327 has been updated, including security updates. | 531140 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Content Editor | When xConnect is not running, working in the Content Editor displays an error message, whereas Content Editor operations should be unimpacted. | 497506 |
 | Content Editor | The `GetLookupSourceItems` pipeline related to the `Droplist` field does not function as expected. | 585248 |
 | Experience Editor | Permissions on content placeholders are not resolved correctly in the Page Editor. | 95927 |
 | Experience Editor | The form is not displayed until you click the `Save` button. | 485487v |
 | Experience Editor | In a multi-line text field, if you paste text that contains formatting, the HTML tags are not removed. | 500606 |
 | Experience Editor | Even if the field fallback language value has not changed, upon saving other changes, the field fallback language is saved to the new language version of the item. | 517115 |
 | Experience Editor | HTML tags are removed from a single-line text field when editing and saving other fields. | 520726 |
 | Experience Editor | HTML content gets truncated upon saving changes. | 565120 |
 | Experience Editor | Duplicate renderings in the `Add Rendering` dialog in Experience Editor. This fix breaks SXA and XC, and is solved by SXA hotfix 581374. | 573497 |
 | Media | PDFSharp media content extraction may omit delimiters between words or paragraphs. | 509467 |
 | Media | The media item duplication logic has been updated to resolve issues when deleting duplicates of a media item that shared the same blob. Now, duplicating a media item creates a duplicate of a blob. After upgrading to this version, you must run the `/sitecore/admin/duplicates.aspx` admin page to ensure all duplicate media items in your solution refer to a blob copy, not a shared one. | 563054 |
 | Media | The resolution of bug 563054 causes performance issues when deleting an item from the archive. | 584915 |
 | Forms | When using the `Redirect to Page` action, the form is using the EN system language instead of the desired content language. | 228498 |
 | Forms | An exception occurs when submitting a form that has an empty `File Upload` field. | 389332 |
 | Forms | A `System.NullReferenceException` may occur in `Sitecore.ExperienceForms.Mvc.Controllers.BaseFormBuilderController.ProcessFormData`. | 447188 |
 | Forms | If two forms are created on the same page, the `Submit` button for the second form does not function and the second form does not get submitted. | 470882 |
 | Forms | Special characters and non-basic Latin alphabet are removed in Sitecore Forms after saving changes. See [KB1001758](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1001758). | 493648 |
 | Forms | Searching with multiple keywords does not work in Sitecore Forms. | 503212 |
 | Publishing | The `PublishEndRemote EventArgs` do not determine the name of the context database. | 498865 |
 | Publishing | If you republish a blob, the `blobIDs` cache is not updated on the CD instance. | 503173 |
 | Publishing | Despite the latest publishable version being in the final workflow state, a warning message `The associated content cannot be published` is displayed. | 504569 |
 | Publishing | If you run an incremental publishing from the Publish Agent, a number of unintended update jobs are executed.​​ | 507191 |
 | Publishing | `Publishing.CheckSecurity` does not work for external users​​. | 526576 |
 | Publishing | `​Publishing.CheckSecurity` breaks the `Check In` button for external users.​ | 526577 |
 | Publishing | If you publish related items to one publishing target, it fails when another publishing target is unavailable due to an error in the `LinkDatabase`. | 535675 |
 | Users | The `Custom Properties` of a virtual user are lost during `RuntimeSetting` serialization. | 531248 |
 | xDB | When `aspnet:AllowConcurrentRequestsPerSession` is set to `true`, a `NullReference` exception occurs in the `RedisSessionStateProviderAsync`. | 505522 |
 | xDB | The `Submit Queue` does not support shared file storage, such as across two CDs, when deployed to Azure Kubernetes Service (AKS). | 531111 |
 | xDB | `SC_ANALYTICS_GLOBAL_COOKIE` continues to remain active even after a customer has revoked the permission to collect cookies. | 589304 |
 | Personalization | GeoIP rules for personalization do not function correctly when deployed with a load balancer or a proxy server. | 479352 |
 | Personalization | If the `hide rendering` personalization rule has the `Ignore other caching settings override with defined below` caching option cleared, it causes an exception​. | 482547 |
 | Personalization | If you use the `where the current user is a member of the specific role` personalization condition, an `​Application access denied` error occurs. | 528947 |
 | Personalization | The country condition is not accessible in a personalization rule based on IP geolocation. | 545860 |
 | Personalization | If you hide a component in personalization that has custom rendering parameters, it causes a ​`System.Xml.XmlException` error. | 559953 |
 | Content Testing | In Mozilla Firefox, the item does not move to the next workflow state via `Approve with test`. | 571470 |
 | Search | The language suffix gets included in the `Build query` search results. | 550188 |
 | Email Experience Manager | Upon selecting the `Edit the related item` context menu button, the embedded Content Editor does not display as expected. | 587814 |
 | Path Analyzer | The Path Analyzer's custom goal maps do not display any data. | 501157 |
 | Platform | There are fallback language version issues with cloned items. | 120002 |
 | Platform | The `XFrameOptionsHeaderModule` throws an exception when illegal characters are in the path. | 290139 |
 | Platform | The `AddClonesToPublishQueue` method slows the locking and unlocking of an item if clones are widely used.​​​​​ | 329904 |
 | Platform | The `AddClonesToPublishQueue` method can slow down the workflow state changes of an item that has many clones. | 331567 |
 | Platform | The default `ScavengeStrategy.DoCleanup` method can clean up less than the value specified in `CacheScavengePercent`. | 384576 |
 | Platform | In the Experience Editor, the `Date` field may display as truncated when formatted with spaces. See [KB1000657](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1000657). | 423023 |
 | Platform | The Content Editor breaks when the session state is Redis or SqlServer. | 468220 |
 | Platform | The hidden `File Upload` field is validated and cannot be disabled because the field uses a different hidden field ID. | 483476 |
 | Platform | If the `enforceVersionPresence` setting is set to `true`, the item does not have values for the `ParentID` and `Paths` properties. | 487844 |
 | Platform | If the `enforceVersionPresence` setting is set to `true`, an item may not be identified as a content item. | 494792 |
 | Platform | If the `enforceVersionPresence` setting is set to `true`, you cannot preview unpublishable items. | 498395 |
 | Platform | If an item does not have a parent item in the EN language and the `enforceVersionPresence` setting is set to `true`​ for all items, ​links to the item in the EN language are incorrect. | 499753 |
 | Platform | If you access `LayoutCache.GetCacheKeys()`, the entire concurrent dictionary gets locked. | 499061 |
 | Platform | The Location Finder does not work on items with languages other than English. | 505615 |
 | Platform | After publishing a new language and enabling its fallback language, the requested page does not display and a `This site cannot be reached` error occurs. | 509668 |
 | Platform | In the Control Panel, after running the `Rebuild link databases` operation, the tables are populated with many duplicates. | 526584 |
 | Platform | ​If an item has a large number of language and numeric versions, the output of the `GalleryLinksForm` becomes unmanageable. | 531872 |
 | Platform | Field-level language fallback causes re-indexing even if `enableFieldLanguageFallback` is set to `false`. | 550404 |
 | Platform | Field-level language fallback slows down index updates when processing `item:versionRemoved` events. | 550410 |
 | Platform | The checkbox field of the rendering parameters resets to the standard value when you delete the data source. | 554399 |
 | Platform | When you create an item from a page branch, a composite component has a reference to a non-existing datasource: `local:/Data/Tabs`. | 564751 |
 | Platform | Standard value tokens do not reflect the actual value in the fallback version of a cloned item. | 573972 |
 | Platform | `SXP 10.1.3 rev. 008790 PRE` causes broken links for rendering parameters with empty values. | 578783 |
 | Platform | `SXP 10.1.3 rev. 009139 PRE` causes manually-added roles on external users to be removed. | 583085 |
 | Platform | Standard value tokens do not reflect the actual value in the item fallback after applying cumulative hotfix `Sitecore 10.1.3 rev. 009139 PRE` or later. | 584533 |
 | Platform | Page crashes after inserting an image in the Rich Text Editor in a Chrome or Edge browser. See [KB1003010](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003010). | 584490 |
 | Containers | When you deploy the `mssql-init` container that connects to Azure SQL, you may receive a message that the compatibility level may result in undefined behavior. | 559550 |
 | Installation | WebPI 5.1 does not work correctly on a new machine. | 570314 |
 | Installation | The installation of Sitecore XP fails on a machine with SQL Server PowerShell Module version 22.0.xx or later. | 580538 |
 | Performance | The fix for bug 436697, which addressed the issue of the `Select Media Dialog` caching the image thumbnail instead of displaying the new versioned thumbnail, has caused slow performance. | 498996 |
 | Performance | References to items that have a large number of language and numeric versions degrade the performance of the `GalleryLinksForm` and the Experience Editor. | 542261 |
 | Security | Security enhancements have been made. | 92375, 390299, 492315, 500712, 539826, 563856, 568150, 576660, 582720, 584731, 586117 |
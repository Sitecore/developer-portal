---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/102/Sitecore_Experience_Platform_102_Update1/Release_Notes
---

**September 2023 – released Sitecore Experience Platform 10.2.1**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Publishing | Improved Edge publishing performance by replacing the exception handling mechanism in the `ID.TryParse` implementation. | 585529 |
 | Users | You can now manage roles behavior for external users using the `<clearroleswhensignin>` setting. | 534067 |
 | Containers | The Sitecore XP 10.2.1 container image has been updated to use Sitecore Identity 7 based on .NET 6.0. See modules compatibility in [KB1000576](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1000576). | 572914 |
 | Containers | The Traefik container image has been updated from version 2.5.3 to 2.9.8. | 575657 |
 | Containers | The Kubernetes specifications now include the Container Storage Interface (CSI) driver for Persistent Volumes, replacing the `in-tree` plugin. | 563767 |
 | Installation | You can now change the default package installation behavior so that the item in the target database preserves the version numbers from the source database. | 193262, 565562 |
 | Installation | In the prerequisites for SIF installation, the .NET hosting bundle has been upgraded to version 6.0.x. | 573418 |
 | Compatibility | Sitecore Installation Assistant 1.4.1 supports Sitecore XP 10.2.1. | 578070 |
 | Compatibility | The patch level version of Identity Server to 7.0.327 has been updated, which includes security updates. | 590371 |
 | Compatibility | `ICSharpCode.SharpZipLib` has been updated to version 1.4.2. | 578988 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Content Editor | When xConnect is not running, working in the Content Editor displays an error message, whereas Content Editor operations should be unimpacted. | 497506 |
 | Content Editor | Media upload with `Overwrite existing media items` and `Make uploaded media items versionable` does not clear Shared fields | 558081 |
 | Experience Editor | The values of single-line text and the multi-line text fields are not displayed in the Experience Editor. See [KB1002418](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002418). | 507001 |
 | Experience Editor | The preview date and time dialog in the Experience Editor ignores the date/time format preference. | 565729 |
 | Experience Editor | HTML tags are removed from a single-line text field when editing and saving other fields. | 522604 |
 | Experience Editor | In the Experience Editor, inputs in the Rich Text Editor's HTML tab will not be saved if they include nested tags. | 568200 |
 | Experience Editor | Duplicate renderings in the `Add Rendering` dialog in Experience Editor. If your deployment includes Sitecore Experience Accelerator (SXA) or Experience Commerce (XC), then this update requires installing SXA hotfix version `SC Hotfix 581375-1 SXA 10.2.0.4247` or higher. See [KB1001757](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1001757). | 573497 |
 | Forms | If language fallback is enabled, a `You cannot edit the 'the form' item because it is protected..."` error occurs and you are unable to save a language version of a form. | 485274 |
 | Forms | Field validation upon saving a form can be bypassed by changing related data inputs. | 490008 |
 | Forms | Language-specifc and special characters get stripped from form labels. | 502894 |
 | Forms | After adding a `Redirect to a page` submit action to a form, the selected item is not displayed in the Content Tree and the Content Tree remains collapsed. | 566609 |
 | Publishing | If the `ItemCloning.DeleteClonesWithOriginalItem` setting is set to `true`, the `PublishManager.DataEngine_DeletedItem` method throws a `NullReferenceException`. | 450353 |
 | Publishing | When deleting an item that has clones and more than one language, the `PublishManager.DataEngine_DeletedItem` method throws a `NullReferenceException`. | 523123 |
 | Publishing | `Publishing.CheckSecurity` does not allow authenticated external users to publish a change to a content item. | 526576, 526577 |
 | Publishing | If a virtual user publishes items several times, the ribbon in the Content Editor becomes collapsed. | 554564 |
 | Publishing | When a shared Renderings delta is present in the language without a rendering ID, an `ArgumentNullException` is thrown on Edge publishing. | 578684 |
 | Authentication | The `RequireLogin` attribute breaks the logic of authentication to the configured login page of the front end site. | 229436 |
 | Authentication | When you log into the Sitecore external site via the external identity provider, a `Sitecore` title appears on the browser tab. | 510418 |
 | Users | If you create a virtual user with a name that contains only numeric characters, an exception is thrown. | 381683 |
 | Users | The `Custom Properties` of a virtual user are lost during `RuntimeSetting` serialization. | 531248 |
 | Users | If a virtual user logs in via AzureAD, an endless redirect loop in Horizon may occur. | 555286 |
 | Search | Searching using the Search tab does not resolve access permissions correctly. | 477223 |
 | Search | A permission-enabled search does not function correctly in a nested roles scenario. | 493002 |
 | Search | In Content Tree search, the value of the `Search.ContentTreeSearch.MaxResults` setting is ignored. | 515248 |
 | Search | Search operations, like deleting search results, do not track the user who performed the operation, running instead under an anonymous user. | 529807 |
 | Search | Multi-term fuzzy search does not return any results. This can be a breaking change for deployments moving from Azure Search to Solr. | 559137 |
 | Search | Search indexes may include excluded items as a result of adding new item versions. | 580395 |
 | Sitecore CLI | When you rename an item using the Sitecore CLI, `LayoutData` does not publish and the old `LayoutData` is still available. | 581503 |
 | xDB | xDB stored procedures can lead to an infinite loop inside the SQL Server, causing high DTU usage. | 412448 |
 | xDB | `SC_ANALYTICS_GLOBAL_COOKIE` continues to remain active even after a customer has revoked the permission to collect cookies. | 589304 |
 | Personalization | Tracking fails to adhere to visitor's consent preferences, with the `SC_ANALYTICS_GLOBAL_COOKIE` cookie being set despite setting `explicitConsentForTrackingIsRequired`. | 526015 |
 | Personalization | Long personalization rules break the Experience Editor. | 558847 |
 | Content Testing | Errors occur when selecting a goal on the conversion rate from a page test on a non-English language. | 301732 |
 | Content Testing | In Mozilla Firefox, the item does not move to the next workflow state via `Approve with test`. | 575840 |
 | Marketing Automation | The `goal taxonomy facet` rule in a Marketing Automation plan does not work when the number of goal items exceeds 20. | 552034 |
 | Email Experience Manager | When EXM is enabled in two Content Management (CM) instances, the email campaign job status is not retrievable in the second CM instance. | 569634 |
 | Email Experience Manager | Upon selecting the `Edit the related item` context menu button, the embedded Content Editor does not display as expected. | 587814 |
 | Platform | When you insert snippets, the `<blockquote>` and `<p>` tags do not display correctly. | 329704 |
 | Platform | After a warm disaster recovery process is triggered, Sitecore tries to connect to the original SolrCloud server. See [KB1000745](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1000745). | 447307 |
 | Platform | The hidden `File Upload` field is validated and cannot be disabled because the field uses a different hidden field ID. | 483476 |
 | Platform | When you enter an anchor tag `<a href="#">Text</a>`, the rendered HTML becomes `<a href="##">Text</a>` on the front end. | 489654 |
 | Platform | If you access `LayoutCache.GetCacheKeys()`, the entire concurrent dictionary gets locked. | 499061 |
 | Platform | After publishing a new language and enabling its fallback language, the requested page does not display and a `This site cannot be reached` error occurs. | 509668 |
 | Platform | If you do not execute the `GetCustomProperty` and `SetCustomProperty` methods in the same request, the custom properties of a virtual user are not fetched from the database. | 510291 |
 | Platform | In the Control Panel, after running the `Rebuild link databases` operation, the tables are populated with many duplicates. | 526584 |
 | Platform | Retrieving the child items of resource items is not thread-safe. See [KB1001823](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=_KB1001823). | 530961 |
 | Platform | Redis session state is not always locked while processing a request. | 535277 |
 | Platform | When a target site is resolved, it uses the site `rootPath` and language but ignores the database. | 537827 |
 | Platform | In the HTML editor, when you use alt codes inside the `href` attribute, the output includes an additional, unnecessary symbol. | 549048 |
 | Platform | `StartItem` is ignored when resolving a site. | 569444 |
 | Platform | The Search API may return incorrect results under load such as an SXA Checklist disappearing in an XM topology. | 575400, 578068 |
 | Platform | A deadlock can occur on application start if aggregation runs for the first time and `DeviceResolver` runs simultaneously. | 582497 |
 | Platform | Page crashes after inserting an image in the Rich Text Editor in a Chrome or Edge browser. See [KB1003010](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003010). | 584490 |
 | Performance | Removing multiple content items creates a separate request to Solr for each removed document. This can lead to performance-related errors such as exceeding the number of queued requests. | 561871 |
 | Containers | When you deploy the `mssql-init` container that connects to Azure SQL, you may receive a message that the compatibility level may result in undefined behavior. | 559550 |
 | Installation | When you add items using package installation, some items switch to an empty version and appear to have lost their content. | 524238 |
 | Installation | Deploying Sitecore XP using SIF fails due to retired Microsoft Web Platform Installer. See [KB1003017](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003017). | 570314 |
 | Installation | An `ERROR_SMO_NEEDED_FOR_SQL_PROVIDER` error occurs when installing Sitecore Experience Platform. See [KB1003024](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003024). | 582977 |
 | Installation | The installation of Sitecore XP fails on a machine with SQL Server PowerShell Module version 22.0.xx or later. See [KB1003015](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003015). | 580538 |
 | Security | Potential security vulnerabilities have been resolved. See [KB1002925](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002925), [KB1003018](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003018). | 390299, 500712, 568150, 576660, 582720, 584731, 586117 |
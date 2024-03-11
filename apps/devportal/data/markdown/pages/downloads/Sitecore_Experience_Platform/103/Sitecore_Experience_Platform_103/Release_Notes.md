---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103/Release_Notes
---

**December 2022 – released Sitecore Experience Platform 10.3.0**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Deprecated/Removed](#Deprecated)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Experience Platform (SXP) 10.3 delivers new capabilities and quality improvements that enable organizations to deliver unforgettable experiences with increased ease and convenience.

Whether self-hosted, implemented in Sitecore Managed Cloud, or used as Experience Manager (XM) through Sitecore Experience Manager Cloud (XM Cloud), the 10.3 release improves how organizations extend and integrate the Sitecore Experience Platform with other applications in their marketing tech stack. New management and administration APIs and webhooks enable developers to take an API-first and industry-standard approach to customization, reducing the reliance on in-process custom code. This separation makes it easier for developers to upgrade to new versions of the Experience Platform in the future.

Additionally, the introduction of Headless SXA, Headless Services 21.0, and enhancements to developer tools with 10.3 makes it easier for organizations to use SXP as a headless CMS, and to build engaging experiences using modern front-end frameworks.

Other highlights include:

-   Headless SXA: Benefit from site scaffolding and templating, and new Next.js components, when building applications with XM as a headless CMS.
-   ​​​​EXM enhancements: Added OAuth support for custom SMTP deployments.
-   ​​​​​Headless Services 21.0: Includes the new starter framework to accelerate the creation of new projects, and support for Next.js 12.3.x and React 18.
-   ​​​​​Management Services 5.0: Enhanced Experience Edge publishing, resolved default publishing target, and added support for single-item publishing.
-   ​​Sitecore CLI 5.0: Added Linux support and new telemetry.
-   System updates: Upgraded Identity Server and Publishing Service to support .NET 6, added support for Solr 8.11.2, and SQL Server Transparent Data Encryption (TDE) for encryption of data at rest. Support for Windows Server 2022 coming in January.

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Containers | Database prefix support can now be configured during deployment.​​ | 421400 |
 | Containers | Log-level customization is now added for all Sitecore roles.​ | 427142 |
 | Containers | Persistent storage is now used for a device detection database.​ | 487053 |
 | Containers | The `ID` role is now based on the .NET 6.0 image​​​.​​ | 529430 |
 | Containers | The Solr container has been updated to version 8.11.2.​​ | 545838 |
 | Containers | Sitecore GraphQL settings has been added to the parameters.​ | 553271 |
 | Email Experience Manager | OAuth support has been added for EXM Custom SMTP. ​ | 429737 |
 | Experience Optimization | ​​To improve performance, an index is added to the `Fact_Personalization` table in the analytics database. | 454089 |
 | Installation | ​​Sitecore Installation Assistant 1.5.0 supports Sitecore XP 10.3​.0​​​. |  |
 | List Manager | ​​You can now assign a user from an external identity service as the owner of a segmented list. | 502516 |
 | Miscellaneous | ​Sitecore now supports MS SQL Transparent Data Encryption (TDE). With TDE enabled, data can be encrypted at rest to secure customer data and protect intellectual property. |  |
 | Platform | The `X-Content-Security-Policy` header has been removed from the `Content-Security-Policy` response.​​​​​ | 482758 |
 | Platform | ​​The implementation of `TemplateFieldCacheKey` has been changed to reduce memory allocations. | 484186 |
 | Platform | ​An API has been added that identifies every change that is made to the default items in Sitecore XP - `items in resources`. This helps you to safely upgrade your solution to a newer version.​ | 495854 |
 | Platform | ​The performance of `Factory.GetSiteInfoList()` has been improved to avoid excessive memory allocation. | 505774 |
 | Platform | ​​The performance of the `FilteredItemsCache` has been improved. | 505778 |
 | Platform | ​​For jobs where the `job.Status.Processed` property is not set, the number of `units processed` is no longer logged. | 538296 |
 | Platform | ​​​​​You can now receive real-time notifications about events or workflow actions by creating a webhook. You can also use a webhook to run external validation of the workflow state changes of an item. | 493334, 504626, 504714 |
 | Platform | ​​To ensure that customers receive security updates promptly Sitecore has introduced `Sitecore Identity Server 7.0.0` based on .NET 6. | 531140, 516330 |
 | Platform | ​​The new `clearroleswhensignin` setting for the identity provider determines whether the roles assigned to a user are managed in Sitecore or in an external identity provider. | 583085, 534067 |
 | Sitecore.ContentSearch | ​​Searching by ID and path has been improved. | 474407 |
 | Sitecore.ContentSearch | A warning is now logged when `FullRebuildItemCountThreshold` has been reached. ​​​​​ | 497050 |
 | Sitecore.ContentSearch | `IHttpRequestInitializer` has been made public. This allows clients to modify request parameters for connections to Solr.​​ | 512890 |
 | Sitecore.ContentSearch | ​The `initializeOnAdd` setting is now ignored in Solr search indexes. | 517923 |

## Deprecated/Removed

#### Horizon End-of-Support with SXP 10.3

Sitecore is discontinuing support for the Horizon visual page builder beginning with the SXP 10.3 release. If you are using Horizon, you should remain on 10.2, as an upgrade to 10.3 or later will cause you to lose access to Horizon.

#### Removed features

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Platform | ​​​​​An unused `Microsoft.IdentityModel.Clients.ActiveDirectory` reference was removed. | 430895 |
 | Platform | ​​​The `Developer Center` has been marked as obsolete and will be removed in a future version.  <br />The `GridDesigner, IDE, RenderingLister, PageDesigner, Layouter, Imager`, and `PageScreenshots` that were previously marked as obsolete have been removed. | 540188 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Containers | ​​The `mssql-init` and `solr-init` jobs fail to start in the `containerd` container runtime. | 524541 |
 | Email Experience Manager | General UI improvements have been made. | 468918 |
 | Email Experience Manager | If you set the value of `Analytics.ForwardedRequestHttpHeader` to `X-Forwarded-For`, the `EmailOpenedEvent` tracking logs an error. | 473430 |
 | Email Experience Manager | If you add domains in EXM, there are no notifications about the new domains. | 485161 |
 | Email Experience Manager | ​​The `Delete` button is not disabled after a campaign has been deleted. | 485314 |
 | Email Experience Manager | If you specify a filter in Marketing Automation, the automated email campaign is not sent to the recipient list. | 490233 |
 | Email Experience Manager | ​​The `Export` button for a suppression list is enabled even when there are no items in the list or Sitecore Delivery Cloud is not enabled. | 494592 |
 | Email Experience Manager | ​Even when Sitecore Delivery Cloud is not enabled, an error message related to it is shown. | 494601 |
 | Email Experience Manager | If you export a suppression list using a date range where the date in the `From` field is later than the date in the `To` field, no validation error is displayed.​​​​​ | 495802 |
 | Experience Analytics | ​If you delete an item when xConnect is unavailable, an exception error is thrown. | 497506 |
 | Experience Editor | ​If you change the date and time format in the `Region and Language Settings` dialog box, an incorrect format is displayed in the Experience Editor. | 51661 |
 | Experience Editor | If you open the Personalization wizard after you have reset a shared layout, an error occurs. | 166528 |
 | Experience Editor | The Experience Editor `Insert` button does not work correctly in EXM.​ | 234193 |
 | Experience Editor | ​In the Experience Editor, if you replace compatible renderings, the `UniqueId` changes. | 361317 |
 | Experience Editor | ​The performance of `Sitecore.ExperienceEditor.Speak.Ribbon.Requests.DatasourceUsages.GetDatasourceUsagesDropdown.ProcessRequest` is not optimized. | 406728 |
 | Experience Editor | In the Experience Editor, if you click the `Edit Experience Editor Options` button or the `Add associated content` button, the page scrolls up. | 458264 |
 | Experience Editor | The `enableWebEdit` parameter is always read from the `Preview.DefaultSite` value.​​​​​ | 489128 |
 | Experience Editor | ​​In a multi-line text field, if you paste text that contains formatting, the HTML tags are not removed. | 500606 |
 | Experience Editor | ​If `HtmlEditor.RemoveScripts=false` and the field type is removed from `Rendering.HtmlEncodedFieldTypes`, ​`FieldRenderer.Render()` returns an empty string. | 507001 |
 | Experience Editor | ​An extra `<br>` tag is added at the end of a multi-line text field. | 509260 |
 | Experience Editor | ​​In the Experience Editor, if you edit an empty `Rich Text` field, a JavaScript error occurs. | 509296 |
 | Experience Editor | ​In the `Do you want to open the start Web page instead?` dialog, if you click the `Cancel` or `X` button, the `start Web page` opens in a new tab. | 511601 |
 | Experience Editor | ​​​​​The fallback value of a field changes after another field has been saved with a new value. | 517115 |
 | Experience Editor | ​​The HTML tags of a single-line text are removed when editing and saving other fields. | 520726 |
 | Experience Editor | ​​​If you enter any HTML tags in a multi-line text field using a field editor dialog in Experience Editor, the HTML tags are removed. | 531146 |
 | Experience Editor | ​​​​​​The `Insert Image` button in the `WebEdit` ribbon only works if the image has an `en` version. | 533388 |
 | Experience Editor | If you set the `Date` field value to `5/23/2080` and use the `ar-sa` language, the page does not render the date field.​​ | 540755 |
 | Experience Optimization | ​​​​​If you change the standard values item and apply personalization, the final rendering changes are not saved. | 457081 |
 | Experience Optimization | ​​​​​If you select the `Enable variation of component design` check box, the setting does not persist and the selected component design renderings are reverted. | 460603 |
 | Experience Optimization | If you run multiple tests for a single page, the historical tests list does not display all previous tests.​​ | 496833 |
 | Experience Optimization | Items in draft state are published when creating a page test for an item.​​​​​ | 505988 |
 | Experience Optimization | ​Disabling `Track effect of personalization on this component` does not work when more than one component is personalized. | 509251 |
 | Experience Optimization | ​​​​​If you use a filter using a goal taxonomy facet rule, there is no rule fact resolver found for the `ISegmentationServiceContext`. | 516003 |
 | Experience Optimization | ​​​​​Items in draft state are published when creating a version test for an item. | 527227 |
 | Experience Optimization | ​​If you create an A/B page test between a parent and a child item, the items may not be completely published. | 530482 |
 | Experience Optimization | ​​The Experience Optimization dashboard fails to load if there are empty experiences in the index. | 537304 |
 | Experience Profile | ​In Firefox, if you open Experience Profile, the search box is rendered incorrectly. | 371711 |
 | Federated Experience Manager | When you use Azure Request Routing, the FXM SCBeacon service uses an internal domain name instead of a public domain name. | 221942 |
 | Federated Experience Manager | The FXM folder contains configuration files related to Azure Search. | 501534 |
 | Headless Services | The Edge Preview and Edge delivery endpoints return an inconsistent order of child items.​ | 529047 |
 | Headless Services | ​​​​​Publishing fails and throws an `ArgumentNullException` error due to `TemplateFieldDeliveryEntityGenerator`. | 534137 |
 | List Manager | If a contact does not have a last name specified, `​{LastName}` is displayed.​​ | 324998 |
 | List Manager | If you import a CSV of contacts, `ListManager` does not identify duplicate entries and creates multiple dedicated contacts. | 469483 |
 | Marketing Automation | ​​​​​The `IContactRepository` is registered with an incorrect DI lifetime​. | 331761 |
 | Marketing Automation | ​​​​​The delimiters in Marketing Automation reports are not rendered based on the user's culture. | 464103 |
 | Marketing Automation | ​​A potential `ThreadPool` starvation issue has been resolved. | 504859 |
 | Marketing Automation | If you start and stop a campaign in the previous month and open it in the next month, an error occurs when you select a start date.​​ | 515379 |
 | Marketing Automation | ​​​​​The `ScheduledPlanEntryWorker` and `ActivityTimeoutWorker` classes can stop working unexpectedly. | 515456 |
 | Marketing Automation | ​​​​​If you create an automation plan in multiple languages, a duplicate key error occurs in the `ActivityTimeoutWorker` class. | 525976 |
 | Marketing Automation | ​​If you switch the pages in the `SelectPlanActivity` dialog, a `The data could not be loaded error` occurs. | 533272 |
 | Marketing Automation | ​​The `Move to another campaign` activity does not prevent subsequent actions on the same path. | 535686 |
 | Marketing Automation | ​​The `Move to another campaign` activity does not allow `Remove from Campaign` to be added to the flow. | 542482 |
 | Marketing Foundation | ​​​​​The interaction and device profile ID reference to an incorrect contact after a known-to-known identification. | 470569 |
 | Marketing Foundation | ​If you use Redis Session State Provider and set `AlloConcurrentRequestPerSession` to `true`, a `NullReferece` exception is thrown. | 505522 |
 | Marketing Foundation | ​​​​Marketing definitions search indexes reference an obsolete computed index `UrlLink` field.​ | 521532 |
 | Marketing Foundation | ​​Tolerance has been increased to handle transient faults when trying to access `Submit Queue`. | 531111 |
 | Marketing Foundation | ​​The Redis session lock does not work as expected leading to inconsistent data. | 535277 |
 | Miscellaneous | ​​Some security issues have been resolved. | 373821, 498938, 506984, 506986, 508237, 509802, 512209, 513368, 514144, 525885 |
 | Miscellaneous | ​​​​​Localization has been improved. | 489199, 489394, 489680, 492791, 492793, 492795, 493348, 496745, 504663, 507540, 508987, 509455, 526858, 549833, 550452, 550453, 550454, 550942 |
 | Path Analyzer | Custom goal maps do not display any data.​​​​​ | 501157 |
 | Platform | ​In the `ValueLookupField` class, the ​`ValidateLinks` method slows down rebuilding the `LinkDatabase`. | 115854 |
 | Platform | ​​​Too much information is serialized to the `EventQueue` for clone items. | 146631 |
 | Platform | ​​​​​​The `encodeNameReplacements` rules break GUID-based media URLs. | 158936 |
 | Platform | ​​​​​​Sitecore Query can be run every time the `Translate.Text(string)` method is invoked. | 178849 |
 | Platform | When you try to delete or archive an item, a `Relink|System.ArgumentNullException: Value cannot be null` error occurs. | 211195 |
 | Platform | ​​If you set the `RequireLogin` attribute, it breaks the authentication logic of a front-end site. | 229436 |
 | Platform | ​​​​​​The `Copy To` button on the `Final Layout` tab copies the rendering to the other item but does not show an updated list in the `Layout Details` dialog. | 287225 |
 | Platform | ​​The `CleanupAgent` does not clean up log files created by `RollingFileAppender`. | 313137 |
 | Platform | ​The `AddClonesToPublishQueue` method slows the locking and unlocking of an item if clones are widely used.​​​​​ | 329904 |
 | Platform | ​​The `AddClonesToPublishQueue` method could make changing the workflow state of an item that has a lot of clones to be slow. | 331567 |
 | Platform | ​​​The default `ScavengeStrategy.DoCleanup` method can clean up less than the value specified in `CacheScavengePercent`. | 384576 |
 | Platform | ​If you delete an item that has a clone, a `Guid should contain 32 digits with 4 dashes…` error occurs.​​​​​ | 445206 |
 | Platform | ​​​​​​If `ItemCloning.DeleteClonesWithOriginalItem` is `true`, the `PublishManager.DataEngine_DeletedItem` method can throw a `NullReferenceException`. | 450353 |
 | Platform | ​​​​​If security is set to `null` on any item, ​a security rules parsing error occurs. | 461985 |
 | Platform | ​​​​​If the `AllowDuplicateItemNamesOnSameLevel` setting is set to `false` and parallel publishing is enabled, the `​PublishAgent fails`. | 462837 |
 | Platform | ​​​The `GetTargetItem()` method returns `null` for cross-database links. | 479550 |
 | Platform | ​If you rename an item to its initial name, ​the `PathCache` is not cleared on a CD instance. | 493542 |
 | Platform | ​​In the `Sitecore.Sites.config` file, if the `enforceVersionPresence` setting is set to `true`, an item may not be identified as a content item. | 494792 |
 | Platform | ​​If you use a `.jiff` file with an incorrect MIME type, it is not displayed in Internet Explorer 11. | 494964 |
 | Platform | ​​If the `previewUnpublishableItems` setting is set to `true`, you cannot ​preview unpublishable items. | 498395 |
 | Platform | ​​​​​​The `PublishEndRemote EventArgs` do not determine the name of the context database. | 498865 |
 | Platform | ​​​​​If you access `LayoutCache.GetCacheKeys()`, the entire concurrent dictionary gets locked. | 499061 |
 | Platform | ​​Cache size recalculation slows down full cache clearing. | 499631 |
 | Platform | ​​If an item does not have a parent item in the EN language and the `enforceVersionPresence` setting is set to `true` for all items, ​links to the item in the EN language are incorrect. | 499753 |
 | Platform | ​​​​​​If changes in the context of the `StatisticDisabler` are made by `StatisticDisablerState.ForItemsWithoutVersionOnly`, they are not published incrementally. | 500567 |
 | Platform | ​​​If you use OWIN and have a large number of web sites, application startup is interrupted by a `StackOverflowException`. | 500740 |
 | Platform | ​​If you republish a blob, the `blobIDs` cache is not updated on the CD instance. | 503173 |
 | Platform | ​​​​​If the `Caching.CacheKeyIndexingEnabled.ItemCache` setting is set to `true`, the ​Sitecore caches are not cleared on a CD instance. | 503828 |
 | Platform | ​​The `__Standard Values` of the `Rendering` parameters are not read. | 505185 |
 | Platform | ​​If you publish a clone item, the `FilteredItemsCache` is cleared for every sites. | 505342 |
 | Platform | ​​​​​​​If you publish a clone item, the `ItemPathsCache` is partially cleared. | 505584 |
 | Platform | ​​​​​​Unnecessary blocking occurs in `Logger.CallAppenders(LoggingEvent)`. | 506173 |
 | Platform | If you run an incremental publishing from the Publish Agent, a number of unintended update jobs are executed.​​ | 507191 |
 | Platform | ​​​There is a typo in `Sitecore.Sites.DefaultItemSiteResolver.CanResolve`. | 507668 |
 | Platform | ​​​​​​If one language falls back to another language, a `StackOverflowException` occurs in `Sitecore.Globalization.Translate.Text()`. | 509668 |
 | Platform | ​​The `Custom Properties` of a virtual user are not fetched from the database. | 510291 |
 | Platform | ​​​​​​If you log in an external Sitecore site via an external identity provider, the `Sitecore` title appears on the browser tab. | 510418 |
 | Platform | ​​​A 404 error for non-existent media files is still cached in `web[paths]` cache even after publishing. | 512303 |
 | Platform | ​​​The `Sitecore.Diagnostics.Statistics` class is not thread-safe. | 512493 |
 | Platform | ​Download filename becomes garbled when using non-ASCII characters. | 518999 |
 | Platform | ​When entries are added to a cache, the cache size is calculated incorrectly. | 520870 |
 | Platform | ​​`Sitecore.Collections.TemplateDictionary` is not thread-safe. | 526344 |
 | Platform | ​​​If you rebuild the `Links` database, many records are duplicated multiple times. | 526584 |
 | Platform | ​​​The `Customize My Toolbar` dialog does not use Client translations. | 526616 |
 | Platform | ​​Exclude Robots does not work correctly with the IP ranges specified in IPv6. | 528926 |
 | Platform | ​If you use the `where the current user is a member of the specific role` personalization condition, an ​`Application access denied` error occurs. | 528947 |
 | Platform | ​​The publishing behavior for `items as resource` files is incorrect. | 529023 |
 | Platform | ​​​​​​If you restore an item from resources, it can cause a `StackOverflowException`. | 529187 |
 | Platform | ​​​​​​Reading the child items of `items as resource` is not thread-safe. | 530961 |
 | Platform | ​​The `Custom Properties` of a virtual user are lost during `RuntimeSetting` serialization. | 531248 |
 | Platform | ​If an item has a large number of language and numeric versions, the output of the `Gallery Links` form becomes unmanageable. | 531872 |
 | Platform | If you change the client settings in the `identityServer.xml` file, users are not logged out. | 535578 |
 | Platform | ​​​If you publish related items to one publishing target, it fails when another publishing target is unavailable due to an error in the `LinkDatabase`. | 535675 |
 | Platform | ​​If a user has not been assigned any Sitecore roles and the Identity Server login page is disabled, a ​redirect loop occurs. | 536782 |
 | Platform | ​​​​​​When Sitecore XP resolves a target site, it uses the site root path and the language but ignores the database. | 537827 |
 | Platform | ​​​​​​References to items that have a large number of language and numeric versions degrade the performance of the `GalleryLinksForm` and the `Experience Editor`. | 542261 |
 | Platform | ​​​​​​If a username contains a single quote, the `My Items` dialog throws a `ParseException` error. | 555436 |
 | Platform | If you rename a `__Standard Values` item and have enabled language fallback, a ​`StackOverflowException` occurs.​​ | 118166, 187731 |
 | Platform | ​​​Some security vulnerabilities have been fixed. | 390129, 363636, 500712, 513299, 525345, 92375, 539826, 492315, 390299, 459146, 504543, 533235, 525192, 531019, 548363, 539965 |
 | Platform | ​​​​​​In the `Rich Text Editor`, if you use `Alt` codes, an extra unnecessary symbol is output. | 489654, 549048 |
 | Platform | If the `​​​Publishing.CheckSecurity` setting is set to `true`, it does not work with external users. | 526576, 526577 |
 | Publishing | The Content Availability - HTML cache is not cleared when a data source is updated.​​ | 508762 |
 | Sitecore.ContentSearch | ​If ​`ContentDatabase` is `null` for a context site, `LinqHelper` throws an `NullReferenceException` error. | 186703 |
 | Sitecore.ContentSearch | The `Name (Lookup) Value List` field containing IDs without braces is not indexed.​​ | 283431 |
 | Sitecore.ContentSearch | ​​The unused `_url` and `_lastestversion` virtual fields cause performance issues. | 314849 |
 | Sitecore.ContentSearch | ​​`Populate Solr Managed Schema` does not cover all default Sitecore languages. | 437509 |
 | Sitecore.ContentSearch | ​Sitecore connects to the old SolrCloud server after a warm Disaster Recovery has been triggered. | 447307 |
 | Sitecore.ContentSearch | ​​​​​The `indexing.getDependencies` pipeline causes an `InvalidOperationException` error after an item has been deleted. | 485321 |
 | Sitecore.ContentSearch | ​​The `GetDataSourceItemByQuery` processor aborts the pipeline even if it could not process the data source. | 486907 |
 | Sitecore.ContentSearch | ​​​​​`CultureExecutionContext` is lost if the index field name cannot be resolved from the configuration. | 487890 |
 | Sitecore.ContentSearch | `SolrFieldNameTranslator` attempts to resolve an index field name based on a Virtual Field name. ​​ | 487891 |
 | Sitecore.ContentSearch | ​The index properties are saved into the same database regardless of the database being crawled. | 497496 |
 | Sitecore.ContentSearch | ​The `Location Finder` component does not work on items that do not have an English version. | 505615 |
 | Sitecore.ContentSearch | ​​The `IEnumerable``<T>` properties of a search result POCO remain unassigned. | 508786 |
 | Sitecore.ContentSearch | PDFsharp media content extraction can omit delimiters between words or paragraphs.​​ | 509467 |
 | Sitecore.ContentSearch | ​​The web index rebuild performance degrades after applying Hotfix 494627. | 520721 |
 | Sitecore.ContentSearch | ​In `OperationsMonitor`, the number of queued actions is always zero. | 524509 |
 | Sitecore.ContentSearch | The search operations are run in the context of a `sitecore\Anonymous` user instead of the actual user.​​​​​ | 529807 |
 | Sitecore.ContentSearch | If the culture of a thread is set to `ar-SA`, the search result is not loaded because the date cannot be populated.​​ | 540756 |
 | Sitecore Forms | ​​​If you change the value of a specific form item, the `Revision` field is changed in all form items. | 404956 |
 | Sitecore Forms | ​​The hidden `File Upload` field is validated and does not redirect the request to the correct URL. | 483476 |
 | Sitecore Forms | ​If you save a language version of a form and `languagefallback` is enabled, ​a `You cannot edit the 'the form' item because it is protected` error occurs. | 485274 |
 | Sitecore Forms | ​​​In the Experience Editor, the form is not displayed until you click the `Save` button. | 485487 |
 | Sitecore Forms | ​​If you add a form with two navigation buttons, the page source code of the form contains duplicated IDs. | 486154 |
 | Sitecore Forms | ​Field validation can be bypassed by changing related inputs. | 490008 |
 | Sitecore Forms | ​​The `Text` field is not decoded in list elements and displays an incorrect list name. | 491143 |
 | Sitecore Forms | If you submit a form with an empty `File Upload` element, a `NullReferenceException` occurs.​​ | 491488 |
 | Sitecore Forms | ​​Language-specific or special characters are not allowed in form labels. | 493648 |
 | Sitecore Forms | The validation message for a required element is displayed after the form element has been disabled.​ | 500992 |
 | Sitecore Forms | ​Searching a form with multiple keywords does not work. | 503212 |
 | Sitecore Forms | ​​A reference to the core databases breaks the indexing on CD instances. | 510810 |
 | Sitecore Forms | If you submit a multi-page form after the session has expired, an unexpected `Redirected to Page submit` action is executed.​​ | 513277 |
 | Sitecore Forms | The `Form data entries deleted successfully` message is displayed incorrectly when a form data entry deletion has failed.​​ | 513372 |
 | Sitecore Forms | ​​The radio button list labels behave incorrectly in multi-language forms. | 513382 |
 | Sitecore Forms | ​​If you save a form with a Text field tag set to `span`, a `The form was not saved` error occurs. | 525169 |
 | Sitecore Forms | ​Test cases do not account for time zone differences of agents. | 558874 |
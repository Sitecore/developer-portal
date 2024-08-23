---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/91/Sitecore_Experience_Platform_91_Update1/Release_Notes
---

**April 2019 – released Sitecore Experience Platform 9.1.1**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## Highlights

Sitecore Experience Platform 9.1.1 includes:

-   You can now run other templates before the ARM templates, which is useful when installing Solr and other services.
-   Several security improvements have been implemented.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | ARM Templates | It is now possible to run other templates before the ARM templates, which is useful when installing Solr and other services.​​ |   
 | 300748 |
 | ARM Templates | When you deploy Sitecore as a production system, you must set the​ `SITECORE_ENVIRONMENT_TYPE` setting to `Production`. All the other values for this setting indicate a non-production system |   
 |   
 |
 | Experience Profile | ​​The logging of xConnect connections errors has been improved. |   
 | 222211 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | ARM Templates | ​​​The ARM templates do not support the installation of prerequisites.​ |   
 | 300748 |
 | Campaign Creator | The `Experience Analytics` button does not work correctly.​​ ​​ |   
 | 197031 |
 | Email Experience Manager | ​​​The `Sitecore.EmailCampaign.ExperienceAnalytics.Dimensions.ByLocation` method uses the `LookupManager` instead of the `GeoIpManager​`. |   
 | 287375 |
 | Email Experience Manager | The `heartbeatConfiguration/exclude` collection does not contain any EXM connection strings​.​​ |   
 | 249790 |
 | Email Experience Manager | ​​​The suppression list from `Email Delivery Cloud`​​ is not updated​​. |   
 | 287636 |
 | Email Experience Manager | ​When you create a new language version of an email, it uses the `ReplyTo`, `FromAddress` and `FromName` field values of the default root manager version of the current content language​​. ​​ |   
 | 211435 |
 | Email Experience Manager | ​​The default ​`Base URL​` setting does not work consistently for email message links. |   
 | 214845 |
 | Email Experience Manager | The EXM UI allows you to edit an item when the `language:read` and `language:write` access rights are denied.​​​​ |   
 | 215483 |
 | Email Experience Manager | ​​EXM tries to remove a contact from the include lists even when no contact lists are assigned​​ to the contact. |   
 | 219207 |
 | Email Experience Manager | If an `Already Unsubscribed` URL points to an item under the SXA module​, it is not resolved correctly. ​​​ |   
 | 224113 |
 | Email Experience Manager | ​​If the `Is Valid Url` and `Is Valid Email` validators use Redis cache, they cause exceptions. |   
 | 224397 |
 | Email Experience Manager | ​​​EXM campaigns are not tracked correctly for shared sess​ion users​​. |   
 | 227502 |
 | Email Experience Manager | ​​The `Email Delivery Cloud Connector` causes a SQL exception​​. |   
 | 164939 |
 | Email Experience Manager | ​​You cannot attach a versioned media item to a message​​. |   
 | 196782 |
 | Email Experience Manager | ​​The property store is not cleared during the confirm subscription process​​. |   
 | 232863 |
 | Email Experience Manager | You cannot remove nodes from the `property` table if subscription confirmation is not performed​.​​ |   
 | 233518 |
 | Email Experience Manager | An incorrect `Contact id is null.` message is logged in the `Execute` method of the `Sitecore.EmailCampaign.Cd.Actions.SendEmail` class when the `contactIdentifier` is set to `Null`​.​​​ |   
 | 202560 |
 | Email Experience Manager | ​​An item that calls the deprecated `CleanConfirmationID's` command is still present in the Content Editor.​​ |   
 | 232040 |
 | Email Experience Manager | ​​​When you change language, EXM displays the wrong name for the language. |   
 | 232341 |
 | Experience Analytics | ​​When the language cookie is not set properly, ​graphs fail to load. |   
 | 230613 |

 | Experience Analytics | ​​​When you reduce the size of a segment​, some error details are lost. | 481540 | 156838 |
 | Experience Editor | In preview mode, a simulated device does not appear until you touch the zoom control.​ ​​ | 442400, 466871, 514370 | 51575, 389153 |
 | Experience Editor | ​​​The UrlRewriter `ToLower` rule causes lowercase SPEAK requests to fail and breaks the Experience Editor. | 458590, 459403, 462757, 472674, 484589, 485539, 492622, 513736 | 99659 |
 | Experience Editor | ​​In some cases, changing the language in the Experience Editor can redirect to another hostname.​ | 458808, 462695, 510497, 510504 | 101318 |
 | Experience Editor | In Internet Explorer 11, in a single-line text field,​ the [No text in field] hint text disappears. ​​ | 474536, 480921, 481855, 484972, 485344, 491222, 495821, 498579, 503889 | 140555 |
 | Experience Editor | In the Experience Editor, the `Enforce Version Presence` setting breaks language switching. ​​ | 479596, 488630, 489517, 494375, 499855, 510042, 510087, 522860 | 151776 |
 | Experience Editor | ​​If the `Associated content` checkbox is selected, an error occurs when you refresh an MVC-based page. | 484299, 486192, 500282, 500492, 501281, 503734, 509976, 511134 | 167521 |
 | Experience Optimization | The `Failed to load Sitecore.ContentTesting.Requests.Controllers.PersonalizationRule.PersonalizationRuleController`​ error occurs on PaaS instances​. ​​ | 525187 | 289361 |
 | Experience Optimization | ​​In a workflow, the `RemoveTestAction` workflow action prompts the user even when no test is defined.​​ | 508013 | 226334 |
 | Experience Optimization | ​​​In the `XP Scaled` topology, a `Rebuild Suggested Tests Index` error can occur on the `Processing` server. | 512103 | 231573 |
 | Experience Optimization | ​​If the `Sitecore.ContentTesting.PreemptiveScreenshot.config` file is enabled, ​​​tickets for the `virtualssuser` user are never deleted from the `Properties` table. | 507390, 512643, 516754, 516978 | 220835 |
 | Experience Optimization | In the `Content editor`, if Azure search is used on a Sitecore instance, the `This page has an active test.` warning is not displayed​​. ​​ | 502516, 506557, 508913, 510945, 512706, 520756 | 213261 |
 | Experience Optimization | When a device rule is set​​, preemptive screenshot generation breaks package installation. ​​ | 498809, 500385, 506562, 508789, 511693 | 201408 |
 | Experience Optimization | ​​​`ScreenshotContextFactory` cannot create a temporary session when `OwinContext` is used.​​ | 499201, 510375, 511212, 511945, 512124, 520344, 524238, 525082 | 200938 |
 | Experience Optimization | In Experience Optimization, when the language of the pages is different from the Sitecore UI language​, the `GetConversionRate` controller returns null. ​​ | 485164, 486434, 489212, 491516, 497008, 498374, 503716, 524463 | 169224 |
 | Experience Optimization | The `TestPotential` computed index field raises an error in Experience Manager mode.​​ ​​ | 471787, 513180 | 74222 |
 | Experience Optimization | ​​In Chrome, when you create a page test, the `SetUserProfileKey` error appears in the browser console. | 479142, 487004 | 147372 |
 | Experience Optimization | ​​​In Chrome and Firefox, the `Percentage of visitors exposed to test` slider does not work. | 478441, 496348 | 147455 |
 |  | ​​If the `Sitecore.ContentTesting.PreemptiveScreenshot.config` file is enabled, ​​​tickets for the `virtualuser` user are never deleted from the `Properties` table. | 507390, 512643, 516754, 516978 | 220835 |
 | Experience Profile | ​The Experience Profile does not show all the contacts that match the specified date filters.​​ | 520283 | 296160 |
 | Experience Profile | ​​​When you search for contacts, incorrect count results are displayed. | 507095, 513892, 518834 | 219986 |
 | Experience Profile | ​​When you view a contact that has had EXM related interactions, errors are written to the `Experience Profile` log.​ | 503554, 504184, 506066 | 212956 |
 | FXM | ​​FXM site visits are logged in the Content testing processing tables and this degrades performance. | 518625 | 294104 |
 | Item Buckets Content Search | ​It is no longer possible to use iFilter for PDF content extraction during indexing.​​ |  | 305016 |
 | List Manager | The List Manager​​​​​ adds a `website#lang` cookie. ​​ |  | 228494 |
 | List Manager | ​​Contact filtering breaks the list view.​​ |  | 234841 |
 | List Manager | The `Segment Editor` doesn't have a loading spinner​.​​​ |  | 233801 |
 | List Manager | ​​Contact filtering does not work in the list view.​​ |  | 232777 |
 | List Manager | Ajax calls to the `RemoveMedia` action are not executed.​​​​ |  | 97724 |
 | List Manager | ​​​​Several security fixes​ have been implemented. |  | 287399 |
 | List Manager | ​​Import from a csv file doesn't work correctly if the `Media.UploadAsVersionableByDefault` setting is set to true​​​. |  | 82445 |
 | Marketing Automation | ​​​​In a campaign overview​, an incorrect value is shown in the current contacts count. |  | 255836 |
 | Marketing Automation | ​​The marketing automation-related rules do not work with campaigns that are created in a different language. |  | 290106 |
 | Marketing Automation | ​​If the `LivePageEventInspector.Process` method calls the `Logger.LogError` method, it does does not write anything to the log files. |  | 300229 |
 | Marketing Automation | ​​An incorrect model is used in `Sitecore.Xdb.MarketingAutomation.OperationsClient.AutomationOperationsClient.SerializerSettings`. |  | 300236 |
 | Marketing Automation | The `View contacts` report for an automation plan does not show any contacts if one contact has been anonymized​​.​​​ |  | 292532 |
 | Marketing automation | ​​​When you save, edit, activate, and deactivate a marketing automation plan in the designer, the `ReentryModeJSON` property changes unexpectedly. |  | 297306 |
 | Marketing Foundation | ​​In a request to the `Sitecore Cortex Processing Blob` and `Table Storage` services, if the parameters contain special characters, such as, '`<', '="">`', '.', or a space, the request is regarded as invalid and an error appears in the response. |  | 222870 |
 | Marketing Foundation | Renaming an item fails if the item template was not found.​​ |  | 288845 |
 | Marketing Foundation | The `Sitecore.Marketing.Taxonomy API` utilizes an inefficient overload of the `Sitecore.Framework.Conditions.ValidatorExtensions.Evaluate(this ConditionValidator validator,Expression<><t,>> expression)</t,>` method.​​ |  | 294843 |
 | Marketing Foundation | Publishing an item fails while publishing related items when the `ContentManagement`, `Processing`, and `Report​ing` roles are combined and configured on a Sitecore instance.​​​ |  | 256850 |
 | Marketing Foundation | The Remove broken links page (`/sitecore/admin/removebrokenlinks.aspx`​) fails with ​an exception when the `ContentManagement`, `Processing`, and `Report​ing` roles are combined and configured on a Sitecore instance.​​ |  | 205439 |
 | Marketing Foundation | ​​The creation of marketing goals fails with an ​exception when the `ContentManagement`, `Processing`, and `Report​ing` roles are combined and configured on a Sitecore instance. |  | 256873 |
 | Marketing Foundation | ​​​The `Sitecore.Marketing.Solr.IndexConfiguration.config` and `Sitecore.Marketing.Azure.IndexConfiguration.config` files contain an incorrect definition for the fields in the  section: SOLR and Azure Search do not support the `indexType="UNTOKENIZED"` attribute​ |  | 234449 |
 | Marketing Foundation | ​​When a profile item is deleted, the profile is not removed from the `Tracking` field. |  | 92783 |
 | Marketing Foundation | ​​The `GeoIpManager.GetGeoIpData`​ API resolves the geo data incorrectly when the `GeoIpOptions.Id` property is not initialized by the calling code. |  | 104154 |
 | Marketing Foundation | ​When a non-existent entity is loaded from XConnect, an uninformative message is shown. | 518147, 514237 | 293460 |
 | Marketing Foundation | ​In the Cortex Processing Engine, when the parent task fails, the status of the dependent tasks is not published to the message bus.​​​ |  | 289011, 288997 |
 | Marketing Foundation | ​​When the processing engine stops and restarts, the agents enter a `race condition`.​​ |  | 300458 |
 | Marketing Foundation | In a contact merge operation, the In-Memory target contact object is not updated with the source contact facets and only has the `ProfilePicture` facet. ​​ |  | 288395 |
 | Marketing Foundation | ​​The HTTP 410 response status code from Microsoft Machine Learning Server is handled in the same way as the HTTP 404 response status code and treated as a session expiration.​ |  | 257489 |
 | Marketing Foundation | If you use xConnect Search with Azure Search and perform a rebuild, xConnect Search can throw some errors.​​​ |  | 293883 |
 | Marketing Foundation | ​​​The `SqlTaskDataProvider UpdateTotalAsync​(Guid, Guid, long)` method throws an exception when you update a deferred task.​ |  | 288139 |
 | Marketing Foundation | ​​The `Goal was triggered during a past or current interaction` personalization condition returns an incorrect result when it is evaluated. |  | 129513 |
 | Marketing Foundation | ​​​The value that is specified in the `Standard Values` for a `DateTime` field in an item is not added to the search index. |  | 222670 |
 | Marketing Foundation | ​​​In the Solr schema for the xConnect search index, integer, and float fields are set to be stored and indexed. |  | 294301 |
 | Marketing Foundation | ​​In some on-premise environments, xConnect can crash after an AppDomain recycle.  <br />For more information about this, see this KB article: https://kb.sitecore.net/articles/494291. |  |  |
 | Miscellaneous | When a language version is missing, sorting, publishing, and other functionality does not work for items that contain shared fields.​​ |  | 121386 |
 | Miscellaneous | Various security vulnerabilities have been fixed.​​ |  | 288823 |
 | Miscellaneous | ​​When you change the media item template, this change is not reflected in the `Web` database.​ |  | 308093 |
 | Miscellaneous | The `FilteredItemsCache` is not cleared if `CacheKeyIndexing` is enabled​.​​ |  | 221390 |
 | Miscellaneous | ​​​In the `Search` tab, ​`Search by Version` does not work as expected​. |  | 224039 |
 | Miscellaneous​ | The `Search by language` filter is case sensitive.​​ |  | 224960 |
 | Miscellaneous | ​​​A request to `default.aspx` leads to `NotFound` instead of to `NoAccess` with restricted anonymous access. |  | 257275 |
 | Miscellaneous | ​​​In the Experience Editor, you can preview an item that has Publish Restrictions set on item level because the `ItemCache` indexing and `filteredItemsCache` size parameters do not determine the behavior of items with Publish Restrictions in Preview mode in the Experience Editor. This behavior is different from that of older versions. |  | 257901 |
 | Miscellaneous | The `X-Frame-Options Header`< is="" not="" set="" in="" the="">``FedAuth HandleLoginUrl processor​.​​​`` |  | 292718 |
 | Miscellaneous | ​​​The `Script` cache is not updated when a `script` item is modified.​ |  | 287353 |
 | Miscellaneous | ​​​`Sitecore.Caching.RuleCache` is not cleared properly when a rule is changed​. |  | 288734 |
 | Miscellaneous | ​​​Validation suppression doesn't work with item path​. |  | 292350 |
 | Miscellaneous | ​The `Cookie: .ASPXAUTH and sitecore_userticket` cookies remain valid for 10 minutes after logging out.​​ |  | 297587 |
 | Miscellaneous | ​​​There is a duplicate binding redirect for the System.Net.Http library​​​. |  | 307226 |
 | MVC | ​​​If an `HttpException` occurs, the inner exception is not shown in `PageModeRenderingErrorStrategy.HandleError`. | 477074 | 145188 |
 | MVC | ​​When you use the `Html.Partial` helper, ​a partial view cannot be found. | 471471 | 130238 |
 | MVC | ​​​​If the `Home` item has a child item that has the same name as an alias, the alias refers to the wrong item. | 510224 | 226035 |
 | MVC | ​​​The `Mvc.RenderersViewFolder` setting is not used for non-precompiled views​. | 511036 | 232129 |
 | MVC | ​​If and action contains the `RouteAttribute` attribute, it breaks some Sitecore applications. | 500170 | 206280 |
 | Path Analyzer | ​​​Device related conditions do not work during aggregation. |  | 234106 |
 | Security API | ​Federation Authentication does not support `Reverse Proxy`​.​​ | 518280, 522275 | 293209 |
 | Security API | If you enable the `Owin.config` file in preview mode, it gives an error. ​​ | 519138, 519138 | 292971 |
 | Security API | Insecure deserialization in `SitecoreAntiCsrfModule` can cause commands to be executed insecurely. |  | 312864, 293863 |
 | Sitecore Azure | `UpdateTaskStatus` throws a SQL exception in Azure. |  | 299693 |
 | Sitecore Forms | ​If a user submits a form after their session has expired, the post request returns error 500, which is not a helpful message.​​ |  | 159965 |
 | Sitecore Forms | ​​If a user submits a form with the default list item selected, no register post request is sent and incorrect metrics are recorded. |  | 161122 |
 | Sitecore Forms | ​​When a session ends, the user is not taken to the `Login` window. |  | 171812 |
 | Sitecore Forms | The current `goal/campaign/outcome/page` name is not shown in the list of selected save actions​.​​ |  | 158690 |
 | Sitecore Forms | ​​When a form contains several fields with identical field names, the metrics are displayed incorrectly. |  | 167444 |
 | Sitecore Forms | ​​When the `Redirect to a page` submit action is used, ​the form uses the `en` language.​ | 511165 | 228498 |
 | Sitecore Forms | If a user renames one of the form language versions, the language versions in the form list are not updated and the user must refresh manually.​​ |  | 214209 |
 | Sitecore Forms | ​​​If the language cookie is not present, Sitecore Forms switches to the `en` language. After you submit a form, it is rendered in the default language instead of the selected language. | 513662 | 234709 |
 | Sitecore Forms | ​​​​When a user enters a date, a register POST request is sent for each digit of the year and incorrect metrics are recorded. |  | 173652 |
 | Sitecore Forms | When a user tries to export data for a form that contains no submitted data, ​a confusing error message is displayed that suggests there is data.​​ | 501064, 505268, 507073, 510870, 523548, 526237 | 169470 |
 | Sitecore security | ​​A default profile is not added to newly created external users. | 502240, 502393, 507749, 509369 | 209306 |
 | Sitecore security | ​Cannot redirect to Sitecore Identity Server in IE.​​ |  | 287611 |
 | Sitecore security | The Sitecore Identity cookies are not secure​.​​ |  | 292850 |
 | Sitecore security | ​​​The Sitecore Identity WDP package contains PDB files. |  | 289641 |
 | Sitecore security | ​​There is an improper restriction of the XML External Entity Reference ('XXE') (CWE ID 611) in the `Sitecore.Mvc.dll​`. |  | 228681 |
 | Sitecore security | ​​Several security vulnerabilities have been fixed. |  | 312864, 293863, 287399 |
 | Sitecore security | ​​​ The `Refresh token` exchange fails when the client application restarts​. |  | 257990 |
 | Sitecore Services Client | ​​An exception occurs when controllers are decorated with both `[ServiceController]` and `[Route]`. |  | 289092 |
 | Sitecore Services Client | ​​​The `ItemService Search` feature processes the version parameter​ incorrectly. | 513471 | 249938 |
 | Sitecore Services Client | ​Invalid characters - `\n` or `\r` - are entered in the response reason phrase​.​​ |  | 214235 |
 | Sitecore Services Client | ​​​There are unnecessary DI registrations in Sitecore Services Client. |  | 184213 |
 | Sitecore Services Client | ​​​When a request uses an access token that has expired, the response contains a stack trace. | 486465, 493123 | 114299 |
 | Sitecore Services Client | ​​Sitecore Services Client exposes the real path of the file system in a response. |  | 131845 |
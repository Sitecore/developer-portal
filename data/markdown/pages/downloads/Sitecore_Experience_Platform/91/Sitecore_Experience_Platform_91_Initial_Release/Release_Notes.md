---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/91/Sitecore_Experience_Platform_91_Initial_Release/Release_Notes
---

**November 2018 – released Sitecore Experience Platform 9.1.0**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

Sitecore Experience Platform 9.1.0 includes:

-   Azure Toolkit - turning off performance counters significantly reduces data usage.
-   Azure Toolkit - the Application Insights functionality is now optional.
-   Azure Toolkit - ​​​Azure Toolkit 2.0.5 is compatible with Sitecore Experience Platform 9.1.​​​​​
-   Content Delivery Network - Sitecore now allows customers to easily setup, integrate, and leverage the benefits of the Azure Content Delivery Network (or any CDN) for use with Sitecore's media library. With CDN, customers can increase the availability and performance of their sites without having to extend the number of CD roles that they are maintaining.
    
    With Sitecore 9.1.0 or later, you can:
    
    -   Provision Azure CDN via Sitecore in the Azure Marketplace.
    -   Provision Sitecore with Azure CDN via the Sitecore Azure Toolkit.
    -   Configure CDN to work with your existing on-premise Sitecore installation.
-   Experience Management - all the analytics functionality has been removed from the XM packages - all the items, files, dlls, and configuration files have been removed. This improves performance when you run in CMS-only mode.
-   Experience Optimization - you can now get the personalization KPIs - Reach, Effect, Trailing Value per visit, without starting a personalization test.
-   Experience Optimization - you can now see detailed test results about completed tests.
-   Experience Optimization - Sitecore Cortex™ Processing Engine provides personalization suggestions.
-   Installation - new Sitecore Install Framework templates and PowerShell tasks have been added to support the remote installation of Sitecore in a distributed environment.
-   Installation - uninstallation support has been added for each topology and removes all the assets that are created during a standard installation except client authentication certificates and SSL certificates. ​​
-   Installation - new Sitecore Install Framework configuration templates for installing developer workstations have been added. These templates install all the required assets on a single machine.​​​
-   ​Installation - all the prerequisite software is now installed by the new SIF template file `prerequisites.json`.
-   JSS - a complete SDK that lets JavaScript developers build fully fledged solutions using Sitecore and modern JavaScript UI libraries and frameworks.​
-   Marketing Automation - you can now seed a plan from a contact list and all the contacts from the list are enrolled in the plan.
-   ​​Marketing Automation - has improved support for determining when a contact can not be re-enrolled in an automation plan.
-   Sitecore Forms - you can now use value providers to pre-fill form fields.
-   Sitecore Forms - you can now use conditions in form elements and build forms that respond to user input and show relevant questions.
-   Sitecore Identity - has been introduced as a default single sign-on mechanism across XM, XP, and XC.
-   Sitecore Cortex™ Processing Engine - has been introduced and provides a scalable platform for implementing Machine Learning within Sitecore​.
-   Search - support for the Lucene search provider will be deprecated in Sitecore XP 9.2.
-   Universal Tracker - a set of services that track mobile traffic and save it to xConnect.
    -   Collection Service, build on Sitecore Host, designed to handle a large load and record millions of interactions a day.
    -   Processing Service, built on Sitecore Host, designed to process interactions and apply any custom filters defined by the channel and save the updated interactions to xConnect.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | API | ​​The Content Delivery server role does not require the `Core` database when the Sitecore security membership provider is not used.​​ |  |  |
 | Azure Toolkit | ​​You can now turn off performance counters and this reduces the data usage of Application Insights by approximately 40%.​ |  |  |
 | Azure Toolkit | ​​The Application Insights functionality is now optional. |  | 215664 |
 | Azure Toolkit | ​Azure Toolkit 2.0.5 is compatible with Sitecore Experience Platform 9.1.​​​​​ |  |  |
 | Email Experience Manager | ​The sender address of an email campaign can now be programatically customized. |  | 20613 |
 | Email Experience Manager | ​​​The `From` address is now validated when EXM uses the custom SMTP provider. |  | 231076 |
 | Email Experience Manager | Support for using custom query string parameters when rendering email campaigns has been added. |  | 215431 |
 | Email Experience Manager | ​Email campaigns can now be classified as service messages. |  | 207200 |
 | Email Experience Manager | ​The new `Marketing Category` preference center has been added. This allows contacts to opt in/out of marketing preferences, and allows you to perform segmentation on these.​​ |  | 201064 |
 | Email Experience Manager | The `Email Experience Manager subscriptions` contact list source definition has been added. You use this to identify the subscribers​ to contact lists from EXM. |  | 219024 |
 | Email Experience Manager | ​​A number of new segmentation rules have been added. |  | 197343 |
 | Email Experience Manager | ​A new configuration has been added in the manager root to toggle whether unsubscribed confirmation emails should be sent or not. |  | 180332 |
 | Email Experience Manager | The ability to configure contact sending limits, that allow you to control how many emails a contact may receive on a daily, weekly, and monthly basis has been added. |  | 201062 |
 | Email Experience Manager | ​​​We now support encryption of the PII data in the `EXM.Master` database in the `suppressions` table. |  | 187979 |
 | Email Experience Manager | We now support the `List-Unsubscribe` email header​. |  | 75710, 75711 |
 | Email Experience Manager | ​A new marketing category taxonomy has been added. |  | 207257 |
 | Email Experience Manager | ​​The `Create segmented list` action has been added to the `Recipients` tab​. |  | 211313 |
 | Email Experience Manager | ​Unsubscribes are now processed in the `UnsubscribeFromList` pipeline, and the `UnsubscribeEvent` pipeline has been removed. |  | 211041 |
 | Email Experience Manager | ​You can specify the SQL timeout value. |  | 218085 |
 | Experience Management | ​All the analytics functionality has been removed from the XM packages to improve performance when you run in CMS-only mode. |  |  |
 | Experience Optimization | ​​It is now possible to get the personalization KPIs - `Reach`, `Effect`, and `Trailing Value per visit`, without starting a personalization ​test​. To get them, publish a personalized page and then in the Experience Editor, on the `Optimization` tab, open a `Personalization` dialog. | 478488 | 215187 |
 | Experience Optimization | ​You can now see detailed test results about completed tests. To see the details, in the Experience Optimization application, in the `Historical tests` list, click on an item. | 485648, 473564, 473378, 512452 | 215168 |
 | Experience Optimization | ​​The Sitecore Cortex™ Processing Engine​ provides personalization suggestions:<br /><br />-   When a component test is finished and the winner is selected, users can see suggestions about how to personalize the page and achieve better results.<br />-   The Sitecore Cortex™ Processing Engine generates the suggestions based on a number of different behavioral traits.<br /><br /> |  | 216208 |
 | Experience Optimization | The performance of `Version Redirection Request cache` has been improved​ in Content Testing. | 504837, 505481, 513969, 514838 | 215433 |
 | Installation | New Sitecore Install Framework templates and PowerShell tasks support the remote installation of Sitecore in a distributed environment. Remote deployment installs SIF remotely, copies the required assets; including the packages and license files to the target server, and installs Sitecore.​​​​ ​ |  | 230625 |
 | Installation | ​Sample PowerShell installation scripts have been added for each topology. |  | 286558 |
 | Installation | Uninstallation support has been added for each topology. Uninstallation removes all the assets that are created during a standard installation including IIS sites, app pools, Windows Services, files, and databases. Uninstallation does ​​not remove client authentication certificates and SSL certificates. ​​​ |  | 230626 |
 | Installation | ​New Sitecore Install Framework configuration templates for installing developer workstations have been added. These templates install all the required assets on a single machine.​​​ |  | 220452 |
 | Installation | ​All the prerequisite software is now installed by the new SIF template file `prerequisites.json`. |  | 192248 |
 | Item Buckets Content Search | ​Word and PDF documents can now be indexed without the need for 3d party software.​ |  |  |
 | Item Buckets Content Search | ​The Content Search API has been refactored to enhance customization.​ |  | 94679, 402456 |
 | JSS | Sitecore JavaScript Services is a complete SDK that lets JavaScript developers build fully fledged solutions using Sitecore and modern JavaScript UI libraries and frameworks.​ |  |  |
 | List Manager | ​We can now show subscription sources from external systems​​. |  | 208795 |
 | List Manager | ​​You can remove a source from a list. |  | 199040 |
 | List Manager | ​Segments can be tagged and used in analytics​. |  | 195390 |
 | List Manager | ​​Event logging has been added for creating, changing or deleting a segment. |  | 189920 |
 | List Manager | ​Manual subscriptions are shown as a source​. |  | 149720 |
 | List Manager | ​​Converted lists are shown as a source​​. |  | 149717 |
 | List Manager | You can import a csv file directly into a contact list​​. |  | 149719 |
 | Login | Sitecore Identity has introduced as default single sign-on mechanism across XM, XP, and XC. Sitecore Identity is backwards compatible with Sitecore Membership user storage and can be extended with other identity providers such as Azure AD, Auth0, and so on.​ |  | 217386 |
 | Marketing Automation | ​​Marketing Automation has improved support for determining when a contact can not be re-enrolled in an automation plan, such as limiting the number of times a contact can enter and exit a plan. |  | 219502 |
 | Marketing Automation | ​​​Marketing Automation now supports seeding a plan from a contact list. All the contacts from the list are enrolled in the plan. |  | 136664 |
 | Marketing Automation | In the Marketing Automation Pool database, ​the resolution of the scheduled column has been increased.​ |  | 190701 |
 | Marketing Automation | The user is now altered if there are undefined activities in a campaign when they try to activate it. |  | 196033 |
 | Marketing Automation | ​You can now add contacts to an automation campaign from a list​​. |  | 136664 |
 | Marketing Automation | ​​You can now remove every contact from a campaign​​. |  | 136667 |
 | Marketing Automation | An `Enrolled contacts` column has been added to the lists for campaigns. |  | 158321 |
 | Marketing Automation | ​You can now purge a specific contact from a campaign​. |  | 200037 |
 | Marketing Automation | ​Campaign templates have been added. |  | 145648 |
 | Marketing Automation | ​​Marketing Automation has been upgraded to `Angular 5`​. |  | 224229 |
 | Marketing Automation | Enrollment controls​​ that define how many times a contact can be enrolled in a campaign have been added. |  | 219502 |
 | Marketing Automation | ​The option to create a new campaign from a template​ has been added. |  | 136637 |
 | Marketing Automation | ​​A list page that shows the campaign templates has been added. |  | 202255 |
 | Marketing Automation | ​The option to save a campaign as a template has been added. |  | 136661 |
 | Marketing Foundation | Sampling has been added to xConnect to support the range of percentile values that can be used to filter data during the extraction of contact and interaction data. Sampling is built on top of the current data extraction functionality.​​ |  | 225990, 225991 |
 | Marketing Foundation | Processing Engine `t​​emporary data storage` and `tasks storage` support the `SQL Always Encrypted` feature. |  | 217496 |
 | Marketing Foundation | ​​When a search cursor is restored from a bookmark, it now returns fewer contacts. |  | 235102 |
 | Marketing Foundation | Sitecore Cortex™ Processing Engine provides a scalable platform for implementing Machine Learning within Sitecore​. |  |  |
 | Marketing Foundation | The Solr version has been updated to 7.2.1. |  | 203239 |
 | Marketing Foundation | ​​High Availability support has been added for the Processing Engine. |  | 217497 |
 | Marketing Foundation | ​​​XConnect Web OData has been upgraded to version 7.0.0. |  | 228020 |
 | Marketing Foundation | ​You can now use the `Azure Search Query API Key` on XConnect Collection/Search instances instead of the `Admin Key`. |  | 256372 |
 | Marketing Foundation | ​​SQL Server throughput has been improved by changing the XConnect IndexWorker data polling frequency to two minutes. |  | 229841 |
 | Marketing Foundation | ​​​The Reference Data clients are now .net standard and can be used from .net core applications. |  | 203686 |
 | Marketing Foundation | ​The Reference Data client cache is enabled by default to improve performance. |  | 225289 |
 | Marketing Foundation | ​​The performance of the Reference Data service cache has been improved. |  | 230550 |
 | Miscellaneous | ​Various assemblies have been updated to .NET standard 2.  <br />Many assemblies still target .NET Framework 4.7.1. |  |  |
 | Miscellaneous | Some security improvements and bug fixes have been implemented.​​ |  |  |
 | MVC | ​A new `ValidateAntiForgeryToken` attribute that is aware of bearer token authentication has been added. |  | 223885 |
 | MVC | ​To improve performance, ChainedAreaResolveStrategy now uses Func for debug messages. | 517293 | 258135 |
 | MVC | ​​​The `Sitecore.Mvc.Helpers.CreateControllerInstance` method has been optimized to improve performance. |  | 215098 |
 | MVC | `TraceBlock.Start` has been optimised to improve performance when racing is turned off. |  | 220772 |
 | Search | ​​Azure Search now uses the `POST` method to submit search queries and thereby avoids the 4K bytes limitation.​ | 228866 | 147173 |
 | Security API | Federated Authentication now supports Azure AD B2C bearer tokens.​ | 509834 | 226318 |
 | Security API | The new `GetProviderUserKey` method added to `Sitecore.Security.Accounts.User`.​​ |  | 225264 |
 | Security API | The Sitecore CM and CD server roles support the `Resource Owner Credentials Grant` flow with Sitecore Identity access tokens. |  | 226703 |
 | Sitecore Forms | You can now save your forms in a folder and use access rights management to manage the forms saved in these folders.​​ |  |  |
 | Sitecore Forms | ​You can now use value providers to pre-fill form fields. Custom value providers can be added to pre-fill fields with any specific data. |  |  |
 | Sitecore Forms | ​​​You can now use conditions in form elements and build forms that respond to user input and show relevant questions. |  |  |
 | Sitecore Services Client | ​​Has been updated to use OData 7.0.0. |  | 228370 |

## Deprecated/Removed

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Email Experience Manager | ​​The following methods on `Sitecore.EmailCampaign.Cm.ISubscriptionManager` have been removed:<br /><br />-   `Unsubscribe(ContactIdentifier contactIdentifier, Guid messageId, bool fromAll)`<br />-   `RemoveUserFromList([NotNull] Contact contact, [NotNull] Guid listId);`<br />-   `RemoveUserFromGlobalOptOutList(ContactIdentifier contactIdentifier, Guid managerRootId);`<br /><br />and replaced by:<br /><br />-   `bool Unsubscribe(ContactIdentifier contactIdentifier, Guid messageId);`<br />-   `bool UnsubscribeFromAll(ContactIdentifier contactIdentifier, Guid managerRootId);`<br />-   `bool UnsubscribeFromAll([NotNull] Contact contact, [NotNull] ManagerRoot managerRoot);`<br />-   `bool RemoveContactFromList([NotNull] ContactIdentifier contactIdentifier, [NotNull] Guid listId);`<br />-   `bool RemoveContactFromList([NotNull] Contact contact, [NotNull] Guid listId);`<br /><br /> |  |  |
 | Email Experience Manager | The following methods on `Sitecore.EmailCampaign.Cd.Services.IClientApiService` have been removed:<br /><br />-   `Subscribe(SubscribeMessage subscribeMessage)`<br />-   `Unsubscribe(UnsubscribeMessage unsubscribeMessage)`<br /><br />and replaced by:<br /><br />-   `void UpdateListSubscription(UpdateListSubscriptionMessage message)`​<br />​ ​ |  |  |
 | Email Experience Manager | ​The `UnsubscribeEvent` pipeline has been removed. |  | 211041 |
 | Experience Optimization | The `Sitecore.Analytics.Rules.Conditions.ContactPatternMatchCondition` class is now marked as `Obsolete`. It has been replaced with the ` Sitecore.ContentTesting.Rules.Conditions.ContactPatternMatchCondition` class from the `Sitecore.ContentTesting` assembly.  <br />The `\master\sitecore\system\Settings\Rules\Definitions\Elements\Visitor\Matches Pattern` item has been moved to `\master\sitecore\system\Settings\Rules\Definitions\Obsolete\Common\Conditions\Visitor\Matches Pattern` as the corresponding class became obsolete. |  | 213824 |
 | Experience Optimization | The `Sitecore.Analytics.Rules.Conditions.HasCampaignCondition` class is now marked as `Obsolete`. It has been replaced with the `Sitecore.ContentTesting.Rules.Conditions.HasCampaignCondition` class from the `Sitecore.ContentTesting` assembly.  <br />The `\master\sitecore\system\Settings\Rules\Definitions\Elements\Visit\Campaign was Triggered` item has been moved to `\master\sitecore\system\Settings\Rules\Definitions\Obsolete\Common\Conditions\Visit\Campaign was Triggered` as the corresponding class became obsolete. |  | 213820 |
 | Experience Optimization | The `Sitecore.Analytics.Rules.Conditions.CountryCondition` class is now marked as `Obsolete`. It has been replaced with the `Sitecore.ContentTesting.Rules.Conditions.CountryCondition` class from the `Sitecore.ContentTesting` assembly.  <br />The `\master\sitecore\system\Settings\Rules\Definitions\Elements\GeoIP\Country` item has been moved to `\master\sitecore\system\Settings\Rules\Definitions\Obsolete\Common\Conditions\GeoIP\Country` as the corresponding class became obsolete. |  | 213822 |
 | Marketing Automation | ​​​The custom condition serialization of Marketing Automation has been deprecated and will be removed in a future release. If you're using this functionality, you should use the segmentation condition serialization features instead. |  | 221139 |
 | Marketing Foundation | ​​The `Analytics.ClusterName` and `Analytics.Hostname​` settings have been deprecated. |  | 257459 |
 | Marketing Foundation | The `AcceptSession` and `RedirectSession` HTTP handlers have been removed. |  | 202341, 230523 |
 | Miscellaneous | The `Sitecore.Analytics.Lookups.LookupManager` class has been deprecated in Sitecore 9.1. You should use the `Sitecore.CES.GeoIp.Core.Lookups.LookupManager` class instead. |  |  |
 | MVC | `ControllerRunnerActionInvoker` has been deprecated. |  | 76939 |

## Breaking changes

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Email Experience Manager | ​Chilkat has been upgraded to the latest version.​ |  | 230874 |
 | Email Experience Manager | ​​The constructor for `Sitecore.Modules.EmailCampaign.RecipientManager` now takes the additional `ICurrentDateProvider` and `IEmailPeriodService` arguments. |  |  |
 | Email Experience Manager | The constructor for `Sitecore.Modules.EmailCampaign.Factories.RecipientManagerFactory` now takes the additional `ICurrentDateProvider` and `IEmailPeriodService` arguments. |  |  |
 | Email Experience Manager | The signature for the `IExmCampaignService.GetMessageCampaign(Guid campaignId)` method now takes a `CultureInfo culture` parameter - `GetMessageCampaign(Guid campaignId, CultureInfo culture)`.​ |  |  |
 | Email Experience Manager | ​​``` Sitecore.Modules.EmailCampaign.Messages.WebPageMail.FromItem`` and `Sitecore.Modules.EmailCampaign.Messages.ABTestMessage.FromItem` now take an additional `PipelineHelper` argument.`` ``` |  |  |
 | Email Experience Manager | The constructor for `Sitecore.Modules.EmailCampaign.Core.TypeResolver` now takes an additional `PipelineHelper` argument. |  |  |
 | Email Experience Manager | The `SubscribeMessagesBus` and `UnsubscribeMessagesBus` message buses have been replaced by `UpdateListSubscriptionMessagesBus`. |  |  |
 | Experience Analytics | ​​The storage for dimensions has been updated so that each table only contains 1 dimension. |  | 194073 |
 | Experience Analytics | ​The storage for dimensions has been updated so that each table only contains 1 dimension. As a result some tables have been removed from the schema with the data has been migrated to other tables. |  | 194073 |
 | Installation | ​​​The SIF installation scripts have been updated to use a random generated password if no password is provided as a parameter and no longer use the legacy default password. The randomly generated password is written to the installation log file.​ |  | 230627 |
 | Miscellaneous | ​​<br /><br />-   All the XP roles now require .NET Framework 4.7.1.<br />-   All the XM roles now require .NET Framework 4.7.1.<br />-   Various assemblies now target .NET Standard 2​​​.0.<br /><br /> |  |  |
 | Security API | Federated Authentication is turned on by default on CM and CD servers.​ |  | 202556 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | API | ​A deadlock can occur when you start an application. ​ |  | 209972, 208222, 218852, 228602, 229824 |
 | DataProvider MSSQL | Sitecore SQL queries do not support unicode. |  | 96969, 455421 |
 | Email Experience Manager | ​​Several localisation issues​ have been fixed. |  | 220718, 229458 |
 | Email Experience Manager | ​Email conditions only allow you to select emails in the default manager root. |  | 228511 |
 | Email Experience Manager | ​Some EXM conditions are broken in new rules engine​. |  | 192621 |
 | Email Experience Manager | The `Time of day` events list does not open in IE​. |  | 204911 |
 | Email Experience Manager | ​​The default email validation regex fails for some real emails​. |  | 200540 |
 | Email Experience Manager | ​​Multiple query string parameters for external links are corrupted by decoding\encoding​​. |  | 219943 |
 | Email Experience Manager | ​The CRAM-MD5​ SMTP authentication method does not work. |  | 204052 |
 | Email Experience Manager | An exception is thrown if an email bounces when an automated email campaign is dispatched.​ |  | 217523 |
 | Email Experience Manager | ​​In the `Value and Engagement` report, the `Value` and `Page` view columns are incorrect if several pages are opened in the same session. |  | 215444 |
 | Email Experience Manager | The location column in the `Value and Engagement` report shows "-" instead of the location. |  | 225351 |
 | Email Experience Manager | ​An exception may be thrown when a bounce is handled​. |  | 211321 |
 | Email Experience Manager | ​​Soft bounces are added to the global opt-out list​. |  | 230509 |
 | Email Experience Manager | ​A race condition​ can occur in the dispatch queue. |  | 230101 |
 | Email Experience Manager | ​​​Links in multilingual email campaigns always point to the default language​. |  | 231995 |
 | Email Experience Manager | Deploy​ment of the analytics campaign sometimes fails and this causes the dispatch of regular email campaigns to be paused or the activation of an automated email campaign to fail. |  | 229154 |
 | Email Experience Manager | ​Clicks and opens are not registered correctly when an email campaign does not have an `en` language version. |  | 232559 |
 | Email Experience Manager | ​​Some items contain references to non-existant renderings. |  | 211321 |
 | Email Experience Manager | ​It is not possible to get detailed delivery statistics using the campaign ID. |  | 221550 |
 | Email Experience Manager | ​The wrong ​A/B test winner is selected. |  | 125069 |
 | Email Experience Manager | ​If you disable EXM, aggregation​​ does not work correctly. |  | 215205 |
 | Email Experience Manager | ​​Members of the `Forms and Marketing Automation Editors` security role cannot view the lists of activated automated email campaigns. |  | 234728 |
 | Email Experience Manager | In non-English languages, charts and report cards contain some unexpected text. |  | 232722 |
 | Email Experience Manager | ​On the `Review` tab, the `Send` button only sends a limited number of messages​​. |  | 214025 |
 | Email Experience Manager | ​​If a title element contains an attribute, it prevent dispatch​. |  | 255872 |
 | Email Experience Manager | ​Clicking on the Email Delivery Service link may show an error in the browser console. |  |  |
 | Email Experience Manager | ​​When you click on the `Email Delivery Service` button, it can show an error in the browser console. |  | 160698 |
 | Experience Analytics | ​The `Metrics` dropdown list is not displayed on all reports for all languages.​ |  | 220489 |
 | Experience Analytics | ​​Regions are incorrectly displayed as `Unknown` in reports. | 492420 | 185047, 256788 |
 | Experience Analytics | Experience Analytics displays incorrect region codes for Chinese regions. | 476628 | 142883 |
 | Experience Analytics | ​`LinkBuilder` returns an incorrect link to a campaign report. |  | 233625 |
 | Experience Analytics | ​Some items in the `core` database have broken links. |  | 222262 |
 | Experience Analytics | ​​​Some items in the user interface was not localized into the supported languages. |  | 220487, 254778 |
 | Experience Analytics | The link in the Experience Profile cannot be resolved in scaled environments. |  | 249822 |
 | Experience Analytics | The Pages reports do not display data when you use a language other than English. |  | 255832 |
 | Experience Editor | ​​An item can be viewed in `Preview` mode if read access is restricted for an anonymous user​. | 511668, 514058 | 231227 |
 | Experience Editor | In the Experience Editor, pasting copied text breaks the markup in the `RTE` field in Chrome. | 509446 | 224115 |
 | Experience Editor | ​Personalization prevents Sitecore from saving the values in fields. | 508787 | 223553 |
 | Experience Editor | ​​A `MyItemsCount` request can block `GetWorkFlowCommands` and `GetDatasourceUsagesCount` requests and freeze the browser​. | 506040, 508191 | 219064 |
 | Experience Editor | A security issue has been fixed in the Experience Editor. | 505082, 504965 | 214102 |
 | Experience Editor | ​The `MyItemsCountRequest` class performs `RefreshIndex` synchronously​ and degrades performance. | 502632, 506040, 508191, 507537, 509413, 510247, 510536, 512936, 515340, 516972 | 208634 |
 | Experience Editor | ​The `web.Debug.config`and `web.Release.config` files are stored in the Sitecore installation archive​. | 500910 | 206530, 205511 |
 | Experience Editor | The Experience Editor can break if there is no access to the `Associated content` checkbox​.​​ | 491205, 496934, 503542, 477722, 481228, 485846, 490091, 493780, 499377, 502868, 510988, 515103 | 145086 |
 | Experience Editor | Geo IP Region and DNS values are not updated in the Experience Explorer​. | 472865, 483495, 484067, 489559, 498493 | 132028 |
 | Experience Editor | ​Sitecore loses the `sc_site` query string parameter when you click `Lock and Edit`. | 469132, 475520, 492677, 495322, 497904, 499058, 509443, 510495, 509941, 513780 | 126524 |
 | Experience Editor | ​​In the Experience Editor, in Debug mode, `Sitecore.Context.PageMode.IsDebugging` shows `false` on pages. | 459454, 507706 | 102657 |
 | Experience Optimization | ​​A/B Test stops performing when one of the tested items is modified and published.​ | 491531 | 188111 |
 | Experience Optimization | Virtual users are not logged off when additional background tasks are running at the same time​. | 503579, 504102, 478087, 484655, 480417, 489901, 487051, 493806, 493829, 493608, 497253, 499722, 498580, 500324, 500714, 499676, 504462, 506089, 506995, 507010, 511074, 512858, 515583, 514199, 515684, 516827 | 154580 |
 | Experience Profile | The Experience Profile dashboard​ does show `Location`. | 509482, 515151 | 224129 |
 | Experience Profile | ​​Experience Profile throws an error when a contact has some profile/profile key values recorded, but the associated profile has no related pattern cards. | 475039, 479504,483228,490623,493935,498400,500451,511554,513963 | 139548 |
 | Experience Profile | ​Details of the first interaction are always shown instead of the most recent interaction.​​ | 502658, 503133, 511450, 512901 | 209472, 213092 |
 | Experience Profile | ​Contacts without interactions or with interactions from channels other then web are not displayed. | 496526, 502343, 506518 | 197271, 197303, 208466, 209041, 219043 |
 | Federated Experience Manager | ​The FXM Experience Editor does not pre-process the beacon in ​`<head>`. | 492737, 493378, 492734, 502080, 505913 | 189862 |
 | Installation | The Sitecore Install Framework templates contain inline comments and don't conform with the JSON specification. |  | 230618 |
 | Installation | ​The `CreateBindingsWithThumbprint` and `CreateBindingsWithDevelopmentThumbprint` task​​s contain typos. |  | 234759 |
 | Item Buckets Content Search | ​The `AddFieldByFieldTypeName` section is almost never used​. |  | 94802, 404831 |
 | List Manager | A user with a non-English language cannot create lists/segments.​ |  | 201680 |
 | List Manager | ​Paging does not work in the list of contacts. |  | 207186 |
 | List Manager | A new segment can not be added to a segmented list.​​​ |  | 207333 |
 | List Manager | ​​A segment is not completely removed from a list page.​​ |  | 230567 |
 | List Manager | When you remove a list source, it leaves the undefined source type​​. |  | 230558 |
 | List Manager | ​The `Save` button is active after changes in list sources have been saved.​​ |  | 230553 |
 | List Manager | When you create a segmented list page, it​ has the wrong title. |  | 215268 |
 | Login | ​​​If a locked user tries to log in when Federated Authentication is disabled, the yellow screen of death appears with the `The method or operation is not implemented.` message. | 511490, 513847, 518099 | 229727 |
 | Marketing Automation | Adding more than 6 conditions to a rule in the rule set editor causes an exception. |  | 234839 |
 | Marketing Automation | ​The `Active/inactive` list pages only contain campaigns that are in English. |  | 223088 |
 | Marketing Automation | ​​Automation campaigns and templates can be named with only white spaces. |  | 230126 |
 | Marketing Automation | ​The application is hidden if the licensing key is not present. |  | 225531 |
 | Marketing Automation | ​In the `Campaign Details` dialog the `MM` and `HH` fields are not aligned with the Start date and `End Date` fields. |  | 230942 |
 | Marketing Automation | In CMS only mode, the `Marketing Automation` icon is visible in the launchpad.​ |  | 217914 |
 | Marketing Automation | ​​Activity classifications are not localizable. |  | 219852 |
 | Marketing Automation | The `Unsaved changes` dialog appears for a defined listener when no changes have been made. |  | 201577 |
 | Marketing Automation | An error appears in the log file when you browse from the campaign canvas to the list page and then open the campaign canvas again​.​ |  | 213192 |
 | Marketing Automation | ​​A campaign cannot be activated when a delay is defined in the campaign. |  | 197433 |
 | Marketing Automation | Marketing themes cannot be localized​​. |  | 234599 |
 | Marketing Automation | ​An error occurs when you click `Report view` during a long-running request. |  | 214971 |
 | Marketing Automation | If a Marketing Automation campaign does not have any activities, it does not have a `Default` path.​ |  | 205510 |
 | Marketing Automation | ​​Marketing Automation items use the campaign ID instead of the campaign name. |  | 224571 |
 | Marketing Automation | You cannot set 31 days as the `Listen for`-interval on listener activities. |  | 182966 |
 | Marketing Automation | ​If you activate a campaign after the end date has passed, the user does not receive a message that the end date has passed. |  | 191808 |
 | Marketing Automation | An activity is not visible if its ID contains upper case characters​.​​ |  | 227884 |
 | Marketing Automation | In the toolbox, the activity category should remain collapsed when you switch to the context pane and back​ again. |  | 184946 |
 | Marketing Automation | ​A potential race condition couold occur when using Live Events with anonymous contacts. |  | 252301 |
 | Marketing Automation | The Marketing Automation operations server has high CPU usage when handling Live Events.​​ |  | 229806 |
 | Marketing Automation | ​The Marketing Automation operations server requires the `Collection` role to be enabled on the xConnect instance to ensure that the xDB model is available. |  | 226201 |
 | Marketing Automation | ​​Several stored procedures are missing from the dacpac file that is used for Azure deployments of the Marketing Automation database. |  | 225569 |
 | Marketing Automation | ​​Multiple definition types are created in the Reference Data service when multiple callers try to create the definition type at the same time. |  | 225572 |
 | Marketing Automation | ​In the SIF config files for the different deployments, the casing of the Marketing Automation service name is not consistent. |  | 216186 |
 | Marketing Automation | ​​Marketing Automation does not load all the contact facets that are required to support all the out-of-the-box segmentation conditions. |  | 249719 |
 | Marketing Foundation | ​​​Optional integration with Microsoft Machine Learning Server within the Sitecore Cortex™ Processing Engine​. |  |  |
 | Marketing Foundation | Sitecore Cortex™ Processing Engine provides a scalable platform for implementing Machine Learning within Sitecore​. |  |  |
 | Marketing Foundation | ​​A new reporting foundation​ has been introduced. |  |  |
 | Marketing Foundation | xConnect ignores the configuration used for self signed certificates that are not installed in the certificate store.  <br />This is normal behaviour when cloud deployments try to use self-signed certificates.​ |  | 234795 |
 | Marketing Foundation | ​The `XConnect Indexer` does not resume indexing if a rebuild fails during the `Finishing` step​. |  | 199590 |
 | Marketing Foundation | ​The `LastModifiedDate` field in contact facets is not indexed​.​​ |  | 128942 |
 | Marketing Foundation | The `Campaign on current Interaction has custom classification` condition throws an exception if the campaign has no custom classifications. |  | 208816 |
 | Marketing Foundation | When Solr is enabled, the web and master indexes of the marketing assets contain the entire media library and not just the marketing assets.​ |  | 38857 |
 | Marketing Foundation | The xConnect search indexer may timeout if live indexing has more than a million of contacts/interactions waiting to be indexed. |  | 203919 |
 | Marketing Foundation | In xConnect search, the filtering of contacts and interactions by the date and time when a specific facet was last modified does not work.<br /><br />Queries like this:<br /><br />`c.GetFacet().LastModified >= value​ `<br /><br />​ |  | 128942 |
 | Marketing Foundation | The `Sitecore.Marketing.Definitions.MarketingAssets.Repositories.Solr.IndexConfiguration.config` and the `Sitecore.Marketing.Definitions.MarketingAssets.Repositories.Azure.IndexConfiguration.config` files are required by the `Reporting` role for onPrem and for Azure solutions. They are not required because the search provider is not configured on the `Reporting` role.​​ |  | 228245 |
 | Marketing Foundation | In the `Sitecore.Analytics.Tracking.config` file, there is an irrelevant note about the `Analytics.RedactIpAddress` setting. |  | 228329 |
 | Marketing Foundation | XConnect Index Worker Metrics fills up the AppInsights' daily cap​.<br /><br />The performance counters that are used by the xConnect Search Indexer have been updated to prevent it reaching AppInsights daily cap.<br /><br />1.  The following performance counters have been disabled by default:  <br />    Category: "Sitecore Xdb Collection Index Write Operations"  <br />    Counters:<br />    <br />    -   IndexWriteOpsTotal<br />    -   IndexWriteOpsRateSec<br />    -   IndexWriteAvgBatchSize<br />    -   IndexWriteAvgBatchSizeBase<br />    -   IndexWriteAvgTime<br />    -   IndexWriteAvgTimeBase<br />    <br />      <br />    Category: "Sitecore Xdb Collection IndexWorker GetChanges Operations"  <br />    Counters:<br />    -   GetChangesOpsRateSec<br />    -   GetChangesOpsTotal<br />    -   GetChangesAvgTime<br />    -   GetChangesAvgTimeBase<br />2.  The following performance counters were moved to a new category:  <br />    Category: "Sitecore Xdb Collection Signal Indexed Changes"  <br />    Counters:<br />    -   SignalIndexedChangesOpsTotal<br />    -   SignalIndexedChangesOpsRateSec<br />    -   SignalIndexedChangesAvgTime<br />    -   SignalIndexedChangesAvgTimeBase<br /><br /> |  | 199902 |
 | Marketing Foundation | ​​The XConnect Search Indexer retrier is too aggressive and increases CPU usage. |  | 213419 |
 | Marketing Foundation | When the client language is German, if you try to create a segmentation rule, the `wo das Datum vorbei ist` condition does not display the date picker. |  | 227841 |
 | Marketing Foundation | In xConnect, the `Search` cursor does not respect items that have already been consumed during a split operation.​ |  | 221738 |
 | Marketing Foundation | ​​On the MongoDB provider, when an attempt to save a new contact fails, `Interactions` and `InteractionFacets` are saved. |  | 222999 |
 | Marketing Foundation | ​In a multi-threaded environment, parallel saves of interactions about a single contact lose facet data. |  | 183874 |
 | Marketing Foundation | ​When importing a large list of contacts, some contacts are imported twice with identifiers that are duplicated and saved in different shards. |  | 187635 |
 | Marketing Foundation | ​​​When Solr returns a non-JSON response, xConnect fails to log the error details, and logs an `error parsing` error instead. |  | 219950 |
 | Marketing Foundation | When you deploy a new custom XConnect model to an XConnect search instances before before you deploy it to the XConnect indexer instance, search requests ignore the sort parameters. |  | 255643 |
 | Marketing Foundation | ​An exception occurs when identifying a contact if the `Behavior Profile` contains a reference to a deleted profile. |  | 163109 |
 | Marketing Foundation | When using the Mongo session state provider, the `MongoDB.Driver.MongoDuplicateKeyException` sometimes occurs.​ |  | 155149 |
 | Marketing Foundation | ​In the Japanese version, the country condition item - `/sitecore/system/Settings/Rules/Definitions/Elements/GeoIP/Country` - contains an incorrect parameter text. | 515914 | 255115 |
 | Marketing Foundation | If the `X-Forwarded-For` header of an HTTP request contains a port number, it breaks the HTTP request​ header processing.​ |  | 132442 |
 | Miscellaneous | ​​Sitecore XP 9.0 Update 2 has been merged into Sitecore XP 9.1. |  |  |
 | Miscellaneous | ​`SC_TICKET` entries are never cleared from the `Properties` table​​. |  | 223702 |
 | Miscellaneous | ​​The `` Item:create` command always creates items in the client language​.` `` |  | 225379 |
 | Miscellaneous | The `Enabled clones` feature decrease field read performance for non-cloned items​.​​ |  | 227274 |
 | Miscellaneous | When you create a new version of an item, the workflow state is not changed to `Initial`​. |  | 222542 |
 | Miscellaneous | ​​The `Sitecore.Links.ItemEventHandler.OnItemCopied()` method doesn't update links for subitems​. |  | 195204 |
 | Miscellaneous | ​​​A field name that contain a culture suffix is translated incorrectly.​ |  | 192873 |
 | Miscellaneous | After republishing, an item doesn't get a new name if its name and version are changed at the same time. |  | 251170 |
 | Miscellaneous | ​After republishing, ​an item doesn't get a new template if its template is changed​. |  | 236015 |
 | Miscellaneous | ​​​Every media item link contains the 'la' parameter in the query string.​ |  | 96886, 453692 |
 | Miscellaneous | ​An item that is the target of an internal link isn't selected when you open the `Insert a Link` dialog. |  | 92179, 355602 |
 | Miscellaneous | ​Rendering parameters are double encoded. |  | 91473, 336760 |
 | Miscellaneous | ​​​In the `Layout Details`, a non-existant placeholder attribute can break the `Device Editor​`. |  | 96829, 452981 |
 | Miscellaneous | There is different language fallback behaviour on items created from branches and items created from templates.​ |  | 147684 |
 | Miscellaneous | The fallback language version is indexed. |  | 127177​ |
 | Miscellaneous | ​Exclude all master database references config when role is set to ContentDelivery​​ |  | 227326 |
 | Miscellaneous | ​​​When you use the `LinqToLuceneIndex ApplyScalarMethods​` function, an excessive number of type casts are made. |  | 94847, 405790 |
 | Miscellaneous | ​The `Icons cache` folder does not respect the configured `$tempfolder`.​ |  | 216195 |
 | Miscellaneous | When you press Ctrl+S, an item is saved twice. |  | 96018, 433938 |
 | Miscellaneous | ​​If there is an invalid value in the `__Preview` field, it prevents the Content Editor from accessing the item​​. |  | 96826, 452905 |
 | Miscellaneous | ​​The "*" wildcard causes conflicts when you install a Sitecore package that contains no existing items on the same level. |  | 220315 |
 | Miscellaneous | Workflow validation replaces field values with empty strings. |  | 221523 |
 | Miscellaneous | It is not possible to automatically update the contents of the `Links` table on CD instances​. |  | 91375, 334874 |
 | Miscellaneous | ​​HTML characters in the `alt` attribute of the ``<img>`` tag are not encoded​. |  | 234443 |
 | Miscellaneous | ​​​If a template has the same template as a base template and one of the fields has a default value​, an error can occur. |  | 116550 |
 | Miscellaneous | If Solr is down, ​`GetResults` and `GetFacets` produce an `InvalidOperationException`. |  | 158329 |
 | Miscellaneous | ​The Solr search provider does not compare `DateTime` fields to see if they contain the same​ value.​ |  | 173890 |
 | Miscellaneous | ​​In the Edge browser, focus on a selected image can be lost if several images are inserted into table cells in the RTE​. |  | 191129 |
 | Miscellaneous | ​​​The `SolrFieldNameTranslator` method is not able to resolve field configuration if `FieldName` consists of more than one word​. |  | 127550 |
 | Miscellaneous | ​​All master database references are not excluded when the server role is set to `ContentDelivery`​. |  | 227326 |
 | Miscellaneous | ​​When resolving dependencies, the items that should be excluded from the index are checked incorrectly. |  | 96740, 451056 |
 | Miscellaneous | In a Solr query, the `Like LINQ` methods escape the tilde character.​​ |  | 149252 |
 | MVC | ​​​There is a performance regression in `GetDynamicPlaceholderKeysArgs`. |  | 220775 |
 | MVC | Registering a custom MVC route does not work and an exception is thrown. | 514056 | 250351 |
 | MVC | ​​The `/api/sitecore/` routing is not registered in CD instance​s. | 501203, 504700, 503663, 517792 | 213935 |
 | Path Analyzer | ​The Base map standard values have a broken link. |  | 222263 |
 | Path Analyzer | ​If a user selects an item in the content tree that does not have a template, an exception is thrown. |  | 220596 |
 | Path Analyzer | ​​​The `Sitecore.PathAnalyzer.Processing.BinaryKeyInteractionProcessingPoolScheduler.TryGetNextAsync()` method​ contains an Incorrect null check. | 513150 | 234551 |
 | Search | ​On Azure, if a search contains the `#` symbol, Sitecore can display the `An error has occur and the search cannot be completed.` error message. |  | 183396 |
 | Search | ​On Azure, if a search contains the `%, &` symbols, Sitecore can display the `An error has occur and the search cannot be completed.` error message. |  | 183381 |
 | Search | The `Sitecore.ContentSearch.Azure.Index.Core.config` file excludes the template with the `76F63DF7-0235-4164-86AB-84B5EC48CB2A` ID from the index.​​ | 499959, 500635, 501461, 505681 | 204191 |
 | Search | ​Azure Search requests are deadlocked.<br /><br />Azure Search has been rewritten to prevent deadlocks and as a result, you can now reuse threads when performing searches​.<br /><br /> | 510172, 51167 | 227363 |
 | Search | ​Azure search does not support the latest version of the API - 2016-09-01. | 501719 | 213569 |
 | Search | ​​The `CreateClient` method in `HttpClientFactory` is not thread safe. | 500655, 502706, 509112, 516977 | 210950 |
 | Search | ​When you search in a `Multilist With Search` field type, Azure Search can sometimes show an empty list. | 488089, 491419 | 173022 |
 | Search | ​Field names that do not begin with a letter cannot be indexed in Azure Search. |  | 166844 |
 | Search | ​​Queries that contain datetimes values throw an `InvalidCastException`. | 485230, 500590 | 166318 |
 | Search | The Azure Search provider does not support index time boosting. | 493032, 493040, 493232, 497667, 509399 | 164635 |
 | Search | Using an ampersand (&) in a search query can cause an `AzureSearchServiceRESTCallException`.​ | 145992, 479769 | 151246 |
 | Search | ​​Media indexing is not disabled even though it is not supported by Azure Search. | 478184, 486252, 492268, 492317, 493048, 494435, 504223, 509381, 510107 | 149909 |
 | Search | ​An exception occurs if you synchronize FXM and other index schemas when no fields are defined. | 504603, 506419, 514855 | 132052 |
 | Search | ​​When an Azure Search query find no results, `SearchContentSearchIndex` throws exception. | 494393, 495131 | 192588 |
 | Search | CD instances that are created during scaling have the wrong index name - they don't end with `-secondary`. | 515624, 516075, 516977 | 229625, 254072 |
 | Security API | The `FederatedAuthentication.Enabled=false` setting does not disable federated authentication DI registrations.​ |  | 200649 |
 | Security API | ​​It is impossible to configure cookie timeout. |  | 200539 |
 | Sitecore Forms | Form items are not displayed when the `IndexAllFields` setting is set to `false`​.​ | 517042, 509491, 511191, 512408, 513334, 514225, 514228, 514871, 515760 | 229445, 283473 |
 | Sitecore Forms | ​​​The `Forms builder` application does not work with federated authentication​. | 508484 | 222573 |
 | ​Sitecore Forms | When the value of a radio button is changed on a form, the value is not always measured in the form performance metrics​. | 502029 | 165940 |
 | Sitecore Forms | ​​​In Sitecore Forms, when you add a submit action `trigger goal` the new goal that you create is not assigned to the `Analytics workflow`. |  | 171323 |
 | Sitecore security | Preview mode​ uses an incorrect context user. | 511143 | 231808 |
 | Sitecore security | `ASitecore.Owin.Authentication.Security.TicketManager` is potentially vulnerable to CWE 601​.​ |  | 230478 |
 | Sitecore Services Client | ​Sitecore Services Client is unable to return items that have duplicate field names.​ | 501590, 504441, 507952, 513507, 514024, 515123 | 207286 |
 | Sitecore Services Client | ​​The `ItemService Search` feature processes the version parameter incorrectly.​​ | 513471 | 249938 |
 | Sitecore Services Client | The `Sitecore.Services.Core.Services.FileReaderService` class is potentially vulnerable to CWE-73. |  | 206153 |
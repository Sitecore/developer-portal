---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_34/Email_Experience_Manager_34_Initial_Release/Release_Notes
---

**October 2016 – released Sitecore Email Experience Manager 3.4.0 (rev. 161028)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

-   New Sitecore Email Cloud service, replacing the Email Delivery service
-   Reporting now includes contact lists in campaign reports
-   New charts on the dashboard and in campaign reports
-   Email Preview and Spam Check service no longer requires a separate subscription
-   Recipient and subscriber management process has been redesigned
-   Additional options for controlling dispatches in scaled environments
-   New licensing structure
-   60+ bug fixes

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | A link to the dashboard has been added to the breadcrumb, enabling quick navigation to the EXM dashboard. |  | 110381 |
 | Ctrl+S now works as a keyboard shortcut for saving an email campaign while you are in the message creation flow. |  | 110821 |
 | During campaign creation, you no longer need to specify an exclude list. Compared to earlier versions, exclude lists no longer affect how unsubscribes are processed. For more information please refer to the documentation. |  | 43818 |
 | The Sitecore Email Cloud has been added as an email delivery provider. For further information on this change please contact your Sitecore representative.​​ |  | 100955 |
 | ​​The Recipient tab has been redesigned. Changes include a search filter in the List selection dialog and exclude lists are now optional. |  | 70068 |
 | Unique Rate, Unique Open Rate, Unsubscribe Rate, and Bounced Rate metrics have been added to the reporting UI, showing data captured during the last three months.​ |  | 99310 |
 | When you create a message, the Message info panel now shows:The number of recipients in the included lists.The number of recipients in the excluded lists that are also in the included lists.The number of recipients in the global opt-out list that are also in the included lists.The total number of recipients for the message. |  | 112668 |
 | The Recipient activity block in message reports now shows a Time of the day chart.​ |  | 111179 |
 | A new unopened score card has been added to message reports.​ |  | 117785 |
 | The message reports now include the top links that have been clicked. |  | 117783 |
 | A recipient activity tab with new campaign metrics has been added to the Campaign report​. |  | 111789 |
 | A new retry operation helper has been added​ allowing services to be configured to retry in case of transient errors. |  | 116067 |
 | A new pipeline processor has been added to the SendEmail pipeline which allows you to throttle a dispatch​. |  | 114757 |
 | The Time of the day chart showing open and clicks rates has been added to reports. |  | 119207 |
 | You can now delete multiple emails on a suppression list at once |  | 71671 |
 | ​Unsubscribing recipients now removes them from all campaign include lists for a campaign instead of adding them to the exclude list. If a recipient belongs to any segmented list on the campaign, the recipient is added to the global opt-out list. |  | 120265 |
 | The Default settings no longer appear automatically when you first load EXM​. |  | 118710 |
 | ​​A validation of the sending domain has been added to the Default Settings dialog and the General tab during message creation. |  |  |
 | The Values and Engagement tab has been added ​to the campaign report. |  |  |
 | On the Domain page, you can now view the DKIM values for a specific domain. |  | 119043 |
 | A new Landing Page Performance tab​ has been added to the campaign reports page. |  | 119398 |
 | ​A new configuration option has been added that allows dispatching to be disabled on the primary CM server in a scaled environment setup where at least one dedicated dispatch server has been configured. |  | 118712 |
 | A new Sitecore agent that closes any unused SMTP connections has been added. |  | 74311 |
 | It is now possible to exclude message items from reports by setting "Exclude from reports" on the message item. By default, the standard service messages, for example, the unsubscribe notification, are all​ excluded. |  | 118156 |
 | All EXM assemblies are now versioned following SemVer. |  | 121679 |
 | The Engagement chart now displays productive visits – the number of contacts that generated value after visiting the website. |  | 123511 |
 | EXM-specific fields have been added to the analytics index to support EXM reporting. |  | 124600 |
 | The Chilkat SMTP component has been updated to version 9.5.058. |  | 122402 |
 | When using the Sitecore Email Cloud, you can now view subscription and consumption information on a new page in the Administration section.​ |  | 120420 |
 | A new page which shows subscription and consumption information for the Sitecore Email Cloud has been added to the Administration menu​​. |  | 120420 |
 | ​Additional data, such as email and name, is now stored on interactions and also indexed to provider a richer and better reporting experience. |  | 127389 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The EmailDeliveryClient and the SitecoreUserRecipientRepository have been removed. |  | 115810 |
 | The Dyn provider has been removed. For further information, please contact your Sitecore representative.​ |  | 116956 |
 | Interface contracts for the DispatchManager, SenderManager, and SuppressionManager EDS managers have been exposed. ​ |  | 76691 |
 | The Default list functionality has been removed. |  | 120263 |
 | The Target device option has been removed from the General tab​. |  |  |

## Resolved issues

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | When Solr is used, the dropdowns for monthly and yearly intervals are empty ​when attempting to schedule a recurring delivery. |  | 111221 |
 | ​EXM throws a System.UnauthorizedAccessException when ​a user unsubscribes and read access is disabled for the recipient list or the list is removed.​ |  | 107393 |
 | A validation is needed when no variants are chosen on "Send quick test". |  | 110482 |
 | The Scroll bar has been removed from Create recipient list dialog. |  | 110807 |
 | The Search field has been reset in the Preview recipients dialog. |  | 109643 |
 | The Search field has been reset in the Select list dialog.​ |  | 109792 |
 | Newsletter template moved to "Sample Newsletter" package |  | 110235 |
 | On the recipients tab, when you schedule message delivery, the monthly and yearly drop-down lists areempty for the ECM Advanced User role. |  | 83629 |
 | On the recipients tab, when you schedule message delivery, the monthly and yearly drop-down lists are empty if Sitecore is configured to use Solr. |  | 111221 |
 | EXM cannot be launched from the desktop |  | 116989 |
 | Links in plain text messages do not generate correctly so message statistics cannot be tracked. |  | 75305 |
 | Message statistics for a specific campaign are not displayed for messages that are older than one month. |  | 115475 |
 | Clicking a link from an EXM message throws an exception if your IP address is specified in the excludedIPAddresses​​ configuration setting. |  | 109090 |
 | When sending a subscription confirmation mail, not all links are encrypted. |  | 111996 |
 | ​The CalculateRecipientCount method causes OutOfMemoryException​. |  | 115674 |
 | ​Buttons only work when you click them exactly in the center. |  | 117716 |
 | ​Images are not displayed in message body preview​s. |  | 109788 |
 | ​Clicking a link from some mailbox providers always creates the Email Opened First Time and Email Opened events. |  | 118866 |
 | ​Images are not displayed in the message body preview.​ |  | 109788 |
 | The Media library doesn't display uploaded images​​. |  | 109786 |
 | An exception is thrown when you send a message from the Review tab.​ |  | 112522 |
 | The plus sign in the Subject or From Name field is replaced with space when you save​​. |  | 112725 |
 | ​The NullReferenceException is thrown in AbnTest.CreateTestVariableItem​ when the test variable item does not exist. |  | 116199 |
 | Incorrect values are displayed in the Browsed and the Value and visits charts. |  | 118155 |
 | EXM Draft/Sent messages are not listed when the content language is not English. |  | 110920 |
 | You cannot create a new message if you have set useDisplayName in the linkProvider. |  | 110917 |
 | EXM logs errors when using Custom SMTP even when everything is OK​​. |  | 114469 |
 | ​You cannot resubscribe to a list in EXM. |  | 101015 |
 | ​The spam check for messages with no subject causes an exception in the log. |  | 119252 |
 | The ​Select list dialog appears after the recipients list when you create a list if you have previously tried to create a segmented list​. |  | 120010 |
 | An unhandled exception message is shown when you upload more than one html file as a message template.​​ |  | 119118 |
 | The Scheduled field for automated messages displays the wrong value. |  | 119121 |
 | The recipients count for sent campaigns ​in the message info panel can change. |  | 120857 |
 | The unique click rate can be higher than the unique open rate​. |  | 119097 |
 | The Email campaign Message Text and Message Text Line fields do not work​. |  | 120715 |
 | The RedirectUrlPage pipeline truncates the url when it contains the = character as part of a query string​​ value. |  | 107588 |
 | The Send quick test button is disabled even after an automated message is deactivated.​​ |  | 37723 |
 | An exception is logged in the EXM log file if a plain text message is created and the body is left empty​. |  | 121900 |
 | If the From Address is empty, the default From Address is not applied to Automated messages. |  | 121898 |
 | The validation does not allow you to add an IP address as a domain name​​. |  | 79445 |
 | The dashboard link redirects users to the same page on all email delivery administration pages​. |  | 112512 |
 | The styling in confirmation dialogs for message delivery is inconsistent. |  | 119119 |
 | Setting the test size to 100% for A/B tests causes an error when trying to select a winner |  | 97710 |
 | ​Messages are not sent if they contain an incorrect external link. |  | 58683 |
 | Some phrases are not localizable​. |  | 111154 |
 | ​Unsubscribe events are counted as both an unsubscribe and a click. |  | 123695 |
 | The unique click rate can be higher than 100% for a campaign. |  | 119779 |
 | When you try to send a quick test for an automated message, an exception is logged in the EXM log file. |  | 123492 |
 | Sometimes when you disable ​Emulation mode, it is not disabled. |  | 103735 |
 | The Report for this email campaign link in the Select Winner notification links to the Message task page instead of the Campaign report page. |  | 124265 |
 | By default, an unsubscribe event no longer also generates a campaign event. |  | 125288 |
 | The Body editor becomes inaccessible if you add an item when you save changes to an item​​. |  | 49419 |
 | A user permission exception occurs when you upgrade EXM. |  | 121632 |
 | Values and translations are missing from the Dashboard charts in German. |  | 120256 |
 | The Counters.Enabled setting has no affect on the CpuAvgPerformance counter. |  | 99467 |
 | A notification about emulation mode is shown when you cancel campaign scheduling. |  | 126503 |
 | Invalid email addresses can cause problems during the dispatch process of a campaign. |  | 124739 |
 | ​External links containing special characters are broken. |  | 125487 |
 | Clicking pause/resume repeatedly creates multiple dispatch jobs. |  | 127848 |
 | Exceptions related to the dimension transformers occur when an item related to the message is deleted. |  | 127960 |
 | The click-to-open rate on the campaign report is calculated incorrectly. |  | 119101 |
 | A campaign dispatch can be duplicated ​because the Send message button is not disabled immediately after it has been clicked. |  | 125562 |
 | ​Field values are not copied for other language versions when you create an item from a branch. |  | 125543 |
 | The Subject field is not HTML encoded when viewed in the the ​message lists. |  | 126495 |
 | Not all charts on the Dashboard are refreshed when you switch between two manager roots. |  | 126511 |
 | ​The Browsed metric is incremented when you click different links in an email, instead of only when you browse to other pages from the landing page. |  | 126518 |
 | ​The axes of the Value and Visits chart are incorrect for email campaigns with several languages. |  | 126507 |
 | ​Users in the EXM User or EXM Advanced User role cannot create multi-language email campaigns based on an existing page. |  | 126504 |
 | ​Values in the Value and visits chart are rounded off incorrectly. |  | 121540 |
 | The ​"View reports for this message" link does not open the campaign report. |  | 126502 |

## Deprecated/removed

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The InsertUserField button has been removed from the EXM Rich text editor profile​.​ |  | 121212 |
 | Reporting queries used by EXM versions prior to 3.3 have been removed. |  | 127022 |
 | ​The Clean Confirmation IDs task has been removed. |  | 127020 |
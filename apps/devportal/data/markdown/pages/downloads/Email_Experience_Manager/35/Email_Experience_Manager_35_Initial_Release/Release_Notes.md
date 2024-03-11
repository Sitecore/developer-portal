---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/35/Email_Experience_Manager_35_Initial_Release/Release_Notes
---

**August 2017 – released Sitecore Email Experience Manager 3.5 (rev. 170810)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

-   PaaS Support for Azure
-   Reporting dashboard improvements
-   Invalid recipient reporting and handling
-   Custom tokens are available within API
-   Message List and Performance Enhancements
-   Time Format has been standardized
-   Improved click handler support for multi-site and multi-language
-   80+ bug fixes

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Email validation and URL validation is now done consistently across EXM by the new email and url RegEx validators. You can configure the new `emailRegexValidator` and `urlRegexValidator` settings in the `Sitecore.EmailExperience.Core.config` file. |  | 128001 |
 | A link to a more detailed report has been added to the `Reporting Overview` page. |  | 129857 |
 | You can now use the client API to specify custom tokens. You can, for example, send automated messages with custom tokens. |  | 101226 |
 | The `ECM Users` and `ECM Advanced Users` roles have been renamed to `EXM Users` and `EXM Advanced Users`. |  | 113316 |
 | The `Insert Token` dialog has been improved. |  | 35926 |
 | The `Subscription` message type has been removed. |  | 127021 |
 | The `One-time` and `Triggered` message types have been renamed to `Regular` and `Automated`. |  | 134938 |
 | The reporting lists can now be sorted. |  | 130413 |
 | It is now possible to use the new `EXM.RendererUrl` setting to configure the RendererUrl. |  | 58565 |
 | You can now replace the default recipient manager. |  | 138165 |
 | The UI of the `Attachments` dialogs has been improved. |  | 135748 |
 | The `Confirmation` dialog is broken when the recipients list is empty. |  | 133005 |
 | Internal EXM endpoints have been made secure. |  | 137475 |
 | A new list has been added that shows the recipients which EXM failed to dispatch to for a specific campaign. |  | 143091 |
 | We now support segmented lists with empty emails. |  | 121702 |
 | Improved support for cross site links in EXM messages. To support more complex scenarios than Manager Roots alone allow, a new global repository of `Hostname Mapping` items has been added. This is shared across Manager Roots and defines extra mappings of `Server URLs` to Preview and Public URLs. |  | 131797 |
 | A new `EXM.TasksPath` setting has been added that allows you to specify where task items are stored. |  | 58669 |
 | EXM no longer requires any of the files that are stored in the /sitecore folder on a CD server. |  | 137496 |
 | EXM no longer stores files in the /sitecore folder on a CD server. |  | 137496 |
 | You no longer need to be logged in to render the message body. A new setting, `Renderer User`, has been added to the Manager Root, that allows the Context User to be changed for editing, previewing, delivering, and viewing online. |  | 143210 |
 | If a campaign failed to send email to some recipients, for example, because the email address could not be validated, the message will now move to the `Sent` state rather than the `Paused` state. |  | 143091 |
 | A new EXM site has been added to the sites that allows EXM to control, for example, caching. |  | 149998 |
 | All dates and times are now displayed in UTC. |  | 139423 |
 | Dates and times are now consistent across all of EXM. Dates and times now respect the Sitecore configuration settings and the culture preferences of the logged in user. |  | 162461 |
 | The Sitecore Email Cloud configuration defaults have been updated. |  | 150892 |
 | Time and timezone have been added to the message info panel. |  | 70397 |
 | Message lists now use aggregated data and this improves the time it takes to load them. As a side effect the data is not shown in real-time. |  | 138406 |
 | The complete DKIM record is now shown for a sending domain. |  | 143196 |
 | The email-opened tracking image element now has an alt attribute. |  | 152082 |
 | When you run Email Preview or Spam Check, the changes are now saved automatically. |  | 150291 |
 | DKIM is now verified automatically. |  | 158140 |
 | A `Failed Recipients` card has been added to the campaign report. |  | 154598 |
 | On the dashboard, the `Recipient activity` pie chart has been replaced with `Sent` and `Delivered` data. |  | 159062 |
 | The icons have been removed from the `Landing pages` report card. |  | 159069 |
 | The UI of the `Domain details` dialog has been improved. |  | 159524 |
 | If there is an error in the `RedirectUrl` pipeline, the click handler now redirects to the original link. |  | 167575 |
 | HTTP headers are now set for the tracking pixel. |  | 166436 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | On the `Landing Page Performance` tab, in the Landing pages section, the links in the events list open in the same window. |  | 129831 |
 | The web database that the `SaveTouchPointRecord` pipeline processor uses is hardcoded. |  | 120027 |
 | Some items do not have localizable titles. |  | 130649 |
 | When you preview a message with a large message body, scroll bars are displayed. |  | 127837 |
 | In reports, quarterly trends are not rounded to whole numbers. |  | 131573 |
 | Some texts in the UI are not displayed correctly in non-English languages. |  | 130647 |
 | In a message list, the delete button is active even when no message is selected. |  | 127483 |
 | External links are not HTML decoded. |  | 125487, 129858 |
 | On the `Recipient Activity` tab, in the `Open and click rates` list, the values in the `Event` and `Landing pages` columns are not searchable. |  | 129867 |
 | Location is not searchable on the `Value and engagement` tab. |  | 129870 |
 | The text on the `Subscription` page is inconsistent with the rest of EXM. |  | 130897 |
 | In the Experience Editor, the `Add here` button does not work in IE. |  | 130703 |
 | The `Save` button does not always become active when a user edits the content of a text box. |  | 35875 |
 | The `Time of day` list does not contain Sunday. |  | 136473 |
 | The subject of a message is not saved if the `Set Page Title` rendering is not present. |  | 135248 |
 | The cursor jumps to end of the search field when you press a key. |  | 135568 |
 | Message Context contains inconsistent property names. |  | 134773 |
 | The `Subscription Sublayout Parameters` template does not find Manager Roots that are not stored under the `Home` item. |  | 130653 |
 | Token values that contain a known token key cause an infinite loop. |  | 135571 |
 | It is not possible to specify multiple notification emails. |  | 35947 |
 | The Message body collapses when a scheduled campaign delivery is cancelled. |  | 137200 |
 | In reports, the Landing page value displays a query string and/or an absolute page path. |  | 136224 |
 | Incorrect recipient numbers are logged when some recipients are skipped. |  | 138331 |
 | Links do not work when an anonymous user doesn’t have read access to the item. |  | 137204 |
 | Dates in the past are available in the date pickers. |  | 35968 |
 | On the `Review` tab, the `Preview` and `Spam Check` buttons are enabled after a campaign has been sent. |  | 139127 |
 | The `Confirmation` dialog is broken when the recipients list is empty. |  | 139223 |
 | Clicks on external and internal links in the online version of an email are not registered. |  | 142256 |
 | The reporting data about landing pages is missing sometimes. |  | 145853 |
 | The `Subscription Confirmation` redirect link is broken. |  | 146550 |
 | In the EXM dashboard, in the `Value and visits` report, `Month` is defined incorrectly. |  | 147037 |
 | Url redirection is case sensitive. |  | 148502 |
 | `Email Preview` and the `Spam Check` do not work for Automated email campaigns. |  | 144283 |
 | In the Content Editor, the `Open Manager Root` button is not visible. |  | 150904 |
 | During `Bounce and Spam` synchronization with the Sitecore Email Cloud provider, exceptions appear in the EDS log on the Dispatching role. |  | 144906 |
 | EXM loads css files with an exclusive lock. |  | 151158 |
 | An `Email Test Definition` is created every time an AB test is scheduled. |  | 145784 |
 | An incorrect error message appears if you save the default settings when the email field is empty. |  | 144172 |
 | Images are counted as clicks when `EmbedImages` is disabled, or the image is external. |  | 151478 |
 | Aggregation dimensions mark an interaction as a click even when there is no click event in the interaction. |  | 152144 |
 | The `Redirect` handler adds the EXM custom values for duplicate interactions. |  | 152130 |
 | In EXM, in the `Create` menu, in the `Create List` column, the `Recipient list from file` and `Empty recipient list` commands do not work. |  | 145793 |
 | The `website\images\1x1.gif` image is accessed during dispatch, and often causes an IO exception to be thrown. |  | 146738 |
 | If a link is clicked very quickly, a SQL deadlock can occur. |  | 153848 |
 | Dispatch hangs if a requested resource is not found. |  | 152028 |
 | The domain of the notification email is not validated properly by the email cloud provider. |  | 144286 |
 | `CustomPersonTokens` are not thread safe. |  | 151324 |
 | Bounce times are not aligned with the other time related reporting data. |  | 144608 |
 | The comparison of EcmId is case-sensitive. |  | 151629 |
 | Marketing campaign items created for Email campaigns contain an invalid default value. |  | 150068 |
 | In IE 11, a modal dialog in the message body cannot be reopened. |  | 155407 |
 | In the reports, bounced and unsubscribed percentage rates are displayed in green and not red, if there is an increase. |  | 159059 |
 | The `From name` and `email` are not allowed to exceed 254 characters. |  | 42522 |
 | `From name` is not encoded correctly. |  | 155609 |
 | The recipient counter changes if a segmented list is added to an email campaign, and the page is refreshed. |  | 150067 |
 | The `Sending Disabled` message is not shown when the `No Send` setting is enabled. |  | 37998 |
 | The `Exclude from reports` setting doesn't exclude campaigns that contain registered click events. |  | 149688 |
 | When a user subscribes to the same list twice in a row, an exception is thrown. |  | 144263 |
 | The `ReviewHistoryWatcher` rendering does not work. |  | 146748 |
 | An odd character is added to the name of a new variant of an email campaign. |  | 149609 |
 | An exception is thrown when scheduling an email campaign whose name contains more than 91 characters. |  | 145071 |
 | Countries are not displayed on the `Location card` report. |  | 126494 |
 | Preview does not show the selected recipient. |  | 60398 |
 | The `Anchor` property is stripped from links. |  | 151495 |
 | The `Most Engaging` tab has been added to the `Top Campaigns` card in the reporting dashboard. |  | 159072 |
 | Token are not replaced in service messages. |  | 161617 |
 | In the `Add Attachment` dialog, an image that is attached to a message is displayed as `broken image`. |  | 58716 |
 | `Email Preview` and `Spam Check` do not return any results if you do not specify an `Include list`. |  | 139651 |
 | SQL deadlocks can occur during large dispatches. |  | 161988 |
 | When you click a menu item, a recipient count request is sent to List Manager. |  | 161682 |
 | Service campaigns are not shown in the `Automated campaigns` list. |  | 154534 |
 | Links in simple HTML campaigns are not transformed correctly. |  | 161647 |
 | The EXM log files do not display all the expected information about roles. |  | 145668 |
 | Special characters are not allowed in the `From` email. |  | 161584 |
 | An `OutOfMemoryError` occurs on the Solr server during queuing. |  | 161033 |
 | The thumbnail is missing on the `General` tab. |  | 161624 |
 | Links in messages are always opened in English. |  | 165440 |
 | The `RegisterEmailOpened.aspx` page is added to the statistics. |  | 163761 |
 | Port 25 is added to mailto hyperlinks. |  | 166207 |
 | The `RedirectUrlPage.aspx` page is added to the statistics. |  | 163737 |
 | External images/links are sent as .ashx attachments if `Embed Images` is enabled on the Manager Root. |  | 161609 |
 | If an error occurs when tracking a session, it can cause problems during aggregation. |  | 164853 |
 | Page URLs defined on the Manager Root, such as `Final Confirmation Page`, are sometimes resolved incorrectly. |  | 177536 |
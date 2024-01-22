---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_33/Email_Experience_Manager_33_Initial_Release/Release_Notes
---

**June 2016 – released Sitecore Email Experience Manager 3.3.0 (rev. 160527)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

-   New EXM Dashboard - get the metrics for your email channel in a simple-to-use dashboard
-   New reports give you an overview of your campaign statistics
-   New Experience Profile Timeline integration allows you to see email events on the Experience Profile timeline
-   New Cloud MTA integration - updated Dyn connector
-   New Administrator menu helps you manage critical parts of your email delivery, including approved domains, senders, and the suppression list
-   Event storage cache - Throttling of email events processing on the CD role
-   Task runner - Queuing and distribution of tasks

## Documentation

-   For all Sitecore Experience Platform 8.1 documentation, please visit the new [Sitecore Documentation Site](http://www.doc.sitecore.net)

## System requirements

-   Sitecore Experience Platform 8.1 rev. 160519 (8.1 update-3)
-   All CM servers and dedicated dispatch servers require the Visual C++ Redistributable for Visual Studio 2012 (http://www.microsoft.com/en-us/download/details.aspx?id=30679) to be installed

## New features & improvements

-   Message type names have been renamed to more closely align to common marketing terms
-   The Delivery tab in the message creation flow has been redesigned.
-   The user experience for Email preview and Spam check services has been improved and increases EXM stability.
-   EXM now supports TLS 1.1 and TLS 1.2.
-   Improved handling of bounces increases EXM stability.
-   New ContentTesting API integration has been added, improving A/B testing functionality in EXM.
-   Suppression list verification has now been added to the dispatch process.
-   You can manage the Suppression list within the EXM interface.
-   You can now manage Approved domains within the EXM interface.
-   You can now manage Approved senders within the EXM interface.
-   A new email open handler has been added to support a new data foundation.
-   The email click handler has been improved to support a new data foundation.
-   New channel dashboard with a new UI has been added.
-   New campaign report with a new UI has been added.
-   Link encryption has been improved.
-   A/B testing support has been added for uploaded and imported templates.
-   There are now new custom EXM values facets in the xDB.
-   Sent, open, clicked, bounce, spam complaint and subscribe email events are now stored in the xDB.
-   A new way of handling of spam complaints has been added.
-   The Experience Profile timeline now shows email events.

## Breaking changes

-   The Scheduled message type has been removed. (80584)
-   One-time message has been renamed to Regular email campaign. (80584)
-   The Triggered message has been renamed to Automated email campaign. (80584)
-   Aggregation of automation states has been removed. (79206)
-   Encryption support has been added for legacy direct, open and unsubscribe links. (85242)

## Deprecated and removed functionality

-   You can no longer run an A/B test on a triggered message. (62172)
-   Language-specific statistics are no longer available in the reports.

## Resolved issues

The following issues have been resolved:

-   Error when opening EXM if xDB is disabled. (98280)
-   Wrong value ($title$) of the subject field in the EXM UI for the "existing page" email template. (108481)
-   The user-based recipient statistics can't be collected correctly in the Message report. (79007)
-   EXM doesn't need to have required not-empty FullName property. (108489 - duplicate of 79007)
-   EXM cannot authenticate against MS Exchange server with NTLM authentication. (106556)
-   Dispatch process marks as Sent if you get MongoDB connection timeout during dispatch. (75030)
-   EXM marks that the sent is complete when no emails are sent. (105086)
-   Make message creation dialog responsive. (104425)
-   EXM doesn't respect the "MediaLinkPrefix" setting. (103493)
-   MVC Subscription Form increase count for unchecked lists rather than checked. (103749)
-   Inconsisent resubscribing in EXM API. (99808)
-   AutomationStates handler does not support IIS authentication. (99501)
-   Message Type field has Droplist type. (83384)
-   Newsletter message incorrectly shares images between language versions. (83764)
-   Cannot create new message when addAspxExtension="true" in linkProvider. (80142)
-   In email message links are not encoded for image src. (81836)
-   Ctrl+C/CTRL+V doesn't work for inputs. (77188, 77600)
-   Cannot create new message when lowercaseUrls="true" in linkProvider. (74206)
-   Test email URL not encoded causing validation to fail. (74865)
-   Internal RTE links are not expanded when the Simple Html Message body is generated. (75370)
-   Unnecessary parameters for GenerateImageLink processor. (75387)
-   CustomPersonTokens values are lost for Online version of triggered message. (75635)
-   Tokens are encoded in email subject. (75647)
-   Exception occurs when sending large e-mail via ECM and EmailDelivery. (58667)
-   Incorrect search results when using Solr. (58714)
-   Plain Text Message replaces & with &amp;. (58718)
-   UnsubscribeAll link does not work in the Subscription Notification email. (62757)
-   ECM does not add baseURL to links in background attribute. (58644)
-   Anchor links not parsed correctly. (58666)
-   'Newsletter Root' item of a message remains 'Protected' if the message is the duplicate of already dispatched message. (58670)
-   Returns 404 with Danish language and dash replacement in URL. (58677)
-   Adds a recipient to a list without using List Management API. (58703)
-   Embedded images not displayed on mobile devices. (58705)
-   Does not work with custom medialink prefix. (62748)
-   Incorrect logic of handling bounces. (62753)
-   Add UserAgent header to the message body request. (62778)
-   Cannot open external links on CM-CD environment. (62782)
-   In scaled environment, the redirect link for Unsubscribe page is generated using "modules_website" site context. (62791)
-   Triggered messages don't support external links. (62794)
-   Does not correct link in RTE on message copy. (62803)
-   Dedicated server is not started sometimes due to items desynchronization. (62808)
-   Missed message templates when the message is creating in the context of language other than English. (62821)
-   Missing Translations for the first create message dialog page. (62827)
-   HTML tags are not stripped off in Plain Text Message. (62833)
-   Out of the box subscription form doesn't work. (66428)
-   Reduce the number of published items during the dispatch. (71005)
-   Exception on the CD with some links. (74832)
-   ​The ModifySrcLinks method breaks the 'src' attribute in the HTML markup. (75916)
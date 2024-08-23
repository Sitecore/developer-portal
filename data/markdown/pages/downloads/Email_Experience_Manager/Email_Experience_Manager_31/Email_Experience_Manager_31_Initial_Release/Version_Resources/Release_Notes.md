---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_31/Email_Experience_Manager_31_Initial_Release/Version_Resources/Release_Notes
---

## July 2015 – Email Experience Manager 3.1 (rev.150703)

This a feature release. Sitecore recommends that you upgrade to this release even if it does not provide features that meet the specific needs of your organization. This release contains both significant new feature functionality and bug fixes for the Email Experience Manager product, and we encourage you to evaluate it.

## Compatibility

This version of the EXM module only runs on Sitecore 8.0 rev. 150427 (Update-3).

## Highlights

-   Includes all the fixes from EXM 3.0 Update-3
-   Significantly improves UX and UI stability and functionality
-   Significantly improves delivery stability and functionality
-   Improved integration with the Sitecore List Manager*
-   The dispatch queue now uses SQL database instead of MongoDB
-   Provides compatibility with Sitecore xDB Cloud Edition
-   Improves the generation of links and provides options for test environments

*See the list of known issues.

## Documentation

For all Email Experience Manager 3.1 documentation, please visit the new [Sitecore Documentation Site](https://doc.sitecore.net/).

## System requirements

Please see [Sitecore documentation for recommended platform hardware](/downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update3).

Sitecore recommends that you place the SQL dispatch database on its own SQL instance (8core CPU, 8GB RAM) for high volume environments (for example, more than 1,000,000 per week).

We recommend that you install one dedicated email dispatch server for your environment, if you meet at least one of the following scenarios:

-   You dispatch more than 100,000 emails per week.
-   Your emails are sometimes lightly personalized with xDB or third-party data.
-   Your content management server regularly has five or more concurrent users.
-   You do not have a dedicated xDB processing instance.
-   You have a low-powered SQL Server, or all your SQL databases are on one server.
-   You have MongoDB and SQL on the same physical or virtual hardware.
-   You are not using fast/SSD-based disks on any of your servers.

We also recommend that you install more than one dedicated email dispatch server, if you meet at least one of the following scenarios:

-   You dispatch more than 1,000,000 emails per week.
-   Your emails are regularly heavily personalized with xDB or third-party data.
-   Your content management server regularly has 10+ concurrent users.
-   You do not have a dedicated xDB processing instance.
-   You are performing regular analytics reporting lookups.
-   You have moderate-to-large customizations on xDB Analytics & Reporting.

There is no fixed guideline for scaling EXM. You need to decide how fast you would like to send emails to your customers and balance this with hardware availability, your budget, and the impact on other Sitecore features, such as content editors, publishing, analytics processing, and reporting.

If you require assistance in sizing your environment, please contact your local technical consulting representative.

## New features & improvements

-   The Dispatch pipeline has been redesigned for more stable delivery, and a custom pipeline has been created (the DispatchNewsletter pipeline) for dedicated dispatch servers.
-   Specific configuration packages for each server role and dedicated servers have been created.
-   A SQL Server database is now used for queuing instead of MongoDB.
-   Link generation has been moved to the new modifyHyperlink and modifyImageLink pipelines, allowing the links to be modified, for example, to append third-party tracking.
-   The encryption of SMTP credentials is now supported.
-   The DK translation of the UI has been improved.
-   The default Manager root has moved up a level in the content tree.
-   The sitecore_ecm_speak_request.ashx http handler has been removed and replaced with the Sitecore Services Client API.
-   A new Experience Editor ribbon has been added, which only includes the buttons that are directly related to editing an email.
-   The Attachments panel and the Preview for recipients panel have been moved to each separate dialog.
-   Two new fields have been added to the Message Info panel: “Attachments” and “Previewed for recipient.”
-   The Preview Base URL setting has been added to the Default Settings dialog, allowing the URL for test messages to be configured.
-   The Reporting page has been moved to a separate page.
-   The Default setting button has been moved to the upper right corner of the Start page.
-   The Message Tab layout has been redesigned, including a new UI for AB Testing and more space for Plain text variant field.
-   The names of the message lists on the EXM Start page have been restructured.
-   The Start page now shows a list of draft messages instead of recently created lists.

## Breaking changes

-   New configuration packages have been created for the server roles and the dedicated servers.
-   MogoDB is no longer used to queue messages in EXM. A database, and alternatively a database creation script, is included in the installation package, as well as instructions on how to migrate old campaign data to the new database.
-   All processors in the Sitecore.EmailCampaign.Server.Requests classes have been replaced with the web API-based entity service controllers in the Sitecore.EmailCampaign.Server.Controllers classes.
-   The message reporting page has been moved to a separate page on the Launchpad.
-   DispatchType enum members have been renamed, and the AbTestWinner member has been removed from code base.

## Deprecated and removed functionality

-   EXM no longer supports email actions for Sitecore users.
-   Recipient lists can no longer be specified for triggered messages.
-   Emulation mode is no longer possible for A/B test messages.
-   The GetQueuedFirstLevel() and GetQueuedSecondLevel() methods have been removed from the IEmailMessage interface.
-   Sitecore.EmailCampaign.Speak.Server has been removed from the EXM solution.

## Resolved issues

-   During installation of EXM, the error log was filled with exceptions, but installation succeeded. This has been fixed because EXM now uses a SQL Server database. (27749).
-   After updating from EXM 3.0 to EXM 3.0 update-1 messages that were in select a winner state from A/B testing will not able to send the winning variant as message becomes in paused state. This has been fixed. (27759).
-   The One time message dialog did not show all the standard templates for ja-jp EXM Advanced user. This has been fixed. (38502)
-   The Default language no longer has to be English. (434212)
-   When editing the mail body in the Experience Editor and using the ‘Edit the related item’ feature, the “Uncaught TypeError” JS error appeared and the Content Editor window would not close. This has been fixed. (58663, 407807)
-   When editing the mail in the Experience Editor a data source item could not be set. This has been fixed (51670, 435506)
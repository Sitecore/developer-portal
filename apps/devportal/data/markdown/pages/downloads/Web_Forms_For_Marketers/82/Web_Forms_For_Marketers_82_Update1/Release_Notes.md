---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/82/Web_Forms_For_Marketers_82_Update1/Release_Notes
---

**December 2016 – released Web Forms for Marketers 8.2 Update-1 (rev. 161129)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

**Note:** This version of Web Forms for Marketers is not compatible with Azure Web Apps​.

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The \sitecore modules\Shell\Web Forms for Marketers\Themes\mvc folder has been removed.​ |  | 83817 |
 | ​The obsolete javascript code has been removed​. |  | 85218 |
 | Obsolete classes have been removed |  | 85218 |
 | The jQuery and jQueryUI libraries have been excluded from the WFFM package so that they use the same libraries as the Sitecore platform. |  | 83818 |
 | Remove integration with EXM for the WffM released with 8.2 initial |  | 135600 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​The Select Placeholders command runs a query on all items in a database which impacts the performance of the Select Placeholder​ dialog. |  | 67820 |
 | ​​Client and server validation produces different results which causes unexpected validation failures. |  | 84962 |
 | ​The scrollbar is missing in the Insert Field droplist of the Send Email Message dialog. |  | 108552 |
 | ​Non-Client actions executed on a Content Management server in a scaled environment with two or more Content Management servers​​ causes a disruption in the processes of the WFFM module. |  | 125988, 125990 |
 | ​The Send Mail Message action fails on Content Management or Content Delivery servers if the list field contains a token. |  | 67086 |
 | ​Item rules in web form fields are not taken into account. |  | 67793 |
 | ​Web forms items cannot be moved through the workflow states. |  | 67583 |
 | ​File upload in web forms uses the EventQueue to store the files, which impacts the general performance of the system and increases the size of EventQueue. |  | 123338 |
 | ​The size limit of uploaded files cannot be configured, and this blocks the ability to upload files bigger than 1MB. |  | 67853 |
 | ​​Custom error messages do not work for form verification actions. |  | 78434 |
 | ​‘The \{0\} form has no actions’ warning is added to a log file if no client actions are found​. |  | 67577 |
 | ​If a save action fails, the next one is automatically cancelled. |  | 67568 |
 | ​Multiple addresses in the CC and BCC fields are not processed correctly​. |  | 110301 |
 | ​Forms containing checkbox or radio buttons do not display correctly in MVC forms. |  | 104169 |
 | ​The SendEmailMessage save action does not replace tokens for the non-required fields. |  | 130928 |
 | ​The Parallel.ForEach statement in the FormItemSynchronizer.Synchronize method can cause SQL deadlocks​. |  | 132166 |
 | ​​Google reCAPTCHAs are not displayed if there's no Internet connection. |  | 119469 |
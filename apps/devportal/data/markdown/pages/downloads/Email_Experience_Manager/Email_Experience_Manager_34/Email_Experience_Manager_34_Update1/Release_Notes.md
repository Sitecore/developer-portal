---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_34/Email_Experience_Manager_34_Update1/Release_Notes
---

**January 2017 – released Sitecore Email Experience Manager 3.4.1 (rev. 170105)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

-   You can now disable list locks in the List Manager and this means that EXM can process bounces, subscriptions, unsubscriptions, and spam complaints more effectively.
-   The rendering of email messages in campaigns that don't use personalization has been optimized.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The performance of message generation has been greatly optimized for campaigns that do not contain rules-based personalization or code-behind layout personalization. |  | 51926 |
 | The default newsletter template has been replaced with a more modern template​. |  | 126512 |

## Resolved issues

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | You cannot collect more than one bounce/spam complaint at a time. |  | 123990 |
 | The Duplicate email campaign action redirects to the campaign report page.​​​ |  | 135242 |
 | More than one winner selection tasks can be created for a campaign when MTA is unavailable​​. |  | 135622 |
 | The Message preview tab in the Content Editor consumes a lot of memory and CPU when the campaign uses a recipient list with many recipients. |  | 135069 |
 | The email validation in the initial 3.4 release is too restrictive. |  | 135375 |
 | Quick test does not work when dispatching is disabled on the primary CM server. |  | 138767 |
 | Only one confirmation message is sent ​when subscribing to multiple lists. |  | 137266 |
 | Bounce and spam complaint handlers are broken​​. |  | 136807 |
 | The Reply To field is never used when sending a campaign. |  | 135904 |
 | The IsMessageBodyRequest method no longer exists. |  | 141118 |
 | ​If an invalid reply-to email address is specified, ECM.DefaultSettings.ReplyToNotValid​ is shown instead of a proper validation message. |  | 139592 |
 | Adding the sample Subscription form leads to a item validation error and js/css errors​. |  | 137979 |
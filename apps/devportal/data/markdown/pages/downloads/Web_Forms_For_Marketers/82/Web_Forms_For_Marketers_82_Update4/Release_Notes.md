---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/82/Web_Forms_For_Marketers_82_Update4/Release_Notes
---

**June 2017 – released Web Forms for Marketers 8.2 Update-4 (rev. 170518)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | When you create a form, the default engagement value is 100. |  | 162879 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Creating a new field in a blank form throws a `[NotSupportedException: Collection is read-only.]` error. |  | 139810 |
 | Using a curly bracket in a field title throws an exception. |  | 99091 |
 | The Recaptcha field does not appear in the correct context language. |  | 156857 |
 | The `Create Item` save action creates an item without a workflow. |  | 157049 |
 | Selecting multiple AJAX MVC form checkboxes on the `Save Email Message` save action causes several POST requests. |  | 145782 |
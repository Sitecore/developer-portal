---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/82/Web_Forms_For_Marketers_82_Update6/Release_Notes
---

**November 2017 – released Web Forms for Marketers 8.2 Update 6 (rev. 171103)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​You can now use either a field's display text or tokens to display values in messages.​​​ |  | 67781, 396973 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | After you upgrade the WFFM module, when you use the Form Designer, items from list fields do not appear.​​​ |  | 75227 |
 | If a form contains more than 10 sections, ​​​​it does not validate properly. Any subsequent sections validate against previous sections. |  | 67014, 434449 |
 | The `Update Contact Details` save action drop-down always displays in English.​​​ |  | 67071, 440107 |
 | ​​​​When you reload a `Captcha` field, the content is cleared from the other form fields. |  | 67097, 441861 |
 | ​​​​The `Form` report does not export entries in chronological order​. |  | 123656 |
 | When you use an MVC form, clicking the `Captcha reload` button reloads the form.​​​​ |  | 124652 |
 | In the List Items Editor, ​you cannot​ change the values of the `Value` or `Text` fields.​​​ |  | 133319 |
 | ​​​​WFFM does not apply the default CSS class for form sections. |  | 162059 |
 | ​​​The `Add the contact to a contact list` save action does not update the list's recipient count. |  | 67074, 440255 |
 | You cannot use the `Send Mail Editor` to define different parameters for different languages​.​​​​ |  | 66892, 313313 |
 | ​​​​The WFFM module logs a `Forged Request` exception after you restart Sitecore. |  | 110830 |
---
title: "Sitecore Web Forms for Marketers 8.1 rev.151217 (Update-1) – Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/Web_Forms_For_Marketers_81/Web_forms_for_marketers_81_Update1/Release_Notes
---

**December 2015 – released Sitecore Web Forms for Marketers 8.1 rev. 151217 Update-1**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the following [download page](/downloads/Web_Forms_For_Marketers/Web_Forms_For_Marketers_81/Web_forms_for_marketers_81_Update1).

## Highlights

The Web Forms for Marketers 8.1 rev. 151217 except fixes of UI and localization issues includes fixes from the latest released 2.4 and 8.0 versions.

## Documentation

For all Sitecore Web Forms for Marketers 8.1 documentation, please visit the new [Sitecore Documentation Site](https://doc.sitecore.net/web_forms_for_marketers/).

## System requirements

The Web Forms for Marketers 8.1 runs on Sitecore 8.1.

This has been tested with Sitecore 8.1 Update-1 (rev.151207).

## New features & improvements

-   The new Insert an existing form option has been added to the Insert a New Form wizard. (342589)
-   In the Form Designer, a list of available tags has been added to the form title field. (66901)

## Resolved issues

-   UI inconsistencies in the Form Designer have been fixed. (72735, 25119, 24969)
-   Localization issues for Danish, German, and Japanese languages have been fixed. (41578, 25197, 67076)
-   An issue with rendering two forms on an MVC page has been fixed. (67377)
-   It was possible to forge a requests for web forms. This security issue has now been fixed. (79897)
-   The JQuery version has been updated from 1.4.2 to 1.11.3 so that now it has improved security. (66960)
-   In the Send Email Editor dialog for the Send Email Message save action, the field value had always been inserted at the end of the text. This has now been fixed. (346818)
-   In MVC, prebuilt visitor tags had been using the item field title as a key. This issue has been fixed. (430780)
-   The thread culture had caused incorrect parsing of the field parameters for forms that are based on an MVC layout. This has been fixed. (69633, 431795, 444555)
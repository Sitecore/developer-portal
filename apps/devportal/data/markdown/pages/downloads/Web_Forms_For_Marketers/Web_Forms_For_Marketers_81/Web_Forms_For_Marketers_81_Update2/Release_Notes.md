---
title: "Sitecore Web Forms for Marketers 8.1 rev. 160304 (Update-2) – Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/Web_Forms_For_Marketers_81/Web_Forms_For_Marketers_81_Update2/Release_Notes
---

**March 2016 – released Sitecore Web Forms for Marketers 8.1 rev. 160304 Update-2**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the following [download page](/downloads/Web_Forms_For_Marketers/Web_Forms_For_Marketers_81/Web_Forms_For_Marketers_81_Update_2).

## Highlights

The Web Forms for Marketers 8.1 rev. 160304 includes fixes for most recent and important issues. The number of tickets with the most number of related issues have been considered.

## Documentation

For all Sitecore Web Forms for Marketers 8.1 documentation, please visit the new [Sitecore Documentation Site](http://doc.sitecore.net/).

## System requirements

The Web Forms for Marketers 8.1 runs on Sitecore 8.1.

This has been tested with Sitecore 8.1 Update-2 rev.160302.

## New features & improvements

-   New functionality has been added in Form Designer which lets you define custom error validation messages for MVC forms (70805, 67103)

## Resolved issues

The following issues have been fixed:

-   Unexpected tags had appeared in the exported document for list field types. This is solved by adding a custom delimiter through the new`ListFieldItemsDelimiterCharacter` setting in the Sitecore.Forms.config file. (67717)
-   An error had occurred when submitting several forms from one page one at a time. (98766)
-   A performance issue has been resolved that had caused high CPU usage during multiple visits on a page containing a form. (97688)
-   A checkbox field used to have two labels on a page containing an MVC form. (79988)
-   A security issue had caused some hidden fields in the database table to be exposed when using the `combinedFormsDataProvider` setting from the Sitecore.WFFM.Dependencies.configuration file in scaled environments. (99116)
-   An issue had caused duplicate rows of submitted data to be written to the database table when using the `combinedFormsDataProvider` setting from the Sitecore.WFFM.Dependencies.config file in scaled environments. (88634)
-   An issue which caused reCaptcha field to be skipped when submitting the form in case when successful redirect page were configured has been fixed. (97716)
-   There were incorrect server-side validations for float values in the Number field type. (79930)
-   An error in the logs had appeared after opening the Form Reports when xDB was disabled. (62390)
-   It was not possible to configure the Tell a Friend save action. (99923, 87353)
-   There was a UI issue with shifted fields in the Map the Form Fields dialog of the Create Item save action. (68899)
-   An issue had caused an exception while working in Form Designer in case when Sitecore user was assigned with Analytics Maintaining role has been fixed (42735)
-   It was not possible to create a custom save action that is based on the field name. (57570)
-   The File Upload field did not work properly in scaled environments. (73457)
-   You could not change a form goal using the Properties dialog of the Form Designer. (67037)
-   You could not apply a CSS class to the Checkbox field type. (79605, 84017)
-   Form data could not be saved to the SQL database case when the Xdb.Tracking file was disabled. (79653)
-   There were a number of JavaScript errors that appeared in multiple internet browsers. There were also a number of JS files that have been reviewed to ensure consistency. (80478, 78916, 82721, 85115, 83997)
-   Several obsolete commands have been removed from the Sitecore.Forms.config file (66974)
-   The Update Contact Details save action had not updated data in the database. (78318)
-   An issue had caused double renderings to appear on a page after performing a form submission. (79298, 82044)
-   The Validation error message set for the Email field on corresponding items in Content Editor did not show properly on an MVC form. (86953)
-   It was not possibleto configure the Send Email Campaign Message. (76041)
-   The Send Email Message save action had not resized to the default size of Rich Text Editor window. (39479)
-   The Add Sitecore Link functionality did not work in the Send Email Message save action. (75526)
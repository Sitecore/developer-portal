---
title: "Sitecore Web Forms for Marketers 8.0 (rev. 151127) - Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/Web_Forms_for_Marketers_80/Web_Forms_for_Marketers_80_Update_6/Release_Notes
---

**November 2015 – released Sitecore Web Forms for Marketers 8.0 (rev. 151127)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the following [download page](/downloads/Web_Forms_For_Marketers/Web_Forms_for_Marketers_80/Web_Forms_for_Marketers_80_Update_6).

## Highlights

Web Forms for Marketers 8.0 rev. 151127 includes fixes for the previously released 2.4 and 8.1 versions. The following fixes have been merged into the 8.0 version:

-   The ability to insert an existing form to an item.
-   The ability to change the HTML tag of a form’s Title field.
-   Rendering forms using bootstrap framework.
-   Improved form functionality in a distributed environment.
-   A number of fixes for using MVC in forms.

## Documentation

For all Sitecore Web Forms for Marketers 8.0 documentation, please visit the new [Sitecore Documentation Site](https://doc.sitecore.net/web_forms_for_marketers/80).

## Compatibility

This version of Web Forms for Marketers is compatible with Sitecore Experience Platform 8.0 rev. 151127 (8.0 Update-6).

## New features & improvements

-   The new Insert an existing form option has been added to the Insert a New Form wizard. (342589)
-   The list of available tags has been added to the form title field in the Form Designer. (66901)

## Resolved issues

-   It had been possible to forge request for web forms. This security issue has been fixed (79897)
-   The default Assess Security Risk verification had worked incorrectly for the list fields. This verification can now be removed from the form. (66912)
-   The JQuery version has been updated from 1.4.2 to 1.11.3. This improves security. (66960)
-   A change in a form’s validation did not take place on the front end after publishing. This issue has been fixed. (66429)
-   The field’s value had always been inserted at the end of the text in the Send Email Editor dialog for the Send Email Message save action. This has been fixed. (346818)
-   In MVC, prebuilt visitor tags had been using an item’s field title as a key. This issue has been fixed. (430780, 432787)
-   The From address had not been replaced with field value in the Send Email Message save action dialog. This has been fixed. (443653)
-   The thread culture had incorrectly parsed the field parameters for forms based on an MVC layout. This has been fixed. (69633, 431795, 444555)
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Update2/Release_Notes
---

**March 4, 2016 – released Sitecore 8.1 Update-2 (rev. 160302)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](/downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Update1).

## Highlights

The main highlights of this update:

-   Includes all relevant fixes from Sitecore 7.2 update-6
-   Improved overall security – includes several potential security vulnerability fixes
-   Performance improvements to the Experience Editor
-   Historical re-aggregation introduced in Experience Analytics
-   Improved List Manager functionality

**Note:** xDB Cloud support will follow approximately 6 weeks after the release of this update.

## Documentation

For all Sitecore Experience Platform 8.1 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/)

## New features & Improvements

### Experience Analytics

-   You can now aggregate Data collected before a segment’s deploy date using historical re-aggregation.

### Experience Editor

-   To improve performance, the ribbon controls now only load when the related tab is activated.

### List Manager

-   Improved methods have been implemented to help you to import custom contact data CSV files, and map the data to Experience Profile fields. (434005)
-   New functionality has been added that allows you to use segmentation rules that are based on the condition of Contact List membership.

### Media

-   Media items are now renamed on upload when the name contains characters from the encodenamereplacements list

### Sitecore API

-   EventContext now has database read-only property

## Resolved issues

The following issues have been fixed in this release:

### Marketing Foundation

-   Additional debugging information has been added to the when processing contacts ([454443](https://support.sitecore.net/client/defects/viewdefect?defectid=454443))
-   The timeout between lock attempts in shared session state was hard coded to 10ms. This is now configurable. (451343) The "where the region compares to specific value" condition no longer fails if the region value is null. (451524)
-   When a license does not support xDB, an exception thrown from the DataAdapterProvider that has specific message describing the problem. (454621, 454444)
-   During the start-up of Sitecore, a warning is logged if the license does not support xDB. (454510, 464369)
-   The Sitecore.Analytics.Tracking.EmptySession class had not been marked with Serializable attribute. (430584)
-   The RdbDefintionRepositoryBase now supports retry functionality. (456535, 440137, 453833, 439668, 441738, 447889,453188)

-   Interaction aggregation trail table and automation state aggregation trail table can be truncated when retryer is enabled. (97156)

### Experience Editor

-   84051: Double usage of decodeURIComponent prevented content from saving.
-   82262: When a date was changed manually, the new version was not selected after clicking the 'Lock and Edit' button.
-   82158: Editing an item that was in the final workflow state did not redirect to the new draft version.
-   84371: The WebAppCache.cache file contained references to a non-existing files.
-   49512: When performing a multivariate test, the Datasource location was shown incorrectly. ( 395557)
-   96034: “Broken links” warning no longer in background with undefined text
-   96295: Content Editor validation allows you to create an item with both a whitespace and a dash
-   96342: The Publish Item dialog had warning dialog boxes appear together.
-   96390: Text in Content Editor's Insert Options listbox had overlapped in some client languages.
-   96468: Exceptions that had occurred during search in Content Tree are masked.

### Layouts and Renderings

-   96897: Final Layout layouts and controls were unable to be applied if Shared Layout were empty.
-   96928: Same Device was resolved because Rule field of Device items had been versioned and cached.
-   453963: LayoutField.GetInnerField had ignored inherited value of '__Final Renderings' field on cloned item.

### Links

-   96408: Unnecessary question mark had been added to the internal link.

### Experience Profile

-   76354: When the selected client language was not English, an exception would occur. (, 450617)

### Experience Analytics

-   78254: In CMS-only mode, Experience Analytics would produce a fatal error in the log. ()
-   78521: Campaigns created in the Japanese language were displayed as unknown campaign. (450494)
-   781309: When segments were redeployed, RedeployMarketingData.aspx would throw an exception

### Experience Optimization

-   77008: When the suggested test list was empty in the Test Summary, an error would appear in the log.

### SPEAK

-   48440: When attempting to view Sitecore applications when the word “client” was in the URL, starting /sitecore/Client returned an error: “The requested document was not Found”. (434313, 434861, 434757)
-   26371: The Sitecore log contained excessive "Precompiling SPEAK View" messages. (428504)
-   26370: When attempting to log out of the Sitecore client, the system returned the error: “Could not invoke action method: Logout exception”. (425255)
-   78001: The SPEAK DataPicker component in Internet Explorer would not hide the calendar when a user had selected a date.
-   82595: The Insert Link dialog included a search text box which appeared too small in Firefox. (434498)

### Media

-   96814: Media items are now renamed on upload when the name contains characters from the encodenamereplacements list
-   96890: Media files could not be downloaded when the file name contained both space and dash characters.

### Sitecore API

-   96194: EventContext now has database read-only property

### Miscellaneous

-   96590: The Deploy Marketing Definitions Dialog was not translated.
-   96839: You could not use the delete action for rule in Rule Editor dialog.
-   96402: AncestorOrSelf condition had only checked for ancestors.
-   96211: CustomField.GetDatabase didn’t return the correct database when the datasource was not specified.

### Multibrowser fixes

-   96101: Firefox and Internet Explorer did not show bold/strong text in Rich Text Editor.
-   96948: Some settings had contained an incorrect default value.

### Pipelines

-   96805: Item could have been unresolved with specific encodeNameReplacement and wildcard/display name resolving logic.
-   96525: The Layout not found redirection page did not write WARN to log file.

### Rich Text Editor

-   96532: Double clicking the Rich Text field did not open editor if the field is empty.

### Sitecore Security

-   96625: A virtual user could not be logged in with more than 4096 symbols due to .ASPXAUTH cookie length restrictions.
-   96208: The Access Viewer hide ribbon functionality had not worked.

### Update Installation Wizard

-   96224: The make methods in Sitecore.Update.InstallUpdatePackage class have been made virtual.
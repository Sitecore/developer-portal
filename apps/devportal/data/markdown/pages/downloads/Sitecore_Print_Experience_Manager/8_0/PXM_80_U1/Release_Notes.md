---
title: "Release notes for Sitecore PXM 8.0 - Update 1"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Print_Experience_Manager/8_0/PXM_80_U1/Release_Notes
---

**December 11, 2015 released Sitecore PXM 8.0 update 1**

This is a product update. You can use this release to upgrade the Sitecore PXM 8.0 initial release. Sitecore recommends that you upgrade to this release when you want to work with Adobe InDesign CC 2015, Adobe InCopy CC 2015, Adobe InDesign CC 2015 Server, or the Rendition Builder plugin for Adobe InDesign CC 2015.

This release contains the following updates to these PXM plugins:

-   ICConnectorSetup CC 2015 8.0 rev. 151210
-   ICConnectorSetup_x64 CC 2015 8.0 rev. 151210
-   IDConnectorSetup CC 2015 8.0 rev. 151210
-   IDConnectorSetup_x64 CC 2015 8.0 rev. 151210
-   IDSEngineSetup_x64 CC 2015 8.0 rev. 151210
-   RenditionBuilderSetup CC 2015 8.0 rev. 151208
-   RenditionBuilderSetup_x64 CC 2015 8.0 rev. 151208

## Compatibility

These plugin versions run on Sitecore 8.0 and Sitecore 8.1. They are also compatible with Sitecore versions 7.1 through 7.5.

## Highlights

Sitecore PXM 8.0 update 1 includes:

-   InDesign Connector plugin for Adobe InDesign CC 2015 for Mac OS X and Windows
-   InCopy Connector plugin for Adobe InCopy CC 2015 for Mac OS X and Windows
-   InDesign Server Engine plugin for Adobe InDesign CC 2015 Server
-   Rendition Builder plugin for Adobe InDesign CC 2015 for Mac OS X and Windows

## Documentation

For all PXM 8.0 documentation, please visit [Sitecore Documentation Site](https://doc.sitecore.net/print_experience_manager).

## Deprecated and removed functionality

InDesign Connector

-   The text frame option `Show as Greek Type` has been removed.

## Resolved issues

### InDesign Connector

-   The tab title of an IDC document loaded for editing in InDesign displayed the item name instead of the display name of the document. It now displays the document’s display name.
-   After adding or editing a connection string through the Plug-in Settings dialog, the Add/Edit dialog remained open after closing the warning message for incorrect web host name. This has been fixed.
-   Horizontal and vertical lines would be displaced after performing a save operation. This has been fixed.
-   The sub-panel of the IDC Media panel – containing details about the selected image item – sometimes remained visible after deselecting the image. This has been fixed.
-   The ability to convert static IDC image items into Sitecore content items failed when the IDC static item referenced the same Sitecore media item as the field in the Sitecore content item. This has been fixed.
-   Updating more than a single Sitecore item from the References panel after clearing the IDC cache had caused InDesign to stop working. This has been fixed.

### InCopy Connector

-   The tab title of an IDC document that was loaded for editing in InCopy would display the item name instead of the document display name. It now correctly displays the document display name.
-   After adding or editing a connection string through the Plug-in Settings dialog, the Add/Edit dialog remains opened after closing the warning message for incorrect web host name. This has been fixed.
-   Saving content in an empty static text frame without the P_Text child item was not possible. This has been fixed.

### Rendition Builder

-   When the Export to Sitecore functionality was enabled, it caused incorrect warnings when the Rendition Builder Service was unavailable. This has been fixed by verifying whether the Rendition Builder Services are installed before allowing the user to export to Sitecore.
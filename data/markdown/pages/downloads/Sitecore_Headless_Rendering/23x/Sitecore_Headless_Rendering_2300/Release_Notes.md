---
title: 'Release Notes'
description: ''
origin:
---

**September 2026 – released Sitecore Headless Rendering 23.0.0**

- [Highlights](#highlights)
- [New features/improvements](#new-featuresimprovements)
- [Resolved issues](#resolved-issues)

## Highlights

Sitecore Headless Rendering 23.0.0 includes:

- Headless Services update.
- Sitecore Experience Edge Connector update.

## New features/improvements

| Context         | Description                                                                                                      | Reference                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Headless Service | Added support for LTSC 2025 containers.                                                                          | PDXP-28674               |
| Headless Service | Aligned third-party package versions with the platform.                                                          | PDXP-30670               |
| Headless Service | Enhanced security by hiding sensitive information associated with submit actions.                                | PDXP-13910               |
| Headless Service | Added support for page-level testing in Layout Service.                                                         | PDXP-7006                |
| Headless Service | Updated the JavaScript library versions used by form items.                                                     | PDXP-16759               |
| Edge Connector  | Added support for LTSC 2025 containers.                                                                          | PDXP-11550               |
| Edge Connector  | Improved the `IsItemAncestorPublishable` functionality.                                                        | PDXP-20954               |
| Edge Connector  | Aligned third-party package versions with the platform.                                                        | PDXP-26734, PDXP-30671 |
| Edge Connector  | Added logging for failed acknowledgments during processing.                                                     | 617010                   |

## Resolved issues

The following issues have been fixed:

| Context         | Description                                                                                                               | Reference                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Headless Service | Fixed an Experience Editor error that reported no renderer for a form element type.                                     | DEVEX-3774 DEVEX-3744   |
| Headless Service | Fixed an issue that prevented JSS forms from working.                                                                    | DEVEX-3223              |
| Headless Service | Fixed the Close Experience Editor button.                                                                                | DEVEX-4038              |
| Headless Service | Fixed an `InvalidOperationException` that occurred when using the Tracking API.                                          | DEVEX-3892              |
| Headless Service | Restored the ability to customize `JsonFormBuilderController` following the DEVEX-3223 fix.                             | PDXP-22577              |
| Headless Service | Fixed headless React form submissions that failed when the `Sitecore.JavaScriptServices.NetFxHost` assembly was missing. | PDXP-17660              |
| Headless Service | Fixed an issue where the Preview API returned incorrect layout data.                                                     | PDXP-19240              |
| Headless Service | Fixed GraphQL search queries that ignored the language version of items specified in Droplink fields.                    | DEVEX-3102              |
| Headless Service | Fixed an issue where the link URL property was empty for an item's fallback language version.                            | PDXP-21758              |
| Headless Service | Fixed Preview API Playground autocomplete tooltips that did not dismiss automatically while typing.                     | PDXP-23189              |
| Headless Service | Fixed Preview API searches on JsonValue fields that returned null for fallback items.                                   | PDXP-23191              |
| Headless Service | Fixed the GraphQL Edge schema so template types continue to implement their base template types.                        | DEVEX-3276, 619735     |
| Headless Service | Fixed internal links that incorrectly included the hostname when two configured sites shared the same home item.        | PDXP-20880, PDXP-11714, PDXP-14003 |
| Headless Service | Fixed site resolution when multiple site definitions with different languages pointed to the same start item.          | 609240                  |
| Edge Connector  | Reduced excessive logging of the "Workflow item/state is invalid" message.                                             | 609650, 600080         |
| Edge Connector  | Fixed `SiteInfoCollection` so it updates sites when they are removed or modified.                                       | 622055                  |
| Edge Connector  | Fixed an issue affecting users without item read access.                                                                | PDXP-4678, 625352      |
| Edge Connector  | Fixed an issue where publishing modified media to Edge did not update the value from the page item.                     | PDXP-6925, PDXP-13884  |
| Edge Connector  | Fixed an issue where field-level language fallback did not update the fallback language version in the Delivery API.   | PDXP-26917             |

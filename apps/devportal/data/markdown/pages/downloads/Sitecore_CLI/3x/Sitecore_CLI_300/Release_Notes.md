---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_CLI/3x/Sitecore_CLI_300/Release_Notes
---

**February 2021 – released Sitecore CLI 3.0.0**

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Breaking changes](#Breaking)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Experience Platform 10.1.0 includes:

-   ​The ser/serialize and publish ​commands now require you to add their respective plugins to your Sitecore CLI configuration before use. For more information, see our documentation.

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​​​​​​​The Sitecore CLI now allows you to publish changed items with a serialization push or package installation with the `--publish` argument. |  | 413130 |
 | ​​​​​​​​​​Sitecore CLI commands are now extensible via NuGet-based plugins. |  | 415477 |
 | Sitecore Content Serialization can now include serialization modules via NuGet and npm references. |  | 425241 |
 | Publishing from the Sitecore CLI is now supported when it is used with the Sitecore Publishing Service. |  | 435267 |
 | The Sitecore CLI publish command now allows you to force a republish. |  | 452887 |
 | Sitecore Management Services has been updated to GraphQL .Net 2.4.0. |  | 454948 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The ser/serialize and publish ​commands now require you to add their respective plugins to your Sitecore CLI configuration before use. |  |  |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | If you use Sitecore content serialization to remove an item version, the Sitecore item caches are not cleared. |  | 436350 |
 | ​If you use Sitecore content serialization to push serialized item, the `Media` field of a media item is empty​. | CS0200983, CS0204226, CS0204978, CS0205911 | 452721 |
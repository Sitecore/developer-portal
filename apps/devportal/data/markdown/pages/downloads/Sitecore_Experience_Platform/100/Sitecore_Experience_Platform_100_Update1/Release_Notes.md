---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100_Update1/Release_Notes
---

**December 2020 – released Sitecore Experience Platform 10.0.1**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

-   [New features/improvements](#New)
-   [Deprecated/Removed](#Deprecated)
-   [Resolved issues](#Resolved)

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Installation | SIA now supports Sitecore XP 10.0.1. ​​ |  |  |
 | Installation | This is the first release of Sitecore Container Upgrade. You can now use the container upgrade process to upgrade Sitecore XP 9.3 databases to Sitecore XP 10.0.1. ​​ |  |  |

## Deprecated/Removed

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Email Experience Manager | ​​​​The following items, related to the old email templates have been made obsolete and will be removed in the next release (if not referenced):<br /><br />` 			/sitecore/layout/Layouts/System/Email/Sample Newsletter 			   			/sitecore/layout/Layouts/System/Email/Single Column Layout 			   			/sitecore/layout/Layouts/System/Email/Templates/Alternating Columns 			   			/sitecore/layout/Layouts/System/Email/Templates/Basic Layout 			   			/sitecore/layout/Layouts/System/Email/Templates/Call To Action Focus 			   			/sitecore/layout/Layouts/System/Email/Templates/Image Focus 			   			/sitecore/layout/Layouts/System/Email/Templates/Three Column Long 			   			/sitecore/layout/Layouts/System/Email/Templates/Two Column 			   			/sitecore/layout/Layouts/System/Email/Two Column Layout 			   			/sitecore/layout/Placeholder Settings/Email/SampleNewsletter/newsletter 			   			/sitecore/layout/Placeholder Settings/Email/SampleNewsletter/newsletter_head 			   			/sitecore/layout/Renderings/System/Email/Display Body 			   			/sitecore/layout/Renderings/System/Email/Display Footer 			   			/sitecore/layout/Renderings/System/Email/Display Sidebar 			   			/sitecore/layout/Renderings/System/Email/Image 			   			/sitecore/layout/Renderings/System/Email/Sample Newsletter 			   			/sitecore/layout/Sublayouts/Email 			   			/sitecore/media library/System/Email/SampleNewsletter 			   			/sitecore/media library/System/Email/Thumbnails/existing 			   			/sitecore/media library/System/Email/Thumbnails/one-column-template 			   			/sitecore/media library/System/Email/Thumbnails/target 			   			/sitecore/media library/System/Email/Thumbnails/two_column 			   			/sitecore/media library/System/Email/Thumbnails/two-column-template 			   			/sitecore/templates/Branches/System/Email/Messages/One-Column Message 			   			/sitecore/templates/Branches/System/Email/Messages/Right Image Block 			   			/sitecore/templates/Branches/System/Email/Messages/Thee Column Long 			   			/sitecore/templates/Branches/System/Email/Messages/Thee Column Short 			   			/sitecore/templates/Branches/System/Email/Messages/Two Column One CTA 			   			/sitecore/templates/Branches/System/Email/Messages/Two Column 			   			/sitecore/templates/Branches/System/Email/Messages/Two-Column Message 			   			/sitecore/templates/Branches/System/Email/Sample Newsletter 			   			/sitecore/templates/System/Email/Messages/Shared 			   			/sitecore/templates/System/Email/Sample Newsletter 			`<br /><br /> |  | 395100 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | Marketing Foundation | ​​Data aggregation can ​degrade ​performance. |  | 440624 |
 | Marketing Foundation | ​​A hardcoded percentile causes an infinite loop in XDB upgrade tool. |  | 446711 |
 | Marketing Foundation | ​​The upgrade scripts do not enable change tracking in certain scenarios. |  | 437161 |
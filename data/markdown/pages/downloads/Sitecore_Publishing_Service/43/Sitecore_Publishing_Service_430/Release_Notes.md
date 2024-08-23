---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/43/Sitecore_Publishing_Service_430/Release_Notes
---

**August 2020 – released Sitecore Publishing Service 4.3.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The Sitecore Publishing Service now runs on top of `Sitecore Host`. |  | 306005 |
 | ​​​The index URL ('/') does not return a 404.​ |  | 323220 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​The Sitecore Publishing Service does not recognize publishing roles that are members of other roles.​ |  | 360559 |
 | The `PublishJobQueueController.GetJob` and `PublishJobQueueController.GetCompleted` methods calculate the `affectedItems` value differently. | 517479 | 276339 |
 | If you add a new language, ​publishing all items in repair mode fails. | 527088 | 325656 |
 | ​​A clone item is not published if the first version of the original item is unpublishable​​. |  | 297460 |
 | The `DefaultStoreFactory.CreateTargets`​ method can add the same publishing target to both `validStores` and `invalidStores`.​​ |  | 278416 |
 | ​If you only modify the casing of an item name, the Publishing Service does not republish the item name.​​ |  | 337531 |
 | If the next version of an item has a `Publishable(HideVersion)` restriction​, a version of the item is regrarded as unpublishable.​​ |  | 377508 |
 | A version of an item is regarded as unpublishable if the next versions of the item has a `PublishableTo` restriction​.​​ |  | 386131 |
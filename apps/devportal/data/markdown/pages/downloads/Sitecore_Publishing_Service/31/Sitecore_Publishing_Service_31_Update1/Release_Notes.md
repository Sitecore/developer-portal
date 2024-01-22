---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/31/Sitecore_Publishing_Service_31_Update1/Release_Notes
---

**August 2018, released Sitecore Publishing Service 3.1 Update 1**

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​Parents of related items are not created in the target database when you publish a single item with related items​. | 507704 | 38569 |
 | ​A concurrency issue in the `UseIndex` method of the `IndexStrategy` type causes publishing jobs to get stuck​. | 500935, 502222, 505331, 505475, 507005, 512390 | 36232 |
 | ​​The `Link` database is not updated when you publish a clone item. | 497092, 500935, 504855, 510305 | 34137 |
 | ​Moving child items from one parent item to another and deleting the original parent item can cause grandchild items to be deleted. | 510537 | 39771 |
 | ​When you publish an entire website, items are not published if publishing restrictions are set on their parent items. | 505027, 506239 | 37748 |
 | Some data is missing when you try to publish a clone of a clone.​​ | 489118, 501875, 503527 | 29916 |
 | Related items are not republished if the source item has been published already​. | 502976, 506499, 506972 | 34402 |
 | ​The X86 (32 bit) restriction causes out of memory exceptions to occur during large publishing operations. | 510305, 508192 | 39712 |
 | ​​​​​​​​An item cannot be unpublished when every version is unpublishable. |  | 276695 |
 | ​If the original item is changed, its clone item is not indexed correctly in the web index​. | 503527 | 37123 |
 | ​When you publish a single item and its related items, the parents of the related items are not created in the target database. You can enable this functionality by enabling `sc.publishing.relateditems.xml` in `config/sitecore/publishing`. | 512904, 512476, 507704 | 38569 |
 | ​The Workflow and the Workflow state must not be inherited from the `__Standard Values​​`. | 508072, 508053 | 38668 |
 | ​An item is not published if a shared field is changed in one language and then published in another​ language. | 501463, 502044, 503662 | 36156 |
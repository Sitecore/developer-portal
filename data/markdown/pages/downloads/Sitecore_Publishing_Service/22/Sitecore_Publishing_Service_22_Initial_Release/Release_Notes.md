---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/22/Sitecore_Publishing_Service_22_Initial_Release/Release_Notes
---

**December 2017, released Sitecore Publishing Service 2.2.0 rev. 171220**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The Publishing Service now supports `App Insights` logging​.​ |  | 33592 |
 | The performance of `Single Item publishing` has been significantly improved.​ | 495081 | 32976 |
 | The `Single Item publish` dialog now remembers options that were selected previously. |  | 33885 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Clone items are not deleted from the target database together with the original item​.​ | 492780 | 31186 |
 | The Publishing Service does not raise the `RemovedVersionRemoteEvent` event after you remove a version from target database​. | 493114, 493116 | 31802 |
 | ​Subitems do not publish after you move them. |  | 32276 |
 | Versions of an item that are in the non-default language are deleted after the item moves. |  | 32273 |
 | ​The web index does not remove old versions of an item.​ | 4947025 | 32187 |
 | `SaveItem` events only generate in the context language when the service moves an item.​ |  | 32491 |
 | The service only creates CreatedItemVersion (RemovedVersion) and Saved Events​ actions in one language. ​ |  | 32529 |
 | ​A cloned item does not update when the original item is updated. |  | 32586 |
 | When publishing clones, an exception appears if the original item no longer exists.​ | 489050, 497033, 486188, 486311, 487674, 497866, 483423 | 28056 |
 | ​The Publishing Service does not take Language security restrictions​ into account. | 487135 | 28748 |
 | A cloned item is published when​​ the `Related items` check box is not selected. | 497092 | 34393 |
 | ​Invalid cloned item versions are published after you change the publishing restriction​s. |  | 34401 |
 | Publishing fails when the publishing targets have display names.​ | 496818 | 33726 |
 | ​The index record related to the first version of an item is not updated when the second version is published . | 496573 | 33324 |
 | ​The Solr configuration​​ file uses the wrong field names​ in content availability.​ | 495849 | 33033 |
 | ​The `Update module` installation text does not include the correct Dlls for Content Delivery servers. |  | 33300 |
 | When you apply a publishing restriction to one item version, the cloned items do not delete from the target database with the original item. |  | 32503 |
 | An invalid link database entry prevents publishing​.​ | 489050, 492763 | 29903 |
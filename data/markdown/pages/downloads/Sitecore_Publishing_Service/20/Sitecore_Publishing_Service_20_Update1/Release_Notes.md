---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/20/Sitecore_Publishing_Service_20_Update1/Release_Notes
---

**May 2017 - released Sitecore Publishing Service 2.0 Update-1 (rev. 170518)**

This an update. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This version is compatible with Sitecore 8.2 Update-2 and Sitecore 8.2 Update-3.

## Resolved issues

The following issues have been fixed:

​

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | An incremental publish that is triggered by PublishAgent always published one item even though nothing was changed. |  | 27324 |
 | The MultiInstanceActivationLock is not tolerant to an DB connection failure. |  | 26976 |
 | The display name of the publishing target is not consistently used in the UI. |  | 27249 |
 | The Publishing Service and the Publish Agent do not work with incremental publishing. | 480039 | 26629 |
 | PublishBatchResultProcessor cannot get information about custom fields. | 482344 | 26934 |
 | The Display name of a Publishing Target is used instead of its Name when a job is queuing. |  | 26980 |
 | The package installation fails is a user installs the same package more than once. | 479929, 481377 | 26442 |
 | A workflow state that has not been assigned to a Workflow is not publishable. |  | 26727 |
 | A user who has been assigned the Sitecore Client Advanced Publishing role can not publish a whole site. |  | 23787 |
 | ​There are misprints in Danish translation​. |  | 23926 |
 | The Job Details dialogue displays incorrect information about queued jobs. |  | 26452 |
 | The publish:end event is raised before caches are cleared on a Sitecore CM instance. | 483683 | 27341 |
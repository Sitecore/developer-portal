---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_80_Update5/Release_notes
---

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](http://dev.sitecore.net/).

## Important changes

-   Support has been added for MongoDB 3.0. (431956)
    
-   The MongoDB driver has been upgraded to 1.10.
    
-   Generic security enhancements have been made.
    

## Documentation

For all Sitecore Experience Platform 8 documentation, please visit the [Sitecore Documentation Site](http://doc.sitecore.net/).

## Compatibility

This update does not currently support xDB cloud.

## Resolved issues

### Marketing Foundation

-   There was an issue where the Sitecore.Analytics.Outcome.Model.ContactOutcome class was not serializable. This has been fixed. (437655)
    

## Breaking changes

-   The Sitecore.Cloud.Xdb.ServiceModel namespace was moved from Sitecore.Cloud.Xdb.ServiceModel.dll to Sitecore.Cloud.Xdb.dll
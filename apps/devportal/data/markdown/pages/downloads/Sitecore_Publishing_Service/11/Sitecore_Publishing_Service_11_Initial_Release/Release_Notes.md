---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Publishing_Service/11/Sitecore_Publishing_Service_11_Initial_Release/Release_Notes
---

**August 2016 – released Publishing Service 1.1 (rev. ***)**

The Sitecore Publishing Service is a separately installed module that is designed to work with 8.2. The module uses the new ASP.NET Core 1.0 framework and is the first step in using the new ASP.NET framework with Sitecore. The module is a completely new paradigm on how to Publish with Sitecore and is designed to greatly improve publishing performance for enterprise customers. The module completely replaces the existing Publishing system in Sitecore with a dedicated Publishing Service that can be hosted standalone or under IIS. 

Once installed, it is possible to return to the previous Publishing system if required, however it is not possible to run both simultaneously.

The module answers inherent problems with Publishing large amounts of data (100,000’s of items) across multiple data-centers and geo-graphic locations.

-   Seperate publishing module that can be installed on 8.2 only (not compatible with prior versions)

-   New publishing UI dialogues
-   Dedicated Publishing dashboard

-   New Publishing Service developed on ASP.NET Core

-   Support for current publishing mode: Full and Incremental publish
-   Site publish
-   Sub tree publish
-   Single item publish
-   Publish related items
-   Support for multiple targets
-   Support for publishing in parallel
-   Support for publishing across data centres
-   Publish restrictions awareness
-   Ability to publish media
-   Cache clearing mechanism (data/html cashes)

-   REST API for the controlling service

Differences from standard publishing:

-   Majority of publishing work done in separate out of process service
-   New service processes items in bulk and will therefore not emit the same publishing events as current mechanism
-   New service does not use the current publishing pipelines (so any customization of these will not be honored)
-   At the end of a publish operation the service will raise a bulk publish end event. There is also a mechanism to get a list of items published.
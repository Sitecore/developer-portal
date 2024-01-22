---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_xDB_Cloud_client/80/Sitecore_xDB_Cloud_client_80_rev_160210/Release_Notes
---

**February 2016 - released update of xDB Cloud client 8.0 rev.160210**

This update is intended to increase stability of Sitecore instances which connect to xDB Cloud services.

## Resolved issues

-   Sitecore Content Delivery/Content Management instances could stop working when xDB Cloud Discovery service is unavailable. This has been fixed and now Sitecore will start anyway in such case, with disabled xDB Cloud (97792, 9631)
-   Timeout is too long when the connection strings are requested from xDB Cloud Discovery service on Sitecore instance initialization, causing Sitecore to occasionally spin for a few minutes after restart (97988)
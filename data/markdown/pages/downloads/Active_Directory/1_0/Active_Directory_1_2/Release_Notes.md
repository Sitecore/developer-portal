---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Active_Directory/1_0/Active_Directory_1_2/Release_Notes
---

Released **December 26th, 2014**. Tested with **Sitecore CMS 7.2 rev. 141226 (Update-3)**, **Sitecore CMS 7.5 rev. 141003**, and **Sitecore XP 8.0 rev. 141212**.

## Compatibility

This version of the module only runs on Sitecore 7.2 or later.

## Change Log

Issues resolved:

-   The LDAPLogin page did not register the user ticket. The issue has been fixed. **(864)**
-   Single sign-on through the module negatively impacted the Experience Editor ribbon (in preview mode). The issue has been fixed. **(822)**
-   Spaces in the Organization Unit name were not supported. The issue has been fixed. **(861)**
-   AD used the same cache for the same connection string, but with different organizations. The issue has been fixed. **(12526)**
-   The `SitecoreADMembershipProvider` created users with incorrect password question/answer values. The issue has been fixed. **(868)**
-   The `attributeMapName="sAMAccountName"` intermittently caused the `DirectoryNotificationProvider` to stop working. The issue has been fixed. **(12527)**
-   The `SitecoreADRoleProvider` returned no roles if the Role's cache was disabled. The issue has been fixed. **(12893)**
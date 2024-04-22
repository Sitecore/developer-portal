---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_xDB_Cloud_services/current/Sitecore_xDB_Cloud_services/Release_Notes
---

**March 28th, 2017 – xDB Cloud REST API update**

This update provides a number of improvements in xDB Cloud REST API .

## Resolved issues:

-   GetFirewallSettings endpoint upgrade (112836)
-   The 'Get Firewall Settings' API does not return a full list of hostnames and ports. This has been fixed (100816, 101078, 135527)
-   The xDB Consumption REST API returns value in bytes, but labels in GBs. This has been fixed (139229)
-   Get-Version REST API endpoint does not work for xDB Cloud 1.0 sets. This has been fixed (137770)

**January 13th, 2017 – xDB Cloud update**

This update introduces support for upgrade path from Sitecore 8.1 to Sitecore 8.2 Initial Release in xDB Cloud. See [How to upgrade xDB Cloud](https://kb.sitecore.net/articles/495713) for details. No impact on existing customers' xDB sets.

## New features

-   Support for upgrading xDB Cloud set from Sitecore 8.1 to Sitecore 8.2 Initial Release (118215)

**December 24th, 2016 – xDB Cloud update**

This update introduces support for Sitecore 8.2 Initial Release in xDB Cloud 2.0. See [compatibility table](https://kb.sitecore.net/articles/966080) for details. No impact on existing customers' xDB sets.

## New features

-   xDB Cloud Support for Sitecore 8.2 Initial Release (110449)

**December 5th, 2016 – xDB Cloud core services update**

This update is a follow-up on previous update that enables MongoDB 3.0 support for new xDB Cloud environments. No impact on existing customers' xDB sets.

## New features

-   MongoDB 3.0 used as default database engine in xDB Cloud for new sets (125599)

**November 29th, 2016 – xDB Cloud core services update**

This update provides fixes and improvements for xDB sets internal monitoring and management. No impact on customers' xDB sets.

## Resolved issues

-   Added rollback process for major upgrade scenario e.g. 8.0 to 8.1 (121638)
-   Updating MongoDB driver used in xDB Cloud core services (131561)
-   Core services stability fixes (109550, 126613, 128090, 126751, 128327)

**October 20th, 2016 – xDB Cloud customer resources update**

Updating Processing and Reporting services on all customer instances. Impact: no downtime for data collection, temporary delay (a few minutes) for the collected data to show up in reports

## Resolved issues

-   Stability fixes (128003)

**September 20th, 2016 – xDB Cloud core services update**

This update provides fixes and improvements for xDB sets internal monitoring and management. No negative impact caused by the update to customers' xDB sets.

## New Features

-   Adding feature to clean up all data from existing xDB Cloud set. Read more in [Service Catalog](https://kb.sitecore.net/articles/042722) (117947)

## Resolved issues

-   Core services stability fixes (119662, 119854, 124192, 122660)

**September 7th, 2016 – xDB Cloud resource base update**

This update provides fixes and improvements for Sitecore XP resources used for creating new xDB Cloud sets. Existing customers can update to the newest resources base per request.

## Resolved issues

-   Reduce Segments Agent does not work on multiple instances (114072)
-   Contact indexing is broken when contacts with Address facets are indexed in Cloud Search (114433)
-   History processing stability fixes merged to Sitecore 8.1 Update-2 resources (121323)

**September 7th, 2016 – xDB Cloud core services update**

This update provides fixes and improvements for xDB sets internal monitoring and management. No negative impact caused by the update to customers' xDB sets.

## Resolved issues

-   Enhanced Monitoring For Processing Service(98726)
-   Improved xDB sets creation and upgrade procedures (119656, 119655)

**September 1st, 2016 – xDB Cloud core services update**

This update changes the architecture of service to enable provision of xDB set using any Sitecore XP release and not only the latest one as previously. Check more details via [xDB Cloud Compatibility Table](https://kb.sitecore.net/articles/966080). Also, stability of core operations has been improved within this update. No effect on existing customer xDB sets by this change.

## New Features

-   Enabling provisioning specific Sitecore version instead of the latest one for xDB Cloud sets (119654)

## Resolved issues

-   Added transient fault handling block to SQL operations (119150)

**August 11th, 2016 – xDB Cloud core services update**

This update provides stability fixes to xDB Cloud Core services, internal system for ensuring connection from customer environment to xDB Cloud instances. No effect on customer xDB sets by this change.

## Resolved issues

-   Stability and monitoring improvements (105264, 105267, 103444)

**July 21st, 2016 – xDB Cloud 2.0 release**

This release introduces improvements to the way you create xDB Cloud sets and connect to xDB Cloud. Existing xDB sets are not affected by this change.

## New Features

-   xDB Cloud resources, such as connection strings to MongoDB, the reporting service, and the Sitecore analytics index are now accessible and provided directly when a new xDB set is initialized
-   Sitecore no longer creates a new xDB Cloud set automatically. Now, customers have to request a new xDB Cloud set from Sitecore Support
-   More details about this release is available in [What's New in xDB Cloud 2.0](https://kb.sitecore.net/articles/373219) article

**June 21st, 2016 – released update to xDB Cloud REST API**

This release is an update to xDB Cloud REST API, which is documented [here](https://doc.sitecore.net/cloud/xdb_cloud/customizing/rest_api_reference_for_the_xdb_cloud_service). This update has no effect on customer instances.

## Resolved issues

-   The 'SSO Encode Sitecore license' REST API has been reworked to use the 'Content-Type: application/xml'. (107477)
-   REST API failed to handle DeploymentID with special chars like period (.). This has been fixed. (106567)
-   The 'Get History Processing Status' REST API did not work if history processing was not triggered. This has been fixed. (108883)
-   The 'Get Firewall settings' REST API returned an empty message if the 'X-ScS-Nexus-Auth' header was missing. This has been fixed. (108364)

  
  

**June 16th, 2016 – update to support new Sitecore XP release**

This update introduces support of Sitecore 8.1 Update-3 for all new xDB sets. Existing customers can request upgrade on demand as described in [service catalog](https://kb.sitecore.net/articles/042722).

## New Features

-   Support for Sitecore 8.1 rev.160519, EXM 3.3 rev.160527 and WFFM 8.1 rev.160523 on xDB Cloud side (111397, 111422, 111398)

  
  

**April 28th, 2016 – update to support new Sitecore XP release**

This update introduces support of Sitecore 8.0 Update-7 for all new xDB sets. Existing customers can request upgrade on demand as described in [service catalog](https://kb.sitecore.net/articles/042722).

## New Features

-   Support for Sitecore 8.0 rev.160115 on xDB Cloud side (87427, 101791)

  
  

**April 25th, 2016 – update to support new Sitecore XP release**

This update introduces support of Sitecore 8.1 Update-2 for all new xDB sets. Existing customers can request upgrade on demand as described in [service catalog](https://kb.sitecore.net/articles/042722).

## New Features

-   Support for Sitecore 8.1 rev.160302, EXM 3.2.1 rev.160127 and WFFM 8.1 rev.160304 on xDB Cloud side

  
  

**April 14th, 2016 – released core services update 1.13.1388 rev. 160324**

This release is an update of xDB Cloud core services used when connection between client Sitecore and xDB Cloud service is established. Individual customers xDB sets were not changed.

## New Features

-   Improving internal system scalability (100255, 80674)

  
  

**March 29th, 2016 – released general update 1.12.1368 rev. 160317 for all Sitecore 8.1 instances**

This update is a hotfix, which was automatically applied to all xDB Cloud customers on Sitecore 8.1.

## Resolved issues

-   Dead lock occurred on Processing and Reporting services (97205)
-   Definition and taxonomy caching issues in Marketing Taxonomy (98176)
-   Issue with performance in Content Testing functionality (101196)
-   Aggregation process failed sometimes due to the "String or binary data would be truncated" exception raised if the URL contains more than 450 symbols (97934)

  
  

**March 10th, 2016 – released general update 1.12.1314 rev. 160229 for all Sitecore 8.0 instances**

This update is a hotfix, which was automatically applied to all xDB Cloud customers on Sitecore 8.0.

## Resolved issues

-   Processing and aggregation were non-stable and accidently stopped sometimes. Manual action required to get it resumed, causing inconsistent data in reports (83355).
-   When aggregating contacts, Ill-formed documents caused exception in cloud search (84133)
-   Data in WFFM reports were not shown. This has been fixed (87163)
-   Dead lock occurred on Processing and Reporting services (97205)
-   Performance issue in Processing/History Processing (97206)
-   Aggregation process failed sometimes due to the "String or binary data would be truncated" exception raised if the URL contains more than 450 symbols (97934)
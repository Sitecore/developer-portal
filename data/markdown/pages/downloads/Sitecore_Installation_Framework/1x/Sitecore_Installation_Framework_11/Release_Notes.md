---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Installation_Framework/1x/Sitecore_Installation_Framework_11/Release_Notes
---

**December 2017**

## New Features

**Tasks**

Invoke-WebRequestTask - Request a URI with configurable retries (useful for site warm ups).  
Invoke-ManageSolrConfigTask - Utilizes Invoke-WebRequestTask to ensure Solr is responding.  
Invoke-ManageSolrCoreTask - Utilizes Invoke-WebRequestTask to ensure Solr is responding.  
Invoke-ManageSolrSchemaTask - Utilizes Invoke-WebRequestTask to ensure Solr is responding.

## Bug Fixes

**Tasks**

Invoke-HostHeader - Read and writes to the hosts file now use the UTF8 encoding.  
Invoke-HostHeader - Ensure reads returns array so Count property can be used.  
Invoke-ManageSolrConfigTask - More informative errors when testing Address parameter.  
Invoke-ManageSolrCoreTask - More informative errors when testing Address parameter.  
Invoke-ManageSolrSchemaTask - More informative errors when testing Address parameter.  
Invoke-ManageSolrSchemaTask - Check for errorMessages in response before writing as errors.  
Invoke-WebDeployTask - Will add quotes to unquoted argument values that contain commas.  
Invoke-SitecoreUrlTask - Directly authenticates with the login page before invoking a url.

**Other**

Updated packaging metadata (copyrights, license, etc)  
Module now requires PowerShell version 5.1  
Module now requires SitecoreFundamentals 1.1.0
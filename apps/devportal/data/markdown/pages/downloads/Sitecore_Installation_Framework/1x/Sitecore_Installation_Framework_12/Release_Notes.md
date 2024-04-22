---
title: "SIF 1.2 - Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Installation_Framework/1x/Sitecore_Installation_Framework_12/Release_Notes
---

# New Features

## Tasks

-   `Invoke-IoXmlTask` - Allows enabling, disabling and deleting configurations by reading an IO xml file (*.ioxml)
-   `Invoke-TransformXmlDoc` - Transforms XML documents by applying XML Document Transformation (xdt) files

# Bug Fixes

## Tasks

-   `Invoke-ResolveCertificatePathConfigFunction` - Correctly resolves certificate private key path on Windows 8.1/2012.

## Input Hash tables

Some functions make use of internal logic to flatten a hash table into a series of properties which are then set on the object (e.g. in `Invoke-AppPoolTask` and `Invoke-WebsiteTask`).

The following fixes have been applied:

-   Multi-level paths will now be correctly flattened.
-   When the key contains the string 'password' it's value will not be logged unless `-Verbose` is used.
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_CLI/4x/Sitecore_CLI_400/Release_Notes
---

**September 2021 – released Sitecore CLI 4.0.0**

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore CLI 4.0.0 includes:

-   ​Sitecore CLI now supports the serialization of Sitecore roles for a given domain and role name pattern defined within a `Module.json` file.
-   Sitecore CLI now supports excluding fields from the serialization process that are defined in the `Sitecore.json` and `Module.json` files.
-   A new `ResourcePacking` plugin is available for the Sitecore CLI that allows you to create Item as Resource files based on items created with the Sitecore CLI/SVS or Unicorn.
-   The `Publishing` plugin now supports specifying publishing targets with a `--pt` or `--targets` optional subcommand.
-   A new `Indexing` plugin is available for the Sitecore CLI that supports Solr managed schema population, the rebuilding, of indexes, and the retrieval of index statistics.

## New features/improvements

 | Description | ADO no. |
 | --- | --- |
 | ​​​​​​​​​​Sitecore CLI now supports the serialization of Sitecore roles for a given domain and role name pattern defined within a `Module.json` file. | 476344 |
 | Sitecore CLI now supports excluding fields from the serialization process that are defined in the `Sitecore.json` and `Module.json` files. | 444575 |
 | Sitecore CLI now includes support for plugin developers to listen for serialization notification events. | 459725 |
 | A new `ResourcePacking` plugin is available for the Sitecore CLI that allows you to create Item as Resource files based on items created with the Sitecore CLI/SVS or Unicorn. | 459726 |
 | ​​​​​​​​​​The `Publishing` plugin now supports specifying publishing targets with a `--pt` or `--targets` optional subcommand. | 460754 |
 | A new `Indexing` plugin is available for the Sitecore CLI that supports Solr managed schema population, the rebuilding, of indexes, and the retrieval of index statistics. | 466688 |
 | When you use `Device Code Flow` mode for ​authentication, the auth URL is output to the command window for improved usability. | 476201 |
 | The Sitecore serialization watch command now supports monitoring and synchronization of Sitecore roles. | 483793 |

## Resolved issues

The following issues have been fixed:

 | Description | ADO no. |
 | --- | --- |
 | The Sitecore Managed Services package references are not consistent for every download and installation type. | 494656 |
 | The Sitecore CLI throws an error when refactoring content and removing a path from Module.json files. | 493898 |
 | The Sitecore CLI does not support the use of closing slashes in a serialization item include path. | 422478 |
 | ​​​​​​​​​​Sitecore serialized item cache is not cleared completely after overwriting/removing items. | 470893 |
 | ​Sitecore CLI doesn't delete non-serialized sub-items when moving items on the first run. | 477129 |
 | ​Sitecore CLI is incompatible with Azure Blob Storage because it uses an obsolete API. | 490176 |
 | Sitecore CLI changes the `Created By` and `Owner` fields during serialization. | 475476 |
 | ​Moving serialized item under a folder causes an error. | 463223 |
 | ​The `BranchID` property is not maintained in the YML file during serialization pull/push commands. | 465383 |
 | Sitecore CLI does not serialize all the template fields before the standard value fields. | 490183 |
 | Sitecore CLI does not always deserialize the `Standard Values` on an item before the template fields.​​​​​​​​​​ | 460391 |
 | If the root item is renamed during serialization, the `GraphQL.ExecutionError` is displayed.​​ | 477439 |
 | If you execute a republish operation with a specified path, the `republish` flag is not set. | 492426 |
 | During log in, the Sitecore CLI does not reset the `Client ID` when switching from client credentials to interactive login mode. | 422493 |
 | A Sitecore CLI serialization push command on items that have language versions, does not clears the language caches. | 462237 |
 | ​ If certain required values are missing from an item file, the Sitecore CLI throws `InvalidOperationException`. | 423272 |
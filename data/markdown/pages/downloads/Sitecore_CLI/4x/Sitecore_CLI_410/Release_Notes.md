---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_CLI/4x/Sitecore_CLI_410/Release_Notes
---

**December 2021 – released Sitecore CLI 4.1.0**

## Highlights

Sitecore CLI 4.1.0 includes:

-   ​Sitecore CLI now supports the inclusion of serialized roles in an item package.
-   A configurable serialization sync strategy has been added for continuation on serialization item errors.
-   A new resource packaging sub-command has been added to support the Items as Resources cleanup operation.
-   Serialization modules now support tagging.
-   The Sitecore Login command now supports the Http protocol.

## New features/improvements

 | Description | ADO no. |
 | --- | --- |
 | ​Sitecore CLI now supports the inclusion of serialized roles in an item package.​ | 492591 |
 | The new `plugin` sub-command initializes a set of default plugins. | 493622 |
 | ​The new `publishing` sub-command lists all the publishing targets. | 494069 |
 | A configurable serialization sync strategy has been added for continuation on serialization item errors. | 494345 |
 | A new `resource packaging` sub-command has been added to support the Items as Resources cleanup operation.​ | 500753 |
 | Serialization modules now support tagging. | 500890 |
 | ​The `Sitecore Login` command now supports the Http protocol. | 507626 |
 | The `serialization watch` command has been updated with support for continue on item serialization failures. | 510929 |

## Resolved issues

The following issues have been fixed:

 | Description | ADO no. |
 | --- | --- |
 | ​When a schema populate operation fails, the message is not formatted in red. | 498616 |
 | CLI outputs the incorrect `path is not included` error when using `ser explain` for items in databases other than the `master` database. | 424643 |
 | If two or more modules occupy the same file system path, CLI displays an unhelpful error message. ​ | 464007 |
 | The `sitecore init` command outputs the `Plugin Helper couldn't find configuration file` message. | 484865 |
 | If an invalid item mapping is included in the serialization module, CLI displays an error instead of a warning.​ | 491524 |
 | CLI serialization does not restore Azure Blob storage media after a serialzation push. | 493482 |
 | ​If `General Link` fields are added to the template during deserialization, they are rendered as raw values in the Content Editor. | 500529 |
 | If you try to pull IAR based items in Sitecore, serialization throws an unhandled exception. | 502958 |
 | If a template name starts with a special symbol followed by a lower-case character, the `GraphQLSchemaValidationException` is thrown.​ | 505864 |
 | If the `user.json` file does not contain a refresh token, CLI throws an unhandled exception. | 507228 |
 | If two or more modules occupy the same file system path, serialization does not display a helpful error message.​ | 508334 |
 | CLI serialization does not restore Azure Blob storage media for items that have changed location in the content tree. | 493578 |
 | ​If you call the `validate --fix` command with conflicting data in serialized items, serialization throws an unhandled exception. | 499030 |
 | If you change a field from shared to not-shared and perform a serialization push to Sitecore, content is not propogated. | 499106 |
---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/16x/Sitecore_Headless_Rendering_1600/Release_Notes
---

**February 2021 – released Sitecore Headless Rendering 16.0.0**

## Highlights

-   The new headless Next.js SDK and sample site are now available for the Sitecore JavaScript SDKs. They include static and server rendering options, Experience Editor support, and much more.

## New feature/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | An assembly list NuGet package is now available for the Sitecore Headless Services. |  | 411428 |
 | The ASP.NET Core SDK can now model bind custom values that are added to the Layout Service context.​ |  | 430939 |
 | A new headless Next.js SDK and sample site are now available for the Sitecore JavaScript SDKs. They include static and server rendering options, Experience Editor support, and more.​ | CS0179767,CS0181401 | 439737,398529 |
 | The ASP.NET Core getting started template has been updated for Sitecore XP 10.1.0, Headless Rendering 16.0.0, and Sitecore CLI 3.0. |  | 444585 |
 | A new read-only GraphQL schema is available for use with headless SDKs. It mirrors the schema which will be available with `Sitecore Experience Edge for XM`. |  | 448071 |
 | ​Developers can now configure the webhook URLs which should be invoked after completing a Sitecore publishing. |  | 452880 |
 | ​The Headless Services have been updated to GraphQL .Net 2.4.0. |  | 454948 |
 | The Headless Services HTTP Rendering Engine now supports a shared secret for securing communication between the Sitecore instance and the rendering host. Validation of the shared secret is currently only supported by the Next.js SDK. |  | 455009 |
 | The Headless Services HTTP Rendering Engine now sends the item URL along with the payload to the rendering host. |  | 455569 |
 | ​A new getting started template is available in `Sitecore.DevEx.Templates` for Next.js-based solutions. |  | 456051 |
 | The JSS CLI now supports reading environment variables from dotenv-style variable files.​ |  | 459416 |

## Breaking changes

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | The `Sitecore JavaScript Services Server` module has been renamed to Sitecore Headless Services. It is still a dependency for both the JavaScript and ASP.NET Core headless SDKs. |  | 397308 |
 | The default configuration of the Layout Service is now aligned with the JSS configuration. |  | 445521 |  |
 | The `Headless Services HTTP Rendering Engine` can now automatically rewrite relative URLs when rendering for the Experience Editor. This functionality has been removed from the ASP.NET Core SDK. |  | 455006 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | Sitecore JSS uses npm packages that contain security vulnerabilities.​ | CS0195691, CS0205247, CS0195391 | 439683, 442065 |
 | The Headless Services form controller can return a 500 error / NullReferenceException for invalid input.​ | CS0199423 | 447420 |
 | The JSS CLI `deploy` command does not exit on success for non-English languages. |  | 451342 |
 | In `Integrated` mode, some Unicode characters are not rendered correctly​. | CS0199300 | 458320 |
 | Outputting the search result score when using the GraphQL `search` query throws a `GraphQL.ExecutionError` exception.​ | CS0203644 | 458747 |
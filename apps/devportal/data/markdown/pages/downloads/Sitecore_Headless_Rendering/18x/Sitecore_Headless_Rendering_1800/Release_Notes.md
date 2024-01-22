---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/18x/Sitecore_Headless_Rendering_1800/Release_Notes
---

**August 2021 – released Sitecore Headless Rendering 18.0.0**

## Highlights

-   Headless Services now includes the Experience Edge Connector, that is available as a separate module. Experience Edge is an API-based service from Sitecore that enables globally replicated, scalable access to your Sitecore Experience Platform items, layouts, and media.
-   Debug logging is now available for Sitecore JavaScript SDKs in the 'debug' npm module.
-   The Angular SDK and sample have been updated to Angular v11.

## New feature/improvements

 | Context | Description | Customer ticket ID (or other) | AD no. |
 | --- | --- | --- | --- |
 | Headless Services | Headless Services now includes the Experience Edge Connector, that is available as a separate module. |  | 440792 |
 | Headless Services | ​GraphQL search now supports sorting of search results, via the mirrored Experience Edge schema. | CS0184512, CS0187932 | 407089 |
 | JavaScript Rendering​ | GraphQL-based clients for the Layout Service and the Dictionary Service are now available. |  | 439757 |
 | Angular | The server bundle build process has been simplified and the size of the bundle reduced. Thanks to Erik van 't Klooster for this contribution. |  | 447362 |
 | JavaScript Rendering | In the Experience Edge (node-headless-ssr-experience-edge),​ an experimental SSR sample has been added which can replace the Headless Proxy. |  | 452884 |
 | JavaScript Rendering | Debug logging is now available for Sitecore JavaScript SDKs in the `debug` npm module. |  | 459742 |
 | ​Angular | The Angular SDK and sample have been updated to Angular v11. |  | 459778 |
 | Next.js | If you try to deploy files for a Next.js solution, when file deployment is not necessary, the JSS CLI now outputs a more helpful error message​. |  | 460433 |
 | Headless Services | The `Headless Services` module includes a mirrored version of the Experience Edge GraphQL schema, which can be used for authoring preview and local development. |  | 464244 |
 | JavaScript Rendering | Numerous dependencies have been updated to address security warnings. For more information,see https://github.com/Sitecore/jss/pull/633. |  | 464638 |
 | React Native | There have been numerous updates/fixes to the React Native SDK and samples. For more information, see https://github.com/Sitecore/jss/pull/624. |  | 464639 |
 | Headless Services | The GraphQL IDE that is included in Headless Services now utilizes GraphQL Playground, which includes multiple query tabs and support for specifying HTTP Headers. |  | 469244 |
 | Next.js | The `jss create` and `dotnet new` starters for Next.js now include parameters which can be used to default the sample to SSG or SSR pre-rendering, and to specify the use of REST or GraphQL service endpoints. |  | 469722 |
 | ​JavaScript Rendering | The `RestLayoutService` client now lets you override the `named` Layout Service configuration. |  | 476037 |

## Breaking changes

 | Context | Description | Customer ticket ID (or other) | AD no. |
 | --- | --- | --- | --- |
 | ​Headless Services | The `edge` GraphQL schema that mirrors the `Experience Edge` schema has been updated to match the initial release of Sitecore Experience Edge. |  | 464244 |
 | Headless Services​ | The Sitecore configuration path for the publishing webhook has moved from `layoutService` to `javaScriptServices` and the base configuration of events and services no longer needs to be patched. For more information, see `Sitecore.JavaScriptServices.AppServices.PublishingWebHook.config.example`.​ |  | 466674 |
 | Headless Services​ | The Layout Service now outputs media URLs instead of item URLs for linked media items in reference fields, such as, `Droplink` and `Treelist`.​ |  | 466682 |
 | Next.js​ | The `Next.js Apollo Client` has been removed from the sample and is no longer a dependency for GraphQL calls. |  | 466680 |
 | Headless Services​​ | The Layout Service now outputs numeric values for numeric Sitecore field types. |  | 466755 |
 | Next.js | You can now exclude paths from the sitemap query that is used in `getStaticPaths`. |  | 477917 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | AD no. |
 | --- | --- | --- | --- |
 | ​Headless Services | In `General Link` fields, media links​ are rendered incorrectly in the Layout Service. | CS0206214, CS0208458 | 464473 |
 | Next.js | The sitemap query that is used in `getStaticPaths` only returns 10 results by default. |  | 466143 |
 | Angular | The `ApolloError: Http failure during parsing` error appear in the console on the `Styleguide /graphql` route. |  | 469299 |
 | JavaScript Rendering | Component scaffolding outputs incorrect line endings in generated files |  | 469480 |
 | ​Next.js | `Dictionary `service output is not cached correctly.`` |  | 469699 |
 | JavaScript Rendering | Form fields that contain check boxes do not always store the correct data when the check boxes are not selected. | CS0205985 | 470766 |
 | JavaScript Rendering | The `mediaApi.updateImageUrl` function can generate `invalid/missing hash value` errors in the Sitecore log files when image parameters are not updated. | CS0209534 | 471229 |
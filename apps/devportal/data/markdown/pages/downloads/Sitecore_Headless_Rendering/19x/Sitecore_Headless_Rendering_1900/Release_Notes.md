---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/19x/Sitecore_Headless_Rendering_1900/Release_Notes
---

**November 2021 – released Sitecore Headless Rendering 19.0.0**

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Breaking changes](#Breaking)
-   [Resolved issues](#Resolved)

## Highlights

-   The Vue SDK and sample have been updated to Vue 3.
-   The Headless Services module now deploys its items via Items as Resources (IAR), thereby enabling module upgrades without the need to update SQL data.
-   The Horizon authoring interface now supports Next.js.
-   You can now use the Layout Service and Next.js to enable static site generation of Sitecore MVC sites, and incrementally convert them to a headless architecture.
-   The documentation for Headless Services, JavaScript Rendering (JSS), and ASP.NET Core Rendering has been refactored, reviewed, and consolidated into a common location on `doc.sitecore.com`.
-   The Horizon authoring interface now supports ASP.NET Core Rendering.

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Headless Services | JavaScript Rendering - All the JavaScript packages are now published as both CommonJS and ESM. | 454376 |
 | Headless Services | The Vue SDK and sample have been updated to Vue 3. | 459777 |
 | ​Headless Services | The Headless Services module items are now deployed as `Items as Resources`. | 467836 |
 | ​Headless Services | The Horizon authoring interface now supports Next.js. | 468017 |
 | ​Headless Services | You can now use the Layout Service and Next.js to enable static site generation of Sitecore MVC sites, and incrementally convert them to a headless architecture. | 479060 |
 | ​Headless Services | The documentation for Headless Services, JavaScript Rendering (JSS), and ASP.NET Core Rendering has been refactored, reviewed, and consolidated into a common location on `doc.sitecore.com`. | 480320 |
 | ​Headless Services | The Horizon authoring interface now supports ASP.NET Core Rendering. | 494050 |
 | ​Headless Services | React, Next.js - The rendering performance of the React-based SDKs and samples has been improved with the removal of a potential double-rendering scenario. | 468237 |
 | ​Headless Services | The Next.js sample has been updated to demonstrate the use of dynamic component imports. | 468937 |
 | ​Headless Services | The Next.js SDK and sample have been updated to Next.js 11. | 474974 |
 | ​Headless Services | The GraphQL endpoints now allow unauthenticated CORS preflight OPTIONS requests by default, enabling the passing of sc_apikey via HTTP Header from browsers. This can be disabled by using `false` on the endpoint. | 475186 |
 | ​Headless Services | The Next.js sample can now be created with an `--empty` argument, resulting in a simplified starter without any boilerplate, components, or code-first support. This argument is useful when implementing static generation for Sitecore MVC sites. | 479298 |
 | ​Headless Services | The client dictionary and sitemap services now allow you to customize the `jssAppTemplateId` that is used when determining the root item of a site. | 483281 |
 | ​Headless Services | React, Angular, Vue - The samples now support the `fetchWith` create option and allow you use of GraphQL or REST-based services, and are consistent with Next.js. | 488863 |
 | ​Headless Services | Vue - The `sc-placeholder` component now uses fragments by default and does not render an extra root. | 474394 |
 | ​Headless Services | Headless Proxy - The `/dist` path has been removed from `pathRewriteExcludeRoutes` config property, because it was unnecessary. | 481856 |
 | ​Headless Services | The ASP.NET Core and Next.js `dotnet new` templates have been updated to 10.2 and Headless Rendering 19.0. | 490137 |
 | ​Headless Services | Vue, React - The detection of `connected` and `disconnected` mode has been improved. | 485189 |
 | ​Headless Services | React, Angular, Vue - To be consistent with Next.js, we have removed the deprecated `dataApi` in favor of client service wrappers. | 486242 |
 | ​Headless Services | A `Render as HTML` checkbox has been added to the Layout Service options on Sitecore renderings. This checkbox is the equivalent of the existing `json=false` rendering parameter, and results in the output of rendering HTML to the Layout Service for MVC-compatible rendering types. | 479294 |
 | ​Headless Services | JavaScript Rendering - The service clients now provide a `timeout` option. | 480317 |
 | ​Headless Services | React, Headless Proxy - To be consistent with Next.js, Dictionary calls now utilize the `RestDictionaryService`. | 487865 |
 | ​Headless Services | React, Angular, Vue - To be consistent with Next.js, the samples now use the `default` Layout Service configuration by default. | 493438 |

## Breaking changes

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | ​Headless Services | `@sitecore-jss TypeScript` types that previously used `any` may need to be updated with more specific definitions. | 445601 |
 | ​Headless Services | Upgraded installations must use the upgrade tool to remove Headless Services items from the Sitecore `master` database, as these tems are now delivered as Items as Resources (IAR) files. | 467836 |
 | ​Headless Services | The React and Next.js samples have been updated to avoid an extra [React rendering](https://github.com/Sitecore/jss/pull/775). | 468237 |
 | ​Headless Services | Next.js implementations must upgrade to Next.js 11. | 474974 |
 | ​Headless Services | Vue implementations must upgrade to Vue 3. | 459777 |
 | ​Headless Services | All the [samples/frameworks](https://github.com/Sitecore/jss/pull/744) must be updated to use the new layout and dictionary services instead of the deprecated dataApi. | 486242 |
 | ​Headless Services | Dictionary calls should be updated to use the [RestDictionaryService](https://github.com/Sitecore/jss/pull/750). | 487865 |
 | ​Headless Services | The JavaScript Rendering apps should use the `default` [layoutServiceConfiguration](https://github.com/Sitecore/jss/pull/785) by default. | 493438 |
 | ​Headless Services | The Session state is no longer supported in GraphQL endpoints. This removes session locking and improves performance. | 457362 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | ​Headless Services | Session state locking can impact the performance of GraphQL queries. | 457362 |
 | ​Headless Services | If you invoke the Layout Service on pages that contain rendering items that do not exist in the database, an `Object reference error` can occur. | 462233 |
 | ​Headless Services | Next.js - If you use multiple catch-all routes with SSG, opening a route in the Experience Editor can cause a 404 error. | 483286 |
 | ​Headless Services | Vue - If you open or navigate between pages, a `page not found` error may occur. | 485147 |
 | ​Headless Services | React - The Experience Forms React implementation doesn't apply CSS classes that are configured by a content author. | 483539 |
 | ​Headless Services | Next.js - There is no documentation about the process or limitations of using Sitecore Forms with Next.js. | 485498 |
 | ​Headless Services | Angular - You cannot navigate to language URLs. | 485127 |
 | ​Headless Services | ASP.NET Core - If you use the `Image` tag helper, custom attributes are lost in Experience Editor. | 473634 |
 | ​Headless Services | JavaScript Rendering - The embedded JSS app sample does not build. | 475487 |
 | ​Headless Services | The publishing webhooks stop processing when a non-executing webhook is encountered. | 483283 |
 | ​Headless Services | The Layout Service date field output is inconsistent between Experience Edge and Headless Services. | 485040 |
 | ​Headless Services | React, Next.js - When rendering raw HTML components, placeholders can throw a `void element tag` error for self-closing tag elements. | 487382 |
 | ​Headless Services | The Layout Service can throw a `NullReferenceException` when it is invoked by a known robot user agent. | 488970 |
 | ​Headless Services | The Layout Service does not resolve the root page item if the site has a virtual folder. | 489431 |
 | ​Headless Services | React - When running React in connected mode against development environments, proxied Sitecore requests, for example, visitor identification, media, and so on, can cause `504, Gateway Timeout` errors. Setting `changeOrigin: true` in the CRA proxy resolves this issue. | 496886 |
 | ​Headless Services | ASP.NET Core - If a rendering content resolver returns two or more fields as empty strings, the ASP.NET Core rendering can throw an `ArgumentException`. | 489544 |
 | ​Headless Services | Preflight OPTIONS requests against the mirrored Experience Edge schema will fail when using `sc_apikey in an HTTP Header, which is different behavior than Experience Edge.` | 479265 |
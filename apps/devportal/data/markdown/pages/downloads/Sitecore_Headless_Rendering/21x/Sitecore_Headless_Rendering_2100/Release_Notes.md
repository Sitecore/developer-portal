---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/21x/Sitecore_Headless_Rendering_2100/Release_Notes
---

**December 2022 – released Sitecore Headless Rendering 21.0.0**

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Breaking changes](#Breaking)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Headless Rendering 21.0.0 includes:

-   The updated Experience Edge Connector introduces significant improvements, including faster publishing, support for multiple Edge endpoints, support for Preview publishing targets, better handling of dependency publishing, and increased accuracy in the Publish dialog status report.
-   The Next.js SDK now supports Next.js 12, which provides multiple [benefits](https://nextjs.org/blog/next-12).
-   A new starter framework that uses `npm init` has been implemented and this makes it easier for JavaScript developers to get started with the JSS sample applications.
-   Upgrade Next.js to version 12.3.x
-   Upgrade React to version 18
-   Next.js Personalize initializer add-on nextjs-personalize which includes an example setup for projects using XM Cloud Embedded Personalization
-   New Next.js SXA initializer add-on nextjs-sxa which includes example components and setup for Headless SXA projects. This includes support for SXA-managed error pages, redirects, sitemap.xml and robots.txt.
-   Support for .env files in react, angular, vue, node-headless-ssr-proxy, and node-headless-ssr-experience-edge sample applications

## New features/improvements

 | Context | Description |
 | --- | --- |
 | Headless Services | Upgrade Next.js to 12.3.x. |
 | Headless Services | Personalize Initializer Add-on. |
 | Headless Services | Upgrade react to version 18. |
 | Headless Services | Rename "App Route" to "Page". |
 | Headless Services | Partial rendering implementation. |
 | Headless Services | Add environment variable to allow disable of sitemap fetch in getStaticPaths. |
 | Headless Services | Allow defer prop on VisitorIdentification component. |
 | Headless Services | Introduce timeouts. |
 | Headless Services | Extend richText directive to render internal routerlinks. |
 | Headless Services | Export more types from jss-nextjs & jss-react. |
 | Headless Services | RichText support for router links. |
 | Headless Services | Personalize Middleware. |
 | Headless Services | GraphQL sitemap now parses personalize data from site queries. |
 | Headless Services | Add typescript to the sample. |
 | Headless Services | Add script to restore yarn.lock. |
 | Headless Services | GraphQL sitemap now parses personalize data from site queries and adds it into returned paths. |
 | Headless Services | Support .env file. |
 | Headless Services | Move XP tracking API examples to separate add-on initializer. |
 | Headless Services | Provide ability to use .env. |
 | Headless Services | Make extractPath shared and remove duplicate page-props-factory/plugins/normalMode for personalize addon. |
 | Headless Services | Add merge (concatenate) functionality for .env files. |
 | Headless Services | Create plugins approach for the nextjs middleware. |

## Breaking changes

 | Context | Description |
 | --- | --- |
 | Headless Services | Remove deprecated features. |
 | Headless Services | Link component should forward ref. |
 | Headless Services | graphql nextjs sitemap update. Updated GraphQLSitemapService will only work with Sitecore versions that have 'site' query present in edge schema. |
 | Headless Services | Performance improvements for editing integration. |
 | Headless Services | Performance improvements for editing integration. All editing-related types have moved to a dedicated editing submodule. Imports must be updated to use this submodule. e.g. |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Headless Services | ​Resolve hydration errors for nextjs pages in EE. |  |
 | Headless Services | Specify AppProps generic type in _app.tsx to align with latest changes from Next 12.3.0. |  |
 | Headless Services | Build error when null values received in graphql-sitemap-service.js. |  |
 | Headless Services | App in monorepo fails to open in Experience Editor/Headless ssr proxy. |  |
 | Headless Services | Handle _blank target on links in RichText. |  |
 | Headless Services | Timeout error on CM when calling Next.js rendering host. |  |
 | Headless Services | Updating next to 12.2.4 - and reintroducing babel to avoid swc errors. |  |
 | Headless Services | Fix compilers proxy options in template. |  |
 | Headless Services | Module parse failed: Unexpected token, htmlparser2. |  |
 | Headless Services | Fix paginated results retrieval in sitemap paths service. |  |
 | Headless Services | Can't render Link component when Editable and Children are provided. |  |
 | Headless Services | Resolve duplicate react instances issue. |  |
 | Headless Services | Refactored withComponentFactory HOC. |  |
 | Headless Services | Provide headers to response when config.onError is called. |  |
 | Headless Services | Proper building of query string inside EditingRenderMiddleware. |  |
 | Headless Services | Fix RouteData fields type mismatch. |  |
 | Headless Services | Add a friendly message when building nextjs app and site items are missing. |  |
 | Headless Services | RouteData type doesn't support ContentList/MultiList/DropTree fields. |  |
 | Headless Services | Expose tracking functionality and remove direct usage of sitecore-jss module. |  |
 | Headless Services | Allow to register custom field components. |  |
 | Headless Services | VisitorIdentification component now uses sitecore context hook. |  |
 | Headless Services | Fix misprint in comment. |  |
 | Headless Services | Headless SSR Experience Edge returns 200 for page not found. |  |
 | Headless Services | Dynamic components markup is missing in Experience Editor after adding new rendering. |  |
 | Headless Services | Fix invalid default bundle path. |  |
 | Headless Services | Remove scjssconfig verification, as .env is used. |  |
 | Headless Services | RichText component not forwarding query params. |  |
 | Headless Services | Update jss create related info on the home page. |  |
 | Headless Services | Danish language is not rendered when refresh the page. |  |
 | Headless Services | Fix Styleguide comment path reference. |  |
 | Headless Services | Fix missing null type for nextjs/Scripts.tsx. |  |
 | Headless Services | Fix duplicate enum definition. |  |
 | Headless Services | Add gitignore. |  |
 | Headless Services | Fix shape of config object. |  |
 | Headless Services | Fix Sitecore querystring property in Link component. |  |
 | Headless Services | Make Image handle 'class' prop when it's passed down. |  |
 | Headless Services | Placeholder key is not defined. |  |
 | Headless Services | Use kebab case for plugins, instead of camelCase. |  |
 | Headless Services | Experience Editor controls does not work until hard reload is done. |  |
 | Headless Services | graphql-let error when bootstrapping empty Nextjs app. |  |
 | Headless Services | "Edit related item" button redirects to home. |  |
 | Headless Services | Styleguide-Layout-Reuse breaks EE. |  |
 | Headless Services | Setting RunWhenNoItemResolved to false for a processor that extends getLayoutServiceContext leads to 500 response. | 477310 |
 | Headless Services | The "Server cannot modify cookies after HTTP headers have been sent" error arises in logs after performing a GraphQL request. | 507077 |
 | Headless Services | Grouped Droplink field maps to MultilistFieldTypeFactory GraphQL type instead of LookupFieldTypeFactory. | 511348 |
 | Headless Services | Items with dashes in their names are not resolved correctly for Layout Service requests when there is a wildcard item. | 528764 |
 | Headless Services | Content Search - English language fields are returned for MultiList and DropLink fields. | 529720 |
 | Headless Services | The /sitecore/api/jss/track/event page visits are tracked by Sitecore analytics. | 533361 |
 | Headless Services | "Object reference not set to an instance of an object." error when adding "Page layout as Json" rendering, SXA + headless rendering. | 533825 |
 | Headless Services | Experience Edge connector always includes server side URL while the preview Edge GraphQL schema doesn't do this by default. | 539568 |
 | Headless Services | The "Server cannot modify cookies after HTTP headers have been sent" exception appears after sending a GraphQl request . | 540377 |
 | Headless Services | The general link field (internal link) renders a URL with a hostname in case pointing inside its own site. | 542053 |
 | Headless Services | Jss Form File Upload Validation doesn't work as expected.. | 547047 |
 | Headless Services | The ECONNRESET server error displays instead of actual error message if the integrated GraphQL query contains the backslash symbol. | 548645 |
 | Headless Services | Requests to "/api/jss/formbuilder" return 404 if serverSideRenderingEngineEditOnly is "true". | 549468 |
 | Headless Services | EQ operator still works as Contains for text fields. | 554394 |
 | Headless Services | TemplateUpdateHandler can lead to InvalidOperationException if there are multiple publishing targets. | 511173 |
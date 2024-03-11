---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/20x/Sitecore_Headless_Rendering_2000/Release_Notes
---

**May 2021 – released Sitecore Headless Rendering 20.0.0**

-   [Highlights](#Highlights)
-   [New features/improvements](#New)
-   [Breaking changes](#Breaking)
-   [Resolved issues](#Resolved)

## Highlights

Sitecore Headless Rendering 20.0.0 includes:

-   The updated Experience Edge Connector introduces significant improvements, including faster publishing, support for multiple Edge endpoints, support for Preview publishing targets, better handling of dependency publishing, and increased accuracy in the Publish dialog status report.
-   The Next.js SDK now supports Next.js 12, which provides multiple [benefits](https://nextjs.org/blog/next-12).
-   A new starter framework that uses `npm init` has been implemented and this makes it easier for JavaScript developers to get started with the JSS sample applications.

## New features/improvements

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Headless Services | Experience Edge Connector - The updated Experience Edge Connector introduces significant improvements, including faster publishing, support for multiple Edge endpoints, support for Preview publishing targets, better handling of dependency publishing, and increased accuracy in the Publish dialog status report. | 504865 |
 | Headless Services | Next.js - The Next.js SDK now supports Next.js 12. | 504722 |
 | ​Headless Services | Vue - A new starter framework that uses `npm init` has been implemented. | 504957 |
 | Headless Services | ​Next.js - `withSitecoreContext` HOC has been removed from `Layout.tsx`. | 506606 |

 | Headless Services | ​Next.js - Component props now support auto-injection by placeholder. | 466681 |
 | Headless Services | ​Next.js - `next.base.config` has been refactored to use plugins. | 509305 |
 | ​Headless Services | ​Next.js - `sitemap-fetcher` has been refactored to make it extendable. | 509304 |
 | Headless Services | ​Next.js - `PagePropsFactory` has been refactored to make it extendable. | 506964 |
 | Headless Services | ​Next.js - Locale variants have been removed from default rewrites. | 487898 |
 | Headless Services | ​Next.js React Angular Vue - An informative message is shown when jss start is run using `FETCH_WITH=GraphQL`. | 514933 |
 | Headless Services | ​Next.js React Angular Vue - The class name of the `ContentBlock` component has been changed from `display-4` to `contentTitle`. | 515294 |
 | Headless Services | ​Next.js React Angular Vue - The app name is now used as the prefix value for placeholders. | 495924 |
 | ​Headless Services | We can now generate API reference docs. | 467457 |
 | Headless Services | ​Next.js - We now use component manifest definitions to define template names. | 482700 |
 | Headless Services | We have upgraded to Node.js 16. | 507446 |
 | ​Headless Services | ​JSS CLI - We have improved the error handling for `jss create`. | 504926 |
 | Headless Services | ​​​Next.js, React, Angular, Vue - If you use the new flag, the app name is now added as the prefix for the templates.​​ | 482700 |

## Breaking changes

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Headless Services | We have consolidated some tightly coupled packages and refactored the sitecore base package into submodules. | 479456 |
 | Headless Services | Next.js, React - We have implemented a strongly typed value for `SitecoreContext`. | 461403 |
 | ​Headless Services | ​We have removed all the samples from `/samples`. | 510087 |
 | ​Headless Services | The sitecore-embedded-jss-app has been migrated to https://github.com/Sitecore/headless-examples and the sitecore-javascript-renderings have been removed.​ |  |

## Resolved issues

The following issues have been fixed:

 | Context | Description | ADO no. |
 | --- | --- | --- |
 | Headless Services | ​Experience Edge Connector - The LayoutData entity does not populate the itemPath correctly. | 511989 |
 | Headless Services | ​Experience Edge Connector - When the connection string is wrong a misleading error message is shown. | 524700 |
 | ​Headless Services | ​Experience Edge Connector - If you publish a media item in languages for which it does not have a version, Experience Edge has problems with content items that use this media item. | 523960 |
 | Headless Services | ​Angular - If you navigate to another page, the current language is not preserved. | 485363 |
 | ​Headless Services | ​Next.js, React, Angular, Vue - Hidden renderings do not have an implementation and this throws a console error message. | 471021 |
 | Headless Services | Query strings are not handled correctly in links on headless sites. | 511525 |
 | Headless Services | ​React, Angular, Vue - There are some peer dependency errors. | 512988 |
 | Headless Services | ​Next.js - If you when bootstrap an empty Next.js app, a graphql-let error occurs. | 522573 |
 | ​Headless Services | ​Next.js - ​If you set the `sc_jssapp` query parameter, you cannot edit the `_Standard Values` template. | 512685 |
 | Headless Services | ​Next.js - If you start an app in disconnected mode, it throws a webpack fallback option error. | 516626 |
 | Headless Services | ​Next.js - ​The Next.js sample fails to build on Vercel due to Prettier errors. | 506617 |
 | Headless Services | ​Next.js - Custom components cannot be added in Horizon. | 497033 |
 | ​Headless Services | ​Next.js - The `.gitignore` file is not included in the `sitecore` folder. | 529156 |
 | Headless Services | ​Angular - The `Edit the related item` button redirects to the `home` item. | 521413 |
 | Headless Services | ​Angular - `angular-devkit/build-angular` has a deprecation error. | 511047 |
 | Headless Services | ​Angular - If `/graphql` is requested in the Experience Editor, localhost, or Horizon, a console error is thrown. | 496697 |
 | ​Headless Services | ​Vue - In the Experience Editor, if you click the `Change associated content` button, you are redirected to the `Home` page. | 512259 |
 | Headless Services | ​Vue - In the Experience Editor, you cannot add a new rendering. | 512307 |
 | Headless Services | ​Vue - In Horizon, you cannot add a new rendering or highlight an existing rendering. | 511325 |
 | Headless Services | ​Vue - The `Select a Rendering` dialog does not list the allowed items for the specified placeholder. | 505752 |
 | ​Headless Services | ​Vue - In connected mode, the app hangs and is unresponsive. | 496730 |
 | Headless Services | ​React - In connected mode, a gateway timeout error occurs. | 496886 |
 | Headless Services | ​Vue, React - An exception occurs when rendering a GraphQL page. | 511597 |
 | Headless Services | ​React, Angular, Vue - The prefix is missing from the template id of the styleguide-explanatory-component-template and this throws an error. | 498710 |
 | ​Headless Services | ​React, Angular, Vue - If you run `jss graphql:update`, it throws an error. | 497061 |
 | Headless Services | ​React, Angular, Vue - Images are not loaded correctly because the Sitecore server URL is not included in the media URLs by default. | 496885 |
 | Headless Services | ​In the Experience Editor, the controls do not work until you perform a hard reload. | 521664 |
 | Headless Services | ​In the Experience Editor, if you add the `Styleguide-Layout-Reuse` rendering, it breaks the control toolbar. | 514959 |
 | Headless Services | ​Next.js - Preview Mode doesn't work with `fallback: false` on Vercel. | 460905 |
 | Headless Services | ​In the Experience Editor, the attributes of an empty placeholder are applied to the next sibling<br /><br />tag of a JSS item.<br /><br /> | 487854 |
 | Headless Services | ​There are a number of circular dependencies. | 505195 |
 | Headless Services | ​JSS CLI - PDF and image files are not ignored when replacing or stripping the prefix. | 499060 |
 | Headless Services | ​JSS CLI - Underscores in app names are not handled correctly when replacing the prefix. | 498838 |
 | Headless Services | ​A number of security vulnerablities have been addressed. | 505136 |
 | Headless Services | ​The deprecated dependencies in the `sitecore-jss-cli` package have been resolved. | 490247 |
 | Headless Services | ​Angular - ​In an Angular application, in the Experience Editor, if you click the "Change associated content" button, you are redirected to the home page of the website. | 502852 |
 | Headless Services | If you use `*scRouterLink`, the hyperlink doesn't work. | 494145 |
 | Headless Services | ​Next.js - In a container environment, the SWC binary does not load. | 510431 |
 | Headless Services | ​Angular - URLs are case sensitive and this can cause errors to occur if the language parameter is not set correctly. | 515133 |
 | Headless Services | When performing a build, an uninformative error message is displayed if an environment variable or scjssconfig.json is not configured correctly. | 494463 |
 | Headless Services | ​Vue - If you create a Vue app with the `jss create --fetchWith GraphQl` option and a `node-headless-ssr-experience-edge`, the app throws an Internal Server error at runtime. | 497465 |
 | Headless Services | ​Angular - The `404 Page not found` error message is not shown in connected or disconnected mode. | 497058 |
 | Headless Services | ​Next.js, React, Angular, Vue - GraphQL data is not rendered correctly on the server. ​ | 515132 |
 | Headless Services | ​Next.js - `tmpDir` is not a configurable parameter.​ |  |
 | Headless Services | ​​Next.js - The `internalLinkMatcher` prop is passed. |  |
 | Headless Services | ​​Angular - Opt out of angular telemetry is set by default. |  |
 | Headless Services | ​Angular - In disconnected mode there are issues with incorrect `componentName`.​​ |  |
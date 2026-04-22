---
product: ['sitecoreai']
title: 'Migrating from JSS to Content SDK on SitecoreAI'
description: 'An overview of the Content SDK, the two migration paths available to customers, and a first-hand account of moving the SUGCON event sites.'
promoAfter: ['learning-essentials']
openGraphImage: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/b20cc628bdaf4c3080bd586c98d4ee30?v=947ae0af'
---
# Migrating from JSS to Content SDK on SitecoreAI

_An overview of the Content SDK, the two migration paths available to customers, and a first-hand account of moving the SUGCON event sites._

## What is the Content SDK

The Content SDK is the front-end development library for SitecoreAI. It is the evolution of JSS, redesigned and scoped specifically for the SitecoreAI platform. Where JSS was engineered to serve multiple Sitecore product lines and deployment models, the Content SDK concentrates on the capabilities that define modern SitecoreAI experiences: headless delivery, component-based development with Next.js, Design Studio previews, Context IDs for environment configuration, and tight integration with the SitecoreAI Pages editor.

Functionally, Content SDK gives developers a cleaner, more focused library surface. It removes legacy dependencies, aligns with current Next.js conventions including the App Router, supports file-based rendering variants, and provides first-class patterns for composing client-side and server-side components. For customers who are already building on SitecoreAI, Content SDK is the supported path forward for all new work.

In October 2025, Content SDK v1 was released as generally available, and the [support lifecycle](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1004260) for JSS on SitecoreAI was published at the same time. JSS support on SitecoreAI will end in mid 2026, which means every customer currently running a JSS head on SitecoreAI has a defined window in which to migrate.

## Two migration paths

There are two realistic paths to move a JSS head onto Content SDK. Each path fits a different starting point, and the choice is best made based on how far the existing JSS version has drifted from current, the size of the component library, and the appetite for adopting modern Next.js patterns in the same motion.

### Path 1: Follow the documented, step-by-step upgrade

The first path is to follow the official upgrade documentation and apply the release-by-release changes in sequence until the project lands on Content SDK. This path is well suited to sites that are already on a recent JSS version, projects with heavy customization tightly coupled to internal JSS APIs, and teams that require an auditable record of each incremental change.

The official upgrade path is documented in the [SitecoreAI Content SDK migration documentation](https://doc.sitecore.com/sai/en/developers/content-sdk/10/upgrade-jss-22-8-next-js-apps-to-content-sdk-1-0.html). It is thorough, versioned, and designed for teams that want to stay close to the prescribed upgrade flow.

### Path 2: Lift and shift onto a fresh Content SDK scaffold

The second path is to scaffold a new, clean Content SDK project and migrate the existing components, styles, and customizations into it. This approach collapses the release-by-release chain of upgrades into a single, well-bounded migration, and it provides a natural opportunity to adopt the modern patterns that the Content SDK now supports. For projects that have drifted several major versions behind current JSS, or for teams that want to realize the full value of Content SDK in the same project, this path is typically faster, lower risk, and produces a cleaner codebase.

_Recommendation: Unless a specific reason makes the incremental path necessary, the lift-and-shift approach is generally the more efficient route. The version drift that has accumulated on most neglected JSS sites makes step-by-step upgrades costly and error prone. A fresh Content SDK scaffold also enables the adoption of App Router, Design Studio, and file-based rendering variants in the same migration._

## A first-hand account: the SUGCON migration

To validate the lift-and-shift path in practice, the sites operated for the SUGCON community events were migrated from JSS to Content SDK using this approach. The following sections document the migration as it was carried out, including the decisions that were taken along the way, so that customers facing the same move have a clear reference.

### Background

The SUGCON sites were built on JSS 21.5, a release that is more than two years old at the time of writing. These sites are used for the regional SUGCON events that run throughout the year. Each one experiences a burst of traffic for several weeks around its event and then stays largely dormant until the following year. Because the sites were not continuously high-traffic, maintenance cadence slipped and the version gap widened.

The JSS end-of-support on SitecoreAI set a firm date by which the sites needed to be moved. Given the size of the version gap and the opportunity to modernize the codebase, the lift-and-shift path was selected. The migration was also used as an opportunity to move to the Next.js App Router and to retire a small number of dependencies that had aged out.

### Scaffolding the new Content SDK project

The first step was straightforward. The existing headapp folder was renamed to SUGCON-old to preserve the original source. A new Content SDK project was then created in a folder named SUGCON using the [Content SDK NPX](https://doc.sitecore.com/sai/en/developers/content-sdk/20/create-a-content-sdk-app-locally.html#use-the-content-sdk-cli) command, which scaffolds a clean, current project structure. The `package.json` was updated with the correct site name and metadata.

Components were then migrated one by one from the previous implementation into the new project. The most significant task in this pass was updating imports so that they resolved to the Content SDK libraries rather than the legacy JSS libraries. The operation is mechanical, but it is worth planning the pass deliberately and verifying each component as it is moved.

### Placeholder to AppPlaceholder

Because the SUGCON migration also adopted the Next.js App Router, every Placeholder component was updated to `AppPlaceholder`. Teams that remain on the Pages Router do not need to make this change. Treating App Router adoption as an explicit decision, rather than a side effect of the migration, keeps the scope of the work clear.

### Detecting edit mode in components

Components in Content SDK determine whether they are being rendered inside the SitecoreAI Pages editor by checking `page.mode.isEditing`. This replaces the equivalent check used in JSS. The pattern is important because many components render differently in edit mode to give content authors a usable editing surface. A representative example in the SUGCON codebase is the Person component, which renders placeholder links for every social platform in edit mode so that authors can populate optional fields, and collapses the empty links in published mode.

## Modernization performed during the migration

Because the codebase had drifted, the migration included a small number of modernization tasks that made use of capabilities that have matured on both the Next.js and SitecoreAI sides since the original build.

### Removing the clsx dependency

When the sites were originally built, the clsx library was the standard choice for programmatic class name construction. Native support in Next.js for the same pattern has since improved to the point where the dependency is no longer required. It was removed from the project in favour of the native approach.

### File-based rendering variants

Content SDK supports file-based rendering variants, in which each variant lives in its own file rather than being exported from a single, larger component file. The SUGCON components that used rendering variants were split into dedicated files, which produced leaner components and a clearer file structure.

### App Router and the Providers component

The SUGCON sites use Chakra for styling, which requires a top-level `ChakraProvider` wrapper that must run client-side. Moving to the App Router made it important not to mark the main Layout component as client-side, because doing so would negate the benefits of App Router adoption.

The Content SDK project scaffold addresses this directly. Inside the `/src` folder of a Content SDK project, a `Providers.tsx` component is provided alongside `Layout.tsx`. Client-side providers such as ChakraProvider are placed in Providers.tsx, allowing the layout itself to remain server-rendered. The SUGCON project adopted this pattern during the migration.

### Retiring Storybook in favor of Design Studio

The original build included Storybook as a way for developers to preview components in isolation. Over time, the Storybook configuration had fallen behind framework versions and had become costly to maintain. Design Studio, a flagship capability of Content SDK, now provides component preview and additional design-time features natively. The Storybook implementation was retired from the project, which removed a significant additional dependency.

### Deployment updates

Because the project had been running on a very old JSS version, deployment was still configured using the older API Key approach rather than Context IDs. The migration introduced Context IDs by updating the environment variables in Vercel, which were picked up without further changes. The Node version configured in Vercel was also updated to the current LTS. Both changes were small and long overdue.

## Timeline and outcome

End to end, the SUGCON migration required approximately three days of focused work. That figure includes the App Router migration and the modernization tasks described above. Projects that do not adopt the App Router in the same motion, or that have a smaller component surface area, can reasonably expect to complete the move more quickly. The result is a codebase that runs on Content SDK, takes advantage of App Router, Design Studio, Context IDs, and file-based rendering variants, and is positioned for routine, incremental upgrades going forward.

## Conclusion

JSS support on SitecoreAI ends in mid 2026. Every customer with a JSS head on the SitecoreAI platform should plan the move to Content SDK within that window. Two paths are available: an incremental, documented upgrade that walks each release in sequence, and a lift-and-shift migration onto a fresh Content SDK scaffold. The documented path is appropriate for sites already close to current, while the lift-and-shift path is typically the faster, lower-risk option for projects that have drifted further behind or for teams that want to adopt the modern Content SDK patterns in the same motion.

[The official SitecoreAI Content SDK migration documentation](https://doc.sitecore.com/sai/en/developers/content-sdk/10/upgrade-jss-22-8-next-js-apps-to-content-sdk-1-0.html) provides the reference for the incremental path. The account above provides a field reference for the lift-and-shift alternative, based on the SUGCON migration.

**Acknowledgements**

_Thanks to Rob Earlam, whose original write-up of the SUGCON migration informed the lift-and-shift walkthrough in this article. His hands-on notes are a useful companion for customers going through the same move._ [Read the original post.](https://robearlam.com/blog/upgrading-the-sugcon-sites-from-jss-to-the-content-sdk) You can find the Source Code Repository here: [https://github.com/Sitecore/XM-Cloud-Introduction](https://github.com/Sitecore/XM-Cloud-Introduction)

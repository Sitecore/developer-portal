---
product: ['sitecoreai']
title: 'From JSS to Content SDK: Why SitecoreAI Customers Should Make the Move Now'
description: 'A technical marketing perspective on the next major version of JSS for SitecoreAI, the performance and editing gains it unlocks, and how to approach the transition.'
promoAfter: ['learning-essentials']
openGraphImage: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/b20cc628bdaf4c3080bd586c98d4ee30?v=947ae0af'
---

## Why this matters now

Content SDK is the next major version of JSS for SitecoreAI. It is not a new SDK to learn from scratch. It is JSS brought forward, refocused on a single platform and tuned for the way modern Next.js applications are actually built. For customers currently running JSS on SitecoreAI, the move is both inevitable and more straightforward than the scope of an SDK change usually suggests.

This article describes the reasons the Content SDK exists, the concrete advantages it delivers to customers already on SitecoreAI, and the most practical ways to approach the transition.

## The JSS reality

Frontend teams working with JSS on SitecoreAI have often described the same pattern. Applications do not feel like native Next.js apps. They feel like a framework-specific abstraction layered on top of Next.js. Lighthouse scores usually land in the green, but rarely where modern web development aims to be.

The reason is in what JSS was designed to do. JSS began as a headless SDK for Sitecore XP and XM, platforms shaped by on-premises and managed-hosting realities. When SitecoreAI arrived, JSS was also asked to power a cloud-native, headless-only CMS and to bridge two very different WYSIWYG editing paradigms: the Experience Editor, which is deeply coupled to server-side rendering and the Sitecore request pipeline, and Page Builder, which is built from the ground up for a decoupled, component-driven editing model. Two architectures, two editing contracts, one SDK expected to abstract all of it.

Supporting both meant carrying abstractions, fallbacks, and runtime logic that were only relevant to one side or the other. For SitecoreAI projects in particular, that overhead translated directly into larger package sizes and slower applications than the platform should produce.

The logical consequence is separation. JSS continues to serve Sitecore XP and XM without compromise. Content SDK is the version of JSS built exclusively for SitecoreAI, which is the foundation on which the following advantages become possible.

## What Content SDK delivers

Every change in the Content SDK was driven by a single objective: make SitecoreAI development feel native, fast, and simple. The sections below describe what that means in practice.

### Measurable performance gains

The numbers tell the clearest part of the story. Content SDK delivers 49% smaller bundles, 81% fewer files, and 39% less code compared to JSS-based applications. In Next.js bundle analysis, that is roughly a 50% size reduction. The starter kit footprint dropped from 8.15 MB on disk to under 1 MB, an 89% reduction.

These are not synthetic benchmarks. Smaller bundles mean faster initial loads, lower time-to-interactive, and stronger Core Web Vitals, metrics that feed directly into user experience and SEO. For teams that have been tuning JSS apps to squeeze out performance, Content SDK is a fundamentally better starting point.

The performance gains also carry through to the editing experience. Page Builder is considerably more performant than the Experience Editor. Authors see faster page loads inside the editor, snappier component interactions, and a smoother drag-and-drop and inline-edit experience. For content teams, that translates into less time waiting on the editor and more time producing work. The combination of a smaller, faster runtime and a more responsive editing surface compounds over the lifetime of a site.

### A modern editing experience with Page Builder

Page Builder is SitecoreAI’s component-driven editing experience, and it is the editing surface that Content SDK applications align with. For teams on SitecoreAI that have been working across two editing paradigms, consolidating on Page Builder removes a layer of context-switching and simplifies governance, training, and enablement.

Content SDK does not add a platform feature to enable Page Builder in the same way that it adds Design Studio enablers. Page Builder is provided by SitecoreAI itself. Content SDK’s contribution is a cleaner integration surface and the performance characteristics that make Page Builder feel responsive in practice. For customers still authoring on the older editing model, moving to Page Builder as part of the transition produces an immediately noticeable improvement for content authors.

### Simpler developer experience

Content SDK strips away the dual-purpose abstractions that JSS had to carry. The explicit component mapping model replaces the automatic, and often opaque, mapping that JSS used. Developers gain clear visibility into what is included in their builds. Configuration is leaner. Boilerplate is reduced. The mental model aligns with what Next.js developers already know.

For teams onboarding new developers, this is significant. A Next.js developer joining a Content SDK project encounters familiar patterns: standard data fetching, native routing conventions, typical component architecture. The SitecoreAI-specific surface area that a new developer has to learn is smaller. Ramp-up drops from weeks to days.

### Full App Router and React Server Components

From Content SDK 1.2 onwards, App Router support moved from preview to general availability. This unlocks the features that define modern Next.js development. React Server Components render on the server by default, reducing unnecessary client-side JavaScript. Suspense enables granular loading states and streaming, which improves perceived performance. Layout nesting and dynamic segments work exactly as the Next.js documentation describes, with no SitecoreAI-specific workarounds required.

Server Functions allow direct server-side data mutations without dedicated API routes. Partial Pre-rendering lets static and dynamic content coexist in a single response. These are not future promises. They work today on Content SDK and SitecoreAI.

### Design Studio support

Content SDK 1.1 introduced enablers for Design Studio, the centralized place within SitecoreAI where every component available in an application is visible. Design Studio works as a living catalog in which developers, designers, and content authors can browse all components, preview them with different content, and compare variants side by side without touching a live page.

This changes a common workflow. Teams frequently relied to third-party tools like Storybook to provide a component preview environment, which was useful but meant another tool to set up, maintain, and keep in sync with production components. Design Studio operates directly against the actual components deployed in SitecoreAI. There is no parallel system to maintain, no mock data to keep current, and no risk of previews drifting out of sync with what is in production.

Content SDK’s component variant model makes this practical. A simple dot-separated naming convention, for example Promo.ImageLeft.tsx, groups variants under a single component entry. The codebase stays organized and Design Studio has a clear structure to expose.

For business users, the impact goes further. Design Studio AI-powered variant generation lets marketers describe what they want in natural language and receive new design options instantly, with no code required. They can iterate, refine, and compare variants on their own, then hand proven options back to development for integration. The feedback cycle shrinks from days of back-and-forth to minutes of self-service exploration.

Import map support means teams can bring their preferred UI library, for example shadcn/ui or Radix, and Content SDK 1.5 extended Design Studio support to App Router-based applications, ensuring AI-generated variants render correctly with server components.

### Next.js 16 support

Content SDK 2.0, released in March 2026, requires Next.js 16 as a minimum. This brings Cache Components for caching rendered output across requests, Turbopack file-system caching for dramatically faster local development builds, and the latest React features. Staying on JSS means staying on older Next.js versions and falling further behind the framework’s evolution.

### AI-assisted component creation

Content SDK 1.4 introduced CLI support for AI-assisted component generation. The scaffold command, together with Cursor IDE integration, lets developers describe a component in natural language and have it generated with correct SitecoreAI bindings. The SDK ships comprehensive Cursor rules that provide sufficient context about Content SDK patterns, which makes AI-assisted development productive rather than a novelty.

## Approaching the transition

The upgrade path depends on where an application is starting from. SitecoreAI provides [detailed upgrade guides for recent JSS versions](https://doc.sitecore.com/sai/en/developers/content-sdk/10/upgrade-jss-22-8-next-js-apps-to-content-sdk-1-0.html), and Sitecore’s [product team](jss-to-content-sdk-upgrade) has documented a lift-and-shift approach that is particularly effective for older codebases. Both paths are valid. The right choice depends on the version gap, the size of the component library, and the appetite for adopting modern patterns in the same motion.

### Incremental upgrade

For applications on JSS 22.8 or 22.9, the [official upgrade documentation](https://doc.sitecore.com/sai/en/developers/content-sdk/10/upgrade-jss-22-8-next-js-apps-to-content-sdk-1-0.html) provides a step-by-step path. The core pattern involves replacing @sitecore-jss dependencies with @sitecore-content-sdk equivalents, aligning component architecture with Content SDK conventions, and adopting the metadata-based Page Builder integration. Sitecore recommends generating a fresh Content SDK starter app to use as a reference and copying the latest template files into an existing project to stay aligned with current conventions.

### Lift and shift

For teams on older JSS versions, walking through every intermediate upgrade is often not practical. A lift-and-shift approach, which starts from a clean Content SDK application and migrates components and configuration into it, is typically the more efficient option. This strategy has been validated by Sitecore’s own product team, which used it to migrate reference implementations including the SUGCON sites.

A detailed, step-by-step walkthrough of the lift-and-shift approach, based on the SUGCON migration, is available in the [companion article](jss-to-content-sdk-upgrade) on the Sitecore Developer Portal.

### What to line up before you start

Regardless of the path chosen, a small amount of upfront planning makes the migration smooth. The items below are the ones most often overlooked.

- Content types and templates. Review how the existing templates and content types are expressed in the JSS application. Identify anything that will need to be re-modelled for Page Builder or updated to align with the new rendering variant patterns.
- Component inventory. Produce a list of the components in the current application and decide, for each one, whether it moves as-is, needs a rendering variant split, or is a candidate for retirement. A lean inventory keeps the migration fast.
- Editor and author enablement. Plan a brief enablement session for content authors on Page Builder and Design Studio. Most of the day-to-day tasks map cleanly, and a short walkthrough prevents questions later.
- Dependencies and deployment. Confirm the Node version and deployment configuration. Older projects are often still on legacy API Keys and should switch to Context IDs as part of the move.
- End-to-end testing scope. Agree a testing strategy up front. For most mid-sized sites, a focused smoke pass on the highest-traffic pages is sufficient.

### Scope: not a months-long project


It is worth being direct about the scope of this work. The Content SDK transition is not a multi-month programme. For teams on recent JSS versions, one developer can realistically complete the move within a single sprint. Application size and end-to-end testing requirements move that figure up or down, but the order of magnitude does not change. The SDK change is well-documented, the package mapping is straightforward, and the architectural concepts carry over.

Planning guidance: Treat the Content SDK transition as a focused, time-boxed piece of work, not a re-platforming programme. Most customers who scope it as a multi-quarter effort discover, once they start, that the actual work is considerably smaller.

## Cost vs. value

Every transition requires some effort. The return on the Content SDK transition is modern framework support, measurable performance gains, a more performant Page Builder editing experience, and a codebase that aligns with where the Next.js ecosystem is heading. Those gains compound with every release cycle. JSS support for SitecoreAI is phasing out, and the question is not whether to transition, but when. Earlier movers benefit from a longer runway of SDK improvements.

## What is ahead

Content SDK 2.0 already signals the direction. First-party search integration through @sitecore-content-sdk/search brings querying, pagination, and sorting directly into the SDK. Tracking, events, and personalization capabilities are now built in. Agent skills support, with structured SKILL.md files and an AGENTS.md configuration, lays the groundwork for AI-augmented development workflows.

Sitecore is building Content SDK as the long-term foundation for SitecoreAI development. Each release tightens integration with the Next.js ecosystem, reduces SitecoreAI-specific surface area, and adds capabilities that are only possible because the SDK no longer needs to accommodate other platforms.

For developers and solution architects evaluating the upgrade, the return on investment is not a single feature. It is the compounding advantage of building on a foundation that is actively evolving in the same direction as the broader web platform. Teams that move now will spend their time building product features. Teams that wait will spend it catching up.

## Getting started

Begin with the Content SDK documentation and upgrade guides on the Sitecore Documentation site. The [companion article](jss-to-content-sdk-upgrade) on the Developer Portal provides the field reference for the lift-and-shift path, based on the SUGCON migration.

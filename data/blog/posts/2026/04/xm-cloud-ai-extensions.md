---
title: Extending XM Cloud pages with AI-assisted components
description: Patterns for streaming suggestions, skeleton UIs, and feature flags when you add AI next to headless delivery.
date: "2026-04-06T14:00:00.000Z"
authors:
  - sam-rivera
  - jane-doe
tags:
  - XM Cloud
  - AI
canonical: https://developers.sitecore.com/blog/2026/04/xm-cloud-ai-extensions
image: /blog/2026/04/hello-world/cover.svg
---

Headless teams often expose AI as **progressive enhancement**: the page hydrates with authored content, then optional client bundles request suggestions. Keep API routes behind the same CDN and auth as your Sitecore Edge endpoints.

Degrade gracefully when latency spikes—cache the last good suggestion per component id and respect **editor preview** vs live mode differences.

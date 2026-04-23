---
title: Edge caching when AI responses personalize HTML
description: Cache keys, surrogate keys, and short TTL strategies so CDN layers stay correct with dynamic snippets.
date: "2026-05-11T11:10:00.000Z"
authors:
  - sam-rivera
tags:
  - Performance
  - XM Cloud
canonical: https://developers.sitecore.com/blog/2026/05/edge-delivery-caching
image: /blog/2026/04/hello-world/cover.svg
---

If AI output is per-user, avoid caching entire documents at the edge. Instead cache **stable fragments** (navigation, hero media) and stream personalized blocks from a small origin pool with connection limits.

Use **Vary** headers sparingly; prefer signed URLs or edge functions that assemble fragments with explicit cache partitions.

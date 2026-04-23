---
title: Rolling out semantic search without breaking relevance
description: "A phased launch plan: shadow traffic, offline judgments, and rollback switches for hybrid retrieval."
date: "2026-05-04T10:30:00.000Z"
authors:
  - alex-morgan
tags:
  - Search
  - AI
canonical: https://developers.sitecore.com/blog/2026/05/semantic-search-rollout
image: /blog/2026/04/hello-world/cover.svg
---

Ship semantic retrieval behind a **feature flag** that can fall back to lexical-only queries per tenant. Capture side-by-side result lists for sampled queries and score with human labels or click models before widening the blast radius.

Monitor **p95 latency** separately for embedding calls and fusion steps so you know which knob to turn when traffic spikes.

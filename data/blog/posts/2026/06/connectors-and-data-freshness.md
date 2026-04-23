---
title: Connectors and data freshness for grounded answers
description: Incremental sync, tombstones, and publish hooks so your vector index matches the CMS truth.
date: "2026-06-08T15:15:00.000Z"
authors:
  - sam-rivera
  - jane-doe
tags:
  - Integration
  - AI
canonical: https://developers.sitecore.com/blog/2026/06/connectors-and-data-freshness
image: /blog/2026/04/hello-world/cover.svg
---

Subscribe to **publish webhooks** and enqueue embedding jobs with deduplication keys per item version. When items unpublish, propagate **tombstones** immediately so RAG cannot resurrect retired claims.

Expose a **staleness** metric in admin UIs so content teams know when search lags authoring.

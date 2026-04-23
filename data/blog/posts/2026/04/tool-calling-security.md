---
title: Securing tool calling for customer-facing agents
description: Allow-lists, argument schemas, and rate limits that reduce risk when models invoke HTTP or internal APIs.
date: "2026-04-18T08:00:00.000Z"
authors:
  - sam-rivera
tags:
  - Security
  - AI
canonical: https://developers.sitecore.com/blog/2026/04/tool-calling-security
image: /blog/2026/04/hello-world/cover.svg
---

Never expose arbitrary URLs to a model-driven tool layer. Map logical operations—**searchProducts**, **createDraft**—to server-side handlers that enforce RBAC and validate payloads with JSON Schema.

Log **tool names** and correlation ids, not raw arguments containing PII.

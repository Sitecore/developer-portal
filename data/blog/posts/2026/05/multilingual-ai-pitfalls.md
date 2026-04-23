---
title: Multilingual AI pitfalls in global commerce sites
description: Locale-aware retrieval, translation drift, and right-to-left layout checks when models suggest copy.
date: "2026-05-16T08:20:00.000Z"
authors:
  - jane-doe
tags:
  - Localization
  - AI
canonical: https://developers.sitecore.com/blog/2026/05/multilingual-ai-pitfalls
image: /blog/2026/04/hello-world/cover.svg
---

Never assume English embeddings transfer cleanly—maintain **per-language indexes** or robust cross-lingual models with measured recall per market. Run layout QA for RTL languages when AI proposes UI strings that affect truncation or overflow.

Keep **glossary terms** locked so product names are not translated by the model.

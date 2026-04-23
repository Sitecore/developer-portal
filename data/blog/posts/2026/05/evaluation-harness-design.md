---
title: Designing an evaluation harness for generative features
description: Golden datasets, rubric scoring, and CI hooks that catch regressions before customers see bad answers.
date: "2026-05-14T14:30:00.000Z"
authors:
  - alex-morgan
  - john-doe
tags:
  - AI
  - Testing
canonical: https://developers.sitecore.com/blog/2026/05/evaluation-harness-design
image: /blog/2026/04/hello-world/cover.svg
---

Curate **golden questions** from real support tickets and top search queries. Score answers with a mix of automated checks (citation presence, JSON validity) and periodic human rubrics (helpfulness, tone).

Block merges when **critical scenarios** fail—even if aggregate score rises—so tail risks do not hide in averages.

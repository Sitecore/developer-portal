---
title: Blue-green model deployments for zero-downtime upgrades
description: Traffic shifting, shadow scoring, and rollback playbooks when you swap foundation models behind the same API.
date: "2026-06-12T16:00:00.000Z"
authors:
  - alex-morgan
  - riley-chen
tags:
  - DevOps
  - AI
canonical: https://developers.sitecore.com/blog/2026/06/blue-green-model-deployments
image: /blog/2026/04/hello-world/cover.svg
---

Run the candidate model on **shadow traffic** with stored prompts but discard user-visible output until quality parity is proven. Keep deployment units small—model, tokenizer version, and safety filters move together.

Document a **single-command rollback** that reverts routing weights and clears warm caches tied to the new tokenizer.

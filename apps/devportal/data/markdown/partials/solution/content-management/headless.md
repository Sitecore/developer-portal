---
solution: ['content-management']
product: ['xm']
title: 'Sitecore Headless Development'
description: 'Develop your website headlessly powered by ASP.NET. or JavaScript frameworks'
---

## Introduction

The term "headless CMS" refers to platform architecture where content management is decoupled from content delivery (i.e. presentation logic). In this scenario, the presentation layer retrieves data from the CMS using an API endpoint. This is made possible by the presentation layer being content-agnostic, so the markup it generates is "hydrated" with data from the API.

## Sitecore's "Hybrid Headless"

In other headless CMSs, the decoupling is limited to content only, such as Text and Images. In this case, Content Authors can update content fields, but how the different content fields are laid out on the page is specified in code. Updating layout requires code changes.

What's special about Sitecore's headless architecture is that Content Authors retain both content and layout management.

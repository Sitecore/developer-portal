---
title: 'Page Structure'
description: 'Learn more on how you can contribute to the Developer Portal'
hasInPageNav: true
hasSubPageNav: true
---

## Page Structure
The Developer Portal uses markdown for most of its pages. The site structure is determined withing the `apps\devportal\data\markdown\pages\` folder. All *.md files in this folder and subfolders represent a single page on the developer portal.

In addition to the pages folder there is also a partials folder (`apps\devportal\data\markdown\partials`). Partials are reusable markdown files that can be referenced within a page.

## Custom pages
Pages that only use a markdown file to define some configuration but use components in a `.tsx` file can be prefixed with a `_`. This exludes them from the getStaticPaths function since it will be picked up by the Next.js build anyway. 
An example of this would be `apps\devportal\src\pages\search.tsx` using the `apps\devportal\data\markdown\pages\_search.md` file for configuration.

## Pagetypes
The Developer Portal has different pagetypes that can be used within the site.
- Default
- Article
- ChildOverview
- Social

This does require [configuring](/contribute/configuration#core) the `PageType` setting in the markdown file.

### Default
Most of the main sections (Docs, Learn, Discover) use the default page type. The default pagetype uses one column in which content and components can be rendered.

### Article
The article pagetype is mostly used by pages within the learn section. This pagetype offers a side navigation that can be used for content that is spread across different pages (FAQs).

### ChildOverview
The child overview page lists all pages underneath its current path. It is used to show all products within the different solutions

### Social
The social pages has a number of components on the page that embed different social providers (StackExchange, YouTube, Sitecore Community). It is used on the [Community](/community) sections


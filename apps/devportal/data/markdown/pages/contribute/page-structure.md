---
title: 'Page Structure'
description: 'Learn more on how you can contribute to the Developer Portal'
hasInPageNav: true
hasSubPageNav: true
---

## Page Structure
The Developer Portal uses markdown for most of its pages. The site structure is determined withing the `apps\devportal\data\markdown\pages\` folder. All *.md files in this folder and subfolders represent a single page on the developer portal.

In addition to the pages folder there is also a partials folder (`apps\devportal\data\markdown\partials`). Partials are reusable markdown files that can be referenced within a page.

## Configuration
Each page can store metadata (frontmatter) in head of the page. Required fields are title and description, but there are lots of other settings possible. A default page setup would look like this
```markdown
---
title: 'Page Title'
description: 'Description of the page'
---

# This is where the content would be

```

## Pagetypes
The Developer Portal has different pagetypes that can be used within the site.
- Default
- Article
- ChildOverview
- Social

### Default
Most of the main sections (Docs, Learn, Discover) use the default page type. The default pagetype uses one column in which content and components can be rendered.

### Article
The article pagetype is mostly used by pages within the learn section. This pagetype offers a side navigation that can be used for content that is spread across different pages (FAQs).

### ChildOverview
The child overview page lists all pages underneath its current path. It is used to show all products within the different solutions

### Social
The social pages has a number of components on the page that embed different social providers (StackExchange, YouTube, Sitecore Community). It is used on the [Community](/community) sections


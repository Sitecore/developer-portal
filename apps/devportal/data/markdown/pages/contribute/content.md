---
title: 'Content'
description: 'Learn more on how you can contribute to the Developer Portal'
hasInPageNav: false
hasSubPageNav: true
---

## Authoring content

Every page within the developer portal is reprented by a markdown (*.md) file. For example, the content for this page is [here](https://github.com/Sitecore/developer-portal/blob/main/apps/devportal/data/markdown/pages/contribute/content.md). You can use Markdown to write the content and the developer portal will render it as HTML. For more information on how to use Markdown please check [this](https://www.markdownguide.org/getting-started/) page.

### How do you get started

To get started you will need to create a .md file within the folder you want the page to live. All paths underneath the `apps\devportal\data\markdown\pages` path are considered a page. 

Let's say we want to create a page directly under the root of the site (developers.sitecore.com/hello-world).

To achieve this we can do two things:
1. Create a hello-world.md file withing `apps\devportal\data\markdown\pages`
2. Create a folder called hello-world under `apps\devportal\data\markdown\pages` and create an index.md file within that folder.

Both options are good, the consideration you need to make is whether there is a need to host other pages underneath the path /hello-world/. If that is the case options 2 is most likely your best choice. 

*Please note that you can always start with a file `hello-world.md` and change it later to `/hello-world/index.md` when there is a need for more nested pages.*
---
product: ['xm']
title: 'Sitecore Experience Manager (XM) Item Types'
description: 'In Sitecore Experience Manager (XM), almost everything can be broken into individual items. There are two main categories of items Definition Items and Content Items.'
---

When working with Sitecore Experience Manager (Sitecore XM) almost everything can be broken into individual items. There are two main categories of items _Definition Items and Content Items._ These two categories hold subset items within them. Let&#39;s define the high-level categories and look example items within then.

- Definition Items
  - Template Items
  - Layout Items
  - Rendering Items
- Content Items
  - Media Library Items

## Definition Items

Definition items are items that typically define the configuration or structure of the implementation, or which contain metadata for assets in the solutions. These items are owned, i.e. created and managed, in the development environment and moved as part of versioned deployments from development to test to production.

### Template Items

Template items are definition items and contain fields (which are also items), typically these created by developers and not created/updated marketers. They are used to define a data structure, e.g. a blog template with fields like Title, Slug, Tags, Body etc. You will find these under `/sitecore/templates` in the content tree.

### Layout Items

Layout items are one of the items used to control how a page or route is rendered in the browser. It points to a file on disk that contains the &quot;scaffolding&quot; for the page, e.g. defines the main placeholders that renderings can be loaded in to. It would typically be a CSHTML in .NET or JS/TS file for JSS. It&#39;s possible for a site to have multiple layout definitions, allowing you to change the look/feel for different sections of the site. These items are generally controlled by developers not marketers, you can find them under `/sitecore/layout/Layouts` in the content tree.

### Rendering Items

The easiest way to think of rendering items is kind of like a Component Reference. It generally points to a CSHTML file in .NET, or a JS/TS file in JSS, much like a Layout Item. This allows the Marketer to drop components into placeholders within a layout, allowing them to build out the content for the pages/routes in the site. These items are again generally created/owned by developers not marketers. However, marketers will drop them onto pages when building out how they want their pages to look. You can find them under `/sitecore/layout/Renderings` in the content tree.

## Content Items

Content items are instances of the templates we defined above. So, if you take the blog template example above, a blog article based on that template would be a Content Item and would have those fields we mentioned populated. You may have an initial bare minimum of these created by developers, but mostly these are created/updated/owned by marketers. You will find these under `/sitecore/content` in the content tree.

### Media Library Items

These are media that have been uploaded into the CMS to allow marketers to embed them in their pages. Kind of like how a DAM works. They could be images/videos to render in the html on pages, or documents to be provided as downloads, etc. They are owned by both developers &amp; marketers and you can find them under `/sitecore/media library` in the content tree.

There are many of other types of items which you can use to customize how Sitecore XM works for the editor, but these are some of the item types you will run into most often. You can find more information about item types in the [Helix documentation](https://helix.sitecore.com/principles/sitecore-items/item-types.html).

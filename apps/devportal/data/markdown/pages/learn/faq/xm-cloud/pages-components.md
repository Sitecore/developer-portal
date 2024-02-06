---
product: ['xm-cloud']
title: 'Pages & Components'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## What are Sitecore Pages?

Sitecore Pages is the new SaaS, web page editor. Pages is a next-generation visual authoring and comes out of the box with XM Cloud and it will be released with the XM Cloud launch. Pages have a modern UI/UX that allows content authors to build the content for their websites. Pages is a foundation for Sitecore's composable and headless solutions and is intended as the editor of choice for XM Cloud, even though Content Editor and Experience Editor are still available.

## How can Sitecore Components be used?

Components is an in-browser WYSIWYG component builder. You can work with atoms, molecules, or other components to create functional UI components from scratch. You can connect these components to a wide variety of data sources and power them by data flowing in from one or many providers.

## For Pages, is it component-based or does it support the concept of atoms, elements and then components to enable a full marketer experience?

A component in the Sitecore Components product can be an atom, an element, or a bunch of elements (e.g. it can be a tiny single button or a huge photo carousel).

## Is the Sitecore Symphony announced in 2021 the same as Site Builder/ Pages & Components?

Yes, Symphony is the project name of the Sites, Pages, and Components tools.

## Can editors edit the content in Pages? Is it a bidirectional API connection to the data sources? If it is, is that configurable (preventing editing of certain data connections, perhaps just by not setting up that API endpoint)?

Pages are an interface on top of XM Cloud, so it does not store any data itself. Actual data storing and delivering happens on the platform side. To communicate to the platform, Pages uses GraphQL endpoints which are "installed" into the platform (they are part of XM Cloud). To enable/disable any data/user permissions, it should be configured in the platform. In this case, Pages should respect it.

## As editors assemble brand new component composition from smaller atomic parts, into a new component library element, does that become represented in the code for the developer? Does it generate code?

For Components, there is an option to export to code. It's an HTML code template.

## Are the components that are created in the component builder going to be available in the Pages section?

Yes. Once a component is built within the Component builder, the component is made available within the Pages palette of components so that they can be dragged and dropped by the marketer onto a page. Marketers are able to participate in the component building process, but developers will also want to create these components through code alone. Developers can use a process to register their code-based components with the builder.  And once they do that, then those components are known by the system and will behave just like any other component and will be visible within component builder as well as within Pages.

## Does the component code that developers create in code-first new components exist in the same repo/project as the actual front-end application or is it a totally separate repo/project?

Developers using the code-first approach can manage their component code in any repo. Developers can bring their components from code, but that more or less gets converted to a component within Components, which then becomes like any other component that's created through drag and drop.

## Will customers still be able to test the content before it goes live?

Yes, there are different ways that teams will be able to test content before it is live. For example, changes can be previewed through Pages, or via a local rendering host, or through capabilities provided by frontend hosting services, such as Vercel.

## How does the dev who is building the front-end application consume and use Pages to output the page? Is it going to feed into Experience Edge and reuse the headless layout service approach?

Yes, Pages and Components feed into Experience Edge and reuse the headless layout service approach. Whatever the rendering host is configured for the platform, the same one is used in Pages too, along with the Experience Editor.

## The initial set of components will be for Next.js?

Yes, the initial set of the components for Headless SXA will be for Next.js.

## Does Pages enable page hierarchy, or is it only meant for specific/individual page orchestration/layout?

The site tree in Pages has the same structure as Content Editor and Experience Editor. When a user creates/removes/renames/rearranges pages in Pages, it will be applied to other editors and the actual user site.

## Will the Content Hub ONE product be aware of Pages and enable page organization, hierarchy, and metadata/ page specific information?

The new Content Hub ONE will be a pure headless CMS and, unlike XM Cloud, it will not have any awareness of sites, pages, or layout. It will be dedicated to managing structured content and assets only.

## Will the headless approach overall for Sitecore assume that developers are creating physical pages and then pulling layout/content for these pages? Or will there continue to be content author control of pages, page URLs, and the ability to create whatever new pages they would like?

XM Cloud automatically enables JSS and the publishing of content and layout to Experience Edge. That enables frontend developers to benefit from the content and layout structure that XM Cloud supports to easily render page-based content in their frontend application/website.

## Can Pages be licensed without XM Cloud (for example, have a third-party CMS, buy Sitecore CDP and Pages)

For the initial launch of XM Cloud, Pages will only be available as part of the XM Cloud solution.

## What about Horizon?

Horizon is the on-premise web page editor that will not be upgraded beyond XM 10.2 version. Pages is the next-gen editor delivered as a SaaS through the XM Cloud solution. Customers will no longer run a local version of Horizon. Pages is a multi-tenant service that is available to XM Cloud users.

## Will authors be able to add an internal link in the RTE in Pages?

Yes, this capability will be a feature of Pages.

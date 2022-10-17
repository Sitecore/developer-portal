---
title: 'Pages & Components'
hasInPageNav: true
---

**What are Sitecore Pages?**  
Sitecore Pages is the new SaaS, web page editor. Pages is a next-generation visual authoring and comes out of the box with XM Cloud and it will be released with the XM Cloud launch. Pages have a modern UI/UX along with perform Sitecore Pages allows content authors to build the content for their websites. Pages is a foundation for Sitecore's composable and headless solutions and is intended as the editor of choice for XM Cloud, even though Content Editor and Experience Editor are still available. ance and feature enhancements, including the ability to create page variants and preview versions.

**How do we use Sitecore Components?**  
Components is an in-browser WYSIWYG component builder. You can work with atoms, molecules, or other components to create functional UI components from scratch. You can connect these components to a wide variety of data sources and power them by data flowing in from one or many providers.

For Pages, is it component-based or does it support the concept of atoms, elements and then components to enable a full marketer experience?

A component in the Sitecore Components product can be an atom, an element, or a bunch of elements (e.g. it can be a tiny single button or a huge photo carousel).

**Is the last year’s announced Sitecore Symphony the same as Site Builder/ Pages & components?**  
Yes, Symphony is the project name of the Sites, Pages, and Components products.

**Can editors edit the content in Pages? Is it a bidirectional API connection to the data sources? If it is, is that configurable (preventing editing of certain data connections, perhaps just by not setting up that API endpoint)?**  
Pages are an interface on top of XM, so it does not store any data itself. Actual data storing and delivering happens on the platform side. To communicate to the platform, Pages uses GraphQL endpoints which are "installed" into the platform (they are part of XM Cloud). To enable/disable any data/user permissions, it should be configured in the platform. In this case, Pages should respect it.

**As editors assemble brand new component composition from smaller atomic parts, into a new component library element, does that become represented in the code for the developer? Does it generate code?**  
For Components, we have an export to code. It's an HTML code template.

**Are the components that we are creating in the component builder going to be available in the Pages section?**  
Yes. Once a component is built within the Component builder, we make those available within our palette of components so that they can be dragged and dropped by the marketer onto a page. We of course, want to allow marketers to be able to participate in the component building process, but we also recognize that our customers and our partners, will have developers who will want to create these components through code alone. And we'll have a process where the developers can register their code-based components with the builder.  And once they do that, then they're known by the system and will behave just like any other component and will be visible within component builder as well as within Pages.

**Does the component code that developers create in code-first new components exist in the same repo/project as the actual front-end application or is it a totally separate repo/project?**  
Developers using the code-first approach can manage their component code in any repo. We plan on supporting people to bring their components from code, but that more or less gets converted to a component within Components, which then becomes like any other component that's created through drag and drop.

**MVC and CD Servers: Will customers still be able to test the content before it goes live?**  
Yes, there are different ways that frontend developers will be able to test content before it is live. For example, changes can be previewed through Pages, or via a local rendering host, or through capabilities provided by frontend hosting services, such as Vercel.

**How does the dev who is building the front-end application consume and use Symphony to output the page? Is it going to feed into Edge and reuse the headless layout service approach?**  
Yes, it is going to feed into Edge and reuse the headless layout service approach.
Whatever the rendering host is configured for the platform, the same one is used in Pages too, along with the Experience Editor.

**The initial set of components will be for Nextjs?**  
Yes, the initial set of the components will be for next JS and those components that we provide in SXA. We’ve just giving you the ability to compose your components out of the features out of styles, grades, you know, the ability to manage complex data sources by reordering things like car, sale slides and basically allowing you to quickly assemble all of the set of components that you may need.

**Are Pages enable page hierarchy, or is it only meant for specific/individual page orchestration/layout?**  
The site tree in Pages has the same structure as Content Editor and Experience Editor. So, when a user creates/removes/renames/rearranges pages in Pages, it will be applied to other editors and the actual user site.

**Will the Content Hub ONE product be aware of Pages and enable page organization, hierarchy, and metadata/ page specific information?**  
The new Content Hub ONE will be a pure headless CMS, and unlike XM Cloud, it will not have any awareness of sites, pages, or layout. It will be dedicated to managing structured content and assets only.

**Will the headless approach overall for Sitecore assume that developers are creating physical pages and then pulling layout/content for these pages? Or will there continue to be content author control of pages, page URLs, and the ability to create whatever new pages they would like, indicating the headless application needs to be aware of page routing and able to identify itself as a particular page, pull that info from the CMS (or Edge) and then pull the page layout and content. Regardless of whether that is then served to a user or saved into a static HTML page for SSG.**  
With XM Cloud, we are automatically enabling JSS and the publishing of content and layout to Experience Edge. That enables frontend developers to benefit from the content and layout structure that XM supports to easily render page-based content in their frontend application/website.

**Can we license Pages without XM Cloud (for example, have a third-party CMS, buy Sitecore CDP and Pages)**  
For the initial launch of XM Cloud, Pages will only be available as part of the XM Cloud solution.

**What about Horizon?**  
Horizon is the on-prem web page editor that will not be upgraded beyond XM 10.2 version.
With XM Cloud we will have the next-gen editor Pages which will be delivered as a Saas through XM Cloud solution. Customers will no longer run a local version of Horizon. Pages are a multi-tenant service that is available to XM Cloud users.

**Will we be able to add an internal link in the RTE in Pages?**  
Yes, this capability will be a feature of Pages.

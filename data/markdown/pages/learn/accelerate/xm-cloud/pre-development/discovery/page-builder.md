---
title: 'Page builder readiness'
description: 'Getting the best out of Pages'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-11-01'
created: '2025-11-01'
audience: ['All']
---

## Context
Pages is the main authoring interface that offers a wide range of editing and design functionalities for building web pages in XM Cloud. Setting up XM Cloud, you should make sure your project is ready to benefit from the latest capabilities and features that come with Pages, while also improving their authoring flow to ensure long-term editorial efficiency. If you are moving from XM/XP, it will also be key to switch over from Experience Editor.

## Execution
[Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/build-pages.html) provides modern capabilities such as embedded field support, metadata mode, and streamlined inline editing, making it a more efficient and sustainable tool for content authors. Implementation of templates and components need to be aligned to a Pages first authoring approach. 

The main editing views are:

| Tool         | Role                                   | Primary Audience     | Benefits                                                                                                   |
|---------------|----------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------|
| [Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/build-pages.html)    | WYSIWYG editing, layout control, content placement | Authors, Marketers   | True inline editing with visual context<br/>Modern interface with fewer legacy limitations<br/>Improved governance and authoring consistency |
| [Explorer](https://doc.sitecore.com/xmc/en/users/xm-cloud/explorer.html)  | Content editing independent of presentation | Authors, Marketers   | Access to content items across sites, including shared content<br/>Versioning and publish control<br/>Edit fields not exposed in Pages |
| [Content Editor](https://doc.sitecore.com/xmc/en/users/xm-cloud/content-editor.html) | Development and fallback configuration | Developers, Admins    | Retained only for advanced configuration and system setup<br/>Reduced risk of authors accidentally misconfiguring content |
| [Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html)    | Form management                        | Authors, Developers   | Dedicated space for form creation and editing<br/>Separation of structured form logic from general page editing |


Using Pages open a list of features that are only available through this editing view:
- [Marketplace custom fields](https://doc.sitecore.com/mp/en/developers/marketplace/page-builder-custom-fields.html) - Developers can now create tailored UI components and rendering parameters using Marketplace apps, enabling flexible, business-specific editing experiences.
- [Enhanced Editing Experience](https://doc.sitecore.com/xmc/en/users/xm-cloud/understanding-the-builder-s-interface.html) - The floating right-hand panel supports advanced inline editing, configurable toolbars, and optimization flows for text fields. Direct content item editing without leaving the page. Authors can reorder, move, and manage components directly in the canvas for faster, more intuitive editing. An enhanced experience also allows you to [edit all written content on your page directly](https://doc.sitecore.com/xmc/en/users/xm-cloud/edit-a-page-s-content.html) within the Page builder including metadata.
- [Layers](https://doc.sitecore.com/xmc/en/users/xm-cloud/duplicate-a-component.html) - A powerful new feature that brings structure, clarity, and flexibility to page composition. Layers allow editors to visualize and interact with the structural hierarchy of a page or component.
- Integrated [Personalization](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html) & [A/B/n Testing](https://doc.sitecore.com/xmc/en/users/xm-cloud/a-b-n-testing.html) - Set up, manage, and analyze personalization and experiments directly from the canvas, with analytics built into the workflow.
- Developer Experience - The [Content SDK](https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-javascript-services-sdk--jss--for-xm-cloud.html) is officially released and stable for XM Cloud. It replaces  JSS with a cloud-native, scalable foundation that simplifies development and improves performance. Combined with [Local Editing Host](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-local-development-environment.html) and optimized architecture, developers can build enterprise-grade pages faster with a lightweight front-end builder and optimized architecture.

### Change Management
Successful adoption of any authoring editor requires alignment, training, and governance, which requires preparation of stakeholders and authors.

| Activity             | Description |
|-----------------------|-------------|
| **Stakeholder alignment** | Communicate Pages strategy to content authors, developers, and leadership<br/><br/>Ensure authors, devs, and leadership understand Pages and the differences with their old authoring platform. |
| **Technical Readiness** | Validate custom fields, metadata, workflows.<br/><br/>Align components and templates with Pages standards - see [Insights](#Insights) for further information. |
| **Inventory review** | Identify authoring view dependent components and templates.<br/><br/>Focus on those with edit frames, inline editing, or custom configurations. |
| **Author training** | Upskill authors on Pages, versioning, embedded field editing, metadata editing. |
| **Documentation updates** | Make sure all documentation is aligned with Pages compatible guidance. Update internal QA and release checklists. |
| **Governance rollout** | Embed Pages as the only supported authoring path in governance and onboarding. |

### Readiness
Pages has key best practices on how to setup components, workflows, and security roles. The following need to be considered to ensure a smooth technical transition to provide a full authoring experience.

| Area | Validation Task |
|------|-----------------|
| **Custom Fields** | Custom fields must be validated and moved to custom fields where necessary to ensure they are compatible with Pages. <br/><br/> The [Page builder custom field extension point](https://doc.sitecore.com/mp/en/developers/marketplace/page-builder-custom-fields.html) allow developers to extend authoring capabilities in a way that feels native to Pages, giving authors flexibility while maintaining governance. Ensuring compatibility now prevents broken components and guarantees a consistent editing experience. |
| **Edit Frames** | Legacy edit frames from authoring views such as Experience Editor do not function within Pages and must be refactored. The approach requires exposing fields directly through Pages-compatible bindings. This ensures authors can make inline changes without relying on outdated mechanisms. |
| **Rich Text Fields** | The [new Rich Text Editor (RTE)](https://doc.sitecore.com/xmc/en/users/xm-cloud/add-rich-text-to-a-page.html) in Pages should be enabled and configured to support internal links, media embedding, and formatting standards. Proper setup ensures authors can create rich, connected content without falling back to legacy editing paths. |
| **Metadata Mode** | [Metadata Mode](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-metadata-pulling.html) is a modern editor integration strategy for Next.js applications that allows Pages to visually edit content by using metadata delivered via the layout service. Because only essential metadata is sent initially, page load times in editor mode are faster compared to chromes mode. With this method of editor integration, if you want to test components without affecting published sites or other users on the same environment, you can connect your local host directly to Pages. |
| **Context Editing** | Pages introduces context-aware editing, where content visibility and rendering may depend on page context (for example, different promos by region or personalization rules). Validation should ensure authors can preview and adjust content under these contextual conditions. Testing this functionality is critical to avoid content gaps or mismatches when pages go live. |
| **Security Roles** | Security must be reviewed to confirm that authors have appropriate access to Pages, while fallback access to Experience Editor is restricted or removed. This enforces Pages-first governance, prevents accidental reliance on deprecated tools, and ensures a consistent authoring experience across teams. |
| **Workflow in Pages** | Pages supports [workflow](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/information-architecture/workflow) and authors should be trained to use workflow indicators in Pages. [Explorer](https://doc.sitecore.com/xmc/en/users/xm-cloud/edit-an-item-in-explorer.html) also provides a workflow view, and Content Editor should only be used for detailed workflow management. Providing documentation or tooling to surface workflow status within Pages reduces confusion and keeps authors focused in the supported environment. |
| **Page Branches** | Currently, Page Branches cannot be edited directly within Page Builder. The most efficient approach is to create a new page in Page Builder and configure it with the required components. Once editing is complete, copy the presentation details from the final renderings (selecting raw values) and apply them to the final renderings of your Page Branch. Additionally, the data folder and any local components can be copied to the Page Branch. |
| **Complex Components** | Components such as accordions, carousels, and tabbed interfaces require additional review for Pages. Fields should be exposed in a way that makes them intuitive and manageable for authors, without overwhelming them with low-level configuration options. This refactoring improves the usability of complex components, ensuring they remain flexible but author-friendly in the Pages interface, include the use of [Placeholders](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/developer-experience/using-placeholders). |
| **Forms** | Form authoring remains separate from Pages and continues to be managed through the Forms. Authors and developers should be reminded that while Pages handles content and layout, [Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html) are a standalone tool. Maintaining this separation ensures that form creation remains structured and reduces the risk of introducing unnecessary complexity into Pages. |

### Information Architecture considerations
Pages depends on structured, scalable content models but will not have the same view as Experience Editor. Consider the below guidance while migrating to put in place a long-term content governance process.

| Topic | Approach |
|----------|-----------|
| **Global vs Local Datasources** | Adopt Metadata Mode for shared content. Localize where possible. |
| **Taxonomies (e.g., "People")** | Use item references and tags, avoid duplicating structured data inside templates. |
| **Template Overload** | Offload content fields to modular datasource items instead of placing them all on templates. |
| **Multi-Site Models** | Apply consistent data structures and authoring patterns across all sites - link to multisite. |


## Insights

### Setup readiness checklist
The following setup checklists, covers commong pain points, mostly authring, that needs to be covered to make sure your Pages setup is correct.

| Topic | Feedback |
|------|-----------|
| **Content SDK** | The Content SDK enables developers to integrate XM Cloud content with their front-end JavaScript applications. Chromes integration necessary to integrate with Experience Editor has been removed from Content SDK, resulting in further code optimizations. Upgrade guides are available. |
| **Datasource Explorer UX** | Authors will find a change in finding items in datasource picker. <ul><li>Use datasource templates + locations (e.g. Promo Folder) to scope explorer</li><li>Avoid reliance on icons/names</li><li>Pages filters based on template compatibility</li><li>Improved content item search in the Page builder</li></ul>|
| **Naming Conventions** | Authors might unsure which content maps to which component. Proper folder+template usage removes need for naming-based matching. |
| **Icons Are Repetitive** | The reliance of icons have been limited, with a better approach to use folder templates with expanders to differentiate visually. |
| **Legacy Folder Cleanup** | Inherited folder structures cause confusion - migrate content to structured templates; align folders with new IA. |
| **Edit Visibility** | Changes require preview or save to show content properly. |
| **Inline Editing** | Inline editing should function as expected, but behavior may be component-specific. Testing across components ensures a smooth authoring experience. |
| **Internal Links** | Browsing or linking UX can break if not configured correctly. Ensure the new Rich Text Editor is enabled and that all links resolve to the correct items from components that have links. |
| **Styling Overexposure** | Too many visual controls exposed to authors can be overwhelming - remove Base Rendering Parameters where flexibility isn't needed. |
| **Image Handling** | Pages supports asset selectors and DAM integrations, but user journey needs to be defined per implementation. |

### Migration Plan
To minimize disruption, the move to Pages should be run as part of any project start.  This section outlines the key stages, from assessment through enablement and feedback, that ensure a sustainable transition.

| Phase | Activities |
|--------|-------------|
| **Assessment** | The first step is to take stock of current dependencies on Experience Editor (EE), making sure we’re not overlooking any hidden EE dependencies that may block future authoring workflows. If you're new to XM Cloud, review what your authoring journey looks like to make sure your implementaton supports it.<ul><li>Conduct an inventory of EE-dependent components that rely on edit frames or custom inline editing.</li><li>Identify inline editing usage and assess whether it can be refactored for Pages compatibility.</li><li>Audit content types and templates currently tied to EE-specific behaviours.</li><li>Identify pages that rely on edit frames, inline editing, or EE-only rendering parameters.</li><li>Review existing datasource usage and check for overreliance on folder naming instead of structured templates.</li><li>Ensure image and file references align with DAM or asset selector workflows supported by Pages.</li></ul> |
| **Planning** | With the assessment complete, prioritize and sequence the work to ensure a manageable rollout. This establishes clear expectations for both developers and authors.<ul><li>Focus first on high-value components and those most used by authors. Components not in use should be deprecated at this stage.</li><li>Define a governance plan and Enforce Pages as the default. Restrict EE access, and update QA/release checklists.</li><li>Build an enablement plan based on training sessions, documentation updates, and change communications for authors and stakeholders.</li></ul> |
| **Execution** | This is where the technical migration takes place.<ul>  <li>Upgrade JSS to Content SDK version to unlock the latest features and improvements.</li>  <li>Migrate templates from EE-centric structures to Pages-friendly designs (e.g., modular data sources, simplified fields).</li>  <li>Refactor components and Remove edit frames, expose fields in Pages, and configure the new RTE for internal linking.</li></ul> |
| **Content Migration** | Based on your setup, you might need to audit or restructure your content so it’s using the latest components and templates. <ul>  <li>Consolidate messy, inherited folder structures into clean, template-driven hierarchies.</li>  <li>Eliminate reliance on icons or inconsistent names by restructuring with folders + templates.</li>  <li>Reduce clutter and simplify navigation for authors including merging duplicate content items (e.g., taxonomies like “People” or repeated promos).</li>  <li>Break down bloated templates into modular datasources that Pages can expose cleanly.</li>  <li>Use migration scripts/tools to shift content from EE-dependent templates to Pages-compatible ones. Align local and global datasources based on IA strategy, including link validation. Publish migrated content to validate it renders correctly in Pages.</li>  <li>Have authors validate migrated content in Pages using real workflows. For multisite models, ensure content consistency and localization strategies are intact.</li></ul>|
| **Enablement** | Even the best technology adoption fails without author confidence and alignment.<br/><br/>Train authors on Pages and feature use around their authoring workflow.<br/><br/>Reinforce best practices, from versions to publishing workflows to ensures consistent editorial practices across teams. |
| **QA & Feedback** | The migration is not complete until usability is validated in real-world authoring.<br/><br/>Capture author feedback during training and early adoption including feedback on usability of the refactored components within Pages.<br/><br/>Iterate on templates, workflows, and training materials based on feedback. |


## Related Recipes

<Row columns={2}>
  <Link title="Content Audit" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit" />
  <Link title="Content Migration" link="/learn/accelerate/xm-cloud/final-steps/content-migration" />
  <Link title="Multisite Strategy" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/multisite-strategy" />
  <Link title="Site management" link="/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Page builder" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/build-pages.html"/>
  <Link title="Edit a page's content" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/edit-a-page-s-content.html"/>
  <Link title="Understanding the interface" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/understanding-the-builder-s-interface.html"/>
  <Link title="Marketplace Custom Fields" link="https://doc.sitecore.com/mp/en/developers/marketplace/page-builder-custom-fields.html"/>
</Row>

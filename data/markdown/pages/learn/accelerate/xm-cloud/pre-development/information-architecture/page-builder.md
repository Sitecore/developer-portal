---
title: 'Getting the best out of Pages'
description: 'Discover how to get the best out of Pages in XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-09-30'
created: '2025-09-30'
audience: ['Architect','Product Owner', 'Project Manager', 'User']
---

## Context

Pages is the main authoring interface that offers a wide range of editing and design functionalities for building web pages in XM Cloud. Authors still relying on Experience Editor should switch over to benefit from the latest capabilities and features that come with Pages, while also improving their authoring flow to ensure long-term editorial efficiency.

## Execution
Pages provides modern capabilities such as embedded field support, metadata mode, and streamlined inline editing, making it a more efficient and sustainable tool for content authors. Implementation of templates and components need to be aligned to a Pages first authoring approach. 

There are 4 key editing views:

| Tool           | Role                                  | Primary User      | Benefits                                                                 |
|----------------|---------------------------------------|-----------------------|--------------------------------------------------------------------------|
| [Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/pages.html)         | WYSIWYG editing, layout control, content placement | Authors, Marketers    | <ul><li>True inline editing with visual context</li><li>Modern interface with fewer legacy limitations</li><li>Improved governance and authoring consistency</li></ul> |
| [Explorer](https://doc.sitecore.com/xmc/en/users/xm-cloud/explorer.html)       | Content editing independent of presentation | Authors, Marketers    | <ul><li>Access to content items across sites, including share content</li><li>Versioning and publish control</li><li>Edit fields not exposed in Pages</li></ul> |
| [Content Editor](https://doc.sitecore.com/xmc/en/users/xm-cloud/content-editor.html) | Development and fallback configuration | Developers, Admins    | <ul><li>Retained only for advanced configuration and system setup</li><li>Reduced risk of authors accidentally misconfiguring content</li></ul> |
| [Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html)          | Form management                       | Authors, Developers   | <ul><li>Dedicated space for form creation and editing</li><li>Separation of structured form logic from general page editing</li></ul> |



Using Pages open a list of features that are only available through this editing view:
- **Marketplace Custom Fields** -  Developers can now create tailored UI components and rendering parameters using Marketplace apps, enabling flexible, business-specific editing experiences. Read more on the [Page builder custom fields](https://doc.sitecore.com/mp/en/developers/marketplace/page-builder-custom-fields.html) documentation. 

- **Enhanced Editing Experience** - The floating right-hand panel supports advanced inline editing, configurable toolbars, and optimization flows for text fields. Direct content item editing [without leaving the page](https://doc.sitecore.com/xmc/en/users/xm-cloud/edit-a-page-s-content.html). Authors can reorder, move, and manage components directly in the canvas for faster, more intuitive editing. Read more on the [Page's interface](https://doc.sitecore.com/xmc/en/users/xm-cloud/understanding-the-builder-s-interface.html) documentation.

- **Layers** -  A powerful new feature that brings structure, clarity, and flexibility to page composition. Layers allow editors to visualize and interact with the structural hierarchy of a page or component. Raed more on the [component](https://doc.sitecore.com/xmc/en/users/xm-cloud/duplicate-a-component.html) documentation for more details on the Layers tab.

- **Integrated Personalization & A/B/n Testing** - Set up, manage, and analyze [personalization](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html) and [experiments](https://doc.sitecore.com/xmc/en/users/xm-cloud/a-b-n-testing.html) directly from the canvas, with analytics built into the workflow.  

- **Developer Experience** - The [Content SDK](https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-content-sdk-for-xm-cloud.html) is officially released and stable for XM Cloud. It replaces JSS with a cloud-native, scalable foundation that simplifies development and improves performance. Combined with [Local Editing Host](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-local-development-environment.html) and optimized architecture, developers can build enterprise-grade pages faster with a lightweight front-end builder and optimized architecture.  

### Change Management
Successful adoption of any authoring editor requires alignment, training, and governance, which requires preparation of stakeholders and authors.

| Activity            | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| Stakeholder alignment | Communicate Pages strategy to content authors, developers, and leadership.<br/><br/>Ensure authors, devs, and leadership understand Pages and the differences with their old authoring platform. |
| Technical Readiness | Validate custom fields, metadata, workflows.<br/><br/>Align components and templates with Pages standards - see [Insights](#Insights) for further information. |
| Inventory review    | Identify authoring view dependent components and templates.<br/><br/>Focus on those with edit frames, inline editing, or custom configurations. |
| Author training     | Upskill authors on Pages, versioning, embedded field editing, metadata editing. |
| Documentation updates | Make sure all documentation is aligned with Pages compatible guidance. Update internal QA and release checklists. |
| Governance rollout  | Embed Pages as the only supported authoring path in governance and onboarding. |

### Technical Readiness
Pages has key best practices on how to setup components, workflows, and security roles. The following need to be considered to ensure a smooth technical transition to provide a full authoring experience.

1. **Custom Fields**  
   Custom fields must be validated and moved to custom fields where necessary to ensure they are compatible with Pages. The XM Cloud [Page builder custom field extension](https://doc.sitecore.com/mp/en/developers/marketplace/page-builder-custom-fields.html) point allow developers to extend authoring capabilities in a way that feels native to Pages, giving authors flexibility while maintaining governance. Ensuring compatibility now prevents broken components and guarantees a consistent editing experience.

2. **Edit Frames**  
   Legacy edit frames from authoring views such as Experience Editor do not function within Pages and must be refactored. The approach requires exposing fields directly through Pages-compatible bindings. This ensures authors can make inline changes without relying on outdated mechanisms.

3. **Rich Text Fields**  
   The [Rich Text Editor (RTE)](https://doc.sitecore.com/xmc/en/users/xm-cloud/add-rich-text-to-a-page.html) in Pages should be enabled and configured to support internal links, media embedding, and formatting standards. Proper setup ensures authors can create rich, connected content without falling back to legacy editing paths. 

4. **Metadata Mode**  
   [Metadata Mode](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-metadata-pulling.html) is a modern editor integration strategy for Next.js applications that allows Pages to visually edit content by using metadata delivered via the layout service. Because only essential metadata is sent initially, page load times in editor mode are faster compared to chromes mode. With this method of editor integration, if you want to test components without affecting published sites or other users on the same environment, you can [connect your local host directly to Pages](https://doc.sitecore.com/xmc/en/developers/xm-cloud/connect-your-local-host-to-pages.html).

5. **Context Editing**  
   [Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/pages.html) introduces context-aware editing, where content visibility and rendering may depend on page context (for example, different promos by region or personalization rules). Validation should ensure authors can preview and adjust content under these contextual conditions. Testing this functionality is critical to avoid content gaps or mismatches when pages go live.

6. **Security Roles**  
   Security must be reviewed to confirm that authors have appropriate access to Pages, while fallback access to Experience Editor is restricted or removed. This enforces Pages-first governance, prevents accidental reliance on deprecated tools, and ensures a consistent authoring experience across teams.

7. **Workflow in Pages**  
   Pages supports [workflow](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/information-architecture/workflow) and authors should be trained to use workflow indicators in Pages. [Explorer](https://doc.sitecore.com/xmc/en/users/xm-cloud/edit-an-item-in-explorer.html) also provides a workflow view, and Content Editor should only be used for detailed workflow management. Providing documentation or tooling to surface workflow status within Pages reduces confusion and keeps authors focused in the supported environment.

8. **Versioning Best Practice**  
TBC

9. **Complex Components**  
   Components such as accordions, carousels, and tabbed interfaces require additional review for Pages. Fields should be exposed in a way that makes them intuitive and manageable for authors, without overwhelming them with low-level configuration options. This refactoring improves the usability of complex components, ensuring they remain flexible but author-friendly in the Pages interface, include the use of [Placeholders](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/developer-experience/using-placeholders).

10. **Forms**  
    Form authoring remains separate from Pages and continues to be managed through the Forms. Authors and developers should be reminded that while Pages handles content and layout, [Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html) are a standalone tool. Maintaining this separation ensures that form creation remains structured and reduces the risk of introducing unnecessary complexity into Pages.


## Insights
Migrating from Sitecore XM/XP, Experience Editor would have been  your main WYSIWYG editor. It’s recommended that a migration to Pages is planned to  benefit from the latest capabilities and features that come with Pages.

### Setup readiness checklist
Before migrating fully, common authoring pain points must be addressed. The following checklist surfaces common usability challenges that authors come across, and how to approach them.
- **Content SDK**: The Content SDK enables developers to integrate XM Cloud content with their front-end JavaScript applications. Chromes integration necessary to integrate with Experience Editor has been removed from Content SDK, resulting in further code optimizations. [Upgrade guides](https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-content-sdk-for-xm-cloud.html) are available.

- **Datasource Explorer UX**: Authors will find a change in finding items in datasource picker. 
  - Use datasource templates + locations (e.g. Promo Folder) to scope explorer  
  - Avoid reliance on icons/names  
  - Pages filters based on template compatibility  
  - Review the [search capabilities](https://developers.sitecore.com/changelog/xm-cloud/31082025/improved-content-item-search-in-the-page-builder-and-more) in the CMS

- **Naming Conventions**: Authors might unsure which content maps to which component. Proper folder+template usage removes need for naming-based matching.

- **Icons Are Repetitive**: The reliance of icons have been limited, with a better approach to use folder templates with expanders to differentiate visually.

- **Legacy Folder Cleanup**: Inherited folder structures cause confusion - migrate content to structured templates; align folders with new IA.

- **Edit Visibility**: Changes require preview or save to show content properly.

- **Inline Editing**: Inline editing should function as expected, but behavior may be component-specific. Testing across components ensures a smooth authoring experience.

- **Internal Links**: Browsing or linking UX can break if not configured correctly. Ensure the new Rich Text Editor is enabled and that all links resolve to the correct items from components that have links.

- **Styling Overexposure**: Too many visual controls exposed to authors can be overwhelming - remove Base Rendering Parameters where flexibility isn't needed.

- **Image Handling**: Pages supports asset selectors and DAM integrations, but user journey needs to be defined per implementation.

- **Information Architecture considerations**: Pages depends on structured, scalable content models but will not have the same view as Experience Editor. Consider the below guidance while migrating to put in place a long-term content governance process.
  - **Global vs Local Datasources**: Adopt Metadata Mode for shared content. Localize where possible.
  - **Taxonomies (e.g., "People")**: Use item references and tags, avoid duplicating structured data inside templates
  - **Template Overload**: Offload content fields to modular datasource items instead of placing them all on templates
  - **Multi-Site Models**: Apply consistent data structures and authoring patterns across all sites - link to multisite

### Migration Planning
To minimize disruption, the move to Pages should be run as part of any project. This section outlines the key stages, from assessment through enablement and feedback, that ensure a sustainable transition.

| Phase       | Activities |
|-------------|------------|
| **Assessment** | The first step is to take stock of current dependencies on Experience Editor, making sure we’re not overlooking any hidden Experience Editor dependencies that may block future authoring workflows.<ul><li>Conduct an inventory of Experience Editor-dependent components that rely on edit frames or custom inline editing.</li><li>Identify inline editing usage and assess whether it can be refactored for Pages compatibility.</li><li>Audit content types and templates currently tied to Experience Editor-specific behaviours.</li><li>Identify pages that rely on edit frames, inline editing, or Experience Editor-only rendering parameters.</li><li>Review existing datasource usage and check for overreliance on folder naming instead of structured templates.</li><li>Ensure image and file references align with DAM or asset selector workflows supported by Pages</li></ul> |
| **Planning** | With the assessment complete, prioritize and sequence the work to ensure a manageable rollout. This establishes clear expectations for both developers and authors.<ul><li>Focus first on high-value components and those most used by authors. Components not in use should be deprecated at this stage.</li><li>Define a governance plan and Enforce Pages as the default. Restrict Experience Editor access, and update QA/release checklists.</li><li>Build an enablement plan based on training sessions, documentation updates, and change communications for authors and stakeholders.</li></ul> |
| **Execution** | This is where the technical migration takes place.<ul><li>Upgrade JSS to Content SDK version to unlock the latest features and improvements.</li><li>Migrate templates from Experience Editor-centric structures to Pages-friendly designs (e.g., modular data sources, simplified fields).</li><li>Refactor components and Remove edit frames, expose fields in Pages, and configure the new RTE for internal linking.</li></ul> |
| **Content Migration** | Based on your setup, you might need to audit or restructure your content so it’s using the latest components and templates.<ul><li>Consolidate messy, inherited folder structures into clean, template-driven hierarchies.</li><li>Eliminate reliance on icons or inconsistent names by restructuring with folders + templates.</li><li>Reduce clutter and simplify navigation for authors including merging duplicate content items (e.g., taxonomies like “People” or repeated promos).</li><li>Break down bloated templates into modular datasources that Pages can expose cleanly.</li><li>Use migration scripts/tools to shift content from Experience Editor-dependent templates to Pages-compatible ones. Align local and global datasources based on IA strategy, including link validation. Publish migrated content to validate it renders correctly in Pages.</li><li>Have authors validate migrated content in Pages using real workflows. For multisite models, ensure content consistency and localization strategies are intact.</li></ul> |
| **Enablement** | Even the best technology adoption fails without author confidence and alignment.<ul><li>Train authors on Pages and feature use around their authoring workflow.</li><li>Reinforce best practices, from versions to publishing workflows to ensures consistent editorial practices across teams.</li></ul> |
| **QA & Feedback** | The migration is not complete until usability is validated in real-world authoring.<ul><li>Capture author feedback during training and early adoption including feedback on usability of the refactored components within Pages.</li><li>Iterate on templates, workflows, and training materials based on feedback.</li></ul> |


## Related Recipes

<Row columns={2}>
  <Link title="Scope and Governance Framework" link="/learn/accelerate/xm-cloud/pre-development/discovery/scope-governance-framework" />
  <Link title="Operational Governance" link="/learn/accelerate/xm-cloud/optimization/operational-governance" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Edit a page's content" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/edit-a-page-s-content.html" />
  <Link title="Page builder custom fields" link="https://doc.sitecore.com/mp/en/developers/marketplace/page-builder-custom-fields.html" />
  <Link title="Understanding the builder's interface" link="http://doc.sitecore.com/xmc/en/users/xm-cloud/understanding-the-builder-s-interface.html" />
  <Link title="Duplicate a component" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/duplicate-a-component.html" />
  <Link title="Personalize" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html" />
  <Link title="A/B/n testing" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/a-b-n-testing.html" />

  <Link title="Content SDK" link="https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-content-sdk-for-xm-cloud.html" />
  <Link title="Set up your local development environment" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-local-development-environment.html" />
  
  <Link title="" link="" />

</Row>

---
title: 'Creating components with AI in Design Studio'
description: 'Generate a new component from a plain-language description in SitecoreAI Design Studio, or model its content first, then review, activate, and install it.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2026-10-08'
created: '2026-10-08'
audience: ['Architect', 'Technical Implementer', 'Product Owner']
features: ['Design Studio', 'Pages', 'Content SDK']
---

## Context
A marketing team is planning a campaign and needs an event promotion banner: an image, a headline, a date, a short description, and a registration button. None of the existing components fits. Waiting for a developer to model the fields, build the layout, and wire it into the site can take a full sprint, and the campaign date does not move.

Design Studio shortens that path. The team describes the component in plain language, the AI generates the presentation (layout and structure) and a content model with matching fields, and a developer reviews the code before it reaches the repository. You can also start from a content model you have already defined and generate only the presentation.

This recipe covers net-new components. For the standard developer workflow, see [Creating new components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components)..

<Alert status="info">Design Studio requires Content SDK 1.1.0 or later. Applications on the Next.js App Router need Content SDK 1.5 or later for AI-generated components to render correctly with server components. Activating components requires Content SDK 2.3. On earlier versions you save the component instead.</Alert>

## Execution

### Choose a starting point
A component model defines the fields and data structure a component uses. You can clone a model, which creates an independent copy with its own model ID. You can also inherit a model, which stays linked to the original and receives its changes. Fields on an inherited model cannot be edited, because they follow the base model.

Each field you configure has a type, a name, and helper text for authors. Fields also support settings, validation rules, and default values. A default value is also the fallback when no value is entered. Define validation and helper text up front, because they decide how clear the authoring experience is.

| Start from | Use it when | Result |
| - | - | - |
| A description | You want to test an idea quickly, or build a component without predefining fields | AI generates the presentation and the content model together |
| A content model | The data structure is already defined and you want a matching layout | AI generates the presentation only |
| Code | The component needs behavior, data dependencies, or authoring controls that a model cannot express | You build it yourself, following the standard recipe |

In the event banner example, nothing is predefined and the fields are simple, so the team starts from a description.

### Steps

1. **Agree the brief.** Write down the component's purpose, the fields authors need, where it can be used, and who owns review. A one-line brief produces a generic component. For the event banner: purpose is to promote one event per landing page, fields are image, headline, date, description, and registration link, and it is used on campaign landing pages only.
2. **Open the Studio.** In the Studio tab of Design Studio, create a new component.
3. **Describe the component.** Use the recommended prompt template: action, element, key attributes or style changes, context or audience, and tone or visual intent. Type `/` for quick actions. You can queue up to five prompts. For example: "Create an event promotion banner with a background image, headline, event date, a two-line description, and a primary registration button. Suitable for a campaign landing page, confident and clean."
4. **Add references if you have them.** Upload up to three images (.jpeg, .jpg, or .png, each up to 20 MB) as visual references. Upload a JSON file, such as a Figma export, to apply design tokens, and refer to the exact token names in your prompt.
5. **Or start from a model.** In Configuration mode, add individual fields or an existing content model to the component, then ask the AI for the presentation only.
6. **Iterate.** Keep prompting until the component is right. For example, "Make the date more prominent and stack the button below the description on mobile." Use Restore to return to an earlier version.
7. **Review it.** Check each mode:
   - Code: review the generated code and edit layout, colors, and content.
   - Inspect, Design tab: check layout and responsiveness.
   - Content, Content tab: review the generated fields and try different values and data sources.
   - Configuration, Content tab: review the fields that make up the component.
8. **Set availability.** In Configuration mode, set which sites, templates, and placeholders can use the component. For example, limit a promo to landing page templates, or a copyright component to the footer placeholder.
9. **Activate.** Name the component and choose its section. The Activate dialog also asks for site availability, so check that it matches what you set in step 8. Select every variant you want to keep, because draft variants you do not activate are deleted.
10. **Install the code.** Copy the code from Code mode into your repository, or use the Install option to get a Sitecore CLI command. Commit through your normal branch and review process, then redeploy from Portal. Design Studio updates its component previews at deploy time, so later code changes appear there only after a redeployment.
11. **Use it in Page builder.** Drag the component onto a page and create its content.

### Before activating
Activation locks in choices that you cannot change later:

- The component name cannot be changed.
- The section cannot be changed.
- Activated variants cannot be removed from Design Studio. A developer has to delete an activated component.

Treat activation as the point where the design is approved, not as a save button.

## Insights

### What the use case shows
In the event banner example, the marketer owns the brief, the prompts, and the visual review. The developer owns the code review, the repository commit, and the deployment. The architect owns the standards that stop each team generating its own banner. The AI shortens the time to a first draft. It does not remove the review.

| Role | Owns |
| - | - |
| Marketer or designer | The brief, prompts, references, and visual review |
| Developer | Code review, the repository commit, and deployment |
| Architect | Model standards, reuse and inheritance of models, and availability rules |

Generated code is still code that your team maintains. Review it against your project conventions for structure, naming, imports, shared assets, accessibility, and styling before it lands.

### Keep models consistent
If three teams each generate their own promo banner, you end up with three models for the same thing. Reuse and inherit models where components should stay aligned, and clone them where a component needs to diverge. Agree who can change a base model, because inherited models receive its changes.

### Check your conventions
The standard recipe describes cloning an out-of-the-box component so that all required base templates are in place. Confirm with your team how components generated in Design Studio fit your conventions before you use them on production sites.

### Faster component delivery
Manual development and Design Studio put the effort in different places. The table compares the steps in the [standard recipe](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components) with the Design Studio flow. It shows where each approach frees up time, not how long each step takes, so measure your own cycle time before you quote a saving.

| Stage | Manual development | Design Studio |
| - | - | - |
| Brief to first draft | A developer interprets the brief, clones an out-of-the-box component, and builds the data source template, rendering parameters, and default variant | The team describes the component and gets a first draft of the layout and the content model |
| Content model | A developer builds the data source template by hand | Generated with the component, or defined as a model in Configuration mode |
| Feedback loop | The marketer usually sees the component once a developer has built it, so feedback goes back to the development queue | The marketer reviews responsiveness and field values in Design Studio and refines the component with new prompts before any code is committed |
| Front-end code | A developer writes the component file and registers it in the component map | The code is generated, and a developer reviews and edits it |
| Review and release | Code review, commit, deployment | The same, now applied to a working draft |
| Availability | Configured with placeholder restrictions and page templates in the Content Editor | Set per site, template, and placeholder in Configuration mode |

With manual development, briefs, field changes, and visual feedback all pass through a developer, so even a small component joins the sprint backlog. Design Studio moves the first draft and the visual iteration to the team that owns the idea. Developers spend their time where they add the most value: reviewing a working draft, checking it against project conventions, and releasing it, instead of building from a written brief.

Get the most from the faster start by planning for the stages that stay the same:

- **Review capacity.** Component drafts now arrive faster, so agree who reviews them and how quickly. A short, agreed review turnaround keeps the time you saved at the start.
- **Governance.** Reuse and inherit models so that new components build on shared standards. See "Keep models consistent".
- **Activation.** Treat activation as the approval point. Once a component is activated, removing it needs a developer.
- **Release.** The code is installed in the repository and redeployed from Portal, so plan the release before you set a campaign date.

Choose manual development when the component needs custom behavior, external data, or authoring controls that a model cannot express. Choose Design Studio when the work is mainly the structure and presentation of content you can describe. Many teams will use both: Design Studio for the first draft, and a developer for the parts that need code.

## Related recipes

<Row columns={2}>
  <Link title="Creating new components" link="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" />
  <Link title="Component design best practices" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/component-design-best-practices" />
  <Link title="Delivering components through Design Studio" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/design-studio-component-variants" />
</Row>

## Related documentation

<Row columns={2}>
  <Link title="Generate a new component using AI" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/generate-a-new-component-using-ai.html" />
  <Link title="Model a component in Design Studio" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/model-a-component-in-design-studio.html" />
  <Link title="Configure components fields" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/model-a-component-in-design-studio/configure-components-fields.html" />
  <Link title="Activate a component" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/activate-a-component.html" />
  <Link title="Install a component" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/install-a-component.html" />
  <Link title="Design studio" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio.html" />
  <Link title="Components API" link="https://api-docs.sitecore.com/sai/components-api" />
  <Link title="Content Types API" link="https://api-docs.sitecore.com/sai/content-types-api" />
</Row>
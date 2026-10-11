---
title: 'Delivering components for personalization and A/B/n testing through Design Studio'
description: 'Create reusable variants of an existing component in Design Studio or in code, deploy them, and make them available in Page builder for personalization or testing.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2026-10-08'
created: '2026-10-08'
audience: ['Product Owner', 'User', 'Developer']
---

## Context
Use this recipe when an existing component needs a reusable presentation variant, but not a net-new component. The path is: check the existing library, create or code the variant, review it, deploy it, then make it available in Page builder for personalization or testing.

It is written for marketers, designers, and developers who work on the same variant together.

This recipe covers variants of existing components. For a net-new component, Design Studio can also [model a component](https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/model-a-component-in-design-studio.html) (fields, rules, and data structures defined up front) or [generate one with AI](https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/generate-a-new-component-using-ai.html), which creates both the presentation and the content model.

<Alert type="info"><AlertIcon />Design Studio requires Content SDK 1.1.0 or later. Activating components and variants requires Content SDK 2.3. On earlier versions you save the component and its variants instead. If your site is not on a supported version, plan the upgrade before variant work starts.</Alert>

## Execution

### Check what already exists
Start in Page builder. Select the component, open it in Design Studio from the right-hand panel, and check whether a suitable variant already exists. If it does, use it and set the audience condition or the A/B/n test in Page builder.

Create a new variant only when the library does not cover the need. The cheapest variant is the one the team does not have to build.

### Design Studio or code
Both routes create a reusable variant of an existing component. Choose by what the change touches.

| | Design Studio variant | Code-defined variant |
| - | - | - |
| Best for | Fast visual iteration when the base component already exists | Changes that touch the component contract, fields, rendering parameters, or shared logic |
| Start here if | The change is a different layout or presentation of the same component | The change needs authoring controls or data dependencies that a component model cannot express |
| The work is mostly | Layout, styling, or content treatment | Structure and behavior |
| Ownership | Can be started by a marketer or designer, with developer review before it lands | Needs developer ownership from the start |

Workshop test: if you are moving, restyling, or re-presenting what the component already holds, start in Design Studio. If you are changing what the component is, start with a component model in Design Studio or in code. New fields and data structures no longer have to start in code, but a developer should still own the review.

### How the roles work together

| Step | Marketer or designer | Developer |
| - | - | - |
| Find the need | Use results or page performance to identify the component that needs a new presentation. | Confirm this is a reusable variant of an existing component, not a new component build. |
| Check what exists | Open the component from Page builder, review the existing variants, and create a new one only if needed. | Check whether the request changes layout only or affects structure, fields, data, or shared logic. |
| Create and review | Create the variant in Design Studio, using AI chat where useful, and test it with realistic content. | Review the generated output in Code mode against project conventions, imports, naming, shared assets, and styling. |
| Deploy | Plan for deployment before setting a launch date. | Add the variant to the repository, commit through the normal branch and review process, and redeploy from Portal. |
| Validate | Select the variant in Page builder, preview across breakpoints, and set personalization or A/B/n testing if needed. | Confirm the variant appears in Design Studio and Page builder, then test preview, published rendering, responsive behavior, and datasource dependencies. |
| Measure | Read results in the performance dashboards, then refine the audience, variant, or test. | Confirm that events flow through the SDK and that results aggregate correctly. |

**Handoff rule.** Agree that the request is a reusable variant before anyone builds. The developer owns review, repository commit, and deploy. The marketer owns Page builder setup, preview, audience or test configuration, publish, and results review.

### Developer steps

1. Confirm this is a reusable variant of an existing component.
2. Generate the variant and review it in Code mode against structure, fields, styling, imports, shared assets, and naming. Generating variants with AI is available to Admin and Advanced users.
3. Add the code to the repository. Copy it from Code mode, or use the **Install** option to get a Sitecore CLI command. Commit through your normal branch and review process.
4. Save the variant of an active component, or activate a new component and its variants. Draft variants you do not activate are deleted, and activated variants cannot be removed from Design Studio.
5. Redeploy from Portal.
6. Set availability for the component by site, template, and placeholder, so authors only see it where it belongs.
7. Validate that the variant appears in Design Studio and Page builder.
8. Test preview, published rendering, responsive behavior, datasource dependencies, SDK events, and the results in the dashboards.

### Audiences and tests on the variant
Once the variant is selectable, setup returns to Page builder. Use the audience condition dialog and decision table for personalization, or start a component A/B/n test from the context toolbar. One page can run personalization or testing, not both, so decide which question you are answering before the build starts.

See [Personalizing your content](/learn/accelerate/xm-cloud/optimization/user-experience-optimization/page-personalization) and [Testing experiences](/learn/accelerate/xm-cloud/optimization/user-experience-optimization/testing-experiences).

## Insights

### What happens at runtime
In a Next.js application, the Content SDK personalize middleware runs when a visitor requests a page. It requests the visitor's variant from SitecoreAI and uses the resulting variant ID when resolving layout data. The SDK sends behavior back as events, so affinities and A/B/n results can update.

### If the wrong variant appears
A correct preview does not prove the live profile data is right. Check in this order:

1. SDK events are being sent.
2. Identity resolution.
3. The site identifier.
4. The visitor's profile in Profiles.
5. The decision table or audience condition.
6. Page delivery, including the deployed code version.
7. The results in the dashboards.

## Related recipes

<Row columns={2}>
  <Link title="Personalizing your content" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/page-personalization" />
  <Link title="Testing experiences" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/testing-experiences" />
</Row>

## Related documentation

<Row columns={2}>
  <Link title="Design studio" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio.html" />
  <Link title="Generate variants of a component with AI" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/generate-variants-of-a-component-with-ai.html" />
  <Link title="Activate a component" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/activate-a-component.html" />
  <Link title="Install a component" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/install-a-component.html" />
  <Link title="Model a component in Design Studio" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/model-a-component-in-design-studio.html" />
  <Link title="Generate a new component using AI" link="https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/design-studio/generate-a-new-component-using-ai.html" />
</Row>
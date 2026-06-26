---
title: 'Content Audit'
description: 'Content Audit is the backbone of any implementation of a web application'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-04-30'
created: '2024-04-09'
audience: ['Architect','Product Owner', 'Project Manager', 'User']
---

## Context

You have an existing site that is populated with content, some or all of which will be migrated to the new XM Cloud instance. How do you determine what content to move as it currently is? What will require a rewrite/redesign? What to delete, and what method will best facilitate the move? If the existing site is on XP, how do you determine the suitability of the existing data templates before planning any necessary redesign of the data model.
## Execution

The aim when migrating to XM Cloud should always be to get a close as possible to how a new greenfield project would have been implemented. This will leave you with a setup that is in in the best possible position to leverage the platform going forward.

### Cross-Team Collaboration

Migration is not an IT initiative by itself—it's cross-functional. Prior to jumping into development, make sure you know your content - or build a migration discovery plan to identify what's actually worth moving from the old system to XM Cloud. Start by auditing your current ecosystem—take stock of what content needs to be migrated, what features need to be rebuilt or retired, and what integrations are needed versus outdated. You might find, for example, that 40% of your pages haven't been touched in years and can be archived rather than migrated. The end user journey and requirements must be kept in mind during this process.

Then build your roadmap over major business milestones. Never go live during periods of high stress such as big campaigns or regulatory deadlines; if a loyalty program is launching in Q4, schedule related migration work earlier in the year. 

Lastly, embrace agile methodologies to keep up the momentum. Work in sprints, deliver incremental value, and iterate along the way. Have the essential pieces up and running as soon as possible and include more advanced functionality —don't wait until everything is completely refined before launching.

The following is a start to a content value assessment, to evaluate and prioritize content during the migration to XM Cloud.

- Do we have clear content ownership and approval workflows?
- Are content governance policies defined and documented?
- Is there a retention/archiving strategy for outdated content?
- Is there a content audit completed to determine what to keep, update, or remove?
- Do we have defined content types, templates, and tagging strategy?
- Are we aligning content to user journeys and business goals?
- Is the visual design system reusable and accessible (WCAG)?
- Do wireframes reflect the intended user flow and interactions?
- Are we considering mobile-first, responsive layout design?
- Does the new setup support necessary integrations (CRM, DAM, Analytics)?
- Have we evaluated the scalability, performance, and uptime SLAs?
- Do we have a plan to migrate structured content (data mapping, automation)?
- Is data privacy and user consent (GDPR, CCPA) accounted for?
- Is role-based access control planned and implemented?
- Will the CMS be hosted in a compliant cloud region (if required)?
- Have stakeholders been briefed and trained on the new CMS?
- Is there documentation and onboarding material ready for editors?
- Is a communication and support plan in place for post-launch?


### Headless SXA Features
Regardless of where you are coming from, any implementation should be looking be using Headless with [SXA](https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-sxa-for-xm-cloud-development.html) for their XM Cloud setup.

For websites coming from existing Sitecore XM/XP implementations, this will involve more work than just moving the existing content in their current structure. However, this ensures that the new setup leverages the full XM Cloud feature set today, and ensure access to new features as they’re released. As XM Cloud is a SaaS product, features are added and improved on a regular cadence – implementing this way, will allow for an ongoing ability to leverage these changed and improved features.
When implementing Headless SXA you should ensure that the whole team is familiar with the product and the features it provides. There are key features, listed below, that you should ensure you are leveraging to help the project be successful when using XM Cloud.

 Review the [Using SXA Headless for XM Cloud development](https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-sxa-for-xm-cloud-development.html) documentation for more information. 

|  Headless SXA Feature | Detail |
| - | - |
| Page Designs and Partial Designs | When building out your layout you should leverage both Page Designs and Partial Designs as this will help you to achieve consistency through re-use across your different pages. You can learn more about these concepts by reading the pages on our Documentation site covering [Page Designs](https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-and-assign-a-page-design-in-the-experience-editor.html) and [Partial Designs](https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-and-change-a-partial-design.html). |
| Data Source Locations | When creating the rendering definitions for your different components, you should ensure that you’re configuring both local and site level locations. This will ensure that Content Editors can maintain a logical separation of content data. You can read more about this on the [data sources](https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-sources.html) documentation. |
| Sitemap & Robots.txt |  SXA Headless comes with out-of-the-box functionality to handle both Sitemap and Robots.txt creation. You should ensure that you are configuring this default functionality and not implementing a custom solution if it isn’t required. You can read more about these features on our documentation site pages covering how to [Configure a Sitemap](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html) and how to [Configure the Robots.txt](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-the-robots-txt-file.html) page. |

## Insights

Whatever platform the business is migrating from, it will be key to understand how to migrate it - and understanding your current Information Architecture will make a difference in the overall plan and process stages.

These uses patterns listed below are common in Sitecore XM/XP can be used as an example.

### Content Migration

A [content migration tool](https://developers.sitecore.com/downloads/xm-cloud) is provided by Sitecore for moving content between Sitecore XM/XP and XM Cloud. This tool doesn’t restructure the data, and just moves it over in its existing hierarchy. If you have used SXA in XM/XP then you might be able to leverage this tool for some of your content, however if you aren’t migrating from an existing SXA implementation, it most likely won’t be suitable for large portions of your data.

If you have a large amount of data, once you have defined your target structure, then you might want to investigate automating the migration of your content. 

This could be achieved by writing a standalone application that utilizes the [Sitecore Item API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-item-api.html), or by leveraging [Sitecore PowerShell](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-item-api.html).

### Feature Parity
There are a series of features that were leveraged in Sitecore XM/XP (or other CMSs) related to information architecture, some of which are supported in XM Cloud, other should be approached in a different manner. 

#### Item Buckets

Item Buckets in Sitecore XM/XP were a method used to automatically organise large amounts of content items into a structured hierarchical format. They are supported in XM Cloud and can be successfully published to Edge. However, the new XM Cloud UI’s in Pages don’t currently support them as completely as in Sitecore XM or XP. It is also not possible to create custom bucket structures without deploying custom C# code to the CM, which isn’t a recommended practice. You will need to decide whether the default bucket implementation is satisfactory, and this will help you to decide whether to leverage this feature or not.

#### Redirects

Some businesses want to configure content managed Redirects, allowing different URLs to be forwarded to different content as their requirements change. For more information on the best ways to achieve this you can view the [Redirects](/learn/accelerate/xm-cloud/implementation/information-architecture/redirect) Recipe.

#### Custom Item Data Providers

Custom Item Data Providers were a common tool in Sitecore XM/ XP to pull content from an external 3rd party source and have it displayed as items in the content tree. It is not recommended to implement these in XM Cloud, as it is no longer recommended to customise the authoring experience. You should approach 3rd party data differently when working headlessly, instead of integrating in the authoring environment the head should pull down this data directly and then display it the user.

Review the [External Data Integration](/learn/accelerate/xm-cloud/implementation/external-data-integration) recipes for further information.


#### Item Security

In Sitecore XM and XP, Item Security was defined using the in-built security model and defined on the content items. The `\_\_Security` field is not published to Experience Edge, so this approach is no longer valid. When working headlessly you should integrate your head with a Federated Security provider and handle authentication there. If you need to role-level access to different content items, you will need to implement this via a custom set of fields that will be published to Edge, and then ensure that your head application maintains access. You can also read more about this on the dedicated [Head Application Security](learn/accelerate/xm-cloud/pre-development/security/head-application-security).

Item security can still be applied for usage during the content editing process. This can be useful to control which actions certain content authors can perform. You can read more about this on the [User Security](https://doc.sitecore.com/xmc/en/developers/xm-cloud/user-security.html) documentation.

#### Workflow

While workflow is still managed on the Content Items in Sitecore XM Cloud, there are some differences to how this is approached when compared to Sitecore XM and XP. For a detailed overview of these differences, please refer to the [Workflow](/learn/accelerate/xm-cloud/implementation/information-architecture/workflow) Recipe.

#### Experience Editor Customizations

In Sitecore XM and XP it was common to customize the Experience Editor by creating custom Ribbons and Buttons by adding items to the Core Database. This is no longer supported in XM Cloud.

#### Custom Field Types

Some customers using Sitecore XM/XP would create custom field types to match specific functionality they require. Custom Field Types are not supported by XM Cloud. If you have customized your existing solution in this way, you will need to find an alternate way to implement this functionality using the provided field types.

#### Media Library Items

In XM Cloud, items stored in the Media Library are served by Sitecore Experience Edge, just as with content. There are a couple of differences here when compared with working with Sitecore XM and XP. You can read more about this on the [Limitations of Experience Edge ](https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions-of-experience-edge-for-xm.html). A couple of key differences for XM Cloud are:

- There is a 50 MB limit on assets served via Experience Edge. If you need to serve files larger than this then you will need to look into an alternative hosting source (for example, a DAM like [Sitecore Content Hub](https://developers.sitecore.com/dam-and-content-operations/dam) or Blob Storage).
- Media paths in Experience Edge are case-sensitive – you will need to ensure that you reference assets served via Edge in this manner.

#### Custom Desktop Applications

Some customers implementing on Sitecore XM or XP would create custom Desktop Applications hosted by configuring items in the Core DB. As mentioned above this is no longer supported and you will need to find another location to host this functionality.

#### User-Generated Content (UGC)

Some customers would store User Generated Content (UGC) in the content tree upon creation. This is not a recommended practice. If you need to store UGC data, it is recommended to have your head push this data to a third-party data storage service.

#### Events

In Sitecore XM/XP it was common to leverage events when certain actions were performed within the content tree, e.g. Save event and Publish events. In XM Cloud it is recommended to leverage the Webhooks model to perform integrations like this, pushing the logic outside of the authoring instance. You can read more on the [Webhooks in XM Cloud ](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhooks.html) documentation.

#### Shared Content
Shared components like headers and footers should be migrated as independent, reusable content items or renderings, that are not duplicated. Define and migrate their content structure (e.g., navigation links, logos, legal text) early and make sure these are referenced in page templates or compositions, not hardcoded. Because these components appear on every page, test them across all templates and breakpoints, all site variants (if multi-site) and all languages (if localized).

During discovery, flag any content that appears in more than one place such as global CTAs or newsletter sign-ups. Don’t copy/paste the content for each instance. Instead: create shared components and reference them in placeholder, based on the variation required (e.g., language, site, campaign).

## Related Recipes

<Row columns={2}>
  <Link title="Head Application Security" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/security/head-application-security" />
  <Link title="Redirects" link="/learn/accelerate/xm-cloud/implementation/information-architecture/redirect" />
  <Link title="External Data Integration" link="/learn/accelerate/xm-cloud/implementation/external-data-integration" />
  <Link title="Workflows" link="/learn/accelerate/xm-cloud/implementation/information-architecture/workflow" />
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Using SXA Headless for XM Cloud development" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-sxa-for-xm-cloud-development.html" />
<Link title="Page Designs" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-and-assign-a-page-design-in-the-experience-editor.html" />
<Link title="Partial Designs" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-and-change-a-partial-design.html" />
<Link title="Data Sources" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-sources.html" />
<Link title="Configure a Sitemap" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html" />
<Link title="Configure the Robots.txt" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-the-robots-txt-file.html" />
<Link title="Sitecore Item API" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-item-api.html" />
<Link title="Sitecore Powershell" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-item-api.html" />
<Link title="User Security" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/user-security.html" />
<Link title="Limitations and Restrictions of Experience Edge for XM" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions-of-experience-edge-for-xm.html" />
<Link title="Sitecore Content Hub" link="https://developers.sitecore.com/dam-and-content-operations/dam" />
<Link title="Webhooks" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhooks.html" />
</Row>

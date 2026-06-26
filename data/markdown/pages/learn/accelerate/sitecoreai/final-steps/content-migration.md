---
title: 'Content Migration'
description: 'Content Migration isn’t just a lift-and-shift—it’s a strategic opportunity to rethink content structure, delivery, and ownership.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated:  '2025-04-30'
created: '2025-04-30'
audience: ['All']
---

## Context
Migrating to XM Cloud is more than a lift-and-shift operation. It’s a chance to rethink how content is structured, managed, and delivered. Whether you're coming from Sitecore XP or another CMS/DXP, you need to consider your approach from a strategic, discovery-first perspective. Before writing code or exporting content, it’s critical to understand the current landscape, define the end state, and align stakeholders around what success looks like.

## Execution
A content audit is most valuable to perform at the outset of any migration. It tells you what you are dealing with — what content exists, what is outdated, what can be reused, and what can be phased out. Without it, you run the danger of over-engineering, moving content that doesn't have to be moved, or passing up improvement opportunities.

Begin by understanding how your current content supports your business. Who creates it? Who consumes it? How often is it updated? What makes a page or component effective today, and how might that change in XM Cloud? Partner closely with marketing and content teams to identify templates, renderings, and data in use. Review site analytics to see which content is still relevant and bringing value to your end user.

Before any content migration is started, make sure you have:
- Inventory of all content types, templates, components, and media
- Identify unused or deprecated items, get clear sign-off these will not be migrated
- Use tools to extract content reports to assess usage- both by internal teams, and end users
- Document what needs to be by identifying what needs to be *migrated as-is*, *transformed or merged* and *rebuilt or retired*.

Review the [Content Audit](/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit) recipe before progressing further into the actual migration.

### Impact on Implementation
Reviewing your content, will also mean reviewing what needs to be implemented. Most migrations are an opportunity to reduce complexity.

If you’re running a multi-site solution or years of implementation, you likely have dozens of nearly identical components. Rebuild them as flexible, configurable modules that serve multiple use cases. Merging and consolidating components can reduce the effort on the implementation when it comes to development time, but consider that further mapping will be required to consolidate content from two sources to one.

Consider also that some content currently in your CMS, might actually not need to be in there. Move away from embedded integrations and decouple your content platform from external systems. 

Review the [External Data Integrations](/learn/accelerate/xm-cloud/implementation/external-data-integration) recipe for more information.

### Media
With content comes also media - images, videos, PDFs, icons etc. In a similar fashion start by reviewing what is actually being used and needs to be retained - this can also be an opportunity to optimize some of your media such as converting to modern formats, alt text/captains updated etc

XM Cloud stores media in Sitecore Media Library (via Experience Edge), and then pushed to your application host to display on the website. Considerations need to be taken for the migration if your images are being uploaded in the [Media Library](https://doc.sitecore.com/xmc/en/users/xm-cloud/media-library.html) or you will be using a DAM such as Sitecore Content Hub - this will change how the actual migration process will look like.

As part of the assets migration, make sure you that have the relevant lifecycle rules in place between versioning, expiration and archival. Set up tagging, folder structures, and user permissions that align to the content workflow, including approvals and publication.

### Forms
Auditing and reviewing forms migration from a traditional CMS, Sitecore XM/XP or custom-build forms, requires still a business alignment and technical validation.

Consider that not all forms need to move to [XM Cloud Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html); it’s a good opportunity to take advantage of a more front-end approach to improve UX for example, which would mean these should be build externally to XM Cloud.

Make sure you have identified all forms currently in use including page location, submission actions and confirmation action. Review these with the business owner, including the usage analytics - clearly identifying high traffic and business critical forms.

Forms submissions need to be reviewed, as form actions now rely on [webhooks](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-the-webhooks-dashboard.html) to process the inputted data - whether that’s saving to a custom database, sending an email or triggering a CRM workflow.

### Executing the migration
With the above considerations in place, make sure you have a comprehensive matrix in place that captures:
<ul>
<li>Source content page, components down to field mapping.</li>
<li>Target content page, components down to field mapping.</li>
<li>Dependencies of each content item including media references, forms and potential personalize dependencies.</li>
<li>Transformation rules e.g., clean-up requirements of HTML blocks to components, consolidation or change of page/component templates, dependencies execution.</li>
</ul>

Make sure that there’s a clear sign-off and agreement on what the end destination model will look like. Only then it will be time to draw up the migration process including what can be automated vs manually required. 

The following topics are the key considerations that need to be answered while you are drawing up your migration process. This is not an exhaustive list, and there will be considerations that will be required based on the implementation needs.

#### Business alignment

- What content types are in scope? (Pages, components, media, forms etc)
- Are you doing a like-for-like migration or a content redesign?
- What content will be excluded?
- Who are the key stakeholders required here? Business areas identified, is legal required? Who is doing the final approval before going live?
- What are the business drivers behind the migration? Is this just for the move or are we clear on what optimization we are doing during the process?
- Agreement on migrating approved and published content only  - how will this be kept in sync during the timeline agreed?

#### Tooling
- What are the tools required vs processes that need to be put in place to migrate the content?
- If moving from Sitecore XM/XP, am I moving from MVC to XM Cloud directly, or do I have SXA in place? Will the [XM to XM Cloud Migration tool](https://developers.sitecore.com/downloads/xm-cloud) bridge gaps in the process?

#### Process
- Is it clear what content will be created manually vs automated? The Home page might need to be moved across manually due to dependencies from other pages.
- Are there pages that do not require migration, or specific migration processes, based on the content they have? For example, landing pages that have search results on them might not need 
- If migrating multiple sites and/or multi-language, what will the approach be? Are these migrated one at a time, followed by testing,  or in bulk? What are the language fallback considerations that need to be taken?
- Does the migration process have a repeatable runbook that can be easily shared and updated?
- What are the key steps that will be automated - does it convert the import only, or will it automatically publish? Is there scope for automating testing?
- Is there data that needs to be manually updated, or with a seperate script, following the migration? For example, does the menu navigation need to be re-configured after all the content is moved?
- Have any content transformation been identified and tested? Example stripping inline styles, changing links.
- What is the review process for content-heavy, customized or personalized content?
- Define freeze periods that align to the migration process including reactivation timelines to authors and expectations for keeping content up to date. Do you require deltas to be run to keep this aligned?
- How will this impact roll-out and go-live? Is content migration happening for all content/websites/languages before go-live happens or are they staggered? How does this impact redirects, including legacy URLs?
- How will content be promoted across environments (Dev, UAT, Production)? Is this the first go-live, so can content be created directly to Production and brought down to lower environments later?

#### Post-migration verification 
- How will issues be raised to be resolved and re-tested? Are authors expected to fix content themselves?
- What is the process of validating links, media, page structure, and form functionality?
- How are SEO essentials validated as part of testing: metadata, sitemap, redirects, robots.txt?
- How will content be validated for search results or personalized content? 

## Insights
Operational readiness for content authoring is not an afterthought. During the move to XM Cloud, establish well-defined roles, or review existing ones based on the new setup: who will author, review, publish. Configure workflows that align with the organization and compliance requirements, and make sure that the whole team is equipped with the relevant training, both on the toolset but also on process. 

It’s key that standards are setup including naming practices, folder structures, and template use. But these should be strengthened with planned review cycles and clean-up responsibilities. Apply what has been discovered from the audit to training writers and creating consistent standards.

Executive decisions related to content must be traced to business value. This change is your moment to align your content model with how you really want to interact with customers, measure success, and grow globally. Consider long-term: How does this play out across markets, brands, or projects? Who will keep maintaining it in six months? What if your follow-on product comes?

## Related Recipes

<Row columns={2}>
  <Link title="Requirements Gathering" link="/learn/accelerate/xm-cloud/pre-development/discovery/requirements-gathering" />
  <Link title="Content Audit" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit" />  

</Row>

## Related Documentation

<Row columns={2}>
<Link title="Media Library" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/media-library.html" />
<Link title="Forms" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html" />
<Link title="Webhooks" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-the-webhooks-dashboard.html" />


</Row>
---
title: 'Go-Live Checklist'
description: 'What steps do you need to take to ensure your CDP and Personalize experience go live successfully?'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['All']
product: ['CDP', 'Personalize']
---

## Context
You have completed development and testing of your initial integrations and all data has been validated in your non-production environment. What steps do you need to take to ensure your CDP and Personalize experience go live successfully?

## Execution
Going live with Personalize and CDP is as much of an operational feat as it is technical. To enable a successful launch, teams must have clear ownership, governance, and overall readiness. They should be revisited for new experiences or major data integration going live. Treat every launch as an opportunity to validate readiness across teams, processes, and systems.

### Operational Considerations
Operational readiness ensures that all teams involved are aligned and accountable for their roles in the experience go live. It covers not only stakeholder coordination and ownership but also process governance, compliance, and post-launch monitoring. Getting these elements right is essential for delivering effective, and scalable personalization.

#### 1. Stakeholder Alignment
  - Confirm all stakeholders (Marketing, IT, Product, Legal, CX) understand the scope of what’s going live.
  - Validate ownership for each part of the experience (data feeds, campaigns, segments, testing).

#### 2. Governance and Change Management
  - Define a change control process for managing rule updates, campaign launches, and data schema changes.
  - Identify approval workflows for future personalization experiments or updates to segments.

#### 3. Data Privacy & Compliance
  - Ensure consent management is implemented and validated.
  - Verify data privacy policies are respected across all data sources and real-time channels.
  - Review what data is being stored in profiles and events—ensure it aligns with GDPR, CCPA, etc. 
  - Ensure sensitive attributes (e.g. email, name, phone) are handled according to consent and compliance rules.

#### 4. Support & Monitoring Plan
  - Define who monitors data ingestion and campaign performance post-launch.
  - Set up alerts or dashboards to catch failed events, missing data, or drops in engagement.
  - Ensure clear escalation paths for issues (internal and with Sitecore support).

#### 5. Campaign & Experiment Management
  - Review what experiences, segments, and decision models are going live.
  - Confirm A/B or multivariate testing processes are documented and reviewed.
  - Ensure rollback or deactivation plans are in place for underperforming experiments.

#### 6. Training & Handover
  - Ensure marketing and operations teams are trained on CDP and Personalize including creating audiences, reviewing profile data and reviewing data.

#### 7. Data Sync Across Channels
  - Confirm consistency of identity and data across all integrated systems.
  - Review timing and frequency of batch data syncs (for non-real-time sources).

#### 8. Post-Go-Live Validation Plan
  - Create a plan for validation after launch: what success looks like, what reports to check, and who is responsible.
  - Schedule a post-launch checkpoint with all involved teams.
  - Make sure that ultimately all required data privacy and stakeholder sign-offs are in place.

### CDP Specific
#### 1. Identity Validation
  - Configure your [identity rules](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/configure-identity-rules.html) in your tenants.
  - Confirm identity rules (e.g. email, phone, loyalty ID) are correctly configured and aligned with your business model.
  - Validate that identity stitching works across sessions and channels (web, email, offline data).
  - Check that profiles are merging as expected when multiple identifiers are present.
  - Confirm that custom attributes and extensions (e.g. preferred category, loyalty tier) are being populated.

#### 2. Data Ingestion/Export Validation
  - Configure your [points of sale](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/manage-a-point-of-sale.html) in your tenant. Ensure the correct channel is used for different platforms (e.g., `WEB` vs `MOBILE_WEB`).
  - Verify real-time data (e.g. events, identity) is flowing into the correct profile structures.
  - Confirm batch data (e.g. offline transactions, CRM imports) is processed and reconciled properly.
  - Validate downstream data exports including batch order and guest integrations.

#### 3. Segmentation Validation
  - Run test queries against your audiences to ensure they return expected profiles.
  - Confirm segments used in experiences are populated and refreshed as scheduled.

#### 4. Web Integration
  - Validate that events are being sent correctly, including field mapping
  - Regression testing on website
  - Validate that order data is correct if this is an ecommerce website

### Personalize Specific
#### 1. Decision Model Validation
  - Confirm all decision models are published and returning expected responses based on test inputs.
  - Validate fallback logic is configured in case a decision model returns no offers or errors.
  - Test average and peak decision model execution times in staging and production-like environments.
  - Validate third-party APIs used within decision models are available, performant, and production-ready.
  - Implement sensible timeout settings to prevent slow external services from blocking the experience.
  - Ensure decision models gracefully handle timeouts or failures.

#### 2. Experience Configuration
  - Review all experiences (web or full-stack) for correct audience targeting, valid start/end dates and proper prioritization (especially if multiple experiences can trigger on the same page)
  - Ensure experiences are linked to the right decision models and templates.

#### 3. Audience Mapping
  - Double-check that audiences used in experiences match real segments in CDP.
  - Test experience triggering in staging with known profiles.

#### 4. Page & Slot Placement
  - Confirm the correct placement of experience slots or containers on your site/app.
  - Ensure slots load at the right moment in the page lifecycle (e.g. not after page unload).

#### 5. Real-Time Data Dependency
  - Validate required real-time events (e.g., `VIEW`, `ADD`, IDE`NTITY) are firing before personalization decisions are made.
  - Ensure latency between event firing and decision evaluation is acceptable.

#### 6. Experiment Setup
  - Confirm A/B or multivariate test variants are properly configured with tracking in place.
  - Set clear KPIs and goals for each variant, and review test duration plans.

#### 7. Content & Offer Readiness
  - Validate that offer content (copy, images, links) is final, published, and rendering correctly.
  - Check dynamic parameters and tokens are resolving as expected (e.g., product names, prices).

#### 8. Tagging & Script Deployment
  - Ensure Sitecore Personalize scripts are deployed in the correct environments (e.g., production URLs only).
  - Check script load order and verify no conflicts with other third-party scripts.

#### 9. Performance & Fallback
  - Test how pages perform with and without personalized content.
  - Implement fallback content for experiences in case of script failure or data issues.

#### 10. Language & Localization Accuracy
  - Event `language` fields must reflect the actual site language (e.g., `EN`, `AR` in ISO 639-1 format).
  - Avoid mixing languages across data (e.g., Arabic product names with English configuration), as it will complicate segmentation and personalization rules.

## Insights
A go-live isn’t just a moment—it’s a coordinated transition that needs planning and disciplined execution. The cutover plan will act as your guide, outlining what needs to happen, when, and by whom, to ensure a controlled and successful launch. Make sure you make a plan based on your setup and requirements.

### Cutover Preparation, Execution and Validation

Pre-Cutover Preparation requires having a good foundation in place before making anything live. First, freeze the scope—confirm exactly what integrations, segments, decision models, and experiences are included in the release. Provide a code and content freeze window so that last-minute issues are not introduced. Conduct a final validation pass to ensure real-time events are triggering, identity stitching is working, and profile data is harmonized. Ensure all stakeholders in marketing, operations, support, and development are aware of the cutover plan and their responsibility. Lastly, prepare for the unexpected by having rollback scripts and backup configurations available to deploy.

Cutover Execution is the point at which all planning turns into action. As soon event tags are live, data has been migrated over etc -  actively monitor data ingestion to make sure events are flowing. Once data is confirmed, deploy all experiences, decision models, and supporting content or offers into production. Perform smoke testing in the environment itself to ensure experiences fire the correct way, decision models respond appropriately, and data is recorded error-free. This is a quick moving process—have logs open, stay vigilant, and be prepared to act if things go awry.

Post-Cutover is all about making sure everything is working in the real world—not just on paper. Start with data sanity checks: make sure profiles are being created, identities are stitching correctly, and segments are populating as expected. Then, make sure live experiences are rendering properly on key pages and tracking is functioning end to end. Track decision model and event tag performance, with a close eye on execution times and load profiles. Track error logs in fine detail for failed events, API problems, or decision model timeouts. This is your first detailed reality check—search for signs something is not going according to plan, and fix it immediately.

### Post-Go-Live 

Now it’s time to transition your momentum to consistent, long-term operations. Begin by handing over ownership officially—hand over monitoring duties and experimentation management to marketing and operations teams who will operate day-to-day activity. Give them clear, up-to-date documentation and runbooks so they understand how to [operate experiences](/learn/accelerate/cdp-personalize/pre-development/discovery#operating-model-planning), troubleshoot problems, and make changes confidently. Plan a follow-up review post go-live to gauge performance, iron out initial problems, and collect feedback. Lastly, capture lessons learned and incorporate them into your personalization backlog for future iterations—go-live is only the start.

## Related Recipes

<Row columns={2}>
  <Link title="Validating Guest Data" link="/learn/accelerate/cdp-personalize/final-steps/data-validation" />
  <Link title="Experiments Strategy" link="/learn/accelerate/cdp-personalize/pre-development/experimentation" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Configure identity rules" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/configure-identity-rules.html"/>
    <Link title="Manage a point of sale" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/manage-a-point-of-sale.html" />
</Row>

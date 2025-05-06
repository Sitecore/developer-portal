---
title: 'Go-Live Checklist'
description: 'Checklist and considerations before taking Content Hub implementation to production.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-04-30'
created: '2025-04-30'
audience: ['All']
---

## Context

Going live with Content Hub isn’t just about flipping a switch - it requires the team to work through key steps such as data migration, system configuration, and user access. Any planning needs to include decommissioning of legacy systems, verify integrations, and monitor system performance. The checklist supports both business and technical stakeholders in achieving a stable go-live with minimal disruption and clear cross-team communication.

## Execution

Before going live, ensure your solution is fully tested and has successfully passed - review the [Testing & Quality Assurance](/learn/accelerate/content-hub/final-steps/testing-and-qa) recipes for further information

This following considerations are generic and should be adopted to the customizations and integrations for your implementations

### Data Migration & Configuration

Make sure Data migration is completed, and any required metadata transformations or clean-ups are finalized prior to go-live. For step-by-step guidance, refer to the [Migration Guide](/learn/accelerate/content-hub/final-steps/migration-guide) recipe.

### User Authentication & Security

Ensure SSO (Single Sign-On) is configured and tested for all users, with only authenticated logins permitted. Review the [Single Sign-On](/learn/accelerate/content-hub/implementation/functional-security/sso-on-content-hub) recipe for further details.

SSL certificates must be installed for all target hostnames (e.g., content.company.com). Follow the [SSL Configuration Guide](https://doc.sitecore.com/ch/en/users/content-hub/set-up-the-customer-email-sender.html) for setup instructions.

### Domain & Email Configuration

Domain aliases (CNAME records) should be created for the desired hostnames.  See below for additional information.

Default system email sender (noreply@marketingcontenthub.com) should be updated to the customer-specific email address.  Refer to the [Set up the customer email sender](https://doc.sitecore.com/ch/en/users/content-hub/set-up-the-customer-email-sender.html) documentation.

### Integrations & Connectivity

Complete and validate CORS setup for all connectors (e.g., Sitecore Connect) and confirm all necessary integrations are enabled, configured, and successfully tested in staging and production environments.

### User Access, Roles & Training

Access roles and user groups are fully configured and documented; deliver targeted user training is completed for all key personas.

At least one admin-level user is registered and has access to [Sitecore Support](https://support.sitecore.com/csm) for post-go-live support and escalation.

### Deployment Validation & Testing

Make sure that the latest deployment package is promoted across all environments with validation checks. Maintain a secure backup of the last known good configuration to enable fast rollback if necessary.

Perform end-to-end testing with stakeholder signoff, and run a graph performance test on metadata indexing and query response times. Follow the [Performance Optimization Guide](https://doc.sitecore.com/ch/en/users/content-hub/performance.html) for tuning.

### Infrastructure & Load Readiness

Make sure that infrastructure provisioned is aligned to handle peak traffic and concurrent users. Use the Current activity view under Stats to monitor system activity, job queues, and indexing behavior in real time.

### Cutover

Finalize and review the cutover plan from legacy DAM (if applicable), communicate decommissioning dates clearly to all involved teams.

Plan and schedule any necessary delta migrations post-go-live to ensure continuity without data loss or duplication.

### Communication & Escalation Planning

Prepare and schedule a go-live announcement for key internal and external stakeholders that includes a support and escalation matrix with contacts by priority level.

Share expected changes, potential downtime, and key updates in advance. Launch a post-go-live monitoring plan to capture and resolve feedback swiftly.

As part of your go-live plan, make sure that a Hypercare period has been setup to ensure system and integration stability, while also providing a means for the implementing team to quickly resolve issues. Review the [Hypercare Strategy](/learn/accelerate/content-hub/final-steps/hypercare-strategy) recipe for more detail.

### Insights
If you need a custom domain (e.g., `assets.company.com`), you can request a DNS alias via the Sitecore support portal. Be sure to gather the required details (CNAME, environment, and desired mapping) before submitting a Custom DNS Setup Request.

<img src="/images/learn/accelerate/content-hub/image-20250321-193856.png" alt=""/>

## Related Recies

<Row columns={2}>
  <Link title="Implementation Testing" link="/learn/accelerate/content-hub/final-steps/testing-and-qa/implementation-testing" />
  <Link title="Quality Assurance" link="/learn/accelerate/content-hub/final-steps/testing-and-qa/quality-assurance" />
  <Link title="Migration Guide" link="/learn/accelerate/content-hub/final-steps/migration-guide" /> 
  <Link title="Single-Sign On in Content Hub" link="/learn/accelerate/content-hub/implementation/functional-security/sso-on-content-hub" /> 
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Performance" link="https://doc.sitecore.com/ch/en/users/content-hub/performance.html" /> 
  <Link title="Set up the customer email sender" link="https://doc.sitecore.com/ch/en/users/content-hub/set-up-the-customer-email-sender.html" /> 
</Row>


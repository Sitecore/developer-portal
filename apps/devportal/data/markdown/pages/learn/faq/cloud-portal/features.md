---
product: ['cloud-portal']
title: 'Features'
hasInPageNav: true
cdpTags: ['cloud-portal']
---

## What are the features and benefits of the Sitecore Cloud Portal?

### Summary

Get self enrollment, but no ability to create new product instances. Be able to demo logging in and switching between assets that have been provisioned outside of the portal.

Features:

### Identity and Platform

- Auth0 Login
- Organization Create
- Organization Edit
- Complete Profile
- Edit Profile
- Enable App Switcher
- Associate tenants to an organization (manually)

### Infrastructure

- GitOps for Deploy
- Regression Testing Framework
- Domain and WAF
- UI Component Framework
- Fed UI base
- Logging

### Portal Experience

- Landing page with blown out app switcher content to start
- Top Bar Placeholder
- App Switcher in Top Bar
- Auditing Access to support sorting of switcher/ui

### XM Cloud

- Tenant API to suppoer App Switcher (what assets are deployed)
- GitOps flow / management from XM Cloud plans
- SSO into XM Cloud
- SSO into App Launcher (new window)
- SSO into Horizon (new window)

### CDP Embedded

- Provision a CDP dev + production instance per organization
- No SSO support

## Will I be able to see the current status of my billing in the Sitecore Cloud Portal?

With the initial release, you won't be able to review your billing status. For any usage and billing information, you need to follow up with your account or customer success manager. This is on our roadmap and will be working on exposing the billing information to the correct users in future releases.

## Can I manage my team members’ access in the Sitecore Cloud Portal or is that only done through Sitecore support?

Yes, if your organization's access role is an admin or owner. In the initial release only these two roles you will be able to invite and manage the team members' access within your organization. This is one of the main benefits of the initial release of Sitecore Cloud Portal, managing access and invitation to all apps and environments in the organization.

## Will you be able to have access to more than one Organization?

Yes, it is possible to have access to multiple Organizations with different levels of Roles. For example, as a Sitecore partner, you could be the Owner of your Organization and at the same time Admin or even just a User of other organizations as well.

## How does a User, regardless of his access level, have access to all their Tenants?

With just one step of Login verification, a User will be able to Switch between organizations using the App Switcher. Having the ability to work in one place, easily and seamlessly can jump to different Sitecore products/apps across different organizations while staying through a unified Sitecore ecosystem.

## Can I increase/decrease the level of access for a user or massively revoke/delete Users from an Organization?

In terms of access level, if you are the Owner, you can decrease the access level of a User to limit his access or even revoke it by deleting him. Nonetheless, our future roadmap will give the ability to enable/disable the MFA journey to all the team members under an Organization, to export Users and massively change their access level.

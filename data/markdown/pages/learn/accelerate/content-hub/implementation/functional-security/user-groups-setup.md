---
title: 'User Groups Setup'
description: 'Guidance on creating User Groups to manage permissions across Content Hub'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-12-13'
audience: 'all'
---
## Context
Defining user groups for Content Hub involves categorizing the users of the system based on their roles, goals, and interaction with the application. These groups should be distinct, reflecting different use cases and expertise levels. But the critical question lies on how many groups should be defined and how the permissions should vary across the user group.

## Execution
Content Hub allows creation of user groups to control the permissions of users within the platform. Each user would be linked with one or more user group. So, the creation of right user groups is critical during the implementation phase. The groups should not be that large in number that it over burdens the system and complicates assignment of user to user groups, while at the same time not that little that end-users don’t have enough privileges to perform their work inside the platform.

Ideally the structure of permissions in user roles should focus on roles & permissions that need to be made available for the users to perform their jobs efficiently within Content Hub. 

Although every organizations have their own user access structure, some of the common patterns observed across projects are summarized into the following table. Please note that this is not an exhaustive list and more user group setup might be needed to handle client specific logic.

| Organization User Group | Description | Responsibilities | Access Level | Common Tasks | Suggested Content Hub User Group |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| <strong>Administrators</strong> | Full control over the application, including global settings, permissions, and user management. | <ul><li>Configure system architecture and global settings.</li><li>Define roles and permissions.</li><li>Monitor security and performance. </li></ul> | <ul><li>Full system access. </li><li>Override permissions and manage restricted areas.</li></ul> | <ul><li>Creating custom roles. Setting data governance policies.</li><li> Reviewing audit logs.</li></ul> | Superusers (OOTB) |
| <strong>Content Managers</strong> | Oversee content/asset creation, approval, and publishing processes. | <ul><li>Approve and manage content.</li><li>Coordinate delivery timelines.</li><li>Maintain content standards.</li></ul> | <ul><li>Access to approval workflows and editing tools.</li><li>Limited admin permissions for templates.</li></ul> | <ul><li>Reviewing drafts.</li><li>Managing taxonomy.</li><li>Scheduling publications.</li></ul> | <ul><li>M.Builtin.ContentAdministrators (OOTB)</li><li>M.Builtin.Approvers (OOTB)</li><li>Custom user groups can also be create if specific logic is needed not covered by OOTB groups. </li></ul>|
| <strong>Asset Creators, Contributors, Uploaders</strong> | Create and submit content/asset for approval or publication.| <ul><li>Create and edit asset/content.</li><li>Collaborate with team members.</li><li>Submit content for approval.</li></ul>| <ul><li>Creation and editing rights.</li><li>No access to administrative settings.</li></ul>| <ul><li>Creating content.</li><li>Assigning metadata.</li><li>Submitting drafts. </li></ul>| <ul><li>M.Builtin.Creators (OOTB)</li><li>Custom user groups can also be create if specific logic is needed not covered by OOTB groups.  </li></ul>|
| <strong>Reviewer, Approvers</strong>| Review and approve content before publication.| <ul><li>Assess content for accuracy and standards.</li><li>Approve or reject submissions.</li><li>Provide feedback.</li></ul>| <ul><li>Review and comment rights.</li><li>No editing or admin rights.</li></ul>| <ul><li>Approving content.</li><li>Providing feedback.</li><li>Collaborating on revisions.</li></ul>| <ul><li>M.Builtin.Editors (OOTB)</li><li>Custom user groups can also be create if specific logic is needed not covered by OOTB groups.</li></ul>| 
| <strong>View-Only Users</strong> | View published content and analytics without editing permissions. | <ul><li>Access published content. </li><li>Consume reports and data.</li></ul> | <ul><li>Read-only permissions.</li><li>No editing, approving, or admin rights.</li></ul> | <ul><li>Viewing dashboards.</li><li>Consuming content.</li><li>Exporting data (if permitted).</li></ul> | <ul><li>M.Builtin.Guests (OOTB)</li><li>M.Builtin.Readers</li><li>(OOTB)</li><li>Custom user groups can also be create if specific logic is needed not covered by OOTB groups. </li></ul> | 
|<strong>Developers</strong>| Integrate, customize, or extend the platform using APIs or SDKs.| <ul><li>Build custom workflows.</li><li>Set up integrations.</li><li>Troubleshoot technical issues.</li></ul>| <ul><li>Access to APIs, SDKs, and logs.</li><li>No content or user management rights.</li></ul>| <ul><li>Setting up APIs.</li><li>Customizing templates.</li><li>Debugging performance issues.</li></ul>| <ul><li>Custom user groups should be created with access to APIs so that the users can perform their development work.</li></ul> |


## Insights
During definition of user groups along with the Rules defined on each entity in Content Hub, one should also focus on two main topics:
<ol>
  <li><strong>Member Security</strong> - Using schema to define entity definitions and user group member security, one can enable specific security settings within the member or member group of an entity definiton. The secured entity definition member group or members would become accessible to specific user groups through this setting. e.g. On M.Asset entity you can select a specific relation member and  turn the secured flag on in the advanced options. Now through member security you can grant the specific user group to Read or Write that member.</li>
  <li><strong>Privileges</strong> - Privileges constitute the highest tier of security rules within the system, providing authorized user groups with comprehensive access to critical administrative functions. These include the ability to view and modify system settings, manage the domain model, and configure the security model. This level of access ensures that privileged users can oversee and control the foundational aspects of the platform's operation and security framework. e.g. Using privileges one can grant users of a user group to impersonate other users in the system, clear cache of the system, reset other user’s password, publish collections so that people from outside Content Hub can also access them.</li>
</ol>

When designing an access model, structure user groups and their policies carefully. Use policies to grant access rights to pages, definitions, and settings, ensuring these are distinct from policies granting access to specific markets or taxonomies. Avoid mixing roles from different markets, divisions, or departments, and refrain from creating group-level permissions for individual users. Instead, configure group permissions based on shared responsibilities and assign users to groups aligned with their roles.

As an example, consider the following organization structure: 
<ul>
  <li>L1 marketing managers can create, edit, approve delete all global & local contents created by Agency or their own Marketers. </li>
  <li>L2 Marketer can also create, edit, approve, delete all global & local contents but only created by marketers and not the agencies. </li>
  <li>Similarly the L2 global agency have all privileges over agency created contents. </li>
  <li>In L3 level marketers and agencies can only access assets & content belonging to their local region.</li>
</ul>

<figure><img src="/images/learn/accelerate/content-hub/UserGroups-OrganizationalStructure-Example
.png" alt="Organizational Structure Example"/></figure>

In this world, the organization might grow in the future and expand over other countries, so the user groups should be constructed such that creation of new region should not result in creating a complex user group (lot of rules in the user group) but rather a simple user group with 1-2 rules. So, in this kind of situation we should create some base user groups which has common permissions for all local marketers or all local agencies. Additionally we would have a dedicated user group for each local region which has specific rules for assets that belong to their region and for the ones that don’t belong to their region.

For market-specific access, create policies that can be combined at the user group member level using the "Apply all" operator, which enforces all rules from combined policies. When a user belongs to multiple groups, policies can be applied independently or combined using operators like <strong>Any</strong> (permission granted if one group allows it) or <strong>All</strong> (permission granted only if all groups allow it).

So, continuing with out above example, a user who belongs to only the French Agency, should have the following combination of user group.

<figure><img src="/images/learn/accelerate/content-hub/1-AgencyFrance.png" alt="Organizational Structure Example"/></figure>
Similarly for a marketer in USA, the combination of user group can be as follows:

<figure><img src="/images/learn/accelerate/content-hub/2-AgencyFrance.png" alt="Organizational Structure Example"/></figure>

The advantage is when the same user moves to another region or takes more responsibility within the organization resulting in working for multiple regoins the assignment of additional user groups would be as simple as follows:

<figure><img src="/images/learn/accelerate/content-hub/3-AgencyFrance.png" alt="Organizational Structure Example"/></figure>

## Related Recipes

<Row columns={2}>
<Link title="Single-Sign On in Content Hub" link="/learn/accelerate/content-hub/implementation/functional-security/sso-on-content-hub" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Manage user groups in Content Hub" link="https://doc.sitecore.com/ch/en/users/content-hub/manage-user-groups-in-content-hub.html" />
  <Link title="User group policies" link="https://doc.sitecore.com/ch/en/users/content-hub/user-group-policies.html" />
  <Link title="Configure member security" link="https://doc.sitecore.com/ch/en/users/content-hub/configure-member-security.html" />
  <Link title="Configure authentication" link="https://doc.sitecore.com/ch/en/users/content-hub/security.html#configure-authentication" />
</Row>




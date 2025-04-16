---
title: 'Digital Rights Management'
description: 'Setting up Digital Rights Management can be configured in Content Hub.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect', 'Technical Implementer']
---

## Context
Digital Rights Management (DRM) is a way to control how assets are downloaded based on their intended use. This could be due to confidentiality agreements, copyright restrictions, or other legal reasons. It does not replace Content Hub’s security and permissions though - it simply prevents unauthorised downloads, not access to view assets.

## Execution
Within Content Hub, assets with usage restrictions can be linked to "rights profiles," which are then grouped under "contracts." Here's what each element means:

- **Contracts**: These contain details like the licensor, any specific restrictions, and even attached documents like the contract itself.
- **Rights Profiles**: Here's where you define usage rights. By default, this includes things like territory (geography), media (channel), and date. But you can customise it further for different usage types.

<figure><img src="/images/learn/accelerate/content-hub/drm-schema.png" alt="A diagram showing the DRM schema"/><figcaption></figcaption></figure>

When you want to download an asset with usage restrictions. You'll be prompted to specify how you plan to use it. If the intended use matches the existing rights profiles, you're good to go! But if not, you can request authorisation.

<figure><img src="/images/learn/accelerate/content-hub/drm-request-download.jpg" alt="A screenshot showing the request download form in Content Hub"/><figcaption></figcaption></figure>

There are two possible workflows for authorisation: mail or MRM. Which one is used depends on the `DrmConfiguration` setting.

### Mail Workflow
The mail workflow sends a notification email to designated DRM administrators when someone requests to download a restricted asset with a mismatched use case. The email details the asset, the requester, and the intended usage. Here's what the approver can do:
- **Approve**: Create a new rights profile matching the requested use using the provided link. Once completed, ask the user to resubmit their request for automatic approval.
- **Reject**: Reply to the email, informing the user of the decision.
- **Add a New Rights Profile**: If a suitable profile doesn't exist, navigate to the relevant contract (or create a new one) and create a new rights profile. Link the relevant assets to this profile. Then, let the user know to resubmit their download request.

<figure><img src="/images/learn/accelerate/content-hub/mail-workflow.png" alt="A diagram showing how the mail workflow functions."/><figcaption></figcaption></figure>

### Marketing Resource Management Workflow
The Marketing Resource Management (MRM) workflow, available with an MRM license, streamlines the DRM authorisation process. When a user requests to download a restricted asset, the following steps occur:

-** Request and Verification**: The user requests the download, specifying the intended usage. The system checks if the usage aligns with the asset's rights profile.
- **Task Creation and Notification**: If there's a mismatch, an authorisation request is generated. A new task is created in the Content Hub MRM system, and DRM administrators are notified.
- **Review and Decision**: Administrators review the request and decide to approve or decline the request.
- **Notification and Download**: The user receives a notification with the decision. If approved, a download link is provided.

<figure><img src="/images/learn/accelerate/content-hub/drm-request-in-mrm.jpg" alt="A screenshot showing the DRM request task in Content Hub MRM."/><figcaption></figcaption></figure>

The MRM workflow is particularly useful for organisations with complex DRM requirements or a large number of assets. The MRM workflow can be customised to fit their specific needs, such as defining multi-levels of approvals or introducing automated rules. It also means a detailed record of all requests, approvals, and denials is maintained for compliance and troubleshooting purposes.

<figure><img src="/images/learn/accelerate/content-hub/mrm-workflow.png" alt="A diagram showing how the MRM workflow functions."/><figcaption></figcaption></figure>

### Marketing Resource Management Workflow
Use the `DrmConfiguration` settings in the Admin area to control how DRM functions. See the *Insights* section for more details. And see the documentation sight for a full list of parameters.

## Insights
Digital Rights Management (DRM) in Sitecore Content Hub is a powerful tool for ensuring that assets are accessed and distributed in line with usage restrictions, safeguarding both legal and organisational requirements. By linking assets to rights profiles and grouping them under contracts, Content Hub provides a flexible framework for managing DRM, whether through manual approval workflows or the more streamlined MRM workflow for larger-scale implementations.

### Configuration
Several values in the DrmConfiguration settings control how DRM functions. Below are some key ones:

- `restrictedRenditions` – Specifies which renditions require DRM restrictions for download. Typically, the original file is restricted to prevent direct access to the source file. Some implementations exclude preview from this list, instead relying on user permissions to ensure that only watermarked versions are accessible.
- `disablePublicLinksWhenAssetIsRestricted` – When enabled, public links to assets with a rights profile are blocked. Since public links cannot determine intended usage, this setting prevents all public access to restricted assets, regardless of whether the use would be compliant.
- `showRestrictedAssetsInPublicCollections` – When disabled, assets with a rights profile are hidden from public collections. This works similarly to the `disablePublicLinksWhenAssetIsRestricted` setting but applies specifically to assets within public collections.
- `disableDrmInGateway` – Ensures that DRM does not apply to gateway links within Content Hub. Since gateway links are usually used internally, enabling this setting is generally safe. However, if integrations rely on gateway links, you must ensure they comply with DRM policies or set this to false. Review the [Distribution of Assets](/learn/accelerate/content-hub/implementation/configuration/distribution-of-assets) recipe for further information.
- `requestFlow` – Defines the authorisation workflow: Mail or MRM, as explained in the previous section.

### Security vs Ease of Use
It’s essential to configure the right settings in the DrmConfiguration to balance security and accessibility. Key settings, like `restrictedRenditions`, `disablePublicLinksWhenAssetIsRestricted`, and `disableDrmInGateway`, help maintain control over how and where assets are shared. Understanding these settings and workflows ensures that your DRM policies align with your organisational needs, whether you’re managing simple or complex requirements. This enables smoother asset distribution while remaining compliant with copyright, confidentiality, and other legal considerations.

## Related Recipes
<Row columns={2}>
  <Link title="Distribution of Assets" link="/learn/accelerate/content-hub/implementation/configuration/distribution-of-assets" />
</Row>


## Related Documentation
<Row columns={2}>
   <Link title="Digital rights management" link="http://doc.sitecore.com/ch/en/users/content-hub/digital-rights-management.html" />
   <Link title="Manage DRM contracts" link="https://doc.sitecore.com/ch/en/users/content-hub/manage-drm-contracts.html" />
   <Link title="Rights profiles" link="https://doc.sitecore.com/ch/en/users/content-hub/rights-profiles.html" />
   <Link title="Approve or reject DRM requests" link="https://doc.sitecore.com/ch/en/users/content-hub/approve-or-reject-drm-requests.html" />
   <Link title="Configure the DRM settings" link="https://doc.sitecore.com/ch/en/users/content-hub/configure-the-drm-settings.html#configure-the-drmconfiguration-setting" />
</Row>

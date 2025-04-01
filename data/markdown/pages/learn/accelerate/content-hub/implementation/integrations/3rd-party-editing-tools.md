---
title: 'Editing assets in 3rd-party tools'
description: 'A guide on editing in 3rd party tools, user journeys, and a walkthrough connecting Adobe Photoshop using CI HUB.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect', 'Technical Implementer']
---

## Context
Requirements might emerge for Sitecore Content Hub users to work with audio, image, and video assets in third-party editing tools, such as Adobe Photoshop, to enhance workflow efficiency and collaboration.

The [Sitecore Content Hub Digital Apps Connector](https://doc.sitecore.com/ch/en/users/content-hub/sitecore-content-hub-digital-apps-connector.html) uses [CI HUB](https://ci-hub.com/applications), an in-app connector to more than 57 leading DAM, PIM, CMS, Stock, cloud-storage, and work-management providers worldwide. This tool connects your Sitecore Content Hub instance to the creative service of your choice, such as Adobe Creative Cloud, Microsoft Office, Google Workspace, Figma, or Sketch.


## Execution
In a traditional workflow, users must manually download assets from Sitecore Content Hub, edit them in their preferred creative tool, and then re-upload them . This process is inefficient, time-consuming, and prone to versioning issues. By integrating CI HUB, users can streamline content editing and management, eliminating the need for manual downloads/uploads while ensuring version control and collaboration.

As an example workflow:
<ul>
<li>A designer working in Photoshop can access and edit assets directly in the app, eliminating the need to switch between platforms or manually download and upload files.</li>
<li>As the designer edits assets in Photoshop, changes are automatically updated, ensuring they’re working with the most current version of the asset.</li>
<li>The designer can search for and select Content Hub assets directly within Photoshop, Adobe, Microsoft, Google, Figma, or Sketch, without leaving the application.</li>
<li>Once the poster is updated, a marketing team member can access the same assets in PowerPoint through CI HUB, ensuring consistency across teams and platforms without the risk of outdated versions.</li>
</ul>

### Connecting Adobe Photoshop to Sitecore Content Hub via CI HUB

To be able to achieve this, CI HUB needs to be configured, starting with an [account setup](https://ci-hub.com/integration/sitecore) - see *Insights* for further detail. Once this is setup, a set of steps need to be followed in Sitecore Content Hub, and in this case Adobe Photoshop.

> Before starting, make sure you are logged in to Sitecore Content Hub.

1. Configure the OAuth Client in Content Hub by following the instructions in the [Configure Sitecore Content Hub documentation](https://doc.sitecore.com/ch/en/users/content-hub/configure-sitecore-content-hub.html).
2. Install the CI HUB Connector for Photoshop - open Adobe Photoshop, Go to *Plugins* > *Browse Plugins*. Search for *CI HUB Connector for Photoshop* and install it.

<figure><img src="/images/learn/accelerate/content-hub/CIHub-Browse.png" alt="Browse Plugins in Adobe Photoshop"/><figcaption></figcaption></figure>

3. Connect to Sitecore Content Hub - In Photoshop, go to *Plugins* > *Plugins Panel*. Locate and click *CI HUB Connector* to open the CI HUB panel. In the CI HUB panel, click *Add Connection*.

<figure><img src="/images/learn/accelerate/content-hub/CIHub-AddConnection.png" alt="Add Connection to CI HUB"/><figcaption></figcaption></figure>

Search for *Sitecore*, select it, and a new browser window will open.

<figure><img src="/images/learn/accelerate/content-hub/CIHub-AddSitecore.png" alt="Add Connection to CI HUB"/><figcaption></figcaption></figure>


In the browser, enter your *Content Hub URL* 

<figure><img src="/images/learn/accelerate/content-hub/CIHub-GrantConnection.png" alt="Login with Sitecore Credentials"/><figcaption></figcaption></figure>


*Grant* access to establish the connection.
<figure><img src="/images/learn/accelerate/content-hub/CIHub-GrantConnection2.png" alt="Grant Connection to Content Hub"/><figcaption></figcaption></figure>


4. Once connected, several folders will appear in the CI HUB panel: *Collections*, *Assets* and *Work in Progress* (*Project* assets will also be available if used).

<figure><img src="/images/learn/accelerate/content-hub/CIHub-Collection.png" alt="Folders in CI HUB"/><figcaption></figcaption></figure>


*Collections* contains *Collections* and assets within them. *Assets* has *Assets* that are in *‘approved’* state. *Work in Progress *lets you search for and access all your non-approved assets. The approval workflow is also implemented in the WIP folder: rejection reasons are visible and you can submit for approval directly from your Adobe application.

5. Select an asset and click *Use File* to open it in Photoshop.

<figure><img src="/images/learn/accelerate/content-hub/CIHub-Editting.png" alt="Editing in Photoshop"/><figcaption></figcaption></figure>


### Authentication & Permissions

Part of the setup, make sure that the users have the right access levels in Content Hub to browse, edit, and save assets.

| Role | Permission | Detail |
| ---- | --- | --- | 
| *Creators* | _Create and Submit_ | Permissions for assets, enabling them to upload and submit assets for review. |
| | _Update_ | Permissions for their own assets that are not yet approved. |
| | _Read_ | Access to the *Collections* page |
| | _Project role_ | Project specific roles if using *Project* functionality, based on setup |
| *Approvers* | _Approve_ | Permissions for assets under review, enabling them to approve or reject these assets. |
| | _Read_ and _CreateAnnotations_ | Permissions for assets. |
| | _Project role_ | Project specific roles if using *Project* functionality, based on setup |

See the [Security Best Practices](https://doc.sitecore.com/ch/en/users/content-hub/security.html) documentation for more detail.

## Insights

### CI HUB Account Setup
After registering for a CI-HUB account, it will automatically be set up with a trial license. If you purchase a subscription through Sitecore, please contact your Account Executive or Sitecore Partner Operations representative to designate a user as the license manager. Once assigned, the designated user must activate their account and can then grant licenses to other users.

The user guide can be downloaded from the [CI HUB site](https://ci-hub.com/support).

### Differences in User Journey
| Stage | Without CI HUB | With CI HUB |
| --- | --- | --- |
| Access Assets | Manually log in to Content Hub, search, and download files. | Search and access Content Hub assets directly from the creative tool. |
| Save, Edit & Upload | Save locally, edit, then manually upload to Content Hub. | Make changes and save, which syncs automatically with Content Hub. | 
| Approval Process - Submission | Manually log in to Content Hub, find your asset and submit for approval. | Submit your asset directly from your creative tool. |
| Approval Process - Rejection and Rework | Manually log in to Content Hub, search, and check the reason your asset approval request was denied. Then download and re-edit your asset.  | Rejection reasons are visible within your creative tool. |
| Version Control | Risk of outdated versions being uploaded. | Ensures real-time updates and version control. |

### Further recommendations

To ensure a smooth and efficient workflow, it is critical to follow the best practices below on using CI HUB within Content Hub. 

#### 1. Asset Linking & Syncing
<ul>
  <li>Users must work with linked assets rather than local copies to maintain version control.</li>
  <li>Always save assets back to Content Hub through CI HUB to prevent duplicate or outdated versions.</li>
  <li>Consider making use of [Draft Assets](https://doc.sitecore.com/ch/en/users/content-hub/create-a-draft-asset.html ) - these let you work on a duplicate asset without affecting the original until ready. Once approved, they replace the original asset.</li> 
</ul>

#### 2. File Naming & Metadata
<ul>
  <li>Ensure assets follow a consistent naming convention to make searching easier.</li>
  <li>Use metadata tagging in Content Hub to improve asset discoverability within creative tools.</li>
</ul>
#### 3. Version Control & Approval Process
<ul>
<li> Enable version tracking in Content Hub to avoid overwriting important assets.</li>
<li> Set up approval workflows to ensure only reviewed and approved assets are used in creative projects.</li>
</ul>

#### 4. Application-Specific Setup
<ul>
<li>Provide training and documentation on how to access Content Hub based on the tool of choice.</li>
</ul>

## Related Recipes

<Row columns={2}>
  <Link title="Distribution of Assets" link="/learn/accelerate/content-hub/implementation/configuration/distribution-of-assets" />
  <Link title="External Integrations" link="/learn/accelerate/content-hub/implementation/custom-logic/external-integrations" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Sitecore Content Hub Digital Apps Connector" link="https://doc.sitecore.com/ch/en/users/content-hub/sitecore-content-hub-digital-apps-connector.html" />
  <Link title="Configure Sitecore Content Hub" link="https://doc.sitecore.com/ch/en/users/content-hub/configure-sitecore-content-hub.html" />
  <Link title="Security" link="https://doc.sitecore.com/ch/en/users/content-hub/security.html" />
  <Link title="Create a draft asset" link="https://doc.sitecore.com/ch/en/users/content-hub/security.html" />
<Link title="Get started with projects and jobs" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/get-started-with-projects-and-jobs.html" />

  
</Row>

## Further Documentation

<Row columns={2}>
  <Link title="A quick introduction to Sitecore Content Hub Digital Apps Connector" link="https://web.ci-hub.com/academy-old/a-quick-introduction-to-sitecore-content-hub-digital-apps-connector" />
</Row>


---
product: ['xm-cloud']
title: 'Upgrades'
hasInPageNav: true
cdpTags: ['xm-cloud']
---
<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## Will Sitecore keep Sitecore XM Cloud up to date?

Sitecore will deliver XM Cloud as a cloud-native service, so all aspects of the platform will be kept up-to-date, secure, and performant by Sitecore. Additional details on the environment updates are available in the documentation: [SaaS Environment Updates](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-experience-manager-cloud.html#saas-environment-updates)

## Will upgrading my current XM/XP now to the latest version, prepare me for moving into the XM Cloud solution later?

By upgrading to Sitecore Experience Manager 10.2 now, you will be better positioned to transition to XM Cloud because XM Cloud will use a derivative of the 10.2 release. However, note that XM Cloud will only support a headless Experience Manager implementation using the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge. If your current XM/XP site is MVC-based, you will need to convert it to a JSS and Experience Edge-based implementation before it can be run in XM Cloud.  
Besides implementing XM as a headless CMS, you will also need to ensure that you are not using XM capabilities which will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes and use of Sitecore Forms. Sitecore Experience Manager 10.3 is coming soon, so definitely upgrading to 10.3 will be a better solution.

## Will XM Cloud’s automatic updates to Experience Manager break my Experience Manager customizations?

Sitecore anticipates two types of Experience Manager releases in the XM Cloud for those customers who opt into receiving automatic updates:

- Update releases
  - Includes new features and bug fixes
  - Will be non-breaking for customer Experience Manager implementations
  - Can automatically be deployed to customer projects by Sitecore
  - Releases may occur frequently
- Upgrade releases
  - Includes new features and bug fixes
  - May introduce changes to Experience Manager that require customer or partner intervention to modify customizations – Sitecore will introduce these types of changes as a last resort
  - Will require the customer to deploy the new Experience Manager release using the XM Cloud deployment tool when ready
  - Releases expected to occur infrequently

Sitecore’s goal with these releases is to ensure that customers and their implementation partners benefit from the latest version of Experience Manager as easily as possible.

Sitecore will notify customers and partners in advance of the releases whenever possible for planning purposes. Additional details on the environment updates are available in the documentation: [SaaS Environment Updates](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-experience-manager-cloud.html#saas-environment-updates)

## Will Data Exchange Framework be available?

Adoption and usage scenarios with XM Cloud and Data Exchange Framework are currently being evaluated.

---
product: ['xm-cloud']
title: 'Embedded Personalization and analytics'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## Does XM Cloud support personalization?

Pages is delivered with an embedded personalization capability which provides a fixed set of out-of-the-box page-based personalization capabilities. Embedded personalization will not include API access. Sitecore Personalize is required to be licensed in order to gain full customizability or integration capabilities through the API.

Features:

- Targeting experiences for all users to add personalization to page variations as you create them in Pages.
- Nuild each audience using a user-friendly interface to browse, select and combine out-of-the-box condition templates.
- Preview the content for each audience and view the logic applied in natural language.

## Is XM Cloud going to provide analytics?

Marketers want to be able to see analytics around their personalized content, which variants are being shown more than others or is there a difference in time on page for one variant compared to another? XM Cloud provides analytics through Pages embedded personalization.

## When using the embedded personalization approach, does that mean there is no access to the Sitecore Personalize/CDP (a.k.a. Boxever) SaaS interface at all for customers? Is the tenant provisioned, just not accessible?

Embedded personalization is bundled directly into XM Cloud and there is no direct access to the Personalize tenant (via app.boxever.com).  However, the tenant does exist behind the scenes though you cannot access it as a user through a web interface directly.  All the configuration of personalization is handled from within the XM Cloud interface.  The embedded personalization functionality will meet many basic needs, and when a team is ready to progress to more advanced functionality a Sitecore Personalize or Sitecore CDP product can be licensed to gain more features.

## What is the difference between embedded personalization vs Sitecore Personalize?

XM Cloud offers a base level of personalization to allow marketing teams to use some personalization and have the option to license Sitecore Personalize if they need additional capabilities. Embedded personalization and analytics are included with XM Cloud. The features included provide teams with core targeting experience functionality. Marketers can very easily target custom page variants per audience that they define.

Embedded personalization has a fixed set of conditions and you can put those conditions together. However, if you want to expand those conditions, marketing teams can license Sitecore Personalize and then have the ability to create additional conditions. This will then unlock all of the other types of personalization that Sitecore Personalize offers like flows and decision models and the rest of the Sitecore Personalize feature set.

## When it comes to the implementation of Sitecore CDP and Sitecore Personalize, would customers also be able to do the segmentation and the analytics out of Pages or is this only for the page based personalization that comes with XM Cloud?

The embedded personalization functionality that will be bundled with XM Cloud is really meant to be a starting point for customers around personalizing experiences. The initial functionality will be focused solely upon personalizing pages.

The principal capability within the embedded personalization service is the targeting experience. If customers are looking to have more control over segmentation rules for APIs or for direct ability to configure and tailor, they will want to purchase the full Sitecore Personalize solution.

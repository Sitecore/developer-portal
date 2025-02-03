---
title: 'Content Audit'
description: 'Content Audit is the backbone of any implementation of a web application'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-04-09'
---

## Context

You have an existing site (on XP or another CMS) that is populated with content, some or all of which will be migrated to the new XMC instance. How do you determine what to move as-is? What will require a rewrite/redesign? What will you delete, and what method will best facilitate the move? If the existing site is on XP, how do you determine the suitability of the existing data templates before planning any necessary redesign of the data model?

## Execution

The aim for customers and partners migrating to XM Cloud should always be to get as close as possible to how a new greenfield project would have been implemented. This will leave the customer in the best possible position to leverage the platform going forward.

What does this look like in practice? Regardless of where the customer is coming from, they should be looking to implement their new site on XM Cloud by building it out using SXA Headless.

For customers coming from existing Sitecore implementations, this will involve more work than just moving their existing content in their current structure. However, this ensures that they will be able to leverage the full XM Cloud feature set today, and be future proofed, ensuring they also have access to new features as they’re released.

As XM Cloud is a SaaS product, features are added and improved on a regular cadence – implementing with SXA Headless will ensure the customer's ongoing ability to leverage these changed and improved features.

### Headless SXA Features

When implementing Headless SXA you should ensure that you are familiar with the product and the features it provides. You can read more on our Documentation page covering [Using SXA Headless for XM Cloud development](https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-sxa-for-xm-cloud-development.html). There are, however, some key features that you should ensure you are leveraging to help the customer be successful when using XM Cloud; these are discussed below.

#### Page Designs and Partial Designs

When building out your layout you should leverage both Page Designs and Partial Designs as this will help you to achieve consistency through re-use across your different pages. You can learn more about these concepts by reading the pages on our Documentation site covering [Page Designs](https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-and-assign-a-page-design-in-the-experience-editor.html) and [Partial Designs](https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-and-change-a-partial-design.html).

#### Data Source Locations

When creating the rendering definitions for your different components, you should ensure that you’re configuring both local and site level locations. This will ensure that Content Editors can maintain a logical separation of content data. You can read more about this on our [documentation site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-sources.html).

#### Sitemap & Robots.txt

SXA Headless comes with out-of-the-box functionality to handle both Sitemap and Robots.txt creation. You should ensure that you are configuring this default functionality and not implementing a custom solution if it isn’t required. You can read more about these features on our documentation site pages covering how to [Configure a Sitemap](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html) and how to [Configure the Robots.txt](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-the-robots-txt-file.html) page.

## Insights

This section will primarily focus on customers migrating from Sitecore XM or XP to XM Cloud. In this we will discuss some of the Information Architecture patterns that were common in XM/XP, and whether they will still apply when building for XM Cloud.

### Content Migration

There is a Content migration tool that is provided by Sitecore for moving content between different instances of XM Cloud, and Sitecore XM or XP. This tool doesn’t restructure the data, and just moves it over in its existing hierarchy. If you have implemented on SXA then you might be able to leverage this tool for some of your content; however if you aren’t migrating from an existing SXA implementation then it most likely won’t be suitable for large portions of your data.

If you have a large amount of data, once you have defined your target Headless SXA compliant structure, then you might want to investigate automating the migration of your content. This could be achieved by writing a standalone application that utilizes the [Sitecore Item API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-item-api.html), or by leveraging [Sitecore PowerShell](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-item-api.html).

### XM Features

There are a series of features that were leveraged in Sitecore XM and XP related to information architecture, some of which are supported in XM Cloud, and others which should be approached in a different manner. Some of the more commonly seen ones are discussed below:

#### Item Buckets

Item Buckets in Sitecore XM and XP were a method used to automatically organize large amounts of content items into a structured hierarchical format. They are supported in XM Cloud and can be successfully published to Edge. However, the new XM Cloud UIs in Pages don’t currently support them as completely as in Sitecore XM or XP. It is also not possible to create custom bucket structures without deploying custom C# code to the CM, which isn’t a recommended practice. You will need to decide whether the default bucket implementation is satisfactory, and this will help you to decide whether to leverage this feature or not.

#### Redirects

Some customers want to configure content managed Redirects, allowing different URLs to be forwarded to different content as their requirements change. For more information on the best ways to achieve this you can view the redirect Redirects Accelerate Recipe (coming soon).

#### Custom Item Data Providers

Customer Item Data Providers were a common tool in Sitecore XM and XP to pull content from an external third-party source and have it displayed as items in the content tree. It is not recommended to implement these in XM Cloud, as it is no longer recommended to customize the Authoring experience. You should approach third-party data differently when working headlessly. Instead of integrating in the authoring environment the head should pull down this data directly and then display it the user.

#### Item Security

In Sitecore XM and XP, Item Security was defined using the in-built security model and defined on the content items. The \_\_Security field is not published to Experience Edge, so this approach is no longer valid. When working headlessly you should integrate your head with a Federated Security provider and handle authentication there. If you need to role-level access to different content items, you will need to implement this via a custom set of fields that will be published to Edge, and then ensure that your head application maintains access. You can also read more about this on the dedicated [Head Application Security](https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/security/head-application-security).

Item security can still be applied for usage during the content editing process. This can be useful to control which actions certain content authors can perform. You can read more about this on the [documentation site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/user-security.html), and on the Item Security Accelerate Recipe (coming soon).

#### Workflow

While workflow is still managed on the Content Items in Sitecore XM Cloud, there are some differences to how this is approached when compared to Sitecore XM and XP. For a detailed overview of these differences, please refer to the dedicated Accelerate Workflow Recipe (coming soon).

#### Experience Editor Customizations

In Sitecore XM and XP it was common to customize the Experience Editor by creating custom Ribbons and Buttons by adding items to the Core Database. This is no longer supported in XM Cloud.

#### Custom Field Types

Some customers using Sitecore XM or XP would create custom field types to match specific functionality they require. Custom Field Types are not supported by XM Cloud. If you have customized your existing solution in this way, you will need to find an alternate way to implement this functionality using the provided field types.

#### Media Library Items

In XM Cloud, items stored in the Media Library are served by Sitecore Experience Edge, just as with content. There are a couple of differences here when compared with working with Sitecore XM and XP. You can read more about this on our [documentation site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions-of-experience-edge-for-xm.html). A couple of key differences for XM Cloud are:

- There is a 50 MB limit on assets served via Experience Edge. If you need to serve files larger than this then you will need to look into an alternative hosting source (for example, a DAM like [Sitecore Content Hub](https://developers.sitecore.com/dam-and-content-operations/dam) or Blob Storage).
- Media paths in Experience Edge are case-sensitive – you will need to ensure that you reference assets served via Edge in this manner.

#### Custom Desktop Applications

Some customers implementing on Sitecore XM or XP would create custom Desktop Applications hosted by configuring items in the Core DB. As mentioned above this is no longer supported and you will need to find another location to host this functionality.

#### User-Generated Content (UGC)

Some customers would store User Generated Content (UGC) in the content tree upon creation. This is not a recommended practice. If you need to store UGC data, it is recommended to have your head push this data to a third-party data storage service.

#### Events

In Sitecore XM and XP it was common to leverage events when certain actions were performed within the content tree, e.g. Save event and Publish events. In XM Cloud it is recommended to leverage the Webhooks model to perform integrations like this, pushing the logic outside of the authoring instance. You can read more about Webhooks in XM Cloud on our [documentation site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhooks.html).

## Related Recipes

<Row columns={2}>
<Link title="Head Application Security" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/security/head-application-security" />
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

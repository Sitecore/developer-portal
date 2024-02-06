---
product: ['xm-cloud']
title: 'Sitecore Experience Accelerator – SXA'
hasInPageNav: true
cdpTags: ['xm-cloud']
---
<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## How will SXA be supported on XM Cloud since there is no Content Delivery server?

Sitecore XM Cloud has improved support for Headless SXA tenants since the Content Delivery servers will not be available. The improved SXA will be bundled as part of XM Cloud.

## Can customers use Headless SXA on Sitecore XM. If it supports Sitecore XM + Managed cloud, is there an upgrade path using Headless SXA? What version of Headless SXA is supported?

Yes, there is a supported upgrade path for Headless SXA. Headless SXA will be supported with Sitecore XM/XP 10.3, which is due near the end of the last quarter of 2022.

## Will JSS give us a similar component library and rendering variants like SXA?

Sitecore intends to deliver new components for headless implementations with the release of Headless SXA. The final list of new SXA components that will be compatible with headless implementations is still in development, and the objective for the new components will be to support the common scenarios with the ability to easily create additional flexible components supporting rich layout options alongside variants and grids.

With the current Sitecore XM 10.2 release, customers can base their headless components on the JSS Sample components as a starting point.

## Will XM Cloud support existing MVC/SXA solutions?

XM Cloud does not have Content Delivery servers therefore it will not support the rendering of MVC/SXA solutions. Sitecore provides a migration path for developers seeking to convert their Sitecore MVC applications to statically generated websites using Headless Services and Experience Edge. Once the migration is completed, developers can convert components from MVC to headless incrementally.

More information about converting MVC applications to a Jamstack architecture can be found on the [documentation site](https://doc.sitecore.com/xp/en/developers/hd/190/sitecore-headless-development/converting-existing-sitecore-mvc-applications-to-the-jamstack-architecture-with-headless-rendering.html). There are limitations when using SSG for MVC solutions. The current list of [limitations](https://doc.sitecore.com/xp/en/developers/hd/190/sitecore-headless-development/limitations-and-workarounds-for-static-generation-of-mvc-apps-with-jss.html) is published on the documentation site. Please note that this list should not be considered final.

## Will SXA be supported in the XM Cloud solution?

SXA will be supported with XM Cloud in an enhanced form. Customers will be able to continue using SXA’s site scaffolding capabilities as it exists today, but because XM Cloud will not support Content Delivery (CD) servers, SXA components will be refactored to support modern frontend frameworks, beginning with Next.js.

## Is SXA portable from XM to XM Cloud?

Existing SXA implementations moving to XM Cloud can be thought of in two parts. One part of SXA is the site scaffolding, site data template and site management aspects. Those are portable. The second part is the components and the renderings. The existing MVC-based renderings are not applicable to XM Cloud. They must be rewritten for a headless delivery, such as Next.js.

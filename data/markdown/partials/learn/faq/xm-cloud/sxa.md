---
title: 'Sitecore Experience Accelerator – SXA'
hasInPageNav: true
---

**How will SXA be supported on XM Cloud since there is no Content Delivery server?**  
We improved support for Headless SXA tenants since the Content Delivery servers will not be available. The improved SXA will be bundled as part of XM Cloud following its initial launch.

**Can customer use Headless SXA on XM. If it supports XM + Managed cloud, we can talk upgrade path using Headless SXA? What version of Headless SXA supports?**  
Yes, we support that. Headless SXA will be supported with XM/XP 10.3, which is due in mid/late Q2 FY23.

**Will JSS give us a similar component library and rendering variants like SXA?**  
Sitecore intends to deliver new components for headless implementations with the release of SXA for Experience Manager. The final list of new SXA components that will be compatible with headless implementations is still in development, and the objective for the new components will be to support the common scenarios with the ability to easily create additional flexible components supporting rich layout options alongside variants and grids.  
With the current Experience Manager 10.2 release, customers can base their headless components on the JSS Sample components as a starting point.

**Will XM Cloud support existing MVC/SXA solutions?**  
XM Cloud does not have Content Delivery servers therefore it will not support the rendering of MVC/SXA solutions. Sitecore provides a migration path for developers seeking to convert their Sitecore MVC applications to statically generated websites using Headless Services and Experience Edge. Once the migration is completed, developers can convert components from MVC to headless incrementally.  
For more guidance on how to convert your projects, please refer to the documentation here.

**Will SXA be supported in the XM Cloud solution?**  
SXA will be supported with XM Cloud in an enhanced form. Customers will be able to continue using SXA’s site scaffolding capabilities as it exists today, but because XM Cloud will not support Content Delivery (CD) servers, SXA components will be refactored to support modern frontend frameworks, beginning with Next.js.

**Is SXA portable from XM to XM Cloud?**  
Existing SXA implementations moving to XM Cloud, can be thought of in two parts. There's one part of SXA that is the site scaffolding, site data template and site management aspects. Those are portable. The second part is the components and the renderings. The existing MVC based renderings are not applicable to XM Cloud. They have to be rewritten for a headless next JS.

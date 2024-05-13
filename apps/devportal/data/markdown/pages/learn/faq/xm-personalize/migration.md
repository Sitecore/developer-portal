---
product: ['xm', 'personalize']
title: 'XM Cloud specifics Migration'
hasSubPageNav: true
hasInPageNav: true
cdpTags: ['xm', 'personalize']
---

### How does the migration from XMP (XM on Managed Cloud) to XM Cloud look? Is it seamless?\*\*

The actual process of moving an XM + Personalize customer from Managed Cloud to XM Cloud is still being determined. However, it is important to note that the XM + Personalize implementation will need to employ Experience Manager as a headless CMS, using the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, and utilizing a Jamstack framework or .NET Core to build the client application, before it can be a candidate for XM Cloud. Sitecore recommends using Next.js as the Jamstack framework because of its flexibility in supporting Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Server-Side Rendering (SSR). If customers want to implement a .NET Core, React, Angular, or Vue.js client application, they will need to host a separate rendering host instance themselves - the rendering host will not be available through XM Cloud. This separate rendering host is not required by Next.js. Besides implementing XM as a headless CMS, customers will need to ensure that they are not using XM capabilities that will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes and use of Sitecore Forms.

### Will JSS give us a similar component library and rendering variants like SXA?

As of Sitecore XP 10.3, a headless version of SXA is now available for use in headless implementations. It is recommended to use these new headless variants in order to best align on a path towards XM Cloud in the future.

### Can I move my current MVC-based Experience Manager solution into XM Cloud?

Sitecore Experience Manager Cloud is optimized to run Experience Manager as a headless CMS with the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, with a Jamstack framework or .NET Core client application. Sitecore Experience Manager Cloud will not support Content Delivery (CD) servers so current MVC solutions will need to be converted to a JSS implementation where the web solution gets content and layout data from Experience Edge before it can be run in Experience Manager Cloud. Alternatively, customers can host their MVC solutions in Sitecore Managed Cloud, which will continue to support MVC-based solutions into the future. Besides implementing XM as a headless CMS, you will also need to ensure that you are not using XM capabilities which will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes and use of Sitecore Forms.

### What is required to upgrade my current MVC solution so it can run in the XM Cloud environment?

Customers with existing MVC solutions who want to move to XM Cloud will first need to refactor and rebuild their current MVC solution as a Jamstack framework or a .NET Core solution. Experience Manager Cloud only supports headless Experience Manager implementations using the Sitecore JavaScript Rendering SDK (JSS), Sitecore Experience Edge, and a Jamstack framework or .NET Core client application. The process of refactoring applies to the MVC solution&#39;s backend:

- With JSS, customers will be able to reuse their Sitecore data source, setting, and folder templates from their existing MVC solution.
- Page templates will need to be modified to use JSS layouts and renderings, and to inherit from the JSS route template.
- MVC View and Controller renderings, and any object-relational mapping (ORM), should be removed as they are not applicable for JSS.
- MVC renderings will need to be converted to JSS renderings.

In parallel to the backend being refactored, the frontend solution will need to be rebuilt, preferably using a Jamstack framework such as Next.js. Sitecore recommends Next.js because of its flexibility with support for static site generation (SSG), server-side rendering (SSR), and incremental static regeneration (ISR). Customers can implement a .NET Core, React, Angular, or Vue.js client solution as well, but they will need to host a separate rendering host instance themselves - the rendering host will not be available through XM Cloud. This separate rendering host is not required by Next.js as Next.js includes the rendering host capability as part of its run-time. Once the backend refactoring and the frontend rebuild are done, content and layout will be published to Experience Edge for consumption by the frontend solution using the Edge GraphQL endpoints.

## Will upgrading my current XM/XP now to the latest version, prepare me for moving into the XM Cloud solution later?

By upgrading to a more recent version of Sitecore XM/XP, you will be better positioned for building in place as part of a gradual migration to Experience Manager Cloud (XM Cloud). However, note that XM Cloud will only support a headless Experience Manager implementation using the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge. If your current XM/XP site is MVC-based, you will need to convert it to a JSS and Experience Edge-based implementation before it can be run in Experience Manager Cloud. Besides implementing XM as a headless CMS, you will also need to ensure that you are not using XM capabilities which will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes and use of Sitecore Forms.

If your scenario involves a major rebuild of your front-end design or application, it is usually recommended to build the new version directly against XM Cloud if possible. This avoids the step of an upgrade and brings you straight to the target environment.

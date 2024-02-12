---
product: ['xm-cloud']
title: 'Developer Experience'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

### What does Embedded Personalization mean for developers and technicians?

Developers benefit from XM Cloud’s self-service tools for rapidly deploying Experience Manager’s Content Management instance along with their own customizations. With the modern headless CMS, the content management backend is decoupled from the front-end presentation and delivery capabilities allowing the use of popular front-end frameworks to rapidly build new digital experiences.

For XM Cloud embedded personalization, Sitecore introduces a new Sitecore Cloud SDK Engage module - [Sitecore Engage SDK](https://www.npmjs.com/package/@sitecore/engage). Sitecore also enhanced JSS for Next JS by including a middleware for personalization – The [Next.js Personalize add-on](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-next-js-personalize-add-on.html) - beside a component to enable collection of view events and personalization. Developers can have this functionality out of the box by using reference example for XM Cloud – XM Cloud Introduction – which includes built in Sitecore Engage SDK and JSS enhancement. Or developers can create their own NEXT.JS Rendering Host using Initializer.

For more information on developer experience for XM Cloud Personalization, check Analytics, Sitecore Cloud SDK with Engage ,modules, how to configure your Next.js rendering host to capture view events and trigger personalization on [Sitecore Developer portal](https://developers.sitecore.com/learn/getting-started/xm-cloud-introduction). You can additionally check Dylan Young’s video:

<YouTube youTubeId="PL1jJVFm_lGnzqYagW1UahIBeqTIYSBQMc" isPlayList={true} playlistCoverId="LdxNRo22Vf8" />

### What will the developer experience be with XM Cloud Embedded Personalization?

The adoption of XM Cloud allows Sitecore developers to work in their local environments and build the Content Management implementation. Using the Sitecore CLI, developers can run a local Docker environment provided by Sitecore that replicates the environment and the build deployment steps used by XM Cloud. The CLI will download the base Experience Manager Docker image from the Sitecore container repository and layer the developer’s project files on top. The complete Sitecore installation is automated and provisions within a matter of minutes.

Once developers are ready to deploy their implementation to the Cloud, they use the CLI to create new XM Cloud instances that layer the files from their Git repository on top of a vanilla Experience Manager instance. Using provided integrations with popular Git providers, or from a codebase in their own CI/CD pipelines using the Sitecore CLI.

### Do customers need to work on Vercel/Next JS to enable on-edge personalization? Or does Sitecore Pages personalization support other SSG technologies such as React, Angular, Vue, NextJS?

For XM Cloud, the content delivery is provided by publishing to [Experience Edge](https://doc.sitecore.com/xp/en/developers/hd/210/sitecore-headless-development/sitecore-experience-edge-for-xm.html). Edge delivers content and design information headlessly through the GraphQL endpoint and can be consumed by any head technology such as Next.js, ASP.NET core, Angular, Vue or React.

Sitecore XM Cloud Embedded Personalization initial release focuses on Next.js and can automate the process of provisioning or creating Vercel account for clients and connect front-end solution.

All tracking from the client app will be done with the new [Sitecore Engage SDK](https://www.npmjs.com/package/@sitecore/engage) (which is framework agnostic). Our [Next.js Personalize add-on](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-next-js-personalize-add-on.html) for JSS utilizes this library.

### How is geo-location personalization supported in XM Cloud?

Sitecore’s JSS [Next.js Personalize add-on](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-next-js-personalize-add-on.html) will automatically insert the [Sitecore Engage SDK](https://www.npmjs.com/package/@sitecore/engage) into the rendered page. The SDK will send page-view events directly to Sitecore CDP which will detect the browser's IP address and convert this location values (e.g., country, region, city) for use in Embedded Personalization. Subsequent requests through Sitecore’s JSS Next.js Personalize Middleware will then use this geo-location data for personalization.

### If I have a .NET Core Rendering Host, how do I capture events and handle personalization?

XM Cloud Embedded Personalization is not currently supported .NET Core rendering SDK, but you could technically capture page view events using the [Sitecore Engage SDK](https://www.npmjs.com/package/@sitecore/engage) directly. For customers using the .NET Core Rendering SDK they would have to implement their own middleware for the CDP integration as this time.

### Is it possible to do component-level personalization?

No. Personalization is applied at the page level, where a variant of the page gets assigned to a specified audience. Within that page variant, the user can choose to only personalize one component and leave the rest as default.

### Is there a limit on the number of page variants per page?

Yes, 8. You can only have eight variants per page.

### Is there a limit on the number of conditions per page variant?

Yes, 5, you can only have five conditions per page variant.

### Are there APIs available to manage aspects of the Embedded Personalize tenant, such as Site Identifier or Variants?

No, you will need to license Sitecore Personalize to get access to these APIs.

### How do I define the same Point of Sale Site Identifier to multiple websites in XM Cloud

Please refer to the documented steps at: https://doc.sitecore.com/xmc/en/users/xm-cloud/create-websites-with-xm-cloud-dashboard.html

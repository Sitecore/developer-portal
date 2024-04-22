---
product: ['xm-cloud']
title: 'Development'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## What will the developer experience be with XM Cloud?

The adoption of XM Cloud allows Sitecore developers to continue working in the manner to which they are accustomed -- developers can work in their local environments to build the Content Management implementation. Using the Sitecore CLI, developers can run a local Docker environment provided by Sitecore that replicates the environment and the build deployment steps used by XM Cloud. The CLI will download the base Experience Manager Docker image from the Sitecore container repository and layer the developer’s project files on top. The complete Sitecore installation is automated and provisions within a matter of minutes.

Once developers are ready to deploy their implementation to the Cloud, they use the CLI to create new XM Cloud instances that layer the files from their Git repository on top of a vanilla Experience Manager instance. Using provided integrations with popular Git providers, starting with GitHub in the initial release, developers will be able to automatically create new builds when there are updates to the Git repositories.

Alternatively, developers will be able to trigger the creation and deployment of new environments from a codebase in their own CI/CD pipelines using the Sitecore CLI.

## We have Sitecore and UI developers. How do we get them setup?

The first prerequisites are that every Developer should register at https://portal.sitecorecloud.io and, ideally, be added to an Organization. You can watch [Setup your first Headless SXA Site in XM Cloud](https://www.youtube.com/watch?v=zot3G52F2ts) for a walkthrough.

Sitecore recommends starting from one of the existing Sitecore starter kits. These starter kits provide all the configuration to get up and running easily. If starting your own project from scratch, it is recommended to use [Headless SXA](https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-sxa-for-xm-cloud-development.html) and [JSS](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-javascript-rendering-sdks--jss-.html).

For developers there are two ways suggested to interact with XM Cloud and implement customer requirements. Developers can either build using “Edge Mode” or using XM Cloud “fully local”.

![Development Modes with XM Cloud](https://sitecorecontenthub.stylelabs.cloud/api/public/content/9524666e7b5e4d68aead7e49f7906dad?v=572dc6a3)

### Edge Mode

When using Edge Mode, you setup a local node server to run your JavaScript-based rendering app. This app will connect to the GraphQL endpoint of the Edge delivery layer included in XM Cloud. For more details you can watch the [Frontend Developer Setup for XM Cloud in 5 minutes](https://www.youtube.com/watch?v=Kig3kWZ8FuQ).

This is the most lightweight setup that allows developers to focus on the rendering app and the frontend development. You can still deploy to XM Cloud and serialize items using Sitecore Content Serialization (SCS). However, as you might work on a XM Cloud environment shared with other developers, it might become more complex to select the required serialized items that should be packaged with your feature development.

As you only require a local node server this also works on a Mac. All the necessary files and configurations for Edge Mode can be found in the starter kits.

**Prerequisite:** For this setup you need an Environment in XM Cloud and therefore a Subscription / Organization.

### Local Windows Containers (“Fully local”):

When you want to model content, or customize the Content Management (CM) instance independently, you would want to go for a fully local setup. For this approach you spin up XM Cloud locally using Docker containers. The containers will include a CM, Solr (for internal content search), SQL Server, Traefik and an editing host to run your application. Your editing or rendering host will connect to the GraphQL endpoint of the CM instance which offers the same API as Edge. Please check the readme file of the repository that get's created when you create a Project using the XM Cloud Deploy App. Note that if you are using Windows 10 you might want to check .env file to pull docker images for the 1809 version. Also you need to make sure that iis is stopped on your localhost as Traefik might conflict. You can find a description on how to setup your local environment in the video [Setup XM Cloud locally using Docker and start developing](https://www.youtube.com/watch?v=sVLM1g3Xi-U).

This is a typical setup for Backend Developers.

**Prerequisite:** For this setup you need a registered user (not necessarily with an Organization) and a valid Sitecore license file.

If you decide to work with a rendering application that is not JavaScript based, such as ASP.NET Core, you can configure your .Net Core rendering host as the editing host. This is described by Rob Earlam [here](https://robearlam.com/blog/setting-up-an-external-xm-cloud-rendering-host-to-work-with-experience-editor-and-pages)

Sitecore recommends using JSS and Headless SXA, which come as part of the XM Cloud offering.

More information about XM Cloud can be found [here](https://developers.sitecore.com/content-management/xm-cloud)
Please check also the [XM Cloud Documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html)

## What is the recommended approach for new Sitecore implementations today (Headless, MVC, SXA) to upgrade to XM Cloud?

To ensure the easy adoption of XM Cloud upon release, Sitecore recommends that new customer implementations use an instance of the latest publicly available version of Sitecore Experience Manager that has SXA installed (including headless tenants) and uses Experience Edge and Next.js for the delivery. In absence of an actual Experience Edge, the Edge Preview Schema on the delivery server can be used

Sitecore also recommends as best practices:

- Using the Sitecore CLI and/or Sitecore for Visual Studio for item serialization
- Avoiding dependencies on any tooling beyond MS Build for your Visual Studio solution (e.g. Gulp or Cake or PowerShell)
- Limiting customization to the Content Manager role
- Using out-of-process API-based integration as much as possible
- Using Docker for local development

## What will be the migration path from Experience Manager self-hosted to XM Cloud?

Sitecore will provide a migration guide for customers moving from self-hosted Experience Manager to XM Cloud. Our intention is that customers following the guidelines in the previous question will have the smoothest migration path. Clarification coming after Sitecore Symposium 2022.

## What options are there for content migration from earlier Sitecore versions?

Sitecore Content Serialization can be used for the migration of content. Sitecore is also looking to support Razl for migrating content from earlier versions.

## Will Sitecore PowerShell Extensions (SPE) be supported?

SXA and SPE will be included by default, so existing and new SPE scripts are supported.

## Can I deploy my existing implementations into XM cloud?

It depends. If you have all the prerequisites met (you're following a headless architecture, you're using the latest solution of our tooling) then the answer will be very likely. If you are running a solution on an older version of Sitecore and you have a lot of XP-like platform solutions, or you're relying on dependencies from XP and you have CD servers, then there's going to be a fair amount of refactoring or at least a bit of refactoring, that you will need to do in order to allow it to run on XM Cloud again. XM Cloud is very focused on headless architecture.

## For customers moving from XP to XM Cloud, how is content moved?

Sitecore content serialization has tooling available and you can use our Sitecore CLI to take existing serialized content and move it directly into XM Cloud. The YAML serialization is compatible with Sitecore XM and also Unicorn, so if content is formatted in the right way then it is easily portable to XM Cloud. Additionally, Sitecore provides Razl, which has been tested, which is a content migration tool that is also built on serialization and works with XM Cloud as well. If a customer would like a more visual way of picking and choosing which content gets moved, they can install Razl, but Razl does require a license. A customer can install Razl, connect to their existing Sitecore XM instance, and then also connect it to their XM Cloud instance. At this point, the developer will have a source and a destination and can move content using Razl. A customer or a partner can perform that function.

## How is Vercel working, with the provisioning process around automation and the on-boarding on a Vercel tenant?

Sitecore has included automation so that teams with existing Vercel accounts could automate the deployment to Vercel for their existing account. If a customer does not have a Vercel account, it is possible to automate the process of provisioning or creating a Vercel account and then connecting their front-end solution to the Sitecore solution.

Please note that XM Cloud does not require Vercel or Next.js. Sitecore fully embraces React, Angular, Vue, NextJS, and whatever front-end technology stack that a development team will use.

## How does the migration from XMP (XM with Personalize on Managed Cloud) to XM Cloud look? Is it seamless?

The actual process of moving a Sitecore XM + Personalize customer from Managed Cloud to XM Cloud is still being determined.   
However, it is important to note that the XM + Personalize implementation will need to employ Experience Manager as a headless CMS, using the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, and utilizing a Jamstack framework or .NET Core to build the client application, before it can be a candidate for XM Cloud.

Sitecore recommends using Next.js as the Jamstack framework because of its flexibility in supporting Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Server-Side Rendering (SSR). If customers want to implement a .NET Core, React, Angular, or Vue.js client application, they will need to host a separate rendering host instance themselves - the rendering host will not be available through XM Cloud. This separate rendering host is not required by Next.js.

Besides implementing Sitecore XM as a headless CMS, customers will need to ensure that they are not using Sitecore XM capabilities that will not be available with Sitecore XM Cloud. Some examples of these capabilities are custom Solr indexes and the use of Sitecore Forms.

## How is content author page orchestration supported?

Page orchestration is supported using JavaScript frameworks, with the initial release of XM Cloud targeting Next.js support.

## Should current Sitecore implementations walk away from MVC and fully embrace Headless and Jamstack architecture? Or will the MVC SSG be a viable and equally recommended option?

Sitecore’s focus for the Composable DXP is on supporting headless solutions. Sitecore will provide a “bridge” function that allows SSG for MVC renderings, with some limitations, so that existing customers have a migration path.

More information about converting MVC applications to a Jamstack architecture can be found on the [documentation site](https://doc.sitecore.com/xp/en/developers/hd/190/sitecore-headless-development/converting-existing-sitecore-mvc-applications-to-the-jamstack-architecture-with-headless-rendering.html). There are limitations when using SSG for MVC solutions. The current list of [limitations](https://doc.sitecore.com/xp/en/developers/hd/190/sitecore-headless-development/limitations-and-workarounds-for-static-generation-of-mvc-apps-with-jss.html) is published on the documentation site. Please note that this list should not be considered final.

## Will the existing geo-location services be maintained or will they be replaced with another feature?

With a headless CMS implementation, the geolocation service will now need to be supported by front-end services provided by various vendors. For example, if the customer uses a popular CDN, CDN vendors like Cloudflare, Akamai, etc include geolocation as part of their service. Alternatively, front-end hosting providers like Vercel or Netlify also provide geolocation. The service will not be provided by Sitecore since with a headless CMS approach, XM Cloud will never see the initial request from the visitor, so XM Cloud will not be able to determine the visitor's location.

## How to move my current MVC-based Experience Manager solution into XM Cloud?

Sitecore XM Cloud is optimized to run Experience Manager as a headless CMS with the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, with a Jamstack framework or .NET Core client application. Sitecore XM Cloud will not support Content Delivery (CD) servers so current MVC solutions will need to be converted to a JSS implementation where the web solution gets content and layout data from Experience Edge before it can be run in XM Cloud. Alternatively, customers can host their MVC solutions in Sitecore Managed Cloud, which will continue to support MVC-based solutions into the future.

Besides implementing Sitecore XM as a headless CMS, you will also need to ensure that you are not using Sitecore XM capabilities which will not be available with Sitecore XM Cloud. Some examples of these capabilities are custom Solr indexes and the use of Sitecore Forms.

## What is required to upgrade the current MVC solution so it can run in the XM Cloud environment?

Customers with existing MVC solutions who want to move to Sitecore XM Cloud will first need to refactor and rebuild their current MVC solution as a Jamstack framework or a .NET Core solution. Sitecore XM Cloud will only support headless Experience Manager implementations using the Sitecore JavaScript Rendering SDK (JSS), Sitecore Experience Edge, and a Jamstack framework or .NET Core client application.

The process of refactoring applies to the MVC solution’s backend:

- With JSS, customers will be able to reuse their Sitecore datasource, setting, and folder templates from their existing MVC solution.
- Page templates will need to be modified to use JSS layouts and renderings, and to inherit from the JSS route template.
- MVC View and Controller renderings, and any object-relational mapping (ORM), should be removed as they are not applicable for JSS.
- MVC renderings will need to be converted to JSS renderings.

In parallel to the backend being refactored, the frontend solution will need to be rebuilt, preferably using a Jamstack framework such as Next.js. Sitecore recommends Next.js because of its flexibility with support for static site generation (SSG), server-side rendering (SSR), and incremental static regeneration (ISR).

Customers can implement a .NET Core, React, Angular, or Vue.js client solution as well, but they will need to host a separate rendering host instance themselves - the rendering host will not be available through XM Cloud. This separate rendering host is not required by Next.js as Next.js includes the rendering host capability as part of its run-time.

Once the backend refactoring and the frontend rebuild are done, content and layout will be published to Experience Edge for consumption by the frontend solution using the Edge GraphQL endpoints.

## Will having an implementation approach with JSS and Next.js ensure that my application will not require further changes when moving into XM Cloud?

If you pursue a headless Sitecore Experience Manager 10.2 implementation using the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, and using Next.js for the client application, that will be the bulk of the work to move your Experience Manager implementation to XM Cloud.

However, besides implementing Sitecore XM as a headless CMS, you will also need to ensure that you are not using Sitecore XM capabilities which will not be available with Sitecore XM Cloud. Some examples of these capabilities are custom Solr indexes and the use of Sitecore Forms.

## Will pipeline extensions (e.g., extension/changes to the HTTP request pipeline) on Content Delivery servers persist if someone moves to the XM Cloud solution? If not, what are your recommendations on how to implement the above with a JSS+Edge/Vercel or XM Cloud setup?

Sitecore XM Cloud will not support Content Delivery (CD) servers so HTTP request pipeline extensions will also not be supported. If you implement Experience Manager as a headless CMS using JSS and Edge, and changes are required to the HTTP request, then the changes will need to be made where the client application is being hosted.

For example, if the Next.js application is hosted at Vercel, a Vercel Serverless Function can be created to process the incoming HTTP request and to provide a response. If the Next.js application is hosted at Cloudflare Pages, a Cloudflare Worker can be used instead.

## Should developers use Edge/Vercel patterns now even if there are low traffic workloads to be more ready for SaaS? Or port from React + JSS later on.

Since the two API's (edge/JSS GraphQL) are compatible, the right approach for your project and customer is what you are most comfortable with.

## Is the ASP.NET Core SDK not prioritized anymore?

Sitecore is actively working on, and supporting, the Developer Experience for ASP.Net Core, Next.js, React, Vue, and Angular. As the technology landscape, market demands, and adoption changes occur, Sitecore makes adjustments and Sitecore is also exploring doing more as open-source initiatives.

## Is XM Cloud going to provide support to address issues?

Sitecore provides support for all of our XM Cloud hosted services and platform offerings.  Sitecore360 can help maximize your investment by providing full support throughout your entire journey with Sitecore. You will even get valuable insights on day-to-day business operations.

## How patching and indexing/publishing operations will work?

Patching will have the same effect as executing a deployment and performing an update to a CM Instance.

## What is the difference between XM Cloud and Content Hub ONE?

Both of these products are based on headless technologies and approaches. With headless technology there is a separation between content and presentation. XM Cloud is a headless architecture that provides data modeling and layout and Pages, component building experience, whereas Content Hub ONE is data modeling and content management only.

## What sort of search functionality is still available for XM Cloud?

Sitecore XM Cloud still has Solr indexes within our CM instance itself, but we've closed that from allowing developers to modify indexes or add indexes or utilize this Solr instance for public consumption or visitor usage. If customers are wanting to add a search engine to their site, there are several different solutions that are available. The first and most simple solution that a development team could use is search-based queries directly from Experience Edge. The development team can write searches against our Experience Edge endpoints and call from their application. Secondly, they could use a crawling search engine. There are several third party vendors with software in that space and Sitecore will also have Sitecore Search that's available for crawling and even creating indexes based on our APIs.

And then lastly, if customers want to use a Solr-based solution, they could set up and configure and host their own Solr solution and send content to it and configure it that way. Sitecore recommends to use a crawler-based solution unless that doesn't meet the technical needs of the implementation that they're trying to achieve.

## What are the plans for Localization, Globalization, and accessibility?

For localization, Sitecore is coordinating to get customers an environment so that they can support XM Cloud just like they support Sitecore XM today.

From a translation perspective, all those translation capabilities that are part of Sitecore XM itself are still available to our customers. The way that customers and partners install modules or connectors is different in Sitecore XM Cloud because Sitecore manages the infrastructure. Customers will no longer be able to install directly on a PaaS or a managed cloud or a self-hosted solution. As an example of doing this sort of customization, Sitecore installs and configures the CMP and DAM connector module on behalf of customers.

When it comes to translation, support for our apps, like our Pages app, our deploy app, and our Explorer app today, those are currently English-only. Sitecore is working on getting translations for those as well in the future.

Accessibility support is a work in progress. Sitecore XM Cloud has not been tested for accessibility as of yet. Sitecore understands that this is important to our customers and partners and plans are being made to ensure acessibility needs are met in the future.

## How are a large number of urls (150+) dealt with? Is a project needed for each?

No, a project is not required for each URL. There may be advantages to grouping these sites into projects. If you need to share content across your sites, you may want one content tree, therefore a shared project.

## Will developers be able to use https://github.com/kamsar/Dianoga in XM Cloud?

Dianoga is a module for helping with delivering images on the content delivery. Sitecore XM Cloud does not have content delivery instances and therefore this module does not make sense for use on the XM Cloud hosted platform. The customer should look at what they are using Dianoga for and evaluate whether they even need anything extra at this time. Experience Edge, included with XM Cloud, is able to act as a CDN for the images removing the need for the caching of the asset files. The use of Vercel, or Netlify, or other delivery platforms for the head usually have some form of image caching/optimizing/delivery available with them and this also can remove a major use case for having Dianoga. DAM tools also offer web optimization capabilities, if they have this available to them.

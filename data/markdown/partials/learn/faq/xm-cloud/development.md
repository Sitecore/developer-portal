---
title: 'Development'
hasInPageNav: true
---

**What will the developer experience be with XM Cloud?**  
The adoption of XM Cloud allows Sitecore developers to continue working in the manner to which they are accustomed -- developers can work in their local environments to build the Content Management implementation. Using the Sitecore CLI, developers can run a local Docker environment provided by Sitecore that replicates the environment and the build deployment steps used by XM Cloud. The CLI will download the base Experience Manager Docker image from the Sitecore container repository and layer the developer’s project files on top. The complete Sitecore installation is automated and provisions within a matter of minutes.
Once developers are ready to deploy their implementation to the Cloud, they use the CLI to create new XM Cloud instances that layer the files from their Git repository on top of a vanilla Experience Manager instance. Using provided integrations with popular Git providers, starting with GitHub in the initial release, developers will be able to automatically create new builds when there are updates to the Git repositories.  
Alternatively, developers will be able to trigger the creation and deployment of new environments from a codebase in their own CI/CD pipelines using the Sitecore CLI.

**What is the recommended approach for new Sitecore implementations today (Headless, MVC, SXA) to upgrade to XM Cloud?**  
To ensure the easy adoption of XM Cloud upon release, Sitecore recommends that new customer implementations use an instance of the latest publicly available version of Sitecore Experience Manager that has SXA installed (including headless tenants) and uses Experience Edge and Next.js for the delivery. In absence of an actual Experience Edge, the Edge Preview Schema on the delivery server can be used

Sitecore also recommends as best practices:

- Using the Sitecore CLI and/or Sitecore for Visual Studio for item serialization
- Avoiding dependencies on any tooling beyond MS Build for your Visual Studio solution (e.g. Gulp or Cake or PowerShell)
- Limiting customization to the Content Manager role
- Using out-of-process API-based integration as much as possible
- Using Docker for local development

**What will be the migration path from Experience Manager self-hosted to XM Cloud?**  
Sitecore will provide a migration guide for customers moving from self-hosted Experience Manager to XM Cloud. Our intention is that customers following the guidelines in the previous question will have the smoothest migration path. Clarification coming after Symposium.

**What options are there for content migration from earlier Sitecore versions?**  
Sitecore Content Serialization can be used for the migration of content. We are also looking to support Razl for migrating content from earlier versions.

**Will Sitecore PowerShell Extensions (SPE) be supported?**  
SXA and SPE will be included by default, so existing and new SPE scripts are supported.

**Can I deploy my existing implementations into XM cloud?**  
It depends. If you have all the prerequisites met, you're following a headless architecture you're using the latest solution of our tooling then the answer will be very likely if you are running a solution on an older version of Sitecore and you have a lot of XP like platform solutions, or you're relying on dependencies from XP and you have CD servers, then there's going to be a fair amount of refactoring or a bit of refactoring. You have to do to allow it to run on XM Cloud again. This is very focused on headless architecture.

**For customers moving from XP to XM Cloud, how do we move the content?**  
We have Sitecore content serialization that has some tooling around it, and you can use our Sitecore CLI to take existing serialized content and move it directly into XM Cloud. That serialization is compatible with XXXX and also Unicorn, so if they have things that are formatted in the right way then it is easily portable to XM Cloud. Additionally, we have Razl (which we have tested) which is a content migration tool that is also built on serialization and works with XM Cloud as well. A customer could if they would like a more visual way of picking and choosing which content gets moved, install Razl which does require a small license. A customer can install Razzle, connect to their existing XM instance, and then also connect it to their XM Cloud instance and then basically you have a source and a destination and move content using that tool. A customer or partner can perform that function.

**How is Vercel working, with the provisioning process around automation and the on-boarding on a Vercel tenant?**  
We included automation, so that teams if they already had a Vercel account, could tap into that in connection to it and automate the deployment to Vercel for their existing count. If they didn't have a Vercel account, we could automate the process of provisioning or creating it Vercel account for them and then connect their front-end solution to the Sitecore solution. Initiatives when we were evaluating scopes and what is nice to have additionally, we didn't want to position XM Cloud as a Vercel and next JS only.
We're fully embracing React, Angular, Vue, NextJS, whatever front end technology stack that they will use. If a customer wants to use Vercel maybe we can do some of those additional automatios in the future as one of our roadmap initiatives.

**How does the migration from XMP (XM with Personalize on Managed Cloud) to XM Cloud look? Is it seamless?**  
The actual process of moving an XM + Personalize customer from Managed Cloud to XM Cloud is still being determined.   
However, it is important to note that the XM + Personalize implementation will need to employ Experience Manager as a headless CMS, using the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, and utilizing a Jamstack framework or .NET Core to build the client application, before it can be a candidate for XM Cloud.   
Sitecore recommends using Next.js as the Jamstack framework because of its flexibility in supporting Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Server-Side Rendering (SSR). If customers want to implement a .NET Core, React, Angular, or Vue.js client application, they will need to host a separate rendering host instance themselves - the rendering host will not be available through XM Cloud. This separate rendering host is not required by Next.js.  
Besides implementing XM as a headless CMS, customers will need to ensure that they are not using XM capabilities that will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes and use of Sitecore Forms.

**How is content author page orchestration supported?**  
Page orchestration is supported using JavaScript frameworks, with the initial release of XM Cloud targeting Next.js support.

**Should current Sitecore implementations walk away from MVC and fully embrace Headless and Jamstack architecture? Or will the MVC SSG be a viable and equally recommended option?**  
Sitecore’s focus for the Composable DXP is on supporting headless solutions. We will provide a “bridge” function that allows SSG for MVC renderings, with some limitations, so that existing customers have a migration path.  
More information about converting MVC applications to a Jamstack architecture can be found on the [documentation site](https://doc.sitecore.com/en/developers/hd/190/sitecore-headless-development/converting-existing-sitecore-mvc-applications-to-the-jamstack-architecture-with-headless-rendering.html). There are limitations when using SSG for MVC solutions. The current list of [limitations](https://doc.sitecore.com/en/developers/hd/190/sitecore-headless-development/limitations-and-workarounds-for-static-generation-of-mvc-apps-with-jss.html) is published on the documentation site. Please note that this list should not be considered final.

**Will the existing geo-location services be maintained or will they be replaced with another feature?**  
With a headless CMS implementation, the geolocation service will now need to be supported by front-end services provided by various vendors. For example, if the customer uses a popular CDN, CDN vendors like Cloudflare, Akamai, etc include geolocation as part of their service. Alternatively, front-end hosting providers like Vercel or Netlify also provide geolocation. The service will not be provided by Sitecore since with a headless CMS approach, we will never see the initial request from the visitor, so we will not be able to determine the visitor's location.

**How to move my current MVC-based Experience Manager solution into XM Cloud?**  
Sitecore XM Cloud is optimized to run Experience Manager as a headless CMS with the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, with a Jamstack framework or .NET Core client application. Sitecore XM Cloud will not support Content Delivery (CD) servers so current MVC solutions will need to be converted to a JSS implementation where the web solution gets content and layout data from Experience Edge before it can be run in XM Cloud. Alternatively, customers can host their MVC solutions in Sitecore Managed Cloud, which will continue to support MVC-based solutions into the future.  
Besides implementing XM as a headless CMS, you will also need to ensure that you are not using XM capabilities which will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes and use of Sitecore Forms.

**What is required to upgrade the current MVC solution so it can run in the XM Cloud environment?**  
Customers with existing MVC solutions who want to move to XM Cloud will first need to refactor and rebuild their current MVC solution as a Jamstack framework or a .NET Core solution. XM Cloud will only support headless Experience Manager implementations using the Sitecore JavaScript Rendering SDK (JSS), Sitecore Experience Edge, and a Jamstack framework or .NET Core client application.  
The process of refactoring applies to the MVC solution’s backend:

- With JSS, customers will be able to reuse their Sitecore datasource, setting, and folder templates from their existing MVC solution.
- Page templates will need to be modified to use JSS layouts and renderings, and to inherit from the JSS route template.
- MVC View and Controller renderings, and any object-relational mapping (ORM), should be removed as they are not applicable for JSS.
- MVC renderings will need to be converted to JSS renderings.

In parallel to the backend being refactored, the frontend solution will need to be rebuilt, preferably using a Jamstack framework such as Next.js. Sitecore recommends Next.js because of its flexibility with support for static site generation (SSG), server-side rendering (SSR), and incremental static regeneration (ISR).   
Customers can implement a .NET Core, React, Angular, or Vue.js client solution as well, but they will need to host a separate rendering host instance themselves - the rendering host will not be available through XM Cloud. This separate rendering host is not required by Next.js as Next.js includes the rendering host capability as part of its run-time.  
Once the backend refactoring and the frontend rebuild are done, content and layout will be published to Experience Edge for consumption by the frontend solution using the Edge GraphQL endpoints.

**Will having an implementation approach with JSS and Next.js ensure that my application will not require further changes when moving into XM Cloud?**  
If you pursue a headless Sitecore Experience Manager 10.2 implementation using the Sitecore JavaScript Rendering SDK (JSS), publishing to Sitecore Experience Edge, and using Next.js for the client application, that will be the bulk of the work to move your Experience Manager implementation to XM Cloud.  
However, besides implementing XM as a headless CMS, you will also need to ensure that you are not using XM capabilities which will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes and use of Sitecore Forms.

**Will pipeline extensions (e.g., extension/changes to the HTTP request pipeline) on Content Delivery servers persist if someone moves to the XM Cloud solution? If not, what are your recommendations on how to implement the above with a JSS+Edge/Vercel or XM Cloud setup?**  
XM Cloud will not support Content Delivery (CD) servers so HTTP request pipeline extensions will also not be supported. If you implement Experience Manager as a headless CMS using JSS and Edge, and changes are required to the HTTP request, then the changes will need to be made where the client application is being hosted.  
For example, if the Next.js application is hosted at Vercel, a Vercel Serverless Function can be created to process the incoming HTTP request and to provide a response. If the Next.js application is hosted at Cloudflare Pages, a Cloudflare Worker can be used instead.

**Should we use Edge/Vercel patterns now even if there are low traffic workloads to be more ready for SaaS? Or port from React + JSS later on.**  
Since the two API's (edge/JSS GraphQL) are compatible, the right approach for your project and customer is what you are most comfortable with.

**Is the ASP.NET Core SDK not prioritized anymore?**  
We are actively working on and supporting Developer Experience for ASP.Net Core, Next js, React, Vue, and Angular. As the technology landscape, market demands, and adoption changes occur, we are making adjustments and we are exploring doing more as open-source initiatives.

**Is XM Cloud going to provide support to address issues?**  
We are providing support for all of our XM Cloud hosted services and platform offerings.  Sitecore360 can help maximize your investment by providing full support throughout your entire journey with Sitecore.  
You will even get valuable insights on day-to-day business operations.

**How patching and indexing/publishing operations will work?**  
Patching will have the same effect as executing a deployment and performing an update to a CM Instance.

**What is the difference between XM Cloud and Content Hub One?**  
They're both based on headless technologies and approaches. With headless technology there is a separation between content and presentation. XM Cloud is a headless architecture that provides data modeling and layout and Pages, component building experience, whereas Content Hub One is data modeling and content management only.

**What sort of search functionality is still available for XM Cloud?**  
We still have Solr indexes within our CM instance itself, but we've closed that from allowing customers to modify indexes or add indexes or utilize our Solr instance for public consumption or visitor usage. If customers aren't wanting to add search to their site, we have several different solutions that are available. The first and most simple solution they could use is search-based queries directly from Edge and just write searches against our Edge endpoints. Secondly, they could use a crawling search engine, and there are several third parties and we also have Sitecore search that's available for crawling and even creating indexes based on our APIs. 
And then lastly, if customers want to use a Solr based solution, they could set up and configure and host their own Solr solution and send content to it and configure it that way. We recommend they utilize a crawler-based solution unless that doesn't meet the technical needs of the implementation that they're trying to achieve.

**What are the plans for Localization, Globalization, and accessibility?**  
For localization, we are actually coordinating to get them an environment so that they can support XM Cloud just like they support XM today. 
From a translation perspective, all those translation capabilities that are part of XM itself, are still available to our customers. The way that customers and partners will have to install modules or connectors is going to be a little bit different in XM Cloud because we're managing the infrastructure. Customers will no longer be able to install directly on a PaaS or a managed cloud or a self-hosted solution, but it's possible and we've already achieved that. In fact, the CMP has a DAM connector, that's a module that we're installing and configuring on behalf of customers. 
When it comes to translation, support for our apps, like our Pages app, our deploy app, and our Explorer app today, those are English only and we're working on getting translations for those as well. Release of that is planned for post GA. But it's something we have on our roadmap. 
Accessibility is a work in progress. We haven't tested XM Cloud for accessibility as of yet. We understand that this is important to our customers and partners and are making plans.

**How are we dealing with a large number of urls (150+)?Do we need a project for each?**  
No, but there may be advantages to grouping these sites into projects. If you need to share content across your sites, you may want one content tree, therefore a shared project.

**Will we be able to use https://github.com/kamsar/Dianoga in XM cloud?**  
This is a module for helping with delivering images on the content delivery. XM Cloud does not have content delivery instances and therefore this module does not make sense for use on the XM Cloud hosted platform. The customer should look at what they are using Dianoga for and evaluate whether they even need anything extra now. Experience Edge, included with XM Cloud, is able to act as a CDN for the images removing the need for the caching of the asset files. The use of Vercel, or Netlify, or other delivery platforms for the head usually have some form of image caching/optimizing/delivery available with them and this also can remove a major use case for having Dianoga. DAM tools also offer web optimization capabilities, if they have this available to them.

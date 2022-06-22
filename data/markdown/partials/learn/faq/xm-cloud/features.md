---
title: 'Features'
hasInPageNav: true
---


**Once I build a XM + Personalize site and deploy it, will I be able to port this site to XM Cloud when that comes out?  Do you have a playbook available that we could see?**

If XM + Personalize is implemented as a headless CMS with the Sitecore JavaScript Rendering SDK (JSS), Sitecore Experience Edge, and a Jamstack framework or .NET Core client application, it will be a candidate for being run in XM Cloud. Sitecore Experience Manager Cloud will be optimized for headless Experience Manager implementations therefore, it will not support MVC-based solutions. Sitecore recommends using Next.js as the Jamstack framework because of its flexibility in supporting Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Server-Side Rendering (SSR).

If customers want to implement a .NET Core, React, Angular, or Vue.js client solution, they will need to host a separate rendering host instance themselves - the rendering host will not be available through the XM Cloud platform. This separate rendering host is not required by Next.js as Next.js includes the rendering host capability as part of its run-time.

Besides implementing XM as a headless CMS, you will also need to ensure that you are not using XM capabilities which will not be available with XM Cloud. Some examples of these capabilities are custom Solr indexes, Sitecore Forms, and any capabilities dependent on Content Delivery (CD) servers. The list of XM capabilities which will not be available in XM Cloud will follow in the upcoming month.

**Will XP2XMP support drag and drop component library like what is supported with SXA today?**

Sitecore Experience Manager, which is included as part of the XP2XMP bundle, fully supports SXA for MVC-based solutions. If customers want to use Experience Manager as a headless CMS with the Sitecore JavaScript Rendering SDK (JSS) and publish to Sitecore Experience Edge, then the SXA toolbox, themes, and Creative Exchange capabilities are not supported. An enhanced version of SXA is anticipated for the Experience Manager 10.3 release in late CY2022 that will improve SXA support for headless implementations.

**Is there an ecommerce version of XP2XMP that also bundles Sitecore** **OrderCloud****?**

The &quot;Power of 3&quot; product bundle includes Sitecore OrderCloud + Sitecore Discover + Sitecore Send as a headless commerce proposition. The bundle does not have a frontend tooling component to the degree of XP2XMP but Discover has some limited capabilities which we recommend using in that &quot;Power of 3&quot; play.

The Demo Team is working on a Play Summit commerce demo including XM, JSS, and Discover to start, which will allow us to expand into the XM world from a commerce sales play.

**What about customers who are using analytics within Sitecore XP such as path analyzer?**

If customers want to maintain the use of XP alongside Personalize, they can use a path analyzer for insights where customers may want to apply personalization and testing, and then implement actual personalization in Sitecore Personalize.

**In XP today we make it easy to understand from an editor&#39;s perspective which components are using personalization and testing. How will the editor see in XM which components are sent to Personalize for personalization? How do we manage analytics for personalization if we have some analytics in Personalize and some in XM?**

There is a preview tool in Personalize to test and view draft and live experiences. Customers can also see the data there in terms of performance, impact, etc.

**Are we able to modify the order form for the XM2XMP bundled offering?**

The Order Form must remain &quot;as-is&quot; to include all product tables. The Order Form will still have itemized tables for each individual product vs. having one table listing all products within the bundle.  On the flip side, there is no requirement to have multiple Order Forms, only one is required, with individual product tables.  Due to the different SLAs currently in place, products need to be broken out to protect Sitecore from a contractual and legal perspective.

**Can we stay on our current hosting solution (not MC) until XM Cloud is released?**

Of course! There is no forced move here and the choice of where to host XM is up to the customer.

**I am a customer that requires HIPAA compliance. Is XP2XMP HIPAA compliant?**

The Sitecore Managed Cloud, XP, XM, and Content Hub products will be HIPAA READY by the end of October 2022. Beyond that, we have not committed to making the new SaaS products HIPAA ready yet.

**What&#39;s the difference in feature parity to Sitecore XP?**

Listing features in Sitecore XP and showing parity or comparable features in Sitecore Personalize.

| Sitecore XP | Sitecore Personalize |
| --- | --- |
|**Marketing Automation** <br /> Enroll contacts in automation campaigns. Evaluate contacts based on defined rules. Perform various marketing actions for individual contacts.  |**Decisioning** Manage complex decisions using business rules to return the next best action or offer. Use analytical models and data systems for maximum impact, through connections. Immediately test decision model variants from the canvas - an agile methodology from design, test to production. Access full revision history and easily revert decision model variants. 
 |  | **Triggered experiences**  Personalized content sent as an HTTP GET or POST request against a connection to a predefined REST endpoint to an ESP, SMS/Push service provider, or other destination.  |
|**Sitecore Forms**  Build web forms that record, and report information provided by contacts View form performance and analyze the results. WYSWYG form designer  |**Web Experiences**  A web experience is an offer, next best action, operational message, or any other customer experience that can run on the web or be deployed into a web-based application. Test and preview a web experience OOB extensible web templates as a code-free for web personalization.  You can create experiences yourself using HTML, CSS, and JavaScript,  Monitor live experiences performance through operational metrics. Optionally enroll experience in an A/B test or associate a decision model  |
|**Marketing taxonomies**  Define/apply taxonomy tags to identify **campaigns** ,**referring channels**, and other information about marketing activities  |**Send tracking data to Sitecore Personalize**  **Stream APIs** allows sending events and storing custom data. Sitecore Personalize enables you to capture tracking data when you send a **VIEW event**.   |
|**Marketing Operations**  Organize your marketing activities in a structured way. You can create and define**campaigns** ,**goals** ,**events** ,**content profiling** , and **outcomes** in the Marketing Control Panel.  |**Goals For Experiments**  Goals measure variant performance. Goals can be of type: view, revenue, or custom goals. Other attributes such can be sent as custom attributes to a session, event, or a guest data through **Stream APIs**   |
|**Personalization**  Displaying targeted, relevant content to your contacts based on their characteristics and behavior  |**Web/ Full Stack Experiences**  Personalization on web pages  |
|**Experience Profile**  Monitor the behavior of contacts that have interacted with your website  |**Customer Data, Guests** **[With CDP, and Smart Hub]** View or search profile for everyone interacts with your brand, regardless of the channel they use  |
|**List Manager**  Using the List Manager, you manage contact lists and, using segments, create recipient lists that target a particular audience based on profile or engagement data.  |**Batch segmentation** **[With CDP, and Smart Hub]** Query and build custom segments at scale using any attributes passed to Sitecore CDP  |
|**Experience Manager**  Create, manage, and publish content to your websites  |**Available through Experience Manager** |
|**Sitecore AI**  Automated Personalization experience on website utilizing a SaaS-based feature, hosted in Microsoft Azure cloud.  |**Use analytical models in a decisioning** Use external machine learning technologies in decision model variants such as propensity models, forecast models, and outlier models  |
|**Experience Analytics**  Overview reports and detailed reports for marketers and marketing analysts to identify patterns and trends in experience data collected from websites |**Dashboards in Sitecore CDP** **[With CDP and Smart Hub]** review and analyze various Sitecore CDP performance metrics, such as customer types and new customers, purchased order items and order value, changes to segments and trends in inbound traffic and suspected bot activity by bot type and peak attack times. |
|**Configuring Experience Analytics reports**   |**Using CDP data lake export service** **[CDP and Smart Hub Only]**  |
|**Experience Optimization**   |**Running experiments**   |
|**Path Analyzer**   |**Not Yet Available,** to be replaced with a marketing practical pages analyzer**[CDP and Smart Hub Only]**  |

**What is the main capability of Personalize, CDP, Smart Hub CDP?**
- **Personalize** activates your data across all customer touchpoints to orchestrates and manage seamless and consistent customer experiences.
- **Sitecore CDP** enables enterprise-level integration with other Digital-Experience pillars such as Marketing-Automation, content, and commerce systems.
- **Smart Hub CDP** basically combines both (CDP and Personalize) products, to Fuel omnichannel personalization with customers&#39; insights and deliver 1:1 customer experience.

Please check CDP and Smart Hub CDP Details here:
- [Sitecore CDP Vs. Personalize Vs. Smart Hub CDP Part I – Business need, positioning, and a first look](https://community.sitecore.com/community?id=community_blog&amp;sys_id=d8fdc45d1bb6811038a46421b24bcbb7)
- [Sitecore CDP Vs. Personalize Vs. Smart Hub CDP Part 2 - First look continued: Products specs](https://community.sitecore.com/community?id=community_blog&amp;sys_id=f0862b751bf6491038a46421b24bcb65)

The following table lists features in Sitecore Personalize over Sitecore XP:

|**Decisioning capability** |**Description** |**Sitecore XP** |**Sitecore Personalize** |
| --- | --- | --- | --- |
| Programmatic decisions   | Manage digital decisions using code-based logic.  | ✔ | ✔ |
| Out-of-the-box recommenders  | Manage recommendations using OOB recommenders  | ✘(NO OOB recommenders available. Customers have to bring their own) | ✘(NO OOB recommenders available. Customers have to bring their own) |
| Custom recommenders   | Data scientists can build and easily integrate their own recommenders.  | ✘ | ✔ |
| Bring your own A.I.   | Decision models can leverage existing recommenders or other predictive A.I. models  | ✘ | ✔ |
| Business data connections   | Decision models can call out to other systems to get the latest business info like products, promotions, pricing, inventory, risk, etc.  | ✘ | ✔ |
| Governance   | Decision models follow an agile methodology from design, test to production.  | ✘ | ✔ |
| Testing capability   | Description  | Sitecore XP | Sitecore Personalize |
| A/B testing   | Test two components against one another  | ✔ | ✔ |
| A/B/n testing  | Test multiple components against one another   | ✔ | ✔ |
| Website (client-side) testing   | Test website components   | ✔ | ✔ |
| Omnichannel (sever-side) testing   | Test mobile apps, push notifications, email   | ✘ | ✔ |
| Multi-armed bandit testing   | Tests can use machine learning to increase allocation in favor of better-performing variations in real time  | ✘ | ✔ |
| Dynamic testing   | Using live business context, tests can leverage decisions models to enhance business logic and embed next best offers and actions  | ✘ | ✔ |
| Targeting Capability  | Description  | Sitecore XP | Sitecore Personalize |
| Customer demographics  | Target based on customer demographics like age, gender, family, etc from digital channels   | ✔[Through Personalization] | ✔ |
| Customer behaviors  | Target behavioural history like searches, funnel activity, tools they have used, content viewed.  | ✔[utilizing marketing definitions] | ✔[With CDP and Smart Hub] |
| Shopping cart  | OOB Target activities of the shopping cart across channels. E.g., target on web knowing cart on mobile.  | ✘ | ✔ |
| Purchase history  | OOB Target based on a customer&#39;s previous purchase history on digital channels  | ✘ | ✔ |
| Offline / omnichannel data  | OOB targeting based on offline behaviours such as store, branch, contact centre, or chat interactions.  | ✘ | ✔ |

**What are the benefits of using XP2XMP over Sitecore XP** **?**

- **Developers Innovation and speed** : Front-end technology for fast delivery of experience customizations.
- **Marketer Agility, Simplicity, and Results:** Leverage SaaS agile experimentation and 1:1 personalization powered by easy-to-use visual tools.
- **SaaS:** long-term advantages (operating, financial, scale, etc)
- **Speed:** Brands can Innovate and implement changes quickly. Pivot when needed and respond to business and market shifts with ease.
- **Personalization Maturity:** Sitecore Personalize makes it easy to get started with web personalization and mature to omnichannel personalization at whatever pace brands want to progress
- **Personalization everywhere** : Personalize all your content across every channel, device, and experience.
- **Real-time experimentation** : A/B test anything from a conversion page to a new feature or algorithm.

- **Smarter decisions** : Recommend next-best-actions at every customer touchpoint with drag-and-drop decisioning.
- **Easy integrations** : Bring your own AI and activate personalization across your whole stack.
- **Composable** : A personalization engine that will work on your current Sitecore experience, plus all your other digital experiences outside of Sitecore.

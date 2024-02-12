---
product: ['xm-cloud']
title: 'Features'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## What’s included in XM Cloud?

XM Cloud includes:

- **Sitecore Cloud Portal**  
  Introducing a centralized portal. The Sitecore Cloud portal lets you see what Sitecore applications and subscriptions are available to your organization and switch between different apps. You can also switch between different organizations if you belong to more than one. You use the portal to configure users, roles, and teams. During XM Cloud development, you can use the Sitecore Cloud portal to see which XM Cloud instances are running. For more info, you can check [Sitecore’s Cloud Portal Technical FAQ](https://developers.sitecore.com/learn/faq/cloud-portal)
- **Sitecore Pages**  
  Pages is the next evolution of Horizon and the eventual replacement for Experience Editor. Although Experience Editor is still there and Content Editor is still available, Pages is focused on creating pages and composing pages, and adding components to pages. The most impactful thing about Pages is that it allows users to drag and drop, build content and experiences really simply, and all work natively with headless capabilities. Also, the embedded personalization features will be layered into the Pages experience, so you'll be able to achieve page-based personalization directly in Pages. So think of it as managing your components, managing your pages. You can publish your page content here. Any custom components that development teams build, they'll be able to see them here in the Pages experience.
- **Sitecore Tools**  
  There is also a new tools dashboard. It is similar to the Sitecore Launchpad, with a refreshed modern design and some additional features. From here, users can quickly navigate and launch Pages and other tools.
- **Sitecore Sites**  
  The Sites tab is for multi-site management, where you can manage sites and create sites based on templates that XM Cloud provides for getting started quickly. It's basically an SXA site scaffolding feature where Sitecore XM Cloud generates a default site based on a set of predefined configurations.
- **Sitecore Explorer**  
  A new Explorer feature that allows customers to quickly see all the different sites that they have on a CM instance and then from that site they get to see the hierarchy and structure of their pages. From there, they can drill into the Pages application or they can do some high level administration on a site or a page level.
- **Sitecore Components**  
  Sitecore Components allows customers to design style sheets and theming. It also allows them to define custom HTML-based components and also plug data sources into those components. This allows customers to have XM be the data source where it's populating items into these components or it could even be a third party as well (even a non-secure data source). These components, once they're defined and created, would also be available in the Pages experience. When a user is in Pages and doing page assembly and page composition, they can choose from an SXA component that their development team built, or choose from the Sitecore Components builder that marketing teams, designers and content creators will define.
- **Embedded personalization and analytics**  
  Embedded personalization is a page-based personalization feature. There are audiences and segments, with a set of rules that you can define based on those variations and those audiences, and then essentially personalize using Edge functions. Embedded personalization swaps out the page that gets delivered to the visitor based on those personalization rules. Authors will be able to preview this and see what the experience look like directly in Pages in a preview mode. To power a lot of those rules, XM Cloud also has embedded analytics which track based on page traffic on the site.
- **DevOps tools, starter kits, integrated deployment, and automatic updates**  
  All of these tools are exclusive to XM Cloud, so they won't be available in a Managed Cloud instance or a self-hosted 10.2 or 10.3 solution.

## How does XM Cloud help business professionals and marketers?

XM Cloud helps marketers and business professionals by giving them an easy-to-use platform to manage content for experiences across touchpoints. By having a headless, cloud-native CMS, marketers can work independently from developers, ensuring faster timelines to launch experiences and more time for understanding audience behavior and personalization.

## How does XM Cloud help developers and technicians?

Developers benefit from XM Cloud’s self-service tools for rapidly deploying Experience Manager’s Content Management instance along with their own customizations. With the modern headless CMS, the content management backend is decoupled from the front-end presentation and delivery capabilities. Decoupling enables developers to take advantage of popular front-end frameworks to rapidly build new digital experiences. While developers gain agility with this approach, it introduces friction for marketers who now need to rely upon developers for even the smallest of changes to the front-end experience. Developers benefit from XM Cloud’s self-service tools for rapidly deploying Experience Manager’s Content Management instance along with their own customizations.

## What features will be supported for the initial General Availability (GA) release of XM Cloud?

Functionality that is being considered for inclusion in future releases includes:

- Federated Authentication for Edge Delivery (Sitecore security support for website visitors)
- Installing custom modules
- Sitecore Forms
- Authoring login integration through external SSO
- Computed fields for Experience Edge

Functionality that will not be supported includes:

- XP/xConnect functionality including existing personalization rules (new rules will be introduced for XM Cloud)
- SXA Search components
- Custom search indexes
- Some Sitecore modules (including Universal Tracker, Sitecore Publishing Service)
- Extranet domain functionality (users/roles)

_Please note that capabilities shown as not supported, or under consideration, may change with future XM Cloud releases._

## Will XM Cloud support Federated authentication?

We've heard from customers a desire to have Federated authentication, so that Sitecore can connect our identity system to their identity solution, and that's something that will be coming in the future.  Clarification coming after Sitecore Symposium 2022.

## How are Forms handled with XM Cloud?

Web forms are an MVC-based approach that have dependencies upon our content delivery servers. Therefore, it cannot be used as is with headless implementations. So, there are really two parts to this answer:

1. In the near-term Sitecore recommends that customers utilize a third-party service. There are any number of third-party API-based/ API-driven forms experiences today that are designed and built for headless implementations. We're aware that customers who already have Salesforce in place could also embed their Salesforce forms directly within their UIs. There are a number of CRMs that also provide that functionality.
2. Sitecore does have a project to deliver a headless, full-SaaS, forms experience. The plan is to have JavaScript and HTML that you can inject into your frontend and we'll store all of that data in our back end that is managed through the Sitecore SaaS platform. SaaS forms are currently planned for the second half of the year in calendar year 2023.

## Can existing forms be migrated?

Since XM Cloud does not utilize Content Delivery servers, Sitecore Forms are being enhanced to better support headless implementations. Once the Forms enhancements are available through a future XM release, customers will need to change their existing Forms implementations to get the benefits of the new version. Clarification coming after Sitecore Symposium 2022.

## Is XM Cloud SOC 2 certified?

Sitecore is currently in the process of SOC2 certification for XM Cloud. This is a new product and as with all new products, SOC2 certification takes time. Sitecore has ISO27001 certification and a SOC2 report for our other products. A full list of all Sitecore certifications can be found [here](https://www.sitecore.com/trust/security?utm_websource=trust). Further details are available in our [Trust Center](https://www.sitecore.com/trust).

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

XM Cloud helps marketers and business professionals by giving them an easy-to-use platform to manage content for experiences across touchpoints. By having a hybrid headless, cloud-native CMS, marketers can work independently from developers, ensuring faster timelines to launch experiences and more time for understanding audience behavior and personalization.

## How does XM Cloud help developers and technicians?

Developers benefit from XM Cloud’s self-service tools for rapidly deploying Experience Manager’s Content Management instance along with their own customizations. With the modern hybrid headless CMS, the content management backend is decoupled from the front-end presentation and delivery capabilities. Decoupling enables developers to take advantage of popular front-end frameworks to rapidly build new digital experiences. While developers gain agility with this approach, it introduces friction for marketers who now need to rely upon developers for even the smallest of changes to the front-end experience. Developers benefit from XM Cloud’s self-service tools for rapidly deploying Experience Manager’s Content Management instance along with their own customizations.

## What features of XM/XP are not supported in XM Cloud?

Note that you can keep up to date on the latest feature changes via the [XM Cloud Changelog](/changelog/xm-cloud).

Functionality that is not supported includes:

- XP/xConnect functionality including existing personalization rules (XM Cloud leverages Personalize for embedded personalization)
- SXA Search components (XM Cloud projects are intended to use [Sitecore Search](/content-management/search) instead)
- Custom search indexes
- Some Sitecore modules (including Universal Tracker, Sitecore Publishing Service)
- Extranet domain functionality (users/roles)

_Please note that capabilities shown as not supported, or under consideration, may change with future XM Cloud releases._

## Will XM Cloud support Federated authentication?

The Sitecore Cloud Portal does support Single sign-on (SSO) configuration for OpenID and SAML. You can read more in the [Single sign-on (SSO) documentation](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/single-sign-on--sso-.html).

## How are Forms handled with XM Cloud?

Sitecore has [now released XM Cloud Forms functionality](/changelog/xm-cloud/forms-are-now-available-in-xm-cloud). Read additional details in the [Work with Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-forms.html) documentation section.

## Can existing forms be migrated?

Since XM Cloud does not utilize Content Delivery servers and therefore existing Sitecore Forms will not work with XM Cloud. For XM Cloud, customers will need to change their existing Forms implementations to use the XM Cloud Forms functionality.

Read additional details in the [Work with Forms](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-forms.html) documentation section.

## Is XM Cloud SOC 2 certified?

Sitecore does have SOC2 certification for XM Cloud. A full list of all Sitecore certifications can be found [here](https://www.sitecore.com/legal/compliance-certs). Further details are available in our [Privacy and Security center](https://www.sitecore.com/legal/privacy-and-security).

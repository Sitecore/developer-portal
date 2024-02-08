---
product: ['xm', 'personalize']
title: 'Development'
hasSubPageNav: true
hasInPageNav: false
cdpTags: ['xm', 'personalize']
---

**What technology stack do we need to build sites in XP2XMP?**

The Sitecore Experience Manager component of XP2XMP is run on a Microsoft technology stack, including Windows Server, SQL Server, .NET, and ASP.NET.

Headless development of sites with Sitecore Experience Manager supports two options: (a) Node.js and (b) .NET Core. With the Node.js stack, the components can be delivered using Next.js, React, Angular, or Vue.js SDKs. Sitecore recommends using Next.js as the Jamstack framework because of its flexibility in supporting Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Server-Side Rendering (SSR). Additionally, Next.js does not require customers to run a separate rendering host, which reduces operational complexity and overhead.

**Can we use XP2XMP with SSR for JSS headless implementations?**

When using Sitecore Experience Manager from the XP2XMP bundle with the Sitecore JavaScript Rendering SDK (JSS), developers can use Server-Side Rendering (SSR) with their Next.js, React, Angular, or Vue.js applications. React, Angular, and Vue.js require customers to host an [SSR proxy](https://doc.sitecore.com/xp/en/developers/hd/190/sitecore-headless-development/server-side-render-jss-apps-headlessly-using-the-jss-proxy.html) server themselves to support SSR with JSS. Next.js supports SSR without requiring a separate SSR proxy server as this capability is supported through Next.js directly. This is one of the reasons why Sitecore recommends using Next.js as the Jamstack framework for client applications when implementing a headless solution.

**We just launched our XM site on 10.1 using the best practices of SXA. Can we port that site over to XP2XMP so we can take advantage of Personalize and Send that we did not purchase with our XM License?**

If your existing XM 10.1 site is using SXA best practices, your site should be compatible with the Sitecore Experience Manager instance included as part of the XP2XMP product bundle. XP2XMP will allow you to take advantage of the Sitecore Personalize capabilities as well.

**We just purchased Content Hub DAM for the integration to XP in Managed Cloud. We do not use xDB so can we move to XP2XMP, keep our site the same (SXA) and turn on Personalize while we turn off xDB that we don&#39;t use?**

Since you are not using xDB with your existing XP site in Managed Cloud, you will be able to move to Sitecore Experience Manager as part of the XP2XMP bundle. With XP2XMP, you will be able to continue hosting Experience Manager and your site in Managed Cloud and implement Sitecore Personalize for the site. You will also be able to use the Content Hub DAM integration with your Experience Manager instance as well.

**What is the guidance or talk track with customers currently leveraging XP with Salesforce Connectors to optimize into Personalize (assuming batch APIs are not part of Personalize)?**

It is important to understand customer requirements before providing advice and to note that APIs are open although we don&#39;t have a productized connector at this point.

- With Sitecore Personalize when it is standalone without CDP Sitecore can deliver RT syncs to Salesforce. Sitecore CDP would be needed to batch audiences to Salesforce
- Customers could continue to run XP with Personalize to maintain Salesforce integrations

**From a technical perspective, does a customer just &quot;turn off&quot; their xDB features if they move from XP to XM? What does that process look like other than signing a new license?**

Please see documentation on turning off xDB tracker and how to run XP in CMS-only mode (i.e. no xDB). xDB customers would then remove xDB infrastructure (Processing, Reporting, Collection) from their cloud environment.

**Are there any specific considerations when proposing XM and Sitecore Personalize to customers running XP on MCS (e.g. reduction in Azure commitment)?**

If a customer is running XP today, they can decide that they want to use Sitecore Personalize especially if they are not really using the marketing capabilities of XP and xDB.

Customers can move from an XP environment and move their website to an XM environment and scale back the architecture hosting costs for the XP capabilities. It will save customers money in the long run because it&#39;s less architecture to pay for.

Customers will need to move their website from XP to XM to move into XM Cloud when the XM Cloud product goes live.

We are not forcing customers down a particular path yet. As part of this play the first thing to do is to get customers up and using Personalize, which takes some of the pressure off of the XP capabilities and then allows an easier conversation around moving them to XM in the future.

**How is authentication handled between the different tools?**

By default, administrator authentication to XM, Personalize, and Send will be individually managed by each application. Alternatively, SSO can be implemented across the three.

**What is the plan to help migrate customers from XP to XM+Personalize?**

Please see documentation on turning off xDB tracker and how to run XP in CMS-only mode (I.e. no xDB). The customer would then remove xDB infrastructure (Processing, Reporting, Collection) from their cloud environment. A &quot;migration&quot; isn&#39;t really required in all scenarios. Personalization can be used on their site without migrating. If there is valuable customer data in xDB, that data can be ported to Personalize if needed. Eventually, we will want these customers to shift to XM. They are not being forced to do that as part of this play. This will become a critical part of moving their CMS to the cloud as XP will never be SaaS. If the customer wants SaaS, they will need to move to XM.

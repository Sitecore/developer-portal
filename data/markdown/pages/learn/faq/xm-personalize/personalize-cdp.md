---
product: ['xm', 'personalize']
title: 'Personalize & CDP'
hasInPageNav: true
hasSubPageNav: true
cdpTags: ['xm', 'personalize']
---

### What is the key difference between the real-time data platform available in Sitecore Personalize vs. Sitecore CDP?

Sitecore Personalize has a lightweight version of the CDP engine. This means we are identifying users, building profiles, and storing states across a limited number of sessions. This also means that if customers want to upgrade to a full CDP with Personalize we can do that with a flick of a switch. With the lightweight CDP in Sitecore Personalize though, there is no access to the customer profile directly or segmentation or data export - you need CDP to do this.

### Personalize can be used in both B2C and B2B correct? I know CDP is only B2C as of now.

Yes, for both since you would be using it for web personalization.

### Can you deploy Sitecore Personalize universally

Yes! You can target multiple pages within an experience. You can even target the same experience to pages on multiple sites/CMSs. This is one of the weaknesses of XP. If you wanted to target personalization on multiple pages in an XP site, you would have to configure it on every page. If you wanted the same offer on 300 pages you would need to configure it 300 times.

### What are the limitations in Personalize when it comes to CDP functionality? If you do not buy the CDP product specifically.

We&#39;re running a lightweight version of the CDP engine to power Personalize. This means we are identifying users, building profiles, and storing states across a limited number of sessions. This also means that if customers want to upgrade to a full CDP with Sitecore Personalize we can do that with a flick of a switch. There is no access to the customer profile directly, segmentation or data export –customers would need CDP to do this.

### What is the likelihood of XP customers needing CDP on top of XM + Personalize because without CDP they won&#39;t be able to access customer data as they do in xDB within XP? Can customers personalize on historic data if they don&#39;t have CDP?

Personalize can track users over time and then personalize off of previous visits/history - just like XP. Think of the full CDP as the Data Lake that can be used to aggregate customer data from across the enterprise. Personalize tracks how customers are interacting with testing and experiences -an organization might have additional data that they want to add to a customer&#39;s profile - credit score, payment preferences, demographic data. If an org wants to add that data to the profile so they can use that to drive personalization they would need to upgrade to full CDP.

### Can I migrate my XP personalization rules to Sitecore Personalize?

You will have to manually recreate your rule logic in Personalize using Decisioning and add it to an experience. Decision Models combined with Web Experiences or Full Stack Interactive Experiences will provide your best equivalent to the power within XP.

### We currently use XM Managed Cloud but like the sound of adding Personalize. We use .NET to publish to the web apps in Azure. Will we continue to do that if we move to the XM + Personalize offering?

For customers already using XM On-Prem or Managed Cloud, they will continue to use their existing deployment process for code changes for their environment. The customer will however need to purchase Sitecore Personalize to apply to their existing XM instance. These changes will not affect the existing deployment to Azure Platform as a Service (PaaS) or Containers (or any other potential approach). To add Personalize, the customer will apply the Sitecore CDP/Personalize JS Library to begin tracking users on their site and use Sitecore Personalize or SmartHub CDP to then personalize their customers&#39; experiences using a Web or Full Stack Experience.

If the customer is using XP and moving to an XM + Personalize, their existing deployment may change slightly. With XP, they needed xConnect and supporting pieces to support this environment, but with XM + Personalize, there is no longer a need to have a dependency on this additional infrastructure. However, any other changes to the Platform as a Service approach would not require additional modifications.

If a customer is currently using XM On-Prem or Managed Cloud and moving to XM Cloud + Embedded Personalize (or standalone Personalize) there would be a change in their Dev Ops process, due to the nature of using XM Cloud which is a Headless SaaS product. Some technologies are no longer supported by the XM Cloud infrastructure, and therefore would require a change in strategy for the organization.

### What can we personalize? Do we use the same rule editor that we do in XP now?

This is a two-part question, regarding the first question. Using the headless personalization style that comes with Sitecore Personalize, you can build almost any personalization scenario that suits your requirements.

If the data exists in the system, then it can be used to personalize.

Second question: No, there is a different editor in the Personalize product.

### Does Personalize work at the component level to swap out content or just pop-ups?

Personalization is not restricted to just pop-up functionality but instead can apply to page level or component level variations. Offers stored in Sitecore Personalize paired with Web Experiences can allow marketers to customize various parts of a webpage, from within Sitecore Personalize using Html/CSS/JavaScript. In addition, using a Full Stack headless experience, any content irrespective of the source (including XM or Content Hub) can be personalized.

### Will my potential Personalize implementation still be compatible and work if I later move into XM Cloud?

If the user has purchased Standalone Personalize (or CDP, SmartHub CDP) then they will keep that instance if they move to XM Cloud. The embedded Personalization in Pages will be enhanced with additional condition templates and the user will be able to update the experiences created in Pages by going into the Sitecore Personalize app.

### Do I need to make changes to my current XM/XP implementation in order to utilize Sitecore Personalize (SP)?

Technically, you could use XP and Personalize side by side and could even be some benefits of doing so for a temporary period of time to collect data before fully embracing Personalize. Technically there would be some changes necessary, however the impacts would be minimal. Please refer to developer portal integration documents.

With an existing XP or XM on-prem implementation, to start utilizing Sitecore Personalize, you will need to integrate the web tracking mechanisms into your existing XP/XM instance. This includes placing the Sitecore CDP/Personalize JS Library (Boxever.js) and then adding tracking events in JavaScript, to track view and identity events where appropriate. There are details about these required changes in the Developer Portal ([https://developers.sitecore.com/learn/integrations/xm-smarthub-cdp](https://developers.sitecore.com/learn/integrations/xm-smarthub-cdp))

### I see that Sitecore Personalize (SP) has content (offers), can you store these in Content Hub or XM? Is there a single source of content?

There are two approaches to handling a single content source. The first approach involves using a Decision Model with a Web Experience, which directly pulls content from your content management system within the Decision Model, and then displays the result in your Web Experience. The second approach is to use a Full Stack Interactive experience, where your frontend code requests a decision, receives a JSON result, and then retrieves the correct content items.

### How do the personalized full-stack (omni-channel) options work? Can you show me an example of a customer?

Regarding a full description, please refer to the documentation website. The following are example use and business cases

#### 1. Personalised Content for Native Mobile App experiences

- The mobile app sends a request into a Sitecore Personalize full stack interactive experience, personalised content using customer order history and behavioural data is returned.
- For example, a gaming company sends a request from their mobile app into Sitecore Personalize to get the next best game to recommend to the customer based on their previously played games, time on each game and interests.

- The personalised content is AB tested against a control to see which leads to more time spent on the app.

#### 2. Realtime data sources

- An external third-party system, accessible through a REST API, is called to retrieve information in real-time required for a decision or for personalised content.
- For example, an airline has a price API that returns the real-time price of a flight.
- A product recommender is shown to the customer based on their point of sale, recent searches, and order history. The price shown to the customer is taken from the price API which is integrated with in the decision canvas.

#### Real-Life Example (Jetstar Airways &amp; Sitecore)

- [https://www.sitecore.com/resources/insights/customer-insights/the-skys-the-limit-for-jetstar-airways](https://www.sitecore.com/resources/insights/customer-insights/the-skys-the-limit-for-jetstar-airways)

To address the complexity of deriving and implementing insights from a unified customer profile in an omnichannel experience strategy, **Jetstar** uses Sitecore Experience Manager as the main platform for digital transformation. It also uses Sitecore CDP to activate customer insights and Sitecore Personalize across multiple channels.

### These products are being sold as a package, will they be properly integrated with data flowing between them automatically, or there will be manual steps to connect them?

Blueprints and Manual steps of connecting the platforms are communicated at developer portal and at Sitecore Demo

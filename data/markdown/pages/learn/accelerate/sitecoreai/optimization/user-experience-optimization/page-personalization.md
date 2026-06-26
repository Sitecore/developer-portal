---
title: 'Page personalization '
description: 'XM Cloud provide ways to ensure business can give the best content to visitors on their site by building personalization of pages to specific audiences. '
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-30'
created: '2025-06-30'
audience: ['Product Owner', 'User']
---

## Context
Using personalization in XM Cloud offers significant benefits for businesses aiming to optimize their digital experiences for their site users. [Personalization](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html) helps businesses tailor content to specific audiences based on user data and behavior, leading to higher engagement and uptakes in call to actions.

> An [analytics idenfier](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html) is required for your site to personalize and track analytics; make sure that this has been enabled.

## Execution
A business might use personalization in XM Cloud to highlight specific next actions to take based on a user's previous page browsing history or linked to a UTM they entered the site with. This helps create a more dynamic and effective user experience, ultimately boosting customer satisfaction and overall business outcomes.

In XM Cloud, you can control how analytics and personalization are calculated: whether they apply to one site language, all the languages of a site, or to several sites together. Make sure that you have an analytics identifier is setup - follow the [Manage personalization and analytics for sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html) documentation for further information.

Strategically planning for a business's page personalization using XM Cloud is essential because it allows brands to deliver tailored experiences that can drive customer engagement and help achieve the overall business goals such as improving conversions. 

By leveraging XM Cloud's personalization capabilities, businesses can test different variations of content, layouts, or functionality to determine what resonates best with their audience. A well-thought-out strategy ensures that testing is aligned with business goals, preventing wasted resources and providing optimizing results. Personalization, when planned correctly, enhances customer satisfaction by offering relevant and meaningful experiences.

The personalization functionality within XM Cloud provides a simple way to implement the most common website personalization use cases through personalizing pages. If your requirements are looking to have more control over customized personalization rules, Sitecore Personalize will be required. 

### Getting started with XM Cloud Personalize
Setting goals and KPIs before starting any personalization journey is crucial to clarify the business objectives within the businesses specific industry. Personalization projects can involve a variety of strategies and tactics, from dynamic content delivery to personalized next best actions for specific audiences. 

Having clear goals helps the business define what success looks like. For example, is the business aiming to increase conversion rates, drive  upsells, or boost customer retention.

| Step | Title                     | Description |
|------|---------------------------|-------------|
| **1**    | **Personalize Strategy**      | When starting to implement a personalization strategy for Sitecore XM Cloud its key to consider who are the audiences that will gain value from personalization and what pages should be the focus point. When you have a backlog of ideas then it is suggested to prioritise these different audiences by how much volume do they typically generate when they come to the site and how valuable are they to the business. |
| **2**    | **Select a Page to Personalize** | Upon choosing the personalized audience you wish to create, select the existing page that you want to build personalize content for. Start with simple component swaps—like banners, CTAs, or hero images. |
| **3**    | **Define Audience Groups**   |Use the audience builder to define your audience groups. You can select from various out-of-the-box conditions to specify who will see the personalized content. <br/>  <br/> [Conditions](https://doc.sitecore.com/xmc/en/users/xm-cloud/specifying-variables-for-conditions.html) might include user behavior, demographics, or other criteria available using XM Cloud. For example if a business had a social media campaign with a specific call to action - this campaign message/ imagery/ content can then be reflected on the landing page of your site to ensure a continuous journey for their customers. <br/><br/> If your use cases are move complex, it might be worth reviewing if you need to [Move to Sitecore Personalize](/learn/accelerate/xm-cloud/optimization/user-experience-optimization/moving-to-Sitecore-personalize). |
| **4**    |**Create Page Variants**     | For each audience group defined, create different page variants. These variants will contain the personalized content tailored to each audience segment created. This includes adding /removing components or tailoring images and copy to reflect the audiences needs.|
| **5**    | **Preview and Test**         | Use the preview feature to test how the personalized content will appear to different audience groups. Make sure everything is working as expected. |
| **6**    | **Publish**                   | Once you are satisfied with the personalization setup, publish the page. The personalized content will now be live and visible to your audience based on the defined rules. |

Review the [Personalize](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html) documentation for in-product steps to configure this. 

## Insights
### Personalize pages with AI
With Personalize and content customized to different audiences, visitors to your website get to see content that matches their expectations and requirements. For example, you can use the AI capability of Sitecore Stream to rewrite a text written in American English to British English, or using Australian slang. In this way, your audience will see the page that was written specifically for them.

Review the [Personalize pages with Stream](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize-pages-with-stream.html) documentation for further insight.


### Strategy Planning
When planning page variant personalization in XM Cloud there are multiple stages to consider when planning  your personalization strategy. 

Planning personalization ahead of time is crucial for several reasons, especially when it comes to business, marketing, and customer experiences. Personalization requires a consistent approach to be effective, making it easier to execute targeted strategies that resonate with your audience, increasing engagement and planning ahead allows you to streamline the personalization process. 

The business should allocate time to brainstorm and identify who their different audiences are and how they are engaging with the CMS. While brainstorming these audiences it’s important to remember how these audiences can be identified using personalize in XM Cloud. For example if you have a email segment with a particular campaign linked to them, using a UTM can personalize their landing page directly to their needs. 

Once the business has considered their different potential audiences the next step is to prioritize them. Prioritizing personalization is just as crucial as planning it ahead of time. Personalization efforts often require significant time, effort, and resources. 

Prioritizing allows a business to focus on the most impactful audiences first, ensuring that time and resources are being allocated where they'll have the highest potential return on investment. This exercise can be done by plotting the audiences by how much traffic they typically generate on site and how valuable they are to the business. The audiences who have both high traffic and high value should prioritized first.

With the prioritised list, the next step a business should consider is for each potential audience is:
- what page/ pages should be personalized for the audience
- what components should be personalized for the audience
- what content is required for this personalized audience 
- what is the call to action or goal of the personalization for the audience  

This is about choosing where personalization will have the most impact for each audience. Consider High-traffic entry points (e.g., homepage, category landing pages, product detail pages), Conversion-critical pages (e.g., pricing pages, sign-up flows, lead forms, CTAs), Audience relevance based on the page intent and the stage in the customer journey.

Finally with all this information gathered, the business needs to consider if there are any dependencies for marketing or technical teams such as: 
- is there new content that marketing teams have to create?
- is there new components that technical teams have to create?
- is there new campaigns that marketing teams have to create?
- is there new UTM strings that are needed?


## Related Recipes

<Row columns={2}>
  <Link title="Moving to Sitecore Personalize" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/moving-to-Sitecore-personalize" />
  <Link title="Testing experiences" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/testing-experiences" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Manage personalization and analytics for sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html" />
    <Link title="Page personalization and component A/B/n testing" link="https://doc.sitecore.com/xmc/en/developers/jss/22/jss-xmc/page-personalization-and-component-a-b-n-testing.html" />
    
  <Link title="Specifying variables for conditions" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/specifying-variables-for-conditions.html" />
</Row>







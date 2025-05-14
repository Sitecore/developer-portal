---
title: 'Web vs Interactive Experiences'
description: 'Understand the differences between web-based and interactive experiences in Sitecore Personalize to choose the right approach for each use case.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['All']
product: ['Personalize']
---
## Context
Part of any personalization journey is figuring how how to provide timely, pertinent, and relevant content to the user. And how will we deliver it to them - do you need the content to render directly to your website, in your app or somewhere else in their journey? This decision affects where the content shows up, how it's delivered, and who needs to build it.

## Execution
[Personalize Experiences](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiences.html) enables a business to create personalized content, offers, and operational messages based on real-time behaviour, propensity scores, product recommenders etc. These can be achieved in two ways - Web Experiences​ or Interactive Experiences​.

### Web Experiences ​

Designed specifically for marketers, a web experience facilitates personalization on web pages, without relying solely on developers. ​

Web experiences is a total client-side integration where the business can inject HTML, CSS, Javascript on the top of the webpages rendered content and is a great way to set up experiences quickly without technical assistance, additionally web experiences can be deployed without needing to make a deployment to change website code. ​A web experience can be created from the out of the box template library or brand specific reusable templates that can run on your website.

<img src="/images/learn/accelerate/cdp-personalize/image-20250219-212837.png" alt="Creating a web experience"/>
<br/><br/>

Web Experiences are focused specifically on personalizing interactions on web pages or web based applications, creating experiences that are meant to present personalized content directly on your website, the moment a visitor arrives or performs an action. Whether you want to display a promo banner, product recommendation, or personalized message, you can act in real time.

They are easier to set up and manage compared to interactive experiments using web templates​. Marketers can create, deploy, and update experiences without heavy development efforts, which enables them to go live faster and upkeep more easily.

Setting up them is also useful for A/B testing for quick learnings that can then be turned to always on. Once you know what works, you can easily turn the winner into an “always-on” personalization for ongoing impact.

### Interactive Experiences​
Interactive Experiences are an omni-channel method for deploying personalization as a service. Like Web Experiences they use [Decision Models](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-decisioning-in-sitecore-personalize.html) and test variants to determine personalized messaging for users. However, instead of injecting this directly into a web page, they will return personalization as a JSON payload which can be consumed by any client, be it your website, mobile app, or marketing automation platform.

Ideal where deep personalization is required, such as showing real-time inventory levels, personalized offers based on user behaviour etc. ​Additionally Interactive Experiences on the web is a method for avoiding the flicker that can be caused by Web Experiences, if flicker is not something that can be accepted, Interactive Experiences are the better option. 

So rather than layering the experience on top of a page as with Web Experiences, Interactive Experiences are built into the page.

Below is an example of an Interactive Experience response template that has been written for Homepage Personalization in financial services.

```
<#assign persona_node = getDecisionModelResultNode("Calculate Persona")>
{
  "persona": "${persona_node.outputs[0].persona}"
}
```
<br/><br/>Example Interactive Experience Response
```
{
  "persona": "personal_loan"
}
```

Interactive Experiences can be used to create personalization on all channels like web and apps.​ In comparison to web experiences they are designed to test and optimize personalized content and offers across the entire technology stack​.

In addition:
- Support personalization on any digital channel - not just web
- Ideal for moving an A/B test in web experience into an “always on“ state
- More integrated into the channels and loads all at once with the other components and content
- Only Interactive Experiences allow for data to be added to the request at execution time

### Web vs Interactive
Deciding between Web and Interactive Experiences isn't merely a matter of where you show the content—it's a question of how fast you can move, who's doing the work, and how sophisticated your personalization requirements actually are. 

### Web Experiences are best when you need to move fast.
If you want to try out a message or launch a promo on your website, Web Experiences get you there the quickest. They're easier to set up, less technical-support-heavy, and built for marketers. Think of them as the go-to for quick wins and learnings—ideal for testing something today, then turning what's performing well into an always-on, long-term experience.

They're also a good choice when your organization lacks an abundance of technical resources.
You don't need a developer to get started. The in-built templates and tools are designed for non-technical users, and you can directly create and control experiences without adding to someone's sprint backlog.

### Interactive Experiences are better when things get more advanced.
If your campaign needs to use data, bring in real-time behavior, or run outside your website—like in an app or email—this is where Interactive kicks in. It's more versatile, but also more technical. You'll need developer assistance, but in return you get control over timing, data inputs, and where the experience shows up.

They're also handy in contexts where you do not have access to a Browser ID. For example, when configuring a marketing automation tool, Interactive Experiences can be requested using an identifier such as email, or phone number instead of Browser ID. With Interactive Experiences, you can go deeper—you can pass in custom fields such as UTM parameters or loyalty status so that the experience is even more personalized.

And if you're cross-channel or global in scope, Interactive is the way to go. For companies that need to provide consistent personalization across many languages or channels, Interactive Experiences provide one scalable means of doing it all.

In short:
- Use Web Experiences when you want speed, simplicity, and minimal tech involvement—especially on your website.
- Use Interactive Experiences when you need flexibility, scale, or personalization that goes beyond the browser.

## Insights
Web and Interactive Experiences are a great way to help increase a website/ app activity, conversion rate and encourage users to focus on certain content within the website. When correctly designed, these experiences can grab users attention and be used to highlight sales, subscriptions, email updates and so on. However, there are some things to remember when developing an efficient component for your businesses channels. You should create experiences that are eye catching, add value and avoid disturbing users. A poorly designed strategy can harm conversions, increase the sites bounce rate, and disrupt the flow of your users experience.

The key message to remember is that when using experiences, you must connect the user's intent on the site to the call to action. Here are some best practices:

### Avoid Irritating The User

Consider the user experience when adding web experiences to your site, and the number encountered per page. One or two can be an effective way to engage with a use. However, adding more can irritate users into leaving the site altogether. It's important to consider their timings and try to avoid disturbing the user simultaneously. This key call to action message could be overlooked rather than highlighted if multiple messages are fighting for attention.

Try to avoid experiences overlapping with the actual content of the website, excluding the pop-up takeover, which is designed specifically for this purpose. Using a bit of obscurity can effectively blend messages with the website's appearance, but it should never completely obscure the website or app content.

Always include an easy way to get out of the experience if it's a pop-up takeover: either click outside of it or place a clear X button in the top-right.

### Think About Timing

Timing is a significant factor when it comes to experiences. If they appear too soon, such as when the page has yet to finish loading, it can be annoying and disruptive. If they are too late, you could miss additional conversions. Consider the user experience. For instance, if users are browsing the details of a plan or product, displaying a corner pop-up for the webchat function can be more effective in offering them the opportunity to gather information tailored to their personal needs. In this case, the web experience provides a pleasant bonus to the user at the time when they are considering converting.

To find the perfect time when a web experience should be triggered, take a look at the average time spent on the website in your analytics. This will vary site by site. What is the timing where there are the highest abandoned carts/pages and how can the user be engaged before they hit this threshold.

Examples of timing for web experiences:
- Upon entry.
- After a certain scroll depth.
- Triggered by an action.
- Immediately before exiting.

### Design Consistency

Keep in mind the style and branding of the overall site when adding web experiences, like any element of your website, they contribute to your brand’s perception.

Consider adding a pattern/alternative color background or relevant picture to grab the attention of users but also complimenting your site. This is so the experience can distinguish itself from the site's overall content.

If your branding has colorful and strong visuals, then using minimalist designs will clash and be hard to notice against the style of the actual website. When creating experiences it's important to base this on your site’s overall color scheme, they will come across as less intrusive – making your users more likely to interact and convert.

### Message Communication

The aim of web experiences is to deliver extra value, and we should know that users are also aware of this. So, when one appears, they’re going to be drawn to that specific information or value-added opportunity. When adding experiences to your channels and what that message should include, here are some rules to consider:

1. Avoid experiences for the sole objective of having a loud design element in that location on the website. If you waste users time with a meaningless disruption, you can lose their trust.
2. Every experience should bring some value to users. If not, people wouldn’t care about them, and would not be inclined to provide their email or any other kind of personal information.
3. The key message to remember when web experiences is that the user intent on that specific page must connect to the call to action.
4. The stage of the user journey should also be considered when discussing content. The same message should not be communicated to users in different stages of the buying process.
    - It’s better to push a sales message in a more advanced stage, such as a notification widget for when a product was last purchased by a user. Highlighting this to those who are already considering making a purchase.
    - To early-stage visitors who may be browsing and yet to be fully converted, an email-capture-corner to receive updates on prices and so on, is a good opportunity to capture their details for email mailing lists and encourage conversion at a later opportunity.
    - If you want to give users something to contemplate while they move around the site, consider putting in a sidebar experience.

5. Experiences approaches and design can be difficult to pick in order to receive optimal results. However, they can be combined with targeting scenarios to improve their efficiency and AB testing to find the best application all working together to convert users. The ways to identify what wording and approach that has the highest conversion rate, spend time testing:
    - Headline variations.
    - Value proposition variations.
    - Call to action variations (sign up now as opposed to get more information).
    - The length of the wording included (minimal as opposed to longer copy).

## Related Recipes

<Row columns={2}>
<Link title="Use Case Scoping" link="/learn/accelerate/cdp-personalize/pre-development/use-case-scoping" />
<Link title="Omnichannel Preperation" link="/learn/accelerate/cdp-personalize/pre-development/omnichannel-preperation" />

</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Introduction to experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiences.html"/>
  <Link title="Introduction to decisioning" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-decisioning-in-sitecore-personalize.html"/>  
  <Link title="Configure identity rules" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/configure-identity-rules.html"/> 
</Row>



---
title: 'Moving to Sitecore Personalize'
description: 'This recipe provides a for organizations moving from Sitecore XM Cloud’s OOTB personalization features to the more advanced Sitecore Personalize platform.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-16'
created: '2025-06-16'
audience: ['Product Owner', 'User']
---

## Context
With every instance, XM Cloud include personalization feature by default which enables content authors to tailor experiences based on basic conditions such as geography, behaviour, or referral source. But as personalization strategies mature and requirements change, teams often encounter use cases that go beyond these capabilities.

## Execution
[Personalize in XM Cloud](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html) is a great starting point for teams beginning their journey into experience optimization. It’s natively integrated into Pages, supports rules-based targeting, and is ideal for scenarios like:

- Displaying region-specific banners or promotions
- Hiding or showing content based on campaign referrals
- [A/B/n testing](https://doc.sitecore.com/xmc/en/users/xm-cloud/a-b-n-testing.html) individual components
- [Analyze dashboard](https://doc.sitecore.com/xmc/en/users/xm-cloud/analyze.html) covering site, page and form analytics

As your personalization needs evolve, such as targeting logic, real-time decisioning, or personalization across multiple touchpoints, it’s time to consider [Sitecore Personalize](https://doc.sitecore.com/personalize).

There are a few scenarios where adopting Sitecore Personalize can help unlock additional value 

| Scenario | What Sitecore Personalize adds |
| - | - | 
| Dynamic messaging|Personalize based on real-time behaviour, profiles, and attributes example: Show a “Welcome back, Alex! Here’s your next best action” banner, personalized with their name and suggested offer.|
|Geotargeting & device targeting|Remove variant limits and enable highly specific personalization across user attributes example: Display a “Find a store near you” link for users in `<selectedcountry>`.|
|Behavioural targeting|Use more complex conditions example: If a user viewed the product page 3 times in a week but didn’t convert, trigger a prompt popup|
|Testing & optimization|Launch multi-variant tests, optimize journeys across sessions, and define custom experiment templates|
|Audience segmentation|Personalize by roles, behaviours, CRM attributes, and Customer Data Platform (CDP) -based segments|
|Time-based personalization|Adapt experiences to each visitor’s local time or specific triggers example: “Good morning” at user’s local time as opposed to “Good morning” before noon.|
|Analytics & reporting|Access detailed analytics, track performance by audience, and analyse outcomes across sessions and channels|
|Recommendations|Deliver real-time content or product recommendations personalized to browsing behaviour|
|Multi-channel orchestration|Coordinate personalization across email, app, and other channels for cohesive journeys|
|Behavioral triggers|Respond to real-time events (e.g., form submission, cart abandonment) with personalized follow-ups|
|Data-driven personalization|Leverage CRM, CDP, or external systems to tailor messaging using unified customer profiles|

### How to approach the transition
Moving to Sitecore Personalize doesn’t require a full-scale migration on day one. You can still continue using the current conditions and A/B/n tests that you have setup and phase the approach - enabling you to retain existing value while unlocking more advanced capabilities over time.

#### 1. Planning
Begin by assessing your current use of personalization:
- Keep existing embedded experiments running to maintain continuity and value.
- Identify new personalization opportunities that require advanced features, such as cross-channel targeting or profile-based segmentation.
- Plan how advanced capabilities will be utilized across journeys, touchpoints, and audiences, in alignment with business goals.

A self-assessment checklist is available in the [Insights](#Insights) sections.

#### 2. Implementation
Start introducing Sitecore Personalize gradually:
- Developers need to initialise [Cloud SDK](https://doc.sitecore.com/sdk/en/developers/latest/cloud-sdk/sitecore-cloud-sdk-for-javascript.html).
- Enable new features in Sitecore Personalize such as [web experiments](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-web-experiments-in-sitecore-personalize.html), [decision models](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-decisioning-in-sitecore-personalize.html), or [trigger-based personalization](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-triggered-experiences-in-sitecore-personalize.html).
- Begin implementing advanced scenarios that go beyond XM Cloud’s scope, like real-time content changes, deeper targeting, or integration with customer data.

#### 3. Optimization
Once foundational capabilities are in place, expand your strategy:
- Utilize [advanced segmentation](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/introduction-to-batch-segmentation.html) powered by [Sitecore Customer Data Platform](https://doc.sitecore.com/cdp) or external systems for more tailored experiences.
- Implement predictive recommendations based on behavioural signals and profile data to increase relevance and engagement.
- Leverage advanced content delivery and analytics to continuously test, optimize, and improve experiences across channels.

Training and enablement will be key in any transition - Sitecore Personalize introduces [new concepts](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/glossary.html) like decision models, web experiences, and experiments. Make sure teams are trained to use them effectively, and are now part of their day-to-day content flows. It will also enable more capabilities including decision, so start thinking bigger than swapping content.

## Insights
Use this self-assessment to determine if your personalization strategy would benefit from Sitecore Personalize.
- Do you want to create more than [eight page variants](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-page-variant.html)  to support localization, campaigns, or segmentation?
- Are you running [multiple A/B/n tests per page](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-an-a-b-n-test.html) and need to test more then the current audience setup?
- Would you benefit from using[prebuilt templates and components](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/create-content-for-a-web-experience-using-a-web-template.html) to streamline experiment and variant creation?
- Are you looking to target users based on advanced criteria, such as CRM data, behavioural patterns, roles or authentication?
- Do you want to use audiences that go beyond geography or referral source - like loyalty status, education domain, or lifecycle stage?
- Is there a need to build richer customer profiles and personalize across sessions and touchpoints?
- Would you like to dynamically adapt content based on real-time behaviour or customer attributes?
- Are you interested in recommendations to serve next-best actions, offers, or products?
- Is your team ready to go beyond rules-based personalization into predictive or intent-driven experiences?
- Are you seeking deeper visibility into customer behavior and experience performance?
- Would more granular reporting help your team understand and optimize personalization impact?
- Are you looking for insights across the full journey - not just individual page performance?
- Do you need to run experiments and personalization simultaneously on the same page?
- Would your testing program benefit from multi-variant experiments without limitations?
- Are you aiming for more flexible testing logic across components and pages?

## Related Recipes

<Row columns={2}>
  <Link title="Page personalization" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/page-personalization" />
  <Link title="Testing experiences" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/testing-experiences" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Create a page variant" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-page-variant.html" />
  <Link title="Create an A/B/n test" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/create-an-a-b-n-test.html" />
  <Link title="Analyze" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/analyze.html" />
  <Link title="Understanding data limits in decisioning and conditions" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/understanding-data-limits-in-decisioning-and-conditions.html" />
  <Link title="Page personalization and component A/B/n testing
" link="https://doc.sitecore.com/xmc/en/developers/jss/22/jss-xmc/page-personalization-and-component-a-b-n-testing.html" />
</Row>









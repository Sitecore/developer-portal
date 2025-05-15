---
title: 'Segmentation'
description: 'Batch segmentation enables a business to query and build custom segments at scale and speed using any attributes that the organization sends.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['All']
product: ['CDP', 'Personalize']
---

## Context
Segmentation is a foundational capability in a Customer Data Platform as it enables a business to query and build custom segments at scale and speed, using any attributes that the organization has setup.  This capability is what we use to personalize an experience, measure engagement, and message across channels. It doesn't matter if you are building personalized landing pages, triggering campaigns, or running tests: segmentation is an essential building block.

## Execution
Segmentation allows you to group customers based on shared data—attributes, behaviors, or events—so you can personalize content, trigger campaigns, and power analytics across the experience.

In a composable architecture with Sitecore CDP and Personalize, segmentation drives:

- Real-time personalization on-site or in-app
- Audience targeting for experimentation
- Campaign lists and data exports
- Activation across channels like email, ads, or push

You’ll need to define how segments are built, how they’re used, and who maintains them. This will influence your architecture, data model, personalization strategy, and even your success metrics.

Using segmentation in a CDP creates many benefits that help businesses optimize their marketing strategies, improve operations, and enhance customer experiences. Key advantages include:

| Advantage | Detail |
| - | - |
| Personalization | Tailor content and experiences to different customer segments. Relevant messages and offers generate conversion and engagement through addressing individuals according to their requirements and interests. |
| Improved Targeting | Target particular customer or consumer segments with greater accuracy. With demographics (interest, age), campaigns are optimized and made more precise with behavior (site behavior). | 
| Enhanced Customer Insights | Analyze segmented data to reveal behavior patterns and preferences. These findings guide strategic planning and allow for more effective marketing campaigns. |
| Real-Time Data Utalization | Sitecore CDP uses real-time information, which allows segments to be updated after the latest customer interactions. This means that marketing is relevant and timely. |
| Predictive Analytics | Segment customers by their likelihood to engage, buy, or churn. It supports early engagement and retention. |
| Cross-Channel Consistency | Use shared segments across channels to provide consistency of message and cohesive customer experiences on web, e-mail, advertising, etc. <br/><br/>Read more on the [Omnichannel Preparation](/learn/accelerate/cdp-personalize/pre-development/omnichannel-preparation) recipe. |
| Optimization and Testing | Segment targeting enables strategy, message, or experience testing under controlled conditions. Find out what works—and keep refining |

### Implementing Segmentation
Building effective segments in Sitecore CDP requires more than just picking attributes and behaviors—it starts with understanding the goal, validating the data, and applying logic carefully. The following walks through the key steps to design, build, and manage segments that are accurate, actionable, and aligned with business outcomes.

#### 1. Define the Use Case

Before building any piece, decide what its purpose is. Are you going to be segmenting for retention, acquisition, upsell, testing, or personalizing individual experiences? Deliberate on the business outcome first—it drives logic, the type of data required, and where you'll be using the segment (e.g., on-site personalization, e-marketing campaigns, measurement, or tests). Consider, too, if you'll be repeating (reusing) the segment across multiple channels or experiences. Since segmentation cuts across marketing, data, and tech, involve the right people upfront and make sure everyone is aligned with respect to intent and design.

#### 2. Analyze the Data

Use Sitecore CDP query functionality to review your data before defining a segment. Check how many of your customers have certain attributes or behaviors. This process checks whether a segment would be large enough to be valuable and if the filters are reflective of genuine customer behaviors. While building, at times check the audience number. If everything does not seem right, check your comparators (i.e., equals vs. contains), date filters, and event logic.

#### 3. Choose Segment Type

Choose batch and real-time segments depending on the use case. Batch segments are updated according to a schedule and are best suited for campaign targeting, exports, and reporting. Real-time segments examine profiles at the moment and are required for dynamic experiences or triggered decisioning in a session.

#### 4. Define Segment Logic

Pair behavior-based segments like product browse, cart abandonment, or booking history with customer attributes like location, account status, or loyalty tier. Use date ranges like "in last 30 days" or thresholds like "more than 3 visits" to qualify the definition further. Optimize the slice in each step so that it's meeting expectations based on audience size. While segments are refreshed nightly, review definitions from time to time as your pool of customers changes or you gain new data.

#### 5. Use filter groups wisely. 

Logic filtering matters. AND is processed before OR and NOT in Sitecore CDP, and this can wholly change the outcome of a segment. It is easy to unknowingly filter our audience by mistakenly using logic operators. Avoid using nested groupings of filters with care and always make sure that your logical design is identifying business intent. Pay close attention to rule order with nested groupings of different types of logic.

#### 6. Create and Preview

Once you've tightened up your logic, you can construct the segment in Audiences > Segments using either expression editor or visual builder. Test the outcome to ensure that the logic is returning expected profile count and includes sample customer records. This allows you to notice gaps in logic before the segment is put in production.

#### 7. Activate and Monitor

After validating, apply your segment where it matters:  in Personalize for real-time decisioning, in Experiences for conditional content delivery, in Experiments for targeted A/B testing, or via Audience Sync and exports to support external campaigns. Monitor each over time and adjust usage accordingly. 

#### 8. Maintain and Reassess

Periodically, no matter how well you design segments initially, you must go over them from time to time. When customer behavior changes with company expansion or fresh information is received, reassess segments to redefine them in terms of objectives. Track growth of segments, identify non-performing or unused segments, and tighten logic if necessary to maintain strategic integrity.

## Insights
Batch segmentation can be used to target specific guests for to any services such as paid media, email service providers, push notification services etc​, eliminating the need to manually create, upload, and update segments from various sources.​ There are two ways to create batch segments - Basic and Advanced Segmentation. For more information on these Segmentation types, head to the Insights section.

### Basic Segmentation

Basic segmentation in Sitecore CDP involves creating segments using predefined rules and attributes. This method is business user friendly and doesn't require technical expertise. Key aspects include:

- You can create segments based on attributes such as demographics, behaviors, and interactions. For example, segmenting customers by their purchase history or website visits.
- The segment builder interface allows users to add rules and attributes easily, making it accessible for marketers and non-technical users.

<img src="/images/learn/accelerate/cdp-personalize/image-20250401-151546.png" alt="Segmentation rules user interface"/>
<br/><br/>

### Advanced Segmentation
Advanced segmentation in Sitecore CDP uses more complex techniques and requires a deeper understanding of data and SQL. Key aspects include SQL Queries where users can write custom SQL queries to create highly specific and complex segments. This allows for more granular control over the segmentation criteria.

Advanced segmentation is ideal for users with technical expertise who need to create highly targeted and dynamic customer segments. 

When building a segment, a user can see the number of guests that currently have a specific attribute, before selecting it, to help understand the size and scale of the audiences as they are being built. 

For example, these embedded statistics could let a user know how many guest profiles have a language attribute, and who has French versus English as their preferred language. The business can use this instant data to decide which field or value to include in the overall segment query.​​

If a business has members of the team who are advanced users of segmentation, they can enable advanced mode to write SQL directly into the UI and apply regression logic, quartiles, and other advanced segmentation capabilities. Segments built can also be sense checked in advanced mode.​

A business can use segmentation to collect purchasing patterns of different demographics and can apply micro-segmentation to identify who their active customers are, including what they search for, what they purchase, when they have purchased, and using what device/ app or web.​​

Businesses can also use segments throughout Sitecore Personalize in [decisioning and real-time audiences](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/manage-decision-model-variant-audiences.html). To do this, a user must [schedule the segment](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/schedule-a-segment-in-sitecore-cdp.html). Sitecore CDP continuously processes, evaluates, and interprets new data to determine segment eligibility within 24 hours of an interaction, resulting in more relevant and effective campaigns.​

## Related Recipes

<Row columns={2}>
  <Link title="Omnichannel Preparation" link="/learn/accelerate/cdp-personalize/pre-development/omnichannel-preparation" />
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Using segments within Sitecore CDP" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/using-segments-within-sitecore-cdp.html"/>
  <Link title="Introduction to batch segmentation" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/introduction-to-batch-segmentation.html"/>  
  <Link title="Schedule a segment in Sitecore CDP" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/schedule-a-segment-in-sitecore-cdp.htmll"/>
  <Link title="Manage decision model variant audiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/manage-decision-model-variant-audiences.html"/>
</Row>

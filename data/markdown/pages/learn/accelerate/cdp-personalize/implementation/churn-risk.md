---
title: 'Identifying Churn Risk '
description: 'Identifying Churn Risk Using Sitecore CDP: Inactive vs. Churned Customers'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-09-15'
created: '2025-09-15'
audience: ['Project Manager','User', 'Product Owner']
features: ['CDP', 'Personalize']
---

## Context
When building a strategy to reduce churn, it's important to start with a clear understanding of who your at-risk customers are. Within Sitecore CDP, businesses have a powerful product to create dynamic, data-driven segments that can segment customers showing signs of disengagement and at risk of churn. But not all disengaged users are the same, and defining the difference between inactive and churned customers is essential.


## Execution
At first glance, an inactive customer and a churned customer might look alike, they’ve both stopped engaging. But there's an important distinction:

- **Inactive Customer**: Someone who has not interacted with your brand recently but may still return.  
- **Churned Customer**: Someone who has likely churned permanently if they do not have any additional engagement from the brand, based on extended inactivity or behavioral signals.  

Recognizing this difference allows businesses to apply tailored retention or win-back strategies based on how far down the disengagement path a customer has gone.


### Segmenting Criteria: Recency and Frequency

To define and detect both inactive and churned customers, we recommend using two foundational behavioral metrics: **Recency** and **Frequency**.

#### 1. Recency: How recently did the customer engage?

When evaluating recency, consider two behavioral patterns:

- **Search/activity but no purchase**: Has the user been actively browsing or searching your site, but hasn’t completed a transaction within a certain timeframe?  
- **No recent activity or purchase**: Has the customer neither visited the site nor made a purchase within a defined period?  

Suggested Recency-Based Timeframes:

- **Inactive customers**: No activity or purchase in the last 6–12 months
- **Churned customers**: No activity or purchase in the last 12–24 months

These timeframes should be tailored to your business model. For example:  
- A grocery delivery service may define churn as 2–3 months of inactivity  
- An airline or luxury retailer may extend that to over a year


#### 2. Frequency: How often has the customer purchased in the past?

Frequency helps you understand the baseline engagement of your customer:

- Segment customers who used to purchase frequently (e.g., monthly) but have since stopped  
- Separate from customers who only purchased once or twice and never returned  

This distinction can influence the messaging and incentives you use:  
- Previous high-frequency customers may respond better to personalized reactivation campaigns
- One-time buyers may need more foundational engagement strategies


## Insights

Using Sitecore CDP, you can construct these segments using filters based on customer behavior attributes such as:

- Last seen on-site  
- Last transaction date  
- Total number of purchases  
- Session frequency  
- Customer lifetime value  

By combining recency and frequency, you can build smarter segments identifying inactive vs. churn risk groups that reflect your customers’ behavior patterns—allowing you to act before disengagement becomes permanent.

For example, for an Insurance business this would include:
- End of contract for a customer and building a segment to identify those who have purchased a new contract or may be considering other options  
- By building segments for inactive vs. churned groups, the marketing strategy can use different language based on whether the contract is about to expire or has already expired  

Understanding and segmenting inactive and churn risk isn’t just about calling out lost revenue. By drawing a line between inactive and churned customers, and by using behavioral actions like recency and frequency, businesses can create more personalized marketing strategies that bring customers back—and keep them coming back.


## Related Recipes

<Row columns={2}>
  <Link title="Personalization vision" link="/learn/accelerate/cdp-personalize/optimization/personalization-vision" />
</Row>

## Related Documentation

<Row columns={2}>
</Row>

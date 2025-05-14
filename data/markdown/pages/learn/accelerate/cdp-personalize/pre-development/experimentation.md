---
title: 'Experiments Strategy'
description: 'Experiments enable the business to create and test personalized content and offers to a user based on real-time behaviour, propensity scores, product recommenders, and more.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Technical Implementers','Solution Architects']
product: ['CDP', 'Personalize']
---

## Context
Experimentation involves creating and testing personalized content, offers etc to optimize customer experiences. Experiments enable the business to create and test personalized content and offers to a user based on real-time behaviour, propensity scores, product recommenders, and more.

## Execution
Experimentation in Sitecore CDP and Personalize allows businesses to run A/B tests and other types of experiments to determine the most effective customer interactions. The platform uses real-time data to deliver personalized experiences, helping businesses to continuously refine their strategies and improve engagement with their users and customers. This includes  a robust experimentation framework that includes A/B/n testing and multi-armed bandit algorithms. Businesses can create web experiments, interactive experiments, and triggered experiments to test various content and offers. 

Experimentation aims to enhance customer engagement and conversion rates by using data-driven decisioning and continuous growth and optimization.

### Targeted Audience
Experimentation in Sitecore CDP and Personalize targets audiences in several ways. Both products allow businesses to segment their audiences based on different criteria such as demographics, session behavior captured on the businesses tagged channels and transactional data. This segmentation ensures that experiments are conducted on relevant groups, focusing on accuracy and effectiveness for the best results.

|Data types | Details |
|--|--|
|Real-Time Data Utilization | Experiments utilise real-time data to optimise customer experiences. This means that the audience targeted by an experiment can be refined continuously based on their interactions and behaviors.|
|Batch Segmentation |Batch segmentation lets businesses create more detailed and rich audience segments by sending  larger sets of user data into Sitecore CDP. Batch segmentation ensures that the audience data is up-to-date and comprehensive and is useful for running large-scale experiments where having detailed and complete user data is essential.|
|AI and Machine Learning |If a business has access to their own AI and machine learning algorithms, these tools can play an important role in targeting audiences by predicting the best content and offers for different segments. These technologies can help in automating the decision-making process and ensuring that the right message reaches the right audience at the right time.|

### Planning Experiments
When a business are planning their experiments it is important to follow the guide of Smarter Data, Smarter Decisions, Smarter Interactions​. There are three things that should be considered from the start of planning.

1. Who exactly is the audience for this experiment?
2. What is the business trying to test and confirm?
3. How should this be measured to prove success?

Following these guidelines will help the business build their hypothesis, test the theory and learn from their results.  

### Rule Measurement And Goal Setting
​Businesses who are carrying out experiments should implement a measurement process to build discipline in measurement and communicate better with the stakeholders on the value of using Sitecore CDP & Personalize.

The first step is to identify what the business is trying to achieve and then work backwards​ from these points. The team should question the ‘why’ of the experiment which can include but is not limited to:  

- Trying to increase average order value ​
- Get more users to join the loyalty program​
- Increasing clicks on a Subscribe button​
- Improving the Customer Journey ​ ​

This will identify the Primary Goal of the experiment. Using the identified end goal can narrow down what exactly the test should look like by identifying something to test and the intended outcome.

### Barriers to Measurement 
​Clear goals are the best way of measuring the success of an Experiment. Overcoming barriers to measurement in experiments is essential for teams to effectively evaluate the impact of their personalization efforts. Clear and accurate measurement ensures that data-driven decisions are based on real insights, allowing businesses to optimize their customer experiences. Without overcoming measurement barriers businesses risk misinterpreting results, missing opportunities for improvement, and failing to demonstrate the value of their personalization initiatives. Correctly using goals and measurement for experiments will provide continuous learning and refinement and drive better business outcomes and more personalized customer interactions.​

| Barrier | Detail |
| - | - |
|Trying to achive too much too fast |- Trying to run too many experiments at once​<br/>- Wanting to reach all users/customers without testing​​<br/>- Not understanding the importance of measurement​<br/> |
| Unclear starting point |- Barriers around having a blank slate starting point ​​<br/>- Not having guidelines / playbook for what/how/why to measure​​<br/>- Not understanding the outcome upfront​<br/> |
| Lack of prioritisation |- No incentive to return and measure if the business is not asking for it ​​<br/>- No drive to capture measurement​​<br/>- No delivery focus​​<br/>- Unclear end to end owner ​<br/> |
|Technical readiness |- Not knowing where is the data required? ​​<br/>- What are the dependencies in using a certain KPI? ​​<br/>- Not knowing what are the dependencies in measuring using an AB test or Always on Reporting?​<br/> |

## Insights
When [scoping](/learn/accelerate/cdp-personalize/pre-development/discovery) a Personalized use cases, creating and maintaining an Experience Tracker is a very important step for the building and launching stages. The Experience Tracker is essential for delivering a seamless, personalized user experience and achieving business goals effectively. 
**1. Having a well considered Hypothesis and Key Metrics**: By having a well considered hypothesis with specific goals attached from the beginning of Use Case planning is the best way to ensure it has been planned, tracked and reviewed. This avoids questions of why this use case was planned, launched and delivered.  
**2. Experience Details**: All the details required for the Use Case can be listed here. Such as what it is looking to achieve, who it will target, channels included, AB test yes or no, what data flow is required, the UX design, when it is set to go live and for how long.
**3. Consistency**: Ensures a consistent user experience across different touchpoints by keeping track of user journeys and interactions.
**4. Performance Measurement**: Helps in measuring the effectiveness of personalization strategies and campaigns, enabling data-driven decision-making.
**5. Optimization**: By tracking experiences, the business can identify what works and what doesn't, allowing for continuous optimization of personalized content.

See below for an example of a lean canvas included in an Experience Tracker.

<img src="/images/learn/accelerate/cdp-personalize/image-20250414-151110.png" alt="Experience Tracker example"/>
<br/><br/>

## Related Recipes

<Row columns={2}>
  <Link title="Segmentation" link="/learn/accelerate/cdp-personalize/pre-development/experimentation" />
  <Link title="Developing an Identity Strategy" link="/learn/accelerate/cdp-personalize/pre-development/identity-strategy" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Introduction to experiments in Sitecore Personalize" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiments-in-sitecore-personalize.html"/>
  <Link title="Getting started with web experiments" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/getting-started-with-web-experiments.html"/>  
</Row>

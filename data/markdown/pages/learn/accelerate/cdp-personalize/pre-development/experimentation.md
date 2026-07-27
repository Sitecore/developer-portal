---
title: 'Experiments Strategy'
description: 'Experiments enable the business to create and test personalized content and offers to a user based on real-time behaviour, propensity scores, product recommenders, and more.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-07-30'
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
|**Real-Time Data Utilization** | Experiments utilise real-time data to optimise customer experiences. This means that the audience targeted by an experiment can be refined continuously based on their interactions and behaviors.|
|**Batch Segmentation** |Batch segmentation lets businesses create more detailed and rich audience segments by sending  larger sets of user data into Sitecore CDP. Batch segmentation ensures that the audience data is up-to-date and comprehensive and is useful for running large-scale experiments where having detailed and complete user data is essential.|
|**AI and Machine Learning** |If a business has access to their own AI and machine learning algorithms, these tools can play an important role in targeting audiences by predicting the best content and offers for different segments. These technologies can help in automating the decision-making process and ensuring that the right message reaches the right audience at the right time.|

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
|**Trying to achive too much too fast** |- Trying to run too many experiments at once​<br/>- Wanting to reach all users/customers without testing​​<br/>- Not understanding the importance of measurement​<br/> |
| **Unclear starting point** |- Barriers around having a blank slate starting point ​​<br/>- Not having guidelines / playbook for what/how/why to measure​​<br/>- Not understanding the outcome upfront​<br/> |
| **Lack of prioritisation** |- No incentive to return and measure if the business is not asking for it ​​<br/>- No drive to capture measurement​​<br/>- No delivery focus​​<br/>- Unclear end to end owner ​<br/> |
|**Technical readiness** |- Not knowing where is the data required? ​​<br/>- What are the dependencies in using a certain KPI? ​​<br/>- Not knowing what are the dependencies in measuring using an AB test or Always on Reporting?​<br/> |

## Insights
### Experiment strategy needs to be documented
When [scoping](/learn/accelerate/cdp-personalize/pre-development/discovery) a Personalized use cases, creating and maintaining an Experience Tracker is a very important step for the building and launching stages. The Experience Tracker is essential for delivering a seamless, personalized user experience and achieving business goals effectively. 
**1. Having a well considered Hypothesis and Key Metrics**: By having a well considered hypothesis with specific goals attached from the beginning of Use Case planning is the best way to ensure it has been planned, tracked and reviewed. This avoids questions of why this use case was planned, launched and delivered.  
**2. Experience Details**: All the details required for the Use Case can be listed here. Such as what it is looking to achieve, who it will target, channels included, AB test yes or no, what data flow is required, the UX design, when it is set to go live and for how long.
**3. Consistency**: Ensures a consistent user experience across different touchpoints by keeping track of user journeys and interactions.
**4. Performance Measurement**: Helps in measuring the effectiveness of personalization strategies and campaigns, enabling data-driven decision-making.
**5. Optimization**: By tracking experiences, the business can identify what works and what doesn't, allowing for continuous optimization of personalized content.

See below for an example of a lean canvas included in an Experience Tracker.

<img src="/images/learn/accelerate/cdp-personalize/image-20250414-151110.png" alt="Experience Tracker example"/>
<br/><br/>

### Learning Phase of a Experiments Strategy
Once the Experiment has reached statistical significance and a winning variant has been declared or the test was deemed inconclusive, what comes next is arguably the most important phase of all, measurement. This stage turns data into meaningful insight, helping the business not only understand what happened, but why it happened, and what to do about it.

It’s easy to declare that a bounce rate has improved, or a conversion rate has grown, but basic data isn’t the end goal. This information needs to be absorbed by the business and reflected on. True value comes from interpreting that data and acting on it. Measurement is what connects experimentation to long-term business success.

Without a solid measurement process in place, even the best-designed test will provide little value if it’s not reviewed and used going forward. Measurement gives your personalization strategy a clear, actionable direction based on what users are telling you through their behaviour.

### The Role of a Measurement Framework
This is where a measurement framework becomes essential. A good framework ensures you’re capturing the right data and interpreting it in ways that align with your business goals. It also gives structure to your learning process. Each test whether it "wins," "loses," or shows neutral results should feed into the businesses Personalization Playbook.

Your playbook should become a living document, cataloguing:
- What you tested
- Who was segmented
- What the hypothesis was
- What the results showed
- What you learned
- What actions were taken as a result

This record of past experiments is critical for informing future personalization strategies. It prevents repetition, highlights what resonates with your users, and gradually builds a library of insights that drive better decisions.

### Learning from all results and not just the winners
It’s tempting to only focus on the winning tests, but there’s just as much to be learned from experiments that didn’t go as planned. If a test didn’t produce a clear winner, don’t dismiss it. Instead, review it with curiosity:
- Did the hypothesis miss the mark?
- Was the audience segment right?
- Was the change substantial enough to make an impact?

Sometimes the lesson is simply that your users don’t respond to a certain type of experience and that’s still a valuable insight. Each failed test is a step toward refinement and deeper understanding.

### Moving Winning Experiences to "Always On"
When you do identify a clear winning experience, the business should consider moving this into your Always On strategy. This ensures you’re continuously delivering the best possible experience to your users, based on proven results. But remember no result is permanent.

Over time, user behaviour evolves, technology shifts, and your business goals change. What worked last year may not be effective today. That’s why it’s crucial to regularly revisit your measurement framework.

A good rule of thumb is to give your measurement framework a review at least once a year. Consider the questions:
- Are we still measuring the right goals?
- Do the personalisation KPIs align with our current business objectives?
- Are we drawing meaningful conclusions from our tests?
- Is our personalization playbook still relevant and up to date?

By treating your measurement framework as a living system, not a one-time setup, you ensure it remains aligned with your business as it grows and changes. So plan your tests, run them well, but most importantly, measure smart, learn fast, and act with purpose.

### When a live personalization test doesn't seem to be performing, what comes next?
Let’s say your business launches an experiment using Sitecore Personalize — perhaps a personalized hero carousel on the homepage targeted to different customer segments. After a few days, the team have checked the analytics and notice there’s seems to be no growth in the selected goals. What now?

Before reacting too quickly, it’s important to step back and understand how experimentation is meant to work and don’t judge the test too early.

It’s natural to want to check on a test daily and change things as you go, especially when performance isn’t what you hoped straight away. But one of the core principles of A/B testing is patience. Businesses run experiments to learn and that means giving them time to reach statistical significance. Drawing conclusions too early can lead to false positives or missed opportunities.

So, if a personalized experiment hasn’t shown value after just a few days, don’t panic. Wait for the test to complete according to the original sample size and applied goals. That’s how businesses should ensure decisions are grounded in evidence, not guesswork.

### What if there’s a risk for the business?
That said, not all tests are equal. If the business feels that a personalized message seems to be actively negatively impacting the user experience or impacting revenue for a specific segment, it’s reasonable to pause and assess. This doesn’t mean the entire idea was flawed — but it may be time to return to the lean canvas and revisit the hypothesis.

The questions to ask are:
- Was the message off-brand or confusing?
- Did the personalization segment make sense?
- Is the creative execution aligned with what the user needs?
- Have we chosen the right goals for measurement?

In these cases, you might explore changing the content of the hero carousel or adjusting the targeting logic within decision table based on thoughtful analysis.

### Classic A/B Testing vs. Multi-Armed Bandits
If the business is particularly risk-averse, running a test linked to potential high return on investment campaign or sensitive to underperforming experiences and if a small drop in the chosen goals can significantly effect revenue then it’s worth asking is classic A/B testing the right approach for all scenarios?

In some cases, a multi-armed bandit testing method may be a better fit. Unlike classic A/B tests, which split traffic evenly for a set time period, a multi-armed bandit tests dynamically shift more traffic toward better-performing variants as results come in. This reduces the exposure to poor-performing variants and can help protect customer experience and revenue in real time.

While a multi-armed bandit isn’t right for every test, especially when learning is the main goal, they can be a smart alternative when performance and responsiveness are critical.

When personalization tests don’t immediately show value, the next steps aren’t always obvious. But it’s important to be patient, trust the businesses framework, and don’t panic. However, if you see clear negative signals or are working in a high-risk area, be prepared to pause, reassess your hypothesis, and consider alternative testing models like multi-armed bandit.

Above all, experimentation should be a thoughtful, intentional to learn, refine, and continually improve the way your brand engages with customers.

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

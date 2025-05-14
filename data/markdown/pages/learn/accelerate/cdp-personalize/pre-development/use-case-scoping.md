---
title: 'Use Case Scoping'
description: 'Generating requirements use cases including data integration.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Solution Architects','Project Managers','Product Owners']
product: ['CDP', 'Personalize']
---

## Context
The Discovery phase of a project is exciting and filled with the possibility of what if. The requirements gathering phase defines what success means for the project and the concrete steps that need to achieve that. Key stakeholders have been identified, integration points noted and use cases developed. With all that in mind, you'll want to document requirements needed for your project. Data integrations and each use case should have a list of requirements developed. 

## Execution
Requirements must be revisited throughout the project lifecycle. They are needed in the beginning of the project to define success and should be tweaked throughout the project as needed. When starting out, it is important to document what integrations are needed and any use cases. 

### Web Tagging
Web tagging plays a key part in the Execution phase of implementing CDP and Personalize, as it allows businesses to track user interactions and behaviors across their digital touchpoints. The key points to understand are: 

#### What is Web Tagging

Web tagging involves placing small pieces of code, often referred to as tags, on a website to collect data about its user activity. These tags help businesses understand how visitors engage with their content, products, and services.

#### How Web Tagging supports Personalization

- **Data Collection** – Web tags capture real-time user interactions, feeding behavioral data into CDP and Personalize. This allows businesses to build customer profiles based on browsing habits, preferences, and engagement patterns.
- **Segmentation & Targeting** – By tagging users based on their actions, businesses can create  audience segments. This means you can create experiences tailored to specific customer behaviors and interests.
- **Triggering Personalized Experiences** – Web tagging allows businesses to trigger personalized messages, recommendations, and offers based on the users activity. For example, if a visitor abandons their cart or does not complete a forum, a tag can activate a retargeting campaign to encourage final conversion.
- **Optimizing Customer Journeys** – Tags provide insights into which content resonates with users, helping businesses refine their personalization strategies. This ensures that customers receives a relevant experiences at every touchpoint.
- **Continuous Improvement** – Web tagging supports iterative personalization, allowing businesses to measure, test, and refine their strategies based on real-time data.

Deploying web tags means businesses can enhance their personalization efforts, improve customer engagement, and drive the desired outcomes in their CDP and Personalize implementation.

### Use Cases
In CDP and Personalize, personalization use cases will usually map to an individual [Experience](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiences.html), [Experiment](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiments-in-sitecore-personalize.html), or [Audience Export](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/audience-export.html). For example, engage a customer after abandoning a cart using a Triggered Experience, or running a test on a new CTA using a Web Experiment. These scenarios should reflect the ideation and goals discussed during discovery.

Each use case should have its own requirements document. 

Questions to consider:
- Who will be responsible for managing the managing the use case?
- Who is the actor in this scenario?
- What are the proposed set of steps to the end goal?
- How do these steps fit into the necessary configuration in CDP/Personalize (e.g. Decisioning rules, Segmentation, UI Design)
- What data systems will need to be engaged to achieve the end goal?
- What is the end action?
- How will this action be achieved?
- What data is needed in CDP for achieving this?
- How will the user experience look when selecting an experience type?
- How will success be measured for this personalization?

### Integrations
During requirements gathering, it's important to go beyond simply listing sources for data pulling and pushing. Sitecore CDP and Personalize offer flexibility in both data collection and export. Data from web, mobile devices, CRMs, and other organizational applications can be used to populate Sitecore CDP and Personalize. Additionally, Audience Exports and Triggered Experiences enable data to be pushed to external applications.

Collaborate with stakeholders to determine which data sources will be integrated into CDP and Personalize, identify sources for data export, and establish the necessary formatting and transformations between applications.

Questions to consider:
- Who is responsible for the data inside CDP/Personalize?
- Who is responsible for data outside of CDP/Personalize? 
- What data is needed inside Sitecore CDP/Personalize?
- What sources will data be imported from?
- What sources will data be exported to?
- What format is needed to ingest data into CDP/Personalize?
- What format is needed when exporting data into other applications?
- What transformations are needed for the data to be workable?
- How will this data be secured?
- Are compliance regulations applicable(GDPR, CCPA)?
- How will compliance regulations be implemented?

Review the [CDP Integrations](/learn/accelerate/cdp-personalize/implementation/integrations/cdp-integration) and [Personalize Integrations](/learn/accelerate/cdp-personalize/implementation/integrations/personalize-integrations) recipes for further information.

### Performance metrics

When scoping a CDP & Personalization integration, it's key for a business to bring forward any existing performance metrics they may have that is actively adding value to the business, whether they come from tools like Google Analytics, an competitor personalization platform, or even anecdotal insights if personalization efforts are just beginning. Key baseline metrics might include conversion rates, bounce rates, average session duration, click-through rates, and segmentation performance. These help establish a performance benchmark and inform the businesses initial personalization strategies.  

When looking to the future of personalization, businesses should identify metrics aligned to their organisations goals—such as uplift in conversion rate per audience segment, engagement with personalized content, revenue per user, frequency of return visits, and the performance of specific personalized experiences. Defining these future-facing KPIs early ensures that personalization efforts are strategically aligned and measurable over time.

### Documenting Use Case
An Experience Tracker is used to document all the requirements, capture measurement placement and designs when planning a Use Case (Web Experiences or Experiments, Full Stack Interactive and Triggered Experiences, Audience Syncs). It is a slide deck which outlines the Hypothesis of an Experience/Experiment and details the Build, Measure, Learn process.

Part of the Experience Tracker includes a Lean Canvas slide which is a key part of the process for planning Use Cases because it is the focus point for all requirements which give clarity, alignment, and focus planning. By capturing all the key questions and statements—such as the business objective, target audience, customer journey stage, data inputs, decision models, and measurement metrics—in a single, concise slide, teams can:
- **Align on goals and priorities** - Everyone has a shared understanding of what the use case is trying to achieve and why it matters.
- **Ensure feasibility and readiness** - It helps identify any gaps in data, tagging, or technical capabilities early—before execution begins.
- **Keep efforts focused and measurable** - With clear objectives and KPIs defined up front, it’s easier to track success and iterate effectively.
- **Accelerate collaboration** - A lean canvas facilitates communication across marketing, data, and development teams.

<img src="/images/learn/accelerate/cdp-personalize/image-20250513-112712.png" alt="Experience Tracker example"/>
<br/><br/>

## Insights
### Living Requirements Documents

While it is always helpful to have a starting place when beginning a project, this does not mean the project is set in stone. Requirements should be tweaked over the lifetime of the project to best align with organizational goals. Always feel free to adjust requirements when necessary, and to keep documentation up to date as changes are made.

### Use Case Led Integrations

A great way to minimise unnecessary effort and maximise value is to be use-case driven in your integrations. This involves building the integrations which enable the use cases of the highest value first, and continuing to prioritise integrations alongside personalization use cases on the basis of value and effort.

## Related Recipes

<Row columns={2}>
  <Link title="CDP Integrations" link="/learn/accelerate/cdp-personalize/implementation/integrations/cdp-integration" />
  <Link title="Personalize Integrations" link="/learn/accelerate/cdp-personalize/implementation/integrations/personalize-integrations" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiences.html"/>
<Link title="Experiments " link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiments-in-sitecore-personalize.html" />
<Link title="Audience export" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/audience-export.html" />  
</Row>

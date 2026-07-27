---
title: 'Operational Governance'
description: 'Define how to shift from implementation mode to continuous optimization, with clear ownership, governance, and personalization strategies in place.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-28'
created: '2025-06-28'
audience: ['Product Owner','Project Manager','User','System Administrator']
---

## Context
Launch is just the beginning. Real value is in the way you watch, learn, and hone after your site goes live. XM Cloud gives you the means to go fast, but to make improved that matter, you need to make sure you have the right governance and measures in place.


## Execution
Monitoring is not an IT job - every development has a stake in performance. And performance is not just about speed - you need to know whether it's working for your end users. Are personalization rules firing as expected? Is content being stuck in publishing? Are APIs slowing down key journeys? 

### Stakeholder shift
The first shift is in stakeholder ownership. During implementation, the focus is often on delivery teams—developers, architects, project managers. But post go-live, ownership moves to operational teams who are driving the business outcomes: marketers, content authors, optimization leads, and product owners. It’s critical that this shift is intentional and supported.

Post-go-live make sure there is time to re-introduce roles and responsibilities to reflect the move from project to product mindset e.g., *Business Owner* becomes *Optimization Sponsor*, *Project Manager* transitions to *Product Owner*. There are different areas where these could land, including but not limited to:

| Area             | New Owner             | Responsibilities                                  |
|------------------|-----------------------|---------------------------------------------------|
| Content          | Marketing / Content Team | Publishing, editorial calendar, optimization     |
| Backlog          | Product Owner         | Continuous feature/content improvements           |
| Analytics        | Data/Insights Lead    | Maintain dashboards, report insights              |
| Change Management| Business Owner        | Training, feedback cycles, comms                  |

### Change Management
Post go-live, clarity around who does what - and how decisions get made - is critical to long-term success. This starts with documenting responsibility map for key activities including:

- Who owns the prioritization of new features, bug fixes, and optimizations?
- Who approves what goes live, and what checks are in place?
- Who monitors performance, identifies test opportunities, and triggers changes?

Successful post-launch operations depend on how well change is communicated, understood, and adopted across teams. Governance is only effective if people are kept in the loop and equipped to act on it.

Set up a regular cadence to share updates on site enhancements, new features, test results and key learnings while tracking performance improvements tied to KPIs. This keeps stakeholders informed, aligns priorities, and reinforces the value of continuous optimization.

Make sure each team has the knowledge to operate effectively, including updating training based on their role and project state:

- Marketers: training on XM Cloud Pages, personalization tools, and campaign setup
- Authors: guidance on structured content, component reuse, and publishing workflows
- Analysts/Product Owners: how to interpret and act on data

Schedule monthly or quarterly optimization sessions to review site KPIs and test performance, discuss what’s working - and what isn’t and gather team input on blockers, wishlist items, or new ideas

### Team Structure: BAU vs New Feature Delivery

After go-live, the implementation team must transition from a single delivery stream to a dual-track model. Small bugs can derail strategic work, delivery teams get stuck in reactive mode. Optimization gets neglected due to lack of focus and bandwidth.

Example - 

| Focus                        | Responsibilities                                                                                                                                                    | Team Roles                                                                                                   | Operating Model                                                    |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| BAU / Maintenance Team      | <ul> <li>Keep the live experience running smoothly</li> <li>Bug fixes</li> <li>Performance tuning</li> <li>Minor content updates and layout tweaks</li> <li>Small iterations and personalization ops</li> <li>Support for marketing campaigns and publishing</li> </ul> | <ul> <li>CMS Developer (Support + Fixes)</li> <li>Web Developer (as needed)</li> <li>Content Ops or Editors</li> <li>QA / Testing</li> <li>Optimization Analyst (optional)</li> </ul>| <ul> <li>Kanban or support-ticket driven workflow</li> <li>Rapid SLAs for business-critical fixes</li> </ul> |
| Feature / New Implementation Team | <ul> <li>Deliver roadmap items, enhancements, or expand the factory (e.g., new brand/region sites)</li> <li>New templates, components, or personalization frameworks</li> <li>Structural content model updates</li> <li>Next phase features (e.g., integration, search, automation)</li> <li>Rolling out next site in a website factory setup</li> </ul> |<ul> <li> Architect</li> <li>CMS Developers & Web Developers</li> <li>QA</li> <li>UX/Design</li> <li>Product Owner</li> </ul> | <ul> <li>Agile sprints aligned with roadmap</li> <li>Structured backlog grooming and sprint planning</li> </ul> |


Irrespective of mode, define the team split and document responsibilities, establish intake processes and prioritization rules for each team. 

### Success Metrics
Post go-live success isn’t just about uptime or site traffic - it’s about value. You need to track the impact of your website through metrics that reflect engagement, effectiveness, and continuous improvement. These KPIs help surface what’s resonating, where users are dropping off, and how well you’re learning and adapting.

Align teams on which metrics matter most, and build dashboards to track and share them regularly across business and technical owners.

| Metric Category | Example KPIs                                                                 | Primary Owner(s)                              |
|------------------|------------------------------------------------------------------------------|------------------------------------------------|
| Engagement       | Page views, bounce rate, session duration                                    | Digital Analyst, Marketing Lead               |
| Personalization  | Number of active tests, velocity to launch, uplift in variant performance    | Optimization Lead, Personalization Strategist |
| Conversion       | Form submissions, lead generation, transaction rate                          | Marketing Lead, Product Owner                 |
| Optimization     | Number of iterations, test completion rates, component/content reusability   | Product Owner, UX Lead, Content Operations    |


## Insights
Testing and validation doesn’t stop after you first go-live - it evolves instead. Continuous validation ensures that your site is not only running but performing as expected across business and user dimensions. As part of your process optimization, make sure that your testing covers:

- Are all critical paths still functioning after recent updates?
- Is personalization still triggering for the right audiences?
- Are analytics and tagging correctly tracking new interactions?
- Have recently published changes been reviewed and approved?

Set up build verification tests as part of every deployment, and schedule QA checkpoints for both content and code before changes go live. For a detailed breakdown of how to structure this, refer to the [Testing Framework](/learn/accelerate/xm-cloud/final-steps/testing-framework) recipe.

## Related Recipes

<Row columns={2}>
  <Link title="Testing Framework" link="/learn/accelerate/xm-cloud/final-steps/testing-framework" />

</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Analyze" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/analyze.html" />
</Row>






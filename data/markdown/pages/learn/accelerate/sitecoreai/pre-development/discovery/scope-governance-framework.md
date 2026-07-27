---
title: 'Scope and Governance Framework'
description: 'Make expectations, responsibilities, and governance clear to keep your XM Cloud implementation on track.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-06-16'
created: '2025-04-30'
audience: ['All']
---

## Context
Implementation projects can be launched by teams with a vague scope, unclear ownership, and little operational alignment. Stakeholders have an expectation that the cloud platform "just works" without full knowledge of the leftover responsibilities—most notably deployments, monitoring, and governance.

When there is no clear strategy on migration scope, stakeholder alignment, operation ownership, and governance, implementations get stuck or return unexpected outcomes.


## Execution
The execution team should build a shared foundation early on by clearly defining your migration scope, aligning stakeholders around priorities and timeline, delegating operational tasks, gathering practical requirements, and creating governance that balances autonomy with standards.

Business adoption is crucial for any project - it's a shift in how teams operate and deliver value. To achieve alignment, engage stakeholders early on in business, content, IT, and marketing functions. Cast the move in terms of business results - accelerated time-to-market, improved personalization, and a more contemporary digital experience- instead of platform functionality.


### Define Scope

Take a moment prior to diving in and building something on XM Cloud to take an honest look at what you're delivering today—and what will get left behind for now, and what will get left behind for now to get reviewed again in the future.. With no scope limits, teams are at risk of over commitment, burnout, or tackling features that deliver no timely value.

Start out by creating an exhaustive list of your current digital landscape:
- What pages, templates, languages, and media assets are included?
- Which of the external functions (e.g., search, analytics, CRM) are mandatory now vs. nice-to-have?
- Which functionalities are required as user- and internal team-capabilities?

As an example, the following categorizes the different types of considerations -

| Item                  | Type        | Action     | Justification                     | Owner         | Notes                             |
|-----------------------|-------------|------------|----------------------------------|----------------|-----------------------------------|
| Homepage              | Page        | Redesign   | Outdated UX, not mobile optimized | UX Lead        | Align with new brand              |
| News articles         | Content     | Migrate as-is | Structured, stable taxonomy     | Content Ops    | Review metadata fields            |
| Hero banner component | Component   | Rebuild    | Custom logic, legacy tech         | Web Developer  | Use new personalization rules     |
| Search integration    | Integration | Replace    | Old on-prem, move to SaaS         | Architect      | Plan move to Sitecore Search      |


Lastly, prioritize this list based on three key parameters:
- What contributes to impact or alleviates pain right away?
- What has minimal effort vs. high impact?
- What is established and familiar within stakeholders?

Finally, set a phased process starting with what is considered Time to Impact(TTI) — something useful, working, and focused. Everything else can wait in later phases, with timelines and standards decided on first.

### Align Stakeholders on scope and timeline

Technology by itself does not drive success—humans do. Misalignment among groups is the biggest risk on any project. When IT, marketing, business stakeholders, and legal are not aligned on what is being delivered, who makes decisions, and how decisions get made, confusion and delays follow.

Before your project gets too far along, get all key stakeholders in one room. Get them to agree on:
1. What is in scope and what isn't
2. Who owns what during delivery
3. How decisions will be made and what to do when plans must shift

Spend time mapping interdependencies among content, design, infrastructure, and compliance. Make sure each team understands how their work relies on others—and how timing, resources, or blockers in one can affect the others.

As importantly, outline how scope will be managed in the future. XM Cloud accommodates fast delivery, but quickly can get nasty without specified scope gates and collaborative timelines.

As straightforward suggestions:
- Hold an collaborative planning meeting with IT, marketing, business leaders, and lawyers. Use visual tools like journey maps or swimlanes to display dependencies and decision points.
- Set scope gates — milestones where scope is checked, frozen, or re-evaluated. Define what a scope change is (e.g., adding a new integration or legal requirement).
- Use a tangible, human-readable timeline instead of intangible project workstreams. "*Home page ready by June 15" is easier to align around than "Sprint 4: Component X Finalized.*"

Stakeholder alignment is not a one-point of check—morally, it's a continuous promise. Visual planning, documented collaboration, and formal decision points prevent miscommunication and scope creep as you scale.

### Define Operational Ownership

One of the key benefits about XM Cloud is that it removes the responsibility of infrastructure management from you. No need to patch servers, manage hosting, or auto-scale to think about. But that does not mean that everything is "set and forget."

Your organization still owns the experience —everything that happens on top of the platform: deployments, remedying issues, monitoring, and stability of your front-end and integrations. If ownership is not in place, responsibility will fall through cracks, especially when things break. 

Operational clarity is necessary to get to long-term success and frictionless launches.
- Who's on the hook for what? Define straightforward roles and responsibility in development, content, marketing, and IT. If a deployment at 5 PM goes wrong, who fixes it? Who gets notified when a form fires off in the wrong way? Have a plain RACI model to remove uncertainty—especially between teams who will not work closely with each other day-to-day.
- Do you have a runbook? You don't need an operations manual the size of a novel. But you will need clear, straightforward playbooks for the most common failure scenarios—especially for first launches. Include what to check when a deployment fails, what to do in the event of a site outage, how to roll back to a previous version and who to call and how
- What monitoring tools will you use to monitor the experience? Depending on your [Web Application Host](/learn/accelerate/xm-cloud/pre-development/hosting-applications), you 'll need to monitor your front-end your app performance. There are tools offered in Vercel and Netlify, but additional logs such as Application Insights (for .NET-based telemetry) may be used. Make non-developers accessible to relevant data as well—for example, marketing teams may need to be notified if key pages are broken or personalization stops working. 

### Gather Practical Requirements

An effective migration to XM Cloud isn't about replicating what you did in your previous CMS. It's about reconsidering what you need so it maps to how your business actually works today—and where it's headed.

Too many teams begin by copying features from older platforms without asking: Is this still worth it? Who's using it? Does it serve how we work today? Instead, focus on what you really need to create valuable, lasting digital experiences.

| Category | Examples |
| -- | -- | 
|Functional Requirements |What does your site need to do? (e.g., search, forms, content publishing, integrations)|
|Performance Requirements|Expected load times, traffic peaks, mobile optimization, caching behavior|
|Experience Requirements|Editorial workflows, preview modes, approval steps, personalization rules|
|Multilingual & Regional|Content translation, localized assets, market-specific templates or legal disclaimers|
|Transition-State Needs|Redirects, sunsetting legacy URLs, archiving rules, temporary environments|
|Accessibility & Privacy|Compliance with WCAG, GDPR, cookie consent, opt-out functionality, data audit trails|

Requirements gathering can quickly gets out of hand - get what truly is important now so you don't build too much for down the road or end up forgetting something that's a must for launch.
- Don't gather everything simultaneously—start with what's necessary for TTI and then include "Phase 2" requirements.
- Document what is working today and what isn't - that is where the highest returns are.
- Capture front-end and back-end processes—specifically for authors, marketers, and legal professionals.
- For each requirement, ask: Who does this belong to? How often is it used? What if it is damaged?

Review the [Requirements Gathering](/learn/accelerate/xm-cloud/pre-development/discovery/requirements-gathering) recipe for further detail.

### Establish Governance and Roles

XM Cloud enables decentralized teams to go faster—but speed without governance leads to inconsistency, confusion, and risk. Governance isn't control—it's clarity. It sets the rules of the road so your teams can go faster, safer.

Great governance provides teams with what they need to build with confidence, while keeping the business secure, consistent, and compliant.

| Action | What it involves |
| -- | -- |
| Define Brand, Content & Design Governance  | Set standards for tone, visual style, naming conventions, and content structure. Use reusable components, templates, and brand guidelines across markets. | 
| Establish Roles & Permissions | Use Sitecore Cloud Portal to configure identity management and role-based access—so the right people can create, review, and publish without bottlenecks. |
| Ensure Regulatory Compliance |Define requirements for data privacy (GDPR), accessibility (WCAG), consent capture, and audit logs—especially for personalization and tracking. |
| Document Escalation Paths & Audit Trails | Create a clear plan for handling publishing errors, legal reviews, data requests, or personalization mistakes. Ensure logs and backups exist for troubleshooting. |

Governance shouldn't slow you down - it should enable you to put in place lightweight, scalable guardrails that enable autonomy while safeguarding your brand, content, and data.

- Treat Governance as an enabler, not a roadblock—automate and inform, don't manually approve.
- Make global rules where you need to (e.g., accessibility), and allow local markets flexibility.
- Enable Governance into tools and templates—not merely documentation.
- Revisit your governance model quarterly as you scale to new sites or teams.

An example governance framework would cover:

| Area             | Questions to define                                      | Example Roles                         | Tools                            |
|------------------|----------------------------------------------------------|----------------------------------------|----------------------------------|
| Decision-making  | Who decides what's in scope? Who owns sign-off?          | Product Owner, Business Lead           | RACI matrix                      |
| Process          | What’s the approval flow for scope changes or blockers?  | Project Manager, Architects            | JIRA workflow                    |
| Standards        | How will we ensure consistency across teams/sites?       | Developer, Content Strategist     | Design system, coding guidelines |
| Visibility       | How is governance communicated and enforced?             | Governance Lead, PMO                   | Confluence, Weekly sync          |
| Risk Management  | How do we escalate unresolved conflicts?                 | Sponsor, CTO                           | Risk log, Escalation plan        |


## Insights
Some features or requirements might not be needed for the first release —but they can make or break your long-term success. These considerations that get missed in early planning are still relevant to make better overall decisions, and can set your team up to scale smoothly as you grow.

### Change & Scale Management

Scaling from a single site to multiple isn't just a technical issue—it's an opportunity to build something that will endure. On day one, launching, you're not just creating a website—you're creating a process that can stretch, and fit as your business expands. A structured site factory, sound governance, and prudent content patterns not only conserve effort—they liberate creative expression and accelerate. Build once, scale fearlessly.

With all the options, tools, and moving parts, it's easy to confuse or redo. Keep your feet on the ground and create your source of truth up front. Choose tools that support your teams—not what's the next flavor of the month. It's about establishing clarity so your teams can go fast with confidence.

As you evolve, don't let old pieces drag you down. Every system needs a process of substitution. Without decommissioning and versioning, legacy templates, dormant integrations, and out-of-date styles pile up. Retire in your build cycle. When something new comes out, determine what gets substituted—and when. That's how you stay lean and ready for what's next.

And as XM Cloud takes infrastructure concerns off your plate, don't forget your boundaries—literally. Get to know service quotas, data size limits, API rate limits, and how data rules apply to your setup so you are building smarter.

### People & Process

Technology doesn't deliver value—people do. And when you move to XM Cloud, you're not just changing platforms; you're changing how your teams work, build, and grow together. That's why enablement isn't one onboarding session. It's a continuous, changing part of the way you work.

XM Cloud redefines roles - creators are closer to the software, marketers have more control, developers iterate faster, and operations take on new roles. You'll want an enablement plan that gets your teams up to speed—then stays ahead of them if you want your teams to thrive. That means frequent check-ins, updated playbooks, and easily accessible support, not just at launch but at every phase of your digital transformation.

Take also the opportunity to understand what content you actually need. You might find that a large chunk of your site hasn’t been visited for a long period and are not driving value. Identify what’s outdated, unused, or irrelevant. Review the [Content Audit](/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit) documentation for further detail.

### Optimization & Insights

Launch is just the beginning. Real value is in the way you watch, learn, and hone after your site goes live. XM Cloud gives you the means to go fast, but to make improved what matters, you need to see what matters. That's where smart observability comes into play.

Review the [Operational Governance]() recipe for further details on how to setup the right governance and measures in place post go-live.


## Related Recipes

<Row columns={2}>

 <Link title="Requirements Gathering" link="/learn/accelerate/xm-cloud/pre-development/discovery/requirements-gathering"/>
 <Link title="Operational Governance" link="/learn/accelerate/xm-cloud/optimization/operational-governance"/>

 <Link title="Hosting Head Application" link="/learn/accelerate/xm-cloud/pre-development/hosting-applications"/>
 <Link title="Content Audit" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/content-audit"/>
 <Link title="Preparing for an XM Cloud Project" link="/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project"/>
</Row>

## Related Documentation

<Row columns={2}>
 <Link title="XM Cloud Documentation" link="https://doc.sitecore.com/xmc"/>
</Row>



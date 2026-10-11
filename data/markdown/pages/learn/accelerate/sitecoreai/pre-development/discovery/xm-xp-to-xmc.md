---
title: 'Transition from XM/XP to SitecoreAI'
description: 'Choose a migration path from XM or XP to SitecoreAI, and plan how personalization, audiences and visitor data move to Conversion Optimization and Audience & Insights.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2026-10-08'
created: '2024-10-09'
audience: ['All']
---

## Context

You are on XM or XP and have chosen SitecoreAI as the new platform. What is the best migration path from your MVC implementation, and what happens to the personalization, audiences and visitor data you rely on today?

## Execution

The best path depends on your requirements. This recipe proposes a high-level migration path that you can tailor to your situation, then covers how to rebuild personalization and data on SitecoreAI.

Before you start, read [Moving to SaaS: concepts you need to know](/learn/accelerate/sitecoreai/pre-development/discovery/moving-to-saas).

There are two approaches to the migration:
| | Big bang move to SitecoreAI | Hybrid migration |
| --- | --- | --- |
| Best for | Most existing Sitecore implementations. SitecoreAI requires Headless SXA, so a direct migration is the shortest, most cost-effective path. | An organization with several websites, or a very large website with many pages and sections to migrate. |
| How it works | Reuse CSS and HTML from the existing MVC site and port them to Next.js. Reshape the content to match the Headless SXA architecture. | Create the main scaffolding of the site in SitecoreAI first, for example the header, footer and navigation. Then migrate sections of the website as smaller, self-contained projects. A news or blog section is a common first candidate. |
| Going live | Cut over to SitecoreAI in one move. | A resource that controls request routing sends traffic between the existing site and the new SitecoreAI pages. Azure Front Door and Azure Application Gateway are popular options. Next.js is designed for gradual adoption in this pattern. See [Incrementally Adopting Next.js](https://nextjs.org/blog/incremental-adoption). |
| Search | Not called out. | It is common to migrate content search first, so that search can reach all content while it is stored on two systems. |
| Considerations | Work on the existing platform may slow down or stop while the team focuses on SitecoreAI.<br />A content and information architecture audit can delay the start, especially if the changes from the current state are large.<br />Personalization rules and xDB data do not carry over. Plan the rebuild described in [Rebuild personalization and data on SitecoreAI](#rebuild-personalization-and-data-on-sitecoreai) as part of the project, not after it. | Content lives on two separate systems, so content search must index both.<br />If any content sits behind a login, security tokens must persist between the two delivery systems.<br />Visitors move between the two systems. Personalization and audiences in SitecoreAI only see traffic on SitecoreAI pages unless tracking is shared across both. Decide early how visitors are identified across the boundary. |

### Rebuild personalization and data on SitecoreAI

SitecoreAI does not include XP, xConnect or xDB functionality, and existing personalization rules do not carry over. [SitecoreAI Pathway](https://doc.sitecore.com/sai/en/developers/sitecoreai/migrate-a-site-to-sitecoreai.html) does not migrate xDB data, email marketing content or personalization. The replacements are two SitecoreAI capabilities:

- **Conversion Optimization** for personalization, A/B/n testing, analytics and search. Read more on [documentation](https://doc.sitecore.com/sai/en/users/sitecoreai/conversion-optimization.html).
- **Audience & Insights** for event capture, identity resolution, profiles, affinities and audiences. Read more on [documentation](https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights.html).

Both are rolling out in phases, so your environment may not have them yet. Confirm availability with your Sitecore contact before you commit to a plan that depends on them.

Work through the following steps.

1. **Inventory what exists in XP.** List the personalization rules, goals, segments, profile cards, A/B tests and reports in use, and note which ones are still in active use. Retire the rest instead of rebuilding them.
2. **Define the audiences.** Recreate the segments that matter as audiences in Audience Builder. Audiences are rule groups built on profile attributes, sessions, events, traits and affinities. The platform re-evaluates them on a schedule, every 6 hours by default. You can also create an audience by describing the profiles you want to include and letting the Audience builder AI assistant generate the rules, which you then review and refine. See [Create an audience with AI assistant](https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audiences/create-an-audience-with-ai-assistant.html) and [Audiences](https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audiences/audiences.html).
3. **Set up affinities.** Configure the topics, categories or attributes you want to score from page views. Affinity scores sit on the profile and update in real time.
4. **Decide on identity resolution.** It is off by default. If you opt in, define identity rules. Most environments use one rule, usually email address.
5. **Send events from the head application.** Data reaches Audience & Insights through events such as `VIEW` and `IDENTITY`. For JSS Next.js and Angular apps connected to SitecoreAI, use the [Sitecore Cloud SDK](https://doc.sitecore.com/sdk/en/developers/latest/cloud-sdk/sitecore-cloud-sdk-for-javascript.html) rather than the Engage SDK. See [Cloud SDK vs Engage SDK](https://doc.sitecore.com/sdk/en/developers/005/cloud-sdk/cloud-sdk-comparison-charts.html).
6. **Rebuild the experiences.** Recreate XP personalization rules as page variants and component variants in Conversion Optimization. Use headless personalization if the experience is delivered to an application you build yourself, and triggered personalization to respond to visitor behavior or other conditions.
7. **Rebuild the tests.** Recreate Experience Optimization tests as A/B/n tests. A test has 2 to 6 variants. A single variant is a personalization.
8. **Rebuild the reporting.** Use the performance dashboards for sites, forms and component A/B/n tests in place of Experience Analytics.
9. **Plan historical data.** Decide whether you need xDB history in SitecoreAI. Pathway will not move it. Use [Profile import](https://doc.sitecore.com/sai/en/developers/sitecoreai/profile-import.html) to load profile data in bulk from a JSONL file. Each record needs at least one identifier that matches a configured identity rule, and only the `contact` and `extensions` fields are written to the profile. Export the contact data you need from xDB, map it to those fields, and test with a small batch first. Imported records go through identity resolution, so set up your identity rules before you import.

## Insights

As you review the approaches, consider the following topics.

### Key feature comparisons

Moving to SitecoreAI is a move to a composable platform, so SitecoreAI alone will not meet every requirement. Most customers have historically been on a monolithic DXP, and about two thirds of them were on XP, but the mindset shift is similar whichever DXP you start from.

If you want to move your existing XP to the cloud as it is, the right move is managed cloud, not SitecoreAI. SitecoreAI is for teams who want a composable, SaaS CMS, or who want new Sitecore platform features as early as possible.

The following table maps the XP features people ask about most to their SitecoreAI equivalents.

| XP feature | SitecoreAI equivalent | Notes |
| --- | --- | --- |
| Personalization rules | Personalization in Conversion Optimization: page variants, component variants, headless and triggered personalization | Existing rules do not carry over. Rebuild them. |
| Experience Optimization (A/B and multivariate tests) | A/B/n testing in Conversion Optimization | 2 to 6 variants per test. |
| Experience Analytics | Performance dashboards for sites, forms and component A/B/n tests | Reports are not migrated. |
| Experience Profile | Profiles in Audience & Insights | The profiles view shows the 500 most recent visitors. |
| Segments and List Manager | Audiences in Audience Builder | Audiences group visitors for personalization and analysis. They are not recipient lists for email. |
| xDB contacts and identification | Identity resolution and identity rules in Audience & Insights | Off by default. xDB data is not migrated by Pathway. |
| Marketing Automation, Email Experience Manager (EXM), Path Analyzer, Campaign Creator, Marketing Control Panel, FXM | No equivalent in SitecoreAI | Plan for other solutions if you depend on these. |

Review the full list in [Limitations and restrictions](https://doc.sitecore.com/sai/en/developers/sitecoreai/sitecoreai/limitations-and-restrictions.html).

### Personalization and data: what changes

In XP, personalization depended on xDB collecting and storing contact data in your own infrastructure. In SitecoreAI, the work is split across two capabilities, and a head application that sends events connects them.

Audience & Insights turns visitor behavior into data in five stages:

1. **Capture:** events track visitor behavior across devices and channels in real time.
2. **Unify:** identity resolution links related profiles into a single view of each visitor.
3. **Analyze:** affinities and predictive models identify patterns and preferences.
4. **Activate:** audiences and unified data power personalization, segmentation and cross-channel campaigns.
5. **Measure:** performance dashboards show the results.

Conversion Optimization uses those audiences and real-time signals, such as page views and on-site interactions, to deliver and test experiences.

Points to plan for:

- **Quality of data depends on events.** Profiles hold as much as the head application sends. Without `IDENTITY` events and identity resolution, profiles stay fragmented.
- **Audiences are not instant.** Audience membership is saved on profiles when the audience is live and refreshes on a schedule, 6 hours by default. Check that this suits use cases that need an immediate response, and use real-time signals for those.
- **Event rule limits.** For an event rule in Audience builder, you can set how many events must match and whether they are counted within a single session or across all sessions. See [Set a limit for an event or session rule](https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audiences/set-a-limit-for-an-event-or-session-rule.html).
- **Privacy requests.** Profiles can be deleted in bulk through the Profile Import API. Deletion is permanent and removes sessions, events and segment memberships.
- **Reporting outside SitecoreAI.** The data lake export service gives access to Audience & Insights data in external platforms such as Microsoft Fabric.
- **Rollout.** Both capabilities are rolling out in phases. Confirm that your environment has them before you design around them.

### Tight timelines with complex integrations

If you have a very tight timeline to move to headless, that can block a direct migration to SitecoreAI. For example, the existing website may have a complex content search scenario built on Sitecore Solr indexes. There may not be time to migrate the website and rebuild content search in the same project.

In this case, a first project can move to Headless SXA while still using the existing Solr. This lets the project go live on headless early. A second phase moves search to a composable search solution, and a final phase moves to SitecoreAI.

### Headless setup on XM/XP before the transition

This option is useful only in a specific set of scenarios, and they are not common. If you think you are one of them, contact your Sitecore representative to discuss the approach.

One reason some teams want to go headless first is to make the final move to SitecoreAI easier. Once you are on XM with Headless SXA, migrating to SitecoreAI is easier than a full migration from XM or XP MVC. That does not account for the work needed to get to headless in the first place.

In most cases that work is the same as migrating XM or XP MVC directly to SitecoreAI Headless. The effort is moved, not saved, and more effort is added when the project finally migrates to SitecoreAI.

Also consider the following:

- The latest version of Headless Services is always behind the SitecoreAI version. Bugs fixed in SitecoreAI may not be patched in XM Headless, and new features roll out continually on SitecoreAI.
- There is still work, in time and money, to migrate to SitecoreAI. See the [Project Estimation](/learn/accelerate/sitecoreai/pre-development/project-planning/project-estimation) recipe.

### Deprecated architectural patterns

While your platform remains on XM or XP Headless, you continue to rely on Content Editor or Experience Editor instead of newer authoring tools. The project will probably also keep using deprecated architectural patterns such as custom content resolvers, custom event handlers and customizations to the editing UI. You can keep using these, but they will slow future migration work. Start moving away from them now.

### Upgrade to the latest version of XM/XP

Upgrading to the latest version of Sitecore XP before migrating to SitecoreAI may seem logical, but it is not always required. Evaluate whether an upgrade will simplify your migration or whether you can move directly to SitecoreAI.

SitecoreAI is fundamentally different from traditional XM or XP MVC architectures, so upgrading your XM or XP platform first brings no benefit in efficiency, cost or stability. An upgrade is likely to have a high cost and add many weeks to a migration project, especially if the implementation relies on third-party or open-source dependencies.

In rare scenarios, migrating to headless first is the right call. These are generally implementations with heavily customized editing experiences that Pages will not support, or a heavily customized CMS that will be migrated in phases.

## Related recipes

<Row columns={2}>
<Link title="Project estimation" link="/learn/accelerate/sitecoreai/pre-development/project-planning/project-estimation" />
<Link title="Moving to SaaS: concepts you need to know" link="/learn/accelerate/sitecoreai/pre-development/discovery/moving-to-saas" />
</Row>

## Related documentation

<Row columns={2}>
<Link title="Incrementally adopting Next.js" link="https://nextjs.org/blog/incremental-adoption" />
<Link title="Limitations and restrictions" link="https://doc.sitecore.com/sai/en/developers/sitecoreai/sitecoreai/limitations-and-restrictions.html" />
<Link title="Conversion optimization" link="https://doc.sitecore.com/sai/en/users/sitecoreai/conversion-optimization.html" />
<Link title="Audience and insights" link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audience-and-insights.html" />
<Link title="Headless personalization and A/B/n testing" link="https://doc.sitecore.com/sai/en/users/sitecoreai/headless-personalization-and-abn-testing/headless-personalization-and-abn-testing.html" />
<Link title="Migrate a site to SitecoreAI (Pathway)" link="https://doc.sitecore.com/sai/en/developers/sitecoreai/migrate-a-site-to-sitecoreai.html" />
<Link title="Sitecore Cloud SDK" link="https://doc.sitecore.com/sdk/en/developers/latest/cloud-sdk/sitecore-cloud-sdk-for-javascript.html" />
</Row>
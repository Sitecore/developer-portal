---
title: 'Personalizing your content'
description: 'Choose between page and component personalization in SitecoreAI, then build either one, from audience to published experience.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2026-10-08'
created: '2025-06-30'
audience: ['Product Owner', 'User']
---

## Context
Personalization delivers a known experience to a known audience. SitecoreAI has two native ways to do it, and they are not interchangeable.

- **Page personalization** changes several parts of a page together for a defined audience.
- **Component personalization** changes a single component while the rest of the page stays put. It is the one that scales across many pages.

Typical work is banners, calls to action, hero content, and message match from a campaign to its landing page.

Before you build either kind, confirm that:

- Your site uses Content SDK.
- The analytics identifier is enabled. See [Manage personalization and analytics for sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html).
- Goals and KPIs are agreed.
- The site scope is set correctly for the languages or sites you want to measure. You can calculate analytics and personalization for one site language, all languages of a site, or several sites together.

<Alert type="info"><AlertIcon />Some personalization features, including component personalization and the Code Assistant, are part of a phased rollout. Your organization may not see them until your environment is included. Check what is available before you plan around them.</Alert>

## Execution

### Which one to use
The first question is not about the tool. It is whether you already know the answer or are finding out. If you know German visitors convert better with local pricing, that is a rule, and this recipe applies. If you do not know whether one headline beats another, that is a test. Use [Testing experiences](/learn/accelerate/xm-cloud/optimization/user-experience-optimization/testing-experiences) instead.

Once you know it is a rule, the choice between page and component comes down to how much of the page changes and how many pages need it.

| Question | Page personalization | Component personalization |
| - | - | - |
| How much of the page changes? | Several components move together as one experience | One component changes, the rest of the page stays put |
| How many pages need it? | One page, or a small named set | The same component repeats across many pages |
| Where is it built? | Page builder, directly on the page | The component's decision table |
| Condition type used | Out-of-the-box or custom conditions built into the audience | Decision table inputs: profile data, out-of-the-box or custom conditions, or custom values |
| Can inputs be combined? | Yes, with AND/OR and condition groups | Yes, every input on a row combines with AND |
| Condition limit | Maximum of five conditions per audience | No five-condition limit, but rule order carries the priority logic |
| What tells you it worked? | Page performance dashboard, variant against original | Analytics once the personalization goes live |
| When is it live? | When the variant is published | When the rules are published |
| What happens after? | Stays live as the standing experience | Stays live as the standing experience |

The practical difference sits in the condition system rather than on screen. Page personalization runs conditions straight in the audience builder, which is fast but limited to five conditions per audience. Component personalization goes through a decision table, and custom values are defined there. A rule such as "visitor is high intent based on session count", where the input is not available as a built-in condition, is usually a component personalization job. That, more than the visual scope of the change, is what normally decides it.

Two rules apply to both:

- A page runs a personalization or an A/B/n test, not both at once. Decide which question you are answering before you build.
- A default page supports up to 10 page variants.

If you deliver your front end without the Content SDK or without Page builder, or you want the same experience in a mobile app or kiosk, see [headless personalization and A/B/n testing](https://doc.sitecore.com/sai/en/users/sitecoreai/headless-personalization-and-abn-testing.html).

### Steps to a personalized page

| # | Title | What you do |
| - | - | - |
| 1 | Personalize strategy | Work out which audiences gain value from personalization and which pages are the focus. With a backlog of ideas, prioritize audiences by the volume they generate on the site and how valuable they are to the business. |
| 2 | Select a page to personalize | Choose the page you want to build personalized content for. Start with simple component swaps such as banners, calls to action, or hero images. |
| 3 | Define audience groups | Use the audience builder and the out-of-the-box [conditions](https://doc.sitecore.com/sai/en/users/sitecoreai/personalize/specifying-variables-for-conditions.html) to specify who sees the personalized content. Conditions might include behavior or demographics. A social campaign with a specific call to action, for example, can be reflected on the landing page so the journey stays continuous. Remember the five-condition limit per audience. |
| 4 | Create page variants | For each audience group, create a variant carrying the personalized content: components added or removed, images and copy tailored to that audience. |
| 5 | Preview and test | Use preview to check how the content appears to each audience group and confirm that everything behaves as expected. |
| 6 | Publish | Publish the page. The personalized content goes live and is served according to the rules you defined. |

If a use case is more complex than the current conditions allow, check whether the logic belongs in a decision table on a component before concluding it cannot be built.

Review [Personalize](https://doc.sitecore.com/sai/en/users/sitecoreai/personalize/personalize.html) for the in-product steps.

### Steps to a personalized component

| # | Title | What you do |
| - | - | - |
| 1 | Confirm it is a component job | The change touches one component, or the same component pattern repeats across several pages, or the rule needs a custom value that the audience builder cannot hold. |
| 2 | Define the inputs | Decide what visitor data the table evaluates: profile attributes, out-of-the-box conditions, custom conditions, or custom values. Inputs are the vocabulary the rules are written in, so agree them before you write rules. |
| 3 | Build the rules | Each rule combines its inputs with AND and maps to one output: the component variant that shows when the rule matches. |
| 4 | Order the rules | Rules are evaluated top to bottom and the first match wins. If a visitor matches two rules, only the first rule's variant shows. Rule order is where priority between competing signals lives, so agree the priority deliberately rather than letting it fall out of the build order. |
| 5 | Configure the variants | Set up the component variants in Page builder. A visitor who matches no rule sees the original component, so make sure the original is a sound default. |
| 6 | Preview, publish, measure | Check each variant renders correctly with real content, test the rules against a profile, publish, then read the impact in analytics. |

Two points are worth stating plainly to stakeholders:

- Put anything reusable into a custom condition from the first decisioning use case, not the fifth. Logic copied into many decision tables drifts apart as the number of tables grows.
- The visitor who matches nothing gets the original component. The original is part of the design, not a fallback nobody looked at.

Review [Component personalization](https://doc.sitecore.com/sai/en/users/sitecoreai/component-personalization/component-personalization.html) and [Decision tables](https://doc.sitecore.com/sai/en/users/sitecoreai/component-personalization/decision-tables.html) for the in-product steps.

### Planning decides the outcome
For each prioritized audience, confirm:

- How the audience will be recognized in the product.
- Whether the change is a page job or a component job.
- What content is needed and what the call to action is.
- Which dependencies sit with marketing, technical teams, campaigns, or UTM setup.

Prioritize high-traffic entry points (homepage, category landing pages, product detail pages) and conversion-critical pages (pricing, sign-up flows, lead forms) first. Plot audiences by the traffic they generate against their value to the business. The ones high on both come first.

Two habits carry the rest of the programme:

- When a test has declared a winner, fold the winning version into the decision table or the personalization rules. Do not leave the test running at 100/0 traffic as a permanent workaround, because a winner parked in a test is logic nobody governs.
- When the same targeting keeps reappearing, define it once as a custom condition and reuse it rather than rebuilding the rule on each page.

## Insights

### Starter use cases
Use these as a backlog seed. The phase column follows the crawl, walk, run model in [Conversion optimization strategy](/learn/accelerate/xm-cloud/optimization/user-experience-optimization/conversion-optimization-strategy).

| Category | Phase | Use case | Audience | Goal and KPI | Tool |
| - | - | - | - | - | - |
| Campaign | Crawl | Mobile-optimized campaign experience | Visitors on mobile devices | Increase conversion rate. KPI: signup conversion rate, engagement uplift | Page |
| Campaign | Crawl | Day-of-week promotional banner | Visitors arriving on specific days | Increase click-through. KPI: purchase, conversion rate | Component |
| Campaign | Crawl | First-time paid traffic incentive | New visitors from paid campaigns via UTM | Grow the subscriber base. KPI: signup conversion rate | Page |
| NGO | Crawl | Regionalized fundraising content | Donors in EU, NA, and Asia | Increase engagement and funds. KPI: lower bounce, more time on page, higher conversion | Page |
| Commerce | Crawl | Affinity-driven homepage personalization | Wholesale and retail customers | Shorten the path to purchase. KPI: add-to-cart volume and conversion rate | Component |
| Commerce | Walk | AI-assisted persona personalization | Shoppers segmented by inferred intent | Shorten time to market. KPI: repeat visits, higher basket values | Component |
| Loyalty | Walk | Tier-based member experience | Logged-in members by loyalty tier | Increase member satisfaction and time on site. KPI: repeat visits, basket value | Component |
| B2B | Walk | Re-engage playbook downloaders | Visitors who downloaded a playbook in the past seven days | Turn leads into prospects. KPI: demo booking form submissions | Component |
| B2B | Walk | Industry-adaptive hero and content order | Visitors with an inferred or declared industry | Increase relevance and conversion. KPI: weighted conversion, engaged sessions | Page and component |
| B2B | Walk | Customer against prospect split | Known customers identified by login or email match | Route each group to the right next step. KPI: support deflection, demo requests | Component |
| B2B | Run | Next-best-content recommendations | Visitors with an established affinity profile | Increase depth of engagement. KPI: click-through, downstream conversion | Component |

Four of these need technical groundwork before the personalization itself:

- Regionalized fundraising content depends on geolocation captured through the SDK.
- Tier-based member experiences need the member tier passed in as customer data, plus a custom condition.
- The B2B re-engagement case needs custom event tracking for downloads, plus a condition for events within a time window.
- The customer against prospect split depends on identity resolution being in place, not just an event.

### Personalize pages with AI
With content customized for different audiences, visitors see content that matches their expectations. For example, you can use the AI capability of Sitecore Stream to rewrite text written in American English into British English. Review [Personalize pages with Stream](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize-pages-with-stream.html) for more.

## Related recipes

<Row columns={2}>
  <Link title="Using affinities in personalization" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/affinities-for-personalization" />
  <Link title="Testing experiences" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/testing-experiences" />
  <Link title="Conversion optimization strategy" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/conversion-optimization-strategy" />
  <Link title="Delivering components through Design Studio" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/design-studio-component-variants" />
</Row>

## Related documentation

<Row columns={2}>
  <Link title="Personalize" link="https://doc.sitecore.com/sai/en/users/sitecoreai/personalize/personalize.html" />
  <Link title="Component personalization" link="https://doc.sitecore.com/sai/en/users/sitecoreai/component-personalization/component-personalization.html" />
  <Link title="Specifying variables for conditions" link="https://doc.sitecore.com/sai/en/users/sitecoreai/personalize/specifying-variables-for-conditions.html" />
  <Link title="Manage personalization and analytics for sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html" />
</Row>
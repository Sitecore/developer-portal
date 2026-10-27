---
title: 'Using affinities in personalization'
description: 'Use affinities to target visitors by accumulated interest in SitecoreAI, with the built-in Top Affinity condition first and custom conditions only when needed.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2026-10-08'
created: '2026-10-08'
audience: ['Product Owner', 'User', 'Developer']
---

## Context
Affinities are the most requested targeting signal and the one most often over-built. They record accumulated visitor interest, for example in an industry, product, or topic. You can use them in both page personalization and component personalization.

Before you design any affinity-driven experience, confirm that affinities are visible in Profiles for your own test visitors. If they are not, the condition has nothing to match.

## Execution

### Start with the Top Affinity condition
The built-in Top Affinity condition targets visitors on their single highest-scoring interest for an attribute you define.

1. Set the affinity value.
2. Optionally set the affinity name to scope the condition to one attribute.
3. Add the condition in the audience builder, or as a decision table input.
4. Preview and publish.

No code and nothing to maintain. If the use case is "the highest-interest segment for this attribute should see this content", stop here.

### Use a custom condition only when affinity alone is not enough
Examples are an affinity score above a threshold combined with a page view, or an affinity combined with geography or session behavior.

Custom conditions are JavaScript that evaluates the visitor profile. You can write them yourself or generate them from a plain-language prompt with the Code Assistant. Whichever you use:

- Define the condition output with the correct parameter names after you save. A condition with the wrong parameter names fails silently.
- Review and test AI-generated code before you use it. Results vary between runs of the same prompt.
- Return an object in the response body, as recommended in the documentation.

The trade-off is precision against maintenance. A custom condition is code, it needs testing, and when the underlying affinity attribute names or values change, you must update the condition to match. Nothing warns you when they drift apart.

### Match names exactly
Affinity names and values must match exactly what you defined during affinity setup. A mismatch means the condition never triggers, and it looks like a bug rather than a typo.

## Insights

### What should not be an affinity
Affinities suit accumulated interest. States that change more often than long-term interests should stay event-driven or profile-driven.

| Signal | Storage model |
| - | - |
| Buying stage | Event |
| Funnel stage | Event |
| Outreach stage | Event |
| Firmographic enrichment | Profile attribute |
| CTA clicks | Event |
| Asset downloads | Event |
| Link clicks | Event |

### Keep metadata clean
Affinity quality depends on metadata quality.

- Apply only meaningful values.
- Avoid generic values such as "All industries" and catch-alls such as "Other".
- Make sure every value could plausibly support an audience or a report.
- Treat more than ten affinities on a single page as a metadata governance problem, not a rich page.

Affinities are retained for up to 30 days, so they suit recent interest rather than long-term history.

## Related recipes

<Row columns={2}>
  <Link title="Personalizing your content" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/page-personalization" />
  <Link title="Conversion optimization strategy" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/conversion-optimization-strategy" />
</Row>

## Related documentation

<Row columns={2}>
  <Link title="Specifying variables for conditions" link="https://doc.sitecore.com/sai/en/users/sitecoreai/personalize/specifying-variables-for-conditions.html" />
  <Link title="Create a custom condition" link="https://doc.sitecore.com/sai/en/users/sitecoreai/personalize/create-a-custom-condition.html" />
  <Link title="Create a condition with the Code Assistant" link="https://doc.sitecore.com/sai/en/users/sitecoreai/personalize/create-a-custom-condition/create-a-condition-with-the-code-assistant.html" />
</Row>
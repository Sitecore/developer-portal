---
title: 'Testing experiences'
description: 'Use A/B/n testing in SitecoreAI to learn which version of a component performs best, and decide between testing and personalization.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2026-10-08'
created: '2025-06-16'
audience: ['Product Owner', 'User']
---

## Context
You want to maximize conversions but do not know which version of a page or component performs best. [A/B/n testing](https://doc.sitecore.com/sai/en/users/sitecoreai/a-b-n-testing/a-b-n-testing.html) lets decisions rest on visitor behavior rather than internal speculation. It is particularly useful after launch, during optimization sprints, and ahead of rollouts across many sites or geographies.

<Alert type="info"><AlertIcon />Your site needs to use Content SDK with the analytics, events, and personalize features set up so that test assignment and results work. See the [Content SDK initialization guide](https://doc.sitecore.com/sai/en/developers/content-sdk/20/initializing-tracking-events-and-personalization-in-the-content-sdk.html).</Alert>

## Execution

### Testing or personalization
The two are confused often enough to separate clearly. Personalization delivers different content to specific user groups based on factors such as location, device, or how they arrived. A/B/n testing compares versions to see which performs best, without needing to identify the visitor. Use personalization when you know who you are speaking to. Use testing when you want to compare ideas across all visitors.

| | Personalization | A/B/n testing |
| - | - | - |
| Primary goal | Deliver the right experience to the right audience | Identify the best-performing variation |
| Decision logic | Audience-based rules, conditions, affinity, behavior | Randomized traffic allocation for statistical validity |
| Level of application | Page level through page variants, or component level through a decision table | Component level, single or multiple components |
| Traffic handling | Routed deterministically by audience match | Split randomly across variants |
| Typical use cases | Targeted messaging, tailored offers, contextual experiences | Headline tests, call to action tests, layout or design optimization |

A page runs a test or a personalization, not both at once. You cannot create an A/B/n test on a page that has personalization configured. If you are unsure which experience will perform better, start with a test, then turn the winning version into a personalized variant.

### Plan the test
Two stages shape a testing strategy.

**Business objectives alignment.** Select the components and content to test, write hypotheses, and agree success metrics in advance. Prioritize by potential impact so the high-value work comes first. This keeps the team from spending time on experiments that cannot inform a decision.

**The test-and-learn cycle.** Run variations and measure their effect against performance goals. Over time you build a picture of what resonates, and each result rests on observed behavior rather than guesswork.

When you brainstorm tests:

- Identify what you want to achieve: higher conversion, lower bounce, or better engagement.
- Focus on the areas with the most influence on that goal, such as key landing pages, checkout steps, or calls to action.
- Write a clear, testable hypothesis based on your goals and audience insight. For example, "Changing the color of the call to action button will increase click-through rate."

### Steps to run a test

1. Define the business goal and pick the page or component with the most influence on it.
2. Write the hypothesis.
3. Create the test from the component in Page builder. A test supports up to six variants, and a page can run up to six tests at once, with extra tests queued.
4. Set the goal. Its metrics are used to calculate the number of visits needed to declare a winner or call the test inconclusive.
5. Assign traffic to variants, set automated actions for the outcome if you want them, and edit advanced options such as the percentage of visitor traffic in the test.
6. Preview and start the test, then publish the page.
7. Read the result against the original hypothesis. Apply the winner, set up personalization if the learning supports it, and plan the next test.

Keep a record of each test with its hypothesis, variants, result, and what you learned. A shared log or board is enough. It lets you refine the testing strategy over time.

Review [Get started with A/B/n testing](https://doc.sitecore.com/sai/en/users/sitecoreai/a-b-n-testing/get-started-with-a-b-n-testing.html) for the in-product steps, and [Best practices for A/B/n testing](https://doc.sitecore.com/sai/en/users/sitecoreai/a-b-n-testing/best-practices-for-a-b-n-testing.html) for further guidelines.

## Insights

| Consideration | Detail |
| - | - |
| Data-driven decisions | A/B/n testing relies on data to compare versions and see which performs better. |
| Hypothesis-driven testing | Define what you are testing and what you expect to achieve, with goals in mind from the start. This lets you measure success accurately. |
| Clear goals and KPIs | Define goals and key performance indicators (KPIs) so you can measure success and make informed decisions about future ideas. |
| Test one variable at a time | Isolate the impact of a single change so you know which one led to the result. |
| Iterative approach | Analyze results, learn from them, and refine your strategy to improve the experience. |

When a test declares a winner, move the winning version into the component or personalization rules. Leaving a finished test running at 100/0 traffic is a workaround nobody governs.

## Related recipes

<Row columns={2}>
  <Link title="Personalizing your content" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/page-personalization" />
  <Link title="Delivering components through Design Studio" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/design-studio-component-variants" />
  <Link title="Conversion optimization strategy" link="/learn/accelerate/xm-cloud/optimization/user-experience-optimization/conversion-optimization-strategy" />
</Row>

## Related documentation

<Row columns={2}>
  <Link title="A/B/n testing" link="https://doc.sitecore.com/sai/en/users/sitecoreai/a-b-n-testing/a-b-n-testing.html" />
  <Link title="Get started with A/B/n testing" link="https://doc.sitecore.com/sai/en/users/sitecoreai/a-b-n-testing/get-started-with-a-b-n-testing.html" />
  <Link title="A/B/n test hypothesis and goal" link="https://doc.sitecore.com/sai/en/users/sitecoreai/a-b-n-testing/a-b-n-test-hypothesis-and-goal.html" />
  <Link title="A/B/n tests performance dashboard" link="https://doc.sitecore.com/sai/en/users/sitecoreai/get-performance-insights/a-b-n-tests-performance-dashboard.html" />
</Row>
---
title: 'Alert bar'
description: 'Trigger a low-disruption alert bar on the mortgage journey page after user inactivity, prompting the user to schedule a call with an agent or resume the calculator journey. Helps reduce drop-off and increase conversions.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-07-31'
created: '2025-07-31'
audience: ['Technical Implementers','Architects', 'Product Owner']
features: ['Personalize']
---

## Context
Users navigating the mortgage calculator or application pages often hesitate before taking the next step. This can lead to drop-offs. By displaying a timely, non-intrusive alert bar after a period of inactivity, we re-engage users and guide them to speak with an advisor or complete their application.

This experience is ideal for banks and financial institutions looking to reduce friction and assist hesitant users at key decision moments.

## Execution
User drop-off during critical digital journeys is one of the most expensive leaks in any funnel: users often pause mid-way due to confusion, hesitation, or competing priorities, especially when using tools like mortgage calculators. Setting up a personalized alert bar is designed to address this exact problem by quietly activating after a defined period of inactivity, offering the user a next action.

This should not be a disruptive popup but a contextual nudge that helps recover stalled sessions and reduce drop-off without compromising the user experience. It's especially effective in journeys with complexity and commitment, where even a small break in momentum can lead to abandonment.

This tactic isn’t limited to mortgages. The same concept can be applied broadly across industries:

- **Insurance**: Re-engage users who pause during a quote or policy comparison.
- **Healthcare**: Nudge users back into the flow after stalling on appointment booking or provider lookup.
- **Travel**: Encourage return to itinerary planning or trip customization.
- **E-commerce**: Prompt action after prolonged product comparison or cart inactivity.

Whether you're dealing with forms, product selectors, or high-value conversions, this approach can be repurposed across verticals to guide users back to action at the moment they’re most likely to drift.

### Implementation Approach

#### Step 1: Setup Prerequisites

- Ensure you have a functioning mortgage journey or calculator page.
- Verify the [Sitecore Engage](https://doc.sitecore.com/cdp/en/developers/api/sitecore-engage-sdk-reference.html) script is installed and initialized.
- Set `webPersonalization: true` in the Engage initialization settings.


#### Step 2: Create the Web Experience

1. Navigate to **Sitecore Personalize → Experiences → Web Experiences**.
2. Click **Create → Web Experience**.
3. Name the experience: **Mortgage Alert Bar - Inactivity Re-engagement**
4. Create a variant using the **Alert Bar** template.
5. Customize the alert bar content:
   - **Title**: `"Need help applying for your mortgage?"`
   - **Button Text**: `"Talk to an Advisor"` → Link to scheduling form or contact page
   - **Style**: Use brand colors, rounded corners, accessible contrast
   - **Placement**: Bottom of screen (non-intrusive)


#### Step 3: Add Advanced Variant Timeout (Optional)
To trigger after a delay without code-based inactivity detection:

1. Go to the **Variant → Advanced Edit**.
2. Add the following JavaScript code:

```javascript
const INACTIVITY_LIMIT = 45000;
let inactivityTimer;

// Wait for inactivity before rendering banner
function delayRenderBanner() {
    inactivityTimer = setTimeout(() => {
        renderAlertBar(); // your rendering + insert logic
    }, INACTIVITY_LIMIT);
}

// Reset inactivity timer on user activity
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    delayRenderBanner();
}

// Call this after page load
function setupInactivityTracking() {
    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);
    document.addEventListener("scroll", resetInactivityTimer);
    resetInactivityTimer(); // start timer
}
````
<br/><br/>
This prevents the alert from displaying immediately and aligns with best practices for non-disruptive UX.


#### Step 4: Audience & Page Targeting

**Page Targeting**

```javascript
(function () {
  if (window.location.href.includes("mortgage") || 
      window.location.pathname.includes("calculator")) 
  {     
    targetingPassed();   
  } 
})();
```
<br/><br/>
**Filter: Exclude Users Who Completed the Mortgage Form**

```javascript
(function () {   
  return guest.sessions.some(session =>     
    session.events.some(event =>       
      event.type === 'CUSTOM' && event.arbitraryData.form_name === 'Mortgage Form')  
  ) ? false : true; 
})();
```
<br/><br/>
Optional filters include
* New visitors only
* Users who searched for mortgage products in the last 30 days


#### Step 5: Add Goals

**Primary Goal (Binary – Recommended)**

* **CTA Click**: `"Talk to an Advisor"`
  *Tracks direct engagement; easier to attribute success.*

**Secondary Goals (Insightful Metrics)**
* Alert Bar Viewed
* Lead Form Submitted
* Time on Page
* Mortgage Journey Completion (tracked via `CUSTOM` event)


## Insights

### Why a Binary Primary Goal (CTA Click)?

Binary goals like **"Button Clicked" (true/false)** make it easier for Sitecore Personalize to:

- Calculate conversion rates per guest or session
- Declare a statistically significant winner
- Eliminate bias from sparse or skewed revenue data

While order revenue is a valid KPI, it’s not ideal as a primary goal for long or delayed conversions (e.g., mortgage applications). Use revenue as a secondary goal instead.


### Layered Filtering Improves Accuracy

Avoid showing the alert bar to users who:

- Already completed the form
- Just landed on the page
- Are logged in (e.g., already working with an advisor)

This approach saves impressions and ensures you're only targeting users who are:

- Stuck or idle
- Still considering applying
- In need of a gentle push


### Best Practices for Alert Bars
|  Do                                                                                         |  Don’t                                                                                       |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Use behavioral data to define realistic inactivity thresholds based on actual user behavior.   | Don’t trigger the alert too early: you’ll disrupt users who are still thinking or reading.     |
| Keep the alert bar subtle and non-blocking, positioned where it doesn't obstruct content.      | Don’t make it behave like a modal: avoid blocking interactions or forcing choices.             |
| Use clear, action-oriented copy: “Resume your journey” or “Talk to an expert.”                 | Don’t use generic or vague copy like “Still there?” – it won’t drive action.                   |
| Personalize the message when data allows (e.g., user name, viewed tools/products).             | Don’t use personalization unless identity is clearly resolved and consented – it can feel intrusive. |
| Track and optimize engagement metrics: impression-to-click rate, session recovery, conversion. | Don’t trigger multiple times per session – one well-placed prompt is more effective.           |
| Ensure mobile responsiveness: small screens demand tighter, cleaner design.                   | Don’t ignore mobile layouts, cramped alert bars hurt UX.                                      |


## Related Recipes

<Row columns={2}>
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
  <Link title="Use Case Scoping" link="/learn/accelerate/cdp-personalize/pre-development/use-case-scoping" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Sitecore Engage" link="https://doc.sitecore.com/cdp/en/developers/api/sitecore-engage-sdk-reference.html" />
  <Link title="Create a web experience" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/create-a-web-experience.html" />
  <Link title="Introduction to goals in Sitecore Personalize" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-goals-in-sitecore-personalize.html" />  
</Row>


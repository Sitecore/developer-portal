---
title: 'Mortgage Journey Alert Bar'
description: 'Trigger a low-disruption alert bar on the mortgage journey page after user inactivity.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-07-25'
created: '2025-07-25'
audience: ['Technical Implementers','Architects', 'Product Owner']
features: ['CDP', 'Personalize']
---

## Context
Users navigating the mortgage calculator or application pages often hesitate before taking the next step. This can lead to drop-offs. By displaying a timely, non-intrusive alert bar after a period of inactivity, we re-engage users and guide them to speak with an advisor or complete their application.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution

User drop-off during critical digital journeys is one of the most expensive leaks in any funnel: users often pause mid-way due to confusion, hesitation, or competing priorities, especially when using tools like mortgage calculators. Setting up a personalized alert bar is designed to address this exact problem by quietly activating after a defined period of inactivity, offering the user a next action.

This should not be a disruptive popup but a contextual nudge that helps recover stalled sessions and reduce drop-off without compromising the user experience. It's especially effective in journeys with complexity and commitment, where even a small break in momentum can lead to abandonment.

This tactic isn’t limited to mortgages. The same concept can be applied broadly across industries including:
* **Insurance**: Re-engage users who pause during a quote or policy comparison.
* **Healthcare**: Nudge users back into the flow after stalling on appointment booking or provider lookup.
* **Travel**: Encourage return to itinerary planning or trip customization.
* **E-commerce**: Prompt action after prolonged product comparison or cart inactivity.

Whether you're dealing with forms, product selectors, or high-value conversions, this approach can be repurposed across verticals to guide users back to action at the moment they’re most likely to drift.


### Implementation Approach

#### Step 1: Setup Prerequisites

* Have a functioning mortgage journey or calculator page.
* Ensure [Sitecore Engage](https://doc.sitecore.com/cdp/en/developers/api/sitecore-engage-sdk-reference.html) script is installed and initialized.
* Enable `webPersonalization: true` in the Engage init settings.



#### Step 2: Create the Web Experience

1. Go to **Sitecore Personalize → Experiences → Web Experiences**
2. Click **Create → Web Experience**
3. **Name**: `Mortgage Alert Bar - Inactivity Re-engagement`
4. Create Variant using template: **Alert Bar**

Proceed onto customizing the Alert Bar Content:

* **Title**: `"Need help applying for your mortgage?"`
* **Button Text**: `"Talk to an Advisor"` → link to scheduling form or contact page
* **Style**: Use brand colors, round corners, accessible contrast
* **Placement**: Bottom of screen (low disruption)

#### Step 3: Add Advanced Variant Timeout (Optional)

To trigger after a delay without relying on built-in inactivity:

1. Go to the **Variant → Advanced Edit**
2. Add the following code in the **JavaScript section**. This prevents the alert from showing immediately and aligns with web UX best practices to avoid disruption.

```javascript
const INACTIVITY_LIMIT = 45000;
let inactivityTimer;

function delayRenderBanner() {
    inactivityTimer = setTimeout(() => {
        renderAlertBar(); // your rendering + insert logic
    }, INACTIVITY_LIMIT);
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    delayRenderBanner();
}

function setupInactivityTracking() {
    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);
    document.addEventListener("scroll", resetInactivityTimer);
    resetInactivityTimer(); // start timer
}
```
<br/>
<br/>

#### Step 4: Audience & Page Targeting

Setup Page Targeting:

```javascript
(function () {
  if (window.location.href.includes("mortgage") || 
      window.location.pathname.includes("calculator")) 
  {     
    targetingPassed();   
  } 
})();
```
<br/>
<br/>

Setup Filter, avoid showing to users who have already completed the mortgage form:

```javascript
(function () {   
  return guest.sessions.some(session =>     
    session.events.some(event =>       
      event.type === 'CUSTOM' && event.arbitraryData.form_name === 'Mortgage Form')  
  ) ? false : true; 
})();
```
<br/><br/>
Optional Filters include New visitors only and Searched for mortgage products in the past 30 days.

#### Step 5: Add Goals
* **Primary Goal** - 
  * CTA Click – "Talk to an Advisor". Tracks direct engagement, easier to attribute success.
* ***Secondary Goals** - 
  * Alert Bar Viewed
  * Lead Form Submitted
  * Time on Page
  *  Mortgage Journey Completion (if form fire tracked via CUSTOM event)

## Insights
### Primary Goal: Why a Binary CTA Click works

For re-engagement features like an alert bar, a binary goal such as `"CTA Click"` (true/false) is the most effective primary metric. It allows Sitecore Personalize to:
- Accurately calculate conversion rates per guest or session  
- Declare statistically significant winners in variant testing  
- Avoid bias from incomplete or skewed revenue data  

While revenue or lead submission events can serve as secondary goals, they're not reliable primary indicators in long or delayed conversion paths like mortgage applications. Use a simple, high-intent click action (e.g., “Talk to an Advisor”) as your main success metric.


### Layered Filtering to improve relevance
To maximize impact and minimize noise, avoid showing the alert bar to:

- Users who have already completed the form  
- Users who just landed on the journey page  
- Logged-in users who likely already have an assigned advisor  

This ensures impressions are focused on users who are:

- Stuck or idle  
- Still evaluating options  
- Most likely to respond to a helpful nudge  


### Alert Bar Best Practices

| Do | Don’t |
|----|-------|
| Use behavioral data to set realistic inactivity thresholds. | Don’t trigger the alert too early, it interrupts legitimate engagement. |
| Keep the bar subtle, non-blocking, and visually unobtrusive. | Don’t use a modal or overlay to avoid interrupting the flow. |
| Use clear, action-oriented copy (e.g., “Resume your journey” or “Talk to an expert”). | Don’t use vague or generic copy like “Still there?” as it lacks direction. |
| Personalize the message when data and consent allow. | Don’t personalize if identity isn’t resolved, it can feel invasive. |
| Track and optimize with metrics like impression-to-click rate, session recovery, and conversions. | Don’t trigger more than once per session — repetition reduces effectiveness. |
| Ensure mobile responsiveness with clean, adaptable design. | Don’t ignore mobile UX: cramped alerts degrade usability. |


## Related Recipes

<Row columns={2}>
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
  <Link title="Personalization vision" link="/learn/accelerate/cdp-personalize/optimization/personalization-vision"/>
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Sitecore Engage SDK" link="https://doc.sitecore.com/cdp/en/developers/api/sitecore-engage-sdk-reference.html" />
  <Link title="Experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experiences.html"/>
  <Link title="Goals" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-goals-in-sitecore-personalize.html"/>
</Row>



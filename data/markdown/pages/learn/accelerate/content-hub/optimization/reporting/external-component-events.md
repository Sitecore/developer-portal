---
title: 'Creating custom events on Content Hub with external component'
description: 'Track and send custom events from external components to Google Tag Manager for advanced user behavior insights.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-30'
created: '2025-06-30'
audience: ['All']
---

## Context
Google Tag Manager (GTM) enhances Sitecore Content Hub by enabling seamless tracking, analytics, and marketing automation. It helps monitor user interactions with assets, such as downloads, embeds, and custom events, providing valuable insights into content performance. GTM supports event-driven marketing, triggering actions based on user engagement, while also facilitating A/B testing to ensure content strategies are optimized and data-driven.

While Content Hub provides a set of [out-of-the-box events](https://doc.sitecore.com/ch/en/users/content-hub/google-tag-manager.html), external components can be integrated to create custom events that aggregate data in a way that fits the organization’s unique needs. This flexibility allows tracking highly specific interactions and events that are otherwise not available through native integrations.

> Before the below setup, make sure you have [set up Google Analytics with Google Tag Manager](https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html).

## Execution
By creating custom events in Content Hub and sending the data to Google Tag Manager, organizations gain enhanced flexibility in tracking user interactions. 

These insights can guide decisions around:
- Custom events allow tracking of specific actions that are not captured by default events. For example, tracking when users save or modify an entity enables businesses to understand how users engage with assets and which content types are most frequently updated.
- Tailoring events to match business goals provide more insight. For instance, tracking entity saves can help assess how often assets are updated, which can inform decisions on content management and optimization.
- Once the custom events are tracked, they can trigger personalized marketing campaigns or workflows based on user behavior. For example, when an asset is saved, you can send a follow-up email to users or suggest related content.
- Custom events help you run more targeted A/B tests, especially in cases where you want to test the effect of specific actions (like saving an entity) on other behaviors, such as downloads or interactions with other assets.

With a more event-driven approach, businesses can tailor their Content Hub user interface and overall strategy based on what users do, rather than just what they view or download. 
 
In this example, we want to track when an entity (e.g., an asset or a product) is saved on the details page. This custom event will push specific information to Google Tag Manager (GTM) whenever this action occurs.

**Step 1. Define Your Event**
First, you need to identify which event you want to track on Content Hub. For this example, we will track the "ENTITY_SAVED" event.

**Step 2. Set up the External Component**
You will need to add a custom JavaScript code snippet on the page where the event occurs. This code will listen for the specific event and push the relevant data into the GTM dataLayer.

Here is the code snippet:

```
window.dataLayer = window.dataLayer || [];
const onEntitySaved = (evt: Event): void => {
    const { definitionName, id } = (evt as CustomEvent<{ definitionName: string; id: number }>).detail;
    alert(`Entity with id ${id} and definition ${definitionName} was saved, pusing to GTM`);
    window.dataLayer.push({
      'event': 'entityDemoGTM',
      'id': id,
      'definition': definitionName,
      'description':'This is sample code using window.dataLayer.push'
  });
};
window.addEventListener("ENTITY_SAVED", onEntitySaved);
```
<br/><br/>
This code listens for the `“ENTITY_SAVED”` event and then pushes data such as the entity ID, definition name, and a description into the GTM dataLayer.

**Step 3 Ensure the Event is Triggered**
 When the event occurs (in this case, when an entity is saved), the data will be pushed to the dataLayer, and you can track it within GTM.

**Step 4. Verify in Google Tag Manager**
Once the event is successfully pushed to the dataLayer, it will appear as a new event in Google Tag Manager. You can then create a custom tag for this event, configure it with your GA4 settings, and publish it.

## Related Recipes

<Row columns={2}>
  <Link title="Identifying the Most Searched Terms on the Assets Page
" link="/learn/accelerate/content-hub/optimization/reporting/most-searched-assets" /> 
  <Link title="Developing External Components" link="/learn/accelerate/content-hub/implementation/custom-logic/developing-external-components" /> 
</Row>


## Related Documentation

<Row columns={2}>
  <Link title="Set up Google Analytics with Google Tag Manager" link="https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html" /> 
</Row>


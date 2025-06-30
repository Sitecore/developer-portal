---
title: 'Identifying the most applied facet filters on the Assets Page'
description: 'Leveraging Google Tag Manager and Google Analytics 4 to track and analyze facet filters on the Assets Page'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-06-16'
created: '2025-06-16'
audience: "All"
---

## Context
Facet filters play a crucial role in helping users narrow down search results by selecting specific attributes such as file type, author, or date. By tracking the most applied facet filters, organizations can gain valuable insights into how users are interacting with search filters, which attributes are most important to them, and how users are discovering assets. This information is captured by observing the facet event using Google Tag Manager (GTM), and then sending the data to Google Analytics (GA4). With this data, organizations can optimize search filter configurations, improve asset discoverability, and refine the user experience on the Assets page.

> Before the below setup, make sure you have [set up Google Analytics with Google Tag Manager](https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html). [Identifying the Most Searched Terms on the Assets Page](learn/accelerate/content-hub/optimization/reporting/most-searched-assets) recipe has additional detail for a step-by-step approach.

## Execution
The following will walk through how to setup the rights events for GTA and GA to give you visibility into how users are using the filter facets setup within Content Hub. Once the data starts flowing, use it to refine your facet strategy. By capturing which filters are used most frequently, you can identify patterns and trends that reveal how users interact with the assets. These insights can guide decisions around:

- Metadata structure – Determine which attributes are most relevant (e.g., file type, author, date).
- Asset categorization – Identify high-value filters that influence search behavior.
- Filter optimization – Spot underused filters that may require better design, visibility, or metadata alignment.

For example, if users consistently filter by "file type," that field should be prioritized in metadata governance. Conversely, if some filters are rarely used, it might indicate poor naming, redundant categories, or lack of user awareness.

This data-driven approach leads to smarter asset organization, better metadata hygiene, and ultimately, a more efficient and satisfying user experience.

**Step 1. Observe the `facet` Event in Tag Assistant**
- Navigate to **Assets** in Content Hub.
- Open **Tag Assistant** in Preview mode, to ensure events are tracked in real-time, and apply a facet filter (e.g., file type: PNG).
- Verify that the `facet` event is fired.
- Identify the API call and corresponding Data Layer entry.

**Step 2. Create Required Variables in GTM**
- Go to Variables → New → Data Layer Variable.
- Create the following variables:
  - `facet` (Label of the facet filter)
  - `definition` (Taxonomy definition of the facet)
- Save the variables.

**Step 3. Create the Trigger**
- Go to Triggers → New → Custom Event.
- Name it `trg-facet` and set the event name as facet.
- Save the trigger.

**Step 4. Create the Tag for GA4**
- Go to Tags → New → Google Analytics: GA4 Event.
- Name it `tag-facet`, select the GA4 Configuration Tag, and set:

| Event Name | Parameter   | Variable   |
|------------|-------------|------------|
| facet      | facet       | facet      |
|            | definition  | definition |

- Assign the `trg-facet` trigger and save.

<img src="/images/learn/accelerate/content-hub/trg-facet.png" alt=""/>
<br/><br/>

**Step 5. Publish and Test**
- Click Submit → Add a version name → Publish.
- In Tag Assistant, apply facet filters and verify the event firing.
- Check GA Debug View to confirm event data accuracy.

Tracking the most applied facet filters on the Assets page provides invaluable insights into user behavior and content discoverability. By capturing which filters are used most frequently, you can identify patterns and trends that reveal how users interact with the assets. These insights can help inform decisions about asset organization, metadata tagging, and content categorization.

For example, if certain filters (such as file type, author, or date) are used more often than others, it could indicate that users prefer to refine their search based on these attributes. This information can be used to optimize the metadata structure and improve the accuracy of search results.

Additionally, tracking facet filter usage allows you to identify underutilized filters, which may need rethinking or better communication to the users. By refining the filtering options based on real user behavior, you can significantly improve the user experience, making asset discovery more intuitive and efficient.

## Related Recipes

<Row columns={2}>
  <Link title="Identifying the Most Searched Terms on the Assets Page
" link="/learn/accelerate/content-hub/optimization/reporting/most-searched-assetsl" /> 
</Row>


## Related Documentation

<Row columns={2}>
  <Link title="Set up Google Analytics with Google Tag Manager" link="https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html" /> 
</Row>



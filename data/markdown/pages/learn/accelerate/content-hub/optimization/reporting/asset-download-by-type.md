---
title: 'Tracking Asset Downloads by Rendition Type'
description: 'Track and analyze asset downloads by rendition type (e.g., original, high-res, thumbnail) to optimize content delivery and meet user preferences.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-30'
created: '2025-06-30'
audience: "All"
---

## Context
Tracking which renditions (such as original, thumbnail, or high-resolution versions) of assets are downloaded the most offers valuable insights into user preferences and content delivery efficiency. By monitoring download events, specifically focusing on the different asset renditions, you can identify which versions of the assets are most popular among users. This information helps optimize content distribution strategies, ensuring that the right formats are prioritized for user accessibility and performance. Additionally, understanding user behavior regarding asset downloads can guide future decisions on asset creation, optimization, and delivery methods.

> Before the below setup, make sure you have [set up Google Analytics with Google Tag Manager](https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html). [Identifying the Most Searched Terms on the Assets Page](learn/accelerate/content-hub/optimization/reporting/most-searched-assets) recipe has additional detail for a step-by-step approach.

## Execution

The following will walk through how to setup the rights events for GTA and GA to give you visibility into how users are using assets within Content Hub, including data on which formats (e.g., original, high-res, or thumbnails) are most in demand.

These insights can guide decisions around:
- Understanding which renditions are downloaded most frequently allows you to prioritize the optimization of those specific asset types.
- Refine your asset management strategy. If certain renditions are underused, it may indicate an opportunity to either remove them from the system to save on storage or promote them more effectively to the user base.
- Tracking download behavior enables you to understand user preferences and trends. This data can be used to shape future asset creation and marketing efforts, ensuring you deliver the formats most valuable to your audience.

This data-driven approach leads to informed decisions that enhance user experience, simpler asset management, and optimize the overall content delivery process.

**Step 1. Observe the Download Event in Tag Assistant**
- Navigate to the **Assets** page in Content Hub.
- Download a specific asset rendition (e.g., **“High-Resolution”**).
- Open **Tag Assistant** and confirm the `download` event is triggered.
- Identify the:
  - Associated **API call**
  - Corresponding **Data Layer** entry


**Step 2. Create Required Variables in GTM**
Go to **Variables → New → Data Layer Variable** and create the following:

| Variable Name | Description                                         |
|---------------|-----------------------------------------------------|
| `id`          | Entity ID of the downloaded asset                   |
| `conversion`  | Name of the downloaded rendition (e.g., "High-Resolution") |
| `definition`  | Definition name of the asset (e.g., asset category) |

Save each variable.


**Step 3. Create the Trigger**
- Go to **Triggers → New → Custom Event**
- Name the trigger (e.g., `trg-download`)
- Set the **Event Name** to: `download`
- Save the trigger


**Step 4. Create the GA4 Tag**
- Go to **Tags → New → Google Analytics: GA4 Event**
- Name the tag (e.g., `tag-download`)
- Select the **GA4 Configuration Tag**
- Configure with the following:

**Event Name:**  
`download`

**Event Parameters:**

| Parameter    | Variable    |
|--------------|-------------|
| `id`         | `id`        |
| `conversion` | `conversion`|
| `definition` | `definition`|

- Assign the `trg-download` trigger
- Save the tag

<img src="/images/learn/accelerate/content-hub/trg-download.png" alt=""/>
<br/><br/>
**Step 5. Publish and Test**
- Click **Submit**, add a version name, and click **Publish**
- In **Tag Assistant**, download various asset renditions
- Confirm that:
  - The `download` events are firing correctly
  - The **GA Debug View** in Google Analytics displays:
    - The `download` event
    - Correct rendition names
    - Accurate asset IDs


## Related Recipes

<Row columns={2}>
  <Link title="Identifying the Most Searched Terms on the Assets Page
" link="/learn/accelerate/content-hub/optimization/reporting/most-searched-assets" /> 
</Row>


## Related Documentation

<Row columns={2}>
  <Link title="Set up Google Analytics with Google Tag Manager" link="https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html" /> 
</Row>



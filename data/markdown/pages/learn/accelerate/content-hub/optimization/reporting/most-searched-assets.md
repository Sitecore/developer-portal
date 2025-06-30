---
title: 'Identifying the Most Searched Terms on the Assets Page'
description: 'Leveraging Google Tag Manager and Google Analytics 4 to track and analyze search behavior on the Assets Page'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-04-31'
created: '2025-04-31'
audience: "All"
---

## Context
Tracking the most searched terms on Content Hub’s Assets search page offers valuable insights into user behaviour. This data can help optimize metadata, enhance asset discoverability, and refine search filters. By monitoring events using Google Tag Manager (GTM) and Google Analytics 4 (GA4), organizations can better understand search patterns and make data-driven decisions.

> Before the below setup, make sure you have [set up Google Analytics with Google Tag Manager](https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html). 

## Execution

The following guide will walk through how to setup the rights events for GTA and GA to give you visibility into how users search within Content Hub. Once the data starts flowing, use it to refine your search and content strategy. Prioritize metadata improvements for high-frequency searches with poor results, identify popular terms to guide content creation, and analyze filter usage to streamline the search experience. Repeated searches can highlight unmet needs or training gaps, while less-searched but important assets may need better tagging or promotion to boost visibility.

**Step 1. Observing the `fulltextsearch` Event in Tag Assistant**

Navigate to Content Hub and click on **Assets** in the menu. Open **Tag Assistant** and observe the events triggered when the page loads. Enter a search term in the search bar and press Enter to initiate a full-text search. You'll see the `fulltextsearch` event being fired, which is the result of an API call sent to Google Tag Manager, generating an entry in the Data Layer.

<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_15_for_3800498189.png" alt=""/>
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_37_for_3800498189.png" alt=""/>
<br/><br/>

**Step 2. Extracting Data from the Data Layer**

In the Data Layer, identify the necessary Variables and Triggers to be used in Google Tag Manager. These include the following Variables: `page`, `count`, `config`, `userid`, `searchterm`.

**Step 3. Creating Variables in Google Tag Manager**

In Google Tag Manager, go to **Variables** (left menu).
1. Under **User-Defined Variables**, click New.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_16_for_3800498189.png" alt=""/>
2. In the **Variable Configuration** panel, select ** Data Layer Variable**.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_66_for_3800498189.png" alt=""/>
3. Enter the **Data Layer Variable Name** (ensure it is recognizable in GA).
 <img src="/images/learn/accelerate/content-hub/most-searched-assets/045.png" alt=""/>
<br/><br/>
Click **Save** and repeat these steps for all required variables (`page`, `count`, `config`, `userid`, `searchterm`). Once completed, your **User-Defined Variables** list should display all newly created variables.

**Step 4. Creating a Trigger for the Full-Text Search Event**

In Google Tag Manager, go to **Triggers** (left menu).
1. Click **New** to create a new trigger.
2. Enter a **Trigger Name** (e.g., trg-fulltextsearch).
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_21_for_3800498189.png" alt=""/>
3. Click on **Trigger Configuration** and select *Custom Event.*
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_39_for_3800498189.png" alt=""/>
4. In the *Event Name* field, enter the exact event name from the API Call/Data Layer (must match exactly to function correctly).
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_40_for_3800498189.png" alt=""/>

After clicking **Save**, the Triggers List will display your newly created trg-fulltextsearch trigger.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_22_for_3800498189.png" alt=""/>
<br/><br/>

**Step 5. Creating a Tag for the Full-Text Search Event**

In Google Tag Manager, go to Tags (left menu).
1. Click **New** and enter a **Tag Name** (e.g., tag-fulltextsearch).
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_41_for_3800498189.png" alt=""/>

2. Click **Tag Configuration** and choose **Google Analytics: GA4 Even**t.
3. Under **Configuration Tag**, select your GA4 Configuration Tag.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_44_for_3800498189.png" alt=""/>

4. In Event Name, enter `fulltextsearch` (same as API Call).
5. Under Event Parameters, add the following key-value pairs:

| Parameter Name | Value |
| -- | -- |
| `page` | var-page|
|  `count` | var-count|
| `config` | var-config|
| `userid` |var-userid|
| `searchterm` | var-searchterm|

<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_67_for_3800498189.png" alt=""/>
<br/><br/>

6. Click on **Triggering** and select trg-fulltextsearch.
 <img src="/images/learn/accelerate/content-hub/most-searched-assets/att_42_for_3800498189.png" alt=""/>

After clicking **Save**, your **Tag List** should now display the newly created tag-fulltextsearch tag.

<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_45_for_3800498189.png" alt=""/>
<br/><br/>

**Step 6. Submitting and Publishing the Changes**

Click **Submit** in Google Tag Manager to prepare the configuration for publishing. Add a version name and description for clarity. Once done, click Publish to apply the changes. 

<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_68_for_3800498189.png" alt=""/>
<br/><br/>
The summary of the latest version will be shown after publishing.

<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_69_for_3800498189.png" alt=""/>
<br/><br/>

**Step 7. Testing and Debugging the Configuration**
1. Open *Tag Assistant* and go to the *Output Panel*.
2. Click the *Previewing* label and select the latest configuration version.
3. Click *Debug* under the Action row. This will refresh Content Hub.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_60_for_3800498189.png" alt=""/>
<br/><br/>

4. Perform a full-text search in Content Hub.
5. In *Tag Assistant*, verify that:
 - The `fulltextsearch` event has fired successfully.
 - The event appears in the *Summary List* with the expected parameters.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_61_for_3800498189.png" alt=""/>
 - The *Data Layer* contains the expected values.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_62_for_3800498189.png" alt=""/>
 - The *Variables* panel shows the populated values.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_70_for_3800498189.png" alt=""/>
<br/><br/>
6. Open Google Analytics *Debug View* to confirm that:
 - The `fulltextsearch` event was triggered.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_24_for_3800498189.png" alt=""/>
 - The *Search Term* parameter matches the entered search term.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_25_for_3800498189.png" alt=""/>
 - The timestamp and order of events are recorded correctly.
<img src="/images/learn/accelerate/content-hub/most-searched-assets/att_63_for_3800498189.png" alt=""/>
 
<br/><br/>
Once verified, the tracking setup for full-text search is complete.

## Insights

By monitoring the `fulltextsearch` event in Google Tag Manager and Google Analytics, you gain actionable insight into the behaviour of your users with search in Content Hub. You can directly apply these insights to your content strategy, metadata optimization, and user experience tuning. The following is what you can discover:

- Search Popularity - Discover which search terms are most frequently used. This reflects what users are searching for, allowing you to map content development and metadata tagging to actual user demands. Duplicate terms are high-demand subjects, and zero-result searches reveal content or taxonomy gaps.

-  User Behavior - Monitor search term frequency and who is searching, this allows you to see trends in behavior across user groups, frustrated or repeated searching, and targeted content or support opportunities. If the same individuals are continuously searching the same terms, it could be a training, onboarding, or content placement problem.

- Search Performance - Track how individuals engage with filters, facets, and settings - see which filters are utilized, what is disregarded, and how search settings influence success. High exit rates or extensive times to discover assets can signal areas to enhance the experience. Quantify how frequently filters are utilized and whether they result in greater engagement or conversion. The lesser-used filters could have to be removed or remodeled, while the more frequent ones must become a priority within the UX.

- Content Quality - Poor search outcomes for widely used terms reveal issues with metadata, naming, or categorization of content. Insight here can guide priority clean-up of metadata and getting your assets exposed correctly. Cross-reference popular search terms with your key message, campaign theme, or product lines. This will highlight if your current asset library is in support of strategic business goals. 

- Strategic Alignment - Cross-reference search trends against business objectives, campaigns, or audience segments (e.g., department or region). This maintains your asset library connected to overall initiatives and relevant to various internal stakeholders.

## Related Documentation

<Row columns={2}>
  <Link title="Set up Google Analytics with Google Tag Manager" link="https://doc.sitecore.com/ch/en/users/content-hub/set-up-google-analytics-with-google-tag-manager.html" /> 
</Row>
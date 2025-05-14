---
title: 'Home Page Personalization'
description: 'Personalization of multiple elements on the home page according to user persona'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Technical Implementers','Architects', 'Product Owner']
product: ['CDP', 'Personalize']
---

## Context
Tailoring home page content to specific personas provides a more relevant and personalized experience for users. Using Sitecore Personalize, we can analyze the past behavior of returning users to categorize them into personas, allowing us to tailor home page content to match their interests or intentions.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
This interactive experience requires data collection through web integration to gather behavioral data, with an optional offline feed of customer information delivered into CDP to enrich profiles and customer segmentation.

Common targets for personalization include hero banners, carousels, and calls to action. The goal is to improve customer experience, site navigation, and engagement with content. For example, hero banners can be updated to display product categories that the customer has recently browsed. Similarly, carousels can be personalized to feature articles that are similar to those the customer has already browsed.

### Implementation Approach

#### 1. Create a New Interactive Experience
Open the Personalize application, go to “Experiences“ and create a new Interactive Experience. Provide a descriptive name for the experience, then click on “Create“.

<img src="/images/learn/accelerate/cdp-personalize/home-page/Screenshot 2025-03-24 at 13.37.54.png" alt="Create a new interactive experience"/>
<br/><br/>

#### 2. Add an Audience Filter to the Experience
An Audience Filter is optional for this Experience, however it may be an opportunity to exclude users who may not get value from a personalized experience. For example, users who are on their first visit to the site or who are not identified may be worth excluding from the experience. Below is an example of an Audience Condition which could be configured to exclude all visitors who have an fewer than 5 View events.

```
(function () {
    var visited = "[[has | enum(has, has not) | has | { required: true, placeholder: has/has not }]]";
    var compareValue = "[[compares to | enum(is equal to, is greater than, is less than, is greater than or equal to, is less than or equal to) | | { required: true, placeholder: compares to}]]";
    var numberDays = [[x | number | | { required: true, min: 0, max: 30, placeholder: 0 }]];
    var numberViews1 = [[number of views | number | | { required: true, min: 0, placeholder: 0 }]];
    var expectedSessionType = "WEB";
    var expectedEventType = "VIEW";
    var numPageViews = 0;
    var actualDate = new Date(Date.now());
    var lastViewPageDate;
    var pageConditionMet = false;

    if (guest && guest.sessions && guest.sessions.length > 0) {
        loop:
        for (var i = 0; i < guest.sessions.length; i++) {
            if (guest.sessions[i]) {
                if (guest.sessions[i].sessionType !== expectedSessionType) {
                    continue loop;
                } else if (guest.sessions[i].events) {
                    for (var j = 0; j < guest.sessions[i].events.length; j++) {
                        var eventData = guest.sessions[i].events[j].arbitraryData;
                        var eventType = guest.sessions[i].events[j].type;

                        if (eventData && eventData.page && eventType === expectedEventType) {
                            var creationDate = guest.sessions[i].events[j].createdAt;
                            if (creationDate) {
                                var date = new Date(creationDate);
                                var timePassed = actualDate.getTime() - date.getTime();
                                var daysPassed = Math.floor(timePassed / (1000 * 3600 * 24));
                                if (daysPassed <= numberDays) {
                                    numPageViews++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (compareValue === 'is equal to') {
       pageConditionMet = numPageViews === numberViews1; 
    } else if (compareValue === 'is greater than') {
       pageConditionMet = numPageViews > numberViews1;
    } else if (compareValue === 'is less than') {
       pageConditionMet = numPageViews < numberViews1;
    } else if (compareValue === 'is greater than or equal to') {
       pageConditionMet = numPageViews >= numberViews1;
    } else if (compareValue === 'is less than or equal to') {
       pageConditionMet = numPageViews <= numberViews1;
    }
  
    return (visited === "has" && pageConditionMet) || (visited === "has not" && !pageConditionMet);
})();
```
<br/><br/>
<img src="/images/learn/accelerate/cdp-personalize/home-page/Screenshot 2025-02-21 at 16.07.09.png" alt="Guest visited a total number of pages"/>
<br/><br/>

#### 3. Add a Decision Model to the Experience
The decision model for this experience will comprise of two components. A Programmable is used to extract the necessary details for the Guest profile for determining a persona. The Decision table is used to assign each of these values to a persona value.
<img src="/images/learn/accelerate/cdp-personalize/home-page/decision-table.png" alt="Decision Model"/>
<br/><br/>

In this example the Programmable will extract the most browsed category from some pre-defined content categories, and the decision table will map these categories to a persona value.

```
(function () {
    var categoryMap = {
        "/sneaker": "sports",
        "/loafer": "casual",
        "/oxford": "formal",
        "/brogue": "formal"
    }

    var categoryFrequencyMap = {};
    
    for (var i = 0; i < guest.sessions.length; i++)
    {
        var currentSession = guest.sessions[i];
        for (var j = 0; j < currentSession.events.length; j++)
        {
            var currentEvent = currentSession.events[j];
            // View event roll up
            if (currentEvent.type === "VIEW") {
                // page view frequencies
                if (currentEvent.arbitraryData.page in categoryMap) {
                    var category = categoryMap[currentEvent.arbitraryData.page];
                    if (category in categoryFrequencyMap) {
                        categoryFrequencyMap[category]++;
                    }
                    else {
                        categoryFrequencyMap[category] = 1;
                    }
                }
            }
        }
    }
    
    return Object.keys(categoryFrequencyMap).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
    
})();
```
<br/><br/>
This Programmable will processes user session data to determine the most frequently viewed category of pages. It maps page names to categories, initializes a frequency map, then iterates through sessions and events to update the frequency map based on the category of the viewed page. Finally, it returns the category with the highest frequency.
<img src="/images/learn/accelerate/cdp-personalize/home-page/Screenshot 2025-02-13 at 16.38.00.png" alt="Calculate Persona"/>
<br/><br/>
This decision table maps the page content categories to persona values to be passed back to the home page.

#### 4.Define the API Response
After adding the Decision Model to our Interactive Experience, we can configure an API response. In the API response tab of the Interactive Experience we can define a JSON API response including the persona value calculated in the Decision Model. Here is an example of what this response template might look like:
```
<#assign persona_node = getDecisionModelResultNode("Calculate Persona")>
{
  "persona": "${persona_node.outputs[0].persona}"
}
```
<br/><br/>

#### 5.Add Goals to The Experience
Whether implemented as an A/B or no, adding goals can help to show what value this experience is driving. For this type of experience, the goals that are most common are for views of specific pages, conversions rates, and click through rates.

## Insights
Our recommendation is to implement this experience as an Interactive Experience. This allows for the separation of content and presentation from personalization decisions. Personalize applies the Guest data and Decisioning rules to calculate the user persona. This is then passed - client-side or server-side - to the website, allowing your existing CMS to be used to store and manage the content.

This use case may be implemented using a Web Experience, however there are some considerations to be aware of when doing so.

Using a Web Experience to personalize content which is embedded in a page (as opposed to overlayed on top) can lead to flicker. This is when the default experience loads on the page for a split second first before being replaced by personalized content. To mitigate this, Web Experiences should focus on changes below to page fold or overlayed on top of the page after page render.

Implementing this as an Interactive Experience allows for the management of content in your CMS instead of in Personalize. This is particularly beneficial when dealing with home page content which is likely to be updated frequently.

### Implementing as an XM Cloud Personalized Page

As long as there are no more than 7 individual personas, this personalization can be implemented as an [XM Cloud personalized page](https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html). With this approach, we would create a page variant for each persona and use conditions to apply the page variant to the correct persona.

### A/B Testing This Experience

Home page persona-based personalization can certainly be tested by creating an Experiment instead of an Experience. When testing persona or segment-based personalization, it is important to avoid comparing the performance of one persona or segment vs another. This is because these groups may not be directly comparable. For example, customers with many past orders are more likely to order again than those who are browsing for the first time. This is true regardless of the personalization they are presented with.

Instead, we should use randomized allocation using Personalize Experiment Variants. One variant will receive no personalization at all, and the other will have it’s content personalized according to the user persona. This way we can assess whether the personalisation itself is having a positive effect.

### Adding Page Categorization to Page View Events

Adding categorization into the page view events themselves is a great way to make personalization such as this quicker and easier to accomplish. For example, instead of providing just the page value in the VIEW event, we can add in category and subcategory fields.
```
{
    "channel": "WEB",
    "type": "VIEW",
    "language": "EN",
    "currency": "EUR",
    "page": "/shoes/sneakers/tennis/88827263",
    "ext": {
        "category": "shoes",
        "subcategory": "sneakers"
    }
}
```
<br/><br/>
This way we can skip the categorization mapping in the *Decision Model*.

## Related Recipes

<Row columns={2}>
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Introduction to interactive experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-interactive-experiences.html"/>
  <Link title="Managing programmable decisions" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/managing-programmable-decisions.html"/>
  <Link title="Managing decision tables in Sitecore Personalize" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/managing-decision-tables-in-sitecore-personalize.html"/>
  <Link title="Set up VIEW events" link="https://doc.sitecore.com/sdk/en/developers/latest/cloud-sdk/set-up-view-events.html"/>
</Row>

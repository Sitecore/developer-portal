---
title: 'Last Search Experience'
description: 'Implement a personalized last search experience '
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Technical Implementers','Architects', 'Product Owner']
product: ['Personalize']
---

## Context
Customers who are reminded of their recent searches are more likely to act on their last action such as booking a flight, resulting in a conversion rate increase.

This experience will display the most recent flight search for each customer in a web component. Clicking on the last search will allow the customer to resume that search and quickly proceed to a flight booking.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
Increasing conversion rates can be achieved by reminding customers of their previous flight searches, encouraging them to complete their purchase and reducing abandoned bookings. A seamless omnichannel personalization experience enhances user satisfaction by making the booking process more convenient and intuitive. Personalized reminders also contribute to customer retention, demonstrating that the business values their preferences and is ready to assist in completing their journey. Additionally, leveraging data from past searches enables businesses to offer targeted promotions and recommendations, optimizing marketing efforts and improving overall engagement.

Last flight search is an omnichannel experience that can be applied primarily to Web and Mobile channels, but can be ultimately used on any web enabled application. It can be set up as a Web or Interactive Experience or Experiment, depending on the specific requirements. 

Before implementing the last search component, certain prerequisites must be met to ensure a seamless and effective experience.
- Data collection: the web / mobile app integration must send SEARCH events to Personalize every time a customer performs a flight search on the website / mobile app
- Last search web component design must be available to use in the web experience
- Data extension on guest profile which includes details on last searched flight (or last x searched flights)

### Implementation Approach

#### 1. Create a web experience in Personalize
Open the Personalize application, go to “Experiences“ and create a new web experience. Provide a descriptive name for the experience, then click on “Create“.
#### 2. Configure the page targeting for the new experience
By default, the experience will execute on all pages, therefore, for the best customer experience, it is recommended to define the page(s) where this experience will run on using the page targeting section in the experience build summary.

Use basic targeting for simpler targeting rules or advanced targeting to define client side JavaScript logic for your specific requirements.
#### 3. Configure the filter for the new experience - optional
Use a filter in order to control the users who will see this experience based on real time guest behaviour.

For example, you can add a condition to filter the audience of the experience to:
- only users that have searched specific flights
- only users with searches made in the last x days
- only users with a minimum of x searches

Either of these conditions will require a custom condition to be set up in Personalize.

This is an example implementation of the “users with a minimum of 3 searches“ custom condition:
```
(function(){
    if (guest.dataExtensions && guest.dataExtensions.length > 0) {
        for (var i = 0; i < guest.dataExtensions.length; i++) {
            if (guest.dataExtensions[i].name == "LastSearch") {
                for (var j = 0; j < guest.dataExtensions[i].values.searches.length; j++) {
                    totalSearches = guest.dataExtensions[i].values.searches;
                    if (totalSearches.length >= 3){
                        return true;
                    }
                }
            }
        }
    }
})
```
<br/><br/>

#### 4. Implement the decision model
Create a decision model to implement the business rules for the experience.
<img src="/images/learn/accelerate/cdp-personalize/image-20250224-171408.png" alt="Decision Model example"/>
<br/><br/>
For example, if the experience requires a deep link is returned for the last search, this link can be built in the  decision model using a programmable.

The programmable retrieves the current guest last searched origin and if it was searched for at least x times, then include it in a URL which is configured to pass in dynamic flight details e.g.

```
“https://www.airlinewebsite.com/searchResults.html/originAirportCode=“ + search.origin
```
<br/><br/>
This search URL is returned to the experience in the decision model response to be used in the dynamic data shown by the web component.

#### 5. Implement the component in the web experience
Develop the web component for this experience by using either a predefined custom web template or by adding the HTML, CSS and JavaScript required to render the component.

For example, if the web component consists of a popup showing a message such as “*Did you want to return to your previous search?*" and a button with a deep link that will allow the user to easily resume the search, the custom code for this must be added  to the web experience.

<Alert status="info" >
  <AlertIcon />
    To set this up as an interactive experience, this step will consist of building the API request instead of a web component.
</Alert>
<br/>

#### 6. Configure goals
Track the performance of the experience by configuring goals.  For this type of experience, the goals that are most common are for tracking conversion rates, click through and abandonment rates.

## Insights
### Last searches in other industries

While the example detailed for this experience is focused on last flight searches on an airline website, the same type of experience can be used across different channels for other industries, as long as the applications on those channels have a search functionality available. The experience implementation will have to be adjusted to be compatible with the type of search available on each application, but the overall setup is very similar to the example detailed here.

### Experience goal tracking

Tracking the performance and goals of the experiment displaying a customer's last search is crucial for several reasons such as measuring effectiveness and tracking key metrics such as conversion rates, click-through rates, and abandonment rates. This is so the business can determine whether displaying the last search is actually improving customer engagement and sales.

Setting goals can also highlight specific aspects of the user experience that may need refinement, such as the design of the reminder or the timing/ location of its display.

Understanding how different segments of customers respond to this use case can help tailor the last search experience even further, making it more relevant and effective for various user groups.

Regularly tracking and analyzing the last search performance helps create a culture of continuous improvement within the business, where features are constantly being reviewed and refined based on real-world data and customers behaviour.

## Related Recipes

<Row columns={2}>
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
  <Link title="Developing an Identity Strategy" link="/learn/accelerate/cdp-personalize/pre-development/identity-strategy" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="SEARCH event" link="https://doc.sitecore.com/personalize/en/developers/api/search-event.html"/>
  <Link title="Getting started with web experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/getting-started-with-web-experiences.html"/>
  <Link title="Create a custom condition" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/create-a-custom-condition.html"/>
  <Link title="Introduction to decisioning in Sitecore Personalize" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-decisioning-in-sitecore-personalize.html"/>
  <Link title="Introduction to experience goals" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-experience-goals.html"/>
</Row>



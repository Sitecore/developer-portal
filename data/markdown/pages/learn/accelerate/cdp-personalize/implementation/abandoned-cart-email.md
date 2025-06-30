---
title: 'Abandoned Cart Email'
description: 'Trigger an automated email when a customer abandons a flight booking'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Technical Implementers','Architects', 'Product Owner']
features: ['Personalize']
---

## Context
Customers abandon carts for multiple reasons - distractions, uncertainty, and poor timing. A timely message can entice them to come back, by leveraging real-time behavioural data, segmentation and decisioning logic to trigger context-aware messages.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
If we follow up with people who dropped off—using contextual, relevant messaging based on their recent search—they’re more likely to come back and complete their booking. The objective is straightforward: deliver a better experience and drive more conversions by re-engaging customers who showed intent but didn’t follow through.

This use case is focused on Sitecore Personalize on the email channel, and it can be built either as a [triggered experience](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-triggered-experiences-in-sitecore-personalize.html) (sent in real time) or as an [experiment](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-interactive-experiments-in-sitecore-personalize.html) (batch-based, with testing built in).

### Overarching Approach
This kind of targeted re-engagement helps recover lost bookings, while showing customers that you understand their intent. As an overarching approach:

1. Define the moment to act - We target users who reach the passenger details page but don’t proceed to payment or confirmation. If they haven’t moved forward within a set window (e.g., 30 minutes), they’re considered to have abandoned.
2. Capture intent signals - We monitor what they searched for—destination, travel dates, passenger count, extras—and save that context so we can personalize the follow-up message.
3. Set up smart decisioning - Use Sitecore Personalize to create a decision model that determines when and how to engage. It could be a one-for-all prompt or even more dynamic based on variables like destination popularity or user history.
4. Craft the email - Keep it personal and relevant. Include their original search details, a clear call to action, and optional urgency or incentive messaging (e.g., “Still thinking about Paris? Fares may go up soon”).
5. Trigger the campaign - Link the experience to your email platform, either to trigger it in real time as the action happens or run it as a scheduled campaign.
6. Track performance and iterate - Monitor open rates, clicks, and completed bookings. Run A/B tests on subject lines, creative, and send timing to learn what resonates best with your audience.

Before implementing the abandoned cart email, certain prerequisites must be met to ensure a seamless and effective experience.
- The web integration must capture the customer transactional behaviour during the booking process, i.e. send order data to Personalize.
- To enable email delivery, Sitecore Personalize is configured to connect with your preferred email service provider. Review the Create a new connection documentation for more detail on integrating your email provider. 

### Implementation Approach
Cart abandonment can be configured by creating a triggered experience in Sitecore Personalize that identifies when a user drops off the booking flow and automatically triggers a personalized follow-up email.

#### 1. Create a triggered experience in Personalize

Open Personalize, go to “*Experiences*“ and create a new triggered experience. Provide a descriptive name for the experience, then click on *“Create“*. Configure the “*Abandoned Cart*” as the experience trigger.
<img src="/images/learn/accelerate/cdp-personalize/abandon-cart/image-20250124-071335.png" alt="Configure the Abandoned Cart as the experience trigger."/>
<br/><br/>

#### 2. Configure the API request

Firstly, on the API request tab of the experience, use the drop-down list to select the external destination you want to send data to.  The email provider connection configured as a prerequisite should be selected here.

<img src="/images/learn/accelerate/cdp-personalize/abandon-cart/image-20250404-115813.png" alt="API request tab of the experience"/>
<br/><br/>

#### 3. Configure the filter for the new experience.

The experience should execute only for customers who searched for a flight, started the booking process for that flight, but have not completed that booking. This logic can be built as part of a custom condition in Personalize, as per the example code below:
```
(function () {
    if (event.message && typeof event.message.ref !== 'undefined') {
        for (var i = 0; i < guest.sessions.length; i++) {
            var session = guest.sessions[i];
            if (session.ref === event.message.ref) {
                var addContactsPresent = false;
                for (var j = 0; j < session.events.length; j++) {
                    var currentEvent = session.events[j];
                    if (currentEvent.type === "CLEAR_CART") {
                        return addContactsPresent;
                    }
                    if (currentEvent.type === "CONFIRM" || currentEvent.type === "CHECKOUT") {
                        return false;
                    }
                    if (currentEvent.type === "ADD_CONTACTS"
                        && currentEvent.sessionData
                        && currentEvent.sessionData.abandoned_cart_trigger) {
                        addContactsPresent = true;
                    }
                }
                return addContactsPresent;
            }
        }
    }
    return false;
}})();
```
<br/><br/>
This filter checks the "`ADD_CONTACTS`" event was sent in the abandoned session, because this example targets customers who advanced to the passenger details page during the booking flow. However, the filter can be adapted based on specific requirements, for example, to include customers who have abandoned the booking flow earlier, by checking if the "`ADD`" event was sent in the abandoned session.

#### 4. Create the offers

An offer is a marketing message presented to users based on their behavior, profile, or predefined rules. It can be a discount, promotion, recommendation, or any dynamic content designed to enhance user engagement and conversions.

For successful execution of triggered experiences / experiments, the decision model must return at least one offer. Since this example does not require a specific offer, a default offer can be created and returned from the decision model. Refer to the [Create Offer Section](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/offer-templates.html) in the Sitecore documentation for more information.

#### 5. Implement the decision model

Create a decision model to implement the business rules for the experience, as per the example below. The decision model will comprise of 5 components:

<img src="/images/learn/accelerate/cdp-personalize/abandon-cart/image-20250221-074609.png" alt="Sample Decision Model for Abandoned Cart"/>
<br/><br/>

- Guest (input data) - provides access to all the data associated with the guest who abandoned the cart, such as the guest email, browsing behaviour and cart content.
- getFlightDetails (programmable) - this programmable will retrieve the flight details in the abandoned cart, such as origin and destination, travel dates and seat preferences.
- getCustomData (programmable) - this programmable will retrieve additional guest data that is relevant for this experience, such as the loyalty status, past orders and previous searches.
- Offer (decision table) - this decision table maps different categories of customers and cart content to an offer, resulting in most relevant offer being returned for each customer. Refer to the [Use offers in a decision model](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/use-offers-in-a-decision-model.html) documentation for more information about configuring a decision table to return offers.
- Offers (knowledge source) - provides the decision table with access to the pre-configured offers.

Once the decision model variant is created, it should be moved from *draft* to *production* state to make it available to the experience. 

#### 6. Associate the decision model with the experience:

From the Decisioning section, click on '*Add Decision Model*' and select the one that was created in step #5, then click on *Start* to begin the experience. 

<img src="/images/learn/accelerate/cdp-personalize/abandon-cart/image-20250428-055529.png" alt="Abandoned Cart Triggered Experience"/>
<br/><br/>

#### 7. Decision Model outputs

In the API Body tab of the experience, we can define a JSON API request that can include the different outputs calculated in the decision model. Here is an example of what this request template might look like:
```
<#assign flightDetails = getDecisionModelResultNode("getFlightDetails").outputs[0].flightDetails>
<#assign start = flightDetails.localDepartureDateTime?datetime("yyyy-MM-dd'T'HH:mm")>
<#assign arrival = flightDetails.localArrivalDateTime?datetime("yyyy-MM-dd'T'HH:mm")>
<#assign customData = getDecisionModelResultNode("getCustomData").outputs[0].customData>
"Data" :
{
		"country": "${flightDetails.country}",
        "currency": "${flightDetails.currency}",
        "departure_city": "${flightDetails.departure_city}",
		"destination_city": "${flightDetails.destination_city}"
		"arrival_date": "${arrival?string("dd-MMM-yy")}",
		"departure_date": "${start?string("dd-MMM-yy")}",
		"membership": "${customData.membership}",
		"loyalty_status": "${customData.loyalty_status}"
}
```
<br/><br/>
This response contains information about the flight which was abandoned (origin, destination, departure and arrival dates, country, currency) and also information about the customer (membership and loyalty status). 

## Insights
### Abandoned cart in other industries

While the example detailed for this experience is focused on the abandoned cart for an airline website, the same type of experience can be used across different channels for other industries, as long as the applications on those channels are sending orders to Sitecore Personalize in real time. 

### Abandoned search

An alternative, simpler to set up experience is the abandoned search which can be used to remind the customers who did not convert in the last session about their last search through different communications (email, web push notification, etc.). 

### Offers

Triggered experiences are designed to work with decision models that return an offer upon successful execution. Even if the experience itself doesn't directly require an offer, including a generic offer in the decision model response can be useful—particularly when testing or validating the model's logic. This ensures the experience runs as expected and simplifies debugging during setup.

### Experience goal tracking

Triggered experiences do not require explicit goal configuration. By default, Sitecore Personalize will automatically apply standard goals - such as revenue, average order value, and conversion metrics  using predefined attribution windows.

The Goal dashboard is available for each Triggered Experience and displays the predefined goal, and it will show data for the past 7 days.

- Conversions – The total number of sessions that resulted in a conversion within each attribution window of the experiment or experience. For example, in a triggered email sent after cart abandonment, the table shows how many conversions occurred within 1 hour, 3 hours, and beyond after the email was sent for both the personalized variant and the control group.
- Average Order Value (AOV) – The average value of all completed orders within each attribution window. In the context of a cart abandonment email, this reflects the average amount spent on purchases made within 1 hour, 3 hours, etc. following the email shown separately for the variant and the control.
- Revenue – The total revenue generated within each attribution window. For a cart abandonment email experience, the table displays how much revenue was driven by orders placed within 1 hour, 3 hours, and so on after the email was delivered for both the variant and the control group.

Additional information about the data in this dashboard can be found on the [Goals dashboard](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/goals-dashboard.html) documentation.

## Related Recipes

<Row columns={2}>
  <Link title="Segmentation" link="/learn/accelerate/cdp-personalize/pre-development/segmentation" />
  <Link title="Last Search Experience" link="/learn/accelerate/cdp-personalize/implementation/last-search-experience" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Introduction to triggered experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-triggered-experiences-in-sitecore-personalize.html"/>
  <Link title="Introduction to interactive experiments" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-interactive-experiments-in-sitecore-personalize.html" />
  <Link title="Connect to an external destination" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/connect-sitecore-personalize-to-an-external-destination.html" />
  <Link title="Offer Templates" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/offer-templates.html" />  
</Row>


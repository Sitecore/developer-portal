---
title: 'Before You Fly Reminder'
description: 'A guided approach to implementing reminders before flying.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Technical Implementers','Architects', 'Product Owner']
features: ['CDP']
---

## Context
Anticipating customer needs is one of the key aspects of personalization. Whether you’re selling flights, furniture, or financial products it’s key to build a segment of guests, link this to an audience export and trigger the experience in the relevant channel - such as email.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
In travel, the *Before You Fly* experience is that sweet spot between booking and flight—when travelers are willing to engage, plan, and enrich their experience. Airlines leverage this time to nudge travelers with timely check-in reminders and sell ancillaries like seat upgrades, extra baggage allowance, or lounge access.

<Alert status="info" >
  <AlertIcon />
  This use case will send personalized emails to customers, taking into account recent activity and intent across all channels. For other industry approaches, review the [Insights](#insights) section.
</Alert>
<br/>

Setting up this reminder, needs a clear business goals that is aligned to the overall user journey on your channels:

- Personalized emails are more likely to be opened. Subsequently, this can improve click-through and conversion rates. With *Before You Fly* emails, airlines can remind customers of their upcoming flights and take the opportunity to up-sell ancillaries e.g. change seat, more baggage, lounge access, etc. Thus, increasing conversion rates.
- Sending customized emails at the right time can improve customer experience and enhance the businesses credibility in the eyes of the customer. This in turn will help build customer loyalty and retention.
-  Increased data utilization allows businesses to deliver highly personalized content, based on guest and order data. This means that customers are only being shown content relevant to them which, in turn, can lead to a more satisfying customer journey.

### Implementation Approach
#### 1. Create a segment
Create segment of users who have made a purchase in the last 6 months.
<img src="/images/learn/accelerate/cdp-personalize/before-you-fly/image-20250123-172749.png" alt="Create segment"/>
<br/><br/>

#### 2. Create an Audience Export
Create *Audience Export* and link *segment* as the *Audience*. Provide a descriptive name and click '*Create*'
<img src="/images/learn/accelerate/cdp-personalize/before-you-fly/image-20250123-173248.png" alt="Create Audience Export"/>
<img src="/images/learn/accelerate/cdp-personalize/before-you-fly/image-20250123-173429.png" alt="Link segment"/>
<br/><br/>

#### 3. Configure the filter for the new experience - optional
Apply a filter condition which loops through the segment of guests and filters them further. This could be done in the segment, using Advanced segmentation, but sometimes it is easier to use JavaScript.

The following code loops through each guest’s order, and returns true/false based on whether the order departure date is in the next 3 days. If true, the guest will be included in the Audience Export.

```
//FUNCTION 1 -  checks if the date is 3 days from current timestamp
    //return true if departure date = today + 3 days
    //else, return false
//FUNCTION 2 - loops through orders to find flight orders 
  //checks the date range using FUNCTION 1
//IF ELSE - checks if guest has an order, email, first name and last name
    //passes in FUNCTION 2
    //returns true/false for final result
```
<br/><br/>

#### 4. Define the output of the Audience Export
Define the **file format**. This can either be CSV or JSON - it will depend on the business needs. If you choose CSV, you can also decide whether it will be comma or pipe delimited.
    <img src="/images/learn/accelerate/cdp-personalize/before-you-fly/image-20250204-102032.png" alt="Export format"/>
    <br/><br/>

Define the output structure. You must include at least one reference to the outputted data - this could be the guests email: 
    <img src="/images/learn/accelerate/cdp-personalize/before-you-fly/image-20250213-111644.png" alt="Output structure"/>
    <br/><br/>

 For *Before You Fly* you will need to include the guests personal and flight information, as well as any image url's, subject/body/button texts or button links that will ultimately be included in the email to be sent out to the audience guests:
    <img src="/images/learn/accelerate/cdp-personalize/before-you-fly/image-20250213-112151.png" alt="Fields required for email"/>
    <br/><br/>

Next you can define the JavaScript - 

```
(function () {
    //create product dictionary
    //add as many items as needed
    let productsOutput = {
        "BAG": {
            "Image_URL": "bag_image_url_value",
            "Subject": "bag_subject_value",
            "Body": "bag_body_value"
        },
        "SEAT": {
            "Image_URL": "seat_image_url_value",
            "Subject": "seat_subject_value",
            "Body": "seat_body_value"
        }
    };
    let departureAirport = "";
    let destinationAirport = "";
    let flightSegmentsLength = 0;
    let fareFamily = "";
    let PNR = "0000";
    let order = null;
    let hasOrder = false;
    let productsArray = [];
    //function which checks that the departure date is 3 days from now
    function checkDateRange(orderDeparturetime) {
        var day = new Date(orderDeparturetime);
        var next3Days = new Date();
        next3Days.setDate(next3Days.getDate() + 3);
        if (day.getDate() === next3Days.getDate() && day.getMonth() === next3Days.getMonth() && day.getUTCFullYear() === next3Days.getUTCFullYear()) {
            return true
        } else {
            return false
        }
    }
    //findOrder function
    //finds an order due in the next X days and stores order information
    //also push into the itemsOnOrder array the products that user have bought
    //find order due in 3 days
    function findOrder() {
        for (var i = 0; i < guest.orders.length; i++) {
            let currentOrder = guest.orders[i];
            for (var z = 0; z < currentOrder.orderItems.length; z++) {
                let item = currentOrder.orderItems[z];
                if (item.type === "FLIGHT") {
                    if (!hasOrder) {
                        let orderDeparturetime = item.flightSegments[0].departureDateTime;
                        departureAirport = item.flightSegments[0].origin;
                        destinationAirport = item.flightSegments[0].destination;
                        flightSegmentsLength = item.flightSegments.length;
                        if (item.flightSegments[0].fareFamily) {
                            fareFamily = item.flightSegments[0].fareFamily;
                        } else {
                            fareFamily = item.flightSegments[0].fareClass;
                        }
                        PNR = currentOrder.referenceId;
                        if (checkDateRange(orderDeparturetime)) {
                            order = item;
                            //loop into the order items;
                            hasOrder = true;
                        }
                    }
                } 
            }
        }
    }
    //if guest has an order
    //call findOrder function
    if (guest.orders && guest.orders.length > 0) {
        findOrder();
    } else {
        return false;
    }
    //return values which will be included in the audience export output
    return {
        "email": guest.email,
        "firstname": guest.firstName,
        "lastname": guest.lastName,
        "Booking_Reference": PNR,
        "Image_URL1": productsArray[0].Image_URL,
        "Subject1": productsArray[0].Subject,
        "Body1": productsArray[0].Body,
    }
})();
//INSIGHTS:
//need to add in a function which remove items from the product dictionary, 
//if the user has already purchased this item
//need to handle converting product object to array
//findOrder can find details of the order 
//these details can later be used to determine which products to upsell
//e.g. if flightSegments > 1 then don't offer productX
```

At this stage you should be able to test your Audience Export configuration.

#### 5. Create action
Create a [Sitecore Connect recipe](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/create-a-recipe-in-sitecore-connect.html) which is triggered based on new Audience Export

## Insights
While *Before You Fly* is an airline specific experience, the core logic can be manipulated for many different industries - build a segment of guests, link this to an audience export, export the guest data to a third party integration. Think:

- A retailer promoting accessories or warranties after a high-value purchase.
- A company nudging users toward onboarding steps or feature adoption before their first login.
- A hotel offering early check-in or room upgrades before arrival.
- A fitness brand reminding members of an upcoming class and offering personal training slots.

Depending on how complex you want your segment to be will determine whether you want to use [Basic or Advanced segmentation](/learn/accelerate/cdp-personalize/pre-development/segmentation). If you want to keep it simple, you could create a Basic segment which just returns guests who made an order in the last year. Then to determine whether any of these orders are in the next x days, this could be done using the Condition feature within Audience Export.

Alternatively, this logic could all be done with Advanced segmentation which would mitigate the need for using the Audience Export filter.

When configuring the output for your Audience Export, consider what details you want to include, or need for external integrations, so that you are not exporting too little or too much information.

With Audience Export, you can schedule it to run daily, or for a certain period of time. If you only need the export to run for 3 day, for example, schedule this time as opposed to having it run every day unnecessarily.

When retrieving your export, you can either do so by using the [Audience Export API](https://api-docs.sitecore.com/cdp/audience-export-rest-api), or through a [Sitecore Connect](https://www.sitecore.com/products/connect) recipe:
<img src="/images/learn/accelerate/cdp-personalize/before-you-fly/image-20250320-175246.png" alt="Connect recipe example"/>

## Related Recipes

<Row columns={2}>
  <Link title="Segementation" link="/learn/accelerate/cdp-personalize/pre-development/segmentation" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Audience Export API" link="https://api-docs.sitecore.com/cdp/audience-export-rest-api"/>
  <Link title="Create a recipe in Sitecore Connect" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/create-a-recipe-in-sitecore-connect.html"/>
</Row>

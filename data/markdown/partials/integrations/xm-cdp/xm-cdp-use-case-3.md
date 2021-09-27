---
product: ['xm', 'cdp']
area: ['integrations']
---

A CDP is used to store information about your customers. Each business has a different domain model, though, thus requiring a different set of customer details to be stored. For this reason, you will need to tailor the customer data you’re storing to match your business requirements.

## Key Concepts
As your users interact with your web channel built using Sitecore XM, you will need to ensure that the data you’re storing match your requirements. To do this, you will most likely have to customize your customer model to include fields used to store the data specific to your industry. In Sitecore CDP this customization is achieved by using Data Extensions. You can read more about the Data Extension Model here: https://developer.boxever.com/reference/data-extension-data-model 

## Developer Configuration 
The developer uses the Data Extension model to update, store and retrieve guest data that includes custom fields specific to your business. They are stored in the format of a series of key-value pairs, allowing you to store any data you need. The process of interacting with Data Extension models is performed via a series of different API calls, you can see details regarding these calls in the links below:

- Create Guest Data Extension: https://developer.boxever.com/reference/create-guest-data-extension 
- Retrieve Guest Data Extension: https://developer.boxever.com/reference/retrieve-guest-data-extension
- Update Guest Data Extension: https://developer.boxever.com/reference/update-guest-data-extension
- Delete Guest Data Extension: https://developer.boxever.com/reference/delete-guest-data-extension 

Note that the Create, Update & Delete calls cannot be made directly from the front-end system (e.g. the browser) due to the need for them to be authenticated. These calls must be sent via XM to ensure that the correct authentication headers are added to the requests.

There are many scenarios where you would want to interact with Guest Data from the web channel, but some of the most common would be:

- Registering a new user
- Retrieving a user’s Details
-	Updating a user’s details

In the Sequence diagram below you can see how the data would flow between XM and CDP in each of the scenarios.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when identifying users from a server-side request.][1]

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/51bfb19925e546679b7c1d9d532cf6d3?v=e2504dc7

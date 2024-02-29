---
title: 'Integrating Sitecore Send with Sitecore OrderCloud'
description: 'Leverage Sitecore Send to create abandoned cart reminders & personalized product emails integrated with Sitecore OrderCloud.'
product: ['send', 'ordercloud']
area: ['integrations']
---

## Introduction

Commerce is multi-faceted in creating loyal buyers out of your visitors. Did you know that on average, over 67% of online carts are abandoned by visitors? This is a staggering statistic, but you can take proactive action by combining both Sitecore OrderCloud and Sitecore Send to engage customers with a rich experience across web and email.

**Sitecore OrderCloud** is a headless eCommerce platform for delivering highly customized commerce experiences across multiple channels and markets (B2C, B2B, B2B2C). Sitecore OrderCloud is free to setup a sandbox account and start with any number of storefront options.

**Sitecore Send** is a marketing automation platform with a rich, email campaign manager, branded email templates, and AI capabilities for personalized emails. Sitecore Send is a perfect fit for commerce with the ability to do product suggestions, abandoned cart recovery, and personalized landing pages.

![Architecture diagram highlight Sitecore Send & Sitecore OrderCloud][1]

## Overview of Use Cases

There are numerous use cases which can be delivered in the hands of marketers by integrating Sitecore OrderCloud with Sitecore Send. You can start extremely basic for automation ideal for B2C scenarios and approach much more complex use cases than those highlighted below.

- Track user visits to drive re-marketing campaigns based on content or products viewed
- Automate abandoned cart emails with promotional offers to drive revenue recovery
- Generate personalized product recommendations in email campaigns

### Key Concepts for Marketers

Sitecore Send offers a robust online portal for any business user to create campaigns in minutes, and leverage features to handle more advanced needs with a whole workflow and rules without the need for IT to support you day to day.

Once Sitecore OrderCloud and Sitecore Send are connected, you’ll see all potential subscribers, order activity, measure campaign attribution and revenue, and support any number of A/B test scenarios to hone in on your audience and create loyal buyers coming back to your site again and again.

### Key Concepts for Developers

Both Sitecore Send and Sitecore OrderCloud have robust APIs with javascript libraries which are easy to integrate on your own with any of your favorite UI component stacks. The value of this blueprint is really to help guide you on getting started and basic code samples to simplify your solution deployment.

An integration between OrderCloud and Send comes down capturing commerce events on your OrderCloud-powered website and then forwarding those events over to Sitecore Send to track visitor activity and ordering behavior.

You will find some code samples displayed as part of the different use cases below, you can also find further samples in this GitHub repository: https://github.com/Sitecore/Integration-Blueprints/tree/main/Sitecore%20OrderCloud%20&%20Sitecore%20Send

## Data Responsibilities

### Sitecore OrderCloud Data Responsibilities

For this composable integration, Sitecore OrderCloud acts as the backbone of all commerce management across buyers, sellers, and suppliers. It manages transactional integrity across multiple channels with your custom logic and system integrations (ERP, OMS, CRM, PIM, etc). You want OrderCloud to be your source of truth for:

- Product Information
- Buyer Specific Pricing and Volume Discounts
- Users and Security
- Order Management and Submission

### Sitecore Send Data Responsibilities

Sitecore Send is primarily a data consumer from Sitecore OrderCloud commerce sites, where once the data lands in Sitecore Send, marketers are freely enabled to run their marketing campaigns in any number of ways.
While Sitecore Send is smart enough to aggregate subscriber data and commerce from any number of channels and platforms at once, we’ll focus on how to expedite integration with Sitecore OrderCloud. In this case, Sitecore Send is responsible for:

- Email Campaign Management
- Custom Segments for Targeting and Personalization
- Reporting and Metrics on Marketing Strategies
- Marketing Subscription Management

## Prerequisites

### Sitecore Send Prerequisites

You should create a login along with your free account at https://moosend.com/. You’ll start with a basic, empty mailing list, and one default website.

Once you have an account, take note of the following information under you account has highlighted in the next sections.

#### API Keys

By clicking on the settings/gear icon in the top left, you’ll see an option in the drop down menu for ‘API Key’. Keep this secure and private. Some use cases will require the use of the API Key to manage subscriber data and interfacing directly with Send.

#### Website IDs

A Sitecore Send account can have any number of sites configured. They are used to track traffic across multiple channels and support multiple brands at once, just like Sitecore OrderCloud.

By clicking on the settings/gear icon in the top left, you’ll see an option in the drop down menu for ‘Websites’. There will be a default website setup, but you can add others on your account. Clicking on that website, you’ll get a ‘Website ID’ which will be used as part of the beacon and tracking JavaScript libraries.

#### Installing the Tracker

Within a specific Website page (see 4.1.2), at the bottom for custom integrations, it includes an easy to use custom code snippet you can drop into your page header or with Google Tag Manager to embed Sitecore Send into your website. This step-by-step process is outlined within the ‘Website IDs’ settings from (4.1.2).

### Sitecore OrderCloud Prerequisites

You should create a login along with a sandbox organization at https://www.ordercloud.io. You’ll start with a base, empty organization, but you can take advantage of tutorials online to populate your storefront with a basic catalog to start development.

## Glossary of Terms

| Term                | Value                                                                                                               |
| :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| Sitecore OrderCloud | Formerly just OrderCloud, an API-first Ecommerce engine                                                             |
| Sitecore Send       | Formerly Moosend, an email automation platform                                                                      |
| JS Tracking Library | A javascript library from Sitecore Send that captures data on user actions from your website. Also called Mootrack. |

## Use Case #1: Track user’s Interactions with the storefront

### Key Concepts

Everything users do on an Ecommerce site, from looking at a specific product to reading a specific article generates valuable data about their interests. Getting that data out of your storefront and into Sitecore Send will allow you to segment users and run sophisticated, personalized marketing campaigns.

### Developer Configuration

Developers will need to follow [these instructions](https://help.moosend.com/hc/en-us/articles/115002454009-How-can-I-install-website-tracking-by-using-the-JS-tracking-library-) to add the JS Tracking Library to their ecommerce front-end. Note that each separate website will need to be configured in the Sitecore Send UI and connected via a globally unique ID.

Once the library has been added, developers will need to use the library to hook into events. There are 4 events that are of particular significance for ecommerce, outlined in the table below. It is recommended to use at least these four in all ecommerce use-cases. Custom events can also be created.

| Event            | OrderCloud API Routes                                                                                                | Sitecore Send Documentation                                                                                                    | Sitecore Send Event Key |
| :--------------- | :------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| Identify         | https://ordercloud.io/knowledge-base/authentication, https://ordercloud.io/api-reference/me-and-my-stuff/me/register | https://help.moosend.com/hc/en-us/articles/115002887545-Identifying-my-website-users                                           | “identify”              |
| View Product     | https://ordercloud.io/api-reference/me-and-my-stuff/my-products/get-product                                          | https://help.moosend.com/hc/en-us/articles/115003439493-How-does-the-When-someone-views-specific-products-trigger-work-        | “PAGE_VIEWED”           |
| Add To Cart      | https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/create                                         | https://help.moosend.com/hc/en-us/articles/115000655214-How-does-the-When-someone-adds-any-product-to-their-cart-trigger-work- | "trackAddToOrder”       |
| Purchase Product | https://ordercloud.io/api-reference/orders-and-fulfillment/orders/submit                                             | https://help.moosend.com/hc/en-us/articles/115000643973-How-does-the-When-someone-purchases-any-product-trigger-work-          | “trackOrderCompleted”   |

Importantly, the first event that must be called in a user session is identify. This sets the current user for future events. Here’s is an example implementation using the [OrderCloud Javascript SDK](https://www.npmjs.com/package/ordercloud-javascript-sdk).

```javascript
import { Auth, Me } from "ordercloud-javascript-sdk";

// OrderCloud Login
var authResp = await Auth.Login("<username>", "<password">, "<clientID>", []);

// OrderCloud get current user details
var user = await Me.Get(authResp.access_token);

// Identify the current user to Sitecore Send for all following events. Sets a cookie.
mootrack("identify", user.Email);

// Note, also call this anywhere else a user identifies themselves with an email (register, checkout).
```

After Identify, other events like add to cart can be called. The example below shows how to create a lineItem and then immediately forwards that event info to Sitecore Send using the JS Tracking Library.

```javascript
import { LineItems } from 'ordercloud-javascript-sdk';

// OrderCloud Add to cart
var lineItem = await LineItems.Create('Outgoing', '<orderID>', {
  ProductID: '<unique-product-code>',
  Quantity: 3,
});

// Forward the event to Sitecore Send
mootrack('trackAddToOrder', lineItem.Product.ID, lineItem.UnitPrice, lineItem.Product.xp.url, lineItem.Quantity);
```

![Sequence diagram showing users interactions being tracked with the storefront][2]

### Marketer Usage

As a marketer, you should now have the appropriate data to power many types of email campaigns. All that remains is to use the Sitecore Send UI to create the automation flow you want. See this tutorial video for an example of segmenting users.

https://academy.moosend.com/lessons/how-to-segment-your-email-list-ecommerce/

## Use Case #2: Abandoned Cart Reminders

### Key Concepts

When users add an item to the cart but don’t buy it, your business has missed an opportunity to convert. Capture more sales with targeted, personalized emails to those users. Sitecore send ingests event data from your storefront and then lets you design your own logic for how to follow up with these potential customers. For example, you can trigger an automation on an add to cart event and then configure rules such as wait 2 hours and send an email only if that product has not been ordered.

### Developer Configuration

Developers will need to follow [these instructions](https://help.moosend.com/hc/en-us/articles/115002454009-How-can-I-install-website-tracking-by-using-the-JS-tracking-library-) to add the JS Tracking Library to their ecommerce front-end. Note that each separate website will need to be configured in the Sitecore Send UI and connected via a globally unique ID. Once the library has been added, developers will use the library to hook into events. See 6.3 for a full list of recommended events. One is the product purchased event. Example code handling this is shown below.

```javascript
import { Orders, LineItems } from 'ordercloud-javascript-sdk';

// Order LineItems saved in browser memory
var lineItems: LineItem[];

// OrderCloud submit order
await Orders.Submit('Outgoing', '<orderID>');
var products = lineItems.map((lineItem) =>
  // Convert product model from OrderCloud to Sitecore Send. See Appendix.
  Convert(lineItem)
);

// Forward a list of ordered products to Sitecore Send
mootrack('trackOrderCompleted', products);
```

### Marketer Usage

As a marketer, you should now have the appropriate data to power your abandoned cart email campaign. All that remains is to use the Sitecore Send UI to create the automation flow you want. See this tutorial video for an example of an abandoned cart automation.

https://academy.moosend.com/lessons/how-to-automate-an-abandoned-cart-email/

## Use Case #3: Emails with Personalized Products

### Key Concepts

In any email campaign you create, showing users content that will interest them is critical. With information about what a user has done in the past, Sitecore send can generate personalized product recommendations. Along with links and images, these can be embedded into any custom email template.

### Developer Configuration

Developers will need to follow [these instructions](https://help.moosend.com/hc/en-us/articles/115002454009-How-can-I-install-website-tracking-by-using-the-JS-tracking-library-) to add the JS Tracking Library to their ecommerce front-end. Note that each separate website will need to be configured in the Sitecore Send UI and connected via a globally unique ID. Once the library has been added, developers will need to use the library to hook into events. See 6.3 for a full list of recommended events and how to hook into them.

### Marketer Usage

As a marketer, you should now have the appropriate data to power email campaigns with product recommendations. All that remains is to use the Sitecore Send UI to create the automation flow you want. See this tutorial video for an example of a personalized product recommendation.

https://academy.moosend.com/lessons/how-to-send-personalized-product-recommendations/

## Appendix

### More Code Samples

```typescript
interface SitecoreSendProduct {
  itemCode?: string;
  itemName?: string;
  itemImage?: string;
  itemPrice?: number;
  itemUrl?: string;
  itemQuantity?: number;
  itemTotalPrice?: number;
  itemCategory?: string;
  itemManufacturer?: string;
  itemSupplier?: string;
  myProperty?: any;
}

// Convert an OrderCloud lineItem to SiteCore Send's product model
function Convert(lineItem: LineItem): SitecoreSendProduct {
  return {
    itemCode: lineItem.Product.ID,
    itemName: lineItem.Product.Name,
    // depends on defining this extended property (xp)
    itemImage: lineItem.Product.xp.Images[0].url,
    itemPrice: lineItem.UnitPrice,
    // depends on defining this extended property (xp)
    itemUrl: lineItem.Product.xp.url,
    itemQuantity: lineItem.Quantity,
    itemTotalPrice: lineItem.LineTotal,
    // depends on defining this extended property (xp)
    itemCategory: lineItem.Product.xp.category,
    // depends on defining this extended property (xp)
    itemManufacturer: lineItem.Product.xp.manufacturer,
    // depends on defining this extended property (xp)
    itemSupplier: lineItem.Product.xp.supplier,

    // any custom property for segmentations or automations
    myProperty: lineItem.Product.xp.myProperty,
  };
}
```

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/feaa08425d8c487e94d5acd35d0e2174?v=df24f11e
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4794d111b0cc44698cab0f064d123c0a?v=26b9f26d

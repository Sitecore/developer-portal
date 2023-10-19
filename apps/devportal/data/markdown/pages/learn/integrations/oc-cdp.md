---
title: 'Integrating Sitecore OrderCloud with Sitecore CDP'
description: 'Leverage Sitecore CDP with Sitecore OrderCloud to build your commerce experiences - including abandoned cart scenarios and commerce specific personalization.'
product: ['ordercloud', 'cdp']
area: ['integrations']
---

## Introduction

This document provides guidance on joining together Sitecore OrderCloud with Sitecore Customer Data Platform (CDP). It recommends options for how a developer can integrate these products in a future proof way, so that Sitecore’s customers can start the process of migrating to Sitecore’s Composable DXP solutions.

The integration will allow you to push visitor interaction data that is captured within OrderCloud (e.g. products added to cart, products purchased) to CDP. This enables CDP to combine these data with visitor interactions collected directly from browser activity, to assemble a complete view of the visitors’ historic and real-time journeys. This maximizes the power of CDP’s visitor segmentation, allowing you to build personalized & optimized experiences to be delivered on your web channel.

The products involved are highlighted in the diagram below. Use cases in this document focus on OrderCloud and CDP, which in turn maximizes the experiences you can build in Sitecore Personalize.

![Architecture diagram for integration Sitecore OrderCloud with Sitecore CDP][1]

## Overview of Use Cases

- Track visitors’ browsing interactions and commerce transactions.
- Identify and track abandoned cart scenarios.
- Marketer includes commerce data in the creation of rules in CDP.
- Marketer uses rules and commerce data to personalize displays of products, categories, and promotions on the storefront. Personalization can include hard coded IDs, list filters including extended properties and sort order.

## Data Responsibilities

- CDP’s main data responsibility is to store records of all customer interactions with front end experiences, including storefronts. This includes what pages they view and what actions they take for both logged in users and for anonymous guests. Anonymous guests are tracked via a [long-lasting cookie that stores a uuid](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/using-local-storage-and-cookies-for-data-capture.html) representing that browser. Additionally, the CDP stores marketer-configured rules that leverage this user data to segment users and personalize those same experiences.
- OrderCloud owns the commerce data needed to power a complete online storefront. It stores product catalogs, promotions, shopper profiles, carts, and placed orders. It often receives product data from an upstream customer system of record (like an ERP) and forwards completed orders back to a fulfillment system. Alternatively, it can be a system of record for products and orders.  
  Abandoned cart use case:
- CDP is the primary data owner. This is recommended because CDP already has a version of transaction data (described above), and it is a core capability in CDP to create a cart abandonment rule based on an elapsed period of inactivity. On the other hand, there is no native cart abandonment trigger within OrderCloud.
  Commerce data used in building segmentation rules in CDP:
- OrderCloud is the primary commerce data owner, e.g. catalogs, categories, products, variants, pricing, promotions. In practice the marketer configuring rules in CDP would reference commerce data, for example:
  - Configure the IDs of categories, products or variants that would be fetched when the segmentation rule is triggered.
  - Configure a query to the OrderCloud API to return resources that that meet the query criteria, when the segmentation rule is triggered.

## Prerequisites

- An OrderCloud sandbox account: https://www.ordercloud.io. Start with a base, empty organization; you can take advantage of [tutorials online](https://ordercloud.io/learn/getting-started/welcome-to-ordercloud) to populate your storefront with a basic catalog to start development.
- Deployed instance of Sitecore CDP.

## Glossary of Terms

| Term                    | Value                                                                                                                                                                   |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sitecore OrderCloud, OC | Sitecore’s API-first eCommerce engine driving highly customizable commerce experiences across multiple channels and markets (B2C, B2B, B2B2C).                          |
| Sitecore CDP            | Sitecore Customer Data Platform, based on Boxever. Collects and unifies visitor data across channels; segments data on visitor attributes, behaviors, and transactions. |
| Sitecore Personalize    | Sitecore’s personalization engine, also based on Boxever and dependent on CDP. Enables building personalized web experiences, and optimizing through A/B testing.       |

## Use Case #1: Track Visitors

### Key Concepts

Every visitor interaction with your Ecommerce site, from entering a specific search term to reading a specific article generates economically valuable data about the visitor’s interests. A Customer Data Platform like Sitecore CDP allows you to gather this information in a central place and ultimately unlock its value.

### Developer Configuration

User interactions on the storefront should be forwarded to CDP in real-time via a JS tracker in the browser. This approach allows gathering the most complete user data. Alternatively, a server-side integration that forwards events from OC to CDP via raw API can be built for events with OC Webhooks like add to cart and place order. However, this cannot capture page views or OC GET requests. For this reason, the JS tracker is the recommended approach.

Developers should follow this [guide](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/javascript-tagging-examples-for-web-pages.html) to install the JS Tracker. They will need a ClientKey which can be found in the CDP UI following these [instructions](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/authentication-for-the-sitecore-cdp-rest-apis.html).

Once it is installed, custom code will need to be added to hook into events. There are 6 events types that should definitely be included for commerce, in addition to many more that could be included.

| CDP Event Type | Corresponding OrderCloud Route                                                                                                              | CDP Forwarding Documentation                                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------- |
| IDENTITY       | [Login](https://ordercloud.io/knowledge-base/authentication) and [Register](https:/ordercloud.io/api-reference/me-and-my-stuff/me/register) | https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-an-identity-event-to-sitecore-cdp.html       |
| VIEW           | Page view – no specific OC route.                                                                                                           | https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-a-view-event-to-the-sitecore-cdp.html        |
| SEARCH         | [Product Search](https://ordercloud.io/knowledge-base/advanced-querying#searching)                                                          | https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-a-search-event-to-sitecore-cdp.html          |
| ADD            | [Create Line Item](https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/create)                                            | https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-an-add-event-to-sitecore-cdp.html            |
| CLEAR_CART     | [Delete All Line Items](https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/delete)                                       | https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/send-a-clear-cart-event-to-sitecore-cdp.html      |
| ORDER_CHECKOUT | [Submit Order](https://ordercloud.io/api-reference/orders-and-fulfillment/orders/submit)                                                    | https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-an-order-checkout-event-to-sitecore-cdp.html |

![Sequence diagram showing dataflow when tracking users][2]

In addition to these 6 critical events, developers may send [custom events](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-a-custom-event-to-sitecore-cdp.html) as well. Note the reserved event names section in the link for custom events.

One key question is - how developers should handle user identities across systems in the IDENTITY event? The “browser_id” field should always be the uuid generated by CDP and stored as a cookie. The “identifiers.id” should be a unique user ID from OrderCloud. For logged in users this is should be `“{user.Buyer.ID}-{user.ID}”` since userID is only unique within a Buyer organization. For visitors with anonymous OrderCloud tokens, we have fewer options. The only property that is unique in that scenario is the “ordered” property of the decoded jwt.

Here is example browser code.

```javascript
import { MeUser, Tokens } from 'ordercloud-javascript-sdk';
import * as jwtDecode from 'jwt-decode';

function sendIdentifyEvent(user: MeUser): void {
  var eventData = {
    channel: isBrowserMobile() ? 'MOBILE_WEB' : 'WEB',
    type: 'IDENTIFY',
    language: user.Locale?.Language || 'en-US',
    currency: user.Locale?.Currency || 'USD',
    page: getActiveUrl(),
    pos: this.appConfig.baseUrl,
    browser_id: Boxever.getID(),
    email: user.Email,
    firstname: user.FirstName,
    lastname: user.LastName,
    phone: user.Phone,
    identifiers: {
      provider: 'ordercloud',
      id: getUniqueVisitorID(),
    },
  };

  _boxeverq.push(function () {
    Boxever.eventCreate(eventData, function (data) {}, 'json');
  });
}

function getUniqueVisitorID(user: MeUser): string {
  var decodedToken = jwtDecode(Tokens.GetAccessToken());
  if (isVisitorAnonymous(decodedToken)) {
    return `anon-${decodedToken.orderid}`;
  } else {
    return `${this.user.Buyer.ID}-${this.user.ID}`;
  }
}

function isVisitorAnonymous(decodedToken): boolean {
  return decodedToken?.orderid !== null && decodedToken?.orderid !== undefined;
}
```

### Marketer Configuration

All the marketer needs to do is verify that the integration is successfully capturing user data in the CDP. This [guide](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/javascript-integration-verification-for-sitecore-cdp.html) explains how to do that.

## Use Case #2: Abandoned Carts

### Key Concepts

When users add an item to the cart but don’t buy it, your business has missed an opportunity to convert. Capture more sales with targeted, personalized emails to those users. Sitecore CDP ingests event data from your storefront and then lets you design your own logic for how to follow up with these potential customers.

### Developer Configuration

The developer work in section 6.2 to track users will enable this use case.

### Marketer Configuration

The marketer will need to create a “triggered experiment” in the Sitecore CDP UI to handle abandoned carts. [Triggered experiments](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/introduction-to-triggered-experiments.html) are emails, mobile notifications or text messages that are triggered by specific data event. See this guide for an [overview of the abandoned cart scenario](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/overview-of-cart-abandonment-in-sitecore-cdp.html).

## Use Case #3: Segmenting users

### Key Concepts

Know who your visitor is and automatically market to them accordingly. Segments could be based on a variety of factors including what categories of products visitors have shown interest in, how frequently they buy from you, how much they spend, where they are located, and even demographic data from 3rd party sources. All of this can inform how you market to them.

### Developer Configuration

The developer work in section 6.2 to track users will enable this use case.

### Marketer Configuration

Creating the right segments that are meaningful to your business is the key to success. Luckily, Sitecore CDP makes it easy to set up those segments and create rules that will automatically assign users to segments based on their data. This is called Batch Segmentation because it will update your segments once a day. Sitecore CDP has lots of guides to segmentation. [Start here](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/introducing-batch-segmentation.html).

## Use Case #4: Personalizing the Storefront

### Key Concepts

The tracking data in your CDP should be used to personalize your storefront and make it relevant and engaging to each visitor no matter who they are. Broadly, we can consider two types of personalization – personalized content and personalized commerce objects. By commerce objects, we typically mean records stored in a transactional system like OrderCloud – products, promotions, and categories. Sitecore CDP can be used to personalize content or commerce. We’ll focus on commerce here since this is the OrderCloud to CDP guide.

Here are some commerce personalization use cases

- Which products/promotions/categories should be highlighted on initial arrival to site?
- What should the default product sort option be?
- What should be sort order of categories be?
  In terms of implementation – the key is that personalization should be implemented by a developer once and then tools like [CDP Decision Models](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-decisioning-in-sitecore-personalize.html) let marketers update the behavior without deployments.

### Developer Configuration

After identifying which storefront behaviors should be personalized, the browser should request that data from CDP instead of OrderCloud. In response to an API call, CDP will execute a decision model, which will include a request to the OC API. Products, categories, and promotions are still owned by OrderCloud, by the CDP acts as a layer between OC and the browser, adding personalization.

The details of how to execute a decisioning model via an API request can be found [here](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/using-the-sitecore-cdp-flow-execution-rest-api.html).

![Sequence diagram showing dataflow when personalizing the storefront][3]

### Marketer Configuration

The marketer (possibly with a developers help) must create the logic of the decision model that determines what data to request from the OrderCloud API. See this guide to [building decision models](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-decisioning-in-sitecore-personalize.html). The key is that OrderCloud should be set up in CDP as a “data system” – an external system that contains dynamic data that you can use in a decision model. See this guide to [external data systems](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/managing-data-systems-in-sitecore-cdp.html). The OrderCloud token should be passed from the browser, to CDP, and on to OC to authenticate the request. Once this is in place, the querying functionality of OrderCloud’s list endpoints is available to be used.

As a simple example, the marketer could determine a handful of specific products that they think would appeal to each segment. The product IDs could be stored in a table and the logic of the model would make a request to OC like so

`GET https://api.ordercloud.io/v1/me/products?ID=product1|product2|product3`

Or, segments could be matched with a category ID that is relevant.

`GET https://api.ordercloud.io/v1/me/products?categoryID=mens-watches `

These both have the downside that IDs – which can change - must be hard coded. Alternatively, any combination of product field could be filtered on, including custom fields defined in [extended properties](https://ordercloud.io/knowledge-base/extended-properties).

`GET https://api.ordercloud.io/v1/me/promotions?xp.targetAudience=repeatCustomer`

Sorting and page size can also be controlled with query params. See a guide to [query params in OrderCloud](https://ordercloud.io/knowledge-base/advanced-querying).

[1]: https://mss-p-006-delivery.stylelabs.cloud/api/public/content/839902f10eaf487f9ba5410394ea8ba0?v=7d9f37b2
[2]: https://mss-p-006-delivery.stylelabs.cloud/api/public/content/78884ced3aff42ad848eb312954ae7ce?v=28f5e296
[3]: https://mss-p-006-delivery.stylelabs.cloud/api/public/content/0a6767726bac4a90ba8762e9b393e4d8?v=33eb7bee

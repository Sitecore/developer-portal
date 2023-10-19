---
product: ['discover']
title: 'Sitecore Discover Introduction'
description: 'Sitecore Discover provides intelligent product search powered by AI, but what does it include? And how can you get started developing with it today?'
promoAfter: ['learning-essentials']
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/997f7b64b0f4466687d7b907cdf06308?v=98c891fa'
---

## What is Sitecore Discover?

Sitecore discover is a product discovery optimisation engine. It enables intelligent product search powered by AI and can enhance experiences anywhere merchandising information is displayed. It is a headless platform that delivers omnichannel personalisation across mobile, web, email, and in-store. It is designed to optimise a site’s SEO configuration to maximise product discovery.

It is a SaaS product that empowers marketers and merchandisers by providing rich insights and analytics to consistently improve revenue per visit.

## Sitecore Discover features

Once Sitecore Discover has been implemented, it provides a series of features to marketers and merchandisers including:

- Detailed control over product discoverability & visibility including **boosting**, **burying** & **timed product availability**.
- Business-to-business (B2B) support through the ability to change **product attributes** like availability & price based on the **buyers’s context**.
- **By online, pickup in-store** (BOPIS) functionality allows control of products and product attributes at a store level and ensures users’ in-store purchases are synced with their online profile.
- **Fitment** ensures customers with complex **product line relationships** can model these, providing users with search results matching their product requirements. A good example of this is a Parts Retailer ensuring results returned are **constrained** to ensure compatibility with a specific model.
- Discover enables **multi-locale** functionality, giving customers the ability to localise their product catalogue data for all locales they operate in. Allowing for separate **region-specific** catalogues to be managed from a single Discover instance.

## Sitecore Discover integration options

You can integrate Sitecore Discover on top of any eCommerce experience regardless of which platform is currently powering it. When you integrate Discover over the top it will take over the catalogue-based functionality and enrich it with the powerful features that Discover offers.

When integrating Sitecore Discover there are three different approaches you can take:

|                        | Developer Effort | Feature availability |
| :--------------------- | :--------------- | :------------------- |
| Direct API integration | High             | Full feature set     |
| JavaScript SDK         | Medium           | Full feature set     |
| Hosted Pages           | Low              | Limited feature set  |

### Direct API integration

The final integration method is the most developer-intensive approach. The Direct API Integration approach requires a _high_ level of developer effort, as the developer is now responsible for building all the components required for a site and directly calling the Sitecore Discover API to integrate the required functionality into them.

There are a series of endpoints that the developer will need to interact with to build out their experiences, these including things like Authentication and Authorization, Search and Recommendations, Event processing, and Incremental Feed ingestion.

Once a site has been integrated using this method the marketers and merchandisers have access to the full feature set that Sitecore Discover offers. For this reason, this is the recommended integration approach for sites not built with React, or for building non-web-based experiences for example mobile applications.

You can read more about the different API endpoints on our documentation site:

- [Using the Discover REST APIs](https://doc.sitecore.com/discover/en/developers/discover-developer-guide/using-discover-rest-apis.html)
- [Integrate using the Search and Recommendation API](https://doc.sitecore.com/discover/en/developers/discover-developer-guide/integrate-using-the-search-and-recommendation-api.html)
- [Integrate using the Events API](https://doc.sitecore.com/discover/en/developers/discover-developer-guide/integrate-using-the-events-api.html)

### JavaScript SDK

The JavaScript SDK is a library of React components designed to enable developers to quickly integrate a new or existing React application with Sitecore Discover. It provides components that enable the developer to:

- Communicate with Sitecore Discover API
- Embed personalised product widgets on any page they are required
- Track user experience by reporting events

Using this integration method requires a _medium_ level of development effort, as the developer is responsible for integrating these components, however, they aren’t required to build the components themselves. Once a site has been integrated using this method, the marketers and merchandisers have access to the full feature set that Sitecore Discover offers.

The SDK is a new release from the Discover Product Team and is the recommended integration approach for any sites that are built using React.

You can read more about how to setup this type of integration on our [documentation site](https://doc.sitecore.com/discover/en/developers/discover-developer-guide/integrate-using-sitecore-discover-sdks.html).

### Hosted Pages

When choosing to use the Hosted Pages method of integration, there is a _low_ amount of development effort required. With this approach, the product listing pages (PLP) and product detail pages (PDP) are hosted by Discover. This is typically handled either via a Content Delivery Network (CDN) redirect, or a Reverse Proxy that is configured by the customer to direct those URLs to the Discover servers.

When using this approach Merchandisers can build pages directly in the Customer Engagement Console (CEC) and publish them without developer involvement. They can also auto-generate SEO-tailored landing pages, including matching meta tags, to boost search listing.

Once this has been set up Discover will take over the delivery of those site areas. However, choosing this approach does limit what control the marketer and merchandiser have over the UX of those pages. It also limits the different onsite experiences that can be delivered by Discover.

You can read more about how to setup this type of integration on our [documentation site](https://doc.sitecore.com/discover/en/developers/discover-developer-guide/integrate-pages-hosted-with-discover.html).

## Customer Engagement Console (CEC)

While the CEC is generally used by merchandisers to build out their experiences, it will also be of use to Developers as well to make use of the developer resources contained there. This is where you will find your Customer Key, beacon information and data on the various API’s that you’ll be interacting with. It also includes a series of developer-focused tools allowing you to test direct calls to the API.

### API Access

The API Access panel will give you all the details you need to manage how, and where your application will interact with the Discover APIs. From here you can:

- Get details about the beacon you need to drop onto your site
- Find details of the different API endpoints mentioned above
- Manage the API keys being used by your applications.

![API Access panel Screenshot](https://sitecorecontenthub.stylelabs.cloud/api/public/content/abae97d03eeb4c7f992a5fdf3cf1e9ec?v=fd0add9b)

### API Explorer

The API Explorer Panel gives you a UI to be able to simulate calls to the API. It will let you build out a JSON object containing the request details, including details of the experience you want to simulate and the user you want to simulate it for. You can then send your JSON object to the API and get a JSON object in return showing what data would have been used to build the experience delivered to the user.

![API Explorer panel Screenshot](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8b171fc8dcda4cb89fb120656946c601?v=37337f19)

### Event Builder

Much in the same way as the API Explorer above, the Event Builder allows you to simulate requests to the Event API. You can choose the page the experience would be running on, the widget you want to test, and the user initiating amongst other values. You can then use this panel to simulate events being sent back to Discover, for example tracking when a user clicks on a displayed product.

![Event Builder panel Screenshot](https://sitecorecontenthub.stylelabs.cloud/api/public/content/195dae1de91e4c16b2d07d102860095f?v=07a6b6d3)

### Event Monitor & AI Monitor

The Event Monitor and AI Monitor panels allow you to trace what data is being sent back into Discover for a specific user. This allows you to enter your UUID into the panel, then as you browse through the site all of the data being served to deliver your experiences will be displayed on this page, allowing you to debug what data Discover is using to power your product listings.

![Event Monitor panel Screenshot](https://sitecorecontenthub.stylelabs.cloud/api/public/content/b69de6b4961c4a918bbeea88cb4d3caf?v=da444986)

---
title: 'Integrating Sitecore XM with Sitecore SmartHub CDP'
description: 'Scale management and delivery of media and static assets'
product: ['xm', 'cdp']
area: ['integrations']
---

## Introduction

The purpose of this document is to analyze the integration blueprint for joining together Sitecore Experience Manager (XM) with Sitecore SmartHub CDP (Customer Data Platform).

This will detail how to provide the customers with a standard way to integrate their Sitecore XM instance with Sitecore SmartHub CDP, allowing them to quickly integrate these products in a future proof way and getting them to start on the process of migrating to the Composable DXP.

The integration will allow you to push interaction data from a website built using Sitecore XM into Sitecore SmartHub CDP. After this process, you can use Sitecore SmartHub CDP to then build personalized & optimized experiences to be delivered on your web channel. Note that Sitecore SmartHub CDP is a combination of two products, Sitecore Personalize and Sitecore CDP. This document will cover how to integrate Sitecore XM with both of those products.

You can see the products involved in said integration highlighted below:

![blueprint_xm_cdp_product_map][1]

## Overview of Use Cases

- Tracking visitors and their interactions on the web channel.
- Identify returning visitors and merge current session data with historical session data.
- Customising, Retrieving & Updating user information stored in Sitecore SmartHub CDP.
- Track goals & conversions on the web channel.
- Ability to personalize web channel.
- Ability to optimize web channel through Experiments.

## Data Responsibilities

Sitecore XM is a Web Content Management System while Sitecore SmartHub CDP is a Customer Data Platform. Sitecore XM is used to author the content used on your web channel, and Sitecore SmartHub CDP is used to track your users and their interaction with your channels, as well as personalize and optimize their customer experience.

While in the process of integrating these two products you should ensure that this separation of concerns remains. If you find yourself creating content in Sitecore SmartHub CDP or attempting to work with user or interaction data within Sitecore XM, you should check whether there is a better approach that maintains the original responsibilities of the two systems.

## Prerequisites

- Website built using Sitecore XM.
- Deployed instance of Sitecore SmartHub CDP.

## Glossary of Terms

| Term                            | Value                           |
| :------------------------------ | :------------------------------ |
| Sitecore CDP, CDP, SmartHub CDP | Sitecore SmartHub CDP           |
| Sitecore XM, XM                 | Sitecore Experience Manager     |
| DOM                             | Document Object Model           |
| GTM                             | Google Tag Manager              |
| SXA                             | Sitecore Experience Accelerator |

## Use Case #1: Tracking visitors and their interactions on the web channel

A CDP is an omni-channel customer data platform, tracking customer information across multiple channels. By doing so, we want to ensure that visitors interactions on our web channel are stored in the CDP.

### Key Concepts

We need to ensure that the actions performed by a user when interacting with the web channel are recorded correctly in the CDP, making sure that each session’s interactions are grouped accordingly.

### Developer Configuration

Developer configuration can be achieved in a few different ways. The first option is to integrate on the client side either via a direct JavaScript integration, or through Google Tag Manager. Alternatively, you have a third option which is to integrate on the server side.
There are pros and cons to each of these approaches, so you will need to decide which method best suits your requirements.

|                                     | Pros                                                  | Cons                                                                      |
| :---------------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------ |
| **Direct client-side integration**  | Easy installation                                     | Requires extra JS tag in markup, Can be blocked by AdBlockers             |
| **Client-side integration via GTM** | Easy installation, No need to add extra tag to markup | Implementation reliant on 3d party (Google), Can be blocked by AdBlockers |
| **Server-side integration**         | Can’t be blocked by AdBlockers                        | Increases server rendering time. More complex installation                |

#### Method A – Direct JavaScript Integration

For those customers wanting to directly embed the CDP tracking tag into their web channel built using Sitecore XM, they can follow the Tagging Examples documentation to add JS tracking tag to your website: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/javascript-tagging-examples-for-web-pages.html

The sequence diagram below shows data flow between the different systems to facilitate interaction data storage in Sitecore SmartHub CDP.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore SmartHub CDP when directly embedding the JS tracker in the page header.][2]

#### Method B – Google Tag Manager Integration

For those customers wanting to directly embed the CDP tracking tag into their web channel built using Sitecore XM, they can follow the Tagging Examples documentation to add JS tracking tag to your website by using Google Tag Manager: https://sitecore.cdpknowledgehub.com/docs/how-to-send-data-to-boxever-via-google-tag-manager

The sequence diagram below shows data flow between the different systems to facilitate interaction data storage in Sitecore SmartHub CDP.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore SmartHub CDP when directly embedding the JS tracker via Google Tag Manager.][3]

#### Method C – Server-side Integration

For those customers wanting to integrate with Sitecore SmartHub CDP from the server-side, the best approach is to make use of the Stream API to send those requests. To start that process you will need to request and Browser ID and then ensure you send that ID with all future requests to ensure the session details are recorded correctly. This is the same approach that is used when integrating a Mobile App to the CDP, and is documented here: https://sitecore.cdpknowledgehub.com/docs/mobile-app-tagging-overview.

The sequence diagram below shows data flow between the different systems to facilitate the request of the Browser ID and subsequent event messages.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore SmartHub CDP when integrating the tracker server-side.][4]

### Marketer Usage

Once the tracking beacon is included on your web channel, it will start to send usage data back to Sitecore SmartHub CDP. As a marketer there is no further configuration required, since, as your users interact with your web channel, you will automatically see the data making its way into Sitecore SmartHub CDP.

## Use Case #2: Identify returning visitors and merge current session data with historical session data

A CDP allows for experiences that leverage it to Identify the users interacting with them. This enables the user’s session details to be tied back to a known account in the CDP and facilitates sessions on different devices to be tied back to the same user, giving a true account of that user’s activities across all channels.

### Key Concepts

When a user enters a piece of identifying information on the web channel, for instance, logging in or completing a form with their details, we need to use the Identification functionality in the CDP to assign that data to the corresponding user.

The CDP identification process works on the concept of events, meaning that, to identify a user, the web channel needs to log an Event with the “IDENTITY” type.

### Developer Configuration

Developer configuration can be achieved in a few different ways. The first option is to implement this event call into your site using either a direct JavaScript integration, or through embedding the JS code using Google Tag Manager. The other option is to perform this action on the server-side, making the same Event request from there instead.

There are pros and cons to each of these approaches, so you will need to decide which method best suits your requirements.

|                              | Pros                               | Cons                                                                      |
| :--------------------------- | :--------------------------------- | :------------------------------------------------------------------------ |
| **Direct client-side call**  |                                    | Requires extra JS tag in markup, Can be blocked by AdBlockers             |
| **Client-side call via GTM** | No need to add extra tag to markup | Implementation reliant on 3d party (Google), Can be blocked by AdBlockers |
| **Server-side call**         | Can’t be blocked by AdBlockers     | Increases server rendering time.                                          |

#### Method A – Method A – Direct JavaScript Integration.

For those customers wanting to directly embed JavaScript event call into their web channel built using Sitecore XM they will have to send the Event request built to match the following definition: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/javascript-tagging-examples-for-web-pages.html

The sequence diagram below shows the data flow between the different systems to facilitate the IDENTITY Event request when directly embedded into the JavaScript for the web channel.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore SmartHub CDP when identifying users from a tracker directly embedded in the pages JS.][5]

#### Method B – Google Tag Manager Integration

For those customers wanting to directly embed the CDP tracking tag into their web channel built using Sitecore XM, they can follow the Tagging Examples documentation to add JS tracking tag to your website by using Google Tag Manager: [How to send data to Sitecore SmartHub CDP via Google Tag Manager](https://sitecore.cdpknowledgehub.com/docs/how-to-send-data-to-boxever-via-google-tag-manager)

The sequence diagram below shows data flow between the different systems to facilitate the IDENTITY Event request when Google Tag Manager is used to embed the JavaScript for the web channel.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when identifying users from a tracker directly embedded via Google Tag Manager.][6]

#### Method C – Server-side Integration

For those customers wanting to integrate with Sitecore SmartHub CDP from the server-side, the best approach is to make use of the Stream API to send those requests. To start that process you will need to request and Browser ID and then ensure you send that ID with all future requests to ensure the session details are recorded correctly. This is the same approach that is used when integrating a Mobile App to the CDP, and is documented here: [Mobile App Tagging Overview](https://sitecore.cdpknowledgehub.com/docs/mobile-app-tagging-overview)

The sequence diagram below shows data flow between the different systems to facilitate the request of the Browser ID and subsequent event messages.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore SmartHub CDP when identifying users from a server-side request.][7]

### Marketer Usage

As your users interact with your web channel, they will at first appear as anonymous visitors. After your development team have implemented one of the methods described above, your users will change from visitors to customers. There is no further confirmation required by the marketer.

## Use Case #3: Customising, Retrieving & Updating user information stored in Sitecore SmartHub CDP

A CDP is used to store information about your customers. Each business has a different domain model, though, thus requiring a different set of customer details to be stored. For this reason, you will need to tailor the customer data you’re storing to match your business requirements.

### Key Concepts

As your users interact with your web channel built using Sitecore XM, you will need to ensure that the data you’re storing match your requirements. To do this, you will most likely have to customize your customer model to include fields used to store the data specific to your industry. In Sitecore SmartHub CDP this customization is achieved by using Data Extensions. You can read more about the Data Extension Model here: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/using-the-create-guest-data-extension-function-in-sitecore-cdp-rest-api.html

### Developer Configuration

The developer uses the Data Extension model to update, store and retrieve guest data that includes custom fields specific to your business. They are stored in the format of a series of key-value pairs, allowing you to store any data you need. The process of interacting with Data Extension models is performed via a series of different API calls, you can see details regarding these calls in the links below:

- [Create Guest Data Extension](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/using-the-create-guest-data-extension-function-in-sitecore-cdp-rest-api.html)
- [Retrieve Guest Data Extension](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/using-the-retrieve-guest-data-extension-function-in-sitecore-cdp-rest-api.html)
- [Update Guest Data Extension](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/using-the-update-guest-data-extension-function-in-sitecore-cdp-rest-api.html)
- [Delete Guest Data Extension](https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/using-the-delete-guest-data-extension-function-in-sitecore-cdp-rest-api.html)

Note that the Create, Update & Delete calls cannot be made directly from the front-end system (e.g. the browser) due to the need for them to be authenticated. These calls must be sent via XM to ensure that the correct authentication headers are added to the requests.

There are many scenarios where you would want to interact with Guest Data from the web channel, but some of the most common would be:

- Registering a new user
- Retrieving a user’s Details
- Updating a user’s details

In the Sequence diagram below you can see how the data would flow between XM and CDP in each of the scenarios.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore SmartHub CDP when identifying users from a server-side request.][8]

## Use Case #4: Track goals & conversions on the web channel

A CDP allows for experiences that leverage it to register custom goals and actions as users interact with them. This gives the ability to track specific metrics that are important to your business, while also allowing for reporting regarding conversion and for the ability to create web and full stack experiences designed to increase the level of conversion over time.

### Key Concepts

A marketing user should be able to define custom goals that can later be triggered as users perform actions on the web channel, like triggering a goal when users interact with a certain piece of content or complete a form. The developer should be able to integrate these different events into the web channel, enabling the marketer to track conversions over time.

### Developer Configuration

When integrating Sitecore XM with Sitecore SmartHub CDP you will need to send custom events into the CDP to track user engagement. You can read the documentation covering the contents of the message required here: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-an-event-as-an-http-get-request.html

You can achieve this by sending the event either from the client-side or the server-side. You can choose your preferred option depending on your requirements.

|                       | Pros                                                    | Cons                             |
| :-------------------- | :------------------------------------------------------ | :------------------------------- |
| **Client-side event** | Happens asynchronously so won’t affect page load speed. | Can be blocked by AdBlockers     |
| **Server-side event** | Can’t be blocked by AdBlockers                          | Increases server rendering time. |

#### Client-side events

For customers who want to directly embed the JavaScript event call into their web channel built using Sitecore XM, they will have to send the Event request built to match the following definition: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-an-event-as-an-http-get-request.html

This sequence diagram shows how the different systems and the user’s browser will interact when events are sent in this way.

![Sequence diagram showing passing an event message from Sitecore XM to Sitecore SmartHub CDP from the client-side.][9]

#### Server-side events

For those customers wanting to handle event messages on their web channel built using Sitecore XM by sending them from the server-side, they will have to craft the event request to match the following definition: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-an-event-as-an-http-get-request.html

This sequence diagram shows how the different systems and the user’s browser will interact when events messages are sent in this way.

![Sequence diagram showing passing an event message from Sitecore XM to Sitecore SmartHub CDP from the server-side.][10]

### Marketer Usage

You will need to work with your developer to define which events are to be sent from the web channel, depending on the actions that your users perform. There are a series of events you can choose from in order to help map your users’ actions to your business processes. You can see a list of the supported events here: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/send-a-custom-event-to-sitecore-cdp.html.

## Use Case #5: Ability to personalize web channel

Sitecore SmartHub CDP allows you to personalize experiences, ensuring that each customer and visitor has the correct content displayed and at the appropriate time. Integrating Sitecore XM with Sitecore SmartHub CDP allows you to deliver personalized experiences on your web channel.

### Key Concepts

We want to change the content being displayed to visitors to our web channel to ensure they are receiving the most relevant content to them, based on their current and historical browsing behavior combined with business context.

### Developer Configuration

Developer configuration can be achieved in a couple of different ways. The first option is to build out the experience on the client-side using “Web Experiences” while the second option is to integrate the experience on the server-side using “Full Stack Experiences” created in the CDP.

There are pros and cons to each the options as demonstrated in the table below. You just need to choose which method is the best fit for your requirements.

|                                       | Pros                                                  | Cons                                                             |
| :------------------------------------ | :---------------------------------------------------- | :--------------------------------------------------------------- |
| **Web Experience**                    | Loads asynchronously so won’t affect page load speed. | Can be blocked by AdBlockers                                     |
| **Full Stack Experiences in the CDP** | Can’t be blocked by AdBlockers.                       | Processing happens server-side which can affect page load speed. |

#### Personalizing the web channel using “Web Experiences”.

When personalizing the web channel by using Web Experiences, the DOM is changed via JavaScript after being rendered. You need to be careful when using this method to ensure that the DOM changes occur either “below the fold” or are masked with other UX techniques like transparent overlays or loading images.

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using “Web Experiences”.

![Sequence diagram showing the DOM being personalized with Web Experiences.][11]

#### Personalizing the web channel using “Full Stack Experiences” in Sitecore SmartHub CDP.

When personalizing the web channel by using “Full Stack Experiences”, the DOM is changed on the server and is sent to the client with the personalization changes already applied. This removes the need to mask the DOM changes from the user as they have already been processed on the server and full built HTML is returned to the client. This is achieved this by using the Stream API provided by Sitecore SmartHub CDP, You can get an introduction on how to interact with the Stream API on our documentation site here: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/overview-of-sitecore-cdp-stream-apis.html

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using “Full Stack Experiences”.

![Sequence diagram showing the DOM being personalized with Web Experiences.][12]

### Marketer Usage

Once your experience has been built out by your developer, you can then begin to apply it to the pages on your website. The developer will have defined the fields of the template you need to populate for each instance of the experience you wish to run.

## Use Case #6: Ability to optimize web channel through Experiments

Sitecore SmartHub CDP allows you to optimize experiences, giving you the ability to run A/B & multivariant experiments to help improvement conversion on your channels. Integrating Sitecore XM with Sitecore SmartHub CDP gives you the ability to deliver and run these tests on your web channel.

### Key Concepts

Sitecore SmartHub CDP is used to create and run your tests, allowing you to provide a different experience to different groups of your end users, track which version drove the highest level of conversion and then make that version the default one for all customers.

### Developer Configuration

There are two methods used to create experiments: you can either create a “Web experiment” where the experiment is powered by JavaScript on the client, or a “Full stack experiment” where this is completed on the server and the HTML returned to the client already has the experiment baked in.

There are pros and cons to each of these approaches, so you will need to decide which method best suits your requirements.

|                                       | Pros                                                | Cons                                                  |
| :------------------------------------ | :-------------------------------------------------- | :---------------------------------------------------- |
| **Web Experience**                    | Runs asynchronously so won’t affect page load time. | Can be blocked by AdBlockers                          |
| **Full Stack Experiences in the CDP** | Can’t be blocked by AdBlockers.                     | Is executed server-side so can affect page load time. |

#### Creating Web Experiments

When personalizing the web channel by using Web Experiments, the DOM is changed via JavaScript after being rendered. You need to be careful when using this method so as to ensure that the DOM changes occur either “below the fold” or are masked with other UX techniques like transparent overlays or loading images. You can get an introduction on how to implement Web Experiments by following the guide here: https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-web-experiments-in-sitecore-personalize.html

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using Web Experiments.

![Sequence diagram showing how the Sitecore XM & Sitecore SmartHub CDP interact when creating Web Experiments.][13]

#### Creating Full Stack Experiments

When personalizing the web channel by using Full Stack Experiments, the DOM is changed server side before being served to the browser. This means you no longer need to be concerned about experiments occurring “below the fold”. You can get an introduction on how to implement Web Experiments by following the guide here: https://doc.sitecore.com/cdp/en/users/sitecore-cdp/create-an-interactive-experiment.html

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using Full Stack Experiments.

![Sequence diagram showing how the Sitecore XM & Sitecore SmartHub CDP interact when creating Full Stack Experiments.][14]

### Marketer Usage

As a marketer you can apply the different types of Experiments to the pages in your web channel. Experiments are closely linked to Experiences, as Experiments are effectively an A/B Test between two Experiences. You can read about how you can apply the different types of experiments as a marketer here: https://doc.sitecore.com/cdp/en/users/sitecore-cdp/running-experiments-in-sitecore-cdp.html

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/1a7ace859dea4deaa27e4546c9b812cc?v=ffce0578
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/27c06a3a3ffd494b9d8100adb8a88a28?v=4a196839
[3]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/9969b8df76da45828f4bf4e84f9580c8?v=043d8a40
[4]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/0ac88cd472974986a56cd8d12c5f5b0c?v=2b968cdc
[5]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4ed686b087914e5392d80d4ca29f1a51?v=9b1c47a9
[6]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/ad031ffafb884a37b2151267e6702821?v=24266e3d
[7]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/61ec52a074a046d99a03517de5c27fd7?v=fab06e2d
[8]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/51bfb19925e546679b7c1d9d532cf6d3?v=e2504dc7
[9]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/603516f3dacd4422b7383082199511db?v=38923efa
[10]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/c098d2031ab74549bacc03286eb842ac?v=346436bb
[11]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4b17c298a1d3477daf3ea6291dc66b8f?v=d6fe3e46
[12]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4a5e9b213c2f4fd1b6ec50c3f2004408?v=a8792598
[13]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/ec92f7b8b139456aa74409b8c6fc69d7?v=e99ed3f6
[14]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/eed79a3c9c574a71b78576d38db81ab5?v=600b95f3

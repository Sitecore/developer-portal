---
product: ['xm', 'cdp']
area: ['integrations']
---

## Introduction

The purpose of this document is to analyze the integration blueprint for joining together Sitecore Experience Manager (XM) with Sitecore Customer Data Platform (CDP).

This will detail how to provide the customers with a standard way to integrate their Sitecore XM instance with Sitecore CDP, allowing them to quickly integrate these products in a future proof way and getting them to start on the process of migrating to the Composable DXP.

The integration will allow you to push interaction data from a website built using Sitecore XM into Sitecore CDP. After this process, you can use Sitecore CDP to then build personalized & optimized experiences to be delivered on your web channel.

You can see the products involved in said integration highlighted below:

![blueprint_xm_cdp_product_map][1]

## Overview of Use Cases

- Tracking visitors and their interactions on the web channel.
- Identify returning visitors and merge current session data with historical session data.
- Customising, Retrieving & Updating user information stored in Sitecore CDP.
- Track goals & conversions on the web channel.
- Ability to personalize web channel.
- Ability to optimize web channel through Experiments.

## Data Responsibilities

Sitecore XM is a Web Content Management System while Sitecore CDP is a Customer Data Platform. Sitecore XM is used to author the content used on your web channel, and Sitecore CDP is used to track your users and their interaction with your channels, as well as personalize and optimize their customer experience.

While in the process of integrating these two products you should ensure that this separation of concerns remains. If you find yourself creating content in Sitecore CDP or attempting to work with user or interaction data within Sitecore XM, you should check whether there is a better approach that maintains the original responsibilities of the two systems.

## Prerequisites

- Website built using Sitecore XM.
- Deployed instance of Sitecore CDP.

## Glossary of Terms

| Term              | Value                           |
| :---------------- | :------------------------------ |
| Sitecore CDP, CDP | Sitecore Customer Data Platform |
| Sitecore XM, XM   | Sitecore Experience Manager     |
| DOM               | Document Object Model           |
| GTM               | Google Tag Manager              |
| SXA               | Sitecore Experience Accelerator |

## Use Cases
1. ### [Tracking visitors and their interactions on the web channel](/learn/integrations/xm-cdp/use-case-1-tracking)
   A CDP is an omni-channel customer data platform, tracking customer information across multiple channels. By doing so, we want to ensure that visitors interactions on our web channel are stored in the CDP.
2. ### [Identify returning visitors and merge current session data with historical session data](/learn/integrations/xm-cdp/use-case-2-identify)
   A CDP allows for experiences that leverage it to Identify the users interacting with them. This enables the user’s session details to be tied back to a known account in the CDP and facilitates sessions on different devices to be tied back to the same user, giving a true account of that user’s activities across all channels.
3. ### [Customising, Retrieving & Updating user information stored in Sitecore CDP](/learn/integrations/xm-cdp/use-case-3-tailored-stored)
   A CDP is used to store information about your customers. Each business has a different domain model, though, thus requiring a different set of customer details to be stored. For this reason, you will need to tailor the customer data you’re storing to match your business requirements.
4. ### [Track goals & conversions on the web channel](/learn/integrations/xm-cdp/use-case-4-goals-conversions)
   A CDP allows for experiences that leverage it to register custom goals and actions as users interact with them. This gives the ability to track specific metrics that are important to your business, while also allowing for reporting regarding conversion and for the ability to create web and full stack experiences designed to increase the level of conversion over time.
5. ### [Ability to personalize web channel](/learn/integrations/xm-cdp/use-case-5-personalize)
   Sitecore CDP allows you to personalize experiences, ensuring that each customer and visitor has the correct content displayed and at the appropriate time. Integrating Sitecore XM with Sitecore CDP allows you to deliver personalized experiences on your web channel.
6. ### [Ability to optimize web channel through Experiments](/learn/integrations/xm-cdp/use-case-6-experiments)
   Sitecore CDP allows you to optimize experiences, giving you the ability to run A/B & multivariant experiments to help improvement conversion on your channels. Integrating Sitecore XM with Sitecore CDP gives you the ability to deliver and run these tests on your web channel.

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/1a7ace859dea4deaa27e4546c9b812cc?v=ffce0578
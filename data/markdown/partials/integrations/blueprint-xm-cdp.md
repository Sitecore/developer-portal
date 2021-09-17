---
product: ['xm', 'cdp']
area: ['integrations']
---

## 1. Introduction

The purpose of this document is to analyze the integration blueprint for joining together Sitecore Experience Manager (XM) with Sitecore Customer Data Platform (CDP).

This will detail how to provide the customers with a standard way to integrate their Sitecore XM instance with Sitecore CDP, allowing them to quickly integrate these products in a future proof way and getting them to start on the process of migrating to the Composable DXP.

The integration will allow you to push interaction data from a website built using Sitecore XM into Sitecore CDP. After this process, you can use Sitecore CDP to then build personalized & optimized experiences to be delivered on your web channel.

You can see the products involved in said integration highlighted below:

![blueprint_xm_cdp_product_map][1]

## 2 Overview of Use Cases

- Tracking visitors and their interactions on the web channel.
- Identify returning visitors and merge current session data with historical session data.
- Customising, Retrieving & Updating user information stored in Sitecore CDP.
- Track goals & conversions on the web channel.
- Ability to personalize web channel.
- Ability to optimize web channel through Experiments.

## 3 Data Responsibilities

Sitecore XM is a Web Content Management System while Sitecore CDP is a Customer Data Platform. Sitecore XM is used to author the content used on your web channel, and Sitecore CDP is used to track your users and their interaction with your channels, as well as personalize and optimize their customer experience.

While in the process of integrating these two products you should ensure that this separation of concerns remains. If you find yourself creating content in Sitecore CDP or attempting to work with user or interaction data within Sitecore XM, you should check whether there is a better approach that maintains the original responsibilities of the two systems.

## 4 Prerequisites

- Website built using Sitecore XM.
- Deployed instance of Sitecore CDP.

## 5 Glossary of Terms

| Term              | Value                           |
| :---------------- | :------------------------------ |
| Sitecore CDP, CDP | Sitecore Customer Data Platform |
| Sitecore XM, XM   | Sitecore Experience Manager     |
| DOM               | Document Object Model           |
| GTM               | Google Tag Manager              |
| SXA               | Sitecore Experience Accelerator |

## 6 Use Cases

### 6.1 Tracking visitors and their interactions on the web channel

A CDP is an omni-channel customer data platform, tracking customer information across multiple channels. By doing so, we want to ensure that visitors interactions on our web channel are stored in the CDP.

#### 6.1.1 Key Concepts

We need to ensure that the actions performed by a user when interacting with the web channel are recorded correctly in the CDP, making sure that each session’s interactions are grouped accordingly.

#### 6.1.2 Developer Configuration

Developer configuration can be achieved in a few different ways. The first option is to integrate on the client side either via a direct JavaScript integration, or through Google Tag Manager. Alternatively, you have a third option which is to integrate on the server side.
There are pros and cons to each of these approaches, so you will need to decide which method best suits your requirements.

[1]: /images/integrations/blueprint_xm_cdp_product_map.png

---
title: 'Integrating Sitecore Send with Sitecore Experience Manager'
description: 'Leverage Sitecore Send features like Subscription Forms in your web channel built using Sitecore Experience Manager'
product: ['send', 'xm']
area: ['integrations']
---

## Introduction

The purpose of this document is to analyze the integration blueprint for joining together Sitecore Send with Sitecore Experience Manager.

This will detail how to provide the customers with a standard way to integrate their Sitecore Send instance with Sitecore Experience Manager, allowing them to quickly integrate these products in a future proof way and getting them to start on the process of migrating to the Composable DXP.

The integration will allow you to leverage the functionality of Sitecore Send in on your web channel powered by Sitecore Experience Manager. This includes showing how to include the Sitecore Send tracker in your web channel, and how to embed forms generated in Sitecore Send.

You can see the products involved in said integration highlighted below:

![Architecture diagram highlight Sitecore Send & Sitecore Experience Manager][1]

## Overview of Use Cases

- How to embed the Sitecore Send tracker (Mootrack) in a Sitecore XM site.
- How to identify visitors with Sitecore Send
- How to embed a Sitecore Send Subscription Form in a Sitecore XM site.

## Data Responsibilities

Sitecore Send is an Email Marketing and Marketing Automation Platform while Sitecore XM is a Web Content Management System. Sitecore XM is used to author the content used on your web channel, and this can be enriched by using the email and marketing functionality provided by Sitecore Send.

While in the process of integrating these two products you should ensure that this separation of concerns remains. Creating and managing the content used on your web channel should be performed using Sitecore Experience Manager, while the crafting and delivery of email campaigns & subscription forms should be performed within Sitecore Send.

## Prerequisites

- Active Sitecore Send account.
- Website built using Sitecore XM.

## Glossary of Terms

| Term                | Value                            |
| :------------------ | :------------------------------- |
| XM, Sitecore XM     | Sitecore Experience Manager.     |
| DXP, Composable DXP | Digital Experience Platform.     |
| SXA                 | Sitecore Experience Accelerator. |
| JSS                 | JavaScript Services.             |

## Use Case #1: How to embed the Sitecore Send tracker (Mootrack) in a Sitecore XM site.

In order to leverage the functionality from Sitecore Send in your web channel powered by Sitecore XM, you will need to ensure that the Sitecore Send tracker, called Mootrack, is installed in your site. The tracker comes in the form of a JavaScript asset that is pulled in from Sitecore Send on each page request made to the site.

### Key Concepts

Embedding the Sitecore Send tracker into a website build using Sitecore XM is a task typically performed by a developer. Performing this action will allow you to leverage the Sitecore Send functionality in your web channel.

### Developer Configuration

In order to link your Sitecore XM site to Sitecore Send you will need to embed the JavaScript tracker in the head section of your html template. To do this you can follow the documentation guide here: https://help.moosend.com/hc/en-us/articles/115002454009-How-can-I-install-website-tracking-by-using-the-JS-tracking-library-

The sequence diagram below shows data flow between the different systems to facilitate interaction data storage in Sitecore CDP.

![Sequence diagram showing the Sitecore Send tracker being requested by a Sitecore XM site][2]

## Use Case #2: How to identify visitors with Sitecore Send

The process of identifying visitors allows for interactions performed on different devices to be tied to the same user in Sitecore Send, giving the marketer a more complete view of their customers.

### Key Concepts

The identify call lets you connect a user to their actions and subsequently record their traits. It includes a unique email and the user's name. In regard to when and how often you should call the identification process, typically it is performed after the following actions

- After a user registers
- After a user logs in

### Developer Configuration

Identifying a visitor in Sitecore Send is a simple operation performed by leveraging the Mootrack JS functionality returned as part of the tracker request. To do this you can follow the documentation guide here: https://help.moosend.com/hc/en-us/articles/115002454009-%CE%97ow-can-I-install-website-tracking-by-using-the-JS-tracking-library-

The sequence diagram below shows the data flow between the different systems to facilitate the identifications of visitors.

![Sequence diagram showing a Sitecore XM site identifying a visitor in Sitecore Send][3]

## Use Case #3: How to embed a Sitecore Send Subscription Form in a Sitecore XM site

This process allows you to embed forms developed in Sitecore Send in your web channel. The process is the same whether you’ve built your site using SXA, JSS, or any of the other technology choices you can make with Sitecore XM.

### Key Concepts

Embedding a Sitecore Send subscription form in your web channel allows you to have users’ information posted directly into Sitecore Send. This allows you then target those users in your Sitecore Send campaigns.

### Developer Configuration

Once you have embedded the Mootrack tracker in the header for your site the process of embedding a form is quite simple. You create the form in Sitecore Send using the visual designer, then you choose how to embed it in your site, some examples are showing it “inline”, in a “floating box” or rendering the form “full screen”. Steps on how to perform these three can be found here:

- How to create an inline Subscription Form: https://help.moosend.com/hc/en-us/articles/360012073259-How-can-I-create-an-Inline-Subscription-Form-
- How to create a floating-box Subscription Form: https://help.moosend.com/hc/en-us/articles/360012072559-How-can-I-create-a-Floating-Box-Subscription-Form-
- How to create a full screen Subscription Form: https://help.moosend.com/hc/en-us/articles/360011974020-How-can-I-create-a-Full-Page-Subscription-Form-

You can also find an in depth FAQ list for the Sitecore Send subscription forms covering a wide variety of configuration options and scenarios here: https://help.moosend.com/hc/en-us/sections/360003299180-Subscription-Forms

![Sequence diagram showing a Sitecore XM site rendering a Subscription Form created in Sitecore Send][4]

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/373fcc70e30c4784bfce13ef52246441?v=30a0afda
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/ec41bc05179745f882aa2940ece9ac2d?v=bb5c426d
[3]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/bba3b7290a084172baef5d9a8a3167e7?v=42d099d2
[4]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/48ff702b8cd24719bb76421b6e8346d0?v=9766364e

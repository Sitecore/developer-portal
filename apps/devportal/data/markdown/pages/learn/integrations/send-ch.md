---
title: 'Integrating Sitecore Send with Sitecore Content Hub'
description: 'Leverage assets stored in the Sitecore Digital Asset Management (DAM) product that is part of Sitecore Content Hub, in email campaigns, Landing Pages & Subscription Forms created in Sitecore Send.'
product: ['send', 'content-hub']
area: ['integrations']
---

## Introduction

The purpose of this document is to analyze the integration blueprint for joining together Sitecore Send with Sitecore Content Hub.

This will detail how to provide the customers with a standard way to integrate their Sitecore Send instance with Sitecore Content Hub, allowing them to quickly integrate these products in a future proof way and getting them to start on the process of migrating to the Composable DXP.

The integration will allow you to leverage assets stored in the Sitecore Digital Asset Management (DAM) product that is part of Sitecore Content Hub, in email campaigns, Landing Pages & Subscription Forms created in Sitecore Send.

You can see the products involved in said integration highlighted below:

![blueprint_send_ch_product_map][1]

## Overview of Use Cases

- Utilize assets stored in Sitecore DAM in Email Campaigns
- Utilize assets stored in Sitecore DAM on Landing Pages
- Utilize assets stored in Sitecore DAM on Subscription Forms

## Data Responsibilities

Sitecore Send is an Email Marketing and Marketing Automation Platform while Sitecore Content Hub acts as home base for all your disparate content, as well as a platform that helps streamline, speed up, and simplify every part of a marketer’s job. Sitecore DAM is part of the Content Hub suite allowing you to centralize all your digital assets and deliver them to any customer touchpoint.

While in the process of integrating these two products you should ensure that this separation of concerns remains. Creating and editing digital assets outside should be performed using Sitecore DAM. Crafting and delivery of email campaigns should be performed within Sitecore Send.

## Prerequisites

- Active Sitecore Send account.
- Deployed instance of Sitecore DAM

## Glossary of Terms

| Term                | Value                             |
| :------------------ | :-------------------------------- |
| Sitecore DAM, DAM   | Sitecore Digital Asset Management |
| DXP, Composable DXP | Digital Experience Platform       |

## Use Case #1: Utilize assets stored in Sitecore DAM in Email Campaigns

Sitecore DAM allows you to centralize all your digital assets and deliver them to any customer touchpoint. One of these touchpoints are email campaigns. Marketers will want to leverage their DAM assets in these email campaigns.

### Key Concepts

When marketers build out their email campaigns using Sitecore Send, they will want to leverage the assets they have stored in their Sitecore DAM instance to ensure consistency with their other channels.

### Marketer Configuration

Currently leveraging your Sitecore DAM assets in your email campaigns is a manual process that is performed by the marketers when they build out their email template. The process involves choosing the asset they want to leverage, copying the public URL exposed by Sitecore DAM, then using that URL to import the asset into Sitecore Send.

#### Creating the public link

In order to use an asset in your email, the marketer will first need to create a Public Link. This allows other systems like Sitecore Send to utilize an asset stored in your Sitecore DAM instance. To create a public link you can follow the steps shown here: [https://docs-partners.stylelabs.com/en-us/contenthub/3.3.x/content/user-documentation/content-user-manual/share/public-links.html](https://docs-partners.stylelabs.com/en-us/contenthub/3.3.x/content/user-documentation/content-user-manual/share/public-links.html)

Once you have created the Public Link, you must copy it, so you have it ready to be used in Sitecore Send.

#### Using your Public Link in Email Campaigns

Once you have copied your Public Link, you’re ready to leverage it in your email campaigns. When you’re designing your emails, you have the ability to insert assets e.g., images. This is where you can leverage your public link. A DAM Public Link is simply a URL to an image, and you can use it by following the steps shown here: [https://help.moosend.com/hc/en-us/articles/208173195-What-is-an-Image-element-and-how-can-I-use-it-to-design-my-newsletter-](https://help.moosend.com/hc/en-us/articles/208173195-What-is-an-Image-element-and-how-can-I-use-it-to-design-my-newsletter-)

![Sequence diagram showing assets from Sitecore DAM being used in Email Campaigns][2]

## Use Case #2: Utilize assets stored in Sitecore DAM on Landing Pages

Sitecore DAM allows you to centralize all your digital assets and deliver them to any customer touchpoint. One of these touchpoints are Landing Pages created within Sitecore Send. Marketers will want to leverage their DAM assets on these Landing Pages to ensure brand consistency.

### Key Concepts

When marketers build out their landing pages using Sitecore Send, they will want to leverage the assets they have stored in their Sitecore DAM instance to ensure consistency with their other channels.

### Marketer Configuration

Currently leveraging your Sitecore DAM assets in your email campaigns is a manual process that is performed by the marketers when they build out their email template. The process involves choosing the asset they want to leverage, copying the public URL exposed by Sitecore DAM, then using that URL to import the asset into Sitecore Send.

#### Creating the public link

In order to use an asset in your landing pages, the marketer will first need to create a Public Link. This allows other systems like Sitecore Send to utilize an asset stored in your Sitecore DAM instance. To create a public link you can follow the steps shown here: [https://docs-partners.stylelabs.com/en-us/contenthub/3.3.x/content/user-documentation/content-user-manual/share/public-links.html](https://docs-partners.stylelabs.com/en-us/contenthub/3.3.x/content/user-documentation/content-user-manual/share/public-links.html)

Once you have created the Public Link, you must copy it, so you have it ready to be used in Sitecore Send.

#### Using your Public Link in Landing Pages

Once you have copied your Public Link, you’re ready to leverage it in your landing pages. When you’re designing your landing pages, you have the ability to insert assets e.g., images. This is where you can leverage your public link. A DAM Public Link is simply a URL to an image, and you can use it by following the steps shown here: [https://help.moosend.com/hc/en-us/articles/360034173553-What-is-an-Image-element-and-how-can-I-use-it-to-design-my-landing-page](https://help.moosend.com/hc/en-us/articles/360034173553-What-is-an-Image-element-and-how-can-I-use-it-to-design-my-landing-page)

![Sequence diagram showing assets from Sitecore DAM being used in Landing Pages][3]

## Use Case #3: Utilize assets stored in Sitecore DAM on Subscription Forms

Sitecore DAM allows you to centralize all your digital assets and deliver them to any customer touchpoint. One of these touchpoints are subscription forms. Marketers will want to leverage their DAM assets in these subscription forms, for example as a background image.

### Key Concepts

When marketers build out their subscription forms using Sitecore Send, they will want to leverage the assets they have stored in their Sitecore DAM instance to ensure consistency with their other channels.

### Marketer Configuration

Currently leveraging your Sitecore DAM assets in your subscription forms is a manual process that is performed by the marketers when they build out their form. The process involves choosing the asset they want to leverage, copying the public URL exposed by Sitecore DAM, then using that URL to import the asset into Sitecore Send.

#### Creating the public link

In order to use an asset in your subscription forms, the marketer will first need to create a Public Link. This allows other systems like Sitecore Send to utilize an asset stored in your Sitecore DAM instance. To create a public link you can follow the steps shown here: [https://docs-partners.stylelabs.com/en-us/contenthub/3.3.x/content/user-documentation/content-user-manual/share/public-links.html](https://docs-partners.stylelabs.com/en-us/contenthub/3.3.x/content/user-documentation/content-user-manual/share/public-links.html)

Once you have created the Public Link, you must copy it, so you have it ready to be used in Sitecore Send.

#### Using your Public Link in Subscription Forms

Once you have copied your Public Link, you’re ready to leverage it in your subscription forms, for example as a background image. This is where you can leverage your public link. A DAM Public Link is simply a URL to an image, and you can use it by following the steps shown here: [https://help.moosend.com/hc/en-us/articles/360011052120-How-can-I-upload-content-background-Images-while-I-design-my-subscription-form-](https://help.moosend.com/hc/en-us/articles/360011052120-How-can-I-upload-content-background-Images-while-I-design-my-subscription-form-)

![Sequence diagram showing assets from Sitecore DAM being used in Subscription Forms][4]

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/a2f2c216fba04a3ba896e857e4aff0c5?v=f0dc87f3
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/1b3f6f7cfb1844dfbcb44a06ba49fb98?v=e60f2441
[3]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/59473e6a63ab424387b6ca3af5c99b43?v=e037dbec
[4]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/e370a639fa80468e876e7715ecf21adc?v=6dc67c0a

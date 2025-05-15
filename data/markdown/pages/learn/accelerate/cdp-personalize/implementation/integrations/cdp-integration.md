---
title: 'CDP Integrations to External Systems'
description: 'Approaches for integrating Sitecore CDP with external systems'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['All']
features: ['CDP']
---

## Context
Integrating external systems with a Customer Data Platform like Sitecore CDP unlocks the full value of customer data by enabling richer, more actionable insights and therefore more personalized experiences. It unifies data that might be scattered to create a single customer profile. 

> This article does not cover the [Stream API](https://doc.sitecore.com/cdp/en/developers/api/stream-api.html) which is focused towards gathering behavioural and transactional data from clients such as web browsers and mobile applications.

## Execution
Sitecore CDP offers three integration points for transferring data between the CDP and external systems like email service providers, customer relationship managers, and paid media platforms. Each integration point is tailored for specific types of data transfer. 

Selecting the right integration relies on the use case that is being approached.

| Integration Option | Detail |
| - | - |
| **Batch API** | The [Batch API](https://doc.sitecore.com/cdp/en/developers/api/batch-api.html) enables efficient uploading of large data sets to Sitecore CDP. This method is perfect for importing bulk data, such as guest profiles and orders, from your internal systems either as a one-time upload or in regular batches, such as daily. | 
| **Guest and Order API** | The [Guest and Order API](https://doc.sitecore.com/cdp/en/developers/api/sending-orders.html) facilitates real-time interaction with guest and order data. It allows you to create, retrieve, update, and delete guest profiles and order information. This API is ideal for making immediate updates to guest profiles and orders, ensuring the data is available for personalization within seconds. | 
| **Audience Export** | The [Audience Export](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/audience-export.html) feature allows you to export audience data based on segments created in CDP. You can export complete datasets or deltas (changes since the last export). This method is ideal for activating audiences outside Sitecore CDP, such as in marketing platforms. | 

Review the [Before you start sending data](https://doc.sitecore.com/cdp/en/developers/api/before-you-start-sending-data.html) documentation for further detail on guest, events and orders data.

To determine the best approach, first consider whether your use case involves loading data into CDP or extracting data from it. While the Guest and Order APIs can fetch data, Audience Export is typically the best option for pulling data out of CDP and into another system, such as an email service provider.

The choice between the Batch API and the Guest and Order APIs depends on the data volume and the need for real-time updates. The Batch API supports broad updates of multiple guest profiles simultaneously, while the Guest API requires separate updates to guest and extension data, potentially resulting in multiple API requests per update, which can be challenging at scale. The same applies to order data.

Finally, consider the specific data you need to update. The Guest and Order APIs enable updating a single field on a profile or order extension, whereas the Batch API requires overwriting the entire extensions block with each update.

## Insights
### Export of Bulk Data

The integration points are intended for uploading and exporting data for the purposes of activation. For exporting data for analytics or historical back up, CDP provides the [Data Lake Export Service](https://doc.sitecore.com/cdp/en/developers/api/data-lake-export-service.html).

### Proof of Concept

Setting up an end-to-end proof of concept integration using dummy data early in the process is crucial. Since system interactions can be unpredictable, this approach ensures that requirements are well-informed by both the desired outcomes and the capabilities of the systems involved.

### Complex Data Structures

Uploading nested and listed data structures into CDP can be achieved by serializing the data into a single string field on an extension. However, consider how this approach will affect the usability of the data within the platform. While complex data structures can be unpacked from string fields in Decision Models and Segmentation, this process will require custom JavaScript and SQL scripting.

### Sitecore Connect

[Sitecore Connect](https://doc.sitecore.com/connect/en/users/sitecore-connect/introduction-to-sitecore-connect.html) is an integration platform designed specifically for making connections between Sitecore and external tools. Where applicable, it can be used to establish no-code connections using the Sitecore-built connectors to each of APIs mentioned in this article.

## Related Recipes

<Row columns={2}>
  <Link title="Use Case Scoping" link="/learn/accelerate/cdp-personalize/pre-development/use-case-scoping" />
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Stream API" link="https://doc.sitecore.com/cdp/en/developers/api/stream-api.html"/>
  <Link title="Batch API" link="https://doc.sitecore.com/cdp/en/developers/api/batch-api.html" />
  <Link title="Sending orders" link="https://doc.sitecore.com/cdp/en/developers/api/sending-orders.html" />
  <Link title="Audience export" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/audience-export.html" />

</Row>



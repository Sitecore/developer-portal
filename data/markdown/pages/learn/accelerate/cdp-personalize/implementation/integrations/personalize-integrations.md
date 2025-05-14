---
title: 'Personalize Integrations to External Systems'
description: 'Approaches for integrating Sitecore Personalize with external systems'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['All']
product: ['Technical Implementers','Solution Architects']
---

## Context
While personalization can happen in session and system, adding data from other systems such as CRMs, you can personalize experiences based on more comprehensive behavioral, transactional, or customer-specifics signals. The outcome is more relevant offers, smarter decisioning, and higher engagement at every touchpoint.

> This article does not cover the [Stream API](https://doc.sitecore.com/cdp/en/developers/api/stream-api.html) which is focused towards gathering behavioural and transactional data from clients such as web browsers and mobile applications.


## Execution
Integrating external systems such as recommendation models, data systems, CRMs, and CDPs with Sitecore Personalize will typically follow one of two primary approaches: the Interactive Experience API and Connections. 

### Interactive Experience API
The [Interactive Experience API](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-interactive-experiences.html) enables real-time delivery of personalized, dynamic content to HTTP enabled application visitors. It integrates with client or server-side systems to retrieve relevant personalization data, allowing for real-time personalized messaging. This API is ideal for scenarios requiring instant personalization, such as displaying offers or operational messages, and supports flexible implementation across all channels. Custom integration is required as the Interactive Experience API will only provide a JSON response; presentation of the personalization is the responsibility of the client itself. Setting up a proof of concept early in the process is recommended to ensure smooth integration.

### Connections

Connections enable Decision Models to fetch data from an API during the execution of the Experience. This data could be used to inform the decisioning, content to provide in an email trigger payload, or content to use in a Web Experience for example. The response from the Connection can be used at any point in the Experience downstream of the Decision Model. So it may be accessed in the API response for example, but not in the Audience Filter.

Connections may also be configured as destinations for Triggered Experiences. This is most commonly used for triggering communications such as email and SMS. However this can also be used for updating external systems with new data. For example, it can be connected to the Meta Conversions API to update with any purchases after session close.

When evaluating Connections for your use case, consider if the data you need can be accessed in real time with an API request which conforms to the [authentication standards supported by Personalize Connections](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/name-and-authenticate-a-connection-to-a-data-system-or-analytical-model.html) and the performance requirements of your use case.

Where IP whitelisting is required, refer to the [documentation](https://doc.sitecore.com/personalize/en/developers/api/ip-allowlists-for-inbound-and-outbound-traffic.html) to find a list of relevant static IP addresses.

### Interactive Experience API vs Connections
To choose the best approach, start by assessing whether your use case requires pulling data into Personalize or pushing data from it. Triggered Experiences along with Destination Connections are the primary methods for pushing data from Personalize into an external system. In some circumstances, Interactive Experiences can be used but in this scenario, the external system must initiate the request for data.

When pulling data into Personalize, the primary consideration will be: where is the data currently, and how can it be made available to Personalize? If the data is already available on the client to be personalized (e.g. web browser, mobile app) then it can be added to the [Interactive Experience custom request parameters](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/run-an-interactive-experience.html) and made available to all components of the Experience execution.

If the data can be made available via an API request using Connections, and it is possible to add a Decision Model to the Experience configuration, then using a Connection will be a good option.

## Insights
### Custom Data Fields
Custom data may be added to Interactive Experience requests inside of a params JSON object using the following structure:

```
{
    channel: "MOBILE_APP",
    currency: "USD",
    pointOfSale: "myretailsite/ireland",
    friendlyId: "product_page_personalization",
    params: {
      custom_field: "value"
    }
}
```
<br/><br/>
However, it is not possible to add these custom fields when using a Web Experience. In that case it is preferable to use a Connection along with a Decision Model.

### OAuth 2.0 Grant Types
When assessing compatibility with external API authentication, note that Connections specifically supports the OAuth 2.0 client_credentials grant type. This is because this is the grant type that is specifically designed for access outside of the context of a user.

Some non-standard OAuth or token-based authentication may be accomplished using custom headers and form-data provided for in Connection configuration.

### Postman
A great approach to limit unexpected stumbling blocks while creating Connections is to first make the connection to the API using Postman or a similar API testing tool. Similarly, if a connection is not acting as expected, replicating the request - including default headers and query parameters - in Postman would be the first step in debugging the issue.

## Related Recipes

<Row columns={2}>
  <Link title="Discovery" link="/learn/accelerate/cdp-personalize/pre-development/discovery" />
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Introduction to interactive experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-interactive-experiences.html"/>
  <Link title="Connecting Sitecore Personalize" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/name-and-authenticate-a-connection-to-a-data-system-or-analytical-model.html" />
  <Link title="Run an interactive experience" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/run-an-interactive-experience.html" />
  <Link title="IP allowlists" link="https://doc.sitecore.com/personalize/en/developers/api/ip-allowlists-for-inbound-and-outbound-traffic.html" />
</Row>



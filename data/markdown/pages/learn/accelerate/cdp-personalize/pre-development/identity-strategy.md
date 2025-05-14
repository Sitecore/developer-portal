---
title: 'Developing an Identity Strategy'
description: 'Guidance on how to decide on identifiers to configure'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Technical Implementers','Architects']
product: ['CDP', 'Personalize']
---

## Context
Identifying users is a key requirement for personalization - tracking across sessions, channels and touchpoints. Before any implementation starts, it's crucial to have an identity strategy - this enables richer personalization across channels and prevents unintended consequences from adding rules post go-live. 


## Execution

[Identity resolution](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/understanding-identity-resolution-in-sitecore-cdp.html) in Sitecore CDP and Personalize merge data from various sources into a single Guest profile. Common identifiers are email, name, phone number, loyalty number but any string value which can uniquely identify a customer is a potential candidate.

There are two widely acknowledged industry methods for reconciling identity:​

- **Deterministic identity** relies on personally identifiable information (PII) to achieve identification of a Guest. Sitecore CDP uses this method.​
- **Probabilistic matching** is achieved by algorithmically analysing different data points – fuzzy matching on PII, device type, operating system, location data, time of day, etc., to enable statistical ID of a Guest across channels and devices.

To develop an identity strategy, the following steps need to be followed:
1. Select the identifiers relevant to your use cases and establish an identity rule for each identifier.
2. Develop scenarios to understand how these rules will take effect in practice.
3. Implement and test the rules using the scenarios from step 2.

### Selecting Identifiers
When selecting identifiers for CDP and Personalize, consider identifier ubiquity and data privacy.

An Identifier is most useful when it is used to identify an individual across multiple systems. For example, using an email address across web, mobile apps, and loyalty systems allows for seamless data merging into a single profile.

If instead, we used a customer ID for loyalty details but email for logging in, we would need to add a second identity rule to cover customer ID. Additionally, we will need to have a system which has access to both customer ID and email address, so that both these identifiers can be paired together on a single profile. If the mobile app has access to both email and customer ID at the time of log in for example, both identifiers would be sent to CDP. From then on, data can be added to this profile from either the web or the loyalty service using either identifier.

When considering data privacy, we are usually making a determination as to whether we wish to store Personal Identifiable Information (PII) in the CDP or not. Keeping the CDP PII-free can be a great way to ensure maximum data privacy for customers. However, it is not always consistent with use case needs. For example, in order to trigger an email send from CDP or Personalize, we will either need to pass the email address directly from CDP, or pass a different identifier which the email service can use to look up the email address.

### Identity Scenarios
When configuring multiple Identity rules, it is recommended to establish how these rules will take effect in each of the possible scenarios. For example, the following Identity Rules would lead to the below scenarios - Email Address & Customer ID.

#### Scenario 1
1. Alice logs in on Web - `Identity Event` is sent to CDP with `email` identity provider. Browsing session is established on new Guest profile: `Profile A`.
2. Alice logs in on Mobile App - `Identity Event` is sent to CDP with `email` and `customer_id` identity providers. Browsing session is initially stored on new Guest profile (`Profile B`), but is migrated to `Profile A` after Identity event. `Profile B` is retired.
3. The offline loyalty system updates the CDP with Alice’s loyalty details using the `customer_id` identity provider. Loyalty details are added to `Profile A`.

All data is correctly merged onto Alice’s profile.

#### Scenario 2
1. Bob logs in on Web - `Identity Event` is sent to CDP with `email` identity provider. Browsing session is established on new Guest profile: `Profile A`.
2. The offline loyalty system updates the CDP with Bob’s loyalty details using the `customer_id` identity provider.  Loyalty details are added to a new profile: `Profile B`.
3. Bob logs in on Mobile App - `Identity Event` is sent to CDP with `email` and `customer_id` identity providers
    - Identity resolution finds `Profile A`, since Email is rule #1.
    - Profile A does not have the loyalty information

Data is split between two profiles.

#### Scenario 3

1. The offline loyalty system updates the CDP with Charles’ loyalty details using both the `email` identity provider and the `customer_id` identity provider. Loyalty details are added to a new profile: `Profile A`.
2. Charles logs in on Web - `Identity Event` is sent to CDP with `email` identity provider. Browsing session is established on existing guest profile: `Profile A`. Loyalty information is immediately available for personalization on web.
3. Charles logs in on Mobile App - `Identity Event` is sent to CDP with `email` and `customer_id` identity providers. 
    - Browsing session is established on existing guest profile: `Profile A`.
    - Loyalty information and prior web browsing history is immediately available for personalization on mobile app.

All data is correctly merged onto Charles' profile.

## Insights
Effective identity management is not only a question of picking the correct identifiers—it is also a question of how you store, use, and safeguard them. There are key practices and technical considerations that need to be taken when working with identifiers in Sitecore CDP and Personalize.

### Non-Indexed Identifiers

Any identifier which is not used for profile matching purposes in Sitecore CDP should not be stored in the CDP identifiers block. Instead, these can be stored in Guest Data Extensions, or alternatively using [Session Traits](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/session-traits.html) when the identifier is sent in using event streaming.

### Including All Identifiers

Where possible all available identifiers should be included in the identifiers block, rather than just the first one. This reduces the risk of split data across multiple profiles.

### Profile Migration

The [Batch Migration API](https://doc.sitecore.com/cdp/en/developers/api/using-guest-profile-migration.html) can be used in some scenarios to synchronise profiles which have become out of sync.

### Privacy Conscious Identification

Identifiers may be encrypted or hashed before being delivered into CDP/Personalize. Before doing so, it is important to consider future requirements for the usage of data. For example, hashing an email address will stop CDP and Personalize from using this email address for the delivery of emails. Similarly, encryption will require the decryption of the data on a third system before usage.

Some services such as [Meta Marketing API](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences/) and [Google Ads API](https://support.google.com/google-ads/answer/7474263) will accept pre-hashed emails directly from Sitecore, but you must ensure the same hashing algorithm recommended in their documentation is applied.

## Related Recipes

<Row columns={2}>
  <Link title="Segmentation" link="/learn/accelerate/cdp-personalize/pre-development/segmentation" />
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Understanding identity resolution in Sitecore CDP" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/understanding-identity-resolution-in-sitecore-cdp.html"/>
  <Link title="Session traits" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/session-traits.html"/>
  <Link title="Using guest profile migration" link="https://doc.sitecore.com/cdp/en/developers/api/using-guest-profile-migration.html" />
</Row>

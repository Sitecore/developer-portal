---
title: 'Catching Renditions generation'
description: 'How to capture rendition status using conditions in Sitecore Content Hub'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-02-14'
audience: "Technical Implementers, Solution Architects"
---

## Context
In Sitecore Content Hub, public links allow sharing assets with external consumers who do not have access to Content Hub itself - as detailed in the [Distribution of Content](/learn/accelerate/content-hub/implementation/configuration/distribution-of-content) recipe. But to be able to achieve these, there could be conditions whereby the rendition is not existing or not ready yet.

## Execution
As public links are generated for renditions, it’s crucial to make sure that the trigger can catch that event when Content Hub is done generating a rendition and stores that on the asset/file entity. 

Typically, in the trigger conditions we can only specify properties and relations of the entity itself. 

<figure><img src="/images/learn/accelerate/content-hub/condition-trigger.png" alt="Condition Trigger"/><figcaption></figcaption></figure>

However, the renditions are not standalone attributes of the asset. They are instead part of the large JSON object called “Renditions”, which holds the filekeys for each of the rendition binary files inside the blob storage of Content Hub itself. 

<figure><img src="/images/learn/accelerate/content-hub/renditions-json-object.png" alt="Renditions JSON Object"/><figcaption></figcaption></figure>

The renditions themselves inside the big “Renditions” property contain a status. It’s this status that we need to use in the conditions of the trigger configuration. 

It’s worth mentioning that the trigger conditions support the JPath approach of identifying values to check for. JPath is a language for querying JSON elements. As the “Renditions” property is a JSON with a nested structure, the attributes of it can be addressed the following way:

<figure><img src="/images/learn/accelerate/content-hub/renditions-attributes.png" alt="Renditions Attributes in JSON Object"/><figcaption></figcaption></figure>

This allows us to hook up a script for execution when both the “metadata” and the “preview” renditions are completed by the processing agents of Content Hub. 

## Insights
Keep in mind is that trigger conditions can be configured for “listening” to changes of nested element values of JSON properties of an entity. Therefore, scripts can be executed when for example certain rendition is finalized rendering by processing agents.

### Public Links Usage

In addition to the above, a typical example of using public links is the automated delivery of marketing assets directly into external systems or websites. For instance, an image hosted in Content Hub could be embedded on a public website, or direct download links could be included in widely distributed email campaigns. Those use cases require a setup whereby public links are automatically generated in Content Hub. The key thing to keep in mind is that a **public link can only be generated for an existing rendition**.

Review the [Scripts Guidance and Scenarios](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios#create-public-links-for-x-assets) recipe for an example on how to create public links for Assets, but as mentioned earlier, this script creates a public link for a rendition that already exists. Review the [Conditionally generate renditions](/learn/accelerate/content-hub/implementation/custom-logic/conditionally-generate-renditions) recipe for handling conditions whereby the rendition is not existing or not ready yet.

## Related Recipes

<Row columns={2}>
  <Link title="Distribution of Assets" link="/learn/accelerate/content-hub/implementation/configuration/distribution-of-assets" />
  <Link title="Distribution of Content" link="/learn/accelerate/content-hub/implementation/configuration/distribution-of-content" />
  <Link title="Conditionally generate renditions" link="/learn/accelerate/content-hub/implementation/custom-logic/conditionally-generate-renditions" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Triggers" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html"/>
  <Link title="Default renditions" link="https://doc.sitecore.com/ch/en/users/content-hub/default-renditions.html"/>
</Row>
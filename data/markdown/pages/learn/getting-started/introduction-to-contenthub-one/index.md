---
title: 'Introduction to ContentHub ONE'
description: 'Build agile omnichannel experiences and manage the content centrally in Contnet Hub ONE'
---


## What is Content Hub ONE?
Sitecore Content Hub ONE is a cloud-native, agile headless Content Management System (CMS), for developers and marketers to efficiently launch centrally managed, reusable omnichannel experiences. With Content Hub ONE, you can quickly model, author and deliver content of any type, for any channel. Business users can manage content using a simple modern user interface, while developers can make use of comprehensive APIs and SDKs to create and deliver omnichannel experiences.


## Why use Content Hub ONE?
Content Hub One is designed for brands that need an agile headless CMS to support quickly evolving experiences targeting multiple channels. With Content Hub ONE marketers can deliver consistency across touchpoints while maintaining the content in one central location.  

Content Hub ONE is an "API first" application using OpenAPI standards. The content is delivered headlessly through a geographically distributed Edge delivery layer. The Content API allows integrations of third party products to import and manage data.

The Content Hub ONE [Software Development Kit](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-sdk.html) (SDK) is available for .NET and JavaScript based applications. Using the SDK client you can access and manage Content Types, Content, Media Items as well as API Keys. 

The Content Hub ONE [Command Line Interface](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-cli.html) (CLI) allows persisting Content and Content Types in the source code repository. Packages can be created and installed to other Content Hub ONE environments. The CLI can be extended using plugins. 


## Content Hub ONE provides
Content Hub ONE consists of: 
- A powerful content modelling user interface for creating structured, modular content
- A modern, user-centric content authoring experience
- Media management for image assets
- Content management [Swagger OpenAPI](https://content-api.sitecorecloud.io/swagger/index.html) for developers to manage the content model and content items with full CRUD permissions 
- Preview and Delivery GraphQL API delivered through a geographically distributed layer (Sitecore Experience Edge) for consumption of content into multi-channel experiences, at scale
- JavaScript and Client SDK for developers to leverage a rich set of developer tools
- Command line interface (CLI) to serialize and source control content and content types

## Content Hub ONE Architecture

![Content Hub ONE Architecture](https://sitecorecontenthub.stylelabs.cloud/api/public/content/0b8a2c9e2b9243959588c30322bff22e?v=8ea9027c)

Content Hub ONE provides a Content Management Application that allows content modeling, content and media item creation and management. Content and Media is created in a "Draft" state. Publishing makes the content publicly available. Utilizing this workflow Content Hub ONE ensures that content can be managed independently.

When published, content is available through the GraphQL Endpoint of the Sitecore Experience Edge delivery layer. [Edge](https://developers.sitecore.com/content-management/edge-content-hub) is a geographically distributed CDN-like solution. You can easily query the content using GraphQL. 

Media assets get published to a CDN and are accessible through the Media Delivery API. 

The Preview API enables developers to provide a preview of the content through an app before publishing. 

The JavaScript and .NET [SDK](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-sdk.html) as well as the [CLI](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-cli.html) extend the tool set for developers.

The Media Upload API as well a the [Content Management API](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-management-api.html) allow integrating content from other systems or automating content enhancements.


## Accessing Content Hub ONE
Content Hub ONE can be accessed through the [Sitecore Cloud Portal](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html). Using an API Key applications can access the delivery APIs.

## Developing apps using Content Hub ONE


## Getting prepared for Content Hub ONE
If you want to get started with Content Hub ONE you might want to make sure that you 

### Content Hub ONE
[[Documentation] Official Content Hub ONE documentation](https://doc.sitecore.com/ch-one/en/developers/content-hub-one)

### GraphQL
[GraphQL Documentation](https://graphql.org/code/)
[[Video] Making GraphQL requests on your frontend with Next.js](https://www.youtube.com/watch?v=F3BWdFXEJPk)

### Tooling
[[Video]Improving Windows Terminal for a better Developer Experience](https://www.youtube.com/watch?v=pO7k3_p1Uq4)

### Serialization
[[Documentation] Content Serialization using Content Hub ONE CLI ](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-cli--serialization.html)
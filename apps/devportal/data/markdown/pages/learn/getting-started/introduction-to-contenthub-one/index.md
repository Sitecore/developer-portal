---
product: ['content-hub-one']
title: 'Introduction to Content Hub ONE'
description: 'Build agile omnichannel experiences and manage the content centrally in Contnet Hub ONE'
---

## What is Content Hub ONE?

Sitecore Content Hub ONE is a cloud-native, agile headless Content Management System (CMS), for developers and marketers to efficiently launch centrally managed, reusable omnichannel experiences. With Content Hub ONE, you can quickly model, author and deliver content of any type, for any channel. Business users can manage content using a simple modern user interface, while developers can make use of comprehensive APIs and SDKs to create and deliver omnichannel experiences.

## Why use Content Hub ONE?

Content Hub ONE is designed for brands that need an agile headless CMS to support quickly evolving experiences targeting multiple channels. With Content Hub ONE marketers can deliver consistency across touchpoints while maintaining the content in one central location.

Content Hub ONE is an "API first" application using OpenAPI standards. The content is delivered headlessly through a geographically distributed Edge delivery layer. The Content API allows integrations of third party products to import and manage data.

The Content Hub ONE [Software Development Kit](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-sdk.html) (SDK) is available for .NET and JavaScript based applications. Using the SDK client you can access and manage content types, content, media assets as well as API keys.

The Content Hub ONE [Command Line Interface](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-cli.html) (CLI) allows persisting Content and Content Types in the source code repository. Packages can be created and installed to other Content Hub ONE environments. The CLI can be extended using plugins.

## Content Hub ONE provides

- A powerful content modelling user interface for creating structured, modular content
- Aa modern, user-centric content authoring experience
- Media management for image assets
- Content management [Swagger OpenAPI](https://content-api.sitecorecloud.io/swagger/index.html) for developers to manage the content model and content items with full CRUD permissions
- Ppreview and delivery GraphQL API delivered through a geographically distributed layer (Sitecore Experience Edge) for consumption of content into multi-channel experiences, at scale
- JavaScript and Client SDK for developers to leverage a rich set of developer tools
- Command line interface (CLI) to serialize and source control content and content types

## Content Hub ONE Architecture

![Content Hub ONE Architecture](https://sitecorecontenthub.stylelabs.cloud/api/public/content/7b4f7805c3474f3082a741807b5f5433?v=122a12bc)

Content Hub ONE provides a content management application that allows content modeling, content/ media item creation and management. Content and media is created in a "Draft" state. Publishing makes the content publicly available. Utilizing this workflow Content Hub ONE ensures that content can be worked on independently from what is visible to the public.

When published, content is available through the GraphQL Endpoint of the Sitecore Experience Edge delivery layer. [Edge](https://developers.sitecore.com/content-management/edge-content-hub) is a geographically distributed CDN-like solution. You can easily query the content using GraphQL.

Media assets get published to a CDN and are accessible through the Media Delivery API.

The Preview API enables developers to provide a preview of the content through an app before publishing.

The JavaScript and .NET [SDK](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-sdk.html) as well as the [CLI](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-cli.html) extend the toolset for developers.

The Media Upload API as well a the [Content Management API](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-management-api.html) allow integrating content from other systems or automating content enhancements.

## Accessing Content Hub ONE

Content Hub ONE can be accessed through the [Sitecore Cloud Portal](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html). Using an API Key applications can access the delivery APIs.

## Developing apps using Content Hub ONE

Content Hub ONE delivers content headlessly and geographically distributed through the GraphQL endpoint of Sitecore Edge. You can build you app consuming content using GraphQL Queries. the [GraphQL IDE](https://edge.sitecorecloud.io/api/graphql/ide) helps reviewing the content and building the queries.

You need to pass in the API Key created in your Content Hub ONE instance as Http Headers. The IDE supports developers with convenient type ahead functionality.

![Sitecore GraphQL IDE](https://sitecorecontenthub.stylelabs.cloud/api/public/content/fc08adbc4fe848e08edd33c759cbc28d?v=2f046a71)

## Getting prepared for Content Hub ONE

If you want to get started with Content Hub ONE you might want to make sure that you familiarize with GraphQL, Headless Development and the Content Hub ONE UI, SDK and CLI. Here you find a list of material that help you get started.

### Content Hub ONE

- [[Documentation] Official Content Hub ONE documentation](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/index-en.html)

### GraphQL

- [GraphQL Documentation](https://graphql.org/code/)
- [[Video] Making GraphQL requests on your frontend with Next.js](https://www.youtube.com/watch?v=F3BWdFXEJPk)

### Tooling

- [[Video]Improving Windows Terminal for a better Developer Experience](https://www.youtube.com/watch?v=pO7k3_p1Uq4)

### Serialization

- [[Documentation] Content Serialization using Content Hub ONE CLI ](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-cli--serialization.html)

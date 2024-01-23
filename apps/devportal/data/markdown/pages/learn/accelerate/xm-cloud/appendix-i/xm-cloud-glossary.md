---
title: 'Sitecore Accelerate for partners'
description: 'Learn more about how to develop for XM Cloud'
hasSubPageNav: true
hasInPageNav: false
area: ['accelerate']
---

## XM Cloud Glossary of Terms

> 🚀 This Sitecore Accelerate Recipe is a work in progress...

### Project

A Project is connected to a source code repository. Each Project can have multiple environments. So a typical setup would be to have one source code repository for one Brand or legal entity and then have a DEV environment, QA, Staging or Pre Prod and Production within that project.

### Environment

An Environment is your physical XM Cloud instance. It consists of a Content Management Instance, that provides certain tooling like Pages, Components, User and Roles Management and more. It also provides an internal nodeJS based editing host, that’s used for rendering your app for WYSIWYG editing in Pages or Experience Editor. Last but not least it comes with a geographically scaled deliver layer, called Edge. This layer provides a GraphQL Endpoint to be used by your public facing applications. Please note that your public facing app needs to be hosted on an external rendering host (e.g. provided by Vercel).

<img src="/images/learn/accelerate/xm-cloud/xmc-glossary-1.jpeg" alt="XM Cloud Architecture"/>

### Site

A site represents one website or one content repository. A site is able to support multiple languages. Sites can be organized in site collections. Each site comes with a certain structure giving access to the pages/routes, media assets, data sources, dictionary items, presentation configuration as well as site related settings.

Sites can share content and presentation configuration across each other within one site collection if enabled.

<img src="/images/learn/accelerate/xm-cloud/xmc-glossary-2.jpeg" alt="Site Structure in XM Cloud"/>

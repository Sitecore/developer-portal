---
product: ['marketplace']
title: 'From Zero to Deployed: Building with the Sitecore Marketplace Starter Kit'
description: 'Whether you’re building a custom or public app, the process follows a clear path. This guide is tailored for developers who want to get hands-on with Sitecore Marketplace and start building apps. The Marketplace Starter Kit provides the basics to get started along with example implementations of all extension points.  From setup to deployment, this chapter walks you through the essentials so you can go from zero to deployed with confidence.'
promoAfter: ['learning-essentials']
openGraphImage: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/d2da3c36914d4b34943ca023f2b5e615?v=cfd5dc08'
---
<Promo
  title="Not sure what all these terms mean?"
  description="Maybe you missed the marketplace introduction article."
  imageSource="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/b20cc628bdaf4c3080bd586c98d4ee30?v=947ae0af"
  linkText="Read more"
  linkHref="https://developers.sitecore.com/learn/getting-started/marketplace"
  isImageLeft={false}
/>

## 1. Prerequisites
Building marketplace apps requires **Node.js v16+** and **NPM v10+**. 
The Marketplace SDK is created in JavaScript so it supports any JavaScript based frontend framework such as **React**, **Next.js**, Angular and more. 

## 2. Create your app
You can create the app in several ways.
-	Create empty app using your preferred JS Frontend Framework e.g. using Next.js app router or page router approach
-	Using the marketplace starter kit (uses Next.js and app router)

**This example builds based on the starter kit.**	

### 2.1 Create new repository from Marketplace Starter Kit
The marketplace starter kit has been created as a template. You can use that template to create your own marketplace app. 

Go to https://github.com/Sitecore/marketplace-starter and create a new repository from template.

 ![GitHub - create marketplace app from Starter Kit template ](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/6cd89369b54b4a3c9ba7193e9266fe38?v=88a1b852)

Choose a meaningful name for the app you want to build. Add a description and set the visibility to public or private.

 ![GitHub - create repository ](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/c3fa38a1a0524ed6aa463ded8c59094f?v=6ec12f3c)

### 2.2 Clone your repository to your local

 ![Clone GitHub repository to local using CLI](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/2c39f43829334be8a7d5a5c355ce67c0?v=53a66fba)

Install packages using `npm install`

The file structure should look like that now: 

 ![Marketplace Next.js Starter Kit file structure of app router sample](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/afe4ed9c2d4443c88dd957c4137a54e5?v=a58f389c)

The marketplace starter repository quick starts your implementation by providing a preconfigured solution. The `useMarketplaceClient.ts` instantiates the marketplace client. 

Within the app folder you can explore example implementations for each extension point. Find more information in the ReadMe file of the repository. 

### 2.3 Test app
Start your app running `npm run dev`

Following the different routes, you can see the sample implementations.

Open e.g. http://localhost:3000/custom-field-extension 

 ![Run Marketplace starter kit locally - e.g.: custom-field extension](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/9c39096f40d24e22bff384257a8fe45b?v=d4979f5a)

 **Please note:** You don’t see the environment related output because the app is not running in the context of XM Cloud.

### 2.4 Example implementations

Learn from a set of example implementations how to utilize the Marketplace SDK and the different extension points.
- Icon Picker: https://github.com/Sitecore/marketplace-icon-picker
- Google Analytics: https://github.com/Sitecore/marketplace-google-analytics

### 2.5 Consider unified UI
When starting to build, please note that we strongly recommend designing your app’s UI in line with Sitecore’s interface guidelines to provide a consistent and familiar experience for users.

<Promo
  title="Want to know how to register your app with Sitecore?"
  description="Learn how to take your custom Marketplace app from development to deployment. This guide walks you through the final steps—registering your app in the Sitecore Cloud Portal, selecting extension points, configuring API access, and making it available to your organization."
  imageSource="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/126130ee2f7e40c79f3496595341e587?v=d568e138"
  linkText="Read more"
  linkHref="https://developers.sitecore.com/learn/getting-started/marketplace/marketplace-register-app"
  isImageLeft={false}
/>

## Resources
| Resource | Link |
|----------|------|
|Feedback Form|https://forms.office.com/e/cEndu1JLQc|
|Documentation|https://doc.sitecore.com/mp/en/developers/marketplace/testing-and-debugging-a-custom-app.html|
|Marketplace Next.js Starter Kit| https://github.com/Sitecore/marketplace-starter|

## Read more

  <Article 
    title="Unlock Sitecore’s Potential: Introducing Sitecore Marketplace Custom Apps" 
    description="Discover how Sitecore Marketplace Custom Apps empower developers, architects, and marketers to extend Sitecore with modular, purpose-built solutions. This article introduces the concept of Custom Apps, explains their role in a composable architecture, and highlights how they unlock new capabilities across Sitecore products—without touching the core." 
    link="/learn/getting-started/marketplace/marketplace-starter-kit-nextjs-app-router" 
    maxWidth="sm" />
 
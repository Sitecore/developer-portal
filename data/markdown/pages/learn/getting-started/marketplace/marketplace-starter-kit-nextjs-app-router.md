---
product: ['marketplace']
title: 'From Zero to Deployed: Building with the Sitecore Marketplace Starter Kit'
description: 'Explore the Sitecore Marketplace — your hub for discovering and building ready-to-use extensions that amplify your digital experience platform. Join our Early Access Program to get started with the Marketplace SDK.'
promoAfter: ['learning-essentials']
openGraphImage: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/d2da3c36914d4b34943ca023f2b5e615?v=cfd5dc08'
---

# From Zero to Deployed: Building with the Sitecore Marketplace Starter Kit
Whether you're building a custom or public app, the process follows a clear path. This guide is tailored for developers who want to get hands-on with Sitecore Marketplace and start building your own app. The Marketplace Starter Kit provides the basics to get started along with example implementations of all extension points.  From setup to deployment, this chapter walks you through the essentials so you can go from zero to deployed with confidence.

Not sure what all these terms mean? Maybe you missed the [marketplace introduction article](https://developers.sitecore.com/learn/getting-started/marketplace).

## 1. Prerequisites
Building marketplace apps requires **Node.js v18+** and **NPM v9+**. Please also note that the Marketplace SDK supports **React** and **Next.js** only. 

## 2. Create your app
You can create the app in several ways.
-	Create empty React app
-	Create empty Next.Js app using app router or page router approach
-	Using the marketplace starter-kit (uses app router)

**This example builds based on the starter kit. **	

Building based on an empty Next.Js app using app router approach, is described here: https://developers.sitecore.com/learn/getting-started/marketplace/marketplace-nextjs-app-router


### 2.1 Fork Marketplace Starter Kit
Go to https://github.com/Sitecore/marketplace-starter and create a fork of the repository to your own. 

If you plan to build multiple marketplace apps it would be better practice to fork as template. 

 ![GitHub Fork Maretkplace Starter Kit repo ](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/91cb3dd5d2ce49dfb055f9c4d9fd96ab?v=6cb0d845)

### 2.2 Clone your repository to your local

 ![Clone GitHub repository to local using CLI](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/2c39f43829334be8a7d5a5c355ce67c0?v=53a66fba)

Install packages using `npm install`

The file structure should look like that now: 

 ![Marketplace NextJS Starter Kit file structure of app router sample](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/afe4ed9c2d4443c88dd957c4137a54e5?v=a58f389c)

The marketplace starter repository quick starts your implementation by providing a preconfigured solution. The `useMarketplaceClient.ts` instantiates the marketplace client. 

Within the pages folder you find example implementations for each extension point. More information you can find in the ReadMe file of the repository. 

### 2.3 Test app
Start your app running `npm run dev`

Following the different routes, you can see the sample implementations.

Open e.g. http://localhost:3000/custom-field-extension 

 ![Run Marketplace starter kit locally - e.g.: custom-field extension](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/9c39096f40d24e22bff384257a8fe45b?v=d4979f5a)

 **Please note:** You don’t see the environment related output because the app is not running in the context of XM Cloud.

### 2.4 Consider unified UI
When starting to build, please note that we strongly recommend designing your app’s UI in line with Sitecore’s interface guidelines to provide a consistent and familiar experience for users.


Read further about registering your app with Sitecore Cloud Portal and XM Cloud: https://developers.sitecore.com/learn/getting-started/marketplace/marketplace-register-app 


## Resoures
| Resource | Link |
|----------|------|
|Feedback Form|https://forms.office.com/e/cEndu1JLQc|
|Documentation|https://doc.sitecore.com/mp/en/developers/marketplace/testing-and-debugging-a-custom-app.html|
|Marketplace NextJS Starter Kit| https://github.com/Sitecore/marketplace-starter|


<Article 
  title="Configure and Install a custom marketplace app" 
  description="Learn how to take your custom Marketplace app from development to deployment. This guide walks you through the final steps—registering your app in the Sitecore Cloud Portal, selecting extension points, configuring API access, and making it available to your organization." 
  link="/learn/getting-started/marketplace/marketplace-register-app" 
  maxWidth="sm" 
/>
<Article 
  title="Unlock Sitecore’s Potential: Introducing Sitecore Marketplace Custom Apps" 
  description="Discover how Sitecore Marketplace Custom Apps empower developers, architects, and marketers to extend Sitecore with modular, purpose-built solutions. This article introduces the concept of Custom Apps, explains their role in a composable architecture, and highlights how they unlock new capabilities across Sitecore products—without touching the core." 
  link="/learn/getting-started/marketplace/marketplace-starter-kit-nextjs-app-router" 
  maxWidth="sm" 
/>
---
title: 'Tutorial: How to Create a Site and Connect your App'
description: 'In this tutorial, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, you will become familiar with the first steps in building a website in XM Cloud. You will learn:

- How to create a new Site in your XM Cloud environment
- How to initialize your Next.js application in your local development environment
- How to connect a Next.js application to your hosted XM Cloud environment

## Overview

In XM Cloud, a [site](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-websites.html) is a collection of one or more [pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/design-webpages.html), and a page can have several [components](https://doc.sitecore.com/xmc/en/users/xm-cloud/understanding-components-in-xm-cloud.html). Through this tutorial series we will be creating a new Company Dev site and building out pages and components for the site. You will use the XM Cloud tools and your local development environment to explore the creation of a new site.

In this tutorial you wil do the following:

1. Create a new site in XM Cloud
1. Download and initialize your Next.js application
1. Connect your Next.js application to your XM Cloud instance
1. Verify that your connection is working by changing some content and viewing the updated content in your Next.js application

## Prerequisites

In order to complete the following tutorial, you will need these resouces:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. The XM Cloud environment created in the [Setup XM Cloud tutorial](setup-xm-cloud).
1. The GitHub repo created in the [Setup XM Cloud tutorial](setup-xm-cloud).
1. An IDE such as Visual Studio (VS) Code.
1. A valid XM Cloud license file.
   <Alert status="info">
   <AlertIcon />
   If you haven't already downloaded a license file, refer to the docs on [downloading your organization's license file from the portal](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-cloud-organization-command.html#the-license-subcommand).
   </Alert>

## Create the site

With the environment initially created, you can now create your first site in XM Cloud. This will verify that the authoring environment is working and you can start the base of your project that will be used in these tutorials.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.

1. You can access XM Cloud via the XM Cloud Deploy app through the “Go to XM Cloud” button
   ![XM Cloud Deploy Logs - Finished, Open XM Cloud Dashboard](https://sitecorecontenthub.stylelabs.cloud/api/public/content/d61e0711c4044fd7a8f4df56df9feb48?v=f5924a41)
   If you closed that screen already you can also access XM Cloud from the Sitecore Cloud Portal. Click the “Open app” button on the top right.
   ![Sitecore Cloud Portal - Open XM Cloud Dashboard](https://sitecorecontenthub.stylelabs.cloud/api/public/content/ef83f2ef7ff94688b9f84b59f57f98b5?v=8bed26f3)
1. Under the Sites tab, click `Create site`.
   ![Create site](https://sitecorecontenthub.stylelabs.cloud/api/public/content/7feb2d24b3e84117967949d5386fab37?v=c6c49f33)

1. In the **New site** step you will choose a site template. Choose `Basic Site`.
   <Alert status="info">
   <AlertIcon />
   You can choose to create an Empty Site, or a Basic Site that already has some content in it. When creating your own websites outside the scope of this tutorial or as a quick demo, we recommend using the Empty Site, as it requires less cleanup than the Basic Site template. However, for this tutorial, you will select to use the basic site.
   </Alert>

   ![Choose Site Template](https://sitecorecontenthub.stylelabs.cloud/api/public/content/1480ca22c0724a7496c9617b5f65cd6a?v=cf3753f9)

1. Name the site `Company Dev`.  
   ![Name new Site and Site Collection](https://sitecorecontenthub.stylelabs.cloud/api/public/content/41287d8cc01e4dc8b32a4aede67c98c1?v=dc1b7223)

1. Select a pre-configured [language](https://doc.sitecore.com/xmc/en/developers/xm-cloud/working-with-languages.html), in this case, `English`.

   <Alert status="info">
      <AlertIcon />
      At this time, you can also select an existing Site identifier, or create a new one. This is required when connecting [CDP, the Customer Data Platform](https://developers.sitecore.com/customer-data-management/cdp) of Sitecore for embedded analytics and personalization. We will skip that step for now and start the creation process of the site.
   </Alert>

1. Click `Create site`, which will scaffold the website in the background. This will take a few minutes.

   Once your site is scaffolded in the background, you can access it using [XM Cloud Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/working-with-pages.html) and start editing the content.

   ![Open Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/a178261c39d5449ba23564430b1671c8?v=66730068)

1. Click on the website, which opens up a WYSIWIG editor where you can begin to edit the content, see components that you can use to edit the site, and switch between languages and your sites (top navigation bar).  
   ![In Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/9fb983d0eeec435797a1115f4ae801df?v=2cce57d4)

## Download and initialize your Next.js app

You will now get your local application running and connected to XM Cloud. You will need to navigate to your GitHub account and download the repository that was [cloned in the previous tutorial](setup-xm-cloud) by the Sitecore XM Cloud Deploy App.
![GitHub - Clone Repository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/239fa0b1ce314ca088bc830ee7a699e8?v=ba0d1b2e)

### Download Repository

1. In your repositories overview, find the newly created `xm-cloud-tutorial-series` repo.
1. Download the repository to your local file system.
1. Open the newly created folder in VS Code, or your text editor of choice.
1. As per the README, run the init script that was delivered with your source code repository and pass the following parameters:
   - `-LicenseXmlPath`: the path to your XM Cloud license file
   - `-AdminPassword`: the admin password of your XM Cloud instance (“b”, in this case).

The init script initializes the `.env` file with everything necessary.
![In Command Line Tool - Run init script](https://sitecorecontenthub.stylelabs.cloud/api/public/content/b27d3da0db2746c69915db32955897d0?v=5a043dea)

<Alert status="info">
  <AlertIcon />
    **A note on passwords:**
    You can use any password and will of course have to use a secure password when dealing with client projects. But for now we use “b”, for tradition’s sake.
</Alert>

## Connect the App to the XM Cloud Instance

As you may remember from the introduction in the previous tutorial, you need to use a [GraphQL endpoint](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/jss-graphql-api.html) to query the content coming from XM Cloud. To connect to the endpoint, a few things need to be configured up front.

1. Navigate to the `.env` file within your solution under src\sxastarter, and copy it.

1. Name it `.env.local`. We do this so that the file is ignored by git by default, so that you do not pass valuable configuration secrets into any repositories.

You can connect using the delivery endpoint of [Edge](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-experience-edge-for-xm.html) or to the preview endpoint of your CM instance.  
![XM Cloud Architecture - Connect to Preview Endpoint](https://sitecorecontenthub.stylelabs.cloud/api/public/content/e703be66170a49268beb6564c4c34df7?v=5184aace)

Any app showing content to the public must connect to the Edge Delivery Endpoint that is scaled and geographically distributed to serve the right performance. Only [published content](https://doc.sitecore.com/xmc/en/users/xm-cloud/publishing-in-xm-cloud.html) will be available here. For development purposes, you will connect to the preview endpoint as you do not need to care about publishing at this point, so created content is instantly available. This will simplify the development workflow. If you want to learn more about endpoints and the edge delivery architecture, check out the docs on [Experience Edge architecture](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html)

Now, you need to set the API key within `.env.local`. The API key should be already available within your XM Cloud instance.

1. Get the Context ID from XM Cloud by:

   - Go to the XM Cloud deploy app
   - Click on the name of the project you created e.g. `XM Cloud Tutorial Series`
   - Copy the value in the `Context ID (Preview)` column

   ![Get Context ID from XM Cloud Deploy](https://sitecorecontenthub.stylelabs.cloud/api/public/content/73c5f907769a4dc6bb03374bb9a2a229?v=7e9d2bee)

1. Paste the value of the Context ID into the `SITECORE_EDGE_CONTEXT_ID` environment variable in the `.env.local` file.
   ![Copy Context ID into .env file](https://sitecorecontenthub.stylelabs.cloud/api/public/content/e29d1bb0c6a448efb63dce32af047d49?v=2edbe4d1)
1. Add the Site name (e.g. `Company dev`) to the `SITECORE_SITE_NAME` environment variable in the `.env.local` file.
   ![Set Site name in .env file](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8fbd4505019948f08bfba8c8be4d4043?v=79a1d301)
1. In your terminal navigate to src/sxastarter (your app folder) and run `npm install`
   ![In Command Line Interface - Run npm install](https://sitecorecontenthub.stylelabs.cloud/api/public/content/5971aecb976d43bf840ba260298c5da1?v=212157b9)
1. Now run `npm run start:connected`
   ![Start the app locally](https://sitecorecontenthub.stylelabs.cloud/api/public/content/2e06a82c1b414cb9b06e6518983f32a4?v=12ee66db)
1. Call your app in the browser: [http://localhost:3000](http://localhost:3000)
   ![Check Website running locally](https://sitecorecontenthub.stylelabs.cloud/api/public/content/358a02664690465289d70fe4c9280eae?v=7c0165d9)

## Verify the connection

Let’s change some content to verify you are in fact connected against the preview endpoint.

1. Navigate back to your site in XM Cloud.
   ![XM Cloud Dashboard - Open Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/4d9aebe26e7c4916bd5c2c982a2bdabd?v=1afb8abf)
1. Click on the tile that says `Company Dev`. This will open Pages new WYSIWYG page editing experience. When opening for the first time, this might take a moment.
1. Change the headline to whatever you like. In this case, I’ll add 'in town' to the homepage tagline.
   ![Pages Editor - Change Headline inline](https://sitecorecontenthub.stylelabs.cloud/api/public/content/05ac5bbde7244c809d987106b9226fd8?v=6b47e626)
1. Your changes are autosaved.
1. Switch back to the browser tab where you are viewing the Next.js app on [http://localhost:3000](http://localhost:3000)
1. Reload the page, and see the changes appear in your local app.  
   ![Validate changes in local running app](https://sitecorecontenthub.stylelabs.cloud/api/public/content/6bf98e5e22fe4c689898fcea34a03b59?v=756f5d1a)

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully set up your dev environment with XM Cloud and created your first site! To learn more about XM Cloud and continue on to next steps, check out our next tutorial in this series.
</Alert>

### Related XM Cloud Documentation

<Row columns={2}>
   <Link title="Getting started with XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
   <Link title="Create websites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/create-websites.html" />
   <Link title="Design webpages" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/design-webpages.html" />
   <Link title="Understanding components in XM Cloud" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/understanding-components-in-xm-cloud.html" />
   <Link title="Working with languages" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/working-with-languages.html" />
   <Link title="Working with Pages" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/working-with-pages.html" />
   <Link title="Publishing in XM Cloud" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/publishing-in-xm-cloud.html" />
   <Link title="JSS GraphQL API" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/jss-graphql-api.html" />
</Row>

### Related XM Cloud Accelerate guidance for Sitecore Partners

<Row columns={2}>
   <Link title="Creating a Site" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site" />
</Row>

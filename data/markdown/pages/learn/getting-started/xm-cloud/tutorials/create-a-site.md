---
title: 'Tutorial: How to Create a Site and Connect your App'
description: 'In this tutorial, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.'
openGraphImage: '/images/getting-started/tutorials/xm-cloud/create-a-site-04.png'
menuOrder: 2
pageType: 'tutorial'
---

<Introduction title="What You are Going to Learn">

In this tutorial, you will become familiar with the first steps in building a website in XM Cloud. You will learn:

- How to create a new Site in your XM Cloud environment
- How to initialize your Next.js application in your local development environment
- How to connect a Next.js application to your hosted XM Cloud environment

</Introduction>

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
   <Image title="XM Cloud Deploy Logs - Finished, Open XM Cloud Dashboard" src="/images/getting-started/tutorials/xm-cloud/create-a-site-01.png" maxW="xl" />
   If you closed that screen already you can also access XM Cloud from the Sitecore Cloud Portal. Click the “Open app” button on the top right.
   <Image title="Sitecore Cloud Portal - Open XM Cloud Dashboard" src="/images/getting-started/tutorials/xm-cloud/create-a-site-02.png" maxW="xl" />
1. Under the Sites tab, click `Create site`.
   <Image title="Create site" src="/images/getting-started/tutorials/xm-cloud/create-a-site-03.png" maxW="xl" />
1. In the **New site** step you will choose a site template. Choose `Basic Site`.
   <Alert status="info">
   <AlertIcon />
   You can choose to create an Empty Site, or a Basic Site that already has some content in it. When creating your own websites outside the scope of this tutorial or as a quick demo, we recommend using the Empty Site, as it requires less cleanup than the Basic Site template. However, for this tutorial, you will select to use the basic site.
   </Alert>

   <Image title="Choose Site Template" src="/images/getting-started/tutorials/xm-cloud/create-a-site-04.png" maxW="xl" />

1. Name the site `Company Dev` and select a pre-configured [language](https://doc.sitecore.com/xmc/en/developers/xm-cloud/working-with-languages.html), in this case, `English`.
   <Image title="Name new Site and Site Collection" src="/images/getting-started/tutorials/xm-cloud/create-a-site-05.png" maxW="xl" />

   <Alert status="info">
      <AlertIcon />
      In the screenshot and in your dialog you will also see another option where you can select an existing Site identifier, or create a new one. This is required when connecting [Sitecore CDP, the Customer Data Platform](https://developers.sitecore.com/customer-data-management/cdp) for embedded analytics and personalization. We will skip that step for now and start the creation process of the site.
   </Alert>

1. Click `Create site`, which will scaffold the website in the background. This will take a few minutes.

   Once your site is scaffolded in the background, you can access it using [XM Cloud Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/working-with-pages.html) and start editing the content.

   <Image title="Open Pages Editor" src="/images/getting-started/tutorials/xm-cloud/create-a-site-06.png" maxW="xl" />

1. Click on the website, which opens up a WYSIWIG editor where you can begin to edit the content, see components that you can use to edit the site, and switch between languages and your sites (top navigation bar).  
   <Image title="In Pages Editor" src="/images/getting-started/tutorials/xm-cloud/create-a-site-07.png" maxW="xl" />

## Download and initialize your Next.js app

You will now get your local application running and connected to XM Cloud. You will need to navigate to your GitHub account and download the repository that was [cloned in the previous tutorial](setup-xm-cloud) by the Sitecore XM Cloud Deploy App.
<Image title="GitHub - Clone Repository" src="/images/getting-started/tutorials/xm-cloud/create-a-site-08.png" maxW="xl" />

### Download Repository

1. In your repositories overview, find the newly created `xm-cloud-tutorial-series` repo.
1. Download the repository to your local file system.
1. Open the newly created folder in VS Code, or your text editor of choice.
1. As per the README, run the init script that was delivered with your source code repository and pass the following parameters:
   - `-LicenseXmlPath`: the path to your XM Cloud license file
   - `-AdminPassword`: the admin password of your XM Cloud instance (“b”, in this case).

The init script initializes the `.env` file with everything necessary.
<Image title="In Command Line Tool - Run init script" src="/images/getting-started/tutorials/xm-cloud/create-a-site-09.png" maxW="xl" />

<Alert status="info">
  <AlertIcon />
    **A note on passwords:**
    You can use any password and will of course have to use a secure password when dealing with client projects. But for now we use “b”, for tradition’s sake.
</Alert>

## Connect the App to the XM Cloud Instance

As you may remember from the introduction in the previous tutorial, you need to use a [GraphQL endpoint](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/jss-graphql-api.html) to query the content coming from XM Cloud. To connect to the endpoint, a few things need to be configured up front.

1. Navigate to the `.env` file within your solution under headapps\nextjs-starter, and copy it.

1. Name it `.env.local`. We do this so that the file is ignored by git by default, so that you do not pass valuable configuration secrets into any repositories.

You can connect using the delivery endpoint of [Edge](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-experience-edge-for-xm.html) or to the preview endpoint of your CM instance.  
<Image title="XM Cloud Architecture - Connect to Preview Endpoint" src="/images/getting-started/tutorials/xm-cloud/create-a-site-10.png" maxW="xl" />

Any app showing content to the public must connect to the Edge Delivery Endpoint that is scaled and geographically distributed to serve the right performance. Only [published content](https://doc.sitecore.com/xmc/en/users/xm-cloud/publishing-in-xm-cloud.html) will be available here. For development purposes, you will connect to the preview endpoint as you do not need to care about publishing at this point, so created content is instantly available. This will simplify the development workflow. If you want to learn more about endpoints and the edge delivery architecture, check out the docs on [Experience Edge architecture](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html)

Now, you need to set the API key within `.env.local`. The API key should be already available within your XM Cloud instance.

1. Get the Context ID from XM Cloud by:

   - Go to the XM Cloud deploy app
   - Click on the name of the project you created e.g. `XM Cloud Tutorial Series`
   - Copy the value in the `Context ID (Preview)` column

   <Image title="Get Context ID from XM Cloud Deploy" src="/images/getting-started/tutorials/xm-cloud/create-a-site-11.png" maxW="xl" />

1. Paste the value of the Context ID into the `SITECORE_EDGE_CONTEXT_ID` environment variable in the `.env.local` file.
   <Image title="Copy Context ID into .env file" src="/images/getting-started/tutorials/xm-cloud/create-a-site-12.png" maxW="xl" />
1. Add the Site name (e.g. `Company dev`) to the `SITECORE_SITE_NAME` environment variable in the `.env.local` file.
   <Image title="Set Site name in .env file" src="/images/getting-started/tutorials/xm-cloud/create-a-site-13.png" maxW="xl" />
1. In your terminal navigate to headapps\nextjs-starter (your app folder) and run `npm install`
   <Image title="In Command Line Interface - Run npm install" src="/images/getting-started/tutorials/xm-cloud/create-a-site-14.png" maxW="xl" />
1. Now run `npm run start:connected`
   <Image title="Start the app locally" src="/images/getting-started/tutorials/xm-cloud/create-a-site-15.png" maxW="xl" />
1. Call your app in the browser: [http://localhost:3000](http://localhost:3000)
   <Image title="Check Website running locally" src="/images/getting-started/tutorials/xm-cloud/create-a-site-16.png" maxW="xl" />

## Verify the connection

Let’s change some content to verify you are in fact connected against the preview endpoint.

1. Navigate back to your site in XM Cloud.
   <Image title="XM Cloud Dashboard - Open Pages Editor" src="/images/getting-started/tutorials/xm-cloud/create-a-site-17.png" maxW="xl" />
1. Click on the tile that says `Company Dev`. This will open Pages new WYSIWYG page editing experience. When opening for the first time, this might take a moment.
1. Change the headline to whatever you like. In this case, I’ll add 'in town' to the homepage tagline.
   <Image title="Pages Editor - Change Headline inline" src="/images/getting-started/tutorials/xm-cloud/create-a-site-18.png" maxW="xl" />
1. Your changes are autosaved.
1. Switch back to the browser tab where you are viewing the Next.js app on [http://localhost:3000](http://localhost:3000)
1. Reload the page, and see the changes appear in your local app.  
   <Image title="Validate changes in local running app" src="/images/getting-started/tutorials/xm-cloud/create-a-site-19.png" maxW="xl" />

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully set up your dev environment with XM Cloud and created your first site! To learn more about XM Cloud and continue on to next steps, check out our next tutorial in this series.
</Alert>

### Related XM Cloud Documentation

- [Getting started with XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html)
- [Create websites](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-websites.html)
- [Design webpages](https://doc.sitecore.com/xmc/en/users/xm-cloud/design-webpages.html)
- [Understanding components in XM Cloud](https://doc.sitecore.com/xmc/en/users/xm-cloud/understanding-components-in-xm-cloud.html)
- [Working with languages](https://doc.sitecore.com/xmc/en/developers/xm-cloud/working-with-languages.html)
- [Working with Pages](https://doc.sitecore.com/xmc/en/users/xm-cloud/working-with-pages.html)
- [Publishing in XM Cloud](https://doc.sitecore.com/xmc/en/users/xm-cloud/publishing-in-xm-cloud.html)
- [JSS GraphQL API](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/jss-graphql-api.html)

### Related XM Cloud Accelerate guidance for Sitecore Partners

- [Creating a Site](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site)

---
title: 'Tutorial: How to Set Up and Utilize XM Cloud'
description: 'In this tutorial, we will go through the steps to complete a sprint zero of setting up XM Cloud.  In addition to learning the basics of XM Cloud, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, we will go through the steps to complete a sprint zero of setting up XM Cloud. In addition to learning the basics of XM Cloud, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.

## Overview

XM Cloud focuses on being a headless, enterprise content and website management system. You can manage XM Cloud via several UIs, and also through APIs and the CLI. For this tutorial, we will focus on the XM Cloud deploy UI for building and launching a site with XM Cloud. ( For more information on APIs with XM Cloud, navigate [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-api.html).)

## Prerequisites

In order to complete the following tutorial, you will need these resouces:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
2. A valid XM Cloud license file.
   <Alert status="info">
   <AlertIcon />
   If you haven't already downloaded a license file, refer to the docs on [downloading your organization's license file from the portal](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-cloud-organization-command.html#the-license-subcommand).
   </Alert>
3. Organization Admin role access or higher in the Sitecore Cloud portal to access XM Cloud Deploy tools to create projects and environments.
4. A GitHub source control account.
5. An IDE such as Visual Studio (VS) Code

## Setup the project and environment

Now, we will setup the project and environment that we will create therein. In the first stage, we will access the cloud portal and create a new _project_. A project is connected to a source code repository, for example, GitHub.

![A GitHub repository is mapped to a project in XM Cloud](https://sitecorecontenthub.stylelabs.cloud/api/public/content/142a8648763a42eda1a210b1488cfda5?v=859d5477)

Each project can have multiple environments. A typical setup is to have one source code repository for one Brand or legal entity, and then have a DEV environment, QA, Staging or Pre Prod, and Production.

![XM Cloud Projects and Environments](https://sitecorecontenthub.stylelabs.cloud/api/public/content/9deae49bb7f5428285baf2ea374fe1ec?v=40ffa388)

We will start with a Dev Environment for now, and create the other environments later.

Let’s get started!

### Log into Sitecore Cloud Portal

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.
2. Access the XM Cloud project and environment management interface by clicking `XM Cloud Deploy`.  
   ![Sitecore Portal - Open XM Cloud Deploy](https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db)

### Create a new Project and Authoring Environment

1. From there, create a new project with the XM Cloud Deploy App by clicking `Create project`.  
   ![Project Overview - Create new Project](https://sitecorecontenthub.stylelabs.cloud/api/public/content/817fa236e3434742817279da7329eca6?v=d1261f63)
2. From here you provide a Project Name e.g. `XM Cloud Tutorial Series` and click the Continue button
   ![Create Project and Environment Step 1 - Provide Project Name](https://sitecorecontenthub.stylelabs.cloud/api/public/content/57cf82679be64a498b9d43659c26e900?v=0bb6544a)
3. Choose whether you want to connect to GitHub or to Azure DevOps. A starter solution will be copied to your connected source code repository as a starting point. For the sake of this tutorial you choose GitHub and press the Continue Button  
   ![Create Project and Environment Step 2 - Choose Source Code Repository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/246d3a6f48d54765be0427179c3e9fd1?v=9240ac99)

<Alert status="info">
  <AlertIcon />
    In the next step you can choose whether you want to start from the XM Cloud template or if you want to use your own code. The XM Cloud template is a starter kit based on Next.js, that already contains a rich set of features and sample implementations. It is best practice to start from the template.
</Alert>

4. Choose a GitHub Account from the dropdown or click on `Connect to a new account` and follow the steps to connect to a different account. Make sure you give rights to create a new repository in your account.
   ![Create Project and Environment Step 3 - Setup Repository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/58034dfd6c90407f89659e3835d609d9?v=7fc739e7)
5. Provide a name for the repository e.g. `xm-cloud-tutorial-series` and click the Continue button.
6. Enter a name for the environment e.g. `DEV`  
   ![Create Project and Environment Step 4 - Provide Environment details](https://sitecorecontenthub.stylelabs.cloud/api/public/content/c891806b1758495c8af79c44088f07e3?v=c7f37143)
7. In the **Production SaaS SLA** section you will specify if this new environment is a production environment or not. Select `No` to make this a non-production environment.
8. Select whether you want to auto deploy on push to the repository. Select “Yes”. This enables the CI/CD pipeline from your main branch. This can be adjusted later.
9. Press the Continue button.
10. On the 5th step review your selections and press the “Start deployment” button
    ![Create Project and Environment Step 5 - Review your selections](https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5cda1bf224c4f99b508fe612e527590?v=6c0f0076)
11. The deployment starts, and provisioning and build run in parallel.  
    ![XM Cloud Deploy Logs - Deployment is running](https://sitecorecontenthub.stylelabs.cloud/api/public/content/72df30b6fd564d90b97ed08988d608b1?v=c2841f9b)

<Alert status="info">
  <AlertIcon />
    **A note on provisioning and build:**  
    The Provisioning sets up all the resources you need to run the XM Cloud instance, while the Build is building the software solution you have cloned to your personal repository. This will take a few minutes. Read on for more information on what is going on 'under the hood' as your project sets up.
</Alert>

## What is provisioned for XM Cloud

So, how does this work? Referencing the figure below, let’s walk through the different bits and pieces of XM Cloud.  
![XM Cloud Architecture](https://sitecorecontenthub.stylelabs.cloud/api/public/content/21cbe922e28b4896b1692be7c85ae6c4?v=4aad3836)

1. XM Cloud contains a Content Management (CM) instance (the violet box on the right) where authors manage their content, layout, and experiences. This is then published to the _Edge_ layer.
2. Edge (yellow box) is a geographically distributed delivery layer. Edge offers a GraphQL endpoint to allow applications to query for the content coming from XM Cloud.
3. Your app connects to Edge to retrieve data and can run with whatever host you are rendering your application on, such as Vercel, Netlify, AWS, Azure, or another vendor.
4. In order to utilize the WYSIWYG editing experience, an internal rendering host, or _editing host_ (green box), is delivered with XM Cloud. This editing host is managed by Sitecore, and runs a Node server that can host any Node-based application.
5. The main way of accessing XM Cloud is through the _Sitecore Cloud Portal_ (solid outlined box, 'Sitecore Cloud'). This GUI allows you to manage and access your different Sitecore Apps and Users. For an in-depth exploration of the Sitecore Cloud Portal, navigate [here](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html).
6. When developing with XM Cloud, you can use the available build and deployment services (purple box). XM Cloud has these services built-in, so that you do not have to think about building or provisioning the XM Cloud instance, it is all done for you. If you have more requirements than currently provided, you can set up your own build and deployment pipeline using the [XM Cloud CLI](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--creating-an-xm-cloud-project-using-the-sitecore-cli.html).

While not pictured in the diagram, the XM Cloud CLI allows you to manage your XM Cloud instance and deploy, instead of using the GUI. You can also serialize content items that represent developer artifacts from your XM cloud instance into your source code repository. To learn more about serialization with Sitecore, navigate [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/serialization-in-sitecore.html).

Once the provisioning and build process are finished, the deployment starts. The moment the deployment is finished, you can start using the new XM Cloud environment. Some actions run in the background to warm up the application.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully connected to XM Cloud and built your first project, that has an environment that is set up and ready to be used. The solution code is ready and connected to a CI/CD pipeline as well. Setting up a CI/CD pipeline in some development scenarios can take days or weeks, but XM Cloud tools help you complete it within minutes here.
</Alert>

## Setup a Site Collection and Site

Now, that the deployment is finished, you will create your first site in XM Cloud.

1. You can access XM Cloud via the XM Cloud Deploy app through the “Go to XM Cloud” button
   ![XM Cloud Deploy Logs - Finished, Open XM Cloud Dashboard](https://sitecorecontenthub.stylelabs.cloud/api/public/content/d61e0711c4044fd7a8f4df56df9feb48?v=f5924a41)
   If you closed that screen already you can also access XM Cloud from the Sitecore Cloud Portal. Click the “Open app” button on the top right.
   ![Sitecore Cloud Portal - Open XM Cloud Dashboard](https://sitecorecontenthub.stylelabs.cloud/api/public/content/ef83f2ef7ff94688b9f84b59f57f98b5?v=8bed26f3)
2. Under the Sites tab, click `Create site`.
   ![Create site](https://sitecorecontenthub.stylelabs.cloud/api/public/content/7feb2d24b3e84117967949d5386fab37?v=c6c49f33)

3. In the **New site** step you will choose a site template. Choose `Basic Site`.
   <Alert status="info">
   <AlertIcon />
   You can choose to create an Empty Site, or a Basic Site that already has some content in it. When creating your own websites outside the scope of this tutorial or as a quick demo, we recommend using the Empty Site, as it requires less cleanup than the Basic Site template. However, for this tutorial, you will select to use the basic site.
   </Alert>

   ![Choose Site Template](https://sitecorecontenthub.stylelabs.cloud/api/public/content/1480ca22c0724a7496c9617b5f65cd6a?v=cf3753f9)

4. Name the site `Company Dev`.  
   ![Name new Site and Site Collection](https://sitecorecontenthub.stylelabs.cloud/api/public/content/41287d8cc01e4dc8b32a4aede67c98c1?v=dc1b7223)

5. Select a pre-configured language, in this case, `English`.

  <Alert status="info">
   <AlertIcon />
   At this time, you can also select an existing Site identifier, or create a new one. This is required when connecting [CDP, the Customer Data Platform](https://developers.sitecore.com/customer-data-management/cdp) of Sitecore for embedded analytics and personalization. We will skip that step for now and start the creation process of the site.
   </Alert>

6. Click `Create site`, which will scaffold the website in the background. This will take a few minutes.

   Once your site is scaffolded in the background, you can access it using XM Cloud Pages and start editing the content.

   ![Open Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/a178261c39d5449ba23564430b1671c8?v=66730068)

7. Click on the website, which opens up a WYSIWIG editor where you can begin to edit the content, see components that you can use to edit the site, and switch between languages and your sites (top navigation bar).  
   ![In Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/9fb983d0eeec435797a1115f4ae801df?v=2cce57d4)

## Working locally

Navigate to your GitHub account and download the repository that was cloned earlier by the Sitecore XM Cloud Deploy App.
![GitHub - Clone Repository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/239fa0b1ce314ca088bc830ee7a699e8?v=ba0d1b2e)

### Download Repository

1. In your repositories overview, find the newly created `xm-cloud-tutorial-series` repo.
2. Download the repository to your local file system.
3. Open the newly created folder in VS Code, or your text editor of choice.
4. As per the README, run the init script that was delivered with your source code repository and pass the following parameters:
   - `-LicenseXmlPath`: the path to your XM Cloud license file
   - `-AdminPassword`: the admin password of your XM Cloud instance (“b”, in this case).

The init script initializes the `.env` file with everything necessary.
![In Command Line Tool - Run init script](https://sitecorecontenthub.stylelabs.cloud/api/public/content/b27d3da0db2746c69915db32955897d0?v=5a043dea)

<Alert status="info">
  <AlertIcon />
    **A note on passwords:**
    You can use any password and will of course have to use a secure password when dealing with client projects. But for now we use “b”, for tradition’s sake.
</Alert>

### Connect the App to the XM Cloud Instance

As you may remember from the introduction, you need to use a GraphQL endpoint to query the content coming from XM Cloud. To connect a few things need to be configured upfront.

1. Navigate to the `.env` file within your solution under src\sxastarter, and copy it.

2. Name it `.env.local`. We do this so that the file is ignored by git by default, so that you do not pass valuable configuration secrets into any repositories.

You can connect using the delivery endpoint of Edge or to the preview endpoint of your CM instance.  
![XM Cloud Architecture - Connect to Preview Endpoint](https://sitecorecontenthub.stylelabs.cloud/api/public/content/e703be66170a49268beb6564c4c34df7?v=5184aace)

Any app showing content to the public must connect to the Edge Delivery Endpoint that is scaled and geographically distributed to serve the right performance. Only published content will be available here. For development purposes, you will connect to the preview endpoint as you do not need to care about publishing at this point, so created content is instantly available. This will simplify the development workflow. If you want to learn more about endpoints and the edge delivery architecture, check out the docs on [Experience Edge architecture](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html)

Now, you need to set the API key within `.env.local`. The API key should be already available within your XM Cloud instance.

3. Get the Context ID from XM Cloud by:

   - Go to the XM Cloud deploy app
   - Click on the name of the project you created e.g. `XM Cloud Tutorial Series`
   - Copy the value in the `Context ID (Preview)` column

   ![Get Context ID from XM Cloud Deploy](https://sitecorecontenthub.stylelabs.cloud/api/public/content/73c5f907769a4dc6bb03374bb9a2a229?v=7e9d2bee)

4. Paste the value of the Context ID into the `SITECORE_EDGE_CONTEXT_ID` environment variable in the `.env.local` file.
   ![Copy Context ID into .env file](https://sitecorecontenthub.stylelabs.cloud/api/public/content/e29d1bb0c6a448efb63dce32af047d49?v=2edbe4d1)
5. Add the Site name (e.g. `Company dev`) to the `SITECORE_SITE_NAME` environment variable in the `.env.local` file.
   ![Set Site name in .env file](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8fbd4505019948f08bfba8c8be4d4043?v=79a1d301)
6. In your terminal navigate to src/sxastarter (your app folder) and run `npm install`
   ![In Command Line Interface - Run npm install](https://sitecorecontenthub.stylelabs.cloud/api/public/content/5971aecb976d43bf840ba260298c5da1?v=212157b9)
7. Now run `npm run start:connected`
   ![Start the app locally](https://sitecorecontenthub.stylelabs.cloud/api/public/content/2e06a82c1b414cb9b06e6518983f32a4?v=12ee66db)
8. Call your app in the browser: http://localhost:3000
   ![Check Website running locally](https://sitecorecontenthub.stylelabs.cloud/api/public/content/358a02664690465289d70fe4c9280eae?v=7c0165d9)

#### Verifying the connection

Let’s change some content to verify you are in fact connected against the preview endpoint.

1. Navigate back to your site in XM Cloud.
   ![XM Cloud Dashboard - Open Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/4d9aebe26e7c4916bd5c2c982a2bdabd?v=1afb8abf)
2. Click on the tile that says `Company Dev`. This will open Pages new WYSIWYG page editing experience. When opening for the first time, this might take a moment.
3. Change the headline to whatever you like. In this case, I’ll add 'in town' to the homepage tagline.
   ![Pages Editor - Change Headline inline](https://sitecorecontenthub.stylelabs.cloud/api/public/content/05ac5bbde7244c809d987106b9226fd8?v=6b47e626)
4. Your changes are autosaved.
5. Switch back to the browser tab where you are viewing the Next.js app on localhost:3000
6. Reload the page, and see the changes appear in your local app.  
   ![Validate changes in local running app](https://sitecorecontenthub.stylelabs.cloud/api/public/content/6bf98e5e22fe4c689898fcea34a03b59?v=756f5d1a)

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully set up your dev environment with XM Cloud and created your first webpage! To learn more about XM Cloud and continue on to next steps, check out our next tutorial in this series!
</Alert>

### Related XM Cloud Documentation

<Row columns={2}>
   <Link title="Getting started with XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
   <Link title="Introduction to the Sitecore Cloud Portal" link="https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html" />
   <Link title="XM Cloud Deploy app" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html" />
   <Link title="Manage an XM Cloud environment" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-an-environment.html" />
   <Link title="XM Cloud Deploy API" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-api.html" />
   <Link title="Creating an XM Cloud Project using the Sitecore CLI" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--creating-an-xm-cloud-project-using-the-sitecore-cli.html" />
   <Link title="Serialization in XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/serialization-in-sitecore.html" />
   <Link title="Experience Edge architecture" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html" />
</Row>

### Related XM Cloud Accelerate guidance for Sitecore Partners

<Row columns={2}>
   <Link title="Project Solution Setup" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup" />
   <Link title="Creating a Site" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site" />
</Row>

---
title: 'Tutorial: How to Set Up XM Cloud'
description: 'In this tutorial, we will go through the steps to learn the basics of XM Cloud and complete a sprint zero of setting up the XM Cloud projects and environments.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
menuOrder: 1
---

<Introduction title="What You are Going to Learn">
In this tutorial, we will go through the steps to learn the basics of XM Cloud and complete a sprint zero of setting up the XM Cloud projects and environments. You will learn:

- How to login to the Sitecore Cloud Portal
- How to access the XM Cloud Deploy application
- How to create a new XM Cloud project using the XM Cloud Deploy application
- How to create a new XM Cloud environment for a Project"
  </Introduction>

## Overview

XM Cloud focuses on being a headless, enterprise content and website management system. You can manage XM Cloud via several UIs, and also through APIs and the [CLI](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-cli-cloud-command.html). For this tutorial, we will focus on the XM Cloud deploy UI for creating new XM Cloud projects and environments.

For more information on APIs with XM Cloud, navigate [to the documentation on the Deploy API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-api.html).

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. Organization Admin [role](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/roles.html) access or higher in the Sitecore Cloud portal to access [XM Cloud Deploy tools](https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploying-xm-cloud.html) to create projects and environments.
1. A GitHub source control account.

## Setup the project and environment

Now, we will setup the project and environment that we will create therein. In the first stage, we will access the cloud portal and create a new _project_. A project is connected to a source code repository, for example, GitHub.

<Image title="A GitHub repository is mapped to a project in XM Cloud" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/142a8648763a42eda1a210b1488cfda5?v=859d5477" maxW="xl" />

Each project can have multiple environments. A typical setup is to have one source code repository for one Brand or legal entity, and then have a DEV environment, QA, Staging or Pre Prod, and Production.

<Image title="XM Cloud Projects and Environments" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/9deae49bb7f5428285baf2ea374fe1ec?v=40ffa388" maxW="xl" />

We will start with a Dev Environment for now, and create the other environments later.

Let’s get started!

### Log into Sitecore Cloud Portal

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.
2. Access the XM Cloud project and environment management interface by clicking `XM Cloud Deploy`.  
   <Image title="Sitecore Portal - Open XM Cloud Deploy" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db" maxW="xl" />

### Create a new Project and Authoring Environment

1. From there, create a new project with the XM Cloud Deploy App by clicking `Create project`.  
   <Image title="Project Overview - Create new Project" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/817fa236e3434742817279da7329eca6?v=d1261f63" maxW="xl" />
1. From here you provide a Project Name e.g. `XM Cloud Tutorial Series` and click the Continue button
   <Image title="Create Project and Environment Step 1 - Provide Project Name" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/57cf82679be64a498b9d43659c26e900?v=0bb6544a" maxW="xl" />
1. Choose whether you want to connect to GitHub or to Azure DevOps. A starter solution will be copied to your connected source code repository as a starting point. For the sake of this tutorial you choose GitHub and press the Continue Button  
   <Image title="Create Project and Environment Step 2 - Choose Source Code Repository" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/246d3a6f48d54765be0427179c3e9fd1?v=9240ac99" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
      In the next step you can choose whether you want to start from the XM Cloud template or if you want to use your own code. The XM Cloud template is a starter kit based on Next.js, that already contains a rich set of features and sample implementations. It is best practice to start from the template.
   </Alert>

1. Choose a GitHub Account from the dropdown or click on `Connect to a new account` and follow the steps to connect to a different account. Make sure you give rights to create a new repository in your account.
   ![Create Project and Environment Step 3 - Setup Repository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/58034dfd6c90407f89659e3835d609d9?v=7fc739e7)

   <Alert status="info">
      <AlertIcon />
      Not every GitHub account can or should be used to create a source control connection. For account requirements and recommendation on creating a project with a GitHub source control connection, see [Creating a source control connection with GitHub](https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-connections-for-source-control-and-hosting-providers.html#creating-a-source-control-connection-with-github).

   </Alert>

1. Provide a name for the repository e.g. `xm-cloud-tutorial-series` and click the Continue button.
1. Enter a name for the environment e.g. `DEV`  
   <Image title="Create Project and Environment Step 4 - Provide Environment details" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c891806b1758495c8af79c44088f07e3?v=c7f37143" maxW="xl" />
1. In the **Production SaaS SLA** section you will specify if this new environment is a production environment or not. Select `No` to make this a non-production environment.
1. Select whether you want to auto deploy on push to the repository. Select “Yes”. This enables the CI/CD pipeline from your main branch. This can be adjusted later.
1. Press the Continue button.
1. On the 5th step review your selections and press the “Start deployment” button
   <Image title="Create Project and Environment Step 5 - Review your selections" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5cda1bf224c4f99b508fe612e527590?v=6c0f0076" maxW="xl" />

The deployment starts, and provisioning and build run in parallel.  
 <Image title="XM Cloud Deploy Logs - Deployment is running" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/72df30b6fd564d90b97ed08988d608b1?v=c2841f9b" maxW="xl" />

<Alert status="info">
  <AlertIcon />
    **A note on provisioning and build:**  
    The Provisioning sets up all the resources you need to run the XM Cloud instance, while the Build is building the software solution you have cloned to your personal repository. This will take a few minutes. Read on for more information on what is going on 'under the hood' as your project sets up.
</Alert>

## What is provisioned for XM Cloud

So, how does this work? Referencing the figure below, let’s walk through the different bits and pieces of XM Cloud.  
<Image title="XM Cloud Architecture" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/21cbe922e28b4896b1692be7c85ae6c4?v=4aad3836" maxW="full" disableModal />

1. XM Cloud contains a Content Management (CM) instance (the violet box on the right) where authors manage their content, layout, and experiences. This is then published to the _Edge_ layer.
1. [Edge](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-experience-edge-for-xm.html) (yellow box) is a geographically distributed delivery layer. Edge offers a GraphQL endpoint to allow applications to query for the content coming from XM Cloud.
1. Your app connects to Edge to retrieve data and can run with whatever host you are rendering your application on, such as Vercel, Netlify, AWS, Azure, or another vendor.
1. In order to utilize the WYSIWYG editing experience, an internal rendering host, or _editing host_ (green box), is delivered with XM Cloud. This editing host is managed by Sitecore, and runs a Node server that can host any Node-based application.
1. The main way of accessing XM Cloud is through the _Sitecore Cloud Portal_ (solid outlined box, 'Sitecore Cloud'). This GUI allows you to manage and access your different Sitecore Apps and Users. For an in-depth exploration of the Sitecore Cloud Portal, navigate [here](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html).
1. When developing with XM Cloud, you can use the available build and deployment services (purple box). XM Cloud has these services built-in, so that you do not have to think about building or provisioning the XM Cloud instance, it is all done for you. If you have more requirements than currently provided, you can set up your own build and deployment pipeline using the [XM Cloud CLI](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--creating-an-xm-cloud-project-using-the-sitecore-cli.html).

While not pictured in the diagram, the XM Cloud CLI allows you to manage your XM Cloud instance and deploy, instead of using the GUI. You can also serialize content items that represent developer artifacts from your XM cloud instance into your source code repository. To learn more about serialization with Sitecore, navigate [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/serialization-in-sitecore.html).

Once the provisioning and build process are finished, the deployment starts. The moment the deployment is finished, you can start using the new XM Cloud environment. Some actions run in the background to warm up the application.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully deployed your first XM Cloud project that has an environment that is set up and ready to be used. The solution code is ready and connected to a CI/CD pipeline as well. Setting up a CI/CD pipeline in some development scenarios can take days or weeks but XM Cloud tools help you complete it within minutes here.
</Alert>

### Related XM Cloud Documentation

<Row columns={2}>
   <Link title="Getting started with XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
   <Link title="Introduction to the Sitecore Cloud Portal" link="https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html" />
   <Link title="Sitecore Cloud Portal roles" link="https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/roles.html" />
   <Link title="Deploying XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploying-xm-cloud.html" />
   <Link title="XM Cloud Deploy app" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html" />
   <Link title="Manage an XM Cloud environment" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-an-environment.html" />
   <Link title="XM Cloud Deploy API" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-api.html" />
   <Link title="Creating an XM Cloud Project using the Sitecore CLI" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--creating-an-xm-cloud-project-using-the-sitecore-cli.html" />
   <Link title="Serialization in XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/serialization-in-sitecore.html" />
   <Link title="Experience Edge architecture" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html" />
   <Link title="Creating a source control connection with GitHub" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-connections-for-source-control-and-hosting-providers.html#creating-a-source-control-connection-with-github" />
</Row>

### Related XM Cloud Accelerate guidance for Sitecore Partners

<Row columns={2}>
   <Link title="Project Solution Setup" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup" />
</Row>

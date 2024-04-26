---
title: 'Setup the project'
description: 'In this tutorial, we will go through the steps to complete a sprint zero of setting up XM Cloud.  In addition to learning the basics of XM Cloud, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Setup the project and environment

Now, we will setup the project and environment that we will create therein. In the first stage, we will access the cloud portal and create a new _project_. A project is connected to a source code repository, for example, GitHub.

<Image title="A GitHub repository is mapped to a project in XM Cloud" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/142a8648763a42eda1a210b1488cfda5?v=859d5477" maxW="fit-content" disableModal />

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
2. From here you provide a Project Name e.g. `XM Cloud Tutorial Series` and click the Continue button
   <Image title="Create Project and Environment Step 1 - Provide Project Name" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/57cf82679be64a498b9d43659c26e900?v=0bb6544a" maxW="xl" />
3. Choose whether you want to connect to GitHub or to Azure DevOps. A starter solution will be copied to your connected source code repository as a starting point. For the sake of this tutorial you choose GitHub and press the Continue Button  
   <Image title="Create Project and Environment Step 2 - Choose Source Code Repository" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/246d3a6f48d54765be0427179c3e9fd1?v=9240ac99" maxW="xl" />

<Alert status="info">
  <AlertIcon />
    In the next step you can choose whether you want to start from the XM Cloud template or if you want to use your own code. The XM Cloud template is a starter kit based on Next.js, that already contains a rich set of features and sample implementations. It is best practice to start from the template.
</Alert>

4. Choose a GitHub Account from the dropdown or click on `Connect to a new account` and follow the steps to connect to a different account. Make sure you give rights to create a new repository in your account.
   <Image title="Create Project and Environment Step 3 - Setup Repository" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/58034dfd6c90407f89659e3835d609d9?v=7fc739e7" maxW="xl" />
5. Provide a name for the repository e.g. `xm-cloud-tutorial-series` and click the Continue button.
6. Enter a name for the environment e.g. `DEV`  
   <Image title="Create Project and Environment Step 4 - Provide Environment details" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c891806b1758495c8af79c44088f07e3?v=c7f37143" maxW="xl" />
7. In the **Production SaaS SLA** section you will specify if this new environment is a production environment or not. Select `No` to make this a non-production environment.
8. Select whether you want to auto deploy on push to the repository. Select “Yes”. This enables the CI/CD pipeline from your main branch. This can be adjusted later.
9. Press the Continue button.
10. On the 5th step review your selections and press the “Start deployment” button
    <Image title="Create Project and Environment Step 5 - Review your selections" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5cda1bf224c4f99b508fe612e527590?v=6c0f0076" maxW="xl" />
11. The deployment starts, and provisioning and build run in parallel.
    <Image title="XM Cloud Deploy Logs - Deployment is running" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/72df30b6fd564d90b97ed08988d608b1?v=c2841f9b" maxW="xl" />

<Alert status="info">
  <AlertIcon />
    **A note on provisioning and build:**  
    The Provisioning sets up all the resources you need to run the XM Cloud instance, while the Build is building the software solution you have cloned to your personal repository. This will take a few minutes. Read on for more information on what is going on 'under the hood' as your project sets up.
</Alert>
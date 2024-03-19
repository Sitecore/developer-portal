---
title: 'Sprint Zero: How to Set Up and Utilize XM Cloud'
description: 'In this blog, we will go through the steps to complete a sprint zero of setting up XM Cloud.  In addition to learning the basics of XM Cloud, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.'
promoAfter: ['learning-essentials']
openGraphImage: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/1915549492604a64864578fe51d2a597?v=244f9e64'
---

## Introduction - What You are Going to Learn 

In this blog, we will go through the steps to complete a sprint zero of setting up XM Cloud.  In addition to learning the basics of XM Cloud, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.  

## Overview  

XM Cloud focuses on being a headless, enterprise content and website management system.  You can manage XM Cloud via several UIs, and also through APIs and the CLI. For this blog, we will focus on the XM Cloud deploy UI for building and launching a site with XM Cloud. ( For more information on APIs with XM Cloud, navigate [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-api.html).) 
 
## Setup the project and environment  

Now, we will setup the project and environment that we will create therein. In the first stage, we will access the cloud portal and create a new *project*. A project is connected to a source code repository, for example, GitHub.  

![A GitHub repository is mapped to a project in XM Cloud](https://sitecorecontenthub.stylelabs.cloud/api/public/content/142a8648763a42eda1a210b1488cfda5?v=859d5477) 

Each project can have multiple environments. A typical setup is to have one source code repository for one Brand or legal entity, and then have a DEV environment, QA, Staging or Pre Prod, and Production. 

![XM Cloud Projects and Environments](https://sitecorecontenthub.stylelabs.cloud/api/public/content/9deae49bb7f5428285baf2ea374fe1ec?v=40ffa388)
 
We will start with a Dev Environment for now, and create the other environments later. Let’s get back to project creation! 


Let’s get started! 

### Log into Sitecore Cloud Portal 

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.   
2. Access the XM Cloud project and environment management interface by clicking `XM Cloud Deploy`.  
![Sitecore Portal - Open XM Cloud Deploy](https://sitecorecontenthub.stylelabs.cloud/api/public/content/42edc85bc7bd41e2914f29b7b260496b?v=94261954)

### Create a new Project and Authoring Environment 

1. From there, create a new project with the XM Cloud Deploy App by clicking `Create project`.  
![Project Overview - Create new Project](https://sitecorecontenthub.stylelabs.cloud/api/public/content/2215cae974524bcb820ce28fd7fe3c51?v=df12ee70)  
2. From here you provide a Project Name e.g.”XM Cloud Tutorial Series” and click the Continue button 
![Create Project and Environment Step 1 - Provide Project Name](https://sitecorecontenthub.stylelabs.cloud/api/public/content/95a7fa3d5e7e4f6997494cae9a5ac70e?v=3678a3bd) 
3. Choose whether you want Connect to GitHub or to Azure DevOps. A starter solution will be copied to your connected source code repository as a starting point. For the sake of this tutorial you choose GitHub and press the Continue Button   
![Create Project and Environment Step 2 - Choose Source Code Repository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/27f501fc072d4a23b2a89a64b6e936f5?v=eafd675a) 

In step 3 you can choose whether you want to start from the XM Cloud template or if you want to use your own code. The XM Cloud template is a starter kit based on Next.js, that contains already a rich set of features and sample implementations. It is best practice to start from the template.   

4. Choose a GitHub Account from the dropdown or Connect to a new account by following the steps. Make sure you give rights to create a new repository in your account. 
![Create Project and Environment Step 3 - Setup Respository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/3adbe7059311434d8b7900d691990e22?v=08e2526a) 
5. Provide a name for the repository e.g.xm-cloud-tutorial-series and click the Continue button. 
6. Enter a name for the environment e.g. DEV  
![Create Project and Environment Step 4 - Provide Environment details](https://sitecorecontenthub.stylelabs.cloud/api/public/content/7f69f87c697148afabc6e55526588d4f?v=751f0044) 
7. Select whether this is a production environment or not. You select “No” 
8. Select whether you want to autodeploy on push to the repository. Select “Yes”. This enables the CI/CD pipeline from your main branch. This can be adjusted later. 
9. Press the Continue button. 
10. On the 5th step review your selections and press the “Start deployment” button
![Create Project and Environment Step 5 - Review your selections](https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5cda1bf224c4f99b508fe612e527590?v=6c0f0076) 
11. The deployment starts, and provisioning and build run in parallel.  
![XM Cloud Deploy Logs - Deployment is running](https://sitecorecontenthub.stylelabs.cloud/api/public/content/81ff5cf671f24d948aeb0dfb6d769411?v=4abce4be) 
**A note on provisioning and build:**  
*The Provisioning sets up all the resources you need to run the XM Cloud instance, while the Build is building the software solution you have cloned to your personal repository. This will take a few minutes. Read on for more information on what is going on 'under the hood' as your project sets up.*  



## What is provisioned for XM Cloud 

So, how does this work? Referencing the figure below, let’s walk through the different bits and pieces of XM Cloud.  
![XM Cloud Architecture](https://sitecorecontenthub.stylelabs.cloud/api/public/content/21cbe922e28b4896b1692be7c85ae6c4?v=c1ed41cb) 

 
To begin, XM Cloud contains a Content Management instance (CM / purple box) that publishes content to a geographically distributed delivery layer called *Edge* (yellow box). Edge offers a GraphQL endpoint to then query for the content coming from XM Cloud. Your app is typically connected with, and can run with whatever host you are rendering your front end on, such as Vercel, Netlify, AWS, Azure, or another vendor.  


In order to utilize the WYSIWYG editing experience, an internal rendering host, or *editing host* (green box), is delivered with XM Cloud. This editing host is managed by Sitecore, and runs a Node server that can host any Node-based application.  

The main way of accessing XM Cloud is through the *Sitecore Cloud Portal* (solid outlined box, 'Sitecore Cloud').  This GUI allows you to manage and access your different Sitecore Apps and Users. For an in-depth exploration of the Sitecore Cloud Portal, navigate [here](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html).  

When developing with XM Cloud, you can use the available build and deployment services (purple box). XM Cloud has these services built-in, so that you do not have to think about building or provisioning the XM Cloud instance, it is all done for you.  If you have more requirements than currently provided, you can set up your own build and deployment pipeline using the [XM Cloud CLI](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--creating-an-xm-cloud-project-using-the-sitecore-cli.html).  

Lastly, the XM Cloud CLI allows you to manage your XM Cloud instance and deploy, instead of using the GUI. You can also serialize content items that represent developer artifacts from your XM cloud instance into your source code repository. To learn more about serialization with Sitecore, navigate [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/serialization-in-sitecore.html). 

 Once the provisioning and  build process are finished, the deployment starts. The moment the deployment is finished, you can start using the new XM Cloud environment. Some actions run in the background to warm up the application..  

**Congratulations!** You have successfully connected to XM Cloud and built your first project, that has an environment that is set up and ready to be used. The solution code is ready and connected to a CI/CD pipeline as well – these steps that can take days or weeks are completed within minutes here.  

## Setup a Site Collection and Site  

Now, that the deployment is finished, you will create your first site in XM Cloud.  

1. You can access XM Cloud via the XM Cloud Deploy app through the “Go to XM Cloud” button 
![XM Cloud Deploy Logs - Finished, Open XM Cloud Dashboard](https://sitecorecontenthub.stylelabs.cloud/api/public/content/51576832a2594fde8dd0fb7f86fbdfd1?v=59c586b8) 
If you closed that screen already you can also access XM Cloud from the Sitecore Cloud Portal. Click the “Open app” button on the top right. 
![Sitecore Cloud Portal - Open XM Cloud Dashboard](https://sitecorecontenthub.stylelabs.cloud/api/public/content/ef83f2ef7ff94688b9f84b59f57f98b5?v=8bed26f3) 
2. Under the sites tab, click create site. 
![Create new Site](https://sitecorecontenthub.stylelabs.cloud/api/public/content/08c2c56cb94c4ce8969c691a8b6ff4d3?v=c79d9844) 
Here, you can choose to create an empty site, or a basic site that already has some content in it.  

Note: when creating your own websites outside the scope of this blog or as a quick demo, we recommend using the empty site, as it requires less cleanup than the basic site. However, for this blog, you will select to use the basic site.   
![Choose Site Template](https://sitecorecontenthub.stylelabs.cloud/api/public/content/1480ca22c0724a7496c9617b5f65cd6a?v=cf3753f9) 

3. Name the site `Company DEV`.  
![Name new Site and Site Collection](https://sitecorecontenthub.stylelabs.cloud/api/public/content/1dc9460c15fd452681187485fae6fe37?v=8feccf45) 

4. Select a pre-configured language, in this case, English.  

At this time, you can also select an existing Site identifier, or create a new one. This is required when connecting [CDP, the Customer Data Platform](https://developers.sitecore.com/customer-data-management/cdp) of Sitecore for embedded analytics and personalization.  

Now, let’s start the creation process of the site.  

5. Click `create website`, which will scaffold the website in the background. This will take a few minutes.  

Once your site is scaffolded in the background, you can access it using XM Cloud Pages and start editing the content. 

![Open Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/6438c1971da24b8f8564e3e48335d985?v=c5f57f17) 
 
6. Click on the website, which opens up a WSYWIG editor where you can begin to edit the content, see components that you can use to edit the site, and switch between languages and your sites (top nav bar).   
![In Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/9fb983d0eeec435797a1115f4ae801df?v=2cce57d4) 
 

## Working locally  

Navigate to your GitHub account and download the repository that was cloned earlier by the Sitecore XM Cloud Deploy App. 
![GitHub - Clone Repository](https://sitecorecontenthub.stylelabs.cloud/api/public/content/239fa0b1ce314ca088bc830ee7a699e8?v=ba0d1b2e)

### Download Repository

1. In your repositories overview, find the newly created xm-cloud-tutorial-series repo.  
2. Download the repository to your local file system using the GitHub CLI. Now, open the newly created folder in VS Code, or your text editor of choice.  
3. As per the README, run the init script that was delivered with your source code repository passing the path to your XM Cloud license file, and the admin password of your XM Cloud instance (“b”, in this case). The init script initializes the .env file with everything necessary.  
![In Command Line Tool - Run init script](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8cb688885bc74cf9a3b44468dd58ff57?v=0ca77d8f) 
 
 
*A note on passwords:  
You can use any password and will of course have to use a secure password when dealing with client projects.  But for now we use “b”, for tradition’s sake. * 

### Connect the App to the XM Cloud Instance  

As you may remember from the introduction, you need to use a GraphQL endpoint to query the content coming from XM Cloud. To connect a few things need to be configured upfront.

1. Navigate to the .env file within your solution under src\sxastarter, and copy it.  

2. Name it .env.local. We do this so that the file is ignored by git by default, so that you do not pass valuable configuration secrets into any repositories.  
 
You can connect using the delivery endpoint of Edge or to the preview endpoint of your CM instance.   
![XM Cloud Architecture - Connect to Preview Endpoint](https://sitecorecontenthub.stylelabs.cloud/api/public/content/e703be66170a49268beb6564c4c34df7?v=5184aace) 

Any app showing content to the public must connect to the Edge Delivery Endpoint that is scaled and geographically distributed to serve the right performance. Only published content will be available here. For development purposes, you will connect to the preview endpoint as you do not need to care about publishing at this point, so created content is instantly available. This will simplify the development workflow.    
 

Now, you need to set the API key within .env.local. The API key should be already available within your XM Cloud instance.  
 
3. Now you need to set the Context ID in the .env.local file. Therefore  
 * Go to the XM Cloud deploy app 
 * Click on the name of the project you created e.g. XM Cloud Tutorial Series 
 * Copy the Context ID (Preview) 	 
![Get Context ID from XM Cloud Deploy](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8ecc65168a504cc188ee84cd8951244b?v=a04033a5) 
4. Add the Context ID to the `.env.local` file 
![Copy Context ID into .env file](https://sitecorecontenthub.stylelabs.cloud/api/public/content/e29d1bb0c6a448efb63dce32af047d49?v=2edbe4d1) 
5. Add the Sitename to the `.env.local` which should be “Company Dev”
![Set Site Name in .env file](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8fbd4505019948f08bfba8c8be4d4043?v=79a1d301) 
6. In your terminal navigate to src/sxastarter (your app folder) and run `npm install`
![In Command Line Interface - Run npm install](https://sitecorecontenthub.stylelabs.cloud/api/public/content/38c87be1d50c4b40abab26556102c4f6?v=474160b6) 
7. Now run npm run start:connected
![Start the app locally](https://sitecorecontenthub.stylelabs.cloud/api/public/content/ad26063be71c4ae6b9e62e2579948db3?v=1a82e9cc) 
8. Call your app in the browser http://localhost:3000
![Check Website running locally](https://sitecorecontenthub.stylelabs.cloud/api/public/content/358a02664690465289d70fe4c9280eae?v=7c0165d9) 
 
#### Verifying the connection  

 

Let’s change some content to verify you are in fact connected against the preview endpoint. 
1. Navigate back to your site in XM Cloud. 
![XM Cloud Dashboard - Open Pages Editor](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8da9bc8363914bbda2b8b4a67e0cd31e?v=00d2e820) 
2. Click on the tile that says Company Dev. This will open Pages new WYSIWYG Page Editing experience. When opening for the first time, this might take a while.  
3. Change the headline to whatever you like. In this case, I’ll add 'in town' to the homepage tagline. 
![Pages Editor - Change Headline inline](https://sitecorecontenthub.stylelabs.cloud/api/public/content/05ac5bbde7244c809d987106b9226fd8?v=6b47e626) 
4. Your changes are autosaved.  
5. Switch back to the browser tab where you are viewing the Next.js app on localhost:3000 
6. Reload the page, and see the changes appear in your local app.  
![Validate changes in local running app](https://sitecorecontenthub.stylelabs.cloud/api/public/content/6bf98e5e22fe4c689898fcea34a03b59?v=756f5d1a) 

**Congratulations!** You have successfully set up your dev environment with XM Cloud and created your first webpage!  To learn more about XM Cloud and continue on to next steps, check out our next blog post in this series!
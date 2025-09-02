---
product: ['marketplace']
title: 'Configure and Install a custom marketplace app'
description: 'Learn how to take your custom Marketplace app from development to deployment. This guide walks you through the final steps—registering your app in the Sitecore Cloud Portal, selecting extension points, configuring API access, and making it available to your organization.'
promoAfter: ['learning-essentials']
openGraphImage: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/126130ee2f7e40c79f3496595341e587?v=d568e138'
---

## Provision a deployed custom app

In order to register your app with XM Cloud you need to deploy your app to a hosting provider first. If you want to only run it locally refer to the next chapter about running locally.

### Deploy your app to a hosting provider
#### Pre-Requisites:
-	Ideally you have your code available in a source code repository like [GitHub](https://www.github.com).
-	You have an account with a hosting provider like [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), [Azure](https://azure.microsoft.com/) etc.

#### Build and Deploy in Vercel
##### 1. Create a new Project
In Vercel, hit the Add new Button and create a new Project. 
 ![Create a new Project in Vercel](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/a8f39f6c48894526b26a59e815d0c4e7?v=7e4e9701)

##### 2. Import your Marketplace app repository
Find the app you want to connect with your project. New repos are listed on top. You can also search in your different connected repositories. 

 ![In Vercel, import Git repository](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/ee0e617d6fb54c8d90a0a947f854c640?v=9f6221d2)

##### 3. Select the root directory and deploy
The root directory is marked with a Next.Js logo. 
This will also set the Framework preset.
There is no need for Build and Output Settings changes or Environment Variables at this point.

 ![In Vercel set the root directory and the framework preset](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/8b8f271789bc4989b88fc24315da94b6?v=e7432434)



##### 4. Deployment successful
![Vercel Project Build and deployed successfully ](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/126130ee2f7e40c79f3496595341e587?v=d568e138)

### Register app in Cloud Portal

### 1. Enter Developer Studio in Cloud Portal 
Accept Terms of use if not yet done
 ![Sitecore Marketplace Developer Studio - accept terms and conditions](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/be30bd5fa10c4432b91046f71cce84a7?v=2cf6eeb4)

#### 2. Create app
![Sitecore Marketplace Developer Studio - Create App](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/92bd92cb69564d548c18c3b78462e658?v=40c34943)

#### 3. Set name and select app type
Currently only Custom Apps are available. Public apps will be coming soon.
![Sitecore Marketplace Developer Studio - Set name and type of app](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/70442747576943729d66e4d0ef94a01e?v=ce78e7d6)

#### 4. Your app is created
![Sitecore Marketplace Developer Studio - App successfully created](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/a0c964155f544aa3956358bd618cb7f2?v=9be993c6)

#### 5. Configure app
In the app configuration you can set everything to connect to the right route within the app, set what extension points this app is meant to show in and set an app image. 
As this app already provides examples for all extension points we could configure all of them. 

##### 5.1 Select Extension Point and Route URL
I selected the Standalone extension point for now. This will show the app directly in the Cloud portal. Of course this needs to be selected based on your requirements.

Additionally, I set the route to `/standalone-extension` as the page, our marketplace app is referring to is located in that route. 

You can also define a display name if you want to configure the same app with different URLs etc to connect your local running app (see “Local” chapter).

![Sitecore Marketplace - Configure App - select extension point and set route](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/d2da3c36914d4b34943ca023f2b5e615?v=cfd5dc08)
 
As this app provides all extension point examples you can also configure the other options.

|  | value |
| ----|-------|
| Full screen - Route URL: | /fullscreen-extension |
| Dashboard widgets - Router URL: | /dashboard-widget-extension |
| Page context panel - Router URL: | /page-contextpanel-extension|
| Custom field - Router URL: | /custom-field-extension|

Please Note: When using the extension point **Custom Field** you also need to add the custom field to the content template (Content Model) as type "Marketplace Type -> Plugin". 

[Read more in the Sitecore documentation](https://doc.sitecore.com/mp/en/developers/marketplace/enable-a-custom-field-in-the-xm-cloud-page-builder.html) 

###### 5.2 Set Deployment URL
You need to set the URL where your app is hosted. You find the deployment URL with your hosted project in Vercel.

![Sitecore Marketplace - Get Deployment URL From Vercel](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/19b8d15d53134c1f816af6419da99979?v=59fab7c4) 

Additionally, you should set the App Logo URL, ideally provided from your apps /public folder. 

![Sitecore Marketplace - Set deployment URL and App logo URL](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/567a0b08dbf8440686d055fbbf4e5e3e?v=0ece277d) 

Afterwards you activate the app (top right corner).

##### 6. Install the App
Now the app is visible in the “My apps” section in the “TO BE INSTALLED” status. Hit the “Install” button. 

![Sitecore Marketplace - Install App](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/bd1f3f548a4a40748c039a33b5e14722?v=bf520770) 

After the installation the app will be available to all Organisation Users. 

![Sitecore Marketplace - Install App](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/bd3d8535922a4e89aef91d5ff641b25d?v=42f3b1de) 
 
#### 7. Testing the app
As I chose the extension point “Standalone” the app is available in the Cloud Portal as expected using the app logo I configured. 

![Sitecore Marketplace - Call app from standalone extension point in Cloud Portal ](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/77796dd15f8648d88b30701ac6c11627?v=a88d0edd) 
 
Once you click it, it will open in a separate window, this time showing also the appContext.name and appContext.id as it is now registered and running in the context of Cloud Portal and XM Cloud.

![Test Sitecore Marketplace App with Standalone extension point](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/412ccc2a9e584c71ae25e829b208e306?v=70774636) 


Now you can start building the logic for your app.
Find the documentation here: https://doc.sitecore.com/mp/en/developers/marketplace/register-a-custom-app.html


## Register Local running app
Running the local app in the context of Cloud Portal XM Cloud is working the same way as setting up your deployed app. This way, all autentication and other connection related configuration is handled by Sitecore.

You do not need to deploy the app to a hosting provider as you plan run the app on `localhost`. 

Find the steps below. For more details to description above. 

1.	Enter Developer Studio
2.	Create App
3.	Set name of the app (e.g. “My Marketplace App (Local)”) and select type “Custom App”
4.	Your App is created
5.	Configure App
    -	Select the extension point e.g.“Standalone”
    -	Set Route to “/standalone-extension”
    - Set Deployment URL: http://locahost:3000
    - Set App Logo URL e.g. https://placehold.co/512x512.png 
6.	Install the App
7.	Test the App (Make sure you have started your app. `npm run dev`)

Ideally you only connect your local running apps on non-productive environments. 

![Test local Sitecore Marketplace App with Standalone extension point](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/6487bc6770a647959ab9c4679e51bfcf?v=589e7974) 

## Resources

| Resource | Link |
|----------|------|
|Feedback Form|https://forms.office.com/e/cEndu1JLQc|
|Documentation about Custom Field extension point|https://doc.sitecore.com/mp/en/developers/marketplace/enable-a-custom-field-in-the-xm-cloud-page-builder.html |

## Read more
<Row columns={3}>
    <Article 
    title="Unlock Sitecore’s Potential: Introducing Sitecore Marketplace Custom Apps" 
    description="Discover how Sitecore Marketplace Custom Apps empower developers, architects, and marketers to extend Sitecore with modular, purpose-built solutions. This article introduces the concept of Custom Apps, explains their role in a composable architecture, and highlights how they unlock new capabilities across Sitecore products—without touching the core." 
    link="/learn/getting-started/marketplace/marketplace-starter-kit-nextjs-app-router" 
    maxWidth="sm" />
    <Article 
    title="From Zero to Deployed: Building with the Sitecore Marketplace Starter Kit" 
    description="Explore the Sitecore Marketplace — your hub for discovering and building ready-to-use extensions that amplify your digital experience platform. Join our Early Access Program to get started with the Marketplace SDK." 
    link="/learn/getting-started/marketplace/marketplace-starter-kit-nextjs-app-router" 
    maxWidth="sm" />
  </Row>
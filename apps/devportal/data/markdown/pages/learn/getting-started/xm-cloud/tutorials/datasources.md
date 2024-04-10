---
title: 'Tutorial: How to Create Component Datasources in XM Cloud'
description: 'In this tutorial, we will go through the steps to TODO: DESCRIPTION'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, we will go through the steps to TODO: DESCRIPTION

## Overview

XM Cloud Components can be used to centrally manage the content of our components and use those components in different apps for example in your website managed with XM Cloud Pages as seen here. However, I want to use the component as a UI building block in XM Cloud on different pages with different content that’s managed inside of XM Cloud. Therefore, I need to setup the data model for this component and create the content.
My Component requires the following fields:

- Headline (Single Line Text)
- Subheadline (Single Line Text)
- Content (Rich Text)

As the content should be managed in XM Cloud, I navigate back to the Tools Sections and Open Content Editor.

1. I want to create a Data Template that represents my data Model.
1. Then I want to create a data source item in my site.
1. When I drag and drop the new component onto one of my pages I want to get asked to select a data source
   As mentioned: I want to achieve that I can store data source items in my site that I can use when adding a particular component. Data sources in XM Cloud can be either:
   - a dedicated data source under my site/data/DatasourceFolder/DataSourceItem
   - , it can be created under my page/data/dataSourceItem.
   - Or the page itself, the component is placed on,

In this case, I want to apply the 1st option, meaning having data source within the data folder of my site.
Usually what you would do when creating new items is to spin up your local docker instance of XM Cloud to not interfere with other developers creating items. As I’m using the XM Cloud environment exclusively I can directly work here.

## Prerequisites

In order to complete the following tutorial, you will need these resouces:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. A GitHub source control account.

## Modules

The first thing I want to do, is create a headless module. This helps me to create a consistent folder structure for all my component related items. Also, when managing a multisite environment I can deploy the required item structure for a particular feature in a very easy way. We will probably get more in details with Headless Modules at a later stage.

### Create the module

1. For now I navigate to : System/Settings/Project. I do a right click to enter the context menu and use the insert options to create a new Folder:
1. I name this folder after the Name of the Site Collection which is “Company Dev”.
   <Alert status="info">
   <AlertIcon />
   I want to create the headless module within that folder, but as you can see the folder does not provide the insert option for headless Modules. Those are always created from the root node. In this case “Project”.
   </Alert>
1. In here I can provide a name for the Module. I call it “Basic Components”.
1. I select the folder where the module should be created which is “Company Dev”.
1. Now I need to select where I want the module to create folders. For the Component I just created, I only need Templates and Branch Templates. However, I might need also Renderings and Placeholder Settings later. So I get those created as well.
1. I will not need:
   - Settings
   - Layouts
   - And Media Library.
1. I select that this is a Module can be installed on Site and not on the Site Collection Level formerly known as Headless Tenant.

## Template Creation

The Headless Module has been created. When looking into the Teamplates Section under Project and Company Dev, I can see that a “Basic Components” Folder has been created as well.
In here, I can create the required templates.

### Create the templates

1. First I create the data template with the name: “Text Teaser”.
1. I can choose where to create the template but the current folder is already preselected.
1. I also directly create a template for the Text Teaser Folder. This will be the one to contain my Text Teaser Items within the Site/Data Folder.
1. Back to the Text Teaser template.
1. We can define sections within the data template to structure the content. This makes especially sense when dealing with many fields that represent the template. So I name the Section “Content”.

### Create required fields

Now I can create the required fields of the data model.

1. The first field I name “Headline”. This can be of type “Single Line Text”.
1. The Second Field I name “Subheadline” which is also of type “Single Line Text”.
1. And I create a field called “Content” and I change the Type to Rich Text.
   <Alert status="info">
   <AlertIcon />
   I could change the Icon for both Templates.
   </Alert>

1. I leave the Text Teaser as is and Change the Text Teaser Folder Icon to an actual Folder.

### Create Insert Options

Next I want to make sure the Marketers and Authors are guided when Creating content. Therefore I want to configure the Insert Options. Within a Text Teaser Folder I want the Authors to create Text Teaser Items or More Text Teaser Folders to structure it even further. I would do that on the so called “Standard Values”. The Standard Values usually contain default Values that are set on Item creation but can overwritten afterwards.

1. I click on the “Builder Options” Tabs and create Standard Values.
1. Next I click on the “Configure” Tab and then the Assign Button.
1. In here I can assign the insert options for the Folder Template.
1. I navigate to the previously created templates
1. Select first the text teaser with a double click and then the text teaser folder.

## Datasource creation

I told you that I can use modules to install the feature related items to a site. However, that would require an additional step, which I skip for now and just create the data source folder manually.

## Create data source folder manually

1. I navigate to my Site Data folder
1. Perform a right click and select the Insert Options to Create a Text Teaser Folder.
   <Alert status="info">
   <AlertIcon />
   Now, my newly created Text Teaser Folder is not listed here. But as I am an Administrator I can choose to create items from all templates.
   </Alert>

1. So I select the Text Teaser Folder to be created under Data.
1. I name this item: Text Teasers.

   <Alert status="info">
   <AlertIcon />
   When checking the insert options of the Text Teaser Folder you can see that we can create Text Teaser Items and More Text Teaser Folders. 
   </Alert>

1. Let me create a Text Teaser Item and add some dummy content to it.
   - How to use Components.
   - Easy and smart ways designing your pages.
   - Something else that makes sense for the tutorial page.

## Make data source template available in XM Cloud Components

As a last step we need to make the data template available in XM Cloud Components to be used as data source. This we can do on the Settings Item within the Site.

### Create Text Teaser data source

1. I can either search for “Feaas” meaning “Frontend as a service” or just scroll down to the field “Feaas component data source templates”.
1. Here I can specify all templates that should be used as data sources in the Component Builder. Let’s select the Text Teaser by double clicking it and Save.
1. Now that we created the data model and a content item I need to go back to the component builder to wire everything up.

### Validate data source is available in Components

So let’s first ensure that the new data source is available in the Component Builder.

1. In the Data source section I can find the Text Teaser data source now listed at the bottom of the page. Great.

### Map data

Currently I use static data in XM Cloud Components. But I can also map the data to a data source template.

1. Therefore I need to select first the Headline2 field.
1. On the right side, I can choose to set the “Text” from a static to a mapped value:
1. First I need to select the data source template from the list of available templates.
1. I select the “Text Teaser” template.
1. I can preview what fields are available.
1. Now I click on “Next” to actually select the field from the template that should map to the component field.
1. I select “Headline” and “Complete” the mapping process.
1. I repeat the steps for my Headline3.
1. I set the “Text” to be mapped to the Text Teaser Template
1. select the “Subheadline field”.
1. And complete the mapping.

   <Alert status="info">
   <AlertIcon />
   As Rich Text Field is not properly shown add HTML Block and remove all paragraphs
   </Alert>

1. Last but not least I need to map the rich text field.
1. When copying my content from the html design to the Component, several elements were created.
1. All of the fields are “paragraphs”.
1. So if I map my Content Field to the Paragraph I can see that it does not resolve the formatting coming from the XM Cloud Rich Text Editor.
1. As a Rich Text Field is returning html and Paragraphs strip off many sorts of html formatting I remove all paragraphs
1. Add an HTML Block Element.
1. This one I map to the Content field from my template.
1. And complete.

### Stage Component

1. Let’s restage the component to make the change available in Pages.

### Add to Pages

In Pages I can see that the component I added before is blank as it requires now a data source that has not been set.

1. I’ll remove the component
1. and add it again.
1. Now it is asking me for a data source. Let me select the data source I created before.
1. So I navigate to my Site/Data/Text Teasers/Text Teaser 1

   Yey, The content appears in the component using my design. Just the design of the list item icons are still discs instead of my custom icon. This is because I need to provide proper styling and the images through my app.

## Add content changes to source control

As we created items in XM Cloud (meaning Templates, Modules, Folders, etc) we should create another feature branch to collect all changes, serialize them into the repository and merge them into the main branch so we can ship the changes later to higher environments in a consistent way.

### Create a new branch

1. Let’s switch into Visual Studio Code
1. Open the terminal.
1. I ensure that I do not have changes and I’m on the main branch.
1. Now I create a dedicated branch for all changes I’m doing for the Text Teaser Feature.

### Pull the items out of XM Cloud using the Sitecore CLI

In order to pull the items from the XM Cloud environment I need to:

1. Connect first using the command dotnet Sitecore cloud login.
1. The browser opens and asks me to confirm that it’s correct that a device wants to connect using the CLI.
1. I confirm,
1. select the Organizaton I want to connect to.
1. Next I can pull the changes using dotnet Sitecore ser pull passing the –environment Id from my user.json file that is “dev”.

   <Alert status="info">
   <AlertIcon />
   If you want to know more about serialization checkout my previous video. 
   </Alert>

### Confirm changes are serialized

To confirm if all items have serialized: Let’s go and check all new files:

1. In the placeholder settings we got a new folder named after the site collection (company Dev) and a folder named Basic Components in there.
1. Same new structure in the project Renderings.
1. With the Site / Data Folder I find a new Item called “Text Teasers”.
1. The Text Teaser 1 data source is not there, as we setup the serialization to pull any content related items.
1. In the templates folder I find the most important ones which are my templates for text teaser and text teaser folder including the standard values.

### Add module to branch

However, one item seems to be missing. The module. This is because I have not configured to pull modules. This can be seen in the company.modules.json

1. Let’s go to the company.modules.json.template
1. Copy the paragraph for the modules into our document.
1. I have to exchange the Folder Path from Feature to Project and Save.
1. I run the dotnet Sitecore ser pull command again.

   <Alert status="info">
   <AlertIcon />
   You will get an error. It says the path does not exist. And that’s correct. I forgot to exchange the placeholder for the site collection name by the actual site collection that is Company Dev.
   </Alert>

1. Let’s change that, and save.
1. Now I run the command again. And this time it is successful.
1. Let me check if the files are there now. That looks good.

### Commit changes to branch

1. Let’s add the changes first
1. Then commit.
1. And push… or better push and set the upstream.

Done! We can create the pull request and merge the changes to main.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have done the thing! TODO: What did they do?
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

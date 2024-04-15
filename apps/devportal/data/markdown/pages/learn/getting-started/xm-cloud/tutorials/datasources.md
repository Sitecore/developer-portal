---
title: 'Tutorial: How to Create Component Data Sources in XM Cloud'
description: 'In this tutorial, we will go through the steps to update the Text Teaser component to use data sources. You will create a new data template for the Text Teaser component. You will update the Text Teaser component to work with this data and configure data shortcuts for your author. You will also learn how to bring your changes into source control.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, we will go through the steps to update the Text Teaser component to use data sources. You will create a new data template for the Text Teaser component. You will update the Text Teaser component to work with this data and configure data shortcuts for your author. You will also learn how to bring your changes into source control.

## Overview

In the previous tutorial, you learned how to use XM Cloud Components to centrally manage the content of a Text Teaser component and use that component in XM Cloud Pages. Now we will evolve the component so it can be used as a reusable visual building block in XM Cloud where the content can be different on each page. To accomplish this, we need a data model for the Text Teaser component so that authors can create different content for each use of the Text Teaser component.

To help authors create the content, we need to set up a data model with the fields needed by the Text Teaser component. We are going to create a data model with the following fields:

- Headline (Single Line Text)
- Subheadline (Single Line Text)
- Content (Rich Text)

This data model is referred to as a 'data source' in XM Cloud. Data sources in XM Cloud can be either:

- a piece of content stored inside the current site: `site/data/DatasourceFolder/DataSourceItem`
- a piece of content stored inside the current page: `page/data/dataSourceItem`
- the page itself, where the component is being placed

For this tutorial, you will be implementing the first option. You will:

1. Create a piece of content that can be used as a data source for the Text Teaser component
1. Configure it to store inside a data folder within your Company Dev site.
1. Configure XM Cloud so that authors can create the content
1. Connect a created data source to the Component on the page.
1. Configure XM Cloud so that whenever an author drags the Text Teaser component onto the page, they are asked to select an existing piece of content or create a new one.
1. Setup the solution so that you can store the new data model in source control so it can be deployed to other environments.

## Prerequisites

In order to complete the following tutorial, you will need these resouces:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. The Text Teaser component created in [Tutorial: Create a Component using XM Cloud Component Builder](create-a-component)
1. A GitHub source control account with the repo created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)

## Create the module

The very first step will be to create a headless module. Modules are ways of organizing content in a consistent structure so it can be re-used by the marketing team. Think of this like an npm package for content. Defining modules makes it very easy for you to make your package/module available to multiple sites and teams. An author will be able to 'install' your module and use it in a consistent way on any site they choose.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.
1. From your dashboard, select the XM Cloud environment where you have your Text Teaser Component created.

   `INSERT SCREENSHOT OF XM CLOUD APP BEING SELECTED FROM DASHBOARD`

1. From the app context flyout, select "Content Editor" to launch the XM Cloud content tree editing interface.

   `INSERT SCREENSHOT OF XM CLOUD APP CONTEXT FLYOUT`

1. Navigate to: `System/Settings/Project` in the content tree.

   `INSERT SCREENSHOT OF CONTENT TREE EXPANDED TO SHOW PATH`

1. Right-click on the `Project` item in the tree to pop open the context menu.
1. In the context menu select `Insert` and then `Folder` to create a new Folder.

   `INSERT SCREENSHOT OF INSERT OPTIONS`

1. Name this folder after the Name of the Site Collection: `Company Dev`
   <Alert status="info">
   <AlertIcon />
   You will store the new headless module inside this new folder. However, the insert option for Headless Module is not available on this folder, only at the 'Project' folder level. We will need to go there to create the new module.
   </Alert>
1. Right-click on the `Project` item in the tree to pop open the context menu again.
1. In the context menu select `Insert` and then `Headless Module` to create the new module.

   `INSERT SCREENSHOT OF INSERT OPTIONS`

1. Configure the Headless Module settings:

   - Module name: `Basic Components`
   - Add to module group: `sitecore/system/settings/Company Dev`
   - System areas for container folders: `Templates`, `Branch Templates`, `Renderings`, and `Placeholder Settings`
   - Module scaffolding actions: `Headless Site Setup`

   `INSERT SCREENSHOT OF DIALOG WITH FILLED IN VALUES`

   <Alert status="info">
   <AlertIcon />
   When configuring scaffolding actions, you'll notice an option for Headless Tenant Setup. Tenants are an older terminology that are now called Site Collections.
   </Alert>

## Creating the templates

The Headless Module has now been created. We can now check that the required folders exist and start creating the required templates. We will create two templates: **Text Teaser** to hold the data from the author and **Text Teaser Folder** to hold created Text Teaser content items. We will also configure these templates to make life a little bit easier for the authors who want to create Text Teasers.

### Create the Text Teaser template

These steps will create the Text Teaser template.

1. In the Content Editor tree, navigate to `/sitecore/Templates/Project/Company Dev/` and select the `Basic Components` folder
1. First we will create the Text Teaser template. Click on the **New Template** button or right-click on the folder and select **Insert > New Template**
1. Write **"Text Teaser"** in the **Name** field to name the template.

   <Alert status="info">
   <AlertIcon />
   Leave the Base template with the default value (Standard template) for now. If you were creating a series of templates that inherited fields from each other, you might need to specify a base template to inherit from. The default Standard template will provide all the required fields Sitecore templates need so it is enough for the purpose in this tutorial.
   </Alert>

1. Press the **Next** button to advance to the Location selection step.
1. Press the **Next** button to keep the default selection for the location folder.

   <Alert status="info">
   <AlertIcon />
   The currently selected folder is set by default when this step shows. If we hadn't already selected the Basic Components folder in the tree, we could choose it during this step instead.
   </Alert>

1. Press the **Close** button to exit the wizard. The template has been created.

### Create the fields for the Text Teaser

We now want to create the fields for the author to enter information for the Text Teaser.

1. In the content tree, select the **Text Teaser** template. A field builder interface will show on the main pane

   `INSERT SCREENSHOT OF EMPTY BUILDER TAB`

1. In the **Builder** tab, type **Content** into the **Add a new section** field.

   `INSERT SCREENSHOT OF BUILDER TAB WITH Content SECTION`

   <Alert status="info">
   <AlertIcon />
    We define sections within a data template to structure the content for authors. This helps particularly when dealing with many fields on a template. 
   </Alert>

1. Within the new Content section, create the Headline field:

   - **Add a new field** : Headline
   - **Type**: Single Line Text

1. Now create the Subheadline field:

   - **Add a new field** : Subheadline
   - **Type**: Single Line Text

1. Now create the Content field:

   - **Add a new field** : Content
   - **Type**: Rich Text

1. Click the **Save** button in the ribbon to ensure the new fields are saved.

   `INSERT SCREENSHOT OF BUILDER TAB WITH THE NEW FIELDS`

   <Alert status="info">
   <AlertIcon />
   You may notice there are other options for fields like Source, Unversioned, and Shared. These are for more advanced field definition scenarios that are not covered in this tutorial, but you may want to learn more about Data Templates in the documentation: https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-templates.html
   </Alert>

### Create the Text Teaser Folder template

With the Text Teaser component created, we now need a folder to hold the created Text Teaser content items. These steps will create the **Text Teaser Folder** template.

1. Now we will create the Text Teaser Folder template. Click on the **New Template** button or right-click on the folder and select **Insert > New Template**
   <Alert status="info">
   <AlertIcon />
   There is another option called "Template Folder". This can also be used to collect together templates, but we use a standard template because `TODO: WHY DO WE USE IT`
   </Alert>

1. Write **"Text Teaser Folder"** in the **Name** field to name the template.
1. Press the **Next** button to advance to the Location selection step.
1. Press the **Next** button to keep the default selection for the location folder.
1. Press the **Close** button to exit the wizard. The template has been created.

### Configure a template icon

The icon for the Text Teaser is fine for our purposes, but it would be nice if the folder actually looked like a folder. In these steps we will show how to change the icon for a template.

1. In the content tree, select the **Text Teaser Folder** template.
1. In the ribbon, switch to the **Configure** tab

   `INSERT SCREENSHOT OF CONFIGURE TAB`

1. Click on the **Icon** button
   <Alert status="info">
   <AlertIcon />
   The first time that you try to load the Icon editing modal, Sitecore XM Cloud will start loading up the options to present to you. There may be a delay for you between clicking and then the display of the options if this is the first time using this feature in your instance.
   </Alert>

1. Select the Folder icon from the options shown.

   `INSERT SCREENSHOT OF ICONS OPTIONS`

### Configure Insert Options

Insert Options are guides that we can provide for Marketers and Content Authors to make it easier to create new content. We will configure the options for a Text Teaser Folder so that Authors can easily create new Text Teaser content items or create more Text Teaser Folders to structure their content even further.

   <Alert status="info">
   <AlertIcon />
   In this section we will get our first look at Sitecore XM Cloud "Standard Values" for templates. The Standard Values on a template usually contain default values that are automatically set on content creation but can be updated by the author later.
   
   If you're interested in learning more about Standard Values, check out the documentation: https://doc.sitecore.com/xmc/en/developers/xm-cloud/standard-values-for-data-template-fields.html
   </Alert>

1. In the content tree, select the **Text Teaser Folder** template.
1. In the ribbon, switch to the **Builder Options** tab

   `INSERT SCREENSHOT OF Builder Options TAB`

1. Click on the **Standard values** button to create a new definition for the template. A new item named `__Standard Values` will be created and the UI will automatically update to select this new item.
1. In the ribbon, switch to the **Configure** tab. We can now configure options for the \_\_Standard Values item.
1. Click the **Assign** button in the "Insert Options" ribbon chunk to launch the Insert Options dialog. This dialog allows us to select which templates can be inserted when the user has a Text Teaser Folder selected.

   `INSERT SCREENSHOT OF INSERT OPTIONS DIALOG`

1. In the selection tree on the left, navigate to `/Templates/Project/Company Dev/Basic Components`
1. Double-click on the **Text Teaser** template to add it to the **Selected** pane on the right
1. Double-click on the **Text Teaser Folder** template to add it to the **Selected** pane on the right

   `INSERT SCREENSHOT OF SELECTED TEMPLATES`

1. Press the **OK** button to save the changes.

   <Alert status="info">
   <AlertIcon />
   Learn more about Insert Options: https://doc.sitecore.com/xmc/en/developers/xm-cloud/insert-options.html
   </Alert>

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
   **Congratulations!** You have now updated the Text Teaser component to work from a piece of re-usable authored content instead of using static content added to the Component directly. You also learned how to configure modules and how to bring your changes into source control.
</Alert>

### Related XM Cloud Documentation

<Row columns={2}>
   <Link title="Data Templates" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-templates.html" />
   <Link title="Standard values for data template fields" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/standard-values-for-data-template-fields.html" />
   <Link title="Insert Options" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/insert-options.html" />
</Row>

### Related XM Cloud Accelerate guidance for Sitecore Partners

<Row columns={2}>
   <Link title="Project Solution Setup" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup" />
   <Link title="Creating a Site" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site" />
</Row>

---
title: 'Tutorial: How to Create a Component Data Template in XM Cloud'
description: 'Learn about defining the content model that you can use for data sources in the XM Cloud Component builder.'
openGraphImage: '/images/getting-started/tutorials/xm-cloud/create-component-data-template-09.jpg'
pageType: 'tutorial'
menuOrder: 4
---

<Introduction title="What You are Going to Learn">

In this tutorial, you will go through the steps to create a new content model that can be used for your Text Teaser component. You will learn:

- How to create a headless module in XM Cloud Content Editor
- How to create new data templates for the Text Teaser component in XM Cloud Content Editor

</Introduction>

## Overview

In the previous tutorial, you learned how to use XM Cloud Components to centrally manage the content of a Text Teaser component and use that component in XM Cloud Pages. Now we will look at how to build templates so that the content can be different on each page. To accomplish this, you will need a data model for the Text Teaser component so that authors can create different content for each use of the Text Teaser component.

To help authors create the content, you will need to set up a data model with the fields needed by the Text Teaser component. You are going to create a data model with the following fields:

- Headline (Single Line Text)
- Subheadline (Single Line Text)
- Content (Rich Text)

This data model is referred to as a 'data source' in XM Cloud. [Data sources](https://doc.sitecore.com/xmc/en/users/xm-cloud/get-your-content-from-an-xm-data-source.html) in XM Cloud can be either:

- a piece of content stored inside the current site. e.g. `site/data/DatasourceFolder/DataSourceItem`
- a piece of content stored inside the current page. e.g. `page/data/dataSourceItem`
- the page itself, where the component is being placed

For this tutorial, you will be implementing the first option. You will:

1. Create a content model that can be used as a data source for the Text Teaser component.
1. Configure it to store inside a data folder within your Company Dev site.
1. Configure XM Cloud so that authors can create the content.
1. Use your new Text Teaser template to create a new Text Teaser content item with data

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. The Text Teaser component created in [Tutorial: Create a Component using XM Cloud Component Builder](create-a-component)

## Create the module

The very first step will be to create a headless module. Modules are used to organize configuration and data models in a consistent structure so they can be re-used by the marketing team. Think of a module like an npm package for the structures you are creating. Defining modules makes it very easy for you to make your package/module available to multiple sites and teams. A site administrator will be able to 'install' your module and use it in a consistent way on any site they choose.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.
1. From your dashboard, select the XM Cloud environment where you have your Text Teaser Component created.

   <Image title="Sitecore Cloud Portal - Select App" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-01.jpg" maxW="xl" />

1. From the app context flyout, select **Content Editor** to launch the XM Cloud content tree editing interface.

   <Image title="Sitecore Cloud Portal - Select Contnet Editor from Context Flyout" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-02.jpg" maxW="xl" />

1. Navigate to: `sitecore/System/Settings/Project` in the content tree.

   <Image title="Content Editor - Navigate To Settings Project Folder" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-03.jpg" maxW="xl" />

1. Right-click on the **Project** item in the tree to pop open the context menu.
1. In the context menu select **Insert** and then **Folder** to create a new Folder.

   <Image title="Content Editor - Add Folder" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-04.jpg" maxW="xl" />

1. Specify **"Company Dev"** as the name of the folder, using the same name as the Site Collection.
   <Alert status="info">
   <AlertIcon />
   You will store the new headless module inside this new folder. However, the insert option for Headless Module is not available on this folder, only at the 'Project' folder level. You will need to go there to create the new module.
   </Alert>
1. Right-click on the **Project** item in the tree to pop open the context menu again.
1. In the context menu select **Insert** and then **Headless Module** to create the new module.

   <Image title="Content Editor - Insert Headless Module" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-05.jpg" maxW="xl" />

1. Configure the Headless Module settings with these values by typing, selecting, or checking the appropriate checkbox:

   - **Module name:** Basic Components
   - **Add to module group:** `sitecore/system/settings/Project/Company Dev`
   - **System areas for which container folders should be created:** Templates, Branches, Renderings, and Placeholder Settings
   - **Module scaffolding actions:** Headless Site Setup

   <Image title="Content Editor - Configure Headless Module" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-06.jpg" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   When configuring scaffolding actions, you'll notice an option for Headless Tenant Setup. Tenants are an older terminology. These are now called Site Collections.
   </Alert>

1. Click the **Proceed** button to save your choices and create the headless module.

## Creating the templates

The Headless Module has now been created. You can now check that the required folders exist and start creating the required templates. You will create two templates:

- **Text Teaser** to hold the data from the author, and
- **Text Teaser Folder** to organize created Text Teaser content items.

You will also configure these templates to make life a little bit easier for the authors who want to create Text Teasers.

### Create the Text Teaser template

These steps will create the Text Teaser template.

1. In the Content Editor tree, navigate to `/sitecore/Templates/Project/Company Dev/` and select the **Basic Components** folder
1. Click on the **New Template** button or right-click on the **Basic Components** folder and select **Insert > New Template**
1. Write **"Text Teaser"** in the **Name** field to name the template.

   <Alert status="info">
   <AlertIcon />
   Leave the Base template with the default value ([Standard template](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-standard-template.html)) for now. If you were creating a series of templates that inherited fields from each other, you might need to specify a base template to inherit from. The default Standard template will provide all the required fields your Text Teaser template will need so it is enough for the purpose of this tutorial.
   </Alert>

1. Click the **Next** button to advance to the Location selection step.
1. Click the **Next** button to keep the default selection for the location folder.

   <Alert status="info">
   <AlertIcon />
   The currently selected folder is set by default when this step shows. If the Basic Components folder wasn't already selected in the tree, you could choose it during this step instead.
   </Alert>

1. Click the **Close** button to exit the wizard. The template has been created.

### Create the fields for the Text Teaser

You will now create the fields for the author to enter information for the Text Teaser.

1. In the content tree, select the **Text Teaser** template. A field builder interface will show on the main pane

   <Image title="Content Editor - Empty Template" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-07.jpg" maxW="xl" />

1. In the **Builder** tab, type **Content** into the **Add a new section** field.

   <Image title="Content Editor - Section Added" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-08.jpg" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
    Sections are defined within a data template to structure the content for authors. This helps particularly when dealing with many fields on a template. 
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

   <Image title="Content Editor - Text Teaser Template has been created" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-09.jpg" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   You may notice there are other field options like Source, Unversioned, and Shared. These are for more advanced field definition scenarios that are not covered in this tutorial, but you may want to learn more about Data Templates in the documentation: https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-templates.html
   </Alert>

### Create the Text Teaser Folder template

With the Text Teaser component created, you now need a folder to hold the created Text Teaser content items. These steps will create the **Text Teaser Folder** template.

1. Now you will create the Text Teaser Folder template. Click on the **New Template** button or right-click on the folder and select **Insert > New Template**
   <Alert status="info">
   <AlertIcon />
   There is another option called "Template Folder". This can also be used to collect together templates, but we use the regular template because Template Folders do not support Standard Values which we will need in a later step to configure Insert Options.
   </Alert>

1. Write **"Text Teaser Folder"** in the **Name** field to name the template.
1. Click the **Next** button to advance to the Location selection step.
1. Click the **Next** button to keep the default selection for the location folder.
1. Click the **Close** button to exit the wizard. The template has been created.

### Configure a template icon

The icon for the Text Teaser is fine for the purposes of this tutorial, but it would be nice if the folder template looked like a folder. In these steps you will change the icon for a template.

1. In the content tree, select the **Text Teaser Folder** template.
1. In the ribbon, switch to the **Configure** tab

   <Image title="Content Editor - Open Configure Tab" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-10.jpg" maxW="xl" />

1. Click on the **Icon** button
   <Alert status="info">
   <AlertIcon />
   The first time that you try to load the Icon editing modal, Sitecore XM Cloud will start loading up the options to present to you. There may be a delay for you between clicking and then the display of the options if this is the first time using this feature in your instance.
   </Alert>

1. Select the Folder icon from the options shown.

   <Image title="Content Editor - Select Folder icon" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-11.jpg" maxW="xl" />

### Configure Insert Options

When an author tries to create a new content item, they are presented with the types of content that are allowed at that location. [Insert Options](https://doc.sitecore.com/xmc/en/developers/xm-cloud/insert-options.html) allow you to specify what content options are available to the author. You will now configure the options for a Text Teaser Folder so that Authors can easily create new Text Teaser content items or create more Text Teaser Folders to structure their content even further.

   <Alert status="info">
   <AlertIcon />
   In this section you will get a first look at Sitecore XM Cloud "Standard Values" for templates. The Standard Values on a template usually contain default values that are automatically set on content creation but can be updated by the author later. If you're interested in learning more about Standard Values, check out the documentation: https://doc.sitecore.com/xmc/en/developers/xm-cloud/standard-values-for-data-template-fields.html
   </Alert>

1. In the content tree, select the **Text Teaser Folder** template.
1. In the ribbon, switch to the **Builder Options** tab

   <Image title="Content Editor - Open Builder Options" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-12.jpg" maxW="xl" />

1. Click on the **Standard values** button to create a new definition for the template. A new item named `__Standard Values` will be created and the UI will automatically update to select this new item.
1. In the ribbon, switch to the **Configure** tab. You can now configure options for the \_\_Standard Values item.
1. Click the **Assign** button in the "Insert Options" ribbon chunk to launch the Insert Options dialog. This dialog allows us to select which templates can be inserted when the user has a Text Teaser Folder selected.

   <Image title="Content Editor - Assign insert options" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-13.jpg" maxW="xl" />

1. In the selection tree on the left, navigate to `/Templates/Project/Company Dev/Basic Components`
1. Double-click on the **Text Teaser** template to add it to the **Selected** pane on the right
1. Double-click on the **Text Teaser Folder** template to add it to the **Selected** pane on the right

   <Image title="Content Editor - Select Insert Options" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-14.jpg" maxW="xl" />

1. Click the **OK** button to save the changes.

## Create content that can be used as a data source

You have now created your templates and configured them for the authors. You also created the module needed to make the feature-related items available to a site. In a real XM Cloud development project, there would be many different templates and folders defined in a module. At this stage, a team would usually need to configure the module to create the site-specific structure with all of those templates and folders and [add the module to an existing site collection or site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/add-a-module-to-an-existing-site-collection-or-site.html).

For the purpose of this tutorial, however, you will skip forward a few steps and manually create the structure since only the Text Teaser template is being used right now.

### Create data source folder manually

1. In the Content Editor, navigate to the Data folder in the Company Dev site that was created in the previous tutorial: `/sitecore/Content/Company Dev/Company Dev/Data`

   <Image title="Content Editor - Select Data Folder of Site" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-15.jpg" maxW="xl" />

1. Right-click and select **Insert** from the context menu and select **Insert from template** to launch a template selection dialog
   <Alert status="info">
   <AlertIcon />
   Note that there are no options for the Text Teaser templates listed in the context menu since you have not configured anything to help insert content into this Data folder. However, if you have logged in as an administrator account you will have the option for **Insert from template**. If you do not have that option, you will need to change account to one with full administrator access.
   </Alert>

   <Image title="Content Editor - Insert from Template" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-16.jpg" maxW="xl" />

1. In the dialog, expand the Browse tree to `Templates/Project/Company Dev/Basic Components` so that the Text Teaser templates are visible for selection.

   <Image title="Content Editor - Select Text Teaser Folder Template" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-17.jpg" maxW="xl" />

1. Select the **Text Teaser Folder** template
1. In the **Item Name** field enter the value **"Text Teasers"**. This will be the name given to the folder.
1. Click **Insert** to create the folder.

   <Alert status="info">
   <AlertIcon />
   The UI will automatically update to show the Text Teasers folder and will select it for you in the tree. If you right-click on the new **Text Teasers** folder, the options for the Insert context menu will now show the configured options from earlier in the tutorial. This is how authors will now be able to create new **Text Teaser** and **Text Teaser Folder** items.
   </Alert>

### Create a sample data source

You can now test out your folder by creating a sample Text Teaser content data source.

1. Right-click on the **Text Teasers** folder to launch the context menu
1. Select **Insert > Text Teaser** to create a new text teaser.
1. Type in **How to use Components** as the name for the test teaser.
1. Click **OK** button to create the Text Teaser content.

   <Image title="Content Editor - Create Data Source Item" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-18.jpg" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   The fields that are shown to you can now be edited. This is where a Content Author will create the parts of their content to be used on the component.
   </Alert>

1. In the Content pane, specify values for the Text Teaser:

   - **Headline:** How to use Components
   - **Subheadline:** Easy and smart ways designing your pages
   - **Content:** The Components builder of XM Cloud Components is a powerful tool that lets you create new components or modify already existing components using an intuitive WYSIWYG builder. It also lets you store the components in organized collections in the Components library. Learn more about how to use Components in this tutorial.

   <Image title="Content Editor - Insert Content" src="/images/getting-started/tutorials/xm-cloud/create-component-data-template-19.jpg" maxW="xl" />

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have now learned how to create data source templates, how to configure insert options, and how to configure modules. You then validated your template by by creating some sample Text Teaser content. You will now be able to use your new content model with your Text Teaser component in the next tutorial!
</Alert>

### Related XM Cloud Documentation

- [Data Templates](https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-templates.html)
- [Data definition and template overview](https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-definition-and-template-overview.html)
- [The Standard Template](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-standard-template.html)
- [Standard values for data template fields](https://doc.sitecore.com/xmc/en/developers/xm-cloud/standard-values-for-data-template-fields.html)
- [Insert Options](https://doc.sitecore.com/xmc/en/developers/xm-cloud/insert-options.html)
- [Add a module to an existing site collection or site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/add-a-module-to-an-existing-site-collection-or-site.html)

### Related XM Cloud Accelerate guidance for Sitecore Partners

- [Project Solution Setup](/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup)
- [Creating a Site](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site)

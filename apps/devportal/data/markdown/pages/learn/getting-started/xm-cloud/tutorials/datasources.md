---
title: 'Tutorial: How to Create Component Data Sources in XM Cloud'
description: 'Learn about defining and creating new content items that can be used by authors as data sources in the XM Cloud Component builder.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
pageType: 'tutorial'
menuOrder: 4
---

<Introduction title="What You are Going to Learn">

In this tutorial, you will go through the steps to update the Text Teaser component to use content data sources. You will learn:

- How to create a headless module and new data templates for the Text Teaser component in XM Cloud Content Editor
- How to create new content items from your templates to be used as data for the Text Teaser component
- How to update the Text Teaser component to use the data in your content items

</Introduction>

## Overview

In the previous tutorial, you learned how to use XM Cloud Components to centrally manage the content of a Text Teaser component and use that component in XM Cloud Pages. Now you will evolve the component so it can be used as a reusable visual building block in XM Cloud where the content can be different on each page. To accomplish this, you will need a data model for the Text Teaser component so that authors can create different content for each use of the Text Teaser component.

To help authors create the content, you will need to set up a data model with the fields needed by the Text Teaser component. You are going to create a data model with the following fields:

- Headline (Single Line Text)
- Subheadline (Single Line Text)
- Content (Rich Text)

This data model is referred to as a 'data source' in XM Cloud. [Data sources](https://doc.sitecore.com/xmc/en/users/xm-cloud/get-your-content-from-an-xm-data-source.html) in XM Cloud can be either:

- a piece of content stored inside the current site. e.g. `site/data/DatasourceFolder/DataSourceItem`
- a piece of content stored inside the current page. e.g. `page/data/dataSourceItem`
- the page itself, where the component is being placed

For this tutorial, you will be implementing the first option. You will:

1. Create a piece of content that can be used as a data source for the Text Teaser component.
1. Configure it to store inside a data folder within your Company Dev site.
1. Configure XM Cloud so that authors can create the content.
1. Connect a created data source to the Component on the page.
1. Configure XM Cloud so that whenever an author drags the Text Teaser component onto the page, they are asked to select an existing piece of content or create a new one.

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. The Text Teaser component created in [Tutorial: Create a Component using XM Cloud Component Builder](create-a-component)

## Create the module

The very first step will be to create a headless module. Modules are used to organize configuration and data models in a consistent structure so they can be re-used by the marketing team. Think of a module like an npm package for the structures you are creating. Defining modules makes it very easy for you to make your package/module available to multiple sites and teams. A site administrator will be able to 'install' your module and use it in a consistent way on any site they choose.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.
1. From your dashboard, select the XM Cloud environment where you have your Text Teaser Component created.

   <Image title="Sitecore Cloud Portal - Select App" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/2e80e2b3a84140b3b4f39eeebb0e159a?v=a548be2c" maxW="xl" />

1. From the app context flyout, select **Content Editor** to launch the XM Cloud content tree editing interface.

   <Image title="Sitecore Cloud Portal - Select Contnet Editor from Context Flyout" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/7ce271a777034bb58986652e46aa2786?v=11341d9e" maxW="xl" />

1. Navigate to: `sitecore/System/Settings/Project` in the content tree.

   <Image title="Content Editor - Navigate To Settings Project Folder" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/9a0696403dcb44ec98b88d6a851137c5?v=017e9c49" maxW="xl" />

1. Right-click on the **Project** item in the tree to pop open the context menu.
1. In the context menu select **Insert** and then **Folder** to create a new Folder.

   <Image title="Content Editor - Add Folder" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/4fb48baa009849829c26f9d1bb0ce864?v=91bbbf2b" maxW="xl" />

1. Specify **"Company Dev"** as the name of the folder, using the same name as the Site Collection.
   <Alert status="info">
   <AlertIcon />
   You will store the new headless module inside this new folder. However, the insert option for Headless Module is not available on this folder, only at the 'Project' folder level. You will need to go there to create the new module.
   </Alert>
1. Right-click on the **Project** item in the tree to pop open the context menu again.
1. In the context menu select **Insert** and then **Headless Module** to create the new module.

   <Image title="Content Editor - Insert Headless Module" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/65dd703df1ec4049a28a1e0005b8c10c?v=f60ebb8a" maxW="xl" />

1. Configure the Headless Module settings with these values by typing, selecting, or checking the appropriate checkbox:

   - **Module name:** Basic Components
   - **Add to module group:** `sitecore/system/settings/Project/Company Dev`
   - **System areas for which container folders should be created:** Templates, Branches, Renderings, and Placeholder Settings
   - **Module scaffolding actions:** Headless Site Setup

   <Image title="Content Editor - Configure Headless Module" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c24f492a9f144836854a0f7e1ae84f7b?v=bfc7888d" maxW="xl" />

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

1. Press the **Next** button to advance to the Location selection step.
1. Press the **Next** button to keep the default selection for the location folder.

   <Alert status="info">
   <AlertIcon />
   The currently selected folder is set by default when this step shows. If the Basic Components folder wasn't already selected in the tree, you could choose it during this step instead.
   </Alert>

1. Press the **Close** button to exit the wizard. The template has been created.

### Create the fields for the Text Teaser

You will now create the fields for the author to enter information for the Text Teaser.

1. In the content tree, select the **Text Teaser** template. A field builder interface will show on the main pane

   <Image title="Content Editor - Empty Template" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/983cc84d9d8a41b392d361f8fec9496c?v=e76ff4da" maxW="xl" />

1. In the **Builder** tab, type **Content** into the **Add a new section** field.

   <Image title="Content Editor - Section Added" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/a9c0e1fbc85c464e93108893bb6f1a32?v=492e4833" maxW="xl" />

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

   <Image title="Content Editor - Text Teaser Template has been created" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/f22899c6baf54eb2bfcf23eb033e9107?v=0e490ed4" maxW="xl" />

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
1. Press the **Next** button to advance to the Location selection step.
1. Press the **Next** button to keep the default selection for the location folder.
1. Press the **Close** button to exit the wizard. The template has been created.

### Configure a template icon

The icon for the Text Teaser is fine for the purposes of this tutorial, but it would be nice if the folder template looked like a folder. In these steps you will change the icon for a template.

1. In the content tree, select the **Text Teaser Folder** template.
1. In the ribbon, switch to the **Configure** tab

   <Image title="Content Editor - Open Configure Tab" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/b3b255c288774b05927bc1fc4f7eb3a2?v=b12a111e" maxW="xl" />

1. Click on the **Icon** button
   <Alert status="info">
   <AlertIcon />
   The first time that you try to load the Icon editing modal, Sitecore XM Cloud will start loading up the options to present to you. There may be a delay for you between clicking and then the display of the options if this is the first time using this feature in your instance.
   </Alert>

1. Select the Folder icon from the options shown.

   <Image title="Content Editor - Select Folder icon" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/1b93d1b6a6814d27a61bd142aefcc792?v=b3346dfb" maxW="xl" />

### Configure Insert Options

When an author tries to create a new content item, they are presented with the types of content that are allowed at that location. [Insert Options](https://doc.sitecore.com/xmc/en/developers/xm-cloud/insert-options.html) allow you to specify what content options are available to the author. You will now configure the options for a Text Teaser Folder so that Authors can easily create new Text Teaser content items or create more Text Teaser Folders to structure their content even further.

   <Alert status="info">
   <AlertIcon />
   In this section you will get a first look at Sitecore XM Cloud "Standard Values" for templates. The Standard Values on a template usually contain default values that are automatically set on content creation but can be updated by the author later. If you're interested in learning more about Standard Values, check out the documentation: https://doc.sitecore.com/xmc/en/developers/xm-cloud/standard-values-for-data-template-fields.html
   </Alert>

1. In the content tree, select the **Text Teaser Folder** template.
1. In the ribbon, switch to the **Builder Options** tab

   <Image title="Content Editor - Open Builder Options" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/05be5f1c4c9e4480979b841a60f0b36a?v=6f3df81a" maxW="xl" />

1. Click on the **Standard values** button to create a new definition for the template. A new item named `__Standard Values` will be created and the UI will automatically update to select this new item.
1. In the ribbon, switch to the **Configure** tab. You can now configure options for the \_\_Standard Values item.
1. Click the **Assign** button in the "Insert Options" ribbon chunk to launch the Insert Options dialog. This dialog allows us to select which templates can be inserted when the user has a Text Teaser Folder selected.

   <Image title="Content Editor - Assign insert options" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/af5561ec5826446cb52f75b7c381e109?v=891bce56" maxW="xl" />

1. In the selection tree on the left, navigate to `/Templates/Project/Company Dev/Basic Components`
1. Double-click on the **Text Teaser** template to add it to the **Selected** pane on the right
1. Double-click on the **Text Teaser Folder** template to add it to the **Selected** pane on the right

   <Image title="Content Editor - Select Insert Options" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/83ca1438aef7402491b87738e61dfb81?v=56fb9f4b" maxW="xl" />

1. Press the **OK** button to save the changes.

   <Alert status="info">
   <AlertIcon />
   Learn more about Insert Options: https://doc.sitecore.com/xmc/en/developers/xm-cloud/insert-options.html
   </Alert>

## Create content that can be used as a data source

You have now created your templates and configured them for the authors. You also created the module needed to make the feature-related items available to a site. In a real XM Cloud development project, there would be many different templates and folders defined in a module. At this stage, a team would usually need to configure the module to create the site-specific structure with all of those templates and folders and [add the module to an existing site collection or site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/add-a-module-to-an-existing-site-collection-or-site.html).

For the purpose of this tutorial, however, you will skip forward a few steps and manually create the structure since only the Text Teaser template is being used right now.

### Create data source folder manually

1. In the Content Editor, navigate to the Data folder in the Company Dev site that was created in the previous tutorial: `/sitecore/Content/Company Dev/Company Dev/Data`

   <Image title="Content Editor - Select Data Folder of Site" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d04350f52aa4495f9c1a665e0442ebad?v=f9a45e21" maxW="xl" />

1. Right-click and select **Insert** from the context menu and select **Insert from template** to launch a template selection dialog
   <Alert status="info">
   <AlertIcon />
   Note that there are no options for the Text Teaser templates listed in the context menu since you have not configured anything to help insert content into this Data folder. However, if you have logged in as an administrator account you will have the option for **Insert from template**. If you do not have that option, you will need to change account to one with full administrator access.
   </Alert>

   <Image title="Content Editor - Insert from Template" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/f1f5bae792be49e49144758a953e8d09?v=2bb14d33" maxW="xl" />

1. In the dialog, expand the Browse tree to `Templates/Project/Company Dev/Basic Components` so that the Text Teaser templates are visible for selection.

   <Image title="Content Editor - Select Text Teaser Folder Template" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/2509dbb85e4d4ca69b41fc58d8394ec6?v=acbb1415" maxW="xl" />

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

   <Image title="Content Editor - Create Data Source Item" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/294e3ee4030c45248cc8b7d2f54f5a27?v=372cdf22" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   The fields that are shown to you can now be edited. This is where a Content Author will create the parts of their content to be used on the component.
   </Alert>

1. In the Content pane, specify values for the Text Teaser:

   - **Headline:** How to use Components
   - **Subheadline:** Easy and smart ways designing your pages
   - **Content:** The Components builder of XM Cloud Components is a powerful tool that lets you create new components or modify already existing components using an intuitive WYSIWYG builder. It also lets you store the components in organized collections in the Components library. Learn more about how to use Components in this tutorial.

   <Image title="Content Editor - Insert Content" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/5a0332e9b80e410c87031276a0f1dc4d?v=79d85436" maxW="xl" />

## Use a data source template in XM Cloud Components

As a final stage for this tutorial, you will update the Text Teaser component in XM Cloud Components to use the new Text Teaser data template as a data source.

To start, you will take the data template that has been created and make it available in XM Cloud Components to be used as data source. This will be configured on the Settings item in the site.

### Configure the Text Teaser template for Components

1. In the Content Editor, select the **Settings** node on the **Company Dev** site: `/sitecore/content/Company Dev/Company Dev/Settings`
1. In the **Content** pane on the right side, scroll down through the fields and find the field named **FeaaS component data source templates**. You will find this field near the bottom of the list of fields.

   <Image title="Content Editor - Settings Item - Find FeaaS Component Data sources field" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c6ff34eac1e94b90b720788f52b23b9c?v=46646a8f" maxW="xl" />

1. On the left side of the field selector, navigate the tree to find your template at: `Templates/Project/Company Dev/Basic Components/Text Teaser`
1. Double-click on the Text Teaser template to add it to the list of **Selected** templates on the right side of the selector.

   <Image title="Content Editor - Select Text Teaser Template as FeaaS Component Data Source" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/7df82fef3a9a430794f4114e693e53e8?v=114c850c" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   Any templates showing in the 'Selected' side of this field are now available as templates that can be used as data sources in the Component Builder.
   </Alert>

1. Click the **Save** button in the ribbon to save the changes. Now the Text Teaser data template will be available to the Component builder.

### Validate data source is available in Components

Before releasing this to the authoring team, you need to ensure that the Text Teaser template is available in the Components builder. In this series of steps you will launch the Components application and try to find the new Text Teaser data source.

1. Return to the XM Cloud Tools pane. If you've closed that tab, you can get there with these instructions:

   - Login to the [Sitecore Cloud Portal](https://portal.sitecorecloud.io)
   - Select your App from the Apps list
   - From the flyout panel, select **Open app**
   - At the very top switch to **Tools**

1. In the **Tools** page, select the **Components** card to launch the Component builder.
1. At the top, switch to the **Data sources** section

   <Image title="Component Builder - Open Data Sources page" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/76acdd81968f4c73a0de16a134e9be12?v=c3035a2c" maxW="xl" />

1. Scroll down through the list of data sources and find the one named **Text Teaser**

   <Image title="Component Builder - Find Text Teaser data source listed" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/2d0a613e37a64a04ba3e42749a14daed?v=1447baab" maxW="xl" />

### Map component heading element to Headline text field

The component that was created [in the previous tutorial](create-a-component) uses static data in XM Cloud Components. As part of using the new data template, you need to [map this Text Teaser data source to the visual elements](https://doc.sitecore.com/xmc/en/users/xm-cloud/map-data-from-an-xm-data-source-to-a-component.html) in XM Cloud Components. You are going to start by mapping the headline text field.

1. Switch to the **Components** tab in the top menu to launch the Components visual builder.
1. Scroll to the section labelled **Basic Components**. This section will list all the components you have made available in the Basic Components section. Currently, there is only the **Text Teaser**.

   <Image title="Component Builder - Find Text Teaser Component Listed" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/b37aeebcb7c14554876c34e433007d03?v=38ef5fc1" maxW="xl" />

1. Click on the **Text Teaser** card to launch the editor on this component

   <Image title="Component Builder - Open Editor" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/6ab1f6b4c32b4965bb0cc67d16adc603?v=c671924c" maxW="xl" />

1. Click on the primary headline in the Component so that you enter the 'editing' mode for that field.

   <Image title="Component Builder - Select Headline field" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/bd2c84858905440d92b63857035fea7d?v=26ce7b2a" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   As you select visual elements in the editor you will see the details on the right change to show you the new options for that visual element. In this case, you can see the **Text** part in the **Content** area which is where you need to go next.
   </Alert>

1. On the right side panel, click on the **Text** option. This will show that the text is currently **Static**
1. Change the mode from **Static** to **Mapped**. This will show you the source mapping options.

   <Image title="Component Builder - Changed to Mapped" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/f3ba1c8340524cef9ee5646351ae2268?v=954c84ea" maxW="xl" />

1. Find and select the **Text Teaser** source in the list of available sources.

   <Image title="Component Builder - Map Text Teaser Template" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d021cde978204dc1b49199716d44c79b?v=039710e5" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   Note that the **Sample** shows some example fields and their values. This can help you make sure you have the right type of source selected for the component you are editing.
   </Alert>

1. Click on the **Next** button to advance to the **Path** configuration step. This is where you will map the fields from the template to the visual element.
1. Select the **Headline** field to map the data from that Text Teaser field to the heading element in the component.

   <Image title="Component Builder - Select Headline Field" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/53aea1074001443f9f3db366dc19b6c7?v=fc202ee2" maxW="xl" />

1. Click **Complete** to finish the mapping process.

### Map component sub-heading element to Subheadline text field

You will now repeat the process for the the subtitle/subheading element. You will select the subheading visual element and map that to the Text field "Subheadline" in the Text Teaser template

   <Alert status="warning">
   <AlertIcon />
   **Challenge:** Can you do the mapping with only the information above? If not, continue on for the full detailed steps!
   </Alert>

1. Click on the secondary headline/subheadline in the Component so that you enter the 'editing' mode for that field.

   <Image title="Component Builder - Select secondary headline" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c459eff940374dd48cf7609c8ef236a5?v=7bacac4b" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   The pane on the right updates and you can see the **Text** part in the **Content** area which is where you need to go next.
   </Alert>

1. On the right side panel, click on the **Text** option. This will show that the text is currently **Static**
1. Change the mode from **Static** to **Mapped**. This will show you the source mapping options.
1. Click on the **Next** button to advance to the **Path** configuration step. This is where you will map the fields from the template to the visual element.
1. Select the **Subheadline** field to map the data from that Text Teaser field to the heading element in the component.

   <Image title="Component Builder - Mapping Template Field with Component Field" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/a958a5baf54e475c9eb6d18c089f28c0?v=37bb3625" maxW="xl" />

1. Click **Complete** to finish the mapping process.

### Mapping a Rich Text field to an HTML Block element

In the Text Teaser component that was created in the previous tutorial, the right-side of the component is intended to have a full description (or 'teaser') for the user to read. Initially, the copied content that was used contains several paragraphs and list items, which does not map to a single field. Additionally, the paragraph tags do not render the formatting from a Rich Text field, so even if you have a single paragraph tag this will not meet the need.

In order to create a section of rich content and then map it to a Rich Text field on a data source and preserve the formatting, you need to do some cleanup to the existing content and put in the correct type of element: an HTML Block. In this section of the tutorial, you will clean up the component and map the Rich Text field to an HTML Block.

1. In the Components builder, select the right-side of the Text Teaser component and remove all of the paragraphs of content that are currently there.

   <Image title="Component Builder - empty right card" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/e3b5ab8995b3441fa3bcd89f58d9e01f?v=461899b9" maxW="xl" />

1. Above the empty placeholder, click on the **Add element** button.
1. Select the **HTML Block** element to insert it into the placeholder.

   <Image title="Component Builder - Add HTML Block Element" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/df0f3c37e5f647e1beb62b94990e6d45?v=493fb517" maxW="xl" />

1. Click on the HTML Block element that was inserted to focus your editing selection.
1. On the right side panel, click on the **HTMLContent** option. This will show that the text is currently **None**
1. Map the HTML Block to the **Content** field on the **Text Teaser** data source

   <Image title="Component Builder - Map HTML Block with Content field" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c44b0b9cbd18467fbcd0d9504e4da246?v=23fc0d8c" maxW="xl" />

1. Click **Complete** to save the mapping changes.

### Make the changes to the component available to authors

Now that you have completed all of the mapping changes you will need to make the changes available to Pages by staging the component again.

1. In the Components builder tool, click on the **Restage** button above the component

   <Image title="Component Builder - Restage Component" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/f290085bb729483dae196e3fa549dff6?v=b24c512e" maxW="xl" />

### Update the component in Pages to use a data source

In the previous tutorial, you added a Text Teaser component to the home page. After making these mapping changes, the existing component will now need a data source to display correctly as there is no more static content on the component. You will now go to Pages and fix the component so that it can pull the data from one of the Text Teaser data sources that were created in this tutorial.

1. Return to the XM Cloud Tools pane. If you've closed that tab, you can get there with these instructions:

   - Login to the [Sitecore Cloud Portal](https://portal.sitecorecloud.io)
   - Select your App from the Apps list
   - From the flyout panel, select **Open app**
   - At the very top switch to **Tools**

1. In the **Tools** page, select the **Pages** card to launch the Pages editor. The home page will display and you can see that the Text Teaser component is blank.

   <Image title="XM Cloud Dashboard - Open Pages Editor" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/ad1c83bf8dde470785dfa96ff0d67a61?v=82be1f21" maxW="xl" />

1. Click on the blank component to select it.
1. In the context menu above the component, click on the **Delete** action button. This will remove the current version of the component from the page.

   <Image title="Pages - Text Teaser Component is blank" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/cb12d539ef0d4062aae0456c1c69d31f?v=f9a89b18" maxW="xl" />

1. In the left page, scroll down the **Components** listing to find the **Text Teaser** component.

   <Image title="Pages - Add Text Teaser Component again" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/bc8c9c8e75ed44798502f47f03b6af03?v=a78c9c08" maxW="xl" />

1. Drag the Text Teaser component onto the Pages canvas to add the component to the page. A dialog will display prompting you to assign a content item (data source) to the component.

   <Image title="Pages - Assign Content Item dialog" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/2b7b8c5622394ec39e30bc1469d7c209?v=26e474d8" maxW="xl" />

1. Expand and navigate the displayed Content items tree to find the Text Teasers folder: `Company Dev/Company Dev/Data/Teasers`
1. Select the **How to Use Components** content item.

   <Image title="Pages - Select content item" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/0972e8bb48694b578408fe53a71b93ff?v=1dbb7935" maxW="xl" />

1. Click the **Assign** button to connect this content item to the Text Teaser component on the page.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have now updated the Text Teaser component to work from a piece of re-usable authored content instead of using static content added to the component directly. You also learned how to create templates, how to configure insert options, how to configure modules and how to map visual elements to template fields.
</Alert>

### Related XM Cloud Documentation
- [Data Templates](https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-templates.html)
- [Data definition and template overview](https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-definition-and-template-overview.html)
- [The Standard Template](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-standard-template.html)
- [Standard values for data template fields](https://doc.sitecore.com/xmc/en/developers/xm-cloud/standard-values-for-data-template-fields.html)
- [Insert Options](https://doc.sitecore.com/xmc/en/developers/xm-cloud/insert-options.html)
- [Add a module to an existing site collection or site](https://doc.sitecore.com/xmc/en/developers/xm-cloud/add-a-module-to-an-existing-site-collection-or-site.html)
- [Get your content from an XM data source](https://doc.sitecore.com/xmc/en/users/xm-cloud/get-your-content-from-an-xm-data-source.html)
- [Map data from an XM data source to a component](https://doc.sitecore.com/xmc/en/users/xm-cloud/map-data-from-an-xm-data-source-to-a-component.html)


### Related XM Cloud Accelerate guidance for Sitecore Partners
- [Project Solution Setup](/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup)
- [Creating a Site](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site)
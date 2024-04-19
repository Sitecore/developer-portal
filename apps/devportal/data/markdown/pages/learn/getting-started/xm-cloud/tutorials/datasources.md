---
title: 'Tutorial: How to Create Component Data Sources in XM Cloud'
description: 'Learn about defining and creating new content items that can be used by authors as data sources in the XM Cloud Component builder.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, you will go through the steps to update the Text Teaser component to use content data sources. You will learn:

- How to create a headless module and new data templates for the Text Teaser component in XM Cloud Content Editor
- How to create new content items from your templates to be used as data for the Text Teaser component
- How to update the Text Teaser component to use the data in your content items

## Overview

In the previous tutorial, you learned how to use XM Cloud Components to centrally manage the content of a Text Teaser component and use that component in XM Cloud Pages. Now you will evolve the component so it can be used as a reusable visual building block in XM Cloud where the content can be different on each page. To accomplish this, you will need a data model for the Text Teaser component so that authors can create different content for each use of the Text Teaser component.

To help authors create the content, you will need to set up a data model with the fields needed by the Text Teaser component. You are going to create a data model with the following fields:

- Headline (Single Line Text)
- Subheadline (Single Line Text)
- Content (Rich Text)

This data model is referred to as a 'data source' in XM Cloud. Data sources in XM Cloud can be either:

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

In order to complete the following tutorial, you will need these resouces:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. The Text Teaser component created in [Tutorial: Create a Component using XM Cloud Component Builder](create-a-component)

## Create the module

The very first step will be to create a headless module. Modules are used to organize content in a consistent structure so it can be re-used by the marketing team. Think of a module like an npm package for content. Defining modules makes it very easy for you to make your package/module available to multiple sites and teams. An author will be able to 'install' your module and use it in a consistent way on any site they choose.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.
1. From your dashboard, select the XM Cloud environment where you have your Text Teaser Component created.

   `INSERT SCREENSHOT OF XM CLOUD APP BEING SELECTED FROM DASHBOARD`

1. From the app context flyout, select **Content Editor** to launch the XM Cloud content tree editing interface.

   `INSERT SCREENSHOT OF XM CLOUD APP CONTEXT FLYOUT`

1. Navigate to: `System/Settings/Project` in the content tree.

   `INSERT SCREENSHOT OF CONTENT TREE EXPANDED TO SHOW PATH`

1. Right-click on the **Project** item in the tree to pop open the context menu.
1. In the context menu select **Insert** and then **Folder** to create a new Folder.

   `INSERT SCREENSHOT OF INSERT OPTIONS`

1. Specify **"Company Dev"** as the name of the folder, using the same name as the Site Collection.
   <Alert status="info">
   <AlertIcon />
   You will store the new headless module inside this new folder. However, the insert option for Headless Module is not available on this folder, only at the 'Project' folder level. You will need to go there to create the new module.
   </Alert>
1. Right-click on the **Project** item in the tree to pop open the context menu again.
1. In the context menu select **Insert** and then **Headless Module** to create the new module.

   `INSERT SCREENSHOT OF INSERT OPTIONS`

1. Configure the Headless Module settings:

   - **Module name:** Basic Components
   - **Add to module group:** `sitecore/system/settings/Company Dev`
   - **System areas for container folders:** Templates, Branch Templates, Renderings, and Placeholder Settings
   - **Module scaffolding actions:** Headless Site Setup

   `INSERT SCREENSHOT OF DIALOG WITH FILLED IN VALUES`

   <Alert status="info">
   <AlertIcon />
   When configuring scaffolding actions, you'll notice an option for Headless Tenant Setup. Tenants are an older terminology. These are now called Site Collections.
   </Alert>

## Creating the templates

The Headless Module has now been created. You can now check that the required folders exist and start creating the required templates. You will create two templates:

- **Text Teaser** to hold the data from the author, and
- **Text Teaser Folder** to hold created Text Teaser content items.

You will also configure these templates to make life a little bit easier for the authors who want to create Text Teasers.

### Create the Text Teaser template

These steps will create the Text Teaser template.

1. In the Content Editor tree, navigate to `/sitecore/Templates/Project/Company Dev/` and select the **Basic Components** folder
1. Click on the **New Template** button or right-click on the **Basic Components** folder and select **Insert > New Template**
1. Write **"Text Teaser"** in the **Name** field to name the template.

   <Alert status="info">
   <AlertIcon />
   Leave the Base template with the default value (Standard template) for now. If you were creating a series of templates that inherited fields from each other, you might need to specify a base template to inherit from. The default Standard template will provide all the required fields your Text Teaser template will need so it is enough for the purpose of this tutorial.
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

   `INSERT SCREENSHOT OF EMPTY BUILDER TAB`

1. In the **Builder** tab, type **Content** into the **Add a new section** field.

   `INSERT SCREENSHOT OF BUILDER TAB WITH Content SECTION`

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

   `INSERT SCREENSHOT OF BUILDER TAB WITH THE NEW FIELDS`

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

   `INSERT SCREENSHOT OF CONFIGURE TAB`

1. Click on the **Icon** button
   <Alert status="info">
   <AlertIcon />
   The first time that you try to load the Icon editing modal, Sitecore XM Cloud will start loading up the options to present to you. There may be a delay for you between clicking and then the display of the options if this is the first time using this feature in your instance.
   </Alert>

1. Select the Folder icon from the options shown.

   `INSERT SCREENSHOT OF ICONS OPTIONS`

### Configure Insert Options

When an author tries to create a new content item, they are presented with the types of content that are allowed at that location. Insert Options allow you to specify what content options are available to the author. You will now configure the options for a Text Teaser Folder so that Authors can easily create new Text Teaser content items or create more Text Teaser Folders to structure their content even further.

   <Alert status="info">
   <AlertIcon />
   In this section you will get a first look at Sitecore XM Cloud "Standard Values" for templates. The Standard Values on a template usually contain default values that are automatically set on content creation but can be updated by the author later. If you're interested in learning more about Standard Values, check out the documentation: https://doc.sitecore.com/xmc/en/developers/xm-cloud/standard-values-for-data-template-fields.html
   </Alert>

1. In the content tree, select the **Text Teaser Folder** template.
1. In the ribbon, switch to the **Builder Options** tab

   `INSERT SCREENSHOT OF Builder Options TAB`

1. Click on the **Standard values** button to create a new definition for the template. A new item named `__Standard Values` will be created and the UI will automatically update to select this new item.
1. In the ribbon, switch to the **Configure** tab. You can now configure options for the \_\_Standard Values item.
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

## Create content that can be used as a data source

You have now created your templates and configured them for the authors. You also created the module needed to make the feature-related items available to a site. In a real XM Cloud development project, there would be many different templates and folders defined in a module. At this stage, a team would usually need to configure the module to create the site-specific structure with all of those templates and folders.

For the purpose of this tutorial, however, you will skip forward a few steps and manually create the structure since only the Text Teaser template is being used right now.

### Create data source folder manually

1. In the Content Editor, navigate to the Data folder in the Company Dev site that was created in the previous tutorial: `/sitecore/Content/Company Dev/Company Dev/Data`

   `SCREENSHOT OF CONTENT TREE WITH Data folder selected`

1. Right-click and select **Insert** from the context menu and select **Insert from template** to launch a template selection dialog
   <Alert status="info">
   <AlertIcon />
   Note that there are no options for the Text Teaser templates listed in the context menu since you have not configured anything to help insert content into this Data folder. However, if you have logged in as an administrator account you will have the option for **Insert from template**. If you do not have that option, you will need to change account to one with full administrator access.
   </Alert>

   `SCREENSHOT OF DIALOG WITH ONLY Insert from template OPTION`

1. In the dialog, expand the Browse tree to `Templates/Project/Company Dev/Basic Components` so that the Text Teaser templates are visible for selection.

   `SCREENSHOT OF BROWSE TREE EXPANDED TO SHOW TEMPLATES`

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

   `INSERT SCREENSHOT OF CREATED ITEM`

   <Alert status="info">
   <AlertIcon />
   The fields that are shown to you can now be edited. This is where a Content Author will create the parts of their content to be used on the component.
   </Alert>

1. In the Content pane, specify values for the Text Teaser:

   - **Headline:** How to use Components
   - **Subheadline:** Easy and smart ways designing your pages
   - **Content:** The Components builder of XM Cloud Components is a powerful tool that lets you create new components or modify already existing components using an intuitive WYSIWYG builder. It also lets you store the components in organized collections in the Components library. Learn more about how to use Components in this tutorial.

   `INSERT SCREENSHOT OF FILLED OUT FIELDS`

## Use a data source template in XM Cloud Components

As a final stage for this tutorial, you will update the Text Teaser component in XM Cloud Components to use the new Text Teaser data template as a data source.

To start, you will take the data template that has been created and make it available in XM Cloud Components to be used as data source. This will be configured on the Settings item in the site.

### Configure the Text Teaser template for Components

1. In the Content Editor, select the **Settings** node on the **Company Dev** site: `/sitecore/content/Company Dev/Company Dev/Settings`
1. In the **Content** pane on the right side, scroll down through the fields and find the field named **FeaaS component data source templates**. You will find this field near the bottom of the list of fields.

   `SCREENSHOT OF FEaaS field`

1. On the left side of the field selector, navigate the tree to find your template at: `Templates/Project/Company Dev/Basic Components/Text Teaser`
1. Double-click on the Text Teaser template to add it to the list of **Selected** templates on the right side of the selector.

   `SCREENSHOT OF SELECTED TEMPLATE AND EXPANDED TREE`

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

   `SCREENSHOT OF COMPONENTS DATA SOURCES PAGE`

1. Scroll down through the list of data sources and find the one named **Text Teaser**

   `SCREENSHOT OF TEXT TEASER DATA SOURCE`

### Map component heading element to Headline text field

The component that was created in the previous tutorials uses static data in XM Cloud Components. As part of using the new data template, you need to map this Text Teaser data source to the visual elements in XM Cloud Components. You are going to start by mapping the headline text field.

1. Switch to the **Components** tab in the top menu to launch the Components visual builder.
1. Scroll to the section labelled **Basic Components**. This section will list all the components you have made available in the Basic Components section. Currently, there is only the **Text Teaser**.

   `SCREENSHOT OF COMPONENTS LISTING SHOWING TEXT TEASER`

1. Click on the **Text Teaser** card to launch the editor on this component

   `SCREENSHOT OF Text Teaser COMPONENT`

1. Click on the primary headline in the Component so that you enter the 'editing' mode for that field.

   `SCREENSHOT OF HEADLINE EDITING MODE`

   <Alert status="info">
   <AlertIcon />
   As you select visual elements in the editor you will see the details on the right change to show you the new options for that visual element. In this case, you can see the **Text** part in the **Content** area which is where you need to go next.
   </Alert>

1. On the right side panel, click on the **Text** option. This will show that the text is currently **Static**
1. Change the mode from **Static** to **Mapped**. This will show you the source mapping options.

   `SCREENSHOT OF MAPPED OPTIONS`

1. Find and select the **Text Teaser** source in the list of available sources.

   `SCREENSHOT OF TEXT TEASER SELECTED - ZOOMED IN`

   <Alert status="info">
   <AlertIcon />
   Note that the **Sample** shows some example fields and their values. This can help you make sure you have the right type of source selected for the component you are editing.
   </Alert>

1. Click on the **Next** button to advance to the **Path** configuration step. This is where you will map the fields from the template to the visual element.
1. Select the **Headline** field to map the data from that Text Teaser field to the heading element in the component.

   `INSERT SCREENSHOT OF MAPPING`

1. Click **Complete** to finish the mapping process.

### Map component sub-heading element to Subheadline text field

You will now repeat the process for the the subtitle/subheading component. You will select the subheading visual element and map that to the Text field "Subheadline" in the Text Teaser template

   <Alert status="warning">
   <AlertIcon />
   **Challenge:** Can you do the mapping with only the information above? If not, continue on for the full detailed steps!
   </Alert>

1. Click on the secondary headline/subheadline in the Component so that you enter the 'editing' mode for that field.

   `SCREENSHOT OF SUBHEADLINE EDITING MODE`

   <Alert status="info">
   <AlertIcon />
   The pane on the right updates and you can see the **Text** part in the **Content** area which is where you need to go next.
   </Alert>

1. On the right side panel, click on the **Text** option. This will show that the text is currently **Static**
1. Change the mode from **Static** to **Mapped**. This will show you the source mapping options.
1. Find and select the **Text Teaser** source in the list of available sources.
1. Click on the **Next** button to advance to the **Path** configuration step. This is where you will map the fields from the template to the visual element.
1. Select the **Subheadline** field to map the data from that Text Teaser field to the heading element in the component.

   `INSERT SCREENSHOT OF MAPPING`

1. Click **Complete** to finish the mapping process.

### Mapping a Rich Text field to an HTML Block element

In the Text Teaser component that was created in the previous tutorial, the right-side of the component is intended to have a full description (or 'teaser') for the user to read. Initially, the copied content that was used contains several paragraphs and list items, which does not map to a single field. Additionally, the paragraph tags do not render the formatting from a Rich Text field, so even if you have a single paragraph tag this will not meet the need.

In order to create a section of rich content and then map it to a Rich Text field on a data source and preserve the formatting, you need to do some cleanup to the existing content and put in the correct type of element: an HTML Block. In this section of the tutorial, you will clean up the component and map the Rich Text field to an HTML Block.

1. In the Components builder, select the right-side of the Text Teaser component and remove all of the paragraphs of content that are currently there.

   `SCREENSHOT OF RIGHT-SIDE OF COMPONENT removed`

1. Above the empty placeholder, click on the **Add element** button.
1. Select the **HTML Block** element to insert it into the placeholder.
   `SCREENSHOT OF BLOCK ELEMENTS`

1. Click on the HTML Block element that was inserted to focus your editing selection.
1. On the right side panel, click on the **HTMLContent** option. This will show that the text is currently **None**
1. Map the HTML Block to the **Content** field on the **Text Teaser** data source

   `INSERT SCREENSHOT OF HTML BLOCK ELEMENT MAPPED TO CONTENT`

1. Click **Complete** to save the mapping changes.

### Make the changes to the component available to authors

Now that you have completed all of the mapping changes you will need to make the changes available to Pages by staging the component again.

1. In the Components builder tool, click on the **Restage** button above the component

   `INSERT SCREENSHOT OF RESTAGE BUTTON LOCATION`

### Update the component in Pages to use a data source

In the previous tutorial, you added a Text Teaser component to the home page. After making these mapping changes, the existing component will now need a data source to display correctly as there is no more static content on the component. You will now go to Pages and fix the component so that it can pull the data from one of the Text Teaser data sources that were created in this tutorial.

1. Return to the XM Cloud Tools pane. If you've closed that tab, you can get there with these instructions:

   - Login to the [Sitecore Cloud Portal](https://portal.sitecorecloud.io)
   - Select your App from the Apps list
   - From the flyout panel, select **Open app**
   - At the very top switch to **Tools**

1. In the **Tools** page, select the **Pages** card to launch the Pages editor. The home page will display and you can see that the Text Teaser component is blank.

   `INSERT SCREENSHOT OF PAGES WITH BLANK COMPONENT`

1. Click on the blank component to select it.
1. In the context menu above the component, click on the **Delete** action button. This will remove the current version of the component from the page.

   `INSERT SCREENSHOT OF CONTEXT BAR WITH DELETE BUTTON HOVERED OVER BY MOUSE`

1. In the left page, scroll down the **Components** listing to find the **Text Teaser** component.

   `INSERT SCREENSHOT OF COMPONENTS PANE`

1. Drag the Text Teaser card onto the Pages canvas to add the component to the page. A dialog will display prompting you to assign a content item (data source) to the component.

   `INSERT SCREENSHOT OF DIALOG`

1. Expand and navigate the displayed Content items tree to find the Text Teasers folder: `Company Dev/Company Dev/Data/Teasers`
1. Select the **How to Use Components** content item.

   `INSERT SCREENSHOT OF DIALOG WITH CONTENT ITEM SELECTED`

1. Click the **Assign** button to connect this content item to the Text Teaser component on the page.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have now updated the Text Teaser component to work from a piece of re-usable authored content instead of using static content added to the component directly. You also learned how to create templates, how to configure insert options, how to configure modules and how to map visual elements to template fields.
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

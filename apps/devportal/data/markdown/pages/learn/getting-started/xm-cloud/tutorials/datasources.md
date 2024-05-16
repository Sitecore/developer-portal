---
title: 'Tutorial: How to Create Component Data Sources in XM Cloud'
description: 'Learn about defining and creating new content items that can be used by authors as data sources in the XM Cloud Component builder.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/a958a5baf54e475c9eb6d18c089f28c0?v=37bb3625'
pageType: 'tutorial'
menuOrder: 5
---

<Introduction title="What You are Going to Learn">

In this tutorial, you will go through the steps to update the Text Teaser component to use content data sources. You will learn:

- How to create new content items from your new data templates to be used as data for the Text Teaser component
- How to update the Text Teaser component to use the data in your content items

</Introduction>

## Overview

Previously, you learned how to use XM Cloud Components to centrally manage the content of a Text Teaser component and use that component in XM Cloud Pages. You then learned how to create a data model for the Text Teaser component. Now you will evolve the component itself so it can be used as a reusable visual building block in XM Cloud where the content can be different on each page. To accomplish this, you will need to create a new data source and then map it to the visual elements in your component.

For this tutorial, you will:

1. Connect the created data source to the Component on the page.
1. Configure XM Cloud so that whenever an author drags the Text Teaser component onto the page, they are asked to select an existing piece of content or create a new one.

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. The Text Teaser component created in [Tutorial: Create a Component using XM Cloud Component Builder](create-a-component)
1. The Text Teaser data source created in [Tutorial: How to Create a Component Data Template in XM Cloud](create-data-template)

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
   **Congratulations!** You have now updated the Text Teaser component to work from a piece of re-usable authored content instead of using static content added to the component directly. You also learned how to  how to map visual elements to template fields.
</Alert>

### Related XM Cloud Documentation

- [Get your content from an XM data source](https://doc.sitecore.com/xmc/en/users/xm-cloud/get-your-content-from-an-xm-data-source.html)
- [Map data from an XM data source to a component](https://doc.sitecore.com/xmc/en/users/xm-cloud/map-data-from-an-xm-data-source-to-a-component.html)

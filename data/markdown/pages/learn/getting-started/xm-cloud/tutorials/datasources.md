---
title: 'Tutorial: How to Map Component Data Sources in XM Cloud'
description: 'Learn about how to map fields from a data source to the visual elements in the XM Cloud Component builder.'
openGraphImage: '/images/getting-started/tutorials/xm-cloud/map-component-datasources-08.jpg'
pageType: 'tutorial'
menuOrder: 6
---

<Introduction title="What You are Going to Learn">

In this tutorial, you will go through the steps to update the Text Teaser component to use content data sources. You will learn:

- How to update the Text Teaser component to use the data in your content items
- How to map different types of content
- How to make your changes available to authors

</Introduction>

## Overview

Previously, you learned how to use XM Cloud Components to centrally manage the content of a Text Teaser component and use that component in XM Cloud Pages. You then learned how to create a data model for the Text Teaser component and make it available. Now you will evolve the component itself so it can be used as a reusable visual building block in XM Cloud where the content can be different on each page. To accomplish this, you will map a data source to the visual elements in your component.

For this tutorial, you will:

1. Connect the created Text Teaser data source to the Text Teaser Component on the page and map each visual element to fields.
1. Share your changes with other authors in XM Cloud
1. Configure XM Cloud so that whenever an author drags the Text Teaser component onto the page, they are asked to select an existing piece of content or create a new one.

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. The Text Teaser component created in [Tutorial: Create a Component using XM Cloud Component Builder](create-a-component)
1. The Text Teaser data source created in [Tutorial: How to Create a Component Data Template in XM Cloud](create-data-template)
1. A FEaaS data source configuration done in [Tutorial: How to make a data template available to the Component builder in XM Cloud](configure-availabile-components-data-sources)

## Map data source fields to XM Cloud Component visual elements

The Text Teaser component that was created [in a previous tutorial](create-a-component) uses static data in XM Cloud Components. As part of using the new Text Teaser data template, you need to [map this Text Teaser data source to the visual elements](https://doc.sitecore.com/xmc/en/users/xm-cloud/map-data-from-an-xm-data-source-to-a-component.html) in XM Cloud Components.

### Map component heading element to Headline text field

You are going to start by mapping the headline text field.

1. Switch to the **Components** tab in the top menu to launch the Components visual builder.
1. Scroll to the section labelled **Basic Components**. This section will list all the components you have made available in the Basic Components section. Currently, there is only the **Text Teaser**.

   <Image title="Component Builder - Find Text Teaser Component Listed" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-01.jpg" maxW="xl" />

1. Click on the **Text Teaser** card to launch the editor on this component

   <Image title="Component Builder - Open Editor" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-02.jpg" maxW="xl" />

1. Click on the primary headline in the Component so that you enter the 'editing' mode for that field.

   <Image title="Component Builder - Select Headline field" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-03.jpg" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   As you select visual elements in the editor you will see the details on the right change to show you the new options for that visual element. In this case, you can see the **Text** part in the **Content** area which is where you need to go next.
   </Alert>

1. On the right side panel, click on the **Text** option. This will show that the text is currently **Static**
1. Change the mode from **Static** to **Mapped**. This will show you the source mapping options.

   <Image title="Component Builder - Changed to Mapped" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-04.jpg" maxW="xl" />

1. Find and select the **Text Teaser** source in the list of available sources.

   <Image title="Component Builder - Map Text Teaser Template" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-05.jpg" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   Note that the **Sample** shows some example fields and their values. This can help you make sure you have the right type of source selected for the component you are editing.
   </Alert>

1. Click on the **Next** button to advance to the **Path** configuration step. This is where you will map the fields from the template to the visual element.
1. Select the **Headline** field to map the data from that Text Teaser field to the heading element in the component.

   <Image title="Component Builder - Select Headline Field" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-06.jpg" maxW="xl" />

1. Click **Complete** to finish the mapping process.

### Map component sub-heading element to Subheadline text field

You will now repeat the process for the the subtitle/subheading element. You will select the subheading visual element and map that to the Text field "Subheadline" in the Text Teaser template

   <Alert status="warning">
   <AlertIcon />
   **Challenge:** Can you do the mapping with only the information above? If not, continue on for the full detailed steps!
   </Alert>

1. Click on the secondary headline/subheadline in the Component so that you enter the 'editing' mode for that field.

   <Image title="Component Builder - Select secondary headline" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-07.jpg" maxW="xl" />

   <Alert status="info">
   <AlertIcon />
   The pane on the right updates and you can see the **Text** part in the **Content** area which is where you need to go next.
   </Alert>

1. On the right side panel, click on the **Text** option. This will show that the text is currently **Static**
1. Change the mode from **Static** to **Mapped**. This will show you the source mapping options.
1. Click on the **Next** button to advance to the **Path** configuration step. This is where you will map the fields from the template to the visual element.
1. Select the **Subheadline** field to map the data from that Text Teaser field to the heading element in the component.

   <Image title="Component Builder - Mapping Template Field with Component Field" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-08.jpg" maxW="xl" />

1. Click **Complete** to finish the mapping process.

### Mapping a Rich Text field to an HTML Block element

In the Text Teaser component that was created in the previous tutorial, the right-side of the component is intended to have a full description (or 'teaser') for the user to read. Initially, the copied content that was used contains several paragraphs and list items, which does not map to a single field. Additionally, the paragraph tags do not render the formatting from a Rich Text field, so even if you have a single paragraph tag this will not meet the need.

In order to create a section of rich content and then map it to a Rich Text field on a data source and preserve the formatting, you need to do some cleanup to the existing content and put in the correct type of element: an HTML Block. In this section of the tutorial, you will clean up the component and map the Rich Text field to an HTML Block.

1. In the Components builder, select the right-side of the Text Teaser component and remove all of the paragraphs of content that are currently there.

   <Image title="Component Builder - empty right card" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-09.jpg" maxW="xl" />

1. Above the empty placeholder, click on the **Add element** button.
1. Select the **HTML Block** element to insert it into the placeholder.

   <Image title="Component Builder - Add HTML Block Element" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-10.jpg" maxW="xl" />

1. Click on the HTML Block element that was inserted to focus your editing selection.
1. On the right side panel, click on the **HTMLContent** option. This will show that the text is currently **None**
1. Map the HTML Block to the **Content** field on the **Text Teaser** data source

   <Image title="Component Builder - Map HTML Block with Content field" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-11.jpg" maxW="xl" />

1. Click **Complete** to save the mapping changes.

## Make the changes to the component available to authors

Now that you have completed all of the mapping changes you will need to make the changes available to Pages by staging the component again.

1. In the Components builder tool, click on the **Restage** button above the component

   <Image title="Component Builder - Restage Component" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-12.jpg" maxW="xl" />

## Update the existing Text Teaser to use a data source

In the previous tutorial, you added a Text Teaser component to the home page. After making these mapping changes, the existing component will now need a data source to display correctly as there is no more static content on the component. You will now go to Pages and fix the component so that it can pull the data from one of the Text Teaser data sources that were created in this tutorial.

1. Return to the XM Cloud Tools pane. If you've closed that tab, you can get there with these instructions:

   - Login to the [Sitecore Cloud Portal](https://portal.sitecorecloud.io)
   - Select your App from the Apps list
   - From the flyout panel, select **Open app**
   - At the very top switch to **Tools**

1. In the **Tools** page, select the **Pages** card to launch the Pages editor. The home page will display and you can see that the Text Teaser component is blank.

   <Image title="XM Cloud Dashboard - Open Pages Editor" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-13.jpg" maxW="xl" />

1. Click on the blank component to select it.
1. In the context menu above the component, click on the **Delete** action button. This will remove the current version of the component from the page.

   <Image title="Pages - Text Teaser Component is blank" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-14.jpg" maxW="xl" />

1. In the left page, scroll down the **Components** listing to find the **Text Teaser** component.

   <Image title="Pages - Add Text Teaser Component again" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-15.jpg" maxW="xl" />

1. Drag the Text Teaser component onto the Pages canvas to add the component to the page. A dialog will display prompting you to assign a content item (data source) to the component.

   <Image title="Pages - Assign Content Item dialog" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-16.jpg" maxW="xl" />

1. Expand and navigate the displayed Content items tree to find the Text Teasers folder: `Company Dev/Company Dev/Data/Teasers`
1. Select the **How to Use Components** content item.

   <Image title="Pages - Select content item" src="/images/getting-started/tutorials/xm-cloud/map-component-datasources-17.jpg" maxW="xl" />

1. Click the **Assign** button to connect this content item to the Text Teaser component on the page.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have now updated the Text Teaser component to work from a piece of re-usable authored content instead of using static content added to the component directly. You also learned how to map visual elements to template fields.
</Alert>

### Related XM Cloud Documentation

- [Get your content from an XM data source](https://doc.sitecore.com/xmc/en/users/xm-cloud/get-your-content-from-an-xm-data-source.html)
- [Map data from an XM data source to a component](https://doc.sitecore.com/xmc/en/users/xm-cloud/map-data-from-an-xm-data-source-to-a-component.html)

---
title: 'Tutorial: Create your first XM Cloud no-code component'
description: 'In this tutorial, we will go through the steps to to create a Text Teaser component with a no-code approach using XM Cloud Component builder'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, we will go through the steps to to create a Text Teaser component with a no-code approach using XM Cloud Component builder. The walkthrough will not show all possible options, but will take you through a process of defining and laying out a new Component to use on your home page. You will learn:

- `TODO: LEARNING OUTCOME ONE`
- `TODO: LEARNING OUTCOME TWO`
- `TODO: LEARNING OUTCOME THREE`

## Overview

Components are the visual, re-usable building blocks to design pages in XM Cloud. You can think of creating a component like creating a ‘stamp’ that you can use throughout a webpage. In this tutorial, you will build the first component for your company’s project as referenced in other tutorials from this series, comparing the different ways that XM Cloud allows you to do so. We will use the XM Cloud component builder, exploring the no-code approach to building components.

<Alert status="info">
   <AlertIcon />
   **NOTE:** For more advanced styling and building of components, you can also use a coded approach! Please refer to the [XM Cloud Accelerate article to learn more about creating React/Next.js components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components).
</Alert>

In this tutorial, you will do the following:

1. Build a collection to organize components
1. Define the layout of a new XM Cloud component called Text Teaser
1. Apply styling to the component using out-of-the-box themes
1. Make the component available to editors
1. Place the component into your existing webpage

<Alert status="info">
   <AlertIcon />
   **NOTE:** You are not creating a data model in this tutorial. That will be covered in an upcoming tutorial on [creating component data sources](datasources).
</Alert>

## Prerequisites

In order to complete the following tutorial, you will need these resouces:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)

## What do we need to build?

The first component we want to build is the “Text Teaser” Component. The requirements from the customer design team are as follows:

- 2-column centered layout
- Maximum width of 1320 pixels
- Within the first column there is a **headline (h2)** and a **sub-headline (h3)**.
- In the second column, there is a **paragraph text** with formatted text that can be handled by a rich text editor.
- Use Roboto font for the headlines
- Use Open Sans font for the paragraph font.

`TODO: Roboto important? Will that be covered in another tutorial? Isn't covered here explicitly?`

This is what your component will look like when it is finished:

`INSERT SCREENSHOT OF COMPONENT DESIGN`

## Organizing components using collections

To structure the components a bit, you can use collections. That helps you to navigate the components in the Component builder, but also later in Pages. You will now create a new collection names "Basic Components" to hold your new component.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.

1. From your dashboard, select the XM Cloud environment where you will create your Text Teaser Component.

   `INSERT SCREENSHOT OF XM CLOUD APP BEING SELECTED FROM DASHBOARD`

1. From the app context flyout, select **Open App** to launch XM Cloud environment apps dashboard

1. At the very top switch to **Tools**

1. In the **Tools** page, select the **Components** card to launch the Component builder. You can see that there are already some components available.

`INSERT SCREENSHOT OF Components listing`

1. On the top right, click **Add collection** to create a new collection.

1. Name this collection: **“Basic Components”**

1. Click the **Save** button to complete the collection creation.

`INSERT SCREENSHOT OF Basic Components collection`

## Create the component

Within this new collection, you will now create the new Component called “Text Teaser”.

1. In the "Basic Components" collection, click the "Add component" button to launch the component creation form.

1. Specify the **Name** value as **"Text Teaser"**.

<Alert status="info">
   <AlertIcon />
   You can leave the other fields blank. The **Description** field is optional and the **Collection** field will default to the currently selected Collection so it will be stored in Basic Components as desired.
</Alert>

`INSERT SCREENSHOT OF completed form`

1. Click on the **Save** button to complete creating the component definition. A message will display telling you that the component was created.

1. Click on the **Click to start editing** link that is displayed at the top of the Component form. This will launch the canvas (or 'Section') view of the Text Teaser component where you can start adding elements in the builder.

   `INSERT SCREENSHOT OF Canvas`

### Create the column layout for the Text Teaser component

Before we begin adding content, we want to ensure we can provide a two-column layout that matches the requirements that were given at the beginning. You will now learn how to create Card elements that can be used to hold other elements.

1. Click on the section/canvas. You will see a grid displayed by default.

   <Alert status="info">
      <AlertIcon />
      This can be adjusted on the pane at the right side of the screen, however, for now, leave it as it is.
   </Alert>

   `INSERT SCREENSHOT of editor with Layout&Alignment section highlighted with a red box`

1. Click and drag your mouse across the canvas to create a left column for your Text Teaser.

   <Alert status="info">
      <AlertIcon />
      By default, XM Cloud will create a **Block** element. You will want to change this to a **Card** in the following steps.
   </Alert>

   `INSERT SCREENSHOT of Canvas with drawn Block area`

1. Click on the newly created left column Block area to load the context bar above the area.

1. Click on the element type (Block) in the context bar to change the element type.

1. Select the **Card** element type from the pop-up menu.

   `INSERT SCREENSHOT OF Block elements dialog`

<Alert status="warning">
   <AlertIcon />
   **Challenge:** You will now create the right side of the column. Try to do it without the steps! If you get stuck, the full steps are here to help you through it.
</Alert>

1. Click and drag your mouse across the canvas to create a right column for your Text Teaser.

   `INSERT SCREENSHOT of Canvas with drawn Block area`

1. Click on the newly created right column Block area to load the context bar above the area.

1. Click on the element type (Block) in the context bar to change the element type.

1. Select the **Card** element type from the pop-up menu.

### Add content elements to the columns

Now that the layout is created, you will add content items for the content that was provided.

When clicking on the “add Element” button, you can see all elements that are currently available. Select “headline 2” and click where you want to add it, in this case, on the left card on the top.

Next add a “headline 3” element below the heading 2 element.

In the second column, add a Paragraph Element by selecting ‘add element’ and choosing ‘paragraph’. Add some dummy text to it (lorum ipsum is a great dummy text generator!)

`INSERT SCREENSHOT OF COMPONENT WITH ELEMENTS`

## Apply Styling to the Component

This looks good, but this is not the exact Styling that was requested. So, let’s apply a pre-made company theme to the component to make the styling pixel-perfect.

To change the styling in XM Cloud Components, on the top right of the component, click on the ‘theme switcher’.

`INSERT SCREENSHOT OF BAR WITH THEME SWITCHER BUTTON`

Scroll to the bottom of the themes that appear on the right side of the screen and select ‘Company Theme’.

`INSERT SCREENSHOT OF THEME SELECTION ON RIGHT SIDE`

Once you click ‘apply’, you will notice your component updates with the new theme, and it now looks much better.

`INSERT SCREENSHOT OF THEMED COMPONENT`

## Make the Component available to authors

Now I Stage the Component. This way, it is available in Pages to be used. As indicated by the Banner that we saw at the bottom of Style section we also need to Stage the Styles. And we can also directly publish the styles.

To be actually shown via the delivery API I would also need to publish the component.  
Done, back to the component. Nothing changed as expected.  
[Show that it now can be added to the Screen]
Now, Let’s check the component in Pages.  
I’ll open the Pages editor, which loads my homepage. As the component is staged, I can see it in the component list and I can drag it onto my canvas. Also that looks good as expected.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully `TODO: What did we do?`
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
   <Link title="Creating New Components" link="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" />
</Row>

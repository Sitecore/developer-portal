---
title: 'Tutorial: Create your first XM Cloud no-code component'
description: 'In this tutorial, we will go through the steps to create a Text Teaser component with a no-code approach using XM Cloud Components builder'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, we will go through the steps to create a Text Teaser component with a no-code approach using XM Cloud Components builder. The walkthrough will not show all possible options, but will take you through a flow to define and lay out a new Component to use on your home page. You will learn:

- How to create a collection for your components
- How to create a new Text Teaser component using the XM Cloud Components builder
- How to make the Text Teaser component available in the Pages editor for authors

## Overview

Components are the visual, re-usable, building blocks to design web pages in XM Cloud. You can think of creating a component like creating a ‘stamp’ that you can use throughout a webpage. In this tutorial, you will build the first component in your project. We will use the XM Cloud Components builder, exploring the no-code approach to building components.

<Alert status="info">
   <AlertIcon />
   **NOTE:** For more advanced styling and building of components, you can also use a coded approach! Please refer to the [XM Cloud Accelerate article to learn more about creating React/Next.js components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components).
</Alert>

In this tutorial you will do the following:

1. Build a collection to organize components
1. Define the layout of a new XM Cloud component called Text Teaser
1. Make the component available to editors
1. Place the component into your existing webpage

<Alert status="info">
   <AlertIcon />
   **NOTE:** You are not creating a data model in this tutorial. That will be covered in an upcoming tutorial on [creating component data sources](datasources).
</Alert>

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. An existing XM Cloud site created in [Tutorial: How to Create a Site and Connect your App to it](create-a-site)

## What do we need to build?

The first component we want to build is the “Text Teaser” Component. The requirements from the customer design team are as follows:

- 2-column centered layout
- Within the first column there is a **headline (h2)** and a **sub-headline (h3)**.
- In the second column, there is a **paragraph text** with formatted text that can be handled by a rich text editor.
- Maximum width of 1320 pixels
- Use Roboto font for the headlines
- Use Open Sans font for the paragraph font.

This is what your component should look like when it is finished:

![Text Teaser Design](https://sitecorecontenthub.stylelabs.cloud/api/public/content/b8eb9bc4d20841caae3a0c4e6e0ccebd?v=b9ae2f2f)

In this tutorial you will focus on creating the initial definition of the component with the 2-column layout and the desired elements. The specific design requirements for styling will be covered in a later tutorial.

## Organizing components using collections

To structure the components a bit, you can use collections. Collections help you to navigate the components in the Components builder, but also later in Pages. You will now create a new collection named "Basic Components" to hold any components you will create.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.

1. From your dashboard, select the XM Cloud environment where you will create your Text Teaser Component.

   ![Sitecore Cloud - Select XM Cloud App](https://sitecorecontenthub.stylelabs.cloud/api/public/content/93b99fcc45b64e2e8bb895b6f9226ef7?v=95956beb)

1. From the app context flyout, select **Open App** to launch XM Cloud environment apps dashboard

   ![Sitecore Cloud - Open XM Cloud Dashboard](https://sitecorecontenthub.stylelabs.cloud/api/public/content/09eafd6810ce4a49838d75803627f123?v=0d05167a)

1. At the very top switch to **Tools**

1. In the **Tools** page, select the **Components** card to launch the Components builder. You can see that there are already some components available.

   ![Components builder - Components overview](https://sitecorecontenthub.stylelabs.cloud/api/public/content/b9989ce4a43c4e89a765b1d553f57d66?v=1ad0d92b)

1. On the top right, click **Add collection** to create a new collection.

   ![Components builder - Add new Collection](https://sitecorecontenthub.stylelabs.cloud/api/public/content/514db03de4634f54a81b4ccdf6d6de97?v=e1d1710c)

1. Name this collection: **“Basic Components”**

1. Click the **Save** button to complete the collection creation.

   ![Components builder - Collection created](https://sitecorecontenthub.stylelabs.cloud/api/public/content/514db03de4634f54a81b4ccdf6d6de97?v=e1d1710c)

## Create the component

Within this new collection, you will now create the new Component called “Text Teaser”.

1. In the "Basic Components" collection, click the "Add component" button to launch the component creation form.

1. Specify the **Name** value as **"Text Teaser"**.

   <Alert status="info">
      <AlertIcon />
      You can leave the other fields blank. The **Description** field is optional and the **Collection** field will default to the currently selected Collection so it will be stored in Basic Components as desired.
   </Alert>

   ![Components builder - Create Component](https://sitecorecontenthub.stylelabs.cloud/api/public/content/f2105312107a4d04bacb73b8fda10206?v=09b3d415)

1. Click on the **Save** button to complete creating the component definition. A message will display telling you that the component was created.

1. Click on the **Click to start editing** link that is displayed at the top of the Component form. This will launch the canvas (or 'Section') view of the Text Teaser component where you can start adding elements in the builder.

   ![Components builder - Component Created](https://sitecorecontenthub.stylelabs.cloud/api/public/content/1a2b7fe7076c45c8847a0db785f54999?v=df5b8c53)

### Create the column layout for the Text Teaser component

Before we begin adding content, we want to ensure we can provide a two-column layout that matches the requirements that were given at the beginning. You will now learn how to create Card elements that can be used to hold other elements. For more details on creating layouts, you can take a look at our documentation on [Working with a component layout](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-a-component-layout.html)

1. Click on the section/canvas. You will see a grid displayed by default.

   <Alert status="info">
      <AlertIcon />
      This can be adjusted on the pane at the right side of the screen. For now leave it as it is.
   </Alert>

   ![Components builder - Section with Grid Layout](https://sitecorecontenthub.stylelabs.cloud/api/public/content/f80922b7c24d4e209eef6735278ba2f7?v=da45206b)

1. Click and drag your mouse across the canvas to create a left column for your Text Teaser.

   <Alert status="info">
      <AlertIcon />
      By default, XM Cloud will create a **Block** element. You will want to change this to a **Card** in the following steps.
   </Alert>

   ![Components builder - Create the left Card](https://sitecorecontenthub.stylelabs.cloud/api/public/content/7709dabf176d4196b1afc9ace65673c7?v=89228ef6)

1. Click on the newly created left column Block area to load the context bar above the area.

1. Click on the element type **Block** in the context bar to change the element type.

1. Select the **Card** element type from the pop-up menu.

   ![Components builder - Create Card](https://sitecorecontenthub.stylelabs.cloud/api/public/content/ccda9e471d3b491dbd903fac6d3612da?v=cdaecff4)

<Alert status="warning">
   <AlertIcon />
   **Challenge:** You will now create the right side of the column. Try to do it without the steps! If you get stuck, the full steps are here to help you through it.
</Alert>

1. Click and drag your mouse across the canvas to create a right column for your Text Teaser.

   ![Components builder - Create right column](https://sitecorecontenthub.stylelabs.cloud/api/public/content/0323149c70fa4ee9bd3010282ae25535?v=21f4f5a7)

1. Click on the newly created right column Block area to load the context bar above the area.

1. Click on the element type **Block** in the context bar to change the element type.

1. Select the **Card** element type from the pop-up menu.

### Add content elements to the columns

Now that the layout is created, you will add text elements to the cards to match the requirements provided. Based on the requirements, we need two headings on the left side (an H2 and an H3) and a block of free-form text on the right for the teaser content.

In this section you will:

- Create the two headings (H2 and H3) on the left
- Create the block of content on the right

We will start with the headings in the left column, and then add the element to the right column.

1. Click on the left column Card to focus context on the left column. This will show you the context menu above the Card.

1. In the context menu, click on the **Add element** button to see the options for elements that can be inserted.

   ![Components builder - Add Heading 2](https://sitecorecontenthub.stylelabs.cloud/api/public/content/cbd2cfc0dc4a4415ba190e5b2e432672?v=622de512)

1. Select **Heading 2** to insert an H2 element to the Card.

1. Click in the top area of the Card to position where the Heading 2 element should be placed.

1. Click **Add element** button again to add another heading.

1. Select **Heading 3** to insert an H3 element to the Card.

1. Click in the area below the Heading 2 element to add the Heading 3 underneath it.

   ![Components builder - Adding Heading 3](https://sitecorecontenthub.stylelabs.cloud/api/public/content/8da7d1dd78954757a14a6572ee8902e6?v=0e77d03f)

1. Click on the right column Card to focus context on the right column.

1. In the context menu, click on the **Add element** button to get the element options.

1. Select **Paragraph** element to insert free-form text into the right column.

1. Click on the top part of the right Card to position the element.

   ![Components builder - Adding Paragraph](https://sitecorecontenthub.stylelabs.cloud/api/public/content/4d6646183b424926950780be4fc72ba6?v=0610f60e)

1. Fill out the Heading 2, Heading 3, and Paragraph elements with some example content to test the layout.

   <Alert status="info">
      <AlertIcon />
      For the content, you can make up your own text or use a generator tool like [lorem ipsum](https://www.lipsum.com/).
   </Alert>

   ![Components builder - Edit Content](https://sitecorecontenthub.stylelabs.cloud/api/public/content/1dc095d2a6bc4673ba57133a1c4e624e?v=3263ecd1)


## Make the Component available to authors

At this point we have the Text Teaser component layout defined, with some basic elements, example text, and a sample theme. Now we will make the Text Teaser available so that authors can add it to their web page in the Pages editor.

1. Above the component, click on the **Stage** button. This will move your component out of its current draft state and make it ready for use in Pages.

   <Alert status="info">
      <AlertIcon />
      When a component is staged, it is available to authors, but it will not display on the published website. When you want that component to be visible on the live website, you must publish it. Learn more in the docs about [staging and publishing](https://doc.sitecore.com/xmc/en/users/xm-cloud/staging-and-publishing-components.html).
   </Alert>

1. Return to the XM Cloud Tools pane. If you've closed that tab, you can get there with these instructions:

   - Login to the [Sitecore Cloud Portal](https://portal.sitecorecloud.io/)
   - Select your App from the Apps list
   - From the flyout panel, select **Open app**
   - At the very top switch to **Tools**

1. In the **Tools** page, select the **Pages** card to launch the Pages editor. The home page will display.

   ![Pages - Editing the Home page](https://sitecorecontenthub.stylelabs.cloud/api/public/content/bd4844a88ef145a1bfa4fc742ff42671?v=aeb94bce)

1. On the left of the home page, click on the **Components** tab to view the list of available components.

1. Scroll down on the tab to find the **Basic Components** collection that you created earlier. In the collection you will see the Text Teaser component you have created.

   <Alert status="info">
      <AlertIcon />
      This validates that the component is available to authors. If it does not display in this list, then the component may note have been Staged or Published yet.
   </Alert>

   ![Pages - Choose the Components to add to the page](https://sitecorecontenthub.stylelabs.cloud/api/public/content/ae796b8cca15429aaee9275ef31b047c?v=29e6d8c4)

1. Drag the component onto the home page canvas below the title. The component will be added to the page.

   ![Pages - Text Teaser on page](https://sitecorecontenthub.stylelabs.cloud/api/public/content/08467da2714547b8a1041eaa4d643fde?v=f90f38e3)

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully created a new Text Teaser component, made it available to authors, and then added it to your home page, all without writing any code.
</Alert>

### Related XM Cloud Documentation

<Row columns={2}>
   <Link title="Get started with XM Cloud Components" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/get-started-with-xm-cloud-components.html" />
   <Link title="Staging and publishing components" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/staging-and-publishing-components.html" />
   <Link title="Work with components" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-components.html" />
   <Link title="Work with a component layout" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-a-component-layout.html" />
</Row>

### Related XM Cloud Accelerate guidance for Sitecore Partners

<Row columns={2}>
   <Link title="Creating New Components" link="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" />
</Row>

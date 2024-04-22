---
title: 'Tutorial: Create your first component'
description: 'In this tutorial, we will go through the steps to to create a Text Teaser component with a no-code approach using XM Cloud Component builder'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Introduction - What You are Going to Learn

In this tutorial, we will go through the steps to to create a Text Teaser component with a no-code approach using XM Cloud Component builder. The walkthrough will not show all possible options, but will take you through a process of defining and laying out a new Component to use on your home page. You will learn:

- `TODO: LEARNING OUTCOME ONE`
- `TODO: LEARNING OUTCOME TWO`
- `TODO: LEARNING OUTCOME THREE`

## Overview

Components are the visual, re-usable building blocks to design pages in XM Cloud. You can think of creating a component like creating a ‘stamp’ that you can use throughout a webpage. In this tutorial, you will build the first component for your company’s project as referenced in the previous blogs, comparing the different ways that XM Cloud allows you to do so. We will use the XM Cloud component builder, exploring the no-code approach to building components.

<Alert status="info">
   <AlertIcon />
   **NOTE:** For more advanced styling and building of components, you can also use code!
</Alert>

In this tutorial, you will do the following:

1. Build an XM Cloud component
1. Apply styling to the component using out-of-the-box themes
1. Place the component into your existing webpage
1. Map a data source to a component, and,
1. Create a mobile-friendly UI version of the component

<Alert status="info">
   <AlertIcon />
   **NOTE:** You are not creating a data model in this tutorial. That will be covered in an upcoming tutorial on [creating component data sources](datasources).
</Alert>

## Prerequisites

In order to complete the following tutorial, you will need these resouces:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)

## What do we need to build?

Now it is time to build the first component. XM Cloud offers 2 ways of building components:

- Using the XM Cloud Component Builder
- Or using Headless SXA

In this tutorial, we focus on using the XM Cloud Component builder. The Headless SXA approach involves more coding, and is outside the scope of this tutorial.

The first component we want to build is the “Text Teaser” Component.

It has a 2-column centered layout with a max width of 1320 pixels.

Within the first column there is a headline (h2) and a sub-headline (h3). In the second column, there is a paragraph text with formatted text that can be handled by a rich text editor. You will use Roboto font for the headlines, and Open Sans for the paragraph font.

This is what your component will look like when it is finished:

`INSERT SCREENSHOT OF COMPONENT DESIGN`

## Organizing components using collections

You can see that there are already some components available.

`INSERT SCREENSHOT OF Components listing`

To structure the components a bit, you can use collections. That helps you to navigate the components in the Component builder, but also later in Pages. On the top right, click **add collection**. Let’s name this collection: “Basic Components”.

`INSERT SCREENSHOT OF Basic Components collection`

## Create the component

Within this new collection, create the new Component called “Text Teaser”.

You can now add elements to the Canvas or “Section” as it is named in the Builder.

`INSERT SCREENSHOT OF Canvas`

By clicking into the section, you will see a grid displayed by default. This can be adjusted on the pane at the right side of the screen, however, for now, leave it as it is.

`INSERT SCREENSHOT of editor with Layout&Alignment section highlighted with a red box`

You can create a new area on the screen by simply pressing and dragging your mouse at the same time. By default, it creates a block element, which you can directly change to a Card. This will become your left column.

`INSERT SCREENSHOT of Card`

Now, create a second card as your right column following the same pattern.

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
   <Link title="Project Solution Setup" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup" />
   <Link title="Creating a Site" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site" />
</Row>

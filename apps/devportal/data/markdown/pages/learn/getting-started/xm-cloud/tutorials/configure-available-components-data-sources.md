---
title: 'Tutorial: How to make a data template available to the Component builder in XM Cloud'
description: 'Learn how to take a create data template and make it available for authors to use in the XM Cloud Component interface.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/2d0a613e37a64a04ba3e42749a14daed?v=1447baab'
pageType: 'tutorial'
menuOrder: 5
---

<Introduction title="What You are Going to Learn">

In this quick tutorial, you will go through the steps to take the Text Teaser data template and make it available for use by authors in XM Cloud Components. You will learn:

- How to configure the settings on a Site definition to select FEaaS component data sources
- How to validate the data source is now available in the XM Cloud Components application

</Introduction>

## Overview

Previously, you learned how how to create a data model for the Text Teaser component. Now you will configure your Site definition to make that data sources available to XM Cloud Components

For this tutorial, you will:

1. Configure the FEaaS component data sources settings on a Site to include the Text Teaser data source
1. View the available data sources in XM Cloud Components to validate Text Teaser data source is available to authors

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment and site created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. The Text Teaser data source created in [Tutorial: How to Create a Component Data Template in XM Cloud](create-data-template)

## Use a data source template in XM Cloud Components

## Configure the Text Teaser template for Components

To start, you will take the data template that has been created and make it available in XM Cloud Components to be used as data source. This will be configured on the Settings item in the site.

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

## Validate data source is available in Components

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

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have now configured the Text Teaser data source to be available in XM Cloud Components! You will now be able to map the data source to your visual elements in the next tutorial.
</Alert>

### Related XM Cloud Documentation

- [Get your content from an XM data source](https://doc.sitecore.com/xmc/en/users/xm-cloud/get-your-content-from-an-xm-data-source.html)
- [Map data from an XM data source to a component](https://doc.sitecore.com/xmc/en/users/xm-cloud/map-data-from-an-xm-data-source-to-a-component.html)

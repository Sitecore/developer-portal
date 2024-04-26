---
title: 'What is provisioned'
description: 'In this tutorial, we will go through the steps to complete a sprint zero of setting up XM Cloud.  In addition to learning the basics of XM Cloud, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## What is provisioned for XM Cloud

So, how does this work? Referencing the figure below, let’s walk through the different bits and pieces of XM Cloud.  
<Image title="XM Cloud Architecture" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/21cbe922e28b4896b1692be7c85ae6c4?v=4aad3836" />

1. XM Cloud contains a Content Management (CM) instance (the violet box on the right) where authors manage their content, layout, and experiences. This is then published to the _Edge_ layer.
2. Edge (yellow box) is a geographically distributed delivery layer. Edge offers a GraphQL endpoint to allow applications to query for the content coming from XM Cloud.
3. Your app connects to Edge to retrieve data and can run with whatever host you are rendering your application on, such as Vercel, Netlify, AWS, Azure, or another vendor.
4. In order to utilize the WYSIWYG editing experience, an internal rendering host, or _editing host_ (green box), is delivered with XM Cloud. This editing host is managed by Sitecore, and runs a Node server that can host any Node-based application.
5. The main way of accessing XM Cloud is through the _Sitecore Cloud Portal_ (solid outlined box, 'Sitecore Cloud'). This GUI allows you to manage and access your different Sitecore Apps and Users. For an in-depth exploration of the Sitecore Cloud Portal, navigate [here](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html).
6. When developing with XM Cloud, you can use the available build and deployment services (purple box). XM Cloud has these services built-in, so that you do not have to think about building or provisioning the XM Cloud instance, it is all done for you. If you have more requirements than currently provided, you can set up your own build and deployment pipeline using the [XM Cloud CLI](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--creating-an-xm-cloud-project-using-the-sitecore-cli.html).

While not pictured in the diagram, the XM Cloud CLI allows you to manage your XM Cloud instance and deploy, instead of using the GUI. You can also serialize content items that represent developer artifacts from your XM cloud instance into your source code repository. To learn more about serialization with Sitecore, navigate [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/serialization-in-sitecore.html).

Once the provisioning and build process are finished, the deployment starts. The moment the deployment is finished, you can start using the new XM Cloud environment. Some actions run in the background to warm up the application.

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully connected to XM Cloud and built your first project, that has an environment that is set up and ready to be used. The solution code is ready and connected to a CI/CD pipeline as well. Setting up a CI/CD pipeline in some development scenarios can take days or weeks, but XM Cloud tools help you complete it within minutes here.
</Alert>
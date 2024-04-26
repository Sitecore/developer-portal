---
title: 'Work locally'
description: 'In this tutorial, we will go through the steps to complete a sprint zero of setting up XM Cloud.  In addition to learning the basics of XM Cloud, you will become familiar with setting up a site, setting up the dev environment to support building that site, and how to connect your codebase that runs on your local rendering host to the preview endpoint of XM Cloud.'
openGraphImage: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/21dabc30da2c475a8549640a04885a46?v=18b721db'
---

## Working locally

Navigate to your GitHub account and download the repository that was cloned earlier by the Sitecore XM Cloud Deploy App.
<Image title="GitHub - Clone Repository" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/239fa0b1ce314ca088bc830ee7a699e8?v=ba0d1b2e" maxW="xl" />

### Download Repository

1. In your repositories overview, find the newly created `xm-cloud-tutorial-series` repo.
2. Download the repository to your local file system.
3. Open the newly created folder in VS Code, or your text editor of choice.
4. As per the README, run the init script that was delivered with your source code repository and pass the following parameters:
   - `-LicenseXmlPath`: the path to your XM Cloud license file
   - `-AdminPassword`: the admin password of your XM Cloud instance (“b”, in this case).

The init script initializes the `.env` file with everything necessary.
<Image title="In Command Line Tool - Run init script" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/b27d3da0db2746c69915db32955897d0?v=5a043dea" maxW="4xl" />

<Alert status="info">
  <AlertIcon />
    **A note on passwords:**
    You can use any password and will of course have to use a secure password when dealing with client projects. But for now we use “b”, for tradition’s sake.
</Alert>

### Connect the App to the XM Cloud Instance

As you may remember from the introduction, you need to use a GraphQL endpoint to query the content coming from XM Cloud. To connect a few things need to be configured upfront.

1. Navigate to the `.env` file within your solution under src\sxastarter, and copy it.

2. Name it `.env.local`. We do this so that the file is ignored by git by default, so that you do not pass valuable configuration secrets into any repositories.

You can connect using the delivery endpoint of Edge or to the preview endpoint of your CM instance.  
<Image title="XM Cloud Architecture - Connect to Preview Endpoint" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/e703be66170a49268beb6564c4c34df7?v=5184aace" maxW="xl" />

Any app showing content to the public must connect to the Edge Delivery Endpoint that is scaled and geographically distributed to serve the right performance. Only published content will be available here. For development purposes, you will connect to the preview endpoint as you do not need to care about publishing at this point, so created content is instantly available. This will simplify the development workflow. If you want to learn more about endpoints and the edge delivery architecture, check out the docs on [Experience Edge architecture](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html)

Now, you need to set the API key within `.env.local`. The API key should be already available within your XM Cloud instance.

3. Get the Context ID from XM Cloud by:

   - Go to the XM Cloud deploy app
   - Click on the name of the project you created e.g. `XM Cloud Tutorial Series`
   - Copy the value in the `Context ID (Preview)` column

   <Image title="Get Context ID from XM Cloud Deploy" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/73c5f907769a4dc6bb03374bb9a2a229?v=7e9d2bee" maxW="xl" />

4. Paste the value of the Context ID into the `SITECORE_EDGE_CONTEXT_ID` environment variable in the `.env.local` file.
   <Image title="Copy Context ID into .env file" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/e29d1bb0c6a448efb63dce32af047d49?v=2edbe4d1" maxW="xl" />
5. Add the Site name (e.g. `Company dev`) to the `SITECORE_SITE_NAME` environment variable in the `.env.local` file.
   <Image title="Set Site name in .env file" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/8fbd4505019948f08bfba8c8be4d4043?v=79a1d301" maxW="xl" />
6. In your terminal navigate to src/sxastarter (your app folder) and run `npm install`
   <Image title="In Command Line Interface - Run npm install" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/5971aecb976d43bf840ba260298c5da1?v=212157b9" maxW="xl" />
7. Now run `npm run start:connected`
   <Image title="Start the app locally" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/2e06a82c1b414cb9b06e6518983f32a4?v=12ee66db" maxW="xl" />
8. Call your app in the browser: [http://localhost:3000](http://localhost:3000)
   <Image title="Check Website running locally" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/358a02664690465289d70fe4c9280eae?v=7c0165d9" maxW="xl" />

#### Verifying the connection

Let’s change some content to verify you are in fact connected against the preview endpoint.

1. Navigate back to your site in XM Cloud.
   <Image title="XM Cloud Dashboard - Open Pages Editor" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/4d9aebe26e7c4916bd5c2c982a2bdabd?v=1afb8abf" maxW="xl" />
1. Click on the tile that says `Company Dev`. This will open Pages new WYSIWYG page editing experience. When opening for the first time, this might take a moment.
1. Change the headline to whatever you like. In this case, I’ll add 'in town' to the homepage tagline.
   <Alert status="info">
   <AlertIcon />
   Note that your changes are automatically saved.
   </Alert>

   <Image title="Pages Editor - Change Headline inline" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/05ac5bbde7244c809d987106b9226fd8?v=6b47e626" maxW="xl" />

1. Switch back to the browser tab where you are viewing the Next.js app on [localhost:3000](http://localhost:3000)
1. Reload the page, and see the changes appear in your local app.  
   <Image title="Validate changes in local running app" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/6bf98e5e22fe4c689898fcea34a03b59?v=756f5d1a" maxW="xl" />

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully set up your dev environment with XM Cloud and created your first webpage! To learn more about XM Cloud and continue on to next steps, check out our next tutorial in this series!
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

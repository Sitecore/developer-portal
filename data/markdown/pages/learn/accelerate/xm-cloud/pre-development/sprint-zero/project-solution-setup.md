---
title: 'Project Solution Setup'
description: 'Creating a new project for Docker local development with XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2023-12-22'
audience: ['Architect','Technical Implementer']
features: ['Sitecore Cloud CLI', 'ASP.NET Core SDK', 'Next.JS SDK']
---

## Context

As the technical lead on the project, you need to set up the Project and Environment(s) in the customer portal, as well as a source code repository, so that the project developers can start implementing the client project, commit, and deploy their code.

## Execution

There are two paths to setup the solution, depending on whether you are using a source code provider with a supported integration to the XM Cloud Deploy app or not. In the following use case we will focusing on GitHub, but Azure DevOps steps are available in the [source control and hosting providers](https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-connections-for-source-control-and-hosting-providers.html) documentation.

### Setting up your first Project, Environment, and Site - Supported Integration

In the process of creating a new Project, you connect a GitHub Repository. Make sure you grant following access rights: 

- Read access to metadata
- Read and write access to administration and code
- Access to all repositories 

If granting those permissions is against your organization’s security policies, follow the “No Integration” steps to setup the project.  The Project and Environment creation process requires these to copy a GitHub project to your private or company repository.

In the setup process the project requires a name. Make sure to use proper Naming conventions in case your license allows to have to more than one project or your are planning more projects in the future. Similarly, when creating the first environment you will choose the name of the environment, make sure you are using a standard Naming convention.

Each environment needs to be setup to be a production or non-production environment. So it’s crucial to mark only the production environment accordingly and your QA and UAT environment as non-productions. Give the environments applicable names.

<Alert status="info" mb={4}><AlertIcon />
Starting from March 3, 2025, XM Cloud [released a feature](https://developers.sitecore.com/changelog/xm-cloud/03032025/improvements-to-project-creation-and-management%2c-including-separate-repositories-for-each-authoring-environment-and-editing-host) that allows to build and deploy environment and editing host separately. That means source code for authoring environment and head application can be stored in separate repositories. To enable the feature, follow the [Deploy](https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-a-project-and-environment.html#deploy-a-project-when-youve-enabled-the-beta-feature-that-lets-you-deploy-your-authoring-environments-and-editing-hosts-separately) documentation.
</Alert>



### Setting up your first Project, Environment, and Site - No Integration

When creating a project with no integration, you will need to use the Sitecore Cloud CLI.

- Login to the XM Cloud Deploy App using the CLI

  ```ps
  dotnet sitecore cloud login
  ```

- Create a project providing name of the project and the region where this should be created

  ```ps
  dotnet sitecore cloud project create --name <project-name>
  ```

- Create an environment within that project passing the project ID of the previously created project and the environment name

  ```ps
  dotnet sitecore cloud environment create `
    --name <environment-name> `
    --project-id <project-id-of-previously-created-project>
  ```

- Deploy to your environment using the environment id. This will provision the different XM Cloud resources, build and deploy the foundation head solution and run post actions.

  ```ps
  dotnet sitecore cloud deployment create `
    -id <environment-id-of-previously-created-environment>
  ```

- Fork the Foundation Head repository (for [Next.js](https://github.com/sitecorelabs/xmcloud-foundation-head) or for [ASP.NET Core](https://github.com/Sitecore/xmcloud-starter-dotnet)) into your source control

- Deploy your custom solution using the environment ID and the upload parameter. Make sure to run this command from your solution root. Note: the deployment log can be followed live in the deploy app.
  ```ps
  dotnet sitecore cloud deployment create `
    -id <environment-id-of-previously-created-environment> `
    --upload
  ```

### Create a new Site

Once the process of provisioning the CM resources, and deploying your code and first items to the XM Cloud environment is done, you need to access the dashboard. From here you will create your first site.

For a client project, create an empty site - follow the [Creating a Site](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site) recipe for further detail.

> Sitecore XM Cloud currently does not support the automatic deployment of the editing host for ASP.NET Core Head applications. As a result, after deployment, Page Builder will display an error such as "unable to connect o the remote server". It is currently required to [deploy an external editing host](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-an-external-editing-host.html) to support this.

### Walk through the Solution

As mentioned earlier, it is required to start using the foundation head solution. This can be either cloned during the project creation process or forked separately. 

The solution contains everything to run XM Cloud locally using Docker Containers as well as running the head application locally connecting towards the GraphQL Preview Endpoint.

<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>ASP.NET Core</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
        The Next.js template it contains `.env` file for managing environment specific connection strings as well as the NextJS application named `sxastarter`.

<img src="/images/learn/accelerate/xm-cloud/project-solution-setup-solution.jpeg" alt="Foundation Head Starter Kit"/>

### Items Serialization

The items folder contains serialized versions of the items coming from XM Cloud. Those items are stored in `yml` format and organized based on the item hierarchy and the configuration in the `module.json` files.

Check out the [Setup Sitecore Content Serialization](/learn/accelerate/xm-cloud/pre-development/sprint-zero/setup-content-serialization) recipe for more details.

### Platform

The platform folder can contain customizations you want to add to the XM Cloud content management instance. It is not recommended to create customizations to the CM (Including pipelines, event handlers etc...).

### NextJS application “sxastarter”

The sxastarter folder represents the head application built with NextJS. it contains its own .env file. The src folder provides already implementation such as a out of the box components but also middleware functionalities such as redirects or personalization.

Please note that the starter template currently uses the page router instead of the newer app router introduced with version 13. 

      </TabPanel>
      <TabPanel>
        In ASP.NET Core Starter Kit, the platform folder is in `authoring` subfolder.

The head application in ASP.NET Core Starter Kit is created using the new Sitecore ASP.NET Core SDK. It contains authoring and headapps subfolders to separate back-end Sitecore Platform and Head (ASP.NET Core) aspects.

      </TabPanel>
  </TabPanels>
</Tabs>

### Next Steps

#### Using .env.template

- Rename `.env` to `.env.template` in your solution root

- remove confidential data from `.env.template`
- Set `.env` to be ignored by git in `.gitignore` file
- update `init.ps1` to copy `.env` from `.env.template` before any of the env variables are set

#### Rename the sxastarter Project

- Rename `sxastarter` app folder name to your client related application name

- Update the `appName` property in the `package.json` to your Site name field of your site item

- In `.env.template`

  - set `COMPOSITE_PROJECT_NAME` to the new appname

  - set `RENDERING_HOST` to something matching your new appname

- In `init.ps1`

  - change the certificate creation to create certificates according your `RENDERING_HOST` entry

  - change initialization of environment variables to use the `RENDERING_HOST` value

  - make host file adjustments use the host name from `RENDERING_HOST` environment variable

- In `docker-compose.overwrite.yml` change rendering volumes to `.\src\[YOUR_APP_FOLDER_NAME]:C:\APP`

- Update the source code path in the `xmcloud.build.json`

- In `cert_config.yml` change traefik configuration to match the `app_folder_name`

- In `package-lock.json` change name field and packages name field to `app_folder_name`

- In `render.ts` change the comment from sxastarter to your `app_folder_name`

- In `Platform.csproj `change AssemblyName

- In `AssemblyInfo.cs` change `AssemblyTitle` and `AssemblyProduct` accordingly

- Rename Solution File `XMCloudSXAStarter.sln` to what your are using in Assembly configurations.

## Discussion

### Structure in XM Cloud

When starting in XM Cloud the overall structure needs to be understood. When getting access to the Sitecore Composable DXP through the Sitecore Cloud Portal you’ll be part of an Organization that contains the subscription. Depending on the licensing model of your subscription you’ll be able to create and manage 1 to many XM Cloud projects each one containing 1 to many XM Cloud environments.

<img src="/images/learn/accelerate/xm-cloud/project-solution-setup-2.jpeg" alt="XM Cloud Structure"/>

### When to use Site Collections, Site Collection Folders and Site Folders

XM Cloud is made for multisite implementations. Dependent on the amount of sites you have and the requirements for separation, XM Cloud helps you to organize and manage sites in a hierarchical way.

Every site requires to be within a Site Collection. The Site collection can be seen as a brand folder. But the site collection is not only good for separating and organizing your sites, but also provides certain features. You can share content from one site to another within a site collection. You can create internal links between sites. Sites within a site collection share the same page templates.

If you need content separation you can create a dedicated site collection.

Review the [Site Management](/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management) and [Multisite Architecture](/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite) recipes for further details on how to setup the best multi-site setups.

## Related Recipes

<Row columns={2}>
  <Link title="Branching Strategy" link="/learn/accelerate/xm-cloud/pre-development/developer-experience/branching-strategy" />
  <Link title="DevOps" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/devops" />
  <Link title="Setting Up Serialization" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/setup-content-serialization" />
    <Link title="Site Management" link="/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Getting started with XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
  <Link title="JavaScript Services SDK (JSS) for Next.js" link="https://doc.sitecore.com/xmc/en/developers/jss/22/jss-xmc/javascript-services-sdk--jss--for-next-js.html" />    
  <Link title="Sitecore ASP.NET Core SDK" link="https://doc.sitecore.com/xmc/en/developers/asp-net/0/asp-net-core-sdk/sitecore-asp-net-core-sdk.html" />  
</Row>

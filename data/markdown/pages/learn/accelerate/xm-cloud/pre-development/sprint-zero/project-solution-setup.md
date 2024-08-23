---
title: 'Project Solution Setup | Sitecore Accelerate for partners'
description: 'How to setup a new project for Docker local development with XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
---

## Problem

As the technical lead on the project, you need to set up the Project and Environment(s) in the customer portal, as well as a source code repository, so that the project developers can start implementing the client project, commit, and deploy their code.

## Solution

There are 2 paths to set up the solution, depending on whether you are using a source code provider with a supported integration to the XM Cloud Deploy app or not. Currently, only GitHub and Azure DevOps are supported.

The XM Cloud Deploy application requires:

- Read access to metadata
- Read and write access to administration and code
- Access to all repositories

If granting those permissions is against your organization’s security policies, follow the “No Integration” steps to set up the project.

### Setting up your first Project, Environment, and Site - Supported Integration

In the process of creating a new Project, you connect a git repository from a supported provider. Make sure you grant the following access rights:

- Read access to metadata
- Read and write access to administration and code
- Access to all repositories

The Project and Environment creation process requires these to clone a git repository into your private or company git provider.

In the setup process, the project requires a name. Make sure to use proper Naming conventions in case your license allows having more than one project or you are planning more projects in the future.

When creating the first environment, you will choose the name of the environment. Make sure to use a Naming convention.

Each environment needs to be set up to have a Production SLA or Non-Production SLA. On a standard license tier, you will have 1 production and 2 non-production environments. So it’s crucial to mark only the production environment accordingly and your QA and UAT environment as non-productions. Give the environments applicable names.

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

- Fork the Foundation Head repository into your source control
- Deploy your custom solution using the environment ID and the upload parameter. Make sure to run this command from your solution root. Note: the deployment log can be followed live in the deploy app.
  ```ps
  dotnet sitecore cloud deployment create `
    -id <environment-id-of-previously-created-environment> `
    --upload
  ```

### Create a new Site

Once the process of provisioning the CM resources, and deploying your code and first items to the XM Cloud environment is done, you need to access the dashboard. From here you will create your first site.

For a client project, create an empty site. Current the best way to do this is by going in the content editor and first creating a Site Collection. Then within the Site Collection, insert a new Site for your project.

While you can use the Sites application for this, each new site created via the app will create a unique matching Site Collection. Until the application allows the user to select an existing Site Collection, the right-click menu in Content Editor should be used.

### Walk through the Solution

As mentioned earlier, it is required to start using the foundation head solution. This can be either cloned during the project creation process or forked separately.

The solution contains everything to run XM Cloud locally using Docker Containers as well as running the head application locally connecting towards the GraphQL Preview Endpoint. It contains .env file for managing environment specific connection strings as well as the NextJS application named sxastarter.

<img src="/images/learn/accelerate/xm-cloud/project-solution-setup-solution.jpeg" alt="Foundation Head Starter Kit"/>

### Items Serialization

The items folder contains serialized versions of the items coming from XM Cloud. Those items are stored in yml format and organized based on the item hierarchy and the configuration in the module.json files.

Check out Item serialization for more details: [Setup Content Serialization](./setup-content-serialization)

### Platform

The platform folder can contain customizations you want to add to the XM Cloud content management instance. It is not recommended to create customizations to the CM (Including pipelines, event handlers etc...).

### NextJS application “sxastarter”

The sxastarter folder represents the head application built with NextJS. it contains its own .env file. The src folder provides already implementation such as a out of the box components but also middleware functionalities such as redirects or personalization.

> _Please note that the starter template currently uses the page router instead of the newer app router introduced with version 13. [This is on the roadmap]_

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

<img src="/images/learn/accelerate/xm-cloud/project-solution-setup-2.jpeg" alt="Xm Cloud Structure"/>

### When to use Site Collections, Site Collection Folders and Site Folders

XM Cloud is made for multisite implementations. Dependent on the amount of sites you have and the requirements for separation, XM Cloud helps you to organize and manage sites in a hierarchical way.

Every site requires to be within a Site Collection. The Site collection can be seen as a brand folder. But the site collection is not only good for separating and organizing your sites, but also provides certain features. You can share content from one site to another within a site collection. You can create internal links between sites. Sites within a site collection share the same page templates.

If you need content separation you can create a dedicated site collection.

Site Collection Folders organize site collections. They are optional and only required when have large multisite/multibrand implementations.

Site Folders organize sites. They are optional as well and help in case you have a lot of sites within one site collection.

### Related Recipes

<Row columns={2}>
  <Link title="Branching Strategy | Sitecore Accelerate" link="/learn/accelerate/xm-cloud/pre-development/developer-experience/branching-strategy" />
  <Link title="DevOps| Sitecore Accelerate" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/devops" />
  <Link title="Setting Up Serialization" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/setup-content-serialization" />
</Row>

### Related Documentation

<Row columns={2}>
  <Link title="Getting started with XM Cloud | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html" />
  <Link title="XM Cloud Foundation Head Repository | Github" link="https://github.com/sitecorelabs/xmcloud-foundation-head" />
  <Link title="XM Cloud Tutorials - Rename app #4" link="https://www.youtube.com/watch?v=uNkQQSC6n8o" />
</Row>

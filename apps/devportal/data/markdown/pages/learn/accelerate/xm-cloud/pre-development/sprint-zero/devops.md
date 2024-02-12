---
title: 'DevOps | Sitecore Accelerate for partners'
description: 'Configuring your DevOps with XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
---

## Problem

A customer is required to deploy their application to both production and non-production environments. This will include any assets required to be deployed to the XMC infrastructure, as well as deploying their “head” application. This recipe will go through the different options available to customers to achieve this.

## Solution

### Provisioning the XM Cloud Infrastructure

When deploying the XM Cloud infrastructure elements, there are two options for how to go about this:

1. Use the inbuilt XM Cloud Deploy Application and its GitOps approach
1. Roll your own CI CD pipeline using your DevOps tooling of choice and the Sitecore CLI

There are a few factors that can help you decide on the best approach for your use case. By default, customers are recommended to use the provided XM Cloud Deploy application. This will reduce the client's Time to Market, and means they automatically receive the benefits as the tooling is improved.

However, there are some scenarios where that might not be possible, some examples of these are:

- Currently, GitHub and Azure DevOps are the only two supported source control systems. If you’re using a different source control provider, then you won’t be able to use the Deploy Application
- You need to use a Service Account with administrator privileges on your source control system in order for the Deploy application to be able to provision and manage repositories and branches. If this is not possible you won’t be able to use the Deploy Application
- If you have made an investment in CI/CD tooling for other elements of your infrastructure, and want to continue to manage all deployments from a single location then you might choose to use the CLI to provision your own deployments
- If your development team uses a poly-repo approach (multiple repositories for the CM and web application code), you will need to use the CLI to deploy your code. The Deploy app requires all the code to be in the same repository.

### XM Cloud Deploy Application GitOps

The Sitecore XM Cloud Deploy Application is used to provision XM Cloud Projects/Environments & Deployments. When a new project is created you can either use your own existing repository, or you can allow the application to provision one for you based on the Next.js Foundation Head starter template.

<Alert status="info">
  <AlertIcon />
  Whether you let the XM Cloud Deploy application create the repository, or you use your own, ALL XM Cloud implementations must start with the [XM Cloud Foundation Head](https://github.com/sitecorelabs/xmcloud-foundation-head) repository.
</Alert>

You can read more about how to create a new project using the Deploy Application on our Documentation Site: https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html or follow the recipe: [Sprint Zero - Project Solution Setup](/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup).

Once the project is created, you will then provision an environment. These can be used to represent the different Production and Non-Production environments that you require. When creating them through the deploy application you can also choose to tie each environment to a different branch in your repository should that be a requirement for you. You can also choose to have the environment automatically deployed when changes are committed to the chosen branch.

After you have entered all the details and chosen to proceed a Deployment will commence that will push the required code and configuration to the newly created environment.

### Create your deployments using the Sitecore CLI

The Sitecore CLI has a series of Plugins available to enable different functionality. The Cloud Plugin is created to allow you to interact with XM Cloud and perform the provisioning activities normally completed through the Deploy Application. To perform the same process detailed above you would issue the following CLI commands to achieve the same output.

```
dotnet sitecore cloud login
```

This command will open a browser window allowing you to authenticate your CLI with the XM Cloud Deploy application.

```
dotnet sitecore project create -n <<PROJECT_NAME>>
```

This command will create a new project with the name provided as the value for the -n parameter. This command will return the ID of the created project which we will use in subsequent commands.

```
dotnet sitecore cloud environment create --project-id <<PROJECT_ID>> -n << ENVIRONMENT_NAME>>
```

This command will create a new environment with the name passed into the -n parameter. It will return the ID of the created environment which we will use in subsequent commands.

```
dotnet sitecore cloud deployment create --environment-id << ENVIRONMENT_NAME >> --upload
```

This command will create a new deployment for the previously created environment. The `--Upload` flag is optional, when not provided you will get a clean XM Cloud installation, none of your code will be deployed.

When running the command within a DevOps pipeline, you can use it to upload your custom codebase to the platform.

### Deploying your head

Sitecore XM Cloud is based on a Headless architecture pattern. This means that your site is served by a separate application (or head), to your main XM Cloud Infrastructure. The customer will need to provision this application as well. Currently, XM Cloud has a connector for Vercel allowing you to provision your head directly from within the XM Cloud Deploy Application. It is recommended to use this connector to deploy your site to Vercel where possible, however there are some scenarios where that won’t be possible and you will have to manage the deployment of this separately, for example

- You’re not using Vercel to host your head.
- You’re not using a Monorepo and your head and XM Cloud application elements are stored in separate repositories.
- You’re using the CLI to deploy XM Cloud as described above, and want to manage your head deployments using the CI/CD tooling.

### Deploy using the Vercel Connector

Once you have provisioned your XM Cloud Infrastructure and created a Site return to the Sites tab in the Deploy application for your Environment. Then, click the button on the right and choose “Set up hosting”. Complete the sections and follow the prompts to deploy your site to a new Vercel installation.

<Alert>
  <AlertIcon />
  You can learn more about how to manage your Vercel Connector on our Documentation Site: https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-connections-for-source-control-and-hosting-providers.html
</Alert>

### Deploy a custom head Deployment

If you need to create a custom deployment for your head, then the approach you take will vary for each project, depending on the Hosting Platform and CI/CD tooling that you choose to use. You can see some getting started guides for some of the more common hosting providers below:

- [Getting started with Vercel](https://vercel.com/docs/getting-started-with-vercel)
- [Getting started with Netlify](https://docs.netlify.com/get-started/)
- [Getting started with AWS Amplify](https://aws.amazon.com/getting-started/hands-on/host-static-website/)

Note that each of the above platforms have different pros/cons, and each support a different subset of the complete NextJS functionality. You will need to analyse the different options to find the best fit for the project.

<Alert>
  <AlertIcon />
  Currently, Sitecore strongly recommends Vercel or Netlify for Next.js hosting. These hosts give the most complete feature set for Next.js.

Azure App Services and Azure Static WebApps have a lot of limitations so these options are not recommended at this time. Please see this blog post for the reasons why: [Sitecore and Azure Static Web Apps](https://exdst.com/posts/20240121-sitecore-azure-static-web-apps)
</Alert>

### Related Recipes

<Row columns={2}>
  <Link title="Project Solution Setup" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/project-solution-setup" />
</Row>

### Related Documentation

<Row columns={2}>
  <Link title="XM Cloud Deploy app | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html" />
  <Link title="Manage an environment | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-an-environment.html" />
  <Link title="Sitecore Command Line Interface | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-command-line-interface.html" />
  <Link title="Sitecore Command Line Interface | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-command-line-interface.html" />
</Row>

### Related Links

<Row columns={2}>
  <Link title="Sitecore and Azure Static WebApps" link="https://exdst.com/posts/20240121-sitecore-azure-static-web-apps" />
</Row>

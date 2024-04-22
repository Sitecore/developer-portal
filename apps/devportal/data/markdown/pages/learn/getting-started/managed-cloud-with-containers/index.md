---
product: ['managed-cloud', 'xm', 'xp', 'xc']
title: 'Getting Started with Sitecore Managed Cloud with Containers'
description: 'Learn the steps needed to get up and running with Docker and Containers with the latest Managed Cloud offering.'
---

## Overview

The purpose of this guide will be to provide a list of existing documentation and a guide to getting started with Managed Cloud with Containers (MCC). The guide is broken down into multiple sections, that are all required in the order they are listed to get started.

## Assumptions

There is an assumption that this is for an existing Sitecore solution (however most steps may apply to a new solution as well), that is ran from an existing Source Control Management (SCM) system such as Github, GitLabs, or a separate repository in Azure DevOps. This guide provides a general overview of a Sitecore XP transition to Sitecore MCC that does not consist of Containerization.

## Prerequisites

- Walkthrough uses Docker Desktop, which requires a paid license for certain organizations.
  - [Learn more about Docker Pricing](https://www.docker.com/pricing)
- Walkthrough uses Sitecore 10.2
- Users should have a working MCC environment:
  - [Access Details](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/getting-started-with-managed-cloud.html)
  - [Architecture](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/the-managed-cloud-architecture.html)
- Users should have correct permissions to the MCC Azure DevOps project:
  - Users should see the "Repository" tab in Azure DevOps, if not, your account may need to have a valid Visual Studio Subscription.
  - Details about Permissions:
    - [Managed Security Overview](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/managed-cloud-security-overview.html)
    - [Managed Security Roles](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/the-managed-cloud-security-roles.html)
  - MCC project should contain an Infrastructure Repository:
    - [Infrastructure Documentation](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/deploying-in-managed-cloud.html#infrastructure_body)
  - MCC project should contain an Application Repository:
    - [Application Documentation](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/deploying-in-managed-cloud.html#application_body)
  - If you don't have the correct permissions, you should reach out to Sitecore Support and put in a "Get Access - User service request" to request access.
- The move to MCC may require a large shift in your existing CI/CD strategy, especially with older versions of Sitecore and if your repository doesn't already use containers.
- Basic understanding of the following:
  - [Docker](https://www.sitecore.com/knowledge-center/getting-started/docker-a-quick-overview)
  - [Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
  - [Terraform](https://learn.hashicorp.com/collections/terraform/azure-get-started)
  - [Ansible](https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html)

## Adding Containers to Your Solution

In order to get started with Managed Cloud with Containers (MCC), your existing solution needs to be extended to support containers. Sitecore has multiple resources that can assist with getting your solution configured with Docker.

Before you get started with Docker, you'll need to ensure that Docker Desktop is installed and all pre-requisites to run docker locally are in place: [Pre-requisite list](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/deploying-in-managed-cloud.html).

You should also ensure you can run a standard instance of Sitecore with Docker on your local environment, before attempting to customize your existing solution locally [Run Your First Docker Instance](https://doc.sitecore.com/xp/en/developers/102/developer-tools/run-your-first-sitecore-instance.html).

### Solution Modifications

To get started with Docker, you must extend the base Sitecore docker images provided by the public Sitecore Container Registry and extend those images to include customizations from your solution. Below are some basic steps and helpful resources to get started.

It is recommended to use a multi-repository architecture for Managed Cloud, where the Infrastructure and Application repositories will live within the Azure DevOps Managed Cloud environment, while your existing source code will live in an external repository.

Most of the details listed below are also included in this document:

[Running Your First Sitecore Instance in Docker](https://doc.sitecore.com/xp/en/developers/102/developer-tools/run-your-first-sitecore-instance.html)

- You will start with creating solution images that extend the base images, based on a topology that works well for local development (likely XM or XP0). You can get the basic details for the Out of the Box (OOTB) definitions from the Container Deployment repository on Github.
  - [XP0 Container Deployment Example](https://github.com/Sitecore/container-deployment/tree/master/compose/sxp/10.2/ltsc2019/xp0)
  - You should place the `docker-compose.yml` in the root of your solution.
- You will need a folder in your solution that contains the definition on creating the images you need for your implementation (contained in a Dockerfile), which should be a series of commands to take in base images, and layer on top of the image, your solution. In most common Sitecore implementations this folder is located at `./docker/build/[role]/Dockerfile`. You should create a file for each of your images, even if you don't intend to have customizations, so that future customizations are easier to make.
  - [Building Custom Sitecore Images](https://doc.sitecore.com/xp/en/developers/102/developer-tools/building-custom-sitecore-images.html)
  - [Build Sitecore Solution Guide](https://doc.sitecore.com/xp/en/developers/102/developer-tools/build-sitecore-solutions.html)
  - [Common Docker Examples](https://github.com/Sitecore/docker-examples)
- You will need an environment file `.env` in the root of your solution which will contain basic environment variables to be used throughout your docker compose file, which looks like `${ENVIRONMENT_VARIABLE}`. You can start by reusing the file located to the corresponding version and topology in the following repository:
  - [Container Deployment Repository](https://github.com/Sitecore/container-deployment)
  - It's important to keep your Containers immutable as much as possible, which is why environment variables are important. [Learn more about Best Practices](https://cloud.google.com/architecture/best-practices-for-operating-containers#ensure_that_your_containers_are_stateless_and_immutable).
- You'll need to define an override file for the OOTB docker-compose definition `docker-compose.override.yml`. This is where you'll define your custom images and pass in any build arguments to create those custom images. It is important to not make changes directly to the main `docker-compose.yml` file, since it contains OOTB topology information. Instead you should use the override file to make customizations, that way, future upgrades to the version of Sitecore will be easier.
  - [Example of an Existing Override File](https://github.com/Sitecore/docker-examples/blob/develop/custom-images/docker-compose.override.yml)
  - [Recommendations on Docker Compose Configuration](https://doc.sitecore.com/xp/en/developers/101/developer-tools/build-sitecore-solutions.html#configure-in-docker-compose_body)
- You'll likely need two different Powershell scripts to handle developer onboarding, including `init.ps1` used for certificate creation, and `clean.ps1`, which is used for cleaning volume data (such as logs or cores).
  - [Preparing to Run Docker](https://doc.sitecore.com/xp/en/developers/102/developer-tools/run-your-first-sitecore-instance.html#preparation_body)
  - [Persistent Storage Cleanup](https://doc.sitecore.com/xp/en/developers/102/developer-tools/run-your-first-sitecore-instance.html#persistent-storage-cleanup_body)
- You'll need a data folder, where volume data is stored when your containers are running. The standard path you'll see in most repositories is `./docker/data/[role]`, these folders aren't needed for every role.
- Lastly, you'll need a configuration folder for `Traefik` configuration. Traefik is used as a reverse proxy to facilitate SSL Certificates and friendly host names while running docker locally. This folder is typically located in `./docker/traefik` and contains SSL and other Traefik configuration.

### Advanced Modifications

There are often advanced scenarios needed in your images. Custom modules or event existing Sitecore modules that need to be added into the images that you are creating.

#### Custom Configuration

It's possible that you'll run into scenarios where you need to patch the configuration or add files to your images based on a specific scenario. Refer to the links below for handling some of these potential scenarios.

- [Applying Configuration Transforms](https://doc.sitecore.com/xp/en/developers/102/developer-tools/applying-configuration-transforms.html)

#### Modules

Modules should never directly get installed in your existing containers running in production, because not only would you need to install these modules on each environment, but on your next release, your modules would likely disappear. Instead, any files or item changes (Sitecore or 3rd party modules not committed to Source Control) need to be layered onto the images that are being created. By doing this, you ensure everyone or every environment that pulls those images, will have everything that matches everyone elses images.

- Sitecore Modules
  - [Add Sitecore Modules](https://doc.sitecore.com/xp/en/developers/102/developer-tools/add-sitecore-modules.html)
  - [Sitecore Module References](https://doc.sitecore.com/xp/en/developers/102/developer-tools/sitecore-module-reference.html)
- [3rd Party Modules Video](https://www.youtube.com/watch?v=R5kdGqXeMcc)

## Create CI Pipeline for Managed Cloud Deployments

The Continous Integration (CI) process involves building the solution images that you ran through locally, but on various releases to your Source Control Management (SCM) system. These builds will construct the images intended for your production Sitecore environment, which is likely a different topology than the XM1 or XP0 topology that you ran locally. Below are some common steps that you'll take to modify your solution for you CI process.

The overall process involves building your images with the CI tool of your choice and then using basic authentication to push those images into your Azure Container Registry (ACR) for further use during the Continuous Deployment (CD) process.

1. You'll need to first create the process to build your images, likely in a different topology than what you ran locally, on strategy to do this, is to create a new docker-compose.yml file for these builds. This new compose file only needs instructions related to the build of the images, since Kubernetes definitions will handle how those images run (including volumes, memory usage, etc.).
   - [An example of a docker-compose.build.yml File](https://github.com/Sitecore/Sitecore.Demo.Platform/blob/main/docker-compose-xp1.build.yml)
2. You'll need to create the build definition files (Dockerfile) for the images that you plan to build that are not in your original docker-compose.yml file. Example, if you originally setup an XP0 and are now building XP1 images, you'll have several new images depending on your configuration, such as CD, PRC, as well as several xConnect roles.
3. (Optional) if you are using a CI system like Azure DevOps or another system that uses Yaml to configure the the build process, you should create this file and specify the steps in the build. Your process should be setup to build the images in this custom docker-compose.yml file and then push those images into the MCC ACR.
   - [Example of Azure Pipeline Yaml](https://github.com/Sitecore/MVP-Site/blob/main/azure-pipelines.yml)
4. You will need to authenticate with the MCC ACR using the Admin account (which is turned on by MCC by default) for completing pushes to the ACR during the build process.
   - [Admin Account Overview](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-authentication?tabs=azure-cli#admin-account)
   - If you are using Azure DevOps to configure your CI pipeline, you'll need to complete the following steps:
     - You'll need to create a new Service Connection for your ACR, but specify this registry as a standard docker registry, instead of using an Azure Container Registry. Refer to the image below:
       ![Service Connection Details for Azure Container Registry Authentication in Azure DevOps](https://mss-p-006-delivery.stylelabs.cloud/api/public/content/05753795f5974b15bca0d6dfe7c80de2?v=bced5b2d)
     - In your Build Pipeline you'll need to use the following parameters for the use of this service principle.
5. (Optional) There are several strategies to replace the environment variables in these files, and it may vary upon CI system used, but if you are using Azure DevOps, you can define a Variable Group and if you match them to the variables in your file (ie. `${REGISTRY}` with a key of REGISTRY, and a value), they should automatically get picked up in your file, if you assign the variable group to your build pipeline.
6. Once you've completed the build and push of your images, you can now move on to the next section, where you'll configured the CD of your release process. You'll need to know your Build Id and Build branch for use with tagging.

## Adjustments to CD Pipeline

The Continuous Delivery (CD) pipeline is hosted in the `Application` repository in MCC and utilizes Ansible to pull the images and release those images to AKS. Once you have successfully pushed your images into your Azure Container Registry (ACR), you'll need to update your `./config/docker-images/docker-images.json`.

The `Application` and `Infrastructure` repositories in the Managed Cloud with Containers (MCC) Azure DevOps environment are both configured to trigger deployments when a change is made to the `main` branch either directly or via a pull request (however you can also trigger the deployment manually). The best practice would be to create a new feature branch for your latest deployment and in that branch, you'll need to update the configuration to include references to your new custom images in the ACR. This is where you'll need to know the latest build number and branch (or tag version of the latest image in your ACR).

- [Define Custom Images](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/configure-managed-cloud.html#add-a-custom-image_body)

![Example Docker Images File](https://mss-p-006-delivery.stylelabs.cloud/api/public/content/9f0aca68e6ad43a79e913b51c0214a30?v=01d65206)

Keep in mind that if you have any more complex scenarios, including customizations to Solr or MSSQL, you'll likely need to init these changes to the respective environment to include them. Example if you were using SXA, you'll need to include the latest CM version, but also include instructions or configuration to init these changes in Solr (SearchStax). There are several guides on how to add modules and make these changes.

- [Walkthrough: Adding the SXA Module](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/walkthrough--adding-the-sxa-module.html)

It is important to callout, that in Sitecore 10.2, Sitecore introduced Items as Resources (IAR) for modules, which means that you may not always need to Init MSSQL for a specific module. You should refer to the module references to understand when updates to MSSQL or Solr are required. If you have made changes to the Solr or MSSQL images locally, this likely means you'll need to make the same changes to push these to your MCC environment. Keeping in mind that Solr and MSSQL are not run within containers in a MCC environment.

- [Sitecore Module References](https://doc.sitecore.com/xp/en/developers/102/developer-tools/sitecore-module-reference.html)
- [Sitecore Items as Resources](https://community.sitecore.com/community?id=community_blog&sys_id=52751abc1bd44110b8954371b24bcb31)

## New Infrastructure

If you need to configure changes to your infrastructure, you'll need to work with Terraform and the Infrastructure repository, and likely include additional changes to your existing solution images (ie. Adding Horizon for example). Sitecore has provided multiple scenarios and how you would achieve those scenarios listed here:

- [Infrastructure Scenarios](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/configure-managed-cloud.html)

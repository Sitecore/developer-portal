---
title: 'Getting Started with Sitecore Managed Cloud with Containers'
description: 'What is a Composable DXP and why does it matter for developers? Get started learning about what this term means and how it applies in the world of Sitecore products.'
partials: ['learn/getting-started/articles/introduction-to-composable-dxp']
---


## Overview

The purpose of this guide will be to provide a list of existing documentation and a guide to getting started with Managed Cloud, with an existing solution, although most of these steps will still apply for a new Managed Cloud instance with a new solution.  The guide is broken down into multiple sections, that are all required in the order they are listed to get started with Managed Cloud with Containers (MCC).

## Assumptions

This page assumes that you have an existing solution, that is ran from an existing SCM application such as Github, GitLabs, or a separate repository in Azure Devops. This guide provices a general overview of a SItecore XP transition to Sitecore Managed Cloud with Containers (MCC) that doesn't already use containers.

## Prerequisites

- Assumes the use and installation of Docker Desktop, which at the time of this writing requires a paid license for certain organizations.
  - [Docker Pricing](https://www.docker.com/pricing)
- Assumes the use of Sitecore 10.2
- Users should have a working MCC environment:
  - [Access Details]()
  - [Architecture]()
- Users should have correct permissions to the MCC Azure Devops project:
  - Users should see the "Repository" tab in Azure Devops, if not, your account may need to have a valid Visual Studio Subscription.
  - Details about Permissions:
    - [Managed Security Overview](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/managed-cloud-security-overview.html)
    - [Managed Security Roles](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/the-managed-cloud-security-roles.html)
  - Your MCC project should contain an Infrastructure Repository:
    - [Infrastructure Documentation](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/deploying-in-managed-cloud.html#infrastructure_body)
  - Your MCC project should contain an Application Repository:
    - [Application Documentation](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/deploying-in-managed-cloud.html#application_body)
  - If you don't have the correct permissions, you should reach out to Sitecore Support and put in a "Get Access - User service request" to request access.
- The move to MCC may require a large shift in your existing CI/CD strategy, especially with older versions of Sitecore and if your repository doesn't already use containers.
- Basic understanding of the following:
  - [Docker](https://www.sitecore.com/knowledge-center/getting-started/docker-a-quick-overview)
  - [Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
  - [Terraform](https://learn.hashicorp.com/collections/terraform/azure-get-started)
  - [Ansible](https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html)

## Adding Containers to Your Solution

In order to get started with Managed Cloud with Containers (MCC), your existing solution needs to be extended to support containers.  Sitecore has multiple resources that can assist with getting your solution configured with Docker.

Before you get started with Docker, you'll need to ensure that Docker Desktop is installed and all pre-requisites to run docker locally are in place: [Pre-requisite list](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/deploying-in-managed-cloud.html).

You should also ensure you can run a standard instance of Sitecore with Docker on your local environment, before attempting to customize your local solution [Run Your First Docker Instance](https://doc.sitecore.com/xp/en/developers/102/developer-tools/run-your-first-sitecore-instance.html).

## Create CI Pipeline for Managed Cloud Deployments

The Continous Integration (CI) process involves building the solution images that you ran through locally, but on various releases to your Source Control Management (SCM) system.  These builds will construct the images intended for your production Sitecore environment, which is likely a different topology than the XM1 or XP0 topology that you ran locally.  Below are some common steps that you'll take to modify your solution for you CI process.

The overall process involves building your images with the CI tool of your choice and then using basic authentication to push those images into your Azure Container Registry (ACR) for further use during the Continuous Deployment (CD) process.

1. You'll need to first create the process to build your images, likely in a different topology than what you ran locally, on strategy to do this, is to create a new docker-compose.yml file for these builds.  This new compose file only needs instructions related to the build of the images, since Kubernetes definitions will handle how those images run (including volumes, memory usage, etc.).
    - [An example of this file](https://github.com/Sitecore/Sitecore.Demo.Platform/blob/main/docker-compose-xp1.build.yml)
2. You'll need to create the build definition files (Dockerfile) for the images that you plan to build that are not in your original docker-compose.yml file.  Example, if you originally setup an XP0 and are now building XP1 images, you'll have several new images depending on your configuration, such as CD, PRC, as well as several xConnect roles.
3. (Optional) if you are using a CI system like Azure Devops or another system that uses Yaml to configure the the build process, you should create this file and specify the steps in the build.  Your process should be setup to build the images in this custom docker-compose.yml file and then push those images into the MCC ACR.
    - [Example of Azure Pipeline Yaml]()
4. You will need to authenticate with the MCC ACR using the Admin account (which is turned on by MCC by default) for completing pushes to the ACR during the build process.
    - [Admin Account Overview]()
    - If you are using Azure Devops to configure your CI pipeline, you'll need to complete the following steps:
        - You'll need to create a new Service Connection for your ACR, but specify this registry as a standard docker registry, instead of using an Azure Container Registry.
          [IMAGE]
        - In your Build Pipeline you'll need to use the following parameters for the use of this service principle.
5. (Optional) There are several strategies to replace the environment variables in these files, and it may vary upon CI system used, but if you are using Azure Devops, you can define a Variable Group and if you match them to the variables in your file (ie. ${REGISTRY} with a key of REGISTRY, and a value), they should automatically get picked up in your file, if you assign the variable group to your build pipeline.
6. Once you've completed the build and push of your images, you can now move on to the next section, where you'll configured the CD of your release process.  You'll need to know your Build Id and Build branch for use with tagging. 

## Adjustments to CD Pipeline
The Continous Delivery (CD) pipeline is hosted in the "Application" repository in MCC and utilizes Ansible to pull the images and release those images to AKS.  Once you have successfully pushed your images into your Azure Container Registry (ACR), you'll need to update your `./config/docker-images/docker-images.json`.

The `Application` and `Infrastructure` repositories in the Managed Cloud with Containers (MCC) Azure Devops environment are both configured to trigger deployments when a change is made to the `main` branch either directly or via a pull request (however you can also trigger the deployment manually).  The best practice would be to create a new feature branch for your latest deployment and in that branch, you'll need to update the configuration to include references to your new custom images in the ACR.  This is where you'll need to know the latest build number and branch (or tag version of the latest image in your ACR).

  - [Define Custom Images](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/configure-managed-cloud.html#add-a-custom-image_body)

  IMAGE HERE

Keep in mind that if you have any more complex scenarios, including customizations to Solr or MSSQL, you'll likely need to init these changes to the respective environment to include them.  Example if you were using SXA, you'll need to include the latest CM version, but also include instructions or configuration to init these changes in Solr (SearchStax).  There are several guides on how to add modules and make these changes.

  - [Walkthrough: Adding the SXA Module](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/walkthrough--adding-the-sxa-module.html)

It is important to callout, that in Sitecore 10.2, Sitecore introduced Items as Resources for modules, which means that you may not always need to Init MSSQL for a specific module.  You should refer to the module references to understand when updates to MSSQL or Solr are required.  If you have made changes to the Solr or MSSQL images locally, this likely means you'll need to make the same changes to push these to your MCC environment.  Keeping in mind that Solr and MSSQL are not run within containers in a MCC environment.

  - [Sitecore Module References](https://doc.sitecore.com/xp/en/developers/102/developer-tools/sitecore-module-reference.html )
  - [Sitecore Items as Resources](https://community.sitecore.com/community?id=community_blog&sys_id=52751abc1bd44110b8954371b24bcb31)

## New Infrastructure

If you need to configure changes to your infrastructure, you'll need to work with Terraform and the Infrastructure repository, and likely include additional changes to your existing solution images (ie. Adding Horizon for example).  Sitecore has provided multiple scenarios and how you would achieve those scenarios listed here:

  - [Infrastructure Scenarios](https://doc.sitecore.com/xp/en/developers/102/managed-cloud/configure-managed-cloud.html)
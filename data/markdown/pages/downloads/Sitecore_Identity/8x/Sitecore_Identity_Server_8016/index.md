---
title: 'Sitecore Identity Server 8.0.16'
description: 'Sitecore Identity Server is the platform single sign-on mechanism for Sitecore Experience Platform and Sitecore Experience Commerce.'
---
  <Alert variant='warning' mb={4}>
    <AlertIcon />
    March 28, 2025: all artifacts have been published.
  </Alert>
  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Sitecore Identity Server 8.0 will be certified compatible with Sitecore XP 9.1 through 10.4.\
	Certification will come after successfully completing the full test plan for each Sitecore XP version.\
	Each Sitecore XP version is not supported for production deployment until a certification statement is made here in this alert.\
	We recommend you may proceed with pre-production activities for Sitecore XP versions not yet certified for production. The probability of a blocking compatibilty issue is low and its impact would be a patch level update of an artifact.\
	Please check back here for updates.
	 - As of 2025-03-24: Identity Server 8.0 is certified compatible with Sitecore XP 10.2, 10.3, and 10.4. This includes Sitecore XC, where applicable.
	 - **By 2025-04-04**: compatibility with Sitecore XP and XC 10.1 is planned to be certified.
	 - **By 2025-04-11**: compatibility with Sitecore XP and XC 9.1 through 10.0 is targeted to be certified.
  </Alert>
See [all available Identity Server versions](/downloads/Sitecore_Identity)

## On-premises deployments

| Resource | Description |
| --- | --- |
| [Sitecore Identity Server WDP](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore.IdentityServer.8.0.16.scwdp.zip) | Sitecore Identity Server WDP installation package. |
| [Identity Server Upgrade Script](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore.IdentityServer.UpgradeScripts.8.0.zip) | Script for updating the Core/Security database. |
| [Deployment Configuration files](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/IdentityServer%20Deployment%20Configuration%208.0.zip) | Deployment Configuration files. |
| [Installation and Upgrade Guide - On-premises](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore_Identity_Server_Installation_&_Upgrade-OnPremises-8.0.pdf) | Guide describing how to install Identity Server and upgrade it from Sitecore Identity Server 2.0 and later, for on-premises deployments. |

## Azure App Service deployments

| Resource | Description |
| --- | --- |
| [Sitecore Identity Server WDP](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore.IdentityServer.8.0.16.scwdp.zip) | Sitecore Identity Server WDP installation package (same package as above). |
| [Identity Server Upgrade Script](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore.IdentityServer.UpgradeScripts.8.0.zip) | Script for updating the Core/Security database (same script as above). | 
| [ARM Templates](https://github.com/Sitecore/Sitecore-Azure-Quickstart-Templates/releases/tag/8.0.16) | Link to ARM templates specifically for deploying the Sitecore Identity Server module; as of Identity Server 8.0 this template is now separate from the Sitecore ARM templates. |
| [Upgrade Guide - Azure App Service](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore_Identity_Server_Upgrade-AzureAppService-8.0.pdf) | Guide describing how to upgrade Identity Server from Sitecore Identity Server 2.0 and later, for Azure App Service deployments. Includes setting the new Application Insights - Connection String. |

## Container deployments

| Resource | Description |
| --- | --- |
| [Identity Server Upgrade Script](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore.IdentityServer.UpgradeScripts.8.0.zip) | Script for updating the Core/Security database (same script as above). | 
| [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the tags list of published Sitecore images available on the Sitecore Container Registry (SCR). Search on "sitecore-identity". |
| [Upgrade Guide - Docker Compose](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore_Identity_Server_Upgrade-DockerCompose-8.0.pdf) | Guide describing how to upgrade Identity Server from Sitecore Identity Server 5.0 and later, for Docker Compose deployments. |
| [Upgrade Guide - AKS](https://scdp.blob.core.windows.net/downloads/Sitecore%20Identity/8x/Sitecore_Identity_Server_8016/Sitecore_Identity_Server_Upgrade-AzureKubernetesService-8.0.pdf) | Guide describing how to upgrade Identity Server from Sitecore Identity Server 5.0 and later, for Azure Kubernetes Service deployments. |

## Release information

| Resource | Description |
| --- | --- |
| [Release Notes](/downloads/Sitecore_Identity/8x/Sitecore_Identity_Server_8016/Release_Notes) | Improvements and breaking changes. |

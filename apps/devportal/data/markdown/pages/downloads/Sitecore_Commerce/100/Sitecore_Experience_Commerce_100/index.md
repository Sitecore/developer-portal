---
title: "Sitecore Experience Commerce 10.0"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Commerce/100/Sitecore_Experience_Commerce_100.aspx
---

Sitecore Experience Commerce (XC) 10.0 is compatible with Sitecore Experience Platform (XP) 10.0, 10.0 Update-1, 10.0 Update-2, and 10.0 Update-3. Compatibility with XP 10.0 Update-3 requires updating an XC host file for connecting to Identity Server as described in [KB1000801](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1000801).

For containers deployments retrieve the applicable Sitecore Commerce Containers SDK version from [GitHub](https://github.com/Sitecore/container-deployment/releases) for compatibility with the correct XP update release. 

Refer to the [Sitecore Experience Commerce Compatibility Table](https://kb.sitecore.net/articles/804595) for the software and version prerequisites.

Sitecore XC 10.0 adds innovation features including:

Dynamic Bundles - optional and upgradable products in a bundle  
A Free gift with Purchase promotion  
A sample Sitecore DAM to Commerce connector  

This release adds a new deployment option based on Docker and Kubernetes. It adds a Sitecore Experience Commerce Software Development Kit (SDK) with example scripts to you help build your production container images. A set of prepared sample images is also provided via the Sitecore public container registry, for preparing a sample Commerce solution deployment.

Other highlights include:

Ability to set a promotion priority  
Return available promotions on products, from Engine  
Recommended products based on purchase history  
Promote products based on search boosting rules  
Storefront extensibility via Scriban templates  
Continued performance enhancements  
Framework & 3rd party updates: OData, .NET Standard, .NET Core, Solr, Redis client  
Corrective content based on feedback from our customers, partners, and developers  

Return to [all available versions](/Downloads/Sitecore_Commerce)

## Download Options for Sitecore Containers Deployments

 | Resource | Description |
 | --- | --- |
 | [Sitecore Commerce Containers SDK 1.0.224](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore.Commerce.Container.SDK.1.0.224.zip) | January 2021: Please go to [GitHub](https://github.com/Sitecore/container-deployment/releases) to retrieve newer versions of this SDK that are updated for compatibility with Microsoft Windows patches.This SDK contains the Dockerfiles, .env files, Docker compose ymls, Kubernetes yamls, and sample scripts to build container images of the Commerce Engine solution. The version 1.0.224 posted here is compatible with SXP 10.0.0 and Microsoft Windows container base images: ltsc2019, SAC 2004, and SAC 20H2. |
 | [Sitecore Commerce Containers SDK 1.1.10](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore.Commerce.Container.SDK.1.1.10.zip) | January 2021: Please go to [GitHub](https://github.com/Sitecore/container-deployment/releases) to retrieve newer versions of this SDK that are updated for compatibility Microsoft Windows patches.This SDK contains the Dockerfiles, .env files, Docker compose ymls, Kubernetes yamls, and sample scripts to build container images of the Commerce Engine solution. The version 1.1.10 posted here is compatible with SXP 10.0.1 and Microsoft Windows container base images: ltsc2019, SAC 2004, and SAC 20H2. |
 | [XC Installation Guide for Developer Workstation with Containers](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/XC_10.0_Installation_Guide_for_a_Commerce_Developer_Workstation_with_Container-en.pdf) | A guide that lists the requirements and provides step-by-step instructions for installing Sitecore Experience Commerce using sample containers on a developer workstation. |
 | [XC Installation Guide for Production Deployments with Kubernetes](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/XC_10.0_Installation_Guide_for_Production_Deployments_with_Kubernetes-en.pdf) | A guide that lists the requirements and provides step-by-step instructions for installing Sitecore Experience Commerce for a production deployment using Kubernetes. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Sitecore Image Reference](https://containers.doc.sitecore.com/docs/image-reference) | Link to additional information about the images available on the Sitecore Container Registry (SCR), as well as how to use them in your custom solution. |

## Download Options for Azure App Service Deployments

 | Resource | Description |
 | --- | --- |
 | [Packages for Azure App Service 2020.08-6.0.238](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore.Commerce.Azure.2020.08-6.0.238.zip) | The Commerce Web Deploy Packages (WDPs) for deployment to a Microsoft Azure App Service. |
 | [XC Installation Guide for Azure App Service](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore_XC_10_0_Installation_Guide_for_Azure_App_Servi-en.pdf) | A guide that provides step-by-step instructions for deploying Sitecore Experience Commerce 10.0.0 to a Microsoft Azure App Service. |

## Download Options for On Premises Deployments

 | Resource | Description |
 | --- | --- |
 | [Packages for On Premises WDP 2020.08-6.0.238](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore.Commerce.WDP.2020.08-6.0.238.zip) | The Commerce packages and supporting SDKs for on-premise or hosted virtual machine deployments using Web Deploy Packages (WDP). |
 | [Packages for Upgrading On Premises Deployments 2020.08-6.0.238](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore.Commerce.2020.08-6.0.238.zip) | The Commerce packages and supporting software for upgrading existing on premise deployments. |
 | [XC Installation Guide for On Premises](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore_XC_Installation_Guide_for_On-Premises_Solutions.pdf) | A guide that lists the requirements and provides step-by-step instructions for installing Sitecore Experience Commerce in a single-server configuration on-premise or on a hosted virtual machine using Web Deployment Packages (WDP). |
 | [Upgrade Guide for XC 9.3 to XC 10.0.0](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/Sitecore_XC_Upgrade_Guide_for_9_3_to_10_0.pdf) | A guide that provides step-by-step instructions for upgrading a Sitecore XC 9.3 deployment to Sitecore XC 10.0.0. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release Notes](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Non-secure/Sitecore%20XC10.0%20Release%20Notes.pdf) | New features/improvements, resolved issues, breaking changes, known issues. Documentation updates are also listed |
 | [Sitecore Documentation](https://doc.sitecore.com/) | Link to the Sitecore Documentation website. |
 | [Breaking Change Reports](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/XC10.0%20Engine%20Plugin%20Breaking%20Change%20Reports%205.0.150-6.0.197.zip) | A .zip file containing breaking change reports for each Engine plugin, by comparing a recent Sitecore Experience Commerce 10.0 build to 9.3. In particular, the introduction of .NET Standard results in a large number of breaking changes being reported, throughout the layers of function calls.  <br /> |

## Translations

 | Resource | Description |
 | --- | --- |
 | [Business Tools translations](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/BusinessTools.translations.zip) | Danish, German, Japanese language translation files for the Commerce Business Tools. Compatible with Sitecore Commerce Engine Connect 6.0.  <br />[Link to documentation for installing a translation file](https://doc.sitecore.com/developers/100/sitecore-experience-commerce/en/install-a-translation-file-for-the-xc-business-tools.html) |
 | [SXA Storefront translations](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/SXAStorefront.translations.zip) | Danish, German, Japanese language translation files for the SXA Storefront. Compatible with SXA Storefront 5.0. |
 | [Commerce Connect translations](https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/100/Sitecore%20Experience%20Commerce%20100/Secure/CommerceConnect.translations.zip) | Danish, German, Japanese language translation files for Commerce Connect. Compatible with Commerce Connect 15.0. |
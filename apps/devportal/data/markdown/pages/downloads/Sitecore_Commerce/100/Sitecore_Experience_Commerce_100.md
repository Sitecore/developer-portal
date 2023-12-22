---
title: Sitecore Experience Commerce 10.0
origin: https://dev.sitecore.net/Downloads/Sitecore_Commerce/100/Sitecore_Experience_Commerce_100.aspx
---

# Sitecore Experience Commerce 10.0

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
 | [Sitecore Commerce Containers SDK 1.0.224](https://sitecoredev.azureedge.net/~/media/A74BFCA282CD483D93C221D017990A45.ashx?date=20201119T033414) | January 2021: Please go to [GitHub](https://github.com/Sitecore/container-deployment/releases) to retrieve newer versions of this SDK that are updated for compatibility with Microsoft Windows patches.This SDK contains the Dockerfiles, .env files, Docker compose ymls, Kubernetes yamls, and sample scripts to build container images of the Commerce Engine solution. The version 1.0.224 posted here is compatible with SXP 10.0.0 and Microsoft Windows container base images: ltsc2019, SAC 2004, and SAC 20H2. |
 | [Sitecore Commerce Containers SDK 1.1.10](https://sitecoredev.azureedge.net/~/media/DF31798E01614B74ADCB8005A5B64F02.ashx?date=20201217T180722) | January 2021: Please go to [GitHub](https://github.com/Sitecore/container-deployment/releases) to retrieve newer versions of this SDK that are updated for compatibility Microsoft Windows patches.This SDK contains the Dockerfiles, .env files, Docker compose ymls, Kubernetes yamls, and sample scripts to build container images of the Commerce Engine solution. The version 1.1.10 posted here is compatible with SXP 10.0.1 and Microsoft Windows container base images: ltsc2019, SAC 2004, and SAC 20H2. |
 | [XC Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/639F1B13E20845E9A88D4907C33A6511.ashx?date=20211014T145836) | A guide that lists the requirements and provides step-by-step instructions for installing Sitecore Experience Commerce using sample containers on a developer workstation. |
 | [XC Installation Guide for Production Deployments with Kubernetes](https://sitecoredev.azureedge.net/~/media/9A177D586B4E4D0C9434188A31966AD4.ashx?date=20211014T145836) | A guide that lists the requirements and provides step-by-step instructions for installing Sitecore Experience Commerce for a production deployment using Kubernetes. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Sitecore Image Reference](https://containers.doc.sitecore.com/docs/image-reference) | Link to additional information about the images available on the Sitecore Container Registry (SCR), as well as how to use them in your custom solution. |

## Download Options for Azure App Service Deployments

 | Resource | Description |
 | --- | --- |
 | [Packages for Azure App Service 2020.08-6.0.238](https://sitecoredev.azureedge.net/~/media/CBFA93B510654AE68DD81D972DEC3984.ashx?date=20200811T103727) | The Commerce Web Deploy Packages (WDPs) for deployment to a Microsoft Azure App Service. |
 | [XC Installation Guide for Azure App Service](https://sitecoredev.azureedge.net/~/media/04955324B0F547268F40419581CF448E.ashx?date=20200814T132211) | A guide that provides step-by-step instructions for deploying Sitecore Experience Commerce 10.0.0 to a Microsoft Azure App Service. |

## Download Options for On Premises Deployments

 | Resource | Description |
 | --- | --- |
 | [Packages for On Premises WDP 2020.08-6.0.238](https://sitecoredev.azureedge.net/~/media/7ED76B7A45D04746A3862726ADB59583.ashx?date=20200819T155203) | The Commerce packages and supporting SDKs for on-premise or hosted virtual machine deployments using Web Deploy Packages (WDP). |
 | [Packages for Upgrading On Premises Deployments 2020.08-6.0.238](https://sitecoredev.azureedge.net/~/media/0B887D0EF964466398E2ED597CB15A8F.ashx?date=20200811T103213) | The Commerce packages and supporting software for upgrading existing on premise deployments. |
 | [XC Installation Guide for On Premises](https://sitecoredev.azureedge.net/~/media/4467AA3B5ED947FFA54AFC9B4DA5FD4B.ashx?date=20200812T153134) | A guide that lists the requirements and provides step-by-step instructions for installing Sitecore Experience Commerce in a single-server configuration on-premise or on a hosted virtual machine using Web Deployment Packages (WDP). |
 | [Upgrade Guide for XC 9.3 to XC 10.0.0](https://sitecoredev.azureedge.net/~/media/DEA950CEA29B48FB98E851355AD1C043.ashx?date=20200812T153204) | A guide that provides step-by-step instructions for upgrading a Sitecore XC 9.3 deployment to Sitecore XC 10.0.0. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release Notes](https://sitecoredev.azureedge.net/~/media/AC0F44C24CCE4154BCAF46E15D115DD4.ashx?date=20230223T151227) | New features/improvements, resolved issues, breaking changes, known issues. Documentation updates are also listed |
 | [Sitecore Documentation](https://doc.sitecore.com/) | Link to the Sitecore Documentation website. |
 | [Breaking Change Reports](https://sitecoredev.azureedge.net/~/media/F3FE2CBFD01F4AC594F2D0B5EE5AE832.ashx?date=20200807T032848) | A .zip file containing breaking change reports for each Engine plugin, by comparing a recent Sitecore Experience Commerce 10.0 build to 9.3. In particular, the introduction of .NET Standard results in a large number of breaking changes being reported, throughout the layers of function calls.  <br /> |

## Translations

 | Resource | Description |
 | --- | --- |
 | [Business Tools translations](https://sitecoredev.azureedge.net/~/media/6B0F23E4FBAA4CDFA229B1D8DD3BEE0C.ashx?date=20210216T221833) | Danish, German, Japanese language translation files for the Commerce Business Tools. Compatible with Sitecore Commerce Engine Connect 6.0.  <br />[Link to documentation for installing a translation file](https://doc.sitecore.com/developers/100/sitecore-experience-commerce/en/install-a-translation-file-for-the-xc-business-tools.html) |
 | [SXA Storefront translations](https://sitecoredev.azureedge.net/~/media/13C04706D5F74FBE86A35E7AD4A3C212.ashx?date=20200814T132652) | Danish, German, Japanese language translation files for the SXA Storefront. Compatible with SXA Storefront 5.0. |
 | [Commerce Connect translations](https://sitecoredev.azureedge.net/~/media/76FFA8822CBC4BCB849B69445F7012BB.ashx?date=20200814T142005) | Danish, German, Japanese language translation files for Commerce Connect. Compatible with Commerce Connect 15.0. |
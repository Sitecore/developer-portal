---
title: "Sitecore Experience Platform 10.3 Update-1"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103_Update1.aspx
---

Sitecore® Experience Platform 10.3 delivers new capabilities and quality improvements that enable organizations to deliver unforgettable experiences with increased ease and convenience. 

Whether self-hosted, implemented in Sitecore Managed Cloud, or used as Experience Manager (XM) through Sitecore Experience Manager Cloud (XM Cloud), the 10.3 release improves how organizations extend and integrate the Sitecore Experience Platform (SXP) with other applications in their marketing tech stack. New management and administration APIs and webhooks enable developers to take an API-first and industry-standard approach to customization, reducing the reliance on in-process custom code. This separation of concerns makes it easier for developers to upgrade to new versions of the Experience Platform in the future.

Additionally, the introduction of Headless SXA, Headless Services 21.0, and enhancements to developer tools with 10.3 makes it easier for organizations to use SXP as a headless CMS, and to build engaging experiences using modern front-end frameworks. 

Other highlights include:

-   Headless SXA: Benefit from site scaffolding and templating, and new Next.js components, when building applications with XM as a headless CMS.  
     
-   EXM enhancements: Added OAuth support for custom SMTP deployments.  
     
-   Headless Services 21.0: Includes the new starter framework to accelerate the creation of new projects, and support for Next.js 12.3.x and React 18.  
     
-   Management Services 5.0: Enhanced Experience Edge publishing, resolved default publishing target, added support for single-item publishing.  
     
-   Sitecore CLI 5.0: Added Linux support, new telemetry, and XM Cloud support.  
     
-   System updates: Upgraded Identity Server and Publishing Service to support .NET 6, added support for Solr 8.11.2, and support for Windows Server 2022 coming in January.

  

For developer documentation please refer to documentation website.

  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Please note that as part of your system upgrade to Sitecore Version 10.3, Sitecore may collect additional information such as product version, number of site visits, generic hardware and software information, and recovery actions. This information will be used to help us to optimize your experience. All data will be processed in accordance with Sitecore’s privacy policy [here](https://www.sitecore.com/trust/privacy-policy). Should you have any queries or wish to discuss this, [please refer to our FAQ](https://kb.sitecore.net/articles/424335), or contact your Sitecore Account Manager.
  </Alert>
  
  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Sitecore Experience Platform 9.1 or later does not support the `Active Directory` module.
  </Alert>
  
  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Sitecore encourages customers to always install latest update of a given version to ensure latest fixes are included in their solution. See [all available versions here](/downloads/Sitecore_Experience_Platform).
  </Alert>
  
  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Sitecore has moved its public feed from sitecore.myget.org to a different feed provider. [Learn more](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002999).
  </Alert>
    

This page contains all the resources for **Sitecore Experience Platform 10.3 Update-1**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/10.3.1.009452.1563) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore_XP_10_3_1_Developer_Workstation_Deployment_With_Docker.pdf) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore_XP_10_3_1_Production_Deployment_With_Kubernetes.pdf) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/SC-XP-10.3.1-Upgrade_Container_Deployment_Guide-en.pdf) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.3.1. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](/downloads/Sitecore_Installation_Framework/2x/Sitecore_Installation_Framework_230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](/downloads/Scripts_for_Sitecore_Security_database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Initial%20Release/Secure/Sitecore%20remote%20distributed%20installation%20templates.zip) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(Setup%20XP0%20Developer%20Workstation%20rev.%201.5.1-r2).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(Setup%20XM1%20Developer%20Workstation%20rev.%201.5.1-r2).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(WDP%20XP0%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(WDP%20XP1%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(WDP%20XM1%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(WDP%20XPSingle%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(WDP%20XPScaled%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(WDP%20XMSingle%20packages).zip) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(WDP%20XMScaled%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%20Azure%20Toolkit%20Resources%2010.3.1%20rev.%20009452.zip) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Initial%20Release/Secure/Sitecore.Content.Delivery.Network.Provider.1.0.0-r00010.scwdp.zip) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](/downloads/Sitecore_Azure_Blob_Storage/1x/Sitecore_Azure_Blob_Storage_501) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](/downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103_Update1/Release_Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://support.sitecore.com/kb?id=kb_search&kb_knowledge_base=3492d025db70dc109e54320a6896199f&spa=1&u_sxp_affected_versions=98d415871bd8f190efd0ec22604bcb41&language=en&u_affected_software=sitecore_experience_platform) | Link to known issues on the Sitecore Knowledge Base, filtered on SXP 10.3.0 (Initial Release). At time of release there are no known issues specific to SXP 10.3 Update-1. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC_Installation_Framework_2_3_0_Configuration_Guide_for_SC-XP-10.3.0-en.pdf) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/SC-XP-10.3.1-Installation-Guide-XM-Scaled-Topology-en.pdf) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/SC-XP-10.3.1-Installation-Guide-XP-Scaled-Topology-en.pdf) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/SC-XP-10.3.1-Quick_Install_Guide_Developer_Workstation-en.pdf) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Update Installation Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/SC-XP-10.3.1-Update_Installation_Guide-en_v2.pdf) | Explains how to update to the latest release in the Sitecore 10.3.X series. |
 | [Assembly list](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore.Platform.Assemblies%2010.3.1%20rev.%20009452.zip) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](/downloads/Sitecore_CLI/5x/Sitecore_CLI_52113) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](/downloads/Dynamics_CRM_Connect/8x/Sitecore_Connect_for_Microsoft_Dynamics_365_for_Sales_800) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](/downloads/Salesforce_Connect/8x/Sitecore_Connect_for_Salesforce_CRM_800) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](/downloads/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud/1x/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud_80) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](/downloads/Sitecore_Connect_for_Content_Hub/5x/Sitecore_Connect_for_Content_Hub_510) | Download files and release information for latest compatible version of Sitecore Connect™ for Content Hub. |
 | [Sitecore Data Exchange Framework](/downloads/Data_Exchange_Framework/8x/Data_Exchange_Framework_800) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](/downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1030) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. To ensure compatibility with the latest Sitecore XP 10.3.x update release, also install the latest cumulative hotfix for SXA 10.3.0. See KB1002845.  |
 | [Sitecore Headless Rendering](/downloads/Sitecore_Headless_Rendering/21x/Sitecore_Headless_Rendering_2101) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](/downloads/Sitecore_Horizon/100/Sitecore_Horizon_1020) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](/downloads/Sitecore_Identity/7x/Sitecore_Identity_70327) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore_Publishing_Service_Module/10x/Sitecore_Publishing_Service_Module_1030) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Sitecore%2010.3.1%20rev.%20009452%20(upgrade%20files).zip) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](/downloads/Sitecore_UpdateApp_Tool/1x/Sitecore_UpdateApp_Tool_131) | Updates the Core, Master, and Web databases. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Translations/Sitecore%2010.3.1%20rev.%20009452%20(da-DK).zip) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Translations/Sitecore%2010.3.1%20rev.%20009452%20(de-DE).zip) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Translations/Sitecore%2010.3.1%20rev.%20009452%20(ja-JP).zip) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Secure/Translations/Sitecore%2010.3.1%20rev.%20009452%20(zh-CN).zip) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/90/Sitecore%20Experience%20Platform%2090%20Initial%20Release/Secure/GeoIp%20Location%20China%20Localization%20Pack%201.0.0%20rev.%20180226.zip) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_Device_Detection_Services_Usage_Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_IP_Geolocation_Usage_Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_xDB_Cloud_Usage_Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
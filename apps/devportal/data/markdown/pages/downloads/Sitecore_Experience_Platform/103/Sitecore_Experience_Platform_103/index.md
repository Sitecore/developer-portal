---
title: "Sitecore Experience Platform 10.3"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103.aspx
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
    

This page contains all the resources for **Sitecore Experience Platform 10.3**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.3.0.008463.1229) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Sitecore_XP_10_3_0_Developer_Workstation_Deployment_With_Docker-en.pdf) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC-XP-10.3.0-Production_Deployment_With_Kubernetes-en.pdf) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC-XP-10.3.0-Upgrade_Container_Deployment_Guide-en.pdf) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.3.0. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](/downloads/Sitecore_Installation_Framework/2x/Sitecore_Installation_Framework_230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](/downloads/Scripts_for_Sitecore_Security_database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Initial%20Release/Secure/Sitecore%20remote%20distributed%20installation%20templates.zip) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(Setup%20XP0%20Developer%20Workstation%20rev.%201.5.0-r11).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(Setup%20XM1%20Developer%20Workstation%20rev.%201.5.0-r11).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(WDP%20XP0%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(WDP%20XP1%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(WDP%20XM1%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(WDP%20XPSingle%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(WDP%20XPScaled%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(WDP%20XMSingle%20packages).zip) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/WDP/Sitecore%2010.3.0%20rev.%20008463%20(WDP%20XMScaled%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Sitecore%20Azure%20Toolkit%20Resources%2010.3.0%20rev.%20008463.zip) | Sitecore Azure Toolkit Resources package. |

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
 | [Release notes](/downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103/Release_Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://eur02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fsupport.sitecore.com%2Fkb%3Fid%3Dkb_search%26kb_knowledge_base%3D3492d025db70dc109e54320a6896199f%26spa%3D1%26u_sxp_affected_versions%3Def85f7161b6b9d50722d4042b24bcbbd%26language%3Den&data=05%7C01%7Cjonas.christensen%40sitecore.com%7Cbddc1bdf999b41b6b23508dad76bee27%7C91700184c3144dc9bb7ea411df456a1e%7C0%7C0%7C638059155799746258%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=RKzA08xW%2BlzUEB62%2FvRvRZlKUct%2BLW8u5uOpu12DYDA%3D&reserved=0) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC_Installation_Framework_2_3_0_Configuration_Guide_for_SC-XP-10.3.0-en.pdf) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC-XP-10.3.0-Install-Guide-XM-Scaled-Topopoly-en.pdf) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC-XP-10.3.0-Install-Guide-XP-Scaled-Topology-en.pdf) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC-XP-10.3.0-Quick_Install_Guide_Developer_Workstation-en.pdf) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Upgrade Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/SC-XP-10.3.0-Upgrade%20Guide-en.pdf) | Explains how to directly upgrade from Sitecore XP 8.1.0 or later to Sitecore XP 10.3.0. |
 | [Assembly list](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Sitecore.Platform.Assemblies%2010.3.0%20rev.%20008463.zip) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](/downloads/Sitecore_CLI/5x/Sitecore_CLI_5125) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](/downloads/Dynamics_CRM_Connect/8x/Sitecore_Connect_for_Microsoft_Dynamics_365_for_Sales_800) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](/downloads/Salesforce_Connect/8x/Sitecore_Connect_for_Salesforce_CRM_800) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](/downloads/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud/1x/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud_80) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](/downloads/Sitecore_Connect_for_Content_Hub/5x/Sitecore_Connect_for_Content_Hub_510) | Download files and release information for latest compatible version of Sitecore Connect for Content Hub. |
 | [Sitecore Data Exchange Framework](/downloads/Data_Exchange_Framework/8x/Data_Exchange_Framework_800) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](/downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1030) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. |
 | [Sitecore Headless Rendering](/downloads/Sitecore_Headless_Rendering/21x/Sitecore_Headless_Rendering_2100) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Identity](/downloads/Sitecore_Identity/7x/Sitecore_Identity_70325) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore_Publishing_Service_Module/10x/Sitecore_Publishing_Service_Module_1030) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Sitecore%2010.3.0%20rev.%20008463%20(upgrade%20files).zip) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](/downloads/Sitecore_UpdateApp_Tool/1x/Sitecore_UpdateApp_Tool_131) | Updates the Core, Master, and Web databases. |
 | [Resource files for Modules](/downloads/Resource_files_for_Modules/1x/Resource_files_for_Modules_100) | Module resource files for upgrading Core, Master and Web. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Translations/Sitecore%2010.3.0%20rev.%20008463%20(da-DK).zip) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Translations/Sitecore%2010.3.0%20rev.%20008463%20(de-DE).zip) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Translations/Sitecore%2010.3.0%20rev.%20008463%20(ja-JP).zip) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Secure/Translations/Sitecore%2010.3.0%20rev.%20008463%20(zh-CN).zip) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/90/Sitecore%20Experience%20Platform%2090%20Initial%20Release/Secure/GeoIp%20Location%20China%20Localization%20Pack%201.0.0%20rev.%20180226.zip) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_Device_Detection_Services_Usage_Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_IP_Geolocation_Usage_Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_xDB_Cloud_Usage_Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
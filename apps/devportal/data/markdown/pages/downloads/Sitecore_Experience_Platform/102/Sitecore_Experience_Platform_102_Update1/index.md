---
title: "Sitecore Experience Platform 10.2 Update-1"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/102/Sitecore_Experience_Platform_102_Update1.aspx
---

Sitecore® Experience Platform™ 10.2 focuses on increasing performance and stability while helping to reduce costs so organizations can deliver unforgettable experiences faster than ever before. By providing the ability to incrementally convert to headless Sitecore architectures without a full rebuild, 10.2 also offers a bridge to our composable DXP for those who are interested in that path.

In addition, the developer experience is also vastly improved in 10.2 thanks to increases in agility and capabilities in SXA, publishing enhancements, headless rendering, and general upgrades and improvements.

Other highlights include:

-   EXM DDS Container Support: Dedicated email dispatch servers (DDS) are supported in Kubernetes and Docker compose files allowing for quicker setup.
-   Introduction of GetTargetContact: Helps deliver efficient communication between tracker and xConnect to help increase overall performance.
-   UX Improvements in Experience Analytics: Gives marketers more control of and access to their data, providing better visualization and more actionable reporting for stakeholders.
-   Personalization Effect Reporting: Marketers can now see the impact of personalization on the conversions for individual goals which helps evaluate campaign effectiveness.
-   Data Purge on Interactions: The ability to purge interactions, based on date, channel or if they contain a certain event.
-   Streamlined Horizon editing: Further enhancemens of SXA on Horizon provides an a more integrated coherent platform and streamlined editing experiences.
-   Scriban Template Improvements: Now at full parity with the classic Rendering Variants, frontend developers have more flexibility to fully express the HTML without the need to log in to Sitecore.
-   Headless Rendering 19.0: Includes enhancements and new documentation to facilitate the inclusion of Sitecore MVC components in the output of the Layout Service and Experience Edge, and conversion of existing Sitecore MVC sites to Jamstack architectures using Next.js.
-   Sitecore CLI 4.0: Provides improved release velocity with Items as resource plugin and security role serialization.

For developer documentation please refer to documentation website.

  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Please note that as part of your system upgrade to Sitecore Version 10.2, Sitecore may collect additional information such as product version, number of site visits, generic hardware and software information, and recovery actions. This information will be used to help us to optimize your experience. All data will be processed in accordance with Sitecore’s privacy policy [here](https://www.sitecore.com/trust/privacy-policy). Should you have any queries or wish to discuss this, [please refer to our FAQ](https://kb.sitecore.net/articles/424335), or contact your Sitecore Account Manager.
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
    

This page contains all the resources for **Sitecore Experience Platform 10.2 Update-1**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/10.2.1.009559.1564) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/SC-XP-10.2.1-Developer_Workstation_Deployment_With_Docker-en.pdf) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/SC-XP-10.2.1-Production_Deployment_With_Kubernetes-en.pdf) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/SC-XP-10.2.1-Sitecore_Upgrade_Container_Deployment_Guide-en.pdf) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.2.1. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](/downloads/Sitecore_Installation_Framework/2x/Sitecore_Installation_Framework_230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](/downloads/Scripts_for_Sitecore_Security_database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Initial%20Release/Secure/Sitecore%20remote%20distributed%20installation%20templates.zip) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(Setup%20XP0%20Developer%20Workstation%20rev.%201.4.1-r2).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(Setup%20XM1%20Developer%20Workstation%20rev.%201.4.1-r2).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(WDP%20XP0%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(WDP%20XP1%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(WDP%20XM1%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(WDP%20XPSingle%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(WDP%20XPScaled%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(WDP%20XMSingle%20packages).zip) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/WDP/Sitecore%2010.2.1%20rev.%20009559%20(WDP%20XMScaled%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/Sitecore%20Azure%20Toolkit%20Resources%2010.2.1%20rev.%20009559.zip) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Initial%20Release/Secure/Sitecore.Content.Delivery.Network.Provider.1.0.0-r00010.scwdp.zip) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](/downloads/Sitecore_Azure_Blob_Storage/1x/Sitecore_Azure_Blob_Storage_411) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](/downloads/Sitecore_Experience_Platform/102/Sitecore_Experience_Platform_102_Update1/Release_Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002735) | Link to known SXP 10.2.0 (Initial Release) issues on the Sitecore Knowledge Base. At time of release there are no known issues specific to SXP 10.2 Update-1. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102/Secure/SC-Installation-Framework-2.3.0-Config-Guide-for%20SC-XP-10.2.0-en.pdf) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/SC-XP-10.2.1-Installation_Guide_for_the_XM_Scaled_Topology-en.pdf) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/SC-XP-10.2.1-Installation_Guide_for_the_XP_Scaled_topology-en.pdf) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/SC-XP-10.2.1-Quick_Installation_Guide_for_a_Developer_Workstation-en.pdf) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Update Installation Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/SC-XP-10.2.1-Update_Installation_Guide-en_v2.pdf) | Explains how to update to the latest release in the Sitecore 10.2.X series. |
 | [Assembly list](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/Sitecore.Platform.Assemblies%2010.2.1%20rev.%20009559.zip) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](/downloads/Sitecore_CLI/5x/Sitecore_CLI_52113) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](/downloads/Dynamics_CRM_Connect/7x/Sitecore_Connect_for_Microsoft_Dynamics_365_for_Sales_700) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](/downloads/Salesforce_Connect/7x/Sitecore_Connect_for_Salesforce_CRM_700) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](/downloads/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud/1x/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud_70) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](/downloads/Sitecore_Connect_for_Content_Hub/5x/Sitecore_Connect_for_Content_Hub_500) | Download files and release information for latest compatible version of Sitecore Connect™ for Content Hub. |
 | [Sitecore Data Exchange Framework](/downloads/Data_Exchange_Framework/7x/Data_Exchange_Framework_700) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](/downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1020) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. To ensure compatibility with the latest Sitecore XP 10.2.x update release, also install the latest cumulative hotfix for SXA 10.2.0. See KB1001757.  |
 | [Sitecore Headless Rendering](/downloads/Sitecore_Headless_Rendering/20x/Sitecore_Headless_Rendering_2002) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](/downloads/Sitecore_Horizon/100/Sitecore_Horizon_1020) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](/downloads/Sitecore_Identity/7x/Sitecore_Identity_70327) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore_Publishing_Service_Module/10x/Sitecore_Publishing_Service_Module_1020) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/Sitecore%2010.2.1%20rev.%20009559%20(upgrade%20files).zip) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](/downloads/Sitecore_UpdateApp_Tool/1x/Sitecore_UpdateApp_Tool_120) | Updates the Core, Master, and Web databases. |
 | [Resource files for Modules](/downloads/Resource_files_for_Modules/1x/Resource_files_for_Modules_100) | Module resource files for upgrading Core, Master and Web. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/Translations/Sitecore%2010.2.1%20rev.%20009559%20(da-DK).zip) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/Translations/Sitecore%2010.2.1%20rev.%20009559%20(de-DE).zip) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/Translations/Sitecore%2010.2.1%20rev.%20009559%20(ja-JP).zip) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Secure/Translations/Sitecore%2010.2.1%20rev.%20009559%20(zh-CN).zip) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/90/Sitecore%20Experience%20Platform%2090%20Initial%20Release/Secure/GeoIp%20Location%20China%20Localization%20Pack%201.0.0%20rev.%20180226.zip) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_Device_Detection_Services_Usage_Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_IP_Geolocation_Usage_Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_xDB_Cloud_Usage_Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
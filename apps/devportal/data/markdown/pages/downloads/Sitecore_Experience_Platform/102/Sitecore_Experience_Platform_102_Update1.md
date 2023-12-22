---
title: Sitecore Experience Platform 10.2 Update-1
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/102/Sitecore_Experience_Platform_102_Update1.aspx
---

# Sitecore Experience Platform 10.2 Update-1

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
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.2.1.009559.1460) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/9A36FD6E5D9A4B5BA36F845094768EC1.ashx?date=20230807T133415) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/C36494BFF87242918E297B06422B1C77.ashx?date=20230807T133415) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/C44C8A6557DD4A38BB5399F6D995AFD6.ashx?date=20230913T135515) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.2.1. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](https://dev.sitecore.net:443/downloads/Sitecore%20Installation%20Framework/2x/Sitecore%20Installation%20Framework%20230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](https://dev.sitecore.net:443/downloads/Scripts%20for%20Sitecore%20Security%20database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/9461EB5D5BAB47A892C1F077A9F5545A.ashx?date=20230829T191450) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/13328097711842638A273C508968841E.ashx?date=20230829T191450) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/F1A7C5A95C2243979B960CAD45FD3D1E.ashx?date=20230829T220006) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/6A08B647FF8940B98FBEFA078C2D417A.ashx?date=20230829T222945) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/455877B33E5C47CDA11F2DBC539C148A.ashx?date=20230829T221748) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/0F3360704E5F420E90B91A2AFF5D2858.ashx?date=20230829T185615) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/CA03B7C55D18442B8BB9D460FE3410CE.ashx?date=20230829T185615) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/9688F921E09A4A5FAF0FC424896B1A7C.ashx?date=20230829T184831) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/A99D13CEE52D4FE6ADEC050C9F58F486.ashx?date=20230829T184831) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/9A11B213558D464D862DEC983C3FD6F8.ashx?date=20231017T213235) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://sitecoredev.azureedge.net/~/media/00FA1A0D0C4045F5AF1615FF9D20EB91.ashx?date=20181127T104334) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](https://dev.sitecore.net:443/downloads/Sitecore%20Azure%20Blob%20Storage/1x/Sitecore%20Azure%20Blob%20Storage%20411) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102%20Update1/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002735) | Link to known SXP 10.2.0 (Initial Release) issues on the Sitecore Knowledge Base. At time of release there are no known issues specific to SXP 10.2 Update-1. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net/~/media/F5E9FECF03544ED8ABCB1ED58F127338.ashx?date=20211103T162703) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/0F424D5F759346A699C38AD7EE9A795B.ashx?date=20230807T133415) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/544769864E89453D99EAC143BFEFBE74.ashx?date=20230807T133415) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/70EE669FE7094637BDA36999A75DC22E.ashx?date=20230807T133416) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Update Installation Guide](https://sitecoredev.azureedge.net/~/media/366E0D7D4DE84FA88857974A01362EC8.ashx?date=20231011T145512) | Explains how to update to the latest release in the Sitecore 10.2.X series. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/57C5A5767D77421694A3FA2C7F57AB93.ashx?date=20230831T170649) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](https://dev.sitecore.net:443/downloads/Sitecore%20CLI/5x/Sitecore%20CLI%2052113) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](https://dev.sitecore.net:443/downloads/Dynamics%20CRM%20Connect/7x/Sitecore%20Connect%20for%20Microsoft%20Dynamics%20365%20for%20Sales%20700) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](https://dev.sitecore.net:443/downloads/Salesforce%20Connect/7x/Sitecore%20Connect%20for%20Salesforce%20CRM%20700) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud/1x/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud%2070) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20for%20Content%20Hub/5x/Sitecore%20Connect%20for%20Content%20Hub%20500) | Download files and release information for latest compatible version of Sitecore Connect™ for Content Hub. |
 | [Sitecore Data Exchange Framework](https://dev.sitecore.net:443/downloads/Data%20Exchange%20Framework/7x/Data%20Exchange%20Framework%20700) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Accelerator/10x/Sitecore%20Experience%20Accelerator%201020) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. To ensure compatibility with the latest Sitecore XP 10.2.x update release, also install the latest cumulative hotfix for SXA 10.2.0. See KB1001757.  |
 | [Sitecore Headless Rendering](https://dev.sitecore.net:443/downloads/Sitecore%20Headless%20Rendering/20x/Sitecore%20Headless%20Rendering%202002) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](https://dev.sitecore.net:443/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201020) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](https://dev.sitecore.net:443/downloads/Sitecore%20Identity/7x/Sitecore%20Identity%2070327) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](https://dev.sitecore.net:443/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201020) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/120385D4C80E4306AB2DF68A48B817A3.ashx?date=20230831T175312) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](https://dev.sitecore.net:443/downloads/Sitecore%20UpdateApp%20Tool/1x/Sitecore%20UpdateApp%20Tool%20120) | Updates the Core, Master, and Web databases. |
 | [Resource files for Modules](https://dev.sitecore.net:443/downloads/Resource%20files%20for%20Modules/1x/Resource%20files%20for%20Modules%20100) | Module resource files for upgrading Core, Master and Web. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/E112017431904AA89F526B2FE8093414.ashx?date=20230829T214414) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/66EE7146EB1C4F3DB43AAFCA79B4524B.ashx?date=20230829T214414) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/1D08DA0A11744862969A28CE9A38E0BD.ashx?date=20230829T214414) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/C728B740018A48248D64A8557DCE4584.ashx?date=20230829T214414) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
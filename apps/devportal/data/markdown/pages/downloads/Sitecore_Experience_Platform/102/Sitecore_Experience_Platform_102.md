---
title: Sitecore Experience Platform 10.2
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/102/Sitecore_Experience_Platform_102.aspx
---

# Sitecore Experience Platform 10.2

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
    

This page contains all the resources for **Sitecore Experience Platform 10.2**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.2.0.006766.683) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/AC62878E09234AC9BAA434FCCA463925.ashx?date=20220623T121019) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/7C9507580CCC47E385ADAC44CD332418.ashx?date=20221010T145927) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/11DA7A5E0560406393F050AE97734A70.ashx?date=20220927T094804) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.2.0. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](/downloads/Sitecore%20Installation%20Framework/2x/Sitecore%20Installation%20Framework%20230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](/downloads/Scripts%20for%20Sitecore%20Security%20database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/F6813A6E3E424AB99A6E9A7CC257648B.ashx?date=20211101T105423) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/0C75EE14B23847FF9C71B3A39B295509.ashx?date=20211101T105422) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/F85D6FB55C3F4F6B98291FDDB43D89D2.ashx?date=20211101T110157) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/E7D4EFDAB1304835A054D0BC188D8709.ashx?date=20211101T110840) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/C6379FA451CC48318D06D01E1A820256.ashx?date=20211101T110157) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/A76B7EBDF595450BA3C3162EB76A415E.ashx?date=20211101T105007) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/1411E1BDDDC749AAAFE17BB7BA1B318F.ashx?date=20211101T104258) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/ED8DA8DB732A4A808D7721C7813FAED8.ashx?date=20211101T103725) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/7285CC247EFC4C3A911D849F22412764.ashx?date=20211101T103725) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/C48F28A94DAA48E58A5EDC4C1E13BF17.ashx?date=20231017T213202) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://sitecoredev.azureedge.net/~/media/00FA1A0D0C4045F5AF1615FF9D20EB91.ashx?date=20181127T104334) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](/downloads/Sitecore%20Azure%20Blob%20Storage/1x/Sitecore%20Azure%20Blob%20Storage%20411) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](/downloads/Sitecore%20Experience%20Platform/102/Sitecore%20Experience%20Platform%20102/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1002735) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net/~/media/F5E9FECF03544ED8ABCB1ED58F127338.ashx?date=20211103T162703) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/F96F27BA63634F0A9A973BE9C8841741.ashx?date=20211103T162730) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/25000BF720F44149BBE6CD2601809652.ashx?date=20211103T162758) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/28EE55B3263E4F219EE80519011E5A4D.ashx?date=20211103T162824) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Upgrade Guide](https://sitecoredev.azureedge.net/~/media/0AA18F7EE15F47A2827516C753C5E89D.ashx?date=20230220T111712) | Explains how to directly upgrade from Sitecore XP 8.1.0 or later to Sitecore XP 10.2.0. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/3D10268174C2458F9D4E443DF5C4B100.ashx?date=20211101T103348) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](/downloads/Sitecore%20CLI/4x/Sitecore%20CLI%20400) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](/downloads/Dynamics%20CRM%20Connect/7x/Sitecore%20Connect%20for%20Microsoft%20Dynamics%20365%20for%20Sales%20700) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](/downloads/Salesforce%20Connect/7x/Sitecore%20Connect%20for%20Salesforce%20CRM%20700) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](/downloads/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud/1x/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud%2070) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](/downloads/Sitecore%20Connect%20for%20Content%20Hub/4x/Sitecore%20Connect%20for%20Content%20Hub%20400) | Download files and release information for latest compatible version of Sitecore Connect™ for Content Hub. |
 | [Sitecore Data Exchange Framework](/downloads/Data%20Exchange%20Framework/7x/Data%20Exchange%20Framework%20700) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](/downloads/Sitecore%20Experience%20Accelerator/10x/Sitecore%20Experience%20Accelerator%201020) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. |
 | [Sitecore Headless Rendering](/downloads/Sitecore%20Headless%20Rendering/19x/Sitecore%20Headless%20Rendering%201900) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201020) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](/downloads/Sitecore%20Identity/6x/Sitecore%20Identity%20600) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201020) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/0CE195E3F7754AE6887BBC7A06B7E7C4.ashx?date=20211101T103348) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](/downloads/Sitecore%20UpdateApp%20Tool/1x/Sitecore%20UpdateApp%20Tool%20120) | Updates the Core, Master, and Web databases. |
 | [Resource files for Modules](/downloads/Resource%20files%20for%20Modules/1x/Resource%20files%20for%20Modules%20100) | Module resource files for upgrading Core, Master and Web. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/5847CF4635D54E508B7F364A005FEDB7.ashx?date=20211101T103425) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/4FEDCF1DC8904B48B707CC57071DC020.ashx?date=20211101T103425) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/BC59FD68B64A4428B746EC560CE5EF3E.ashx?date=20211101T103425) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/F5DE6C0C573E4D3990E2813EEF7E4787.ashx?date=20211101T103425) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
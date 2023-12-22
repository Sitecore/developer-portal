---
title: Sitecore Experience Platform 10.3 Update-1
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103_Update1.aspx
---

# Sitecore Experience Platform 10.3 Update-1

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
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.3.1.009452.1448) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/37B183FD129F4DBFB544794F39130121.ashx?date=20230807T131910) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/A9BA4544B59342E7B71EB53C515A12CC.ashx?date=20230727T145201) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/9CAA9BA8F964442B9029F700D5C30E8A.ashx?date=20230913T141814) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.3.1. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](https://dev.sitecore.net:443/downloads/Sitecore%20Installation%20Framework/2x/Sitecore%20Installation%20Framework%20230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](https://dev.sitecore.net:443/downloads/Scripts%20for%20Sitecore%20Security%20database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/77797548A634453585360E7FF67B012D.ashx?date=20230801T111126) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/DFA47C6112BA40FBBCD28CD9D4DFA94D.ashx?date=20230801T085355) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/299C1FE1D3C744218E96910DD6E4E5A4.ashx?date=20230801T093134) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/EA5451905FFD4323AEADF39C0FD682D9.ashx?date=20230801T110858) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/3B382C4D4E5F492E9484A2697C15846D.ashx?date=20230801T091307) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/6F2CC96AD43F4444940D1192436BACDD.ashx?date=20230801T121936) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/0C19E2F2A9014A9386D0F77EA99A8D8E.ashx?date=20230801T121936) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/9B56AC812AD04399A2016134FF8698F0.ashx?date=20230801T121934) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/7E0D6B10BA17463B9F22DD84D019C311.ashx?date=20230801T121934) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/BCF44ED7BF43413198D390E99E21022C.ashx?date=20231017T213341) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://sitecoredev.azureedge.net/~/media/00FA1A0D0C4045F5AF1615FF9D20EB91.ashx?date=20181127T104334) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](https://dev.sitecore.net:443/downloads/Sitecore%20Azure%20Blob%20Storage/1x/Sitecore%20Azure%20Blob%20Storage%20501) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103%20Update1/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://support.sitecore.com/kb?id=kb_search&kb_knowledge_base=3492d025db70dc109e54320a6896199f&spa=1&u_sxp_affected_versions=98d415871bd8f190efd0ec22604bcb41&language=en&u_affected_software=sitecore_experience_platform) | Link to known issues on the Sitecore Knowledge Base, filtered on SXP 10.3.0 (Initial Release). At time of release there are no known issues specific to SXP 10.3 Update-1. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net/~/media/513F8E70FD0441168A4F0A884EFD94EB.ashx?date=20221128T223834) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/60A703C9B5C4469DB2F2BAA34FA8CEF5.ashx?date=20230727T145226) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/8804CE83F5F94E4C912C09AE63CAA929.ashx?date=20230727T145248) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/E309448E37BC427B95784BFEB10DCD24.ashx?date=20230914T121805) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Update Installation Guide](https://sitecoredev.azureedge.net/~/media/0A27A888C57C42ACB078D64A0D2456BD.ashx?date=20231010T175250) | Explains how to update to the latest release in the Sitecore 10.3.X series. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/718118CF83024D5A899C5D49C48C8261.ashx?date=20230801T142013) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](https://dev.sitecore.net:443/downloads/Sitecore%20CLI/5x/Sitecore%20CLI%2052113) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](https://dev.sitecore.net:443/downloads/Dynamics%20CRM%20Connect/8x/Sitecore%20Connect%20for%20Microsoft%20Dynamics%20365%20for%20Sales%20800) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](https://dev.sitecore.net:443/downloads/Salesforce%20Connect/8x/Sitecore%20Connect%20for%20Salesforce%20CRM%20800) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud/1x/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud%2080) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20for%20Content%20Hub/5x/Sitecore%20Connect%20for%20Content%20Hub%20510) | Download files and release information for latest compatible version of Sitecore Connect™ for Content Hub. |
 | [Sitecore Data Exchange Framework](https://dev.sitecore.net:443/downloads/Data%20Exchange%20Framework/8x/Data%20Exchange%20Framework%20800) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Accelerator/10x/Sitecore%20Experience%20Accelerator%201030) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. To ensure compatibility with the latest Sitecore XP 10.3.x update release, also install the latest cumulative hotfix for SXA 10.3.0. See KB1002845.  |
 | [Sitecore Headless Rendering](https://dev.sitecore.net:443/downloads/Sitecore%20Headless%20Rendering/21x/Sitecore%20Headless%20Rendering%202101) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](https://dev.sitecore.net:443/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201020) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](https://dev.sitecore.net:443/downloads/Sitecore%20Identity/7x/Sitecore%20Identity%2070327) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](https://dev.sitecore.net:443/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201030) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/09E7D45842C3438B9961292824CE143F.ashx?date=20230801T153151) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](https://dev.sitecore.net:443/downloads/Sitecore%20UpdateApp%20Tool/1x/Sitecore%20UpdateApp%20Tool%20131) | Updates the Core, Master, and Web databases. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/79A5992E6F524F79AAEF9B292BCF1079.ashx?date=20230801T153919) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/D7CA04529C424611A0126DCDB4DB10B3.ashx?date=20230801T153920) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/528C3CF393C44830BDCAB0D52B7EE3E8.ashx?date=20230801T153920) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/DD5ABD1EF30749DB98921B9798C34DC5.ashx?date=20230801T153920) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
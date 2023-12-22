---
title: Sitecore Experience Platform 10.1 Update-2
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/101/Sitecore_Experience_Platform_101_Update2.aspx
---

# Sitecore Experience Platform 10.1 Update-2

Sitecore® Experience Platform™ 10.1 focuses on product updates and enhancements that improve time-to-market and increase usability and decrease infrastructure costs – all centered around enabling both Marketing and IT teams equally, thus making it easier and faster to launch and evolve digital customer experiences.

Sitecore AI Auto-Personalization Standard is available with this release, helps brands jumpstart personalization efforts, automatically identifying visitor trends, creating customer segments and modifying page elements to deliver personalized experiences and enabling users to drive more value out of their Sitecore implementations.

Other highlights include:

-   Horizon Enhancements providing new publishing and editing capabilities while reducing the need to switch UIs.
-   Global Search in Content and Pages enabling search within Horizon and making search more efficient.
-   Additional Field type support providing the ability to use Droplinks and Checklists within Horizon.
-   Rules-based content profiling improves marketer productivity with automatic behavioral-based profiling of content based on content tags and taxonomy.
-   Stronger SXA and Horizon integration exposing rendering parameters, components styles, and grid configuration out-of-the-box.
-   Simple Send Email action for sending emails without utilizing EXM and incorporating information from Forms fields.
-   Improved Upgrade Experience by storing default content items outside of the database, removing the need for applying Update packages.
-   Data Purge Tool for XDB provides more control of storage resources and can be used to reduce hosting costs.
-   Reporting role consolidation enables further hosting cost reduction by consolidation the Reporting role with the CM role.
-   New Next.js SDK and sample site are now available for the Sitecore JavaScript SDKs, providing a Jamstack rendering option that improves page performance and site scalability.

For developer documentation please refer to documentation website.

  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Please note that as part of your system upgrade to Sitecore Version 10.1, Sitecore may collect additional information such as product version, number of site visits, generic hardware and software information, and recovery actions. This information will be used to help us to optimize your experience. All data will be processed in accordance with Sitecore’s privacy policy [here](https://www.sitecore.com/trust/privacy-policy). Should you have any queries or wish to discuss this, [please refer to our FAQ](https://kb.sitecore.net/articles/424335), or contact your Sitecore Account Manager.
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
    

This page contains all the resources for **Sitecore Experience Platform 10.1 Update-2**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.1.2.006578.651) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/FCD3AEA2014F4FCBA71DFE6FBC5475F3.ashx?date=20220623T121019) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/A7F3F6120F364D24AC3E2DFE6975D61B.ashx?date=20221010T145927) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/18D8FB71FE934BF8B9A58940BDE7A53F.ashx?date=20230816T164921) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.1.2. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](https://dev.sitecore.net:443/downloads/Sitecore%20Installation%20Framework/2x/Sitecore%20Installation%20Framework%20230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](https://dev.sitecore.net:443/downloads/Scripts%20for%20Sitecore%20Security%20database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/C370D1E9F4E0452C9EDC8365C84405D8.ashx?date=20211007T105223) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/764B42133DB94633BA8D4B81898C1F8F.ashx?date=20211007T105223) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/01499DCBDF454301874F73A5B1B64BBE.ashx?date=20211007T105518) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/8036F63C230C4A929E463F50C57A532E.ashx?date=20211007T110034) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/D507EB299D2F42AC94A31D73D433054C.ashx?date=20211007T105518) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/753F2085D62F4FA0B8A97147BD0ADCBB.ashx?date=20211007T104719) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/205719558461489E9F8D0ABBE10C7E92.ashx?date=20211007T104459) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/4B59E62E370443699BADE37D2A9429C4.ashx?date=20211007T103709) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/28D0BA69132A4F32842B11D8A681F52E.ashx?date=20211007T103709) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/94A220AEBA2542DBBECFAEAB43A8455C.ashx?date=20231017T213057) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://sitecoredev.azureedge.net/~/media/00FA1A0D0C4045F5AF1615FF9D20EB91.ashx?date=20181127T104334) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](https://dev.sitecore.net:443/downloads/Sitecore%20Azure%20Blob%20Storage/1x/Sitecore%20Azure%20Blob%20Storage%20301) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/101/Sitecore%20Experience%20Platform%20101%20Update2/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://kb.sitecore.net/articles/545609) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net/~/media/594DAD84DFC549678EE234D06D9AEA44.ashx?date=20211008T103719) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/847849999CB0405D8DD33EAE1348131F.ashx?date=20211008T103719) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/06267684CA194F8CBB8109DA4943CDA4.ashx?date=20211008T103719) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/47F821F28A3C4ACDB756F3CD0438D731.ashx?date=20211008T103719) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Update Installation Guide](https://sitecoredev.azureedge.net/~/media/C64D65B9BDF54C6CAEA7E456AF470C4B.ashx?date=20220413T134736) | Explains how to update to the latest release in the Sitecore 10.1.X series. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/E100843D7F384148B03688FBB4C28EE9.ashx?date=20211007T110228) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](https://dev.sitecore.net:443/downloads/Sitecore%20CLI/3x/Sitecore%20CLI%20300) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](https://dev.sitecore.net:443/downloads/Dynamics%20CRM%20Connect/6x/Sitecore%20Connect%20for%20Microsoft%20Dynamics%20365%20for%20Sales%20600) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](https://dev.sitecore.net:443/downloads/Salesforce%20Connect/6x/Sitecore%20Connect%20for%20Salesforce%20CRM%20600) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud/1x/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud%2060) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20for%20Content%20Hub/4x/Sitecore%20Connect%20for%20Content%20Hub%20400) | Download files and release information for latest compatible version of Sitecore Connect™ for Content Hub. |
 | [Sitecore Data Exchange Framework](https://dev.sitecore.net:443/downloads/Data%20Exchange%20Framework/6x/Data%20Exchange%20Framework%20600) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Accelerator/10x/Sitecore%20Experience%20Accelerator%201010) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. |
 | [Sitecore Headless Rendering](https://dev.sitecore.net:443/downloads/Sitecore%20Headless%20Rendering/16x/Sitecore%20Headless%20Rendering%201600) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](https://dev.sitecore.net:443/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201011) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](https://dev.sitecore.net:443/downloads/Sitecore%20Identity/6x/Sitecore%20Identity%20600) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](https://dev.sitecore.net:443/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201010) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/700A72E960344E86A80540722F715464.ashx?date=20211007T110228) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](https://dev.sitecore.net:443/downloads/Sitecore%20UpdateApp%20Tool/1x/Sitecore%20UpdateApp%20Tool%20110) | Updates the Core, Master, and Web databases. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/374A59561D2F4B8B8EEE5488210774AD.ashx?date=20211007T103309) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/0573B9CA946A481987D538B3944A7B93.ashx?date=20211007T103309) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/63963A04AF714E708C74CDA782BC159C.ashx?date=20211007T103309) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/4097BC5306FD4A63804529069B571F82.ashx?date=20211007T103310) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
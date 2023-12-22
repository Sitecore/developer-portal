---
title: Sitecore Experience Platform 10.1 Update-3
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/101/Sitecore_Experience_Platform_101_Update3.aspx
---

# Sitecore Experience Platform 10.1 Update-3

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
    

This page contains all the resources for **Sitecore Experience Platform 10.1 Update-3**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.1.3.009558.1487) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/9CAFD33A2EBB48E596A72D197F175A80.ashx?date=20230810T125234) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/F4DE2ECCD79A4CD99AE03B9DB19AF16F.ashx?date=20230810T125234) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/050834208E9B47D79323BCB40CFD955E.ashx?date=20230816T165120) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.1.3. |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](https://dev.sitecore.net:443/downloads/Sitecore%20Installation%20Framework/2x/Sitecore%20Installation%20Framework%20230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](https://dev.sitecore.net:443/downloads/Scripts%20for%20Sitecore%20Security%20database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/6081ECBB7C09440E828A9EC9EC571985.ashx?date=20230906T044426) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/61DE1A1A96844EC39BE4F2A6FB50ED14.ashx?date=20230906T042020) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/B5264DCFF57343BFB3C7FDC5080F6DDA.ashx?date=20230906T045221) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/866345E4C18341C898B636950704BBF7.ashx?date=20230906T045451) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/3AC462DA9A064748BEF0FAE253AF029A.ashx?date=20230906T045036) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/EB54899FE6244412BDB8AE9508CEB686.ashx?date=20230906T105254) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/9E1684C04DA148D78A035BA2F7697E87.ashx?date=20230906T103618) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/780DA6C8A2CD44159A4734F3A9BA34F6.ashx?date=20230906T060416) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/9B45E8C2DD3F4245908DCF46B0FB18E0.ashx?date=20230906T051552) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/E702E92A9F6D4F1F98774BA6A051E121.ashx?date=20231017T213128) | Sitecore Azure Toolkit Resources package. |

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
 | [Release notes](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/101/Sitecore%20Experience%20Platform%20101%20Update3/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://kb.sitecore.net/articles/545609) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net/~/media/594DAD84DFC549678EE234D06D9AEA44.ashx?date=20211008T103719) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/CFA9506BC6234B0CA573FB26C7643CD5.ashx?date=20230810T125235) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/01D002B5456744529BE645EC57B84865.ashx?date=20230810T125235) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/E7999E910A5441DE93A8C7809B1E0DD4.ashx?date=20230810T125234) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Update Installation Guide](https://sitecoredev.azureedge.net/~/media/3B2B315EBD494B539B0025642D69A3FB.ashx?date=20231010T175141) | Explains how to update to the latest release in the Sitecore 10.1.X series. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/A105EF287B224C37818AFF75AF3E57E1.ashx?date=20230906T200337) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](https://dev.sitecore.net/Downloads/Sitecore_CLI/5x/Sitecore_CLI_52113) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](https://dev.sitecore.net:443/downloads/Dynamics%20CRM%20Connect/6x/Sitecore%20Connect%20for%20Microsoft%20Dynamics%20365%20for%20Sales%20600) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](https://dev.sitecore.net:443/downloads/Salesforce%20Connect/6x/Sitecore%20Connect%20for%20Salesforce%20CRM%20600) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud/1x/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud%2060) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Content Hub](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20for%20Content%20Hub/4x/Sitecore%20Connect%20for%20Content%20Hub%20400) | Download files and release information for latest compatible version of Sitecore Connect™ for Content Hub. |
 | [Sitecore Data Exchange Framework](https://dev.sitecore.net:443/downloads/Data%20Exchange%20Framework/6x/Data%20Exchange%20Framework%20600) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Accelerator/10x/Sitecore%20Experience%20Accelerator%201010) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. To ensure compatibility with the latest Sitecore XP 10.1.x update release, also install the latest cumulative hotfix for SXA 10.1.0. See KB1001756.  |
 | [Sitecore Headless Rendering](https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/18x/Sitecore_Headless_Rendering_1800) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](https://dev.sitecore.net:443/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201011) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](/Downloads/Downloads/Sitecore%20Identity/7x/Sitecore%20Identity%2070327) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore Publishing Service Module](https://dev.sitecore.net:443/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201010) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/E67DE0FBFF944FCAB009F07BB368F826.ashx?date=20230906T201631) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore UpdateApp Tool](https://dev.sitecore.net:443/downloads/Sitecore%20UpdateApp%20Tool/1x/Sitecore%20UpdateApp%20Tool%20110) | Updates the Core, Master, and Web databases. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/9512EAE1D7AE4D3DA93FF2546FF1F6C1.ashx?date=20230906T175831) | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/E8088289A4B84751AE6188FE78EE68D2.ashx?date=20230906T175832) | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/F3678BA249DF4C0C9568AA78FB4CB615.ashx?date=20230906T175832) | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/90DE6AD7F5F842FC828694607AA7CBE7.ashx?date=20230906T175832) | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
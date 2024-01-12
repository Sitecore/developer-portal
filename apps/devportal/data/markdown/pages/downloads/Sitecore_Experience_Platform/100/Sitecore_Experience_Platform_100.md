---
title: Sitecore Experience Platform 10.0
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100.aspx
---

# Sitecore Experience Platform 10.0

Sitecore® Experience Platform™ 10.0 focuses on product updates and enhancements that provide more development and deployment options, increase usability and improve overall performance – all centered around enabling both Marketing and IT teams equally, thus making it easier and faster to launch and evolve digital customer experiences.

New delivery options including support for Docker, Kubernetes and new Sitecore-provided image repositories, helping delivery teams move to a continuous delivery model more easily with infrastructure-as-code deployments and more efficient solution and team onboarding. The addition of the ASP.NET Core SDK and headless rendering host architecture also provides developers with a new way of building their solutions allowing for faster development iterations.

Other highlights include:

-   Sitecore Containers support rapid deployment and more efficient solution and team onboarding with modern Docker and Kubernetes technology.
-   A new ASP.NET Core headless development option allows teams to build applications faster on the latest .NET technology.
-   Sitecore CLI and Sitecore for Visual Studio bring headless serialization by combining the best of TDS and Unicorn , making it easy for teams to script content changes and move them between different environments as part of deployment processes.
-   Audience analytics filters allow for deeper insights on audience engagement and segmentation to drive powerful personalization across all your channels.
-   Additional HTML Email Templates for EXM provide more options when crafting emails, which translates to the quicker creation and delivery of targeted emails to customer inboxes.
-   Horizon editing interface updates give marketers in-context insight across multilingual and multisite experiences.
-   Stronger CMP integration supports additional field types and allows for persistent taxonomy associations when importing into XP taxonomy repositories and connecting CMP to XP.
-   Salesforce Marketing Cloud (SFMC) connector updates provide new capabilities to immediately send xDB data and trigger Salesforce Marketing Cloud plans in Journey Builder.
-   New marketing automation capabilities include capabilities to engage customers with automated birthday campaigns.
-   Support for GDPR compliance journeys including features that make it easier to enforce and manage consent options as well as supporting the anonymization of personal information submitted via Sitecore Forms.

This release is issued after extensive testing and feedback from customers, partners and developers, resulting in a new level of quality across the product and documentation. For developer documentation please refer to documentation website.

  <Alert variant='warning' mb={4}>
    <AlertIcon />
    Please note that as part of your system upgrade to Sitecore Version 10.0, Sitecore may collect additional information such as product version, number of site visits, generic hardware and software information, and recovery actions. This information will be used to help us to optimize your experience. All data will be processed in accordance with Sitecore’s privacy policy [here](https://www.sitecore.com/trust/privacy-policy). Should you have any queries or wish to discuss this, [please refer to our FAQ](https://kb.sitecore.net/articles/424335), or contact your Sitecore Account Manager.
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
  

This page contains all the resources for **Sitecore Experience Platform 10.0**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.0.0.004346.027) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/C1127BA86FDF44C895BD0D25F1EAF31D.ashx?date=20220623T121019) | This guide describes requirements for using Sitecore Containers with Docker Compose and how to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/876AA037ADEE41489D1DB0BBC094CD81.ashx?date=20221010T145927) | This guide describes requirements for using Sitecore Containers with Kubernetes and how to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](/downloads/Sitecore%20Installation%20Framework/2x/Sitecore%20Installation%20Framework%20230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](/downloads/Scripts%20for%20Sitecore%20Security%20database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/A74E47524738460B83332BAE82F123D1.ashx?date=20200729T110719) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/764936A5FB0943059B89EA5F7E384D99.ashx?date=20200729T110719) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/DCD3DC6E7C544C3685EC41DD781D3187.ashx?date=20200729T111141) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/7E8B96559DE8466297D941E844402AE4.ashx?date=20200729T111822) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/DF8528764D164EC2933B21D93F6F6C9E.ashx?date=20200729T111140) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/1461853C8977488D9AABA716242137FC.ashx?date=20201214T163244) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/58DB59C49FE249F38984D5A62FBFF3A8.ashx?date=20200729T110126) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/ADEADBE05A474422A1F945E411474518.ashx?date=20200729T105526) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/C6C60EB79D544E73A1F8F26870D473A3.ashx?date=20200729T104716) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/E8E31E6BD81744D68DBDB709AE8E6B78.ashx?date=20231017T212731) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://sitecoredev.azureedge.net/~/media/00FA1A0D0C4045F5AF1615FF9D20EB91.ashx?date=20181127T104334) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](/downloads/Sitecore%20Azure%20Blob%20Storage/1x/Sitecore%20Azure%20Blob%20Storage%20200) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://kb.sitecore.net/articles/661975) | Choose this link to access the Sitecore Knowledge Base. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/001767D17218438799E5C26EFA4D3565.ashx?date=20211214T140231) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/DEE5EE8C69E14AE39406641152412614.ashx?date=20211214T140231) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/DF68D195EFC04C6F9E1853DF68932415.ashx?date=20211214T140231) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Upgrade Guide (8.1.0-9.0.1 to 10.0.0)](https://sitecoredev.azureedge.net/~/media/7096C102E774454CAFC4BA5F39AB5A9F.ashx?date=20211214T140231) | Explains how to directly upgrade from Sitecore versions 8.1.0 through 9.0.1 to 10.0.0. |
 | [Upgrade Guide (9.0.2 to 10.0.0)](https://sitecoredev.azureedge.net/~/media/DB507076AD764C6DACBB01859F17CC21.ashx?date=20211214T140231) | Explains how to directly upgrade from Sitecore 9.0.2 and later to 10.0.0. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/E85A860E718C4FF9B00D56AB306019FA.ashx?date=20211214T140231) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](/downloads/Sitecore%20CLI/2x/Sitecore%20CLI%20200) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](/downloads/Dynamics%20CRM%20Connect/5x/Sitecore%20Connect%20for%20Microsoft%20Dynamics%20365%20for%20Sales%20500) | Download files and release information for latest compatible version of Sitecore Connect for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](/downloads/Salesforce%20Connect/5x/Sitecore%20Connect%20for%20Salesforce%20CRM%20500) | Download files and release information for latest compatible version of Sitecore Connect for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](/downloads/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud/1x/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud%2050) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Sitecore CMP](/downloads/Sitecore%20Connect%20for%20Sitecore%20CMP/30/Sitecore%20Connect%20for%20Sitecore%20CMP%20300) | Download files and release information for latest compatible version of Sitecore Connect™ for Sitecore CMP. |
 | [Sitecore Data Exchange Framework](/downloads/Data%20Exchange%20Framework/5x/Data%20Exchange%20Framework%20500) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](/downloads/Sitecore%20Experience%20Accelerator/10x/Sitecore%20Experience%20Accelerator%201000) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. |
 | [Sitecore Headless Rendering](/downloads/Sitecore%20Headless%20Rendering/150/Sitecore%20Headless%20Rendering%201501) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201000) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](/downloads/Sitecore%20Identity/5x/Sitecore%20Identity%20500) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore JavaScript Services](/downloads/Sitecore%20JavaScript%20Services/150/Sitecore%20JavaScript%20Services%201501) | Download files and release information for latest compatible version of Sitecore JavaScript Services. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201000) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |
 | [Sitecore xDB Data Migration Tool](/downloads/Sitecore%20xDB%20Data%20Migration%20Tool/5x/xDB%20Data%20Migration%20Tool%20500) | Download files and release information for latest compatible version of Sitecore xDB Data Migration Tool. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Sitecore update package for 8.1](https://sitecoredev.azureedge.net/~/media/16AD0DA3F84C45E1A24C7EE6E3856FD0.ashx?date=20200729T112240) | Download files needed for the upgrade process when upgrading from Sitecore 8.1. |
 | [Sitecore update package for 8.2](https://sitecoredev.azureedge.net/~/media/C62236C43A2D400583E216A6E9EC6825.ashx?date=20200729T112722) | Download files needed for the upgrade process when upgrading from Sitecore 8.2. |
 | [Sitecore update package for 9.x](https://sitecoredev.azureedge.net/~/media/2DFF6FB663244DB5AA7FABBE61D99C30.ashx?date=20200729T113826) | Download files needed for the upgrade process when upgrading from Sitecore 9.x. |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/A116223D42114B11910383EA1A5A66DB.ashx?date=20200729T113920) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore Update Installation Wizard for 8.x-9.0](https://sitecoredev.azureedge.net/~/media/485C0D73F6874E2185A19C5D62F2A8F7.ashx?date=20190405T092427) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |
 | [Sitecore Update Installation Wizard for 9.1](https://sitecoredev.azureedge.net/~/media/21FBE8650BC04BCDBE78F1EC65D31B76.ashx?date=20190405T092428) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/7E12FD3BD8E840E5B667A38A6B2D94D6.ashx?date=20211214T140231) | Danish language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/B03143538BA848688975D71CBD8DFA7E.ashx?date=20211214T140231) | German language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/14E48013922A43E78B93EF97789FD94A.ashx?date=20211214T140231) | Japanese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/C24FCA6790EC47AC86DA44A72DD82544.ashx?date=20211214T140231) | Chinese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
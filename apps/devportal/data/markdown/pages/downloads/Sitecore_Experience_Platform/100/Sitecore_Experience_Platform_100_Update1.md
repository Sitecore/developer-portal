---
title: Sitecore Experience Platform 10.0 Update-1
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100_Update1.aspx
---

# Sitecore Experience Platform 10.0 Update-1

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
    

This page contains all the resources for **Sitecore Experience Platform 10.0 Update-1**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.0.1.004842.221) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/ECC91044E0D84FC58B56CC0CADFDB393.ashx?date=20220623T121019) | This guide describes requirements for using Sitecore Containers with Docker Compose and how to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/E610E14ACBDD4230870EBD63AB44A708.ashx?date=20221010T145927) | This guide describes requirements for using Sitecore Containers with Kubernetes and how to deploy containers to the Azure Kubernetes Service. |
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
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/F348FF71C86D4F7096C2B929E0DA2F49.ashx?date=20201211T131403) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/0E7739CA4CCD4EA58A585ABECCCFB221.ashx?date=20201211T131403) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/9486629B50A847A5B62D59474CBAC53C.ashx?date=20201211T132206) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/671D1AD834134C3D93BA5339F631C417.ashx?date=20201211T133416) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/C939C11A115844E283A02EF4FA70D265.ashx?date=20201211T132205) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/AA2E4008524740FFA4B58E716452F391.ashx?date=20201211T130732) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/5FF848008CE84B6FBDFDD6B30E4754DD.ashx?date=20201211T130517) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/D16D26D9AB774D3BA13887E39DC8A28B.ashx?date=20201211T125549) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/B8C2B0C504D14E859A5B9F7AFE7B2B47.ashx?date=20201211T125548) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/6026F3F48BDA4169BF40B2BDD6B7F44B.ashx?date=20231017T212805) | Sitecore Azure Toolkit Resources package. |

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
 | [Release notes](/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update1/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://kb.sitecore.net/articles/661975) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net#) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/756539AB29044B409CE892FE8B4D5879.ashx?date=20210302T154912) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/A649A27C07654DA197D51469A6627E03.ashx?date=20210302T154912) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/A64A0D6A79084F1CBC0CDE17094AC23A.ashx?date=20210302T154912) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/63B0912A8771414ABB76A7BFF32FDBC2.ashx?date=20201214T152724) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 9.3.0 installation to Sitecore XP 10.0.1. |
 | [Upgrade Guide (8.1.0-9.0.1 to 10.0.1)](https://sitecoredev.azureedge.net/~/media/DC023867E93440E899579C3C4BA8F7BD.ashx?date=20210921T095518) | Explains how to directly upgrade from Sitecore versions 8.1.0 through 9.0.1 to 10.0.1. |
 | [Upgrade Guide (9.0.2 to 10.0.1)](https://sitecoredev.azureedge.net/~/media/36E7DD506F8D401DA58C88FD22856304.ashx?date=20230810T092428) | Explains how to directly upgrade from Sitecore 9.0.2 and later to 10.0.1. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/1AFD5CA50B0A41D8A24EBFBAC1173257.ashx?date=20201214T075922) | Complete list of assemblies shipped with this release. |

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
 | [Sitecore Horizon](/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201001) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](/downloads/Sitecore%20Identity/5x/Sitecore%20Identity%20501) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore JavaScript Services](/downloads/Sitecore%20JavaScript%20Services/150/Sitecore%20JavaScript%20Services%201501) | Download files and release information for latest compatible version of Sitecore JavaScript Services. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201000) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |
 | [Sitecore xDB Data Migration Tool](/downloads/Sitecore%20xDB%20Data%20Migration%20Tool/5x/xDB%20Data%20Migration%20Tool%20500) | Download files and release information for latest compatible version of Sitecore xDB Data Migration Tool. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Sitecore update package for 8.1](https://sitecoredev.azureedge.net/~/media/BC5E4399EB0B45449911B8C5B775A472.ashx?date=20201211T123806) | Download files needed for the upgrade process when upgrading from Sitecore 8.1. |
 | [Sitecore update package for 8.2](https://sitecoredev.azureedge.net/~/media/B580B8C75F704531AAEE390D4B0E565B.ashx?date=20201211T123832) | Download files needed for the upgrade process when upgrading from Sitecore 8.2. |
 | [Sitecore update package for 9.x](https://sitecoredev.azureedge.net/~/media/8910C48A18CF49D9A18FFF7CD93202C9.ashx?date=20201211T123837) | Download files needed for the upgrade process when upgrading from Sitecore 9.x. |
 | [Sitecore update package for 10.x](https://sitecoredev.azureedge.net/~/media/700B09612C5F410E94AD5E17DE4D477C.ashx?date=20201211T123838) | Download files needed for the upgrade process when upgrading from Sitecore 10.x. |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/A173BF0EA8EE449CB52C5BF6611C72F3.ashx?date=20201211T123838) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore Update Installation Wizard for 8.x-9.0](https://sitecoredev.azureedge.net/~/media/485C0D73F6874E2185A19C5D62F2A8F7.ashx?date=20190405T092427) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |
 | [Sitecore Update Installation Wizard for 9.1](https://sitecoredev.azureedge.net/~/media/21FBE8650BC04BCDBE78F1EC65D31B76.ashx?date=20190405T092428) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/55117472642B467B871D5D1873BE6636.ashx?date=20201211T122420) | Danish language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/5B1FFEEC35EA41FA817CD0F01537EA42.ashx?date=20201211T122420) | German language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/2CBAC9C483D6492A81CA0D13FC1FC6D0.ashx?date=20201211T122420) | Japanese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/2E3703A2AEE34C23B46C9228D4FB70A1.ashx?date=20201211T122421) | Chinese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
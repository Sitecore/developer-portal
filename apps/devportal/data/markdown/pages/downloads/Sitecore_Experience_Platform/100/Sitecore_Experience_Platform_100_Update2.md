---
title: Sitecore Experience Platform 10.0 Update-2
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100_Update2.aspx
---

# Sitecore Experience Platform 10.0 Update-2

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
    

This page contains all the resources for **Sitecore Experience Platform 10.0 Update-2**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.0.1.004842.221) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/3C8AC5BDBD17488EAC6FAB4437782A81.ashx?date=20220623T121019) | This guide describes requirements for using Sitecore Containers with Docker Compose and how to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/BBEA64CA55FD497D805B3EE3B7D261B0.ashx?date=20221010T150909) | This guide describes requirements for using Sitecore Containers with Kubernetes and how to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](https://dev.sitecore.net:443/downloads/Sitecore%20Installation%20Framework/2x/Sitecore%20Installation%20Framework%20230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](https://dev.sitecore.net:443/downloads/Scripts%20for%20Sitecore%20Security%20database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/B99BF5AA19004E86BD25FD0AC67B9707.ashx?date=20210629T155635) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/69F43390552047B393D3A3D44B6A82F0.ashx?date=20210629T154826) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/D38A6063E79042D393FB0C754412C293.ashx?date=20210629T161123) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/ACBDFC2CFE8848F6AF80BE24C8BCEC4A.ashx?date=20210629T163024) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/CA0F4258AA914D23AA30C5D2B489E99F.ashx?date=20210629T160400) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/2C2912380E694021A46C98769D167E68.ashx?date=20210629T153556) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/A43307FB09D546FF8739E5AEF911BD6F.ashx?date=20210629T152505) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/C66050D71A6E4163872AD95279610BF4.ashx?date=20210629T145723) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/DEEC9C1E34344ED59BEF221D47C7900F.ashx?date=20210629T150509) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/3EF06B3316884F6399EBA5F68219F910.ashx?date=20231017T212838) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://sitecoredev.azureedge.net/~/media/00FA1A0D0C4045F5AF1615FF9D20EB91.ashx?date=20181127T104334) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](https://dev.sitecore.net:443/downloads/Sitecore%20Azure%20Blob%20Storage/1x/Sitecore%20Azure%20Blob%20Storage%20200) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://kb.sitecore.net/articles/661975) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net#) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/98F830E8B4254AE4A2168372D88BA1A7.ashx?date=20210629T164243) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/4A5B911A7DD24281812B996ED5ED13C6.ashx?date=20210629T164244) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/56E80298A2E14FC8884252BB73DCA151.ashx?date=20210629T164244) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/812CD93B1C3442D5A54DBCDFBCEBB0F5.ashx?date=20210630T135149) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 9.3.0 installation to Sitecore XP 10.0.2. |
 | [Upgrade Guide (8.1.0-9.0.1 to 10.0.2)](https://sitecoredev.azureedge.net/~/media/B7AF7B2AF49940F58665C73EA7A9629F.ashx?date=20210921T095908) | Explains how to directly upgrade from Sitecore versions 8.1.0 through 9.0.1 to 10.0.2. |
 | [Upgrade Guide (9.0.2 to 10.0.2)](https://sitecoredev.azureedge.net/~/media/7DC51801EA21421F85C262C55CB460E5.ashx?date=20210921T095858) | Explains how to directly upgrade from Sitecore 9.0.2 and later to 10.0.2. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/A4989DE0317848B8B816B13B0A846BDE.ashx?date=20210629T135228) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](https://dev.sitecore.net:443/downloads/Sitecore%20CLI/2x/Sitecore%20CLI%20200) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](https://dev.sitecore.net:443/downloads/Dynamics%20CRM%20Connect/5x/Sitecore%20Connect%20for%20Microsoft%20Dynamics%20365%20for%20Sales%20500) | Download files and release information for latest compatible version of Sitecore Connect for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](https://dev.sitecore.net:443/downloads/Salesforce%20Connect/5x/Sitecore%20Connect%20for%20Salesforce%20CRM%20500) | Download files and release information for latest compatible version of Sitecore Connect for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud/1x/Sitecore%20Connect%20software%20for%20Salesforce%20Marketing%20Cloud%2050) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Sitecore CMP](https://dev.sitecore.net:443/downloads/Sitecore%20Connect%20for%20Sitecore%20CMP/30/Sitecore%20Connect%20for%20Sitecore%20CMP%20300) | Download files and release information for latest compatible version of Sitecore Connect™ for Sitecore CMP. |
 | [Sitecore Data Exchange Framework](https://dev.sitecore.net:443/downloads/Data%20Exchange%20Framework/5x/Data%20Exchange%20Framework%20500) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Accelerator/10x/Sitecore%20Experience%20Accelerator%201000) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. |
 | [Sitecore Headless Rendering](https://dev.sitecore.net:443/downloads/Sitecore%20Headless%20Rendering/150/Sitecore%20Headless%20Rendering%201501) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](https://dev.sitecore.net:443/downloads/Sitecore%20Horizon/100/Sitecore%20Horizon%201001) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](https://dev.sitecore.net:443/downloads/Sitecore%20Identity/5x/Sitecore%20Identity%20511) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore JavaScript Services](https://dev.sitecore.net:443/downloads/Sitecore%20JavaScript%20Services/150/Sitecore%20JavaScript%20Services%201501) | Download files and release information for latest compatible version of Sitecore JavaScript Services. |
 | [Sitecore Publishing Service Module](https://dev.sitecore.net:443/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201000) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Sitecore update package for 8.1](https://sitecoredev.azureedge.net/~/media/E95D9E38ED1A4C58B8601B4610166BAC.ashx?date=20210629T130536) | Download files needed for the upgrade process when upgrading from Sitecore 8.1. |
 | [Sitecore update package for 8.2](https://sitecoredev.azureedge.net/~/media/ECFF459E72F4467DA5318F30486DD231.ashx?date=20210629T135000) | Download files needed for the upgrade process when upgrading from Sitecore 8.2. |
 | [Sitecore update package for 9.x](https://sitecoredev.azureedge.net/~/media/8F2BCA3562DE4701A86333B16C5B63F3.ashx?date=20210629T130537) | Download files needed for the upgrade process when upgrading from Sitecore 9.x. |
 | [Sitecore update package for 10.x](https://sitecoredev.azureedge.net/~/media/6A2B883CC094485A992557F70F5AC8DD.ashx?date=20210629T133316) | Download files needed for the upgrade process when upgrading from Sitecore 10.x. |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/657A99ABE4D94D7FA99194DD7237B6D8.ashx?date=20210629T133316) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore Update Installation Wizard for 8.x-9.0](https://sitecoredev.azureedge.net/~/media/485C0D73F6874E2185A19C5D62F2A8F7.ashx?date=20190405T092427) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |
 | [Sitecore Update Installation Wizard for 9.1](https://sitecoredev.azureedge.net/~/media/21FBE8650BC04BCDBE78F1EC65D31B76.ashx?date=20190405T092428) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/7D2A47A92338411F9434096BCD806407.ashx?date=20210629T125456) | Danish language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/F224AAC1C52647EB91E9C5B3E35AF3B7.ashx?date=20210629T125456) | German language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/8D6E3E80D46347618214CF7DDCB7BA93.ashx?date=20210629T125456) | Japanese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/50EF9FF030D34946A8ACDCC9CE43D466.ashx?date=20210629T125457) | Chinese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](https://dev.sitecore.net:443/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
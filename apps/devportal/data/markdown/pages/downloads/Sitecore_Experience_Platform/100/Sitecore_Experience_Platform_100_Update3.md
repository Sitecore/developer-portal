---
title: Sitecore Experience Platform 10.0 Update-3
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100_Update3.aspx
---

# Sitecore Experience Platform 10.0 Update-3

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
    

This page contains all the resources for **Sitecore Experience Platform 10.0 Update-3**.

## Download options for Sitecore Container deployments

 | Resource | Description |
 | --- | --- |
 | [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.0.3.006577.652) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
 | [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/06D42082F0F64A0C9006B56253B137D4.ashx?date=20220623T121019) | This guide describes requirements for using Sitecore Containers with Docker Compose and how to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/6892DF44DC7244D3AFA82D905FCF0020.ashx?date=20221010T145927) | This guide describes requirements for using Sitecore Containers with Kubernetes and how to deploy containers to the Azure Kubernetes Service. |
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
 | [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/2597F657FEAC44139B561108A60F1140.ashx?date=20211006T105239) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/25C5588A150C4506AEEA1E8F712AAE98.ashx?date=20211006T105238) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/23F6CAC654EC45C9B0D3DAEF48F345C6.ashx?date=20211006T105600) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/04A2898DD41E4A3882AD2A5FCA985635.ashx?date=20211006T110157) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/72520130742C4BD39567309E6468D356.ashx?date=20211006T105600) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/B60E6FFC731E4BE883ABC36FE83F3939.ashx?date=20211006T104228) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/802BBB991C2948648013DB4086379D5F.ashx?date=20211006T104834) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/396681C76D5C424F9B4639C22773ACA7.ashx?date=20211006T104228) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/F0DD56D53F5A4EC486388CBCBF86D12B.ashx?date=20211006T104228) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://sitecoredev.azureedge.net/~/media/1B43A8FC8AEB483F93B082923B06AAAD.ashx?date=20231017T212909) | Sitecore Azure Toolkit Resources package. |

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
 | [Release notes](/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update3/Release%20Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://kb.sitecore.net/articles/661975) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net#) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/784CFB7BC0954CF1BE5A44C991292C4D.ashx?date=20211007T075747) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/D082500FC78D420EACD92357B762BD3D.ashx?date=20211007T075858) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/BE0A2ED121064F09A26405CAB7EBDD42.ashx?date=20211007T080004) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/CC7481534A184B1088148A9517127CDA.ashx?date=20211116T131613) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 9.3.0 installation to Sitecore XP 10.0.2. |
 | [Upgrade Guide (8.1.0-9.0.1 to 10.0.3)](https://sitecoredev.azureedge.net/~/media/FDBFF4E953D840B2AA510206BB366C22.ashx?date=20211007T080148) | Explains how to directly upgrade from Sitecore versions 8.1.0 through 9.0.1 to 10.0.3. |
 | [Upgrade Guide (9.0.2 to 10.0.3)](https://sitecoredev.azureedge.net/~/media/760970F39DAE4591AF4E2A9832BC0419.ashx?date=20211007T080257) | Explains how to directly upgrade from Sitecore 9.0.2 and later to 10.0.3. |
 | [Assembly list](https://sitecoredev.azureedge.net/~/media/D578CF14C7D84F6F8F3AFD2AD5BF6E4E.ashx?date=20211006T102454) | Complete list of assemblies shipped with this release. |

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
 | [Sitecore Identity](/downloads/Sitecore%20Identity/6x/Sitecore%20Identity%20600) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore JavaScript Services](/downloads/Sitecore%20JavaScript%20Services/150/Sitecore%20JavaScript%20Services%201501) | Download files and release information for latest compatible version of Sitecore JavaScript Services. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore%20Publishing%20Service%20Module/10x/Sitecore%20Publishing%20Service%20Module%201000) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Sitecore update package for 8.1](https://sitecoredev.azureedge.net/~/media/9420E658AF654949B05FDC4E44BCE0C2.ashx?date=20211006T103455) | Download files needed for the upgrade process when upgrading from Sitecore 8.1. |
 | [Sitecore update package for 8.2](https://sitecoredev.azureedge.net/~/media/18E0B39206F44059A3D1496EF898E6AF.ashx?date=20211006T103456) | Download files needed for the upgrade process when upgrading from Sitecore 8.2. |
 | [Sitecore update package for 9.x](https://sitecoredev.azureedge.net/~/media/6AA109B514B842749E0F96019E880604.ashx?date=20211006T103457) | Download files needed for the upgrade process when upgrading from Sitecore 9.x. |
 | [Sitecore update package for 10.x](https://sitecoredev.azureedge.net/~/media/85ACB996F5804513B97697B7CB88969F.ashx?date=20211006T103457) | Download files needed for the upgrade process when upgrading from Sitecore 10.x. |
 | [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/E423C63D850949F883208F865580FF5D.ashx?date=20211006T103457) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore Update Installation Wizard for 8.x-9.0](https://sitecoredev.azureedge.net/~/media/485C0D73F6874E2185A19C5D62F2A8F7.ashx?date=20190405T092427) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |
 | [Sitecore Update Installation Wizard for 9.1](https://sitecoredev.azureedge.net/~/media/21FBE8650BC04BCDBE78F1EC65D31B76.ashx?date=20190405T092428) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/852F4D3F60F446059A6DB91934104D8E.ashx?date=20211006T102537) | Danish language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://sitecoredev.azureedge.net/~/media/657F16BA325A4E99896D04B23B4B1CF1.ashx?date=20211006T102537) | German language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/0829662BA5F541C8BC976886A6578F7C.ashx?date=20211006T102537) | Japanese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/8DFFDD7699B44542820589F2BEB20D4C.ashx?date=20211006T102537) | Chinese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20IP%20Geolocation%20Usage%20Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore%20Experience%20Platform/Sitecore%20xDB%20Cloud%20Usage%20Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
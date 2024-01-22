---
title: "Sitecore Experience Platform 10.0 Update-2"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100_Update2.aspx
---

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
 | [Installation Guide for Developer Workstation with Containers](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Sitecore_XP_10_0_2_Developer_Workstation_Deployment_With_Docker-en.pdf) | This guide describes requirements for using Sitecore Containers with Docker Compose and how to deploy a developer workstation. |
 | [Installation Guide for Production Environment with Kubernetes](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Sitecore_XP_10_0_2_Production_Deployment_With_Kubernetes-en.pdf) | This guide describes requirements for using Sitecore Containers with Kubernetes and how to deploy containers to the Azure Kubernetes Service. |
 | [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |

## Download options

 | Resource | Description |
 | --- | --- |
 | [Sitecore Installation Framework](/downloads/Sitecore_Installation_Framework/2x/Sitecore_Installation_Framework_230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
 | [Scripts for Sitecore Security database](/downloads/Scripts_for_Sitecore_Security_database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
 | [Sitecore Remote Distributed Deployment SIF Templates](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Initial%20Release/Secure/Sitecore%20remote%20distributed%20installation%20templates.zip) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

 | Resource | Description |
 | --- | --- |
 | [Graphical setup package for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(Setup%20XP0%20Developer%20Workstation%20rev.%201.2.4-r1).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Graphical setup package for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(Setup%20XM1%20Developer%20Workstation%20rev.%201.2.4-r1).zip) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(WDP%20XP0%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(WDP%20XP1%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(WDP%20XM1%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

 | Resource | Description |
 | --- | --- |
 | [Packages for XP Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(WDP%20XPSingle%20packages).zip) | Packages for XP Single (XP0) Instance configuration. |
 | [Packages for XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(WDP%20XPScaled%20packages).zip) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
 | [Packages for XM Single](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(WDP%20XMSingle%20packages).zip) | Packages for XM Single (XM0) Instance configuration. |
 | [Packages for XM Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/WDP/Sitecore%2010.0.2%20rev.%20006052%20(WDP%20XMScaled%20packages).zip) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |
 | [Sitecore Azure Toolkit Resources](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Sitecore%20Azure%20Toolkit%20Resources%2010.0.2%20rev.%20006052.zip) | Sitecore Azure Toolkit Resources package. |

## Download options for Content Delivery Network CDN

 | Resource | Description |
 | --- | --- |
 | [Package for XM Scaled and XP Scaled](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Initial%20Release/Secure/Sitecore.Content.Delivery.Network.Provider.1.0.0-r00010.scwdp.zip) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

 | Resource | Description |
 | --- | --- |
 | [Package for XM and XP](/downloads/Sitecore_Azure_Blob_Storage/1x/Sitecore_Azure_Blob_Storage_200) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

 | Resource | Description |
 | --- | --- |
 | [Release notes](/downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100_Update2/Release_Notes) | A list of features, improvements, and fixes that have been implemented in this release. |
 | [Known issues](https://kb.sitecore.net/articles/661975) | Choose this link to access the Sitecore Knowledge Base. |
 | [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net#) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
 | [Installation Guide for the XM Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Installation_Guide_for_the_XM_Scaled_Topology-10.0.2.pdf) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
 | [Installation Guide for the XP Scaled topology](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Installation_Guide_for_the_XP_Scaled_topology-10.0.2.pdf) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
 | [Quick Installation Guide for a Developer Workstation](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Quick_Installation_Guide_for_a_Developer_Workstation-10.0.2.pdf) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
 | [Upgrade Container Deployment Guide](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Sitecore_Upgrade_%20Container_Deployment_Guide-SC-10.0.2.pdf) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 9.3.0 installation to Sitecore XP 10.0.2. |
 | [Upgrade Guide (8.1.0-9.0.1 to 10.0.2)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Upgrade_Guide_Sitecore_10.0.2_from%20_8.1.0-9.0.1.pdf) | Explains how to directly upgrade from Sitecore versions 8.1.0 through 9.0.1 to 10.0.2. |
 | [Upgrade Guide (9.0.2 to 10.0.2)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Upgrade_Guide_Sitecore_10.0.2_from_9.0.2_or_later.pdf) | Explains how to directly upgrade from Sitecore 9.0.2 and later to 10.0.2. |
 | [Assembly list](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Sitecore.Platform.Assemblies%2010.0.2%20rev.%20006052.zip) | Complete list of assemblies shipped with this release. |

## Modules

 | Resource | Description |
 | --- | --- |
 | [Sitecore CLI](/downloads/Sitecore_CLI/2x/Sitecore_CLI_200) | Download files and release information for latest compatible version of Sitecore CLI. |
 | [Sitecore Connect for Microsoft Dynamics 365 for Sales](/downloads/Dynamics_CRM_Connect/5x/Sitecore_Connect_for_Microsoft_Dynamics_365_for_Sales_500) | Download files and release information for latest compatible version of Sitecore Connect for Microsoft Dynamics 365 for Sales. |
 | [Sitecore Connect for Salesforce CRM](/downloads/Salesforce_Connect/5x/Sitecore_Connect_for_Salesforce_CRM_500) | Download files and release information for latest compatible version of Sitecore Connect for Salesforce CRM. |
 | [Sitecore Connect for Salesforce Marketing Cloud](/downloads/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud/1x/Sitecore_Connect_software_for_Salesforce_Marketing_Cloud_50) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud. |
 | [Sitecore Connect for Sitecore CMP](/downloads/Sitecore_Connect_for_Sitecore_CMP/30/Sitecore_Connect_for_Sitecore_CMP_300) | Download files and release information for latest compatible version of Sitecore Connect™ for Sitecore CMP. |
 | [Sitecore Data Exchange Framework](/downloads/Data_Exchange_Framework/5x/Data_Exchange_Framework_500) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
 | [Sitecore Experience Accelerator](/downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1000) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. |
 | [Sitecore Headless Rendering](/downloads/Sitecore_Headless_Rendering/150/Sitecore_Headless_Rendering_1501) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
 | [Sitecore Horizon](/downloads/Sitecore_Horizon/100/Sitecore_Horizon_1001) | Sitecore Horizon is the next generation Experience Management product for the Sitecore Experience Platform™. |
 | [Sitecore Identity](/downloads/Sitecore_Identity/5x/Sitecore_Identity_511) | Download files and release information for latest compatible version of Sitecore Identity. |
 | [Sitecore JavaScript Services](/downloads/Sitecore_JavaScript_Services/150/Sitecore_JavaScript_Services_1501) | Download files and release information for latest compatible version of Sitecore JavaScript Services. |
 | [Sitecore Publishing Service Module](/downloads/Sitecore_Publishing_Service_Module/10x/Sitecore_Publishing_Service_Module_1000) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

 | Resource | Description |
 | --- | --- |
 | [Sitecore update package for 8.1](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Upgrade/Sitecore%2010.0.2%20rev.%20006052%20(update%20package%20for%208.1).zip) | Download files needed for the upgrade process when upgrading from Sitecore 8.1. |
 | [Sitecore update package for 8.2](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Upgrade/Sitecore%2010.0.2%20rev.%20006052%20(update%20package%20for%208.2).zip) | Download files needed for the upgrade process when upgrading from Sitecore 8.2. |
 | [Sitecore update package for 9.x](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Upgrade/Sitecore%2010.0.2%20rev.%20006052%20(update%20package%20for%209.x).zip) | Download files needed for the upgrade process when upgrading from Sitecore 9.x. |
 | [Sitecore update package for 10.x](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Upgrade/Sitecore%2010.0.2%20rev.%20006052%20(update%20package%20for%2010.x).zip) | Download files needed for the upgrade process when upgrading from Sitecore 10.x. |
 | [Configuration files for upgrade](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Upgrade/Sitecore%2010.0.2%20rev.%20006052%20(upgrade%20files).zip) | This package contains configuration files and database scripts for the upgrade. |
 | [Sitecore Update Installation Wizard for 8.x-9.0](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Update1/Secure/Sitecore%20Update%20Installation%20Wizard%204.0.1%20rev.%2000153%20for%208.x-9.0.zip) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |
 | [Sitecore Update Installation Wizard for 9.1](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/91/Sitecore%20Experience%20Platform%2091%20Update1/Secure/Sitecore%20Update%20Installation%20Wizard%204.0.1%20rev.%2000153%20for%209.1.zip) | Sitecore Update Installation Wizard allows developers to update existing Sitecore Experience Platform using Sitecore update packages. |

## Client translations

 | Resource | Description |
 | --- | --- |
 | [Danish (da-DK)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Translations/Sitecore%2010.0.2%20rev.%20006052%20(da-DK).zip) | Danish language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [German (de-DE)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Translations/Sitecore%2010.0.2%20rev.%20006052%20(de-DE).zip) | German language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Japanese (ja-JP)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Translations/Sitecore%2010.0.2%20rev.%20006052%20(ja-JP).zip) | Japanese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese (zh-CN)](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/100/Sitecore%20Experience%20Platform%20100%20Update2/Secure/Translations/Sitecore%2010.0.2%20rev.%20006052%20(zh-CN).zip) | Chinese language client translation file. Read [instructions](~/link?_id=D72CBF8CE581436CBBCAEE896C8646F7&_z=z) how to import a new language into the Sitecore installation. |
 | [Chinese GeoIP Localization Pack](https://scdp.blob.core.windows.net/downloads/Sitecore%20Experience%20Platform/90/Sitecore%20Experience%20Platform%2090%20Initial%20Release/Secure/GeoIp%20Location%20China%20Localization%20Pack%201.0.0%20rev.%20180226.zip) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module. |

## Usage policies

 | Resource | Description |
 | --- | --- |
 | [Sitecore Device Detection Services usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_Device_Detection_Services_Usage_Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
 | [Sitecore IP Geolocation usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_IP_Geolocation_Usage_Policy) | This policy is applicable if you are using Sitecore IP Geolocations Service. |
 | [Sitecore xDB Cloud usage policy](/downloads/Sitecore_Experience_Platform/Sitecore_xDB_Cloud_Usage_Policy) | This policy is applicable if you are using Sitecore xDB Cloud. |
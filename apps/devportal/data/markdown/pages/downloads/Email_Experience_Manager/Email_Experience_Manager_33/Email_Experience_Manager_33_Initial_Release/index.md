---
title: "Email Experience Manager 3.3 Initial Release"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_33/Email_Experience_Manager_33_Initial_Release.aspx
---

  <Alert variant='warning' mb={4}>
    <AlertIcon />
    This version of the Email Experience Manager only runs on **[Sitecore Experience Platform 8.1 rev. 160519 (8.1 Update-3)](/Downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Update3)**
  </Alert>
  
  <Alert variant='warning' mb={4}>
    <AlertIcon />
    **Consider Upgrading to EXM 3.4 today**  
• Sitecore no longer recommends deployment of Email Experience Manager (EXM) version 3.3 or any earlier versions of EXM in a production environment. With version 3.4, Sitecore has moved towards an architecture that separates major components such as message delivery, reporting, and suppression services into dedicated service tiers. These changes provide performance improvements to suppression list lookup and data reporting. Please consider upgrading to the latest version. Should your organization require the use of EXM 3.0-3.3 software, please connect with Sitecore at the earliest convenience by contacting your local Sitecore representative or the appropriate email address found here: **[http://www.sitecore.net/company/contact-us](http://www.sitecore.net/company/contact-us)**.  
  
**Dyn Deprecation**  
• After November 1, 2017, the Sitecore Email Delivery (Dyn) service will no longer be available (**[KB article](https://kb.sitecore.net/articles/669456)**). For customers unable to migrate to Sitecore 8.2, you will be obliged to begin using a Custom SMTP (MTA) solution on your existing version. The use of Dyn to assist in the email delivery process is no longer a necessity in the use of EXM 3.4 and above.  
• Sitecore has developed a new **[Sitecore Email Cloud](https://doc.sitecore.net/email_experience_manager/configuring_the_delivery_process/message_transfer_agent/the_sitecore_email_cloud_compared_to_the_custom_smtp)** service, replacing the Email Delivery service. Customers will benefit from greater scalability, faster email delivery, global coverage and intensive email support. Should your organization require the use of EXM 3.0-3.3 software, please connect with Sitecore at the earliest convenience by contacting your local Sitecore representative or the appropriate email address found here: **[http://www.sitecore.net/company/contact-us](http://www.sitecore.net/company/contact-us)**.  
  
**Statistics loss after upgrade**  
• Please be aware that if you upgrade from EXM 3.0-3.2 to EXM 3.3 or later, the Reporting architecture has been updated and older reporting data is no longer supported.  
• If you need your historical reporting data, you should **[extract and migrate](https://doc.sitecore.net/email_experience_manager/reporting/extract_data_from_earlier_versions_of_exm_to_create_historical_reports)** it to a separate database where you can analyze it with your chosen Business Intelligence (BI) tool.
  </Alert>
  

## Downloads

 | Resource | Description |
 | --- | --- |
 | [Email Experience Manager](https://scdp.blob.core.windows.net/downloads/Email%20Experience%20Manager/Email%20Experience%20Manager%2033/Email%20Experience%20Manager%2033%20Initial%20Release/Secure/Email%20Experience%20Manager%203.3.0%20rev.%20160527%20(not%20sc%20package).zip) | Download this package to install the Sitecore Email Experience Manager 3.3 rev. 160527. The EXM installation package includes six zip packages – the Email Experience Manager, four zip files that match specific server roles, and a sample newsletter. For more information on how to install the EXM module, see the EXM Installation Guide. |

## Upgrades

 | Resource | Description |
 | --- | --- |
 | [EXM Update Package](https://scdp.blob.core.windows.net/downloads/Email%20Experience%20Manager/Email%20Experience%20Manager%2033/Email%20Experience%20Manager%2033%20Initial%20Release/Secure/Email%20Experience%20Manager%203.3.0%20rev.%20160527%20(update%20package).zip) | Download the files you need to upgrade from EXM 3.2 Update 1 to EXM 3.3 Initial. |
 | [EXM Upgrade Guide](https://scdp.blob.core.windows.net/downloads/Email%20Experience%20Manager/Email%20Experience%20Manager%2033/Email%20Experience%20Manager%2033%20Initial%20Release/Secure/EXM-33-Upgrade-Instructions.pdf) | Step by step guide to upgrade EXM 3.2 Update 1 to EXM 3.3 Initial. |

## Release Information

 | Resource | Description |
 | --- | --- |
 | [Release notes](/downloads/Email_Experience_Manager/Email_Experience_Manager_33/Email_Experience_Manager_33_Initial_Release/Release_Notes) | Read the list of features, improvements, and fixes that have been implemented in this release. |
 | [Known Issues](https://kb.sitecore.net/articles/149565) | Choose this link to access the Sitecore Knowledge Base. |
 | [EXM Installation Guide](https://scdp.blob.core.windows.net/downloads/Email%20Experience%20Manager/Email%20Experience%20Manager%2033/Email%20Experience%20Manager%2033%20Initial%20Release/Secure/EXM-Installation-Guide-33.pdf) | The installation procedures for the Email Experience Manager module. |
 | [Documentation](https://doc.sitecore.net/email_experience_manager) | Documentation for the EXM module. |
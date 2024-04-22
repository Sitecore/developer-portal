---
title: "Upgrade Guide"
description: ""
origin: https://dev.sitecore.net/Downloads/Active_Directory/14/Active_Directory_14/Upgrade_Guide
---

To upgrade the module from version 1.3 rev. 161017 to version 1.4.0 rev. 180313:

1.  Download the Active Directory 1.4.0 rev. 180313 update package.
2.  Open the Update Installation Wizard - `http(s)://<hostname>/sitecore/admin/UpdateInstallationWizard.aspx` and install the Sitecore Active Directory 1.4.0 rev. 180313.update package.
In the new version of the Active Directory module, the `ldap.config` file is stored in a new location `\App_Config\Modules\ActiveDirectory\ldap.config` in accordance with the new Sitecore configuration layers.5.  Update the existing `\App_Config\Include\ldap.config` file to contain the necessary configuration patches in `\App_Config\Modules\ActiveDirectory\ldap.config`.
6.  In the `Web.config` file, set the mode attribute of the `system.web/authentication` node to `None`.
7.  In the `Web.config` file, add the following node:
  `<location path="sitecore/admin/LDAPLogin.aspx">`  
    `<system.web>`  
      `<authorization>`  
        `<allow users="*" />`  
      `</authorization>`  
    `</system.web>`  
  `</location>`
---
title: "Known Issues in Sitecore Active Directory 1.3"
description: ""
origin: https://dev.sitecore.net/Downloads/Active_Directory/1_3/Active_Directory_1_3/Known_Issues
---

## Known issues

The list of known issues which are present in the current version of the Active Directory module.

1.  When the AD server name starts with “dc” or “DC” in the AD connection string, as in:  
    `<add name="ManagersConnString" connectionString="LDAP://dctest/DC=company,DC=net "/> `  
    the AD module writes errors to the log file:  
    `1320 12:18:00 WARN AD: reconnected`  
    ` 1320 12:18:00 WARN AD : attempt reconnecting...`  
    **Workaround:**  
    Use the server IP instead of the server name in the AD connection string:  
    `<add name="ManagersConnString" connectionString="LDAP://[IP]/DC=company,DC=net "/>`  
    [IP] is the IP of the AD server, e.g. 127.0.0.1  
    The AD connection string is placed in the App_Config/ConnectionStrings.config file.
2.  If you have written custom code that calls the Active Directory module’s API, you may encounter compilation errors (“missing assembly”) when you upgrade to the latest version. This could happen due to a change in the assembly version between the previous and latest module versions.  
    **Workaround:**  
    To work around this issue, re-reference the [module] assembly as a version independent reference (specific version = “false”) and recompile your code.
3.  An exception may occur when changing the profile of an Active Directory user created in Sitecore.  
    **Workaround:**  
    Open the /App_Config/Security/Domains.config.xmlfile and add the following line to the domains element:  
    `<domain name="ad" ensureAnonymousUser="false" defaultProfileItemID="{DDEDA46F-169B-4A70-8732-DBD3F407AF2E}"/>`  
    The defaultProfileItemID attribute defines the profile item that will be used for users from the domain if the profile is not set for the user explicitly.
4.  The first installation of the module package may fail without any exact error description.  
    **Workaround:**  
    Install the package again (use the appropriate button on the last wizard screen) and choose Overwrite option for all files.
5.  The AD module does not support the SSL protocol.
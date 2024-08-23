---
title: "Upgrade Guide - 2.0 rev.140718 to 2.1 rev.150128"
description: ""
origin: https://dev.sitecore.net/Downloads/SharePoint_Connect/2_0/SharePoint_Connect_2_1/Upgrade_Guide
---

To upgrade the SharePoint Integration Framework from version 2.0 rev.140718 to SharePoint Connect version 2.1 rev.150128:

-   Upgrade Sitecore to XP 8.0
-   Install SharePoint Connect 2.1 upgrade package
-   Move \App_Config\Include\sharepoint.config to \App_Config\Include\Sharepoint folder (this is necessary to make Sitecore patch item provider pipelines in right order)
-   Make the following changes in the sharepoint.config: Remove the following lines:  
      
    ```
    `<itemmanager>`  
         	`<providers>`  
        `<add>`  
        `<x:attribute name="type">`Sitecore.Sharepoint.Data.Providers.ItemProvider, Sitecore.Sharepoint.Data.Providers`</x:attribute>`  
        `</add>`  
        `</providers>`  
        `</itemmanager>`
        
    ```
-   Add the following to the pipelines node:  
      
    ```
     `<group name="itemProvider" groupName="itemProvider">`  
        `<pipelines>`  
        `<getChildren>`  
        `<processor type="Sitecore.Sharepoint.Pipelines.GetChildren.GetChildren, Sitecore.Sharepoint.Data.Providers" x:after="processor[position()=last()]" />`  
        `</getChildren>`  
        `<getItem>`  
        `<processor type="Sitecore.Sharepoint.Pipelines.GetItem.GetItem, Sitecore.Sharepoint.Data.Providers" x:after="processor[position()=last()]" />`  
        `</getItem>`  
        `</pipelines>`  
        `</group>` 
        
    ```
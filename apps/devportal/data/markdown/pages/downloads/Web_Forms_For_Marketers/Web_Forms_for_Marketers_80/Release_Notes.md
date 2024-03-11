---
title: "Release Notes - WFFM 8.0 Update-1 to 8.0 Update-4"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/Web_Forms_for_Marketers_80/Release_Notes
---

### June 30, 2015

**Sitecore Web Forms for Marketers 8.0 rev.150625 (Update-4) is released.**

##### Compatibility

This version of Web Forms for Marketers is compatible with Sitecore Experience Platform 8.0 rev. 150621 (8.0 Update-4)

##### Improvements

-   The “Add contact to contact list” save action has been extended with condition functionality. Now you can add a contact to a list based on a form field value. (TFS 54823)

##### Resolved issues

-   List fields were not multilingual. This has been fixed. (435323)
-   The Checkbox, Checkbox List, Date Picker, and List fields did not respect the default value from a visitor tag. This has been fixed. (389254, 430447, 439091, 439092)
-   Fields were prefilled with default values from visitor tags of anonymous users instead of authenticated ones. This has been fixed. (439145)

### April 30, 2015

**Sitecore Web Forms for Marketers 8.0 rev.150429 (Update-3) is released.**

##### Compatibility

This version of Web Forms for Marketers is compatible with Sitecore Experience Platform 8.0 rev. 150427 (8.0 Update-3)

##### Resolved issues

-   MSCaptcha.dll has been updated to version 4.0.4250.31585
-   An issue with the “Add Contact to Contact list” save action has been fixed. (434693)
-   Problems with the Drop List field in the Form Designer have been fixed. (429637, 429639, 430549)
-   An issue with the “Create User” save action has been fixed. (428739)

### February 26, 2015

**Sitecore Web Forms for Marketers 8.0 rev.150224 (Update-2) is released.**

##### Compatibility

This version of Web Forms for Marketers is compatible with Sitecore Experience Platform 8.0 rev. 150223 (8.0 Update-2)

##### Resolved issues

-   There was a problem with the "Enroll in Engagement Plan" save action. This has been fixed. (25139)
    
-   The UI in form wizards has been improved. (24968)
    
-   There was a problem with the "Add field" button in the "Create user" save action wizard. This has been fixed. (25279)
    
-   The WFFM security for multiserver configuration has been improved. Sitecore EventQueue is now used and the "remoteWfmService" web-service has been removed.(24829)
    

### December 19, 2014

**Sitecore Web Forms for Marketers 8.0 rev.141217 (initial version) is released.**

##### Compatibility

This version of Web Forms for Marketers is compatible with Sitecore Experience Platform 8.0 rev.150121 (8.0 Update-1) and Sitecore Experience Platform 8.0 rev. 141212 (8.0 Initial Release)

##### New features & Improvements

The Web forms for Marketers module (WFFM) has been updated to the new SPEAK framework.

-   The new Update Contact Details save action automatically updates the contact details with data entered in a form.
    
-   To provide better integration with email campaigns, the new Add to Contact List save action enables you to assign a visitor to a predefined contact list that is used as a recipient list in the Email Experience Manager.
    
-   To make it easier to create forms, the Form Designer application is now available from the Start menu in the Sitecore Desktop.
    
-   An Insert Form button is now available in the Forms group of the ribbon in the Content Editor and the Experience Editor.
    

##### Reporting

-   The Form Reports application is now available from the Start menu in the Sitecore Desktop ? Marketers can now view form-related reports from the Content Editor and the Experience Editor.
    
-   The Form Reports application is now based on SPEAK.
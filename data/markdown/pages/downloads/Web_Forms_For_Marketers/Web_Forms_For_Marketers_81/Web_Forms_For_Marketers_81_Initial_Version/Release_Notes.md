---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Web_Forms_For_Marketers/Web_Forms_For_Marketers_81/Web_Forms_For_Marketers_81_Initial_Version/Release_Notes
---

**October 20, 2015 – released Sitecore Web Forms for Marketers 8.1 (rev. 151008)**

### Documentation

For all Web Forms for Marketers 8.1 documentation, please visit the [Sitecore Documentation Site](https://doc.sitecore.net/web_forms_for_marketers/81).

### New features & improvements

-   Updated to include the latest WFFM 2.4 release with specific improvements to MVC.
    
-   Support has been added for WFFM so that it can work in CMS-only mode.
    
-   Support has been added for SQL form data storage. This can be used as alternative data storage when xDB has been disabled.
    
-   WFFM (MVC) has been updated to support the Federated Experience Manager.
    

### Breaking Changes

-   As a part of the work to support the Experience Management CMS-only mode and the ability to save form data to SQL, a number of classes have been moved.
    
-   The following Sitecore.Form.Core classes have been moved to Sitecore.WFFM.Abstractions.Actions:
    
    -   The Sitecore.Form.Core.Client.Data.Submit.AdaptedResultList class has been moved to Sitecore.WFFM.Abstractions.Actions.AdaptedResultList.
        
    -   The Sitecore.Form.Core.Controls.Data.AdaptedControlResult class has been moved to Sitecore.WFFM.Abstractions.Actions.AdaptedControlResult.
        
    -   The Sitecore.Form.Core.Controls.Data.ControlResult class has been moved to Sitecore.WFFM.Abstractions.Actions.ControlResult.
        
    -   The Sitecore.Form.Core.Submit.ExecuteResult class has been moved to Sitecore.WFFM.Abstractions.Actions.ExecuteResult.
        
    -   The Sitecore.Form.Core.Submit.ActionContext class has been moved to Sitecore.WFFM.Abstractions.Actions.ActionCallContext.
        
    -   The Sitecore.Form.Core.Submit.ActionState class has been moved to Sitecore.WFFM.Abstractions.Actions.ActionState.
        
    -   The Sitecore.Form.Core.Submit.ActionType class has been moved to Sitecore.WFFM.Abstractions.Actions.ActionType.
        
    -   The Sitecore.Form.Core.Submit.BaseAction class has been moved to Sitecore.WFFM.Actions.Base.WffmAction.
        
    -   The Sitecore.Form.Core.Submit.BaseCheckAction class has been moved to Sitecore.WFFM.Actions.Base.WffmCheckAction.
        
    -   The Sitecore.Form.Core.Submit.BaseSaveAction class has been moved to Sitecore.WFFM.Actions.Base.WffmSaveAction.
        
    -   The Sitecore.Form.Core.Media.PostedFile class has been moved to Sitecore.WFFM.Abstractions.Actions.PostedFile.
        
    -   The Sitecore.Form.Core.Pipelines.ProcessMessage.ProcessMessageArgs class has been moved to Sitecore.WFFM.Abstractions.Mail.ProcessMessageArgs.
        
    -   The Sitecore.Form.Core.Pipelines.ProcessMessage.MessageType class has been moved to Sitecore.WFFM.Abstractions.Mail.MessageType.
        
-   The members of Sitecore.Form.Core.Submit.SubmitActionManager class have been moved to the IActionExecutor interface.
    
    -   To obtain the instance of this interface use the (IActionExecutor)Factory.CreateObject ("wffm/wffmActionExecutor", false) call.
        
-   The methods from the Sitecore.WFFM.Core.Resources.ResourceManager class have been moved to the IResourceManager interface.
    
    -   To obtain the instance of this interface use the (IResourceManager)Factory.CreateObject ("wffm/resourceManager", false) call.
        
-   The following interfaces have been moved to Sitecore.WFFM.Abstractions:
    
    -   The Sitecore.Form.Core.Submit.ISaveAction interface has been moved to Sitecore.WFFM.Abstractions.Actions.ISaveAction.
        
    -   The Sitecore.Form.Core.Submit.ICheckAction interface has been moved to Sitecore.WFFM.Abstractions.Actions.ICheckAction.
        
    -   The Sitecore.WFFM.Analytics.Providers.IWfmDataProvider interface has been moved to Sitecore.WFFM.Abstractions.Analytics.IWfmDataProvider.
        
    -   The Sitecore.WFFM.Analytics.Model.IFormStatistics interface has been moved to Sitecore.WFFM.Abstractions.Analytics.IFormStatistics.
        
    -   The Sitecore.WFFM.Analytics.Model.IFormFieldStatistics interface has been moved to Sitecore.WFFM.Abstractions.Analytics.IFormFieldStatistics.
        
    -   The Sitecore.WFFM.Analytics.Model.IFormContactsResult interface has been moved to Sitecore.WFFM.Abstractions.Analytics.IFormContactsResult.
        
-   The following Sitecore.WFFM.Analytics.Providers classes have been moved to Sitecore.WFFM.Abstractions.Data:
    
    -   The Sitecore.WFFM.Analytics.Providers.Common.PageCriteria class has been moved to Sitecore.WFFM.Abstractions.Data.PageCriteria.
        
    -   The Sitecore.WFFM.Analytics.Providers.Common.SortCriteria class has been moved to Sitecore.WFFM.Abstractions.Data.SortCriteria.
        
    -   The Sitecore.WFFM.Analytics.Providers.Common.SortDirection class has been moved to Sitecore.WFFM.Abstractions.Data.SortDirection.
        
-   The Sitecore.WFFM.Analytics.Model.IFormData interface now uses the Sitecore.WFFM.Abstractions.Analytics.FormData class.
    

### Resolved issues

-   In WFFM MVC, a number of field templates were referencing a namespace that was not present in Sitecore.Forms.Core. This had caused an error when adding fields to a form in an MVC layout. This has been fixed. (62528)
-   There had been an exception on the Save Action wizard when a form had an empty list field. This has been fixed. (62257)
-   In WFFM MVC, a form with a submit field that included the & symbol had resulted in an incorrect warning message being displayed. This has been fixed. (64588)
-   An exception had occurred when using the Update Contact Details Save Action on a form with an empty field. This has been fixed. (65391)
-   In the Send Mail Editor dialog, the field value had always inserted at the end of the available text instead of at the user’s cursor. This has been fixed. (346818, 66904)
-   Publishing when using the Smart publish option in the Experience Editor had not reflected saved changes that were made to a form. This has been fixed. (65847)
-   Changes that were made to a form validation had not displayed correctly on the website’s front end after publishing. This has been fixed. (66429)
-   The ‘from’ email address was not replaced with the value from the email. This has been fixed. (443653)
-   The user interface has been updated to correct several spelling errors. (69874)
-   Forms using an MVC layout were not rendered on a content delivery server. This has been fixed. (68272)
-   When using a form in a scaled environment with multiple content delivery and content management servers, the submit action had failed with an exception. This has been fixed. (72114)
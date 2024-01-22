---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_30/Email_Experience_Manager_30_Initial_release/Version_Resources/Release_Notes.aspx
---

### Release History for Email Experience Manager - formerly Email Campaign Manager (ECM)

### April 30, 2015

Email Experience Manager (EXM) 3.0 rev. 150429 is released.

##### Compatibility

EXM 3.0 rev. 150429 (Update-3) is compatible with Sitecore Experience Platform rev. 150427 (8.0 Update-3)

##### Resolved issues

-   When customers dispatched email messages synchronously on several threads, performance was severely degraded. This has been improved with several performance fixes. (431762)
    
-   The dispatch pipeline was often aborted if there was an error, even if the error was non-critical. This has been changed so the dispatch pipeline is now paused instead, allowing customers to fix the problem and resume the dispatch. (434929)
    
-   There was an error when viewstate failed to load in the Select Role dialog. This has been fixed. (430969)
    
-   There have been numerous UI, UX, and stability fixes to the EXM module.
    

### February 26, 2015

Email Experience Manager (EXM) 3.0 rev. 150223 is released.

##### Compatibility

EXM 3.0 rev. 150223 (Update-2) is compatible with Sitecore Experience Platform rev. 150223 (8.0 Update-2).

##### Resolved issues

-   The A/B recurring tests started regardless of the interval that was selected. This has been fixed (38439)
    
-   The message performance report did not have data even though the analytics data and Funnel homepage showed data. This has been fixed. (38431)
    
-   Changes in the message subject were not being saved automatically when the dispatch process was started. This has been fixed. (37873)
    
-   The external links from test messages did not open in a distributed environment. This has been fixed. (38394)
    
-   The online version of messages was not shown. This has been fixed. (38779)
    
-   The import of contacts did not work as expected in a scaling environment. This has been fixed. (37297)
    
-   The Engagement Plan Supervisor trigger action failed. This has been fixed. (37098)
    
-   Unsubscribed user visits were counted as visits in message performance. This has been fixed. (37713)
    
-   The emulation of send messages did not work for triggered messages. This has been fixed. (35150)
    
-   A/B test messages could not be scheduled for specified activation start date and activation end dates. This has been fixed. (37726)
    

### January 30, 2015

Email Experience Manager (EXM) 3.0 rev. 150126 is released.

##### Compatibility

EXM 3.0 rev. 150126 (Update-1) is compatible with Sitecore Experience Platform 8.0 rev. 150121 (8.0 Update-1).

##### Resolved issues

-   Variants were not sent in equal numbers for A/B testing dispatch on certain dedicated servers setups. This has been fixed. (25686)
    
-   If a list was locked, A/B testing on messages using that list did not start. This has been fixed. (25717)
    
-   The send email campaign and edit email audience actions were not triggered from the state. This has been fixed. (23737)
    
-   Creating a schedule or a recurring schedule with Moscow time did not schedule the message. This has been fixed. (25653)
    
-   Canceling a recurring schedule of a message after it had been sent was not possible. Instead, the user had to delete the scheduled item in the Content Editor. This has been fixed.(25652)
    
-   Two Alternative Text fields were displayed when the user inserted a token in a hidden Alt text field. This has been fixed. (25645)
    
-   The message body was not refreshed after editing if changes in the Subject field were not saved. This has been fixed. (25268)
    
-   Scheduled triggered messages for activation didn't show the message in the Scheduled messages list. This has been fixed. (25202)
    
-   New presentation components could not be added to the message in the Experience Editor. This has been fixed. (23497)
    
-   The Export message recipient’s action did not work correct. This has been fixed. (25697)
    
-   Sender details were not disabled for messages created based on the Subscription message template. This has been fixed. (15401)
    

### December 19, 2014

Email Experience Manager (EXM) 3.0 rev. 141217 is released.

##### Compatibility

EXM 3.0 rev. 141217 (Initial Release) is compatible with Sitecore Experience Platform rev. 141212 (8.0 Initial Release).

##### Resolved issues and improvements

EXM 3.0 is built on the new SPEAK framework.

-   The List Manager is now integrated and uses contact lists and segmented lists to send emails.
    
-   User-defined opt-in and opt-out lists for messages have been added to give better control on subscriptions.
    
-   The ability to set a global opt-out list per root manager has been introduced. This gives better flexibility to manage the global opt-out list and allows more control over opt-out list for global business scenarios.
    
-   The Recurring dispatches feature has been added, allowing new business use cases and a number of new email marketing scenarios. For example, birthday campaigns that are sent out to a segmented list on their birthday, or a renewal campaign that is sent out to all customers when their subscription is about to expire.
    
-   Offers the ability to select a list and instruct EXM to remove bounces or unsubscribers from it, helping to deliver better conformance to subscription requirements.
    
-   All dates are now stored in UTC and displayed in local client time.
    
-   Dispatching and personalization now use a unified recipient model instead of a specific source.
    
-   A new Create menu has been introduced for improved usability.
    
-   Message tasks now use lazy loading to load the content of the message data. This results in faster message loading and helps users be more productive.
    
-   Users can now set the recipient list for triggered messages instead of automatic creation.
    
-   When emails are generated, the Email channel is now automatically added to the trackable email links.
    
-   The following pipelines have been introduced for a better and flexible recipient model:
    

-   getSitecoreUserRecipient 
    
-   getXdbContactRecipient
    
-   updateContactInfo
    
-   handleUndeliveredMessage.
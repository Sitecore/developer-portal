---
title: 'Sitecore Experience Platform Client Translations Manual'
description: ''
---

This page describes how to import a client translation into the Sitecore Experience Platform 10.1 or later.

To run the Sitecore client in a different language, download the Sitecore Experience Platform client translation file and import the new language into the Sitecore Experience Platform installation:

1. Log in to Sitecore as an administrator and open the Sitecore Desktop.
2. Switch to the _Core_ database.
3. Make sure the language that you are going to import is available in the database.
4. If the language is not available, open the **Control Panel** and then click **Localization**, **Add a new Language** and add the required language. Note: If you add the Danish language, leave the Country/Region Code field empty, do not enter DK. This is the default behavior for the Danish language.
5. Download the client translation file from the appropriate download page.
6. In Windows Explorer, unzip the file to the _/App_Data_ folder on a Sitecore instance. Every .zip file contains an _items_ and a _localization_ folder. You can copy these folders to the _/App_Data_ folder on the Sitecore instance without making any additional changes and all the required files are added in the appropriate places.
7. In IIS, restart the Sitecore instance.
8. In the **Control Panel**, in the **Indexing** group, click **Indexing manager**, select the _sitecore_core_index_, _sitecore_master_index_, and _sitecore_web_index_, and click **Rebuild**.
9. In the **Control Panel**, in the **My Settings** group, click **Region and language options** and select the language that you just imported.
10. Log in to Sitecore again.

You should now see the client in this language.

**Note**: If you have modified any of the standard Sitecore items after you have imported the client translation, you must re-import the client translation.

**Note**: Sitecore Experience Platform may contain some text that has not been translated to the target language even after you install the client translation file. In general, this should not affect your ability to use the client and is only likely to occur in isolated areas.

The following translation issues have been reported:

- Some portal commands (Next Column, Previous Column, Add Content) cannot be translated.
- The Edit button in the Worflow group cannot be translated.
- The Wallpaper position options cannot be translated.

---
title: 'Razl'
description: 'With Razl, developers can see a complete side-by-side comparison between two Sitecore databases and clearly and easily see features that are missing or not current.'
---

Developers can move items quickly from one database to another. No matter the size of the project, Razl makes Sitecore item migration easy!

[Read the Documentation](http://hedgehogdevelopment.github.io/razl/index.html)

## Razl v4.0.12
_May 07, 2020_

*   Fix an issue with Copy histoy not picking up changes in languages other than en
*   Fix a problem with copy all script occsionally throwing parent not found error

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.12.zip)

## Razl v4.0.10
_August 23, 2019_

*    Updated Branding

\* Please note- this version ONLY works with a license subscription

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.10.zip)

## Razl v 4.0.9
_May 28, 2019_

*   Fix an issue with duplicate items being copied during a CopyAll process.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.9.zip)

## Razl v4.0.8
_November 29, 2018_

*   Update code signing certificate.
*   Update license validator.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.8.zip)

## Razl v4.0.7
_August 07, 2018_

*   Improve how the Razl service handles broken items in Sitecore

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.7.zip)

## Razl v4.0.6
_June 27, 2018_

*   Fix an issue where continue on error didn't work in copy all when a source parent was missing.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.6.zip)

## Razl v4.0.5
_April 06, 2018_

*   Give users the ability to update the Razl license in the product

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.5.zip)

## Razl v4.0.4
_March 20, 2018_

*   Prevent existing connection clearing if the cancel button is pressed in the connection manager
*   Prevent field type differences being shown as actual item differences
*   Fixed issue with the database name not being updated in the connection manager

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.4.zip)

## Razl v4.0.3
_February 28, 2018_
  
This version of Razl focuses on general performance and workflow improvements to the tool. We have noticed that many features are slow and/or require too many clicks to use. We have improved both the workflow of the developer using Razl and the overall speed of the tool.  
  
**Multi-threaded copy**  
Razl functionality allowing users to copy items and sub items from one database to another has been enhanced to allow more than one item to be copied at once, which dramatically improves the performance of copy operations. When combined with Lightning Mode, this new feature allows very large content trees to be quickly moved between databases.   
  
**Compare/Editors for complex Sitecore fields**  
A new function for comparing and moving complex field values in Sitecore by providing custom field editors for multi-list fields, link fields, and Presentation Details. This will facilitate side-by-side comparison of some of the more complex Sitecore fields.   
  
**Search and Compare items**  
  
**Highlight newer items in the compare pane**  
A visual indicator alerting the user if one item is newer than the item on the other server in a comparison; this prevents overwriting changes to an item accidentally, and helps the user by not forcing the user to manually check the Sitecore Updated field.   
  
**Copy an item and its related items**  
A new copy function to copy an item and its related items based on links in the link database. Facilitates moving pages where the items making up the page are spread across in multiple folders.   
  
**Improve the multi-select experience with deep compare**  
The History/Deep compare pane at the top of the window was previously slow to use when selecting multiple item because the upper pane was using the main compare window for most of its functions. Decoupling the upper pane functionality from the lower pane improves usability of the tool.  
  
**Allow relative dates in the history sync script**  
Allows users to specify relative dates for copying item using history in the script engine. Previously, the script had to be updated if the user wanted to perform a recurring rolling move of changed items.  
  
**Right click copy information from an item**  
A right-click menu to select useful information like item ID, path, template id, template path, field id, field name and value and place the information in the clipboard.   
  
**Create new logs every time Razl is started**  
An option to create new logs each time Razl is started has been added to the options screen. This helps with script mode and capturing individual sessions.   
  
**Allow the history/deep compare pane to be** **re-sizable**  
The top Deep Compare/History pane can now be sized with the other panes.  
  
**Highlight items in lower tree after deep compare**  
When a Deep Compare is done, items in the tree can be highlighted based on differences in their children. This makes it easier to find different items by showing parent items that contain children with differences.   
  
**Export a list of changed items**  
Create an export file of item ID’s and paths based on the contents of the Deep Compare/History pane. Allows users to report on differences between environments. Users can also extend script mode to create a similar export of differences before performing the change.  
  
**New connection manager**  
A new connection manager is now accessible in the toolbar of Razl. This shows all connections and allows them to be quickly reviewed and edited. The exiting connection editing functionality still exists, this function makes it easier to edit the connections.  

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%204.0.3.zip)

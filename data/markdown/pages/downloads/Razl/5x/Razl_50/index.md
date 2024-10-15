---
title: 'Razl'
description: 'With Razl, developers can see a complete side-by-side comparison between two Sitecore databases and clearly and easily see features that are missing or not current.'
---

Developers can move items quickly from one database to another. No matter the size of the project, Razl makes Sitecore item migration easy!

[Read the Documentation](http://hedgehogdevelopment.github.io/razl/index.html)

<Card variant='outlineRaised' px={0} mb={8}>
<CardHeader>
## Razl v5.1.0
</CardHeader>
<CardBody>
_February 02, 2023_

*   History View entries are displayed using Item created date instead of item updated date when retrieving History entries using index
[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%205.1.0.zip)
</CardBody>

</Card>

<Card variant='outlineRaised' px={0} mb={8}>
<CardHeader>
## Razl v5.0.4
</CardHeader>
<CardBody>
_March 03, 2021_

*   Show 10.1 protobuf resources in Razl window
*   Prevent Razl from overwriting protobuf resource item if the source item is also a protobuf item (Prevents mirroring unchanged items in the database)
*   Allow Razl to pick up the license key from the environment variable RAZL\_LICENSE\_KEY

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%205.0.4.zip)
</CardBody>
</Card>

<Card variant='outlineRaised' px={0} mb={8}>
<CardHeader>
## Razl v5.0.2
</CardHeader>
<CardBody>
_January 20, 2021_

*   Improve error handling when there is a broken or null template on an item.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%205.0.2.zip)
</CardBody>
</Card>

<Card variant='outlineRaised' px={0} mb={8}>
<CardHeader>
## Razl v5.0.1
</CardHeader>
<CardBody>
_September 15, 2020_

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%205.0.1.zip)
</CardBody>
</Card>

<Card variant='outlineRaised' px={0} mb={8}>
<CardHeader>
## Razl V5
</CardHeader>
<CardBody>
Razl version 5 contains a number of incremental changes along with a completely new script engine designed around PowerShell Cmdlets. The new script engine creates an interoperability layer between a PowerShell script and the Razl service in a Sitecore instance.

### Razl Powershell Scripts

The following is a list of new Cmdlets for the Razl Script Engine:

*   Add-RazlField - Adds a FieldInfo to an ItemDetails object. This is used to manipulate the ItemDetails retuned from Get-RazlItem
*   Clear-RazlCache - Clears all Caches on the Sitecore server.
*   Copy-RazlItem - Copys a single item from one server to another.
*   Copy-RazlItemsUsingHistory - Copys items that have changed between two servers using change history to determine the items to copy.
*   Copy-RazlItemTree - Copys an items and all child items from one server to another.
*   Copy-RazlItemVersion - Copys a single version of and item from one server to another.
*   Get-RazlChildItems - Gets information about each item under an item on a server.
*   Get-RazlConnection - Gets a Razl connection to a server.
*   Get-RazlConnectionStatus - Gets the status of the Razl connection.
*   Get-RazlDatabaseNames - Gets the names of the databases on a server.
*   Get-RazlDeepCompareResults - Performs a deep compare between two servers and retuns the differences.
*   Get-RazlField - Gets the value of a field on an item from a server.
*   Get-RazlFieldBlob - Gets the value of a blob field on an item from a server.
*   Get-RazlHistory - Gets item changes between two dates.
*   Get-RazlItem - Gets all languages and fields for an item from a server. It can get multiple Items by ID and retuns an array of ItemDetails.
*   Get-RazlReferencedItems - Gets information about all items referenced by an item from a server.
*   Get-RazlReferredItems - Gets information about all items referring to an item from a server.
*   Move-RazlItem - Moves an item from one location on a server to another location on the same server.
*   New-RazlField - Creates a new FieldInfo object. These objects are using in the ItemDetails to hold the value of the field.
*   New-RazlItem - Creates a new ItemDetails object to hold all fields for an item.
*   Remove-RazlConnection - Removes the Razl service from a server.
*   Remove-RazlField - Removes a field from an ItemDetails object.
*   Remove-RazlItem - Removes an item from a server.
*   Search-RazlItems - Searchs items on a server for a text value using the full text search index.
*   Set-RazlField - Sets the value of a field in an item on a server.
*   Set-RazlFieldBlob - Sets the value of a blob field in an item on a server.
*   Set-RazlItem - Sets the value of all fields in all versions and languages of an item on a server.
*   Set-RazlItemTemplate - Changes the template for an item on a server.

For more information about Razl scripting, please see our [documentation](http://hedgehogdevelopment.github.io/razl/script.html). 

There are a few samples in the \[Install Folder\]/Samples folder. Please see these samples for more information on the Cmdlets.

### Razl Container Support
We have released container images for the Razl components. For more information about installing the image in your containers, please see: [Razl Containers](http://hedgehogdevelopment.github.io/razl/containers.html)

### Additional New Features

The following incremental changes are being made to Razl:

*   Added Go Back/Go Forward buttons similar to moden development environments and browsers.
*   Improved right-click menu structure
*   Added the ability to bookmark items for a connection
*   Added the ability to compare different versions of items
*   Added ability to copy connections in the connection manager
*   Improved functionality around connecting to servers that require authentication
*   Automatically pick up access guid from a server in the connection manager when making a direct connection
*   Create a CSV report of history differences, deep compare or search results from a button on the tool bar
*   Improved icons and toolbar buttons
*   Show "newer star" in the history and deep compare panes
*   Allow date sections of the history pane to be expanded and collapsed
*   Improved robustness of the razl interface and copy functions when the network connection is intermittent
*   Increased the size of the status window to better show long paths
*   Numerous bug fixes

[Click here to download](https://scdp.blob.core.windows.net/downloads/Razl/Razl%205.0.1.zip)
</CardBody>
</Card>

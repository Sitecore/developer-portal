---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Commerce/90/Sitecore_Experience_Commerce_90_Update1/Release_Notes
---

**March 2018 - released Sitecore Experience Commerce 9.0 Update-1**

Sitecore XC 9.0 Update-1 is a corrective content release only; there are no new features.

## Resolved issues

The following table lists the most visible corrective content included in Update-1. Other less visible fixes were included also, but not listed here.

 | Area | Description | Identifier(s) |
 | --- | --- | --- |
 | Indexing | Indexing: After updating a sellable item in the Business Tools, the sellable item wes disappeared from the Storefront after the indexing strategy had run. | 36040 |
 | Indexing | indexing: Incremental Sitecore indexing is not working, preventing finding results when | 35073 |
 | Indexing | Indexing: Incremental indexing incorrectly altered fields being indexed, for example some fields went missing. | 36344 |
 | Indexing | Incremental indexing for sellable items isn't completing; takes multiple iterations to work through products. | 36728 |
 | Indexing | Indexing: The CatalogItemsIndex incremental indexing counter incorrectly reports 0 items indexed in Minion log file, instead of the actual number of index runs. | 36048 |
 | Search | Azure search: When searching for a sellable item, the autocomplete functionality displays duplicate results of the item. | 35887 |
 | Content Editor | Content Editor: In the Sitecore Content Editor, entering a product ID does not return the correct path to the product item. The correct path is only visible from the Business Tools UI. | 36035 |
 | Content Editor | Content Editor: In the Content Editor, update a standard field for a product, but the change is not persisted in the Content Editor. In order to see the change, the Commerce caches need to be refreshed. | 36041 |
 | Business Tools | Business Tools: Calendar display in Bus Tools dialog box gets cut off, requiring user to scroll down. | 32515 |
 | Business Tools | The Autocomplete feature and associated association action incorrectly results in displaying the full product IDs. | 33790 |
 | Business Tools | Business Tools: The merchandiser is unable to test a promotion in the authoring (CM) instance of Storefront, before it gets approved and implemented in the externally facing Storefront. | 34869 |
 | Business Tools | Business Tools: Adding a price in German format gives error, "Invalid or missing value for property 'Price'." | 35292 |
 | Business Tools | Business Tools: It is unclear how to deactivate a customer from the Customers section of the Business Tools. | 35424 |
 | Business Tools | After the customer has completed a checkout including an Item level discount, the item level discount text is not displaying in the corresponding order in the Business Tools user interface. | 35476 |
 | Business Tools | Business Tools: In the Business Tools Promotions section, there is no autocomplete functionality when searching. Users need to type the target item ID in the precise format. | 35604 |
 | Business Tools | Business Tools: in the Add promotion dialog box it is difficult to distinguish Sellable Items from Variants in the search results. They should be more clearly distinguishable. | 35700 |
 | Business Tools | Business Tools: unable to add a Sellable item after a previous invalid Sellable item has been removed. | 35979 |
 | Business Tools | Busines Tools: "Undo Hold" does not undo a held order. It undoes the changes to a held order. Change this to "Undo Changes". | 36072 |
 | Storefront  
 | On checkout billing page, when an invalid gift card number is entered, the field validation message is not present.  <br /> | 30364  
 |
 | Storefront  
 | Promoted Products: selecting a pre-defined list of products shows the entire content tree.  <br /> | 31677  
 |
 | Storefront  
 | On the minicart, when a line is removed from the Minicart, the Minicart collapses and the user is not able to see the animation or the removal of content.  <br /> | 31787  
 |
 | Storefront  
 | Related products are not showing correctly in Storefront's Product Detail page.  <br /> | 32104  
 |
 | Storefront  
 | The Product ratings feature is not supported in the sample Catalog, but yet the ratings feature displays in the Storefront on the Product Category, Product Details and Promoted Products pages. The ratings feature display needs to be removed from the Storefront.  <br /> | 32344  
 |
 | Storefront  
 | On the Edit/Add Address page, two error messages were displayed when State code is invalid.  <br /> | 32752  
 |
 | Storefront | The currency selected (CurrencyCode property) on the Storefront is not correctly transferred to Commerce Engine backend. | 33323 |
 | Storefront  
 | The home page with carousel does not display correctly in certain scenarios, for example when selecting the "Show More" button on the Home Page to see more promoted products, then refreshing the page.  <br /> | 35271  
 |
 | Storefront  
 | Error with Internal links. Example: as part of adding a page to a site, in the Control Properties dialog box, insert a link. In the Insert Link dialog box select the Home node to expand the tree, but the result is that nothing displays in the tree.  <br /> | 35445 |
 | Storefront  
 | The Mockup2 theme does not apply correctly. On the Home, Category or Product detail page the expected mock image does not display instead of the product image, as it should.  <br /> | 35527  
 |
 | Storefront  
 | The Storefront logo URL is incorrect in a VDIR created site, resulting in error "The requested document was not found".  <br /> | 35818  
 |
 | Storefront  
 | The scaffolding script and the new storefront template does not support multilingual items; scaffolding must support the languages supported by the remainder of the solution. | 35907  
 |
 | Storefront | On product landing pages, product information is not displayed. The product information section is blank.  <br /> | 36063  
 |
 | Storefront  
 | Drag and drop components are not working on Product Details Pages and Landing Pages. Instead an error occurs, a graphic continues spinning where the component was dropped, and the page does not function.  <br /> | 36206  
 |
 | Storefront | In the Control Panel it is not possible to enter a sub-category as a Start Navigation category. Instead, the field is cleared and is left blank. Even when saving and changing the view to raw values, the field is blank.  <br /> | 36329  
 |
 | Storefront | Search results are showing products that are not intended to be available on a storefront, for example searching within an audio products department returns fridges.   <br /> | 36332  
 |
 | Storefront | On landing pages, on the presentation details some items may report broken links.  <br /> | 36408  
 |
 | Storefront | Storefront: Inventory status is not always displayed correctly in the Product List page and on Promoted Products. | 36696 |
 | Storefront | In the Experience Editor, saving a page containing an added component that includes links results in an error reporting broken links.  <br /> | 36881  
 |
 | Deployment | InitializeEnvironment for HabitatShops fails when running through IIS, if it has not completed after ~2 minutes. It presents a 502.3 Bad Gateway error. | 33339 |
 | Deployment | The Storefront is not loaded properly when the role of the site is set to CD | 35531 |
 | Deployment | The global.json file is missing entries for completed RMAs and journal entries from ListsToMigrate | 36080 |
 | Deployment | The content tree is not synchronized with Sitecore during deployment. It needs to be enabled by default. | 

36117

 |
 | Deployment | Deployment: the Sitecore Installation Framework (SIF) based deployment script does not correctly replace the default SQL instance name with the actual specified names during the deployment. This applies for the Identity Server and other servers/json files.  <br /> | 36299  
 |
 | Deployment  
 | Commerce administrator role does not have sufficient privileges. Should have the privileges of all the other roles.  <br /> | 23864, 25436  
 |

## Known issues

Refer to the release notes in the Sitecore XC 9.0 Initial Release for known issues, and incomplete new features. 

## Compatibility

Refer to the Installation Guides (On Premises or Azure App Service) for software pre-requisites.
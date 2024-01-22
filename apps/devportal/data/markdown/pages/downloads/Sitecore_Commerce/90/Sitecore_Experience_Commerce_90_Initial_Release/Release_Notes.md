---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Commerce/90/Sitecore_Experience_Commerce_90_Initial_Release/Release_Notes
---

**January 2018 - released Sitecore Experience Commerce 9.0 Initial Release**

 | UPDATE FEB 01  
 | Published a new  **Packages for On Premises 2018.01-2.0.254**  release package, fixing an incorrect URL for the public Sitecore XC myget feed. No other changes were made.Please download the latest release package, or instead correct the URL directly in your original release package as follows:  <br />- In package  **Sitecore.Commerce.Engine.SDK.2.0.1922.zip**  open file  **nuget.config**  <br />- On row 6 remove URL:  **https://sitecore.myget.org/F/sc-commerce-preview/api/v3/index.json**  <br />- Replace URL with:  **https://sitecore.myget.org/F/sc-commerce-packages/api/v3/index.json** |

## New feature/improvements

 | Area | Description |
 | --- | --- |
 | Branding | New Sitecore Experience Commerce (Sitecore XC) branding, applicable starting in release 9.0. |
 | Commerce services | New Catalog, Inventory, and Customer subsystems. |
 | Business Tools | New single-page business tools application for all business tools, launched from the Sitecore dashboard. It has been developed wtih Angular 4. The contents are driven from within the Commerce Engine plugins, so changes are easy for developers to make. |
 | Storefront | New Storefront solution based on the Sitecore Experience Accelerator (SXA) module, comprising:  <br />- Sitecore Commerce Foundation (foundation layer)  <br />- 40+ Commerce components for SXA (feature layer)  <br />- A storefront site template consisting of SXA-based pages and commerce components (project layer)  <br />- Two pre-defined themes: Storefront Mock-up and Storefront Branded |
 | Connect | Commerce Connect continues to be embedded in Sitecore XC. It has been rebuilt and updated:  <br />- Personalization rules and service layers from the 8.2.1 release have been included, except Product Synchronization.  <br />- The engagement data stored with page events, goals, and outcomes has been encapsulated in PoCo objects and converters as required in xDB. |
 | Connect | A new currency provider interface has been introduced in Commerce Connect that allows the selected currency to be passed to the Commerce Engine implicitly on all calls. Some method calls accept currecy to be explicitly provided as parameter and, if provided, will take precedence. The SXA Storefront implements the interface and the currency configured in control panel is passed on to the Commerce Engine. |
 | Connect | In Commerce Connect, shopping cart line quantity has been converted from an Integer type to a Decimal to allow for fractions. |

## Deprecated/removed

 | Area | Description |
 | --- | --- |
 | Commerce Server | The legacy Commerce Server product has been completely removed. Catalog, Inventory and Customer functionality has moved into the new Commerce Services. |
 | CS Connect  
 | Commerce Server Connect (CS Connect) has been removed. Applicable functionality has moved to Commerce Engine Connect (CE Connect).  <br /> |
 | Business Tools | The Merchandising Manager, Pricing and Promotions Manager, and Customer and Order Manager have been removed. They have been replaced with the new Business Tools application. |
 | Storefront | The Sitecore Reference Storefront has been removed, replaced by the new SXA Storefront. |

## Resolved issues

 | Description | Customer ticket ID | Internal ID |
 | --- | --- | --- |
 | ValidateSitecoreConnectionBlock returns false when sitecore/content/home item is removed | 498417 | 34646 |
 | Initialize cart on adding a promomotion code | 498402 | 34622/34580 |
 | IsShopNameCondition is case-sensitive | 498012 | 34576 |
 | Unnecessary warning OrderHasNoOnHoldComponent while putting an order on hold | 489465 | 32709 |
 | Promotions able to store absolute values, not only a percent (a discount) | 484832 | 27689 |
 | Engine Connect must be able to use different currencies but not only the default one | 486306/486326 | 28646/32431 |
 | It is not possible to set price more than 999 via the "Update List Price" in the "MERCHANDISING MANAGER" | 494834 | 32313 |
 | Media prefix is hard coded for the images in the Merchandising Manager | 494394 | 32143 |
 | Categories for a base catalog are not displayed if there is not the "en-US" language for this catalog | 490897 | 30773 |
 | Customer and Order Manager does not update First/Last Name on the CF Site | 491982 | 23743 |
 | Sitecore Commerce PricingServiceProvider error when attempting to get price for a variant with same VariantId value as parent product's ProductId | 484755/494883 | 28460 |
 | Incorrect numbers in Customer and Order Manager when .Net Globalization culture is non-English | 496926, 497185 | 33736 |
 | Customer and Order Manager should show dates in same time zone | 495429 | 32806/32807 |
 | Sitecore Commerce Engine sends many authentication web api requests during startup | 495371 | 32629/32630 |
 | Slow checkout when you have many countries configured | 489515 | 31822 |
 | Adding an Item to a Cart and then subsequently deleting that item from the Catalog causes the Cart to no longer open | 488385 | 28574 |
 | XP disablers (EventDisasbler, SecurityDisabler) are thread sticky | 488959 | 173499 |

## Incomplete - coming in a release update

 | Area | Description | Internal ID |
 | --- | --- | --- |
 | Catalog schema | The generalized default Catalog system schema - for products ("sellable items"), Catagories, and Catalogs - cannot be modified from the Business Tools. Instead, [this KB article](https://kb.sitecore.net/articles/083614) describes how you can extend the schema through components. | 35019 |
 | Connect | Commerce reports for Experience Profile and Experience Analytics | 113053 |
 | Connect | Commerce-specific Marketing Automation Campaigns (formerly called Engagement Automation Plans):  <br />- Abandonned Cart  <br />- New Order Placed  <br />- Product Back in Stock  <br />The Commerce-specific pipelines and listers etc. needed for these Marketing Automation Campaigns have not been completed. | 198730, 198736 |
 | Connect | Product Synchronization in the Connect service layer; this code has been temporarily removed until it is rebuilt for the 9.0 stack. | 191310 |
 | Upgrade | The 8.x to 9.0 Upgrade and Migration feature has not been completed; it will completed in a future release. Included in this release:  <br />- Commerce Engine 8.2.1 to 9 upgrade: a plugin for upgrading Entity Lists, including the ability to inject custom upgrade logic.  <br />- A web service for performing import/export of Catalog entities, and a Postman sample for invoking the service.  <br />Excluded from this release:  <br />- Migration tool for Catalog data and Inventory data, for mapping legacy schemas to the Commerce Engine.  <br />- Migration tool for analytics data stored in xDB. | 34870 |

## Known issues

 | Area | Description | Internal ID |
 | --- | --- | --- |
 | Connect | In order to fully support xConnect, Commerce Connect introduces breaking changes mostly around the domain models that come with the APIs. For more information see the Commerce Connect Developer's Guide, located on the Sitecore Experience Commerce page of doc.sitecore.net. | 196979 |
 | Business Tools | Business Tools Home button (grid icon in upper left corner) on the Launch Pad navigates the user back to the root of the Commerce tools, whereas the user may expect to be taken back to the Sitecore Launch Pad. | 34419 |
 | Business Tools | Unable to configure business user authorization by entities, for example by specific regional catalog or promotion book. This is because the new Business Tools live outside of the Sitecore app space, so it was necessary to provide a new authentication mechanism. The new Identity Server is provided as part of the Commerce release package which communicates with the Membership Provider within Sitecore to grant role-based access to the business tools. | N/A |
 | Storefront | Cross-brower support is not fully implemented. The solution has been developed and tested on Google Chrome. Mozilla Firefox is very close to being fully supported, with a few exceptions like no mock images appear in place of product images when applying the 'Storefront Mock-up with mock images' theme. | 35136 |
 | Storefront | It is not possible to put presentations directly on Catalog items in Sitecore and target them directly in the browser. | 36076 |
 | Storefront | The SXA Carousel component on Storefront home page is not always displayed on the first slide of the carousel. When the carousel is showing the first slide (query parameter "Carousel=0") and the customer navigates to another page and back again, the carousel slide will not show up again. | 35271 |
 | Storefront | Promoted products on the Storefront home page under headingOn Sale Televisions turns up empty. This is due to the query being used is targeting index field OnSale, which is not present in the index. Workaround: update the query to not target the OnSale field. | 36074 |
 | Storefront | Using virtual directories when creating and configuring SXA Storefront sites in SXA is not fully working correctly. | 35904, 34712, 35725 |
 | Storefront | Related products do not display on the product detail page even though the component is inserted on the page. This is because the fieldscontaining links to related products of different types changed on the product template and from the data provider in CE Connect. The Related Products component is targetingthe wrong field. | 32104 |
 | Storefront | Lacking JsonAntiForgeryToken implementation for all controllers and actions in Storefront solution | 33062 |
 | Storefront | Registered commerce users on different sites could login to all Storefront sites. Commerce Connect by default only recognize one security domain in Sitecore whereas each site should have it's own separate domain. Workaround: change the implementation of the User and Customer repositories to work with individual domains per site. | 34064 |
 | Storefront | Creating storefront sites when in another language than English will have some parts of the content turn up in English anyway. | 35907 |
 | Storefront | Tier-1 language translation files: Japanese, German, Chinese and Danish are not included in the release package. These files will be added after the release, as separate download files on the Sitecore XC 9.0 Initial Release page on dev.sitecore.net. | 26941 |
 | Deployment | Deploy-Sitecore-Commerce.ps1 has incorrect path forSXAStorefrontCatalogModuleFullPath. Should be ..\Sitecore Commerce Experience Accelerator Habitat Catalog*.zip based on extracted files in package | 36046 |
 | Deployment | Deploy-Sitecore-Commerce.ps1 has incorrect path for SitecoreCommerceEngineZipPath. Should be ..\Sitecore.Commerce.Engine.2.*.zip based on deployment guide instructions | 36046 |
 | Deployment | The following error is returned when running Deploy-Sitecore-Commerce.ps1 when trying to deploy the Storefront:  "Error occurred: The remote server returned an error: (424) Method Failure...".  This error message can be ignored.  <br /> | 35894 |
 | Deployment | Deploying to an Azure App Service may fail intermittently when deploying all of Sitecore XP, Sitecore XC, SXA, and SXA Storefront, and when "deployExmDds" is set to true. This occurs because the bootloader does not correctly remove the locks after has finished processing. Workaround: remove “App_Data\Maintenance_lock”. And if it exists, remove file "app_offline.htm". And, if file "default.htm" gets renamed to "default.htm.sitedown" then rename it back to "default.htm". | 32606 |
 | App Compat | Sitecore XC 9 does not support Windows Server 2012 (even though Sitecore XP does). | 32831 |

## Compatibility

Refer to the Installation Guides (On Premises or Azure App Service) for software pre-requisites.

  

 | The Commerce Server Connect (CS Connect) package has also been removed. Applicable functionality has been moved to Commerce Engine Connect (CE Connect). |

 | The Commerce Server Connect (CS Connect) package has also been removed. Applicable functionality has been moved to Commerce Engine Connect (CE Connect). |
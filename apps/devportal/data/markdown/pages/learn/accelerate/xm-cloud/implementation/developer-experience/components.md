---
title: 'Component Design Best Practices'
description: 'This recipe provides general guidance on best practices when designing components and variants/versions.'
hasSubPageNav: true
hasInPageNav: true
---
## Problem
There are several ways to create components in XM Cloud. Developers might not be able to find the optimal way for implementing Components.

## Solution

### Modular Components
Make sure that the appearance and functionality of components does not depend on components being nested/structured any particular way. Components need to be built in a way that keeps them independent, modular, and interchangeable, so that Content Authors remain free to move components around on a page however they want.

###  Consistent Naming Conventions
Always align on component naming conventions that parallel how components are structured in Sitecore. 
Components will be created under the `sitecore/Layout/Renderings/Project/<site collection name>`. Out of the box (Headless SXA) components have been created under `sitecore/Layouts/Renderings/Feature/Headless Experience Accelerator`. In your source code, the component implementations (.tsx files) can be found using the same name under `./src/<site collection name>/src/components`. 
Only components that directly match to a rendering item should be stored at that location.
Components should be structures into folders that grouping business functionalities. 
For example, when creating components that display product data in XM Cloud there is a "Products" renderings folder that houses component(s) specific to the Product Details Page, `/sitecore/layout/renderings/project/<site collection name>/Products`. The templates would be located in `/sitecore/templates/project/<site collection name>/Products`. Your React/Next.js component files would be under `./src/<site collection name>/src/components/Products`. 

### React/Next.js Component Structure
Each rendering item in XM Cloud must have a matching React/Next.js component under `./src/<site collection name>/src/components/<folder>`. Only components that map directly to a rendering item should be located there, as this is where the component factory looks to register XM Cloud components for JSS.
It is good practice to build smaller, simple components, atoms, that are then used to create more complex components, molecules. For these simple components, the .tsx files must be stored outside the components folder. A suggestion would be: `./src/<site collection name>/src/atoms/<folder>`. This will prevent the component factory from becoming bloated with components that it will never directly use.

### Export Only Content Editable Components
Create as many JavaScript components in code as you wish, but only export the components that are intended to be used by Content Authors.

### Use JavaScript SDK (JSS)
JSS is middleware for JavaScript components interfacing with the Sitecore API. Using JSS is along with Headless SXA is a must as it solves connecting to the Sitecore API to get layout and content. The JSS SDK also solves that components remain editable in the WYSIWYG editors of XM Cloud (Pages; Experience Editor)
Learning JSS takes time, and following the project structure that JSS dictates requires developers to give up control and work in a new way. However, even with this overhead in mind, it is still pays off to use JSS, as it provides many benefits and will save teams time in the long term. Building directly against the Sitecore API is not recommended, and teams who attempted to do this struggled.
JSS helpers abstract away the specifics of the API. This means that you won’t have to change your components as much if you change Sitecore or JSS versions. When your front-end and back-end communicate through an interface, they are abstracted from each other’s changes.
Additionally, using JSS helpers ensures that all content displayed in components is editable by Content Authors in the WYSIWYG authoring interface.

### Use Placeholders
Do not define the nesting structure of components through code. Instead, use the Placeholder component provided by JSS. Based on different placeholder names define placeholder restrictions so authors are guided what components to use where. Components that are not relevant for a page are not even shown in Pages. 

### Hardcoded Text/Multimedia
Do not hardcode any text or images into components. Instead, use the Field components provided by JSS.

### Rendering Variants
UI variations of components considering the same data source template have to be handled via rendering variants. 
The Rendering Variant item will be created under `/sitecore/content/<site-collection-name]/<site-name>/Presentation/Headless Variants/<component-name>`. The implementation of a variant is handled within the component implementation. See Promo Component as Example. 
Name Headless Variant definition items same as the variant in code using short prescriptive names. Use thumbnails to identify different variants in Pages. 
Do not exceed the number of 10 variants per components. 

### Discussion
Component Builder Components / XM Cloud Components
The Component Builder also know as XM Cloud Components is currently in early access. Once generally available this recipe will be reworked to include the Component Builder. 

###  Product Gaps
•	Available Renderings Setup do not show effect in Pages
•	XM Cloud Component builder does not work with placeholder restrictions

---
title: 'Component Design Best Practices'
description: 'This recipe provides general guidance on best practices when designing components and variants/versions.'
area: ['accelerate']
---

## Problem

There are several ways to create components in XM Cloud. Developers might not be able to find the optimal way for implementing Components.

## Solution

### Modular Components

Make sure that the appearance and functionality of components does not depend on components being nested/structured any particular way. Components need to be built in a way that keeps them independent, modular, and interchangeable, so that Content Authors remain free to move components around on a page however they want.

### Consistent Naming Conventions

Always align on component naming conventions that parallel how components are structured in Sitecore.

Components should be created under the `sitecore/Layout/Renderings/Project/<site collection name>`. This folder can contain sub-folders to logically group components.

Out of the box (Headless SXA) components have been created under `sitecore/Layouts/Renderings/Feature/Headless Experience Accelerator`. In your source code, the component implementations (`.tsx` files) can be found using the same name under `./src/<site collection name>/src/components`. These components can be moved into a sub-folder that makes logical sense for the project.

Only components that directly match to a rendering item should be stored at that location.

Components should be structured into folders that group functionalities from a business standpoint, not by technical similarities. For example, when creating components that display product data in XM Cloud there is a "Products" renderings folder that houses component(s) specific to the Product Details Page, `/sitecore/layout/renderings/project/<site collection name>/Products`. The templates would be located in `/sitecore/templates/project/<site collection name>/Products`. Your React/Next.js component files would be under `./src/<site collection name>/src/components/Products`.

### Create Components by Cloning only

Components should be created by cloning an existing OOTB component. Details of this process are found in <TextLink as="span" displayInline="true" text="this recipe" href="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" hideIcon="true" />

### React/Next.js Component Structure

Each rendering item in XM Cloud must have a matching React/Next.js component under `./src/<site collection name>/src/components/<folder>`. Only components that map directly to a rendering item should be located there, as this is where the component factory looks to register XM Cloud components for JSS.

It is good practice to build smaller, simple components, atoms, that are then used to create more complex components, molecules. For these simple components, the .tsx files must be stored outside the `components` folder. A suggestion would be: `./src/<site collection name>/src/atoms/<folder>`. This will prevent the component factory from becoming bloated with components that it will never directly use.

### Export Only Content Editable Components

Create as many JavaScript components in code as you wish, but only export the components that are intended to be used by Content Authors and map directly to a rendering item or Headless Variant. Click here for <TextLink as="span" displayInline="true" text="Example Code" href="/learn/accelerate/xm-cloud/appendix-ii/example-code/exported-components-example" hideIcon="true" />

When exporting components, make sure these match the name of any headless variants assigned to the component.

### Use Placeholders

Do not define the nesting structure of components through code. Instead, use the Placeholder component provided by JSS. Based on different placeholder names define placeholder restrictions so authors are guided what components to use where. By using placeholder restrictions only those components are listed in Pages Editor that are relevant to that particular page and it’s placeholders.

### Hardcoded Text/Multimedia

Do not hardcode any text or images into components. Instead, use the equivalent Field components provided by JSS. e.g. `<Text field={} />`, `<Image field={} />` etc.

### Headless Variants

UI variations of components that use the same data source template should to be handled via headless variants.

The Headless Variant item will be created under `/sitecore/content/<site-collection-name]/<site-name>/Presentation/Headless Variants/<component-name>`. The implementation of a variant is handled within the component implementation. Here is an example

Name Headless Variant definition items same as the variant in code using short prescriptive names. Use thumbnails to identify different variants in Pages.

## Discussion

### Component Builder Components / XM Cloud Components

The Component Builder also know as XM Cloud Components is currently in early access. Once generally available this recipe will be reworked to include the Component Builder.

## Related Recipes

<Row columns={4}>
  <Link title="Creating new components" link="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" />
</Row>

## Related Documentation

<Row columns={4}>
  <Link title="Project Structure" link="https://developers.sitecore.com/learn/faq/xm-cloud-recommended-practices/project-structure#component-design" />
</Row>

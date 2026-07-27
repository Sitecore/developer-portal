---
title: 'Component Design Best Practices'
description: 'General guidance on best practices when designing components and variants/versions.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-03-31'
created: '2023-12-22'
audience: ['Architect','Project Manager','Technical Implementer']
---

## Context

Developers face multiple ways to create components in XM Cloud, and may struggle to find the optimal way to implement components that are modular, reusable, and easily customizable by Content Authors, all while maintaining clean and scalable code.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
Starting with the basics, make sure that the appearance and functionality of components does not depend on components being nested/structured any particular way. Components need to be built in a way that keeps them independent, modular, and interchangeable, so that Content Authors remain free to move components around on a page however they want.

### Consistent Naming Conventions
Always align on component naming conventions that parallel how components are structured in Sitecore.

- **Component Naming**: Use PascalCase for component names (e.g., <code>ComponentOne</code>, <code>ComponentTwo</code>) to follow community standards.
- **Field/Variable Naming**: Use camelCase for component fields and JavaScript variables (e.g., showImage) to ensure consistency and readability.

### Best Practice for Creating Components
Components should be created by cloning an existing OOTB component. This approach is faster, more consistent, and it ensures that the new component inherits a standard structure and behavior, reducing the risk of errors and promoting efficiency. Details of this process are found in the [Creating New Components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components) recipe.

### Component Folder Structure

Each rendering item in XM Cloud should correspond to a matching React/Next.js component located in `./src/<site collection name>/src/components/<folder>` . Only components that map directly to rendering items should be stored in this location, as this is where the component factory registers XM Cloud components for JSS.

For reusable, simpler components (atoms), store them in a separate `./src/<site collection name>/src/atoms/<folder>` folder. This keeps the component factory focused on rendering components, avoiding unnecessary clutter from components that aren't directly tied to rendering items. Components should be grouped by business functionality rather than technical similarities. For example, if you're building components related to product details, they should be placed in the "*Products*" folder, both in Sitecore `/sitecore/layout/renderings/project/<site collection name>/Products` and in the source code `./src/<site collection name>/src/components/Products`.

For components with multiple rendering variants, the main component file (e.g., ProductPromo.tsx) should be located at the root level for component factory registration, while all variants (such as `ProductPromoWithImage.tsx`, `ProductPromoNoImage.tsx`, and `ProductPromoFeatured.tsx`) should be organized within a dedicated "Variants" subfolder to maintain clear separation while preserving the association with the parent component.

```typescript
./src/<site collection name>/src/components/Products/
├── ProductPromo.tsx               # Main component registered with component factory
└── Variants/                      # Dedicated folder for variants
    ├── ProductPromoWithImage.tsx  # Specific variants
    ├── ProductPromoNoImage.tsx
    └── ProductPromoFeatured.tsx
```

### Export Only Content Editable Components
Create as many JavaScript components in code as you wish, but only export the components that are intended to be used by Content Authors and map directly to a rendering item or Headless Variant. 

An example can be found in the [appendix](/learn/accelerate/xm-cloud/appendix-ii/example-code/exported-components-example) - this example code uses different naming convention. When implementing components in our codebase, please follow our established camelCase naming conventions rather than the exact naming shown in examples.

```typescript
// Internal components (not exported)
import InternalUtilityComponent from './components/UtilityComponent';
import AnotherHelperComponent from './components/HelperComponent';

// Content Author facing components
import HeroComponent from './components/Hero';
import CardListComponent from './components/CardList';
import TestimonialComponent from './components/Testimonial';

// Only export components intended for Content Authors
// These should match the name of headless variants
export {
  HeroComponent,
  CardListComponent,
  TestimonialComponent
};

// Do NOT export internal components
// export { InternalUtilityComponent, AnotherHelperComponent }
```

When exporting components, make sure these match the name of any headless variants assigned to the component.

### Use Placeholders
Do not define the nesting structure of components through code. Instead, use the Placeholder component provided by JSS. Based on different placeholder names define placeholder restrictions so authors are guided what components to use where. By using placeholder restrictions only those components are listed in Pages Editor that are relevant to that particular page and it’s placeholders.

For more information, please review the [Placeholders](/learn/accelerate/xm-cloud/implementation/developer-experience/using-placeholders) recipe.

### Hardcoded Text/Multimedia
Do not hardcode any text or images into components. Instead, use the equivalent Field components provided by JSS. e.g. `<Text field={} />, <Image field={} />`.

### Headless Variants
UI variations of components that use the same data source template should be handled via headless variants.

The Headless Variant item will be created under `/sitecore/content/<site-collection-name]/<site-name>/Presentation/Headless Variants/<component-name>`. The implementation of a variant is handled within the component implementation. Here is an example

Name Headless Variant definition items same as the variant in code using short prescriptive names. Use thumbnails to identify different variants in Pages.

### Wrap JSS Dependencies to Avoid Direct Usage in Custom Components
When working with JSS components like `JssImage`, `JssLink`, and `JssRichText`, it's best practice to wrap these dependencies in custom components instead of using them directly in your page or component implementations.

This approach offers several benefits, including:
- Any custom behavior, such as transformations, additional checks, or formatting, can be encapsulated in one place, making it easier to update and maintain.
- This keeps your custom components decoupled from JSS components, making your codebase more modular and easier to adapt to future changes in JSS.
- With custom wrappers, you can ensure that components like images, links, or rich text always follow a consistent format, regardless of where they’re used in the project.
- Ensures proper application of styles in both normal and empty-field editing states, especially important with CSS frameworks like Tailwind.
- Creates a buffer that protects against breaking changes in JSS upgrades.
- Your page or component code becomes much cleaner, focusing solely on the layout and structure while delegating any special handling to the wrapper components

## Insights
The following example detail out how to wrap JSS Dependencies to avoid direct Usage in custom components.

### Example 1: Wrapping JssImage with Custom Logic
Here’s an example of how to implement a custom wrapper for the JssImage component to handle transformations or custom logic. This is useful for cases where you need to apply custom transformations to media URLs.

```typescript
import React from 'react';
import { NextImage as JssImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { transformUrl } from 'components/utility/transformUrl';

interface WrappedImageProps {
  field: ImageField;
}

export const WrappedImage: React.FC<WrappedImageProps> = ({ field }) => {
  // Ensure that src is defined before applying transformUrl
  const src = field.value?.src;

  // Apply transformation only if src exists
  const transformedUrl = src ? transformUrl(src) : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D'; // Fallback to a very small image if src is undefined

  const modifiedField = {
    ...field,
    value: {
      ...field.value,
      src: transformedUrl, // Replace original URL with transformed URL
    },
 };

  // Return the JssImage component with the updated field
  return <JssImage field={modifiedField} />;
};
```
In your custom components, you can now replace direct usage of JssImage with the WrappedImage component:

```typescript
export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={component test promo ${props.params.styles}} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <WrappedImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                <WrappedRichText field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promolink">
              <WrappedLink field={props.fields.PromoLink} />
            </div>
          </div>
        </div>
        
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};
```
### Example 2: CSS Styling Considerations with Tailwind 
This approach is particularly important when using CSS frameworks such as Tailwind. When upgrading between JSS versions, we encountered a significant styling issue within the Sitecore Pages editor when passing tailwind CSS classes directly to JSS components. The `withEmptyFieldEditing` higher-order function in newer JSS versions doesn't  propagate class names to the `defaultEmptyFieldEditingComponent`. As a result, when fields are empty in the Pages editor, the styling breaks completely because the CSS classes aren't applied to the placeholder elements that represent empty fields.

```typescript
// ❌ Problematic approach - using JSS components directly
<Text field={props.fields.title} className="text-xl font-bold my-4" />

// ✅ Recommended approach - wrap in custom components
<CustomText field={props.fields.title} className="text-xl font-bold my-4" />
```

```typescript
// components/fields/CustomText.tsx
import React from 'react';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface CustomTextProps {
  field: TextField;
  tag?: string;
  className?: string;
}

// Custom empty component that properly handles className
const EmptyText: React.FC<CustomTextProps> = ({ className, tag }) => {
  const Tag = tag as keyof JSX.IntrinsicElements || 'span';
  return <Tag className={className}>[Empty Text Field]</Tag>;
};

export const CustomText: React.FC<CustomTextProps> = ({ 
  field, 
  tag = 'span',
  className = '',
  ...rest 
}) => {
  return (
    <Text 
      field={field} 
      tag={tag}
      className={className}
      emptyFieldEditingComponent={<EmptyText className={className} tag={tag} />}
      {...rest}
    />
  );
};
```
This way, there won’t be JSS dependencies all over the codebase and we can use our custom components instead.


<figure><img src="/images/learn/accelerate/xm-cloud/tailwind-considerations.png" alt="Tailwind Considerations"/><figcaption></figcaption></figure>

## Related Recipes

<Row columns={2}>
  <Link title="Creating new components" link="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" />
  <Link title="Project Structure" link="/learn/accelerate/xm-cloud/pre-development/project-architecture" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Deploy a project and environment" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-a-project-and-environment.html" />
  <Link title="XM Cloud development" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-development.html" />  
</Row>

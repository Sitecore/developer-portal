---
title: 'Creating a Component Gallery'
description: 'Best practices for designing a component gallery'
hasSubPageNav: true
hasInPageNav: false
---

## Problem

To empower creatives and marketers to independently craft compelling experiences without reliance on developer resources, it is imperative that they possess a comprehensive understanding of the custom components available. This includes knowledge of their intended usage and awareness of the various potential variants that a component may exhibit.

## Solution

### Component Gallery Website

The Component Gallery Website, a standalone Next.JS/JSS site deployed in parallel with the main site, serves as a comprehensive showcase for all available components. It offers concise descriptions of each component's purpose, showcases their appearance with various customizable options, and provides relevant documentation. Drawing parallels to Storybook, this tailored platform is specifically designed to cater to the needs and preferences of the marketer persona, facilitating a seamless and intuitive component exploration experience.

### Organizational Approach

Select a way to organize the component gallery that will be easily understood by your content authors. The recommended approach is to follow how you have setup the `Available Renderings` section of your site.

1. **Navigation**: Create top level navigation that matches the Available Renderings groupings.
2. **Component Page**: For each component create a page using the basic generic page template.

For each page, follow the next guidelines for the content.

### Content

For each component, ensure the following key information is provided:

1. **Page Title**: Should match the name of the component
2. **Description**: Concisely explain the purpose and intended usage of the component. Include the fields the component will display, when and how the component should be used and any restrictions on where the component can be placed.
3. **Rendering Parameters**: Detail out all rendering parameter options for the component, what options are available for each parameter and what effect it has on the component.
4. **Insertion Guide**: Provide a step-by-step example demonstrating how to insert the component into an XM Cloud page. Include any specific requirements or considerations for proper placement.
5. **Variants**: Add the component to the page showcasing each headless variant, include a description of the variant and its use case.

<Alert status="info">
  <AlertIcon />
    It it not required to demonstrate all possible rendering parameter changes, but it may be useful to create examples on the page for specific use cases.
</Alert>

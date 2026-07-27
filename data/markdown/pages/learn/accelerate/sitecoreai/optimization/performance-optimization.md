---
title: 'Performance optimization for Web applications'
description: 'Best practices aimed at optimizing web application performance.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-04-04'
created: '2025-03-31'
audience: ['Architect','Technical Implementers','Solution Architects']
---

## Context
Many web applications suffer from poor performance due to suboptimal implementation practices. Developers often create pages and components that load slowly, consume excessive resources, or respond sluggishly to user interactions. Meanwhile, backend API routes and data fetching may be inefficiently designed, creating bottlenecks that prevent even well-optimized frontends from performing well. 

This recipe provides targeted optimization strategies for Next.js applications to address these issues.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
To improve the performance of your web application and deliver a faster, more responsive user experience, review the following guidance. Using Next.JS? Review how to How to [Optimize Next.js + Sitecore JSS](https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss).

### Minimize File Size and Bundle Optimization

JavaScript bundle size directly impacts load time, parse time, and execution time of your application. Large bundles are the leading cause of poor Time to Interactive (TTI) and First Input Delay (FID) metrics. Studies show that each additional 100KB of JavaScript adds about 350ms to load time on average mobile devices.

Different frameworks provide different ways to reduce bundle sizes and optimize file loading:
- Analyze your bundles to identify large dependencies - [next/bundle-analyzer](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling) for Next.js or [webpack-bundle-analyzer with ng build --stats-json](https://www.npmjs.com/package/webpack-bundle-analyzer) for Angular.
- Implement tree-shaking to eliminate unused code. Next.js provides automatic tree-shaking with webpack (enabled by default), while Angular has this enabled by default in Angular CLI.
- Choose lighter alternatives for common libraries such as:
  - Moment.js (330KB) → date-fns (tree-shakeable)
  - Lodash (320KB) → lodash-es (tree-shakeable imports)
  - jQuery (87KB) → Native DOM APIs

### Code Splitting with next/dynamic

Code splitting allows you to break your application into smaller chunks that load on demand, rather than forcing users to download your entire application upfront. This is especially important for large applications where users might only interact with a small portion of the total functionality.

<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>Angular</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
        Next.js's `dynamic` works seamlessly with SSR, provides more configuration options and automatically handles loading states.

        ```typescript
        import dynamic from 'next/dynamic';

        // This component will only be loaded when it's actually rendered
        const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
          loading: () => <div>Loading...</div>,
          // Disable SSR for components that don't need it
          ssr: false
        });

        function ProductPage() {
          return (
            <div className="container">
              <h1>Product Details</h1>
              <HeavyComponent />
            </div>
          );
        }
        ```

      </TabPanel>
      <TabPanel>
        Angular: Using lazy loading with <code>ViewContainerRef</code>

         ```typescript
        const { HeavyComponent } = await import('./heavy.component');
        this.viewContainerRef.createComponent(HeavyComponent);
         ```

      </TabPanel>
  </TabPanels>
</Tabs>


### Optimize Fonts

Web fonts can cause significant performance issues if not properly optimized, including render blocking and layout shifts. Next.js's font optimization:
- Eliminates render blocking by asynchronously loading fonts
- Prevents layout shifts with size adjustments
- Optimizes font loading with preload links


<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>Angular</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
        Next.js's use `next/font/foogle`

      ```typescript
      import { Inter } from 'next/font/google';

      // Load Inter font with subset optimization
      const inter = Inter({
        subsets: ['latin'],
        display: 'swap',
      });

      export default function MyApp({ Component, pageProps }) {
        return (
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        );
      }
      ``` 

      </TabPanel>
      <TabPanel>
        Angular standard approach.

         ```typescript
          @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
         ```

      </TabPanel>
  </TabPanels>
</Tabs>




### Optimize Images with JSS NextImage Component

 Images typically account for 50-80% of a webpage's total size. Unoptimized images cause poor Largest Contentful Paint (LCP) times and Cumulative Layout Shift (CLS) issues. In Sitecore JSS applications, properly optimizing Sitecore media library images is crucial for performance.

 <Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>Angular</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
        The Sitecore JSS SDK provides a specialized NextImage component that combines the performance benefits of Next.js image optimization with Sitecore's media handling capabilities:

        ```typescript
        import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

        const MyComponent = (props) => (
          <div>
            <NextImage
              field={props.fields.image}
              editable={false}
              unoptimized={true}
              imageParams={{ mw: 100, mh: 50 }}
              height="50"
              width="94"
            />
          </div>
        );

        export default MyComponent;
        ```
        <br/><br/>
        For more details on all available options and additional examples, refer to the complete documentation on configuring the [NextImage component](https://doc.sitecore.com/xmc/en/developers/jss/22/jss-xmc/the-jss-nextimage-component.html).

      </TabPanel>
      <TabPanel>
        Angular's standard approach:

        ```typescript
            import { Image } from '@sitecore-jss/sitecore-jss-angular'

            @Component({
              template: `
                <sc-image [imageField]="fields.image"
                          width="50"
                          height="94">
                </sc-image>
              `
            })
        ```

      </TabPanel>
  </TabPanels>
</Tabs>

### Link  Component Optimization

In complex components like carousels, sliders, or interactive galleries, using Next.js's next/link component directly can provide more flexibility while still maintaining performance benefits. This approach works well when you need custom interaction behavior while preserving Next.js's performance optimizations.

<Tabs>
  <TabList>
    <Tab>Next.JS</Tab>
    <Tab>Angular</Tab>
  </TabList>
    <TabPanels>
      <TabPanel>
The following is an abbreviated example of a *Horizontal Image Scroller* component that uses next/link within a custom component:

```typescript
import React, { useRef, useState } from 'react'
import { 
  StyledGridWrapper, CarouselItemView, CarouselItemEdit 
} from './horizontal-image-scroller.styles'
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs'
import { Image } from '@sitecore-jss/sitecore-jss-nextjs'
import SectionHeader from '@components/common/section-header/section-header'
import Link from 'next/link'

const HorizontalImageScroller = ({ fields, params }) => {
  // Process items from Sitecore datasource
  const items = fields.data.datasource.children.results.map((r, idx) => ({
    ...r,
    _idx: idx + 1,
    _clone: false,
  }))

  const { sitecoreContext } = useSitecoreContext()
  const [clonesCount, setClonesCount] = useState(null)
  const refShouldCancelClick = useRef(false)
  
  // Create clones for infinite scrolling effect
  let clonesBefore = []
  let clonesAfter = []
  
  if (clonesCount !== null && clonesCount > 0) {
    // Clone creation logic for infinite scrolling
    // ...abbreviated for example
  }

  // Prevent link navigation during scroll/drag interactions
  const onLogoLinkClick = (ev) => {
    if (refShouldCancelClick.current) {
      ev.preventDefault()
    }
  }

  // Choose the right carousel item component based on editing mode
  const CarouselItem = sitecoreContext.pageEditing ? CarouselItemEdit : CarouselItemView

  return (
    <StyledGridWrapper backgroundColor={params?.BackgroundColor}>
      <SectionHeader
        subtitle={fields.data?.datasource?.subHeadingField?.subHeading}
        heading={fields.data?.datasource?.headingField?.heading}
        // Additional props abbreviated
      />
      
      <div className="scroller-container">
        {[...clonesBefore, ...items, ...clonesAfter].map((brand, index) => (
          <CarouselItem
            key={index}
            data-logo-index={brand._idx}
            data-is-clone={brand._clone}
          >
            {/* Using next/link for carousel items */}
            <Link
              href={sitecoreContext.pageEditing ? '#' : `${brand?.linkField?.link?.value.href}`}
              onClick={onLogoLinkClick}
              draggable={false}
            >
              <Image
                field={brand.imageField.image}
                alt={brand.linkField.link.value.text}
                draggable={false}
              />
            </Link>
          </CarouselItem>
        ))}
      </div>
      
      {/* Footer and CTA button abbreviated */}
    </StyledGridWrapper>
  )
}

export default HorizontalImageScroller
```

      </TabPanel>
      <TabPanel>
        Angular's standard approach:

        ```typescript
            import { RouterLink } from '@angular/router'

            @Component({
              template: `
                <a [routerLink]="fields.link.value.href"
                  [target]="fields.link.value.target">
                  {{fields.link.value.text}}
                </a>
              `
            })
        ```

      </TabPanel>
  </TabPanels>
</Tabs>



### Backend API Route Optimization

Inefficient API routes can create high Time to First Byte (TTFB), which directly impacts user experience. Optimizing API routes with proper caching and middleware can reduce response times by 40-80%.

```typescript
// pages/api/products.js
import { createRouter } from 'next-connect';

const router = createRouter();

// Add caching headers middleware
router.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
  next();
});

// Handle GET request
router.get(async (req, res) => {
  const { category, limit = 10 } = req.query;
  
  try {
    // Process data in parallel when possible
    const [products, categories] = await Promise.all([
      fetchProducts(category, parseInt(limit)),
      fetchCategories()
    ]);
    
    return res.json({ products, categories });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default router.handler();
```
<br/><br/>
Key techniques that should be reviewed include:
- Adding proper caching headers
- Processing operations in parallel with Promise.all
- Implementing query parameters for filtering and pagination
- Using middleware for common operations

## Related Recipes

<Row columns={2}>
  <Link title="Web Developer Experience" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/web-developer-experience" />
  <Link title="Component Design Best Practices" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/component-design-best-practices" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Configuring the JSS NextImage component" link="https://doc.sitecore.com/xmc/en/developers/jss/22/jss-xmc/the-jss-nextimage-component.html" /> 
</Row>


## Additional Links

<Row columns={2}>
<Link title="How to Optimize Next.js + Sitecore JSS" link="https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss" />
</Row>
---
title: 'Optimizing Performance for Next.JS Web app'
description: 'Best practices aimed at optimizing Next.js application performance.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect','Technical Implementers','Solution Architects']
---

## Context
Many Next.js applications suffer from poor performance due to suboptimal implementation practices. Developers often create pages and components that load slowly, consume excessive resources, or respond sluggishly to user interactions. Meanwhile, backend API routes and data fetching may be inefficiently designed, creating bottlenecks that prevent even well-optimized frontends from performing well. 

This recipe provides targeted optimization strategies for Next.js applications to address these issues.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
To improve the performance of your web application and deliver a faster, more responsive user experience, review the following guidance.

### Minimize File Size and Bundle Optimization

JavaScript bundle size directly impacts load time, parse time, and execution time of your application. Large bundles are the leading cause of poor Time to Interactive (TTI) and First Input Delay (FID) metrics. Studies show that each additional 100KB of JavaScript adds about 350ms to load time on average mobile devices.

Next.js provides several ways to reduce bundle sizes and optimize file loading:
- Use `next-bundle-analyzer` to identify large dependencies that may be unnecessarily bloating your application. Often, a small number of packages account for the majority of bundle size.
- By using ES modules and avoiding side effects, you enable webpack to eliminate unused code. This can reduce bundle size by 20-40% in many applications.
- Replace large libraries like Moment.js (330KB+) with smaller alternatives like date-fns (only imports what you use). This technique alone can save hundreds of kilobytes.
- Fine-tune Next.js's webpack settings to further optimize bundles for your specific needs.

### Code Splitting with next/dynamic

Code splitting allows you to break your application into smaller chunks that load on demand, rather than forcing users to download your entire application upfront. This is especially important for large applications where users might only interact with a small portion of the total functionality.

Next.js's `dynamic` import is more powerful than React's native `lazy` as it works seamlessly with SSR, provides more configuration options and automatically handles loading states.

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

### Optimize Fonts with next/font

Web fonts can cause significant performance issues if not properly optimized, including render blocking and layout shifts. Next.js's font optimization:
- Eliminates render blocking by asynchronously loading fonts
- Prevents layout shifts with size adjustments
- Optimizes font loading with preload links
- Self-hosts Google Fonts to avoid third-party requests

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

### Optimize Images with JSS NextImage Component

 Images typically account for 50-80% of a webpage's total size. Unoptimized images cause poor Largest Contentful Paint (LCP) times and Cumulative Layout Shift (CLS) issues. In Sitecore JSS applications, properly optimizing Sitecore media library images is crucial for performance.

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
For more details on all available options and additional examples, refer to the complete documentation on configuring the [NextImage component](https://doc.sitecore.com/xp/en/developers/hd/latest/sitecore-headless-development/configuring-the-jss-nextimage-component.html#examples).

Key benefits of next/image include:
- **Automatic WebP/AVIF conversion**: Modern formats like WebP are 25-35% smaller than JPEG at equivalent quality, while AVIF can be up to 50% smaller. This significantly reduces data transferred to users.
- **Responsive sizing with the `sizes` attribute**: Delivers appropriately sized images for each device, preventing mobile users from downloading desktop-sized images.
- **Prevention of Cumulative Layout Shift (CLS)**: By requiring width and height props, Next.js reserves the correct space before images load, eliminating jarring layout shifts that frustrate users.
- **Lazy loading by default**: Images below the fold only load when they're about to enter the viewport, saving bandwidth and speeding up initial page load.
- **Automatic image optimization**: On-demand resizing and optimization reduces storage requirements and improves delivery speed.

### Using next/link in Custom Sitecore JSS Components

In complex Sitecore JSS components like carousels, sliders, or interactive galleries, using Next.js's next/link component directly can provide more flexibility while still maintaining performance benefits. This approach works well when you need custom interaction behavior while preserving Next.js's performance optimizations.

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
  <Link title="Configuring the JSS NextImage component" link="https://doc.sitecore.com/xp/en/developers/hd/latest/sitecore-headless-development/configuring-the-jss-nextimage-component.html" /> 
</Row>






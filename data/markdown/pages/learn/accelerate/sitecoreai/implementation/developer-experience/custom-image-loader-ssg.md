---
title: 'Custom Next.js Image Loader for SSG'
description: 'Implement a custom image loader for Next.js when using Static Site Generation (SSG), specifically for Sitecore XM Cloud projects'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-07-30'
created: '2025-07-30'
audience: ['Technical Implementers','Architects', 'Product Owner']
---

## Context
Static Site Generation (SSG) generates static HTML files at build time, and the default Next.js Image component (next/image) requires server-side functionality. For Sitecore XM Cloud projects, we need a custom solution that works with both development and production environments while maintaining image optimization capabilities.

## Execution
This use case is designed for teams deploying static Next.js sites using `output: "export"` who still want the full benefits of the `<Image />` component like responsive loading, lazy loading, and automatic format conversion. It’s especially useful when images are hosted on Sitecore Edge (or another CDN) and need to be optimized at build time.

If you’re using server-side rendering, a Node.js backend, or only local assets with no need for CDN support, stick with the default image loader for a simpler setup.

### Configure Next.js Image Setting
First, create or update next.config.js (headapps\nextjs-starter\next.config.js)

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Base configuration that applies to all environments
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

// Only apply these settings for production builds
if (process.env.NODE_ENV === "production") {
  nextConfig.output = "export";
  nextConfig.images = {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  };
}

module.exports = nextConfig;
```

### Custom Image Loader Implementation
 The custom image loader will live in `headapps/nextjs-starter/image-loader.ts` or `headapps/nextjs-starter/lib/image-loader.ts` in a standard project, which will determine the `images.loaderFile` property in our `next.config.js`.

 ```
 export default function sitecoreEdgeLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Check if this is already a full Sitecore Edge URL
  if (src.startsWith("https://edge.sitecorecloud.io/")) {
    const separator = src.includes("?") ? "&" : "?";
    return `${src}${separator}mw=${width}&q=${quality || 75}`;
  }

  // For relative paths, construct full Sitecore Edge URL
  const tenantId = "your-tenant-id";
  const imagePath = src.startsWith("/") ? src.slice(1) : src;

  return `https://edge.sitecorecloud.io/${tenantId}/media/${imagePath}?mw=${width}&q=${
    quality || 75
  }`;
}
```
<br/><br/>
For non-Sitecore CDN (Cloudflare, Cloudinary, etc.), please refer to [Next.js Image Configuration Documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js/images).

### Usage Example
```
import Image from "next/image";
import { useState } from "react";

export default function MyComponent() {
  // Example Sitecore Edge image URL
  const sitecoreImageUrl = "https://edge.sitecorecloud.io/your-tenant-id/media/example.png";
  
  // Get appropriate image source based on environment
  const getImageSrc = () => {
    if (process.env.NODE_ENV === "production") {
      return sitecoreImageUrl;
    }
    return "/sample-image.jpg"; // Local image for development for example
  };

  return (
    <Image
      src={getImageSrc()}
      alt="Example Image"
      sizes="(max-width: 600px) 100vw, 600px"
      width={600}
      height={400}
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "auto",
      }}
    />
  );
}
```

## Insights
Image optimization is critical to performance and custom image loader implementation trades development flexibility for production-ready performance by conditionally modifying behavior based on environment, taking advantage of both Next.js's native capabilities along with Sitecore Edge capabilities.

**Key Features**
- Enables full compatibility with `output: "export"` in static sites.
- In production, images are delivered and optimized via Sitecore Edge, reducing CDN load and improving speed.
- Ensures proper static generation with no runtime dependency or server-side rendering fallback.

**Environment-Specific Behavior**
- For Developement use Next.js’s built-in image optimization via Node.js server for quick iteration.
- For Production it offloads image transformation and delivery to Sitecore Edge, ensuring scalable, high-performance image handling.


### Built-in Benefits from Next.js Image Component
- Automatic format conversion to WebP/AVIF for modern browsers.
- Responsive images served based on device size and resolution.
- Lazy loading to reduce initial load time.
- No layout shift with required width and height props.
- Automatic image optimization for size and quality.
- Fully compatible with `output: "export"` making it ideal for fully static XM Cloud websites.
- Removes the need for a runtime image optimization service.
- Simplifies deployment pipelines by generating all required assets at build time.

### Recommended Practices
To get the most out of your image optimization setup, keep in mind the following practices:

| Category              | Best Practices                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| **Environment Variables** | - Store tenant-specific info (e.g., `NEXT_PUBLIC_SITECORE_TENANT_ID`) securely.  <br/> - Use different values for dev, staging, and prod environments. <br/> - Never commit sensitive or private data to version control. |
| **Image Sizing**         | - Always include `width` and `height` props to maintain layout stability. <br/> - Use the `sizes` attribute for responsive behavior across breakpoints. <br/> - Apply `priority` for above-the-fold or critical images to preload early. |
| **Performance**          | - Use balanced image quality (75% is recommended). <br/> - Prioritize loading for key hero banners or primary images. <br/> - Use Sitecore Edge CDN for global image delivery. |


## Related Recipes

<Row columns={2}>
  <Link title="Component Design Best Practices" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/component-design-best-practices" />
  <Link title="Web Developer Experience" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/web-developer-experience" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="The JSS NextImage component" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/the-jss-nextimage-component.html" />
  <Link title="Configuring the JSS NextImage component" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/configuring-the-jss-nextimage-component.html#idp17480" />  
</Row>


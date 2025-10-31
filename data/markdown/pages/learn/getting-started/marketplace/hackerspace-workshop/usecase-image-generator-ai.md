# Use case: AI Image Generator with Vibe Coding (AI-Powered Development)

Build an ultra-compact AI-powered image generator that integrates with Sitecore page context using **Vibe Coding with AI** for rapid, interactive development. This use case showcases how to leverage AI assistance to create contextual image generation using free AI services.

![AI Image Generator in Action](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/9710ee95f7b44b4a8139d2fc011517e5?v=f8fb84d1)

[Reference Repository](https://github.com/Sitecore/hackerspace-workshop/app/image-generator)

Extension Point: **Standalone**

## Summary

This tutorial demonstrates how to use **Vibe Coding with AI** to build a lean AI image generator that automatically detects the current Sitecore page context and generates relevant images using the free Hugging Face Stable Diffusion XL model. The extension showcases AI-assisted development workflows and integration with the Sitecore Marketplace SDK for real-time context updates.

**Prerequisites:** Before starting this tutorial, ensure you have completed the [Workshop Preparation Steps](index.md):
- ✅ Node.js 16+ and npm 10+ installed  
- ✅ VS Code or Cursor with GitHub Copilot
- ✅ Registered app in Developer Studio (choose **Standalone** extension point)
- ✅ App installed in your assigned environment
- ✅ Blok and Docs MCP configured in your IDE

Using **AI-driven prompts**, participants will rapidly scaffold and iterate on their image generator, experiencing the power of AI-assisted development while learning Sitecore integration patterns.

Key features built with AI assistance:
- Auto-detects page `displayName` from Sitecore context
- Real-time updates when navigating between pages
- Free AI image generation (no API keys required)
- One-click download functionality
- Ultra-compact and efficient codebase

## Implementation Steps

**Important:** This tutorial assumes you have a working Sitecore Marketplace app setup. If you haven't completed the preparation steps, please follow the [Workshop Setup Guide](index.md) first.

Follow these AI-powered steps to build your image generator using Vibe Coding:

1. Verify setup and create project structure with AI
2. Generate Marketplace SDK integration components
3. Create AI generation API endpoint using prompts
4. Build the main UI component with AI guidance
5. Implement download functionality and error handling
6. Test integration with Sitecore and optimize

### Step 1. Verify Setup and Create Image Generator Structure

**Prerequisites Check:** Ensure your scaffolded marketplace app is running on `http://localhost:3000` and visible in your Sitecore environment.

Now create the image generator structure within your existing marketplace app using AI.

**Prompt:** 
```
I have a working Sitecore Marketplace app created with the shadcn quickstart template. I need to add an AI image generator feature. Create:
- /app/image-generator route structure
- Image generator page components
- Proper routing and layout files
- Integration with existing marketplace provider
- Use existing shadcn/ui components (card, button, alert)

Build on the existing project structure without breaking current functionality.
```

**Expected Output:** New image generator route added to existing marketplace app structure.

**Test:** Navigate to `http://localhost:3000/image-generator` and verify the route exists (may show empty content initially).

### Step 2. Enhance Marketplace Integration for Image Generator

Your scaffolded app already has marketplace provider setup. Now enhance it for the image generator use case.

**Prompt:**
```
I have an existing marketplace app with provider setup. I need to enhance the image generator page to:
- Use the existing useMarketplaceClient hook
- Query "pages.context" to get current page information
- Access displayName from pageInfo for contextual prompts
- Handle cases where Sitecore context is not available
- Add proper TypeScript types for page context data

Show me how to integrate with the existing marketplace provider in the image generator component.
```

**Test:** Check that your image generator can access the marketplace client and log page context data.

### Step 3. Create AI Generation API with AI Assistance

Build the backend API endpoint for Hugging Face integration using AI prompts.

**Prompt:**
```
Create a Next.js API route (app/api/generate-image/route.ts) that:
- Accepts POST requests with a prompt parameter
- Calls Hugging Face Stable Diffusion XL API (stabilityai/stable-diffusion-xl-base-1.0)
- Handles rate limiting and model loading errors
- Converts image blob to base64 data URL
- Returns JSON response with imageUrl
- Includes proper error handling and status codes
- Supports optional HUGGINGFACE_API_TOKEN environment variable

Make it ultra-compact and efficient.
```

**Test:** Test the API endpoint with a sample prompt to ensure image generation works.

### Step 4. Build Main Component with AI

Generate the core image generator component using AI assistance.

**Prompt:**
```
Create an image generator React component (app/image-generator/components/image-generator-panel.tsx) that:
- Uses useMarketplaceClient hook to access Sitecore context
- Queries "pages.context" to get current page displayName
- Subscribes to page context changes for real-time updates
- Auto-fills prompt with "Create an image for [pageName]"
- Has states for: isGenerating, error, generatedImage, prompt
- Calls /api/generate-image endpoint
- Shows loading state with animated icon
- Displays generated image with Next.js Image component
- Includes download and "new image" buttons
- Uses shadcn/ui components (Card, Button, Alert)
- Has clean, centered layout with proper spacing
- Includes error handling and user feedback

Make it ultra-compact and focused.
```

**Test:** Navigate through different pages in Sitecore and verify the prompt updates automatically.

### Step 5. Implement Download Functionality with AI

Add proper image download capability using AI assistance.

**Prompt:**
```
Looking at the image generator component, enhance the download button functionality to:
- Convert base64 data URL to proper downloadable blob
- Handle base64 decoding properly (atob, Uint8Array, Blob)
- Create temporary download link with timestamp filename
- Trigger download and cleanup temporary elements
- Include error handling for download failures
- Use JPEG MIME type for proper file extension

Update the existing download button onClick handler with this robust implementation.
```

**Test:** Generate an image and verify the download button saves a proper JPEG file.

### Step 6. Complete Page Structure and Integration

Finalize the page structure to work within your marketplace app framework.

**Prompt:**
```
Complete the image generator page structure within my existing marketplace app:
- app/image-generator/layout.tsx with proper metadata
- app/image-generator/page.tsx that uses existing MarketplaceProvider
- Ensure proper integration with existing app structure
- Keep styling consistent with existing components
- Include proper TypeScript types and imports

The page should work seamlessly within the existing marketplace app structure.
```

**Test:** Navigate to `/image-generator` in your Sitecore environment and verify the complete application loads and integrates properly with the marketplace context.

### Step 7. Test Sitecore Integration and Optimize

Test the complete integration with your Sitecore environment and optimize using AI.

**Prompt:**
```
Review my AI image generator marketplace extension and optimize for:
- Proper integration with Sitecore page context
- Error handling when context is unavailable
- Performance in the marketplace environment
- User experience within Sitecore UI
- Consistent styling with marketplace apps
- Real-time context updates when navigating pages

Focus on marketplace-specific optimizations and Sitecore integration best practices.
```

**Test:** 
1. Open your app in the Sitecore environment (not localhost)
2. Navigate between different pages and verify context updates
3. Test complete workflow: context detection → image generation → download
4. Verify error handling when context is unavailable

### Step 8. Advanced Sitecore Integration with AI (Optional)

Extend the application with Sitecore-specific advanced features.

**Prompt:**
```
Enhance my marketplace image generator with advanced Sitecore integration:
- Save generated images to Sitecore Media Library
- Create image variants for different page types
- Batch generation for site hierarchies
- Integration with Sitecore content workflows
- Custom field integration for direct image assignment
- Multi-language support using Sitecore context

Prioritize features that add the most value to Sitecore content creators and provide marketplace-specific implementation guidance.
```

**Test:** Implement selected features within your Sitecore environment and validate enhanced marketplace functionality.

## AI Development Benefits

Using Vibe Coding with AI provides several advantages:

✅ **Rapid Prototyping**: Generate complete components in minutes
✅ **Best Practices**: AI suggests modern patterns and proper error handling
✅ **Code Quality**: Consistent styling and TypeScript usage
✅ **Problem Solving**: AI helps debug and optimize complex functionality
✅ **Learning Acceleration**: Understand patterns through AI-generated examples
✅ **Iteration Speed**: Quickly modify and enhance features with prompts

## Resources

Essential links for AI-powered Sitecore marketplace development:

- [Workshop Setup Guide](index.md) - Complete preparation steps
- [Sitecore Marketplace SDK Documentation](https://doc.sitecore.com/mp/en/developers/sdk/latest/sitecore-marketplace-sdk/)
- [Blok Shadcn Registry](https://blok-shadcn.vercel.app/) - UI components for rapid development
- [Sitecore MCP Documentation](https://doc.sitecore.com/mcp) - AI assistance integration
- [Hugging Face Inference API](https://huggingface.co/docs/api-inference/index)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Sitecore Marketplace Developer Portal](https://developers.sitecore.com/marketplace)

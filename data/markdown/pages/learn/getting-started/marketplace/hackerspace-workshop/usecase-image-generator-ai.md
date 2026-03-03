# Use case: AI Image Generator with Vibe Coding (AI-Powered Development)

Build an AI-powered image generator that integrates with Sitecore page context using **Vibe Coding with AI** for rapid, interactive development. This use case demonstrates how to create contextual image generation with the **HuggingFace Inference API free tier** — no paid subscription required.

![AI Image Generator in Action](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/9710ee95f7b44b4a8139d2fc011517e5?v=f8fb84d1)

[Reference Repository](https://github.com/Sitecore/hackerspace-workshop/app/image-generator)

Extension Point: **Standalone**

## Summary

This tutorial uses **Vibe Coding with AI** to build an image generator that automatically detects the current Sitecore page context and generates relevant images using the Stable Diffusion XL model via the HuggingFace Inference API. The free tier works without any API key — anonymous requests are allowed with rate limiting. Creating a free HuggingFace account token removes stricter limits.

**Prerequisites:** Before starting this tutorial, ensure you have completed the [Workshop Preparation Steps](index.md):
- ✅ Node.js 16+ and npm 10+ installed
- ✅ VS Code or Cursor with GitHub Copilot
- ✅ Registered app in Developer Studio (choose **Page context panel** extension point)
- ✅ App installed in your assigned environment
- ✅ Blok and Docs MCP configured in your IDE
- ✅ Custom app running locally at `http://localhost:3000`

Key features built with AI assistance:
- Auto-detects page `displayName` from Sitecore context
- Real-time prompt updates when navigating between pages
- Free AI image generation via HuggingFace Inference API
- One-click JPEG download
- Clean, minimal codebase built incrementally with AI

## Implementation Steps

### Step 1. Scaffold the Starter Kit

Run the blok shadcn quickstart to generate a fully configured Next.js 15 Marketplace app:

```bash
npx shadcn@latest add https://blok-shadcn.vercel.app/r/marketplace/next/quickstart-with-client-side-xmc.json
```

Answer the prompts:
- **Install shadcn@3.5.0?** → `y`
- **Next.js version?** → `Next15`
- **Project name** → use only lowercase letters, e.g. `my-image-generator`
- **Base color** → any

The scaffolded app includes `MarketplaceProvider`, `useMarketplaceClient`, and shadcn/ui components ready to use.

Read more: [Sitecore Marketplace SDK Quick Start](https://doc.sitecore.com/mp/en/developers/sdk/latest/sitecore-marketplace-sdk/quick-start--cli-.html)

### Step 2. Start the App and Verify

Navigate into the generated project folder (the one containing `package.json`) and start the dev server:

```bash
npm run dev
```

**Test:** Open `http://localhost:3000` and confirm the app renders. Then go back to your Sitecore environment, open the Standalone extension point where your app is registered, and reload — it should now show the scaffolded content instead of an error.

### Step 3. Configure MCPs

MCPs give your AI assistant direct access to the Blok component registry and the Sitecore documentation, making subsequent prompts significantly more accurate.

#### Blok MCP

From the root of your project, run the appropriate command for your IDE:

**VS Code:**
```bash
npx shadcn@latest mcp init --client vscode
```
This creates `.vscode/mcp.json` with the Blok MCP configuration.

**Cursor:**
```bash
npx shadcn@latest mcp init --client cursor
```
This creates `.cursor/mcp.json` with the Blok MCP configuration.

Read more: [blok.sitecore.com/mcp](https://blok.sitecore.com/mcp)

#### Docs MCP

1. Go to [doc.sitecore.com](https://doc.sitecore.com)
2. Click **Ask AI** next to the search bar
3. In the chat popup, open the **Use MCP** dropdown
4. Select your IDE and follow the instructions (Google account authentication required for usage tracking)

**Test:** Ask your AI assistant "What shadcn components are available in Blok?" — it should return a real list from the registry, not a generic answer.

### Step 4. Create the Image Generator Route

Add a new `/image-generator` route to your existing marketplace app without touching the current structure.

**Prompt:**
```
I have a Sitecore Marketplace app scaffolded with Next.js 15 App Router using the blok shadcn quickstart template. It already has MarketplaceProvider and useMarketplaceClient set up. I want to add an /image-generator route.

Create only these new files — do not modify any existing files:
- app/image-generator/layout.tsx — layout with title metadata "AI Image Generator"
- app/image-generator/page.tsx — thin server component that wraps content in the existing MarketplaceProvider (import it from the path used in the scaffolded app)
- app/image-generator/components/.gitkeep — placeholder for upcoming components

Show the full content of each new file and the exact import path for MarketplaceProvider from the scaffolded structure.
```

**Test:** Navigate to `http://localhost:3000/image-generator` — the route should render without errors.

### Step 5. Configure Next.js Environment for HuggingFace

Set up environment variables and Next.js configuration before building the API.

Create `.env.local` in your project root:

```
# HuggingFace Inference API — free tier works without a token (anonymous, stricter rate limits)
# For higher limits: create a free token at https://huggingface.co/settings/tokens
HUGGINGFACE_API_TOKEN=
```

Then ask AI to update your Next.js config:

**Prompt:**
```
I'm building a Next.js 15 App Router marketplace app embedded as an iframe in Sitecore. Images from the HuggingFace API will be converted to base64 data URLs client-side — no external image hostname needed.

Update next.config.ts to:
1. Allow the app to be embedded in an iframe from Sitecore Cloud Portal domains (set appropriate Content-Security-Policy or X-Frame-Options headers)
2. Keep the existing config options intact — only add what's needed

Show the full updated next.config.ts.
```

**Test:** Restart `npm run dev` — verify the app still starts and `http://localhost:3000/image-generator` loads correctly.

### Step 6. Create a `usePageContext` Hook for Sitecore Integration

Extract the page context logic into a reusable hook so the UI component stays clean.

**Prompt:**
```
In my Next.js 15 Sitecore Marketplace app I use @sitecore/marketplace-sdk and the scaffolded useMarketplaceClient hook.

Create a custom React hook at app/image-generator/hooks/use-page-context.ts that:
- Calls client.query("pages.context") once on mount to get the initial page name
- Subscribes to client.subscribe("pages.context") to receive updates when the user navigates to a different page in Sitecore
- Returns { pageName: string | null, isLoading: boolean }
- Cleans up the subscription in the useEffect return function
- Handles two cases gracefully:
  - Running inside Sitecore: client is available and returns page context
  - Running on localhost preview: client may be unavailable or return null context
- Uses TypeScript with explicit types for the pages.context payload

Show only this file.
```

**Test:** Import and log `usePageContext()` in your image generator page. Open the app in your Sitecore environment and navigate between content pages — verify `pageName` updates in the browser console.

### Step 7. Create the HuggingFace Image Generation API Route

Build the server-side API route that calls the HuggingFace Inference API via the router endpoint. A successful response is raw binary image data — the content type is read from the response header so the returned data URL works for any image format the model produces.

**Prompt:**
```
Create a Next.js 15 App Router API route at app/api/generate-image/route.ts.

Add these exports at the top:
  export const runtime = "nodejs"
  export const maxDuration = 60

The route accepts POST requests with JSON body { prompt: string } and calls the HuggingFace router endpoint:
  URL: https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0
  Method: POST
  Headers:
    Content-Type: application/json
    Authorization: Bearer <token>  — only if process.env.HUGGINGFACE_API_TOKEN is set and non-empty
  Body: { "inputs": prompt }

Input validation (return before calling HF):
  - Malformed JSON body → 400 { error: "Invalid JSON body" }
  - Missing or non-string prompt → 400 { error: "A prompt string is required" }

HuggingFace fetch error handling:
  - fetch() throws (network failure) → 502 { error: "Failed to reach HuggingFace API" }
  - 503 response → 503 { error: "Model loading, retry in 20 seconds", retryAfter: 20 }
  - 429 response → 429 { error: "Rate limit reached. Set HUGGINGFACE_API_TOKEN in .env.local for a free token with higher limits." }
  - Any other non-OK status → read the HF response body as text, try to parse as JSON for an error message, log it, and return the same status with { error: "Generation failed: <detail>" }
  - 200 but content-type is application/json → HF returned an error or loading estimate; log it and return 500 { error: body.error || "Unexpected response from model" }

Successful response (binary image):
  - Read as ArrayBuffer, convert to base64 with Buffer.from(arrayBuffer).toString("base64")
  - Derive mimeType from the response Content-Type header (strip parameters, e.g. "image/jpeg"); fall back to "image/jpeg" if absent
  - Return { imageUrl: `data:${mimeType};base64,${base64}` }

Show only this file.
```

**Test:** With `npm run dev` running, test the endpoint from your terminal:

```bash
curl -X POST http://localhost:3000/api/generate-image \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a futuristic Sitecore dashboard"}'
```

The first call may take 20–30 seconds while the model cold-starts. A successful response contains an `imageUrl` field starting with `data:image/` (the exact mime type comes from the HuggingFace response headers).

### Step 8. Build the Image Generator UI Component

Create the main client component that combines page context, the prompt input, and image generation.

**Prompt:**
```
Create a React client component at app/image-generator/components/image-generator-panel.tsx for a Sitecore Marketplace app.

Requirements:
- "use client" directive at the top
- Import usePageContext from ../hooks/use-page-context
- State: prompt (string), isGenerating (boolean), imageUrl (string | null), error (string | null), retryCountdown (number | null)
- When pageName from usePageContext changes (and is not null), set the prompt to: `Create a visually striking image representing the Sitecore page: ${pageName}`
- On form submit:
    POST to /api/generate-image with { prompt }
    On success: set imageUrl from response.imageUrl, clear error
    On 503 with retryAfter: start a countdown using setInterval and auto-retry when it reaches 0
    On other errors: set error message from response.error
- Display:
    A Textarea for the prompt (pre-filled, user-editable)
    A "Generate" Button that shows a spinner (Loader2 from lucide-react, animate-spin) while isGenerating is true
    If retryCountdown is active: show "Model loading, retrying in Xs..." instead of the button
    If imageUrl: render the image with a plain <img> tag (not next/image — base64 data URLs are incompatible with image optimization)
    If imageUrl: show a "Download" button (stub — we'll implement in next step) and a "Generate new" button that clears imageUrl
    If error: show it in a shadcn Alert with AlertDescription
- Use shadcn/ui: Card, CardContent, CardHeader, CardTitle, Button, Textarea, Alert, AlertDescription
- Layout: centered, max-width 480px, works well in a narrow Sitecore panel

Show only this file.
```

**Test:** Open the image generator in Sitecore, navigate between content pages, and verify the prompt auto-updates. Test a generation and confirm the image renders.

### Step 9. Implement Image Download

Add the download handler to the component.

**Prompt:**
```
In app/image-generator/components/image-generator-panel.tsx the download button currently has an empty onClick. Implement it as a standalone function called handleDownload inside the component:

1. Assert imageUrl is not null (early return if it is)
2. Parse the data URL: split on the first comma to separate the prefix (`data:<mime>;base64`) from the raw base64 string
3. Extract the mime type from the prefix (the part between "data:" and ";base64") — e.g. "image/jpeg" or "image/png"
4. Decode the base64 string with atob() and write each character code into a Uint8Array
5. Wrap the Uint8Array in a Blob using the extracted mime type
6. Call URL.createObjectURL(blob) to get a temporary object URL
7. Derive the file extension from the mime type subtype (e.g. "image/png" → "png"); fall back to "jpg"
8. Create a temporary <a> element, set href to the object URL and download to `sitecore-ai-image-${Date.now()}.${ext}`
9. Append to document.body, click it, then remove it
10. Call URL.revokeObjectURL() to release memory
11. Wrap everything in try/catch — on catch, set the error state with "Download failed"

Show only the handleDownload function body and the updated button JSX line, not the full component.
```

**Test:** Generate an image and click Download — a `.jpg` file should appear in your downloads folder.

### Step 10. End-to-End Test in Sitecore

Verify the complete integration works in your Sitecore environment.

**Prompt:**
```
Review my image generator app. The entry point is app/image-generator/page.tsx (server component wrapping MarketplaceProvider + ImageGeneratorPanel) and app/image-generator/layout.tsx (metadata only).

Check these files for common issues:
- "use client" on a server component (should not be there on page.tsx)
- Double MarketplaceProvider wrapping
- Missing or wrong import paths
- TypeScript errors visible from the code structure

List each issue found with the file name and line, and show the corrected version of any file that needs changes. If no issues are found, confirm that explicitly.
```

**Test checklist:**
1. Open your app at the Standalone extension point in your Sitecore environment (not localhost)
2. Navigate to several content pages — verify the prompt updates automatically with each page name
3. Generate an image — verify it renders below the form
4. Click Download — verify the file saves as a valid JPEG
5. Disconnect from the internet and generate — verify an error message appears and the UI remains usable

### Step 11. Optimize and Extend (Optional)

**Prompt:**
```
I have a working Sitecore Marketplace AI image generator with these files:
- app/image-generator/hooks/use-page-context.ts
- app/image-generator/components/image-generator-panel.tsx
- app/api/generate-image/route.ts

Suggest implementations for any three of these enhancements, ordered by value-to-effort ratio:

1. Generation cache: skip the API call and reuse the last imageUrl if the prompt hasn't changed
2. Session history: store the last 5 generated images (prompt + imageUrl) in localStorage and show thumbnails the user can restore
3. Style selector: add a dropdown ("photorealistic", "digital art", "watercolor painting", "concept art") whose value is appended to the prompt before sending
4. Richer context: query additional fields from Sitecore pages.context (template name, tags) and include them in the prompt

For each chosen enhancement: show the specific code changes and which file to edit.
```

**Test:** Implement selected enhancements and run through the full workflow in your Sitecore environment to confirm nothing regressed.

## AI Development Benefits

Using Vibe Coding with AI provides several advantages:

✅ **Rapid Prototyping**: Generate complete components in minutes
✅ **Best Practices**: AI suggests modern patterns and proper error handling
✅ **Code Quality**: Consistent styling and TypeScript usage
✅ **Problem Solving**: AI helps debug and optimize complex functionality
✅ **Learning Acceleration**: Understand patterns through AI-generated examples
✅ **Iteration Speed**: Quickly modify and enhance features with focused prompts

## Resources

Essential links for AI-powered Sitecore marketplace development:

- [Workshop Setup Guide](index.md) - Complete preparation steps
- [Sitecore Marketplace SDK Documentation](https://doc.sitecore.com/mp/en/developers/sdk/latest/sitecore-marketplace-sdk/)
- [Blok Shadcn Registry](https://blok-shadcn.vercel.app/) - UI components for rapid development
- [Sitecore MCP Documentation](https://doc.sitecore.com/mcp) - AI assistance integration
- [HuggingFace Inference API (Free Tier)](https://huggingface.co/docs/api-inference/index)
- [HuggingFace Free Token](https://huggingface.co/settings/tokens) - Optional, removes stricter anonymous rate limits
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Sitecore Marketplace Developer Portal](https://developers.sitecore.com/marketplace)

# Use case: AI Image Generator with Vibe Coding (AI-Powered Development)

Build an AI-powered image generator that integrates with Sitecore page context using **Vibe Coding with AI** for rapid, interactive development. This use case demonstrates how to create contextual image generation with the **Hugging Face Inference API**, using a free Hugging Face account token.

![AI Image Generator in Action](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/9710ee95f7b44b4a8139d2fc011517e5?v=f8fb84d1)

[Reference Repository](https://github.com/Sitecore/hackerspace-workshop/tree/main/app/image-generator)

Extension Point: **Page Context Panel**

## Summary

This tutorial uses **Vibe Coding with AI** to build an image generator that automatically detects the current Sitecore page context and generates relevant images using the FLUX.1-schnell model via the Hugging Face Inference API. Calls to the API need a Hugging Face access token, which you'll create before you start building.

**Prerequisites:** Before starting this tutorial, ensure you have completed the [Pre-Requisites](index) and [Setup](setup):
- ✅ Node.js 22 LTS or later installed
- ✅ An AI coding agent in agent mode
- ✅ Registered app in App Studio (choose **Page Context Panel** extension point)
- ✅ App installed in your assigned environment
- ✅ Blok and Docs MCP configured for your agent
- ✅ `AGENTS.md` added to your project
- ✅ Custom app running locally at `http://localhost:3000`

Key features built with AI assistance:
- Auto-detects page `displayName` from Sitecore context
- Real-time prompt updates when navigating between pages
- AI image generation via the Hugging Face Inference API
- One-click image download
- Clean, minimal codebase built incrementally with AI

## Before you start: Create your Hugging Face access token

The image generator calls the Hugging Face Inference API, which needs an access token.

1. Go to [huggingface.co/join](https://huggingface.co/join) and create a free account (or sign in if you already have one). Confirm your email address - unconfirmed accounts can't call the API.
2. Open [Settings > Access Tokens](https://huggingface.co/settings/tokens).
3. Click **Create new token**.
4. Choose the **Fine-grained** token type and give it a name, such as `sitecore-code-jam`.
5. Under **Inference**, select **Make calls to Inference Providers**. You don't need any other permissions.
6. Click **Create token**, then copy the token (it starts with `hf_`) and keep it somewhere safe. Hugging Face only shows it once.

You'll add the token to your app's `.env.local` file in a later step. Never commit it to source control or paste it into a prompt.

## Implementation Steps

### Step 1. Create the Image Generator Route

Add a new `/image-generator` route to your existing marketplace app without touching the current structure.

**Prompt:**
```
I have a Sitecore Marketplace app scaffolded with Next.js App Router using the Blok quickstart template. It already has MarketplaceProvider and useMarketplaceClient set up. I want to add an /image-generator route.

Create only these new files — do not modify any existing files:
- app/image-generator/layout.tsx — layout with title metadata "AI Image Generator"
- app/image-generator/page.tsx — thin server component that wraps content in the existing MarketplaceProvider (import it from the path used in the scaffolded app)
- app/image-generator/components/.gitkeep — placeholder for upcoming components

Show the full content of each new file and the exact import path for MarketplaceProvider from the scaffolded structure.
```

**Test:** Navigate to `http://localhost:3000/image-generator` — the route should render without errors.

### Step 2. Add Your Hugging Face Token

Create `.env.local` in your project root and paste in the token you created earlier:

```
HUGGINGFACE_API_TOKEN=hf_your_token_here
```

**Test:** Restart `npm run dev` so Next.js picks up the new environment variable, and verify `http://localhost:3000/image-generator` still loads.

### Step 3. Create a `usePageContext` Hook for Sitecore Integration

Extract the page context logic into a reusable hook so the UI component stays clean.

**Prompt:**
```
In my Next.js Sitecore Marketplace app I use @sitecore-marketplace-sdk/client and the scaffolded useMarketplaceClient hook.

Create a custom React hook at app/image-generator/hooks/use-page-context.ts that:
- Calls client.query("pages.context", { subscribe: true, onSuccess }) to get the initial page name and receive updates when the user navigates to a different page in Sitecore
- Reads the page name from pageInfo.displayName, falling back to pageInfo.name
- Returns { pageName: string | null, isLoading: boolean }
- Calls the unsubscribe function returned by the query in the useEffect cleanup
- Handles two cases gracefully:
  - Running inside Sitecore: client is available and returns page context
  - Running on localhost preview: client may be unavailable or return null context
- Uses the PagesContext type exported by the SDK rather than defining its own

Show only this file.
```

**Test:** Import and log `usePageContext()` in your image generator page. Open the app in your Sitecore environment and navigate between content pages — verify `pageName` updates in the browser console.

### Step 4. Create the Hugging Face Image Generation API Route

Build the server-side API route that calls the Hugging Face Inference API. The official `@huggingface/inference` client picks an available provider for the model and can return the image as a data URL, so there's no manual binary handling.

**Prompt:**
```
Create a Next.js App Router API route at app/api/generate-image/route.ts.

Install the @huggingface/inference package and use it in the route:
  - Create an InferenceClient with process.env.HUGGINGFACE_API_TOKEN
  - Call client.textToImage({ model: "black-forest-labs/FLUX.1-schnell", inputs: prompt }, { outputType: "dataUrl" })
  - Export maxDuration = 60

The route accepts POST requests with JSON body { prompt: string }.

Input validation (return before calling Hugging Face):
  - HUGGINGFACE_API_TOKEN not set → 500 { error: "HUGGINGFACE_API_TOKEN is not set in .env.local" }
  - Malformed JSON body → 400 { error: "Invalid JSON body" }
  - Missing or non-string prompt → 400 { error: "A prompt string is required" }

Error handling — the client throws InferenceClientProviderApiError with httpResponse.status for provider errors:
  - 401 or 403 → same status { error: "Hugging Face rejected the token. Check HUGGINGFACE_API_TOKEN and its Inference Providers permission." }
  - 402 → 402 { error: "Your Hugging Face account has no inference credits left." }
  - 429 → 429 { error: "Rate limit reached, please try again shortly." }
  - Any other error → log it and return 502 { error: "Generation failed: <message>" }

Successful response:
  - Return { imageUrl } where imageUrl is the data URL returned by textToImage

Show only this file.
```

**Test:** With `npm run dev` running, test the endpoint from your terminal:

```bash
curl -X POST http://localhost:3000/api/generate-image \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a futuristic Sitecore dashboard"}'
```

Generation usually takes a few seconds. A successful response contains an `imageUrl` field starting with `data:image/` (the exact image type depends on the provider).

### Step 5. Build the Image Generator UI Component

Create the main client component that combines page context, the prompt input, and image generation.

**Prompt:**
```
Create a React client component at app/image-generator/components/image-generator-panel.tsx for a Sitecore Marketplace app.

Requirements:
- "use client" directive at the top
- Import usePageContext from ../hooks/use-page-context
- State: prompt (string), isGenerating (boolean), imageUrl (string | null), error (string | null)
- When pageName from usePageContext changes (and is not null), set the prompt to: `Create a visually striking image representing the Sitecore page: ${pageName}`
- On form submit:
    POST to /api/generate-image with { prompt }
    On success: set imageUrl from response.imageUrl, clear error
    On error: set error message from response.error
- Display:
    A Textarea for the prompt (pre-filled, user-editable)
    A "Generate" Button that shows a spinner (Loader2 from lucide-react, animate-spin) while isGenerating is true
    If imageUrl: render the image with a plain <img> tag (not next/image — base64 data URLs are incompatible with image optimization)
    If imageUrl: show a "Download" button (stub — we'll implement in next step) and a "Generate new" button that clears imageUrl
    If error: show it in an Alert with AlertDescription
- Use Blok components: Card, CardContent, CardHeader, CardTitle, Button, Textarea, Alert, AlertDescription
- Layout: centered, max-width 480px, works well in a narrow Sitecore panel

Show only this file.
```

**Test:** Open the image generator in Sitecore, navigate between content pages, and verify the prompt auto-updates. Test a generation and confirm the image renders.

### Step 6. Implement Image Download

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

**Test:** Generate an image and click Download — an image file (for example `.jpg`, `.png` or `.webp`, depending on the provider) should appear in your downloads folder and open correctly.

### Step 7. End-to-End Test in Sitecore

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
1. Open your app in the Page Context Panel in Page Builder in your Sitecore environment (not localhost)
2. Navigate to several content pages — verify the prompt updates automatically with each page name
3. Generate an image — verify it renders below the form
4. Click Download — verify the file saves and opens as a valid image
5. Disconnect from the internet and generate — verify an error message appears and the UI remains usable

### Step 8. Optimize and Extend (Optional)

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

## Resources

Essential links for AI-powered Sitecore marketplace development:

- [Workshop Setup Guide](setup) - Complete setup steps
- [Sitecore Marketplace SDK Documentation](https://doc.sitecore.com/mp/en/developers/sdk/latest/sitecore-marketplace-sdk/)
- [Blok](https://blok.sitecore.com/) - Sitecore's design system and UI component registry
- [Blok MCP](https://blok.sitecore.com/mcp) - Connect your AI coding agent to the Blok registry
- [Hugging Face Inference Providers: Text to Image](https://huggingface.co/docs/inference-providers/tasks/text-to-image)
- [Hugging Face Access Tokens](https://huggingface.co/settings/tokens)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Sitecore Marketplace Developer Portal](https://developers.sitecore.com/marketplace)

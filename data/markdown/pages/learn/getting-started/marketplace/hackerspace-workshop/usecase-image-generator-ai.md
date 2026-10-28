# Use case: AI Image Generator for Page Builder

Build an AI-powered image generator that runs inside SitecoreAI Page Builder and creates images based on the page you're editing. Instead of writing the code yourself, you'll describe what you want in a short spec, review your AI coding agent's plan, and let the agent build and verify the app one milestone at a time. Images are generated with the **Hugging Face Inference API**, using a free Hugging Face account token.

![AI Image Generator in Action](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/9710ee95f7b44b4a8139d2fc011517e5?v=f8fb84d1)

[Reference Repository](https://github.com/Sitecore/hackerspace-workshop/tree/main/app/image-generator)

Extension Point: **Page Context Panel**

## Summary

The app automatically detects the page that's open in Page Builder, suggests an image prompt based on it, and generates an image with the FLUX.1-schnell model via the Hugging Face Inference API. Authors can edit the prompt, regenerate, and download the result.

**Prerequisites:** Before starting this tutorial, ensure you have completed the [Pre-Requisites](index) and [Setup](setup):
- ✅ Node.js 22 LTS or later installed
- ✅ An AI coding agent in agent mode
- ✅ Registered app in App Studio (choose **Page Context Panel** extension point, and enable the pop-up, clipboard and download file permissions)
- ✅ App installed in your assigned environment
- ✅ Blok and Docs MCP configured for your agent
- ✅ `AGENTS.md` added to your project
- ✅ Custom app running locally at `http://localhost:3000`

What you'll build:
- Auto-detects the page `displayName` from Sitecore context
- Real-time prompt updates when navigating between pages
- AI image generation via the Hugging Face Inference API
- One-click image download

## How you'll work with your agent

Each step below gives you a prompt that describes the **outcome** you want and how the agent should **prove it works**, rather than dictating the code. The project rules in `AGENTS.md` (SDK usage, Blok components, keeping secrets on the server) apply to every prompt, so you don't need to repeat them.

For each step:

1. Paste the prompt into your agent.
2. Let the agent make the changes and run its checks.
3. Review what it changed and test it yourself where the step says so.
4. If something isn't right, tell the agent what you saw and let it fix it before moving on.

## Before you start: Create your Hugging Face access token

The image generator calls the Hugging Face Inference API, which needs an access token.

1. Go to [huggingface.co/join](https://huggingface.co/join) and create a free account (or sign in if you already have one). Confirm your email address - unconfirmed accounts can't call the API.
2. Open [Settings > Access Tokens](https://huggingface.co/settings/tokens).
3. Click **Create new token**.
4. Choose the **Fine-grained** token type and give it a name, such as `sitecore-code-jam`.
5. Under the permission presets, select **Custom** so the individual permissions are shown.
6. Under **Inference**, select **Make calls to Inference Providers**. You don't need any other permissions.
7. Click **Create token**, then copy the token (it starts with `hf_`) and keep it somewhere safe. Hugging Face only shows it once.

You'll add the token to your app's `.env.local` file in the first step. Never commit it to source control or paste it into a prompt.

## Implementation Steps

### Step 1. Add Your Hugging Face Token

Create `.env.local` in your project root and paste in the token you created earlier:

```
HUGGINGFACE_API_TOKEN=hf_your_token_here
```

Restart `npm run dev` so Next.js picks up the new environment variable.

### Step 2. Write the Spec and Review the Plan

A short spec gives your agent a clear picture of the whole app before it writes any code. Create a file called `SPEC.md` in your project root with this content:

```markdown
# AI Image Generator - Spec

## Goal
A Sitecore Marketplace app in the Page Builder **Page Context Panel** that generates an image for the page the author is editing.

## Behaviour
- When the panel opens, the prompt is pre-filled with: "Create a visually striking image representing the Sitecore page: <page name>", using the page's display name (falling back to its name).
- When the author navigates to a different page in Page Builder, the prompt updates automatically.
- The author can edit the prompt and click **Generate**. A loading state shows while the image is generated.
- The generated image is shown in the panel, with **Download** and **Generate new** actions.
- Errors (missing or invalid token, no credits, rate limits, network failures) are shown as clear, friendly messages, and the UI stays usable.

## Technical constraints
- Replace the example content on the home page (`app/page.tsx`) with the image generator. Keep the existing MarketplaceProvider setup.
- Keep the page thin: put the UI in components under `components/image-generator/` and the page context logic in a reusable hook.
- Generate images in a server-side API route using the `@huggingface/inference` package:
  `textToImage({ model: "black-forest-labs/FLUX.1-schnell", inputs: prompt }, { outputType: "dataUrl" })`
  with the token from `HUGGINGFACE_API_TOKEN`.
- Use Blok components for all UI. The panel is narrow, so the layout must work at around 400px wide.

## Done when
- The prompt follows the page as the author navigates in Page Builder.
- An image can be generated, previewed and downloaded as a valid image file.
- The typecheck and lint pass.
```

**Prompt:**
```
Read SPEC.md, AGENTS.md and the existing code. Use the Sitecore Docs MCP and the SDK type definitions to confirm how to read the page context, and the Blok MCP to choose components.

Then propose an implementation plan: the files you'll create or change, the components and hook you'll build, and how you'll verify each part. Split the work into these milestones: page context, image generation API route, UI and download. Don't write any code yet.
```

If your agent has a plan mode, you can use that instead of asking it not to write code.

**Review:** Read the plan before you approve it. Check that it keeps the home page thin, puts the API call on the server, and uses the SDK's `pages.context` query. Ask the agent to change anything you disagree with.

### Step 3. Milestone 1 - Page Context

**Prompt:**
```
Implement milestone 1 from the plan: the page context hook, and a minimal version of the home page that shows the current page name.

When you're done, run the typecheck and lint and fix any errors. Remember the page context is only available when the app runs inside SitecoreAI, so make sure the page still renders sensibly on plain localhost.
```

**Test:** Open your app in the Page Context Panel in Page Builder. Navigate between a few pages and check the page name updates each time.

### Step 4. Milestone 2 - Image Generation API Route

**Prompt:**
```
Implement milestone 2 from the plan: the server-side image generation API route described in SPEC.md.

Validate the request body, and return clear error messages with sensible status codes for a missing token, a rejected token, no credits left, and rate limits.

When you're done, run the typecheck and lint, then call the route with curl using a short test prompt and show me the shape of the response (don't print the full image data).
```

**Test:** Check the agent's curl output. A successful response contains an `imageUrl` that starts with `data:image/`. If it reports a token or credits error, check your `.env.local` and your Hugging Face token permissions.

### Step 5. Milestone 3 - UI and Download

**Prompt:**
```
Implement milestone 3 from the plan: the full image generator UI described in SPEC.md, including the editable prompt, Generate button with a loading state, image preview, Download and Generate new actions, and error messages.

The downloaded file should use the correct extension for the image type returned by the API.

When you're done, run the typecheck and lint and fix any errors.
```

**Test:** In Page Builder, generate an image for the current page, then download it and check the file opens correctly.

### Step 6. End-to-End Test in Sitecore

Run through the whole flow in your Sitecore environment:

1. Open your app in the Page Context Panel in Page Builder (not localhost)
2. Navigate to several content pages — verify the prompt updates automatically with each page name
3. Generate an image — verify it renders in the panel
4. Click Download — verify the file saves and opens as a valid image
5. Disconnect from the internet and generate — verify an error message appears and the UI remains usable

If anything fails, describe what you saw to your agent and ask it to find and fix the cause.

## Stretch Goals (Optional)

Finished early? Pick one or more of these and describe it to your agent as a new milestone. Ask it to plan first, then implement and verify, just as before.

- **Generation cache:** reuse the last image if the prompt hasn't changed, instead of calling the API again.
- **Session history:** keep the last 5 generated images (prompt and image) in localStorage and show thumbnails the author can restore.
- **Style selector:** add a style dropdown (for example "photorealistic", "digital art", "watercolor painting", "concept art") that's added to the prompt before generating.
- **Richer context:** include more information from `pages.context`, such as the site name or page path, in the suggested prompt.

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

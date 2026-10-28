# SitecoreAI Marketplace Code Jam - Setup

## Overview

1. **Register Your App** - Start by registering your extension in App Studio.
2. **Scaffold Your App** - Use the provided templates to quickly scaffold your application.
3. **Start the Application** - Launch your app and verify everything is running smoothly.
4. **Configure Blok and Docs MCP** - Connect your AI coding agent to the Blok component registry and the Sitecore documentation.
5. **Add Agent Instructions** - Give your agent the project rules it needs to write correct Marketplace code.

## 1. Register App

1. Check your emails for the invite and accept.
2. Login to Sitecore Cloud Portal: https://portal.sitecorecloud.io/?organization=org_4Zfp5uCkO1MCDDIm
3. Make sure you are in the right Organization: **Marketplace Hackerspace**
4. Go to **App Studio** (in main nav)
5. Click **Create app** (top right corner)
6. In the box give your app a meaningful **App name**
7. Choose **Custom** to create a custom (private) app
8. Hit the **Create** Button

Configure your App:

9. Depending on the extension point you want to create this app for, enable one of the following:
   - **Standalone** - Full Screen in Cloud Portal
   - **Full Screen** - in SitecoreAI
   - **Dashboard Widget** - in SitecoreAI
   - **Page Context Panel** - in SitecoreAI Page Builder
   - **Custom Field** - in SitecoreAI Page Builder

   > **Building the image generator?** Choose **Page Context Panel**. The app reads the page that's open in Page Builder, which isn't available from the other extension points.

10. Enable API access for **SitecoreAI APIs**
11. Grant permissions to allow pop-ups, and to read from and copy to the clipboard, as needed
12. For deployment URL use: `http://localhost:3000` as you want to connect your local running app for now.
13. For the App Logo, upload an image with square format, minimum 512x512pxl. You can use: https://cdn-icons-png.flaticon.com/512/13862/13862255.png
14. Hit the Activate button in the top right corner

For sure there is more to explore here, but let's keep it to your needed steps for now.

### 1.1 Install App

1. Open My Apps (either from dialogue after Activation or from main navigation)
2. Your app should appear in the list
3. Hit the **Install** button.
4. In the modal, select only the environment you are assigned to: e.g: **12-city-tour-2026/12-city-tour-2026**
5. Hit the **Install** button
6. The app should have been successfully installed
7. To test go to the place dependent on your chosen extension point (does not apply when choosing Custom field) --> You should see the app being listed but run into an error when being called. That is because there is no app running on localhost:3000, yet.

## 2. Scaffold Starter Kit

1. Run the following command:

   `npx shadcn@latest add https://blok.sitecore.com/r/marketplace/next/quickstart-with-client-side-xmc.json`

2. When asked to install the shadcn package, answer `y`
3. When prompted to start a new project choose `Next.js`
4. Provide a meaningful project name that describes your project. **Use only lowercase letters and no blanks** e.g.: `my-first-marketplace-app`
5. When prompted to selected a component library select `Radix` (this is the newer and recommended one)
6. When prompted, choose a preset. Any is fine. It's not relevant for Marketplace and Custom apps.

Your app should be created.

Read more:
https://doc.sitecore.com/mp/en/developers/sdk/latest/sitecore-marketplace-sdk/quick-start--cli-.html

## 3. Start application

To start your application go to your terminal and navigate into the folder containing your `package.json` file and run `npm run dev`

When your app has started successfully, you'll see it running at `http://localhost:3000`

**Test:** Go back to the extension point where the app is registered and reload your app. The app should now show content.

## 4. Register MCPs

### 4.1 Register Blok MCP

In a terminal at the root of your project, run the command for your coding agent:

| Agent | Command | Creates |
|---|---|---|
| Claude Code | `npx shadcn@latest mcp init --client claude` | `.mcp.json` |
| VS Code (GitHub Copilot) | `npx shadcn@latest mcp init --client vscode` | `.vscode/mcp.json` |
| Cursor | `npx shadcn@latest mcp init --client cursor` | `.cursor/mcp.json` |
| OpenAI Codex | `npx shadcn@latest mcp init --client codex` | Follow the instructions in the output |

Restart your agent (or reload the window) so it picks up the new MCP server, and approve it if prompted.

Read more here: https://blok.sitecore.com/mcp

### 4.2 Register Docs MCP

1.  Go to https://doc.sitecore.com
2.  Click on the "Ask AI" button next to the search bar
3.  In the chat popup, find the "Use MCP" drop down
4.  Select the option you want to add the Docs MCP to.
5.  Follow the instructions (you need to verify you are a human by authenticating with your Google account. If you'd rather not, you can continue without the Docs MCP)

### 4.3 Test your MCPs

Ask your agent:

```
Which Blok components are available for a Marketplace app? Then use the Sitecore docs to tell me how a Marketplace app reads the current page context.
```

The agent should call the MCP tools and come back with a real list of components and a docs-based answer, not a generic one. If it doesn't use the tools, check the MCP server is enabled in your agent's settings.

## 5. Add Agent Instructions

Coding agents read an instructions file at the start of every session. Adding one means you don't have to repeat Marketplace-specific rules in every prompt, and the agent makes fewer of the common mistakes.

Create a file called `AGENTS.md` in the root of your project with this content:

````markdown
# Sitecore Marketplace app

This is a Next.js App Router app that runs inside SitecoreAI as a Sitecore Marketplace app, embedded in an iframe.

## Marketplace SDK

- Packages: `@sitecore-marketplace-sdk/client` and `@sitecore-marketplace-sdk/xmc`.
- Use the existing client from the scaffolded `useMarketplaceClient` hook. Don't create a second `ClientSDK` instance.
- Page information is in `pageContext.pageInfo` (for example `displayName`, `name`, `path`), not `pageContext.item`.
- For live page context updates, use `client.query("pages.context", { subscribe: true, onSuccess })` and call the returned `unsubscribe` on cleanup. `client.subscribe()` is only for events such as `pages.content.fieldsUpdated`.
- Check SDK usage against the Sitecore Docs MCP or the type definitions in `node_modules/@sitecore-marketplace-sdk` before writing code. Don't guess method names.

## UI

- Use Blok components from the Blok registry (via the shadcn MCP) before writing custom UI.

## Security

- Secrets go in `.env.local` and are only read in server code, such as route handlers. Never expose them to client components.

## Working style

- For larger changes, propose a plan and wait for approval before writing code.
- After making changes, run `npx tsc --noEmit` and the lint script, and fix any errors before saying you're done.
````

GitHub Copilot, Cursor and OpenAI Codex read `AGENTS.md` automatically. **Claude Code** reads `CLAUDE.md` instead, so also create a `CLAUDE.md` file containing this single line, which imports `AGENTS.md`:

```
@AGENTS.md
```

**Test:** Start a new agent session and ask: "What rules should you follow in this project?" It should summarise the points from `AGENTS.md`.

## Next

[Image generation example](usecase-image-generator-ai) - implement an AI-driven use case with a Page Context Panel app

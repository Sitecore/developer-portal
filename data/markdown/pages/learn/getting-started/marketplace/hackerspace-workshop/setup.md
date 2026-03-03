# SitecoreAI MarketplaceCode Jam - Setup

## Overview

1. **Register Your App** - Start by registering your extension in Developer Studio / App Studio.
2. **Scaffold  Your App** - Use the provided templates to quickly scaffold your application.
3. **Start the Application** - Launch your app and verify everything is running smoothly.
4. **Configure Blok and Docs MCP** - Set up Blok for UI components and Docs MCP for documentation integration to unlock full extensibility.

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

9. Dependent on the extension point you want to create this app for enable one of the following:
   - **Standalone** - Full Screen in Cloud Portal
   - **Full Screen** - in SitecoreAI
   - **Dashboard Widget** - in SitecoreAI
   - **Page Contex Panel** - in SitecoreAI Page Builder
   - **Custom Field** - in SitecoreAI Page Builder

10. enable API access for **SitecoreAI APIs**
11. Grant permissons to allow pop ups, read and copy from clipboard as needed
12. For deployment URL use: `http://localhost:3000` as you want to connect your local running app for now.
13. For the App Logo, upload an image with square format, minimum 512x512pxl. You can use: https://cdn-icons-png.flaticon.com/512/13862/13862255.png
14. Hit the Activate button in the top right corner

For sure there is more to explore here, but let's keep it to your needed steps for now.

### 1.1 Install App
1. Open My Apps (either from dialogue after Activation or from main navigation)
2. Your app should appear in the list
3. Hit the **Install** button. 
4. In the modal, select only the environment you are assigned to: e.g: **12-City-Tour-2026-Amsterdam/12-City-Tour-2026-Amsterdam**
5. Hit the **Install** button
6. The app should have been successfully installed
7. To test go to the place dependent on your chosen extension point (does not apply when choosing Custom field) --> You should see the app being listed but run into an error when being called. That is because there is no app running on localhost:3000, yet. 


## 2. Scaffold Starter Kit

1. Run the following command:

   `npx shadcn@latest add https://blok-shadcn.vercel.app/r/marketplace/next/quickstart-with-client-side-xmc.json`

2. When asked to install shadcn@3.5.0, answer `y`
3. When prompted to choose a Next.js version choose `Next15`
4. Provide a meaningful project name that describes your project. **Use only lowercase letters** e.g.: `my-first-marketplace-app`
5. When prompted, choose a base color. Any is fine. 

Your app should be created and you should see this in terminal

and this in the file system.

Read more:
https://doc.sitecore.com/mp/en/developers/sdk/latest/sitecore-marketplace-sdk/quick-start--cli-.html


## 3. Start application
To start your application go to your terminal and navigate into the folder containing your `package.json` file and run `npm run dev`

When you app started successfully you will it running under `http://localhost:3000`

**Test:** Go back to the extension point where the app is registered and reload your app. the app should now show content. 

## 4. Register MCPs

### 4.1 Register Blok MCP

#### 4.1 a. in VS Code
1. Navigate to the root of your project in vs code terminal
2. run `npx shadcn@latest mcp init --client vscode`

This will create a file .vscode/mcp.json and add configuration for the MCP

Read more here: https://blok.sitecore.com/mcp

#### 4.1 b. Cursor

1. Navigate to the root of your project in vs code terminal
2. run `npx shadcn@latest mcp init --client cursor`

This will create a file .cursor/mcp.json and add configuration for the MCP

Read more here: https://blok.sitecore.com/mcp

### 4.2 Register Docs MCP
 1. Go to https://doc.sitecore.com
 2. Click on the "Ask AI" button next to the search bar
 3. In the chat popup, find the "Use MCP" drop down
 4. Select the option you want to add the DOCs MCP to.
 5. Follow the instructions ( you need to authenticate with your google account. This is just for usage calculation on our end)
 
## Next
[Image generation example](usecase-image-generator-ai) - implement and AI-driven use case with a custom field type


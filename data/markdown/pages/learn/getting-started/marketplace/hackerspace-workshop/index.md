# Welcome to the Marketplace Hackerspace Workshop – Where You Become a Hackerspace Hero! @ Sitecore Symposium 2025 - Introduction

Get ready to dive into the world of XM Cloud extensibility and hands-on innovation. In this workshop, you’ll learn how to build custom extensions and explore composable architecture in a fast-paced, developer-focused environment.
Before we jump into coding, here’s a quick overview of the base setup steps:


1. Pre-Requisites
2. Register Your App - Start by registering your extension in Developer Studio / App Studio.
3. Scaffold Your App - Use the provided templates to quickly scaffold your application.
4. Start the Application - Launch your app and verify everything is running smoothly.
5. Configure Blok and Docs MCP - Set up Blok for UI components and Docs MCP for documentation integration to unlock full extensibility.

Ready? Let's go! 

## Pre-Requisites
- node version 16 and above
- npm version 10 and above
- example consider using VS Code and Co-Pilot

### node installation
First check if you have `node` installed and what version you are on. Therefore run in terminal: `node -v`

If you are below version 16 or have not installed node:

To update node: 

To install npm: go to https://nodejs.org/en/download/ and download and run the installer: https://nodejs.org/en/download/ 



### npm installation
First check if you have `npm` installed and what version you are on. Therefore run in terminal: `npm -v`

If you are below version 10 or have not installed npm:

To update npm to the latest version run in terminal: `npm install -g npm`

To install npm: go to https://nodejs.org/en/download/ and download and run the installer: https://nodejs.org/en/download/ 


### Install Visual Studio Code

To follow this workshop you need an IDE such as VS Code or Cursor. No, Notepad is not enough. If you have non of the both, here's where you get VS Code: https://code.visualstudio.com/download

## Preparation Steps

### 1. Register App

1. Check your emails for the invite and accept.  
2. Login to Sitecore Cloud Portal: https://portal.sitecorecloud.io
3. Make sure you are in the right Organization: **Marketplace Hackerspace**
4. Go to **Developer Studio** (in main nav)
5. Click **Create app** (top right corner)
6. In the box give your app a meaningful **App name**
7. Choose **Custom** to create a custom (private) app
8. Hit the **Create** Button

Configure your App:

9. Dependent on the extension point you want to create this app for enable one of the following:
   - Standalone - Full Screen in Cloud Portal
   - Full Screen - in XM Cloud
   - Dashboard Widget - in XM Cloud
   - Page Contex Panel - in XM Cloud Page Builder
   - Custom Field - in XM Cloud Pages Builder

10. enable API access for **XM Cloud APIs**
11. For deployment URL use: `http://localhost:3000` as you want to connect your local running app for now.
12. For the App Logo URL provide a URL to an image file that has square format, minimum 512x512pxl. You can use: [TODO: Url to be provided]
13. Hit the Activate button in the top right corner

For sure there is more to explore here, but let's keep it to your needed steps for now.

### 2. Install App
1. Open My Apps (either from dialogue after Activation or from main navigation)
2. You app should appear in the list
3. Hit the **Install** button. 
4. In the modal, select only the environment you are assigned to: e.g: **Marketplace-Hackerspace-Workshop/12-Hackerspace**
5. Hit the **Install** button
6. The app should have been successfully installed
7. To test go to the place dependent on your chosen extension point (does not apply when choosing Custom field) --> You should see the app being listed but run into an error when being called. That is because there is no app running on localhost:3000, yet. 


### 3. Scaffold Starter Kit

#### 3a. preferred option

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

#### 3b. Plan B (in case of issues)
1. Create an empty Next.js app. run `npx create-next-app`
   
   This will create a next app in the latest version, currently version 16.
2. Run the following command:

   `npx shadcn@latest add https://blok-shadcn.vercel.app/r/marketplace/next/quickstart-with-client-side-xmc.json`

2. When asked to install shadcn@3.5.0, answer `y`
3. When prompted to choose a Next.js version choose `Next15`
4. Provide a meaningful project name that describes your project. **Use only lowercase letters** e.g.: `my-first-marketplace-app`
5. When prompted, choose a base color. Any is fine. 

Your app should be created and you should see this in terminal

and this in the file system.

### 4. Start application
To start your application go to your terminal and navigate into the folder containing your `package.json` file and run `npm run dev`

When you app started successfully you will it running under `http://localhost:3000`

Test: Go back to the extension point where the app is registered and reload your app. the app should now show content. 

### 5. Register MCP

#### 5a. in VS Code
1. Create folder `.vscode` in the root of the project
2. Create file named `mcp.json`
3. Paste the following code in to register the blok MCP and docs MCP

```
{
  "servers": {
    "shadcn": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "shadcn@canary",
        "registry:mcp"
      ],
      "env": {
        "REGISTRY_URL": "https://blok-shadcn.vercel.app/r/registry.json"
      }
    },
    "Sitecore Documentation": {
      "url": "https://doc.sitecore.com/mcp",
      "headers": {
      }
        "User-Agent": "sitecore-mcp-client/1.0"
    }
  }
}
```

Read more here: https://blok.sitecore.com/beta 

#### 5b. Cursor

1. In Cursor open settings
2. In Cursor Settings choose **Tools & MCP**
3. Click on **New MCP Server** to add MCP configuration
4. In `mcp.json` file copy: 

```
{
  "mcpServers": {
    "shadcn": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "shadcn@canary",
        "registry:mcp"
      ],
      "env": {
        "REGISTRY_URL": "https://blok-shadcn.vercel.app/r/registry.json"
      }
    },
    "Sitecore Documentation": {
      "url": "https://doc.sitecore.com/mcp",
      "headers": {
      }
        "User-Agent": "sitecore-mcp-client/1.0"
    }
  }
}
```

Read more here: https://blok.sitecore.com/beta

## Use cases
- [Page List example](usecase-pagelist) - Easy read/write exercise to get familiar with building extensions for XM Cloud using Marketplace SDK functionality.
- [Data source example](usecase-datasource) - advanced read and write exercise to get familiar with GraphQL 
- [Image generation example](usecase-image-generation) - implement and AI-driven use case with a custom field type (more advanced)

## Resources
# Marketplace Hackerspace  Workshop @ Sitecore Symposium 2025 - Introduction



## Pre-Requisites
- node version 10 and above
- npm version xx and above
- example consider using VS Code and Co-Pilot
- 

## Preparation Steps

### 1. Register App and install app

### 2. Scaffold Starter Kit

#### 2a. preferred option

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

#### 2b. Plan B (in case of issues)
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

### 3. Start application
To start your application go to your terminal and navigate into the folder containing your `package.json` file and run `npm run dev`

When you app started successfully you will it running under `http://localhost:3000`

### 4. Register MCP

#### 4a. in VS Code

Blok and Documentation

#### 4b. Cursor

Blok and Documentation

## Use cases
- [Page List example]() - showcasing Marketplace SDK functionality
- [Data source example]() - enahnced 



## Resources
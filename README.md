![Sitecore logo in red background](https://raw.githubusercontent.com/Sitecore/developer-portal/Readme/public/sitecore.svg)

# Sitecore Developer Portal
Welcome to the Sitecore Developer Portal. This app was created to help you get started with Sitecore. The developer portal aims to bring all the Sitecore developer tools together in one place.

## The Tech
The Sitecore developer portal is built with Next.js, Typescript, Tailwind CSS, and is hosted on Vercel. The app uses static site generation to create all the pages at build time. It also utilizes Incremental Static Regeneration (ISR) to automatically update the app when changes to page content are made. Much of the page content is written in Markdown and is converted to HTML at build time.

## Build Prerequisites

### Node.js

The developer portal is built with Next.js, so you'll need to have Node.js installed to build the project. You can find the latest version of Node.js [here](https://nodejs.org/en/). We recommend using the LTS version of Node.js.

### Environment Variables
The Sitecore developer portal incorporates a number of third party services to bring in content. For full functionality, you must create a **.env.local** file in the root of the project and add in the below environment variables. 


The following variables should exist within the .env.local file: 

```
YOUTUBE_API_KEY="An API key with YouTube Data API v3 access enabled"
TWITTER_BEARER_TOKEN="A bearer token from Twitter "
```

*Note: The site will still function without the above keys. The components that require these environment variables will fail gracefully and not display on the pages.*

## Getting Started
1. Install [Node.js](htts://nodejs.org/en/), we recommend the LTS version.
2. Clone the repository.
3. Inside the repository run `npm install` to install all the dependencies.
4. Create a `.env.local` file in the root of the project and add the following environment variables:
```
YOUTUBE_API_KEY=""
TWITTER_BEARER_TOKEN=""
```
 (For more information on populating environment variables see section **Environment Variables** above.)

 5. Run `npm run dev` to start the development server.
 6. Open the **http://localhost:3000** in your browser to see the result!

## Bugs and Enhancements 
We are actively working on improving the developer portal. If you have any suggestions or issues, please let us know. Opening an issue on GitHub is a great way to get started.
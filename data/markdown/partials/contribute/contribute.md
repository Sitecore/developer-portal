## About this portal
The Sitecore developer portal is built with Next.js, Typescript, Tailwind CSS, and is hosted on Vercel. The application uses static site generation to create all the pages at build time. It also utilizes Incremental Static Regeneration (ISR) to automatically update the app when changes to page content are made. Much of the page content is written in Markdown and is converted to HTML at build time. Images that are used are managed in Sitecore DAM and are published to a CDN.

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

## Contributions

We are very grateful to the community for contributing bug fixes and improvements. We welcome all efforts to evolve and improve the Sitecore Developer Portal; read below to learn how to participate in those efforts.

### Code of Conduct

Sitecore has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/Sitecore/developer-portal/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Feedback, ideas or found issues?

The Sitecore Developer Portal is under constant development. Do you have any feedback or ideas that can improve the developer portal please let us know! Create an issue in our [GitHub repository](https://github.com/Sitecore/developer-portal/issues). Please use the issue or feature request template, label it accordingly and we will review your ticket and follow up if necessary.

### Contributing Guide

If you want to make changes to the code, follow these steps:

1. Fork the Developer Portal Repo GitHub repo.
2. Clone the forked repo to your local machine.
3. Create a feature branch from `main` for your changes. e.g. `git checkout -b my-feature-branch`
4. `npm install`
5. `npm run dev` (to preview your changes locally)
6. Make your changes (*if you changes include images please use the `public/images` folder to store the image(s)*)
7. Commit, push to your remote fork of the Developer Portal repo, then open a pull request (PR) to the `main` branch of the Developer Portal repo.

Your changes will be reviewed and merged if appropriate.
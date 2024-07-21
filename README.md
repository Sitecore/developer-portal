# ![Sitecore logo in red background](https://github.com/Sitecore/developer-portal/raw/main/apps/devportal/public/favicon-32x32.png) Sitecore Developer Portal

Welcome to the Sitecore Developer Portal repository. This app was created to help you get started with Sitecore. The developer portal aims to bring all the Sitecore developer tools together in one place.

## Technology used

The Sitecore developer portal is built with Next.js, Typescript, Chakra UI and [Sitecore Blok](https://blok.sitecore.com), managed using Turborepo and is hosted on Vercel. The app uses static site generation to create all the pages at build time. It also utilizes Incremental Static Regeneration (ISR) to automatically update the app when changes to page content are made. Much of the page content is written in Markdown and is converted to HTML at build time. Images that are used are managed in Sitecore DAM and are published to a CDN.

### Apps and Packages

- apps
  - `devportal`: Developer Portal public site ([Next.js](https://nextjs.org/) based)
- packages
  - `@scdp/ui`: a React component library based on [Sitecore Blok](https://blok.sitecore.com) used by `devportal` application
  - `@scdp/changelog`: Custom library to retrieve and parse changelog data
  - `@scdp/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
  - `@scdp/jest-presets`: `jest` configuration used throughout the monorepo
  - `@scdp/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io/) for testing
- [Prettier](https://prettier.io) for code formatting

### Prerequisites

#### Monorepo

This repository is utilizing Turborepo to manage our monorepo setup. More information about Monorepos can be found in the [Monorepo Handbook](https://turbo.build/repo/docs/handbook).

#### Node.js

The developer portal is built with Next.js, so you'll need to have Node.js installed to build the project. You can find the latest version of Node.js [here](https://nodejs.org/en/). We recommend using the LTS version of Node.js.

#### Environment Variables

The Sitecore developer portal incorporates a number of third party services to bring in content. For full functionality, you must create a **.env.local** file in the root of the project and add in the below environment variables. Use the `.env.template` file as a starting point.

The following variables should exist within the .env.local file:

```
NEXT_PUBLIC_PUBLIC_URL=
NEXT_PUBLIC_YOUTUBE_API_KEY="An API key with YouTube Data API v3 access enabled"
NEXT_PUBLIC_COOKIE_CONSENT_URL=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GTM_AUTH=
NEXT_PUBLIC_GTM_ENVIRONMENT=
```

_Note: The site will still function without the above keys. The components that require these environment variables will fail gracefully and not display on the pages._

---

To enable search the following environment variables are required:

```
NEXT_PUBLIC_SEARCH_APP_API_KEY=
NEXT_PUBLIC_SEARCH_APP_CUSTOMER_KEY=
NEXT_PUBLIC_SEARCH_APP_ENV=
NEXT_PUBLIC_SEARCH_ENABLE_PREVIEW_SEARCH=
```

_Note: The site will still function if the keys are missing or left blank. However these keys are still required to build the application_

---

To enable Sitecore CDP/Personalize to capture events the following environment variables are required:

```
NEXT_PUBLIC_SITECORE_CDP_CLIENT_KEY=
NEXT_PUBLIC_SITECORE_CDP_TARGETURL=
NEXT_PUBLIC_SITECORE_CDP_COOKIE_DOMAIN=
NEXT_PUBLIC_SITECORE_CDP_POS=
```

\_Note: The site will still function if the keys are missing or left blank.

#### CEC configuration

The account that will be used must have an initial configuration that needs to be made on CEC:

##### Sources

Information sources must be entered and processed in CEC, to populate the content catalog.

##### Suggestion Blocks

Suggestions blocks must have a field named `name_suggester` (this needs to be configured for the `preview search widget`).
The following picture shows a sample configuration:

![Suggestion Blocks](apps\devportal\public\images\CEC-Sorting_Option.png)

##### Sorting options

Sorting options must include `suggested` criteria pre-configured. You can provide display name as per your requirements. The picture shows how it should look on CEC:

![Sorting options](apps\devportal\public\images\CEC-Sorting_Option.png)

Remember to reindex the relevant sources after configuring a new sorting option.

##### Pre configured widgets

The account must have the following widgets created before:

| Name                                 | ID        | Type             | Description                                                                                                                  | Used in                         |
| ------------------------------------ | --------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [Search Results Page] Search Results | `rfkid_7` | `Search Results` | Search results widget. Will include a grid with the results together with the avility to filter results by different facets. | Search Results Page (`/search`) |
| Preview Search                       | `rfkid_6` | `Preview Search` | It is an input that does a quick search over the content. It is included on the page header.                                 | Every page                      |

## Getting Started

1. Install [Node.js](https://nodejs.org/en/), we recommend the LTS version.
2. Clone the repository.
3. Inside the repository run `npm install` to install all the dependencies.
4. Create a `.env.local` file in the root of the project from the `.env.template` file. The following environment variables should be included:

```
NEXT_PUBLIC_YOUTUBE_API_KEY=""
NEXT_PUBLIC_COOKIE_CONSENT_URL=

NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GTM_AUTH=
NEXT_PUBLIC_GTM_ENVIRONMENT=

NEXT_PUBLIC_SEARCH_APP_API_KEY=
NEXT_PUBLIC_SEARCH_APP_CUSTOMER_KEY=
NEXT_PUBLIC_SEARCH_APP_ENV=
NEXT_PUBLIC_SEARCH_ENABLE_PREVIEW_SEARCH=

NEXT_PUBLIC_SITECORE_CDP_CLIENT_KEY=
NEXT_PUBLIC_SITECORE_CDP_TARGETURL=
NEXT_PUBLIC_SITECORE_CDP_COOKIE_DOMAIN=
NEXT_PUBLIC_SITECORE_CDP_POS=
```

(For more information on populating environment variables see section **Environment Variables** above.)

5. Run `npm run dev` to start the development server.
6. Open the **<http://localhost:3000>** in your browser to see the result!

## Contributions

We are very grateful to the community for contributing bug fixes and improvements. We welcome all efforts to evolve and improve the Sitecore Developer Portal; read below to learn how to participate in those efforts.

### [Code of Conduct](https://github.com/Sitecore/developer-portal/blob/main/CODE_OF_CONDUCT.md)

Sitecore has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/Sitecore/developer-portal/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Contributing Guide

If you want to make changes to the code, follow these steps:

1. Fork the Developer Portal Repo GitHub repo.
2. Clone the forked repo to your local machine.
3. Create a feature branch from `main` for your changes. e.g. `git checkout -b my-feature-branch`
4. `npm install`
5. `npm run dev` (to preview your changes locally)
6. Make your changes (_if you changes include images please use the `public/images` folder to store the image(s)_)
   1. For more information on how to add content visit the [contribute](https://developers.sitecore.com/contribute) page
7. Commit, push to your remote fork of the Developer Portal repo, then open a pull request (PR) to the `main` branch of the Developer Portal repo.

Your changes will be reviewed and merged if appropriate.

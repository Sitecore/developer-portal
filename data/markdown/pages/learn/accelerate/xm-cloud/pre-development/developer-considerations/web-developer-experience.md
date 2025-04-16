---
title: 'Web Developer Experience'
description: 'Standardized workflows, code quality practices, and cross-functional collaboration requirements for web developers working on XM Cloud projects'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect','Technical Implementers','Project Manager', 'Product Owners']
---

## Context
Web Application developers working on XM Cloud projects face unique challenges when collaborating across team roles as introduced in the [Preparing for an XM Cloud project](/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project) recipe. They need specific support from their team members and well-defined practices to work efficiently in collaborative environments. Understanding these workflow requirements is essential for establishing effective quality standards.

## Execution
Projects can face multiple challenges but it’s often common that issues start to arise when there are:
- Inconsistent Coding Standards - without standardized practices, each developer may follow different conventions, making codebases difficult to navigate and understand.
- Integration Friction - when multiple developers contribute to the same codebase using different styles and approaches, integration becomes time-consuming and error-prone.
- Scalability Challenges - as web projects grow in complexity, poorly structured code becomes increasingly difficult to extend and maintain.
- Growing Technical Debt- without quality standards, technical debt accumulates rapidly, leading to slower development cycles and increased refactoring costs.
- Dealing with these challenges can take different approaches - your project might require specific needs, but the following are a starting recommendation on how to setup for success.

Dealing with these challenges can take different approaches - your project might require specific needs, but the following are a starting recommendation on how to setup for success.

### Establishing a Consistent Web Application Developer Workflow
A standardized workflow is essential for front-end developers to collaborate effectively.

#### Manage Node.js/npm Version Compatibility

- Use version management tools like nvm (Node Version Manager) to switch between Node.js versions required by different JSS versions
- Document required Node.js/npm versions in the project README
- Consider using Docker containers with pre-configured environments to ensure consistency across development setups
- Add `.nvmrc` files to projects to automatically prompt developers to use the correct Node.js version:

```typescript
  # .nvmrc
  v18.17.0
```
<br/><br/>

#### Configure Shared Editor Settings

Use `.editorconfig` to maintain consistency regardless of IDE choice

```typescript
  # .editorconfig
  root = true
  
  [*]
  end_of_line = lf
  insert_final_newline = true
  charset = utf-8
  indent_style = space
  indent_size = 2
  
  [*.{js,jsx,ts,tsx,json}]
  trim_trailing_whitespace = true
```
<br/><br/>
#### Standardize the Build Process

Implement consistent build steps that every team member follows. Use standardized scripts in package.json for common tasks:

```typescript
  "scripts": {
    "bootstrap": "ts-node --require dotenv-flow/config --project tsconfig.scripts.json scripts/bootstrap.ts",
    "build": "cross-env NODE_ENV=production npm-run-all --serial bootstrap next:build",
    "graphql:update": "ts-node --project tsconfig.scripts.json ./scripts/fetch-graphql-introspection-data.ts",
    "install-pre-push-hook": "ts-node --project tsconfig.scripts.json ./scripts/install-pre-push-hook.ts",
    "jss": "jss",
    "lint": "eslint ./src/**/*.tsx ./src/**/*.ts ./scripts/**/*.ts",
    "next:build": "next build",
    "next:dev": "cross-env NODE_OPTIONS='--inspect' next dev",
    "next:start": "next start",
    "scaffold": "ts-node --project tsconfig.scripts.json scripts/scaffold-component/index.ts",
    "start:connected": "cross-env NODE_ENV=development npm-run-all --serial bootstrap --parallel next:dev start:watch-components",
    "start:production": "cross-env-shell NODE_ENV=production npm-run-all --serial bootstrap next:build next:start",
    "start:watch-components": "ts-node --project tsconfig.scripts.json scripts/generate-component-builder/index.ts --watch",
    "test": "jest",
    "storybook": "storybook dev -p 6006"
  }
```
<br/><br/>
#### Define Clear Collaboration Boundaries

Establish naming conventions for files and folders. Use a logical directory structure which makes navigation intuitive, for example:

```typescript
  src/
  ├── components/
  │   ├── common/              # Shared UI components
  │   │   ├── Button/
  │   │   │   ├── Button.tsx
  │   │   │   ├── Button.module.css
  │   │   │   └── Button.test.tsx
  │   ├── feature/             # Feature-specific components
  │   │   ├── ProductCard/
  │   │   └── CheckoutForm/
  ├── lib/                     # Utility functions
  ├── styles/                  # Global styles
```
<br/><br/>
#### Package Management Practices
- Establish guidelines for adding new dependencies (approval process, size considerations)
- Set up dependency scanning for security vulnerabilities
- Consider using package lockfiles (package-lock.json, yarn.lock) and commit them to the repository
- Define a process for regular dependency updates and maintenance

Example package policy for README:
```typescript
## Package Management Policy
- Use `npm ci` for reproducible builds and when setting up projects after cloning
- Use `npm install` when adding or updating dependencies during development
- Always commit package-lock.json to the repository
- Dependencies are updated monthly using `npm-check-updates`
- Security scans run automatically in CI using `npm audit`
```
<br/><br/>
#### Local Development Tooling
- Configure browser development tools and extensions that enhance productivity
- Set up consistent local mocks for APIs and services
- Implement hot reloading and fast refresh configurations
```typescript
  // src/mocks/handlers.js
  import { rest } from 'msw';
  
  export const handlers = [
    rest.get('/api/components', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, name: 'Hero', type: 'banner' },
          { id: 2, name: 'Promo', type: 'card' }
        ])
      );
    })
  ];
```

### Automated Code Formatting and Linting
Consistent code style enhances readability and reduces cognitive load when switching between files:

#### ESLint Configuration
Implement team-wide ESLint rules:
```typescript
{
  "root": true,
  "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:yaml/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier",
    "yaml",
    "react"
  ],
  "ignorePatterns": [".generated/**/*", "**/*.d.ts", "**/*.js"],
  "rules": {
    "@next/next/no-img-element": "off", // Don't force next/image
    "jsx-a11y/alt-text": ["warn", { "elements": ["img"] }], // Don't force alt for <Image/> (sourced from Sitecore media)
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "caughtErrorsIgnorePattern": "."
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "jsx-quotes": ["error", "prefer-double"]
  }
}
```
<br/><br/>
#### Prettier Configuration

Enforce consistent formatting with Prettier:
```typescript
{
  "endOfLine": "crlf",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```
<br/><br/>
#### TypeScript Configuration

Use TypeScript for type safety:
```typescript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "components/*": ["src/components/*"],
      "lib/*": ["src/lib/*"],
      "temp/*": ["src/temp/*"],
      "assets/*": ["src/assets/*"],
      "graphql-types": ["node_modules/@types/graphql-let/__generated__/__types__"],
      "react": ["node_modules/react"]
    },
    "target": "es5",
    "types": ["node"],
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "strictFunctionTypes": false,
    "downlevelIteration": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "allowSyntheticDefaultImports": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "incremental": true,
    "forceConsistentCasingInFileNames": false
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```
<br/><br/>
#### Husky Pre-commit Hooks

Enforce standards before commits:
```typescript
  // .husky/pre-commit
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"
  
  npx lint-staged

  // package.json (lint-staged config)
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css,scss}": [
      "prettier --write"
    ]
  }
```

## Insights
For Web Application developers to work effectively in an XM Cloud project, they require specific inputs and support from other team roles. Enforcing cross-functional collaboration is key for a successfull project. The following guidance converce most common requirements expected from each role, but these should be tailored based on your setup.


**Project Managers, Project Owner**
| Scope |Guidance |
| - |  - | 
| Project Requirements | <ul><li>Clear prioritization of web UI & integrations development tasks</li><li>Sufficient time allocation for technical exploration and refactoring</li><li>Buffer for unexpected integration challenges</li><li>Understanding of technical debt and allowance for addressing it</li></ul> |
| Timeline Management | <ul><li>Realistic timelines that account for the complexity of web implementations</li><li>Dependencies mapped clearly in project plans</li><li>Adequate time for testing and bug fixing before releases</li><li>Consideration of browser compatibility testing requirements</li></ul> |
| Stakeholder Management | <ul><li>Clear communication of technical constraints to stakeholders</li><li>Support in negotiating scope when technical challenges arise</li><li>Facilitation of technical discussions with cross-functional teams</li><li>Protection of development time from unnecessary interruptions</li></ul> |

**Content Teams etc**
| Scope |Guidance |
| - |  - | 
| Content Requirements |<ul><li>Clear content models aligned with component designs</li><li>Sample content for all components and page types</li><li>Guidelines for content length, formatting, and media usage</li><li>Placeholder specifications for editable regions</li></ul> |
| Editorial Workflows |<ul><li>Understanding of publishing workflows that impact the website</li> <li>Preview/staging requirements for unpublished content</li><li>Personalization scenarios that need website implementation</li><li>Content variation requirements for A/B testing or multivariate testing</li></ul>|

**UX/UI Designers**
| Scope |Guidance |
| - |  - | 
|  Design Specifications | <ul><li>Complete design system with component specifications including states (hover, active, disabled)</li><li>Responsive breakpoint behaviors for all components and layouts</li><li>Interactive prototypes for complex user flows and animations</li><li>Clear documentation of micro-interactions and transitions</li></ul> |
| Asset Delivery | <ul><li>Optimized image assets in appropriate formats (SVG for icons, WebP/JPEG/PNG for photos)</li><li>Font files or web font references with clear usage guidelines</li><li>Design tokens exported in a consumable format (JSON, CSS variables)</li></ul> |
| Collaboration Process | <ul><li>Regular design reviews before implementation</li><li>Clear process for handling design changes after development has started</li><li>Design QA sessions to verify implementation matches specifications</li></ul> |

**CMS Developers**
| Scope |Guidance |
| - |  - | 
| API Documentation | <ul><li>Complete API specifications including endpoints, methods, request/response formats</li><li>Authentication requirements and implementation details</li><li>Error handling conventions and expected response codes</li>  <li>Sample requests and responses for all endpoints</li></ul> |
| Data Structures |<ul><li>Field definitions for Sitecore templates used in the UI</li><li>Content structure diagrams showing relationships between content types</li><li>Sample data for development and testing purposes</li><li>Clear documentation of required vs. optional fields</li></ul> |
| Integration Support | <ul><li>Access to staging environments for API testing</li><li>Assistance with configuration of Edge API connections</li><li>Support for debugging integration issues</li><li>Documentation of caching strategies and invalidation mechanisms</li></ul> |



**System Administrator/DevOps Engineers**
| Scope |Guidance |
| - |  - | 
| Environment Access | <ul><li>Development, staging, and production environment credentials</li><li>Proper permissions to deploy web code</li><li>Documentation for environment-specific configurations</li><li>Access to logs and monitoring tools</li></ul> | 
| CI/CD Pipeline Support | <ul><li>Well-documented build and deployment processes</li><li>Assistance with configuring website-specific pipeline steps</li><li>Support for implementing preview deployments</li><li>Automated testing integration in the pipeline</li></ul>|


## Related Recipes
<Row columns={2}>
    <Link title="Preparing for an XM Cloud Project" link="/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project" />
    <Link title="Branching Strategy" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/branching-strategy" />
</Row>
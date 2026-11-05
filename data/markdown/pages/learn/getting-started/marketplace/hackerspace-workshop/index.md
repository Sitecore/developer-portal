# Welcome to the SitecoreAI Marketplace Code Jam – From Idea to App in One Session - Introduction

Get ready to dive into the world of SitecoreAI extensibility and hands-on innovation. In this workshop, you’ll build a custom Marketplace app with an AI coding agent: you describe what you want, review the agent's plan, and let it write, run and verify the code while you stay in control.

The workshop has three parts:

1. [Pre-Requisites](#pre-requisites) - get your machine and AI coding agent ready (ideally before the workshop)
2. [Setup Phase](hackerspace-workshop/setup) - register, scaffold and run your app, and connect your agent to Sitecore's MCP servers
3. [Implementation](hackerspace-workshop/usecase-image-generator-ai) - build an AI image generator for SitecoreAI Page Builder

### Two ways to run this workshop

- **Let your agent drive:** point your agent at these workshop pages and ask it to work through them for you. It can do most of the setup and all of the implementation itself, but a few steps need you: registering and installing the app in the Cloud Portal, creating your Cloudflare account and API token, and signing in to the Sitecore Docs MCP.
- **Go step by step:** follow the pages yourself and prompt your agent along the way at each step.

Either way works - pick whichever suits you.

Ready? Let's go!

## Pre-Requisites

- Your own laptop
- Node.js 22 LTS or later (24 LTS recommended)
- An AI coding agent (see [Choose your AI coding agent](#choose-your-ai-coding-agent))

### Node.js

Check whether Node.js is installed and which version you have by running this in a terminal:

```bash
node -v
```

If the command isn't found or the version is below 22, download and run the LTS installer from [nodejs.org](https://nodejs.org/en/download/). npm is included with Node.js, so there's nothing extra to install.

> **TLS errors on a company laptop?** If your company inspects network traffic, Node.js may fail with certificate errors such as `SELF_SIGNED_CERT_IN_CHAIN` when running `npx` commands or calling external APIs. Tell Node.js to trust your operating system's certificates by setting this in your terminal before running any commands:
>
> - macOS / Linux: `export NODE_OPTIONS=--use-system-ca`
> - Windows (PowerShell): `$env:NODE_OPTIONS="--use-system-ca"`
>
> If Node.js doesn't recognise the option, update to the latest Node.js LTS release.

### Choose your AI coding agent

This workshop works with any coding agent that can edit files, run terminal commands and connect to MCP servers. Use whichever you're most comfortable with, for example:

- [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) - in the terminal, or as an extension for VS Code or JetBrains
- [GitHub Copilot](https://code.visualstudio.com/docs/copilot/overview) in VS Code - switch the chat to **Agent** mode
- [Cursor](https://cursor.com/downloads) - use the **Agent** mode in chat
- [OpenAI Codex](https://developers.openai.com/codex) - CLI or IDE extension

Whichever tool you choose:

1. Sign in and confirm your subscription or trial gives you access to agent features.
2. Use **agent mode**, not ask or chat-only mode. The workshop relies on the agent editing files and running commands for you. If your tool also has a **plan mode**, you can use it when the workshop asks the agent to propose a plan before writing code.
3. Pick a current, capable model from your tool's model selector.

## Next

[Go to setup](hackerspace-workshop/setup)

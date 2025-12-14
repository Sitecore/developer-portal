---
title: 'Getting Started with AI Agents'
description: 'Setting up workflow on a Page and Components level'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-12-14'
created:  '2025-12-14'
audience: ['Architect','Product Owner','Project Manager','Technical Implementer', 'User']
---

## Context
AI Agents in Sitecore are designed to automate repetitive tasks and accelerate content operations. They’re embedded in the product and can handle actions like content generation, translation, and SEO optimisation with an aim to help teams reduce bottlenecks and free up time for strategic work. 

> To use Agentic studio and all its features, ensure AI is enabled in the Sitecore Cloud Portal and that you have been added as a user. Reach out to your Sitecore Account team for issues relating to setup.

## Execution
In addition to the [AI capabilities in SitecoreAI](https://doc.sitecore.com/sai/en/users/sitecoreai/ai-capabilities-in-sitecoreai.html), a number of build-in agents that support common marketing tasks have been made available.

### What is an agent?
An agent is a specialised AI-powered system that acts autonomously to complete tasks, make decisions, and collaborate with other agents. Think of agents as digital teammates that help you automate marketing work while staying aligned with your rules, workflows, and brand guidelines.

[Agentic studio](https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio.html) includes several built-in agents that support common marketing tasks, including the following.

> The following prompts are provided as guided examples and should be tailored to your requirements and setup. Please ensure thorough testing is conducted to validate its usability.

### AEO/SEO researcher
This agent audits your key pages, keywords, and competitor list, then generates a structured report on technical SEO (Search Engine Optimisation) and AI-readiness for generative search engines. To get started copy the prompt below and adapt it:

Make sure that as part of your prompt, or files provided, you provide:
- URL/URLs including URLs files.
- Brand keywords, glossaries.
- Competitor name or list if comparison is required.
- Context including tone of voice, brand alignment, compliance if required.

To get started copy the prompt below and adapt it:

> **Audit the provided URLs (including any URL files) for SEO and AI search readiness. Highlight technical issues, content gaps, and featured snippet opportunities. Incorporate brand keywords and glossaries, note competitor names if comparison is required, review prior SEO/AEO audits, and factor in context such as tone of voice, brand alignment, and compliance requirements.**


Agents can also be [configured for flexibility](https://doc.sitecore.com/sai/en/users/sitecoreai/aeo-seo-researcher.html) - setup your recurring keyworks from your brand or preferred consistent output format.

### Bulk content generator
This agent creates multiple content variants tailored to different personas and channels, helping you scale campaigns without sacrificing brand consistency or relevance. After you enter a prompt with your source content, persona definitions, and channel list, the agent will generate content variants for each persona and channel ready for review, download, and next steps.

Make sure that as part of your prompt, or files provided, you provide:
- Source content including your key message.
- Definitions of personas in prompt or file such as: "Fashion Conscious Shopper - Goal: Discover new trends. Pain Points: Overwhelmed by choice. Preferred Tone: Aspirational.
- Channel specification example Instagram – 30-50 per caption.
- Brand guidelines, tone of voice or create assets that align to this content.

To get started copy the prompt below and adapt it:

> **Generate content variants for our spring campaign that focused on the fashion-conscious shopper and the trend enthusiast. Content is for Email, Social including LinkedIn and Instagram. Keep tone consistent and on-brand (aspirational, trustworthy, customer-focused) and use the attached brand guidelines and approved messaging pillars.**


Agents can also be [configured for flexibility](https://doc.sitecore.com/sai/en/users/sitecoreai/bulk-content-generator.html) - setup your recurring audience segmentation with tone variations based on persona, pre-set channels including email, social, blog or preferred outputs.

### Translator
This agent enables accurate, brand-aligned translations across multiple languages. By adapting messaging and phrasing to each market’s context, it help maintain authenticity and consistency for international campaigns.

Make sure that as part of your prompt, or files provided, you provide:
- Source content such as blog, campaign brief or product descriptions.
- Target language or languages.
- Context including tone of voice, brand alignment, compliance if required.
- Additional supporting assets such as glossaries, terminology lists or regional guidelines.

To get started copy the prompt below and adapt it:

> **Translate the attached product launch email into French, German, and Spanish. Maintain our brand tone (premium, trusted, customer-centric) and use the approved glossary for key terms. Localise currency, date formats, and any region-specific compliance language.**


Agents can also be [configured for flexibility](https://doc.sitecore.com/sai/en/users/sitecoreai/translator.html) - setup your predefined target locales that are used consistently, tone of voice and company wide glossary to provide consistent guidance for company-specific terms.


### Researcher
The Researcher agent conducts multi-source analysis, pulling from analyst firms, industry reports and web sources to deliver structured reports with full citations. Perfect for market sizing, competitive intelligence, and trend discovery. You'll receive a detailed report including gather market insights, competitive intelligence, and trend analysis.

Make sure that as part of your prompt, or files provided, you provide:
- A focused question or topic as part of your prompt.
- Scope details such as region, timeframe or preferred sources if relevant.
- List of preferred sources, competitor names, or files (briefs, campaign notes).

To get started copy the prompt below and adapt it:

> **Research the latest trends in digital customer engagement for the luxury retail industry in EMEA. Summarise key findings, cite sources, and highlight 3 actionable insights for our team. Focus on 2025-2026 projects and recent innovations around AI-driven strategies. Compare at least two competitors, Burberry and Harrods. Use sources from industry reports, analyst briefing and recent news articles. Factory in our tone of voice (premium, trusted, customer-centric), and our attached compliance requirements.**


Agents can also be [configured for flexibility](https://doc.sitecore.com/sai/en/users/sitecoreai/researcher.html) - setup your focus keywords that are relevant for each require and scope structure to provide always the same templated output.

## Picking the Right Agent
This is where theory turns into action. Don’t overcomplicate it—start small, focus on workflows that give quick wins  before scaling. Each step below is designed to cut friction and keep outputs aligned with brand standards.

| Step | Content |
|------|---------|
| **Step 1: Pick the Right Agent** | Start with high-impact, low-complexity use cases:<br/><br/>Bulk Content Generator: scale product descriptions or landing pages.<br/>Translator: localise content for multiple markets.<br/>AEO/SEO Researcher: optimise for search visibility, including AI-driven queries. |
| **Step 2: Prepare Inputs** | Gather source content or prompts and add the right context: audience, tone, format, keywords.<br/>Avoid vague prompts. Example:<br/><br/>Bad: “Write product descriptions.”<br/>Good: “Generate 3 product descriptions for B2B audience in formal tone, 150 words each.” |
| **Step 3: Run and Review** | Execute the agent and validate outputs against brand guidelines.<br/>Iterate by refining prompts—add persona, length, and keywords. |


## Insights
For any organization getting starrted, there are key lessons to keep in mind that seperate teams from getting stuck from those that actually see results. Set up the right foundations, and make sure your first steps with agents lead to real impact, not just another tech experiment.

- Don’t guess where AI will help. Document your marketing workflow first, including who’s involved and where things slow down. Look for manual data entry, repeated approvals, or fragmented communication. This baseline makes it obvious where automation or agents will have the biggest impact.
-AI is only as good as the signals you feed it. Focus on capturing the right customer signals, purchase intent, engagement, churn risk—and make sure you’re acting on them. If you’re not sure which signals matter, ask: *“Where do we lose customers or miss opportunities?”* Use AI to spot patterns and predict what’s next, not just report on what happened.
- Automating governance is as important as automating content. Start by evaluating your current compliance and risk processes. Where are the gaps? Use AI to enforce rules, monitor data quality, and flag anomalies. Build in human oversight at key points, especially for compliance and brand checks. Clear policies and audit trails are non-negotiable.
- Always add an approval step before publishing. Human review is critical for regulated sectors, don’t shortcut this, even if it slows things down.
- If you’re running agents at scale, schedule staggered execution to  ensure outputs stay consistent as you grow in process.
- Don’t pitch AI on hype. Quantify cost savings from automation, show revenue gains from faster launches or better personalisation, and use data to project ROI. Link every AI use case to an outcome.
- Run small, high-impact pilots first. Pick a use case with clear value and limited scope, ideally something that crosses teams to show improved workflows. Don’t try to govern or automate everything at once—overloading agents creates chaos. Build on what works, and make sure someone owns the pilot.
- Prompt quality matters, garbage in = garbage out. Invest time in crafting clear, specific prompts. Poor prompts lead to poor outputs, no matter how good the agent is.
- Train, then scale, AI literacy is a must. Invest in training so teams know how to prompt, review, and govern AI outputs. Make sure everyone understands the “why” behind the process, not just the “how.” This reduces resistance and sets you up for smoother scaling.
- Assign clear roles for every part of the process—who runs the agent, who reviews outputs, who signs off. If there’s no owner, things stall. Engage stakeholders early, especially those who’ll approve or use the outputs.
- Monitor performance, gather user feedback, and run regular audits. Use these insights to refine both the workflow and the AI models. This keeps your programme aligned with your goals and regulatory requirements.



### Related Recipies

<Row columns={2}>
  <Link title="Sitecore Marketplace" link="/learn/accelerate/xm-cloud/implementation/extensions" />
  <Link title="Operational Governance" link="/learn/accelerate/xm-cloud/optimization/operational-governance" />
</Row>

### Related Documentation

<Row columns={2}>
  <Link title="Working with Agentic studio" link="https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio.html" />
  <Link title="Understanding agents" link="https://doc.sitecore.com/sai/en/users/sitecoreai/understanding-agents.html" />
  <Link title="AI capabilities in SitecoreAI" link="https://doc.sitecore.com/sai/en/users/sitecoreai/ai-capabilities-in-sitecoreai.html" />
  <Link title="Integrating Sitecore with agentic platforms" link="https://doc.sitecore.com/sai/en/users/sitecoreai/integrating-sitecore-with-agentic-platforms.html" />
</Row>

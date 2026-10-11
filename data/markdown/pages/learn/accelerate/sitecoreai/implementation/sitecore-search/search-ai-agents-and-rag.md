---
title: 'Using Sitecore Search to power AI agents'
description: 'How to expose Sitecore Search retrieval capabilities as tools or context for an AI agent or RAG pipeline, independent of model provider or agent-hosting platform'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2026-10-12'
created: '2026-10-12'
audience: ['Architect','Technical Implementer', 'System Administrator']
---


## Context
Site visitors, customers and staff ask questions that a site's content already answers, and they expect an answer rather than a list of links. Typical cases are a visitor asking about a product, a customer looking for support or documentation, and a reader working through a large article library.

Teams meet this with an AI agent or a Retrieval-Augmented Generation (RAG) experience, and often struggle to keep the model answering from their content instead of its general knowledge. This recipe shows how to use Sitecore Search as the retrieval layer, so answers come from content the site team controls.

<Alert type="info"><AlertIcon />The code provided is a guideline and must be tailored to your implementation. Test it end to end in your own environment, including the case where the index has no answer.</Alert>


## Execution

The agent must never answer about your content from anywhere other than retrieved results. Every step below protects that.

The basic implementation is an agent with three Search-backed tools, grounded in what those tools return. Work through the steps in order. Routing, RAG, the relevance gate, multi-site scoping and latency are in Insights.

### Separate retrieval from generation

An AI agent or RAG experience needs two things: content to answer from, and a model to write the answer. Sitecore Search supplies the first. The model supplies the second.

In a RAG experience, the system retrieves relevant content first and hands it to the model as the material to answer from, instead of relying on what the model learned in training. An agent is a model that can call tools, such as a search, and decide for itself when to use them. This recipe covers both, from a simple question-and-answer (Q&A) widget to a multi-turn chat assistant or an autonomous agent with several tools.

- Sitecore Search is the source for what your content says. It holds a hosted, relevance-ranked, facetable index over one or more content sources, plus a Q&A capability that returns curated and AI-generated question and answer pairs.
- The model reasons and writes. It decides what to look up, composes the answer and holds the conversation. It should never be the source for facts about your content, because that is where hallucination comes from.

The failure to design against is an agent that answers from the model's general knowledge while appearing to use your content. It usually comes from loose retrieval: no relevance threshold, no instruction to refuse, or retrieval the model is free to skip. The answer reads just as fluently either way, so the problem is easy to miss.

### Before you start

Content must already be indexed, with the attributes an agent needs to cite: title, URL, summary, and any facet attributes used for filtering. See [Integrating Sitecore Search](https://developers.sitecore.com/learn/accelerate/sitecoreai/implementation/sitecore-search/integrating-sitecore-search).

If you use the Q&A tool, the Questions and Answers capability must be configured and batch generation must have run at least once. Batch generation creates the `rfkid_qa` widget that Q&A requests depend on. See [Create a questions-answers widget](https://doc.sitecore.com/sdk/en/developers/006/cloud-sdk/create-a-questions-answers-widget.html).

You also need an agent framework and a chat model. The code in this recipe uses Vercel AI SDK with Azure OpenAI. Other options for each layer are listed under "The four layers and example options" in Insights.

### Build the retrieval functions first, and make them fail safe

Write plain server-side calls to the REST API that take a query (and optional facets and locale) and return normalised documents. This layer is identical whatever orchestration and model you choose next, and it can be tested on its own.

Keep every retrieval function defensive. On any failure (missing config, non-2xx response, timeout), return an empty result rather than throwing, so a Search problem degrades the answer instead of crashing the conversation. Never pass a raw Search error message to the model or the end user. It can carry internal configuration detail.

Because failures return empty, a misconfiguration (bad domain, API key or widget ID) looks identical to "no results". Verify credentials and IDs directly against the Search console.

### Expose Search as tools

Every mainstream agent framework uses the same tool contract: a name, a description the model uses to decide when to call it, a parameter schema, and a function that executes and returns structured data. That is why Search-as-tools is portable. The definitions map directly onto:

- OpenAI or Azure function calling: `tools: [{ type: 'function', function: { name, description, parameters } }]`
- Anthropic tool use: `tools: [{ name, description, input_schema }]`
- LangChain: a `DynamicStructuredTool`
- A Bedrock Agent action group, or a Vercel AI SDK `tool()` call

Only the wiring into the model call is framework-specific. The retrieval logic inside each tool does not change.

Recommended baseline tool set:

1. Search content. Free-text keyphrase against the content entity, with optional facet filters (content type, author, tags or topics). Facet filters are optional and independent of the keyphrase, because "browse everything by this author" is a valid query with no keyphrase.
2. List facet values. Lets the model discover the exact, valid values for a facet before filtering, instead of guessing a value that does not exist in the index.
3. Ask the knowledge base (Q&A). A natural-language question against the Q&A capability, returning an exact answer (if the engine can produce one) plus related questions. For direct questions, prefer this over raw content search.

The three tools as implemented in the reference stack (Vercel AI SDK with Zod schema validation):

| Tool | Parameters | Returns | Notes |
|---|---|---|---|
| `searchArticles` | `query?: string`, `contentType?: string`, `author?: string`, `tags?: string[]` | `Array<{ id, title, description?, url?, relevanceScore? }>` | All filters are optional and independent of `query`. Facet values must match the index exactly, so pair with `listArticleFacets` |
| `listArticleFacets` | none | `{ contentTypes: string[], authors: string[], tags: string[] }` | Lets the model find real facet values before filtering |
| `askKnowledgeBase` | `question: string` | `{ exact?: { question, answer }, related: Array<{ question, answer }> }` | Curated Q&A, English only. Call before `searchArticles` for direct questions |

The snippets in this recipe use the AI SDK v4 names (`parameters`, `maxSteps`, `toDataStreamResponse`). Vercel's current release is [AI SDK 6](https://vercel.com/blog/ai-sdk-6), and later major versions renamed some of these (for example `inputSchema` for `parameters`, `stopWhen` for `maxSteps`). Check names against the version installed in your project, using the [current docs](https://ai-sdk.dev/docs/introduction) or the [v4 docs](https://v4.ai-sdk.dev/docs/foundations) as appropriate. The retrieval logic is unaffected.

Each tool is a `tool({ description, parameters, execute })` object from the `ai` package. The Sitecore Search call happens inside `execute`.

The content-search tool:

```ts
import { tool } from 'ai';
import { z } from 'zod';
import { querySitecoreSearch } from '@/lib/sitecore-search-query';

const searchArticles = tool({
  description:
    'Search the article index for relevant content. Optionally narrow by ' +
    'content type, author, and/or topic tags (get exact values from listArticleFacets first). ' +
    'query is optional - omit it (or use a topical keyword, not the filter value itself) ' +
    'when browsing by author/content type/tags alone.',
  parameters: z.object({
    query: z.string().optional().describe('Search keyphrase (omit to just browse by filters)'),
    contentType: z.string().optional().describe('Filter to this exact content type value'),
    author: z.string().optional().describe('Filter to this exact author value'),
    tags: z.array(z.string()).optional().describe('Filter to articles tagged with any of these topics'),
  }),
  execute: async ({ query, contentType, author, tags }) =>
    querySitecoreSearch(query ?? '', 5, { contentType, author, tags }, locale),
});
```

The facet-discovery tool:

```ts
const listArticleFacets = tool({
  description:
    'List the available content type, author, and topic tag values in the ' +
    'article index, with result counts, so a search can be narrowed accurately.',
  parameters: z.object({}),
  execute: async () => listSearchFacetValues('the', locale),
});
```

The curated Q&A tool:

```ts
const askKnowledgeBase = tool({
  description:
    'Ask the curated Q&A knowledge base a natural-language question. Returns an ' +
    'editorially reviewed answer plus related question/answer pairs. Prefer this over ' +
    'searchArticles when the user asks a direct question ("what is X", "how does Y work"), ' +
    'since these answers are reviewed by the site team. Falls back to empty when the ' +
    'knowledge base has nothing on the topic - use searchArticles then. English only.',
  parameters: z.object({
    question: z.string().describe("The user's question, phrased as a full question"),
  }),
  execute: async ({ question }) => querySitecoreQuestions(question, 4, locale),
});
```

### Wire the tools into the model call

Declare the chat model:

```ts
import { createAzure } from '@ai-sdk/azure';

const azure = createAzure({
  resourceName: process.env.AZURE_OPENAI_RESOURCE_NAME,
  apiKey: process.env.AZURE_OPENAI_API_KEY,
});

// Writes the answer. Never used for scoring relevance.
export const chatModel = azure(process.env.AZURE_OPENAI_DEPLOYMENT);
```

Then pass the tools to the model. This step is specific to Vercel AI SDK's `streamText`. The tool definitions above are portable.

```ts
import { streamText } from 'ai';
import { chatModel } from '@/lib/azure-openai';

const result = streamText({
  model: chatModel,
  system: groundingInstructions, // see "Write grounding instructions"
  messages,
  tools: {
    listArticleFacets,
    askKnowledgeBase,
    searchArticles,
  },
  // Lets the model chain several tool calls (for example listArticleFacets,
  // then a filtered searchArticles) before writing its final answer.
  maxSteps: 5,
});

return result.toDataStreamResponse();
```

### Write grounding instructions

Retrieval alone does not stop hallucination. A model handed three retrieved documents will still blend in outside knowledge unless told not to.

The system or tool-result prompt must say, in plain terms, to answer only from retrieved results and to say so when nothing relevant was found. It must not soften a weak match with outside knowledge to be helpful. It should also tell the model to cite the source of each answer.

To stop weak matches reaching the model at all, add the relevance gate described under Insights.

### Keep credentials server-side

Sitecore Search's browser-facing API key is domain-scoped and designed to be called from the client, much like a search-only key on other platforms. It is safe to expose to the browser and is what the client-side SDK widgets use.

The model provider's API key (Azure OpenAI, OpenAI, Anthropic, Bedrock credentials) is a real secret and must only be read server-side. Never let it, or the raw retrieved context (which may include internal notes, depending on the corpus), reach client-side code.

### Test refusal and answer quality

Ask something the index does not cover and confirm the agent says so. Testing only the happy path will not show whether the refusal instruction works, or the relevance gate if you added one.

Then test answer quality. Take a sample of real questions, compare each answer with the document it cites, and include questions the Q&A index covers and questions it does not. A fluent answer can still be wrong, so check the content, not the tone.

## Insights

The sections below cover alternatives, optional additions and troubleshooting. Add them as your implementation needs them.

### The four layers and example options

Whatever the stack, the pattern has four layers. Only the first is fixed.

| Layer | Job | Example options |
|---|---|---|
| Retrieval | Query the Sitecore Search index (content entity and/or Q&A entity) and return ranked documents | Always Sitecore Search. Discover REST API (`/discover/v2/{domainId}`) called server-side, or `@sitecore-search/react` and `@sitecore-search/data` from the client for non-agent widgets |
| Relevance scoring (the gate) | Score each retrieved document against the query so weak matches never reach the generative model | A dedicated embedding model, separate from the generation model: Azure OpenAI or OpenAI `text-embedding-3-*`, Cohere Embed, a self-hosted embedding model |
| Orchestration | Decide when to retrieve, format retrieved content as context or tool results, run the conversation or agent loop | Vercel AI SDK, LangChain or LangGraph, OpenAI Assistants or Responses API, AWS Bedrock Agents, Google Vertex AI Agent Builder, a hand-rolled loop over any chat-completions API |
| Generation | Turn retrieved context into a written answer | Azure AI Foundry (Azure OpenAI), OpenAI, Anthropic, AWS Bedrock models, Google Gemini, a self-hosted open-weight model. Any chat-capable model |

### Choose the retrieval pattern

Implementations often offer more than one pattern, for example an answer panel on a search results page and a separate chat page. Decide per channel, based on how much retrieval judgement it needs.

|  | Agentic tool-calling (model-decided retrieval) | RAG (forced retrieval) |
|---|---|---|
| *How it works* | Give the model one or more Search-backed tools and let it decide, turn by turn, whether and what to call | On every turn, retrieve the top-k documents (and/or a Q&A hit) from Search before the model sees the question, and instruct the model to answer only from that context |
| *Use it when* | Start here when the agent needs judgement about what to look up, such as narrowing by facet, running a free-text search or asking the knowledge base | You have a single-shot answer panel, where predictable behaviour matters more than flexibility |
|* What to know* | Agent with tools give better answers than a forced-retrieval pipeline. We have not measured the difference, so test both against your own content | Easy to reason about |

### Route the query before you retrieve

Not every query needs Q&A or a model. Decide the route first, then call only what that route needs.

| Visitor input | Route | Why |
|---|---|---|
| A keyword, such as "battery" | Standard Sitecore Search results. No Q&A call and no model | Fastest path, and no generated answer is needed |
| A question that has a Q&A match | Return the curated answer, then continue with the agent if the visitor follows up | Q&A pairs are editorially curated, so they are the higher-trust source |
| A question with no Q&A match | The agent searches the index and answers from the results, or says it has nothing relevant | The index may still hold the answer in article text |
| A dedicated chat page | The agent directly, with the same tools | The visitor has already chosen a conversation |

Decide how your implementation recognises a question, for example a question mark or a leading word such as what, how or why. A simple check is enough to start with. Refine it against real visitor queries, because a keyword query sent down the question route pays for every extra step.

### Gate relevance with a separate embedding model

Sitecore Search returns relevance-ordered results but no numeric score that is comparable across queries. Nothing else stops a weak or unrelated match being handed to the model as solid context, so the gate needs its own scoring step.

That step must use a model that is not the generative model. "Rerank by embedding cosine similarity" is easy to read as a detail of the generation model. It needs an entirely separate model deployment. The reference implementation uses two Azure OpenAI deployments:

- A chat deployment (for example a GPT-5-class model) that only writes the final answer.
- An embedding deployment (for example `text-embedding-3-small`) that only scores relevance. It never sees the conversation and never generates any of the answer.

Most chat-completion models cannot produce embeddings, so trying to reuse the chat model for both jobs fails.

Embed the query and every candidate document in one batched call, score by cosine similarity, and let only documents above a tuned threshold continue to the generative model. Skip scoring when there is no query, as in browse-by-filter calls, because there is nothing to score against.

Tune the threshold against real query and document pairs for your corpus. In the reference implementation, matched pairs scored roughly 0.6 to 0.75 and unmatched pairs roughly 0.15 to 0.4, so 0.45 sat in the gap between the two clusters. That gap is specific to that content set. Re-measure it for a different collection.

Declare the embedding model next to the chat model, explicitly separate:

```ts
// Scores relevance for the gate below. Never generates any of the answer and
// never sees the conversation, only a query string and candidate document text.
export const embeddingModel = azure.textEmbeddingModel(
  process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT || 'text-embedding-3-small',
);
```

The gate itself:

```ts
import { embedMany, cosineSimilarity } from 'ai';
import { embeddingModel } from '@/lib/azure-openai';

export async function rerankByRelevance(query, docs) {
  // A browse-by-filter call has no query to score against, so skip the gate.
  if (!query || !docs.length) return docs;

  const docTexts = docs.map((d) => (d.title + '. ' + (d.description ?? '')).trim());
  const { embeddings } = await embedMany({
    model: embeddingModel, // the embedding-only model, not chatModel
    values: [query, ...docTexts],
  });
  const [queryEmbedding, ...docEmbeddings] = embeddings;

  return docs
    .map((doc, i) => ({
      ...doc,
      relevanceScore: cosineSimilarity(queryEmbedding, docEmbeddings[i]),
    }))
    .sort((a, b) => (b.relevanceScore ?? 0) - (a.relevanceScore ?? 0));
}

// The gate: anything scoring below this never reaches the generative model.
const RELEVANCE_THRESHOLD = Number(process.env.RAG_RELEVANCE_THRESHOLD) || 0.45;

export function filterByRelevance(docs, threshold = RELEVANCE_THRESHOLD) {
  return docs.filter((d) => d.relevanceScore === undefined || d.relevanceScore >= threshold);
}
```

Then apply it inside the content-search tool, replacing its `execute`:

```ts
import { rerankByRelevance, filterByRelevance } from '@/lib/rerank';

  execute: async ({ query, contentType, author, tags }) => {
    const docs = await querySitecoreSearch(query ?? '', 5, { contentType, author, tags }, locale);
    // Score with the embedding model, then drop anything below the threshold
    // so weak matches never reach the generative model.
    const ranked = await rerankByRelevance(query ?? '', docs);
    return filterByRelevance(ranked);
  },
```

### Scope retrieval by site and locale

A Search domain has one shared index across every source that feeds it. For a multi-site project, scope every retrieval call and every tool to the site's own source ID or IDs. Otherwise an agent on Site A will cite Site B's content with full confidence.

The Q&A capability is a Sitecore Stream capability and currently supports English only (see [The Questions and Answers capability](https://doc.sitecore.com/search/en/users/search-user-guide/the-questions-and-answers-capability.html), and recheck it, as language coverage will change). It typically cannot be scoped by a request-level source filter. Its scoping comes from how the Q&A group was configured in the Search console. Design the agent to fall back to plain content search or RAG for locales and sources Q&A does not cover.

Whatever resolves the visitor's locale (site language, URL prefix, domain mapping) should drive both the language the agent answers in and the language it searches in. An English query against a Spanish-only index, or the reverse, returns nothing without raising an error.

### Performance consideringations

Keep keyword search and facet changes on the direct Search path. Every extra step adds time: the Q&A call, the embedding call for the relevance gate and the model call. Expect answers in seconds rather than milliseconds, and stream the response so the visitor sees progress.

A Q&A request that finds no match can take noticeably longer than one that does (seen with a small index of about 100 questions). Set a timeout on the Q&A call and fall back to the agent or plain search when it expires.

Measure each step separately against your own index: the Search call, the Q&A call, the embedding call and the first token from the model. Set expectations from your own numbers, not from another project's.



### Troubleshooting

| Symptom | Likely cause | What to try |
|---|---|---|
| Agent never returns search results | Retrieval call is misconfigured (bad domain, API key or widget ID) | Check credentials and widget and domain IDs directly against the Search console |
| Agent answers confidently on topics the index does not cover | Missing or weak refusal instruction, no relevance threshold, or threshold too low | Add or strengthen the "answer only from retrieved context" instruction. Confirm the threshold filter is applied to tool results, not only computed. Tune it against real matched and unmatched query and document pairs |
| Facet-filtered tool calls return nothing although the value looks right | The model guessed a facet value instead of using the real one | Add or fix the facet-discovery tool so the model looks up valid values before filtering |
| Multi-site agent cites another site's content | Retrieval is not scoped to the site's Search source | Add source-ID scoping to every retrieval call, not just the primary search widget |
| Q&A tool returns nothing for a non-English locale | Q&A language coverage | Confirm current Q&A language support in product documentation. Fall back to plain content search or RAG outside supported locales |
| Browse-by-filter calls return odd or empty results after adding the gate | The gate is scoring an empty query | Skip scoring when there is no query, as in `rerankByRelevance` above |
| Results are slow to appear | Keyword queries are routed through Q&A or the agent | Send keyword queries straight to Search. Reserve Q&A and the agent for questions |
| Q&A requests are slow when the question is not covered | A request with no match takes longer than a hit | Set a timeout on the Q&A call and fall back to the agent or plain search |


## Related recipes

<Row columns={2}>
  <Link title="Integrating Sitecore Search" link="/learn/accelerate/sitecoreai/implementation/sitecore-search/integrating-sitecore-search" />
  <Link title="Incrementally updating Search" link="/learn/accelerate/sitecoreai/implementation/sitecore-search/search-incremental-updates" />
  <Link title="Enhancing search with documents" link="/learn/accelerate/sitecoreai/implementation/sitecore-search/document-search" />
</Row>

## Related documentation
 <Row columns={2}>
  <Link title="Integrating using REST APIs" link="https://doc.sitecore.com/search/en/developers/search-developer-guide/integrating-using-rest-apis.html" />
  <Link title="Search and Recommendation API reference and data model" link="https://doc.sitecore.com/search/en/developers/search-developer-guide/search-and-recommendation-api-reference-and-data-model.html" />
  <Link title="Questions and Answers capability" link="https://doc.sitecore.com/search/en/users/search-user-guide/the-questions-and-answers-capability.html" />
  <Link title="Getting AI-powered questions and answers" link="https://doc.sitecore.com/search/en/developers/search-developer-guide/getting-ai-powered-questions-and-answers.html" />
</Row>
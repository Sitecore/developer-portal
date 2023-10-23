import { IPersonalizedExperience } from '@/src/components/chatbot/IExperienceResult';
import { OpenAIConfig } from '@/src/components/chatbot/OpenAiConfig';
import { AzureKeyCredential, OpenAIClient } from '@azure/openai';
import { NextRequest, NextResponse } from 'next/server';
import { Message, MessageType } from '../../types/Message';

export async function POST(request: NextRequest) {
  const data = await request.json();
  const formatMessage = ' Format this answer as MarkDown, but dont mention it in the reponse';
  const { query, context, history }: { query: string; context: IPersonalizedExperience | undefined; history: Message[] } = data;

  if (!query) {
    return new NextResponse('Please provide a query parameter', { status: 400 });
  }

  // Use Context to fill in the LLM with more context data
  const messages = [{ role: 'system', content: 'You are a helpful assistant, designed to help Developers building with Sitecore.' }];

  if (context?.persona) {
    messages.push({ role: 'user', content: `I'm a ${context.persona.Name} and I value these responses: ${context.persona.CommonAttributes}` });
  }

  if (context?.recent_search_summary) {
    messages.push({ role: 'user', content: `I've recently searched for ${context.recent_search_summary}` });
  }

  if (context?.relevant_tags) {
    messages.push({ role: 'user', content: `I've recently been interested in the following topics: ${context.relevant_tags.join(',')}` });
  }

  if (context?.product) {
    messages.push({ role: 'user', content: `I've recently viewed the following products: ${context.product.name}` });
  }

  if (history?.length > 0) {
    for (const item of history) {
      if (item.type == MessageType.Assistant) {
        messages.push({ role: 'assistant', content: item.text });
      } else {
        messages.push({ role: 'user', content: item.text });
      }
    }
  }

  const client = new OpenAIClient(OpenAIConfig.AzureOpenAIEndpoint, new AzureKeyCredential(OpenAIConfig.AzureOpenAIKey));
  messages.push({ role: 'user', content: query + formatMessage });

  const response = await client.getChatCompletions(OpenAIConfig.AzureOpenAIDeploymentId, messages);

  return new NextResponse(JSON.stringify(response.choices[0]?.message?.content));
}

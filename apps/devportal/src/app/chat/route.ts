import { IExperienceResult } from '@/src/components/chatbot/IExperienceResult';
import { NextResponse } from 'next/server';
import { Message, MessageType } from '../../types/Message';
import { AzureOpenAI } from './azure-openai';

export interface IChatGPTPayload {
  query: string;
  context: IExperienceResult | undefined;
  history: Message[];
}

export async function POST(request: Request) {
  const data = (await request.json()) as IChatGPTPayload;
  const formatMessage = ' Format this answer as MarkDown, but dont mention it in the reponse';
  const { query, context, history }: { query: string; context: IExperienceResult | undefined; history: Message[] } = data;

  if (!data.query) {
    return new NextResponse('Please provide a query parameter', { status: 400 });
  }

  // Use Context to fill in the LLM with more context data
  const messages = [{ role: 'system', content: 'You are a helpful assistant, designed to help Developers building with Sitecore.' }];

  if (context?.persona) {
    //messages.push({ role: 'user', content: `I'm a ${context.persona.Name} and I value these responses: ${//context.persona.CommonAttributes.join(', ')}` });
    messages.push({ role: 'user', content: `I'm a ${context.persona} and I value these responses: code samples vs marketing fluff` });
  }

  if (data.context?.recent_search_summary) {
    messages.push({ role: 'user', content: `I've recently searched for ${data.context.recent_search_summary}` });
  }

  if (context?.relevant_tags) {
    messages.push({ role: 'user', content: `I've recently been interested in the following topics: ${context.relevant_tags}` });
  }

  if (context?.product_details) {
    messages.push({ role: 'user', content: `I've recently viewed the following products: ${context.product_details}` });
  }

  if (data.history?.length > 0) {
    for (const item of data.history) {
      if (item.type == MessageType.Assistant) {
        messages.push({ role: 'assistant', content: item.text });
      } else {
        messages.push({ role: 'user', content: item.text });
      }
    }
  }
  messages.push({ role: 'user', content: data.query + formatMessage });

  const azure = new AzureOpenAI();

  const stream = await azure.streamChatCompletion({
    messages: messages,
    stream: true, // stream the response
  });

  return new Response(stream);
}

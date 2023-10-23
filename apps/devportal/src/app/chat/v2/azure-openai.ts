// Based on https://github.com/thivy/azure-openai-js-stream

/* eslint-disable no-constant-condition */
import { OpenAIConfig } from '@/src/components/chatbot/OpenAiConfig';
import { SSEParser } from './sse-parser';

export type CreateChatCompletionRequestStop = Array<string> | string;

export type CreateChatCompletionRequest = {
  messages: { role: string; content: string }[];
  temperature?: number | null;
  top_p?: number | null;
  n?: number | null;
  stream?: boolean | null;
  stop?: CreateChatCompletionRequestStop;
  max_tokens?: number;
  presence_penalty?: number | null;
  frequency_penalty?: number | null;
  logit_bias?: object | null;
  user?: string;
};

export class AzureOpenAI {
  public async streamChatCompletion(createChatCompletionRequest: CreateChatCompletionRequest) {
    const chatAPI = `${OpenAIConfig.AzureOpenAIEndpoint}openai/deployments/${OpenAIConfig.AzureOpenAIDeploymentId}/chat/completions?api-version=2023-07-01-preview`;
    const jsonString = this.stringifyJsonWithoutNulls(createChatCompletionRequest);

    const response = await fetch(chatAPI, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': OpenAIConfig.AzureOpenAIKey,
      },
      method: 'POST',
      body: jsonString,
    });

    const stream = this.createStreamFromResponse(response);
    return stream;
  }

  private async processResponse(reader: ReadableStreamDefaultReader<Uint8Array>, controller: ReadableStreamDefaultController<Uint8Array>) {
    const SSEEvents = {
      onError: (error: any) => {
        controller.error(error);
      },
      onData: (data: string) => {
        const queue = new TextEncoder().encode(data);
        controller.enqueue(queue);
      },
      onComplete: () => {
        controller.close();
      },
    };

    const decoder = new TextDecoder();
    const sseParser = new SSEParser(SSEEvents);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunkValue = decoder.decode(value);
      sseParser.parseSSE(chunkValue);
    }
  }

  private createStreamFromResponse(response: Response) {
    const source: UnderlyingDefaultSource<Uint8Array> = {
      start: async (controller) => {
        if (response && response.body && response.ok) {
          const reader = response.body.getReader();
          try {
            await this.processResponse(reader, controller);
          } catch (e) {
            controller.error(e);
          } finally {
            controller.close();
            reader.releaseLock();
          }
        } else {
          if (!response.ok) {
            controller.error(response.statusText);
          } else {
            controller.error('No response body');
          }
        }
      },
    };

    return new ReadableStream(source);
  }

  private stringifyJsonWithoutNulls(obj: any): string {
    return JSON.stringify(obj, (key, value) => {
      if (value === null || value === undefined) {
        return undefined;
      }
      return value;
    });
  }
}

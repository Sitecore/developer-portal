import { QuerySearchApiParams, QuerySearchApiResult } from "./types";

export async function QuerySearchApi({ query }: QuerySearchApiParams): Promise<QuerySearchApiResult> {

  const response = await fetch('https://discover.sitecorecloud.io/discover/v2/140623527', {
    method: 'POST',
    headers: {
      Authorization: process.env.NEXT_PUBLIC_SEARCH_APP_API_KEY ?? '',
    },
    body: query,
  });

  return await BindResponse(response);
}

export async function BindResponse(response: Response): Promise<QuerySearchApiResult> {
  const data = await response.json();
  if (!data?.widgets || data?.widgets.length == 0 || data?.widgets[0].total_item == 0) {
    return {
      answers: []
    }
  }

  const answers = data?.widgets[0]?.content.map((entry: any) => {
    return JSON.stringify(entry.description);
  }) ?? [];

  return {
    answers
  }
}
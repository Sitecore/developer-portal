import { CallSearch } from "@/src/lib/chatbot/search";
import { NextResponse } from "next/server";

export interface ISesarchPayload {
  query: string;
}

export async function POST(request: Request) {
  const data = (await request.json()) as ISesarchPayload;
  if (!data.query) {
    return new NextResponse('Please provide a query parameter', { status: 400 });
  }

  // Call Search API with our query to get data to work from.
  const searchParams = {
    path: '/chatbot',
    uuid: "1234",
    term: data.query
  };
  const searchResponse = await CallSearch(searchParams);
  const formattedSearchResponse = JSON.stringify(searchResponse)
  return new Response(formattedSearchResponse);
}

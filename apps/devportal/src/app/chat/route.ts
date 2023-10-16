import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import { NextRequest, NextResponse } from "next/server";
import { MessageType } from "../../types/Message";

export async function POST(request: NextRequest) {

    const data = await request.json();
    const query = data.question;
    if (!query) {
        return new NextResponse("Please provide a query parameter", { status: 400 });
    }

    const messages = [
        { role: "system", content: "You are a helpful assistant, designed to help Developers building with Sitecore." }
    ];

    if (data.history?.length > 0) {
        for (const item of data.history) {
            if (item.type == MessageType.Assistant) {
                messages.push({ role: "assistant", content: item.text });
            }
            else {
                messages.push({ role: "user", content: item.text });
            }
        }
    }

    const client = new OpenAIClient(process.env.AZURE_OPENAI_ENDPOINT!, new AzureKeyCredential(process.env.AZURE_OPENAI_KEY!));
    messages.push({ role: "user", content: query });

    console.log(messages);

    const response = await client.getChatCompletions(process.env.AZURE_DEPLOYMENT_ID!, messages);
    return new NextResponse(JSON.stringify(response.choices[0]?.message?.content));
}
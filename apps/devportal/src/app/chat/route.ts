import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    console.log(data.question);

    const query = data.question;
    if (!query) {
        return new NextResponse("Please provide a query parameter", { status: 400 });
    }    

    const messages = [
        { role: "system", content: "You are a helpful assistant, designed to help Developers building with Sitecore." }
    ];

    const client = new OpenAIClient(process.env.AZURE_OPENAI_ENDPOINT!, new AzureKeyCredential(process.env.AZURE_OPENAI_KEY!));
    messages.push({ role: "user", content: query }); 

    const response = await client.getChatCompletions(process.env.AZURE_DEPLOYMENT_ID!, messages);
    let answers: string[] = [];
    for (const choice of response.choices) {
        if(choice?.message?.content) {
            console.log(choice.message.content);
            answers.push(choice.message.content);
        }
    }
    console.log(answers)

    // return new NextResponse(answers.join('\r\n'));
    return new NextResponse(JSON.stringify(answers));
}
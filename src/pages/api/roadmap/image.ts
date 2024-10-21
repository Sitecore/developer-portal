import { GetJiraAttachement } from '@/src/lib/jira';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const mimeType = searchParams.get('mt');

    console.log(id);

    if (id) {
      const jiraResponse = await GetJiraAttachement(id);
      const imageBuffer = Buffer.from(jiraResponse.data, 'binary');

      return new Response(imageBuffer, {
        headers: {
          'Content-Type': mimeType || 'image/png',
        },
      });
    }
    return;
  } catch (e: any) {
    return new Response(`Failed to retrieve the image`, {
      status: 500,
    });
  }
}

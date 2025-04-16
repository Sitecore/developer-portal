import { GetJiraAttachement } from '@/src/lib/jira';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'edge',
};

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res);

  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const url = new URL(req.url || `http://${req.headers.host}`);
    const searchParams = url.searchParams;
    const id = searchParams.get('id');
    const mimeType = searchParams.get('mt');

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
});

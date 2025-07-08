import { authOptions } from '@/src/lib/auth/options';
import { GetJiraAttachement } from '@/src/lib/jira';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.orgId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { id, mt: mimeType } = req.query;

    if (id && typeof id === 'string') {
      const jiraResponse = await GetJiraAttachement(id);
      const imageBuffer = Buffer.from(jiraResponse.data, 'binary');

      res.setHeader('Content-Type', mimeType || 'image/png');
      return res.send(imageBuffer);
    }

    return res.status(400).json({ error: 'Missing image ID' });
  } catch (e: any) {
    console.error('Error fetching image:', e);
    return res.status(500).json({ error: 'Failed to retrieve the image' });
  }
}

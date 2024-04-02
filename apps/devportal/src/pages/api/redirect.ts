import { getDownloadUrl } from '@/src/lib/downloads';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Retrieves the value from a query parameter.
 *
 * @param query - The query parameter value.
 * @returns The value of the query parameter as a string.
 */
export const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';
  return Array.isArray(query) ? query[0] : query;
};

/**
 * Handles the API request for redirection.
 *
 * @param req - The NextApiRequest object representing the incoming request.
 * @param res - The NextApiResponse object representing the outgoing response.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = getQueryValue(req.query.type);

  // Request is based on format type=download&uid=GUID
  if (type === 'download') {
    try {
      const uid = getQueryValue(req.query.uid);
      const url = getDownloadUrl(uid);

      if (!url) {
        return res.status(404).json({ error: 'Resource not found' });
      }

      // Redirect to the download URL
      return res.redirect(307, url);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  res.status(405).send({ error: 'Method not allowed' });
  res.end;
}

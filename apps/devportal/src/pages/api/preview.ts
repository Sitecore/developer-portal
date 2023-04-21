import type { NextApiRequest, NextApiResponse } from 'next';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const redirectUrl = req.query.redirect ? getQueryValue(req.query.redirect) : '/';

  if (req.query.clear != null) {
    res.clearPreviewData({});
    res.redirect(`${redirectUrl}`);
    res.end;
  }

  const secret = process.env.PREVIEW_SECRET;

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: 'Missing or invalid `secret` query string parameter!' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the homepage, or to the URL provided with the `redirect` query
  res.redirect(`${redirectUrl}`);
}

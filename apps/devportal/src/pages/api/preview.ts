import type { NextApiRequest, NextApiResponse } from 'next';
import { getQueryValue } from 'sc-changelog/utils/requests';

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

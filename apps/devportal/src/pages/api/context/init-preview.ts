import type { NextApiRequest, NextApiResponse } from 'next';
import { getQueryValue } from '@scdp/changelog/utils';

// API handler that enables preview mode, only executed when preview mode is not controlled manually (see middleware.ts)
// This API is called from the preview hostname when the user visits it for the first time and uses the PREVIEW_SECRET env variable to make sure it's a valid request

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { redirect, secret } = req.query;

  const redirectUrl = getQueryValue(redirect);
  const preview_secret = process.env.PREVIEW_SECRET;

  if (secret != null) {
    // Check the secret and next parameters
    if (secret == preview_secret) {
      res.setPreviewData({});
    }
  }

  // Redirect to the homepage, or to the URL provided with the `redirect` query
  if (redirectUrl) {
    res.redirect(redirectUrl);
  }
}

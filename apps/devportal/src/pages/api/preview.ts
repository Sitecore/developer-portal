import type { NextApiRequest, NextApiResponse } from 'next';
import { getQueryValue } from 'sc-changelog/utils/requests';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { redirect, clear, secret } = req.query;

  let redirectUrl = getQueryValue(redirect);
  const preview_secret = process.env.PREVIEW_SECRET;

  if (clear != null) {
    res.clearPreviewData({});
    redirectUrl = 'https://developers.sitecore.com' + redirectUrl;
  }

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

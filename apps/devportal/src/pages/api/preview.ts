/* eslint-disable turbo/no-undeclared-env-vars */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { clear } = req.query;

  //  const preview_secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET;

  if (clear != null) {
    res.clearPreviewData({});
    console.log('Preview mode disabled');
  } else {
    res.setPreviewData({});
    console.log('Preview mode enabled');
  }

  //if (secret != null) {
  // Check the secret and next parameters
  //  if (secret == preview_secret) {
  //}
  //}

  res.end();
}

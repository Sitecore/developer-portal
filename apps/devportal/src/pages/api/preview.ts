// pages/api/preview.js
export default function handler(req, res) {
  const redirectUrl = new URL(req.query.redirect || '/', process.env.NEXT_PUBLIC_PUBLIC_URL as string);

  if (req.query.clear != null) {
    res.clearPreviewData({});
    res.redirect(`${redirectUrl.pathname}${redirectUrl.search}`);
  }

  const secret = process.env.PREVIEW_SECRET;

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: 'Missing or invalid `secret` query string parameter!' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});
  // Redirect to the homepage, or to the URL provided with the `redirect` query
  // string parameter:

  res.redirect(`${redirectUrl.pathname}${redirectUrl.search}`);
}

/**
 * @type {import('next').NextConfig}
 */

const withTM = require('next-transpile-modules')(['react-markdown']); // pass the modules you would like to see transpiled

const nextConfig = {
  // Set locales so we have appropriate lang attributes without a custom _document
  // ia8n commentted out due to temporary issue with ISR, see https://github.com/Sitecore/developer-portal/issues/182
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
  // Needed to expose in clientside.
  env: {
    GTM_ID: process.env.GTM_ID,
    GTM_AUTH: process.env.GTM_AUTH,
    GTM_ENVIRONMENT: process.env.GTM_ENVIRONMENT
  },
  images: {
    domains: ['sitecorecdn.azureedge.net', 'i.ytimg.com', 'mss-p-006-delivery.sitecorecontenthub.cloud'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  "routes": [
    {
      "src": "/.*",
      "headers": {
        "Content-Security-Policy": "default-src 'self' data: blob: *.sitecore.com *.sitecore.net *.stylelabs.cloud *.googleapis.com *.gstatic.com *.azureedge.net; frame-src * 'self' 'unsafe-inline'; frame-ancestors 'self' https://*.sitecore.com; script-src * blob: data: 'self' 'unsafe-inline' 'unsafe-eval'; script-src-elem * 'self' 'unsafe-inline'; script-src-attr * 'self' 'unsafe-inline'; style-src * 'self' 'unsafe-inline'; style-src-elem * 'self' 'unsafe-inline'; style-src-attr * 'self' 'unsafe-inline' data:; img-src * 'self' 'unsafe-inline' data:; font-src * data: 'self' 'unsafe-inline'; connect-src *; object-src 'none'; media-src * data: blob: 'unsafe-inline' 'unsafe-eval';",
        "Referrer-Policy": "same-origin",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "deny",
        "Referrer-Policy": "same-origin",
        "X-XSS-Protection": "1; mode=block"
      },
      "continue": true
    }
  ]
};

module.exports = withTM(nextConfig);

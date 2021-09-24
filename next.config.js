/**
 * @type {import('next').NextConfig}
 */

const withTM = require('next-transpile-modules')(['react-markdown']); // pass the modules you would like to see transpiled

const nextConfig = {
  // Set locales so we have appropriate lang attributes without a custom _document
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Needed to expose in clientside.
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  images: {
    domains: ['sitecorecdn.azureedge.net', 'i.ytimg.com', 'mss-p-006-delivery.sitecorecontenthub.cloud'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

module.exports = withTM(nextConfig);

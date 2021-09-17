/**
 * @type {import('next').NextConfig}
 */

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
    domains: ['sitecorecdn.azureedge.net', 'i.ytimg.com'],
  },
};

module.exports = nextConfig;

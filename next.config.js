/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Needed to expose in clientside.
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  images: {
    domains: ['sitecorecdn.azureedge.net', 'i.ytimg.com'],
  },
};

module.exports = nextConfig;

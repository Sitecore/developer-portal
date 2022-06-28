/**
 * @type {import('next').NextConfig}
 */

const fs = require('fs');
const path = require('path');

const withTM = require('next-transpile-modules')(['react-markdown']); // pass the modules you would like to see transpiled
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' data: blob: *.sitecore.com *.sitecore.net *.stylelabs.cloud *.googleapis.com *.gstatic.com *.azureedge.net; frame-src * 'self' 'unsafe-inline'; frame-ancestors 'self' https://*.sitecore.com; script-src * blob: data: 'self' 'unsafe-inline' 'unsafe-eval'; script-src-elem * 'self' 'unsafe-inline'; script-src-attr * 'self' 'unsafe-inline'; style-src * 'self' 'unsafe-inline'; style-src-elem * 'self' 'unsafe-inline'; style-src-attr * 'self' 'unsafe-inline' data:; img-src * 'self' 'unsafe-inline' data:; font-src * data: 'self' 'unsafe-inline'; connect-src *; object-src 'none'; media-src * data: blob: 'unsafe-inline' 'unsafe-eval';",
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value:
      'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];
const redirects = [
  {
    source: '/learn/integrations/xm-cdp',
    destination: '/learn/integrations/xm-smarthub-cdp',
    permanent: true,
  },
];

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
    GTM_ENVIRONMENT: process.env.GTM_ENVIRONMENT,
    COVEO_ACCESS_TOKEN: process.env.COVEO_ACCESS_TOKEN,
    COVEO_ORGANIZATION_ID: process.env.COVEO_ORGANIZATION_ID,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'sitecorecdn.azureedge.net',
      'i.ytimg.com',
      'mss-p-006-delivery.sitecorecontenthub.cloud',
      'mss-p-006-delivery.stylelabs.cloud',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Get the latest newsletter and redirect `newsletter/latest` to it
    const newsletterDataDir = path.resolve(__dirname, 'data/newsletters/');
    const year = fs
      .readdirSync(newsletterDataDir)
      .map((y) => parseInt(y, 10))
      .sort((a, b) => b - a)[0];
    const month = fs
      .readdirSync(path.resolve(newsletterDataDir, `${year}`))
      .map((m) => {
        const name = m.substring(m, m.length - 5);
        return {
          name,
          num: parseInt(name, 10),
        };
      })
      .sort((a, b) => b.num - a.num)[0].name;

    return [
      ...redirects,
      {
        source: '/newsletter/latest',
        destination: `/newsletter/${year}/${month}`,
        permanent: false,
      },
    ];
  },
};

module.exports = withTM(nextConfig);

/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */

//const withTM = require('next-transpile-modules'); // pass the modules you would like to see transpiled
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' data: blob: *.sitecore.com *.sitecore.net *.stylelabs.cloud *.googleapis.com *.gstatic.com *.azureedge.net *.sitecorecloud.io; frame-src * 'self' 'unsafe-inline'; frame-ancestors 'self' https://*.sitecore.com; script-src * blob: data: 'self' 'unsafe-inline' 'unsafe-eval'; script-src-elem * 'self' 'unsafe-inline'; script-src-attr * 'self' 'unsafe-inline'; style-src * 'self' 'unsafe-inline'; style-src-elem * 'self' 'unsafe-inline'; style-src-attr * 'self' 'unsafe-inline' data:; img-src * 'self' 'unsafe-inline' data:; font-src * data: 'self' 'unsafe-inline'; connect-src *; object-src 'none'; media-src * data: blob: 'unsafe-inline' 'unsafe-eval';",
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
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
  {
    source: '/trial',
    destination: '/trials',
    permanent: true,
  },
];


const nextConfig = {
  experimental: {
    largePageDataBytes: 256 * 100000,
  },
  transpilePackages: ['@scdp/ui', '@scdp-changelog'],
  // Set locales so we have appropriate lang attributes without a custom _document
  // ia8n commentted out due to temporary issue with ISR, see https://github.com/Sitecore/developer-portal/issues/182
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
  // Needed to expose in clientside.
  env: {
    GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    GTM_AUTH: process.env.NEXT_PUBLIC_GTM_AUTH,
    GTM_ENVIRONMENT: process.env.NEXT_PUBLIC_GTM_ENVIRONMENT,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sitecorecdn.azureedge.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sitecorecdn.azureedge.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.sitecorecontenthub.cloud',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.stylelabs.cloud',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.sitecore.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.sitecorecloud.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wwwsitecorecom.azureedge.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.gitbook.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'theme.zdassets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
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
    return [...redirects];
  },
  async rewrites() {
    return [
      {
        source: '/Downloads/:slug*',
        destination: '/downloads/:slug*',
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

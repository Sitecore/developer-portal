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
  { source: '/learn/integrations/xm-cdp', destination: '/learn/integrations/xm-smarthub-cdp', permanent: true },
  { source: '/trial', destination: '/trials', permanent: true },
  { source: '/commerce/:path*', destination: '/products/:path*', permanent: true },
  { source: '/content-management', destination: '/products', permanent: true },
  { source: '/content-management/content-hub-one', destination: '/products/content-hub-one', permanent: true },
  { source: '/content-management/edge-xm', destination: '/products/experience-platform/edge', permanent: true },
  { source: '/content-management/experience-management', destination: '/products/experience-platform/xm', permanent: true },
  { source: '/content-management/headless', destination: '/products/experience-platform/headless', permanent: true },
  { source: '/content-management/search', destination: '/products/search', permanent: true },
  { source: '/content-management/sxa', destination: '/products/experience-platform/sxa', permanent: true },
  { source: '/content-management/xm-cloud', destination: '/products/xm-cloud', permanent: true },
  { source: '/customer-data-management', destination: '/products', permanent: true },
  { source: '/customer-data-management/cdp', destination: '/products/customer-data-platform', permanent: true },
  { source: '/customer-data-management/experience-platform', destination: '/products/experience-platform', permanent: true },
  { source: '/dam-and-content-operations', destination: '/products', permanent: true },
  { source: '/dam-and-content-operations/content-hub', destination: '/products/content-hub', permanent: true },
  { source: '/dam-and-content-operations/dam', destination: '/products/content-hub', permanent: true },
  { source: '/devops', destination: '/products/devops-and-tools	', permanent: true },
  { source: '/devops/arm-templates', destination: '/products/devops-and-tools/arm-templates', permanent: true },
  { source: '/devops/containers', destination: '/products/devops-and-tools/containers	', permanent: true },
  { source: '/devops/developer-collection', destination: '/products/devops-and-tools/developer-collection	', permanent: true },
  { source: '/devops/managed-cloud', destination: '/products/managed-cloud', permanent: true },
  { source: '/devops/sitecore-install-framework', destination: '/products/devops-and-tools/sif', permanent: true },
  { source: '/integrations/connect', destination: '/products/connect', permanent: true },
  { source: '/marketing-automation/experience-platform', destination: '/products/experience-platform', permanent: true },
  { source: '/marketing-automation/send', destination: '/products/send', permanent: true },
  { source: '/personalization-testing/experience-platform', destination: '/products/experience-platform', permanent: true },
  { source: '/personalization-testing/personalize', destination: '/products/personalize', permanent: true },
  { source: '/changelog/xm-cloud/14112024/component-a%2fb%2fn-testing-is-now-live-in-xm-cloud', destination: '/changelog/xm-cloud/14112024/component-a-b-n-testing-is-now-live-in-xm-cloud', permanent: true },
  { source: '/changelog/xm-cloud/13112024/component-a%2fb%2fn-testing-is-now-live-in-xm-cloud', destination: '/changelog/xm-cloud/14112024/component-a-b-n-testing-is-now-live-in-xm-cloud', permanent: true },

  { source: '/learn/accelerate/xm-cloud/pre-development/developer-experience', destination: '/learn/accelerate/xm-cloud/pre-development/developer-considerations', permanent: true },
  { source: '/learn/accelerate/xm-cloud/pre-development/developer-experience/branching-strategy', destination: '/learn/accelerate/xm-cloud/pre-development/developer-considerations/branching-strategy', permanent: true },
  { source: '/learn/accelerate/xm-cloud/pre-development/developer-experience/nextjs-azure-app-services', destination: '/learn/accelerate/xm-cloud/pre-development/hosting-applications/nextjs-azure-app-services', permanent: true },
  { source: '/learn/accelerate/xm-cloud/pre-development/developer-experience/hosting-web-application', destination: '/learn/accelerate/xm-cloud/pre-development/hosting-applications/nextjs-azure-app-services', permanent: true },
  { source: '/learn/accelerate/xm-cloud/pre-development/project-planning/xm-xp-to-xmc', destination: '/learn/accelerate/xm-cloud/pre-development/discovery/xm-xp-to-xmc', permanent: true },
  { source: '/learn/accelerate/xm-cloud/final-steps/testing-strategy', destination: '/learn/accelerate/xm-cloud/final-steps/testing-framework', permanent: true },

  { source: '/learn/accelerate/xm-cloud/pre-development/developer-experience/dev-workflow-codespaces', destination: '/learn/accelerate/xm-cloud/pre-development/developer-considerations/dev-workflow-codespaces', permanent: true },
  { source: '/learn/faq/xm-cloud/migration', destination: '/learn/accelerate/xm-cloud/pre-development/discovery/xm-xp-to-xmc', permanent: true },
  { source: '/learn/faq/xm-cloud/pricing', destination: '/learn/accelerate/xm-cloud/', permanent: true },
  { source: '/learn/faq/xm-cloud/scaling-availability', destination: 'https://www.sitecore.com/legal/sla/saas', permanent: true },
  { source: '/learn/faq/xm-cloud/personalization-analytics', destination: 'https://developers.sitecore.com/learn/accelerate/xm-cloud', permanent: true },
  { source: '/learn/faq/xm-cloud/pages-components', destination: '/learn/accelerate/xm-cloud/implementation/developer-experience', permanent: true },
  { source: '/learn/faq/xm-cloud/sxa', destination: '/learn/accelerate/xm-cloud/pre-development/project-architecture', permanent: true },
  { source: '/learn/faq/xm-cloud/experience-edge', destination: '/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching', permanent: true },
  { source: '/learn/faq/xm-cloud/customization', destination: '/learn/accelerate/xm-cloud/pre-development/discovery/requirements-gathering', permanent: true },
  { source: '/learn/faq/xm-cloud/rendering', destination: '/learn/accelerate/xm-cloud/pre-development/developer-considerations/web-developer-experience', permanent: true },
  { source: '/learn/faq/xm-cloud/integration', destination: '/learn/accelerate/xm-cloud/implementation/external-data-integration', permanent: true },
  { source: '/learn/faq/xm-cloud/upgrades', destination: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-xm-cloud.html', permanent: true },
  { source: '/learn/faq/xm-cloud/development', destination: '/learn/accelerate/xm-cloud/pre-development/developer-considerations', permanent: true },
  { source: '/learn/faq/xm-cloud/features', destination: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/sitecore-xm-cloud.html', permanent: true },
  { source: '/learn/faq/xm-cloud', destination: '/learn/accelerate/xm-cloud/', permanent: true },
  { source: '/learn/faq/xm-cloud-embedded-personalization', destination: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html', permanent: true },
  { source: '/learn/faq/xm-cloud-embedded-personalization/general', destination: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html', permanent: true },
  { source: '/learn/faq/xm-cloud-embedded-personalization/feature-matrix', destination: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html', permanent: true },
  { source: '/learn/faq/xm-cloud-embedded-personalization/migrations-and-upgrades', destination: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html', permanent: true },
  { source: '/learn/faq/xm-cloud-embedded-personalization/architecture-data-retention', destination: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html', permanent: true },
  { source: '/learn/faq/xm-cloud-embedded-personalization/developer-experience', destination: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/personalize.html', permanent: true },

  { source: '/learn/accelerate/xm-cloud/implementation/redirect', destination: '/learn/accelerate/xm-cloud/implementation/information-architecture/redirect', permanent: true },
  { source: '/learn/accelerate/xm-cloud/implementation/sitemap', destination: '/learn/accelerate/xm-cloud/implementation/information-architecture/sitemap', permanent: true },
  { source: '/learn/accelerate/xm-cloud/implementation/localization', destination: '/learn/accelerate/xm-cloud/implementation/information-architecture/localization', permanent: true },
  { source: '/learn/accelerate/xm-cloud/implementation/search', destination: '/learn/accelerate/xm-cloud/implementation/sitecore-search', permanent: true },

  { source: '/learn/accelerate/xm-cloud/appendix-i/xm-cloud-glossary', destination: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-terminology.html', permanent: true },
  { source: '/learn/accelerate/content-hub/appendix-i/content-hub-glossary', destination: 'https://doc.sitecore.com/ch/en/users/content-hub/glossary.html', permanent: true },
  { source: '/learn/accelerate/cdp-personalize/appendix-i/cdp-glossary', destination: 'https://doc.sitecore.com/cdp/en/users/sitecore-cdp/glossary.html', permanent: true },
  { source: '/learn/accelerate/cdp-personalize/appendix-i/personalize-glossary', destination: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/glossary.html', permanent: true },

  { source: '/accelerate', destination: '/learn/accelerate', permanent: true },
  { source: '/changelog/xm-cloud/12112023/personalize-the-presentation-of-a-component-in-xm-cloud-pages-personalize', destination: '/changelog/xm-cloud/12112023/personalize-the-presentation-of-a-component-in-xm-cloud-pages', permanent: true },

  { source: '/learn/getting-started/introduction-to-composable-dxp', destination: '/', permanent: true },
  { source: '/learn/getting-started/migrating-to-the-sitecore-composable-dxp', destination: '/', permanent: true },

  { source: '/learn/getting-started/xm-cloud-introduction', destination: '/sitecoreai', permanent: true },
  { source: '/learn/getting-started/xm-cloud/tutorials', destination: '/sitecoreai', permanent: true },

  { source: '/learn/faq/cloud-portal/features', destination: 'https://doc.sitecore.com/cloud-portal/en/users/cloud-portal/features.html', permanent: true },

  { source: '/changelog/xm-cloud/:path*', destination: '/changelog/sitecoreai/:path*', permanent: true },
];

const nextConfig = {
  experimental: {
    largePageDataBytes: 256 * 100000,
  },

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
      {
        source: '/learn/accelerate/xm-cloud/updates',
        destination: '/feeds/rss-accelerate-xmcloud.xml',
      },
      {
        source: '/learn/accelerate/content-hub/updates',
        destination: '/feeds/rss-accelerate-contenthub.xml',
      },
      {
        source: '/learn/accelerate/updates',
        destination: '/feeds/rss-accelerate.xml',
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

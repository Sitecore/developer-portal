module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'sitecorecdn.azureedge.net',
      'i.ytimg.com',
      'mss-p-006-delivery.sitecorecontenthub.cloud',
      'mss-p-006-delivery.stylelabs.cloud',
      'go.sitecore.com',
      'sitecorecontenthub.stylelabs.cloud',
      'mms-delivery.sitecorecloud.io',
      'wwwsitecorecom.azureedge.net',
      'www.gitbook.com',
      'theme.zdassets.com',
      'opengraph.githubassets.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
};

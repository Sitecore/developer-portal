const isProduction = process.env.VERCEL_ENV === 'production';

module.exports = {
  siteUrl: 'https://developers.sitecore.com',
  frequency: 'daily',
  generateIndexSitemap: false,
  generateRobotsTxt: true, // Generate robots.txt in production only
  exclude: isProduction == false ? ['/'] : [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: isProduction == false ? ['/'] : [],
      },
    ],
  },
};

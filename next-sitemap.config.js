const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteUrl: 'https://developers.sitecore.com',
  generateIndexSitemap: false,
  generateRobotsTxt: isProduction, // Generate robots.txt in production only
  exclude: isProduction ? [] : ['/'], // Exclude all pages in staging by excluding root or other specific pages
};

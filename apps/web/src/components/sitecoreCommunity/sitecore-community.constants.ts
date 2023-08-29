import { ForumOption } from './SitecoreCommunity.api';

export const SITECORE_COMMUNITY_URL = 'https://community.sitecore.com';

export const SITECORE_COMMUNITY_MAX_COUNT = 5;

export const FORUM_TO_TITLE: Record<ForumOption, string> = {
  blog: 'Blog',
  contentManagement: 'Content Management',
  contentOperations: 'Content Operations',
  customerDataManagement: 'Customer Data Management',
  digitalAssetManagement: 'Digital Asset Management',
  events: 'Events',
  experiencePlatform: 'Experience Platform',
  marketingAutomation: 'Marketing Automation',
  news: 'News',
  orderManagement: 'Order Management',
  personalizationAndTesting: 'Personalization & Testing',
  searchAndMerchandizing: 'Search & Merchandizing',
  storefrontsAndMarketplaces: 'Storefronts & Marketplaces',
};

import { ProductInfoType } from '../components/hexagons/HexagonTypes';
import { Product } from '../lib/assets';
import { CommerceCloud, ContentCloud, EngagementCloud } from './clouds';

export const ContentHubONE: ProductInfoType = {
  type: Product.ContentHubOne,
  name: 'Content Hub ONE',
  subTitle: 'Agile CMS',
  description: 'A powerful and intuitive headless CMS for the simplified creation and management of experiences across channels and devices.',
  linkHref: '/content-management/content-hub-one',
  linkText: 'Learn more',
  cloud: ContentCloud.id,
  color: ContentCloud.color,
};
export const CDP: ProductInfoType = {
  type: Product.CDP,
  name: 'Sitecore CDP',
  subTitle: 'Customer Data Platform',
  description: 'Optimize every experience across every channel with the leading experimentation aConnect and activate customer data across your ecosystem to drive relevance with an intelligent customer data platform.nd personalization platform.',
  linkHref: '/customer-data-management/cdp',
  linkText: 'Learn more',
  cloud: EngagementCloud.id,
  color: EngagementCloud.color,
};
export const Discover: ProductInfoType = {
  type: Product.Discover,
  name: 'Sitecore Discover',
  subTitle: 'Product Discovery',
  description: 'Amplify customer conversions with hyper-relevant search results and AI-driven, automated merchandising.',
  linkHref: '/commerce/discover',
  linkText: 'Learn more',
  cloud: CommerceCloud.id,
  color: CommerceCloud.color,
};

export const Connect: ProductInfoType = {
  type: Product.Connect,
  name: 'Sitecore Connect',
  subTitle: 'Automation',
  description: 'Integrate seamlessly with third-party apps and connectors.',
  linkHref: '/integrations/connect',
  linkText: 'Learn more',
  cloud: EngagementCloud.id,
  color: EngagementCloud.color,
};
export const Send: ProductInfoType = {
  type: Product.Send,
  name: 'Sitecore Send',
  subTitle: 'Marketing Automation',
  description: 'Automate personalized email engagements that build trust and foster long-term relationships.',
  linkHref: '/marketing-automation/send',
  linkText: 'Learn more',
  cloud: EngagementCloud.id,
  color: EngagementCloud.color,
};
export const XMCloud: ProductInfoType = {
  type: Product.XMCloud,
  name: 'XM Cloud',
  subTitle: 'Enterprise CMS',
  description: 'Create, manage, and deliver relevant content everywhere, lightning-fast, with a world-leading, enterprise-ready CMS.',
  linkHref: '/content-management/xm-cloud',
  linkText: 'Learn more',
  cloud: ContentCloud.id,
  color: ContentCloud.color,
};
export const Personalize: ProductInfoType = {
  type: Product.Personalize,
  name: 'Sitecore Personalize',
  subTitle: 'Personalization and Testing',
  description: 'Optimize every experience across every channel with the leading experimentation and personalization platform.',
  linkHref: '/personalization-testing/personalize',
  linkText: 'Learn more',
  cloud: EngagementCloud.id,
  color: EngagementCloud.color,
};
export const DAM: ProductInfoType = {
  type: Product.DAM,
  name: 'Sitecore DAM',
  subTitle: 'Digital Asset Management',
  description: 'Centralize all your digital assets and deliver them to any customer touchpoint with an automated digital asset management (DAM) solution.',
  linkHref: '/dam-and-content-operations/dam',
  linkText: 'Learn more',
  cloud: ContentCloud.id,
  color: ContentCloud.color,
};
export const OrderCloud: ProductInfoType = {
  type: Product.OrderCloud,
  name: 'Sitecore OrderCloud',
  subTitle: 'B2X Commerce',
  description: 'Scale your business, sell on any channel, and future-proof your commerce strategy with the next-generation headless commerce platform.',
  linkHref: '/commerce/ordercloud',
  linkText: 'Learn more',
  cloud: CommerceCloud.id,
  color: CommerceCloud.color,
};
export const Search: ProductInfoType = {
  type: Product.Search,
  name: 'Sitecore Search',
  subTitle: 'Intelligent Content Search',
  description: 'Predict search intent and display individualized results with a personalized search experience.',
  linkHref: '/content-management/search',
  linkText: 'Learn more',
  cloud: ContentCloud.id,
  color: ContentCloud.color,
};
export const ContentOps: ProductInfoType = {
  type: Product.ContentOps,
  name: 'Sitecore Content Operations',
  subTitle: 'Content Operations',
  description: 'Collaborate effortlessly on content strategy, creation, and analytics with an intelligent content operations solution.',
  linkHref: '/dam-and-content-operations/content-hub',
  linkText: 'Learn more',
  cloud: ContentCloud.id,
  color: ContentCloud.color,
};

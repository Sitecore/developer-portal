import { CloudInfoType } from '../components/hexagons/HexagonTypes';
import { Product } from '../lib/assets';

export const ContentCloud: CloudInfoType = {
  name: 'Content Cloud',
  id: 'content-cloud',
  type: Product.ContentCloud,
  color: 'violet',
  description: 'Sitecore Content Cloud allows you to incrementally implement just what you need and integrate world-class solutions seamlessly with your existing tech stack.',
  linkHref: '',
  linkText: '',
};

export const EngagementCloud: CloudInfoType = {
  name: 'Engagement Cloud',
  type: Product.EngagementCloud,
  id: 'engagement-cloud',
  color: 'red',
  description: 'With Sitecore Engagement Cloud, brands have the tools they need - connect and activate customer data across the ecosystem, personalize with ease, and optimize every experience across every channel.',
  linkHref: '',
  linkText: '',
};

export const CommerceCloud: CloudInfoType = {
  name: 'Commerce Cloud',
  type: Product.CommerceCloud,
  id: 'commerce-cloud',
  color: 'teal',
  description: 'Sitecore Commerce Cloud is the key to your commerce growth strategy, enabling businesses to acquire and engage new shoppers at any moment.',
  linkHref: '',
  linkText: '',
};

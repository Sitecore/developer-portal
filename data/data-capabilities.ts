import {
  AudiencesIntelligenceIcon,
  CommerceIcon,
  ContentManagementSystemIcon,
  ContentOperationsIcon,
  ConversionOptimizationIcon,
  DigitalAssetManagementIcon,
} from './sitecore-icons';

const platformData = {
  title: 'Capabilities',
  subtitle: 'Discover the power of SitecoreAI capabilities for every aspect of digital experience delivery.',
  data: [
    {
      title: 'Content management',
      description: 'Manage, design, and deliver experiences that scale with your ambition.',
      href: '/sitecoreai/capabilities/cms',
      linkText: 'Explore',
      img: {
        src: '/images/capabilities/content-management.svg',
        width: 48,
        height: 48
      },
       icon: ContentManagementSystemIcon
    },
    {
      title: 'Digital asset management',
      description: 'Organize, find, and deliver assets fast with a platform that fuels creativity and control.',
      href:'/sitecoreai/capabilities/dam',
      linkText: 'Explore',
      img: {
        src: '/images/capabilities/digital-asset-management.svg',
        width: 48,
        height: 48
      },
       icon: DigitalAssetManagementIcon,
    },
    {
      title: 'Content operations',
      description: 'Unify content and AI in one hub that keeps work moving and results growing.',
      href: '/sitecoreai/capabilities/content-ops',
      linkText: 'Explore',
      img: {
        src: '/images/capabilities/content-operations.svg',
        width: 48,
        height: 48
      },
             icon: ContentOperationsIcon,

    },
    {
      title: 'Unified data layer',
      description: 'Unlock your customer data to inform every interaction with real-time insights.',
      href: '/sitecoreai/capabilities/united-data-layer',
      linkText: 'Explore',
      img: {
        src: '/images/capabilities/audience-and-insights.svg',
        width: 48,
        height: 48
      },
             icon: AudiencesIntelligenceIcon
    },
    {
      title: 'Conversion optimization',
      description: 'Personalize every experience with intelligence that understands your customers.',
      href:'/sitecoreai/capabilities/converstion-optimization',
      linkText: 'Explore',
      img: {
        src: '/images/capabilities/search-and-personalization.svg',
        width: 48,
        height: 48
      },
             icon: ConversionOptimizationIcon
    },
    {
      title: 'Commerce ',
      description: 'Deliver buying experiences that grow with your business.',
      href:'/sitecoreai/capabilities/commerce',
      linkText: 'Explore',
      img: {
        src: '/images/capabilities/commerce.svg',
        width: 48,
        height: 48
      },
             icon: CommerceIcon
    }
  ]
};

export default platformData;
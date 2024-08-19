import { Product } from '@src/lib/assets';

export interface NavItem {
  title: string;
  subTitle?: string;
  children?: Array<NavItem>;
  external?: boolean;
  url?: string;
  pathname?: string;
  logo?: Product;
}

export const mainNavigation: NavItem[] = [
  {
    title: 'Learn',
    url: '/learn',
  },
  {
    title: 'Documentation',
    children: [
      {
        title: 'Experience Management',
        children: [
          {
            title: 'XM Cloud',
            url: 'https://doc.sitecore.com/xmc',
            logo: Product.XMCloud,
          },
          {
            title: 'Content Hub',
            url: 'https://doc.sitecore.com/ch',
            logo: Product.ContentHub,
          },
          {
            title: 'Search',
            url: 'https://doc.sitecore.com/search',
            logo: Product.Search,
          },
          {
            title: 'Content Hub ONE',
            url: 'https://doc.sitecore.com/ch-one',
            logo: Product.ContentHubOne,
          },
        ],
      },
      {
        title: ' ',
        children: [
          {
            title: 'CDP',
            url: 'https://doc.sitecore.com/cdp',
            logo: Product.CDP,
          },
          {
            title: 'Personalize',
            url: 'https://doc.sitecore.com/personalize',
            logo: Product.Personalize,
          },
          {
            title: 'Send',
            url: 'https://doc.sitecore.com/send',
            logo: Product.Send,
          },
          {
            title: 'Connect',
            url: 'https://doc.sitecore.com/connect',
            logo: Product.Connect,
          },
        ],
      },
      {
        title: 'Commerce',
        children: [
          {
            title: 'OrderCloud',
            url: 'https://doc.sitecore.com/ordercloud',
            logo: Product.OrderCloud,
          },
          {
            title: 'Discover',
            url: 'https://doc.sitecore.com/discover',
            logo: Product.Discover,
          },
        ],
      },

      {
        title: 'Platform DXP',
        children: [
          {
            title: 'Experience Manager',
            url: 'https://doc.sitecore.com/xp',
            logo: Product.ExperienceManager,
          },
          {
            title: 'Experience Platform',
            url: 'https://doc.sitecore.com/xp',
            logo: Product.ExperiencePlatform,
          },
          {
            title: 'Experience Commerce',
            url: 'https://doc.sitecore.com/xp',
            logo: Product.ExperienceCommerce,
          },
          {
            title: 'Managed Cloud',
            url: 'https://doc.sitecore.com/xp',
            logo: Product.ManagedCloud,
          },
        ],
      },
    ],
  },
  {
    title: 'Community',
    children: [
      {
        title: 'Community overview',
        url: '/community',
        children: [
          {
            title: 'News and Announcements',
            url: 'https://community.sitecore.com/community?id=community_forum&sys_id=af85dddf1bf17810486a4083b24bcb00',
            external: true,
          },
          {
            title: 'Forums',
            url: 'https://community.sitecore.com',
            external: true,
          },
          {
            title: 'Blog',
            url: 'https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba',
            external: true,
          },
          {
            title: 'Events',
            url: 'https://community.sitecore.com/community?id=community_forum&sys_id=7a84272f1b313c10486a4083b24bcbd5',
            external: true,
          },
          {
            title: 'MVP Program',
            url: 'https://mvp.sitecore.com',
            external: true,
          },
        ],
      },
      {
        title: 'Newsletter',
        url: '/newsletter',
        children: [
          {
            title: 'Latest edition',
            url: '/newsletter/latest',
          },
          {
            title: 'Archive',
            url: '/newsletter',
          },
        ],
      },
    ],
  },
  {
    title: 'Downloads',
    url: '/downloads',
  },
  /*
  {
    title: 'Solution',
    pathname: '/[solution]',
    children: [
      {
        title: 'Content Management and Delivery',
        url: '/content-management',
        children: [
          {
            title: 'Sitecore XM Cloud',
            url: '/content-management/xm-cloud',
          },
          {
            title: 'Sitecore Content Hub ONE',
            url: '/content-management/content-hub-one',
          },
          {
            title: 'Sitecore Search',
            url: '/content-management/search',
          },
          {
            title: 'Sitecore Experience Manager',
            url: '/content-management/experience-manager',
          },
          {
            title: 'Experience Edge for XM',
            url: '/content-management/edge-xm',
          },
          {
            title: 'Experience Edge for Content Hub',
            url: '/content-management/edge-content-hub',
          },
          {
            title: 'Sitecore Experience Accelerator (SXA)',
            url: '/content-management/sxa',
          },
          {
            title: 'Headless Services & JSS',
            url: '/content-management/headless',
          },
        ],
      },
      {
        title: 'Customer Data Management',
        url: '/customer-data-management',
        children: [
          {
            title: 'Sitecore CDP',
            url: '/customer-data-management/cdp',
          },
          {
            title: 'Sitecore Experience Platform',
            url: '/customer-data-management/experience-platform',
          },
        ],
      },
      {
        title: 'Personalization and Testing',
        url: '/personalization-testing',
        children: [
          {
            title: 'Sitecore Personalize',
            url: '/personalization-testing/personalize',
          },
          {
            title: 'Sitecore Experience Platform',
            url: '/personalization-testing/experience-platform',
          },
        ],
      },
      {
        title: 'Marketing Automation',
        url: '/marketing-automation',
        children: [
          {
            title: 'Sitecore Send',
            url: '/marketing-automation/send',
          },
          {
            title: 'Sitecore Experience Platform',
            url: '/marketing-automation/experience-platform',
          },
        ],
      },
      {
        title: 'Commerce',
        url: '/commerce',
        children: [
          {
            title: 'Sitecore OrderCloud',
            url: '/commerce/ordercloud',
          },
          {
            title: 'Sitecore Experience Commerce',
            url: '/commerce/experience-commerce',
          },
          {
            title: 'Sitecore Discover',
            url: '/commerce/discover',
          },
        ],
      },
      {
        title: 'DAM and Content Operations',
        url: '/dam-and-content-operations',
        children: [
          {
            title: 'Sitecore Content Hub',
            url: '/dam-and-content-operations/content-hub',
          },
          {
            title: 'Sitecore DAM',
            url: '/dam-and-content-operations/dam',
          },
        ],
      },
      {
        title: 'DevOps',
        url: '/devops',
        children: [
          {
            title: 'Containers & Orchestration',
            url: '/devops/containers',
          },
          {
            title: 'Sitecore Install Framework',
            url: '/devops/sitecore-install-framework',
          },
          {
            title: 'Sitecore ARM Templates',
            url: '/devops/arm-templates',
          },
          {
            title: 'Developer Collection',
            url: '/devops/developer-collection',
          },
          {
            title: 'Managed Cloud',
            url: '/devops/managed-cloud',
          },
        ],
      },
      {
        title: 'Integrations',
        url: '/integrations',
        children: [
          {
            title: 'Sitecore Connect',
            url: '/integrations/connect',
          },
          {
            title: 'Sitecore Marketplace',
            url: 'https://www.sitecore.com/products/marketplace',
            external: true,
          },
        ],
      },
    ],
  },
  {
    title: 'Product',
    pathname: '/[solution]/[product]',
    children: [
      {
        title: 'Sitecore Content Hub',
        children: [
          {
            title: 'Content Operations',
            url: '/dam-and-content-operations/content-hub',
          },
          {
            title: 'Digital Asset Management',
            url: '/dam-and-content-operations/dam',
          },
          {
            title: 'Experience Edge for Content Hub',
            url: '/content-management/edge-content-hub',
          },
        ],
      },
      {
        title: 'Sitecore XM Cloud',
        url: '/content-management/xm-cloud',
        children: [
          {
            title: 'Developer Resources',
            url: '/content-management/xm-cloud',
          },
          {
            title: 'Experience Edge for XM',
            url: '/content-management/edge-xm',
          },
          {
            title: 'Headless Services & JSS',
            url: '/content-management/headless',
          },
          {
            title: 'Access the Portal',
            url: 'https://portal.sitecorecloud.io/',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore Content Hub ONE',
        url: '/content-management/content-hub-one',
        children: [
          {
            title: 'Developer Resources',
            url: '/content-management/content-hub-one',
          },
          {
            title: 'Access the Portal',
            url: 'https://portal.sitecorecloud.io/',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore CDP',
        url: '/customer-data-management/cdp',
        children: [
          {
            title: 'Customer Data Management',
            url: '/customer-data-management/cdp',
          },
          {
            title: 'Access the Portal',
            url: 'https://portal.sitecorecloud.io/',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore Personalize',
        url: '/personalization-testing/personalize',
        children: [
          {
            title: 'Personalization and Testing',
            url: '/personalization-testing/personalize',
          },
          {
            title: 'Access the Portal',
            url: 'https://portal.sitecorecloud.io/',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore Send',
        url: '/marketing-automation/send',
        children: [
          {
            title: 'Marketing Automation',
            url: '/marketing-automation/send',
          },
          {
            title: 'Get your free Moosend account',
            url: 'https://identity.moosend.com/register/',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore Connect',
        url: '/integrations/connect',
        children: [
          {
            title: 'Integration Platform',
            url: '/integrations/connect',
          },
          {
            title: 'Access the Portal',
            url: 'https://portal.sitecorecloud.io/',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore OrderCloud',
        url: '/commerce/ordercloud',
        children: [
          {
            title: 'Order Management, Storefronts and Marketplaces, and Merchandizing',
            url: '/commerce/ordercloud',
          },
          {
            title: 'Start on the OrderCloud Portal for free',
            url: 'https://portal.ordercloud.io',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore Discover',
        url: '/commerce/discover',
        children: [
          {
            title: 'Data driven product discovery',
            url: '/commerce/discover',
          },
        ],
      },
      {
        title: 'Sitecore Search',
        url: '/content-management/search',
        children: [
          {
            title: 'Intelligent, blazing-fast search',
            url: '/content-management/search',
          },
        ],
      },
      {
        title: 'Sitecore Experience Manager',
        children: [
          {
            title: 'Content Management',
            url: '/content-management/experience-manager',
          },
          {
            title: 'Experience Edge for XM',
            url: '/content-management/edge-xm',
          },
          {
            title: 'Headless Services & JSS',
            url: '/content-management/headless',
          },
          {
            title: 'Sitecore Experience Accelerator (SXA)',
            url: '/content-management/sxa',
          },
          {
            title: 'Developer Collection',
            url: '/devops/developer-collection',
          },
          {
            title: 'Managed Cloud',
            url: '/devops/managed-cloud',
          },
          {
            title: 'Downloads',
            url: 'https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform.aspx',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore Experience Platform',
        children: [
          {
            title: 'Marketing Automation',
            url: '/marketing-automation/experience-platform',
          },
          {
            title: 'Customer Data Management',
            url: '/customer-data-management/experience-platform',
          },
          {
            title: 'Personalization and Testing',
            url: '/personalization-testing/experience-platform',
          },
          {
            title: 'Managed Cloud',
            url: '/devops/managed-cloud',
          },
          {
            title: 'Downloads',
            url: 'https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform.aspx',
            external: true,
          },
        ],
      },
      {
        title: 'Sitecore Experience Commerce',
        url: '/commerce/experience-commerce',
        children: [
          {
            title: 'Order Management, Storefronts, and Merchandizing',
            url: '/commerce/experience-commerce',
          },
          {
            title: 'Managed Cloud',
            url: '/devops/managed-cloud',
          },
          {
            title: 'Downloads',
            url: 'https://dev.sitecore.net/Downloads/Sitecore_Commerce.aspx',
            external: true,
          },
        ],
      },
    ],
  },*/
  {
    title: 'Products',
    pathname: '/products',
    children: [
      {
        title: 'Experience Management',
        children: [
          {
            title: 'XM Cloud',
            url: '/products/xm-cloud',
            logo: Product.XMCloud,
          },
          {
            title: 'Content Hub',
            url: '/products/content-hub',
            logo: Product.ContentHub,
          },
          {
            title: 'Search',
            url: '/products/search',
            logo: Product.Search,
          },
          {
            title: 'Content Hub ONE',
            url: '/products/content-hub-one',
            logo: Product.ContentHubOne,
          },
        ],
      },
      {
        title: '',
        children: [
          {
            title: 'CDP',
            url: '/products/customer-data-platform',
            logo: Product.CDP,
          },
          {
            title: 'Personalize',
            url: '/products/personalize',
            logo: Product.Personalize,
          },
          {
            title: 'Send',
            url: '/products/send',
            logo: Product.Send,
          },
          {
            title: 'Connect',
            url: '/products/connect',
            logo: Product.Connect,
          },
        ],
      },
      {
        title: 'Commerce',
        children: [
          {
            title: 'Discover',
            url: '/products/discover',
            logo: Product.Discover,
          },
          {
            title: 'OrderCloud',
            url: '/products/ordercloud',
            logo: Product.OrderCloud,
          },
        ],
      },

      {
        title: 'Platform DXP',
        children: [
          {
            title: 'Experience Manager',
            url: '/products/experience-platform/xm',
            logo: Product.ExperienceManager,
          },
          {
            title: 'Experience Platform',
            url: '/products/experience-platform',
            logo: Product.ExperiencePlatform,
          },
          {
            title: 'Experience Commerce',
            url: '/products/experience-commerce',
            logo: Product.ExperienceCommerce,
          },
          {
            title: 'Managed Cloud',
            url: '/products/managed-cloud',
            logo: Product.ManagedCloud,
          },
        ],
      },
    ],
  },
  {
    title: 'Changelog',
    url: '/changelog',
  },
];

/*
 *  External links shown in the top right of the header
 */
export const sitecoreQuickLinks: NavItem = {
  title: 'External Sitecore Links',
  children: [
    {
      title: 'Sitecore.com',
      url: 'https://www.sitecore.com',
    },
    {
      title: 'Sitecore Learning',
      url: 'https://learning.sitecore.com/',
    },
    {
      title: 'Sitecore Community',
      url: 'https://community.sitecore.com/',
    },
    {
      title: 'Sitecore MVP Program',
      url: 'https://mvp.sitecore.com/',
    },
    {
      title: 'Sitecore Partner Network',
      url: 'https://partners.sitecore.com/',
    },
    {
      title: 'Symposium',
      url: 'https://symposium.sitecore.com/',
    },
    {
      title: 'Support Portal',
      url: 'https://support.sitecore.com',
    },
  ],
};

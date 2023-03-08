import { NavigationData } from 'ui/layouts/components/header/Nav';

export const sitecoreQuickLinks: NavigationData = {
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
      title: 'Sitecore Downloads',
      url: 'https://dev.sitecore.net/',
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

export const mainNavigation: NavigationData[] = [
  {
    title: 'Learn',
    url: '/learn',
  },
  {
    title: 'Docs',
    url: '/docs',
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
    title: 'Discover',
    url: '/discover',
  },
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
            title: 'Moosend',
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
            url: '/devops/sif',
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
        ],
      },
      {
        title: 'Moosend',
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
  },
];

export type NavigationChildData = {
  title: string;
  url?: string;
  children?: NavigationChildData[];
};

export type NavigationData = {
  title: string;
  url?: string;
  children?: NavigationChildData[];
};

export const SitecoreQuickLinks: NavigationData = {
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
      url: 'https://community.sitecore.net/',
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

const NavigationData: NavigationData[] = [
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
    url: '/community',
  },
  {
    title: 'Discover',
    url: '/discover',
  },
  {
    title: 'Solution',
    children: [
      {
        title: 'Content Management and Delivery',
        url: '/content-management',
        children: [
          {
            title: 'Sitecore Content Hub',
            url: '/content-management/content-hub',
          },
          {
            title: 'Experience Edge for Content Hub',
            url: '/content-management/edge-content-hub',
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
            title: 'Sitecore CDP',
            url: '/personalization-testing/cdp',
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
            title: 'OrderCloud',
            url: '/commerce/ordercloud',
          },
          {
            title: 'Sitecore Experience Commerce',
            url: '/commerce/experience-commerce',
          },
        ],
      },
      {
        title: 'Digital Asset Management',
        url: '/digital-asset-management/dam',
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
        ],
      },
    ],
  },
  {
    title: 'Product',
    children: [
      {
        title: 'Sitecore Content Hub',
        children: [
          {
            title: 'Content Management',
            url: '/content-management/content-hub',
          },
          {
            title: 'Digital Asset Management',
            url: '/digital-asset-management/dam',
          },
          {
            title: 'Experience Edge for Content Hub',
            url: '/content-management/edge-content-hub',
          },
        ],
      },
      {
        title: 'Sitecore CDP',
        children: [
          {
            title: 'Customer Data Management',
            url: '/customer-data-management/cdp',
          },
          {
            title: 'Personalization and Testing',
            url: '/personalization-testing/cdp',
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
            title: 'Headless',
            url: '/#',
          },
          {
            title: 'Developer Collection',
            url: '/#',
          },
          {
            title: 'Experience Edge for XM',
            url: '/content-management/edge-xm',
          },
          {
            title: 'Sitecore Experience Accelerator (SXA)',
            url: '/content-management/sxa',
          },
          {
            title: 'Downloads',
            url: 'https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform.aspx',
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
            title: 'Downloads',
            url: 'https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform.aspx',
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
            title: 'Get Sitecore Send for free',
            url: 'https://identity.moosend.com/register/',
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
            title: 'Access OrderCloud Portal for free',
            url: 'https://portal.ordercloud.io/',
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
            title: 'Downloads',
            url: 'https://dev.sitecore.net/Downloads/Sitecore_Commerce.aspx',
          },
        ],
      },
    ],
  },
];

export default NavigationData;

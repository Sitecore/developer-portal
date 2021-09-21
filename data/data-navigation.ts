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
      title: 'Sitecore Documentation',
      url: 'https://doc.sitecore.com/',
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
      url: 'https://www.sitecore.com/#:~:text=Sitecore%20MVP%20Program',
    },
    {
      title: 'Sitecore Downloads',
      url: 'https://www.sitecore.com/#:~:text=Sitecore%20MVP%20Program-,Sitecore%20Downloads,-Sitecore%20Partner%20Network',
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
      title: 'Knowledge Base',
      url: 'https://www.sitecore.com/#:~:text=Symposium-,Knowledge%20Base,-Request%20a%20demo',
    },
  ],
};

const NavigationData: NavigationData[] = [
  {
    title: 'Docs',
    url: '/docs',
  },
  {
    title: 'Discover',
    url: '/discover',
  },
  {
    title: 'Learn',
    url: '/learn',
  },
  {
    title: 'Get Help',
    url: '/help',
  },
  {
    title: 'Community',
    url: '/community',
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
            title: 'Moosend',
            url: '/marketing-automation/moosend',
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
            title: 'Sitecore Experience Platform',
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
            url: '/#',
          },
          {
            title: 'Sitecore Experience Accelerator (SXA)',
            url: '/content-management/sxa',
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
            title: 'Experience Edge for Content Hub',
            url: '/personalization-testing/experience-platform',
          },
        ],
      },
      {
        title: 'Moosend',
        url: '/marketing-automation/moosend',
      },
      {
        title: 'Sitecore OrderCloud',
        url: '/commerce/ordercloud',
      },
      {
        title: 'Sitecore Experience Commerce',
        url: '/commerce/experience-commerce',
      },
    ],
  },
];

export default NavigationData;

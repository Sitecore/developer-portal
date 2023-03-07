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
    title: 'Changelog',
    url: '/changelog',
  },
  {
    title: 'By product',
    children: [
      {
        title: 'Content Hub One',
        url: '/changelog/contenthub-one',
      },
      {
        title: 'CDP',
        url: '/changelog/cdp',
      },
    ],
  },
];

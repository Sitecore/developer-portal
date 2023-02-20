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
    title: 'Release Notes',
    url: '/release-notes',
  },
  {
    title: 'By product',
    children: [
      {
        title: 'Content Hub One',
        url: '/release-notes/contenthub-one',
        children: [
          {
            title: 'Change Type 1',
            url: 'https://community.sitecore.com',
            external: true,
          },
          {
            title: 'Change Type 2',
            url: 'https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba',
            external: true,
          },
          {
            title: 'Change Type 3',
            url: 'https://community.sitecore.com/community?id=community_forum&sys_id=7a84272f1b313c10486a4083b24bcbd5',
            external: true,
          },
        ],
      },
      {
        title: 'CDP',
        url: '/release-notes/cdp',
        children: [
          {
            title: 'Change Type 1',
            url: 'https://community.sitecore.com',
            external: true,
          },
          {
            title: 'Change Type 2',
            url: 'https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba',
            external: true,
          },
          {
            title: 'Change Type 3',
            url: 'https://community.sitecore.com/community?id=community_forum&sys_id=7a84272f1b313c10486a4083b24bcbd5',
            external: true,
          },
        ],
      },
    ],
  },
];

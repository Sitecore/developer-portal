import { GenericListData, GenericListItem } from '@/src/components/lists';

const content: GenericListItem[] = [
  {
    title: 'Sitecore Experience Platform 10.4',
    description: 'Looking for the latest versions of Sitecore software, including the latest Sitecore Experience Platform 10.4? Have a look at the new download section.',
    href: '/downloads',
    linkText: 'Download',
    img: {
      src: '/images/downloads.png',
      alt: 'Sitecore Downloads',
    },
  },
  {
    title: 'Migration Advisor',
    description:
      'Tell the Sitecore Migration Advisor about your solution and then find videos, tutorials, walkthroughs, code examples, and more to help you migrate from Sitecore Platform DXP to Sitecore XM Cloud and the rest of the Sitecore Composable DXP.',
    href: 'https://migration.sitecore.com/',
    linkText: 'Get Started',
    img: {
      src: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/79641d4e53c04ad9a1f9307bccae1458?v=ef401c0b',
      alt: 'Migration Advisor',
    },
  },
  {
    title: 'Sitecore Changelog',
    description: 'Learn more about new versions, changes and improvements in the public preview of the Sitecore Changelog',
    href: '/changelog',
    linkText: 'View',
    img: {
      src: '/images/changelog-home.png',
      alt: 'Sitecore Changelog',
    },
  },
  {
    title: 'Sitecore Accelerate',
    description: 'Sitecore Accelerate is a dedicated program to help Sitecore customers upgrade their existing PaaS CMS or commerce solution to our next-gen SaaS products.',
    href: '/learn/accelerate/xm-cloud',
    linkText: 'Read',
    img: {
      src: '/images/accelerate.png',
      alt: 'Sitecore Accelerate',
    },
  },
];

const communityListData: GenericListData = {
  title: 'Featured resources',
  subtitle: '',
  data: content,
};

export default communityListData;

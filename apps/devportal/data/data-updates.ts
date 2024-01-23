import { GenericListData, GenericListItem } from 'ui/components/lists';

const content: GenericListItem[] = [
  {
    title: 'Migration Advisor',
    description:
      'Tell the Sitecore Migration Advisor about your solution and then find videos, tutorials, walkthroughs, code examples, and more to help you migrate from Sitecore Platform DXP to Sitecore XM Cloud and the rest of the Sitecore Composable DXP.',
    href: 'https://migration.sitecore.com/',
    linkText: 'Get Started',
    img: {
      src: 'https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/home/knowledge-center/digital-marketing-resources/migrating-to-xm-cloud/gettyimages-898545250.jpg',
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
    title: 'Sitecore Search',
    description: 'Use our search functionality to search across all the official Sitecore resources, now powered by Sitecore Search',
    href: '/search',
    linkText: 'Search',
    img: {
      src: '/images/search-page.png',
      alt: 'Sitecore Search',
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
  title: 'Latest resources',
  subtitle: '',
  data: content,
};

export default communityListData;

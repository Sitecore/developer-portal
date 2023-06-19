import { GenericListData, GenericListItem } from 'ui/common/types/genericList';

const content: GenericListItem[] = [
  {
    title: 'Sitecore Changelog',
    description: 'Learn more about new versions, changes and improvements in the public preview of the Sitecore Changelog',
    href: '/changelog',
    linkText: 'Visit now!',
    img: {
      src: '/images/changelog-home.png',
      alt: 'Sitecore Changelog',
    },
  },
  {
    title: 'Sitecore Search',
    description: 'Use our search functionality to search across all the official Sitecore resources, now powered by Sitecore Search',
    href: '/search',
    linkText: 'Search now!',
    img: {
      src: '/images/search-page.png',
      alt: 'Sitecore Search',
    },
  },
  {
    title: 'XM Cloud Recommended Practices',
    description: 'Are you getting started with building on XM Cloud? Check out the new recommended tips for teams working on XM Cloud projects!',
    href: '/learn/faq/xm-cloud-recommended-practices',
    linkText: 'Read now!',
    img: {
      src: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/c612f3d1efbe4e0cb946ab96d0b4aea1?v=0cca3868',
      alt: 'XM Cloud Recommended practices',
    },
  },
  {
    title: 'Implementation Guides',
    description: 'These guidance documents aim to help you understand what kind of project management and implementation practices are recommended by Sitecore to implement Content Hub One.',
    href: '/content-management/content-hub-one#implementation-guides',
    linkText: 'Learn more',
    img: {
      src: 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/db50ce5764ce4b2b9226322137c36e2a?v=dde6138f',
      alt: 'Content Hub ONE Implementation Guides',
    },
  },
];

const communityListData: GenericListData = {
  title: 'Latest resources',
  subtitle: '',
  content,
};

export default communityListData;

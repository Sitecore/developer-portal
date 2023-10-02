import { GenericListData, GenericListItem } from 'ui/components/lists';

const content: GenericListItem[] = [
  {
    title: 'Slack',
    description: 'Talk to other Sitecore enthusiasts, share ideas, or get answers to your questions.',
    href: 'https://sitecore.chat',
    linkText: 'Join the conversation',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/54a97a708bdd4ab3a25978f91e04cdba?v=31503a85',
      alt: 'Slack logo',
    },
  },
  {
    title: 'Stack Exchange',
    description: 'Join more than 4000 daily active users on this community-driven platform.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Ask a question',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/8d9f040f7c6c42b2b7be19c31f15bc3a?v=5b9209f2',
      alt: 'Stack Exchange logo',
    },
  },
  {
    title: 'Official Sitecore Forums',
    description: 'Connect with thousands of Sitecore developers and users, ask questions, or join the discussions.',
    href: 'https://community.sitecore.com/',
    linkText: 'Start a discussion',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/2208b6f24622484bb4dc61545f99b01a?v=9b7c0ec4',
      alt: 'Sitecore Community forums logo',
    },
  },
];

const communityListData: GenericListData = {
  title: 'Where Sitecorians hang out',
  subtitle: 'Discover more cool Sitecore groups where the community is active and engaged',
  data: content,
};

export default communityListData;

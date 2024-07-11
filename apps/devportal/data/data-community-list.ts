import { GenericListData, GenericListItem } from '@/src/components/lists';

const content: GenericListItem[] = [
  {
    title: 'Slack',
    description: 'Talk to other Sitecore enthusiasts, share ideas, or get answers to your questions.',
    href: 'https://sitecore.chat',
    linkText: 'Join the conversation',
    img: {
      src: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/slack-logo?v=c33d7529',
      alt: 'Slack logo',
    },
  },
  {
    title: 'Stack Exchange',
    description: 'Join more than 4000 daily active users on this community-driven platform.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Ask a question',
    img: {
      src: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/stack-exchange?v=d9693f08',
      alt: 'Stack Exchange logo',
    },
  },
  {
    title: 'Official Sitecore Forums',
    description: 'Connect with thousands of Sitecore developers and users, ask questions, or join the discussions.',
    href: 'https://community.sitecore.com/',
    linkText: 'Start a discussion',
    img: {
      src: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/sitecore-community?v=1e63b95d',
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

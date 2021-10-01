type CommunityListItem = {
  description: string;
  href: string;
  linkText: string;
  title: string;
  img: {
    src: string;
    alt?: string;
  };
};

const content: CommunityListItem[] = [
  {
    title: 'Slack',
    description: 'Talk to other Sitecore enthusiasts, share ideas, or get answers to your questions.',
    href: 'https://sitecore.chat',
    linkText: 'Join the conversation',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/757e3faaa19f41da9c47aac876e909dd?v=16c38e3f',
    },
  },
  {
    title: 'Stack Exchange',
    description: 'Join more than 4000 daily active users on this community-driven platform.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Ask a question',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/f3357193e74148bb82ff46a4cc888e81?v=e21b62a0',
    },
  },
  {
    title: 'Official Sitecore Forums',
    description: 'Connect with thousands of Sitecore developers and users, ask questions, or join the discussions.',
    href: 'https://community.sitecore.net/',
    linkText: 'Start a discussion',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/80dbfc3c6ecc42bdaa46d4779562e528?v=7784264f',
    },
  },
];

const communityListData = {
  title: 'Where Sitecorians hang out',
  subtitle: 'Discover more cool Sitecore groups where the community is active and engaged',
  content,
};

export default communityListData;

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
    description: 'Talk to the community on this community-run Slack. Share, connect, and help each other out!',
    href: 'https://sitecore.chat',
    linkText: 'Join the conversation',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/757e3faaa19f41da9c47aac876e909dd?v=16c38e3f',
    },
  },
  {
    title: 'Stack Exchange',
    description: 'Ask and answer questions on the community-driven Sitecore Stack Exchange site.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Ask a question',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/f3357193e74148bb82ff46a4cc888e81?v=e21b62a0',
    },
  },
  {
    title: 'Forums',
    description: 'Connect with other members of the community in the official Sitecore community forums.',
    href: 'https://community.sitecore.net/',
    linkText: 'Start a discussion',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/80dbfc3c6ecc42bdaa46d4779562e528?v=7784264f',
    },
  },
];

const communityListData = {
  title: 'Join these cool Sitecore communities',
  content,
};

export default communityListData;

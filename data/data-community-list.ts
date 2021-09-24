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
    description: 'Talk to the community on Slack.',
    href: 'https://sitecore.chat',
    linkText: 'Slack',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/757e3faaa19f41da9c47aac876e909dd?v=16c38e3f',
    },
  },
  {
    title: 'Stack Exchange',
    description: 'Ask questions on Sitecore Stack Exchange.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Stack Exchange',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/f3357193e74148bb82ff46a4cc888e81?v=e21b62a0',
    },
  },
  {
    title: 'Forums',
    description: 'Connect with others in the forums.',
    href: 'https://community.sitecore.net/',
    linkText: 'Community Forums',
    img: {
      src: 'https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/80dbfc3c6ecc42bdaa46d4779562e528?v=7784264f',
    },
  },
];

const communityListData = {
  title: 'Join these cool Sitecore Communities',
  content,
};

export default communityListData;

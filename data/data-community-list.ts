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
      src: '/images/heros/hero-example.jpeg',
    },
  },
  {
    title: 'Stack Exchange',
    description: 'Ask questions on Sitecore Stack Exchange.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Stack Exchange',
    img: {
      src: '/images/heros/hero-example.jpeg',
    },
  },
  {
    title: 'Forums',
    description: 'Connect with others in the forums.',
    href: 'https://community.sitecore.net/',
    linkText: 'Community Forums',
    img: {
      src: '/images/heros/hero-example.jpeg',
    },
  },
];

const communityListData = {
  title: 'Join these cool Sitecore Communities',
  content,
};

export default communityListData;

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
      src: '/images/cards/slack.png',
    },
  },
  {
    title: 'Stack Exchange',
    description: 'Ask questions on Sitecore Stack Exchange.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Stack Exchange',
    img: {
      src: '/images/cards/stackexchange.png',
    },
  },
  {
    title: 'Forums',
    description: 'Connect with others in the forums.',
    href: 'https://community.sitecore.net/',
    linkText: 'Community forums',
    img: {
      src: '/images/cards/community.png',
    },
  },
];

const communityListData = {
  title: 'Join these cool Sitecore communities',
  content,
};

export default communityListData;

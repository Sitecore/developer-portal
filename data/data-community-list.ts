type CommunityListItem = {
  description: string;
  href: string;
  linkText: string;
  title: string;
};

const content: CommunityListItem[] = [
  {
    title: 'Slack',
    description: 'Talk to the community on Slack.',
    href: 'https://sitecore.chat',
    linkText: 'Slack',
  },
  {
    title: 'Stack Exchange',
    description: 'Ask questions on Sitecore Stack Exchange.',
    href: 'https://sitecore.stackexchange.com',
    linkText: 'Stack Exchange',
  },
  {
    title: 'Forums',
    description: 'Connect with others in the forums.',
    href: 'https://community.sitecore.net/',
    linkText: 'Community Forums',
  },
];

const communityListData = {
  title: 'Join these cool Sitecore Communities',
  content,
};

export default communityListData;

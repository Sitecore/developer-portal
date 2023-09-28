export type CommunityListData = {
  title: string;
  subtitle: string;
  content: CommunityListItem[];
};

export type CommunityListItem = {
  description: string;
  href: string;
  linkText: string;
  title: string;
  img: {
    src: string;
    alt?: string;
  };
};

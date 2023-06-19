export type GenericListData = {
  title: string;
  subtitle: string;
  content: GenericListItem[];
};

export type GenericListItem = {
  description: string;
  href: string;
  linkText: string;
  title: string;
  img: {
    src: string;
    alt?: string;
  };
};

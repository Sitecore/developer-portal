export type CustomNavContext = {
  parent: string;
  article: string;
  page: string;
};

export type CustomNavRoute = {
  title: string;
  path: string;
  children?: CustomNavRoute[];
};

export type CustomNavData = {
  title: string;
  description: string;
  path: string;
  routes: CustomNavRoute[];
};

export type ContentPagerRoute = {
  title: string;
  path: string;
};

export type ContentPagerContext = {
  previous?: ContentPagerRoute | null;
  next?: ContentPagerRoute | null;
};

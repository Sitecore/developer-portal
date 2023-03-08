export type TrialNavContext = {
  trial: string;
  parent: string;
  child: string;
};

type TrialNavChild = {
  title: string;
  slug: string;
};

type TrialNavParent = {
  title: string;
  slug: string;
  children: TrialNavChild[];
};

export type TrialNavData = {
  title: string;
  description?: string;
  nav: TrialNavParent[];
};

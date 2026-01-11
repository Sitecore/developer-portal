export interface ExtractHeadingsConfig {
  rank: number;
  headings: Array<ContentHeading>;
}

export interface ContentHeading {
  title: string;
  id: string;
}

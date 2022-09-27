export interface ExtractHeadingsConfig {
  rank: number;
  headings: ContentHeading[];
}

export interface ContentHeading {
  title: string;
  id: string;
}

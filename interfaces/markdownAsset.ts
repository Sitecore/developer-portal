export type MarkdownAsset = MarkdownMeta & {
  markdown: string;
};

export type MarkdownMeta = {
  id?: string;
  prettyName?: string;
  solution?: string;
  product?: string;
  description?: string;
  stackexchange?: string | string[];
  youtube?: string[];
  twitter?: string | string[];
};

import type { BlogRoute } from './fs-utils';
import type { BlogPostFrontmatter } from './schema';

/** Serializable post row for overview, homepage, and related lists */
export type BlogListItem = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  authors: Array<string>;
  tags: Array<string>;
  canonical: string;
  image: string;
  href: string;
  year: string;
  month: string;
  slug: string;
};

/** Resolved author for display on post detail */
export type BlogAuthorCard = {
  slug: string;
  name: string;
  jobTitle: string;
  image: string;
};

export type BlogPostBuildMeta = {
  route: BlogRoute;
  absPath: string;
  frontmatter: BlogPostFrontmatter;
  /** Parsed publication date */
  publishedAt: Date;
  updatedAt?: Date;
};

export type BlogPostPageData = {
  route: BlogRoute;
  frontmatter: BlogPostFrontmatter;
  compiledSource: string;
  authorsResolved: Array<BlogAuthorCard>;
  related: Array<BlogListItem>;
};

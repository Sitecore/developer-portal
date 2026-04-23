import path from "node:path";

export const CONTENT_BLOG_DIR = path.join(
  process.cwd(),
  "data",
  "blog",
  "posts",
);
export const CONTENT_AUTHORS_DIR = path.join(
  process.cwd(),
  "data",
  "blog",
  "authors",
);

/** Default page size for /blog overview pagination */
export const BLOG_PAGE_SIZE = 9;

import fs from "node:fs";
import path from "node:path";
import { CONTENT_BLOG_DIR } from "./constants";

export type BlogRoute = {
  year: string;
  month: string;
  slug: string;
};

/**
 * Discover all blog markdown files under data/blog/posts/{yyyy}/{mm}/*.md
 */
export function scanBlogMarkdownFiles(): Array<
  { absPath: string } & BlogRoute
> {
  const results: Array<{ absPath: string } & BlogRoute> = [];
  if (!fs.existsSync(CONTENT_BLOG_DIR)) {
    return results;
  }

  const yearEntries = fs.readdirSync(CONTENT_BLOG_DIR, { withFileTypes: true });
  for (const y of yearEntries) {
    if (!y.isDirectory() || !/^\d{4}$/.test(y.name)) {
      continue;
    }
    const yearPath = path.join(CONTENT_BLOG_DIR, y.name);
    const monthEntries = fs.readdirSync(yearPath, { withFileTypes: true });
    for (const m of monthEntries) {
      if (!m.isDirectory() || !/^\d{2}$/.test(m.name)) {
        continue;
      }
      const monthNum = Number.parseInt(m.name, 10);
      if (monthNum < 1 || monthNum > 12) {
        continue;
      }
      const monthPath = path.join(yearPath, m.name);
      const files = fs.readdirSync(monthPath, { withFileTypes: true });
      for (const f of files) {
        if (!f.isFile() || !f.name.endsWith(".md")) {
          continue;
        }
        const slug = f.name.slice(0, -".md".length);
        if (!slug || slug.includes("/") || slug.includes("\\")) {
          continue;
        }
        results.push({
          absPath: path.join(monthPath, f.name),
          year: y.name,
          month: m.name,
          slug,
        });
      }
    }
  }
  return results;
}

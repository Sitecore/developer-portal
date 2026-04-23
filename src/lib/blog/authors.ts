import fs from "node:fs";
import path from "node:path";
import { CONTENT_AUTHORS_DIR } from "./constants";
import { parseFrontmatterWithSchema } from "./parse-frontmatter";
import { authorFrontmatterSchema } from "./schema";
import type { BlogAuthorCard } from "./types";

export type AuthorRegistryEntry = BlogAuthorCard;

let authorRegistryCache: Map<string, AuthorRegistryEntry> | null = null;

/**
 * Load all author files into a map keyed by slug (filename without .md).
 */
export function loadAuthorRegistry(): Map<string, AuthorRegistryEntry> {
  if (authorRegistryCache && process.env.NODE_ENV === "production") {
    return authorRegistryCache;
  }
  const map = new Map<string, AuthorRegistryEntry>();
  if (!fs.existsSync(CONTENT_AUTHORS_DIR)) {
    if (process.env.NODE_ENV === "production") {
      authorRegistryCache = map;
    }
    return map;
  }

  for (const name of fs.readdirSync(CONTENT_AUTHORS_DIR)) {
    if (!name.endsWith(".md")) {
      continue;
    }
    const slug = name.slice(0, -".md".length);
    const absPath = path.join(CONTENT_AUTHORS_DIR, name);
    const raw = fs.readFileSync(absPath, "utf-8");
    const rel = path.relative(process.cwd(), absPath).replace(/\\/g, "/");
    const { data } = parseFrontmatterWithSchema(
      rel,
      raw,
      authorFrontmatterSchema,
    );
    map.set(slug, {
      slug,
      name: data.name,
      jobTitle: data.jobTitle,
      image: data.image,
    });
  }
  if (process.env.NODE_ENV === "production") {
    authorRegistryCache = map;
  }
  return map;
}

export function resolveAuthorsForPost(
  authorSlugs: Array<string>,
  registry: Map<string, AuthorRegistryEntry>,
  contextPath: string,
): Array<BlogAuthorCard> {
  const resolved: Array<BlogAuthorCard> = [];
  for (const slug of authorSlugs) {
    const row = registry.get(slug);
    if (!row) {
      throw new Error(
        `Unknown author "${slug}" referenced in ${contextPath}. Expected data/blog/authors/${slug}.md`,
      );
    }
    resolved.push(row);
  }
  return resolved;
}

import fs from "node:fs";
import path from "node:path";
import { loadAuthorRegistry, resolveAuthorsForPost } from "./authors";
import { compilePostMarkdown } from "./compile-post-body";
import { scanBlogMarkdownFiles } from "./fs-utils";
import { parseFrontmatterWithSchema } from "./parse-frontmatter";
import {
  getLatestBlogPosts,
  getRelatedPosts,
  sortPostsByDateDesc,
} from "./query";
import { blogPostFrontmatterSchema } from "./schema";
import type {
  BlogListItem,
  BlogPostBuildMeta,
  BlogPostPageData,
} from "./types";
import { postHref } from "./urls";

let postMetaCache: Array<BlogPostBuildMeta> | null = null;

function relFromCwd(absPath: string): string {
  return path.relative(process.cwd(), absPath).replace(/\\/g, "/");
}

function assertPathMatchesDate(
  route: { year: string; month: string },
  dateIso: string,
  fileLabel: string,
): void {
  const d = new Date(dateIso);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid date in ${fileLabel}`);
  }
  const y = String(d.getUTCFullYear());
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  if (y !== route.year || m !== route.month) {
    throw new Error(
      `${fileLabel}: frontmatter date UTC year/month (${y}-${m}) must match path .../blog/${route.year}/${route.month}/ (use UTC when picking folder names).`,
    );
  }
}

function assertFilenameMatchesSlug(
  route: { slug: string },
  absPath: string,
): void {
  const base = path.basename(absPath, ".md");
  if (base !== route.slug) {
    throw new Error(
      `${relFromCwd(absPath)}: filename "${base}.md" must match URL slug "${route.slug}".`,
    );
  }
}

/**
 * Read and validate every blog post + author references + duplicate routes.
 * Call from getStaticPaths / getStaticProps so `next build` fails on invalid content.
 */
export function assertBlogBuildIntegrity(): void {
  loadAllPostMeta();
}

/**
 * All posts (including drafts), fully validated.
 */
export function loadAllPostMeta(): Array<BlogPostBuildMeta> {
  // In dev, skip cache so new/edited posts are picked up without restarting the server.
  if (postMetaCache && process.env.NODE_ENV === "production") {
    return postMetaCache;
  }
  const authorRegistry = loadAuthorRegistry();
  const files = scanBlogMarkdownFiles();
  const routeKeys = new Map<string, string>();

  const metas: Array<BlogPostBuildMeta> = [];

  for (const file of files) {
    const rel = relFromCwd(file.absPath);
    assertFilenameMatchesSlug(file, file.absPath);
    const raw = fs.readFileSync(file.absPath, "utf-8");
    const { data, body } = parseFrontmatterWithSchema(
      rel,
      raw,
      blogPostFrontmatterSchema,
    );
    if (body.trim().length === 0) {
      throw new Error(`${rel}: post body is empty`);
    }

    assertPathMatchesDate(file, data.date, rel);

    const routeKey = `${file.year}/${file.month}/${file.slug}`;
    const existing = routeKeys.get(routeKey);
    if (existing) {
      throw new Error(
        `Duplicate blog route /blog/${routeKey}: defined in both "${existing}" and "${rel}".`,
      );
    }
    routeKeys.set(routeKey, rel);

    resolveAuthorsForPost(data.authors, authorRegistry, rel);

    const publishedAt = new Date(data.date);
    const updatedAt = data.updated ? new Date(data.updated) : undefined;

    metas.push({
      route: { year: file.year, month: file.month, slug: file.slug },
      absPath: file.absPath,
      frontmatter: data,
      publishedAt,
      updatedAt,
    });
  }

  if (process.env.NODE_ENV === "production") {
    postMetaCache = metas;
  }
  return metas;
}

export function toBlogListItem(meta: BlogPostBuildMeta): BlogListItem {
  const { route, frontmatter: fm } = meta;
  return {
    title: fm.title,
    description: fm.description,
    date: fm.date,
    ...(fm.updated ? { updated: fm.updated } : {}),
    authors: fm.authors,
    tags: fm.tags,
    canonical: fm.canonical,
    image: fm.image,
    href: postHref(route),
    year: route.year,
    month: route.month,
    slug: route.slug,
  };
}

export function getPublishedListItems(): Array<BlogListItem> {
  const items = loadAllPostMeta()
    .filter((m) => !m.frontmatter.draft)
    .map(toBlogListItem);
  return sortPostsByDateDesc(items);
}

export function getPublishedStaticPathParams(): Array<{
  params: { year: string; month: string; slug: string };
}> {
  return loadAllPostMeta()
    .filter((m) => !m.frontmatter.draft)
    .map((m) => ({
      params: {
        year: m.route.year,
        month: m.route.month,
        slug: m.route.slug,
      },
    }));
}

export function findPostMeta(
  year: string,
  month: string,
  slug: string,
): BlogPostBuildMeta | undefined {
  return loadAllPostMeta().find(
    (m) =>
      m.route.year === year && m.route.month === month && m.route.slug === slug,
  );
}

export async function loadBlogPostPageData(
  year: string,
  month: string,
  slug: string,
): Promise<BlogPostPageData | null> {
  assertBlogBuildIntegrity();
  const meta = findPostMeta(year, month, slug);
  if (!meta || meta.frontmatter.draft) {
    return null;
  }

  const raw = fs.readFileSync(meta.absPath, "utf-8");
  const { body } = parseFrontmatterWithSchema(
    relFromCwd(meta.absPath),
    raw,
    blogPostFrontmatterSchema,
  );
  const { compiledSource } = await compilePostMarkdown(body);
  const authorsResolved = resolveAuthorsForPost(
    meta.frontmatter.authors,
    loadAuthorRegistry(),
    relFromCwd(meta.absPath),
  );

  const publishedList = getPublishedListItems();
  const currentItem = toBlogListItem(meta);
  const related = getRelatedPosts(currentItem, publishedList, 3);

  return {
    route: meta.route,
    frontmatter: meta.frontmatter,
    compiledSource,
    authorsResolved,
    related,
  };
}

export function getLatestBlogPostsForHome(limit: number): Array<BlogListItem> {
  assertBlogBuildIntegrity();
  return getLatestBlogPosts(getPublishedListItems(), limit);
}

/** JSON-serializable map for blog UI (Next.js props). */
export function getAuthorSlugToDisplayName(): Record<string, string> {
  const out: Record<string, string> = {};
  loadAuthorRegistry().forEach((v, k) => {
    out[k] = v.name;
  });
  return out;
}

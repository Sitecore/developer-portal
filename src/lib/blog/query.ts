import type { BlogListItem } from "./types";

export function sortPostsByDateDesc(
  posts: Array<BlogListItem>,
): Array<BlogListItem> {
  return [...posts].sort((a, b) => {
    const da = Date.parse(a.date);
    const db = Date.parse(b.date);
    if (db !== da) {
      return db - da;
    }
    return a.slug.localeCompare(b.slug);
  });
}

export function extractAllTags(posts: Array<BlogListItem>): Array<string> {
  const s = new Set<string>();
  for (const p of posts) {
    for (const t of p.tags) {
      s.add(t);
    }
  }
  return [...s].sort((a, b) => a.localeCompare(b));
}

export function extractAllAuthorSlugs(
  posts: Array<BlogListItem>,
): Array<string> {
  const s = new Set<string>();
  for (const p of posts) {
    for (const a of p.authors) {
      s.add(a);
    }
  }
  return [...s].sort((a, b) => a.localeCompare(b));
}

export function filterPosts(
  posts: Array<BlogListItem>,
  filters: { tag?: string; authorSlug?: string },
): Array<BlogListItem> {
  let out = posts;
  const tag = filters.tag;
  if (tag) {
    out = out.filter((p) => p.tags.includes(tag));
  }
  const authorSlug = filters.authorSlug;
  if (authorSlug) {
    out = out.filter((p) => p.authors.includes(authorSlug));
  }
  return out;
}

export function paginate<T>(
  items: Array<T>,
  page: number,
  pageSize: number,
): { pageItems: Array<T>; totalPages: number; totalItems: number } {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);
  return { pageItems, totalPages, totalItems };
}

export function getLatestBlogPosts(
  posts: Array<BlogListItem>,
  limit: number,
): Array<BlogListItem> {
  return sortPostsByDateDesc(posts).slice(0, limit);
}

function sharedTagCount(a: Array<string>, b: Array<string>): number {
  const setB = new Set(b);
  let n = 0;
  for (const t of a) {
    if (setB.has(t)) {
      n++;
    }
  }
  return n;
}

export type RelatedPostCandidate = BlogListItem & { publishedAt: Date };

/**
 * Deterministic related posts:
 * score = 3 * sharedTagCount + (primary tags match ? 1 : 0) + recencyBoost,
 * recencyBoost = publishedAt.getTime() / 1e15.
 * Sort by score desc, date desc, slug asc; take top `limit`.
 * When tag overlap is zero for everyone, ordering reduces to newest posts (recency + date tie-break).
 */
export function getRelatedPosts(
  current: BlogListItem,
  candidates: Array<BlogListItem>,
  limit = 3,
): Array<BlogListItem> {
  const pool = candidates.filter(
    (c) =>
      !(
        c.year === current.year &&
        c.month === current.month &&
        c.slug === current.slug
      ),
  );

  const currentPrimary = current.tags.length > 0 ? current.tags[0] : null;

  const scored = pool.map((c) => {
    const shared = sharedTagCount(current.tags, c.tags);
    const cPrimary = c.tags.length > 0 ? c.tags[0] : null;
    const primaryMatch =
      currentPrimary != null && cPrimary != null && currentPrimary === cPrimary;
    const publishedAt = new Date(c.date);
    const recencyBoost = publishedAt.getTime() / 1e15;
    const totalScore = 3 * shared + (primaryMatch ? 1 : 0) + recencyBoost;
    return { post: c, totalScore, publishedAt };
  });

  scored.sort((x, y) => {
    if (y.totalScore !== x.totalScore) {
      return y.totalScore - x.totalScore;
    }
    if (y.publishedAt.getTime() !== x.publishedAt.getTime()) {
      return y.publishedAt.getTime() - x.publishedAt.getTime();
    }
    return x.post.slug.localeCompare(y.post.slug);
  });

  return scored.slice(0, limit).map((s) => s.post);
}

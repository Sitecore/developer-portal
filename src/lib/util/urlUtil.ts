import type {
  ChangelogEntry,
  ChangelogEntrySummary,
} from "@src/lib/changelog/types";

import { formatDate } from "./dateUtil";
import { slugify } from "./stringUtil";

/**
 * Canonical absolute URL for a site path (or pass-through if already absolute).
 * Uses NEXT_PUBLIC_PUBLIC_URL as origin. If unset, returns a path starting with `/`.
 */
export function toAbsolutePublicUrl(pathOrUrl: string): string {
  const s = pathOrUrl.trim();
  if (!s) {
    return s;
  }
  if (/^https?:\/\//i.test(s)) {
    return s;
  }
  const rawBase = process.env.NEXT_PUBLIC_PUBLIC_URL?.trim() ?? "";
  const path = s.startsWith("/") ? s : `/${s}`;
  if (!rawBase) {
    return path;
  }
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  try {
    return new URL(path, base).href;
  } catch {
    return path;
  }
}

export function getChangelogEntryUrlSegments(
  entry: ChangelogEntry | ChangelogEntrySummary,
): Array<string> {
  const segments: Array<string> = [];

  segments.push(slugify(entry.productName ?? entry.title));
  // Add date to the URL to prevent conflicts with entries with the same title
  segments.push(formatDate(entry.releaseDate));
  segments.push(`${slugify(entry.title)}`);

  return segments;
}

export function getChangelogEntryUrl(
  entry: ChangelogEntry | ChangelogEntrySummary,
  includeServerUrl?: boolean,
): string {
  const relativePath = [
    "/changelog",
    ...getChangelogEntryUrlSegments(entry),
  ].join("/");

  if (includeServerUrl) {
    return toAbsolutePublicUrl(relativePath);
  }

  return relativePath;
}

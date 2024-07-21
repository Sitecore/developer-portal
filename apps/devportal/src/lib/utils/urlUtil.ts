import { ChangelogEntry, ChangelogEntrySummary } from '@scdp/changelog/types';
import { slugify } from '@scdp/changelog/utils';
import { formatDate } from './dateUtil';

const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';

export function getChangelogEntryUrlSegments(entry: ChangelogEntry | ChangelogEntrySummary): string[] {
  const segments: string[] = [];

  segments.push(slugify(entry.productName ?? entry.title));
  // Add date to the URL to prevent conflicts with entries with the same title
  segments.push(formatDate(entry.releaseDate));
  segments.push(`${slugify(entry.title)}`);

  return segments;
}

export function getChangelogEntryUrl(entry: ChangelogEntry | ChangelogEntrySummary, includeServerUrl?: boolean): string {
  const url: string[] = [];

  url.push('/changelog');
  url.push(...getChangelogEntryUrlSegments(entry));

  if (includeServerUrl) return `${publicUrl + url.join('/')}`;

  return url.join('/');
}

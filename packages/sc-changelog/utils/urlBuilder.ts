import { ChangelogEntry, ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
import { slugify } from 'sc-changelog/utils/stringUtils';

export function getChangelogEntryUrlSegments(entry: ChangelogEntry | ChangelogEntrySummary): string[] {
  const segments: string[] = [];

  segments.push(slugify(entry.productName ?? entry.title));
  //segments.push(slugify(entry.changeTypeName));
  segments.push(`${slugify(entry.title)}`);

  return segments;
}

export function getChangelogEntryUrl(entry: ChangelogEntry | ChangelogEntrySummary): string {
  const url: string[] = [];

  url.push('/changelog');
  url.push(...getChangelogEntryUrlSegments(entry));
  return url.join('/');
}

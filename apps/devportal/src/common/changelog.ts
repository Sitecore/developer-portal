import { slugify } from '@/../../packages/sc-changelog/utils/stringUtils';
import { ChangelogEntry, ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';

export function OrderByMonthAndYear(items: ChangelogEntry[]): { [month: string]: ChangelogEntry[] } {
  const entriesByMonth: { [month: string]: ChangelogEntry[] } = {};

  items.forEach((post) => {
    const month = new Date(post.releaseDate).toLocaleString('en-US', { month: 'short', year: 'numeric' });
    if (!entriesByMonth[month]) {
      entriesByMonth[month] = [];
    }
    entriesByMonth[month].push(post);
  });

  return entriesByMonth;
}

export function getChangelogEntryUrlSegments(entry: ChangelogEntry | ChangelogEntrySummary): string[] {
  const segments: string[] = [];

  segments.push(slugify(entry.productName));
  segments.push(slugify(entry.changeTypeName));
  segments.push(`${slugify(entry.title)}`);

  return segments;
}

export function createChangelogEntryUrl(entry: ChangelogEntry | ChangelogEntrySummary): string {
  const url: string[] = [];

  url.push('/changelog');
  url.push(...getChangelogEntryUrlSegments(entry));
  return url.join('/');
}

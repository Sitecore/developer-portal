import { ChangelogEntry, ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
import { slugify } from 'sc-changelog/utils/stringUtils';

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

export function createChangelogEntryUrl(entry: ChangelogEntry | ChangelogEntrySummary): string {
  const url: string[] = [];

  url.push('/changelog');
  url.push(slugify(entry.productName));
  url.push(slugify(entry.changeTypeName));
  url.push(slugify(entry.title));
  return url.join('/');
}

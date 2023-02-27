import ChangelogEntry from 'sc-changelog/types/changeLogEntry';

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

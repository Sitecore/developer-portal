// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetSummaryLatestItemsByProductAndChangeType } from 'sc-changelog/changelog';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';

const getQueryArray = (query: string | string[] | undefined): string[] => {
  if (query == undefined) return [];
  return Array.isArray(query) ? query : [query];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Record<string, ChangelogEntrySummary[]>>) => {
  const products: string[] = getQueryArray(req.query.product);
  const changeTypes: string[] = getQueryArray(req.query.changeType);

  const items = await GetSummaryLatestItemsByProductAndChangeType(products.join('|'), changeTypes.join('|'));
  const entries: ChangelogEntrySummary[] = items.entries;

  const groupedObjects = entries.reduce((collection, obj) => {
    const monthYear = new Date(obj.releaseDate).toLocaleString('en-US', { month: 'short', year: 'numeric' });
    if (!collection[monthYear]) {
      collection[monthYear] = [];
    }
    collection[monthYear].push(obj);

    // Sort updates within a month (latest first)
    collection[monthYear].sort((a, b) => {
      const earliestDateA = new Date(a.releaseDate);
      const earliestDateB = new Date(b.releaseDate);
      return earliestDateB.getTime() - earliestDateA.getTime();
    });
    return collection;
  }, {} as Record<string, ChangelogEntrySummary[]>);

  // Sort the keys (year-month)
  const sorted = Object.entries(groupedObjects)
    .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
    .reduce((acc, [date, value]) => ({ ...acc, [date]: value }), {});

  res.status(200).json(sorted);
};

export default handler;

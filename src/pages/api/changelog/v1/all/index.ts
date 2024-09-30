// Interfaces
import { Changelog } from '@lib/changelog';
import { ChangelogEntrySummary, ChangeType, Product } from '@lib/changelog/types';
import { getQueryArray } from '@lib/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

const handler = async (req: NextApiRequest, res: NextApiResponse<Record<string, Array<ChangelogEntrySummary>>>) => {
  const products: Array<string> = getQueryArray(req.query.product);
  const changeTypes: Array<string> = getQueryArray(req.query.changeType);
  const isPreview = req.preview ? true : false;

  const sorted = await getOverviewPerMonth(isPreview, products, changeTypes);

  res.status(200).json(sorted);
};

export default handler;

const getOverviewPerMonth: any = async (isPreview: boolean, products?: Array<Product>, changes?: Array<ChangeType>) => {
  const changelog = new Changelog(getChangelogCredentials(), isPreview);
  const items = await changelog.getEntries({ productId: products?.join('|'), changeTypeId: changes?.join('|'), pageSize: 50 });

  const entries: Array<ChangelogEntrySummary> = items.entries;

  // Group the entries by month
  const groupedObjects = entries.reduce(
    (collection, obj) => {
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
    },
    {} as Record<string, Array<ChangelogEntrySummary>>
  );

  // Sort the keys (year-month)
  const sorted = Object.entries(groupedObjects)
    .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
    .reduce((acc, [date, value]) => ({ ...acc, [date]: value }), {});

  return sorted;
};

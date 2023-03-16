// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetSummaryLatestItemsByProductAndChangeType } from 'sc-changelog/changelog';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';

const handler = async (req: NextApiRequest, res: NextApiResponse<Record<string, ChangelogEntrySummary[]>>) => {
  const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => x.name == req.query.changeType);
  const currentProduct: ProductConfig | undefined = Products.find((x) => x.name == req.query.product);
  const productId = currentProduct != null ? currentProduct.entityId : '';
  const changeTypeId = currentChangeType != null ? currentChangeType.entityId : '';

  const items = await GetSummaryLatestItemsByProductAndChangeType(productId, changeTypeId);
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

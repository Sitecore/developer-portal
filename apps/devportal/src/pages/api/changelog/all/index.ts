// Interfaces
import ChangeTypes from '@/../../packages/sc-changelog/constants/changeTypes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetSummaryLatestItemsByProductAndChangeType } from 'sc-changelog/changelog';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';

const handler = async (req: NextApiRequest, res: NextApiResponse<Record<string, ChangelogEntrySummary[]>>) => {
  const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => x.name == req.query.changeType);
  const currentProduct: ProductConfig | undefined = Products.find((x) => x.name == req.query.product);
  const productId = currentProduct != null ? currentProduct.entityId : '';
  const changeTypeId = currentChangeType != null ? currentChangeType.entityId : '';

  const items = await GetSummaryLatestItemsByProductAndChangeType(productId, changeTypeId);

  const groupedObjects = items.reduce((collection, obj) => {
    const monthYear = new Date(obj.releaseDate).toLocaleString('en-US', { month: 'short', year: 'numeric' });
    if (!collection[monthYear]) {
      collection[monthYear] = [];
    }
    collection[monthYear].push(obj);

    collection[monthYear].sort((a, b) => {
      const earliestDateA = new Date(a.releaseDate);
      const earliestDateB = new Date(b.releaseDate);
      return earliestDateB.getTime() - earliestDateA.getTime();
    });
    return collection;
  }, {} as Record<string, ChangelogEntrySummary[]>);

  res.json(groupedObjects);
};

export default handler;

// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntry, ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  //const maxResults = parseInt(getQueryValue(req.query.maxResults), 10);

  const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => x.name == req.query.changeType);
  const currentProduct: ProductConfig | undefined = Products.find((x) => x.name == req.query.product);

  const limit = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  const productId = currentProduct != null ? currentProduct.entityId : '';
  const changeTypeId = currentChangeType != null ? currentChangeType.entityId : '';

  ChangelogEntriesPaginated(limit, productId, changeTypeId, end).then((response) => {
    res.json(response);
  });
};

export default handler;

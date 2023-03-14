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

const getQueryArray = (query: string | string[] | undefined): string[] => {
  console.log('query: ' + query);
  if (query == undefined) return [];
  return Array.isArray(query) ? query : [query];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => x.name == req.query.changeType);

  const products: string[] = getQueryArray(req.query.product);
  const productId: string[] = [];

  console.log('P: ' + products);
  products.map((p) => {
    const currentProduct: ProductConfig | undefined = Products.find((x) => x.name == p);
    if (currentProduct?.entityId != undefined) productId.push(currentProduct?.entityId);
  });

  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);
  const changeTypeId = currentChangeType != null ? currentChangeType.entityId : '';

  ChangelogEntriesPaginated(limit, productId.join('|'), changeTypeId, end).then((response) => {
    res.json(response);
  });
};

export default handler;

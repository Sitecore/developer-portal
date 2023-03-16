// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import { ChangelogEntry, ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

const getQueryArray = (query: string | string[] | undefined): string[] => {
  if (query == undefined) return [];
  return Array.isArray(query) ? query : [query];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  const products: string[] = getQueryArray(req.query.product);
  const changeTypes: string[] = getQueryArray(req.query.changeType);

  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  await ChangelogEntriesPaginated(limit, products.join('|'), changeTypes.join('|'), end).then((response) => {
    res.status(200).json(response);
  });
};

export default handler;

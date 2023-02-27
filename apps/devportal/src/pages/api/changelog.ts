// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetLatestItems } from 'sc-changelog/changelog';
import ChangelogEntry from 'sc-changelog/types/changeLogEntry';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntry[]>) => {
  //const maxResults = parseInt(getQueryValue(req.query.maxResults), 10);

  //const currentchangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => x.name == req.query.changetype);
  //const currentProduct: ProductConfig | undefined = Products.find((x) => x.name == req.query.product);

  GetLatestItems()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(403).send(err));
};

export default handler;

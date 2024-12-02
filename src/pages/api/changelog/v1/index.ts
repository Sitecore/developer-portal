import { Changelog } from '@lib/changelog';
import { ChangelogEntry, ChangelogEntryList } from '@lib/changelog/types';
import { getQueryArray, getQueryValue } from '@lib/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<Array<ChangelogEntry>>>) => {
  const products: Array<string> = getQueryArray(req.query.product);
  const changeTypes: Array<string> = getQueryArray(req.query.changeType);
  const breaking = req.query.breaking ? true : false;
  const isPreview = req.preview ? true : false;

  const limit = getQueryArray(req.query.limit);
  const end = getQueryValue(req.query.end);

  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getEntries({ productId: products.join('|'), changeTypeId: changeTypes.join('|'), pageSize: Number(limit), endCursor: end, breaking: breaking }).then((response) => {
    res.status(200).json(response);
  });
};

export default handler;

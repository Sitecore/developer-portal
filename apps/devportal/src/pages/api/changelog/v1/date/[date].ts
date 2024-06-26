// Interfaces
import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { Changelog } from '@scdp/changelog';
import { ChangelogEntry, ChangelogEntryList } from '@scdp/changelog/types';
import { getQueryArray, getQueryValue } from '@scdp/changelog/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  const products: string[] = getQueryArray(req.query.product);
  const changeTypes: string[] = getQueryArray(req.query.changeType);
  const isPreview = req.preview ? true : false;
  const date: string[] = getQueryArray(req.query.date);
  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  const dateString = date[0];
  let isoString = `${dateString}T00:00:00.000Z`;

  if (!dateString.includes('-')) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);

    isoString = `${year}-${month}-${day}T00:00:00.000Z`;
  }

  const dateObject = new Date(isoString);

  await changelog.getEntriesByDate(dateObject, false, limit, end).then((response) => {
    res.status(200).json(response);
  });
};

export default handler;

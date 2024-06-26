// Interfaces
import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { Changelog } from '@scdp/changelog';
import { Status } from '@scdp/changelog/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<Status[]>) => {
  const isPreview = req.preview ? true : false;
  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getStatus().then((response: Status[]) => {
    res.setHeader('Cache-Control', 'stale-while-revalida1te');
    res.status(200).json(response);
  });
};

export default handler;

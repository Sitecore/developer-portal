// Interfaces
import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { Changelog } from '@scdp/changelog';
import { ChangeType } from '@scdp/changelog/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangeType[]>) => {
  const isPreview = req.preview ? true : false;
  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.GetChangeTypes().then((response: ChangeType[]) => {
    res.setHeader('Cache-Control', 'stale-while-revalidate');
    res.status(200).json(response);
  });
};

export default handler;

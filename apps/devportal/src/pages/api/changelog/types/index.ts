// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetChangeTypes } from 'sc-changelog/changelog';
import ChangeType from 'sc-changelog/types/changeType';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangeType[]>) => {
  await GetChangeTypes().then((response: ChangeType[]) => {
    res.setHeader('Cache-Control', 'stale-while-revalidate');
    res.status(200).json(response);
  });
};

export default handler;

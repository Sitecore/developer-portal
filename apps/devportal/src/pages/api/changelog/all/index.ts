// Interfaces
import { getOverviewPerMonth } from '@/src/common/changelog';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';

const getQueryArray = (query: string | string[] | undefined): string[] => {
  if (query == undefined) return [];
  return Array.isArray(query) ? query : [query];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Record<string, ChangelogEntrySummary[]>>) => {
  const products: string[] = getQueryArray(req.query.product);
  const changeTypes: string[] = getQueryArray(req.query.changeType);
  const isPreview = req.preview ?? false;

  const sorted = await getOverviewPerMonth(isPreview, products, changeTypes);
  res.status(200).json(sorted);
};

export default handler;

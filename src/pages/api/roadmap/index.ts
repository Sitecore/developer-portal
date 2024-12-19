import { RoadmapInformation } from '@/src/lib/interfaces/jira';
import { getRoadmap } from '@/src/lib/jira';
import { getQueryArray } from '@/src/lib/utils';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0/edge';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse<RoadmapInformation>) => {
  const url = new URL(req.url || `http://${req.headers.host}`);
  const searchParams = url.searchParams;
  const product = searchParams.get('product') || '';
  const products: Array<string> = getQueryArray(product);
  const session = await getSession(req, res);

  if (session?.user?.['https://auth.sitecorecloud.io/claims/org_id'] == null) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await getRoadmap();

    if (response == null) {
      return NextResponse.json({ error: 'Failed to fetch data from external API' }, { status: 500 });
    }

    if (products.length > 0) {
      response.items = response.items.filter((item) => {
        return item.product.some((product) => products.includes(product.id));
      });
    }
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch roadmap data' }, { status: 500 });
  }
});

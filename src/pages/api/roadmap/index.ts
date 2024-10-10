import { RoadmapInformation } from '@/src/lib/interfaces/jira';
import { getRoadmap } from '@/src/lib/jira';
import { getQueryArray } from '@/src/lib/utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const handler = async (req: NextApiRequest, res: NextApiResponse<RoadmapInformation>) => {
  const products: Array<string> = getQueryArray(req.query.product);

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
    return res.json(response);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch roadmap data' }, { status: 500 });
  }
};

export default handler;

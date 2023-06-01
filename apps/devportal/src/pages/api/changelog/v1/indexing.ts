import type { NextApiRequest, NextApiResponse } from 'next';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import { getQueryValue } from 'sc-changelog/utils/requests';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';

const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';

type IndexResult = {
  title: string;
  changeTypes: string[];
  products: string[];
  date: string;
  description: string;
  fullArticle?: string | null;
  readMoreLink: string;
  breakingChange: boolean;
  image?: string | null;
  url: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<IndexResult[]>) => {
  // Default Edge pageSize is 10, use parameter to override
  const pageSize = getQueryValue(req.query.pageSize);
  const list: IndexResult[] = [];

  GetEntries(list, '', pageSize).then((results) => {
    res.status(200).json(results);
  });
};

export default handler;

async function GetEntries(list: IndexResult[], end: string, limit: string) {
  let completed = false;

  await ChangelogEntriesPaginated(false, limit, '', '', end).then((response) => {
    // Parse the response and add the resultslist
    response.entries.map((entry) => {
      list.push({
        title: entry.title,
        changeTypes: entry.changeType.map((obj) => obj.changeType),
        products: entry.sitecoreProduct.map((obj) => obj.productName),
        date: entry.releaseDate,
        image: entry.image[0] != null ? entry.image[0].fileUrl : null,
        description: entry.description,
        fullArticle: entry.fullArticle,
        readMoreLink: entry.readMoreLink,
        breakingChange: entry.breakingChange ? true : false,
        url: `${publicUrl}${getChangelogEntryUrl(entry)}`,
      });
    });
    end = response.endCursor;
    completed = list.length >= response.total;
  });

  if (!completed) await GetEntries(list, end, limit);
  return list;
}

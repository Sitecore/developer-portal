import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { removeHtmlTagsAndSpecialChars } from '@/src/lib/utils';
import { Changelog } from '@scdp/changelog';
import { ChangelogEntry, ChangelogEntryList } from '@scdp/changelog/types';
import { getChangelogEntryUrl, getQueryValue } from '@scdp/changelog/utils';

import type { NextApiRequest, NextApiResponse } from 'next';

const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';

type IndexingList = {
  total: number;
  hasMore: boolean;
  endCursor: string;
  entries: IndexResult[];
};

type IndexResult = {
  title: string;
  changeTypes: string[];
  products: IndexProduct[];
  date: string;
  description: string;
  fullArticle?: string | null;
  readMoreLink: string;
  breakingChange: boolean;
  image?: string | null;
  url: string;
};

type IndexProduct = {
  name: string;
  description: string;
  darkIcon: string;
  lightIcon: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<IndexingList>) => {
  // Default Edge pageSize is 10, use parameter to override
  const pageSize = getQueryValue(req.query.size);
  const endCursor = getQueryValue(req.query.cursor);
  const results: IndexResult[] = [];

  await GetEntries(results, endCursor, pageSize).then((results) => {
    res.status(200).json(results);
  });
};

export default handler;

async function GetEntries(list: IndexResult[], end: string, limit: string) {
  const changelog = new Changelog(getChangelogCredentials());
  const entryList: ChangelogEntryList<ChangelogEntry[]> = await changelog.getEntriesPaginated(limit, '', '', end);

  entryList.entries.map((entry) => {
    list.push({
      title: entry.title,
      changeTypes: entry.changeType.map((obj) => obj.changeType),
      products: entry.sitecoreProduct.map(
        (obj) =>
          <IndexProduct>{
            name: obj.productName,
            description: obj.productDescription,
            darkIcon: obj.darkIcon,
            lightIcon: obj.lightIcon,
            //sitecoreClouds: obj.sitecoreCloud.results.map((cloud) => cloud.cloudName),
          }
      ),
      date: entry.releaseDate,
      image: entry.image[0] != null ? entry.image[0].fileUrl : null,
      description: removeHtmlTagsAndSpecialChars(entry.description),
      fullArticle: entry.fullArticle ? removeHtmlTagsAndSpecialChars(entry.fullArticle) : null,
      readMoreLink: entry.readMoreLink,
      breakingChange: entry.breakingChange ? true : false,
      url: `${publicUrl}${getChangelogEntryUrl(entry)}`,
    });
  });

  const indexingList: IndexingList = {
    total: entryList.total,
    hasMore: entryList.hasNext,
    endCursor: entryList.endCursor,
    entries: list,
  };

  return indexingList;
}

import { Changelog } from '@lib/changelog';
import { ChangelogEntry, ChangelogEntryList } from '@lib/changelog/types';
import { getQueryValue } from '@/src/lib/utils/requests';
import { removeHtmlTagsAndSpecialChars } from '@/src/lib/utils/stringUtil';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';

type IndexingList = {
  total: number;
  hasMore: boolean;
  endCursor: string;
  entries: Array<IndexResult>;
};

type IndexResult = {
  title: string;
  changeTypes: Array<string>;
  products: Array<IndexProduct>;
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
  const results: Array<IndexResult> = [];

  await GetEntries(results, endCursor, pageSize).then((results) => {
    res.status(200).json(results);
  });
};

export default handler;

async function GetEntries(list: Array<IndexResult>, end: string, limit: string) {
  const changelog = new Changelog(getChangelogCredentials());
  const entryList: ChangelogEntryList<Array<ChangelogEntry>> = await changelog.getEntriesPaginated(limit, '', '', end);

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
            // sitecoreClouds: obj.sitecoreCloud.results.map((cloud) => cloud.cloudName),
          }
      ),
      date: entry.releaseDate,
      image: entry.image[0] != null ? entry.image[0].fileUrl : null,
      description: removeHtmlTagsAndSpecialChars(entry.description),
      fullArticle: entry.fullArticle ? removeHtmlTagsAndSpecialChars(entry.fullArticle) : null,
      readMoreLink: entry.readMoreLink,
      breakingChange: entry.breakingChange ? true : false,
      url: `${publicUrl}${(entry)}`,
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

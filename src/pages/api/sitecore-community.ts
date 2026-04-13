import {
  type ContentType,
  type ForumOption,
  SitecoreCommunityApi,
  type SitecoreCommunityContent,
  type SitecoreCommunityEvent,
  type SortOption,
} from "@src/components/integrations";
import type { NextApiRequest, NextApiResponse } from "next";

const getQueryValue = (query: string | Array<string> | undefined): string => {
  if (query === undefined) {
    return "";
  }

  return Array.isArray(query) ? query[0] : query;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<
    Array<SitecoreCommunityEvent> | Array<SitecoreCommunityContent>
  >,
) => {
  const sort = getQueryValue(req.query.sort) as SortOption;
  const maxResults = parseInt(getQueryValue(req.query.maxResults), 10);
  const forum = getQueryValue(req.query.forum) as ForumOption;
  const contentType = getQueryValue(req.query.contentType) as ContentType;

  SitecoreCommunityApi.get({
    contentType,
    maxResults: Number.isNaN(maxResults) ? 3 : maxResults,
    sort,
    forum,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(403).send(err));

  res.end();
};

export default handler;

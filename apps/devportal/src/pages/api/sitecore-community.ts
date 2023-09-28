import type { NextApiRequest, NextApiResponse } from 'next';
import { SitecoreCommunityContent, SitecoreCommunityEvent } from 'ui/components/integrations/sitecoreCommunity';
import SitecoreCommunityApi, { ContentType, ForumOption, SortOption } from 'ui/components/integrations/sitecoreCommunity/SitecoreCommunity.api';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<SitecoreCommunityEvent[] | SitecoreCommunityContent[]>) => {
  const sort = getQueryValue(req.query.sort) as SortOption;
  const maxResults = parseInt(getQueryValue(req.query.maxResults), 10);
  const forum = getQueryValue(req.query.forum) as ForumOption;
  const contentType = getQueryValue(req.query.contentType) as ContentType;

  SitecoreCommunityApi.get({
    contentType,
    maxResults: isNaN(maxResults) ? 3 : maxResults,
    sort,
    forum,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(403).send(err));
};

export default handler;

// Interfaces
import type { SitecoreCommunityContent } from '@/src/interfaces/integrations';
// Global
import axios from 'axios';
import { useState } from 'react';
// Components
import FeedHeading from 'ui/components/headings/FeedHeading';
// Local
import { SortOption } from '../SitecoreCommunity.api';
import SitecoreCommunityBlogOrQuestion from '../SitecoreCommunityBlogOrQuestion';

type SitecoreCommunityBlogProps = {
  content?: SitecoreCommunityContent[];
  sortKeys?: SortOption | SortOption[];
};

const SitecoreCommunityBlog = ({ content, sortKeys }: SitecoreCommunityBlogProps): JSX.Element => {
  if (!content || content.length === 0) {
    return <></>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fetchedResults, setFetchedResults] = useState<SitecoreCommunityContent[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchNewResults = (val: string) => {
    setIsLoading(true);
    const query = ['contentType=blog', 'forum=blog', `sort=${val}`];
    axios
      .get(`/api/sitecore-community?${query.join('&')}`)
      .then((response) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <FeedHeading
        title="Latest blog posts"
        link={{
          href: 'https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba',
          title: 'See all',
        }}
      />
      <div className="mb-6 flex justify-end">
        {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
          <label className="flex items-center text-xs font-semibold">
            Order by:
            <select
              onChange={(changeEvent) => fetchNewResults(changeEvent.target.value)}
              className="bg-theme-bg `text-theme-text ml-2 border-2 p-2 font-semibold"
            >
              <option value="created">Recent Questions</option>
              <option value="view">Most Popular</option>
              <option value="created">Created</option>
            </select>
          </label>
        )}
      </div>
      <ul className="grid gap-y-6">
        {content.map((item, i) => (
          <SitecoreCommunityBlogOrQuestion
            item={item}
            contentType="Blog"
            key={i}
            loading={isLoading}
          />
        ))}
      </ul>
    </>
  );
};

export default SitecoreCommunityBlog;

// Interfaces
import type { SitecoreCommunityContent } from '@/interfaces/integrations';
// Global
import { classnames } from 'tailwindcss-classnames';
import axios from 'axios';
import { useState } from 'react';
// Components
import FeedHeading from '@/components/helper/FeedHeading';
// Local
import SitecoreCommunityBlogOrQuestion from '../SitecoreCommunityBlogOrQuestion';
import { SortOption } from '../SitecoreCommunity.api';

type SitecoreCommunityBlogProps = {
  content?: SitecoreCommunityContent[];
  sortKeys?: SortOption | SortOption[];
};

const SitecoreCommunityBlog = ({ content, sortKeys }: SitecoreCommunityBlogProps): JSX.Element => {
  if (!content || content.length === 0) {
    return <></>;
  }

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

  const items = fetchedResults || content;

  return (
    <>
      <FeedHeading
        title="Latest blog posts"
        link={{
          href: 'https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba',
          title: 'See all',
        }}
      />
      <div className={classnames('flex', 'justify-end', 'mb-6')}>
        {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
          <label className={classnames('text-xs', 'font-semibold', 'flex', 'items-center')}>
            Order by:
            <select
              onChange={(changeEvent) => fetchNewResults(changeEvent.target.value)}
              className={classnames(
                'bg-theme-bg',
                'border-2',
                'font-semibold',
                'ml-2',
                'p-2',
                'text-theme-text'
              )}
            >
              <option value="created">Recent Questions</option>
              <option value="view">Most Popular</option>
              <option value="created">Created</option>
            </select>
          </label>
        )}
      </div>
      <ul className={classnames('grid', 'gap-y-6')}>
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

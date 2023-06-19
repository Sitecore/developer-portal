// Interfaces
import type { SitecoreCommunityContent } from 'ui/common/types/sitecoreCommunity';
// Global
import axios from 'axios';
import { useState } from 'react';
// Components
import FeedHeading from 'ui/components/headings/FeedHeading';
// Local
import { SortOption } from '../SitecoreCommunity.api';
import SitecoreCommunityBlogOrQuestion, { SitecoreCommunityBlogOrQuestionSidebar } from '../SitecoreCommunityBlogOrQuestion';

type SitecoreCommunityBlogProps = {
  content?: SitecoreCommunityContent[];
  sortKeys?: SortOption | SortOption[];
  listItem?: boolean;
  headingClass?: string;
  className?: string;
};

const SitecoreCommunityBlog = ({ content, sortKeys, headingClass, className, listItem }: SitecoreCommunityBlogProps): JSX.Element => {
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
    <div className={className}>
      <FeedHeading
        title="Latest blog posts"
        link={{
          href: 'https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba',
          title: 'See all',
        }}
        headingClass={headingClass}
      />

      {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
        <div className="mb-6 flex justify-end">
          <label className="flex items-center text-xs font-semibold">
            Order by:
            <select onChange={(changeEvent) => fetchNewResults(changeEvent.target.value)} className="bg-theme-bg `text-theme-text ml-2 border-2 p-2 font-semibold">
              <option value="created">Recent Questions</option>
              <option value="view">Most Popular</option>
              <option value="created">Created</option>
            </select>
          </label>
        </div>
      )}

      <ul className="grid gap-y-6">
        {content.map((item, i) => (listItem ? <SitecoreCommunityBlogOrQuestionSidebar item={item} contentType="Blog" key={i} loading={isLoading} /> : <SitecoreCommunityBlogOrQuestion item={item} contentType="Blog" key={i} loading={isLoading} />))}
      </ul>
    </div>
  );
};

export default SitecoreCommunityBlog;

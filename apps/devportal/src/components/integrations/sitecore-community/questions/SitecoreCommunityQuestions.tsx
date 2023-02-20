// Interfaces
import type { SitecoreCommunityContent } from 'ui/common/types/sitecoreCommunity';
// Global
import axios from 'axios';
import { useEffect, useState } from 'react';
// Components
import TextLink from 'ui/components/common/TextLink';
// Local
import { FORUM_TO_TITLE } from '../sitecore-community.constants';
import { ForumOption, SortOption } from '../SitecoreCommunity.api';
import SitecoreCommunityBlogOrQuestion from '../SitecoreCommunityBlogOrQuestion';

type SitecoreCommunityQuestionsProps = {
  content?: SitecoreCommunityContent[];
  sortKeys?: SortOption | SortOption[];
  forumKeys?: ForumOption | ForumOption[];
};

const SitecoreCommunityQuestions = ({
  content,
  sortKeys,
  forumKeys,
}: SitecoreCommunityQuestionsProps): JSX.Element => {
  if (!content || content.length === 0) {
    return <></>;
  }

  const [fetchedResults, setFetchedResults] = useState<SitecoreCommunityContent[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [forum, setForum] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    const query = ['contentType=questions'];
    if (sort) {
      query.push(`sort=${sort}`);
    }
    if (forum) {
      query.push(`forum=${forum}`);
    }
    axios
      .get(`/api/sitecore-community?${query.join('&')}`)
      .then((response) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [sort, forum]);

  const items = fetchedResults || content;

  const hasForumKeys = forumKeys && Array.isArray(forumKeys) && forumKeys.length > 1;

  return (
    <>
      <div className="mb-4 justify-between md:flex">
        <h2 className="heading-md mb-2 md:mb-0">Questions from the community</h2>
        <TextLink
          href="https://community.sitecore.com/community?id=community_forum&sys_id=671511531b357810486a4083b24bcb62"
          text="See all"
          target="_blank"
        />
      </div>
      <div className="mb-6 flex justify-end">
        {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
          <label
            className={`flex items-center text-xs font-semibold ${hasForumKeys ? 'mr-10' : ''}`}
          >
            Order by:
            <select
              onChange={(changeEvent) => setSort(changeEvent.target.value)}
              className="bg-theme-bg text-theme-text ml-2 border-2 p-2 font-semibold"
            >
              <option value="publish">Recent Questions</option>
              <option value="view">Most Popular</option>
              <option value="created">Created</option>
            </select>
          </label>
        )}

        {forumKeys && Array.isArray(forumKeys) && forumKeys.length > 1 && (
          <label className="flex items-center text-xs font-semibold">
            Filter by:
            <select
              onChange={(changeEvent) => setForum(changeEvent.target.value)}
              className="bg-theme-bg text-theme-text ml-2 border-2 p-2 font-semibold"
            >
              {forumKeys.map((key) => (
                <option key={key} value={key}>
                  {FORUM_TO_TITLE[key]}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      <ul className="grid gap-y-6">
        {items.map((item, i) => (
          <SitecoreCommunityBlogOrQuestion
            item={item}
            contentType="Questions"
            loading={isLoading}
            key={i}
          />
        ))}
      </ul>
    </>
  );
};

export default SitecoreCommunityQuestions;

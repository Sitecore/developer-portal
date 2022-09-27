// Interfaces
import type { SitecoreCommunityContent } from '@/src/interfaces/integrations';
// Global
import axios from 'axios';
import { useState, useEffect } from 'react';
import { classnames } from '@/src/common/types/tailwindcss-classnames';
// Components
import TextLink from '@/src/components/common/TextLink';
// Local
import SitecoreCommunityBlogOrQuestion from '../SitecoreCommunityBlogOrQuestion';
import { ForumOption, SortOption } from '../SitecoreCommunity.api';
import { FORUM_TO_TITLE } from '../sitecore-community.constants';

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
      <div className={classnames('md:flex', 'justify-between', 'mb-4')}>
        <h2 className={classnames('heading-md', 'mb-2', 'md:mb-0')}>
          Questions from the community
        </h2>
        <TextLink
          href="https://community.sitecore.com/community?id=community_forum&sys_id=671511531b357810486a4083b24bcb62"
          text="See all"
          target="_blank"
        />
      </div>
      <div className={classnames('flex', 'justify-end', 'mb-6')}>
        {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
          <label
            className={classnames('text-xs', 'font-semibold', 'flex', 'items-center', {
              'mr-10': hasForumKeys,
            })}
          >
            Order by:
            <select
              onChange={(changeEvent) => setSort(changeEvent.target.value)}
              className={classnames(
                'bg-theme-bg',
                'border-2',
                'font-semibold',
                'ml-2',
                'p-2',
                'text-theme-text'
              )}
            >
              <option value="publish">Recent Questions</option>
              <option value="view">Most Popular</option>
              <option value="created">Created</option>
            </select>
          </label>
        )}

        {forumKeys && Array.isArray(forumKeys) && forumKeys.length > 1 && (
          <label className={classnames('text-xs', 'font-semibold', 'flex', 'items-center')}>
            Filter by:
            <select
              onChange={(changeEvent) => setForum(changeEvent.target.value)}
              className={classnames(
                'bg-theme-bg',
                'border-2',
                'font-semibold',
                'ml-2',
                'p-2',
                'text-theme-text'
              )}
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
      <ul className={classnames('grid', 'gap-y-6')}>
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

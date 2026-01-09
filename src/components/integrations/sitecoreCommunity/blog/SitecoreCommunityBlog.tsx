import axios from 'axios';
import { SetStateAction, useState } from 'react';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { TextLink } from '../../../links/TextLink';
import { SortOption } from '../SitecoreCommunity.api';
import { SitecoreCommunityBlogOrQuestion, SitecoreCommunityBlogOrQuestionSidebar } from '../SitecoreCommunityBlogOrQuestion';
import { SitecoreCommunityContent } from '../types';
import { cn } from '@lib/utils';

type SitecoreCommunityBlogProps = {
  entries?: Array<SitecoreCommunityContent>;
  sortKeys?: SortOption | Array<SortOption>;
  listItem?: boolean;
  className?: string;
};

export const SitecoreCommunityBlog = ({ entries, sortKeys, listItem, className, ...rest }: SitecoreCommunityBlogProps) => {
  const [fetchedResults, setFetchedResults] = useState<Array<SitecoreCommunityContent> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchNewResults = (val: string) => {
    setIsLoading(true);

    const query = ['contentType=blog', 'forum=blog', `sort=${val}`];

    axios
      .get(`/api/sitecore-community?${query.join('&')}`)
      .then((response: { data: SetStateAction<Array<SitecoreCommunityContent> | null> }) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err: any) => console.log(err));
  };

  if (!entries || entries.length === 0) {
    return <></>;
  }

  return (
    <Card className={cn('border-0 shadow-none', className)}>
      <CardHeader className="flex justify-between py-8 px-0">
        <h3 className={cn('font-heading font-medium', listItem ? 'text-base' : 'text-2xl')}>
          Latest community blog posts
        </h3>

        <TextLink href="https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba" text="See all" />
      </CardHeader>
      <CardContent className="p-0">
        {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
          <div className="flex justify-end mb-6">
            <label>
              Order by:
              <select onChange={(changeEvent) => fetchNewResults(changeEvent.target.value)} className="ml-2 px-2 py-1 border rounded">
                <option value="created">Recent Questions</option>
                <option value="view">Most Popular</option>
                <option value="created">Created</option>
              </select>
            </label>
          </div>
        )}

        {listItem ? (
          entries.map((item, i) => <SitecoreCommunityBlogOrQuestionSidebar item={item} contentType="Blog" key={i} loading={isLoading} />)
        ) : (
          <div className="flex flex-col md:flex-row gap-8 py-5">
            {entries.slice(0, 3).map((item, i) => (
              <SitecoreCommunityBlogOrQuestion item={item} contentType="Blog" key={i} loading={isLoading} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

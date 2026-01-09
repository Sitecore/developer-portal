import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { Button } from '@components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { TextLink } from '../../../links/TextLink';
import { FORUM_TO_TITLE } from '../sitecore-community.constants';
import { ForumOption, SortOption } from '../SitecoreCommunity.api';
import { SitecoreCommunityBlogOrQuestion } from '../SitecoreCommunityBlogOrQuestion';
import type { SitecoreCommunityContent } from '../types';
import { cn } from '@lib/utils';

type SitecoreCommunityQuestionsProps = {
  data?: Array<SitecoreCommunityContent>;
  sortKeys?: SortOption | Array<SortOption>;
  forumKeys?: ForumOption | Array<ForumOption>;
  className?: string;
};

export const SitecoreCommunityQuestions = ({ data, sortKeys, forumKeys, className, ...rest }: SitecoreCommunityQuestionsProps) => {
  const [fetchedResults, setFetchedResults] = useState<Array<SitecoreCommunityContent> | null>(null);
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

  const items = fetchedResults || data;

  if (!data || data.length === 0) {
    return <></>;
  }

  return (
    <Card className={cn('shadow-none bg-transparent border-0 w-full', className)}>
      <CardHeader className="flex justify-between">
        <h3 className="text-2xl font-heading">
          Questions from the community
        </h3>
        <TextLink href="https://community.sitecore.com/community?id=community_forum&sys_id=671511531b357810486a4083b24bcb62" text="See all" />
      </CardHeader>
      <CardContent className="pt-8">
        <div className="flex gap-4 mb-4">
          {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Order by
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSort('publish')}>Recent Questions</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort('view')}>Most Popular</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort('created')}>Created</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {forumKeys && Array.isArray(forumKeys) && forumKeys.length > 1 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Filter by
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {forumKeys.map((key) => (
                  <DropdownMenuItem key={key} onClick={() => setForum(key)}>
                    {FORUM_TO_TITLE[key]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {items?.map((item, i) => <SitecoreCommunityBlogOrQuestion item={item} contentType="Questions" loading={isLoading} key={i} />)}
      </CardContent>
    </Card>
  );
};

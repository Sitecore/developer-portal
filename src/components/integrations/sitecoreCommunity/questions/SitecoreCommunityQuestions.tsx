import { TextLink } from "@src/components/links/TextLink";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/util";
import type { ForumOption, SortOption } from "../SitecoreCommunity.api";
import { SitecoreCommunityBlogOrQuestion } from "../SitecoreCommunityBlogOrQuestion";
import { FORUM_TO_TITLE } from "../sitecore-community.constants";
import type { SitecoreCommunityContent } from "../types";

type SitecoreCommunityQuestionsProps = {
  data?: Array<SitecoreCommunityContent>;
  sortKeys?: SortOption | Array<SortOption>;
  forumKeys?: ForumOption | Array<ForumOption>;
  className?: string;
};

export const SitecoreCommunityQuestions = ({
  data,
  sortKeys,
  forumKeys,
  className,
}: SitecoreCommunityQuestionsProps) => {
  const [fetchedResults, setFetchedResults] =
    useState<Array<SitecoreCommunityContent> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [forum, setForum] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    const query = ["contentType=questions"];

    if (sort) {
      query.push(`sort=${sort}`);
    }

    if (forum) {
      query.push(`forum=${forum}`);
    }

    fetch(`/api/sitecore-community?${query.join("&")}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFetchedResults(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [sort, forum]);

  const items = fetchedResults || data;

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Card
      className={cn("shadow-none bg-transparent border-0 w-full", className)}
    >
      <CardHeader className="flex justify-between">
        <h3 className="text-2xl font-heading">Questions from the community</h3>
        <TextLink
          href="https://community.sitecore.com/community?id=community_forum&sys_id=671511531b357810486a4083b24bcb62"
          text="See all"
        />
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
                <DropdownMenuItem onClick={() => setSort("publish")}>
                  Recent Questions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort("view")}>
                  Most Popular
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort("created")}>
                  Created
                </DropdownMenuItem>
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

        {items?.map((item) => (
          <SitecoreCommunityBlogOrQuestion
            item={item}
            contentType="Questions"
            loading={isLoading}
            key={item.url}
          />
        ))}
      </CardContent>
    </Card>
  );
};

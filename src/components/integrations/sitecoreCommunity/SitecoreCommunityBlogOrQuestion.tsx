"use client";

import { Card, CardContent, CardFooter } from "@src/components/ui/card";
import { Skeleton } from "@src/components/ui/skeleton";
import NextLink from "next/link";
import { translateDate } from "@/src/lib/util/dateUtil";
import { SITECORE_COMMUNITY_URL } from "./sitecore-community.constants";
import type { SitecoreCommunityContent } from "./types";

type SitecoreCommunityBlogOrQuestionProps = {
  contentType: "Blog" | "Questions";
  item: SitecoreCommunityContent;
  loading?: boolean;
};

export const SitecoreCommunityBlogOrQuestion = ({
  item,
  loading,
}: SitecoreCommunityBlogOrQuestionProps) => (
  <article>
    <Card className="border shadow-md hover:shadow-lg transition-shadow w-full">
      <CardContent>
        <div className="flex gap-16 justify-between">
          {loading ? (
            <Skeleton className="flex-grow h-20" />
          ) : (
            <div className="flex-grow">
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
                  {item.contentType}
                </p>
                <h3 className="text-lg font-heading my-4">
                  <NextLink
                    href={`${SITECORE_COMMUNITY_URL}${item.url}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground hover:underline"
                  >
                    {item.title}
                  </NextLink>
                </h3>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between flex-wrap">
        <p>
          by <strong>{item.userName}</strong>
        </p>
        <p className="text-sm text-muted-foreground">
          Published <strong>{translateDate(item.publishDate)}</strong>
        </p>
      </CardFooter>
    </Card>
  </article>
);

export const SitecoreCommunityBlogOrQuestionSidebar = ({
  item,
  loading,
}: SitecoreCommunityBlogOrQuestionProps) => {
  return (
    <div className="flex items-start mb-5">
      {loading ? (
        <Skeleton className="hidden sm:block w-[25px] h-[25px] mr-5" />
      ) : (
        <div className="hidden sm:block text-center mr-5 h-min">
          <svg
            viewBox="0 0 30 30"
            width="25"
            height="25"
            className="m-2 text-current"
            aria-label="Community icon"
            role="img"
          >
            <rect
              x="1.304"
              y="1.314"
              width="27.337"
              height="27.337"
              fill="none"
              stroke="currentColor"
            />
            <polyline
              fill="currentColor"
              stroke="currentColor"
              points="4.7 3.841 25.19 3.874"
            />
            <polyline
              fill="currentColor"
              stroke="currentColor"
              points="4.7 15.624 25.19 15.657"
            />
            <polyline
              fill="currentColor"
              stroke="currentColor"
              points="4.7 17.544 25.19 17.577"
            />
            <polyline
              fill="currentColor"
              stroke="currentColor"
              points="4.7 19.398 25.19 19.431"
            />
            <polyline
              fill="currentColor"
              stroke="currentColor"
              points="4.7 21.318 25.19 21.351"
            />
            <rect
              x="5.197"
              y="6.323"
              width="19.496"
              height="7.117"
              fill="currentColor"
              stroke="currentColor"
            />
            <polyline
              fill="currentColor"
              stroke="currentColor"
              points="4.7 23.486 25.19 23.519"
            />
            <polyline
              fill="currentColor"
              stroke="currentColor"
              points="4.7 25.406 25.19 25.439"
            />
          </svg>
        </div>
      )}
      {loading ? (
        <Skeleton className="flex-grow h-16" />
      ) : (
        <div className="flex-grow text-sm">
          <h4 className="text-base font-heading">
            <NextLink
              href={`${SITECORE_COMMUNITY_URL}${item.url}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground hover:underline"
            >
              {item.title}
            </NextLink>
          </h4>
          <div className="flex items-center gap-6">
            <p>
              {new Date(item.publishDate).toLocaleString("en-US", {
                dateStyle: "medium",
              })}
            </p>
            <p>{item.commentCount} comments</p>
            <p>{item.viewCount} views</p>
          </div>
        </div>
      )}
    </div>
  );
};

import {
  SitecoreCommunityBlog,
  SitecoreCommunityQuestions,
  StackExchangeFeed,
  YouTubeFeed,
} from "@src/components/integrations";
import type { PageInfo } from "@src/lib/interfaces/page-info";

type SocialFeedsProps = {
  pageInfo: PageInfo;
};

export const SocialFeeds = ({ pageInfo }: SocialFeedsProps) => (
  <>
    <YouTubeFeed
      data={pageInfo.youtube}
      title={pageInfo.youtubeTitle}
      playlistTitle={pageInfo.youtubePlaylistTitle}
    />
    <SitecoreCommunityQuestions
      data={pageInfo.sitecoreCommunity.questions}
      sortKeys={pageInfo.sitecoreCommunityQuestionsSort}
      forumKeys={pageInfo.sitecoreCommunityQuestionsCategory}
    />
    <StackExchangeFeed data={pageInfo.stackexchange} />
    {/* <TwitterFeed data={pageInfo.twitter} handle={pageInfo.twitterHandle} /> */}
    <SitecoreCommunityBlog
      entries={pageInfo.sitecoreCommunity.blog}
      sortKeys={pageInfo.sitecoreCommunityBlogSort}
    />
  </>
);

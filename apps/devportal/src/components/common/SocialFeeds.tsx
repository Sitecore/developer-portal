import { PageInfo } from '@lib/interfaces/page-info';
import { StackExchangeFeed, YouTubeFeed,SitecoreCommunityBlog, SitecoreCommunityQuestions } from '@scdp/ui/components';

type SocialFeedsProps = {
  pageInfo: PageInfo;
};

const SocialFeeds = ({ pageInfo }: SocialFeedsProps): JSX.Element => (
  <>
    <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
    <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
    <StackExchangeFeed data={pageInfo.stackexchange} />
    {/* <TwitterFeed data={pageInfo.twitter} handle={pageInfo.twitterHandle} /> */}
    <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} />
  </>
);

export default SocialFeeds;

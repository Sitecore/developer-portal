// Interfaces
import type { PageInfo } from '@/src/interfaces/page-info';
// Components
import VerticalGroup from 'ui/components/common/VerticalGroup';
import SitecoreCommunityBlog from './sitecore-community/blog/SitecoreCommunityBlog';
import SitecoreCommunityQuestions from './sitecore-community/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from './stackexchange/StackExchangeFeed';
import TwitterFeed from './twitter/TwitterFeed';
import YouTubeFeed from './youtube/YouTubeFeed';

type SocialFeedsProps = {
  pageInfo: PageInfo;
};

const SocialFeeds = ({ pageInfo }: SocialFeedsProps): JSX.Element => (
  <VerticalGroup>
    <YouTubeFeed
      content={pageInfo.youtube}
      title={pageInfo.youtubeTitle}
      playlistTitle={pageInfo.youtubePlaylistTitle}
    />
    <SitecoreCommunityQuestions
      content={pageInfo.sitecoreCommunity.questions}
      sortKeys={pageInfo.sitecoreCommunityQuestionsSort}
      forumKeys={pageInfo.sitecoreCommunityQuestionsCategory}
    />
    <StackExchangeFeed content={pageInfo.stackexchange} />
    <TwitterFeed content={pageInfo.twitter} handle={pageInfo.twitterHandle} />
    <SitecoreCommunityBlog
      content={pageInfo.sitecoreCommunity.blog}
      sortKeys={pageInfo.sitecoreCommunityBlogSort}
    />
  </VerticalGroup>
);

export default SocialFeeds;

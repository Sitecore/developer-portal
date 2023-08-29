import { PageInfo } from '../../lib/interfaces/page-info';
import SitecoreCommunityBlog from '../sitecoreCommunity/blog/SitecoreCommunityBlog';
import SitecoreCommunityQuestions from '../sitecoreCommunity/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from '../stackexchange/StackExchangeFeed';
import { VerticalGroup } from '../ui/VerticalGroup';
import YouTubeFeed from '../youtube/YouTubeFeed';

type SocialFeedsProps = {
  pageInfo: PageInfo;
};

const SocialFeeds = ({ pageInfo }: SocialFeedsProps): JSX.Element => (
  <VerticalGroup>
    <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
    <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
    <StackExchangeFeed data={pageInfo.stackexchange} />
    {/* <TwitterFeed data={pageInfo.twitter} handle={pageInfo.twitterHandle} /> */}
    <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} />
  </VerticalGroup>
);

export default SocialFeeds;

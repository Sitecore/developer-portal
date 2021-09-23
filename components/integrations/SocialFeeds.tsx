// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import StackExchangeFeed from './stackexchange/StackExchangeFeed';
import TwitterFeed from './twitter/TwitterFeed';
import VerticalGroup from '@/components/helper/VerticalGroup';
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
    <TwitterFeed content={pageInfo.twitter} handle={pageInfo.twitterHandle} />
    <StackExchangeFeed content={pageInfo.stackexchange} />
  </VerticalGroup>
);

export default SocialFeeds;

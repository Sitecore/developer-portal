import type { PageInfo } from '@/interfaces/page-info';
import { classnames } from '@/tailwindcss-classnames';
import StackExchangeFeed from './stackexchange/StackExchangeFeed';
import TwitterFeed from './twitter/TwitterFeed';
import YouTubeFeed from './youtube/YouTubeFeed';

type SocialFeedsProps = {
  pageInfo: PageInfo;
};

const SocialFeeds = ({ pageInfo }: SocialFeedsProps): JSX.Element => (
  <>
    <div className={classnames('mb-16')}>
      <YouTubeFeed content={pageInfo.youtube} />
    </div>
    <div className={classnames('mb-16')}>
      <TwitterFeed content={pageInfo.twitter} />
    </div>
    <div>
      <StackExchangeFeed content={pageInfo.stackexchange} />
    </div>
  </>
);

export default SocialFeeds;

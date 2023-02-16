// Interfaces
import type { SitecoreCommunityContent } from '@/src/interfaces/integrations';
// Global
// Lib
import translateDate from '@/src/common/translate-date';
// Local
import { SITECORE_COMMUNITY_URL } from './sitecore-community.constants';

type SitecoreCommunityBlogOrQuestionProps = {
  contentType: 'Blog' | 'Questions';
  item: SitecoreCommunityContent;
  loading?: boolean;
};

const skeletonLoaderClasses =
  'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

const SitecoreCommunityBlogOrQuestion = ({
  item,
  contentType,
  loading,
}: SitecoreCommunityBlogOrQuestionProps): JSX.Element => (
  <li className="relative items-center p-6 border border-theme-text-alt shadow-theme hover:shadow-theme-md md:flex">
    <div className="flex flex-col justify-between flex-grow-0 w-full">
      <div>
        <p
          className={`text-sm font-semibold mb-1 ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}
        >
          {contentType}
        </p>
        <p>
          <a
            className={`block text-lg font-semibold mb-1 hover:underline hover:text-theme-link-hover ${
              loading ? 'w-2/3' && skeletonLoaderClasses : ''
            } `}
            href={`${SITECORE_COMMUNITY_URL}${item.url}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            {item.title}
            <span className="absolute inset-0 z-10"></span>
          </a>
        </p>
      </div>
      <p className={`text-xs ${loading ? 'w-1/3' && skeletonLoaderClasses : ''}`}>
        <span className="mr-6">
          by <strong>{item.userName}</strong>
        </span>{' '}
        <span>
          Published <strong>{translateDate(item.publishDate)}</strong>
        </span>
      </p>
    </div>
    <div className="flex flex-shrink-0 mt-4 md:ml-4 md:block md:mr-0 md:text-right">
      <p className={`text-xs mb-2 mr-8 md:mr-0 ${loading ? skeletonLoaderClasses : ''}`}>
        {item.commentCount} comments
      </p>
      <p className={`text-xs ${loading ? skeletonLoaderClasses : ''}`}>{item.viewCount} views</p>
    </div>
  </li>
);

export default SitecoreCommunityBlogOrQuestion;

// Interfaces
import Link from 'next/link';
import type { SitecoreCommunityContent } from 'ui/common/types/sitecoreCommunity';
// Global
// Lib
import translateDate from 'ui/common/translate-date';
// Local
import { SITECORE_COMMUNITY_URL } from './sitecore-community.constants';

type SitecoreCommunityBlogOrQuestionProps = {
  contentType: 'Blog' | 'Questions';
  item: SitecoreCommunityContent;
  loading?: boolean;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

const SitecoreCommunityBlogOrQuestion = ({ item, contentType, loading }: SitecoreCommunityBlogOrQuestionProps): JSX.Element => (
  <li className="border-theme-text-alt shadow-theme hover:shadow-theme-md relative items-center border p-6 md:flex">
    <div className="flex w-full flex-grow-0 flex-col justify-between">
      <div>
        <p className={`mb-1 text-sm font-semibold ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>{contentType}</p>
        <p>
          <a className={`hover:text-theme-link-hover mb-1 block text-lg font-semibold hover:underline ${loading ? 'w-2/3' && skeletonLoaderClasses : ''} `} href={`${SITECORE_COMMUNITY_URL}${item.url}`} rel="noreferrer noopener" target="_blank">
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
    <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mr-0 md:block md:text-right">
      <p className={`mb-2 mr-8 text-xs md:mr-0 ${loading ? skeletonLoaderClasses : ''}`}>{item.commentCount} comments</p>
      <p className={`text-xs ${loading ? skeletonLoaderClasses : ''}`}>{item.viewCount} views</p>
    </div>
  </li>
);

export const SitecoreCommunityBlogOrQuestionSidebar = ({ item, contentType, loading }: SitecoreCommunityBlogOrQuestionProps): JSX.Element => {
  return (
    <li>
      <div className="flex items-start">
        <div className={`border-theme-border mr-4 w-12 flex-none border p-2.5 text-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="25" height="25" className="inline">
            <rect x="1.304" y="1.314" width="27.337" height="27.337" fill="none" stroke="currentColor" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 3.841 25.19 3.874" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 15.624 25.19 15.657" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 17.544 25.19 17.577" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 19.398 25.19 19.431" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 21.318 25.19 21.351" />
            <rect x="5.197" y="6.323" width="19.496" height="7.117" fill="currentColor" stroke="currentColor" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 23.486 25.19 23.519" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 25.406 25.19 25.439" />
          </svg>
        </div>
        <div className="">
          <span className={`hover:text-violet dark:hover:text-teal  line-clamp-1 font-semibold hover:underline`}>
            <Link href={item.url} title={item.title}>
              {item.title}
            </Link>
          </span>

          <div className="flex items-start">
            <div className="my-1 flex flex-row items-center space-x-3 text-gray-500 dark:text-gray-400">
              <div className="flex flex-row gap-5">
                <div className={` text-sm`}>
                  <div className="text-xs">{new Date(item.publishDate).toLocaleString('en-US', { dateStyle: 'medium' })}</div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className={` text-sm`}>
                  <div className="text-xs">{item.commentCount} comments</div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className={`text-xs`}>{item.viewCount} views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SitecoreCommunityBlogOrQuestion;

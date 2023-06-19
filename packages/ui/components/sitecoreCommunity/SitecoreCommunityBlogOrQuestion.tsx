// Interfaces
import Link from 'next/link';
import type { SitecoreCommunityContent } from 'ui/common/types/sitecoreCommunity';
// Global
// Lib
import translateDate from 'ui/common/translate-date';
// Local
import DateIcon from '../common/DateIcon';
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
        <DateIcon date={item.publishDate} type="calendar" />
        <div className="">
          <span className={`hover:text-violet dark:hover:text-teal  line-clamp-1 font-semibold hover:underline`}>
            <Link href={item.url} title={item.title}>
              {item.title}
            </Link>
          </span>

          <div className="flex items-start">
            <div className="my-1 flex flex-row items-center space-x-3 text-gray-500 dark:text-gray-400">
              <div className="flex flex-row gap-5">
                <div className={` text-sm hover:underline`}>
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

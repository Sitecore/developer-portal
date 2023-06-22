import Link from 'next/link';
import translateDate from 'ui/common/translate-date';
import ConditionalWrapper from 'ui/components/common/ConditionalWrapper';
import DateIcon from '../common/DateIcon';

// Local
import { SITECORE_COMMUNITY_URL } from './sitecore-community.constants';

type SitecoreCommunityNewsOrEventItemProps = {
  categoryTitle?: 'News and Announcements' | 'Event';
  commentCount?: string;
  endDate?: string;
  location?: string;
  startDate: string;
  title: string;
  viewCount?: string;
  virtualUrl?: string;
  url: string;
};

type DateOutputProps = {
  startDate: string;
  endDate?: string;
};
const DateOutput = ({ startDate, endDate }: DateOutputProps): JSX.Element => {
  const startDateString = translateDate(startDate);
  const endDateString = endDate ? translateDate(endDate) : '';
  if (!endDateString || startDateString === endDateString) {
    return <p className="text-xs">{startDateString}</p>;
  }

  return (
    <p className="text-xs">
      {startDateString} <span className="sr-only">to</span>
      <span aria-hidden="true">-</span> {endDateString}
    </p>
  );
};

const SitecoreCommunityNewsOrEventItem = ({ categoryTitle, commentCount, endDate, location, startDate, title, url, viewCount, virtualUrl }: SitecoreCommunityNewsOrEventItemProps): JSX.Element => {
  return (
    <li className="border-theme-text-alt hover:shadow-theme-md relative flex flex-col justify-between border p-4">
      <div>
        {!!categoryTitle && <p className="mb-1 text-sm font-semibold">{categoryTitle}</p>}
        <p>
          <a className="hover:text-theme-link-hover mb-1 block text-base font-semibold hover:underline" href={`${SITECORE_COMMUNITY_URL}${url}`} rel="noreferrer noopener" target="_blank">
            {title}
            <span className="absolute inset-0 z-10"></span>
          </a>
        </p>
      </div>
      <div>
        <DateOutput startDate={startDate} endDate={endDate} />
        {!!location && (
          <p className="mt-1 text-xs">
            Location:{' '}
            <ConditionalWrapper
              condition={!!virtualUrl}
              wrapper={(children) => (
                <a className="relative z-20 hover:underline" href={virtualUrl} rel="noreferrer noopener" target="_blank">
                  {children}
                </a>
              )}
            >
              <strong className="font-semibold">{location}</strong>
            </ConditionalWrapper>
          </p>
        )}
        {!!commentCount && !!viewCount && (
          <p className="mt-2 text-xs">
            <span className="mr-6">{commentCount} comments</span> {viewCount} views
          </p>
        )}
      </div>
    </li>
  );
};

export const SitecoreCommunityNewsOrEventItemSidebar = ({ commentCount, startDate, title, url, viewCount }: SitecoreCommunityNewsOrEventItemProps): JSX.Element => {
  return (
    <li>
      <div className="flex items-start">
        <DateIcon date={startDate} type="calendar" />
        <div className="">
          <span className={`hover:text-violet dark:hover:text-teal  font-semibold hover:underline`}>
            <Link href={url} title={title}>
              {title}
            </Link>
          </span>

          <div className="flex items-start">
            <div className="my-1 flex flex-row items-center space-x-3 text-gray-500 dark:text-gray-400">
              <div className="flex flex-row gap-5">
                <div className={` text-sm hover:underline`}>
                  <div className="text-xs">{commentCount} comments</div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className={`text-xs`}>{viewCount} views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SitecoreCommunityNewsOrEventItem;

import translateDate from '@/src/common/translate-date';
import ConditionalWrapper from '@/src/components/common/ConditionalWrapper';
// Local
import { SITECORE_COMMUNITY_URL } from './sitecore-community.constants';

type SitecoreCommunityNewsOrEventItemProps = {
  categoryTitle: 'News and Announcements' | 'Event';
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

const SitecoreCommunityNewsOrEventItem = ({
  categoryTitle,
  commentCount,
  endDate,
  location,
  startDate,
  title,
  url,
  viewCount,
  virtualUrl,
}: SitecoreCommunityNewsOrEventItemProps): JSX.Element => {
  return (
    <li className="relative flex flex-col justify-between p-6 border border-theme-text-alt hover:shadow-theme-md">
      <div>
        <p className="mb-1 text-sm font-semibold">{categoryTitle}</p>
        <p>
          <a
            className="block mb-1 text-lg font-semibold hover:underline hover:text-theme-link-hover"
            href={`${SITECORE_COMMUNITY_URL}${url}`}
            rel="noreferrer noopener"
            target="_blank"
          >
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
                <a
                  className="relative z-20 hover:underline"
                  href={virtualUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
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

export default SitecoreCommunityNewsOrEventItem;

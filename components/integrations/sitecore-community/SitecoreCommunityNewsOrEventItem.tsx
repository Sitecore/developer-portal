import translateDate from '@/lib/translate-date';
import { classnames } from '@/tailwindcss-classnames';
import ConditionalWrapper from '@/components/helper/ConditionalWrapper';
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
  const endDateString = !!endDate ? translateDate(endDate) : '';
  if (!endDateString || startDateString === endDateString) {
    return <p className={classnames('text-xs')}>{startDateString}</p>;
  }

  return (
    <p className={classnames('text-xs')}>
      {startDateString} <span className={classnames('sr-only')}>to</span>
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
    <li
      className={classnames(
        'border-theme-text-alt',
        'border',
        'flex-col',
        'flex',
        'justify-between',
        'p-6',
        'relative',
        'hover:shadow-theme-md'
      )}
    >
      <div>
        <p className={classnames('text-sm', 'font-semibold', 'mb-1')}>{categoryTitle}</p>
        <p>
          <a
            className={classnames(
              'block',
              'text-lg',
              'font-semibold',
              'mb-1',
              'hover:underline',
              'hover:text-theme-link-hover'
            )}
            href={`${SITECORE_COMMUNITY_URL}${url}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            {title}
            <span className={classnames('absolute', 'inset-0', 'z-10')}></span>
          </a>
        </p>
      </div>
      <div>
        <DateOutput startDate={startDate} endDate={endDate} />
        {!!location && (
          <p className={classnames('text-xs', 'mt-1')}>
            Location:{' '}
            <ConditionalWrapper
              condition={!!virtualUrl}
              wrapper={(children) => (
                <a
                  className={classnames('relative', 'z-20', 'hover:underline')}
                  href={virtualUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {children}
                </a>
              )}
            >
              <strong className={classnames('font-semibold')}>{location}</strong>
            </ConditionalWrapper>
          </p>
        )}
        {!!commentCount && !!viewCount && (
          <p className={classnames('text-xs', 'mt-2')}>
            <span className={classnames('mr-6')}>{commentCount} comments</span> {viewCount} views
          </p>
        )}
      </div>
    </li>
  );
};

export default SitecoreCommunityNewsOrEventItem;

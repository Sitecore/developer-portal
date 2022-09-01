// Interfaces
import type { SitecoreCommunityContent } from '@/src/interfaces/integrations';
// Global
import { classnames } from '@/src/common/types/tailwindcss-classnames';
// Lib
import translateDate from '@/src/common/translate-date';
// Local
import { SITECORE_COMMUNITY_URL } from './sitecore-community.constants';

type SitecoreCommunityBlogOrQuestionProps = {
  contentType: 'Blog' | 'Questions';
  item: SitecoreCommunityContent;
  loading?: boolean;
};

const skeletonLoaderClasses = classnames(
  'bg-theme-text-alt',
  'animate-pulse',
  'text-transparent',
  'hover:text-transparent'
);

const SitecoreCommunityBlogOrQuestion = ({
  item,
  contentType,
  loading,
}: SitecoreCommunityBlogOrQuestionProps): JSX.Element => (
  <li
    className={classnames(
      'border-theme-text-alt',
      'border',
      'items-center',
      'p-6',
      'relative',
      'shadow-theme',
      'hover:shadow-theme-md',
      'md:flex'
    )}
  >
    <div className={classnames('flex', 'flex-col', 'justify-between', 'flex-grow-0', 'w-full')}>
      <div>
        <p
          className={classnames('text-sm', 'font-semibold', 'mb-1', {
            'w-12': loading,
            [skeletonLoaderClasses]: loading,
          })}
        >
          {contentType}
        </p>
        <p>
          <a
            className={classnames(
              'block',
              'text-lg',
              'font-semibold',
              'mb-1',
              'hover:underline',
              'hover:text-theme-link-hover',
              {
                'w-2/3': loading,
                [skeletonLoaderClasses]: loading,
              }
            )}
            href={`${SITECORE_COMMUNITY_URL}${item.url}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            {item.title}
            <span className={classnames('absolute', 'inset-0', 'z-10')}></span>
          </a>
        </p>
      </div>
      <p
        className={classnames('text-xs', {
          'w-1/3': loading,
          [skeletonLoaderClasses]: loading,
        })}
      >
        <span className={classnames('mr-6')}>
          by <strong>{item.userName}</strong>
        </span>{' '}
        <span>
          Published <strong>{translateDate(item.publishDate)}</strong>
        </span>
      </p>
    </div>
    <div
      className={classnames(
        'flex-shrink-0',
        'flex',
        'mt-4',
        'md:ml-4',
        'md:block',
        'md:mr-0',
        'md:text-right'
      )}
    >
      <p
        className={classnames('text-xs', 'mb-2', 'mr-8', 'md:mr-0', {
          [skeletonLoaderClasses]: loading,
        })}
      >
        {item.commentCount} comments
      </p>
      <p
        className={classnames('text-xs', {
          [skeletonLoaderClasses]: loading,
        })}
      >
        {item.viewCount} views
      </p>
    </div>
  </li>
);

export default SitecoreCommunityBlogOrQuestion;

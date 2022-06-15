import { ContentPagerContext, CustomNavContext } from '@/interfaces/page-info';
import Link from 'next/link';
import { classnames } from 'tailwindcss-classnames';

type ContentPagerProps = {
  paging: ContentPagerContext;
  context: CustomNavContext;
  root: string;
};

const ContentPager = ({ paging, context, root }: ContentPagerProps): JSX.Element => {
  const buildUrl = (article: string, page: string | undefined) => `${root}/${article}/${page}`;

  return (
    <div
      className={classnames('max-w-lg', 'p-12', 'container', 'flex', 'justify-center', 'mx-auto')}
    >
      <div className={classnames('flex', 'flex-row', 'mx-auto')}>
        {paging.previous && (
          <Link href={buildUrl(context.article, paging.previous?.path)}>
            <a>
              <button
                type="button"
                className={classnames(
                  'text-violet',
                  'dark:text-teal',
                  'rounded-l-md',
                  'border-r',
                  'border-white',
                  'dark:border-theme-bg',
                  'py-2',
                  'hover:bg-violet-dark',
                  'hover:text-white',
                  'px-3'
                )}
              >
                <div className={classnames('flex', 'flex-row', 'align-middle')}>
                  <svg
                    className={classnames('w-5', 'mr-2')}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className={classnames('ml-2')}>{paging.previous?.title}</p>
                </div>
              </button>
            </a>
          </Link>
        )}
        {paging.next && (
          <Link href={buildUrl(context.article, paging.next?.path)}>
            <a>
              <button
                type="button"
                className={classnames(
                  'dark:text-teal',
                  'text-violet',
                  'rounded-r-md',
                  'py-2',
                  'border-l',
                  'dark:border-theme-bg',
                  'border-white',
                  'hover:bg-violet-dark',
                  'hover:text-white',
                  'px-3'
                )}
              >
                <div className={classnames('flex', 'flex-row', 'align-middle')}>
                  <span className={classnames('mr-2')}>{paging.next?.title}</span>
                  <svg
                    className={classnames('w-5', 'ml-2')}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContentPager;

import Link from 'next/link';
import { ContentPagerContext, CustomNavContext } from 'ui/common/types/contentPager';

type ContentPagerProps = {
  paging: ContentPagerContext;
  context: CustomNavContext;
  root: string;
};

const ContentPager = ({ paging, context, root }: ContentPagerProps): JSX.Element => {
  const buildUrl = (article: string, page: string | undefined) => `${root}/${article}/${page}`;

  return (
    <div className="mt-4 grid grid-cols-6 gap-4 text-sm font-bold">
      <div className="col-start-1 col-end-3">
        {paging.previous && (
          <Link href={buildUrl(context.article, paging.previous?.path)}>
            <button type="button" className="btn-paging">
              <div className="flex flex-row align-middle">
                <svg className="mr-2 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <p className="ml-1">{paging.previous?.title}</p>
              </div>
            </button>
          </Link>
        )}
      </div>
      {paging.next && (
        <div className="col-span-2 col-end-7 text-right">
          <Link href={buildUrl(context.article, paging.next?.path)} className="text-right">
            <button type="button" className="btn-paging inline text-right">
              <div className="flex flex-row align-middle">
                <span className="mr-1">{paging.next?.title}</span>
                <svg className="ml-2 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContentPager;

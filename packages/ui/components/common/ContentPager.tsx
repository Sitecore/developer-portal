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
    <div className="container flex justify-center max-w-lg p-12 mx-auto">
      <div className="flex flex-row mx-auto">
        {paging.previous && (
          <Link href={buildUrl(context.article, paging.previous?.path)}>
            <button type="button" className="btn-previous">
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 mr-2"
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
                <p className="ml-2">{paging.previous?.title}</p>
              </div>
            </button>
          </Link>
        )}
        {paging.next && (
          <Link href={buildUrl(context.article, paging.next?.path)}>
            <button type="button" className="btn-next">
              <div className="flex flex-row align-middle">
                <span className="mr-2">{paging.next?.title}</span>
                <svg
                  className="w-5 ml-2"
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
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContentPager;

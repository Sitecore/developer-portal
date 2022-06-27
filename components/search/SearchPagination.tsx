// Global
import router from 'next/router';
import { useState, useEffect } from 'react';
import { buildPager, PagerState } from '@coveo/headless';
// Lib
import { coveoEngine, urlManager } from '@/lib/search/coveo-engine';
import { classnames } from 'tailwindcss-classnames';
import SvgIcon from '../helper/SvgIcon';

const SearchPagination = () => {
  const pager = buildPager(coveoEngine);
  const [pagerState, setPagerState] = useState(pager.state);

  const subscribeToStateChangesAndReturnCleanup = () => {
    const allunsubscribers: { (): void }[] = [];
    allunsubscribers.push(
      pager.subscribe(() => {
        setPagerState(pager.state);
      })
    );
    allunsubscribers.push(pager.subscribe(() => {}));

    allunsubscribers.push(
      urlManager.subscribe(() => {
        router.push({
          hash: urlManager.state.fragment,
        });
      })
    );
    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub());
    };
  };

  useEffect(subscribeToStateChangesAndReturnCleanup, []);

  const handlePaginate = (page: number) => {
    pager.selectPage(page);
  };

  if (!pagerState || pagerState.maxPage === 0) {
    return <></>;
  }

  const activeClasses = classnames('bg-theme-text', 'text-theme-bg');

  return (
    <ul className="flex items-center justify-center mt-8">
      <li>
        <button
          disabled={pagerState.currentPage === 1}
          onClick={() => {
            handlePaginate(pagerState.currentPage - 1);
          }}
          className="block w-em h-em"
        >
          <SvgIcon icon="chevron-left" />
          <span className="sr-only">Previous page</span>
        </button>
      </li>
      {pagerState.currentPages.map((i) => (
        <li key={i}>
          <button
            className={classnames(
              'border',
              'border-theme-border',
              'hover:underline',
              'py-1',
              'px-2',
              'mx-2',
              {
                [activeClasses]: i === pagerState.currentPage,
              }
            )}
            onClick={() => {
              handlePaginate(i);
            }}
          >
            {i}
          </button>
        </li>
      ))}
      {!pagerState.currentPages.includes(pagerState.maxPage) && (
        <>
          <li>...</li>
          <li>
            <button
              className={classnames(
                'border',
                'border-theme-border',
                'hover:underline',
                'py-1',
                'px-2',
                'mx-2'
              )}
              onClick={() => {
                handlePaginate(pagerState.maxPage);
              }}
            >
              {pagerState.maxPage}
            </button>
          </li>
        </>
      )}
      <li>
        <button
          disabled={pagerState.currentPage === pagerState.maxPage}
          onClick={() => {
            handlePaginate(pagerState.currentPage + 1);
          }}
          className="block w-em h-em"
        >
          <SvgIcon icon="chevron-right" />
          <span className="sr-only">Next page</span>
        </button>
      </li>
    </ul>
  );
};

export default SearchPagination;

// Global
import { buildPager } from '@coveo/headless';
import router from 'next/router';
import { useEffect, useState } from 'react';
// Lib
import { coveoEngine, urlManager } from '@/src/common/search/coveo-engine';
import SvgIcon from 'ui/components/common/SvgIcon';

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

  const activeClasses = 'bg-theme-text text-theme-bg';

  return (
    <ul className="mt-8 flex items-center justify-center">
      <li>
        <button
          disabled={pagerState.currentPage === 1}
          onClick={() => {
            handlePaginate(pagerState.currentPage - 1);
          }}
          className="w-em h-em block"
        >
          <SvgIcon icon="chevron-left" />
          <span className="sr-only">Previous page</span>
        </button>
      </li>
      {pagerState.currentPages.map((i) => (
        <li key={i}>
          <button
            className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${
              i === pagerState.currentPage ? [activeClasses] : ''
            }`}
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
              className="border-theme-border mx-2 border px-2 py-1 hover:underline"
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
          className="w-em h-em block"
        >
          <SvgIcon icon="chevron-right" />
          <span className="sr-only">Next page</span>
        </button>
      </li>
    </ul>
  );
};

export default SearchPagination;

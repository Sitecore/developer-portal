// Global
import { useId } from 'react-id-generator';
import { SearchBox, UrlManager } from '@coveo/headless';
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// Lib
import { coveoEngine, breadcrumbManager, urlManager } from '@/src/common/search/coveo-engine';
import {
  BreadcrumbManager as BreadcrumbManagerType,
  BreadcrumbManagerState,
  buildBreadcrumbManager,
} from '@coveo/headless';

const hoveredStyle = {
  cursor: 'pointer',
};

const clearStyle = {
  fontSize: '1em',
};

const FacetBreadcrumbs = () => {
  const [breadcrumbManagerState, setBreadcrumbManagerState] = useState(breadcrumbManager.state);

  const router = useRouter();

  const subscribeToStateChangesAndReturnCleanup = () => {
    const allunsubscribers: { (): void }[] = [];
    allunsubscribers.push(
      breadcrumbManager.subscribe(() => setBreadcrumbManagerState(breadcrumbManager.state))
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

  const getFacetBreadcrumbs = () => {
    const breadcrumbs = breadcrumbManager.state.facetBreadcrumbs;
    return breadcrumbs.map((breadcrumb) => (
      <span key={breadcrumb.field}>
        {breadcrumb.values.map((value) => (
          <span
            key={breadcrumb.field + value.value.value}
            className={classnames(
              'inline-flex',
              'items-center',
              'm-2',
              'px-3',
              'py-1',
              'bg-violet',
              'hover:bg-teal',
              'rounded-full',
              'text-xs',
              'font-semibold',
              'text-white'
            )}
          >
            <button onClick={() => value.deselect()} style={hoveredStyle}>
              {value.value.value}
              <svg
                className={classnames(
                  'ml-1',
                  'h-3',
                  'w-3',
                  'align-middle',
                  'inline-block',
                  'text-white'
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </span>
        ))}
      </span>
    ));
  };

  return (
    <>
      {getFacetBreadcrumbs()}

      {breadcrumbManager.state.hasBreadcrumbs && (
        <button onClick={breadcrumbManager.deselectAll} className={classnames('text-xs')}>
          Clear All
        </button>
      )}
    </>
  );
};

export default FacetBreadcrumbs;

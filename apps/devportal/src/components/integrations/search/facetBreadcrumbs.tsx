// Global
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// Lib
import { breadcrumbManager, urlManager } from '@/src/common/coveo-engine';

const hoveredStyle = {
  cursor: 'pointer',
};

const FacetBreadcrumbs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            className="bg-violet hover:bg-teal m-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
          >
            <button onClick={() => value.deselect()} style={hoveredStyle}>
              {value.value.value}
              <svg
                className="ml-1 inline-block h-3 w-3 align-middle text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
        <button onClick={breadcrumbManager.deselectAll} className="text-xs">
          Clear All
        </button>
      )}
    </>
  );
};

export default FacetBreadcrumbs;

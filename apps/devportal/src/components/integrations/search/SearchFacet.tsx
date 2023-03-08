// Global
import { Facet, FacetValue } from '@coveo/headless';
import { useEffect, useState } from 'react';
// Lib
import { searchStatus, urlManager } from '@/src/common/coveo-engine';
import { useRouter } from 'next/router';
import SvgIcon from 'ui/components/common/SvgIcon';

export enum FacetValueSort {
  Ascending,
  Descending,
}
interface SearchFacetProps {
  facet: Facet;
  title: string;
  sort?: FacetValueSort;
}

const SearchFacet = ({ facet, title, sort }: SearchFacetProps) => {
  const [facetState, setFacetState] = useState(facet.state);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchStatusState, setSearchStatusState] = useState(searchStatus.state);

  const router = useRouter();

  const subscribeToStateChangesAndReturnCleanup = () => {
    const allunsubscribers: { (): void }[] = [];
    allunsubscribers.push(searchStatus.subscribe(() => setSearchStatusState(searchStatus.state)));
    allunsubscribers.push(facet.subscribe(() => setFacetState(facet.state)));
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

  if (facetState.values.length > 0) {
    const sortedValues: FacetValue[] = [...facetState.values];

    if (sort == FacetValueSort.Ascending) {
      sortedValues.sort((a, b) => 0 - (a.value > b.value ? -1 : 1));
    } else if (sort == FacetValueSort.Descending) {
      sortedValues.sort((a, b) => 0 - (a.value > b.value ? 1 : -1));
    }

    return (
      <div className="bg-theme-bg-alt mb-6 p-4">
        <h3 className="heading-xs mb-4">{title}</h3>
        {sortedValues.map((facetValue) => {
          return (
            <div key={facetValue.value} className="text-sm">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  facet.toggleSelect(facetValue);
                }}
                className={`mb-2 flex w-full justify-between text-left ${
                  facet.isValueSelected(facetValue) ? 'font-bold' : ''
                }`}
              >
                <span className="flex flex-1">
                  <span className="h-em w-em mt-1 mr-2 block">
                    <SvgIcon
                      icon={
                        facet.isValueSelected(facetValue) ? 'checkbox-filled' : 'checkbox-empty'
                      }
                    />
                  </span>

                  {facetValue.value}
                </span>{' '}
                <span>{facetValue.numberOfResults}</span>
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default SearchFacet;

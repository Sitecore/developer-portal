// Global
import { Facet } from '@coveo/headless';
import { useEffect, useState } from 'react';
// Lib
import { urlManager, searchStatus } from '@/lib/search/coveo-engine';
import { classnames } from '@/tailwindcss-classnames';
import SvgIcon from '../helper/SvgIcon';
import { useRouter } from 'next/router';

interface SearchFacetProps {
  facet: Facet;
  title: string;
}

const SearchFacet = ({ facet, title }: SearchFacetProps) => {
  const [facetState, setFacetState] = useState(facet.state);
  const [selectedFacet, setSelectedFacet] = useState<string>('');
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
    return (
      <div className="p-4 bg-theme-bg-alt mb-6">
        <h3 className="heading-xs mb-4">{title}</h3>
        {facetState.values.map((facetValue) => {
          return (
            <div key={facetValue.value} className="text-sm">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  facet.toggleSelect(facetValue);
                }}
                className={classnames('text-left', 'mb-2', 'flex', 'justify-between', 'w-full', {
                  ['font-bold']: facet.isValueSelected(facetValue),
                })}
              >
                <span className="flex-1 flex">
                  <span className="h-em w-em mr-2 mt-1 block">
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

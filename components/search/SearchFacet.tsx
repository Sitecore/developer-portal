// Global
import { buildFacet, Facet, FacetValue, FacetState } from '@coveo/headless';
import { useEffect, useState } from 'react';
import { useId } from 'react-id-generator';
// Lib
import { coveoEngine } from '@/lib/search/coveo-engine';
import { classnames } from '@/tailwindcss-classnames';
import SvgIcon from '../helper/SvgIcon';

interface SearchFacetProps {
  title: string;
  field: string;
}

const SearchFacet = ({ title, field }: SearchFacetProps) => {
  const [idSeed] = useId(1, `search-facet__${field}`);
  const facet: Facet = buildFacet(coveoEngine, { options: { field, facetId: idSeed } });
  const [facetState, setFacetState] = useState<FacetState | null>(null);
  const [selectedFacet, setSelectedFacet] = useState<string>('');

  useEffect(() => {
    facet.subscribe(() => {
      setFacetState(facet.state);
    });

    return () => {
      facet.subscribe(() => {});
    };
  }, []);

  if (!facetState || facetState.values.length === 0) {
    return <></>;
  }

  const toggleFacet = (facetValue: FacetValue) => {
    facet.toggleSelect(facetValue);
    setSelectedFacet(facetValue.value);
  };

  return (
    <div className="p-4 bg-theme-bg-alt mb-6">
      <h3 className="heading-xs mb-4">{title}</h3>
      <form className="text-sm">
        {facetState.values.map((facetValue) => {
          const id = `search-facet-${field}__${facetValue.value.split(' ').join('').toLowerCase()}`;
          return (
            <div key={id}>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  toggleFacet(facetValue);
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
      </form>
    </div>
  );
};

export default SearchFacet;

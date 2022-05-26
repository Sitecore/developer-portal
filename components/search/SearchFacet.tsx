// Global
import { buildFacet, Facet, FacetValue, FacetState } from '@coveo/headless';
import { useEffect, useState } from 'react';
import { useId } from 'react-id-generator';
// Lib
import { coveoEngine } from '@/lib/search/coveo-engine';
import { classnames } from '@/tailwindcss-classnames';

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

  if (!facetState) {
    return <></>;
  }

  const toggleFacet = (facetValue: FacetValue) => {
    console.log(facetValue);
    facet.toggleSelect(facetValue);
    setSelectedFacet(facetValue.value);
  };

  return (
    <div className="p-4 bg-theme-bg-alt">
      <h3 className="heading-sm mb-4">{title}</h3>
      <form>
        {facetState.values.map((facetValue) => {
          const id = `search-facet-${field}__${facetValue.value.split(' ').join('').toLowerCase()}`;
          return (
            <div key={id}>
              <button
                onClick={() => toggleFacet(facetValue)}
                className={classnames('text-left', 'mb-2', {
                  ['font-bold']: selectedFacet === facetValue.value,
                })}
              >
                {facetValue.value} ({facetValue.numberOfResults})
              </button>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default SearchFacet;

import { ChangeLogSearchFacet, ChangeLogSearchFacetValue } from 'sc-changelog/search/types';
import ChangelogSearchFilter from './ChangelogSearchFilter';

export interface SearchFacetsType {
  onFacetChange: (facets: ChangeLogSearchFacetValue[], facetName: string) => void;
  facets: ChangeLogSearchFacet[];
}

export const ChangelogSearchFacets = ({ facets, onFacetChange }: SearchFacetsType) => {
  return (
    <>
      {facets.map((facet, index) => (
        <ChangelogSearchFilter facet={facet} onFacetChange={onFacetChange} key={index} />
      ))}
    </>
  );
};

export default ChangelogSearchFacets;

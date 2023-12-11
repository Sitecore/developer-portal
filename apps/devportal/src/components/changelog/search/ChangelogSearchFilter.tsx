import { Container, VisuallyHidden } from '@chakra-ui/react';
import { useState } from 'react';
import { ChangeLogSearchFacet, ChangeLogSearchFacetValue } from 'sc-changelog/search/types';
import MultiSelect from 'ui/components/dropdown/MultiSelect';

export interface SearchFacetsType {
  onFacetChange: (facets: ChangeLogSearchFacetValue[], facetName: string) => void;
  facet: ChangeLogSearchFacet;
}

export const ChangelogSearchFilter = ({ facet, onFacetChange }: SearchFacetsType) => {
  const [selectedChange, setSelectedChange] = useState<ChangeLogSearchFacetValue[]>([]);
  return (
    <Container marginBottom={4} marginX={0} width={'full'}>
      <VisuallyHidden>
        <label className="sr-only" htmlFor={`react-select-${facet.name}-input`}>
          {facet.label}
        </label>
      </VisuallyHidden>

      <MultiSelect
        id={facet.name}
        instanceId={facet.name}
        key={facet.name}
        options={facet.value.map((value) => ({
          label: `${value.text} (${value.count})`,
          value: value.text,
          id: value.id,
        }))}
        isSelectAll={true}
        menuPlacement={'bottom'}
        placeholder={facet.label}
        onChange={(e: ChangeLogSearchFacetValue[]) => {
          setSelectedChange(e);
          const facets = facet.value.map((facetValue) => ({
            ...facetValue,
            selected: e.some((selected) => selected.id == facetValue.id),
          }));
          onFacetChange(facets, facet.name);
        }}
        value={selectedChange}
      />
    </Container>
  );
};

export default ChangelogSearchFilter;

import { Container, VisuallyHidden } from '@chakra-ui/react';
import { ChangeLogSearchFacet } from 'sc-changelog/search/types';
import MultiSelect from 'ui/components/dropdown/MultiSelect';

export interface SearchFacetsType {
  onFacetClick: (facet: any) => void;
  facets: ChangeLogSearchFacet[];
}

export const ChangelogSearchFacets = ({ facets }: SearchFacetsType) => {
  return (
    <>
      {facets.map((facet, index) => (
        <Container marginBottom={4} marginX={0} width={'full'} key={index}>
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
            }))}
            isSelectAll={true}
            menuPlacement={'bottom'}
            placeholder={facet.label}
          />
        </Container>
      ))}
    </>
  );
};

export default ChangelogSearchFacets;

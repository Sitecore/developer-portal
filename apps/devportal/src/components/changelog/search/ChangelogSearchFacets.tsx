import { Container, VisuallyHidden } from '@chakra-ui/react';
import { SearchResponseFacet } from '@sitecore-search/react';
import MultiSelect from 'ui/components/dropdown/MultiSelect';

export interface SearchFacetsType {
  onFacetClick: (facet: any) => void;
  facets: SearchResponseFacet[];
}

export const ChangelogSearchFacets = ({ facets }: SearchFacetsType) => {
  return (
    <>
      {facets.map((facet) => (
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

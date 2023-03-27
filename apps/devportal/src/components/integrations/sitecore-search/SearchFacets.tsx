import { CheckIcon } from '@radix-ui/react-icons';
import { SearchResponseFacet } from '@sitecore-discover/react';
import { AccordionFacets } from '@sitecore-discover/ui';

export interface SearchFacetsType {
  onFacetClick: (facet: any) => void;
  facets: SearchResponseFacet[];
}

export const SearchFacets = (props: SearchFacetsType) => {
  const { onFacetClick, facets } = props;

  return (
    <AccordionFacets.Root defaultFacetTypesExpandedList={[]} onFacetValueClick={onFacetClick}>
      {facets.map((facet, index) => (
        <AccordionFacets.Facet key={index} facetId={facet.name}>
          <AccordionFacets.Header className="mt-4 mb-2 rounded-md border p-2">
            <AccordionFacets.Trigger className="w-full text-left">{facet.label}</AccordionFacets.Trigger>
          </AccordionFacets.Header>
          <AccordionFacets.Content>
            <AccordionFacets.ValueList>
              {facet.value.map((v, index) => (
                <AccordionFacets.Item
                  className="pl-2 pr-2"
                  key={v.id}
                  {...{
                    index,
                    facetValueId: v.id,
                    facetLabel: v.text,
                  }}
                >
                  <AccordionFacets.ItemCheckbox className="border-grey-50 h-5 w-5 items-center justify-center rounded border border-solid bg-white align-middle">
                    <AccordionFacets.ItemCheckboxIndicator className="h-14 w-14">
                      <CheckIcon />
                    </AccordionFacets.ItemCheckboxIndicator>
                  </AccordionFacets.ItemCheckbox>
                  <AccordionFacets.ItemLabel className="ml-2 text-sm">
                    {v.text} {v.count && `(${v.count})`}
                  </AccordionFacets.ItemLabel>
                </AccordionFacets.Item>
              ))}
            </AccordionFacets.ValueList>
          </AccordionFacets.Content>
        </AccordionFacets.Facet>
      ))}
    </AccordionFacets.Root>
  );
};

export default SearchFacets;

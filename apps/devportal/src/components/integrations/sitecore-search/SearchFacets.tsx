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
    <AccordionFacets.Root defaultFacetTypesExpandedList={facets.map((x) => x.name)} onFacetValueClick={onFacetClick}>
      {facets.map((facet, index) => (
        <div className="bg-theme-bg-alt mb-6 p-4">
          <AccordionFacets.Facet key={index} facetId={facet.name}>
            <AccordionFacets.Header className="mb-4 font-semibold">
              <AccordionFacets.Trigger className="w-full text-left">{facet.label}</AccordionFacets.Trigger>
            </AccordionFacets.Header>
            <AccordionFacets.Content>
              <AccordionFacets.ValueList>
                {facet.value.map((v, index) => (
                  <AccordionFacets.Item
                    className="pr-2"
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
        </div>
      ))}
    </AccordionFacets.Root>
  );
};

export default SearchFacets;

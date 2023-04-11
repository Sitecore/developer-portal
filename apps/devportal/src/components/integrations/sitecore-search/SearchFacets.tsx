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
        <div className="bg-theme-bg-alt mb-6 pt-4 pb-4 pl-4" key={index}>
          <AccordionFacets.Facet key={index} facetId={facet.name}>
            <AccordionFacets.Header className="font-ltpro mb-1">
              <AccordionFacets.Trigger className="w-full text-left text-sm font-semibold uppercase">{facet.label}</AccordionFacets.Trigger>
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
                    }}
                  >
                    <AccordionFacets.ItemCheckbox className="border-grey-50 h-5 w-5 items-center justify-center border border-solid bg-white align-middle">
                      <AccordionFacets.ItemCheckboxIndicator className="h-14 w-14 dark:text-gray-800">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </AccordionFacets.ItemCheckboxIndicator>
                    </AccordionFacets.ItemCheckbox>
                    <AccordionFacets.ItemLabel className="ml-2 text-xs">
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

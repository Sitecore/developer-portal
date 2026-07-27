/* eslint-disable no-unused-vars */
'use client';

import type { FacetChoiceChangedPayload, SearchResponseFacet } from '@sitecore-search/react';
import { AccordionFacets, SearchResultsAccordionFacets } from '@sitecore-search/ui';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@src/components/ui/accordion';
import { Button } from '@src/components/ui/button';
import { Checkbox } from '@src/components/ui/checkbox';
import { useState } from 'react';
import { Separator } from '../../ui/separator';

export interface SearchFacetsType {
  onFacetClick: (facet: any) => void;
  facets: Array<SearchResponseFacet>;
}

export const SearchFacets = (props: SearchFacetsType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
          Filter
        </Button>

        {isOpen && (
          <div className="bg-muted mt-4">
            <MobileFacets {...props} />
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <Facets {...props} />
      </div>
    </>
  );
};

export const MobileFacets = (props: SearchFacetsType) => {
  const { onFacetClick, facets } = props;

  return (
    <SearchResultsAccordionFacets defaultFacetTypesExpandedList={facets.map((x) => x.name)} onFacetValueClick={onFacetClick}>
      {facets.map((facet) => (
        <Accordion key={facet.name} type="single" collapsible>
          <AccordionItem value={facet.name}>
            <AccordionFacets.Facet facetId={facet.name}>
              <AccordionFacets.Content>
                <AccordionTrigger>
                  <span className="text-sm uppercase tracking-wide text-muted-foreground">{facet.label}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <AccordionFacets.ValueList asChild>
                    <div className="flex flex-col gap-2">
                      {facet.value.map((v, index) => (
                        <AccordionFacets.Item
                          asChild
                          key={v.id}
                          {...{
                            index,
                            facetValueId: v.id,
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox asChild aria-labelledby={`facet-label-${facet.name}-${v.id}`}>
                              <AccordionFacets.ItemCheckbox />
                            </Checkbox>
                            <span id={`facet-label-${facet.name}-${v.id}`} className="text-sm">
                              {v.text} {v.count && `(${v.count})`}
                            </span>
                          </div>
                        </AccordionFacets.Item>
                      ))}
                    </div>
                  </AccordionFacets.ValueList>
                </AccordionContent>
              </AccordionFacets.Content>
            </AccordionFacets.Facet>
          </AccordionItem>
        </Accordion>
      ))}
    </SearchResultsAccordionFacets>
  );
};

export const Facets = (props: SearchFacetsType) => {
  const { onFacetClick, facets } = props;

  return (
    <SearchResultsAccordionFacets defaultFacetTypesExpandedList={facets.map((x) => x.name)} onFacetValueClick={(e) => onFacetClick(e as FacetChoiceChangedPayload)}>
      {facets.map((facet) => (
        <div key={facet.name}>
          <AccordionFacets.Facet key={facet.name} facetId={facet.name} className="w-full">
            <AccordionFacets.Header className="mb-4 font-heading">
              <AccordionFacets.Trigger className="flex w-full text-lg font-bold text-left uppercase group">
                <div className="capitalize grow">{facet.label} </div>
                <div className="inline-flex ml-8 w-4 h-4 group-data-[state=open]:rotate-180">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </div>
              </AccordionFacets.Trigger>
            </AccordionFacets.Header>
            <AccordionFacets.Content>
              <AccordionFacets.ValueList className="not-prose px-0 py-0">
                {facet.value.map((v, index) => (
                  <AccordionFacets.Item
                    className="pr-2 my-2 flex capitalize items-center"
                    key={v.id}
                    {...{
                      index,
                      facetValueId: v.id,
                    }}
                  >
                    <AccordionFacets.ItemCheckbox asChild className="align-middle data-[state=checked]:bg-violet-800 data-[state=checked]:border-violet-800">
                      <Checkbox className="bg-white data-[state=checked]:bg-violet-800 data-[state=checked]:border-violet-800" />
                    </AccordionFacets.ItemCheckbox>
                    <AccordionFacets.ItemLabel className="overflow-hidden ml-2 text-sm whitespace-nowrap cursor-pointer text-ellipsis" title={`${v.text}${v.count ? ` (${v.count})` : ''}`}>
                      {v.text} {v.count && `(${v.count})`}
                    </AccordionFacets.ItemLabel>
                  </AccordionFacets.Item>
                ))}
              </AccordionFacets.ValueList>
            </AccordionFacets.Content>
          </AccordionFacets.Facet>
          <Separator className="my-4" />
        </div>
      ))}
    </SearchResultsAccordionFacets>
  );
};

export default SearchFacets;

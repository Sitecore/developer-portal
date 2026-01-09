/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@components/ui/accordion';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { Checkbox } from '@components/ui/checkbox';
import { SearchResponseFacet } from '@sitecore-search/react';
import { AccordionFacets, SearchResultsAccordionFacets } from '@sitecore-search/ui';
import { cn } from '@lib/utils';

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
                            <Checkbox asChild>
                              <AccordionFacets.ItemCheckbox />
                            </Checkbox>
                            <label className="text-sm">
                              {v.text} {v.count && `(${v.count})`}
                            </label>
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
    <SearchResultsAccordionFacets defaultFacetTypesExpandedList={facets.map((x) => x.name)} onFacetValueClick={onFacetClick}>
      {facets.map((facet) => (
        <Card className="bg-muted mb-4" key={facet.name}>
          <AccordionFacets.Facet facetId={facet.name}>
            <AccordionFacets.Header>
              <CardHeader>
                <AccordionFacets.Trigger>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">
                    {facet.label}
                  </p>
                </AccordionFacets.Trigger>
              </CardHeader>
            </AccordionFacets.Header>

            <AccordionFacets.Content>
              <CardContent>
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
                          <Checkbox asChild>
                            <AccordionFacets.ItemCheckbox />
                          </Checkbox>
                          <label className="text-sm">
                            {v.text} {v.count && `(${v.count})`}
                          </label>
                        </div>
                      </AccordionFacets.Item>
                    ))}
                  </div>
                </AccordionFacets.ValueList>
              </CardContent>
            </AccordionFacets.Content>
          </AccordionFacets.Facet>
        </Card>
      ))}
    </SearchResultsAccordionFacets>
  );
};

export default SearchFacets;

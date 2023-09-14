import { Card, CardBody, CardHeader, Checkbox, Heading, Stack } from '@chakra-ui/react';
import { SearchResponseFacet } from '@sitecore-search/react';
import { AccordionFacets } from '@sitecore-search/ui';

export interface SearchFacetsType {
  onFacetClick: (facet: any) => void;
  facets: SearchResponseFacet[];
}

export const SearchFacets = (props: SearchFacetsType) => {
  const { onFacetClick, facets } = props;

  return (
    <AccordionFacets.Root defaultFacetTypesExpandedList={facets.map((x) => x.name)} onFacetValueClick={onFacetClick}>
      {facets.map((facet) => (
        <Card variant={'filled'} size={'sm'} marginBottom={4} key={facet.name}>
          <AccordionFacets.Facet facetId={facet.name}>
            <AccordionFacets.Header>
              <CardHeader>
                <AccordionFacets.Trigger>
                  <Heading size="sm">{facet.label}</Heading>
                </AccordionFacets.Trigger>
              </CardHeader>
            </AccordionFacets.Header>
            <AccordionFacets.Content>
              <CardBody>
                <AccordionFacets.ValueList asChild>
                  <Stack spacing={2} direction="column">
                    {facet.value.map((v, index) => (
                      <AccordionFacets.Item
                        asChild
                        key={v.id}
                        {...{
                          index,
                          facetValueId: v.id,
                        }}
                      >
                        <Checkbox as={AccordionFacets.ItemCheckbox} key={v.id} textAlign={'left'}>
                          {v.text} {v.count && `(${v.count})`}
                        </Checkbox>
                      </AccordionFacets.Item>
                    ))}
                  </Stack>
                </AccordionFacets.ValueList>
              </CardBody>
            </AccordionFacets.Content>
          </AccordionFacets.Facet>
        </Card>
      ))}
    </AccordionFacets.Root>
  );
};

export default SearchFacets;

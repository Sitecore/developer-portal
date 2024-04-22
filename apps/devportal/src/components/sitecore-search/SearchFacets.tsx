/* eslint-disable no-unused-vars */
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, CardHeader, Checkbox, Collapse, Heading, Hide, Show, Stack, useDisclosure } from '@chakra-ui/react';
import { SearchResponseFacet } from '@sitecore-search/react';
import { AccordionFacets, SearchResultsAccordionFacets } from '@sitecore-search/ui';

export interface SearchFacetsType {
  onFacetClick: (facet: any) => void;
  facets: SearchResponseFacet[];
}

export const SearchFacets = (props: SearchFacetsType) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Hide above="md">
        <Button variant={'outline'} onClick={onToggle}>
          Filter
        </Button>

        <Collapse in={isOpen}>
          <Box background={'neutral.fg'} mt={4}>
            <MobileFacets {...props} />
          </Box>
        </Collapse>
      </Hide>

      <Show above="md">
        <Facets {...props} />
      </Show>
    </>
  );
};

export const MobileFacets = (props: SearchFacetsType) => {
  const { onFacetClick, facets } = props;

  return (
    <SearchResultsAccordionFacets defaultFacetTypesExpandedList={facets.map((x) => x.name)} onFacetValueClick={onFacetClick}>
      {facets.map((facet) => (
        <Accordion key={facet.name} allowToggle>
          <AccordionItem>
            <AccordionFacets.Facet facetId={facet.name}>
              <AccordionFacets.Content>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" width={'full'}>
                      <Heading variant={'section'}>{facet.label}</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
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
                </AccordionPanel>
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
        <Card variant={'filled'} size={'sm'} marginBottom={4} key={facet.name}>
          <AccordionFacets.Facet facetId={facet.name}>
            <AccordionFacets.Header>
              <CardHeader>
                <AccordionFacets.Trigger>
                  <Heading size="sm" variant={'section'}>
                    {facet.label}
                  </Heading>
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
    </SearchResultsAccordionFacets>
  );
};

export default SearchFacets;

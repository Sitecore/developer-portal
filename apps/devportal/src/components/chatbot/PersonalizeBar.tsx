import { PageInfo } from '@/src/lib/interfaces/page-info';
import { Avatar, Box, Flex, HStack, Heading, Icon, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, Stack, Tag, TagLabel, Text, Tooltip, Wrap } from '@chakra-ui/react';
import { mdiExpandAllOutline, mdiInformationVariantCircle, mdiTag } from '@mdi/js';
import { ProductLogo } from '@scdp/ui/components';
import { GetProductIcon, GetProductLogoByVariant, Product, Type, Variant } from '@scdp/ui/lib';
import { FC } from 'react';
import { IPersonalizedExperience } from './IExperienceResult';

interface PersonalizeBarProps {
  context: IPersonalizedExperience | undefined;
  currentPage?: PageInfo | undefined; // TODO: Add Page Data
}

export const PersonalizeBar: FC<PersonalizeBarProps> = (props) => {
  return (
    <Flex>
      <Box>
        <Stack direction="row" spacing={4}>
          {props.context?.persona ? (
            <Tooltip label={`${props.context.persona.Name}: ${props.context.persona.Description}`} aria-label={`${props.context.persona.Description}`}>
              <Avatar name="Persona" size="xs" src={props.context.persona.ImageUrl} />
            </Tooltip>
          ) : (
            <Tooltip label="Unknown" aria-label="Unknown">
              <Avatar name="Persona" size="xs" src="" />
            </Tooltip>
          )}
          {props.context?.productInfo && props.context?.product && (
            <Tooltip label={`${props.context.productInfo.name}: ${props.context.productInfo.cloud}`} aria-label={`${props.context.productInfo.name}: ${props.context.productInfo.cloud}`}>
              <Avatar name={props.context.productInfo.name} size="xs" src={GetProductIcon(props.context.product, Variant.Light)} />
            </Tooltip>
          )}
          <Tooltip label={`Tags your interested in: ${props.context?.relevant_tags}`} aria-label={`Tags your interested in: ${props.context?.relevant_tags}`}>
            <Icon boxSize="icon.xs" color="primary">
              <path d={mdiTag} />
            </Icon>
          </Tooltip>

          <Tooltip label={props.context?.recent_searches_summary} aria-label={props.context?.recent_searches_summary}>
            <Icon boxSize="icon.xs" color="primary">
              <path d={mdiInformationVariantCircle} />
            </Icon>
          </Tooltip>

          <Popover placement="auto-start" closeOnBlur={true}>
            <PopoverTrigger>
              <Icon boxSize="icon.xs" color="neutral" cursor={'pointer'}>
                <path d={mdiExpandAllOutline} />
              </Icon>
            </PopoverTrigger>

            <PopoverContent boxSize={{ base: 'sm', lg: 'lg' }} shadow="xl">
              <PopoverHeader fontWeight="bold" border="0">
                Personalize Context
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Stack direction={'row'} opacity={0.5} pos={'absolute'} top={0} right={5} p={5}>
                  <Text as={'span'} display={{ base: 'none', md: 'flex ' }} fontSize={'2xs'}>
                    Powered by
                  </Text>
                  <ProductLogo product={Product.Personalize} width={89} height={24} />
                </Stack>
                <Stack gap={2}>
                  <Text>This chatbot uses Sitecore Personalize to provide a more contextually rich conversational experience. Continue reading to learn more about how this works.</Text>

                  <Heading size={'sm'}>Current persona</Heading>

                  {props.context?.persona && (
                    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
                      <Image borderRadius="full" boxSize="60px" src={props.context.persona.ImageUrl} alt={`Avatar of ${props.context?.persona?.Name}`} />
                      <Stack gap={1}>
                        <Text fontWeight="medium">{props.context?.persona?.Name}</Text>
                        <Text fontWeight="normal">{props.context?.persona?.Description}</Text>
                      </Stack>
                    </HStack>
                  )}

                  <Text>
                    {props.context?.productInfo && (
                      <>
                        <Text variant="strong">Product Interest:</Text>

                        {props.context.product != undefined ? <Image src={GetProductLogoByVariant(props.context.product, Variant.Light, Type.Full)} my={1} /> : <Text>{props.context?.productInfo?.name}</Text>}
                      </>
                    )}
                  </Text>
                  <Text>
                    {props.context?.relevant_tags && (
                      <>
                        <Text variant="strong">Tags your interested in:</Text>
                        <Wrap my={1}>
                          {props.context?.relevant_tags.map((tag, index) => {
                            return (
                              <Tag key={index} size="sm" variant="solid" colorScheme="primary">
                                <TagLabel>{tag}</TagLabel>
                              </Tag>
                            );
                          })}
                        </Wrap>
                      </>
                    )}
                  </Text>
                  {props.context?.recent_searches_summary && (
                    <>
                      <Text variant="strong">
                        Recent Searches <Text variant={'subtle'}>(summarized by Chat GPT):</Text>
                      </Text>
                      <Text>{props.context?.recent_searches_summary}</Text>
                    </>
                  )}
                  {props.currentPage && <Text>Current Page Data: {JSON.stringify(props.currentPage?.cdpPersonaDefinition, null, 2)}</Text>}
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>
      <Spacer />
      <Box opacity={0.5}>
        <Text as={'span'} display={{ base: 'none', md: 'flex ' }} fontSize={'2xs'}>
          Powered by
        </Text>
        <ProductLogo product={Product.Personalize} width={89} height={24} />
      </Box>
    </Flex>
  );
};

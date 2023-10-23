import { PageInfo } from '@/src/lib/interfaces/page-info';
import { Avatar, Box, Flex, Icon, IconButton, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, Stack, Text, Tooltip } from '@chakra-ui/react';
import { mdiInformationVariant } from '@mdi/js';
import { FC } from 'react';
import { GetProductIcon, Variant } from 'ui/lib/assets';
import { IPersonalizedExperience } from './IExperienceResult';

interface PersonalizeBarProps {
  context: IPersonalizedExperience | undefined;
  currentPage?: PageInfo | undefined; // TODO: Add Page Data
}

export const PersonalizeBar: FC<PersonalizeBarProps> = (props) => {
  return (
    <>
      <Flex p={4}>
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
            <Popover placement="auto-start" closeOnBlur={true}>
              <PopoverTrigger>
                <IconButton variant="unstyled" mt="-2" icon={<Icon path={mdiInformationVariant} />} fontSize="12px" aria-label="Reset" />
              </PopoverTrigger>

              <PopoverContent boxSize={{ base: 'sm', lg: 'xl' }}>
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Personalize Context
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  This chatbot uses Sitecore Personalize to provide a more contextually rich conversational experience. Continue reading to learn more about how this works.
                  <Text my="4">{props.context?.persona && <>Current Persona: {props.context?.persona?.Name}</>}</Text>
                  {props.currentPage && <Text>Current Page Data: {JSON.stringify(props.currentPage?.cdpPersonaDefinition, null, 2)}</Text>}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>
        </Box>
        <Spacer />
        <Box color="GrayText" opacity="0.6" fontSize="2xs">
          Powered by <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/a4cf37afeb8b4002b81e2de9c02a3220" sizes="3xs" />
        </Box>
      </Flex>
    </>
  );
};

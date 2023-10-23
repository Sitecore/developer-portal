import { Avatar, Box, Flex, Icon, IconButton, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, Stack, Text, Tooltip } from '@chakra-ui/react';
import { FredPersona, SallyPersona } from '@data/data-personas';
import { mdiInformationVariant } from '@mdi/js';
import { FC, useEffect, useState } from 'react';
import { PersonaType } from 'ui/components/integrations/engage/PersonaTypes';
import { IExperienceResult } from './IExperienceResult';

interface PersonalizeBarProps {
  context: IExperienceResult | undefined;
}

export const PersonalizeBar: FC<PersonalizeBarProps> = (props) => {
  const [personaContext, setPersonaContext] = useState<PersonaType | undefined>();
  const [preferredProduct, setPreferredProduct] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  //const [];

  useEffect(() => {
    setLoading(true);
    if (props.context) {
      switch (props.context.persona) {
        case 'fredPersona':
          setPersonaContext(FredPersona);
          break;
        case 'sallyPersona':
          setPersonaContext(SallyPersona);
          break;
        default:
          break;
      }
    }

    setLoading(false);
  }, [props.context]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Flex p={4}>
          <Box>
            <Stack direction="row" spacing={4}>
              {personaContext ? (
                <Tooltip label={`${personaContext?.Description}`} aria-label={`${personaContext?.Description}`}>
                  <Avatar name="Persona" size="xs" src={personaContext?.ImageUrl} />
                </Tooltip>
              ) : (
                <Tooltip label="Unknown" aria-label="Unknown">
                  <Avatar name="Persona" size="xs" src="" />
                </Tooltip>
              )}
              <Avatar name="product" size="xs" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/e7010cd758d049f6ad9577e2824d5bea" />
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
                    <Text>{JSON.stringify(props.context)}</Text>
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
      )}
    </>
  );
};

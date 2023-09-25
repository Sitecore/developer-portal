import { Box, Button, ButtonGroup, Heading, Hide, Menu, MenuButton, MenuItem, MenuList, Show, Stack, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
//import { useGlobalState } from '../../lib/globalState';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { mdiMenuDown } from '@mdi/js';
import { default as Link, default as NextLink } from 'next/link';
import { SubPageNavigation } from '../../lib/interfaces/page-info';

interface ChildNavigationProps {
  title?: string;
  subPageNavigation: SubPageNavigation;
}

const ChildNavigation = ({ subPageNavigation }: ChildNavigationProps) => {
  //const [navScrolled] = useGlobalState('navScrolled');

  return (
    // <nav className={`mb-8 transform-gpu self-start transition-all md:sticky md:mr-16 ${positionalClasses} `}>
    <Box as="nav" position={'sticky'} top={'9rem'}>
      {/* Mobile */}
      <Hide above="md">
        <Menu>
          <MenuButton as={Button} variant={'text'} borderRadius={0} rightIcon={<ChevronDownIcon />} mb={4}>
            {subPageNavigation.title}
          </MenuButton>
          <MenuList>
            {subPageNavigation?.routes.map((link, i) => {
              const urlSegment = `${subPageNavigation.path}/${link.path}`;
              return (
                <MenuItem key={i}>
                  <Link href={urlSegment} key={i}>
                    {link.title}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Hide>

      {/* Desktop */}
      <Show above="md">
        {subPageNavigation.title && (
          <Heading size={'sm'} mb={{ base: 2, md: 8 }}>
            {subPageNavigation.title}
          </Heading>
        )}
        <ButtonGroup variant="navigation" orientation="vertical" spacing="1" m="-2.5" position={'sticky'}>
          {subPageNavigation?.routes.map((link, i) => {
            const urlSegment = `${subPageNavigation.path}/${link.path}`;

            return (
              <React.Fragment key={i}>
                <Tooltip label={link.title} aria-label="A tooltip">
                  <Button as={NextLink} href={urlSegment} key={i} rightIcon={<path d={mdiMenuDown} />}>
                    <Text maxW={190} isTruncated>
                      {link.title}
                    </Text>
                  </Button>
                </Tooltip>
                {link.children?.length > 0 && (
                  <Stack paddingLeft={6}>
                    {link.children?.map((child, i) => {
                      return (
                        <Tooltip label={child.title} aria-label="A tooltip" key={i}>
                          <Button as={NextLink} href={`${urlSegment}/${child.path}`}>
                            {child.title}
                          </Button>
                        </Tooltip>
                      );
                    })}
                  </Stack>
                )}
              </React.Fragment>
            );
          })}
        </ButtonGroup>
      </Show>
    </Box>
  );
};

export default ChildNavigation;

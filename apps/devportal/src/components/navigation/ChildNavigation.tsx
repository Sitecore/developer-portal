import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Flex, Heading, Hide, Menu, MenuButton, MenuItem, MenuList, Show, Stack, Text } from '@chakra-ui/react';
import { default as Link, default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SubPageNavigation, SubPageNavigationItem } from '../../lib/interfaces/page-info';

interface ChildNavigationProps {
  title?: string;
  subPageNavigation: SubPageNavigation;
}

const ChildNavigation = ({ subPageNavigation }: ChildNavigationProps) => {
  const router = useRouter();

  return (
    <Box as="nav" position={'sticky'} top={'9rem'} w={'full'}>
      {/* Mobile */}
      <Show below="md">
        <Flex justifyContent="end">
          <Menu>
            <MenuButton as={Button} variant={'text'} borderRadius={0} rightIcon={<ChevronDownIcon />} mb={4} border={'1px solid'} borderColor={'chakra-border-color'}>
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
        </Flex>
      </Show>

      {/* Desktop */}
      <Hide below="md">
        {subPageNavigation.title && (
          <Heading size={'sm'} mb={{ base: 2, md: 8 }}>
            {subPageNavigation.title}
          </Heading>
        )}
        <ButtonGroup variant="navigation" orientation="vertical" spacing="1" m="-2.5" position={'sticky'} width={'full'}>
          {subPageNavigation?.routes.map((link, i) => {
            const urlSegment = `${subPageNavigation.path}/${link.path}`;

            return (
              <React.Fragment key={i}>
                <Button justifyContent={'space-between'} width={'full'} isActive={router.asPath == urlSegment}>
                  {link.path != null ? <Link href={urlSegment}>{link.title}</Link> : <Text>{link.title}</Text>}
                </Button>

                {/* Child items */}
                {link.children?.length > 0 && renderChildren(link, urlSegment)}
              </React.Fragment>
            );
          })}
        </ButtonGroup>
      </Hide>
    </Box>
  );
};

function renderChildren(link: SubPageNavigationItem, urlSegment: string): React.ReactNode {
  return (
    <Stack paddingLeft={4}>
      {link.children?.map((child, i) => {
        return (
          <React.Fragment key={i}>
            {!child.children ? (
              <Button as={NextLink} href={`${urlSegment}/${child.path}`} key={i}>
                <Text maxW={190} isTruncated>
                  {child.title}
                </Text>
              </Button>
            ) : (
              <React.Fragment key={i}>
                <Button justifyContent={'space-between'} width={'full'}>
                  {child.path ? <Link href={`${urlSegment}/${child.path}`}>{child.title}</Link> : <Text>{child.title}</Text>}
                </Button>

                {child.children?.length > 0 && renderChildren(child, urlSegment)}
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

export default ChildNavigation;

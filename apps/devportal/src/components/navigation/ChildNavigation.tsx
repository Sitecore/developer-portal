import { Box, Button, ButtonGroup, Collapse, Heading, Hide, Icon, Menu, MenuButton, MenuItem, MenuList, Show, Stack, Text, Tooltip, useDisclosure } from '@chakra-ui/react';
import React from 'react';
//import { useGlobalState } from '../../lib/globalState';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { default as Link, default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { SubPageNavigation, SubPageNavigationItem } from '../../lib/interfaces/page-info';

interface ChildNavigationProps {
  title?: string;
  subPageNavigation: SubPageNavigation;
}

const ChildNavigation = ({ subPageNavigation }: ChildNavigationProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
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
        <ButtonGroup variant="navigation" orientation="vertical" spacing="1" m="-2.5" position={'sticky'} width={'full'}>
          {subPageNavigation?.routes.map((link, i) => {
            const urlSegment = `${subPageNavigation.path}/${link.path}`;

            return (
              <React.Fragment key={i}>
                {!link.children ? (
                  <Tooltip label={link.title} aria-label="A tooltip">
                    <Button as={NextLink} href={urlSegment} key={i}>
                      <Text maxW={190} isTruncated>
                        {link.title}
                      </Text>
                    </Button>
                  </Tooltip>
                ) : (
                  <>
                    <Tooltip label={link.title} aria-label="A tooltip">
                      <Button rightIcon={<Icon onClick={onToggle} as={ChevronDownIcon} w={6} h={6} />} justifyContent={'space-between'} width={'full'}>
                        <Link href={urlSegment}>{link.title}</Link>
                      </Button>
                    </Tooltip>
                    {/* Child items */}
                    <Collapse in={router.asPath == urlSegment ? !isOpen : isOpen} animateOpacity>
                      {link.children?.length > 0 && renderChildren(link, urlSegment)}
                    </Collapse>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </ButtonGroup>
      </Show>
    </Box>
  );
};

function renderChildren(link: SubPageNavigationItem, urlSegment: string): React.ReactNode {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack paddingLeft={4}>
      {link.children?.map((child, i) => {
        return (
          <React.Fragment key={i}>
            {!child.children ? (
              <Tooltip label={link.title} aria-label="A tooltip">
                <Button as={NextLink} href={`${urlSegment}/${child.path}`} key={i}>
                  <Text maxW={190} isTruncated>
                    {child.title}
                  </Text>
                </Button>
              </Tooltip>
            ) : (
              <React.Fragment key={i}>
                <Tooltip label={child.title} aria-label="A tooltip" key={i}>
                  <Button rightIcon={<Icon onClick={onToggle} as={ChevronDownIcon} w={6} h={6} />} justifyContent={'space-between'} width={'full'}>
                    {child.path ? <Link href={`${urlSegment}/${child.path}`}>{child.title}</Link> : <Text>{child.title}</Text>}
                  </Button>
                </Tooltip>
                <Collapse in={isOpen} animateOpacity>
                  {child.children?.length > 0 && renderChildren(child, urlSegment)}
                </Collapse>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

export default ChildNavigation;

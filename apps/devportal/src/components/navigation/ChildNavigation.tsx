import { Box, Button, ButtonGroup, Collapse, Flex, Heading, Icon, Link, Text, useDisclosure } from '@chakra-ui/react';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { appendPathToBasePath } from 'ui/lib/utils/stringUtil';
import { SubPageNavigation, SubPageNavigationItem } from '../../lib/interfaces/page-info';
import { DropDownMenu } from './DropDownMenu';

export interface ChildNavigationProps {
  title?: string;
  subPageNavigation: SubPageNavigation;
}

const ChildNavigation = ({ subPageNavigation }: ChildNavigationProps) => {
  const router = useRouter();

  return (
    <Box>
      {/* Desktop */}
      <SideMenu subPageNavigation={subPageNavigation} />
      {/* Mobile */}
      <DropDownMenu subPageNavigation={subPageNavigation} key={router.asPath} hideFrom={'md'} />
    </Box>
  );
};

const SideMenu = ({ subPageNavigation }: ChildNavigationProps) => {
  const basePath = subPageNavigation.path;
  const showRootAsSections = subPageNavigation.showRootAsSections;

  return (
    <Flex direction="column" top="14" position={'sticky'} as={'nav'} hideBelow={'md'}>
      {subPageNavigation.heading && (
        <Heading size="sm" mb={8}>
          {subPageNavigation.title}
        </Heading>
      )}

      <ButtonGroup variant="navigation" spacing={1} orientation="vertical" maxWidth={'md'} as={'ul'} role="list">
        {subPageNavigation.routes.map((link, i) => {
          return (
            <React.Fragment key={i}>
              {renderMenuItem(link, basePath, i, showRootAsSections)}

              {link.children?.map((child, i) => {
                const childUrl = appendPathToBasePath(basePath, link.path);

                if (child.children?.length > 0) {
                  return renderMenuGroup(child, childUrl, i);
                }
                return renderMenuItem(child, childUrl, i, false);
              })}
            </React.Fragment>
          );
        })}
      </ButtonGroup>
    </Flex>
  );
};

function renderMenuItem(menuItem: SubPageNavigationItem, basePath: string, index?: number, showRootAsSections?: boolean): React.ReactNode {
  const router = useRouter();

  // Show section heading
  if (showRootAsSections) {
    if (menuItem.ignoreLink != null && menuItem.ignoreLink)
      return (
        <Heading variant="section" px={2} fontWeight={'bold'} width={'full'} mx={-2} as="li" pt={4} pb={4} key={index} listStyleType={'none'}>
          {menuItem.title}
        </Heading>
      );
    // Include link
    else
      return (
        <Heading variant="section" px={2} fontWeight={'bold'} as="li" mx={-2} pt={4} pb={4} key={index} listStyleType={'none'}>
          <Link as={NextLink} color={'chakra-subtle-text'} href={appendPathToBasePath(basePath, menuItem.path)}>
            {menuItem.title}
          </Link>
        </Heading>
      );
  }

  // Show normal link
  return (
    <Button colorScheme="neutral" isActive={router.asPath.includes(appendPathToBasePath(basePath, menuItem.path))} width={'full'} key={index} as="li">
      <Link as={NextLink} color={'neutral-fg'} href={appendPathToBasePath(basePath, menuItem.path)} px={2}>
        {menuItem.title}
      </Link>
    </Button>
  );
}

function renderMenuGroup(child: SubPageNavigationItem, basePath: string, index?: number): React.ReactNode {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const currentRouteIncludesChild = child.children?.some((child) => router.asPath.includes(child.path));

  return (
    <React.Fragment key={index}>
      <Button
        rightIcon={currentRouteIncludesChild ? undefined : <Icon onClick={onToggle}>{isOpen ? <path d={mdiChevronDown} /> : <path d={mdiChevronRight} />}</Icon>}
        justifyContent={'space-between'}
        width={'full'}
        transition={'ease-in-out'}
        onClick={child.ignoreLink ? onToggle : undefined}
      >
        {child.ignoreLink ? (
          <Text px={2}>{child.title}</Text>
        ) : (
          <Text as={NextLink} href={appendPathToBasePath(basePath, child.path)} px={2}>
            {child.title}
          </Text>
        )}
      </Button>

      <Collapse animateOpacity in={isOpen || currentRouteIncludesChild}>
        <Box pl={2}>
          {child.children?.length > 0 &&
            child.children.map((link, i) => {
              if (link.children?.length > 0) {
                return renderMenuGroup(link, appendPathToBasePath(basePath, child.path), i);
              }

              return renderMenuItem(link, appendPathToBasePath(basePath, child.path), i);
            })}
        </Box>
      </Collapse>
    </React.Fragment>
  );
}
export default ChildNavigation;

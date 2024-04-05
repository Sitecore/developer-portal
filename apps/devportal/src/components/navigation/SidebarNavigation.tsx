import { SidebarNavigationConfig, SidebarNavigationItem } from '@/src/lib/interfaces/page-info';
import { Box, Button, ButtonGroup, Collapse, HStack, Heading, Icon, IconButton, Text, Wrap, useDisclosure } from '@chakra-ui/react';
import { mdiChevronDown, mdiChevronRight, mdiMinus, mdiPlus } from '@mdi/js';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {appendPathToBasePath} from '@scdp/ui/lib';

export interface SidebarNavigationProps {
  title?: string;
  config: SidebarNavigationConfig;
}

let basePath: string;
let showRootAsSections: boolean | undefined;

const SidebarNavigation = ({ config }: SidebarNavigationProps) => {
  const router = useRouter();

  showRootAsSections = config.showRootAsSections;
  basePath = config.path;

  return (
    <React.Fragment>
      {config.heading && (
        <Heading variant={'section'} my={4} hideBelow={'md'}>
          {config.title}
        </Heading>
      )}

      {/* Desktop */}
      <Wrap direction="column" hideBelow={'md'}>
        {showRootAsSections && config.routes.map((link, i) => <SidebarGroupItem {...link} key={i} />)}

        {!showRootAsSections && (
          <ButtonGroup variant="navigation" orientation="vertical" spacing="1" width={'full'}>
            {config.routes.map((link, i) => (
              <ButtonGroup variant="navigation" orientation="vertical" spacing="1" width={'full'} key={i}>
                <MenuItemLink href={appendPathToBasePath(basePath, link.path)} title={link.title} />
              </ButtonGroup>
            ))}
          </ButtonGroup>
        )}
      </Wrap>

      {/* Mobile */}
      <DropDownMenu config={config} key={router.asPath} />
    </React.Fragment>
  );
};

export const SidebarGroupItem = (SidebarNavigationItem: SidebarNavigationItem) => {
  const currentBasePath = appendPathToBasePath(basePath, SidebarNavigationItem.path);

  return (
    <Wrap direction="column">
      {/* Load collapsable menu when the manifest.json contains the property collapsed  */}
      {SidebarNavigationItem.collapsed != null ? (
        <SidebarCollapsableGroupItem {...SidebarNavigationItem} />
      ) : (
        // Load the normal menu
        <React.Fragment>
          {SidebarNavigationItem.ignoreLink != null && SidebarNavigationItem.ignoreLink && <Heading variant="section">{SidebarNavigationItem.title}</Heading>}

          {!showRootAsSections && <MenuItemLink href={SidebarNavigationItem.path} title={SidebarNavigationItem.title} />}
          <ButtonGroup variant="navigation" orientation="vertical" spacing="1" width={'full'}>
            {SidebarNavigationItem.children?.map((child, i) =>
              child.children?.length > 0 ? <MenuItemGroup child={child} basePath={currentBasePath} key={i} /> : <MenuItemLink href={appendPathToBasePath(currentBasePath, child.path)} title={child.title} key={i} />
            )}
          </ButtonGroup>
        </React.Fragment>
      )}
    </Wrap>
  );
};

const SidebarCollapsableGroupItem = (SidebarNavigationItem: SidebarNavigationItem) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: SidebarNavigationItem.collapsed });

  return (
    <Wrap direction="column">
      <HStack justifyContent={'space-between'} mt={4}>
        <Heading variant="section" onClick={onToggle} cursor={'pointer'}>
          {SidebarNavigationItem.title}
        </Heading>
        <IconButton
          icon={
            <Icon boxSize={'4'} color={'chakra-subtle-text'}>
              <path d={isOpen ? mdiPlus : mdiMinus} />
            </Icon>
          }
          variant="ghost"
          size={'xs'}
          aria-label={''}
          onClick={onToggle}
        />
      </HStack>

      <Collapse animateOpacity in={!isOpen}>
        <ButtonGroup variant="navigation" orientation="vertical" spacing="1" width={'full'}>
          {SidebarNavigationItem.children?.map((child, i) => (child.children?.length > 0 ? <MenuItemGroup child={child} basePath={basePath} key={i} /> : <MenuItemLink href={appendPathToBasePath(basePath, child.path)} title={child.title} key={i} />))}
        </ButtonGroup>
      </Collapse>
    </Wrap>
  );
};

const MenuItemLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();

  return (
    <Button as={NextLink} colorScheme="neutral" href={href} px={2} width={'full'} isActive={router.asPath.endsWith(href)}>
      {title}
    </Button>
  );
};

const MenuItemGroup = ({ child, basePath, index }: { child: SidebarNavigationItem; basePath: string; index?: number }) => {
  const router = useRouter();
  const currentRouteIncludesChild = child.children?.some((child) => router.asPath.includes(child.path));
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: currentRouteIncludesChild });
  const currentBasePath = appendPathToBasePath(basePath, child.path);

  return (
    <React.Fragment key={index}>
      <Button
        rightIcon={<Icon onClick={onToggle}>{isOpen ? <path d={mdiChevronDown} /> : <path d={mdiChevronRight} />}</Icon>}
        justifyContent={'space-between'}
        width={'full'}
        transition={'ease-in-out'}
        onClick={child.ignoreLink ? onToggle : undefined}
      >
        {child.ignoreLink ? (
          <Text>{child.title}</Text>
        ) : (
          <Text as={NextLink} href={appendPathToBasePath(basePath, child.path)}>
            {child.title}
          </Text>
        )}
      </Button>

      <Collapse animateOpacity in={isOpen}>
        <Box pl={2}>
          {child.children.map((link, i) => {
            if (link.children?.length > 0) {
              return <MenuItemGroup child={link} basePath={appendPathToBasePath(currentBasePath, link.path)} key={i} />;
            }
            return <MenuItemLink href={appendPathToBasePath(currentBasePath, link.path)} title={link.title} key={i} />;
          })}
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

const DropDownMenu = ({ config, ...rest }: SidebarNavigationProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as={'nav'} hideFrom={'md'} {...rest}>
      <Button
        as={Button}
        onClick={onToggle}
        variant={'outline'}
        width={'full'}
        rightIcon={
          <Icon layerStyle="menuButtonIcon">
            <path d={mdiChevronDown} />
          </Icon>
        }
      >
        {config.title}
      </Button>

      <Collapse in={isOpen}>
        <Box position={'relative'}>
          <ButtonGroup variant="navigation" orientation="vertical" width={'full'} spacing="1" mt={2} as="ul">
            {config.routes.map((link, i) => (
              <SidebarGroupItem {...link} key={i} />
            ))}
          </ButtonGroup>
        </Box>
      </Collapse>
    </Box>
  );
};

export default SidebarNavigation;

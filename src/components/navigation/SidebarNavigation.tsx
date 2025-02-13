import { Box, Button, ButtonGroup, Collapse, Heading, Hide, HStack, Icon, IconButton, Text, useColorModeValue, useDisclosure, Wrap } from '@chakra-ui/react';
import { mdiChevronDown, mdiChevronRight, mdiMinus, mdiPlus } from '@mdi/js';
import { appendPathToBasePath } from '@src/lib/utils';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { SidebarNavigationConfig, SidebarNavigationItem } from '@/src/lib/interfaces/page-info';

import { GetProductLogo } from '@/src/lib/assets';
import SidebarSearch from './SidebarSearch';

export interface SidebarNavigationProps {
  title?: string;
  showSearch?: boolean;
  config: SidebarNavigationConfig;
}

let basePath: string;
let showRootAsSections: boolean | undefined;

const SidebarNavigation = ({ config }: SidebarNavigationProps) => {
  const router = useRouter();
  const [searchActive, setSearchActive] = useState<boolean>(false);

  showRootAsSections = config.showRootAsSections;
  basePath = config.path;

  return (
    <Box mt={4}>
      {config.enableSearch && (
        <Hide below="md">
          <SidebarSearch config={config} onFocus={() => setSearchActive(true)} onBlur={() => setSearchActive(false)} />
        </Hide>
      )}

      {config.heading && !searchActive && (
        <Heading as={NextLink} variant={'section'} my={4} mx="0" hideBelow={'md'} href={config.path}>
          {config.title}
        </Heading>
      )}

      {config.productLogo && (
        <Box height={'24px'} width={'full'} position={'relative'} my={4} sx={{ '& > img': { width: 'auto !important' } }}>
          <Image src={useColorModeValue(GetProductLogo(config.productLogo, 'Light'), GetProductLogo(config.productLogo, 'Dark'))} alt={`${config.title}`} fill style={{ objectFit: 'fill' }} sizes="(min-width: 5em) 5vw, (min-width: 44em) 20vw, 33vw" />
        </Box>
      )}
      {/* Desktop */}
      <Wrap direction="column" hideBelow={'md'} hidden={searchActive}>
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
    </Box>
  );
};

export const SidebarGroupItem = (SidebarNavigationItem: SidebarNavigationItem) => {
  const currentBasePath = appendPathToBasePath(basePath, SidebarNavigationItem.path);

  return (
    <>
      {/* Load collapsable menu when the manifest.json contains the property collapsed  */}
      {SidebarNavigationItem.collapsed != null ? (
        <SidebarCollapsableGroupItem {...SidebarNavigationItem} />
      ) : (
        // Load the normal menu
        <Box as={'li'}>
          {SidebarNavigationItem.ignoreLink != null && SidebarNavigationItem.ignoreLink && (
            <Heading variant="section" data-type="title" my={4}>
              {SidebarNavigationItem.title}
            </Heading>
          )}

          {!showRootAsSections && <MenuItemLink href={SidebarNavigationItem.path} title={SidebarNavigationItem.title} />}
          <ButtonGroup variant="navigation" orientation="vertical" spacing="1" width={'full'} as={'ul'} role="list">
            {SidebarNavigationItem.children?.map((child, i) =>
              child.children?.length > 0 ? <MenuItemGroup child={child} basePath={currentBasePath} key={i} /> : <MenuItemLink href={appendPathToBasePath(currentBasePath, child.path)} title={child.title} key={i} />
            )}
          </ButtonGroup>
        </Box>
      )}
    </>
  );
};

const SidebarCollapsableGroupItem = (SidebarNavigationItem: SidebarNavigationItem) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: SidebarNavigationItem.collapsed });

  return (
    <Wrap direction="column" as={'li'} data-type="collapsable-group-item">
      <HStack justifyContent={'space-between'} mt={4}>
        {SidebarNavigationItem.ignoreLink == false ? (
          <Heading as={NextLink} variant="section" cursor={'pointer'} href={appendPathToBasePath(basePath, SidebarNavigationItem.path)}>
            {SidebarNavigationItem.title}
          </Heading>
        ) : (
          <Heading variant="section" onClick={onToggle} cursor={'pointer'}>
            {SidebarNavigationItem.title}
          </Heading>
        )}
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
        <ButtonGroup variant="navigation" orientation="vertical" spacing="1" width={'full'} data-type="buttons">
          {SidebarNavigationItem.children?.map((child, i) => (child.children?.length > 0 ? <MenuItemGroup child={child} basePath={basePath} key={i} /> : <MenuItemLink href={appendPathToBasePath(basePath, child.path)} title={child.title} key={i} />))}
        </ButtonGroup>
      </Collapse>
    </Wrap>
  );
};

const MenuItemLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();

  return (
    <Box as="li" listStyleType={'none'}>
      <Button as={NextLink} colorScheme="neutral" href={href} px={2} width={'full'} isActive={router.asPath.endsWith(href)} data-type="menu-item-link">
        {title}
      </Button>
    </Box>
  );
};

const MenuItemGroup = ({ child, basePath, index }: { child: SidebarNavigationItem; basePath: string; index?: number }) => {
  const router = useRouter();
  const currentRouteIncludesChild = child.children?.some((child) => router.asPath.includes(child.path));
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: currentRouteIncludesChild });
  const currentBasePath = appendPathToBasePath(basePath, child.path);

  return (
    <Box as="li" key={index} data-type="menu-item-group" listStyleType={'none'}>
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
        <Box pl={2} as="ul">
          {child.children.map((link, i) => {
            if (link.children?.length > 0) {
              return <MenuItemGroup child={link} basePath={appendPathToBasePath(currentBasePath, link.path)} key={i} />;
            }

            return <MenuItemLink href={appendPathToBasePath(currentBasePath, link.path)} title={link.title} key={i} />;
          })}
        </Box>
      </Collapse>
    </Box>
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

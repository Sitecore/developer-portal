'use client';

import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Flex,
  HStack,
  Heading,
  Hide,
  Icon,
  IconButton,
  Image,
  Link,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Show,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  UnorderedList,
  Wrap,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { NavItem, mainNavigation, sitecoreQuickLinks } from '@data/data-navigation';
import { mdiChevronDown, mdiChevronUp, mdiInformationOutline } from '@mdi/js';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {ProductIcon, Slide} from '@scdp/ui/components';
//import { GetProductLogoByVariant, Product, Type, Variant } from '@scdp/ui/lib';
import { PreviewModeSwitch } from '../common/PreviewModeSwitch';
import PreviewSearchInput from '../sitecore-search/PreviewSearchInput';
import { DarkModeSwitch } from './DarkModeSwitch';
import { QuickStartMenu } from './QuickStartMenu';
import { SearchButton } from './SearchButton';
import { GetProductLogoByVariant, Product, Type, Variant } from '@scdp/ui/lib';

export type NavigationChildData = {
  title: string;
  url?: string;
  external?: boolean;
  children?: NavigationChildData[];
};

export type NavigationData = {
  title: string;
  url?: string;
  children?: NavigationChildData[];
  pathname?: string;
};
export type NavProps = {
  navigationData: NavigationData[];
  sitecoreQuickLinks: NavigationData;
  children?: React.ReactNode | React.ReactNode[];
};

export type NavBarProps = {
  searchEnabled?: boolean;
};

export default function Navbar({ searchEnabled }: NavBarProps): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();
  const [focusedOnSearch, setFocusedOnSearch] = useState(false);
  const router = useRouter();

  return (
    <Box layerStyle="section.topbar" shadow={'base'} zIndex={'sticky'} position="sticky" top="0">
      <Flex h="14" align={'center'} justify="space-between">
        <Stack direction={'row'} w="full" alignItems={'center'} justifyContent={'space-between'}>
          <HStack flexShrink={0}>
            {/* Logo */}
            <Link href="/">
              <Image
                p="1"
                h="8"
                w={'auto'}
                align="left"
                alt={'Go to the homepage'}
                src={useColorModeValue(GetProductLogoByVariant(Product.SitecoreDevelopers, Variant.Light, Type.Full), GetProductLogoByVariant(Product.SitecoreDevelopers, Variant.Dark, Type.Full))}
              />
            </Link>

            {/* Desktop menu (hide under xl or lower) */}
            <Show above="xl">
              <HStack>
                <DesktopNav key={router.asPath} />
              </HStack>
            </Show>
          </HStack>
          {/* Preview search on wide desktop */}
        </Stack>
        {/* Mobile menu button */}
        <Stack direction={'row'} alignItems={'center'}>
          {searchEnabled && (
            <>
              <Hide below="3xl">
                <PreviewSearchInput
                  rfkId="rfkid_6"
                  defaultItemsPerPage={6}
                  onFocus={() => setFocusedOnSearch(true)}
                  onBlur={() => setFocusedOnSearch(false)}
                  display={'flex'}
                  width={focusedOnSearch ? '2xl' : 'lg'}
                  transition={'width 0.1s ease-in-out'}
                />
              </Hide>
              <Show below="3xl">
                <SearchButton />
              </Show>
            </>
          )}
          {!searchEnabled && (
            <Tooltip label="Search is disabled on this environment. Click here for more information" aria-label="Search is disabled on this environment" hideBelow={'md'}>
              <IconButton
                icon={
                  <Icon>
                    <path d={mdiInformationOutline} />
                  </Icon>
                }
                variant="ghost"
                colorScheme="danger"
                aria-label={''}
                as={NextLink}
                href="/search"
              >
                Search disabled
              </IconButton>
            </Tooltip>
          )}
          <PreviewModeSwitch />
          <DarkModeSwitch />
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} size="sm" variant={'ghost'} aria-label={'Toggle Navigation'} display={{ base: 'flex', xl: 'none' }} />
          <QuickStartMenu key={router.asPath} />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav key={router.asPath} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const router = useRouter();

  return (
    <Wrap direction={'row'}>
      {mainNavigation.map((navItem, key) => (
        <ButtonGroup variant="navigation" orientation="horizontal" spacing="4" mx="2" key={key} as={'li'}>
          <Box key={navItem.title} role="group">
            {navItem.url ? (
              <Button key={key} as={NextLink} href={navItem.url ?? '#'} position={'relative'} isActive={router.asPath.includes(navItem.url)}>
                {navItem.title}
              </Button>
            ) : (
              <Popover>
                {({ isOpen }) => (
                  <>
                    <PopoverTrigger>
                      <Button key={key} position={'relative'} isActive={router.asPath == navItem.url} rightIcon={<Icon>{isOpen ? <path d={mdiChevronUp} /> : <path d={mdiChevronDown} />}</Icon>}>
                        {navItem.title}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent width={'100%'} rounded={'md'} shadow={'base'}>
                      <PopoverArrow />
                      <Box width="100%" maxWidth={'5xl'}>
                        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} pos="relative" gap={{ base: 2, sm: 2 }} px={5} py={6} p={{ sm: 8 }}>
                          {navItem.children?.map((child) => (
                            <DesktopSubNav key={child.title} {...child} />
                          ))}
                        </SimpleGrid>
                      </Box>
                    </PopoverContent>
                  </>
                )}
              </Popover>
            )}
          </Box>
        </ButtonGroup>
      ))}
    </Wrap>
  );
};

const navSection = ({ title, logo }: NavItem) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <>
      {logo && (
        <Box display={'inline'} marginRight={2} position={'relative'}>
          <ProductIcon product={logo} height={'20px'} width={'32px'} />
        </Box>
      )}
      <Text transition={'all .3s ease'} fontWeight={500} color={linkColor} fontSize={'lg'} mt={-1}>
        {title}
      </Text>
    </>
  );
};

const DesktopSubNav = ({ title, url, subTitle, external, children, logo }: NavItem) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  //left="50%" transform="translateX(-50%)"
  return (
    <Box role={'group'} display={'block'} p={2} key={title}>
      {url ? (
        <Link as={NextLink} href={url ? url : '#'} isExternal={external} display={'flex'} gap={1} mb={2}>
          {navSection({ title, logo })}
        </Link>
      ) : (
        <Flex gap={1} mb={2}>
          {navSection({ title, logo })}
        </Flex>
      )}

      <Text fontSize={'sm'}>{subTitle}</Text>

      {children != null &&
        children.map((child, key) => (
          <Link as={NextLink} href={child.url} isExternal={child.external} display={'flex'} gap={1} py={2} color={linkColor} key={key}>
            {child.logo && (
              <Box display={'inline'} marginRight={2}>
                <ProductIcon product={child.logo} width={'24px'} height={'24px'} />
              </Box>
            )}
            {child.title}
            {child.external && <ExternalLinkIcon mx="2px" w={4} h={4} fillOpacity={0} mt={1} />}
          </Link>
        ))}
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} display={{ xl: 'none' }} shadow={'lg'} height={'100vh'} position={'absolute'} width={'full'} ml={-15}>
      {mainNavigation.map((navItem) => (
        <MobileNavItem key={navItem.title} {...navItem} />
      ))}
      <MobileNavItem title={sitecoreQuickLinks.title} key={sitecoreQuickLinks.title}>
        {sitecoreQuickLinks.children}
      </MobileNavItem>
    </Box>
  );
};

type MobileNavItemProps = {
  title: string;
  children?: Array<NavItem>;
  url?: string;
};

const MobileNavItem = ({ title, children, url }: MobileNavItemProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const router = useRouter();
  const currentPage = router.asPath;
  // const isCurrentPage = currentPage === url;
  // const currentRoute = router.pathname;

  return (
    <Stack onClick={children && onToggle}>
      <Flex
        px={4}
        py={4}
        as="a"
        href={url ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
        borderTop={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Text fontWeight={600}>{title}</Text>
        {children && <Icon as={ChevronRightIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />}
      </Flex>

      <Slide in={isOpen}>
        <Box position={'fixed'} top={'3.5rem'} width={'full'} background={'chakra-body-bg'} height={'100vh'}>
          <Button leftIcon={<Icon as={ChevronLeftIcon} w={6} h={6} />} onClick={onClose} width={'full'} borderRadius={0} justifyContent={'left'} px={2} height={14} mb={4} shadow={'lg'}>
            Back
          </Button>
          <Stack mb={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
            {children &&
              children.map((child, key) => (
                <Box key={key} py={4} borderBottom={1} borderBottomStyle={'solid'} borderBottomColor={'chakra-border-color'} width={'95%'}>
                  {child.url ? (
                    <Box as="a" key={child.title} py={2} href={child.url}>
                      <Heading as="h2" size="md" mb={2}>
                        {child.title}
                      </Heading>
                    </Box>
                  ) : (
                    <Box as="span" key={child.title} py={2}>
                      <Heading as="h2" size="md" mb={2}>
                        {child.title}
                      </Heading>
                    </Box>
                  )}

                  <UnorderedList listStyleType={'none'} m={0}>
                    {child.children?.map((subchild, i) => (
                      <ListItem py={2} key={i}>
                        <Link as={NextLink} aria-current={currentPage === subchild.url} href={subchild.url} isExternal={subchild.external} key={i} color={'neutral.fg'}>
                          {subchild.title} {subchild.external && <Icon as={ExternalLinkIcon} fillOpacity={0} w={4} h={4} />}
                        </Link>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
          </Stack>
        </Box>
      </Slide>
    </Stack>
  );
};

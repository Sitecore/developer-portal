'use client';

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Collapse, Flex, Heading, Icon, IconButton, Image, Link, ListItem, SimpleGrid, Stack, Text, UnorderedList, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import throttle from 'lodash.throttle';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NavItem, mainNavigation, sitecoreQuickLinks } from '../../../data/data-navigation';
import { setGlobalState, useGlobalState } from '../../lib/globalState';
import ProductIcon from '../common/ProductIcon';
import { Slide } from '../common/Slide';
import { DarkModeSwitch } from './DarkModeSwitch';
import { QuickStartMenu } from './QuickStartMenu';

export type NavBarProps = {
  children?: React.ReactNode | React.ReactNode[];
};

export default function Navbar({ children }: NavBarProps): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  /**
   *  Hook for scroll state
   */
  const [scrolled] = useGlobalState('navScrolled');

  /**
   *  Hook for handling scroll events on header.
   *
   *  Throttle the scroll listener with lodash, only handle on mount.
   */
  useEffect(() => {
    const ThrottleSpeed = 250;
    const Threshold = 140;
    let lastScrollY = window.pageYOffset;

    const UpdateScrollDirection = () => {
      const ScrollY = window.pageYOffset;

      // Exit if we haven't crossed the Threshold
      if (Math.abs(ScrollY - lastScrollY) < Threshold) {
        return;
      }

      setGlobalState('navScrolled', ScrollY > lastScrollY ? true : false);
      lastScrollY = ScrollY > 0 ? ScrollY : 0;
    };

    const OnScroll = () => {
      window.requestAnimationFrame(UpdateScrollDirection);
    };

    // When moutned, add scroll listener, throttle scroll event with lodash.
    const ThrottleScroll = throttle(OnScroll, ThrottleSpeed);
    window.addEventListener('scroll', ThrottleScroll);

    // If unmounted, remove listener.
    return () => window.removeEventListener('scroll', ThrottleScroll);
  }, [scrolled]);

  //const height = children ? 'h-32' : 'h-16';

  return (
    <Slide in={!scrolled} direction="top-half" style={{ zIndex: 9999 }}>
      <Box
        as="header"
        shadow={'sm'}
        zIndex={999}
        width={'full'}

        //top={scrolled ? '-14' : '0'}
        //transition={'all'}
        //transitionDuration={'0.15'}
        //transitionTimingFunction={'cubic-bezier(.4,0,.2,1)'}
      >
        <Flex as={'nav'} py={{ base: 3 }} px={{ base: 4 }} align={'center'} borderBottom={'1px solid #d4d4d4'} background={'chakra-body-bg'}>
          {/* Logo */}
          <Box as="a" href="/" flexShrink="0" title="Go to the home page">
            <Image
              src={useColorModeValue('https://sitecorecontenthub.stylelabs.cloud/api/public/content/a87c9e14823345f5bafb4d4d8aeba1c2', 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/f04ab6fe01f84ecf8af076728ac13709')}
              alt="Sitecore logo"
            />
          </Box>

          {/* Desktop menu */}
          <Flex flex={{ base: 1 }} justify={{ base: 'center', xl: 'center' }}>
            <Flex display={{ base: 'none', xl: 'flex' }} justify={'flex-center'} as={'nav'} width="100%" maxWidth="6xl">
              <DesktopNav />
            </Flex>
          </Flex>

          {/* Mobile menu button */}
          <Flex flex={{ base: 1, xl: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', xl: 'none' }}></Flex>

          <Flex flex={{ base: 2, xl: 0 }} justify={'flex-end'} direction={'row'}>
            <DarkModeSwitch />
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} size="sm" variant={'ghost'} aria-label={'Toggle Navigation'} display={{ base: 'flex', xl: 'none' }} />
            <QuickStartMenu />
          </Flex>
        </Flex>

        {children && (
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }} padding={3} paddingX={'2rem'} position={'static'} background={'chakra-body-bg'} shadow={'md'} height={16}>
            <Box display={'flex'} boxSize={'100%'} maxWidth={'6xl'} width={'100%'}>
              {children}
            </Box>
          </Flex>
        )}

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Slide>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {mainNavigation.map((navItem, key) => (
        <Box key={navItem.title} role="group">
          <Box
            key={key}
            as="a"
            px={6}
            py={5}
            href={navItem.url ?? '#'}
            fontSize={'lg'}
            overflow={'hidden'}
            fontWeight={500}
            color={linkColor}
            position={'relative'}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              _after: {
                width: '100%',
                left: 0,
              },
            }}
            _after={{
              content: `''`,
              height: '3px',
              width: '0',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transition: 'all 0.2s ease-in-out',
              background: useColorModeValue('primary.400', 'primary.800'),
            }}
          >
            {navItem.title}
            {navItem.children && <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} _hover={{ rotate: '180deg' }} w={6} h={6} />}
          </Box>
          <Box pos="absolute" left={0} top={'57px'} w="full" zIndex={998} display="none" _groupHover={{ display: 'block' }} bg={useColorModeValue('white', 'gray.800')} shadow={'lg'} transition={'all .25s ease-in-out'}>
            {navItem.children && (
              <Center>
                <Box width="100%" maxWidth="6xl">
                  <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} pos="relative" gap={{ base: 6, sm: 8 }} px={5} py={6} p={{ sm: 8 }}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.title} {...child} />
                    ))}
                  </SimpleGrid>
                </Box>
              </Center>
            )}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ title, url, subTitle, external, children, logo }: NavItem) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box role={'group'} display={'block'} p={2} key={title}>
      <Link as={NextLink} href={url ? url : '#'} isExternal={external} display={'flex'} gap={1} mb={2}>
        {logo && <ProductIcon product={logo} width={30} height={20} />}
        <Text transition={'all .3s ease'} fontWeight={500} color={linkColor} fontSize={'lg'}>
          {title}
        </Text>
      </Link>
      <Text fontSize={'sm'}>{subTitle}</Text>

      {children != null &&
        children.map((child, key) => (
          <Link as={NextLink} href={child.url} isExternal={child.external} display={'flex'} gap={1} py={2} color={linkColor} key={key}>
            {child.logo && <ProductIcon product={child.logo} width={20} height={20} />}
            {child.title}
            {child.external && <ExternalLinkIcon mx="2px" w={4} h={4} fillOpacity={0} mt={1} />}
          </Link>
        ))}
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} display={{ xl: 'none' }} shadow={'lg'} height={'100vh'} position={'absolute'} width={'full'}>
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
        <Box position={'fixed'} top={'7.5rem'} width={'full'} background={'chakra-body-bg'} height={'100vh'}>
          <Button leftIcon={<Icon as={ChevronLeftIcon} w={6} h={6} />} onClick={onClose} width={'full'} borderRadius={0} justifyContent={'left'} px={2} height={14} mb={4} shadow={'lg'}>
            Back
          </Button>
          <Stack mb={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
            {children &&
              children.map((child, key) => (
                <Box key={key} py={4} borderBottom={1} borderBottomStyle={'solid'} borderBottomColor={'chakra-border-color'} width={'95%'}>
                  <Box as="a" key={child.title} py={2} href={child.url}>
                    <Heading as="h2" size="lg" mb={2}>
                      {child.title}
                    </Heading>
                  </Box>
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
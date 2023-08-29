'use client';

import { ChevronDownIcon, CloseIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Center, Collapse, Flex, Icon, IconButton, Image, Link, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import throttle from 'lodash.throttle';
import NextLink from 'next/link';
import { useEffect } from 'react';
import { NavItem, mainNavigation, sitecoreQuickLinks } from '../../../data/data-navigation';
import { setGlobalState, useGlobalState } from '../../lib/globalState';
import { Slide } from '../common/Slide';
import { DarkModeSwitch } from './DarkModeSwitch';
import { QuickStartMenu } from './QuickStartMenu';

export type NavBarProps = {
  children?: React.ReactNode | React.ReactNode[];
};

export default function Navbar({ children }: NavBarProps): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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
        borderBottom={'1px solid #d4d4d4'}
        zIndex={999}
        width={'full'}
        height={'128px'}

        //top={scrolled ? '-14' : '0'}
        //transition={'all'}
        //transitionDuration={'0.15'}
        //transitionTimingFunction={'cubic-bezier(.4,0,.2,1)'}
      >
        <Flex as={'nav'} py={{ base: 3 }} px={{ base: 4 }} align={'center'} borderBottom={'1px solid #d4d4d4'} background={'chakra-body-bg'}>
          {/* Logo */}
          <Box as="a" href="/" flexShrink="0">
            <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/a87c9e14823345f5bafb4d4d8aeba1c2" hidden={colorMode === 'dark'} />
            <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/f04ab6fe01f84ecf8af076728ac13709" hidden={colorMode === 'light'} />
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
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} display={{ base: 'flex', xl: 'none' }} />
            <QuickStartMenu display={{ base: 'none', xl: 'flex' }} />
          </Flex>
        </Flex>

        {children && children}

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
            p={6}
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

const DesktopSubNav = ({ title, url, subTitle, external, children }: NavItem) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Box role={'group'} display={'block'} p={2} key={title}>
      <Link as={NextLink} href={url ? url : '#'} isExternal={external}>
        <Text transition={'all .3s ease'} fontWeight={500} color={linkColor} fontSize={'lg'}>
          {title}
        </Text>
      </Link>
      <Text fontSize={'sm'}>{subTitle}</Text>

      {children.map((child, key) => (
        <Link as={NextLink} href={child.url} isExternal={child.external} display={'block'} pt={2} color={linkColor} key={key}>
          {child.title}
          {child.external && <ExternalLinkIcon mx="2px" />}
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
      <MobileNavItem title={sitecoreQuickLinks.title} key={sitecoreQuickLinks.title} children={sitecoreQuickLinks.children} />
    </Box>
  );
};

const MobileNavItem = ({ title, children, url }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

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
        {children && <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack mt={2} mb={2} pl={4} borderLeft={1} marginTop={'!0'} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.title} py={2} href={child.url}>
                {child.title}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

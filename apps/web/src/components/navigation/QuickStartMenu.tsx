import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Link, Menu, MenuButton, MenuButtonProps, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { sitecoreQuickLinks } from '../../../data/data-navigation';

type QuickStartMenuProps = MenuButtonProps;

export const QuickStartMenu = (props: QuickStartMenuProps) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Menu>
      <MenuButton
        as={Button}
        {...props}
        rightIcon={
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="20px" height="20px">
            <g>
              <rect x="0" y="0" width="18.8" height="18.8" fill="currentColor" />
              <rect x="35.6" y="0" width="18.8" height="18.8" fill="currentColor" />
              <rect x="71.2" width="18.8" height="18.8" fill="currentColor" />
              <rect x="0.1" y="35.6" width="18.8" height="18.8" fill="currentColor" />
              <rect x="35.6" y="35.7" width="18.8" height="18.8" fill="currentColor" />
              <rect x="71.2" y="35.6" width="18.8" height="18.8" fill="currentColor" />
              <rect y="71.3" width="18.8" height="18.8" fill="currentColor" />
              <rect x="35.6" y="71.2" width="18.8" height="18.8" fill="currentColor" />
              <rect x="71.2" y="71.2" width="18.8" height="18.8" fill="currentColor" />
            </g>
          </svg>
        }
        variant="ghost"
      ></MenuButton>
      <MenuList>
        {sitecoreQuickLinks.children &&
          sitecoreQuickLinks.children.map((link, key) => (
            <MenuItem key={key}>
              <Link as={NextLink} href={link.url} isExternal display={'block'} width={'90%'} color={linkColor}>
                {link.title}
              </Link>
              {<ExternalLinkIcon mx="2px" />}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

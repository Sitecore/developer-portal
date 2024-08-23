import { ExternalLinkIcon } from "@chakra-ui/icons";
import { IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { mdiDotsGrid } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';
import { sitecoreQuickLinks } from '../../../data/data-navigation';

export const QuickStartMenu = () => {
  return (
    <Menu>
      <MenuButton size="sm" as={IconButton} variant="ghost" icon={<Icon size={1} path={mdiDotsGrid} />} display={{ base: 'none', xl: 'flex' }} aria-label={'Open the menu for links to other Sitecore sites'} />
      <MenuList>
        {sitecoreQuickLinks.children &&
          sitecoreQuickLinks.children.map((link, key) => (
            <MenuItem key={key}>
              <Link as={NextLink} href={link.url} isExternal display={'block'} width={'90%'} color="neutral-fg">
                {link.title}
              </Link>
              {<ExternalLinkIcon fillOpacity={0} boxSize={'1em'} />}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

// Lib

import { Box, BoxProps, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Tooltip } from '@chakra-ui/react';
import { mdiChevronDown } from '@mdi/js';
import Link from 'next/link';
import { ContentHeading } from '../../lib/interfaces/contentheading';

type InPageNavProps = BoxProps & {
  titles: ContentHeading[];
  hideFrom?: string;
};

const InPageNavSmall = ({ titles, ...rest }: InPageNavProps): JSX.Element => {
  const links = titles.map((text) => ({
    text: text.title,
    href: `#${text.id}`,
  }));

  if (titles.length == 0) {
    return <></>;
  }

  return (
    <Box {...rest} mb={4}>
      <Menu>
        <Tooltip label="Sections on this page" aria-label="Table of contents">
          <MenuButton
            position={'absolute'}
            right={0}
            mt={2}
            size="sm"
            as={IconButton}
            variant="ghost"
            icon={
              <Icon>
                <path d={mdiChevronDown} />
              </Icon>
            }
            w={8}
            p="2"
          />
        </Tooltip>
        <MenuList>
          {links.map((link, i) => {
            return (
              <MenuItem key={i}>
                <Link href={link.href} key={i} title={link.text}>
                  {link.text}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default InPageNavSmall;

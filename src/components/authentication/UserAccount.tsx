import { Avatar, Box, Divider, HStack, Icon, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Wrap } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';

import { mdiAccountCircleOutline, mdiLogin, mdiLogout } from '@mdi/js';
import { iconSitecore } from '@sitecore/blok-theme';
import { useRouter } from 'next/router';
import React from 'react';

const UserAccount: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const loginUrl = router.asPath != '/' ? '/login?destination=' + encodeURIComponent(router.asPath) : '/login';

  if (!session?.user) {
    return (
      <IconButton
        as={Link}
        href={loginUrl}
        aria-label="Login"
        size={'sm'}
        variant={'ghost'}
        icon={
          <Icon>
            <path d={mdiLogin} />
          </Icon>
        }
      />
    );
  }
  return (
    <Wrap spacing="10">
      <Menu>
        <MenuButton>
          <Avatar size="sm" name={session.user.name || ''} src={session.user.image || ''} />
        </MenuButton>

        <MenuList>
          <Box px="3.5" py="2">
            <HStack>
              <Icon boxSize="icon.md" color="red">
                <path d={iconSitecore} />
              </Icon>
              <Text variant="strong">{session.provider == 'okta' ? 'Sitecore ID' : 'Cloud Portal'}</Text>
            </HStack>
            <Divider my="2" mx="3.5" />
            <Text variant="strong">{session.user.name}</Text>
            <Text variant="small">{session.user.email}</Text>
          </Box>
          <MenuDivider />

          <MenuItem
            icon={
              <Icon>
                <path d={mdiAccountCircleOutline} />
              </Icon>
            }
            onClick={() => {
              router.push('/login');
            }}
          >
            Switch account
          </MenuItem>
          <MenuItem
            icon={
              <Icon>
                <path d={mdiLogout} />
              </Icon>
            }
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Log out
          </MenuItem>
        </MenuList>
      </Menu>
    </Wrap>
  );
};

export default UserAccount;

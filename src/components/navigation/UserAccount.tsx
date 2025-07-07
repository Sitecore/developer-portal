import { Avatar, Box, Icon, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip, Wrap } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { mdiAccountCircleOutline, mdiLogin, mdiLogout } from '@mdi/js';
import { useRouter } from 'next/router';
import React from 'react';

const UserAccount: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const loginUrl = router.asPath != '/' ? '/api/auth/signin?callbackUrl=' + encodeURIComponent(router.asPath) : '/api/auth/signin';

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
        <Tooltip label={session.user.email}>
          <MenuButton>
            <Avatar size="sm" name={session.user.name || ''} src={session.user.image || ''} />
          </MenuButton>
        </Tooltip>
        <MenuList>
          <Box px="3.5" py="2">
            <Text variant="strong">{session.user.name}</Text>
            <Text variant="small">{session.user.email}</Text>
          </Box>
          <MenuItem
            icon={
              <Icon>
                <path d={mdiAccountCircleOutline} />
              </Icon>
            }
            onClick={() => {
              router.push('https://portal.sitecorecloud.io/profile');
            }}
          >
            Your account
          </MenuItem>
          <MenuDivider />
          {/* <MenuItem
            icon={
              <Icon>
                <path d={mdiInformationOutline} />
              </Icon>
            }
          >
            Custom action
          </MenuItem>
          <MenuItem
            icon={
              <Icon>
                <path d={mdiInformationOutline} />
              </Icon>
            }
          >
            Custom action
          </MenuItem> 
          <MenuDivider />*/}
          <MenuItem
            icon={
              <Icon>
                <path d={mdiLogout} />
              </Icon>
            }
            onClick={() => {
              router.push('/api/auth/signout');
            }}
          >
            Log out
          </MenuItem>
        </MenuList>
      </Menu>
    </Wrap>
  );
};

export default UserAccount;

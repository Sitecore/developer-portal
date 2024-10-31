import { UserProfile } from '@auth0/nextjs-auth0/client';
import { Avatar, Box, Icon, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip, Wrap } from '@chakra-ui/react';

import { mdiAccountCircleOutline, mdiLogin, mdiLogout } from '@mdi/js';
import { useRouter } from 'next/router';
import React from 'react';

interface UserAccountProps {
  userProfile: UserProfile | undefined;
}

const UserAccount: React.FC<UserAccountProps> = ({ userProfile }) => {
  const router = useRouter();

  if (!userProfile) {
    return (
      <IconButton
        as={Link}
        href={'/api/auth/login'}
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
        <Tooltip label={userProfile.email}>
          <MenuButton>
            <Avatar size="sm" name={userProfile.name || userProfile.nickname || ''} src={userProfile.picture || ''} />
          </MenuButton>
        </Tooltip>
        <MenuList>
          <Box px="3.5" py="2">
            <Text variant="strong">{userProfile.name}</Text>
            <Text variant="small">{userProfile.email}</Text>
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
              router.push('/api/auth/logout');
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

import { Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { mdiCircleHalfFull } from '@mdi/js';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant={'ghost'}
      size={'sm'}
      icon={
        <Icon color="neutral">
          <path d={mdiCircleHalfFull} />
        </Icon>
      }
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
    />
  );
};

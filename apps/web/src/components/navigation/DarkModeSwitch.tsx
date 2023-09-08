import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return <IconButton variant={'ghost'} size={'sm'} icon={isDark ? <SunIcon /> : <MoonIcon />} aria-label="Toggle Theme" onClick={toggleColorMode} />;
};

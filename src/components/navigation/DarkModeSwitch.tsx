'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@components/ui/button';
import { Icon } from '@mdi/react';
import { mdiCircleHalfFull } from '@mdi/js';

export const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="h-9 w-9 p-0"
    >
      <Icon path={mdiCircleHalfFull} size={1} className="text-neutral-600 dark:text-neutral-400" />
    </Button>
  );
};

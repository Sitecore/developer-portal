'use client';

import { useState } from 'react';
import { Button } from '@components/ui/button';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { ManifestConfig } from '@/src/lib/interfaces/manifest';
import { SidebarGroupItem } from './SidebarNavigation';
import { cn } from '@lib/utils';

export interface SidebarNavigationProps {
  title?: string;
  showSearch?: boolean;
  config: ManifestConfig;
}

export const DropDownNavigation = ({ config, ...rest }: SidebarNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden" {...rest}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full flex items-center justify-between"
      >
        {config.title}
        <Icon path={mdiChevronDown} size={1} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </Button>
      {isOpen && (
        <div className="relative">
          <ul className="flex flex-col gap-1 mt-2 w-full">
            {config.routes.map((link, i) => (
              <SidebarGroupItem {...link} key={i} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

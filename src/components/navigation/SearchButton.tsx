'use client';

import { useState } from 'react';
import { Button } from '@components/ui/button';
import { mdiClose, mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import { PreviewSearchInput, SearchInput } from '../integrations/sitecore-search';
import { cn } from '@lib/utils';

export const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="w-full">
          {/* Mobile version - below navigation bar */}
          <div className="md:hidden flex-1 p-3 w-full left-0 top-[50px] absolute bg-background shadow-md z-[999]">
            <SearchInput />
          </div>

          {/* Large Desktop - preview search below navigation bar */}
          <div className="hidden md:flex flex-1 p-3 w-full left-0 top-[50px] absolute bg-background shadow-md justify-center">
            <div className="flex w-full max-w-4xl">
              <PreviewSearchInput rfkId="rfkid_6" defaultItemsPerPage={6} width="full" />
            </div>
          </div>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="sm"
        className="mr-0"
        aria-label="Toggle the search box"
      >
        {!isOpen ? (
          <Icon path={mdiMagnify} size={1} className="text-muted-foreground" />
        ) : (
          <Icon path={mdiClose} size={1} className="text-muted-foreground" />
        )}
      </Button>
    </>
  );
};

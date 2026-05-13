/* eslint-disable no-unused-vars */

import { Icon } from '@/lib/icon';
import { mdiChevronDown } from '@mdi/js';
import type { SearchResponseSortChoice } from '@sitecore-search/react';
import { Button } from '@src/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@src/components/ui/dropdown-menu';
import { Check } from 'lucide-react';

export interface SearchSortType {
  onSortChange: (sortType: any) => void;
  sortChoices: Array<SearchResponseSortChoice>;
  sortType: string;
}

export const SearchSort = (props: SearchSortType) => {
  const { onSortChange, sortChoices, sortType } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Sort by:
          <Icon path={mdiChevronDown} size={1.3} className="opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {sortChoices.map((option) => (
          <DropdownMenuItem key={option.name} onClick={() => onSortChange(option)}>
            {sortType === option.name && <Check className="mr-2 h-4 w-4" />}
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

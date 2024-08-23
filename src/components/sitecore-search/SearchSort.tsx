/* eslint-disable no-unused-vars */
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { SearchResponseSortChoice } from '@sitecore-search/react';

export interface SearchSortType {
  onSortChange: (sortType: any) => void;
  sortChoices: SearchResponseSortChoice[];
  sortType: string;
}

export const SearchSort = (props: SearchSortType) => {
  const { onSortChange, sortChoices, sortType } = props;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Sorting by:
      </MenuButton>
      <MenuList onChange={() => onSortChange}>
        {sortChoices.map((option) => (
          <MenuItem icon={sortType == option.name ? <CheckIcon /> : undefined} key={option.name} value={option.name} onClick={() => onSortChange(option)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SearchSort;

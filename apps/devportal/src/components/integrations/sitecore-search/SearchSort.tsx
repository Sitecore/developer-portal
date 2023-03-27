import { SearchResponseSortChoice } from '@sitecore-discover/react';
import { SortSelect } from '@sitecore-discover/ui';

export interface SearchSortType {
  onSortChange: (sortType: any) => void;
  sortChoices: SearchResponseSortChoice[];
  sortType: string;
}

export const SearchSort = (props: SearchSortType) => {
  const { onSortChange, sortChoices, sortType } = props;
  const selectedSortIndex = sortChoices.findIndex((s) => s.name === sortType);

  return (
    <>
      <div>
        <label>Sorting by: </label>
      </div>
      <div>
        <SortSelect.Root defaultValue={sortChoices[selectedSortIndex]?.name} onValueChange={onSortChange}>
          <SortSelect.Trigger>
            <SortSelect.SelectValue>{selectedSortIndex > -1 ? sortChoices[selectedSortIndex].label : ''}</SortSelect.SelectValue>
            <SortSelect.Icon />
          </SortSelect.Trigger>
          <SortSelect.Content>
            <SortSelect.Viewport>
              {sortChoices.map((option) => (
                <SortSelect.Option value={option} key={option.name}>
                  <SortSelect.OptionText>{option.label}</SortSelect.OptionText>
                </SortSelect.Option>
              ))}
            </SortSelect.Viewport>
          </SortSelect.Content>
        </SortSelect.Root>
      </div>
    </>
  );
};

export default SearchSort;

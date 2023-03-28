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
      <div className="mr-4">
        <label>Sorting by: </label>
      </div>
      <div>
        <SortSelect.Root defaultValue={sortChoices[selectedSortIndex]?.name} onValueChange={onSortChange}>
          <SortSelect.Trigger asChild>
            <div className="testmva">
              <SortSelect.SelectValue>{selectedSortIndex > -1 ? sortChoices[selectedSortIndex].label : ''}</SortSelect.SelectValue>
              <SortSelect.Icon className="ml-8" />
            </div>
          </SortSelect.Trigger>
          <SortSelect.Content asChild>
            <div className="relative">
              <SortSelect.Viewport asChild>
                <div className="border-charcoal-light bg-theme-bg ml-2 border-2">
                  {sortChoices.map((option) => (
                    <SortSelect.Option value={option} key={option.name} asChild>
                      <div className="hover:bg-theme-bg-alt cursor-pointer px-4 py-2 text-sm hover:font-semibold">
                        <SortSelect.OptionText>{option.label}</SortSelect.OptionText>
                      </div>
                    </SortSelect.Option>
                  ))}
                </div>
              </SortSelect.Viewport>
            </div>
          </SortSelect.Content>
        </SortSelect.Root>
      </div>
    </>
  );
};

export default SearchSort;

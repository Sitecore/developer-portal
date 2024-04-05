/* eslint-disable no-unused-vars */
import { IsSearchEnabled } from '@lib/search';
import PreviewSearchInput from './PreviewSearchInput';
import SearchInput from './SearchInput';

enum SearchInputRenderMode {
  Disabled,
  SearchInput,
  PreviewSearchInput,
}

const Disabled = () => {
  return <div className="pt-3 text-sm font-semibold text-center text-red">Search disabled; please check environment variables to enable</div>;
};

const SearchInputSwitcher = () => {
  const renderMode: SearchInputRenderMode = !IsSearchEnabled() ? SearchInputRenderMode.Disabled : process.env.NEXT_PUBLIC_SEARCH_ENABLE_PREVIEW_SEARCH === 'true' ? SearchInputRenderMode.PreviewSearchInput : SearchInputRenderMode.SearchInput;

  return (
    <>
      {renderMode === SearchInputRenderMode.Disabled && <Disabled />}
      {renderMode === SearchInputRenderMode.SearchInput && <SearchInput />}
      {renderMode === SearchInputRenderMode.PreviewSearchInput && <PreviewSearchInput rfkId="rfkid_6" defaultItemsPerPage={6} />}
    </>
  );
};

export default SearchInputSwitcher;

import PreviewSearchInput from './PreviewSearchInput';
import SearchInput from './SearchInput';

enum SearchInputRenderMode {
  Disabled,
  SearchInput,
  PreviewSearchInput,
}

const Disabled = () => {
  return <div className="text-red pt-3 text-center text-sm font-semibold">Search disabled; please check environment variables to enable</div>;
};

const SearchInputSwitcher = () => {
  const renderMode: SearchInputRenderMode =
    !process.env.NEXT_PUBLIC_SEARCH_APP_ENV || !process.env.NEXT_PUBLIC_SEARCH_APP_CUSTOMER_KEY || !process.env.NEXT_PUBLIC_SEARCH_APP_API_KEY
      ? SearchInputRenderMode.Disabled
      : process.env.NEXT_PUBLIC_SEARCH_ENABLE_PREVIEW_SEARCH === 'true'
      ? SearchInputRenderMode.PreviewSearchInput
      : SearchInputRenderMode.SearchInput;

  return (
    <>
      {renderMode === SearchInputRenderMode.Disabled && <Disabled />}
      {renderMode === SearchInputRenderMode.SearchInput && <SearchInput />}
      {renderMode === SearchInputRenderMode.PreviewSearchInput && <PreviewSearchInput rfkId="rfkid_6" />}
    </>
  );
};

export default SearchInputSwitcher;

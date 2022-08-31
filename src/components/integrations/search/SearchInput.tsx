// Global
import { useId } from 'react-id-generator';
import { SearchBox, UrlManager } from '@coveo/headless';
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// Lib
import { searchBox } from '@/src/common/search/coveo-engine';

interface SearchInputProps {
  className?: TTailwindString;
  searchBox?: SearchBox;
  urlManager: UrlManager;
}

const SearchInput = ({ className, urlManager }: SearchInputProps) => {
  /**
   *  React hook for unique IDs using react-unique-id.
   *  Avoid generating new ID on every rerender.
   */
  const [idSeed] = useId(1, 'scdp-search');
  const searchId = idSeed;
  const inputId = `${idSeed}--search-input`;

  const [searchState, setSearchState] = useState(searchBox.state);
  const router = useRouter();

  const submit = (event: { preventDefault: () => void }) => {
    if (!router.asPath.startsWith('/search')) {
      urlManager.synchronize(`q=${searchBox.state.value}`);
      router.push({ hash: urlManager.state.fragment, pathname: '/search' });
    }
    event.preventDefault();
    searchBox.submit();
  };

  useEffect(() => {
    searchBox.subscribe(() => {
      setSearchState(searchBox.state);
    });

    return () => {
      searchBox.subscribe(() => {});
    };
  }, []);

  return (
    <form className={classnames(className)} id={searchId} onSubmit={submit}>
      <div className={classnames('relative', 'flex', 'items-center', 'w-full')}>
        <label className={classnames('sr-only')} htmlFor={inputId}>
          Search:
        </label>
        <span aria-hidden="true" className={classnames('absolute', 'left-4', 'z-20')}>
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1836415,15.8898446 L15.8898446,15.1836415 C16.0367185,15.0367676 16.0367185,14.7992609 15.8898446,14.6524176 L12.0962687,10.8588417 C12.0244033,10.7869763 11.9306579,10.749472 11.8306567,10.749472 L11.4182014,10.749472 C12.4025281,9.60890307 12.9993615,8.12460097 12.9993615,6.49968077 C12.9993615,2.90921991 10.0901416,0 6.49968077,0 C2.90921991,0 0,2.90921991 0,6.49968077 C0,10.0901416 2.90921991,12.9993615 6.49968077,12.9993615 C8.12460097,12.9993615 9.60890307,12.4025281 10.749472,11.4182014 L10.749472,11.8306567 C10.749472,11.9306579 10.7900889,12.0244033 10.8588417,12.0962687 L14.6524176,15.8898446 C14.7992609,16.0367185 15.0367676,16.0367185 15.1836415,15.8898446 Z M6.49968077,11.4994352 C3.73730424,11.4994352 1.49992633,9.26205731 1.49992633,6.49968077 C1.49992633,3.73730424 3.73730424,1.49992633 6.49968077,1.49992633 C9.26205731,1.49992633 11.4994352,3.73730424 11.4994352,6.49968077 C11.4994352,9.26205731 9.26205731,11.4994352 6.49968077,11.4994352 Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <input
          className={classnames(
            'border',
            'bg-theme-bg',
            'text-theme-text',
            'border-theme-border',
            'px-4',
            'pl-12',
            'py-2',
            'w-full',
            'text-sm',
            'rounded-sm',
            'z-10'
          )}
          name="scdp-search"
          id={inputId}
          type="text"
          value={searchState.value}
          placeholder="What are you looking for?"
          onChange={(event) => {
            searchBox.updateText(event.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default SearchInput;

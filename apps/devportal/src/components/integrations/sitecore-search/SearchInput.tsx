// Global
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface SearchInputProps {
  className?: string;
}

const SearchInput = ({ className }: SearchInputProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keywords, setKeywords] = useState(searchParams.get('q') ?? '');

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push('/search?q=' + keywords);
  };

  return (
    <form className={className} onSubmit={submit}>
      <div className="relative flex w-full flex-row items-center">
        <label className="sr-only">Search:</label>
        <span aria-hidden="true" className="absolute left-4 z-20">
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.1836415,15.8898446 L15.8898446,15.1836415 C16.0367185,15.0367676 16.0367185,14.7992609 15.8898446,14.6524176 L12.0962687,10.8588417 C12.0244033,10.7869763 11.9306579,10.749472 11.8306567,10.749472 L11.4182014,10.749472 C12.4025281,9.60890307 12.9993615,8.12460097 12.9993615,6.49968077 C12.9993615,2.90921991 10.0901416,0 6.49968077,0 C2.90921991,0 0,2.90921991 0,6.49968077 C0,10.0901416 2.90921991,12.9993615 6.49968077,12.9993615 C8.12460097,12.9993615 9.60890307,12.4025281 10.749472,11.4182014 L10.749472,11.8306567 C10.749472,11.9306579 10.7900889,12.0244033 10.8588417,12.0962687 L14.6524176,15.8898446 C14.7992609,16.0367185 15.0367676,16.0367185 15.1836415,15.8898446 Z M6.49968077,11.4994352 C3.73730424,11.4994352 1.49992633,9.26205731 1.49992633,6.49968077 C1.49992633,3.73730424 3.73730424,1.49992633 6.49968077,1.49992633 C9.26205731,1.49992633 11.4994352,3.73730424 11.4994352,6.49968077 C11.4994352,9.26205731 9.26205731,11.4994352 6.49968077,11.4994352 Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <input
          className="bg-theme-bg text-theme-text border-theme-border rounded-smz-10 w-full border px-4 py-2 pl-12 text-sm"
          name="scdp-search"
          id="txtSearch"
          type="text"
          value={keywords}
          placeholder="What are you looking for?"
          onChange={(event) => {
            setKeywords(event.target.value);
          }}
        />
        <span className="absolute right-4 z-20">
          <span className="text-sm"> Powered by </span>
          <Image src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/newnavigation/products/search-horizontal-color-black-txt.svg?md=20221012T213412Z" alt="Powered by" className="relative inline" width="70" height="30" />
        </span>
      </div>
    </form>
  );
};
SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;

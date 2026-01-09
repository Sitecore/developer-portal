import { Product } from '@/src/lib/assets';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useEngageTracker } from '..';
import { ProductLogo } from '../../ui/logos';
import { cn } from '@lib/utils';

export interface SearchInputProps {
  showButton?: boolean;
}

export const SearchInput = ({ showButton }: SearchInputProps) => {
  const tracker = useEngageTracker();
  const router = useRouter();
  const [keywords, setKeywords] = useState(router.query['q'] ?? '');

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Track search event
    tracker.TrackEvent('SEARCH', { keywords });

    router.push('/search?q=' + keywords).then(() => router.reload());
  };

  const inputBox = (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        <FaSearch />
      </div>
      <Input
        name="scdp-search"
        autoComplete="off"
        value={keywords}
        onChange={(event) => {
          setKeywords(event.target.value);
        }}
        className="pl-10 pr-[100px] md:pr-[150px] rounded-none"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-50 w-[100px] md:w-[150px]">
        <span className="hidden md:flex text-xs">Powered by</span>
        <ProductLogo product={Product.Search} width={67} height={18} />
      </div>
    </div>
  );

  if (showButton) {
    return (
      <form onSubmit={submit} className="w-full">
        <div className="flex gap-2">
          {inputBox}
          <Button type="submit" onClick={submit}>Search</Button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      {inputBox}
    </form>
  );
};

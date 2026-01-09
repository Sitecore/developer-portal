import Image from 'next/image';
import { Input } from '@components/ui/input';
import { Search } from 'lucide-react';

const NavBarSearch = () => {
  return (
    <div className="flex-1 flex justify-center p-3 px-8 static bg-background shadow-md">
      <div className="flex justify-center w-full max-w-6xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="What are you looking for?" className="pl-10 pr-[200px] rounded-none" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 w-[200px]">
            <span className="hidden sm:flex text-sm">Powered by</span>
            <Image src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-search" width={100} height={20} alt="Sitecore Search logo" className="opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarSearch;

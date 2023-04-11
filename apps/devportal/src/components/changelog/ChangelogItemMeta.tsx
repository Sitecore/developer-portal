import Link from 'next/link';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug, slugify } from 'sc-changelog/utils/stringUtils';
import ProductIcon from 'ui/components/common/ProductIcon';

type ChangelogItemMetaProps = {
  loading?: boolean;
  item: ChangelogEntry;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

export const ChangelogItemMeta = ({ item, loading }: ChangelogItemMetaProps) => {
  return (
    <div className="my-3 flex flex-row items-center space-x-3 text-gray-500 dark:text-gray-400">
      <div className="flex flex-row gap-5">
        <Link href={`/changelog/${getSlug(item.productName)}`} className="">
          <div className={` text-sm ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>
            {item.imageId && (
              <>
                <div className="absolute h-5 w-5 dark:hidden">
                  <ProductIcon product={item.imageId} variant="Light" className={`${loading ? 'hidden' : ''}`} width={20} height={20} />
                </div>
                <div className="absolute hidden h-5 w-5 dark:block">
                  <ProductIcon product={item.imageId} variant="Dark" className={`${loading ? 'hidden' : ''}`} width={20} height={20} />
                </div>
              </>
            )}
            <div className="ml-6 text-xs">{item.productName}</div>
          </div>
        </Link>
        <time className={`flex items-center justify-center text-xs  ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} dateTime="2022-10-21T15:48:00.000Z">
          {item.releaseDate}
        </time>
      </div>
      <div className="flex flex-row gap-5">
        <span className={`changetype bg-theme-bg-alt flex items-center justify-center text-xs ${loading ? 'w-12' && skeletonLoaderClasses : `rounded-md px-3 py-0.5 ${slugify(item.changeType[0].name)} `}`}>{item.changeType[0].name}</span>

        {item.breakingChange && (
          <div className={`border-red-dark text-red-dark flex items-center justify-center border text-center text-xs dark:border-white dark:text-white ${loading ? 'w-12' && skeletonLoaderClasses : 'rounded-md px-3 py-1'}`}>Breaking change</div>
        )}
      </div>
    </div>
  );
};

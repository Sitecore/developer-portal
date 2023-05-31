import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { slugify } from 'sc-changelog/utils/stringUtils';
import { Message, Type } from 'ui/components/common/Message';
import { ProductIcon } from './ProductIcon';

type ChangelogItemMetaProps = {
  loading?: boolean;
  item: ChangelogEntry;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

export const ChangelogItemMeta = ({ item, loading }: ChangelogItemMetaProps) => {
  console.log({ item });
  return (
    <div className="my-3 flex flex-row items-center space-x-3 text-gray-500 dark:text-gray-400">
      <div className="flex flex-row gap-5">
        {item.products != null ? item.products.map((product) => <ProductIcon product={product} isLoading={loading} />) : <Message type={Type.Error} plain={true} message="No product defined" />}

        <time className={`flex items-center justify-center text-xs  ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} dateTime="2022-10-21T15:48:00.000Z">
          {item.releaseDate}
        </time>
      </div>
      <div className="flex flex-row gap-5">
        {item.changeTypeName != null ? (
          <span className={`changetype bg-theme-bg-alt flex items-center justify-center text-xs ${loading ? 'w-12' && skeletonLoaderClasses : `rounded-md px-2 py-0 ${slugify(item.changeTypeName)} `}`}>{item.changeTypeName}</span>
        ) : (
          <Message type={Type.Error} plain={true} message="No changetype defined"></Message>
        )}
        {item.breakingChange && (
          <div className={`border-red-dark text-red-dark flex items-center justify-center border text-center text-xs dark:border-white dark:text-white ${loading ? 'w-12' && skeletonLoaderClasses : 'rounded-md px-3 py-1'}`}>Breaking change</div>
        )}
      </div>
    </div>
  );
};

import Image from 'next/image';
import ChangelogEntry from 'sc-changelog/types/changeLogEntry';
import ProductIcon from 'ui/components/common/ProductIcon';
import TextLink from 'ui/components/common/TextLink';

export type ChangeLogItemProps = {
  item: ChangelogEntry;
  loading: boolean;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

const ChangeLogItem = ({ item, loading }: ChangeLogItemProps): JSX.Element => {
  return (
    <div className=" bg-theme-bg mt-8 mb-16">
      <h2 className={`heading-sm ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>{item.title}</h2>

      {item.image.length > 0 && (
        <div className={`'w-12' relative my-4 h-40 w-full ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>
          <Image src={item.image[0].fileUrl} alt={item.title || ''} className={`relative z-10 ${loading ? 'hidden' : 'rounded-lg'}`} fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-5">
          <div className={`text-sm ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>
            {item.imageId && (
              <div className="absolute h-5 w-5">
                <ProductIcon product={item.imageId} variant="Light" className={`relative h-5 w-5 ${loading ? 'hidden' : ''}`} />
              </div>
            )}
            <div className="ml-6">{item.sitecoreProduct[0].name}</div>
          </div>
          <time className={`text-sm ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} dateTime="2022-10-21T15:48:00.000Z">
            {item.releaseDate}
          </time>
          <div>
            <span className={`bg-theme-bg-alt inline-block   text-sm ${loading ? 'w-12' && skeletonLoaderClasses : 'rounded-md px-3 py-1'}`}>{item.changeType[0].name}</span>
          </div>
        </div>
      </div>
      <div className={`my-3 ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} dangerouslySetInnerHTML={{ __html: item.description }} />
      <TextLink href="/" text="Read more" />
    </div>
  );
};

export default ChangeLogItem;

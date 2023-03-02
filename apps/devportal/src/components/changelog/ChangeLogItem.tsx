import { createChangelogEntryUrl } from '@/src/common/changelog';
import Image from 'next/image';
import Link from 'next/link';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import ProductIcon from 'ui/components/common/ProductIcon';
import TextLink from 'ui/components/common/TextLink';

export type ChangeLogItemProps = {
  item: ChangelogEntry;
};

const ChangeLogItem = ({ item }: ChangeLogItemProps): JSX.Element => {
  return (
    <div className=" bg-theme-bg mt-8 mb-16">
      <h2 className={`heading-sm font-bolder`}>
        <Link href={createChangelogEntryUrl(item)}>{item.title}</Link>
      </h2>
      <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-5">
          <div className={`text-sm`}>
            {item.imageId && (
              <>
                <div className="absolute h-5 w-5 dark:hidden">
                  <ProductIcon product={item.imageId} variant="Light" className={`relative h-5 w-5`} />
                </div>
                <div className="absolute hidden h-5 w-5 dark:block">
                  <ProductIcon product={item.imageId} variant="Dark" className={`relative h-5 w-5`} />
                </div>
              </>
            )}
            <div className="ml-6 text-xs">{item.sitecoreProduct[0].name}</div>
          </div>
          <time className={`text-xs`} dateTime="2022-10-21T15:48:00.000Z">
            {item.releaseDate}
          </time>
          <div>
            <span className={`bg-theme-bg-alt inline-block rounded-md px-3 py-1 text-xs`}>{item.changeType[0].name}</span>
          </div>
        </div>
      </div>
      {item.image.length > 0 && (
        <div className={`'w-12' relative my-4 h-40 w-full`}>
          <Image src={item.image[0].fileUrl} alt={item.title || ''} className={`relative z-10 rounded-lg`} fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
      )}

      <div className={`my-3 text-sm`} dangerouslySetInnerHTML={{ __html: item.description }} />
      <TextLink className="font-medium" href="/" text="Read more" />
    </div>
  );
};

export default ChangeLogItem;

import { getSlug, slugify } from '@/../../packages/sc-changelog/utils/stringUtils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import ProductIcon from 'ui/components/common/ProductIcon';
import TextLink from 'ui/components/common/TextLink';

export type ChangeLogItemProps = {
  item: ChangelogEntry;
  loading: boolean;
  isLast: boolean;
  loadEntries: () => void;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

const ChangeLogItem = ({ item, loading, loadEntries, isLast }: ChangeLogItemProps): JSX.Element => {
  const entryRef = useRef(null);
  /**
   * Implement Intersection Observer to check if the last item in the array is visible on the screen, then set a new limit
   */
  useEffect(() => {
    if (!entryRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        loadEntries();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(entryRef.current);
  }, [isLast]);

  return (
    <div className="changelog-item bg-theme-bg mt-8  mb-16" ref={entryRef}>
      <h2 className={`heading-sm font-bolder ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} id={getSlug(item.title)}>
        {item.title}
        <a className="anchor" title="Quick link to category" href={`#${getSlug(item.title)}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" display="inline">
            <use xlinkHref="#link-icon" href="#link-icon"></use>
          </svg>
        </a>
      </h2>
      <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-5">
          <Link href={`/changelog/${getSlug(item.productName)}`}>
            <div className={`text-sm ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>
              {item.imageId && (
                <>
                  <div className="absolute h-5 w-5 dark:hidden">
                    <ProductIcon product={item.imageId} variant="Light" className={`relative z-10 h-5 w-5 ${loading ? 'hidden' : ''}`} />
                  </div>
                  <div className="absolute hidden h-5 w-5 dark:block">
                    <ProductIcon product={item.imageId} variant="Dark" className={`relative h-5 w-5 ${loading ? 'hidden' : ''}`} />
                  </div>
                </>
              )}
              <div className="ml-6 text-xs">{item.productName}</div>
            </div>
          </Link>
          <time className={`text-xs ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} dateTime="2022-10-21T15:48:00.000Z">
            {item.releaseDate}
          </time>
          <div>
            <span className={`bg-theme-bg-alt ${slugify(item.changeType[0].name)} inline-block text-xs ${loading ? 'w-12' && skeletonLoaderClasses : 'rounded-md px-3 py-1'}`}>{item.changeType[0].name}</span>
          </div>
        </div>
      </div>
      {item.image.length > 0 && (
        <div className={`'w-12' relative my-4 h-40 w-full ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>
          <Image src={item.image[0].fileUrl} alt={item.title || ''} className={`relative z-10 ${loading ? 'hidden' : 'rounded-lg'}`} fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
      )}

      <div className={`prose dark:prose-invert my-3 text-sm ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} dangerouslySetInnerHTML={{ __html: item.description }} />
      <span className={`${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>{item.readMoreLink && <TextLink className="font-medium" href={item.readMoreLink} text="Read more" />}</span>
    </div>
  );
};

export default ChangeLogItem;

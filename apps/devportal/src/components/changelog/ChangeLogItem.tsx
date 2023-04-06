import { getSlug } from '@/../../packages/sc-changelog/utils/stringUtils';
import { getChangelogEntryUrl } from '@/src/common/changelog';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import TextLink from 'ui/components/common/TextLink';
import { ChangelogItemMeta } from './ChangelogItemMeta';

export type ChangeLogItemProps = {
  item: ChangelogEntry;
  loading: boolean;
  isLast: boolean;
  isMore?: boolean;
  loadEntries: () => void;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

const ChangeLogItem = ({ item, loading, loadEntries, isLast, isMore }: ChangeLogItemProps): JSX.Element => {
  const entryRef = useRef(null);
  /**
   * Implement Intersection Observer to check if the last item in the array is visible on the screen, then set a new limit
   */
  useEffect(() => {
    if (!entryRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting && isMore) {
        loadEntries();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(entryRef.current);
  }, [isLast]);

  return (
    <div className="changelog-item bg-theme-bg mt-8 mb-16" ref={entryRef}>
      <h2 className={`heading-sm font-bolder hover:text-violet dark:hover:text-teal hover:underline ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} id={getSlug(item.title)}>
        <a href={getChangelogEntryUrl(item)} title={item.title}>
          {item.title}
        </a>
      </h2>

      <ChangelogItemMeta item={item} loading={loading} />

      {item.image.length > 0 && (
        <div className={`mb-4  ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>
          <Image src={`${item.image[0].fileUrl}?transform=true&width=670&fit=cover&gravity=auto`} alt={item.title || ''} priority className={`${loading ? 'hidden' : 'rounded-lg'}`} width={670} height={100} />
        </div>
      )}

      <div className={`prose prose-xl dark:prose-invert my-3 text-sm ${loading ? skeletonLoaderClasses : ''}`} dangerouslySetInnerHTML={{ __html: item.description }} />
      <span className={`${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>{item.readMoreLink && <TextLink className="font-medium" href={item.readMoreLink} text="Read more" title={`Read more about ${item.title}`} />}</span>
    </div>
  );
};

export default ChangeLogItem;

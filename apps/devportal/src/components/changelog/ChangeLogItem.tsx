import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';
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
  const [showModal, setShowModal] = useState(false);
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
    <div className="changelog-item bg-theme-bg mb-16 mt-8" ref={entryRef}>
      <h2 className={`heading-sm font-bolder hover:text-violet dark:hover:text-teal hover:underline ${loading ? 'w-12' && skeletonLoaderClasses : ''}`} id={getSlug(item.title)}>
        <Link href={getChangelogEntryUrl(item)} title={item.title}>
          {item.title}
        </Link>
      </h2>

      <ChangelogItemMeta item={item} loading={loading} />

      {item.image.length > 0 && (
        <>
          <div className={`mb-4  ${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>
            <Image
              src={`${item.image[0].fileUrl}?transform=true&width=670&fit=cover&gravity=auto`}
              alt={item.title || ''}
              priority
              className={`${loading ? 'hidden' : 'cursor-pointer rounded-lg'}`}
              width={670}
              height={100}
              onClick={() => setShowModal(true)}
            />
          </div>

          {showModal ? (
            <div className="fixed inset-0 z-50 overflow-y-auto ">
              <div className="fixed inset-0 h-full w-full cursor-pointer backdrop-blur-sm " onClick={() => setShowModal(false)}>
                <div className="flex h-screen items-center justify-center drop-shadow-xl ">
                  <Image src={`${item.image[0].fileUrl}`} alt={item.title || ''} width={item.image[0].fileWidth} height={item.image[0].fileHeight} className="rounded-lg" />
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}

      <div className={`prose dark:prose-invert prose-table:mt-0 my-3 max-w-none text-sm ${loading ? skeletonLoaderClasses : ''}`} dangerouslySetInnerHTML={{ __html: item.description }} />
      <span className={`${loading ? 'w-12' && skeletonLoaderClasses : ''}`}>{item.readMoreLink && <TextLink className="font-medium" href={item.readMoreLink} text="Read more" title={`Read more about ${item.title}`} />}</span>
    </div>
  );
};

export default ChangeLogItem;

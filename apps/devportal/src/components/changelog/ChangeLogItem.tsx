import Image from 'next/image';
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
  const [imgLoading, setImgLoading] = useState(false);

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
        <a href={getChangelogEntryUrl(item)} title={item.title}>
          {item.title}
        </a>
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
                  {imgLoading && (
                    <div role="status" className="position-center relative mt-16 text-center align-middle">
                      <svg aria-hidden="true" className="fill-primary-500 mr-2 inline h-8 w-8 animate-spin text-white dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span>Loading...</span>
                    </div>
                  )}

                  <Image
                    src={`${item.image[0].fileUrl}`}
                    alt={item.title || ''}
                    width={item.image[0].fileWidth}
                    height={item.image[0].fileHeight}
                    className="rounded-lg"
                    onLoad={() => setImgLoading(true)}
                    onLoadingComplete={() => setImgLoading(false)}
                  />
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

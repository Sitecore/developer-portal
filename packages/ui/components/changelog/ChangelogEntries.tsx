import Image from 'next/image';
import Link from 'next/link';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug, slugify } from 'sc-changelog/utils/stringUtils';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';
import FeedHeading from 'ui/components/headings/FeedHeading';

type ChangelogEntriesProps = {
  content: ChangelogEntry[];
  className?: string;
  title?: string;
  linkHref?: string;
  linkText?: string;
  columns?: number;
  headingClass?: string;
};

const ChangelogEntries = ({ content, title, linkHref, linkText, className, headingClass, columns }: ChangelogEntriesProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  // Full response
  return (
    <div className={`${className} changelog-item`}>
      <FeedHeading
        title={title != null ? title : 'Sitecore Changelog'}
        link={{
          href: linkHref != null ? linkHref : '/changelog',
          title: linkText != null ? linkText : 'See all changes',
          openInNewTab: false,
        }}
        headingClass={headingClass}
      />
      <ul className={`grid gap-4 ${columns == null ? 'md:grid-cols-1' : `md:grid-cols-${columns}`}`}>
        {content.map((entry) => (
          <li key={entry.id}>
            <div className="flex items-start">
              <div className={`border-theme-border mr-4 border p-2 text-center text-sm hover:underline`}>
                <div className="h-8 w-8 dark:hidden ">
                  <Image src={entry.lightIcon} alt={entry.productName ? entry.productName : 'Product icon'} width={30} height={30} priority={true} className="inline" />
                </div>
                <div className="hidden h-8 w-8 dark:block">
                  <Image src={entry.darkIcon} alt={entry.productName ? entry.productName : 'Product icon'} width={30} height={30} priority={true} className="inline" />
                </div>
              </div>
              {/*<DateIcon date={entry.releaseDate} type="calendar" /> */}
              <div>
                <span className={`hover:text-violet dark:hover:text-teal line-clamp-1 font-semibold hover:underline`} id={getSlug(entry.title)}>
                  <Link href={getChangelogEntryUrl(entry)} title={entry.title}>
                    {entry.title}
                  </Link>
                </span>
                <div className="my-1 flex flex-row items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex flex-row gap-5">{new Date(entry.releaseDate).toLocaleString('en-US', { dateStyle: 'medium' })}</div>
                  <div className="flex flex-row gap-5">
                    {entry.products != null
                      ? entry.products.map((product, key) => (
                          <Link href={`/changelog/${getSlug(product.productName)}`} className="" key={key}>
                            <div className={` text-sm hover:underline`}>
                              <div className="text-xs">{product.productName}</div>
                            </div>
                          </Link>
                        ))
                      : ''}
                  </div>
                  <div className="flex flex-row gap-5">
                    {entry.changeTypeName != null ? <span className={`changetype bg-theme-bg-alt flex items-center justify-center rounded-md px-2 py-0 text-xs ${slugify(entry.changeTypeName)} `}>{entry.changeTypeName}</span> : ''}
                    {entry.breakingChange && <div className={`border-red-dark text-red-dark py-1'} flex items-center justify-center rounded-md border px-3 text-center text-xs dark:border-white dark:text-white`}>Breaking change</div>}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ChangelogEntries.defaultProps = {
  className: '',
};

export default ChangelogEntries;

import Image from 'next/image';
import Link from 'next/link';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug, slugify } from 'sc-changelog/utils/stringUtils';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';
import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import FeedHeading from 'ui/components/headings/FeedHeading';

type ChangelogEntriesProps = {
  content: ChangelogEntry[];
  className?: string;
  title?: string;
  linkHref?: string;
  linkText: string;
  headingLevel?: ValidHeadingLevels;
};

const ChangelogEntries = ({ content, title, linkHref, linkText, className }: ChangelogEntriesProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  // Full response
  return (
    <div className={className}>
      <FeedHeading
        title={title != null ? title : 'The Latest on Sitecore Changelog'}
        link={{
          href: linkHref != null ? linkHref : '/changelog',
          title: linkText != null ? linkText : 'See all changes',
        }}
      />
      <ul className="grid gap-10 md:grid-cols-1">
        {content.map((entry) => (
          <li key={entry.id}>
            <div className="flex items-start">
              <div className="bg-theme-bg-alt text-theme-text border-theme-border-alt bg-primary mr-4 border p-2 text-center leading-tight">
                <time className={`flex items-center justify-center text-xs`} dateTime="2022-10-21T15:48:00.000Z">
                  {new Date(entry.releaseDate).toLocaleString('en-US', { month: 'long' })}
                  <br />
                  {new Date(entry.releaseDate).getFullYear()}
                </time>
              </div>
              <div>
                <span className={`hover:text-violet dark:hover:text-teal font-semibold hover:underline`} id={getSlug(entry.title)}>
                  <Link href={getChangelogEntryUrl(entry)} title={entry.title}>
                    {entry.title}
                  </Link>
                </span>
                <div className="my-1 flex flex-row items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <div className="flex flex-row gap-5">
                    {entry.products != null
                      ? entry.products.map((product, key) => (
                          <Link href={`/changelog/${getSlug(product.productName)}`} className="" key={key}>
                            <div className={` text-sm hover:underline`}>
                              <div className="absolute h-5 w-5 dark:hidden ">
                                <Image src={product.lightIcon} alt={product.productName} width={20} height={20} priority={true} />
                              </div>
                              <div className="absolute hidden h-5 w-5 dark:block">
                                <Image src={product.darkIcon} alt={product.productName} width={20} height={20} priority={true} />
                              </div>
                              <div className="ml-6 text-xs">{product.productName}</div>
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

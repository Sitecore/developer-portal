// Global
// Interfaces
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder'; // Components
import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import FeedHeading from 'ui/components/headings/FeedHeading';

type ChangelogEntriesProps = {
  content: ChangelogEntry[];
  className?: string;
  headingLevel?: ValidHeadingLevels;
};

const ChangelogEntries = ({ content, className }: ChangelogEntriesProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  // Full response
  return (
    <div className={className}>
      <FeedHeading
        title="The Latest on Sitecore Changelog"
        link={{
          href: '/changelog',
          title: 'See all changes',
        }}
      />
      <ul className="grid gap-10 md:grid-cols-2">
        {content.map((entry) => (
          <li key={entry.id}>
            <div className="flex items-start">
              <div className="bg-theme-bg-alt text-theme-text border-theme-border-alt mr-4 border p-2 text-center leading-tight">
                <span className="block text-base">{entry.lightIcon}</span>
              </div>
              <div>
                <a href={getChangelogEntryUrl(entry)} target="_blank" rel="noreferrer noopener" className="inline-block font-semibold hover:underline">
                  <span dangerouslySetInnerHTML={{ __html: entry.title }} />
                  <span className="sr-only">Opens in a new tab</span>
                </a>
                {entry.changeType.length && (
                  <div className="mt-2">
                    <p className="sr-only">Type:</p>
                    <ul className="flex flex-wrap">
                      {entry.products?.map((product) => (
                        <li key={`${product.id}-${product.productName}}`}>
                          <a
                            href={`/changelog/${product.productName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-violet-dark hover:border-violet-dark hover:text-primary-500 2xl:transition-color bg-primary-700 focus:bg-primary-500 dark:bg-primary-700 mb-2 mr-2 inline-block border p-1 text-xs text-white hover:bg-white focus:text-white dark:text-white"
                          >
                            {product.productName}
                            <span className="sr-only">Opens in a new tab</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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

// Global
// Interfaces
import { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
import type { StackExchangeQuestion } from '@/src/interfaces/integrations';
// Components
import FeedHeading from '@/src/components/common/FeedHeading';

type StackExchangeFeedProps = {
  content: StackExchangeQuestion[];
  className?: string;
  headingLevel?: ValidHeadingLevels;
};

const StackExchangeFeed = ({ content, className }: StackExchangeFeedProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  // Full response
  return (
    <div className={className}>
      <FeedHeading
        title="The Latest on Sitecore StackExchange"
        link={{
          href: 'https://sitecore.stackexchange.com/',
          title: 'See all questions on StackExchange',
        }}
      />
      <ul className="grid gap-10 md:grid-cols-2">
        {content.map((question) => (
          <li key={question.question_id}>
            <div className="flex items-start">
              <div className="p-2 mr-4 leading-tight text-center border bg-theme-bg-alt text-theme-text border-theme-border-alt">
                <span className="block text-base">{question.view_count}</span>
                <span className="block text-2xs">Views</span>
              </div>
              <div>
                <a
                  href={question.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block font-semibold hover:underline"
                >
                  <span dangerouslySetInnerHTML={{ __html: question.title }} />
                  <span className="sr-only">Opens in a new tab</span>
                </a>
                {question.tags.length && (
                  <div className="mt-2">
                    <p className="sr-only">Tags:</p>
                    <ul className="flex flex-wrap">
                      {question.tags.map((tag) => (
                        <li key={`${question.question_id}-${tag}}`}>
                          <a
                            href={`https://sitecore.stackexchange.com/questions/tagged/${tag}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-1 mb-2 mr-2 text-xs text-white border border-violet-dark bg-violet-dark hover:bg-white hover:border-violet-dark hover:text-violet focus:bg-violet focus:text-white dark:bg-violet-dark dark:text-white 2xl:transition-color"
                          >
                            {tag}
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

StackExchangeFeed.defaultProps = {
  className: '',
};

export default StackExchangeFeed;

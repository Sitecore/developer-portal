// Global
// Interfaces
import type { StackExchangeQuestion } from '@/src/interfaces/integrations';
import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
// Components
import FeedHeading from 'ui/components/headings/FeedHeading';

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
              <div className="bg-theme-bg-alt text-theme-text border-theme-border-alt mr-4 border p-2 text-center leading-tight">
                <span className="block text-base">{question.view_count}</span>
                <span className="text-2xs block">Views</span>
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
                            className="border-violet-dark bg-violet-dark hover:border-violet-dark hover:text-violet focus:bg-violet dark:bg-violet-dark 2xl:transition-color mb-2 mr-2 inline-block border p-1 text-xs text-white hover:bg-white focus:text-white dark:text-white"
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

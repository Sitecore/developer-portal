// Global
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
// Interfaces
import type { StackExchangeQuestion } from '@/interfaces/integrations';
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import FeedHeading from '@/components/helper/FeedHeading';

type StackExchangeFeedProps = {
  content: StackExchangeQuestion[];
  className?: TTailwindString;
  headingLevel?: ValidHeadingLevels;
};

const StackExchangeFeed = ({
  content,
  className,
  headingLevel,
}: StackExchangeFeedProps): JSX.Element => {
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
      <ul className={classnames('grid', 'md:grid-cols-2', 'gap-10')}>
        {content.map((question) => (
          <li key={question.question_id}>
            <div className={classnames('flex', 'items-start')}>
              <div
                className={classnames(
                  'text-center',
                  'bg-theme-bg-alt',
                  'text-theme-text',
                  'p-2',
                  'leading-tight',
                  'mr-4',
                  'border',
                  'border-theme-border-alt'
                )}
              >
                <span className={classnames('block', 'text-base')}>{question.view_count}</span>
                <span className={classnames('block', 'text-2xs')}>Views</span>
              </div>
              <div>
                <a
                  href={question.link}
                  target="_blank"
                  className={classnames('font-semibold', 'hover:underline', 'inline-block')}
                >
                  <span dangerouslySetInnerHTML={{ __html: question.title }} />
                  <span className="sr-only">Opens in a new tab</span>
                </a>
                {question.tags.length && (
                  <div className={classnames('mt-2')}>
                    <p className="sr-only">Tags:</p>
                    <ul className={classnames('flex', 'flex-wrap')}>
                      {question.tags.map((tag) => (
                        <li key={`${question.question_id}-${tag}}`}>
                          <a
                            href={`https://sitecore.stackexchange.com/questions/tagged/${tag}`}
                            target="_blank"
                            className={classnames(
                              'bg-teal-light',
                              'text-teal',
                              'text-xs',
                              'p-1',
                              'mr-2',
                              'mb-2',
                              'inline-block',
                              'hover:bg-teal',
                              'hover:text-white',
                              'focus:bg-teal',
                              'focus:text-white',
                              'dark:bg-teal-dark',
                              'dark:text-teal-light',
                              '2xl:transition-colors'
                            )}
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

export default StackExchangeFeed;

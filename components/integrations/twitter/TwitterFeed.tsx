// Global
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { Tweet } from '@/interfaces/integrations';
import type { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import TextLink from '@/components/helper/TextLink';

type TwitterFeedProps = {
  content?: Tweet[];
  handle?: string;
  headingLevel?: ValidHeadingLevels;
};

const TwitterFeed = ({ content, handle, headingLevel = 'h2' }: TwitterFeedProps): JSX.Element => {
  if (!content || content.length==0 || !handle) {
    return <></>;
  }

  return (
    <div>
      <div className={classnames('mb-8', 'justify-between', 'md:flex', 'md:items-end')}>
        <DynamicTag
          tag={headingLevel}
          className={classnames('heading-md', 'mb-4', 'mr-4', 'md:mb-0')}
        >
          The Latest from {handle}
        </DynamicTag>
        <TextLink
          href={`https://twitter.com/${handle.substring(1, handle.length)}`}
          text="See more on Twitter"
          target="_blank"
          className={classnames('ml-auto')}
        />
      </div>
      <ul className={classnames('grid', 'gap-6', 'md:grid-cols-3')}>
        {content.map((tweet) => (
          <li key={tweet.id} className={classnames('block', '-mt-2', '-mb-2')}>
            <TwitterTweetEmbed
              tweetId={tweet.id}
              options={{ cards: 'hidden' }}
              placeholder={
                <div
                  className={classnames(
                    'w-full',
                    'aspect-w-3',
                    'aspect-h-4',
                    'bg-gray-lightest',
                    'rounded-lg'
                  )}
                ></div>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterFeed;

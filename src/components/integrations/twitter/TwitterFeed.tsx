// Global
import { TwitterTweetEmbed } from 'react-twitter-embed';
// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
import type { Tweet } from '@/src/interfaces/integrations';
// Components
import DynamicTag from '@/src/components/common/DynamicTag';
import TextLink from '@/src/components/common/TextLink';

type TwitterFeedProps = {
  content?: Tweet[];
  handle?: string;
  headingLevel?: ValidHeadingLevels;
};

const TwitterFeed = ({ content, handle, headingLevel = 'h2' }: TwitterFeedProps): JSX.Element => {
  if (!content || content.length == 0 || !handle) {
    return <></>;
  }

  return (
    <div>
      <div className="justify-between mb-8 md:flex md:items-end">
        <DynamicTag tag={headingLevel} className="mb-4 mr-4 heading-md md:mb-0">
          The Latest from {handle}
        </DynamicTag>
        <TextLink
          href={`https://twitter.com/${handle.substring(1, handle.length)}`}
          text="See more on Twitter"
          target="_blank"
          className="ml-auto"
        />
      </div>
      <ul className="grid gap-6 md:grid-cols-3">
        {content.map((tweet) => (
          <li key={tweet.id} className="block -mt-2 -mb-2">
            <TwitterTweetEmbed
              tweetId={tweet.id}
              options={{ cards: 'hidden' }}
              placeholder={
                <div className="w-full rounded-lg aspect-w-3 aspect-h-4 bg-gray-lightest"></div>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterFeed;

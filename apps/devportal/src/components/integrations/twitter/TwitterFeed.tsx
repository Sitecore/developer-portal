// Global
import { TwitterTweetEmbed } from 'react-twitter-embed';
// Interfaces
import type { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import type { Tweet } from 'ui/common/types/twitter';
// Components
import DynamicTag from 'ui/components/common/DynamicTag';
import TextLink from 'ui/components/common/TextLink';

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
      <div className="mb-8 justify-between md:flex md:items-end">
        <DynamicTag tag={headingLevel} className="heading-md mb-4 mr-4 md:mb-0">
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
          <li key={tweet.id} className="-mt-2 -mb-2 block">
            <TwitterTweetEmbed
              tweetId={tweet.id}
              options={{ cards: 'hidden' }}
              placeholder={
                <div className="aspect-w-3 aspect-h-4 bg-gray-lightest w-full rounded-lg"></div>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterFeed;

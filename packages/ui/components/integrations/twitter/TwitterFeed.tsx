import { Heading } from '@chakra-ui/react';
import TwitterTweetEmbed from 'react-twitter-embed';
import { TextLink } from '../../links/TextLink';
import { Tweet } from './twitter';

type TwitterFeedProps = {
  content?: Tweet[];
  handle?: string;
};

export const TwitterFeed = ({ content, handle }: TwitterFeedProps): JSX.Element => {
  if (!content || content.length == 0 || !handle) {
    return <></>;
  }

  return (
    <div>
      <div className="justify-between mb-8 md:flex md:items-end">
        <Heading as="h2">The Latest from {handle}</Heading>
        <TextLink href={`https://twitter.com/${handle.substring(1, handle.length)}`} text="See more on Twitter" target="_blank" className="ml-auto" />
      </div>
      <ul className="grid gap-6 md:grid-cols-3">
        {content.map((tweet) => (
          <li key={tweet.id} className="block -mt-2 -mb-2">
            <TwitterTweetEmbed tweetId={tweet.id} options={{ cards: 'hidden' }} placeholder={<div className="w-full rounded-lg aspect-w-3 aspect-h-4 bg-gray-lightest"></div>} />
          </li>
        ))}
      </ul>
    </div>
  );
};

import Script from 'next/script';

type TwitterFeedProps = {
  args?: string | string[];
};

const getFirstViableArg = (args: string[]): string => {
  for (let i = 0; i < args.length; i++) {
    if (!args[i].startsWith('#')) {
      return args[i];
    }
  }
  // None are viable, return the first hashtag and error handling will catch immediately following
  return args[0];
};

const TwitterFeed = ({ args }: TwitterFeedProps): JSX.Element => {
  let handle = !!args && !Array.isArray(args) ? args : '';
  if (Array.isArray(args)) {
    if (args.length > 1) {
      console.warn(
        "TwitterFeed uses Twitter's default widget API which does not support multiple arguments at this time. Only tweets for the first profile or handle will be shown."
      );
    }
    handle = getFirstViableArg(args);
  }

  if (!handle) {
    return <></>;
  }

  if (handle.startsWith('#')) {
    console.warn(
      "TwitterFeed uses Twitter's default widget API which doesn't support feeds from hashtags at this time. This component will be hidden."
    );
    return <></>;
  }

  return (
    <>
      <a className="twitter-timeline" href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}>
        Tweets by {handle}
      </a>
      <Script src="https://platform.twitter.com/widgets.js" />
    </>
  );
};

export default TwitterFeed;

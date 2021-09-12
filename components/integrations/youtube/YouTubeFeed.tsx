import { YouTubeVideo } from '@/interfaces/integrations';

type YouTubeFeedProps = {
  content: YouTubeVideo[];
};

const YouTubeFeed = ({ content }: YouTubeFeedProps): JSX.Element => {
  return <div>YouTube</div>;
};

export default YouTubeFeed;

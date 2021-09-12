import { Tweet } from '@/interfaces/integrations';

type TwitterFeedProps = {
  content: Tweet[];
};

export default function TwitterFeed({ content }: TwitterFeedProps) {
  return <div>Twitter</div>;
}

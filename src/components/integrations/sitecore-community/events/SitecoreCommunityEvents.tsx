// Interfaces
import type { SitecoreCommunityEvent } from '@/src/interfaces/integrations';
// Global
// Components
import FeedHeading from '@/src/components/common/FeedHeading';
import SitecoreCommunityNewsOrEventItem from '../SitecoreCommunityNewsOrEventItem';

type SitecoreCommunityEventsProps = {
  content?: SitecoreCommunityEvent[];
};

const SitecoreCommunityEvents = ({ content }: SitecoreCommunityEventsProps): JSX.Element => {
  if (!content || content.length === 0) {
    return <></>;
  }

  return (
    <>
      <FeedHeading
        title="Events"
        link={{
          href: 'https://community.sitecore.com/community?id=community_forum&sys_id=7a84272f1b313c10486a4083b24bcbd5',
          title: 'See all',
        }}
      />
      <ul className="grid gap-8 md:grid-cols-3">
        {content.map((event, i) => (
          <SitecoreCommunityNewsOrEventItem {...event} categoryTitle="Event" key={i} />
        ))}
      </ul>
    </>
  );
};

export default SitecoreCommunityEvents;

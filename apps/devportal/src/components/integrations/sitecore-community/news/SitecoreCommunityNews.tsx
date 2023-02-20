// Global
// Components
import FeedHeading from 'ui/components/headings/FeedHeading';
// Local
import { SitecoreCommunityContent } from '@/src/interfaces/integrations';
import SitecoreCommunityNewsOrEventItem from '../SitecoreCommunityNewsOrEventItem';

type SitecoreCommunityNewsProps = {
  content?: SitecoreCommunityContent[];
};

const SitecoreCommunityNews = ({ content }: SitecoreCommunityNewsProps): JSX.Element => {
  if (!content || content.length === 0) {
    return <></>;
  }

  return (
    <>
      <FeedHeading
        title="News and Announcements"
        link={{
          href: 'https://community.sitecore.com/community?id=community_forum&sys_id=af85dddf1bf17810486a4083b24bcb00',
          title: 'See all',
        }}
      />
      <ul className="grid gap-8 md:grid-cols-3">
        {content.map((item, i) => (
          <SitecoreCommunityNewsOrEventItem
            {...item}
            startDate={item.publishDate}
            categoryTitle="News and Announcements"
            key={i}
          />
        ))}
      </ul>
    </>
  );
};

export default SitecoreCommunityNews;

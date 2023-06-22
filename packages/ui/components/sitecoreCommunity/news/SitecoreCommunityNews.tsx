// Global
// Components
import FeedHeading from 'ui/components/headings/FeedHeading';
// Local
import { SitecoreCommunityContent } from 'ui/common/types/sitecoreCommunity';
import SitecoreCommunityNewsOrEventItem, { SitecoreCommunityNewsOrEventItemSidebar } from '../SitecoreCommunityNewsOrEventItem';

type SitecoreCommunityNewsProps = {
  title?: string;
  content?: SitecoreCommunityContent[];
  columns?: number;
  className?: string;
  headingClass?: string;
  hideCategory?: boolean;
  listItem?: boolean;
};

const SitecoreCommunityNews = ({ title, content, columns, className, headingClass, hideCategory, listItem }: SitecoreCommunityNewsProps): JSX.Element => {
  if (!content || content.length === 0) {
    return <></>;
  }

  return (
    <div className={className}>
      <FeedHeading
        title={title ? title : 'News and Announcements'}
        link={{
          href: 'https://community.sitecore.com/community?id=community_forum&sys_id=af85dddf1bf17810486a4083b24bcb00',
          title: 'See all',
        }}
        headingClass={headingClass}
      />
      <ul className={`grid gap-8 ${columns ? `md:grid-cols-${columns}` : 'md:grid-cols-3'} `}>
        {content.map((item, i) =>
          listItem ? (
            <SitecoreCommunityNewsOrEventItemSidebar {...item} startDate={item.publishDate} key={i} />
          ) : (
            <SitecoreCommunityNewsOrEventItem {...item} startDate={item.publishDate} categoryTitle={!hideCategory ? 'News and Announcements' : undefined} key={i} />
          )
        )}
      </ul>
    </div>
  );
};

export default SitecoreCommunityNews;
